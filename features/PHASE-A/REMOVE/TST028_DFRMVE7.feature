Feature: TST028_DFRMVE7

    Scenario: Post DFRMVE7 SOAP Request
        Given I post workorder using "xmlrequest/DFRMVE7.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given TST28 the Appointment List window
        When TST28 I click on select button
        Then TST28 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST28 the "Work Order" window
        When TST28 i see Call Forward or Arrive Button
        Then TST28 I click on CALL FORWARD button
        Then TST28 I should see page contect display
        And TST28 I should see the CUSTOMER CONTACT NUMBER
        And TST28 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST28 the "Work Order" page
        When TST28 I fill the fields with the value
        And TST28 I click on DEPART button
        Then TST28 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST28 Appointment details
        When TST28D I click on OK button
        Then TST28 I should see ARRIVE button
        And TST28 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST28 the "WorkOrder" page
        When TST28 I click on ARRIVE button
        Then TST28 I should see Arrival Time details
        And TST28 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST28 the BE AWARE OF ANY DANGER! section
        When TST28 I fill the DoorStep Protocol fields with the value
        And TST28 I click on ON SITE button
        Then TST28 I should see RISK ASSESSMENT tab activated
        And TST28 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST28 the INITIAL RISK ASSESSMENT section
        When TST28 I fill the initialRisk field with the values
        Then TST28 I should see INFO window

    Scenario: Going through "INFO" window
        Given TST28 the INFO window with the text
        When TST28I I click on OK button
        Then TST28 I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given TST28 the RISK ASSESSMENT - ELEC section
        When TST28 I fill the RISK ASSESSMENT - ELEC fields with the values
        And TST28 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And TST28 RISK ASSESSMENT ELEC NEXT SECTION button
        Then TST28 I should see the RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given TST28 the RISK ASSESSMENT - GAS section
        When TST28 I fill the field05 with the value05
        Then TST28 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
        And TST28 I fill the field06 with the value06
        And TST28E I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
        Given TST28E the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
        When TST28E I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then TST28E the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given TST28 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When TST28 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then TST28 I should see INITIAL POLARITY CHECK-MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given TST28 the INITIAL POLARITY CHECK MARTINDALE TEST section
        When TST28 I fill the INITIAL POLARITY CHECK field with the values
        Then TST28 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then TST28 I fill the Socket Found field with the values
        And TST28 I should see INITIAL POLARITY AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given TST28 the INITIAL POLARITY AT METER AND CUT OUT section
        When TST28 I fill the METER AND CUT OUT fields with the values
        And TST28 I click on SUBMIT button
        Then TST28 I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given TST28 the CURRENT IHD-PPMID DETAILS section
        When TST28 I fill the field010 with the value010
        And TST28 I should see CURRENT METER DETAILS - GAS section
        Then TST28 current meter details page contect display

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given TST28 the CURRENT METER DETAILS - GAS section
        When TST28 I fill the field with the value
        Then TST28 I should see CURRENT Electric Meter

    Scenario: Going through "CURRENT METER DETAILS - ELEC" section
        Given TST28 the CURRENT Electric Meter
        When TST28 I fill the field011 with the value Value011
        Then TST28 I should see CURRENT COMMS HUB DETAILS section
        And TST28 current Electric page contect display

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given TST28 the CURRENT COMMS HUB DETAILS section
        When TST28 I fill the field13 with the value13
        Then TST28 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        And TST28 I should see REMOVE IHD-PPMID section

    Scenario: Going through "REMOVE IHD/PPMID" section
        Given TST28 the REMOVE IHD-PPMID section
        When TST28 I fill the field20 with the value20
        Then TST28RE I click on OK button in Info window with the text Ensure IHD is Powered On
        Then TST28 I fill the field21 with the value21
        Then TST28 remove IHD click NEXT SECTION button
        And TST28 I should see SEND MESSAGE IHD-PPMID section

    Scenario: Going through "SEND MESSAGE IHD / PPMID" section
        Given TST28 the SEND MESSAGE IHD-PPMID section
        When TST28 I click on Send Message IHD-PPMID button
        Then TST28 I should see Awaiting Response button

    Scenario: Waiting "AWAITING RESPONSE"
        Given TST28 the Awaiting Response button
        When TST28 I wait for the button to disappear
        Then TST28 I should see PPMID Removal Successful button
        And TST28 I should see Request Sent Successfully text message
        And TST28 I should see Asset Unjoined text message

    Scenario: Confirming "PPMID Removal Successful"
        Given TST28 the PPMID Removal Successful button is displayed
        When TST28 I click on PPMID Removal Successful button
        Then TST28 I should see CONFIRM IHD-PPMID ASSET REMOVAL section

    Scenario: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section
        Given TST28 the CONFIRM IHD-PPMID ASSET REMOVAL section
        When TST28 I fill the field22 with the value22
        And TST28CO I click on OK button in Updated window with the text Asset successfully added to Returns list
        Then TST28CO take evidence
        Then TST28 I should see REMOVE GAS METER section

    Scenario: Going through "REMOVE GAS METER" section
        Given TST28 the REMOVE GAS METER section
        When TST28 I fill the field23 with the value23
        Then Tst28 select Additional work needed
        Then TST28 I click on NEXT button in removing gas meter
        And TST28 I should see SEND MESSAGE GMREM section

    Scenario: Going through "SEND MESSAGE GMREM" section
        Given TST28 the SEND MESSAGE GMREM section
        When TST28 I click on Send Message GMREM button
        Then TST28 I should see Awaiting Response button in GMREM

    Scenario: Waiting "AWAITING RESPONSE"
        Given TST28G the Awaiting Response btn in Send GMREM
        When TST28G I wait for the btn to disappear in GMREM
        Then TST28G I should see Removal Successful button
        And TST28G I should see GMREM Request Sent Successfully txt message
        And TST28G I should see OK to Remove Asset text message

    Scenario: Confirming "Removal Successful"
        Given TST28G the Removal Successful button is displayed
        When TST28G I click on Removal Successful button
        Then TST28 I should see CONFIRM GAS ASSET REMOVAL section

    Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
        Given TST28 the CONFIRM GAS ASSET REMOVAL section
        When TST28 I fill the field24 with the value24
        Then TST28 I click on OK btn in Updated window with the text Asset successfully added to Returns list
        Then TST28 Gas Take Photo Evidence
        And TST28G I should see REMOVE METER

    Scenario: Going through "REMOVE METER" section
        Given TST28 the REMOVE METER section
        When TST28 I fill the field023 with the Value023
        Then TST28 I should see SEND MESSAGE EMREM section

    Scenario: Going through "SEND MESSAGE EMREM" section
        Given TST28 the SEND MESSAGE EMREM section
        When TST28 I click on Send Message EMREM button
        Then TST28 I should see Awaiting Response button

    Scenario: Waiting "AWAITING RESPONSE"
        Given TST28 the Awaiting Response button
        When TST28 I wait for the btn to disappear in EMREM
        Then TST28 I should see Removal Successful button
        And TST28 I should see Request Sent Successfully text message
        And TST28 I should see OK to Remove Asset text message

    Scenario: Confirming "Removal Successful"
        Given TST28 the Removal Successful button is displayed
        When TST28 I click on Removal Successful button
        Then TST28 I should see CONFIRM ELECTRIC ASSET REMOVAL section

    Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section
        Given TST28 the CONFIRM ELEC ASSET REMOVAL section
        When TST28 I fill the field024 with the Value024
        Then TST28 Take Photo Evidence
        And TST28 I should see REMOVE COMMS HUB window

    Scenario: Going through "REMOVE COMMS HUB" section
        Given TST28 the REMOVE COMMS HUB section
        When TST28 I fill the field027 with the value27
        Then TST28 I click on NEXT SEC button from Remove Comms Hub
        Then TST28 I should see SEND MSG XCHUB section

    Scenario: Continuing "SEND MESSAGE XCHUB" section
        Given TST28 the SEND MESSAGE XCHUB section
        When TST28 I click on Send Message XCHUB button
        Then TST28 I should see XCHUB Awaiting Response butn

    Scenario: Waiting "AWAITING RESPONSE"
        Given TST28 the Awaiting Response butn XCHUB
        When TST28 I wait for the butn to disappear XCHUB
        Then TST28 I should see Removal Successful butn XCHUB
        And TST28 I should see Request Sent Successfully text msg XCHUB
        And TST28 I should see Whitelist transfer completed check LED indication is correct text message

    Scenario: Confirming "Removal Successful"
        Given TST28 the Removal Successful butn is displayed
        When TST28 I click on Removal Successful butn
        Then TST28 I should see CONFIRM COMMS HUB REMOVAL section

    Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
        Given TST28 the CONFIRM COMMS HUB REMOVAL section
        When TST28 I fill the field28 with the value28
        And TST28COM I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step
        Then TST28 take Evidence as photo
        Then TST28 I click on SUBMIT btn from confirm comms hub removal

    Scenario: Going through "SUMMARY"
        Given TST28 the SUMMARY section
        When TST28 I fill the fields56 and click next
        Then TST28 See CAPTURE CUSTOMER SIGNATURE sec

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given TST28 the CAPTURE CUSTOMER SIGNATURE section
        When TST28 I write signature in Customer Signature
        Then TST28 I fill the field57 and Job Complete
        Then TST28 see Job Completed screen

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist