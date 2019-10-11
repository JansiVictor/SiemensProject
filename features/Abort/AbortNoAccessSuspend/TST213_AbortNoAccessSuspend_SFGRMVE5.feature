Feature: SFGRMVE5 - AbortNoAccessSuspend Workflow

Scenario: Post SFGRMVE5 SOAP Request
Given I post workorder using "xmlrequest/SFGRMVE5.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the RmveGas Login Page
When I pass RmveGas "<Username>" and "<Password>"
Then I click RmveGas Login button
#And I should see the RmveGas Appointment List 

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest RmveGas workOrder
Given the RmveGas Appointment List window
When I click on RmveGas select button
#Then I should see RmveGas Work Order window

Scenario: Going through RmveGas Call Forward
Given the RmveGas "Work Order" window
When i see RmveGas Call Forward or Arrive Button
Then I click on RmveGas CALL FORWARD button
Then I should see RmveGas page contect display
#And I should see the RmveGas CUSTOMER CONTACT NUMBER
And I should see RmveGas Contact made field

Scenario: Selecting RmveGas job and setting to depart
Given the RmveGas "Work Order" page
When I fill the RmveGas fields with the value
And I click on RmveGas DEPART button 
Then I should see RmveGas  for Appointment window
And I should see the RmveGas correct MPAN details
And I should see the RmveGas correct Customer Name details
And I should see the RmveGas correct PostCode details

Scenario: Approving RmveGas "Depart for Appointment" job
And "Appointment" RmveGas details
When I click on RmveGas Appointment OK button  	
And I should see RmveGas ARRIVE button
And I should see RmveGas DOORSTEP PROTOCOL tab activated

Scenario: Set RmveGas job to Arrived status
//Given the RmveGas "WorkOrder" page
When I click on RmveGas ARRIVE button  	
Then I should see RmveGas Arrival Time details
And I should see RmveGas  BE AWARE OF ANY DANGER! section

Scenario: Going through RmveGas "BE AWARE OF ANY DANGER!" section
Given the RmveGas BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
#Then I should see the Appointment List For SFENMEX15

Scenario: Going through Aborting Suspended Job
Given the RmveGas Appointment List window
When I should click the AbortNoAccessSuspended status for the workorder "SFGRMVE5"
Then I should see RmveGas  BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFGRMVE5" on the appointments page

Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist