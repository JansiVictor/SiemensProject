Feature: DFRMVE7 - AbortNoAccessSuspend Workflow

    Scenario: Post DFRMVE7 SOAP Request
        Given I post workorder using "xmlrequest/DFRMVE7.XML"


    @LoginScenario
    Scenario: Select the Latest workOrder
        Given TST28 the Appointment List window
        When TST28 I click on select button
        Then TST28 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST28 the "Work Order" window
        When TST28 i see Call Forward or Arrive Button
        Then TST28 I click on CALL FORWARD button
        Then TST28 I should see page contect display
        And TST28 I should see the CUSTOMER CONTACT NUMBER
        And TST28 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST28 the "Work Order" page
        When TST28 I fill the fields with the value
        And TST28 I click on DEPART button
        Then TST28 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST28 Appointment details
        When TST28D I click on OK button
        Then TST28 I should see ARRIVE button
        And TST28 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST28 the "WorkOrder" page
        When TST28 I click on ARRIVE button
        Then TST28 I should see Arrival Time details
        And TST28 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST28 the BE AWARE OF ANY DANGER! section
        When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
        Then TST28 I should see the Appointment List

    Scenario: Going through Aborting Suspended Job
        Given TST28 the Appointment List window
        When I should click the AbortNoAccessSuspended status for the workorder "DFRMVE7"
        Then TST28 I should see BE AWARE OF ANY DANGER! section
        And I fill the DoorStep Protocol Values fields to abort suspended job

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the worknolongerrequired Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFRMVE7" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist