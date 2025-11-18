# Requirements Traceability Matrix

## Document Information
- **Project:** CleanCity Waste Pickup Scheduler
- **Phase:** 2 - Test Design & Early Execution
- **Date:** November 11, 2025

---

## Functional Requirements Coverage

| Requirement ID | Requirement Description | Test Case ID(s) | Test Script Location | Automated Test | Status |
|----------------|------------------------|------------------|---------------------|----------------|---------|
| **FR1** | Register new user | TC_REG_01 | Script 1 | ✅ comprehensive.test.js | Ready |
| **FR2** | Validate email/duplicate | TC_REG_02, TC_REG_03 | Script 1 | ✅ comprehensive.test.js | Ready |
| **FR3** | User login | TC_LOGIN_01 | Script 1 | ✅ comprehensive.test.js | Ready |
| **FR4** | Invalid login | TC_LOGIN_02 | Script 1 | ✅ comprehensive.test.js | Ready |
| **FR5** | Logout | TC_LOGOUT_01 | Script 1 | ⚠️ Manual only | Ready |
| **FR6** | Edit profile | TC_PROFILE_01 | Script 2 | ✅ comprehensive.test.js | Ready |
| **FR7** | Role assignment | TC_ROLE_01 | Script 2 | ⚠️ Manual only | Ready |
| **FR8** | Restrict admin access | TC_ACCESS_01 | Script 2 | ⚠️ Manual only | Ready |
| **FR9** | Submit pickup request | TC_PICKUP_01 | Script 3 | ✅ comprehensive.test.js | Ready |
| **FR10** | Validate pickup fields | TC_PICKUP_02 | Script 3 | ✅ comprehensive.test.js | Ready |
| **FR11** | Store pickup data | TC_PICKUP_03 | Script 3 | ✅ comprehensive.test.js | Ready |
| **FR12** | View requests | TC_PICKUP_04 | Script 3 | ⚠️ Manual only | Ready |
| **FR13** | Filter by status | TC_FILTER_01 | Script 3 | ✅ comprehensive.test.js | Ready |
| **FR14** | Filter by location | TC_FILTER_02 | Script 3 | ✅ comprehensive.test.js | Ready |
| **FR15** | Prevent duplicates | TC_PICKUP_05 | Script 3 | ⚠️ Manual only | Ready |
| **FR16** | Admin view all | TC_ADMIN_01 | Script 4 | ⚠️ Manual only | Ready |
| **FR17** | Update status | TC_ADMIN_02 | Script 4 | ⚠️ Manual only | Ready |
| **FR18** | View statistics | TC_ADMIN_03 | Script 4 | ⚠️ Manual only | Ready |
| **FR19** | Admin filter/search | TC_ADMIN_04 | Script 4 | ⚠️ Manual only | Ready |
| **FR20** | Submit feedback | TC_FEEDBACK_01 | Script 5 | ✅ comprehensive.test.js | Ready |
| **FR21** | Feedback details | TC_FEEDBACK_02 | Script 5 | ✅ comprehensive.test.js | Ready |
| **FR22** | Validate feedback fields | TC_FEEDBACK_03 | Script 5 | ✅ comprehensive.test.js | Ready |
| **FR23** | View feedback | TC_FEEDBACK_04 | Script 5 | ⚠️ Manual only | Ready |
| **FR24** | Toggle dark mode | TC_APPEAR_01 | Script 6 | ⚠️ Manual only | Ready |
| **FR25** | Adjust text scale | TC_APPEAR_02 | Script 6 | ⚠️ Manual only | Ready |
| **FR26** | Maintain session | TC_SESSION_01 | Script 7 | ⚠️ Manual only | Ready |
| **FR27** | Restrict unauthenticated access | TC_ACCESS_02 | Script 7 | ✅ comprehensive.test.js | Ready |
| **FR28** | Session ends on logout | TC_SESSION_02 | Script 7 | ⚠️ Manual only | Ready |
| **FR29** | Data persistence | TC_DATA_01 | Script 7 | ✅ comprehensive.test.js | Ready |
| **FR30** | Data retrieval | TC_DATA_02 | Script 7 | ✅ comprehensive.test.js | Ready |
| **FR31** | Input validation | TC_VALID_01 | Script 7 | ⚠️ Manual only | Ready |

---

## Non-Functional Requirements Coverage

