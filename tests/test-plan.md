# CleanCity QA Test Plan

## 1. Introduction

This document outlines the testing strategy for the CleanCity project. The purpose of this plan is to detail the scope, approach, resources, and schedule of all testing activities. The goal is to ensure the application is reliable, functional, and meets the specified requirements before deployment.

## 2. Scope of Testing

### In Scope

*   **User Authentication:** Registration, Login, Password Validation, Session Management.
*   **Waste Management:** Scheduling pickups, Managing requests, Status tracking.
*   **Dashboard & Analytics:** Viewing waste data and reports.
*   **Content Management:** Blog and awareness content.
*   **Community Features:** Community feed and interactions.
*   **Admin Functions:** User management and system configuration.
*   **Non-Functional Testing:** Basic usability and compatibility testing.

### Out of Scope

*   Performance/Load/Stress testing beyond basic usability.
*   Advanced security penetration testing.
*   Database migration testing.
*   Third-party API integration testing.

## 3. Test Strategy

The testing process will be primarily manual, with the potential for automated scripts for regression testing if time permits.

*   **Functional Testing:** Verifying that all features work as per the functional requirements.
*   **UI/UX Testing:** Ensuring the user interface is intuitive, user-friendly, and adheres to design specifications.
*   **Compatibility Testing:** Testing the application on different browsers (Chrome, Firefox) and devices (desktop, mobile).
*   **Regression Testing:** Re-testing existing functionality after bug fixes or new feature implementations to ensure no new issues have been introduced.

## 4. Test Environment

Testing will be conducted on the environments specified in the `docs/technical-specs.md` document.

*   **Browsers:** Google Chrome (latest), Mozilla Firefox (latest)
*   **Operating Systems:** Windows 10, macOS, Linux (Ubuntu)
*   **Devices:** Desktop and Mobile (emulated via browser developer tools)

## 5. Team Roles and Responsibilities

| Role           | Name                 | Responsibilities                                       |
| :------------- | :------------------- | :----------------------------------------------------- |
| **Test Manager** | mokwa moffat ohuru   | Planning, scheduling, coordination, metric tracking    |
| **Risk Analyst** | Abraham Maiko Kingoo | Risk identification, prioritization, test design linkage |
| **Test Executor**  | Olaleye Ibrahim      | Execution, evidence capture, defect logging            |

*Note: Team members can share roles and responsibilities as needed.*

## 6. Communication Plan

*   **Primary Communication Channel:** WhatsApp Group
*   **Project Board:** GitHub Projects will be used for tracking all tasks, user stories, and defects.
*   **Weekly Meetings:** Wednesdays, as per `docs/meeting-schedule.md`.
*   **Defect Reporting:** All bugs will be logged in the GitHub Projects board with clear steps to reproduce, severity, and priority.

## 7. Testing Deliverables

*   **Test Plan:** This document.
*   **Test Cases:** Detailed steps for testing features.
*   **Defect Log:** A log of all bugs found during testing, managed in GitHub Projects.
*   **Final Test Report:** A summary of all testing activities and results.

## 8. Timeline

*   **Phase 1 (Nov 5):** Test Planning and Setup.
*   **Phase 2 (Nov 11):** Test Design and Execution.
*   **Phase 3 (Nov 18):** Final Testing and Reporting.

