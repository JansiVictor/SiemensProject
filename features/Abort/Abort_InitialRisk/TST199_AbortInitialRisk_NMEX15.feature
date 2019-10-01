Feature: TST199_AbortInitialRisk_NMEX15

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFENMEX15
When I pass "<Username>" and "<Password>" For SFENMEX15
Then I click Login button For SFENMEX15
And I should see the Appointment List For SFENMEX15

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFENMEX15
When I click on select button For SFENMEX15
Then I should see Work Order window For SFENMEX15

Scenario: Going through Call Forward
Given the "Work Order" window For SFENMEX15
When i see Call Forward or Arrive Button For SFENMEX15
Then I click on CALL FORWARD button For SFENMEX15
Then I should see page contect display For SFENMEX15
And I should see the CUSTOMER CONTACT NUMBER For SFENMEX15
And I should see Contact made field For SFENMEX15

Scenario: Selecting job and setting to depart
Given the SFENMEX15 WorkOrder Page
When I fill the SFENMEX15 fields with the value 
And I click on SFENMEX15 DEPART button
Then I should see SFENMEX15 Depart for Appointment window 
And I should see the SFENMEX15 correct MPAN details
And I should see the SFENMEX15 correct Customer Name details
And I should see the SFENMEX15 correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFENMEX15
When I click on OK button For SFENMEX15	
And I should see ARRIVE button For SFENMEX15
And I should see DOORSTEP PROTOCOL tab activated For SFENMEX15

Scenario: Set job to Arrived status
Given the SFENMEX15 WorkOrder Page
When I click on ARRIVE button For SFENMEX15	
Then I should see Arrival Time details For SFENMEX15
And I should see SFENMEX15 BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFENMEX15 BE AWARE OF ANY DANGER! section 
When I fill the SFENMEX15 DoorStep Protocol fields with the value
And I click on SFENMEX15 ON SITE button 	
Then I should see SFENMEX15 RISK ASSESSMENT tab activated
And I should see SFENMEX15 INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFENMEX15 INITIAL RISK ASSESSMENT section
When I fill the Abort Initial Risk Fields with Values
When I click the Unabletoturnoff Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFGNMEX15" on the appointments page