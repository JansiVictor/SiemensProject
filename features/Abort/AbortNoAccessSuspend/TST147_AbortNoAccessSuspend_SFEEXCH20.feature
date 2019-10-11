Feature: SFEEXCH20- AbortNoAccessSuspend Workflow

Scenario: Post SFEEXCH20 SOAP Request
Given I post workorder using "xmlrequest/SFEEXCH20.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the ExTwnty Login Page
When I pass ExTwnty "<Username>" and "<Password>"
Then I click ExTwnty Login button
And I should see the ExchangeTwnty Appointment List 

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |


Scenario: Select the Latest ExchangeTwnty workOrder
Given the ExchangeTwnty Appointment List window
When I click on ExchangeTwnty select button
Then I should see ExchangeTwnty Work Order window

Scenario: Going through ExchangeTwnty Call Forward
Given the ExchangeTwnty "Work Order" window
When i see ExchangeTwnty Call Forward or Arrive Button
Then I click on ExchangeTwnty CALL FORWARD button
Then I should see ExchangeTwnty page contect display
#And I should see the ExchangeTwnty CUSTOMER CONTACT NUMBER
And I should see ExchangeTwnty Contact made field

Scenario: Selecting ExchangeTwnty job and setting to depart
Given the ExchangeTwnty Work Order page
When I fill the ExchangeTwnty fields with the value
And I click on ExchangeTwnty DEPART button 
Then I should see ExchangeTwnty Depart for Appointment window
And I should see the ExchangeTwnty correct MPAN details
And I should see the ExchangeTwnty correct Customer Name details
And I should see the ExchangeTwnty correct PostCode details

Scenario: Approving ExchangeTwnty "Depart for Appointment" job
And ExchangeTwnty "Appointment" details
When I click on ExchangeTwnty OK button  	
And I should see ExchangeTwnty ARRIVE button
Then I should see ExchangeTwnty DOORSTEP PROTOCOL tab activated

Scenario: Set ExchangeTwnty job to Arrived status
#Given the ExchangeTwnty "WorkOrder" page
When I click on ExchangeTwnty ARRIVE button  	
Then I should see ExchangeTwnty Arrival Time details
And I should see ExchangeTwnty BE AWARE OF ANY DANGER! section

Scenario: Going through ExchangeTwnty "BE AWARE OF ANY DANGER!" section
Given the ExchangeTwnty BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
Then I should see the ExchangeTwnty Appointment List

Scenario: Going through Aborting Suspended Job
Given the ExchangeTwnty Appointment List window
When I should click the AbortNoAccessSuspended status for the workorder "SFEEXCH20"
Then I should see ExchangeTwnty BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFEEXCH20" on the appointments page

Scenario: Going through deleting the work order after use 
When I delete workorder after use
Then workorder should no longer exist