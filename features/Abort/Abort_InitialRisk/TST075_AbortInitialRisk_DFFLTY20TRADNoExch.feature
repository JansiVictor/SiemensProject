Feature: TST075_AbortInitialRisk_DFFLTY20TRADNoExch

Scenario Outline: Logging in to job's "Work Order" window
Given FltytwTadNoEx the Login Page
When FltytwTadNoEx I pass "<Username>" and "<Password>"
Then FltytwTadNoEx I click Login button
And FltytwTadNoEx I should see the Appointment List

Examples:
| Username    | Password    |
| E0000022 | 000Password |

Scenario: Select the Latest workOrder
Given FltytwTadNoEx the Appointment List window
When FltytwTadNoEx I click on select button
Then FltytwTadNoEx I should see Work Order window

Scenario: Going through Call Forward
Given FltytwTadNoEx the "Work Order" window
When FltytwTadNoEx i see Call Forward or Arrive Button
Then FltytwTadNoEx I click on CALL FORWARD button
Then FltytwTadNoEx I should see page contect display
And FltytwTadNoEx I should see the CUSTOMER CONTACT NUMBER
And FltytwTadNoEx I should see Contact made field

Scenario: Selecting job and setting to depart
Given FltytwTadNoEx the "Work Order" page
When FltytwTadNoEx I fill the fields with the value
And FltytwTadNoEx I click on DEPART button
Then FltytwTadNoEx I should see Depart for Appointment window

Scenario: Approving "Depart for Appointment" job
Given FltytwTadNoEx Appointment details
When FltytwTadNoExD I click on OK button
Then FltytwTadNoEx I should see ARRIVE button
And FltytwTadNoEx I should see DOORSTEP PROTOCOL tab activated

Scenario: Set job to Arrived status
Given FltytwTadNoEx the "WorkOrder" page
When FltytwTadNoEx I click on ARRIVE button
Then FltytwTadNoEx I should see Arrival Time details
And FltytwTadNoEx I should see BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given FltytwTadNoEx the BE AWARE OF ANY DANGER! section
When FltytwTadNoEx I fill the DoorStep Protocol fields with the value
And FltytwTadNoEx I click on ON SITE button
Then FltytwTadNoEx I should see RISK ASSESSMENT tab activated
And FltytwTadNoEx I should see INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given FltytwTadNoEx the INITIAL RISK ASSESSMENT section
When I fill the Abort Initial Risk Fields with Values
When I click the Unabletoturnoff Reason and Abort the Job
Then I should see the Aborted status for the workorder "DFFLTY20TRAD" on the appointments page