Feature: TST169_AbortInitialRisk_DFEXCH24

    Scenario: Post DFEXCH24 SOAP Request
        Given I post workorder using "xmlrequest/DFEXCH24.XML"

    @LoginScenario
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

    Scenario: Selecting job and setting to depart
        When I fill the TST22 fields with the value
        When I click on TST22 DEPART button
        Then I should see TST22 Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST22 Appointment details
        When I click on TST22 MPRNOK button
        Then I should see TST22 ARRIVE button
        Then I should see TST22 DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given the TST WorkOrder page
        When I click on TST22 ARRIVE button
        Then I should see TST22 Arrival Time details
        And I should see TST22 BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the TST22 BE AWARE OF ANY DANGER! section
        When I fill the TST22 DoorStep Protocol fields with the value
        When I click on TST22 ON SITE button
        Then I should see TST22 RISK ASSESSMENT tab activated
        Then I should see TST22 INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given the TST22 INITIAL RISK ASSESSMENT section
        When I fill the Abort Initial Risk Fields with Values
        When I click the Unabletoturnoff Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFEXCH24" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist