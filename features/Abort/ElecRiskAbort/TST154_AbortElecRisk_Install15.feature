Feature: TST154_SFE_INST15 Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFEINST15
When I pass "<Username>" and "<Password>" For SFEINST15
Then I click Login button For SFEINST15
And I should see the Appointment List For SFEINST15

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

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
When I fill the SFEINST15 DoorStep Protocol fields with the value
And I click on SFEINST15 ON SITE button 	
Then I should see SFEINST15 RISK ASSESSMENT tab activated
And I should see SFEINST15 INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFEINST15 INITIAL RISK ASSESSMENT section
When I fill the SFEINST15 initialRisk field with the values
Then I should see SFEINST15 RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
Given the SFEINST15 RISK ASSESSMENT - ELEC section
When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

Scenario: Going through the Reason codes popup
Given the ELEC Risk AbortReasonCodespopup
When I click the ELEC Reason and Abort Appointment Job
Then I should see the ELEC Risk Aborted status for the workorder "SFEINST15" on the appointments page