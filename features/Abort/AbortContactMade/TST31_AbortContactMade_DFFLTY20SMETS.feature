Feature: DF FLTY20 SMETS

    Scenario Outline: Logging in to job's "Work Order" window for

        Given the Login Page for Abort Scenario
        When I pass "<Username>" and "<Password>" for Abort Scenario
        Then I click Login button for Abort Scenario
        And I should see the Appointment List for Abort Scenario

        Examples:

            | Username | Password    |
            | E0000022 | 000Password |


    Scenario: Select the Latest workOrder for Abort Scenario
        Given the Appointment List window for Abort Scenario
        When I click on select button for FLTY20 SMETS Abort Scenario
        Then I should see Work Order window for Abort Scenario

    Scenario: Going through Call Forward for Abort Scenario
        Given the "Work Order" window for Abort Scenario
        When i see Call Forward or Arrive Button for Abort Scenario
        Then I click on CALL FORWARD button for Abort Scenario
        Then I should see page contect display for Abort Scenario

    Scenario: Selecting job and setting to depart for Abort Scenario
        Given the "Work Order" page for Abort Scenario
        When I fill the fields with the value for Abort Scenario
        Then I should see the Abort Reason Code Pop Up







