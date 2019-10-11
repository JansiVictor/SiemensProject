Feature: TST_197 SF G NMEX15 Workflow - Contact made Abort No Access

Scenario: Post SFGNMEX15 SOAP Request
        Given I post workorder using "xmlrequest/SFGNMEX15.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given the Login Page For SFENMEX15
        When I pass "<Username>" and "<Password>" For SFENMEX15
        Then I click Login button For SFENMEX15
        And I should see the Appointment List For SFENMEX15

        Examples:
            | Username    | Password    |
            |  E0000022  |  000Password  |

    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFENMEX15
        When I click on select button For SFENMEX15
        Then I should see Work Order window For SFENMEX15

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFENMEX15
        When i see Call Forward or Arrive Button For SFENMEX15
        Then I click on CALL FORWARD button For SFENMEX15
        Then I should see page contect display For SFENMEX15
        And I should see the CUSTOMER CONTACT NUMBER For SFENMEX15
        And I should see Contact made field For SFENMEX15
        
    Scenario: Going through abort scenario
        Given the SFENMEX15 WorkOrder Page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGNMEX15" on the appointments page

    Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist