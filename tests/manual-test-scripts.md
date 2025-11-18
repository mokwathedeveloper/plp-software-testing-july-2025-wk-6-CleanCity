# Manual Test Scripts - CleanCity

## Test Script Execution Guide

### Pre-Test Setup
1. Open browser (Chrome/Firefox)
2. Navigate to `http://localhost:3000`
3. Clear localStorage: `localStorage.clear()`
4. Refresh page

---

## Script 1: Feedback Submission Flow

### Test ID: TS-FB-001
**Objective:** Validate feedback submission with valid and invalid data

**Steps:**
1. **Setup**
   - Navigate to home page
   - Register/Login as test user
   - Navigate to Feedback page (`/feedback`)

2. **Test Valid Submission**
   - Enter Request ID: "REQ001"
   - Enter Feedback: "Great service, pickup was on time"
   - Click Submit
   - **Verify:** Success message appears
   - **Verify:** Form fields are cleared

3. **Test Invalid Request ID**
   - Enter Request ID: "INVALID123"
   - Enter Feedback: "Service was poor"
   - Click Submit
   - **Verify:** Error message for invalid ID
   - **Verify:** Form data retained

4. **Test Empty Fields**
   - Clear all fields
   - Click Submit
   - **Verify:** Validation errors appear

**Expected Duration:** 10 minutes

---

## Script 2: Profile Management Flow

### Test ID: TS-PR-001
**Objective:** Test profile viewing and editing functionality

**Steps:**
1. **Setup**
   - Login as existing user
   - Navigate to Profile page

2. **View Profile**
   - **Verify:** User information displays correctly
   - **Verify:** Activity history shows
   - **Verify:** Achievement badges visible

3. **Edit Profile**
   - Click "Edit Profile"
   - Change name to "Test User Updated"
   - Change email to "updated@test.com"
   - Click Save
   - **Verify:** Changes saved and displayed

4. **Cancel Edit**
   - Click "Edit Profile"
   - Make changes
   - Click Cancel
   - **Verify:** Changes discarded

**Expected Duration:** 8 minutes

---

## Script 3: XSS Security Testing

### Test ID: TS-SEC-001
**Objective:** Verify XSS prevention in user inputs

**Steps:**
1. **Feedback XSS Test**
   - Navigate to Feedback page
   - Enter Request ID: "REQ001"
   - Enter malicious script: `<script>alert('XSS')</script>`
   - Submit form
   - **Verify:** No script execution
   - **Verify:** Text stored as plain text

2. **Profile XSS Test**
   - Navigate to Profile page
   - Edit profile
   - Enter script in name field: `<img src=x onerror=alert('XSS')>`
   - Save changes
   - **Verify:** No script execution
   - **Verify:** Sanitized text displayed

**Expected Duration:** 5 minutes

---

## Script 4: Data Persistence Testing

### Test ID: TS-DATA-001
**Objective:** Verify localStorage data persistence

**Steps:**
1. **Create Test Data**
   - Submit feedback for REQ001
   - Update profile information
   - Note current localStorage state

2. **Browser Session Test**
   - Close browser tab
   - Reopen application
   - Login again
   - **Verify:** Feedback data persists
   - **Verify:** Profile changes retained

3. **Data Integrity Check**
   - Open browser DevTools
   - Check localStorage contents
   - **Verify:** Data structure is correct
   - **Verify:** No corruption present

**Expected Duration:** 7 minutes

---

## Execution Checklist

### Before Each Test Run:
- [ ] Browser cleared of cache/cookies
- [ ] localStorage cleared
- [ ] Application running on localhost:3000
- [ ] Test data prepared
- [ ] Screenshot tool ready

### During Test Execution:
- [ ] Follow steps exactly as written
- [ ] Capture screenshots of failures
- [ ] Note any deviations from expected results
- [ ] Record actual vs expected outcomes
- [ ] Time each test execution

### After Test Execution:
- [ ] Log any defects found
- [ ] Update test results in tracking sheet
- [ ] Save evidence files
- [ ] Clean up test data if needed

---

## Test Data Sets

### Valid Test Data:
```
Request IDs: REQ001, REQ002, REQ003, REQ004, REQ005
User Names: John Doe, Jane Smith, Test User
Emails: john@test.com, jane@test.com, user@test.com
Feedback: "Excellent service", "Good pickup time", "Needs improvement"
```

### Invalid Test Data:
```
Request IDs: INVALID123, 999999, "", "   ", NULL
Emails: invalid-email, @domain.com, user@, user space@domain.com
XSS Payloads: <script>alert('XSS')</script>, <img src=x onerror=alert(1)>
```

---

## Evidence Collection

### Screenshots Required:
- Success messages
- Error messages  
- Form validation states
- Profile before/after edits
- Any unexpected behavior

### File Naming Convention:
`YYYYMMDD_HHMMSS_TestID_Description.png`

Example: `20251111_143022_TS-FB-001_SuccessMessage.png`

---

## Notes for Testers

1. **Timing:** Each script should be executed completely before moving to next
2. **Environment:** Test in both Chrome and Firefox
3. **Documentation:** Record all observations, even minor ones
4. **Collaboration:** Share findings immediately with team
5. **Consistency:** Use same test data across team members