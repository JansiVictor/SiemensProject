Feature: DFFLTY20 - SMETS2 - ELEC Workflow

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
        When FTwenty I fill the initialRisk field with the values
        Then FTwenty I should see INFO window

    Scenario: Going through "INFO" window
        Given FTwenty the INFO window with the text
        When FTwentyI I click on OK button
        Then FTwenty I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given FTwenty the RISK ASSESSMENT - ELEC section
        When FTwenty I fill the RISK ASSESSMENT - ELEC fields with the values
        And FTwenty I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And FTwenty RISK ASSESSMENT ELEC NEXT SECTION button
        Then FTwenty I should see the RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given FTwenty the RISK ASSESSMENT - GAS section
        When FTwenty I fill the field05 with the value05
        Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
        And FTwenty I fill the field06 with the value06
        And FTwentyE I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
        Given FTwentyE the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
        When FTwentyE I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then FTwentyE the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given FTwenty the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When FTwenty I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then FTwenty I should see INITIAL POLARITY CHECK-MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given FTwenty the INITIAL POLARITY CHECK MARTINDALE TEST section
        When FTwenty I fill the INITIAL POLARITY CHECK field with the values
        Then FTwenty I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then FTwenty I fill the Socket Found field with the values
        And FTwenty I should see INITIAL POLARITY AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given FTwenty the INITIAL POLARITY AT METER AND CUT OUT section
        When FTwenty I fill the METER AND CUT OUT fields with the values
        And FTwenty I click on SUBMIT button
        Then FTwenty I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given FTwenty the CURRENT IHD-PPMID DETAILS section
        When FTwenty I fill the field010 with the value010
        And FTwenty I should see CURRENT METER DETAILS - GAS section
        Then FTwenty current meter details page contect display

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given FTwenty the CURRENT METER DETAILS - GAS section
        When FTwenty I fill the field with the value
        Then FTwenty I should see CURRENT Electric Meter

    Scenario: Going through "CURRENT METER DETAILS - ELEC" section
        Given FTwenty the CURRENT Electric Meter
        When FTwenty I fill the field011 with the value Value011
        Then FTwenty I should see CURRENT COMMS HUB DETAILS section
        And FTwenty current Electric page contect display

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given FTwenty the CURRENT COMMS HUB DETAILS section
        When FTwenty I fill the field13 with the value13
        Then FTwenty I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        And FTwenty I should see DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given FTwenty the DETERMINE FAULT ACTIVITY section
        When FTwenty I fill the field14 with the value014
        Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And FTwenty I fill the field15 with the value15
        And FTwenty I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And I should fill InstallAndLeave field16 with the value16
        And FTwenty I select Comms Hub field
        And FTwenty I select Elec Meter field
        And FTwenty I click on NEXT SECT button
        And I should see fltynineteen REMOVE METER section

    Scenario: Going through "REMOVE METER" section
        Given the fltynineteen REMOVE METER section
        When I fill the FLTY InstallAndLeave Remove meter values
        And I clk fltynineteen remove meter NEXT SECTION button
        Then I should see fltynineteen SEND MESSAGE EMREM section

    Scenario: Going through "SEND MESSAGE EMREM" section
        Given the fltynineteen SEND MESSAGE EMREM section
        When I click on fltynineteen Send Message EMREM button
        Then I should see fltynineteen Awaiting Response button

    Scenario: Waiting "AWAITING RESPONSE"
        Given the fltynineteen Awaiting Response button
        When I wait for fltynineteen the butn to disappear
        Then I should see fltynineteen Removal Successful button
        And I should see fltynineteen Request Sent Successfully text message
        And I should see fltynineteen OK to Remove Asset text message

    Scenario: Confirming "Removal Successful"
        Given the fltynineteen Removal Successful button is displayed
        When I click on fltynineteen Removal Successful button
        Then I should see fltynineteen CONFIRM ELECTRIC ASSET REMOVAL section

    Scenario: Going through "CONFIRM ELECTRIC ASSET REMOVAL" section
        Given the fltynineteen CONFIRM ELEC ASSET REMOVAL section
        When I fill the fltynineteen field024 with the Value024
        And Click ok on asset removal
        Then I should see fltynineteen REMOVE COMMS HUB window

    Scenario: Going through "REMOVE COMMS HUB" section
        Given the fltynineteen REMOVE COMMS HUB section
        When I fill the fltynineteen field027 with the Value027
        And I click on fltynineteen NEXT SEC button from Remove Comms Hub
        Then I should see fltynineteen CONFIRM COMMS HUB REMOVAL section

    Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
        Given the fltynineteen CONFIRM COMMS HUB REMOVAL section
        When I fill the fltynineteen field028 with the Value028
        And I click OK fltynineteen button in Updated window with the text Asset successfully added to Returns list in the final step
        And I clk fltynineteen SUBMIT to Install
    #Then I click the Gas NMEX Install Submit Button

    Scenario: Going through "INSTALL COMMS HUB" section
        Given FTwenty the INSTALL COMMS HUB sec
        When FTwenty I fill the Ins comms hub fields and capture photo EVIDENCE
        Then FTwenty I should see SEND MSG XCHUB section

    Scenario: Continuing "SEND MESSAGE XCHUB" section
        Given FTwenty the SEND MESSAGE XCHUB section
        When FTwenty I click on Send Message XCHUB button
        Then FTwenty I should see XCHUB Awaiting Response butn

    Scenario: Waiting "AWAITING RESPONSE"
        Given FTwenty the Awaiting Response butn XCHUB
        When FTwenty I wait for the butn to disappear XCHUB
        Then FTwenty I should see Removal Successful butn XCHUB
        And FTwenty I should see Request Sent Successfully text msg XCHUB
        And FTwenty I should see Whitelist transfer completed check LED indication is correct text message

    Scenario: Confirming "Removal Successful"
        Given FTwenty the Removal Successful butn is displayed
        When FTwenty I click on Removal Successful butn
        Then FTwenty I should see NEW METER DETAILS section

    Scenario: Continuing "NEW METER DETAILS" section
        Given FTwenty the NEW METER DETAILS section
        When FTwenty I fill the fields and values for New meter details
        Then FTwenty I should see NEW Meter section

    Scenario: Continuing "NEW METER DETAILS" section
        Given FTwenty the Manufacturer Letter radio button
        When FTwenty I fill the field33 with the Value33
        And FTwenty manufacturer NEXT SECTION button
        Then FTwenty I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section

    Scenario: Going through "ADDITIONAL ELECTRICITY TESTS & CHECKS" section
        Given FTwenty the ADDITIONAL ELECTRICITY TESTS & CHECKS section
        When FTwenty I fill the field34 with the Value34
        And FTwenty I click on CAPTURE PHOTO OF TERMINAL SCREWS button
        And FTwenty I fill the field35 with the Value35
        And FTwenty I clk additional test on NEXT SECTION button
        Then FTwenty I should see ELEC INITIAL METER READING section

    Scenario: Going through "ELEC INITIAL METER READING" section
        Given FTwenty the ELEC INITIAL METER READING section
        When FTwenty I fill the FldName36 with the Value36
        Then FTwenty I should see POST INSTALLATION CHECKS section

    Scenario: Going through "POST INSTALLATION CHECKS" section
        Given FTwenty the POST INSTALLATION CHECKS section
        When FTwenty I fill the FldName37 with the Value37
        Then FTwenty post installation page content display

    Scenario: Going through "POST INSTALLATION CHECKS" section
        Given FTwenty the post installation page contect display
        When FTwenty I fill the FldName38 with the Value38
        And FTwenty I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button
        And FTwenty I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button
        And FTwenty I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button
        Then FTwenty I should see COMMISSIONING section

    Scenario: Going through "COMMISSIONING" section
        Given FTwenty the COMMISSIONING section
        When FTwenty I fill the FldName39 with the Value39
        And FTwenty I click on ADD ANOTHER ASSET button
        Then I should fill InstallAndLeave FLTY Commissioning Values
        And I should see InstallLeave Replace CommsHubNoWan section

    Scenario: Going through Replace CommsHubNoWan section
        Given InstallLeave Replace CommsHubNoWan section
        When I fill the InstallLeave Replace CommshubNoWan details fields with values
        Then I click the Gas NMEX Install Submit Button

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given FTwenty the DEVICE BINDING & COMMISSIONING section
        When I fill the EXCH23 InstallLeave Binding and commissioning of PPMID fields with values
        Then FTwenty I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given FTwenty the ENERGY EFFICIENCY INFORMATION section
        When FTwenty I fill the fields54 and click next
        Then FTwenty I should see SMART EDUCATION section

    Scenario: Going through "SMART EDUCATION" section
        Given FTwenty the SMART EDUCATION section
        When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
        Then I should see InstallLeave Summary of Job and Smart literature left onsite section

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
        Given the InstallLeave Smart No literature left onsite section
        When FTwenty I fill the fields56 and click next
        Then FTwenty See CAPTURE CUSTOMER SIGNATURE sec

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given FTwenty the CAPTURE CUSTOMER SIGNATURE section
        When FTwenty I write signature in Customer Signature
        And FTwenty I fill the field57 and Job Complete
        Then FTwenty see Job Completed screen

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
