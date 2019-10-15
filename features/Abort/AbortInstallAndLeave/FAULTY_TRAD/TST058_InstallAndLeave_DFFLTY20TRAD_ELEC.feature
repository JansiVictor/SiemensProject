Feature: TST058_InstallAndLeave_DFFLTY20TRAD_ELEC

	Scenario: Post DFFLTY20TRAD SOAP Request
		Given I post workorder using "xmlrequest/DFFLTY20TRAD.XML"

	@LoginScenario
	Scenario: Select the Latest workOrder for FLTY20TRAD
		Given the Appointment List window for FLTY20TRAD
		When I click on select button for FLTY20TRAD
		Then I should see Work Order window for FLTY20TRAD

	Scenario: Going through Call Forward for FLTY20TRAD
		Given the "Work Order" window for FLTY20TRAD
		When i see Call Forward or Arrive Button for FLTY20TRAD
		Then I click on CALL FORWARD button for FLTY20TRAD
		Then I should see page contect display for FLTY20TRAD
		And I should see the CUSTOMER CONTACT NUMBER for FLTY20TRAD
		And I should see Contact made field for FLTY20TRAD

	Scenario: Selecting job and setting to depart for FLTY20TRAD
		Given the "Work Order" page for FLTY20TRAD
		When I fill the fields with the value for FLTY20TRAD
		And I click on DEPART button for FLTY20TRAD
		Then I should see Depart for Appointment window for FLTY20TRAD

	Scenario: Approving "Depart for Appointment" job for FLTY20TRAD
		Given Appointment details for FLTY20TRAD
		When I click on OK button for FLTY20TRAD
		Then I should see ARRIVE button for FLTY20TRAD
		And I should see DOORSTEP PROTOCOL tab activated for FLTY20TRAD

	Scenario: Set job to Arrived status for FLTY20TRAD
		Given the "WorkOrder" page for FLTY20TRAD
		When I click on ARRIVE button for FLTY20TRAD
		Then I should see Arrival Time details for FLTY20TRAD
		And I should see BE AWARE OF ANY DANGER! section for FLTY20TRAD

	Scenario: Going through "BE AWARE OF ANY DANGER!" section for FLTY20TRAD
		Given the BE AWARE OF ANY DANGER! section for FLTY20TRAD
		When I fill the DoorStep Protocol fields with the value for FLTY20TRAD
		And I click on ON SITE button for FLTY20TRAD
		Then I should see RISK ASSESSMENT tab activated for FLTY20TRAD
		And I should see INITIAL RISK ASSESSMENT section for FLTY20TRAD

	Scenario: Going through "INITIAL RISK ASSESSMENT" for FLTY20TRAD
		Given the INITIAL RISK ASSESSMENT section for FLTY20TRAD
		When I fill the initialRisk field with the values for FLTY20TRAD
		Then I should see RISK ASSESSMENT ELEC section for FLTY20TRAD

	Scenario: Going through "RISK ASSESSMENT - ELEC" section for FLTY20TRAD
		Given the RISK ASSESSMENT - ELEC section for FLTY20TRAD
		When I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY20TRAD
		And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY20TRAD
		And I click on NEXT SECTION button for FLTY20TRAD
		Then I should see the RISK ASSESSMENT - GAS section for FLTY20TRAD

	Scenario: Going through "RISK ASSESSMENT - GAS" for FLTY20TRAD
		Given the RISK ASSESSMENT - GAS section for FLTY20TRAD
		When I fill the field05 with the value05 for FLTY20TRAD
		Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE button for FLTY20TRAD
		And I fill the field06 with the value06 for FLTY20TRAD
		And I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY20TRAD
	
	Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION" section for FLTY20TRAD
		Given the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY20TRAD
		When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button elec for FLTY20TRAD
		Then I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY20TRAD

	Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section for FLTY20TRAD
		Given the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY20TRAD
		When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button gas for FLTY20TRAD
		Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for FLTY20TRAD



	Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section for FLTY20TRAD
		Given the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY20TRAD
		When I fill the INITIAL POLARITY CHECK field with the values for FLTY20TRAD
		Then I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY20TRAD
		Then I fill the Socket Found field with the values for FLTY20TRAD
		And I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY20TRAD

	Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for FLTY20TRAD
		Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY20TRAD
		When I fill the METER AND CUT OUT fields with the values for FLTY20TRAD
		And I click on NEXT button for FLTY20TRAD
		And I click on SUBMIT button for FLTY20TRAD
		Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY20TRAD

	Scenario: Going through "CURRENT IHD/PPMID DETAILS" section for FLTY20TRAD
		Given the CURRENT IHD-PPMID DETAILS section for FLTY20TRAD
		When I fill the field010 with the value010 for FLTY20TRAD
		Then I should see the page contect display of current meter details for FLTY20TRAD


	Scenario: Going through "CURRENT METER DETAILS - GAS" section for FLTY20TRAD
		Given the CURRENT METER DETAILS - GAS section for FLTY20TRAD
		When I fill the field with the value gas for FLTY20TRAD
		Then I should see the CAPTURE CURRENT METER  section for FLTY20TRAD

	Scenario: Going through "CAPTURE CURRENT METER Elec" section for FLTY20TRAD
		Given the CAPTURE CURRENT METER section for FLTY20TRAD
		When I fill capture current meter elec for FLTY20TRAD
		Then I should see the DETERMINE FAULT ACTIVITY section for FLTY20TRAD


	Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY20TRAD
		Given FTwenty the DETERMINE FAULT ACTIVITY section
		When FTwenty I fill the field14 with the value014
		Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
		And FTwenty I fill the field15 with the value15
		And FTwenty I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
		And I should fill InstallAndLeave field16 with the value16
		And FTwenty I select Elec Meter field
		And FTwenty I click on NEXT SECT button
		And I should see fltynineteen REMOVE METER section

	Scenario: Going through "REMOVE METER" section
		Given the fltynineteen REMOVE METER section
		When I fill the FLTY InstallAndLeave Remove meter values
		And I clk fltynineteen remove meter NEXT SECTION button
		Then I should see fltynineteen CONFIRM ELECTRIC ASSET REMOVAL section

	Scenario: Going through "CONFIRM ELECTRIC ASSET REMOVAL" section
		Given the fltynineteen CONFIRM ELEC ASSET REMOVAL section
		When I fill the fltynineteen field024 with the Value024
		And Click ok on asset removal
		Then I click the Gas NMEX Install Submit Button
		And I should see New Meter Details section for for FLTY20TRAD

	Scenario: Going through "New Meter details" section for FLTY20TRAD
		Given the  New Meter details section for FLTY20TRAD
		When I fill the New Meter details fields with values for FLTY20TRAD
		Then I should see ADDITIONAL ELECTRICITY CHECKS section for FLTY20TRAD

	Scenario: Going through Additional Electricity Tests and Checks section for FLTY20TRAD
		Given the the ADDITIONAL ELECTRICITY CHECKS details section for FLTY20TRAD
		When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for FLTY20TRAD

	Scenario: Going through Initial Elec Meter Reading of new meter depending on the number of Registers and dials section for FLTY20TRAD
		Given Initial Meter Reading of new meter depending on the number of Registers and dials section for FLTY20TRAD
		When I fill the Initial Meter Reading of new meter details fields with values for FLTY20TRAD
		Then I should see Post Installation Check Section for FLTY20TRAD

	Scenario: Going through Perform Post Installation Checks section for FLTY20TRAD
		Given Perform Post Installation Checks section for FLTY20TRAD
		When I fill the Perform Post Installation Checks details fields with values for FLTY20TRAD
		Then I should see Commission Bind the Comms hub to the WAN section for FLTY20TRAD

	Scenario: Going through Commission Bind the Comms hub to the WAN section for FLTY20TRAD
		Given Commission Bind the Comms hub to the WAN section for FLTY20TRAD
		When I should fill InstallAndLeave FLTY Commissioning Values
		And I should see InstallLeave Replace CommsHubNoWan section

	Scenario: Going through Replace CommsHubNoWan section
		Given InstallLeave Replace CommsHubNoWan section
		When I fill the EXCH23 InstallLeave Replace CommshubNoWan details fields with values
		Then I click the Gas NMEX Install Submit Button

	Scenario: Going through "DEVICE BINDING & COMMISSIONING" section

		Given the DEVICE BINDING & COMMISSIONING section for FLTY20TRAD
		When I fill the EXCH23 InstallLeave Binding and commissioning of PPMID fields with values
		Then I should see ENERGY EFFICIENCY INFORMATION section for FLTY20TRAD

	Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
		Given the ENERGY EFFICIENCY INFORMATION section for FLTY20TRAD
		When I fill the fields54 and click next for FLTY20TRAD
		Then I should see SMART EDUCATION section for FLTY20TRAD

	Scenario: Going through "SMART EDUCATION" section
		Given the SMART EDUCATION section for FLTY20TRAD
		When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
		Then I should see InstallLeave Summary of Job and Smart literature left onsite section

	Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
		Given the InstallLeave Smart No literature left onsite section
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
