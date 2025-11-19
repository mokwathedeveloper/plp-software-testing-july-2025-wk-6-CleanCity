# Challenges and Changes Documentation - Phase 2

## Document Information
- **Phase:** 2 - Test Design & Early Execution
- **Date:** November 11, 2025
- **Team:** mokwa moffat ohuru, Abraham Maiko Kingoo, Olaleye Ibrahim

---

## Challenges Encountered

### 1. Test Environment Setup
**Challenge:** Initial difficulty setting up consistent test environment across team members
**Impact:** Delayed start of test execution
**Resolution:** Created standardized setup instructions and shared environment configuration
**Status:** Resolved

### 2. Test Data Management
**Challenge:** Coordinating test data between manual and automated tests
**Impact:** Potential data conflicts during parallel testing
**Resolution:** Implemented test data isolation strategy using localStorage.clear() before each test
**Status:** Resolved

### 3. Component Testing Complexity
**Challenge:** React components require router context for proper testing
**Impact:** Initial test failures due to missing BrowserRouter wrapper
**Resolution:** Created renderWithRouter helper function for consistent component testing
**Status:** Resolved

### 4. Risk Assessment Integration
**Challenge:** Mapping 20 identified risks to specific test cases and priorities
**Impact:** Initial test plan lacked risk-based focus
**Resolution:** Created comprehensive risk-based test plan with priority mapping
**Status:** Resolved

### 5. Security Testing Complexity
**Challenge:** Testing security features like password hashing and XSS prevention in React components
**Impact:** Limited automated security test coverage
**Resolution:** Developed specialized security test suite with mock scenarios
**Status:** Resolved

---

## Changes Made to Original Plan

### 1. Test Case Prioritization
**Original Plan:** Test all features equally
**Change:** Implemented risk-based testing approach focusing on high-risk areas first
**Reason:** Limited time and resources require strategic focus
**Impact:** More efficient testing coverage of critical functionality

### 2. Automated Testing Scope
**Original Plan:** Comprehensive automated test suite
**Change:** Limited automated tests to core feedback and profile functionality
**Reason:** Time constraints and learning curve for team members
**Impact:** Balanced approach between manual and automated testing

### 3. Defect Tracking Method
**Original Plan:** Use external bug tracking tool
**Change:** Implemented markdown-based defect log with GitHub Projects integration
**Reason:** Simpler setup and better integration with existing workflow
**Impact:** Streamlined defect management process

---

## Technical Decisions

### 1. Testing Framework Selection
**Decision:** Use React Testing Library with Jest
**Rationale:** 
- Already included in Create React App
- Good documentation and community support
- Encourages testing best practices
**Alternative Considered:** Enzyme (deprecated)

### 2. Manual Test Script Format
**Decision:** Structured markdown format with step-by-step instructions
**Rationale:**
- Easy to follow and execute
- Version controllable
- Consistent format across team
**Alternative Considered:** Excel spreadsheets

### 3. Evidence Collection Strategy
**Decision:** Screenshot-based evidence with standardized naming
**Rationale:**
- Visual proof of test execution
- Easy to organize and reference
- Supports both manual and automated testing
**Alternative Considered:** Video recordings (too resource intensive)

---

## Lessons Learned

### 1. Early Test Planning Benefits
**Learning:** Detailed test planning in Phase 1 significantly improved Phase 2 execution
**Application:** Will maintain this approach for remaining phases

### 2. Risk-Based Testing Effectiveness
**Learning:** Focusing on high-risk areas first revealed critical issues early
**Application:** Will continue prioritizing based on risk assessment

### 3. Team Collaboration Importance
**Learning:** Regular communication prevents duplicate work and ensures consistency
**Application:** Increased frequency of team check-ins

---

## Adjustments for Phase 3

### 1. Expanded Automated Testing
**Plan:** Add more automated test cases based on Phase 2 findings
**Justification:** Manual testing revealed patterns that can be automated

### 2. Cross-Browser Testing Focus
**Plan:** Systematic testing across Chrome, Firefox, and Safari
**Justification:** Initial testing showed browser-specific behaviors

### 3. Performance Testing Addition
**Plan:** Basic performance testing for form submissions and page loads
**Justification:** User experience concerns identified during manual testing

---

## Resource Allocation Changes

### Original Allocation:
- Manual Testing: 60%
- Automated Testing: 40%

### Revised Allocation:
- Manual Testing: 70%
- Automated Testing: 30%

**Reason:** Team expertise and time constraints favor manual testing approach

---

## Quality Metrics Tracking

### Metrics Added:
1. **Test Execution Rate:** Tests completed vs. planned
2. **Defect Detection Rate:** Defects found per testing hour
3. **Test Coverage:** Features tested vs. total features

### Current Status:
- Test Execution Rate: 85% (17/20 planned test cases executed)
- Defect Detection Rate: To be calculated after Phase 2 completion
- Test Coverage: 60% (focusing on high-risk areas first)

---

## Communication Improvements

### Changes Made:
1. **Daily Stand-ups:** Added brief daily check-ins via WhatsApp
2. **Shared Test Results:** Real-time sharing of test outcomes
3. **Issue Escalation:** Clear process for critical defect reporting

### Impact:
- Faster issue resolution
- Better coordination between team members
- Reduced duplicate testing efforts

---

## Next Phase Preparation

### Phase 3 Readiness:
- [ ] Complete remaining Phase 2 test cases
- [ ] Update defect log with all findings
- [ ] Prepare test environment for expanded testing
- [ ] Review and update test cases based on Phase 2 learnings
- [ ] Plan final report structure and content

### Risk Mitigation for Phase 3:
- Buffer time allocated for unexpected issues
- Backup testing scenarios prepared
- Clear escalation path for blocking issues