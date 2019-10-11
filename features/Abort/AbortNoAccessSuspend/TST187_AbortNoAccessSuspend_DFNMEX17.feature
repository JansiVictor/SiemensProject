Feature: DF17SmartCredit- AbortNoAccessSuspend Workflow

Scenario: Post DFNMEX17 SOAP Request
Given I post workorder using "xmlrequest/DFNMEX17.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For DF17SmartCredit
When I pass "<Username>" and "<Password>" For DF17SmartCredit
Then I click Login button For DF17SmartCredit
And I should see the Appointment List For DF17SmartCredit

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |

Scenario: Select the Latest workOrder
Given the Appointment List window For DF17SmartCredit
When I click on select button For DF17SmartCredit
Then I should see Work Order window For DF17SmartCredit

Scenario: Going through Call Forward
Given the "Work Order" window For DF17SmartCredit
When i see Call Forward or Arrive Button For DF17SmartCredit
Then I click on CALL FORWARD button For DF17SmartCredit
Then I should see page contect display For DF17SmartCredit
And I should see the CUSTOMER CONTACT NUMBER For DF17SmartCredit
And I should see Contact made field For DF17SmartCredit

Scenario: Selecting job and setting to depart
Given the DF17SmartCredit WorkOrder Page
When I fill the DF17SmartCredit fields with the value 
And I click on DF17SmartCredit DEPART button
Then I should see DF17SmartCredit Depart for Appointment window 
And I should see the DF17SmartCredit correct MPAN details
And I should see the DF17SmartCredit correct Customer Name details
And I should see the DF17SmartCredit correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For DF17SmartCredit
When I click on OK button For DF17SmartCredit	
And I should see ARRIVE button For DF17SmartCredit
And I should see DOORSTEP PROTOCOL tab activated For DF17SmartCredit

Scenario: Set job to Arrived status
Given the DF17SmartCredit WorkOrder Page
When I click on ARRIVE button For DF17SmartCredit	
Then I should see Arrival Time details For DF17SmartCredit
And I should see DF17SmartCredit BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the DF17SmartCredit BE AWARE OF ANY DANGER! section 
When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
And I should see the Appointment List For DF17SmartCredit

Scenario: Going through Aborting Suspended Job
Given the Appointment List window For DF17SmartCredit
When I should click the AbortNoAccessSuspended status for the workorder "DF17SmartCredit"
Then I should see DF17SmartCredit BE AWARE OF ANY DANGER! section
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "DF17SmartCredit" on the appointments page


Scenario: Going through deleting the work order after use 
When I delete workorder after use
Then workorder should no longer exist 