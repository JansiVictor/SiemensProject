Feature: TST_179 SF G EXCH22 Workflow - Contact made Abort No Access


    Scenario Outline: Logging in to job's "Work Order" window
        Given the ExchTwTwo Login Page
        When I pass ExchTwTwo "<Username>" and "<Password>"
        Then I click ExchTwTwo Login button
        And I should see the ExchTwTwo Appointment List

        Examples:
            | Username    | Password    |
            |  E0000022  |  000Password  |


    Scenario: Select the ExchTwTwo Latest workOrder
        Given the ExchTwTwo Appointment List window
        When I click on ExchTwTwo select button
        Then I should see ExchTwTwo Work Order window

    Scenario: Going through ExchTwTwo Call Forward
        Given the ExchTwTwo "Work Order" window
        When i see ExchTwTwo Call Forward or Arrive Button
        Then I click on ExchTwTwo CALL FORWARD button
        Then I should see page ExchTwTwo contect display
        #######And I should see the ExchTwTwo CUSTOMER CONTACT NUMBER
        And I should see ExchTwTwo Contact made field

    Scenario: Going through abort scenario
        Given the ExchTwTwo "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGEXCH22" on the appointments page

