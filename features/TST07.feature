Feature: DF FLTY20 Trad No Exchange Workflow

  @TypeScriptScenario
  Scenario Outline: Login into the system and land on the Appointment List Form
    Given I have accessed the login page
    When I provide the "<Username>" and "<Password>"
    And I click on the Login button
    Then I should see the Appointment List Form

    Examples:
      | Username | Password    |
      | E0000022 | 000Password |

  Scenario: Select the first appointment from the Appointment List Form
    When I click on the Select link
    Then I should see the Appointment Details Form

  Scenario: Perform appointment pre-checks
    When I click on the Call Forward Button
    Then I should see the Customer Contact Number
    And the Contact Made? Radio Option
    And the Appointment Confirm? Radio Option
    And the Additional Access Details Notes Textfield

  Scenario: Initiate the start of work for a selected appointment
    When I update the pre-check options for my selected appointment
    And click on the Depart button
    Then the Depart for Appointment Dialogue Box is displayed
    When I click on the Depart Ok button
    Then the DoorStep page is displayed

  Scenario: Perform tasks related to arriving at the premises
    Given I have accessed the DoorStep page
    When I click on the Arrive button
    And update the pre-check options for the Door Step Protocol
    And click on the On-Site button
    Then I am prompted to submit details for an initial risk assessment

  Scenario: Complete initial risk assessment, Electrical risk assessment, and Gas risk assessment sections
    Given I have accessed the initial risk assessment tab
    When I input details for the initial risk assessment
    And input the details for a Electric risk assessment
    And input the details for a Gas risk assessment

  Scenario: Capture Screenshots for both Gas and Electrical assessments
    Given I have accessed the Gas risk assessment tab section
    When I capture photo of initial electric installation
    And I capture photo of initial gas installation
    Then I should see Initial Polarity Check - Martindale Test button

  Scenario: Complete 'Initial Polarity Check Martindale Test' section
    Given the Initial Polarity Check Martindale Test section
    When I update Initial Polarity Check Martindale Test form controls with values
    Then I should see Initial Polarity Check - At Meter And Cut Out button

  Scenario: Complete 'Initial Polarity Check - At Meter And Cut Out' section
    Given I have accessed the Initial Polarity Check - At Meter And Cut Out section
    When I update Initial Polarity Check - At Meter And Cut Out controls with values
    And I click on the Submit button
    Then I should be directed to the Remove page

#     Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
#         Given the fltynineteen INITIAL POLARITY CHECK-AT METER AND CUT OUT section
#         When I fill the fltynineteen field09 with the Value09
#         Then I click on fltynineteen SUBMIT button
#         And I should see fltynineteen CURRENT IHD-PPMID DETAILS section


#     Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
#         Given the fltynineteen CURRENT IHD-PPMID DETAILS section
#         When I fill the fltynineteen field010 with the Value010
#         Then I should see fltynineteen CURRENT METER DETAILS section


#     Scenario: Going through "CURRENT METER DETAILS" section
#         Given the fltynineteen CURRENT METER DETAILS section
#         When I fill the fltynineteen field011 with the value Value011
#         Then I should see fltynineteen CURRENT COMMS HUB DETAILS section
#         And I should see the fltynineteen page contect display


#     Scenario: Going through "CURRENT COMMS HUB DETAILS" section
#         Given the fltynineteen CURRENT COMMS HUB DETAILS section
#         When I fill the fltynineteen field013 with the value Value013
#         Then I click on fltynineteen CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
#         Then I should see fltynineteen DETERMINE FAULT ACTIVITY section


#     Scenario: Going through "DETERMINE FAULT ACTIVITY" section

#         Given the fltynineteen DETERMINE FAULT ACTIVITY section
#         When I fill the fltynineteen field014 with the Value014
#         Then I click on fltynineteen CAPTURE PHOTOGRAPHIC EVIDENCE SUSPECTED TAMPERING button
#         And I fill the fltynineteen field015 with the Value015
#         And I click on fltynineteen OK in Info window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
#         And I fill the fltynineteen field016 with the Value016
#         And I select fltynineteen Comms Hub field
#         And I select fltynineteen Elec Meter field
#         And I select fltynineteen IHD PPMID field
#         Then I click on fltynineteen NEXT SECTION butn in determine faulty activity
#         And I should see fltynineteen REMOVE IHDPPMID section


#     Scenario: Going through "REMOVE IHD/PPMID" section
#         Given the fltynineteen REMOVE IHD-PPMID section
#         When I fill the fltynineteen field020 with the Value020
#         Then I click on fltynineteen OK button in Info window with the text Ensure IHD is Powered On
#         And I fill the fltynineteen field021 with the Value021
#         And I click on fltynineteen NEXT SECTION butn in remove IHD
#         And I should see fltynineteen SEND MESSAGE IHD PPMID section


#     Scenario: Going through "SEND MESSAGE IHD / PPMID" section
#         Given the fltynineteen SEND MESSAGE IHD-PPMID section
#         When I click on fltynineteen Send Message IHD PPMID button
#         Then I should see fltynineteen Awaiting Response button


#     Scenario: Waiting "AWAITING RESPONSE"
#         Given the fltynineteen Awaiting Response button
#         When I wait for fltynineteen the butn to disappear
#         Then I should see fltynineteen PPMID Removal Successful button
#         And I should see fltynineteen Request Sent Successfully text message
#         And I should see fltynineteen Asset Unjoined text message

#     Scenario: Confirming "PPMID Removal Successful"
#         Given the fltynineteen PPMID Removal Successful button is displayed
#         When I click on fltynineteen PPMID Removal Successful button
#         Then I should see fltynineteen CONFIRM IHD PPMID ASSET REMOVAL section

#     Scenario: Going through "CONFIRM IHD-PPMID ASSET REMOVAL" section
#         Given the fltynineteen CONFIRM IHD-PPMID ASSET REMOVAL section
#         When I fill the fltynineteen field22 with the Value22
#         Then I clk fltynineteen OK button in Updated window with the text Asset successfully added to Returns list
#         And I should see fltynineteen REMOVE METER section


#     Scenario: Going through "REMOVE METER" section
#         Given the fltynineteen REMOVE METER section
#         When I fill the fltynineteen field023 with the Value023
#         And I clk fltynineteen remove meter NEXT SECTION button
#         Then I should see fltynineteen SEND MESSAGE EMREM section


#     Scenario: Going through "SEND MESSAGE EMREM" section
#         Given the fltynineteen SEND MESSAGE EMREM section
#         When I click on fltynineteen Send Message EMREM button
#         Then I should see fltynineteen Awaiting Response button


#     Scenario: Waiting "AWAITING RESPONSE"
#         Given the fltynineteen Awaiting Response button
#         When I wait for fltynineteen the butn to disappear
#         Then I should see fltynineteen Removal Successful button
#         And I should see fltynineteen Request Sent Successfully text message
#         And I should see fltynineteen OK to Remove Asset text message


#     Scenario: Confirming "Removal Successful"
#         Given the fltynineteen Removal Successful button is displayed
#         When I click on fltynineteen Removal Successful button
#         Then I should see fltynineteen CONFIRM ELECTRIC ASSET REMOVAL section


#     Scenario: Going through "CONFIRM ELECTRIC ASSET REMOVAL" section
#         Given the fltynineteen CONFIRM ELEC ASSET REMOVAL section
#         When I fill the fltynineteen field024 with the Value024
#         And Click ok on asset removal
#         Then I should see fltynineteen REMOVE COMMS HUB window


#     Scenario: Going through "REMOVE COMMS HUB" section
#         Given the fltynineteen REMOVE COMMS HUB section
#         When I fill the fltynineteen field027 with the Value027
#         And I click on fltynineteen NEXT SEC button from Remove Comms Hub
#         Then I should see fltynineteen CONFIRM COMMS HUB REMOVAL section

#     Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
#         Given the fltynineteen CONFIRM COMMS HUB REMOVAL section
#         When I fill the fltynineteen field028 with the Value028
#         And I click OK fltynineteen button in Updated window with the text Asset successfully added to Returns list in the final step
#         And I clk fltynineteen SUBMIT to Install
#         Then I should see fltynineteen INSTALL COMMS HUB section

#     Scenario: Going through "INSTALL COMMS HUB" section
#         Given the fltynineteen INSTALL COMMS HUB section
#         When I fill the fltynineteen field029 with the Valuek029
#         Then I should see fltynineteen send message xchub

