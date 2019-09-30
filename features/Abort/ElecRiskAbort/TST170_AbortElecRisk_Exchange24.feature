Feature: TST170_AbortElecRisk_EXCH24 Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the TST22 Login Page
When I pass TST22 "<Username>" and "<Password>"
Then I click TST22 Login button
And I should see the TST22 Appointment List

Examples:
    | Username    | Password    |
    | Automation2 | Aut0m4t1on2 |

Scenario: Select the Latest workOrder
Given the TST22 Appointment List window
When I click on TST22 select button
Then I should see TST22 Work Order window

Scenario: Going through Call Forward
Given the TST22 the Work Order window
When i see TST22 Call Forward or Arrive Button
Then I click on TST22 CALL FORWARD button
Then I should see page TST22 contect display
Then I should see TST22 Contact made field

Scenario: Selecting job and setting to depart
When I fill the TST22 fields with the value
When I click on TST22 DEPART button
Then I should see TST22 Depart for Appointment window

Scenario: Approving "Depart for Appointment" job
Given TST22 Appointment details
When I click on TST22 MPRNOK button
Then I should see TST22 ARRIVE button
Then I should see TST22 DOORSTEP PROTOCOL tab activated

Scenario: Set job to Arrived status
Given the TST WorkOrder page
When I click on TST22 ARRIVE button
Then I should see TST22 Arrival Time details
And I should see TST22 BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the TST22 BE AWARE OF ANY DANGER! section
When I fill the TST22 DoorStep Protocol fields with the value
When I click on TST22 ON SITE button
Then I should see TST22 RISK ASSESSMENT tab activated
Then I should see TST22 INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the TST22 INITIAL RISK ASSESSMENT section
When I fill the TST22 initialRisk field with the values
Then I should see TST22 INFO window

Scenario: Going through "INFO" window
Given the TST22 INFO window with the text
When TST22 click infook
Then I should see TST22 RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section
Given the TST22 RISK ASSESSMENT - ELEC section
When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

Scenario: Going through the Reason codes popup
Given the ELEC Risk AbortReasonCodespopup
When I click the ELEC Reason and Abort Appointment Job
Then I should see the ELEC Risk Aborted status for the workorder "DFEXCH24" on the appointments page
