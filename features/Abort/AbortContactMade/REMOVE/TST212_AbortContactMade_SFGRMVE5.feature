
Feature: TST_212 SF G RMVE5 Workflow - Contact made Abort No Access

    Scenario: Post SFGRMVE5 SOAP Request
        Given I post workorder using "xmlrequest/SFGRMVE5.XML"

    @LoginScenario
    Scenario: Select the Latest RmveGas workOrder
        Given the RmveGas Appointment List window
        When I click on RmveGas select button

    Scenario: Going through RmveGas Call Forward
        Given the RmveGas "Work Order" window
        When i see RmveGas Call Forward or Arrive Button
        Then I click on RmveGas CALL FORWARD button
        Then I should see RmveGas page contect display
        And I should see RmveGas Contact made field

    Scenario: Going through abort scenario
        Given the RmveGas "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGRMVE5" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist