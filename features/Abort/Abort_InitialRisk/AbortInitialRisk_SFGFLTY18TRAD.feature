Feature: SFGFLTY18TRAD Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFGFLTY18TRAD
When I pass "<Username>" and "<Password>" For SFGFLTY18TRAD
Then I click Login button For SFGFLTY18TRAD
And I should see the Appointment List For SFGFLTY18TRAD

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFGFLTY18TRAD
When I click on select button For SFGFLTY18TRAD
Then I should see Work Order window For SFGFLTY18TRAD

Scenario: Going through Call Forward
Given the "Work Order" window For SFGFLTY18TRAD
When i see Call Forward or Arrive Button For SFGFLTY18TRAD
Then I click on CALL FORWARD button For SFGFLTY18TRAD
Then I should see page contect display For SFGFLTY18TRAD
And I should see the CUSTOMER CONTACT NUMBER For SFGFLTY18TRAD
And I should see Contact made field For SFGFLTY18TRAD

Scenario: Selecting job and setting to depart
Given the SFGFLTY18TRAD WorkOrder Page
When I fill the SFGFLTY18TRAD fields with the value 
And I click on SFGFLTY18TRAD DEPART button
Then I should see SFGFLTY18TRAD Depart for Appointment window 
And I should see the SFGFLTY18TRAD correct MPAN details
And I should see the SFGFLTY18TRAD correct Customer Name details
And I should see the SFGFLTY18TRAD correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFGFLTY18TRAD
When I click on OK button For SFGFLTY18TRAD	
And I should see ARRIVE button For SFGFLTY18TRAD
And I should see DOORSTEP PROTOCOL tab activated For SFGFLTY18TRAD

Scenario: Set job to Arrived status
Given the SFGFLTY18TRAD WorkOrder Page
When I click on ARRIVE button For SFGFLTY18TRAD	
Then I should see Arrival Time details For SFGFLTY18TRAD
And I should see SFGFLTY18TRAD BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFGFLTY18TRAD BE AWARE OF ANY DANGER! section 
When I fill the SFGFLTY18TRAD DoorStep Protocol fields with the value
And I click on SFGFLTY18TRAD ON SITE button 	
Then I should see SFGFLTY18TRAD RISK ASSESSMENT tab activated
And I should see SFGFLTY18TRAD INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFGFLTY18TRAD INITIAL RISK ASSESSMENT section
When I fill the SFGFLTY18TRAD initialRisk field with the values
Then I should see SFGFLTY18TRAD RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
Given the SFGFLTY18TRAD RISK ASSESSMENT - ELEC section
When I fill the SFGFLTY18TRAD RISK ASSESSMENT - ELEC fields with the values
And I click on SFGFLTY18TRAD CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on SFGFLTY18TRAD NEXT SECTION button
Then I should see SFGFLTY18TRAD Initial Risk Assessment for GAS section