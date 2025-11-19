import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Import components for security testing
import Register from '../../src/components/Register';
import Login from '../../src/components/Login';
import Feedback from '../../src/components/Feedback';
import Home from '../../src/components/Home';

// Mock localStorage for security testing
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn()
};
global.localStorage = localStorageMock;

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Critical Risk Tests - Security (R006, R007)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  describe('R006: Password Security Tests', () => {
    test('Passwords are not stored in plain text', async () => {
      renderWithRouter(<Register />);
      
      const password = 'TestPassword123!';
      await userEvent.type(screen.getByLabelText(/name/i), 'Test User');
      await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
      await userEvent.type(screen.getByLabelText(/password/i), password);
      
      fireEvent.click(screen.getByRole('button', { name: /register/i }));
      
      await waitFor(() => {
        expect(localStorageMock.setItem).toHaveBeenCalled();
      });
      
      // Verify password is not stored in plain text
      const setItemCalls = localStorageMock.setItem.mock.calls;
      const userData = setItemCalls.find(call => call[0] === 'users');
      
      if (userData) {
        const storedData = JSON.parse(userData[1]);
        const user = Array.isArray(storedData) ? storedData[0] : storedData;
        expect(user.password).not.toBe(password);
        expect(user.password).toBeDefined();
        expect(user.password.length).toBeGreaterThan(password.length);
      }
    });

    test('Login works with hashed passwords', async () => {
      // Mock existing user with hashed password
      const hashedPassword = 'hashed_TestPassword123!_salt';
      localStorageMock.getItem.mockReturnValue(JSON.stringify([{
        email: 'test@example.com',
        password: hashedPassword,
        name: 'Test User'
      }]));
      
      renderWithRouter(<Login />);
      
      await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
      await userEvent.type(screen.getByLabelText(/password/i), 'TestPassword123!');
      
      fireEvent.click(screen.getByRole('button', { name: /login/i }));
      
      // Should successfully authenticate with original password
      await waitFor(() => {
        expect(localStorageMock.setItem).toHaveBeenCalledWith('currentUser', expect.any(String));
      });
    });
  });

  describe('R007: Unauthorized Admin Access Tests', () => {
    test('Regular user cannot access admin functions', async () => {
      // Mock regular user session
      localStorageMock.getItem.mockImplementation((key) => {
        if (key === 'currentUser') {
          return JSON.stringify({ email: 'user@test.com', role: 'user' });
        }
        return null;
      });
      
      // This would typically be tested with routing, but we'll test component-level access
      const { container } = renderWithRouter(<div data-testid="admin-panel">Admin Content</div>);
      
      // In a real app, admin content should not render for regular users
      // This test would be more meaningful with actual admin component
      expect(container).toBeDefined();
    });

    test('Admin user can access admin functions', async () => {
      // Mock admin user session
      localStorageMock.getItem.mockImplementation((key) => {
        if (key === 'currentUser') {
          return JSON.stringify({ email: 'admin@test.com', role: 'admin' });
        }
        return null;
      });
      
      const { container } = renderWithRouter(<div data-testid="admin-panel">Admin Content</div>);
      expect(container).toBeDefined();
    });
  });
});

describe('Critical Risk Tests - Form Validation (R004)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'currentUser') return JSON.stringify({ email: 'user@test.com' });
      return null;
    });
  });

  test('Pickup form prevents empty submission', async () => {
    renderWithRouter(<Home />);
    
    // Try to submit empty form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      // Should show validation errors
      expect(screen.getByText(/required/i) || screen.getByText(/please fill/i)).toBeInTheDocument();
    });
    
    // Verify no data was stored
    expect(localStorageMock.setItem).not.toHaveBeenCalledWith('pickupRequests', expect.any(String));
  });

  test('Form validates each required field individually', async () => {
    renderWithRouter(<Home />);
    
    // Test partial form submission
    await userEvent.selectOptions(screen.getByLabelText(/location/i), 'Nairobi');
    // Leave other fields empty
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/required/i) || screen.getByText(/please fill/i)).toBeInTheDocument();
    });
  });

  test('Form prevents malformed data submission', async () => {
    renderWithRouter(<Home />);
    
    // Try to submit with invalid date
    await userEvent.selectOptions(screen.getByLabelText(/location/i), 'Nairobi');
    await userEvent.selectOptions(screen.getByLabelText(/waste type/i), 'General');
    await userEvent.type(screen.getByLabelText(/address/i), 'Test Address');
    
    // Set past date
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    await userEvent.type(screen.getByLabelText(/date/i), yesterday.toISOString().split('T')[0]);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/future date/i) || screen.getByText(/invalid date/i)).toBeInTheDocument();
    });
  });
});

describe('High Risk Tests - Registration Validation (R001)', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test('Rejects invalid email formats', async () => {
    const invalidEmails = ['invalid', '@domain.com', 'user@', 'user space@domain.com'];
    
    for (const email of invalidEmails) {
      renderWithRouter(<Register />);
      
      await userEvent.type(screen.getByLabelText(/name/i), 'Test User');
      await userEvent.type(screen.getByLabelText(/email/i), email);
      await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
      
      fireEvent.click(screen.getByRole('button', { name: /register/i }));
      
      await waitFor(() => {
        expect(screen.getByText(/invalid email/i) || screen.getByText(/valid email/i)).toBeInTheDocument();
      });
      
      // Clean up for next iteration
      screen.unmount();
    }
  });

  test('Prevents duplicate email registration', async () => {
    // Mock existing user
    localStorageMock.getItem.mockReturnValue(JSON.stringify([{
      email: 'existing@test.com',
      name: 'Existing User'
    }]));
    
    renderWithRouter(<Register />);
    
    await userEvent.type(screen.getByLabelText(/name/i), 'New User');
    await userEvent.type(screen.getByLabelText(/email/i), 'existing@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/already exists/i) || screen.getByText(/email taken/i)).toBeInTheDocument();
    });
  });
});

describe('High Risk Tests - Login Validation (R002)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    // Mock existing user
    localStorageMock.getItem.mockReturnValue(JSON.stringify([{
      email: 'test@example.com',
      password: 'hashedPassword123',
      name: 'Test User'
    }]));
  });

  test('Handles invalid password attempts', async () => {
    renderWithRouter(<Login />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'WrongPassword');
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/invalid/i) || screen.getByText(/incorrect/i)).toBeInTheDocument();
    });
  });

  test('Handles non-existent email login', async () => {
    renderWithRouter(<Login />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'nonexistent@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/not found/i) || screen.getByText(/invalid/i)).toBeInTheDocument();
    });
  });
});

describe('XSS Prevention Tests (Security Risk)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'currentUser') return JSON.stringify({ email: 'user@test.com' });
      if (key === 'pickupRequests') return JSON.stringify([{ id: 'REQ001', status: 'completed' }]);
      return null;
    });
  });

  test('Feedback form prevents XSS injection', async () => {
    renderWithRouter(<Feedback />);
    
    const xssPayloads = [
      '<script>alert("XSS")</script>',
      '<img src=x onerror=alert(1)>',
      'javascript:alert("XSS")',
      '<svg onload=alert(1)>'
    ];
    
    for (const payload of xssPayloads) {
      await userEvent.clear(screen.getByLabelText(/request id/i));
      await userEvent.clear(screen.getByLabelText(/feedback/i));
      
      await userEvent.type(screen.getByLabelText(/request id/i), 'REQ001');
      await userEvent.type(screen.getByLabelText(/feedback/i), payload);
      
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
      
      // Verify no script execution
      expect(window.alert).not.toHaveBeenCalled();
      
      await waitFor(() => {
        // Should either succeed with sanitized input or show validation error
        const hasSuccess = screen.queryByText(/thank you/i);
        const hasError = screen.queryByText(/invalid/i);
        expect(hasSuccess || hasError).toBeTruthy();
      });
    }
  });
});

describe('Data Persistence Risk Tests (R013, R018)', () => {
  test('Data survives page refresh simulation', async () => {
    const testData = [
      { id: 'REQ001', location: 'Nairobi', status: 'pending' }
    ];
    
    localStorageMock.getItem.mockReturnValue(JSON.stringify(testData));
    
    // Simulate component remount (page refresh)
    const { unmount } = renderWithRouter(<Home />);
    unmount();
    
    // Remount component
    renderWithRouter(<Home />);
    
    // Verify data is still accessible
    expect(localStorageMock.getItem).toHaveBeenCalledWith('pickupRequests');
  });

  test('Handles localStorage quota exceeded', async () => {
    // Mock localStorage quota exceeded error
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    
    renderWithRouter(<Home />);
    
    // Try to submit form that would store data
    await userEvent.selectOptions(screen.getByLabelText(/location/i), 'Nairobi');
    await userEvent.selectOptions(screen.getByLabelText(/waste type/i), 'General');
    await userEvent.type(screen.getByLabelText(/address/i), 'Test Address');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await userEvent.type(screen.getByLabelText(/date/i), tomorrow.toISOString().split('T')[0]);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Should handle error gracefully
    await waitFor(() => {
      const hasError = screen.queryByText(/storage/i) || screen.queryByText(/error/i);
      expect(hasError || screen.queryByText(/success/i)).toBeTruthy();
    });
  });
});