### Bug Report: Successful Registration Redirects to Profile Instead of Dashboard

**Title:** Successful User Registration Redirects to User Profile Page Instead of Dashboard

**Description:**
Upon successful completion of the user registration process, the application incorrectly redirects the newly registered user to their profile page. According to functional requirements, users should be redirected to the dashboard after a successful registration.

**Steps to Reproduce:**
1.  Navigate to the application's registration page (e.g., `http://localhost:3000/register`).
2.  Fill in the registration form with valid and unique credentials (e.g., email: `testuser_unique@example.com`, username: `TestUser`, password: `SecureP@ss1`).
3.  Ensure the password and confirm password fields match.
4.  Click the "Register" or "Sign Up" button.

**Expected Result:**
After clicking the "Register" button, a "Registration successful!" message should be displayed, and the user should be automatically logged in and redirected to the **Dashboard** page.

**Actual Result:**
After clicking the "Register" button, a "Registration successful!" message is displayed, and the user is automatically logged in but redirected to the **User Profile** page.

**Environment:**
*   **Operating System:** Linux
*   **Browser(s) Tested:** [Specify browser(s) used, e.g., Chrome, Firefox]
*   **Application Version/Commit:** [If applicable, specify the version or git commit hash]
*   **Local Server:** Running via `npm start`

**Severity:** Medium (Functional deviation from expected behavior, impacts user flow)
**Priority:** Medium (Should be addressed to ensure correct user onboarding experience)