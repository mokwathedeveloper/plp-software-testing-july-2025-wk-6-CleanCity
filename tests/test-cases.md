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
| **TC-AUTH-001**  | User Login      | Verify successful login with valid credentials.    | 1. Navigate to the Login page. <br> 2. Enter `user1@test.com` in the email field. <br> 3. Enter `TestPass123` in the password field. <br> 4. Click "Login". | User is redirected to the Dashboard. A success message is shown.                   | User is redirected to `/profile`, not the Dashboard.                               | Fail        |
| **TC-AUTH-002**  | User Login      | Verify login failure with invalid password.        | 1. Navigate to the Login page. <br> 2. Enter `user1@test.com` in the email field. <br> 3. Enter `WrongPassword` in the password field. <br> 4. Click "Login". | An error message "Invalid credentials" is displayed. User remains on the Login page. | **CRITICAL BUG:** User is logged in successfully. The password is not validated at all. | Fail        |
| **TC-AUTH-003**  | User Registration | Verify form validation for mismatched passwords.   | 1. Navigate to the Register page. <br> 2. Fill in all fields. <br> 3. Enter `ValidPass123` for Password. <br> 4. Enter `MismatchedPass` for Confirm Password. <br> 5. Click "Register". | An error message "Passwords do not match" is displayed.                            | No password confirmation field exists. The form has no logic to check for mismatched passwords. | Fail        |

### **P1: Waste Pickup Scheduling (High Priority)**

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             | Actual Result | Status      |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-WPS-001**   | Schedule Pickup | Verify form submission with all valid data.         | 1. Log in as a regular user. <br> 2. Navigate to the Home page. <br> 3. Fill out all fields with valid data (e.g., future date, waste type, etc.). <br> 4. Click "Submit Request". | A success message "Pickup scheduled successfully!" is displayed. The request appears in the Dashboard.      | A success message is shown and the form is cleared as expected.                                             | Pass        |
| **TC-WPS-002**   | Schedule Pickup | **[BUG]** Verify form submission without a date.      | 1. Log in as a regular user. <br> 2. Navigate to the Home page. <br> 3. Fill out all fields *except* for the date. <br> 4. Click "Submit Request". | The form should not submit. An error message "Date is required" should appear next to the date field. | The form does not submit. An error "Please fill in all required fields." appears. The code works as expected. | Pass        |

### **P2: Admin Panel (High Priority)**

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             | Actual Result | Status      |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-ADMIN-001** | Status Update   | **[BUG]** Verify UI updates after changing request status. | 1. Log in as an admin (`admin@cleancity.com`). <br> 2. Navigate to the Admin panel. <br> 3. Find request "REQ001". <br> 4. Click the "Mark as Scheduled" button. | The status badge for REQ001 should immediately change from "Pending" to "Scheduled" directly on the screen. |               |             |

### **P3: Dashboard & Filtering (Medium Priority)**

| Test Case ID | Feature         | Test Scenario                                       | Steps to Reproduce                                                                                                                            | Expected Result                                                                                             | Actual Result | Status      |
| :----------- | :-------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------ | :---------- |
| **TC-DASH-001**  | Location Filter | **[BUG]** Verify filtering by "Eldoret" location.   | 1. Log in and navigate to the Dashboard. <br> 2. In the filter dropdown, select "Eldoret". <br> 3. Observe the table of requests.                 | The table should only display requests with the location "Eldoret" (e.g., REQ004).                          |               |             |

---

## Test Cases for FR-022: Feedback Submission After Pickup Completion

### TC-FB-001: Submit Feedback with Valid Request ID
**Priority:** High | **Risk Level:** Medium
**Requirement:** FR-022

**Preconditions:**
- User is logged in
- At least one completed pickup request exists in system
- User navigates to Feedback page

**Test Steps:**
1. Enter valid Request ID (e.g., "REQ001") in Request ID field
2. Enter feedback text "Great service, pickup was on time"
3. Click Submit button

**Expected Results:**
- Success message "Thank you for your feedback!" displays
- Form fields are cleared
- No error messages shown
- Feedback is stored in system

**Test Data:**
- Valid Request ID: REQ001, REQ002, REQ003
- Feedback: "Excellent service", "Pickup was delayed but completed"

---

### TC-FB-002: Submit Feedback with Invalid Request ID
**Priority:** High | **Risk Level:** High
**Requirement:** FR-022

**Preconditions:**
- User is logged in
- User navigates to Feedback page

**Test Steps:**
1. Enter invalid Request ID (e.g., "INVALID123") in Request ID field
2. Enter feedback text "Service was poor"
3. Click Submit button

**Expected Results:**
- Error message displays indicating invalid Request ID
- Form data is retained
- User can correct the Request ID without re-entering feedback
- No feedback is stored for invalid ID

**Test Data:**
- Invalid Request IDs: "INVALID123", "999999", "REQ999", "", "   ", "NULL"

---

### TC-FB-003: Submit Feedback with Empty Fields
**Priority:** Medium | **Risk Level:** Medium
**Requirement:** FR-022

**Test Steps:**
1. Leave Request ID field empty
2. Leave feedback field empty
3. Click Submit button

**Expected Results:**
- Error message "Please fill in all fields." displays
- Form submission is prevented
- Required field indicators are shown

---

### TC-FB-004: Submit Feedback with XSS Attempt
**Priority:** High | **Risk Level:** Critical
**Requirement:** FR-022, FR-082, FR-083

**Test Steps:**
1. Enter valid Request ID "REQ001"
2. Enter malicious script in feedback: `<script>alert('XSS')</script>`
3. Click Submit button

**Expected Results:**
- Script is sanitized and not executed
- Feedback is stored as plain text
- No JavaScript execution occurs
- Success message displays normally

---

### TC-FB-005: Submit Feedback with Maximum Length Text
**Priority:** Medium | **Risk Level:** Low
**Requirement:** FR-022

**Test Steps:**
1. Enter valid Request ID "REQ001"
2. Enter feedback text exceeding 1000 characters
3. Click Submit button

**Expected Results:**
- System handles long text gracefully
- Either accepts with truncation or shows length limit error
- No system crash or UI breaking

---

## Test Cases for FR-045 to FR-048: User Profile Management

### TC-PR-001: View User Profile Information
**Priority:** Medium | **Risk Level:** Low
**Requirement:** FR-045, FR-046, FR-048

**Preconditions:**
- User is logged in
- User has existing profile data

**Test Steps:**
1. Navigate to Profile page
2. Verify profile information display

**Expected Results:**
- User name, email, and avatar are displayed correctly
- Activity history shows user's posts, comments, and requests
- Achievement badges are displayed based on user activity
- Statistics show accurate environmental impact data

---

### TC-PR-002: Edit Profile Information Successfully
**Priority:** High | **Risk Level:** Medium
**Requirement:** FR-045

**Preconditions:**
- User is logged in
- User is on Profile page

**Test Steps:**
1. Click "Edit Profile" button
2. Modify name field to "Updated Name"
3. Modify email field to "updated@email.com"
4. Modify avatar URL to valid image URL
5. Click "Save" button

**Expected Results:**
- Profile information is updated successfully
- Changes are persisted in localStorage
- Updated information displays immediately
- Edit mode is exited automatically

**Test Data:**
- Valid names: "John Doe", "Jane Smith-Wilson", "José García"
- Valid emails: "test@example.com", "user.name@domain.co.uk"
- Valid avatar URLs: "https://i.pravatar.cc/100?img=15"

---

### TC-PR-003: Edit Profile with Invalid Email Format
**Priority:** High | **Risk Level:** High
**Requirement:** FR-045, FR-081

**Test Steps:**
1. Click "Edit Profile" button
2. Enter invalid email format "invalid-email"
3. Click "Save" button

**Expected Results:**
- Validation error message displays
- Profile is not updated
- User remains in edit mode
- Original email is preserved

**Test Data:**
- Invalid emails: "invalid", "@domain.com", "user@", "user space@domain.com"

---

### TC-PR-004: Cancel Profile Edit Operation
**Priority:** Medium | **Risk Level:** Low
**Requirement:** FR-045

**Test Steps:**
1. Click "Edit Profile" button
2. Modify name field to "Temporary Name"
3. Click "Cancel" button

**Expected Results:**
- Changes are discarded
- Original profile information is restored
- Edit mode is exited
- No data is saved to localStorage

---

### TC-PR-005: Profile Data Persistence Across Sessions
**Priority:** High | **Risk Level:** High
**Requirement:** FR-045, FR-078, FR-079

**Test Steps:**
1. Edit and save profile information
2. Close browser tab
3. Reopen application and login
4. Navigate to Profile page

**Expected Results:**
- Updated profile information persists
- All changes are retained from previous session
- No data loss occurs
- localStorage maintains data integrity

---

### TC-PR-006: Upload Profile Picture
**Priority:** Medium | **Risk Level:** Medium
**Requirement:** FR-047

**Test Steps:**
1. Click "Edit Profile" button
2. Enter new avatar URL in avatar field
3. Click "Save" button
4. Verify image loads correctly

**Expected Results:**
- New profile picture displays correctly
- Image URL is validated and stored
- Broken image URLs show default avatar
- Image loads within reasonable time

**Test Data:**
- Valid image URLs: "https://i.pravatar.cc/100?img=20"
- Invalid URLs: "not-an-image", "http://broken-link.com/image.jpg"

---

### TC-PR-007: View User Activity History
**Priority:** Medium | **Risk Level:** Low
**Requirement:** FR-046

**Test Steps:**
1. Navigate to Profile page
2. Click on "My Blog Posts" tab
3. Click on "My Comments" tab
4. Click on "My Requests" tab

**Expected Results:**
- Each tab displays relevant user activity
- Data is accurate and up-to-date
- Empty states show appropriate messages
- Navigation between tabs works smoothly

---

### TC-PR-008: Profile XSS Prevention
**Priority:** High | **Risk Level:** Critical
**Requirement:** FR-045, FR-082, FR-083

**Test Steps:**
1. Click "Edit Profile" button
2. Enter malicious script in name field: `<script>alert('XSS')</script>`
3. Click "Save" button

**Expected Results:**
- Script is sanitized and stored as plain text
- No JavaScript execution occurs
- Profile displays sanitized text
- Application security is maintained

---

### TC-PR-009: Profile Field Length Validation
**Priority:** Medium | **Risk Level:** Medium
**Requirement:** FR-045, FR-081

**Test Steps:**
1. Click "Edit Profile" button
2. Enter extremely long text in name field (>200 characters)
3. Enter extremely long email (>100 characters)
4. Click "Save" button

**Expected Results:**
- System enforces reasonable length limits
- Validation messages guide user to correct input
- UI remains stable with long inputs
- Data truncation or rejection handled gracefully

---

## Risk Mitigation Test Cases

### TC-RISK-001: Data Corruption Prevention
**Priority:** High | **Risk Level:** Critical

**Test Steps:**
1. Perform multiple rapid profile updates
2. Submit feedback while editing profile simultaneously
3. Clear localStorage partially during operations

**Expected Results:**
- Data integrity is maintained
- No corruption occurs in localStorage
- Application handles concurrent operations gracefully
- Error recovery mechanisms function properly

---

### TC-RISK-002: Browser Compatibility
**Priority:** Medium | **Risk Level:** Medium

**Test Steps:**
1. Test feedback submission in Chrome, Firefox, Safari, Edge
2. Test profile editing across different browsers
3. Verify localStorage behavior consistency

**Expected Results:**
- Functionality works consistently across browsers
- No browser-specific errors occur
- Data persistence works in all supported browsers
- UI renders correctly in all environments

---

## Test Execution Notes

### Environment Setup:
- Test on localhost:3000
- Use browser developer tools for localStorage inspection
- Test with both empty and populated data states

### Data Cleanup:
- Clear localStorage between test runs when needed
- Verify test data isolation
- Document any persistent state requirements

### Defect Reporting:
- Include browser version and OS information
- Capture screenshots for UI issues
- Document steps to reproduce clearly
- Note any data corruption or loss scenarios

