Feature: TST90_AbortElecRisk_FLTY19TRAD_NoExch Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the FLTYTTradNoExchange Login Page
When I pass FLTYTTradNoExchange "<Username>" and "<Password>"
Then I click FLTYTTradNoExchange Login button
And I should see the FLTYTTradNoExchange Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest FLTYTTradNoExchange workOrder
Given the FLTYTTradNoExchange Appointment List window
When I click on FLTYTTradNoExchange select button
Then I should see FLTYTTradNoExchange Work Order window

Scenario: Going through FLTYTTradNoExchange Call Forward
Given the FLTYTTradNoExchange "Work Order" window
When i see FLTYTTradNoExchange Call Forward or Arrive Button
Then I click on FLTYTTradNoExchange CALL FORWARD button
Then I should see FLTYTTradNoExchange page contect display
And I should see FLTYTTradNoExchange Contact made field

Scenario: Selecting FLTYTTradNoExchange job and setting to depart
Given the FLTYTTradNoExchange "Work Order" page
When I fill the FLTYTTradNoExchange fields with the value
And I click on FLTYTTradNoExchange DEPART button 
Then I should see FLTYTTradNoExchange  for Appointment window
And I should see the FLTYTTradNoExchange correct MPAN details
And I should see the FLTYTTradNoExchange correct Customer Name details
And I should see the FLTYTTradNoExchange correct PostCode details

Scenario: Approving FLTYTTradNoExchange "Depart for Appointment" job
And "Appointment" FLTYTTradNoExchange details
When I click on FLTYTTradNoExchange Appointment OK button  	
And I should see FLTYTTradNoExchange ARRIVE button
And I should see FLTYTTradNoExchange DOORSTEP PROTOCOL tab activated

Scenario: Set FLTYTTradNoExchange job to Arrived status
//Given the FLTYTTradNoExchange "WorkOrder" page
When I click on FLTYTTradNoExchange ARRIVE button  	
Then I should see FLTYTTradNoExchange Arrival Time details
And I should see FLTYTTradNoExchange  BE AWARE OF ANY DANGER! section

Scenario: Going through FLTYTTradNoExchange "BE AWARE OF ANY DANGER!" section
Given the FLTYTTradNoExchange BE AWARE OF ANY DANGER! section 
When I fill the FLTYTTradNoExchange DoorStep Protocol fields with the value
And I click on FLTYTTradNoExchange ON SITE button 	
Then I should see FLTYTTradNoExchange RISK ASSESSMENT tab activated
And I should see FLTYTTradNoExchange Initial Risk Assessment for GAS section

Scenario: Going through FLTYTTradNoExchange "INITIAL RISK ASSESSMENT"
Given the FLTYTTradNoExchange INITIAL RISK ASSESSMENT section
When I fill the FLTYTTradNoExchange initialRisk field with the values

Scenario: Going through FLTYTTradNoExchange "RISK ASSESSMENT - ELEC" section
Given the FLTYTTradNoExchange RISK ASSESSMENT - ELEC section
When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

Scenario: Going through the Reason codes popup
Given the ELEC Risk AbortReasonCodespopup
When I click the ELEC Reason and Abort Appointment Job
Then I should see the ELEC Risk Aborted status for the workorder "SFEFLTY19TRAD" on the appointments page
