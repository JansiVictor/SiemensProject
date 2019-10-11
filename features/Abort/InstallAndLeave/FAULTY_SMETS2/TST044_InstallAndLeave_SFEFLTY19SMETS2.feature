Feature: SFEFLTY19- SMETS2 - InstallAndLeave Workflow

    Scenario: Post SFEFLTY19 SOAP Request
        Given I post workorder using "xmlrequest/SFEFLTY19.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given the fltynineteen Login Page
        When I pass fltynineteen "<Username>" and "<Password>"
        Then I click fltynineteen Login button
        And I should see fltynineteen the Appointment List

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

    Scenario: Select the Latest workOrder
        Given the fltynineteen Appointment List window
        When I click on fltynineteen select button
        Then I should see fltynineteen Work Order window

    Scenario: Going through Call Forward
        Given the fltynineteen Work Order window
        When I see fltynineteen Call Forward or Arrive Button
        Then I click on fltynineteen CALL FORWARD button
        Then I should see fltynineteen page contect display
        And I should see fltynineteen the CUSTOMER CONTACT NUMBER
        And I should see fltynineteen Contact made field

    Scenario: Selecting job and setting to depart
        Given the fltynineteen Work Order page
        When I fill the fltynineteen fields with the value
        And I click on fltynineteen DEPART button
        Then I should see fltynineteen Depart for Appointment window
        And I should see fltynineteen the correct MPAN details
        And I should see fltynineteen the correct Customer Name details
        And I should see fltynineteen the correct PostCode details

    Scenario: Approving "Depart for Appointment" job
        Given fltynineteen Appointment details
        When I click on fltynineteen OK button
        Then I should see fltynineteen ARRIVE button
        And I should see fltynineteen DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given the fltynineteen Work Order page
        When I click on fltynineteen ARRIVE button
        Then I should see fltynineteen Arrival Time details
        And I should see fltynineteen BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the fltynineteen BE AWARE OF ANY DANGER! section
        When I fill the fltynineteen DoorStep Protocol fields with the value
        Then I click on ON fltynineteen SITE button
        Then I should see fltynineteen RISK ASSESSMENT tab activated
        And I should see fltynineteen INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given the fltynineteen INITIAL RISK ASSESSMENT section
        When I fill the fltynineteen initialRisk field with the values
        Then I should see fltynineteen INFO window

    Scenario: Going through "INFO" window
        Given the fltynineteen INFO window with the text
        When pop-up ok click in fltynineteen Risk
        Then I should see fltynineteen RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given the fltynineteen RISK ASSESSMENT-ELEC section
        When I fill the fltynineteen RISK ASSESSMENT - ELEC fields with the values
        And I click on fltynineteen CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And I click on fltynineteen NEXT SECTION button
        Then I should see fltynineteen CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
        Given the fltynineteen CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
        When I click on fltynineteen CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then I should see fltynineteen INITIAL POLARITY CHECK - MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given the fltynineteen INITIAL POLARITY CHECK MARTINDALE TEST section
        When I fill the fltynineteen field007 with the Value007
        Then I click on fltynineteen CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST btn
        And I fill the fltynineteen field08 with the Value08
        Then I should see fltynineteen INITIAL POLARITY CHECK AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given the fltynineteen INITIAL POLARITY CHECK-AT METER AND CUT OUT section
        When I fill the fltynineteen field09 with the Value09
        Then I click on fltynineteen SUBMIT button
        And I should see fltynineteen CURRENT IHD-PPMID DETAILS section

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given the fltynineteen CURRENT IHD-PPMID DETAILS section
        When I fill the fltynineteen field010 with the Value010
        Then I should see fltynineteen CURRENT METER DETAILS section

    Scenario: Going through "CURRENT METER DETAILS" section
        Given the fltynineteen CURRENT METER DETAILS section
        When I fill the fltynineteen field011 with the value Value011
        Then I should see fltynineteen CURRENT COMMS HUB DETAILS section
        And I should see the fltynineteen page contect display

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given the fltynineteen CURRENT COMMS HUB DETAILS section
        When I fill the fltynineteen field013 with the value Value013
        Then I click on fltynineteen CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        Then I should see fltynineteen DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given the fltynineteen DETERMINE FAULT ACTIVITY section
        When I fill the fltynineteen field014 with the Value014
        Then I click on fltynineteen CAPTURE PHOTOGRAPHIC EVIDENCE SUSPECTED TAMPERING button
        And I fill the fltynineteen field015 with the Value015
        And I click on fltynineteen OK in Info window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And I should fill InstallAndLeave field16 with the value16
        And I select fltynineteen Comms Hub field
        And I select fltynineteen Elec Meter field
        And I select fltynineteen IHD PPMID field
        Then I click on fltynineteen NEXT SECTION butn in determine faulty activity
        And I should see fltynineteen REMOVE IHDPPMID section

    Scenario: Going through "REMOVE IHD/PPMID" section
        Given the fltynineteen REMOVE IHD-PPMID section
        When I fill the fltynineteen field020 with the Value020
        Then I click on fltynineteen OK button in Info window with the text Ensure IHD is Powered On
        And I fill the fltynineteen field021 with the Value021
        And I click on fltynineteen NEXT SECTION butn in remove IHD
        And I should see fltynineteen SEND MESSAGE IHD PPMID section

    Scenario: Going through "SEND MESSAGE IHD / PPMID" section
        Given the fltynineteen SEND MESSAGE IHD-PPMID section
        When I click on fltynineteen Send Message IHD PPMID button
        Then I should see fltynineteen Awaiting Response button

    Scenario: Waiting "AWAITING RESPONSE"
        Given the fltynineteen Awaiting Response button
        When I wait for fltynineteen the butn to disappear
        Then I should see fltynineteen PPMID Removal Successful button
        And I should see fltynineteen Request Sent Successfully text message
        And I should see fltynineteen Asset Unjoined text message

    Scenario: Confirming "PPMID Removal Successful"
        Given the fltynineteen PPMID Removal Successful button is displayed
        When I click on fltynineteen PPMID Removal Successful button
        Then I should see fltynineteen CONFIRM IHD PPMID ASSET REMOVAL section

    Scenario: Going through "CONFIRM IHD-PPMID ASSET REMOVAL" section
        Given the fltynineteen CONFIRM IHD-PPMID ASSET REMOVAL section
        When I fill the fltynineteen field22 with the Value22
        Then I clk fltynineteen OK button in Updated window with the text Asset successfully added to Returns list
        And I should see fltynineteen REMOVE METER section

    Scenario: Going through "REMOVE METER" section
        Given the fltynineteen REMOVE METER section
        When I fill the fltynineteen field023 with the Value023
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
        Then I should see fltynineteen INSTALL COMMS HUB section

    Scenario: Going through "INSTALL COMMS HUB" section
        Given the fltynineteen INSTALL COMMS HUB section
        When I fill the fltynineteen field029 with the Valuek029
        Then I should see fltynineteen send message xchub

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

    # Scenario: Going through "INSTALL PPMID" section
    # Given TST03 the "INSTALL PPMID" section
    # When I fill the EXCH22 InstallLeave PPMID section fields with values
    # Then I click the Gas Install Submit Button

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
    Given TST12 the DEVICE BINDING & COMMISSIONING section
    When I fill the EXCH23 InstallLeave Binding and commissioning of PPMID fields with values
    Then TST12 I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
    Given TST12 the ENERGY EFFICIENCY INFORMATION section
    When TST12 I fill the fields54 and click next
    Then I should see InstallAndLeave SMART EDUCATION section

    Scenario: Going through "SMART EDUCATION" section
    Given ExchTwTwo the SMART EDUCATION section
    When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
    Then I should see InstallLeave Summary of Job and Smart literature left onsite section

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
    Given the InstallLeave Smart No literature left onsite section
    When ExchTwTwo I fill the fields56 and click next
    Then ExchTwTwo See CAPTURE CUSTOMER SIGNATURE sec

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
    Given TST12 the CAPTURE CUSTOMER SIGNATURE section
    When TST12 I write signature in Customer Signature
    And TST12 I fill the field57 and Job Complete
    Then TST12 see Job Completed screen

    Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist
