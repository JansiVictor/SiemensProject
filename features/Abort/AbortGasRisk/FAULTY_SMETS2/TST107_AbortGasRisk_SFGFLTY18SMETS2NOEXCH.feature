Feature: TST107_AbortGasRisk_SFGFLTY18SMETS2NOEXCH

    Scenario: Post SFGFLTY18 SOAP Request
        Given I post workorder using "xmlrequest/SFGFLTY18.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given TST12 the Appointment List window
        When TST12 I click on select button
        Then TST12 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST12 the "Work Order" window
        When TST12 i see Call Forward or Arrive Button
        Then TST12 I click on CALL FORWARD button
        Then TST12 I should see page contect display
        And TST12 I should see the CUSTOMER CONTACT NUMBER
        And TST12 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST12 the "Work Order" page
        When TST12 I fill the fields with the value
        And TST12 I click on DEPART button
        Then TST12 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST12 Appointment details
        When TST12 I click on OK button
        Then TST12 I should see ARRIVE button
        And TST12 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST12 the "WorkOrder" page
        When TST12 I click on ARRIVE button
        Then TST12 I should see Arrival Time details
        And TST12 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST12 the BE AWARE OF ANY DANGER! section
        When TST12 I fill the DoorStep Protocol fields with the value
        And TST12 I click on ON SITE button
        Then TST12 I should see RISK ASSESSMENT tab activated
        And TST12 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST12 the INITIAL RISK ASSESSMENT section
        When TST12 I fill the initialRisk field with the values
        Then TST12 I should see INFO window

    Scenario: Going through "INFO" window
        Given TST12 the INFO window with the text
        When TST12 click OK in Popup
        Then TST12 I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given TST12 the RISK ASSESSMENT - ELEC section
        When TST12 I fill the RISK ASSESSMENT - ELEC fields with the values
        And TST12 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And TST12 I click on NEXT SECTION button
        Then TST12 I should see the RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given TST12 the RISK ASSESSMENT - GAS section
        And I fill the GasRisk btn1 abort fields with values
        And I select Reason and Gas Abort Job
        Then I should see the Aborted status for the workorder "SFGasFLTY18SMETS2" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
