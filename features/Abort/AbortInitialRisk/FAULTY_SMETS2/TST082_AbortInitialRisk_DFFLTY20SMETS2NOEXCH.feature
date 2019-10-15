Feature: TST082_AbortInitialRisk_DFFLTY20SMETS2NOEXCH

        Scenario: Post DFFLTY20 SOAP Request
                Given I post workorder using "xmlrequest/DFFLTY20.XML"

        @LoginScenario
        Scenario: Select the Latest FLTYTwntyNoExchange workOrder
                Given the FLTYTwntyNoExchange Appointment List window
                When I click on FLTYTwntyNoExchange select button
                Then I should see FLTYTwntyNoExchange Work Order window

        Scenario: Going through FLTYTwntyNoExchange Call Forward
                Given the FLTYTwntyNoExchange "Work Order" window
                When i see FLTYTwntyNoExchange Call Forward or Arrive Button
                Then I click on FLTYTwntyNoExchange CALL FORWARD button
                Then I should see FLTYTwntyNoExchange page contect display
                And I should see the FLTYTwntyNoExchange CUSTOMER CONTACT NUMBER
                And I should see FLTYTwntyNoExchange Contact made field

        Scenario: Selecting FLTYTwntyNoExchange job and setting to depart
                Given the FLTYTwntyNoExchange "Work Order" page
                When I fill the FLTYTwntyNoExchange fields with the value
                And I click on FLTYTwntyNoExchange DEPART button
                Then I should see FLTYTwntyNoExchange  for Appointment window
                And I should see the FLTYTwntyNoExchange correct MPAN details
                And I should see the FLTYTwntyNoExchange correct Customer Name details
                And I should see the FLTYTwntyNoExchange correct PostCode details

        Scenario: Approving FLTYTwntyNoExchange "Depart for Appointment" job
                And "Appointment" FLTYTwntyNoExchange details
                When I click on FLTYTwntyNoExchange Appointment OK button
                And I should see FLTYTwntyNoExchange ARRIVE button
                And I should see FLTYTwntyNoExchange DOORSTEP PROTOCOL tab activated

        Scenario: Set FLTYTwntyNoExchange job to Arrived status
                //Given the FLTYTwntyNoExchange "WorkOrder" page
                When I click on FLTYTwntyNoExchange ARRIVE button
                Then I should see FLTYTwntyNoExchange Arrival Time details
                And I should see FLTYTwntyNoExchange  BE AWARE OF ANY DANGER! section

        Scenario: Going through FLTYTwntyNoExchange "BE AWARE OF ANY DANGER!" section
                Given the FLTYTwntyNoExchange BE AWARE OF ANY DANGER! section
                When I fill the FLTYTwntyNoExchange DoorStep Protocol fields with the value
                And I click on FLTYTwntyNoExchange ON SITE button
                Then I should see FLTYTwntyNoExchange RISK ASSESSMENT tab activated
                And I should see FLTYTwntyNoExchange Initial Risk Assessment for GAS section

        Scenario: Going through FLTYTwntyNoExchange "INITIAL RISK ASSESSMENT"
                Given the FLTYTwntyNoExchange INITIAL RISK ASSESSMENT section
                When I fill the Abort Initial Risk Fields with Values
                When I click the Unabletoturnoff Reason and Abort the Job
                Then I should see the Aborted status for the workorder "DFFLTY20" on the appointments page

        Scenario: Going through deleting the work order after use
                When I delete workorder after use
                Then workorder should no longer exist