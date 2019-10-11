Feature: SFGINST14 - AbortNoAccessSuspend WorkFlow

Scenario: Post SFGINST14 SOAP Request
Given I post workorder using "xmlrequest/SFGINST14.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the INSTFrtn Login Page
When I pass INSTFrtn "<Username>" and "<Password>"
Then I click INSTFrtn Login button
#And I should see the INSTFrtn Appointment List 

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |


Scenario: Select the Latest INSTFrtn workOrder
Given the INSTFrtn Appointment List window
When I click on INSTFrtn select button
Then I should see INSTFrtn Work Order window

Scenario: Going through INSTFrtn Call Forward
Given the INSTFrtn "Work Order" window
When i see INSTFrtn Call Forward or Arrive Button
Then I click on INSTFrtn CALL FORWARD button
Then I should see INSTFrtn page contect display
And I should see INSTFrtn Contact made field

Scenario: Selecting INSTFrtn job and setting to depart
Given the INSTFrtn "Work Order" page
When I fill the INSTFrtn fields with the value
And I click on INSTFrtn DEPART button 
Then I should see INSTFrtn  for Appointment window
And I should see the INSTFrtn correct MPAN details
And I should see the INSTFrtn correct Customer Name details
And I should see the INSTFrtn correct PostCode details

#######Aparna Das - Change 'And' to 'Given' on 25/09
Scenario: Approving INSTFrtn "Depart for Appointment" job
Given "Appointment" INSTFrtn details
When I click on INSTFrtn OK button  	
And I should see INSTFrtn ARRIVE button
And I should see INSTFrtn DOORSTEP PROTOCOL tab activated

Scenario: Set INSTFrtn job to Arrived status
When I click on INSTFrtn ARRIVE button  	
Then I should see INSTFrtn Arrival Time details
And I should seeINSTFrtn  BE AWARE OF ANY DANGER! section

Scenario: Going through INSTFrtn "BE AWARE OF ANY DANGER!" section
Given the INSTFrtn BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
#Then I should see the Appointment List For SFEINST15

Scenario: Going through Aborting Suspended Job
Given the INSTFrtn Appointment List window
When I should click the AbortNoAccessSuspended status for the workorder "SFGINST14"
Then I should seeINSTFrtn  BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFGINST14" on the appointments page

Scenario: Going through deleting the work order after use 
When I delete workorder after use
Then workorder should no longer exist