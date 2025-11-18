# Risk-Based Test Plan - CleanCity

## Document Information
- **Project:** CleanCity Waste Pickup Scheduler
- **Phase:** 2 - Test Design & Early Execution
- **Date:** November 11, 2025
- **Risk Assessment Date:** November 11, 2025

---

| Risk ID | Category       | Risk Description                                   | Likelihood | Impact     | Risk Level | Affected Requirement(s) | Mitigation Strategy                                                      |
|--------|----------------|-----------------------------------------------------|------------|------------|------------|--------------------------|---------------------------------------------------------------------------|
| R001   | Functional     | Registration form accepts invalid email or duplicate entries | High       | Medium     | ?? High    | FR1, FR2                 | Implement email validation and duplicate check                           |
| R002   | Functional     | Login fails due to poor validation logic            | Medium     | High       | ?? High    | FR3, FR4                 | Use strong form validation and handle errors gracefully                  |
| R003   | Functional     | User session not maintained correctly               | Medium     | High       | ?? High    | FR26, FR28               | Implement session tokens and expiry                                      |
| R004   | Functional     | Pickup request form allows empty submissions        | High       | High       | ?? Critical| FR9, FR10                | Enforce field validation on front-end and back-end                       |
| R005   | Functional     | Duplicate waste pickup requests                     | Medium     | High       | ?? High    | FR15                     | Add duplicate request check based on location/date                       |
| R006   | Security       | Passwords stored in plain text                      | High       | Very High  | ?? Critical| NFR4                     | Hash passwords before storage (e.g., bcrypt)                            |
| R007   | Security       | Unauthorized user accesses admin panel              | Medium     | Very High  | ?? Critical| FR8, NFR5                | Role-based access control & authentication middleware                    |
| R008   | Security       | Lack of HTTPS encryption                            | Low        | High       | ?? Medium  | NFR4                     | Enforce HTTPS and use secure cookies                                     |
| R009   | Usability      | Poor mobile responsiveness                          | Medium     | Medium     | ?? Medium  | NFR2, NFR9               | Test on multiple devices; use responsive CSS                             |
| R010   | Usability      | Inconsistent dark mode / text scale across pages    | Medium     | Low        | ?? Low     | FR24, FR25               | Sync UI theme using global CSS variables                                 |
| R011   | Usability      | Lack of clear feedback messages after actions       | Medium     | Medium     | ?? Medium  | FR4, FR20, FR22          | Add descriptive success/error messages                                   |
| R012   | Performance    | Slow load time (>3s) on dashboard                    | Medium     | Medium     | ?? Medium  | NFR1                     | Optimize scripts, compress images, lazy load data                        |
| R013   | Data Integrity | Data lost after refresh or navigation               | Medium     | High       | ?? High    | FR29, FR30               | Ensure persistent localStorage and auto-refresh logic                    |
| R014   | Data Integrity | Inaccurate admin statistics                         | Low        | Medium     | ?? Low     | FR18                     | Validate status update logic and data recalculation                      |
| R015   | Accessibility  | Poor color contrast affecting readability           | Medium     | Medium     | ?? Low     | NFR8                     | Test against WCAG 2.1 AA contrast requirements                          |
| R016   | Compatibility  | UI breaks on certain browsers                       | Medium     | Medium     | ?? Medium  | NFR9                     | Cross-browser compatibility testing                                      |
| R017   | Scalability    | App performance drops with >100 users               | Low        | High       | ?? Medium  | NFR6                     | Optimize backend and implement caching                                   |
| R018   | Reliability    | LocalStorage data cleared unexpectedly              | Medium     | High       | ?? High    | FR29, FR30, NFR7         | Use fallback cloud storage or IndexedDB                                  |
| R019   | Compliance     | User data stored without consent                    | Low        | High       | ?? Medium  | NFR4                     | Add consent checkbox and privacy policy                                  |
| R020   | Maintainability| Poor documentation of code changes                  | Medium     | Medium     | ?? Low     | NFR10                    | Maintain changelogs and clear code comments                              |

