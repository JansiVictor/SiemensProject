Feature: TST179_AbortContactMade_SFGEXCH22

    Scenario: Post SFGEXCH22 SOAP Request
        Given I post workorder using "xmlrequest/SFGEXCH22.XML"

    @LoginScenario
    Scenario: Select the ExchTwTwo Latest workOrder
        Given the ExchTwTwo Appointment List window
        When I click on ExchTwTwo select button
        Then I should see ExchTwTwo Work Order window

    Scenario: Going through ExchTwTwo Call Forward
        Given the ExchTwTwo "Work Order" window
        When i see ExchTwTwo Call Forward or Arrive Button
        Then I click on ExchTwTwo CALL FORWARD button
        Then I should see page ExchTwTwo contect display
        And I should see ExchTwTwo Contact made field

    Scenario: Going through abort scenario
        Given the ExchTwTwo "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGEXCH22" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist