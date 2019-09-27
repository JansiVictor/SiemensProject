Feature: TST_167 DF EXCH24 Workflow - Contact made Abort No Access

    Scenario Outline: Logging in to job's "Work Order" window
        Given the TST22 Login Page
        When I pass TST22 "<Username>" and "<Password>"
        Then I click TST22 Login button
        And I should see the TST22 Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

    Scenario: Select the Latest workOrder
        Given the TST22 Appointment List window
        When I click on TST22 select button
        Then I should see TST22 Work Order window

    Scenario: Going through Call Forward
        Given the TST22 the Work Order window
        When i see TST22 Call Forward or Arrive Button
        Then I click on TST22 CALL FORWARD button
        Then I should see page TST22 contect display
        Then I should see TST22 Contact made field

    Scenario: Going through abort scenario
        When I fill the fields with the value
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFEXCH24" on the appointments page