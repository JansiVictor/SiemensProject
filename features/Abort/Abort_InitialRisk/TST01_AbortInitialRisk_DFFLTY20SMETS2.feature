Feature: TST01_DF_FLTY20_SMETS2

    Scenario Outline: Logging in to job's "Work Order" window
        Given FTwenty the Login Page
        When FTwenty I pass "<Username>" and "<Password>"
        Then FTwenty I click Login button
        And FTwenty I should see the Appointment List

        Examples:
            | Username    | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given FTwenty the Appointment List window
        When FTwenty I click on select button
        Then FTwenty I should see Work Order window

    Scenario: Going through Call Forward
        Given FTwenty the "Work Order" window
        When FTwenty i see Call Forward or Arrive Button
        Then FTwenty I click on CALL FORWARD button
        Then FTwenty I should see page contect display
        And FTwenty I should see the CUSTOMER CONTACT NUMBER
        And FTwenty I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given FTwenty the "Work Order" page
        When FTwenty I fill the fields with the value
        And FTwenty I click on DEPART button
        Then FTwenty I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given FTwenty Appointment details
        When FTwentyD I click on OK button
        Then FTwenty I should see ARRIVE button
        And FTwenty I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given FTwenty the "WorkOrder" page
        When FTwenty I click on ARRIVE button
        Then FTwenty I should see Arrival Time details
        And FTwenty I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given FTwenty the BE AWARE OF ANY DANGER! section
        When FTwenty I fill the DoorStep Protocol fields with the value
        And FTwenty I click on ON SITE button
        Then FTwenty I should see RISK ASSESSMENT tab activated
        And FTwenty I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given FTwenty the INITIAL RISK ASSESSMENT section
        When FTwenty I fill the initialRisk field with the values
        Then FTwenty I should see INFO window

    Scenario: Going through "INFO" window
        Given FTwenty the INFO window with the text
        When FTwentyI I click on OK button
        Then FTwenty I should see RISK ASSESSMENT ELEC section


