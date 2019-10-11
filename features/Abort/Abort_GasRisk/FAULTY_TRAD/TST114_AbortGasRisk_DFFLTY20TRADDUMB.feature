Feature: TST114_AbortGasRisk_DFFLTY20TRADDUMB

    Scenario: Post DFFLTY20TRAD SOAP Request
        Given I post workorder using "xmlrequest/DFFLTY20TRAD.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder for FLTY20TRAD
        Given the Appointment List window for FLTY20TRAD
        When I click on select button for FLTY20TRAD
        Then I should see Work Order window for FLTY20TRAD

    Scenario: Going through Call Forward for FLTY20TRAD
        Given the "Work Order" window for FLTY20TRAD
        When i see Call Forward or Arrive Button for FLTY20TRAD
        Then I click on CALL FORWARD button for FLTY20TRAD
        Then I should see page contect display for FLTY20TRAD
        And I should see the CUSTOMER CONTACT NUMBER for FLTY20TRAD
        And I should see Contact made field for FLTY20TRAD

    Scenario: Selecting job and setting to depart for FLTY20TRAD
        Given the "Work Order" page for FLTY20TRAD
        When I fill the fields with the value for FLTY20TRAD
        And I click on DEPART button for FLTY20TRAD
        Then I should see Depart for Appointment window for FLTY20TRAD

    Scenario: Approving "Depart for Appointment" job for FLTY20TRAD
        Given Appointment details for FLTY20TRAD
        When I click on OK button for FLTY20TRAD
        Then I should see ARRIVE button for FLTY20TRAD
        And I should see DOORSTEP PROTOCOL tab activated for FLTY20TRAD

    Scenario: Set job to Arrived status for FLTY20TRAD
        Given the "WorkOrder" page for FLTY20TRAD
        When I click on ARRIVE button for FLTY20TRAD
        Then I should see Arrival Time details for FLTY20TRAD
        And I should see BE AWARE OF ANY DANGER! section for FLTY20TRAD

    Scenario: Going through "BE AWARE OF ANY DANGER!" section for FLTY20TRAD
        Given the BE AWARE OF ANY DANGER! section for FLTY20TRAD
        When I fill the DoorStep Protocol fields with the value for FLTY20TRAD
        And I click on ON SITE button for FLTY20TRAD
        Then I should see RISK ASSESSMENT tab activated for FLTY20TRAD
        And I should see INITIAL RISK ASSESSMENT section for FLTY20TRAD

    Scenario: Going through "INITIAL RISK ASSESSMENT" for FLTY20TRAD
        Given the INITIAL RISK ASSESSMENT section for FLTY20TRAD
        When I fill the initialRisk field with the values for FLTY20TRAD
        Then I should see RISK ASSESSMENT ELEC section for FLTY20TRAD

    Scenario: Going through "RISK ASSESSMENT - ELEC" section for FLTY20TRAD
        Given the RISK ASSESSMENT - ELEC section for FLTY20TRAD
        When I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY20TRAD
        And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY20TRAD
        And I click on NEXT SECTION button for FLTY20TRAD
        Then I should see the RISK ASSESSMENT - GAS section for FLTY20TRAD

    Scenario: Going through "RISK ASSESSMENT - GAS" for FLTY20TRAD
        Given the RISK ASSESSMENT - GAS section for FLTY20TRAD
        And I fill the GasRisk abort fields with values
        And I select Reason and Abort the Job
        And I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY20TRAD

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION" section for FLTY20TRAD
        Given the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY20TRAD
        When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button elec for FLTY20TRAD
        Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for FLTY20TRAD

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section for FLTY20TRAD
        Given the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY20TRAD
        When I fill the INITIAL POLARITY CHECK field with the values for FLTY20TRAD
        Then I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY20TRAD
        Then I fill the Socket Found field with the values for FLTY20TRAD
        And I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY20TRAD

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for FLTY20TRAD
        Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY20TRAD
        When I fill the METER AND CUT OUT fields with the values for FLTY20TRAD
        And I click on SFENMEX16 SUBMIT button
        Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY20TRAD

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section for FLTY20TRAD
        Given the CURRENT IHD-PPMID DETAILS section for FLTY20TRAD
        When I fill the field010 with the value010 for FLTY20TRAD
        Then I should see the page contect display of current meter details for FLTY20TRAD

    Scenario: Going through "CURRENT METER DETAILS - GAS" section for FLTY20TRAD
        Given the CURRENT METER DETAILS - GAS section for FLTY20TRAD
        When I fill the field with the value gas for FLTY20TRAD
        Then I should see the CAPTURE CURRENT METER  section for FLTY20TRAD

    Scenario: Going through "CAPTURE CURRENT METER Elec" section for FLTY20TRAD
        Given the CAPTURE CURRENT METER section for FLTY20TRAD
        When I fill capture current meter elec for FLTY20TRAD
        Then I should see the DETERMINE FAULT ACTIVITY section for FLTY20TRAD

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY20TRAD
        Given the DETERMINE FAULT ACTIVITY section for FLTY20TRAD
        When I fill values elec and gas meter Supply for FLTY20TRAD
        Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY20TRAD
        And I fill for SMET2 Asset Installed for FLTY20TRAD
        And I fill do you need exchange asset for FLTY19 Trad
        And I fill equipment reposition for FLTY20TRAD
        And I select SMETS2 Offered for FLTY20TRAD
        And I click on NEXT SECT button for FLTY20TRAD
        And I should see REMOVE ELEC ASSET REMOVAL section for FLTY20TRAD

    Scenario: Going through "REMOVE ELEC METER" section for FLTY20TRAD
        Given the REMOVE ELEC ASSET REMOVAL section for FLTY20TRAD
        When I fill the values for elec removal FLTY20TRAD
        Then I click on NEXT button in removing elec meter for FLTY20TRAD
        And I should see CONFIRM ELEC ASSET REMOVAL section for FLTY20TRAD

    Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section for FLTY20TRAD
        Given the CONFIRM ELEC ASSET REMOVAL section for FLTY20TRAD
        When I fill values for FLTY20TRAD
        Then I click on OK btn in Updated window with the text Elec Asset successfully added to Returns list for FLTY20TRAD
        And I should click on next section for FLTY20TRAD
        And I clk RmveSix SUBMIT
        And I should see INSTALL COMMS HUB section for FLTY20TRAD

    Scenario: Going through "INSTALL COMMS HUB" section for FLTY20TRAD
        Given the INSTALL COMMS HUB sec for FLTY20TRAD
        When I fill the Ins comms hub fields and capture photo EVIDENCE for FLTY20TRAD
        Then I should see New Meter Details section for for FLTY20TRAD

    Scenario: Going through "New Meter details" section for FLTY20TRAD
        Given the  New Meter details section for FLTY20TRAD
        When FTwenty I fill the fields and values for New meter details
        Then FTwenty I should see NEW Meter section

    Scenario: Continuing "NEW METER DETAILS" section
        Given FTwenty the Manufacturer Letter radio button
        When FTwenty I fill the field33 with the Value33
        And FTwenty manufacturer NEXT SECTION button
        Then I should see ADDITIONAL ELECTRICITY CHECKS section for FLTY20TRAD

    Scenario: Going through Additional Electricity Tests and Checks section for FLTY20TRAD
        Given the the ADDITIONAL ELECTRICITY CHECKS details section for FLTY20TRAD
        When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for FLTY20TRAD

    Scenario: Going through Initial Elec Meter Reading of new meter depending on the number of Registers and dials section for FLTY20TRAD
        Given Initial Meter Reading of new meter depending on the number of Registers and dials section for FLTY20TRAD
        When TST55 I fill the FldName with the Value
        Then I should see Post Installation Check Section for FLTY20TRAD

    Scenario: Going through Perform Post Installation Checks section for FLTY20TRAD
        Given Perform Post Installation Checks section for FLTY20TRAD
        When I fill the Perform Post Installation Checks details fields with values for FLTY20TRAD
        Then I should see Commission Bind the Comms hub to the WAN section for FLTY20TRAD

    Scenario: Going through Commission Bind the Comms hub to the WAN section for FLTY20TRAD
        Given FTwenty the COMMISSIONING section
        When FTwenty I fill the FldName39 with the Value39
        And FTwenty I click on ADD ANOTHER ASSET button
        And FTwenty I fill the FldName40 with the Value40
        And FTwenty I clk commisioning on NEXT button
        Then I should see Electric Install and Commisioning for FLTY20TRAD

    Scenario: Going through Perform DCC Message Creation for EICOM section for FLTY20TRAD
        Given Perform DCC Message Creation for EICOM section for FLTY20TRAD
        When I fill the Perform DCC Message Creation for EICOM details fields with values for FLTY20TRAD
        Then I should see SMETS PPMID sec for FLTY20TRAD

    Scenario: Going through "INSTALL PPMID" section
        Given the "INSTALL PPMID" section for FLTY20TRAD
        When TST03 I fill the fields for Install PPMID
        Then I should see PPMID COMMISSIONING section for FLTY20TRAD

    Scenario: Going through "PPMID COMMISSIONING" section
        Given the PPMID COMMISSIONING section for FLTY20TRAD
        When I click on Send Message IHD-PPMID butn for FLTY20TRAD
        Then I should see PPMID Awaiting Response butn for FLTY20TRAD

    Scenario: Waiting "AWAITING RESPONSE"
        Given the Awaiting Response butn after ppmid commisioning for FLTY20TRAD
        When I wait for the button to disappear after PPMID Commisioning for FLTY20TRAD
        Then I should see PPMID Commissioning Successful button for FLTY20TRAD
        And FTwenty I should see Request Sent Successfully txt message
        And I should see PPMID Pair Asset to Comms Hub text message for FLTY20TRAD
        And I should see Pairing Successful text message for FLTY20TRAD

    Scenario: Confirming "PPMID Commissioning Successful"
        Given the PPMID Commissioning Successful button is displayed for FLTY20TRAD
        When I click on SUB button for FLTY19 Trad
        Then I should see DEVICE BINDING and COMMISSIONING sec for FLTY20TRAD

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given the DEVICE BINDING & COMMISSIONING section for FLTY20TRAD
        When I fill the fields53 and click next for FLTY20TRAD
        Then I should see ENERGY EFFICIENCY INFORMATION section for FLTY20TRAD

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given the ENERGY EFFICIENCY INFORMATION section for FLTY20TRAD
        When I fill the fields54 and click next for FLTY20TRAD
        Then I should see SMART EDUCATION section for FLTY20TRAD

    Scenario: Going through "SMART EDUCATION" section
        Given the SMART EDUCATION section for FLTY20TRAD
        When I fill the fields55 and click next for FLTY20TRAD
        Then I should see SMART LITERATURE LEFT ON SITE section for FLTY20TRAD

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
        Given the SMART LITERATURE LEFT ON SITE section for FLTY20TRAD
        When I fill the fields56 and click next for FLTY20TRAD
        Then See CAPTURE CUSTOMER SIGNATURE sec for FLTY20TRAD

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given the CAPTURE CUSTOMER SIGNATURE section for FLTY20TRAD
        When I write signature in Customer Signature for FLTY20TRAD
        And I fill the field57 and Job Complete for FLTY20TRAD
        Then see Job Completed screen for FLTY20TRAD

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
