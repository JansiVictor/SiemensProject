Feature: SFEINST15- AbortNoAccessSuspend Workflow

Scenario: Post SFEINST15 SOAP Request
Given I post workorder using "xmlrequest/SFEINST15.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFEINST15
When I pass "<Username>" and "<Password>" For SFEINST15
Then I click Login button For SFEINST15
And I should see the Appointment List For SFEINST15

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFEINST15
When I click on select button For SFEINST15
Then I should see Work Order window For SFEINST15

Scenario: Going through Call Forward
Given the "Work Order" window For SFEINST15
When i see Call Forward or Arrive Button For SFEINST15
Then I click on CALL FORWARD button For SFEINST15
Then I should see page contect display For SFEINST15
And I should see the CUSTOMER CONTACT NUMBER For SFEINST15
And I should see Contact made field For SFEINST15

Scenario: Selecting job and setting to depart
Given the SFEINST15 WorkOrder Page
When I fill the SFEINST15 fields with the value 
And I click on SFEINST15 DEPART button
Then I should see SFEINST15 Depart for Appointment window 
And I should see the SFEINST15 correct MPAN details
And I should see the SFEINST15 correct Customer Name details
And I should see the SFEINST15 correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFEINST15
When I click on OK button For SFEINST15	
And I should see ARRIVE button For SFEINST15
And I should see DOORSTEP PROTOCOL tab activated For SFEINST15

Scenario: Set job to Arrived status
Given the SFEINST15 WorkOrder Page
When I click on ARRIVE button For SFEINST15	
Then I should see Arrival Time details For SFEINST15
And I should see SFEINST15 BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFEINST15 BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
Then I should see the Appointment List For SFEINST15

Scenario: Going through Aborting Suspended Job
Given the Appointment List window For SFEINST15
When I should click the AbortNoAccessSuspended status for the workorder "SFEINST15"
Then I should see SFEINST15 BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "SFEINST15" on the appointments page

Scenario: Going through deleting the work order after use 
When I delete workorder after use
Then workorder should no longer exist