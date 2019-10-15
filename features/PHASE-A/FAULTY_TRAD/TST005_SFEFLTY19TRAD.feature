Feature: TST005_SFEFLTY19TRAD


	Scenario: Post SFEFLTY19TRAD SOAP Request
		Given I post workorder using "xmlrequest/SFEFLTY19TRAD.XML"

	@LoginScenario
	Scenario: Select the Latest workOrder for FLTY19 Trad
		Given the Appointment List window for FLTY19 Trad
		When I click on select button for FLTY19 Trad
		Then I should see Work Order window for FLTY19 Trad

	Scenario: Going through Call Forward for FLTY19 Trad
		Given the "Work Order" window for FLTY19 Trad
		When i see Call Forward or Arrive Button for FLTY19 Trad
		Then I click on CALL FORWARD button for FLTY19 Trad
		Then I should see page contect display for FLTY19 Trad
		And I should see the CUSTOMER CONTACT NUMBER for FLTY19 Trad
		And I should see Contact made field for FLTY19 Trad

	Scenario: Selecting job and setting to depart for FLTY19 Trad
		Given the "Work Order" page for FLTY19 Trad
		When I fill the fields with the value for FLTY19 Trad
		And I click on DEPART button for FLTY19 Trad
		Then I should see Depart for Appointment window for FLTY19 Trad

	Scenario: Approving "Depart for Appointment" job for FLTY19 Trad
		Given Appointment details for FLTY19 Trad
		When I click on OK button for FLTY19 Trad
		Then I should see ARRIVE button for FLTY19 Trad
		And I should see DOORSTEP PROTOCOL tab activated for FLTY19 Trad

	Scenario: Set job to Arrived status for FLTY19 Trad
		Given the "WorkOrder" page for FLTY19 Trad
		When I click on ARRIVE button for FLTY19 Trad
		Then I should see Arrival Time details for FLTY19 Trad
		And I should see BE AWARE OF ANY DANGER! section for FLTY19 Trad

	Scenario: Going through "BE AWARE OF ANY DANGER!" section for FLTY19 Trad
		Given the BE AWARE OF ANY DANGER! section for FLTY19 Trad
		When I fill the DoorStep Protocol fields with the value for FLTY19 Trad
		And I click on ON SITE button for FLTY19 Trad
		Then I should see RISK ASSESSMENT tab activated for FLTY19 Trad
		And I should see INITIAL RISK ASSESSMENT section for FLTY19 Trad

	###########Removed the Info-Pop up scenario on 25/09

	Scenario: Going through "INITIAL RISK ASSESSMENT" for FLTY19 Trad
		Given the INITIAL RISK ASSESSMENT section for FLTY19 Trad
		When I fill the initialRisk field with the values for FLTY19 Trad
		Then I should see RISK ASSESSMENT ELEC section for FLTY19 Trad

	Scenario: Going through "RISK ASSESSMENT - ELEC" section for FLTY19 Trad
		Given the RISK ASSESSMENT - ELEC section for FLTY19 Trad
		When I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY19 Trad
		And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY19 Trad
		And I click on NEXT SECTION button for FLTY19 Trad
		Then I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY19 Trad

	Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION" section for FLTY19 Trad
		Given the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY19 Trad
		When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button elec for FLTY19 Trad
		Then I should see the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY19 Trad

	Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section for FLTY19 Trad
		Given the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY19 Trad
		When I fill the INITIAL POLARITY CHECK field with the values for FLTY19 Trad
		Then I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY19 Trad
		Then I fill the Socket Found field with the values for FLTY19 Trad
		And I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY19 Trad

	Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for FLTY19 Trad
		Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY19 Trad
		When I fill the METER AND CUT OUT fields with the values for FLTY19 Trad
		And I click on SUBMIT button for FLTY19 Trad
		Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY19 Trad

	Scenario: Going through "CURRENT IHD/PPMID DETAILS" section for FLTY19 Trad
		Given the CURRENT IHD-PPMID DETAILS section for FLTY19 Trad
		When I fill the field010 with the value010 for FLTY19 Trad
		Then I should see the page contect display of current meter details for FLTY19 Trad

	Scenario: Going through "CAPTURE CURRENT METER Elec" section for FLTY19 Trad
		Given the CAPTURE CURRENT METER section for FLTY19 Trad
		When I fill capture current meter elec for FLTY19 Trad
		Then I should see the DETERMINE FAULT ACTIVITY section for FLTY19 Trad

	Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY19 Trad
		Given the DETERMINE FAULT ACTIVITY section for FLTY19 Trad
		When I fill values elec and gas meter Supply for FLTY19 Trad
		Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY19 Trad
		And I fill for SMET2 Asset Installed for FLTY19 Trad
		And I fill do you need exchange asset for FLTY19 Trad
		And I fill equipment reposition for FLTY19 Trad
		And I select SMETS2 Offered for FLTY19 Trad
		And I click on NEXT SECT button for FLTY19 Trad
		And I should see REMOVE ELEC ASSET REMOVAL section for FLTY19 Trad

	Scenario: Going through "REMOVE ELEC METER" section for FLTY19 Trad
		Given the REMOVE ELEC ASSET REMOVAL section for FLTY19 Trad
		When I fill the values for elec removal FLTY19 Trad
		Then I click on NEXT button in removing elec meter for FLTY19 Trad
		And I should see CONFIRM ELEC ASSET REMOVAL section for FLTY19 Trad

	Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section for FLTY19 Trad
		Given the CONFIRM ELEC ASSET REMOVAL section for FLTY19 Trad
		When I fill values for FLTY19 Trad
		Then I click on OK btn in Updated window with the text Elec Asset successfully added to Returns list for FLTY19 Trad
		And I should click on next section for FLTY19 Trad
		And I should click on submit button for FLTY19 Trad
		And I should see INSTALL COMMS HUB section for FLTY19 Trad

	Scenario: Going through "INSTALL COMMS HUB" section for FLTY19 Trad
		Given the INSTALL COMMS HUB sec for FLTY19 Trad
		When I fill the Ins comms hub fields and capture photo EVIDENCE for FLTY19 Trad
		Then I should see New Meter Details section for for FLTY19 Trad

	Scenario: Going through "New Meter details" section for FLTY19 Trad
		Given the  New Meter details section for FLTY19 Trad
		When I fill the New Meter details fields with values for FLTY19 Trad
		Then I should see ADDITIONAL ELECTRICITY CHECKS section for FLTY19 Trad

	Scenario: Going through Additional Electricity Tests and Checks section for FLTY19 Trad
		Given the the ADDITIONAL ELECTRICITY CHECKS details section for FLTY19 Trad
		When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for FLTY19 Trad

	Scenario: Going through Initial Elec Meter Reading of new meter depending on the number of Registers and dials section for FLTY19 Trad
		Given Initial Meter Reading of new meter depending on the number of Registers and dials section for FLTY19 Trad
		When I fill the Initial Meter Reading of new meter details fields with values for FLTY19 Trad
		Then I should see Post Installation Check Section for FLTY19 Trad

	Scenario: Going through Perform Post Installation Checks section for FLTY19 Trad
		Given Perform Post Installation Checks section for FLTY19 Trad
		When I fill the Perform Post Installation Checks details fields with values for FLTY19 Trad
		Then I should see Commission Bind the Comms hub to the WAN section for FLTY19 Trad

	Scenario: Going through Commission Bind the Comms hub to the WAN section for FLTY19 Trad
		Given Commission Bind the Comms hub to the WAN section for FLTY19 Trad
		When I fill the Commission Bind the Comms hub to the WAN details fields with values for FLTY19 Trad
		Then I should see Electric Install and Commisioning for FLTY19 Trad

	Scenario: Going through Perform DCC Message Creation for EICOM section for FLTY19 Trad
		Given Perform DCC Message Creation for EICOM section for FLTY19 Trad
		When I fill the Perform DCC Message Creation for EICOM details fields with values for FLTY19 Trad
		Then I should see Commissioning Successful button for FLTY19 Trad

	Scenario: Confirming "Commissioning Successful" FLTY19 Trad
		Given the Commissioning Successful button is displayed for FLTY19 Trad
		When Commissioning Successful butn clk for FLTY19 Trad
		Then I should see the "INSTALL PPMID" section for FLTY19 Trad

	Scenario: Going through "INSTALL PPMID" section FLTY19 Trad
		Given the "INSTALL PPMID" section for FLTY19 Trad
		When I fill the fields for Install PPMID for FLTY19 Trad
		Then I should see PPMID COMMISSIONING section for FLTY19 Trad

	Scenario: Going through "PPMID COMMISSIONING" section FLTY19 Trad
		Given the PPMID COMMISSIONING section for FLTY19 Trad
		When I click on Send Message IHD-PPMID butn for FLTY19 Trad
		Then I should see PPMID Awaiting Response butn for FLTY19 Trad

	Scenario: Waiting "AWAITING RESPONSE" FLTY19 Trad
		Given the Awaiting Response butn after ppmid commisioning for FLTY19 Trad
		When I wait for the button to disappear after PPMID Commisioning for FLTY19 Trad
		Then I should see PPMID Commissioning Successful button for FLTY19 Trad
		And I should see PPMID Request Sent Successfully txt message for FLTY19 Trad
		And I should see PPMID Pair Asset to Comms Hub text message for FLTY19 Trad
		And I should see Pairing Successful text message for FLTY19 Trad

	Scenario: Confirming "PPMID Commissioning Successful" FLTY19 Trad
		Given the PPMID Commissioning Successful button is displayed for FLTY19 Trad
		When I click on SUB button for FLTY19 Trad
		Then I should see DEVICE BINDING and COMMISSIONING sec for FLTY19 Trad

	Scenario: Going through "DEVICE BINDING & COMMISSIONING" section FLTY19 Trad
		Given the DEVICE BINDING & COMMISSIONING section for FLTY19 Trad
		When I fill the fields53 and click next for FLTY19 Trad
		Then I should see ENERGY EFFICIENCY INFORMATION section for FLTY19 Trad

	Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section FLTY19 Trad
		Given the ENERGY EFFICIENCY INFORMATION section for FLTY19 Trad
		When I fill the fields54 and click next for FLTY19 Trad
		Then I should see SMART EDUCATION section for FLTY19 Trad

	Scenario: Going through "SMART EDUCATION" section FLTY19 Trad
		Given the SMART EDUCATION section for FLTY19 Trad
		When I fill the fields55 and click next for FLTY19 Trad
		Then I should see SMART LITERATURE LEFT ON SITE section for FLTY19 Trad

	Scenario: Going through "SMART LITERATURE LEFT ON SITE" section FLTY19 Trad
		Given the SMART LITERATURE LEFT ON SITE section for FLTY19 Trad
		When I fill the fields56 and click next for FLTY19 Trad
		Then See CAPTURE CUSTOMER SIGNATURE sec for FLTY19 Trad

	Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section FLTY19 Trad
		Given the CAPTURE CUSTOMER SIGNATURE section for FLTY19 Trad
		When I write signature in Customer Signature for FLTY19 Trad
		And I fill the field57 and Job Complete for FLTY19 Trad
		Then see Job Completed screen for FLTY19 Trad

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist

