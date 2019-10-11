Feature: TST03_SF_Gas_FLTY18_SMETS2

        Scenario: Post SFGFLTY18 SOAP Request
                Given I post workorder using "xmlrequest/SFGFLTY18.XML"

        @LoginScenario
        Scenario: Select the Latest workOrder
                Given TST03 the Appointment List window
                When TST03 I click on select button
                Then TST03 I should see Work Order window

        Scenario: Going through Call Forward
                Given TST03 the "Work Order" window
                When TST03 i see Call Forward or Arrive Button
                Then TST03 I click on CALL FORWARD button
                Then TST03 I should see page contect display
                And TST03 I should see the CUSTOMER CONTACT NUMBER
                And TST03 I should see Contact made field

        Scenario: Selecting job and setting to depart
                Given TST03 the "Work Order" page
                When TST03 I fill the fields with the value
                And TST03 I click on DEPART button
                Then TST03 I should see Depart for Appointment window

        Scenario: Approving "Depart for Appointment" job
                Given TST03 Appointment details
                When TST03 I click depart OK button
                Then TST03 I should see ARRIVE button
                And TST03 I should see DOORSTEP PROTOCOL tab activated

        Scenario: Set job to Arrived status
                Given TST03 the "WorkOrder" page
                When TST03 I click on ARRIVE button
                Then TST03 I should see Arrival Time details
                And TST03 I should see BE AWARE OF ANY DANGER! section

        Scenario: Going through "BE AWARE OF ANY DANGER!" section
                Given TST03 the BE AWARE OF ANY DANGER! section
                When TST03 I fill the DoorStep Protocol fields with the value
                And TST03 I click on ON SITE button
                Then TST03 I should see RISK ASSESSMENT tab activated
                And TST03 I should see INITIAL RISK ASSESSMENT section

        Scenario: Going through "INITIAL RISK ASSESSMENT"
                Given TST03 the INITIAL RISK ASSESSMENT section
                When TST03 I fill the initialRisk field with the values
                Then TST03 I should see INFO window

        Scenario: Going through "INFO" window
                Given TST03 the INFO window with the text
                Then TST03 I should see RISK ASSESSMENT ELEC section

        Scenario: Going through "RISK ASSESSMENT - ELEC" section
                Given TST03 the RISK ASSESSMENT - ELEC section
                When TST03 I fill the RISK ASSESSMENT - ELEC fields with the values
                And TST03 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
                And TST03 I click on NEXT SECTION button
                Then TST03 I should see the RISK ASSESSMENT - GAS section

        Scenario: Going through "RISK ASSESSMENT - GAS"
                Given TST03 the RISK ASSESSMENT - GAS section
                When TST03 I fill the field05 with the value05
                Then TST03 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
                And TST03 I fill the field06 with the value06
                And TST03 I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

        Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
                Given TST03 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
                When TST03 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
                Then TST03 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section

        Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
                Given TST03 the INITIAL POLARITY CHECK MARTINDALE TEST section
                When TST03 I fill the INITIAL POLARITY CHECK field with the values
                Then TST03 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
                Then TST03 I fill the Socket Found field with the values
                And TST03 I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section

        Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
                Given TST03 the INITIAL POLARITY CHECK - AT METER AND CUT OUT section
                When TST03 I fill the METER AND CUT OUT fields with the values
                And TST03 I click on SUBMIT button
                Then TST03 I should see the CURRENT IHD-PPMID DETAILS section in remove tab

        Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
                Given TST03 the CURRENT IHD-PPMID DETAILS section
                When TST03 I fill the field010 with the value010
                And TST03 I should see CURRENT METER DETAILS - GAS section
                Then TST03 I should see the page contect display of current meter details

        Scenario: Going through "CURRENT METER DETAILS - GAS" section
                Given TST03 the CURRENT METER DETAILS - GAS section
                When TST03 I fill the field with the value
                Then TST03 I should see CURRENT COMMS HUB DETAILS section
                And TST03 I should see the page contect display

        Scenario: Going through "CURRENT COMMS HUB DETAILS" section
                Given TST03 the CURRENT COMMS HUB DETAILS section
                When TST03 I fill the field13 with the value13
                Then TST03 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
                And TST03 I should see DETERMINE FAULT ACTIVITY section

        Scenario: Going through "DETERMINE FAULT ACTIVITY" section
                Given TST03 the DETERMINE FAULT ACTIVITY section
                When TST03 I fill the field14 with the value014
                Then TST03 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
                And TST03 I fill the field15 with the value15
                And TST03 I click on Faulty OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
                And TST03 I fill the field16 with the value16
                And TST03 I select Comms Hub field
                And TST03 I select Gas Meter field
                And TST03 I select Regulator field
                And TST03 I select IHD-PPMID field
                And TST03 I click NEXT SECT button
                And TST03 I should see PRE INSTALLATION GAS TIGHTNESS TEST section

        Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
                Given TST03 the PRE INSTALLATION GAS TIGHTNESS TEST section
                When TST03 I fill the field17 with the value17
                Then TST03 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
                And TST03 I fill the field18 with the value18
                And TST03 I see Gas Tightness Test Completed field as FAIL
                And TST03 I fill the field19 with the value19
                And TST03 I should see REMOVE IHD-PPMID section

        Scenario: Going through "REMOVE IHD/PPMID" section
                Given TST03 the REMOVE IHD-PPMID section
                When TST03 I fill the field20 with the value20
                Then TST03 I click on Remove IHD OK button in Info window with the text Ensure IHD is Powered On
                Then TST03 I fill the field21 with the value21
                Then TST03 I click on NEXT in remove IHD
                And TST03 I should see SEND MESSAGE IHD-PPMID section

        Scenario: Going through "SEND MESSAGE IHD / PPMID" section
                Given TST03 the SEND MESSAGE IHD-PPMID section
                When TST03 I click on Send Message IHD-PPMID button
                Then TST03 I should see Awaiting Response button

        Scenario: Waiting "AWAITING RESPONSE"
                Given TST03 the Awaiting Response button
                When TST03 I wait for the button to disappear
                Then TST03 I should see PPMID Removal Successful button
                And TST03 I should see Request Sent Successfully text message
                And TST03 I should see Asset Unjoined text message

        Scenario: Confirming "PPMID Removal Successful"
                Given TST03 the PPMID Removal Successful button is displayed
                When TST03 I click on PPMID Removal Successful button
                Then TST03 I should see CONFIRM IHD-PPMID ASSET REMOVAL section

        Scenario: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section
                Given TST03 the CONFIRM IHD-PPMID ASSET REMOVAL section
                When TST03 I fill the field22 with the value22
                And TST03 I click on OK in Updated window with the text Asset successfully added to Returns list
                Then TST03 I should see REMOVE GAS METER section

        Scenario: Going through "REMOVE GAS METER" section
                Given TST03 the REMOVE GAS METER section
                When TST03 I fill the field23 with the value23
                Then TST03 I click on NEXT button in removing gas meter
                And TST03 I should see SEND MESSAGE GMREM section

        Scenario: Going through "SEND MESSAGE GMREM" section
                Given TST03 the SEND MESSAGE GMREM section
                When TST03 I click on Send Message GMREM button
                Then TST03 I should see Awaiting Response button in GMREM

        Scenario: Waiting "AWAITING RESPONSE"
                Given TST03 the Awaiting Response btn in Send GMREM
                When TST03 I wait for the btn to disappear in GMREM
                Then TST03 I should see Removal Successful button
                And TST03 I should see GMREM Request Sent Successfully txt message
                And TST03 I should see OK to Remove Asset text message

        Scenario: Confirming "Removal Successful"
                Given TST03 the Removal Successful button is displayed
                When TST03 I click on Removal Successful button
                Then TST03 I should see CONFIRM GAS ASSET REMOVAL section

        Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
                Given TST03 the CONFIRM GAS ASSET REMOVAL section
                When TST03 I fill the field24 with the value24
                Then TST03 I click on OK btn in Updated window with the text Asset successfully added to Returns list
                And TST03 I should see REMOVE COMMS HUB window

        Scenario: Going through "REMOVE COMMS HUB" section
                Given TST03 the REMOVE COMMS HUB section
                When TST03 I fill the field027 with the value27
                Then TST03 I click on NEXT SEC button from Remove Comms Hub
                And TST03 I should see CONFIRM COMMS HUB REMOVAL section

        Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
                Given TST03 the CONFIRM COMMS HUB REMOVAL section
                When TST03 I fill the field28 with the value28
                And TST03 I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step
                Then TST03 I click on SUBMIT btn from confirm comms hub removal
                And TST03 I should see INSTALL COMMS HUB section

        Scenario: Going through "INSTALL COMMS HUB" section
                Given TST03 the INSTALL COMMS HUB sec
                When TST03 I fill the Ins comms hub fields and capture photo EVIDENCE
                Then TST03 I should see SEND MSG XCHUB section

        Scenario: Continuing "SEND MESSAGE XCHUB" section
                Given TST03 the SEND MESSAGE XCHUB section
                When TST03 I click on Send Message XCHUB button
                Then TST03 I should see XCHUB Awaiting Response butn

        Scenario: Waiting "AWAITING RESPONSE"
                Given TST03 the Awaiting Response butn XCHUB
                When TST03 I wait for the butn to disappear XCHUB
                Then TST03 I should see Removal Successful butn XCHUB
                And TST03 I should see Request Sent Successfully text msg XCHUB
                And TST03 I should see Whitelist transfer completed check LED indication is correct text message

        Scenario: Confirming "Removal Successful"
                Given TST03 the Removal Successful butn is displayed
                When TST03 I click on Removal Successful butn
                Then TST03 I should see NEW GAS METER DETAILS section

        Scenario: Going through "NEW GAS METER DETAILS" section
                Given TST03 the NEW GAS METER DETAILS section
                When TST03 I fill the fields and values for New gas meter details
                Then TST03 I should see NEW REGULATOR section

        Scenario: Going through "NEW REGULATOR" section
                Given TST03 the NEW REGULATOR section
                When TST03 I fill the fields and values for new regulator section
                Then TST03 I should see GAS INITIAL METER READING section

        Scenario: Going through "GAS INITIAL METER READING" section
                Given TST03 the GAS INITIAL METER READING section
                When TST03 I fill the fields with values Gas initial meter reading
                Then TST03 I should see INSTALL KIT section

        Scenario: Going through "Install Kit " GAS section
                Given TST03 the Gas Install Kit gas section
                When TST03 I fill the Gas Install Kit gas section fields with values
                Then TST03 I should see Perform Post Installation GAS Checks sec

        Scenario: Going through "Post Installation GAS" GAS section
                Given TST03 the Post Installation GAS sec
                When TST03 I fill the Post Installation GAS sec fields with values
                Then TST03 I should see GICOM Message sec

        Scenario: Going through "GAS INSTALL & COMMISSIONING" section
                Given TST03 the GAS INSTALL & COMMISSIONING sec
                When TST03 I click on Send Message GICOM butn
                Then TST03 I should see Awaiting Response butn

        Scenario: Waiting "AWAITING RESPONSE"
                Given TST03 the Awaiting Response butn after gas install
                When TST03 I wait for the button to disappear after post install
                Then TST03 I should see Commissioning Successful button
                And TST03 I should see Request Sent Successfully txt message
                And TST03 I should see Pair Asset to Comms Hub text message
                And TST03 I should see DCC Handover Requested text message
                And TST03 I should see Device Clock Synchronised text message
                And TST03 I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message
                And TST03 I should see DCC Handover Requested for GPF Device text message
                And TST03 I should see Joins are being Initiated text message


        Scenario: Confirming "Commissioning Successful"
                Given TST03 the Commissioning Successful button is displayed
                When TST03 I click on Commissioning Successful button
                Then TST03 I should see GAS APPLIANCE SAFETY CHECKS section


        Scenario: Going through "Gas Appliance Safety Checks" GAS section
                Given TST03 the Gas Appliance Safety Checks sec
                When TST03 I fill the Gas Appliance Safety Checks section fields with values and Sub
                Then TST03 I should see SMETS PPMID sec

        Scenario: Going through "INSTALL PPMID" section
                Given TST03 the "INSTALL PPMID" section
                When TST03 I fill the fields for Install PPMID
                Then TST03 I should see PPMID COMMISSIONING section


        Scenario: Going through "PPMID COMMISSIONING" section
                Given TST03 the PPMID COMMISSIONING section
                When TST03 I click on Send Message IHD-PPMID butn
                Then TST03 I should see PPMID Awaiting Response butn


        Scenario: Waiting "AWAITING RESPONSE"
                Given TST03 the Awaiting Response butn after ppmid commisioning
                When TST03 I wait for the button to disappear after PPMID Commisioning
                Then TST03 I should see PPMID Commissioning Successful button
                And TST03 I should see PPMID Request Sent Successfully txt message
                And TST03 I should see PPMID Pair Asset to Comms Hub text message
                And TST03 I should see Pairing Successful text message

        Scenario: Confirming "PPMID Commissioning Successful"
                Given TST03 the PPMID Commissioning Successful button is displayed
                When TST03 I click on SUB button
                Then TST03 I should see DEVICE BINDING and COMMISSIONING sec

        Scenario: Going through deleting the work order after use
                When I delete workorder after use
                Then workorder should no longer exist