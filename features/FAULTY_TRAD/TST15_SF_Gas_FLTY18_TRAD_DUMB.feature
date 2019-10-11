Feature: TST15_SF_Gas_FLTY18_Non_SMETS2

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
        When TST15 I fill the field17 with the value17
        Then TST15 CAPTURE U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
        And TST15 I fill the field18 with the value18
        And TST15 I see Gas Tightness Test Completed field as FAIL
        And TST15 I fill the field19 with the value19
        And TST15 I should see REMOVE GAS METER section

    Scenario: Going through "REMOVE GAS METER" section
        Given TST15 the REMOVE GAS METER section
        When TST15 I fill the field23 with the value23
        Then TST15 NEXT button in removing gas meter
        Then TST15 I should see CONFIRM GAS ASSET REMOVAL section

    Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
        Given TST15 the CONFIRM GAS ASSET REMOVAL section
        When TST15 I fill the field24 with the value24
        Then TST15 OK btn in Updated window with the text Asset successfully added to Returns list
        Then TST15 I should see NEW GAS METER DETAILS section

    Scenario: Going through "NEW GAS METER DETAILS" section
        Given TST15 the NEW GAS METER DETAILS section
        When TST15 I fill the fields and values for New gas meter details
        Then TST15 I should see NEW REGULATOR section

    Scenario: Going through "NEW REGULATOR" section
        Given TST15 the NEW REGULATOR section
        When TST15 I fill the fields and values for new regulator section
        Then TST15 I should see GAS INITIAL METER READING section

    Scenario: Going through "GAS INITIAL METER READING" section
        Given TST15 the GAS INITIAL METER READING section
        When TST15 I fill the fields with values Gas initial meter reading
        Then TST15 I should see INSTALL KIT section

    Scenario: Going through "Install Kit " GAS section
        Given TST15 the Gas Install Kit gas section
        When TST15 I fill the Gas Install Kit gas section fields with values
        Then TST15 I should see Perform Post Installation GAS Checks sec

    Scenario: Going through "Post Installation GAS" GAS section
        Given TST15 the Post Installation GAS sec
        When TST15 I fill the Post Installation GAS sec fields with values
        Then TST15 I should see GAS APPLIANCE SAFETY CHECKS section

    Scenario: Going through "Gas Appliance Safety Checks" GAS section
        Given TST15 the Gas Appliance Safety Checks sec
        When TST15 I fill the Gas Appliance Safety Checks section fields with values and Sub
        When TST15 I click SUB button
        Then TST15 I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given TST15 the ENERGY EFFICIENCY INFORMATION section
        When TST15 I fill the fields54 and click next
        Then TST15 I should see SMART EDUCATION section

    Scenario: Going through "SMART EDUCATION" section
        Given TST15 the SMART EDUCATION section
        When TST15 I fill the fields55 and click next
        Then TST15 I should see SUMMARY section

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
        Given TST15 the SUMMARY section
        When TST15 I fill the fields56 and click next
        Then TST15 See CAPTURE CUSTOMER SIGNATURE sec

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given TST15 the CAPTURE CUSTOMER SIGNATURE section
        When TST15 I write signature in Customer Signature
        And TST15 I fill the field57 and Job Complete
        Then TST15 see Job Completed screen

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist