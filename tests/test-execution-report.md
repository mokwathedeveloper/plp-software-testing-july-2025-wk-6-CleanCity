# Test Execution Report: High-Priority (P1) Cases

**Date:** November 13, 2025
**Tester:** Gemini

## 1. Summary

This report details the findings from the execution of P1 (Critical) test cases for User Authentication and Waste Pickup Scheduling.

- **Tests Executed:** 5
- **Tests Passed:** 2
- **Tests Failed:** 3
- **Overall Status:** **Action Required.** Critical security vulnerabilities were found in the user authentication flow.

---

## 2. Bug Reports

The following bugs were discovered and require immediate attention.

### BUG-001 (Critical): Password Bypass on Login

**Title:** Critical Security Vulnerability: User can log in with any password.

**Description:**
The authentication service does not validate the provided password. As long as a user's email is entered, *any* string in the password field will grant access to the account.

**Steps to Reproduce:**
1. Navigate to the Login page.
2. Enter a valid user's email (e.g., `user1@test.com`).
3. Enter **any** text in the password field (e.g., `WrongPassword`, `123`).
4. Click "Login".

**Expected Result:**
An error message "Invalid credentials" should be displayed.

**Actual Result:**
The user is logged in successfully.

**Severity:** Critical

---

### BUG-002 (Fail): Incorrect Redirect After Login

**Title:** User is redirected to /profile instead of /dashboard after login.

**Description:**
Users are expected to land on the main Dashboard after logging in. Currently, they are sent to their Profile page, which is not the intended user flow.

**Steps to Reproduce:**
1. Navigate to the Login page.
2. Enter valid credentials.
3. Click "Login".

**Expected Result:**
User is redirected to the `/dashboard` page.

**Actual Result:**
User is redirected to the `/profile` page.

**Severity:** Medium

---

### BUG-003 (Fail): Missing Password Confirmation in Registration

**Title:** Registration form lacks password confirmation.

**Description:**
The registration form is missing a "Confirm Password" field and the corresponding validation logic. This can lead to users accidentally locking themselves out of their new accounts with a typo.

**Steps to Reproduce:**
1. Navigate to the Register page.
2. Fill in the name, email, and password fields.
3. Click "Register".

**Expected Result:**
The form should require the user to enter their password twice and show an error if they do not match.

**Actual Result:**
The form only has one password field and performs no confirmation check.

**Severity:** High