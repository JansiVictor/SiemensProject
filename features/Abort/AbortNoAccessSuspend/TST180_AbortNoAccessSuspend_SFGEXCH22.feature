Feature: SFGEXCH22 - NoAbortAccessSuspend Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the ExchTwTwo Login Page
When I pass ExchTwTwo "<Username>" and "<Password>"
Then I click ExchTwTwo Login button
And I should see the ExchTwTwo Appointment List 

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |


Scenario: Select the ExchTwTwo Latest workOrder
Given the ExchTwTwo Appointment List window
When I click on ExchTwTwo select button
Then I should see ExchTwTwo Work Order window

Scenario: Going through ExchTwTwo Call Forward
Given the ExchTwTwo "Work Order" window
When i see ExchTwTwo Call Forward or Arrive Button
Then I click on ExchTwTwo CALL FORWARD button
Then I should see page ExchTwTwo contect display
#######And I should see the ExchTwTwo CUSTOMER CONTACT NUMBER
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
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
Then I should see the ExchTwTwo Appointment List

Scenario: Going through Aborting Suspended Job
Given the ExchTwTwo Appointment List window
When I should click the AbortNoAccessSuspended status for the workorder "SFGEXCH22"
Then I should see ExchTwTwo BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFGEXCH22" on the appointments page