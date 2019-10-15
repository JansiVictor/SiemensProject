Feature: TST128_AbortPreGasTest_SFGFLTY18TRADSMETS2DUMB

    Scenario: Post SFGFLTY18TRAD SOAP Request
        Given I post workorder using "xmlrequest/SFGFLTY18TRAD.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given TST15 the Appointment List window
        When TST15 I click on select button
        Then TST15 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST15 the "Work Order" window
        When TST15 i see Call Forward or Arrive Button
        Then TST15 CALL FORWARD button
        Then TST15 I should see page contect display
        And TST15 I should see the CUSTOMER CONTACT NUMBER
        And TST15 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST15 the "Work Order" page
        When TST15 I fill the fields with the value
        And TST15 DEPART button
        Then TST15 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST15 Appointment details
        When TST15 OK button
        Then TST15 I should see ARRIVE button
        And TST15 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST15 the "WorkOrder" page
        When TST15 ARRIVE button
        Then TST15 I should see Arrival Time details
        And TST15 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST15 the BE AWARE OF ANY DANGER! section
        When TST15 I fill the DoorStep Protocol fields with the value
        And TST15 ON SITE button
        Then TST15 I should see RISK ASSESSMENT tab activated
        And TST15 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST15 the INITIAL RISK ASSESSMENT section
        When TST15 I fill the initialRisk field with the values
        Then TST15 I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given TST15 the RISK ASSESSMENT - ELEC section
        When TST15 I fill the RISK ASSESSMENT - ELEC fields with the values
        And TST15 CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And TST15 NEXT SECTION button
        Then TST15 I should see the RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given TST15 the RISK ASSESSMENT - GAS section
        When TST15 I fill the field05 with the value05
        Then TST15 CAPTURE PHOTOGRAPHIC EVIDENCE button
        And TST15 I fill the field06 with the value06
        And TST15 I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given TST15 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When TST15 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then TST15 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given TST15 the INITIAL POLARITY CHECK MARTINDALE TEST section
        When TST15 I fill the INITIAL POLARITY CHECK field with the values
        Then TST15 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then TST15 I fill the Socket Found field with the values
        And TST15 I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given TST15 the INITIAL POLARITY CHECK - AT METER AND CUT OUT section
        When TST15 I fill the METER AND CUT OUT fields with the values
        And TST15 on SUBMIT button
        Then TST15 I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given TST15 the CURRENT IHD-PPMID DETAILS section
        When TST15 I fill the field010 with the value010
        And TST15 I should see CURRENT METER DETAILS - GAS section
        Then TST15 I should see the page contect display of current meter details

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given TST15 the CURRENT METER DETAILS - GAS section
        When TST15 I fill the field with the value
        Then TST15 I should see DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given TST15 the DETERMINE FAULT ACTIVITY section
        When TST15 I fill the field14 with the value014
        Then TST15 Determine CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And TST15 I fill the field15 with the value15
        And TST15 I select Gas Meter field
        And TST15 I select Regulator field
        And TST15 fill the filelds45 and values
        And TST15 I click NEXT SECT button
        And TST15 I should see PRE INSTALLATION GAS TIGHTNESS TEST section

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
        Given TST15 the PRE INSTALLATION GAS TIGHTNESS TEST section
        When I fill Pre Installtion Tighness Check NO and click abort button1
        Then I should see the Abort Reason Code Pop Up PreGas

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup PreGas
        When I click the Reason and Abort Appointment Button
        Then I should see the Aborted status for the workorder "SFGFLTY18TRAD" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist

