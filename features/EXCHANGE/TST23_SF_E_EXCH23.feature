Feature: Exchange 23 Work Flow

    Scenario: Post SFEEXCH23 SOAP Request
        Given I post workorder using "xmlrequest/SFEEXCH23.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder for EXCH23
        Given the Appointment List window for EXCH23
        When I click on select button for EXCH23
        Then I should see Work Order window for EXCH23

    Scenario: Going through Call Forward for EXCH23
        Given the "Work Order" window for EXCH23
        When i see Call Forward or Arrive Button for EXCH23
        Then I click on CALL FORWARD button for EXCH23
        Then I should see page contect display for EXCH23

    Scenario: Selecting job and setting to depart for EXCH23
        Given the "Work Order" page for EXCH23
        When I fill the fields with the value for EXCH23
        And I click on DEPART button for EXCH23
        Then I should see Depart for Appointment window for EXCH23
        And I should see the correct MPAN details for EXCH23
        And I should see the correct Customer Name details for EXCH23
        And I should see the correct PostCode details for EXCH23

    Scenario: Approving "Depart for Appointment" job for EXCH23
        And "Appointment" details for EXCH23
        When I click on OK button for EXCH23
        And I should see ARRIVE button for EXCH23
        And I should see DOORSTEP PROTOCOL tab activated for EXCH23

    Scenario: Set job to Arrived status for EXCH23
        Given the "WorkOrder" page for EXCH23
        When I click on ARRIVE button for EXCH23
        Then I should see Arrival Time details for EXCH23
        And I should see BE AWARE OF ANY DANGER! section for EXCH23

    Scenario: Going through "BE AWARE OF ANY DANGER!" section for EXCH23
        Given the BE AWARE OF ANY DANGER! section for EXCH23
        When I fill the DoorStep Protocol fields with the value for EXCH23
        And I click on ON SITE button for EXCH23
        Then I should see RISK ASSESSMENT tab activated for EXCH23
        And I should see INITIAL RISK ASSESSMENT section for EXCH23

    Scenario: Going through "INITIAL RISK ASSESSMENT" for EXCH23
        Given the INITIAL RISK ASSESSMENT section for EXCH23
        When I fill the initialRisk field with the values for EXCH23
        Then I should see INFO window for EXCH23

    Scenario: Going through "RISK ASSESSMENT - ELEC" section for EXCH23
        Given the RISK ASSESSMENT - ELEC section for EXCH23
        When I fill the RISK ASSESSMENT - ELEC fields with the values for EXCH23
        And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for EXCH23
        And I click on NEXT SECTION button for EXCH23
        Then I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for EXCH23

    Scenario: Going through "Suitable for Smart Installation" for EXCH23
        Given the Suitable for Smart Installation section for EXCH23
        When I click on Is Site Suitable for Smart Installation? button for EXCH23
        And I click on Equipment Reposition Required? for EXCH23
        And I enter Additional Notes for Smart installation Check for EXCH23
        And I click on smart installation NEXT SECTION button for EXCH23

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION" for EXCH23
        Given the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for EXCH23
        When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button for EXCH23
        Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for EXCH23

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section for EXCH23
        Given the INITIAL POLARITY CHECK MARTINDALE TEST section for EXCH23
        When I fill the INITIAL POLARITY CHECK field with the values for EXCH23
        And I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for EXCH23
        And I fill the Socket Found field with the values for EXCH23
        Then I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for EXCH23

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for EXCH23
        Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for EXCH23
        When I fill the METER AND CUT OUT fields with the values for EXCH23
        And I click on SUBMIT button for EXCH23
        Then I should see CURRENT PPMID Details section for EXCH23

    Scenario: Going through "Current PPMID section" section for EXCH23
        Given CURRENT PPMID Details section for EXCH23
        When I fill the Current PPMID  fields with the values for EXCH23
        Then I should see Current Meter Details section for EXCH23

    Scenario: Going through "Check the current meter details" section for EXCH23
        Given the Current Meter Details section for EXCH23
        When I fill the current meter details fields with the values for EXCH23
        Then I should see CURRENT COMMS HUB DETAILS section for EXCH23

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section for EXCH23
        Given the CURRENT COMMS HUB DETAILS section for EXCH23
        When I fill the field13 with the value13 for EXCH23
        And I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button for EXCH23
        Then I should see ther REMOVE IHD-PPMID section for EXCH23

    Scenario: Going through "REMOVE IHD/PPMID" section
        Given the REMOVE IHD-PPMID section for EXCH23
        When I fill the field20 with the value20 for EXCH23
        Then I click on OK button in Info window with the text Ensure IHD is Powered On for EXCH23
        Then I fill the field21 with the value21 for EXCH23
        Then remove IHD click NEXT SECTION button for EXCH23
        And I should see SEND MESSAGE IHD-PPMID section for EXCH23

    Scenario: Going through "SEND MESSAGE IHD / PPMID" section for EXCH23
        Given the SEND MESSAGE IHD-PPMID section for EXCH23
        When I click on Send Message IHD-PPMID button for EXCH23
        Then I should see Awaiting Response button for PPMID for EXCH23

    Scenario: Waiting "AWAITING RESPONSE" for EXCH23
        Given the Awaiting Response button for EXCH23
        When I wait for the button to disappear for EXCH23
        Then I should see PPMID Removal Successful button for EXCH23
        And I should see Request Sent Successfully text message for EXCH23
        And I should see Asset Unjoined text message for EXCH23

    Scenario: Confirming "PPMID Removal Successful" for EXCH23
        Given the PPMID Removal Successful button is displayed for EXCH23
        When I click on PPMID Removal Successful button for EXCH23
        Then I should see CONFIRM IHD-PPMID ASSET REMOVAL section for EXCH23

    Scenario: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section for EXCH23
        Given the CONFIRM IHD-PPMID ASSET REMOVAL section for EXCH23
        When I fill the field22 with the value22 for EXCH23
        And I click on OK button in Updated window with the text Asset successfully added to Returns list for EXCH23

    Scenario: Going through "REMOVE METER" section for EXCH23
        Given the REMOVE METER section for EXCH23
        When I fill the field023 with the Value023 for EXCH23
        #### Can be used if button is available
        ####And I clk remove meter NEXT SECTION button for EXCH23
        Then I should see SEND MESSAGE EMREM section for EXCH23

    Scenario: Going through "SEND MESSAGE EMREM" section for EXCH23
        Given the SEND MESSAGE EMREM section for EXCH23
        When I click on Send Message EMREM button for EXCH23
        Then I should see Awaiting Response button EREM for EXCH23

    Scenario: Waiting "AWAITING RESPONSE"
        Given the Awaiting Response button for EXCH23
        When I wait for the butn to disappear for EXCH23
        Then I should see Removal Successful button for EXCH23
        And I should see Request Sent Successfully text message for EXCH23
        And I should see OK to Remove Asset text message for EXCH23

    Scenario: Confirming "Removal Successful" for EXCH23
        Given the Removal Successful button is displayed for EXCH23
        When I click on Removal Successful button for EXCH23
        Then I should see CONFIRM ELECTRIC ASSET REMOVAL section for EXCH23

    Scenario: Going through "CONFIRM ELECTRIC ASSET REMOVAL" section for EXCH23
        Given the CONFIRM ELEC ASSET REMOVAL section for EXCH23
        When I fill the field024 with the Value024 for EXCH23
        And Click ok on asset removal for EXCH23
        And CLick on the Submit Button for EXCH23
        Then I should see Install COMMS HUB window for EXCH23

    Scenario: Going through "INSTALL COMMS HUB" section for EXCH23
        Given the Install COMMS HUB window for EXCH23
        When I fill values for Install Comms Hub Section for EXCH23
        Then I should see New Meter Details Section for EXCH23

    Scenario: Going through "New Meter Details" section for EXCH23
        Given the New Meter Details Section for EXCH23
        When I fill values for New Meter Details Section for EXCH23
        Then I should see Additional Electricity Tests & Checks for EXCH23

    Scenario: Going through Additional Electricity Tests and Checks section for EXCH23
        Given the the ADDITIONAL ELECTRICITY CHECKS details section for EXCH23
        When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for EXCH23
        Then Initial Meter Reading of new meter for EXCH23

    Scenario: Going through Initial Elec Meter Reading of new meter depending on the number of Registers and dials section for EXCH23
        Given Initial Meter Reading of new meter depending on the number of Registers and dials section for EXCH23
        When I fill the Initial Meter Reading of new meter details fields with values for EXCH23
        Then I should see Post Installation Check Section for EXCH23

    Scenario: Going through Perform Post Installation Checks section for EXCH23
        Given Perform Post Installation Checks section for EXCH23
        When I fill the Perform Post Installation Checks details fields with values for EXCH23
        Then I should see Commission Bind the Comms hub to the WAN section for EXCH23

    Scenario: Going through Commission Bind the Comms hub to the WAN section for EXCH23
        Given Commission Bind the Comms hub to the WAN section for EXCH23
        When I fill the Commission Bind the Comms hub to the WAN details fields with values for EXCH23
        Then I should see Electric Install and Commisioning for EXCH23

    Scenario: Going through Perform DCC Message Creation for EICOM section for EXCH23
        Given Perform DCC Message Creation for EICOM section for EXCH23
        When I fill the Perform DCC Message Creation for EICOM details fields with values for EXCH23
        Then I should See INSTALL PPMID section for EXCH23

    Scenario: Going through "INSTALL PPMID" section
        Given the INSTALL PPMID section for EXCH23
        When I fill the fields for Install PPMID for EXCH23
        Then I should see PPMID COMMISSIONING section for EXCH23

    Scenario: Going through "PPMID COMMISSIONING" section
        Given the PPMID COMMISSIONING section for EXCH23
        When I click on Send Message IHD-PPMID butn for EXCH23
        Then I should see PPMID Awaiting Response butn for EXCH23

    Scenario: Waiting "AWAITING RESPONSE"
        Given the Awaiting Response butn after ppmid commisioning for EXCH23
        When I wait for the button to disappear after PPMID Commisioning for EXCH23
        Then I should see PPMID Commissioning Successful button for EXCH23
        And I should see PPMID Request Sent Successfully txt message for EXCH23
        And I should see PPMID Pair Asset to Comms Hub text message for EXCH23
        And I should see Pairing Successful text message for EXCH23


    Scenario: Confirming "PPMID Commissioning Successful"
        Given the PPMID Commissioning Successful button is displayed for EXCH23
        When I click on SUB button for EXCH23
        Then I should see DEVICE BINDING and COMMISSIONING sec for EXCH23

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given the DEVICE BINDING & COMMISSIONING section for EXCH23
        When I fill the fields53 and click next for EXCH23
        Then I should see ENERGY EFFICIENCY INFORMATION section for EXCH23

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given the ENERGY EFFICIENCY INFORMATION section for EXCH23
        When I fill the fields54 and click next for EXCH23
        Then I should see SMART EDUCATION section for EXCH23

    Scenario: Going through "SMART EDUCATION" section
        Given the SMART EDUCATION section for EXCH23
        When I fill the fields55 and click next for EXCH23
        Then I should see SMART LITERATURE LEFT ON SITE section for EXCH23

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
        Given the SMART LITERATURE LEFT ON SITE section for EXCH23
        When I fill the fields56 and click next for EXCH23
        Then See CAPTURE CUSTOMER SIGNATURE sec for EXCH23

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given the CAPTURE CUSTOMER SIGNATURE section for EXCH23
        When I write signature in Customer Signature for EXCH23
        And I fill the field57 and Job Complete for EXCH23
        Then see Job Completed screen for EXCH23

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist