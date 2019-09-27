Feature: TST089_AbortInitialRisk_SFFLTY19TRAD

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFEFLTY19TRAD
When I pass "<Username>" and "<Password>" For SFEFLTY19TRAD
Then I click Login button For SFEFLTY19TRAD
And I should see the Appointment List For SFEFLTY19TRAD

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFEFLTY19TRAD
When I click on select button For SFEFLTY19TRAD
Then I should see Work Order window For SFEFLTY19TRAD

Scenario: Going through Call Forward
Given the "Work Order" window For SFEFLTY19TRAD
When i see Call Forward or Arrive Button For SFEFLTY19TRAD
Then I click on CALL FORWARD button For SFEFLTY19TRAD
Then I should see page contect display For SFEFLTY19TRAD
And I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19TRAD
And I should see Contact made field For SFEFLTY19TRAD

Scenario: Selecting job and setting to depart
Given the SFEFLTY19TRAD WorkOrder Page
When I fill the SFEFLTY19TRAD fields with the value 
And I click on SFEFLTY19TRAD DEPART button
Then I should see SFEFLTY19TRAD Depart for Appointment window 
And I should see the SFEFLTY19TRAD correct MPAN details
And I should see the SFEFLTY19TRAD correct Customer Name details
And I should see the SFEFLTY19TRAD correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFEFLTY19TRAD
When I click on OK button For SFEFLTY19TRAD	
And I should see ARRIVE button For SFEFLTY19TRAD
And I should see DOORSTEP PROTOCOL tab activated For SFEFLTY19TRAD

Scenario: Set job to Arrived status
Given the SFEFLTY19TRAD WorkOrder Page
When I click on ARRIVE button For SFEFLTY19TRAD	
Then I should see Arrival Time details For SFEFLTY19TRAD
And I should see SFEFLTY19TRAD BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFEFLTY19TRAD BE AWARE OF ANY DANGER! section 
When I fill the SFEFLTY19TRAD DoorStep Protocol fields with the value
And I click on SFEFLTY19TRAD ON SITE button 	
Then I should see SFEFLTY19TRAD RISK ASSESSMENT tab activated
And I should see SFEFLTY19TRAD INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFEFLTY19TRAD INITIAL RISK ASSESSMENT section
When I fill the Abort Initial Risk Fields with Values
When I click the Unabletoturnoff Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFEFLTY19TRAD" on the appointments page