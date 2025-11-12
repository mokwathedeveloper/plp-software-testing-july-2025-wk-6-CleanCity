import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

// Mock the authService to avoid actual authentication during tests
jest.mock('../services/authService', () => ({
  login: jest.fn().mockReturnValue({ email: 'user@test.com', role: 'User' }),
  getCurrentUser: jest.fn().mockReturnValue(null),
}));

// Mock the navigate function from react-router-dom
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Login Component', () => {
  test('TC-AUTH-001: should allow a user to log in with valid credentials', () => {
    // Create a mock function to act as the onLogin prop
    const handleLogin = jest.fn();

    // 1. Render the Login component
    render(
      <Router>
        <Login onLogin={handleLogin} />
      </Router>
    );

    // 2. Find the input fields and the button
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    // 3. Simulate user input
    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'TestPass123' } });

    // 4. Simulate clicking the login button
    fireEvent.click(loginButton);

    // 5. Assert that the onLogin prop was called with the user object
    expect(handleLogin).toHaveBeenCalledWith({
      email: 'user@test.com',
      role: 'User',
    });

    // 6. Assert that the user is redirected to the profile page
    expect(mockedNavigate).toHaveBeenCalledWith('/profile', { replace: true });
  });
});
