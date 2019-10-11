Feature: TST12_SF_Gas_FLTY18_SMETS2


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
        When TST12 I fill the field05 with the value05
        Then TST12 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
        And TST12 I fill the field06 with the value06
        And TST12 I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given TST12 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When TST12 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then TST12 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given TST12 the INITIAL POLARITY CHECK MARTINDALE TEST section
        When TST12 I fill the INITIAL POLARITY CHECK field with the values
        Then TST12 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then TST12 I fill the Socket Found field with the values
        And TST12 I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given TST12 the INITIAL POLARITY CHECK - AT METER AND CUT OUT section
        When TST12 I fill the METER AND CUT OUT fields with the values
        And TST12 I click on SUBMIT button
        Then TST12 I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given TST12 the CURRENT IHD-PPMID DETAILS section
        When TST12 I fill the field010 with the value010
        And TST12 I should see CURRENT METER DETAILS - GAS section
        Then TST12 I should see the page contect display of current meter details

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given TST12 the CURRENT METER DETAILS - GAS section
        When TST12 I fill the field with the value
        Then TST12 I should see CURRENT COMMS HUB DETAILS section
        And TST12 I should see the page contect display

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given TST12 the CURRENT COMMS HUB DETAILS section
        When TST12 I fill the field13 with the value13
        Then TST12 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        And TST12 I should see DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given TST12 the DETERMINE FAULT ACTIVITY section
        When TST12 I fill the field14 with the value014
        Then TST12 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And TST12 I fill the field15 with the value15
        And TST12 I click OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And TST12 I fill the field16 with the value16
        And TST12 I click on NEXT SECT button
        And TST12 I should see PRE INSTALLATION GAS TIGHTNESS TEST section

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
        Given TST12 the PRE INSTALLATION GAS TIGHTNESS TEST section
        When TST12 I fill the field17 with the value17
        Then TST12 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
        And TST12 I fill the field18 with the value18
        And TST12 I see Gas Tightness Test Completed field as FAIL
        And TST12 I fill the field19 with the value19
        And TST12 submit to Install section
        Then TST12 I should see INSTALL KIT section

    Scenario: Going through "Install Kit " GAS section
        Given TST12 the Gas Install Kit gas section
        When TST12 I fill the Gas Install Kit gas section fields with values
        Then TST12 I should see Perform Post Installation GAS Checks sec

    Scenario: Going through "Post Installation GAS" GAS section
        Given TST12 the Post Installation GAS sec
        When TST12 I fill the Post Installation GAS sec fields with values
        Then TST12 I should see GAS APPLIANCE SAFETY CHECKS section

    Scenario: Going through "Gas Appliance Safety Checks" GAS section
        Given TST12 the Gas Appliance Safety Checks sec
        When TST12 I fill the Gas Appliance Safety Checks section fields with values and Sub
        Then TST12 I should see DEVICE BINDING and COMMISSIONING sec

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given TST12 the DEVICE BINDING & COMMISSIONING section
        When TST12 I fill the fields53 and click next
        Then TST12 I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given TST12 the ENERGY EFFICIENCY INFORMATION section
        When TST12 I fill the fields54 and click next
        Then TST12 I should see Summary section

    Scenario: Going through "SUMMARY" section
        Given TST12 the Summary section
        When TST12 I fill the fields56 and click next
        Then TST12 See CAPTURE CUSTOMER SIGNATURE sec

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given TST12 the CAPTURE CUSTOMER SIGNATURE section
        When TST12 I write signature in Customer Signature
        And TST12 I fill the field57 and Job Complete
        Then TST12 see Job Completed screen

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
