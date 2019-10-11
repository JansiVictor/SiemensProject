Feature: TST_156 SF G EXCH19 Workflow - Contact made Abort No Access

Scenario: Post SFGEXCH19 SOAP Request
        Given I post workorder using "xmlrequest/SFGEXCH19.XML"

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
        When I fill the fields with the value for Contact Made Abort
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup for Contact Made Abort
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGEXCH19" on the appointments page


 	Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist