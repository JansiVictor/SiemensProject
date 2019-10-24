Feature:TST072 _AbortPreGasTest_SFGFLTY18TRAD

    Scenario: Post SFGFLTY18TRAD SOAP Request
        Given I post workorder using "xmlrequest/SFGFLTY18TRAD.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder for FLTY18TRAD
        Given the Appointment List window for FLTY18TRAD
        When I click on select button for FLTY18TRAD
        Then I should see Work Order window for FLTY18TRAD

    Scenario: Going through Call Forward for FLTY18TRAD
        Given the "Work Order" window for FLTY18TRAD
        When i see Call Forward or Arrive Button for FLTY18TRAD
        Then I click on CALL FORWARD button for FLTY18TRAD
        Then I should see page contect display for FLTY18TRAD
        And I should see the CUSTOMER CONTACT NUMBER for FLTY18TRAD
        And I should see Contact made field for FLTY18TRAD

    Scenario: Selecting job and setting to depart for FLTY18TRAD
        Given the "Work Order" page for FLTY18TRAD
        When I fill the fields with the value for FLTY18TRAD
        And I click on DEPART button for FLTY18TRAD
        Then I should see Depart for Appointment window for FLTY18TRAD

    Scenario: Approving "Depart for Appointment" job for FLTY18TRAD
        Given Appointment details for FLTY18TRAD
        When I click on OK button for FLTY18TRAD
        Then I should see ARRIVE button for FLTY18TRAD
        And I should see DOORSTEP PROTOCOL tab activated for FLTY18TRAD

    Scenario: Set job to Arrived status for FLTY18TRAD
        Given the "WorkOrder" page for FLTY18TRAD
        When I click on ARRIVE button for FLTY18TRAD
        Then I should see Arrival Time details for FLTY18TRAD
        And I should see BE AWARE OF ANY DANGER! section for FLTY18TRAD

    Scenario: Going through "BE AWARE OF ANY DANGER!" section for FLTY18TRAD
        Given the BE AWARE OF ANY DANGER! section for FLTY18TRAD
        When I fill the DoorStep Protocol fields with the value for FLTY18TRAD
        And I click on ON SITE button for FLTY18TRAD
        Then I should see RISK ASSESSMENT tab activated for FLTY18TRAD
        And I should see INITIAL RISK ASSESSMENT section for FLTY18TRAD

    Scenario: Going through "INITIAL RISK ASSESSMENT" for FLTY18TRAD
        Given the INITIAL RISK ASSESSMENT section for FLTY18TRAD
        When I fill the initialRisk field with the values for FLTY18TRAD
        And I fill Need to work Yes for FLTY18TRAD
        Then I should see RISK ASSESSMENT ELEC section for FLTY18TRAD

    Scenario: Going through "RISK ASSESSMENT - ELEC" section for FLTY18TRAD
        Given the RISK ASSESSMENT - ELEC section for FLTY18TRAD
        When I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY18TRAD
        And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY18TRAD
        And I click on NEXT SECTION button for FLTY18TRAD
        Then I should see the RISK ASSESSMENT - GAS section for FLTY18TRAD

    Scenario: Going through "RISK ASSESSMENT - GAS" for FLTY18TRAD
        Given the RISK ASSESSMENT - GAS section for FLTY18TRAD
        When I fill the field05 with the value05 for FLTY18TRAD
        Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE button for FLTY18TRAD
        And I fill the field06 with the value06 for FLTY18TRAD
        Then I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY18TRAD

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section for FLTY18TRAD
        Given the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY18TRAD
        When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button gas for FLTY18TRAD
        Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for FLTY18TRAD

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section for FLTY18TRAD
        Given the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY18TRAD
        When I fill the INITIAL POLARITY CHECK field with the values for FLTY18TRAD
        Then I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY18TRAD
        Then I fill the Socket Found field with the values for FLTY18TRAD
        And I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY18TRAD

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for FLTY18TRAD
        Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY18TRAD
        When I fill the METER AND CUT OUT fields with the values for FLTY18TRAD
        And I click on NEXT button for FLTY18TRAD
        And I click on SUBMIT button for FLTY18TRAD
        Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY18TRAD

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section for FLTY18TRAD
        Given the CURRENT IHD-PPMID DETAILS section for FLTY18TRAD
        When I fill the field010 with the value010 for FLTY18TRAD
        Then I should see the page contect display of current meter details for FLTY18TRAD

    Scenario: Going through "CURRENT METER DETAILS - GAS" section for FLTY18TRAD
        Given the CURRENT METER DETAILS - GAS section for FLTY18TRAD
        When I fill the field with the value gas for FLTY18TRAD
        Then I should see the DETERMINE FAULT ACTIVITY section for FLTY18TRAD

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY18TRAD
        Given the DETERMINE FAULT ACTIVITY section for FLTY18TRAD
        When I fill values elec and gas meter Supply for FLTY18TRAD
        Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY18TRAD
        And I fill for SMET2 Asset Installed for FLTY18TRAD
        And I fill do you need exchange asset for FLTY18TRAD
        And I fill equipment reposition for FLTY18TRAD
        And I select SMETS2 Offered for FLTY18TRAD
        And I click on NEXT SECT button for FLTY18TRAD
        And I should see PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY18TRAD

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section for FLTY18TRAD
        Given the PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY18TRAD
        When I fill Pre Installtion Tighness Check NO and click abort button1
        Then I should see the Abort Reason Code Pop Up PreGas

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup PreGas
        When I click the Reason and Abort Appointment Button
        Then I should see the Aborted status for the workorder "SFGFLTY18TRAD" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist