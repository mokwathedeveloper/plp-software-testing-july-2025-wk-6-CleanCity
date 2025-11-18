import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Import components
import Register from '../../src/components/Register';
import Login from '../../src/components/Login';
import Home from '../../src/components/Home';
import Dashboard from '../../src/components/Dashboard';
import Feedback from '../../src/components/Feedback';
import Profile from '../../src/components/profile/Profile';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn()
};
global.localStorage = localStorageMock;

// Helper function to render with router
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('User Registration Tests (FR1-FR3)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    localStorageMock.getItem.mockReturnValue(null);
  });

  test('TC_REG_01: Valid user registration', async () => {
    renderWithRouter(<Register />);
    
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });
  });

  test('TC_REG_02: Duplicate email validation', async () => {
    // Mock existing user
    localStorageMock.getItem.mockReturnValue(JSON.stringify([
      { email: 'john@test.com', name: 'John Doe' }
    ]));
    
    renderWithRouter(<Register />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'john@test.com');
    await userEvent.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/email already exists/i)).toBeInTheDocument();
    });
  });

  test('TC_REG_03: Invalid email format', async () => {
    renderWithRouter(<Register />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });
});

describe('Login Tests (FR3-FR4)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    // Mock existing user
    localStorageMock.getItem.mockReturnValue(JSON.stringify([
      { email: 'john@test.com', password: 'hashedPassword123', name: 'John Doe' }
    ]));
  });

  test('TC_LOGIN_01: Valid login', async () => {
    renderWithRouter(<Login />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'john@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'Password123!');
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('currentUser', expect.any(String));
    });
  });

  test('TC_LOGIN_02: Invalid credentials', async () => {
    renderWithRouter(<Login />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'john@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'WrongPassword');
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });
});

describe('Pickup Request Tests (FR9-FR11)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    // Mock logged in user
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'currentUser') return JSON.stringify({ email: 'john@test.com' });
      if (key === 'pickupRequests') return JSON.stringify([]);
      return null;
    });
  });

  test('TC_PICKUP_01: Submit valid pickup request', async () => {
    renderWithRouter(<Home />);
    
    await userEvent.selectOptions(screen.getByLabelText(/location/i), 'Nairobi');
    await userEvent.selectOptions(screen.getByLabelText(/waste type/i), 'General');
    await userEvent.type(screen.getByLabelText(/address/i), '123 Test Street');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await userEvent.type(screen.getByLabelText(/date/i), tomorrow.toISOString().split('T')[0]);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/request submitted successfully/i)).toBeInTheDocument();
    });
  });

  test('TC_PICKUP_02: Form validation for empty fields', async () => {
    renderWithRouter(<Home />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/please fill all required fields/i)).toBeInTheDocument();
    });
  });

  test('TC_PICKUP_03: Data stored in localStorage', async () => {
    renderWithRouter(<Home />);
    
    await userEvent.selectOptions(screen.getByLabelText(/location/i), 'Nairobi');
    await userEvent.selectOptions(screen.getByLabelText(/waste type/i), 'General');
    await userEvent.type(screen.getByLabelText(/address/i), '123 Test Street');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await userEvent.type(screen.getByLabelText(/date/i), tomorrow.toISOString().split('T')[0]);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('pickupRequests', expect.any(String));
    });
  });
});

describe('Dashboard Filter Tests (FR13-FR14)', () => {
  beforeEach(() => {
    const mockRequests = [
      { id: 'REQ001', location: 'Nairobi', status: 'pending' },
      { id: 'REQ002', location: 'Kisumu', status: 'completed' },
      { id: 'REQ003', location: 'Nairobi', status: 'scheduled' }
    ];
    
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'pickupRequests') return JSON.stringify(mockRequests);
      if (key === 'currentUser') return JSON.stringify({ email: 'john@test.com' });
      return null;
    });
  });

  test('TC_FILTER_01: Filter by status', async () => {
    renderWithRouter(<Dashboard />);
    
    await userEvent.selectOptions(screen.getByLabelText(/filter by status/i), 'pending');
    
    await waitFor(() => {
      expect(screen.getByText('REQ001')).toBeInTheDocument();
      expect(screen.queryByText('REQ002')).not.toBeInTheDocument();
    });
  });

  test('TC_FILTER_02: Filter by location', async () => {
    renderWithRouter(<Dashboard />);
    
    await userEvent.selectOptions(screen.getByLabelText(/filter by location/i), 'Nairobi');
    
    await waitFor(() => {
      expect(screen.getByText('REQ001')).toBeInTheDocument();
      expect(screen.getByText('REQ003')).toBeInTheDocument();
      expect(screen.queryByText('REQ002')).not.toBeInTheDocument();
    });
  });
});

describe('Feedback Tests (FR20-FR22)', () => {
  beforeEach(() => {
    const mockRequests = [
      { id: 'REQ001', status: 'completed' },
      { id: 'REQ002', status: 'completed' }
    ];
    
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'pickupRequests') return JSON.stringify(mockRequests);
      if (key === 'currentUser') return JSON.stringify({ email: 'john@test.com' });
      return null;
    });
  });

  test('TC_FEEDBACK_01: Submit valid feedback', async () => {
    renderWithRouter(<Feedback />);
    
    await userEvent.type(screen.getByLabelText(/request id/i), 'REQ001');
    await userEvent.type(screen.getByLabelText(/feedback/i), 'Great service!');
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/thank you for your feedback/i)).toBeInTheDocument();
    });
  });

  test('TC_FEEDBACK_02: Required field validation', async () => {
    renderWithRouter(<Feedback />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
    });
  });

  test('TC_FEEDBACK_03: Invalid Request ID', async () => {
    renderWithRouter(<Feedback />);
    
    await userEvent.type(screen.getByLabelText(/request id/i), 'INVALID123');
    await userEvent.type(screen.getByLabelText(/feedback/i), 'Test feedback');
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/invalid request id/i)).toBeInTheDocument();
    });
  });
});

describe('Profile Management Tests (FR6)', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'currentUser') return JSON.stringify({ 
        email: 'john@test.com', 
        name: 'John Doe',
        avatar: 'https://example.com/avatar.jpg'
      });
      return null;
    });
  });

  test('TC_PROFILE_01: Edit profile successfully', async () => {
    renderWithRouter(<Profile />);
    
    fireEvent.click(screen.getByText(/edit profile/i));
    
    const nameInput = screen.getByDisplayValue('John Doe');
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'John Updated');
    
    fireEvent.click(screen.getByText(/save/i));
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('currentUser', expect.stringContaining('John Updated'));
    });
  });
});

describe('Security Tests (NFR4-NFR5)', () => {
  test('TC_SEC_01: XSS prevention in feedback', async () => {
    const mockRequests = [{ id: 'REQ001', status: 'completed' }];
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'pickupRequests') return JSON.stringify(mockRequests);
      if (key === 'currentUser') return JSON.stringify({ email: 'john@test.com' });
      return null;
    });
    
    renderWithRouter(<Feedback />);
    
    const xssPayload = '<script>alert("XSS")</script>';
    await userEvent.type(screen.getByLabelText(/request id/i), 'REQ001');
    await userEvent.type(screen.getByLabelText(/feedback/i), xssPayload);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Verify no script execution
    expect(window.alert).not.toHaveBeenCalled();
    
    await waitFor(() => {
      expect(screen.getByText(/thank you for your feedback/i)).toBeInTheDocument();
    });
  });

  test('TC_SEC_02: Unauthorized access prevention', () => {
    // Mock no current user (not logged in)
    localStorageMock.getItem.mockReturnValue(null);
    
    renderWithRouter(<Dashboard />);
    
    // Should show login prompt or redirect message
    expect(screen.getByText(/please log in/i) || screen.getByText(/unauthorized/i)).toBeInTheDocument();
  });
});

describe('Data Persistence Tests (FR29-FR30)', () => {
  test('TC_DATA_01: Data persists after page refresh', async () => {
    const testData = [
      { id: 'REQ001', location: 'Nairobi', status: 'pending' }
    ];
    
    localStorageMock.getItem.mockReturnValue(JSON.stringify(testData));
    
    renderWithRouter(<Dashboard />);
    
    await waitFor(() => {
      expect(screen.getByText('REQ001')).toBeInTheDocument();
    });
    
    // Verify localStorage was accessed
    expect(localStorageMock.getItem).toHaveBeenCalledWith('pickupRequests');
  });

  test('TC_DATA_02: Correct data retrieval and display', async () => {
    const testRequests = [
      { id: 'REQ001', location: 'Nairobi', status: 'pending', wasteType: 'General' },
      { id: 'REQ002', location: 'Kisumu', status: 'completed', wasteType: 'Recyclable' }
    ];
    
    localStorageMock.getItem.mockImplementation((key) => {
      if (key === 'pickupRequests') return JSON.stringify(testRequests);
      if (key === 'currentUser') return JSON.stringify({ email: 'john@test.com' });
      return null;
    });
    
    renderWithRouter(<Dashboard />);
    
    await waitFor(() => {
      expect(screen.getByText('REQ001')).toBeInTheDocument();
      expect(screen.getByText('REQ002')).toBeInTheDocument();
      expect(screen.getByText('Nairobi')).toBeInTheDocument();
      expect(screen.getByText('Kisumu')).toBeInTheDocument();
    });
  });
});