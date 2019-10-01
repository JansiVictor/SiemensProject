
Feature: TST_203 DF RMVE7 Workflow - Contact made Abort No Access

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST28 the Login Page
        When TST28 I pass "<Username>" and "<Password>"
        Then TST28 I click Login button
        And TST28 I should see the Appointment List

        Examples:
            | Username    | Password    |
            |  E0000022  |  000Password  |

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

    Scenario: Going through abort scenario
        Given TST28 the "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFRMVE7" on the appointments page