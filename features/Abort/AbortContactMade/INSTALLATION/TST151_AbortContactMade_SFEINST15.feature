Feature: TST162_AbortContactMade_SFGINST14

    Scenario: Post SFEINST15 SOAP Request
        Given I post workorder using "xmlrequest/SFEINST15.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFEINST15
        When I click on select button For SFEINST15
        Then I should see Work Order window For SFEINST15

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFEINST15
        When i see Call Forward or Arrive Button For SFEINST15
        Then I click on CALL FORWARD button For SFEINST15
        Then I should see page contect display For SFEINST15
        And I should see the CUSTOMER CONTACT NUMBER For SFEINST15
        And I should see Contact made field For SFEINST15

    Scenario: Selecting job and setting to depart
        Given the SFEINST15 WorkOrder Page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFEINST15" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist


