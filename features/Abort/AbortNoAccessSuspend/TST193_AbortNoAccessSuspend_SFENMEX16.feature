Feature: SFENMEX16 - AbortNoAccessSuspend Workflow

Scenario: Post SFENMEX16 SOAP Request
Given I post workorder using "xmlrequest/SFEMEX16.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFENMEX16
When I pass "<Username>" and "<Password>" For SFENMEX16
Then I click Login button For SFENMEX16
And I should see the Appointment List For SFENMEX16

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFENMEX16
When I click on select button For SFENMEX16
Then I should see Work Order window For SFENMEX16

Scenario: Going through Call Forward
Given the "Work Order" window For SFENMEX16
When i see Call Forward or Arrive Button For SFENMEX16
Then I click on CALL FORWARD button For SFENMEX16
Then I should see page contect display For SFENMEX16
And I should see the CUSTOMER CONTACT NUMBER For SFENMEX16
And I should see Contact made field For SFENMEX16

Scenario: Selecting job and setting to depart
Given the SFENMEX16 WorkOrder Page
When I fill the SFENMEX16 fields with the value 
And I click on SFENMEX16 DEPART button
Then I should see SFENMEX16 Depart for Appointment window 
And I should see the SFENMEX16 correct MPAN details
And I should see the SFENMEX16 correct Customer Name details
And I should see the SFENMEX16 correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFENMEX16
When I click on OK button For SFENMEX16	
And I should see ARRIVE button For SFENMEX16
And I should see DOORSTEP PROTOCOL tab activated For SFENMEX16

Scenario: Set job to Arrived status
Given the SFENMEX16 WorkOrder Page
When I click on ARRIVE button For SFENMEX16	
Then I should see Arrival Time details For SFENMEX16
And I should see SFENMEX16 BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFENMEX16 BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
Then I should see the Appointment List For SFENMEX16

Scenario: Going through Aborting Suspended Job
Given the Appointment List window For SFENMEX16
When I should click the AbortNoAccessSuspended status for the workorder "SFENMEX16"
Then I should see SFENMEX16 BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFENMEX16" on the appointments page

Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist  