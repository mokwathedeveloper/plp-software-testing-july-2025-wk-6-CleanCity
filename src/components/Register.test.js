import { render, screen } from '@testing-library/react';
import Register from './Register';

test('renders the registration form', () => {
  render(<Register />);
  
  // Check if the main heading "Sign Up" is on the screen
  const headingElement = screen.getByRole('heading', { name: /sign up/i });
  expect(headingElement).toBeInTheDocument();

  // Check if the email input field is present
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();

  // Check if the password input field is present
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();

  // Check for the register button
  const registerButton = screen.getByRole('button', { name: /register/i });
  expect(registerButton).toBeInTheDocument();
});
