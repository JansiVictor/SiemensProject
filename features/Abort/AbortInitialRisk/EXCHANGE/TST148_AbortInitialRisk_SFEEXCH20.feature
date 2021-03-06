Feature: TST148_AbortInitialRisk_SFEEXCH20

        Scenario: Post SFEEXCH20 SOAP Request
                Given I post workorder using "xmlrequest/SFEEXCH20.XML"

        @LoginScenario
        Scenario: Select the Latest ExchangeTwnty workOrder
                Given the ExchangeTwnty Appointment List window
                When I click on ExchangeTwnty select button
                Then I should see ExchangeTwnty Work Order window

        Scenario: Going through ExchangeTwnty Call Forward
                Given the ExchangeTwnty "Work Order" window
                When i see ExchangeTwnty Call Forward or Arrive Button
                Then I click on ExchangeTwnty CALL FORWARD button
                Then I should see ExchangeTwnty page contect display
                And I should see ExchangeTwnty Contact made field

        Scenario: Selecting ExchangeTwnty job and setting to depart
                Given the ExchangeTwnty Work Order page
                When I fill the ExchangeTwnty fields with the value
                And I click on ExchangeTwnty DEPART button
                Then I should see ExchangeTwnty Depart for Appointment window
                And I should see the ExchangeTwnty correct MPAN details
                And I should see the ExchangeTwnty correct Customer Name details
                And I should see the ExchangeTwnty correct PostCode details

        Scenario: Approving ExchangeTwnty "Depart for Appointment" job
                And ExchangeTwnty "Appointment" details
                When I click on ExchangeTwnty OK button
                And I should see ExchangeTwnty ARRIVE button
                Then I should see ExchangeTwnty DOORSTEP PROTOCOL tab activated

        Scenario: Set ExchangeTwnty job to Arrived status
                When I click on ExchangeTwnty ARRIVE button
                Then I should see ExchangeTwnty Arrival Time details
                And I should see ExchangeTwnty BE AWARE OF ANY DANGER! section

        Scenario: Going through ExchangeTwnty "BE AWARE OF ANY DANGER!" section
                Given the ExchangeTwnty BE AWARE OF ANY DANGER! section
                When I fill the ExchangeTwnty DoorStep Protocol fields with the value
                And I click on ExchangeTwnty ON SITE button
                Then I should see ExchangeTwnty RISK ASSESSMENT tab activated
                And I should see ExchangeTwnty INITIAL RISK ASSESSMENT section

        Scenario: Going through ExchangeTwnty "INITIAL RISK ASSESSMENT"
                Given the ExchangeTwnty INITIAL RISK ASSESSMENT section
                When I fill the Abort Initial Risk Fields with Values
                When I click the Unabletoturnoff Reason and Abort the Job
                Then I should see the Aborted status for the workorder "SFEEXCH20" on the appointments page

        Scenario: Going through deleting the work order after use
                When I delete workorder after use
                Then workorder should no longer exist