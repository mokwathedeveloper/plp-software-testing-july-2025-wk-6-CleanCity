# Comprehensive Test Scripts - All Requirements

## Test Script Execution Guide

### Pre-Test Setup
1. Open browser (Chrome/Firefox)
2. Navigate to `http://localhost:3000`
3. Clear localStorage: `localStorage.clear()`
4. Refresh page

---

## Script 1: User Registration & Authentication (FR1-FR5)

### Test ID: TC_REG_01, TC_REG_02, TC_REG_03
**Objective:** Validate user registration with valid/invalid inputs

**Steps:**
1. **Valid Registration (TC_REG_01)**
   - Navigate to Register page
   - Enter name: "John Doe"
   - Enter email: "john@test.com"
   - Enter password: "Password123!"
   - Click Register
   - **Verify:** Success message appears
   - **Verify:** Redirected to login/dashboard

2. **Duplicate Email (TC_REG_02)**
   - Try registering with same email
   - **Verify:** Error "Email already exists"

3. **Invalid Email Format (TC_REG_03)**
   - Enter invalid email: "invalid-email"
   - **Verify:** Validation error shown

### Test ID: TC_LOGIN_01, TC_LOGIN_02
**Objective:** Validate login functionality

**Steps:**
1. **Valid Login (TC_LOGIN_01)**
   - Enter correct credentials
   - Click Login
   - **Verify:** Successful login, dashboard access

2. **Invalid Login (TC_LOGIN_02)**
   - Enter wrong password
   - **Verify:** Error message displayed

### Test ID: TC_LOGOUT_01
**Objective:** Verify logout clears session

**Steps:**
1. Click Logout button
2. Try accessing protected page
3. **Verify:** Redirected to login
4. **Verify:** Session data cleared

**Expected Duration:** 15 minutes

---

## Script 2: Profile Management (FR6-FR8)

### Test ID: TC_PROFILE_01
**Objective:** Test profile editing functionality

**Steps:**
1. Login and navigate to Profile
2. Click "Edit Profile"
3. Update name to "Updated Name"
4. Update email to "updated@test.com"
5. Click Save
6. **Verify:** Changes saved and displayed
7. Refresh page
8. **Verify:** Changes persist

### Test ID: TC_ROLE_01
**Objective:** Verify role assignment

**Steps:**
1. Check user role in profile
2. **Verify:** Correct role displayed (user/admin)
3. **Verify:** Role-based menu items shown

### Test ID: TC_ACCESS_01
**Objective:** Restrict admin access

**Steps:**
1. Login as regular user
2. Try accessing `/admin` directly
3. **Verify:** Access denied or redirect
4. Login as admin
5. **Verify:** Admin dashboard accessible

**Expected Duration:** 12 minutes

---

## Script 3: Pickup Request Management (FR9-FR15)

### Test ID: TC_PICKUP_01
**Objective:** Verify pickup request submission

**Steps:**
1. Navigate to Home/Request page
2. Fill form:
   - Location: "Nairobi"
   - Waste Type: "General"
   - Date: Tomorrow's date
   - Address: "123 Test Street"
3. Click Submit
4. **Verify:** Success message
5. **Verify:** Request appears in dashboard

### Test ID: TC_PICKUP_02
**Objective:** Validate pickup form fields

**Steps:**
1. Submit empty form
2. **Verify:** All required field errors shown
3. Enter invalid date (past date)
4. **Verify:** Date validation error

### Test ID: TC_PICKUP_03
**Objective:** Ensure data stored locally

**Steps:**
1. Submit valid request
2. Open DevTools → Application → localStorage
3. **Verify:** Request data stored
4. **Verify:** Correct data structure

### Test ID: TC_PICKUP_04
**Objective:** View request history

**Steps:**
1. Navigate to Dashboard
2. **Verify:** All user requests displayed
3. **Verify:** Request details accurate

### Test ID: TC_FILTER_01, TC_FILTER_02
**Objective:** Test filtering functionality

**Steps:**
1. **Status Filter (TC_FILTER_01)**
   - Select "Pending" filter
   - **Verify:** Only pending requests shown
   - Select "Completed" filter
   - **Verify:** Only completed requests shown

2. **Location Filter (TC_FILTER_02)**
   - Select "Nairobi" location
   - **Verify:** Only Nairobi requests shown
   - Select "Kisumu" location
   - **Verify:** Only Kisumu requests shown

### Test ID: TC_PICKUP_05
**Objective:** Prevent duplicate requests

**Steps:**
1. Submit pickup request
2. Submit identical request immediately
3. **Verify:** Duplicate prevention message
4. **Verify:** Only one request created

**Expected Duration:** 20 minutes

---

## Script 4: Admin Functions (FR16-FR19)

### Test ID: TC_ADMIN_01
**Objective:** Admin view all requests

**Steps:**
1. Login as admin
2. Navigate to Admin dashboard
3. **Verify:** All user requests visible
4. **Verify:** User details shown for each request

### Test ID: TC_ADMIN_02
**Objective:** Update request status

**Steps:**
1. Select pending request
2. Change status to "Scheduled"
3. Click Update
4. **Verify:** Status updated in UI
5. **Verify:** Change persisted in localStorage

### Test ID: TC_ADMIN_03
**Objective:** View statistics

**Steps:**
1. Check statistics section
2. **Verify:** Pending count accurate
3. **Verify:** Scheduled count accurate
4. **Verify:** Completed count accurate
5. Update a status and verify counts update

### Test ID: TC_ADMIN_04
**Objective:** Admin search and filter

**Steps:**
1. Use search box to find specific request ID
2. **Verify:** Correct request displayed
3. Apply location filter
4. **Verify:** Filter works correctly
5. Apply status filter
6. **Verify:** Results match filter criteria

**Expected Duration:** 15 minutes

---

## Script 5: Feedback System (FR20-FR23)

### Test ID: TC_FEEDBACK_01
**Objective:** Submit feedback successfully

**Steps:**
1. Navigate to Feedback page
2. Enter Request ID: "REQ001"
3. Enter feedback: "Great service"
4. Click Submit
5. **Verify:** Success message appears
6. **Verify:** Form cleared

### Test ID: TC_FEEDBACK_02
**Objective:** Ensure required fields

**Steps:**
1. Try submitting with empty Request ID
2. **Verify:** Error message shown
3. Try submitting with empty feedback
4. **Verify:** Error message shown

### Test ID: TC_FEEDBACK_03
**Objective:** Form validation

**Steps:**
1. Enter invalid Request ID format
2. **Verify:** Validation error
3. Enter extremely long feedback (>1000 chars)
4. **Verify:** Length validation or truncation

### Test ID: TC_FEEDBACK_04
**Objective:** View feedback

**Steps:**
1. Submit feedback
2. Navigate to admin panel (if admin)
3. **Verify:** Feedback appears in admin view
4. **Verify:** Feedback details accurate

**Expected Duration:** 12 minutes

---

## Script 6: UI/UX Features (FR24-FR25)

### Test ID: TC_APPEAR_01
**Objective:** Dark mode toggle

**Steps:**
1. Locate dark mode toggle
2. Click to enable dark mode
3. **Verify:** UI colors change to dark theme
4. **Verify:** All pages use dark theme
5. Toggle back to light mode
6. **Verify:** UI returns to light theme

### Test ID: TC_APPEAR_02
**Objective:** Text scaling

**Steps:**
1. Locate text scale controls
2. Increase text size
3. **Verify:** Font size increases globally
4. **Verify:** Layout remains functional
5. Decrease text size
6. **Verify:** Font size decreases globally

**Expected Duration:** 8 minutes

---

## Script 7: Session & Security (FR26-FR31)

### Test ID: TC_SESSION_01
**Objective:** Session persistence

**Steps:**
1. Login successfully
2. Navigate between pages
3. **Verify:** Session maintained
4. Refresh browser
5. **Verify:** Still logged in

### Test ID: TC_ACCESS_02
**Objective:** Unauthenticated access restriction

**Steps:**
1. Logout or open incognito window
2. Try accessing `/dashboard` directly
3. **Verify:** Redirected to login
4. Try accessing `/admin` directly
5. **Verify:** Redirected to login

### Test ID: TC_SESSION_02
**Objective:** Session ends on logout

**Steps:**
1. Login and note session data
2. Logout
3. Check localStorage for session data
4. **Verify:** Session data cleared
5. Try accessing protected pages
6. **Verify:** Redirected to login

### Test ID: TC_DATA_01, TC_DATA_02
**Objective:** Data persistence and retrieval

**Steps:**
1. **Data Persistence (TC_DATA_01)**
   - Create pickup request
   - Submit feedback
   - Update profile
   - Refresh browser
   - **Verify:** All data retained

2. **Data Retrieval (TC_DATA_02)**
   - Navigate to dashboard
   - **Verify:** Requests display correctly
   - Navigate to profile
   - **Verify:** Profile data accurate

### Test ID: TC_VALID_01
**Objective:** Input validation

**Steps:**
1. Test all forms with invalid inputs:
   - Registration: invalid email, weak password
   - Pickup: invalid date, empty fields
   - Feedback: invalid Request ID
   - Profile: invalid email format
2. **Verify:** Appropriate validation messages
3. **Verify:** Forms prevent invalid submissions

**Expected Duration:** 18 minutes

---

## Script 8: Non-Functional Requirements (NFR1-NFR9)

### Test ID: TC_PERF_01
**Objective:** Page load performance

**Steps:**
1. Open DevTools → Network tab
2. Navigate to each page and measure load time:
   - Home page
   - Dashboard
   - Admin panel
   - Profile page
3. **Verify:** All pages load under 3 seconds
4. **Record:** Actual load times

### Test ID: TC_RESP_01
**Objective:** Mobile responsiveness

**Steps:**
1. Open DevTools → Device toolbar
2. Test on multiple device sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1200px)
3. **Verify:** Layout adapts properly
4. **Verify:** All functionality works on mobile

### Test ID: TC_SEC_01
**Objective:** Password encryption

**Steps:**
1. Register new user
2. Open DevTools → Application → localStorage
3. **Verify:** Password not stored in plain text
4. **Verify:** Sensitive data encrypted/hashed

### Test ID: TC_SEC_02
**Objective:** Unauthorized access blocked

**Steps:**
1. Open incognito window
2. Try accessing protected URLs directly:
   - `/dashboard`
   - `/admin`
   - `/profile`
3. **Verify:** All redirect to login
4. **Verify:** No data accessible without auth

### Test ID: TC_DATA_03
**Objective:** Data consistency

**Steps:**
1. Create test data across multiple sessions
2. Verify data integrity after:
   - Browser refresh
   - Tab close/reopen
   - Multiple concurrent sessions
3. **Verify:** No data corruption
4. **Verify:** Consistent data across sessions

### Test ID: TC_UI_01
**Objective:** Color contrast accessibility

**Steps:**
1. Use browser accessibility tools
2. Check contrast ratios for:
   - Text on backgrounds
   - Button colors
   - Form elements
3. **Verify:** WCAG AA compliance (4.5:1 ratio)
4. Test in both light and dark modes

### Test ID: TC_COMP_01
**Objective:** Cross-browser compatibility

**Steps:**
1. Test application in:
   - Chrome (latest)
   - Firefox (latest)
   - Safari (if available)
   - Edge (latest)
2. **Verify:** Consistent functionality
3. **Verify:** UI renders correctly
4. **Record:** Any browser-specific issues

**Expected Duration:** 25 minutes

---

## Test Data Sets

### Valid Test Data:
```
Users:
- Name: "John Doe", Email: "john@test.com", Password: "Password123!"
- Name: "Jane Admin", Email: "admin@test.com", Password: "Admin123!"

Request IDs: REQ001, REQ002, REQ003, REQ004, REQ005
Locations: Nairobi, Kisumu, Mombasa, Eldoret
Waste Types: General, Recyclable, Hazardous
Addresses: "123 Test Street", "456 Main Road", "789 Park Avenue"
```

### Invalid Test Data:
```
Emails: invalid-email, @domain.com, user@, user space@domain.com
Passwords: 123, password, PASSWORD, Pass1
Request IDs: INVALID123, 999999, "", "   ", NULL
Dates: Yesterday's date, Invalid format dates
XSS Payloads: <script>alert('XSS')</script>, <img src=x onerror=alert(1)>
```

---

## Evidence Collection

### Screenshots Required:
- Success/error messages for each test case
- Form validation states
- Before/after states for data changes
- Mobile responsive layouts
- Cross-browser comparison shots

### Performance Metrics:
- Page load times
- Network request counts
- Memory usage patterns
- Accessibility audit results

### File Naming Convention:
`YYYYMMDD_HHMMSS_TestID_Description.png`

Example: `20251111_143022_TC_REG_01_SuccessfulRegistration.png`

---

## Execution Checklist

### Before Each Script:
- [ ] Clear browser cache and localStorage
- [ ] Verify application is running
- [ ] Prepare test data
- [ ] Open DevTools if needed
- [ ] Start screen recording (optional)

### During Execution:
- [ ] Follow steps exactly as written
- [ ] Capture evidence for each verification
- [ ] Note any deviations from expected results
- [ ] Record timing for performance tests
- [ ] Document any browser-specific behavior

### After Each Script:
- [ ] Log results in defect tracking
- [ ] Save all evidence files
- [ ] Clean up test data
- [ ] Update test status
- [ ] Share findings with team