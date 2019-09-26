Feature: TST30_AbortElecRisk_FLTY20SMETS2

Scenario Outline: Logging in to job's "Work Order" window
Given the FLTYTwntyAbort Login Page
When I pass FLTYTwntyAbort "<Username>" and "<Password>"
Then I click FLTYTwntyAbort Login button
And I should see the FLTYTwntyAbort Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest FLTYTwntyAbort workOrder
Given the FLTYTwntyAbort Appointment List window
When I click on FLTYTwntyAbort select button
Then I should see FLTYTwntyAbort Work Order window

Scenario: Going through FLTYTwntyAbort Call Forward
Given the FLTYTwntyAbort "Work Order" window
When i see FLTYTwntyAbort Call Forward or Arrive Button
Then I click on FLTYTwntyAbort CALL FORWARD button
Then I should see FLTYTwntyAbort page contect display
And I should see the FLTYTwntyAbort CUSTOMER CONTACT NUMBER
And I should see FLTYTwntyAbort Contact made field

Scenario: Selecting FLTYTwntyAbort job and setting to depart
Given the FLTYTwntyAbort "Work Order" page
When I fill the FLTYTwntyAbort fields with the value
And I click on FLTYTwntyAbort DEPART button 
Then I should see FLTYTwntyAbort  for Appointment window
And I should see the FLTYTwntyAbort correct MPAN details
And I should see the FLTYTwntyAbort correct Customer Name details
And I should see the FLTYTwntyAbort correct PostCode details

Scenario: Approving FLTYTwntyAbort "Depart for Appointment" job
And "Appointment" FLTYTwntyAbort details
When I click on FLTYTwntyAbort Appointment OK button  	
And I should see FLTYTwntyAbort ARRIVE button
And I should see FLTYTwntyAbort DOORSTEP PROTOCOL tab activated

Scenario: Set FLTYTwntyAbort job to Arrived status
//Given the FLTYTwntyAbort "WorkOrder" page
When I click on FLTYTwntyAbort ARRIVE button  	
Then I should see FLTYTwntyAbort Arrival Time details
And I should see FLTYTwntyAbort  BE AWARE OF ANY DANGER! section

Scenario: Going through FLTYTwntyAbort "BE AWARE OF ANY DANGER!" section
Given the FLTYTwntyAbort BE AWARE OF ANY DANGER! section 
When I fill the FLTYTwntyAbort DoorStep Protocol fields with the value
And I click on FLTYTwntyAbort ON SITE button 	
Then I should see FLTYTwntyAbort RISK ASSESSMENT tab activated
And I should see FLTYTwntyAbort Initial Risk Assessment for GAS section

Scenario: Going through FLTYTwntyAbort "INITIAL RISK ASSESSMENT"
Given the FLTYTwntyAbort INITIAL RISK ASSESSMENT section
When I fill the FLTYTwntyAbort initialRisk field with the values
#Then I should see the FLTYTwntyAbort see INFO window

Scenario: Going through FLTYTwntyAbort "INFO" window   
Given the FLTYTwntyAbort INFO window with the text
#When I click on FLTYTwntyAbort INFO OK button 
#Then I should see FLTYTwntyAbort RISK ASSESSMENT ELEC section 

Scenario: Going through FLTYTwntyAbort "RISK ASSESSMENT - ELEC" section
Given the FLTYTwntyAbort RISK ASSESSMENT - ELEC section
When I fill the FLTYTwntyAbort RISK ASSESSMENT - ELEC fields with the values
And I click on FLTYTwntyAbort CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on FLTYTwntyAbort NEXT SECTION button
Then I should see the FLTYTwntyAbort RISK ASSESSMENT - GAS section