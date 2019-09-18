# Feature: SF G FLTY18 Trad  - SMETS2 Workflow

# 	Scenario Outline: Logging in to job's "Work Order" window for FLTY18TRAD
# 		Given the Login Page for FLTY18TRAD
# 		When I pass "<Username>" and "<Password>" for FLTY18TRAD
# 		Then I click Login button for FLTY18TRAD
# 		And I should see the Appointment List for FLTY18TRAD

# 		Examples:
# 			| Username    | Password    |
# 			| Automation2 | Aut0m4t1on2 |

# 	Scenario: Select the Latest workOrder for FLTY18TRAD
# 		Given the Appointment List window for FLTY18TRAD
# 		When I click on select button for FLTY18TRAD
# 		Then I should see Work Order window for FLTY18TRAD

# 	Scenario: Going through Call Forward for FLTY18TRAD
# 		Given the "Work Order" window for FLTY18TRAD
# 		When i see Call Forward or Arrive Button for FLTY18TRAD
# 		Then I click on CALL FORWARD button for FLTY18TRAD
# 		Then I should see page contect display for FLTY18TRAD
# 		And I should see the CUSTOMER CONTACT NUMBER for FLTY18TRAD
# 		And I should see Contact made field for FLTY18TRAD

# 	Scenario: Selecting job and setting to depart for FLTY18TRAD
# 		Given the "Work Order" page for FLTY18TRAD
# 		When I fill the fields with the value for FLTY18TRAD
# 		And I click on DEPART button for FLTY18TRAD
# 		Then I should see Depart for Appointment window for FLTY18TRAD

# 	Scenario: Approving "Depart for Appointment" job for FLTY18TRAD
# 		Given Appointment details for FLTY18TRAD
# 		When I click on OK button for FLTY18TRAD
# 		Then I should see ARRIVE button for FLTY18TRAD
# 		And I should see DOORSTEP PROTOCOL tab activated for FLTY18TRAD

# 	Scenario: Set job to Arrived status for FLTY18TRAD
# 		Given the "WorkOrder" page for FLTY18TRAD
# 		When I click on ARRIVE button for FLTY18TRAD
# 		Then I should see Arrival Time details for FLTY18TRAD
# 		And I should see BE AWARE OF ANY DANGER! section for FLTY18TRAD

# 	Scenario: Going through "BE AWARE OF ANY DANGER!" section for FLTY18TRAD
# 		Given the BE AWARE OF ANY DANGER! section for FLTY18TRAD
# 		When I fill the DoorStep Protocol fields with the value for FLTY18TRAD
# 		And I click on ON SITE button for FLTY18TRAD
# 		Then I should see RISK ASSESSMENT tab activated for FLTY18TRAD
# 		And I should see INITIAL RISK ASSESSMENT section for FLTY18TRAD

# 	Scenario: Going through "INITIAL RISK ASSESSMENT" for FLTY18TRAD
# 		Given the INITIAL RISK ASSESSMENT section for FLTY18TRAD
# 		When I fill the initialRisk field with the values for FLTY18TRAD
# 		And I fill Need to work Yes for FLTY18TRAD
# 		Then I should see RISK ASSESSMENT ELEC section for FLTY18TRAD

# 	Scenario: Going through "RISK ASSESSMENT - ELEC" section for FLTY18TRAD
# 		Given the RISK ASSESSMENT - ELEC section for FLTY18TRAD
# 		When I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY18TRAD
# 		And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY18TRAD
# 		And I click on NEXT SECTION button for FLTY18TRAD
# 		Then I should see the RISK ASSESSMENT - GAS section for FLTY18TRAD

# 	Scenario: Going through "RISK ASSESSMENT - GAS" for FLTY18TRAD
# 		Given the RISK ASSESSMENT - GAS section for FLTY18TRAD
# 		When I fill the field05 with the value05 for FLTY18TRAD
# 		Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE button for FLTY18TRAD
# 		And I fill the field06 with the value06 for FLTY18TRAD		
# 		Then I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY18TRAD

# 	Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section for FLTY18TRAD
# 		Given the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY18TRAD
# 		When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button gas for FLTY18TRAD
# 		Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for FLTY18TRAD

# 	Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section for FLTY18TRAD
# 		Given the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY18TRAD
# 		When I fill the INITIAL POLARITY CHECK field with the values for FLTY18TRAD
# 		Then I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY18TRAD
# 		Then I fill the Socket Found field with the values for FLTY18TRAD
# 		And I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY18TRAD

# 	Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for FLTY18TRAD
# 		Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY18TRAD
# 		When I fill the METER AND CUT OUT fields with the values for FLTY18TRAD
# 		And I click on NEXT button for FLTY18TRAD
# 		And I click on SUBMIT button for FLTY18TRAD
# 		Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY18TRAD

# Scenario: Going through "CURRENT IHD/PPMID DETAILS" section for FLTY18TRAD
# 		Given the CURRENT IHD-PPMID DETAILS section for FLTY18TRAD
# 		When I fill the field010 with the value010 for FLTY18TRAD		
# 		Then I should see the page contect display of current meter details for FLTY18TRAD

# 	Scenario: Going through "CURRENT METER DETAILS - GAS" section for FLTY18TRAD
# 		Given the CURRENT METER DETAILS - GAS section for FLTY18TRAD
# 		When I fill the field with the value gas for FLTY18TRAD
# 		Then I should see the DETERMINE FAULT ACTIVITY section for FLTY18TRAD

# 	Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY18TRAD
# 		Given the DETERMINE FAULT ACTIVITY section for FLTY18TRAD
# 		When I fill values elec and gas meter Supply for FLTY18TRAD
# 		Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY18TRAD
# 		And I fill for SMET2 Asset Installed for FLTY18TRAD
# 		And I fill do you need exchange asset for FLTY18TRAD
# 		And I fill equipment reposition for FLTY18TRAD
# 		And I select SMETS2 Offered for FLTY18TRAD
# 		And I click on NEXT SECT button for FLTY18TRAD
# 		And I should see PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY18TRAD

# 	Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section for FLTY18TRAD
# 		Given the PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY18TRAD
# 		When I fill the field17 with the value17 for FLTY18TRAD
# 		Then I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button for FLTY18TRAD
# 		And I fill the field18 with the value18 for FLTY18TRAD
# 		And I see Gas Tightness Test Completed field as FAIL for FLTY18TRAD
# 		And I fill the field19 with the value19 for FLTY18TRAD
# 		And I should see REMOVE GAS METER section for FLTY18TRAD

# 	Scenario: Going through "REMOVE GAS METER" section for FLTY18TRAD
# 		Given the REMOVE GAS METER section for FLTY18TRAD
# 		When I fill the field23 with the value23 for FLTY18TRAD
# 		Then I click on NEXT button in removing gas meter for FLTY18TRAD
# 		And I should see CONFIRM GAS ASSET REMOVAL section for FLTY18TRAD

# 	Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section for FLTY18TRAD
# 		Given the CONFIRM GAS ASSET REMOVAL section for FLTY18TRAD
# 		When I fill the field24 with the value24 for FLTY18TRAD
# 		Then I click on OK btn in Updated window with the text Asset successfully added to Returns list for FLTY18TRAD
#  		And I should click on next section for FLTY18TRAD
# 		And I should click on submit button for FLTY18TRAD
# 		And I should see INSTALL COMMS HUB section for FLTY18TRAD

# 	Scenario: Going through "INSTALL COMMS HUB" section for FLTY18TRAD
# 		Given the INSTALL COMMS HUB sec for FLTY18TRAD
# 		When I fill the Ins comms hub fields and capture photo EVIDENCE for FLTY18TRAD
# 		Then I should see NEW GAS METER DETAILS section for FLTY18TRAD

# 	Scenario: Going through "NEW GAS METER DETAILS" section	
# 		Given the NEW GAS METER DETAILS section for FLTY18TRAD
# 		When I fill the fields and values for New gas meter details for FLTY18TRAD	
# 		Then I should see the NEW REGULATOR section for FLTY18TRAD

# 	Scenario: Going through "NEW REGULATOR" section
# 		Given the NEW REGULATOR section for FLTY18TRAD
# 		When I fill the fields and values for new regulator section for FLTY18TRAD
# 		Then I should see GAS INITIAL METER READING section for FLTY18TRAD

# 	Scenario: Going through "GAS INITIAL METER READING" section
# 		Given the GAS INITIAL METER READING section for FLTY18TRAD
# 		When I fill the fields with values Gas initial meter reading for FLTY18TRAD
# 		Then I should see INSTALL KIT section for FLTY18TRAD

# 	Scenario: Going through "Install Kit " GAS section
# 		Given the Gas Install Kit gas section for FLTY18TRAD
# 		When I fill the Gas Install Kit gas section fields with values for FLTY18TRAD
# 		Then I should see Perform Post Installation GAS Checks sec for FLTY18TRAD

# 	Scenario: Going through "Post Installation GAS" GAS section
# 		Given the Post Installation GAS sec for FLTY18TRAD
# 		When I fill the Post Installation GAS sec fields with values for FLTY18TRAD
# 		Then I should see GICOM Message sec for FLTY18TRAD

# 	Scenario: Going through "GAS INSTALL & COMMISSIONING" section
# 		Given the GAS INSTALL & COMMISSIONING sec for FLTY18TRAD
# 		When I click on Send Message GICOM butn for FLTY18TRAD
# 		Then I should see Awaiting Response butn for FLTY18TRAD

# 	Scenario: Waiting "AWAITING RESPONSE"
# 		Given the Awaiting Response butn after gas install for FLTY18TRAD
# 		When I wait for the button to disappear after post install for FLTY18TRAD
# 		Then I should see Commissioning Successful button for FLTY18TRAD
# 		And I should see Request Sent Successfully txt message for FLTY18TRAD
# 		And I should see Pair Asset to Comms Hub text message for FLTY18TRAD
# 		And I should see DCC Handover Requested text message for FLTY18TRAD
# 		And I should see Device Clock Synchronised text message for FLTY18TRAD
# 		And I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message for FLTY18TRAD
# 		And I should see DCC Handover Requested for GPF Device text message for FLTY18TRAD
# 		And I should see Joins are being Initiated text message for FLTY18TRAD

# 	Scenario: Confirming "Commissioning Successful"
# 		Given the Commissioning Successful button is displayed for FLTY18TRAD
# 		When Commissioning Successful butn clk for FLTY18TRAD
# 		Then I should see GAS APPLIANCE SAFETY CHECKS section for FLTY18TRAD

# 	Scenario: Going through "Gas Appliance Safety Checks" GAS section for FLTY18TRAD
# 		Given Gas Appliance Safety Checks sec for FLTY18TRAD
# 		When I fill the Gas Appliance Safety Checks section fields with values and Sub for FLTY18TRAD
# 		Then I should see SMETS PPMID sec for FLTY18TRAD

# 	Scenario: Going through "INSTALL PPMID" section
# 		Given the "INSTALL PPMID" section for FLTY18TRAD
# 		When I fill the fields for Install PPMID for FLTY18TRAD
# 		Then I should see PPMID COMMISSIONING section for FLTY18TRAD

# 	Scenario: Going through "PPMID COMMISSIONING" section
# 		Given the PPMID COMMISSIONING section for FLTY18TRAD
# 		When I click on Send Message IHD-PPMID butn for FLTY18TRAD
# 		Then I should see PPMID Awaiting Response butn for FLTY18TRAD

# 	Scenario: Waiting "AWAITING RESPONSE"
# 		Given the Awaiting Response butn after ppmid commisioning for FLTY18TRAD
# 		When I wait for the button to disappear after PPMID Commisioning for FLTY18TRAD
# 		Then I should see PPMID Commissioning Successful button for FLTY18TRAD
# 		And I should see PPMID Request Sent Successfully txt message for FLTY18TRAD
# 		And I should see PPMID Pair Asset to Comms Hub text message for FLTY18TRAD
# 		And I should see Pairing Successful text message for FLTY18TRAD

# 	Scenario: Confirming "PPMID Commissioning Successful"
# 		Given the PPMID Commissioning Successful button is displayed for FLTY18TRAD
# 		When I click on SUB button for FLTY18TRAD
# 		Then I should see DEVICE BINDING and COMMISSIONING sec for FLTY18TRAD

# 	Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
# 		Given the DEVICE BINDING & COMMISSIONING section for FLTY18TRAD
# 		When I fill the fields53 and click next for FLTY18TRAD
# 		Then I should see ENERGY EFFICIENCY INFORMATION section for FLTY18TRAD

# 	Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
# 		Given the ENERGY EFFICIENCY INFORMATION section for FLTY18TRAD
# 		When I fill the fields54 and click next for FLTY18TRAD
# 		Then I should see SMART EDUCATION section for FLTY18TRAD

# 	Scenario: Going through "SMART EDUCATION" section
# 		Given the SMART EDUCATION section for FLTY18TRAD
# 		When I fill the fields55 and click next for FLTY18TRAD
# 		Then I should see SMART LITERATURE LEFT ON SITE section for FLTY18TRAD

# 	Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
# 		Given the SMART LITERATURE LEFT ON SITE section for FLTY18TRAD
# 		When I fill the fields56 and click next for FLTY18TRAD
# 		Then See CAPTURE CUSTOMER SIGNATURE sec for FLTY18TRAD

# 	Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
# 		Given the CAPTURE CUSTOMER SIGNATURE section for FLTY18TRAD
# 		When I write signature in Customer Signature for FLTY18TRAD
# 		And I fill the field57 and Job Complete for FLTY18TRAD
# 		Then see Job Completed screen for FLTY18TRAD
