Feature: TST_192 SF E NMEX16 Workflow - Contact made Abort No Access

    Scenario: Post SFENMEX16 SOAP Request
        Given I post workorder using "xmlrequest/SFENMEX16.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFENMEX16
        When I click on select button For SFENMEX16
        Then I should see Work Order window For SFENMEX16

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFENMEX16
        When i see Call Forward or Arrive Button For SFENMEX16
        Then I click on CALL FORWARD button For SFENMEX16
        Then I should see page contect display For SFENMEX16
        And I should see the CUSTOMER CONTACT NUMBER For SFENMEX16
        And I should see Contact made field For SFENMEX16

    Scenario: Going through abort scenario
        Given the "Work Order" window For SFENMEX16
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFENMEX16" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist