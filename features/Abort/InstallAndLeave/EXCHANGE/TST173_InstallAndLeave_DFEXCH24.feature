Feature: DFEXCH24 - InstallAndLeave Workflow

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
        When I fill the TST22 initialRisk field with the values
        Then I should see TST22 INFO window

    Scenario: Going through "INFO" window
        Given the TST22 INFO window with the text
        When TST22 click infook
        Then I should see TST22 RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given the TST22 RISK ASSESSMENT - ELEC section
        When I fill the TST22 RISK ASSESSMENT - ELEC fields with the values
        Then I click on TST22 CAPTURE PHOTO OF HAZARD IDENTIFIED button
        Then I click on TST22 NEXT SECTION button
        Then I should see TST22 RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given the TST22 RISK ASSESSMENT - GAS section
        When I fill the TST22 RISK ASSESSMENT - GAS fields with the values
        Then I should see the Suitable for TST22 Elec Smart Installation section

    Scenario: Smart Installation for Electric
        Given the Suitable for TST22 Smart Installation section
        When I click on Is TST22 Site Suitable for Smart Installation? button
        When I click on TST22 Equipment Reposition Required?
        When I enter TST22 Additional Notes for Smart installation Check
        When I click on TST22 smart installation NEXT SECTION button
        Then I should see TST22 Suitable for Gas smart meter installation

    Scenario: Smart Installation for Gas
        Given the Suitable for TST22 Smart Installation GAS section
        When I fill TST22 Site Suitable for Smart Installation? GAS button
        Then I should see TST22 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
        Given the TST22 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
        When I click on TST22 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then I should see TST22 Capture Photo of GAS Installation section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given TST22 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When TST22 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then I should see TST22 INITIAL POLARITY CHECK - MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given the TST22 INITIAL POLARITY CHECK MARTINDALE TEST section
        When I fill the TST22 INITIAL POLARITY CHECK field with the values
        When I click on TST22 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        When I fill the TST22 Socket Found field with the values

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given the TST22 INITIAL POLARITY CHECK - AT METER AND CUT OUT section
        When I fill the TST22 METER AND CUT OUT fields with the values
        When I click on TST22 SUBMIT button
        Then TST22 I should see PRE INSTALLATION GAS TIGHTNESS TEST section

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
        Given TST22 the PRE INSTALLATION GAS TIGHTNESS TEST section
        When TST22 I fill the field17 with the value17
        Then TST22 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
        Then TST22 I fill the field18 with the value18
        Then TST22 I see Gas Tightness Test Completed field as FAIL
        Then TST22 I fill the field19 with the value19
        Then TST22 I should see CURRENT IHD-PPMID DETAILS section

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given TST22 the CURRENT IHD-PPMID DETAILS section
        When TST22 I fill the field010 with the value010
        When TST22 I should see CURRENT METER DETAILS - GAS section
        Then TST22 I should see the page contect display of current meter details

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given TST22 the CURRENT METER DETAILS - GAS section
        When TST22 I fill the field with the value
        Then I should see TST22 CURRENT METER DETAILS Elec section

    Scenario: Going through "CURRENT METER DETAILS - ELEC" section
        Given the TST22 CURRENT METER DETAILS section
        When I fill the TST22 field011 with the value Value011
        Then I should see TST22 CURRENT COMMS HUB DETAILS section
        Given the TST22 CURRENT COMMS HUB DETAILS section
        When I fill the TST22 field013 with the value Value013

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given TST22 the CURRENT COMMS HUB DETAILS section
        When TST22 I fill the field13 with the value13
        Then TST22 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        And TST22 I should see REMOVE IHD-PPMID section

    Scenario: Going through "REMOVE IHD/PPMID" section
        Given the TST22 REMOVE IHD-PPMID section
        When TST22 I fill the field20 with the value20
        Then TST22 I click on OK button in Info window with the text Ensure IHD is Powered On
        Then TST22 I fill the field21 with the value21
        Then TST22 I click on NEXT SECTION button in remove IHD
        And TST22 I should see SEND MESSAGE IHD-PPMID section

    Scenario: Going through "SEND MESSAGE IHD / PPMID" section
        Given the TST22 SEND MESSAGE IHD-PPMID section
        When TST22 I click on Send Message IHD-PPMID button
        Then TST22 I should see Awaiting Response button

    Scenario: Waiting "AWAITING RESPONSE"
        Given the TST22 Awaiting Response button
        When TST22 I wait for the button to disappear
        Then TST22 I should see PPMID Removal Successful button
        And TST22 I should see Request Sent Successfully text message
        And TST22 I should see Asset Unjoined text message

    Scenario: Confirming "PPMID Removal Successful"
        Given TST22 the PPMID Removal Successful button is displayed
        When TST22 I click on PPMID Removal Successful button
        Then TST22 I should see CONFIRM IHD-PPMID REMOVAL section

    Scenario: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section
        Given the TST22 CONFIRM IHD-PPMID ASSET REMOVAL section
        When I fill the TST22 field22 with the Value22
        Then I clk TST22 OK button in Updated window with the text Asset successfully added to Returns list
        Then I should see TST22 REMOVE METER section

    Scenario: Going through "REMOVE GAS METER" section
        Given TST22 the REMOVE GAS METER section
        When I fill the InstallAndLeave Remove Gas meter values for EXCH24
        Then TST22 I click on NEXT button in removing gas meter
        Then TST22 I should see SEND MESSAGE GMREM section

    Scenario: Going through "SEND MESSAGE GMREM" section
        Given TST22 the SEND MESSAGE GMREM section
        When TST22 I click on Send Message GMREM button
        Then TST22 I should see Awaiting Response button in GMREM

    Scenario: Waiting "AWAITING RESPONSE"
        Given TST22G the Awaiting Response btn in Send GMREM
        When TST22G I wait for the btn to disappear in GMREM
        Then TST22G I should see Removal Successful button
        Then TST22G I should see GMREM Request Sent Successfully txt message
        Then TST22G I should see OK to Remove Asset text message

    Scenario: Confirming "Removal Successful"
        Given TST22G the Removal Successful button is displayed
        When TST22G I click on Removal Successful button
        Then TST22 I should see CONFIRM GAS ASSET REMOVAL section

    Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
        Given TST22 the CONFIRM GAS ASSET REMOVAL section
        When TST22 I fill the field24 with the value24
        Then TST22 I click on OK btn in Updated window with the text Asset successfully added to Returns list
        Then TST22G I should see REMOVE COMMS HUB window

    Scenario: Going through "REMOVE METER-Elec" section
        Given TST22 the REMOVE METER section
        When I fill the InstallAndLeave Remove meter values for EXCH24
        Then TST22 I should see SEND MESSAGE EMREM section

    Scenario: Going through "SEND MESSAGE EMREM" section
        Given TST22 the SEND MESSAGE EMREM section
        When TST22 I click on Send Message EMREM button
        Then TST22 I should see Awaiting Response button in EMREM

    Scenario: Waiting "AWAITING RESPONSE"
        Given TST22 the Awaiting Response btn in Send EMREM
        When TST22 I wait for the btn to disappear in EMREM
        Then TST22 I should see Removal Successful button
        Then TST22 I should see Request Sent Successfully txt message in EMREM
        Then TST22 I should see OK to Remove Asset text message

    Scenario: Confirming "Removal Successful"
        Given TST22 the Removal Successful button is displayed
        When TST22 I click on Removal Successful button
        Then TST22 I should see CONFIRM ELECTRIC ASSET REMOVAL section

    Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section
        Given TST22 the CONFIRM ELEC ASSET REMOVAL section
        When TST22 I fill the field024 with the Value024
        Then TST22 Click ok on asset removal
        Then TST22 I should see INSTALL COMMS HUB sec

    Scenario: Going through "INSTALL COMMS HUB" section
        Given TST22 the INSTALL COMMS HUB sec
        When TST22 I fill the Ins comms hub fields and capture photo EVIDENCE
        Then TST22 I should see NEW METER DETAILS section

    Scenario: Continuing "NEW METER DETAILS" section
        Given TST22 the NEW METER DETAILS section
        When TST22 I fill the fields and values for New meter details
        Then TST22 I should see NEW Meter section

    Scenario: Continuing "NEW METER DETAILS-Manufacturer" section
        Given TST22 the Manufacturer Letter radio button
        When TST22 I fill the field33 with the Value33
        Then TST22 manufacturer NEXT SECTION button
        Then TST22 I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section

    Scenario: Going through "ADDITIONAL ELECTRICITY TESTS & CHECKS" section
        Given TST22 the ADDITIONAL ELECTRICITY TESTS & CHECKS section
        When TST22 I fill the field34 with the Value34
        Then TST22 I click on CAPTURE PHOTO OF TERMINAL SCREWS button
        Then TST22 I fill the field35 with the Value35
        Then TST22 I clk additional test on NEXT SECTION button
        Then TST22 I should see ELEC INITIAL METER READING section

    Scenario: Going through "ELEC INITIAL METER READING" section
        Given TST22 the ELEC INITIAL METER READING section
        When TST22 I fill the FldName36 with the Value36
        Then TST22 I should see POST INSTALLATION CHECKS section

    Scenario: Going through "POST INSTALLATION CHECKS" section
        Given TST22 the POST INSTALLATION CHECKS section
        When TST22 I fill the FldName37 with the Value37
        Then TST22 post installation page content display

    Scenario: Going through "POST INSTALLATION CHECKS" section
        Given TST22 the post installation page contect display
        When TST22 I fill the FldName38 with the Value38
        Then TST22 I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button
        Then TST22 I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button
        Then TST22 I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button
        Then TST22 I should see COMMISSIONING section

    Scenario: Going through "COMMISSIONING" section
        Given TST22 the COMMISSIONING section
        When I fill the InstallLeave Commission Bind the Comms hub to the WAN details fields with values
        Then I should see InstallLeave Replace CommsHubNoWan section

    Scenario: Going through Replace CommsHubNoWan section
        Given InstallLeave Replace CommsHubNoWan section
        When I fill the InstallLeave Replace CommshubNoWan details fields with values
        Then TST22 I should see NEW GAS METER DETAILS section

    Scenario: Going through "NEW GAS METER DETAILS" section
        Given TST22 the NEW GAS METER DETAILS section
        When TST22 I fill the fields and values for New gas meter details
        Then TST22 I should see NEW REGULATOR section

    Scenario: Going through "NEW REGULATOR" section
        Given TST22 the NEW REGULATOR section
        When I fill the InstallAndLeave New Regulator values
        Then TST22 I should see GAS INITIAL METER READING section

    Scenario: Going through "GAS INITIAL METER READING" section
        Given TST22 the GAS INITIAL METER READING section
        When TST22 I fill the fields with values Gas initial meter reading
        Then TST22 I should see INSTALL KIT section

    Scenario: Going through "Install Kit " GAS section
        Given TST22 the Gas Install Kit gas section
        When TST22 I fill the Gas Install Kit gas section fields with values
        Then TST22 I should see Perform Post Installation GAS Checks sec

    Scenario: Going through "Post Installation GAS" GAS section
        Given TST22 the Post Installation GAS sec
        When TST22 I fill the Post Installation GAS sec fields with values
        Then TST22G I should see GAS APPLIANCE SAFETY CHECKS section

    Scenario: Going through "Gas Appliance Safety Checks" GAS section
        Given TST22 the Gas Appliance Safety Checks sec
        When TST22 I fill the Gas Appliance Safety Checks section fields with values and Sub
        Then TST22 I should see SMETS PPMID sec

    Scenario: Going through "INSTALL PPMID" section
        Given TST22 the INSTALL PPMID section
        When I fill the EXCH22 InstallLeave PPMID section fields with values
        Then I click the Gas Install Submit Button
        And TST22 I should see DEVICE BINDING and COMMISSIONING sec

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given TST22 the DEVICE BINDING & COMMISSIONING section
        When I fill the EXCH23 InstallLeave Binding and commissioning of PPMID fields with values
        Then TST22 I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given TST22 the ENERGY EFFICIENCY INFORMATION section
        When TST22 I fill the fields54 and click next
        Then TST22 I should see SMART EDUCATION section

    Scenario: Going through "SMART EDUCATION" section
        Given TST22 the SMART EDUCATION section
        When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
        Then I should see InstallLeave Summary of Job and Smart literature left onsite section

    Scenario: Going through "SUMMARY"
        Given TST22 the SUMMARY section
        When TST22 I fill the fields56 and click next
        Then TST22 See CAPTURE CUSTOMER SIGNATURE sec

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given TST22 the CAPTURE CUSTOMER SIGNATURE section
        When TST22 I write signature in Customer Signature
        Then TST22 I fill the field57 and Job Complete
        Then TST22 see Job Completed screen

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
