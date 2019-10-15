Feature: TST098_AbortContactMade_SFEFLTY19SMETS2NOEXCH

    Scenario: Post SFEFLTY19 SOAP Request
        Given I post workorder using "xmlrequest/SFEFLTY19.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFEFLTY19
        When I click on select button For SFEFLTY19
        Then I should see Work Order window For SFEFLTY19

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFEFLTY19
        When i see Call Forward or Arrive Button For SFEFLTY19
        Then I click on CALL FORWARD button For SFEFLTY19
        Then I should see page contect display For SFEFLTY19
        And I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19
        And I should see Contact made field For SFEFLTY19

    Scenario: Going through abort scenario
        Given the SFEFLTY19 WorkOrder Page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFEFLTY19" on the appointments page


    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist