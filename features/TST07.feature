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

  Scenario: Complete Current IHD PPMId Details section
    Given the Current IHD PPMId Details section
    When I update the SMETS2 IHD PPMID on Site form controls
    Then I should see the Current Meter Details section

  Scenario: Complete Determine Fault Activity section
    Given I have accessed the Determine Fault Activity section
    When I update the Confirm if Elec Meter is On Supply or Off Supply with the value Yes
    And I update the Confirm if Gas Meter is On Supply or Off Supply with the value Yes
    And I click on the Capture Photographic Evidence - Suspected Tampering button
    And I select the value No for the Are SMETS2 assets installed? radio option
    And I select the value No for the Do you need to Exchange an asset? radio option
    And I select the value Yes for the Do you Need to carry out work on the meter installtion? radio option
    And I click on the Next button
    Then I should see the Pre Installation Gas Tightness Test section

  Scenario: Complete Pre-Installation Gas Tightness Test section
    Given I have accessed the Pre Installation Gas Tightness Test section
    When I select the value Yes for the Pre Installation-Gas Tightness Test Carried out radio option
    And I click on the Capture Photo of U-Grade Attached to Gas Meter, showing Pressure in MB button
    And I select the value Yes for the Was there a drop in pressure radio option
    And I complete the remainder of the Pre Installation Gas Tightness form with values
    And I click on the Submit button in the Determine Faulty Activity Section
    Then I should see the Perform Additional Electricity Tests & Checks section

  Scenario: Complete Performed Additional Electricity Tests & Checks section
    Given I have accessed the Perform Additional Electricity Tests & Checks section
    When I select the value Yes for the Terminal Screw Tightness Checked radio option
    And I click on the Capture Photo of Terminal Screws button
    And I select the value Yes for the All Seals Intact – Including Blocks & Isolators radio option
    And I select the value Yes for the All Ports Sealed radio option
    And I select the value Yes for the Approved Siemens Cable Markers installed radio option
    And I select the value Yes for the Visual Inspection Completed radio option
    And I select the value 1. L N N L for the Cable Marker drop-down menu
    And I select the value TN-C-S for the Earth Type drop-down menu
    And I select the value Yes for the Replacement Meter Board radio option
    And I select the value No for the Meter Tails Changed radio option
    And I select the value Yes for the Replaced Main Fuse radio option
    And I select the value Yes for the Emergency Job radio option
    And I click on the Next button in the Additional Electricity Tests & Checks section
    Then I should see the Post Installation Checks section