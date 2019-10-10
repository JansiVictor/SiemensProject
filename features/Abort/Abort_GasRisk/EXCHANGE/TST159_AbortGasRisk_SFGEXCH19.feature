Feature: Exchange19 Workflow

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
        When I fill the ExchngNineteen fields with the value
        And I click on ExchngNineteen DEPART button
        Then I should see ExchngNineteen  for Appointment window
        And I should see the ExchngNineteen correct MPAN details
        And I should see the ExchngNineteen correct Customer Name details
        And I should see the ExchngNineteen correct PostCode details

    Scenario: Approving ExchngNineteen "Depart for Appointment" job
        And "Appointment" ExchngNineteen details
        When I click on ExchngNineteen OK button
        And I should see ExchngNineteen ARRIVE button
        And I should see ExchngNineteen DOORSTEP PROTOCOL tab activated

    Scenario: Set ExchngNineteen job to Arrived status
        Given the ExchngNineteen "WorkOrder" page
        When I click on ExchngNineteen ARRIVE button
        Then I should see ExchngNineteen Arrival Time details
        And I should seeExchngNineteen  BE AWARE OF ANY DANGER! section

    Scenario: Going through ExchngNineteen "BE AWARE OF ANY DANGER!" section
        Given the ExchngNineteen BE AWARE OF ANY DANGER! section
        When I fill the ExchngNineteen DoorStep Protocol fields with the value
        And I click on ExchngNineteen ON SITE button
        And I should see ExchngNineteen Initial Risk Assessment for GAS section

    Scenario: Going through ExchngNineteen "INITIAL RISK ASSESSMENT"
        Given the ExchngNineteen INITIAL RISK ASSESSMENT section
        When I fill the ExchngNineteen initialRisk field with the values
        Then I should see the ExchngNineteen RISK ASSESSMENT - GAS section

    Scenario: Going through ExchngNineteen "RISK ASSESSMENT - GAS" section
        Given the ExchngNineteen RISK ASSESSMENT - GAS section
        And I fill the GasRisk btnfail abort fields with values
        And I select Reason and Gas Abort Job
        Then I should see the Aborted status for the workorder "SFGEXCH19" on the appointments page
