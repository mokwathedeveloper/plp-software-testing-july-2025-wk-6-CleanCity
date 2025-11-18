# Abraham Maiko Kingoo - Test Design Report

**Document Version:** 1.0  
**Date:** November 11, 2025
**Test Designer:** Abraham Maiko Kingoo

---

## 1. Summary

This document contains the new functional test cases designed during Phase 2. The objective was to increase test coverage by creating tests for critical application features based on the `functional-requirements.md` document. These new test cases are ready for execution.

---

## 2. New Test Cases: User Authentication

These test cases expand on the existing authentication tests, focusing on the registration process.

| Test Case ID | Feature         | Test Scenario                                      | Steps to Reproduce                                                                                             | Expected Result                                                                    |
| :----------- | :-------------- | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **TC-AUTH-004**  | User Registration | Verify successful registration with valid data.    | 1. Navigate to the Register page. <br> 2. Fill all fields with unique and valid data (e.g., `newuser@test.com`, `Password123`). <br> 3. Click "Register". | User is redirected to the Login page. A success message "Registration successful" is shown. |
| **TC-AUTH-005**  | User Registration | Verify registration failure with an existing email. | 1. Navigate to the Register page. <br> 2. Enter an email that is already registered (e.g., `user1@test.com`). <br> 3. Fill the other fields with valid data. <br> 4. Click "Register". | An error message "Email already exists" is displayed. User remains on the Register page. |
| **TC-AUTH-006**  | User Registration | Verify form validation for invalid email format.   | 1. Navigate to the Register page. <br> 2. Enter `invalid-email` in the email field. <br> 3. Fill the other fields with valid data. <br> 4. Click "Register". | An error message "Please enter a valid email address" is displayed.                |
| **TC-AUTH-007**  | User Registration | Verify form validation for short password.         | 1. Navigate to the Register page. <br> 2. Fill all fields. <br> 3. Enter `short` for the Password and Confirm Password fields. <br> 5. Click "Register". | An error message "Password must be at least 8 characters long" is displayed.       |

---

## 3. New Test Cases: Feedback and Profile

These test cases cover the user feedback and profile management functionalities.

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **TC-FEEDBACK-001** | Feedback Form   | Verify successful feedback submission.              | 1. Log in as a user. <br> 2. Navigate to the Feedback page. <br> 3. Enter a valid, existing Request ID (e.g., `REQ001`). <br> 4. Enter a comment. <br> 5. Click "Submit Feedback". | A success message "Thank you for your feedback!" is displayed.                                              |
| **TC-FEEDBACK-002** | Feedback Form   | Verify feedback submission with an invalid Request ID. | 1. Log in as a user. <br> 2. Navigate to the Feedback page. <br> 3. Enter a non-existent Request ID (e.g., `REQ999`). <br> 4. Enter a comment. <br> 5. Click "Submit Feedback". | An error message "Request ID not found" is displayed.                                                       |
| **TC-PROFILE-001**  | User Profile    | Verify user can view their profile information.     | 1. Log in as a user. <br> 2. Navigate to the Profile page (e.g., by clicking username in header). <br> 3. Observe the displayed information. | The user's full name, email, and other profile details are displayed correctly.                             |
| **TC-PROFILE-002**  | User Profile    | Verify user can edit their profile information.     | 1. Log in and navigate to the Profile page. <br> 2. Click an "Edit Profile" button. <br> 3. Change the "Full Name" field. <br> 4. Click "Save". | A success message "Profile updated successfully" is shown. The new name is displayed on the page. |

---

## 4. Conclusion

The test case suite has been successfully expanded to cover critical functionality in the User Authentication, Feedback, and Profile modules. This increases overall test coverage and provides a stronger foundation for ensuring application quality. These test cases are now ready for execution.
