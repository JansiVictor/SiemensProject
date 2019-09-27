Feature: TST053_AbortInitialRisk_DFFLTY20NonSMETS2

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST13 the Login Page
        When TST13 I pass "<Username>" and "<Password>"
        Then TST13 I click Login button
        And TST13 I should see the Appointment List

        Examples:
            | Username | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given TST13 the Appointment List window
        When TST13 I click on select button
        Then TST13 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST13 the "Work Order" window
        When TST13 i see Call Forward or Arrive Button
        Then TST13 I click on CALL FORWARD button
        Then TST13 I should see page contect display
        And TST13 I should see the CUSTOMER CONTACT NUMBER
        And TST13 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST13 the "Work Order" page
        When TST13 I fill the fields with the value
        And TST13 I click on DEPART button
        Then TST13 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST13 Appointment details
        When TST13D I click on OK button
        Then TST13 I should see ARRIVE button
        And TST13 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST13 the "WorkOrder" page
        When TST13 I click on ARRIVE button
        Then TST13 I should see Arrival Time details
        And TST13 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST13 the BE AWARE OF ANY DANGER! section
        When TST13 I fill the DoorStep Protocol fields with the value
        And TST13 I click on ON SITE button
        Then TST13 I should see RISK ASSESSMENT tab activated
        And TST13 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST13 the INITIAL RISK ASSESSMENT section
        When I fill the Abort Initial Risk Fields with Values
        When I click the Unabletoturnoff Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFFLTY20TRAD" on the appointments page