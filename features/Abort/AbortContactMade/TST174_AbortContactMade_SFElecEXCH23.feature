Feature: TST_174 SF Elec EXCH23 Workflow - Contact made Abort No Access

    Scenario: Post SFEEXCH23 SOAP Request
        Given I post workorder using "xmlrequest/SFEEXCH23.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder for EXCH23
        Given the Appointment List window for EXCH23
        When I click on select button for EXCH23
        Then I should see Work Order window for EXCH23

    Scenario: Going through Call Forward for EXCH23
        Given the "Work Order" window for EXCH23
        When i see Call Forward or Arrive Button for EXCH23
        Then I click on CALL FORWARD button for EXCH23
        Then I should see page contect display for EXCH23

    Scenario: Going through abort scenario
        Given the "Work Order" page for EXCH23
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFElecEXCH23" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist




