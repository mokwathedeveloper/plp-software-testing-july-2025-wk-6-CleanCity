| Requirement ID | Requirement Description        | Test Case ID(s)                 | Test Objective / Verification                                    | Status  |
|----------------|--------------------------------|----------------------------------|-------------------------------------------------------------------|---------|
| FR1            | Register new user              | TC_REG_01                        | Verify registration form accepts valid inputs                    | Pending |
| FR2            | Validate email/duplicate       | TC_REG_02, TC_REG_03             | Ensure duplicate email not accepted                               | Pending |
| FR3            | User login                     | TC_LOGIN_01                      | Verify login with correct credentials                             | Pending |
| FR4            | Invalid login                  | TC_LOGIN_02                      | Ensure error shown for wrong credentials                          | Pending |
| FR5            | Logout                         | TC_LOGOUT_01                     | Ensure session cleared on logout                                  | Pending |
| FR6            | Edit profile                   | TC_PROFILE_01                    | Verify updates save successfully                                  | Pending |
| FR7            | Role assignment                | TC_ROLE_01                       | Verify correct role assigned                                      | Pending |
| FR8            | Restrict admin access          | TC_ACCESS_01                     | Verify only admin can access admin dashboard                      | Pending |
| FR9            | Submit pickup request          | TC_PICKUP_01                     | Verify request submission workflow                                | Pending |
| FR10           | Validate pickup fields         | TC_PICKUP_02                     | Check validation for empty or invalid fields                      | Pending |
| FR11           | Store pickup data              | TC_PICKUP_03                     | Ensure data stored locally                                        | Pending |
| FR12           | View requests                  | TC_PICKUP_04                     | Verify request history displayed                                  | Pending |
| FR13           | Filter by status               | TC_FILTER_01                     | Validate filtering logic                                          | Pending |
| FR14           | Filter by location             | TC_FILTER_02                     | Validate location filter                                           | Pending |
| FR15           | Prevent duplicates             | TC_PICKUP_05                     | Ensure identical requests are rejected                             | Pending |
| FR16           | Admin view all                 | TC_ADMIN_01                      | Verify admin can view all requests                                | Pending |
| FR17           | Update status                  | TC_ADMIN_02                      | Ensure admin can update status                                     | Pending |
| FR18           | View statistics                | TC_ADMIN_03                      | Validate counts (Pending/Scheduled/Completed)                     | Pending |
| FR19           | Admin filter/search            | TC_ADMIN_04                      | Verify search and filter accuracy                                  | Pending |
| FR20           | Submit feedback                | TC_FEEDBACK_01                   | Verify feedback submission                                         | Pending |
| FR21           | Feedback details               | TC_FEEDBACK_02                   | Ensure Request ID and Reason required                              | Pending |
| FR22           | Validate feedback fields       | TC_FEEDBACK_03                   | Check form validation                                              | Pending |
| FR23           | View feedback                  | TC_FEEDBACK_04                   | Verify feedback displayed correctly                                | Pending |
| FR24           | Toggle dark mode               | TC_APPEAR_01                     | Ensure mode changes UI color scheme                                | Pending |
| FR25           | Adjust text scale              | TC_APPEAR_02                     | Verify text scaling affects font size globally                    | Pending |
| FR26           | Maintain session               | TC_SESSION_01                    | Check persistence after login                                      | Pending |
| FR27           | Restrict unauthenticated access| TC_ACCESS_02                     | Ensure redirect to login                                           | Pending |
| FR28           | Session ends on logout         | TC_SESSION_02                    | Verify session invalidated                                         | Pending |
| FR29           | Data persistence               | TC_DATA_01                       | Ensure data retained after refresh                                 | Pending |
| FR30           | Data retrieval                 | TC_DATA_02                       | Verify correct display of stored data                              | Pending |
| FR31           | Input validation               | TC_VALID_01                      | Check all form inputs validated                                    | Pending |
| NFR1           | Page load under 3s             | TC_PERF_01                       | Measure load time across pages                                     | Pending |
| NFR2           | Mobile responsiveness          | TC_RESP_01                       | Verify responsive design on multiple devices                       | Pending |
| NFR4           | Encrypted passwords            | TC_SEC_01                        | Inspect password storage                                           | Pending |
| NFR5           | Unauthorized access blocked    | TC_SEC_02                        | Attempt access without login                                       | Pending |
| NFR7           | Data consistency               | TC_DATA_03                       | Validate data persists correctly                                   | Pending |
| NFR8           | Color contrast                 | TC_UI_01                         | Verify accessibility contrast ratio                                | Pending |
| NFR9           | Cross-browser support          | TC_COMP_01                       | Test app on multiple browsers                                      | Pending |

