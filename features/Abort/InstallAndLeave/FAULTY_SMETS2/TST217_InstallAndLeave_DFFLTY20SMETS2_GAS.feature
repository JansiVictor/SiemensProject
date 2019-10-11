Feature: DFFLTY20 - InstallAndLeave GAS Workflow

Scenario: Post DFFLTY20 SOAP Request
        Given I post workorder using "xmlrequest/DFFLTY20.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given FTwenty the Login Page
        When FTwenty I pass "<Username>" and "<Password>"
        Then FTwenty I click Login button
        And FTwenty I should see the Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

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
        And FTwenty I select Gas Meter field
        And FTwenty I select Regulator field
        And FTwenty I select IHD-PPMID field
        And FTwenty I click on NEXT SECT button
        And FTwenty I should see PRE INSTALLATION GAS TIGHTNESS TEST section

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
        Given FTwenty the PRE INSTALLATION GAS TIGHTNESS TEST section
        When FTwenty I fill the field17 with the value17
        Then FTwenty I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
        And FTwenty I fill the field18 with the value18
        And FTwenty I see Gas Tightness Test Completed field as FAIL
        And FTwenty I fill the field19 with the value19

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
        Given FTwenty the REMOVE GAS METER section
        When FTwenty I fill the field23 with the value23
        Then FTwenty I click on NEXT button in removing gas meter
        And FTwenty I should see SEND MESSAGE GMREM section

    Scenario: Going through "SEND MESSAGE GMREM" section
        Given FTwenty the SEND MESSAGE GMREM section
        When FTwenty I click on Send Message GMREM button
        Then FTwenty I should see Awaiting Response button in GMREM

    Scenario: Waiting "AWAITING RESPONSE"
        Given FTwentyG the Awaiting Response btn in Send GMREM
        When FTwentyG I wait for the btn to disappear in GMREM
        Then FTwentyG I should see Removal Successful button
        And FTwentyG I should see GMREM Request Sent Successfully txt message
        And FTwentyG I should see OK to Remove Asset text message

    Scenario: Confirming "Removal Successful"
        Given FTwentyG the Removal Successful button is displayed
        When FTwentyG I click on Removal Successful button
        Then FTwenty I should see CONFIRM GAS ASSET REMOVAL section

    Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
        Given FTwenty the CONFIRM GAS ASSET REMOVAL section
        When FTwenty I fill the field24 with the value24
        Then FTwenty I click on OK btn in Updated window with the text Asset successfully added to Returns list
        And FTwentyG I should see REMOVE COMMS HUB window

    Scenario: Going through "REMOVE COMMS HUB" section
        Given TST03 the REMOVE COMMS HUB section
        When TST03 I fill the field027 with the value27
        Then TST03 I click on NEXT SEC button from Remove Comms Hub
        And TST03 I should see CONFIRM COMMS HUB REMOVAL section

    Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
        Given FTwenty the CONFIRM COMMS HUB REMOVAL section
        When FTwenty I fill the field28 with the value28
        And FTwentyCOM I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step
        Then FTwenty I click on SUBMIT btn from confirm comms hub removal

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
    When I fill the InstallAndLeave Post Installation Tightness Test Values
    Then I should see InstallLeave Replace CommsHubNoWan section

    Scenario: Going through Replace CommsHubNoWan section
    Given InstallLeave Replace CommsHubNoWan section
    When I fill the FLTY InstallLeave Replace CommshubNoWan details fields with values
    Then TST03 I should see GAS APPLIANCE SAFETY CHECKS section

    Scenario: Going through "Gas Appliance Safety Checks" GAS section
        Given FTwenty the Gas Appliance Safety Checks sec
        When FTwenty I fill the Gas Appliance Safety Checks section fields with values and Sub
        Then TST03 I should see SMETS PPMID sec

    Scenario: Going through "INSTALL PPMID" section
        Given TST03 the "INSTALL PPMID" section
        When I fill the EXCH22 InstallLeave PPMID section fields with values
        Then I click the Gas Install Submit Button

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given FTwenty the DEVICE BINDING & COMMISSIONING section
        When I fill the EXCH22 InstallLeave Binding and commissioning of PPMID fields with values
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