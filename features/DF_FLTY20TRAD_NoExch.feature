# Feature: DF FLTY20 Trad No Exchange Workflow

#   @TypeScriptScenario
#   Scenario Outline: Login into the system and land on the Appointment List Form
#     Given I have accessed the login page
#     When I provide the "<Username>" and "<Password>"
#     And I click on the Login button
#     Then I should see the Appointment List Form

#     Examples:
#       | Username | Password    |
#       | E0000022 | 000Password |

#   Scenario: Select the first appointment from the Appointment List Form
#     When I click on the Select link
#     Then I should see the Appointment Details Form

#   Scenario: Perform appointment pre-checks
#     When I click on the Call Forward Button
#     Then I should see the Customer Contact Number
#     And the Contact Made? Radio Option
#     And the Appointment Confirm? Radio Option
#     And the Additional Access Details Notes Textfield

#   Scenario: Initiate the start of work for a selected appointment
#     When I update the pre-check options for my selected appointment
#     And click on the Depart button
#     Then the Depart for Appointment Dialogue Box is displayed
#     When I click on the Depart Ok button
#     Then the DoorStep page is displayed

#   Scenario: Perform tasks related to arriving at the premises
#     Given I have accessed the DoorStep page
#     When I click on the Arrive button
#     And update the pre-check options for the Door Step Protocol
#     And click on the On-Site button
#     Then I am prompted to submit details for an initial risk assessment

#   Scenario: Complete initial risk assessment, Electrical risk assessment, and Gas risk assessment sections
#     Given I have accessed the initial risk assessment tab
#     When I input details for the initial risk assessment
#     And input the details for a Electric risk assessment
#     And input the details for a Gas risk assessment

#   Scenario: Capture Screenshots for both Gas and Electrical assessments
#     Given I have accessed the Gas risk assessment tab section
#     When I capture photo of initial electric installation
#     And I capture photo of initial gas installation
#     Then I should see Initial Polarity Check - Martindale Test button

#   Scenario: Complete 'Initial Polarity Check Martindale Test' section
#     Given the Initial Polarity Check Martindale Test section
#     When I update Initial Polarity Check Martindale Test form controls with values
#     Then I should see Initial Polarity Check - At Meter And Cut Out button

#   Scenario: Complete 'Initial Polarity Check - At Meter And Cut Out' section
#     Given I have accessed the Initial Polarity Check - At Meter And Cut Out section
#     When I update Initial Polarity Check - At Meter And Cut Out controls with values
#     And I click on the Submit button
#     Then I should be directed to the Remove page

#   Scenario: Complete Current IHD PPMId Details section
#     Given the Current IHD PPMId Details section
#     When I update the SMETS2 IHD PPMID on Site form controls
#     Then I should see the Current Meter Details section

#   Scenario: Complete Determine Fault Activity section
#     Given I have accessed the Determine Fault Activity section
#     When I update the Confirm if Elec Meter is On Supply or Off Supply with the value Yes
#     And I update the Confirm if Gas Meter is On Supply or Off Supply with the value Yes
#     And I click on the Capture Photographic Evidence - Suspected Tampering button
#     And I select the value No for the Are SMETS2 assets installed? radio option
#     And I select the value No for the Do you need to Exchange an asset? radio option
#     And I select the value Yes for the Do you Need to carry out work on the meter installtion? radio option
#     And I click on the Next button
#     Then I should see the Pre Installation Gas Tightness Test section

#   Scenario: Complete Pre-Installation Gas Tightness Test section
#     Given I have accessed the Pre Installation Gas Tightness Test section
#     When I select the value Yes for the Pre Installation-Gas Tightness Test Carried out radio option
#     And I click on the Capture Photo of U-Grade Attached to Gas Meter, showing Pressure in MB button
#     And I select the value Yes for the Was there a drop in pressure radio option
#     And I complete the remainder of the Pre Installation Gas Tightness form with values
#     And I click on the Submit button in the Determine Faulty Activity Section
#     Then I should see the Perform Additional Electricity Tests & Checks section

#   Scenario: Complete Performed Additional Electricity Tests & Checks section
#     Given I have accessed the Perform Additional Electricity Tests & Checks section
#     When I select the value Yes for the Terminal Screw Tightness Checked radio option
#     And I click on the Capture Photo of Terminal Screws button
#     And I select the value Yes for the All Seals Intact – Including Blocks & Isolators radio option
#     And I select the value Yes for the All Ports Sealed radio option
#     And I select the value Yes for the Approved Siemens Cable Markers installed radio option
#     And I select the value Yes for the Visual Inspection Completed radio option
#     And I select the value 1. L N N L for the Cable Marker drop-down menu
#     And I select the value TN-C-S for the Earth Type drop-down menu
#     And I select the value Yes for the Replacement Meter Board radio option
#     And I select the value No for the Meter Tails Changed radio option
#     And I select the value Yes for the Replaced Main Fuse radio option
#     And I select the value Yes for the Emergency Job radio option
#     And I click on the Next button in the Additional Electricity Tests & Checks section
#     Then I should see the Post Installation Checks section

#   Scenario: Complete Post Installation Checks section
#     Given I have accessed Post Installation Checks section
#     When I select the value Yes for the Carry Out Polarity Check at Meter radio option
#     And I select the value Polarity tested with plug in option from Carry Out Polarity Check with Plug In Test Device drop-down menu
#     And I select the value PASS for the Confirm Socket Safety Test Passed radio option
#     And I update the Test Witness Name textfield with the value Johny Vegas
#     And I click on the Capture Photo of Martindale Test button
#     And I click on the Capture Photo, of Final Meter Installation button
#     And I click on the Capture Photo of Close Up of Meter Witness Sticker button
#     #And I click on the Next button in the Post Installation Checks Section
#     Then I should see the Commissioning section

#   Scenario: Complete the Commissioning section
#     Given I have accessed the Commissioning section
#     And I select the value T1 Aerial from the Non Serialised Assets drop-down menu
#     And I update the Quantity textfield with the value 1
#     And I click on the Add Another Asset button from the Commissioning section
#     Then A new recordset is displayed dyanmically, directly below the first entry
#     When I select the value Connector Blocks from the Non Serialised Assets drop-down menu
#     And I update the Quantity textfield with the value 2
#     And I click on the Commissioning section Next button
#     Then I should see the Install Kit section

#   Scenario: Complete the Install Kit section
#     Given I have accessed the Install Kit section
#     When I select the value Yes for the Installed Kit Used? radio option
#     And I select the value T1 Aerial, from the Non Serialised Assets drop-down menu
#     And I update the Quantity textfield, in the with the value 1
#     And I click on the Add Another Asset button from the Install Kit section
#     When I select the value Meter Board from the Non Serialised Assets drop-down menu
#     And I update the Quantity textfield, with the value 2
#     And I click on the Install Kit section Next button
#     Then I should see the Post Installation Gas Tightness Test section

#   Scenario: Complete the Post Installation Gas Tightness Test section
#     Given I have accessed the Post Installation Gas Tightness Test section
#     When I select the value Yes for the Did you have to Contact GT radio option
#     And I update the National Grid GI Job ref textfield with the value 1
#     And I select the value Yes for the Reported Incident to H&S AIRline radio option
#     And I update the AIRLine Ref No textfield with the value 2
#     And I select the value Yes for the Need to wait for the GT Attendance on Site radio option
#     And I select the value Yes for the GT Resolve Issue radio option
#     And I select the value Yes for the Did you Carry out any Additional Work to Pass the Gas Tightness Test radio option
#     And I update the Additional Notes textfield with the value Gas Notes
#     And I select the value Yes for the Have you replaced the Gas meter radio option
#     And I select the value Yes for the Have you replaced the Regulator radio option
#     And I select the value Yes for the Post Installation-Gas Tightness Test Performed radio option
#     And I click on the Capture Photo of Witness Sticker and U-Gauge button
#     And I select the value Yes, for the Was there a drop in pressure radio option
#     And I select the value 1.1 for the Enter DIP Gas Pressure drop-down menu
#     And I select the value G4 0.5 4m bars for the Select Meter Type drop-down menu
#     And I select the value Yes for the Gas Tightness Test – Passed radio option
#     And I update the Test Witness Name textfield with the value Ellie Taylor
#     And I update the Standing Pressure textfield with the value 1.1
#     And I click on the Capture Photo of Standing Pressure button
#     And I update the Working Pressure textfield with the value 2.0
#     And I click on the Capture Photo of Working Pressure button
#     And I click on the Capture Photo of Final Meter Installation button
#     And I click on the Post Installation Gas Tightness Test Next button
#     Then I should see the Gas Appliance Safety Checks section

#   Scenario: Complete the Gas Appliance Safety Checks section
#     Given I have accessed the Gas Appliance Safety Checks section
#     When I select the value Yes for the Is Earth Bonding Installed radio option
#     And I select the value Yes for Landlord Property? radio option
#     And I update the Address1 textfield with value
#     #And I update the Address2 textfield with value
#     #And I update the Address3 textfield with value
#     #And I update the Address4 textfield with value
#     #And I update the Address5 textfield with value
#     #And I update the Address6 textfield with value
#     #And I update the Address7 textfield with value
#     And I click on the Add Appliance button
#     And I select the value Flueless from the Flue Type drop-down menu
#     And I select the value Yes for the Ventilation Satisfactory? radio option
#     And I select the value Yes for the Carried Out Purge & Relight Gas Appliance Test?
#     And I select the value Gas Cooker from the Appliance Type drop-down menu
#     And I select the value Kitchen from the Appliance Location drop-down menu
#     And I select the value Working Order from the Appliance Condition drop-down menu
#     And I select the value Yes for the Appliance Safe to Use radio option
#     And I click on the All Appliances Tested button
#     And I click on the Gas Appliance Safety Checks Submit button

#   Scenario: Complete the Energy Efficiency Information section
#     Given I have accessed the Energy Efficiency Information section
#     When  I populate the Energy Efficiency form fields and click Next

#   Scenario: Complete the Capture Customer Signature section
#     Given I have accessed the Capture Customer Signature section
#     When I write my signature in the Customer Signature form field
#     And I populate the Capture Customer Signature form fields and click Job Complete
#     Then I should see the Job Completed screen
