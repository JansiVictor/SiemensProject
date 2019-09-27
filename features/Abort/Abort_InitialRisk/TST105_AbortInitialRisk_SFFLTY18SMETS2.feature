Feature: TST105_AbortInitialRisk_SFFLTY18SMETS2

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST12 the Login Page
        When TST12 I pass "<Username>" and "<Password>"
        Then TST12 I click Login button
        And TST12 I should see the Appointment List

        Examples:
            | Username | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given TST12 the Appointment List window
        When TST12 I click on select button
        Then TST12 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST12 the "Work Order" window
        When TST12 i see Call Forward or Arrive Button
        Then TST12 I click on CALL FORWARD button
        Then TST12 I should see page contect display
        And TST12 I should see the CUSTOMER CONTACT NUMBER
        And TST12 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST12 the "Work Order" page
        When TST12 I fill the fields with the value
        And TST12 I click on DEPART button
        Then TST12 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST12 Appointment details
        When TST12 I click on OK button
        Then TST12 I should see ARRIVE button
        And TST12 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST12 the "WorkOrder" page
        When TST12 I click on ARRIVE button
        Then TST12 I should see Arrival Time details
        And TST12 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST12 the BE AWARE OF ANY DANGER! section
        When TST12 I fill the DoorStep Protocol fields with the value
        And TST12 I click on ON SITE button
        Then TST12 I should see RISK ASSESSMENT tab activated
        And TST12 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST12 the INITIAL RISK ASSESSMENT section
        When I fill the Abort Initial Risk Fields with Values
        When I click the Unabletoturnoff Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGFLTY18" on the appointments page

