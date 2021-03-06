Feature: TST033_AbortInitialRisk_DFFLTY20SMETS2

    Scenario: Post DFFLTY20 SOAP Request
        Given I post workorder using "xmlrequest/DFFLTY20.XML"

    @LoginScenario
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

    Scenario: Selecting job and setting to depart
        Given FTwenty the "Work Order" page
        When FTwenty I fill the fields with the value
        And FTwenty I click on DEPART button
        Then FTwenty I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given FTwenty Appointment details
        When FTwentyD I click on OK button
        Then FTwenty I should see ARRIVE button
        And FTwenty I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given FTwenty the "WorkOrder" page
        When FTwenty I click on ARRIVE button
        Then FTwenty I should see Arrival Time details
        And FTwenty I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given FTwenty the BE AWARE OF ANY DANGER! section
        When FTwenty I fill the DoorStep Protocol fields with the value
        And FTwenty I click on ON SITE button
        Then FTwenty I should see RISK ASSESSMENT tab activated
        And FTwenty I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given FTwenty the INITIAL RISK ASSESSMENT section
        When I fill the Abort Initial Risk Fields with Values
        When I click the Unabletoturnoff Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFFLTY20" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist