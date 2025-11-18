import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Feedback from '../../src/components/Feedback';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

// Helper function to render component with router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Feedback Component Tests', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    
    // Mock existing requests in localStorage
    localStorageMock.getItem.mockReturnValue(JSON.stringify([
      { id: 'REQ001', status: 'completed' },
      { id: 'REQ002', status: 'completed' }
    ]));
  });

  test('TC-FB-001: Submit feedback with valid Request ID', async () => {
    renderWithRouter(<Feedback />);
    
    // Find form elements
    const requestIdInput = screen.getByLabelText(/request id/i);
    const feedbackInput = screen.getByLabelText(/feedback/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Fill form with valid data
    fireEvent.change(requestIdInput, { target: { value: 'REQ001' } });
    fireEvent.change(feedbackInput, { target: { value: 'Great service, pickup was on time' } });
    
    // Submit form
    fireEvent.click(submitButton);
    
    // Verify success message
    await waitFor(() => {
      expect(screen.getByText(/thank you for your feedback/i)).toBeInTheDocument();
    });
    
    // Verify form is cleared
    expect(requestIdInput.value).toBe('');
    expect(feedbackInput.value).toBe('');
  });

  test('TC-FB-002: Submit feedback with invalid Request ID', async () => {
    renderWithRouter(<Feedback />);
    
    const requestIdInput = screen.getByLabelText(/request id/i);
    const feedbackInput = screen.getByLabelText(/feedback/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Fill form with invalid Request ID
    fireEvent.change(requestIdInput, { target: { value: 'INVALID123' } });
    fireEvent.change(feedbackInput, { target: { value: 'Service was poor' } });
    
    fireEvent.click(submitButton);
    
    // Verify error message
    await waitFor(() => {
      expect(screen.getByText(/invalid request id/i)).toBeInTheDocument();
    });
    
    // Verify form data is retained
    expect(requestIdInput.value).toBe('INVALID123');
    expect(feedbackInput.value).toBe('Service was poor');
  });

  test('TC-FB-003: Submit feedback with empty fields', async () => {
    renderWithRouter(<Feedback />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Submit empty form
    fireEvent.click(submitButton);
    
    // Verify validation error
    await waitFor(() => {
      expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
    });
  });
});