Feature: TST_129 DF EXCH21 Workflow - Contact made Abort No Access

    Scenario: Post SFGEXCH21 SOAP Request
        Given I post workorder using "xmlrequest/SFGEXCH21.XML"

    @LoginScenario
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
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFEXCH21" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist