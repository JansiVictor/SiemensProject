Feature: TST181_AbortInitialRisk_EXCHANGE22

Scenario Outline: Logging in to job's "Work Order" window
Given the ExchTwTwo Login Page
When I pass ExchTwTwo "<Username>" and "<Password>"
Then I click ExchTwTwo Login button
And I should see the ExchTwTwo Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |


Scenario: Select the ExchTwTwo Latest workOrder
Given the ExchTwTwo Appointment List window
When I click on ExchTwTwo select button
Then I should see ExchTwTwo Work Order window

Scenario: Going through ExchTwTwo Call Forward
Given the ExchTwTwo "Work Order" window
When i see ExchTwTwo Call Forward or Arrive Button
Then I click on ExchTwTwo CALL FORWARD button
Then I should see page ExchTwTwo contect display
And I should see ExchTwTwo Contact made field

Scenario: Selecting ExchTwTwo job and setting to depart
Given the ExchTwTwo "Work Order" page
When I fill the ExchTwTwo fields with the value
And I click on ExchTwTwo DEPART button 
Then I should see ExchTwTwo Depart for Appointment window
And I should see the ExchTwTwo correct MPAN details
And I should see the ExchTwTwo correct Customer Name details
And I should see the ExchTwTwo correct PostCode details

Scenario: Approving ExchTwTwo "Depart for Appointment" job
And ExchTwTwo "Appointment" details
When I click on ExchTwTwo MPRNOK button  	
And I should see ExchTwTwo ARRIVE button
And I should see ExchTwTwo DOORSTEP PROTOCOL tab activated

Scenario: Set ExchTwTwo job to Arrived status
Given the ExchTwTwo "WorkOrder" page
When I click on ExchTwTwo ARRIVE button  	
Then I should see ExchTwTwo Arrival Time details
And I should see ExchTwTwo BE AWARE OF ANY DANGER! section

Scenario: Going through ExchTwTwo "BE AWARE OF ANY DANGER!" section
Given the ExchTwTwo BE AWARE OF ANY DANGER! section 
When I fill the ExchTwTwo DoorStep Protocol fields with the value
And I click on ExchTwTwo ON SITE button 	
Then I should see ExchTwTwo RISK ASSESSMENT tab activated
And I should see ExchTwTwo INITIAL RISK ASSESSMENT section

Scenario: Going through ExchTwTwo "INITIAL RISK ASSESSMENT"
Given the ExchTwTwo INITIAL RISK ASSESSMENT section
When I fill the Abort Initial Risk Fields with Values
When I click the Unabletoturnoff Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFGEXCH22" on the appointments page