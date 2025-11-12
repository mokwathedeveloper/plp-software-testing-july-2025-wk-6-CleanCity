# Final Test Report - Phase 2

| | |
| :--- | :--- |
| **Project:** | CleanCity - Waste Pickup Scheduler |
| **Test Phase:** | Phase 2: Test Design & Early Execution |
| **Document Version:** | 1.0 |
| **Date:** | November 11, 2025 |
| **Prepared By:** | mokwa moffat ohuru (Test Manager) |

---

## 1. Introduction

This document summarizes the testing activities, results, and findings from the Phase 2 testing cycle of the CleanCity application. The primary goals of this phase were to expand test case coverage, perform early test execution on high-priority features, establish an initial automated test, and log all identified defects.

---

## 2. Summary of Testing Activities

During this phase, the QA team successfully performed the following activities:

*   **Test Case Design:** A total of **8 new, detailed test cases** were designed to provide coverage for the User Authentication, Feedback, and Profile modules. This work is detailed in the [Test Design Report](./Abraham_Maiko_Kingoo_Test_Design_Report.md).

*   **Manual Test Execution:** **7 high-priority functional tests** were executed to validate the core features of the application, such as login and waste pickup scheduling. The detailed results are available in the [Test Execution Report](./Olaleye_Ibrahim_Test_Execution_Report.md).

*   **Automated Testing:** An initial automated test script was created for the **Login feature** using React Testing Library. The script successfully validates the login functionality and serves as a foundation for future automation. The script is located at `src/components/Login.test.js`.

*   **Defect Management:** All defects found during testing were documented with clear steps to reproduce, severity, and priority in the [Defect Log](./defect-log.md).

---

## 3. Overall Results

The testing effort provided valuable insights into the current state of the application.

*   **Test Execution Summary:**
    *   Total Test Cases Executed: **7**
    *   Passed: **4**
    *   Failed: **3**

*   **Defect Summary:**
    *   A total of **4 defects** have been logged, with 2 classified as "Major" severity.

The results indicate that while some core paths are functional, critical bugs exist in form validation, data filtering, and UI state management that impact the user experience.

---

## 4. Active Defects

The following defects were identified and logged during the testing cycle:

| Defect ID | Summary                                        | Severity | Status |
| :-------- | :--------------------------------------------- | :------- | :----- |
| **BUG-001** | Form can be submitted without a date.          | **Major**  | Open   |
| **BUG-002** | "Eldoret" location filter is broken.           | **Major**  | Open   |
| **BUG-003** | UI does not refresh after admin status update. | **Minor**  | Open   |
| **BUG-004** | Images on Awareness Page are missing alt-text. | **Minor**  | Open   |

---

## 5. Conclusion & Recommendation

The Phase 2 testing cycle was successful. It validated the test plan and process, expanded test coverage, and identified key defects early in the development lifecycle.

It is **recommended** that the development team prioritize fixing the two "Major" severity defects (**BUG-001** and **BUG-002**) before the next phase of testing begins, as they significantly impact the core functionality of the application.

This concludes the activities for Phase 2. The project is ready for review.
