Feature: TST162_AbortContactMade_SFGINST14

    Scenario: Post SFGINST14 SOAP Request
        Given I post workorder using "xmlrequest/SFGINST14.XML"

    @LoginScenario
    Scenario: Select the Latest INSTFrtn workOrder
        Given the INSTFrtn Appointment List window
        When I click on INSTFrtn select button
        Then I should see INSTFrtn Work Order window

    Scenario: Going through INSTFrtn Call Forward
        Given the INSTFrtn "Work Order" window
        When i see INSTFrtn Call Forward or Arrive Button
        Then I click on INSTFrtn CALL FORWARD button
        Then I should see INSTFrtn page contect display
        And I should see INSTFrtn Contact made field

    Scenario: Going through abort scenario
        Given the INSTFrtn "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGINST14" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
