Feature: SF Gas Exchange19- Abort No Contact


    Scenario Outline: Logging in to job's "Work Order" window
        Given the ExchngNineteen Login Page
        When I pass ExchngNineteen "<Username>" and "<Password>"
        Then I click ExchngNineteen Login button

        Examples:

            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |



    Scenario: Select the Latest ExchngNineteen workOrder
        Given the ExchngNineteen Appointment List window
        When I click on ExchngNineteen select button
        Then I should see ExchngNineteen Work Order window

    Scenario: Going through ExchngNineteen Call Forward
        Given the ExchngNineteen "Work Order" window
        When i see ExchngNineteen Call Forward or Arrive Button
        Then I click on ExchngNineteen CALL FORWARD button
        Then I should see ExchngNineteen page contect display
        And I should see ExchngNineteen Contact made field

    Scenario: Selecting ExchngNineteen job and setting to depart
        Given the ExchngNineteen "Work Order" page
        When I fill the fields with the value for Abort Scenario
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGEXCH19" on the appointments page

