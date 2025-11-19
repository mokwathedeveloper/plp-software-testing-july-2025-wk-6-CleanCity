# Requirements Traceability Matrix

**Project:** CleanCity - Waste Pickup Scheduler  
**Document Version:** 1.0  
**Date:** November 2025  
**Purpose:** Track requirement coverage through test cases

---

## Traceability Matrix

| Requirement ID | Requirement Description                                      | Functional Area     | Test Case ID(s)                                             | Test Type                     | Status   |
|----------------|--------------------------------------------------------------|----------------------|--------------------------------------------------------------|--------------------------------|----------|
| RQ001          | Users can register with name, email, password               | User Management      | TC_REG_01, TC_REG_02, TC_REG_03, TC_REG_04                  | Functional / Validation        | Pending  |
| RQ002          | Users can log in using email & password                     | User Management      | TC_LOGIN_01, TC_LOGIN_02                                    | Functional / Security          | Pending  |
| RQ003          | Users can log out                                           | User Management      | TC_LOGOUT_01                                                | Functional                     | Pending  |
| RQ004          | Admin and user roles are correctly assigned                 | User Management      | TC_ROLE_01                                                  | Functional / Security          | Pending  |
| RQ005          | Users can submit waste pickup request                       | Pickup Requests      | TC_PICKUP_01, TC_PICKUP_02, TC_PICKUP_03, TC_PICKUP_05     | Functional / Validation        | Pending  |
| RQ006          | Users can view their pickup requests                        | Pickup Requests      | TC_PICKUP_06                                                | Functional                     | Pending  |
| RQ007          | Users can filter requests by status                         | Dashboard            | TC_FILTER_01                                                | Functional                     | Pending  |
| RQ008          | Users can filter requests by location                       | Dashboard            | TC_FILTER_02                                                | Functional                     | Pending  |
| RQ009          | Admin can view all pickup requests                          | Admin Panel          | TC_ADMIN_01                                                 | Functional                     | Pending  |
| RQ010          | Admin can update request status                              | Admin Panel          | TC_ADMIN_02, TC_ADMIN_03                                    | Functional                     | Pending  |
| RQ011          | Admin statistics show correct counts of Pending/Scheduled/Completed | Admin Panel    | TC_ADMIN_04                                                 | Functional                     | Pending  |
| RQ012          | Users can submit feedback for a request                     | Feedback             | TC_FEEDBACK_01                                              | Functional / Validation        | Pending  |
| RQ014          | App maintains session for logged-in users                   | Authentication       | TC_SESSION_01                                               | Functional / Security          | Pending  |
| RQ015          | Dark mode and text scaling available                        | Appearance           | TC_UI_01, TC_UI_02                                          | Functional / Usability         | Pending  |
| RQ016          | Email validation during registration                        | Validation           | TC_REG_03                                                   | Functional / Security          | Pending  |
| RQ017          | Password validation during registration                     | Validation           | TC_REG_04                                                   | Functional / Security          | Pending  |
| RQ018          | Users cannot submit duplicate pickup requests               | Data Integrity       | TC_PICKUP_04                                                | Functional                     | Pending  |
| RQ019          | Data persists in localStorage                               | Data Persistence     | TC_DATA_01                                                  | Functional / Security          | Pending  |
| REQ020         | Password is hidden during input                             | Validation           | TC_SECURITY_01                                              | Functional / Security          | Pending  |
| REQ021         | Data encryption in localStorage                             | Validation           | TC_SECURITY_02                                              | Functional / Security          | Pending  |
| REQ022         | Page load time and submission response time                 | Performance          | TC_PERFORMANCE_01, TC_PERFORMANCE_02                        | Functional / Performance       | Pending  |
| REQ023         | Compatibility in different browsers                         | Browser              | TC_COMPAT_01, TC_COMPAT_02                                  | Functional                     | Pending  |

---

## Coverage Summary

| Functional Area    | Total Requirements | Test Cases Mapped | Coverage % |
|--------------------|-------------------|-------------------|------------|
| User Management    | 4                 | 8                 | 100%       |
| Pickup Requests    | 2                 | 6                 | 100%       |
| Dashboard          | 2                 | 2                 | 100%       |
| Admin Panel        | 3                 | 4                 | 100%       |
| Feedback           | 1                 | 1                 | 100%       |
| Authentication     | 1                 | 1                 | 100%       |
| Appearance         | 1                 | 2                 | 100%       |
| Validation         | 4                 | 4                 | 100%       |
| Data Persistence   | 1                 | 1                 | 100%       |
| Performance        | 1                 | 2                 | 100%       |
| Browser            | 1                 | 2                 | 100%       |

**Total Coverage:** 21/21 Requirements (100%)

---

## Test Execution Status

- **Total Test Cases:** 33
- **Executed:** 0
- **Passed:** 0
- **Failed:** 0
- **Pending:** 33

---

## Notes

- All requirements have been mapped to corresponding test cases
- Test execution is pending for all mapped test cases
- Status will be updated as test execution progresses
- Additional test cases may be added based on requirement changes