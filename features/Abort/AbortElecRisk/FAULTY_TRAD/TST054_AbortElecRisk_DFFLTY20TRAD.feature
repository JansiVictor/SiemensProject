Feature: TST054_AbortElecRisk_DFFLTY20TRAD

    Scenario: Post DFFLTY20TRAD SOAP Request
        Given I post workorder using "xmlrequest/DFFLTY20TRAD.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given TST13 the Appointment List window
        When TST13 I click on select button
        Then TST13 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST13 the "Work Order" window
        When TST13 i see Call Forward or Arrive Button
        Then TST13 I click on CALL FORWARD button
        Then TST13 I should see page contect display
        And TST13 I should see the CUSTOMER CONTACT NUMBER
        And TST13 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST13 the "Work Order" page
        When TST13 I fill the fields with the value
        And TST13 I click on DEPART button
        Then TST13 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST13 Appointment details
        When TST13D I click on OK button
        Then TST13 I should see ARRIVE button
        And TST13 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST13 the "WorkOrder" page
        When TST13 I click on ARRIVE button
        Then TST13 I should see Arrival Time details
        And TST13 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST13 the BE AWARE OF ANY DANGER! section
        When TST13 I fill the DoorStep Protocol fields with the value
        And TST13 I click on ON SITE button
        Then TST13 I should see RISK ASSESSMENT tab activated
        And TST13 I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given TST13 the INITIAL RISK ASSESSMENT section
        When TST13 I fill the initialRisk field with the values
        Then TST13 I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given TST13 the RISK ASSESSMENT - ELEC section
        When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

    Scenario: Going through the Reason codes popup
        Given the ELEC Risk AbortReasonCodespopup
        When I click the ELEC Risk  Reason and Abort the Job

    Scenario: Going through "RISK ASSESSMENT - GAS"
        When FTwenty I fill the field05 with the value05
        Then FTwentyAbort I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
        And FTwenty I fill the field06 with the value06

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION"
        Then FTwentyE the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given FTwenty the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When FTwentyAbort I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then FTwentyAbort I click on SUBMIT button
        Then FTwenty I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given TST13 the CURRENT IHD-PPMID DETAILS section
        When TST13 I fill the field010 with the value010
        And TST13 I should see CURRENT METER DETAILS - GAS section
        Then TST13 current meter details page contect display

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given TST13 the CURRENT METER DETAILS - GAS section
        When TST13 I fill the field with the value
        Then TST13 I should see CURRENT Electric Meter

    Scenario: Going through "CURRENT METER DETAILS - ELEC" section
        Given FTwenty the CURRENT Electric Meter
        When FTwenty I fill the field011 with the value Value011

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        When TST13 I fill the field14 with the value014
        Then TST13 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And TST13 I fill the field15 with the value15
        And TST13 I select Gas Meter field
        And TST13 I select Regulator field
        And TST13 fill the filelds45 and values
        And TST13 I click on NEXT SECT button
        And TST13 I should see PRE INSTALLATION GAS TIGHTNESS TEST section

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
        Given TST13 the PRE INSTALLATION GAS TIGHTNESS TEST section
        When TST13 I fill the field17 with the value17
        Then TST13 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
        And TST13 I fill the field18 with the value18
        And TST13 I see Gas Tightness Test Completed field as FAIL
        And TST13 I fill the field19 with the value19
        And TST13 I should see REMOVE GAS METER section

    Scenario: Going through "REMOVE GAS METER" section
        Given TST13 the REMOVE GAS METER section
        When TST13 I fill the field23 with the value23
        Then TST13 I click on NEXT button in removing gas meter
        Then TST13 I should see CONFIRM GAS ASSET REMOVAL section

    Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
        Given TST13 the CONFIRM GAS ASSET REMOVAL section
        When TST13 I fill the field24 with the value24
        Then TST13 I click OK btn in Updated window with the text Asset successfully added to Returns list
        And TST13 I click SUB button

    Scenario: Going through "NEW GAS METER DETAILS" section
        Given the NEW GAS METER DETAILS section for FLTY20TRAD
        When I fill the fields and values for New gas meter details for FLTY20TRAD
        Then I should see NEW REGULATOR section for FLTY20TRAD

    Scenario: Going through "NEW REGULATOR" section
        Given the NEW REGULATOR section for FLTY18TRAD
        When TST15 I fill the fields and values for new regulator section
        Then I should see GAS INITIAL METER READING section for FLTY18TRAD

    Scenario: Going through "GAS INITIAL METER READING" section
        Given the GAS INITIAL METER READING section for FLTY20TRAD
        When I fill the Abort fields with values Gas initial meter reading
        Then I should see INSTALL KIT section for FLTY20TRAD

    Scenario: Going through "Install Kit " GAS section
        Given the Gas Install Kit gas section for FLTY20TRAD
        When I fill the Gas Install Kit gas section fields with values for FLTY20TRAD
        Then I should see Perform Post Installation GAS Checks sec for FLTY20TRAD

    Scenario: Going through "Post Installation GAS" GAS section
        Given the Post Installation GAS sec for FLTY20TRAD
        When TSTAbort I fill the Post Installation GAS sec fields with values
        Then I should see GAS APPLIANCE SAFETY CHECKS section for FLTY20TRAD

    Scenario: Going through "Gas Appliance Safety Checks" GAS section for FLTY20TRAD
        Given Gas Appliance Safety Checks sec for FLTY20TRAD
        When I fill the Gas Appliance Safety Checks section fields with values and Sub for FLTY20TRAD
        Then I should see AbortElec SMETS Install SUBMIT
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