| Requirement ID | Requirement Description | Test Case ID(s) | Test Script Location | Automated Test | Status |
|----------------|------------------------|------------------|---------------------|----------------|---------|
| **NFR1** | Page load under 3s | TC_PERF_01 | Script 8 | ⚠️ Manual only | Ready |
| **NFR2** | Mobile responsiveness | TC_RESP_01 | Script 8 | ⚠️ Manual only | Ready |
| **NFR4** | Encrypted passwords | TC_SEC_01 | Script 8 | ✅ comprehensive.test.js | Ready |
| **NFR5** | Unauthorized access blocked | TC_SEC_02 | Script 8 | ✅ comprehensive.test.js | Ready |
| **NFR7** | Data consistency | TC_DATA_03 | Script 8 | ⚠️ Manual only | Ready |
| **NFR8** | Color contrast | TC_UI_01 | Script 8 | ⚠️ Manual only | Ready |
| **NFR9** | Cross-browser support | TC_COMP_01 | Script 8 | ⚠️ Manual only | Ready |

---

## Test Coverage Summary

### Overall Coverage:
- **Total Requirements:** 39 (31 Functional + 8 Non-Functional)
- **Requirements with Test Cases:** 39 (100%)
- **Requirements with Manual Tests:** 39 (100%)
- **Requirements with Automated Tests:** 17 (44%)

### Test Distribution:
- **Manual Test Scripts:** 8 comprehensive scripts
- **Automated Test Suites:** 2 files (feedback.test.js, comprehensive.test.js)
- **Total Test Cases:** 39 individual test cases

### Risk Coverage:
- **High Risk Requirements:** 15 (100% covered)
- **Medium Risk Requirements:** 18 (100% covered)
- **Low Risk Requirements:** 6 (100% covered)

---

## Test Execution Plan

### Phase 2 (Current):
- ✅ All test cases designed and documented
- ✅ Manual test scripts created
- ✅ Core automated tests implemented
- ✅ Test environment prepared

### Phase 3 (Upcoming):
- Execute all manual test scripts
- Run automated test suite
- Cross-browser testing (NFR9)
- Performance testing (NFR1)
- Accessibility testing (NFR8)
- Mobile responsiveness testing (NFR2)

---

## Automation Strategy

### Automated (17 requirements):
**Rationale:** Core functionality, data validation, security
- User registration and login (FR1-FR4)
- Profile management (FR6)
- Pickup request submission (FR9-FR11)
- Data filtering (FR13-FR14)
- Feedback system (FR20-FR22)
- Data persistence (FR29-FR30)
- Security validation (NFR4-NFR5)

### Manual Only (22 requirements):
**Rationale:** UI/UX, admin functions, cross-browser, performance
- Logout functionality (FR5)
- Role-based access (FR7-FR8)
- Admin panel operations (FR16-FR19)
- UI appearance features (FR24-FR25)
- Session management (FR26, FR28)
- Performance and compatibility (NFR1, NFR2, NFR7-NFR9)

---

## Test Data Requirements

### User Accounts Needed:
- Regular user: john@test.com
- Admin user: admin@test.com
- Test user for registration: newuser@test.com

### Test Requests:
- REQ001-REQ005 (various statuses and locations)
- Invalid request IDs for negative testing

### Test Environments:
- Chrome (latest)
- Firefox (latest)
- Mobile viewport (375px, 768px)
- Desktop viewport (1200px+)

---

## Defect Tracking Integration

### Test Case to Defect Mapping:
- Each test case ID maps to potential defect categories
- Severity levels aligned with requirement criticality
- Traceability from requirement → test case → defect → fix

### Reporting Structure:
- Requirements coverage report
- Test execution status report
- Defect summary by requirement
- Risk assessment based on failed requirements

---

## Success Criteria

### Phase 2 Completion:
- ✅ 100% requirements have test cases
- ✅ All high-risk requirements have detailed test scripts
- ✅ Core functionality has automated tests
- ✅ Test environment is stable and ready

### Phase 3 Targets:
- 95% test case execution rate
- 100% high-risk requirement validation
- Cross-browser compatibility confirmed
- Performance benchmarks met
- Zero critical defects remaining

---

## Notes

### Test Case Naming Convention:
- TC_[FEATURE]_[NUMBER]: Functional test cases
- TC_[TYPE]_[NUMBER]: Non-functional test cases
- Example: TC_REG_01, TC_PERF_01

### Script Organization:
- Script 1-7: Functional requirements
- Script 8: Non-functional requirements
- Each script covers related requirements for efficiency

### Automation Limitations:
- UI appearance testing requires manual verification
- Cross-browser testing needs multiple environments
- Performance testing requires specialized tools
- Admin workflows need role-based test data setup