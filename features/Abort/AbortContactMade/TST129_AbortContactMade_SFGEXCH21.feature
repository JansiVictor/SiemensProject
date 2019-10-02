Feature: TST_129 DF EXCH21 Workflow - Contact made Abort No Access


    Scenario Outline: Logging in to job's ExTwOne "Work Order" window
        Given the ExTwOne Login Page
        When I pass ExTwOne "<Username>" and "<Password>"
        Then I click ExTwOne Login button
        And I should see the ExTwOne Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |


    Scenario: Select the ExTwOne Latest workOrder
        Given the ExTwOne Appointment List window
        When I click on ExTwOne select button
        Then I should see ExTwOne Work Order window

    Scenario: Going through ExTwOne Call Forward
        Given the ExTwOne "Work Order" window
        When i see ExTwOne Call Forward or Arrive Button
        Then I click on ExTwOne CALL FORWARD button
        Then I should see ExTwOne page contect display

        And I should see ExTwOne Contact made field

    Scenario: Going through abort scenario
        Given the ExTwOne "Work Order" page


        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup for Contact Made Abort
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFEXCH21" on the appointments page

