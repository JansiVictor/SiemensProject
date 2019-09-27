Feature: TST_098 SF E FLTY19 SMETS2 No Exchange Workflow - Contact made Abort No Access

    Scenario Outline: Logging in to job's "Work Order" window
        Given the Login Page For SFEFLTY19
        When I pass "<Username>" and "<Password>" For SFEFLTY19
        Then I click Login button For SFEFLTY19
        And I should see the Appointment List For SFEFLTY19

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

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