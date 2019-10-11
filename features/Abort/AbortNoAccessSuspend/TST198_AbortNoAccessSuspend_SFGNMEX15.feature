Feature: SFGNMEX15 - AbortNoAccessSuspend Workflow

        Scenario: Post SFGNMEX15 SOAP Request
                Given I post workorder using "xmlrequest/SFGNMEX15.XML"

        @LoginScenario
        Scenario: Select the Latest workOrder
                Given the Appointment List window For SFENMEX15
                When I click on select button For SFENMEX15
                Then I should see Work Order window For SFENMEX15

        Scenario: Going through Call Forward
                Given the "Work Order" window For SFENMEX15
                When i see Call Forward or Arrive Button For SFENMEX15
                Then I click on CALL FORWARD button For SFENMEX15
                Then I should see page contect display For SFENMEX15
                And I should see the CUSTOMER CONTACT NUMBER For SFENMEX15
                And I should see Contact made field For SFENMEX15

        Scenario: Selecting job and setting to depart
                Given the SFENMEX15 WorkOrder Page
                When I fill the SFENMEX15 fields with the value
                And I click on SFENMEX15 DEPART button
                Then I should see SFENMEX15 Depart for Appointment window
                And I should see the SFENMEX15 correct MPAN details
                And I should see the SFENMEX15 correct Customer Name details
                And I should see the SFENMEX15 correct PostCode details

        Scenario: Approving "Depart for Appointment" job
                And Appointment details For SFENMEX15
                When I click on OK button For SFENMEX15
                And I should see ARRIVE button For SFENMEX15
                And I should see DOORSTEP PROTOCOL tab activated For SFENMEX15

        Scenario: Set job to Arrived status
                Given the SFENMEX15 WorkOrder Page
                When I click on ARRIVE button For SFENMEX15
                Then I should see Arrival Time details For SFENMEX15
                And I should see SFENMEX15 BE AWARE OF ANY DANGER! section

        Scenario: Going through "BE AWARE OF ANY DANGER!" section
                Given the SFENMEX15 BE AWARE OF ANY DANGER! section
                When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
                Then I should see the Appointment List For SFENMEX15

        Scenario: Going through Aborting Suspended Job
                Given the Appointment List window For SFENMEX15
                When I should click the AbortNoAccessSuspended status for the workorder "SFGNMEX15"
                Then I should see SFENMEX15 BE AWARE OF ANY DANGER! section
                And I fill the DoorStep Protocol Values fields to abort suspended job

        Scenario: Going through the Reason codes popup
                Given the AbortReasonCodespopup
                When I click the worknolongerrequired Reason and Abort the Job
                Then I should see the Aborted status for the workorder "SFGNMEX15" on the appointments page

        Scenario: Going through deleting the work order after use
                When I delete workorder after use
                Then workorder should no longer exist