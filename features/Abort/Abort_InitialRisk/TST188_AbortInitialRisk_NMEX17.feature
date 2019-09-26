Feature: DF17SmartCredit Workflow 

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
When I fill the DF17SmartCredit DoorStep Protocol fields with the value
And I click on DF17SmartCredit ON SITE button 	
Then I should see DF17SmartCredit RISK ASSESSMENT tab activated
And I should see DF17SmartCredit INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the DF17SmartCredit INITIAL RISK ASSESSMENT section
When I click the Unabletoturnoff Reason and Abort the Job
Then I should see the Aborted status for the workorder "DF17SmartCredit" on the appointments page