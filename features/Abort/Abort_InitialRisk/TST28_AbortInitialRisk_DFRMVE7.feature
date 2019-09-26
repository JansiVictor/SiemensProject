Feature: TST28_DF_FLTY20_SMETS2

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST28 the Login Page
        When TST28 I pass "<Username>" and "<Password>"
        Then TST28 I click Login button
        And TST28 I should see the Appointment List

        Examples:
            | Username    | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given TST28 the Appointment List window
        When TST28 I click on select button
        Then TST28 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST28 the "Work Order" window
        When TST28 i see Call Forward or Arrive Button
        Then TST28 I click on CALL FORWARD button
        Then TST28 I should see page contect display
        And TST28 I should see the CUSTOMER CONTACT NUMBER
        And TST28 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST28 the "Work Order" page
        When TST28 I fill the fields with the value
        And TST28 I click on DEPART button
        Then TST28 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST28 Appointment details
        When TST28D I click on OK button
        Then TST28 I should see ARRIVE button
        And TST28 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST28 the "WorkOrder" page
        When TST28 I click on ARRIVE button
        Then TST28 I should see Arrival Time details
        And TST28 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST28 the BE AWARE OF ANY DANGER! section
        When TST28 I fill the DoorStep Protocol fields with the value
        And TST28 I click on ON SITE button
        Then TST28 I should see RISK ASSESSMENT tab activated
        And TST28 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST28 the INITIAL RISK ASSESSMENT section
        When TST28 I fill the initialRisk field with the values
        Then TST28 I should see INFO window

    Scenario: Going through "INFO" window
        Given TST28 the INFO window with the text
        When TST28I I click on OK button
        Then TST28 I should see RISK ASSESSMENT ELEC section
