Feature: TST15_SF_Gas_FLTY18_Non_SMETS2

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST15 the Login Page
        When TST15 I pass "<Username>" and "<Password>"
        Then TST15 I click Login button
        And TST15 I should see the Appointment List

        Examples:
            | Username | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given TST15 the Appointment List window
        When TST15 I click on select button
        Then TST15 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST15 the "Work Order" window
        When TST15 i see Call Forward or Arrive Button
        Then TST15 CALL FORWARD button
        Then TST15 I should see page contect display
        And TST15 I should see the CUSTOMER CONTACT NUMBER
        And TST15 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST15 the "Work Order" page
        When TST15 I fill the fields with the value
        And TST15 DEPART button
        Then TST15 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST15 Appointment details
        When TST15 OK button
        Then TST15 I should see ARRIVE button
        And TST15 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST15 the "WorkOrder" page
        When TST15 ARRIVE button
        Then TST15 I should see Arrival Time details
        And TST15 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST15 the BE AWARE OF ANY DANGER! section
        When TST15 I fill the DoorStep Protocol fields with the value
        And TST15 ON SITE button
        Then TST15 I should see RISK ASSESSMENT tab activated
        And TST15 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST15 the INITIAL RISK ASSESSMENT section
        When I click the Unabletoturnoff Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGFLTY18TRAD" on the appointments page
