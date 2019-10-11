
Feature: TST_208 SF E RMVE6 Workflow - Contact made Abort No Access

    Scenario: Post SFERMVE6 SOAP Request
        Given I post workorder using "xmlrequest/SFERMVE6.XML"

    @LoginScenario
    Scenario: Select the Latest RmveSix workOrder
        Given the RmveSix Appointment List window
        When I click on RmveSix select button
        Then I should see RmveSix Work Order window

    Scenario: Going through RmveSix Call Forward
        Given the RmveSix "Work Order" window
        When i see RmveSix Call Forward or Arrive Button
        Then I click on RmveSix CALL FORWARD button
        Then I should see RmveSix page contect display
        And I should see RmveSix Contact made field

    Scenario: Going through abort scenario
        Given the RmveSix "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFERMVE6" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist