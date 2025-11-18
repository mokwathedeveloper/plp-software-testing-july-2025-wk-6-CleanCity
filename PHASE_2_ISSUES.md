# CleanCity - Open Issues for Phase 2

**Document Version:** 1.0  
**Date:** November 11, 2025

This document lists the known issues and defects identified during the initial testing phase. These items should be prioritized and assigned to team members for resolution in the next development cycle.

---

### BUG-001: [Home Page] Form can be submitted without a date

- [ ] **Status:** Open
- [ ] **Severity:** Major
- [ ] **Priority:** High
- [ ] **Assignee:** ____________
- **Description:** The waste pickup request form can be submitted successfully even when the date field is left empty. This creates invalid data and breaks any date-based filtering or scheduling logic.

---

### BUG-002: [Dashboard] "Eldoret" location filter is broken

- [ ] **Status:** Open
- [ ] **Severity:** Major
- [ ] **Priority:** High
- [ ] **Assignee:** ____________
- **Description:** When a user filters the dashboard by the "Eldoret" location, the table incorrectly displays results for "Nairobi" instead. This makes the filtering feature unreliable.

---

### BUG-003: [Admin Panel] UI does not refresh after status update

- [ ] **Status:** Open
- [ ] **Severity:** Minor
- [ ] **Priority:** Medium
- [ ] **Assignee:** ____________
- **Description:** When an admin changes the status of a request (e.g., "Mark as Scheduled"), the change is saved correctly but the UI does not update automatically. A manual page refresh is required to see the new status, leading to a poor user experience.

---

### BUG-004: [Awareness Page] Images are missing alt-text

- [ ] **Status:** Open
- [ ] **Severity:** Minor
- [ ] **Priority:** Low
- [ ] **Assignee:** ____________
- **Description:** Images on the Awareness page are missing the `alt` attribute, making them inaccessible to users with screen readers. This is a violation of WCAG 2.1 accessibility standards.
