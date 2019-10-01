Feature: TST_186 DF NMEX17 Workflow - Contact made Abort No Access

    Scenario Outline: Logging in to job's "Work Order" window
        Given the Login Page For DF17SmartCredit
        When I pass "<Username>" and "<Password>" For DF17SmartCredit
        Then I click Login button For DF17SmartCredit
        And I should see the Appointment List For DF17SmartCredit

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

    Scenario: Select the Latest workOrder
        Given the Appointment List window For DF17SmartCredit
        When I click on select button For DF17SmartCredit
        Then I should see Work Order window For DF17SmartCredit

    Scenario: Going through Call Forward
        Given the "Work Order" window For DF17SmartCredit
        When i see Call Forward or Arrive Button For DF17SmartCredit
        Then I click on CALL FORWARD button For DF17SmartCredit
        Then I should see page contect display For DF17SmartCredit
        And I should see the CUSTOMER CONTACT NUMBER For DF17SmartCredit
        And I should see Contact made field For DF17SmartCredit

     Scenario: Going through abort scenario
        When I fill the fields with the value     
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DF17SmartCredit" on the appointments page