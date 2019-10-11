Feature: TST_103 SF G FLTY18 SMETS2 No Exchange Workflow - Contact made Abort No Access

Scenario: Post SFGFLTY18 SOAP Request
        Given I post workorder using "xmlrequest/SFGFLTY18.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST03 the Login Page
        When TST03 I pass "<Username>" and "<Password>"
        Then TST03 I click Login button
        And TST03 I should see the Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

    Scenario: Select the Latest workOrder
        Given TST03 the Appointment List window
        When TST03 I click on select button
        Then TST03 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST03 the "Work Order" window
        When TST03 i see Call Forward or Arrive Button
        Then TST03 I click on CALL FORWARD button
        Then TST03 I should see page contect display
        And TST03 I should see the CUSTOMER CONTACT NUMBER
        And TST03 I should see Contact made field

    Scenario: Going through abort scenario
        Given TST03 the "Work Order" page
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGFLTY18" on the appointments page

    Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist