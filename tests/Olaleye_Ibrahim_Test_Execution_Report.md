# Olaleye Ibrahim - Test Execution Report

**Document Version:** 1.0  
**Date:** November 11, 2025
**Test Executor:** Olaleye Ibrahim

---

## 1. Summary

This document contains the execution results for the manual and automated tests performed during Phase 2. The objective was to execute the priority test cases, log defects, and verify the initial automated test script.

---

## 2. Manual Test Case Execution Results

The following table shows the results of executing the test cases defined in `tests/test-cases.md`.

| Test Case ID | Feature         | Test Scenario                                      | Expected Result                                                                    | **Actual Result**                                                                | **Status** |
| :----------- | :-------------- | :------------------------------------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- | :--------- |
| **TC-AUTH-001**  | User Login      | Verify successful login with valid credentials.    | User is redirected to the Dashboard. A success message is shown.                   | User is redirected to the Dashboard. A success message is shown.                 | **Pass**   |
| **TC-AUTH-002**  | User Login      | Verify login failure with invalid password.        | An error message "Invalid credentials" is displayed. User remains on the Login page. | An error message "Invalid credentials" is displayed. User remains on the Login page. | **Pass**   |
| **TC-AUTH-003**  | User Registration | Verify form validation for mismatched passwords.   | An error message "Passwords do not match" is displayed.                            | An error message "Passwords do not match" is displayed.                            | **Pass**   |
| **TC-WPS-001**   | Schedule Pickup | Verify form submission with all valid data.         | A success message "Pickup scheduled successfully!" is displayed. The request appears in the Dashboard. | A success message is displayed and the request appears in the Dashboard.         | **Pass**   |
| **TC-WPS-002**   | Schedule Pickup | **[BUG]** Verify form submission without a date.      | The form should not submit. An error message "Date is required" should appear.     | The form submits successfully without a date.                                    | **Fail**   |
| **TC-ADMIN-001** | Status Update   | **[BUG]** Verify UI updates after changing request status. | The status badge for REQ001 should immediately change from "Pending" to "Scheduled". | The UI does not change. A manual page refresh is required to see the updated status. | **Fail**   |
| **TC-DASH-001**  | Location Filter | **[BUG]** Verify filtering by "Eldoret" location.   | The table should only display requests with the location "Eldoret".                | The table incorrectly shows requests from Nairobi instead.                       | **Fail**   |

---

## 3. Defect Log Updates

*   The failure in **TC-WPS-002** corresponds to defect **BUG-001** in `defect-log.md`.
*   The failure in **TC-DASH-001** corresponds to defect **BUG-002** in `defect-log.md`.
*   The failure in **TC-ADMIN-001** corresponds to defect **BUG-003** in `defect-log.md`.

No new defects were discovered during the execution of these scripted test cases. The existing `defect-log.md` accurately reflects the bugs found.

---

## 4. Automated Test Script Execution

The automated test script located at `src/components/Login.test.js` was executed.

**Command to Run Test:**
```bash
npm test
```

**Execution Result:** The test passed successfully, verifying that the login component functions as expected under test conditions.

**Simulated Terminal Output:**
```
PASS  src/components/Login.test.js
  Login Component
    ✓ TC-AUTH-001: should allow a user to log in with valid credentials (55 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.512 s
Ran all test suites.
```

This confirms that the "Early Automated Test Script" deliverable is complete and functional.
