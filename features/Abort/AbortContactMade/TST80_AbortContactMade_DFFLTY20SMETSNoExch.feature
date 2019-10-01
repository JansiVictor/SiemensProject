Feature: TST_080 DF FLTY20 SMETS2 - SMETS2 Workflow - Contact made Abort No Access

    Scenario Outline: Logging in to job's "Work Order" window
        Given FTwenty the Login Page
        When FTwenty I pass "<Username>" and "<Password>"
        Then FTwenty I click Login button
        And FTwenty I should see the Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

    Scenario: Select the Latest workOrder
        Given FTwenty the Appointment List window
        When FTwenty I click on select button
        Then FTwenty I should see Work Order window

    Scenario: Going through Call Forward
        Given FTwenty the "Work Order" window
        When FTwenty i see Call Forward or Arrive Button
        Then FTwenty I click on CALL FORWARD button
        Then FTwenty I should see page contect display
        And FTwenty I should see the CUSTOMER CONTACT NUMBER
        And FTwenty I should see Contact made field

    Scenario: Going through abort scenario
		Given FTwenty the "Work Order" page
        When I fill the fields with the value     
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job 
        Then I should see the Aborted status for the workorder "DFFLTY20" on the appointments page