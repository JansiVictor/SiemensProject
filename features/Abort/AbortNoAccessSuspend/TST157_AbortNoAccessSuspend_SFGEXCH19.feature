Feature: SFGEXCH19- AbortNoAccessSuspend Workflow

Scenario: Post SFGEXCH19 SOAP Request
Given I post workorder using "xmlrequest/SFGEXCH19.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the ExchngNineteen Login Page
When I pass ExchngNineteen "<Username>" and "<Password>"
Then I click ExchngNineteen Login button
#And I should see the ExchngNineteen Appointment List 

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |


Scenario: Select the Latest ExchngNineteen workOrder
Given the ExchngNineteen Appointment List window
When I click on ExchngNineteen select button
Then I should see ExchngNineteen Work Order window

Scenario: Going through ExchngNineteen Call Forward
Given the ExchngNineteen "Work Order" window
When i see ExchngNineteen Call Forward or Arrive Button
Then I click on ExchngNineteen CALL FORWARD button
Then I should see ExchngNineteen page contect display
#And I should see the ExchngNineteen CUSTOMER CONTACT NUMBER
And I should see ExchngNineteen Contact made field

Scenario: Selecting ExchngNineteen job and setting to depart
Given the ExchngNineteen "Work Order" page
When I fill the ExchngNineteen fields with the value
And I click on ExchngNineteen DEPART button 
Then I should see ExchngNineteen  for Appointment window
And I should see the ExchngNineteen correct MPAN details
And I should see the ExchngNineteen correct Customer Name details
And I should see the ExchngNineteen correct PostCode details

Scenario: Approving ExchngNineteen "Depart for Appointment" job
And "Appointment" ExchngNineteen details
When I click on ExchngNineteen OK button  	
And I should see ExchngNineteen ARRIVE button
And I should see ExchngNineteen DOORSTEP PROTOCOL tab activated

Scenario: Set ExchngNineteen job to Arrived status
Given the ExchngNineteen "WorkOrder" page
When I click on ExchngNineteen ARRIVE button  	
Then I should see ExchngNineteen Arrival Time details
And I should seeExchngNineteen  BE AWARE OF ANY DANGER! section

Scenario: Going through ExchngNineteen "BE AWARE OF ANY DANGER!" section
Given the ExchngNineteen BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
#And I should see the ExchngNineteen Appointment List

Scenario: Going through Aborting Suspended Job
Given the ExchngNineteen Appointment List window
When I should click the AbortNoAccessSuspended status for the workorder "SFGEXCH19"
Then I should seeExchngNineteen  BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFGEXCH19" on the appointments page

Scenario: Going through deleting the work order after use 
When I delete workorder after use
Then workorder should no longer exist