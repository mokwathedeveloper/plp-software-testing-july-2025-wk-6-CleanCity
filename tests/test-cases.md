# CleanCity QA Test Cases

**Document Version:** 1.0  
**Date:** November 11, 2025

## 1. Test Case Priority (Risk-Based Approach)

*Developed by the Risk Analyst.*

| Priority | Feature Area          | Justification                                                                 |
| :------- | :-------------------- | :---------------------------------------------------------------------------- |
| **P1 - Critical** | User Authentication   | Core to application access. Failure blocks all other functionality.         |
| **P1 - Critical** | Waste Pickup Scheduling | Core business function. Failure makes the application useless.                |
| **P2 - High**     | Admin Panel           | High potential for data corruption and privilege escalation issues.         |
| **P2 - High**     | Form Validation       | Prevents bad data entry; key to data integrity. Intentional flaws exist. |
| **P3 - Medium**   | Dashboard & Filtering | Complex functionality, likely to have bugs. Important for user engagement.    |
| **P4 - Low**      | Awareness Page        | Static content. Lower impact on core functionality, but important for UX/Accessibility. |

---

## 2. Functional Test Cases

### **P1: User Authentication (High Priority)**

| Test Case ID | Feature         | Test Scenario                                      | Steps to Reproduce                                                                                             | Expected Result                                                                    | Actual Result | Status      |
| :----------- | :-------------- | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-AUTH-001**  | User Login      | Verify successful login with valid credentials.    | 1. Navigate to the Login page. <br> 2. Enter `user1@test.com` in the email field. <br> 3. Enter `TestPass123` in the password field. <br> 4. Click "Login". | User is redirected to the Dashboard. A success message is shown.                   |    User is redirected to the Dashboard. A success message is shown.            |          Passed   |
| **TC-AUTH-002**  | User Login      | Verify login failure with invalid password.        | 1. Navigate to the Login page. <br> 2. Enter `user1@test.com` in the email field. <br> 3. Enter `WrongPassword` in the password field. <br> 4. Click "Login". | An error message "Invalid credentials" is displayed. User remains on the Login page. |    An error message "Invalid credentials" is displayed. User remains on the Login page.           |        Passed     |
| **TC-AUTH-003**  | User Registration | Verify form validation for mismatched passwords.   | 1. Navigate to the Register page. <br> 2. Fill in all fields. <br> 3. Enter `ValidPass123` for Password. <br> 4. Enter `MismatchedPass` for Confirm Password. <br> 5. Click "Register". | An error message "Passwords do not match" is displayed.                            |    An error message "Passwords do not match" is displayed.           |     Passed        |

### **P1: Waste Pickup Scheduling (High Priority)**

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             | Actual Result | Status      |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-WPS-001**   | Schedule Pickup | Verify form submission with all valid data.         | 1. Log in as a regular user. <br> 2. Navigate to the Home page. <br> 3. Fill out all fields with valid data (e.g., future date, waste type, etc.). <br> 4. Click "Submit Request". | A success message "Pickup scheduled successfully!" is displayed. The request appears in the Dashboard.      |  A success message "Pickup scheduled successfully!" is displayed. The request appears in the Dashboard.             |       Passed      |
| **TC-WPS-002**   | Schedule Pickup | **[BUG]** Verify form submission without a date.      | 1. Log in as a regular user. <br> 2. Navigate to the Home page. <br> 3. Fill out all fields *except* for the date. <br> 4. Click "Submit Request". | The form should not submit. An error message "Date is required" should appear next to the date field. |   A success message "Pickup scheduled successfully!" is displayed. The request appears in the Dashboard without date.            |      Failed       |

### **P2: Admin Panel (High Priority)**

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             | Actual Result | Status      |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-ADMIN-001** | Status Update   | **[BUG]** Verify UI updates after changing request status. | 1. Log in as an admin (`admin@cleancity.com`). <br> 2. Navigate to the Admin panel. <br> 3. Find request "REQ001". <br> 4. Click the "Mark as Scheduled" button. | The status badge for REQ001 should immediately change from "Pending" to "Scheduled" directly on the screen. |               |             |

### **P3: Dashboard & Filtering (Medium Priority)**

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             | Actual Result | Status      |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-DASH-001**  | Location Filter | **[BUG]** Verify filtering by "Eldoret" location.   | 1. Log in and navigate to the Dashboard. <br> 2. In the filter dropdown, select "Eldoret". <br> 3. Observe the table of requests.                 | The table should only display requests with the location "Eldoret" (e.g., REQ004).                          |               |             |

---
