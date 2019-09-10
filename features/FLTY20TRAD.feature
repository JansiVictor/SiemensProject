Feature: DF FLTY20 Trad  - SMETS2 Workflow

	Scenario Outline: Logging in to job's "Work Order" window for FLTY20TRAD
		Given the Login Page for FLTY20TRAD
		When I pass "<Username>" and "<Password>" for FLTY20TRAD
		Then I click Login button for FLTY20TRAD
		And I should see the Appointment List for FLTY20TRAD

		Examples:
			| Username    | Password    |
			| Automation2 | Aut0m4t1on2 |

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
		Then I should see INFO window for FLTY20TRAD

	Scenario: Going through "INFO" window for FLTY20TRAD
		Given the INFO window with the text for FLTY20TRAD
		When I click on OK button for FLTY20TRAD
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
	#---------------------------------------------------------------------------------------
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
		#And I should see CURRENT METER DETAILS - GAS section for FLTY20TRAD
		Then I should see the page contect display of current meter details for FLTY20TRAD



	Scenario: Going through "CURRENT METER DETAILS - GAS" section for FLTY20TRAD
		Given the CURRENT METER DETAILS - GAS section for FLTY20TRAD
		When I fill the field with the value gas for FLTY20TRAD
		Then I should see the CAPTURE CURRENT METER  section for FLTY20TRAD

	Scenario: Going through "CAPTURE CURRENT METER Elec" section for FLTY20TRAD
		Given the CAPTURE CURRENT METER section for FLTY20TRAD
		When I fill capture current meter elec for FLTY20TRAD
		Then I should see the DETERMINE FAULT ACTIVITY section for FLTY20TRAD



	# 	Scenario: Going through "CURRENT METER DETAILS - GAS" section for FLTY20TRAD
	# 		Given the CURRENT METER DETAILS - GAS section for FLTY20TRAD
	# 		When I fill the field with the value for FLTY20TRAD
	# 		Then I should see CURRENT COMMS HUB DETAILS section for FLTY20TRAD
	# 		And I should see the page contect display for FLTY20TRAD



	Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY20TRAD
		Given the DETERMINE FAULT ACTIVITY section for FLTY20TRAD
		When I fill values elec and gas meter Supply for FLTY20TRAD
		Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY20TRAD
		And I fill for SMET2 Asset Installed for FLTY20TRAD
		And I fill do you need exchange asset for FLTY20TRAD
		And I fill equipment reposition for FLTY20TRAD
		And I select SMETS2 Offered for FLTY20TRAD
		And I click on NEXT SECT button for FLTY20TRAD
		And I should see PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY20TRAD

	Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section for FLTY20TRAD
		Given the PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY20TRAD
		When I fill the field17 with the value17 for FLTY20TRAD
		Then I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button for FLTY20TRAD
		And I fill the field18 with the value18 for FLTY20TRAD
		And I see Gas Tightness Test Completed field as FAIL for FLTY20TRAD
		And I fill the field19 with the value19 for FLTY20TRAD
		And I should see REMOVE GAS METER section for FLTY20TRAD

	Scenario: Going through "REMOVE GAS METER" section for FLTY20TRAD
		Given the REMOVE GAS METER section for FLTY20TRAD
		When I fill the field23 with the value23 for FLTY20TRAD
		Then I click on NEXT button in removing gas meter for FLTY20TRAD
		And I should see CONFIRM GAS ASSET REMOVAL section for FLTY20TRAD

	Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section for FLTY20TRAD
		Given the CONFIRM GAS ASSET REMOVAL section for FLTY20TRAD
		When I fill the field24 with the value24 for FLTY20TRAD
		Then I click on OK btn in Updated window with the text Asset successfully added to Returns list for FLTY20TRAD
		And I should see REMOVE ELEC ASSET REMOVAL section for FLTY20TRAD


	# Elect meter removal

	Scenario: Going through "REMOVE ELEC METER" section for FLTY20TRAD
		Given the REMOVE ELEC ASSET REMOVAL section for FLTY20TRAD
		When I fill the values for elec removal FLTY20TRAD
		Then I click on NEXT button in removing elec meter for FLTY20TRAD
		And I should see CONFIRM ELEC ASSET REMOVAL section for FLTY20TRAD

	Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section for FLTY20TRAD
		Given the CONFIRM ELEC ASSET REMOVAL section for FLTY20TRAD
		When I fill values for FLTY20TRAD
		Then I click on OK btn in Updated window with the text Elec Asset successfully added to Returns list for FLTY20TRAD
		And I should click on next section for FLTY20TRAD
		And I should click on submit button for FLTY20TRAD

		And I should see INSTALL COMMS HUB section for FLTY20TRAD


	Scenario: Going through "INSTALL COMMS HUB" section for FLTY20TRAD
		Given the INSTALL COMMS HUB sec for FLTY20TRAD
		When I fill the Ins comms hub fields and capture photo EVIDENCE for FLTY20TRAD
		Then I should see New Meter Details section for for FLTY20TRAD

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
		When I fill the Commission Bind the Comms hub to the WAN details fields with values for FLTY20TRAD
		Then I should see Electric Install and Commisioning for FLTY20TRAD

	Scenario: Going through Perform DCC Message Creation for EICOM section for FLTY20TRAD
		Given Perform DCC Message Creation for EICOM section for FLTY20TRAD
		When I fill the Perform DCC Message Creation for EICOM details fields with values for FLTY20TRAD


#------------------------------------------------------------------------



	

	# Scenario: Going through " SMETS2 New Meter details " GAS section for FLTY20TRAD
	# 	Given the  New Meter details section for FLTY20TRAD
	# 	When I fill the New Meter details fields with values Gas for FLTY20TRAD
	# 	Then I should see Gas Initial Meter Reading section for FLTY20TRAD

	Scenario: Going through "SMETS2 Initial New Meter details" GAS section for FLTY20TRAD
		Given the Gas Initial Meter Reading section for FLTY20TRAD
		When I fill the Gas Initial Meter Reading details fields with values for FLTY20TRAD
		Then I should see Gas Install Kit section for FLTY20TRAD

	Scenario: Going through "Install Kit" GAS section for FLTY20TRAD
		Given the Gas Install Kit section for FLTY20TRAD
		When I fill the Gas Install Kit section fields with values for FLTY20TRAD
		Then I should see Perform Post Installation GAS Checks section for FLTY20TRAD

	Scenario: Going through "Post Installation GAS" GAS section for FLTY20TRAD
		Given the Post Installation GAS section for FLTY20TRAD
		When I fill the Post Installation GAS section fields with values for FLTY20TRAD
		Then I should see GICOM Message section for FLTY20TRAD

	Scenario: Going through "GICOM Message" GAS section for FLTY20TRAD
		Given the GICOM Message section for FLTY20TRAD
		When I fill the GICOM Message section fields with values for FLTY20TRAD
		Then I should see Gas Appliance Safety Checks section for FLTY20TRAD
	
	Scenario: Going through "Gas Appliance Safety Checks" GAS section for FLTY20TRAD
		Given the Gas Appliance Safety Checks section for FLTY20TRAD
		When I fill the Gas Appliance Safety Checks section fields with values and Submit for FLTY20TRAD
		Then I should see SMETS PPMID section for FLTY20TRAD

	Scenario: Going through "SMETS XIPMD" GAS section for FLTY20TRAD
		Given the SMETS XIPMD section for FLTY20TRAD
		When I fill the SMETS XIPMD section fields with values for FLTY20TRAD
		Then I should see Check Binding and commissioning of PPMID section for FLTY20TRAD



	Scenario: Going through "Check Binding and commissioning of PPMID" GAS section for FLTY20TRAD
		Given the Binding and commissioning of PPMID section for FLTY20TRAD
		When I fill the Binding and commissioning of PPMID fields with values for FLTY20TRAD
		Then I should see configuration of all meters installed section for FLTY20TRAD



	Scenario: Going through "configuration of all meters installed " GAS section for FLTY20TRAD
		Given the configuration of all meters installed  section for FLTY20TRAD
		When I fill the configuration of all meters installed  fields with values for FLTY20TRAD
		Then I should see Energy Efficiency information section for FLTY20TRAD



	Scenario: Going through "Energy Efficiency information" GAS section for FLTY20TRAD
		Given the Energy Efficiency information  section for FLTY20TRAD
		When I fill the Energy Efficiency information fields with values for FLTY20TRAD
		Then I should see Perform Smart Meter Education and Demonstration section for FLTY20TRAD



	Scenario: Going through "Perform Smart Meter Education and Demonstration " GAS section for FLTY20TRAD
		Given the Perform Smart Meter Education and Demonstration section for FLTY20TRAD
		When I fill the Perform Smart Meter Education and Demonstration  fields with values for FLTY20TRAD
		Then I should see Summary of Job and receive Customer Signature section for FLTY20TRAD



	Scenario: Going through "Summary of Job and receive Customer Signature" GAS section for FLTY20TRAD
		Given the Summary of Job and receive Customer Signature section for FLTY20TRAD
		When I fill the Summary of Job and receive Customer Signaturefields with values for FLTY20TRAD
		Then I should see Submit button to complete the job section for FLTY20TRAD



# # 	Scenario: Going through "REMOVE IHD/PPMID" section
# # 		Given the REMOVE IHD-PPMID section
# # 		When I fill the field20 with the value20
# # 		Then I click on OK button in Info window with the text Ensure IHD is Powered On
# # 		Then I fill the field21 with the value21
# # 		Then I click on NEXT SECTION button in remove IHD
# # 		And I should see SEND MESSAGE IHD-PPMID section

# # 	Scenario: Going through "SEND MESSAGE IHD / PPMID" section
# # 		Given the SEND MESSAGE IHD-PPMID section
# # 		When I click on Send Message IHD-PPMID button
# # 		Then I should see Awaiting Response button

# # 	Scenario: Waiting "AWAITING RESPONSE"
# # 		Given the Awaiting Response button
# # 		When I wait for the button to disappear
# # 		Then I should see PPMID Removal Successful button
# # 		And I should see Request Sent Successfully text message
# # 		And I should see Asset Unjoined text message

# # 	Scenario: Confirming "PPMID Removal Successful"
# # 		Given the PPMID Removal Successful button is displayed
# # 		When I click on PPMID Removal Successful button
# # 		Then I should see CONFIRM IHD-PPMID ASSET REMOVAL section

# # 	Scenario: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section
# # 		Given the CONFIRM IHD-PPMID ASSET REMOVAL section
# # 		When I fill the field22 with the value22
# # 		And I click on OK button in Updated window with the text Asset successfully added to Returns list
# # 		Then I should see REMOVE GAS METER section



# # 	Scenario: Going through "SEND MESSAGE GMREM" section
# # 		Given the SEND MESSAGE GMREM section
# # 		When I click on Send Message GMREM button
# # 		Then I should see Awaiting Response button in GMREM

# # 	Scenario: Waiting "AWAITING RESPONSE"
# # 		Given the Awaiting Response btn in Send GMREM
# 		When I wait for the btn to disappear in GMREM
# 		Then I should see Removal Successful button
# 		And I should see GMREM Request Sent Successfully txt message
# 		And I should see OK to Remove Asset text message

# 	Scenario: Confirming "Removal Successful"
# 		Given the Removal Successful button is displayed
# 		When I click on Removal Successful button


# 	Scenario: Going through "REMOVE COMMS HUB" section
# 		Given the REMOVE COMMS HUB section
# 		When I fill the field027 with the value27
# 		Then I click on NEXT SEC button from Remove Comms Hub
# 		And I should see CONFIRM COMMS HUB REMOVAL section

# 	Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
# 		Given the CONFIRM COMMS HUB REMOVAL section
# 		When I fill the field28 with the value28
# 		And I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step
# 		Then I click on SUBMIT btn from confirm comms hub removal
# 		And I should see INSTALL COMMS HUB section

# 	Scenario: Going through "INSTALL COMMS HUB" section
# 		Given the INSTALL COMMS HUB sec
# 		When I fill the Ins comms hub fields and capture photo EVIDENCE
# 		Then I should see SEND MSG XCHUB section

# 	Scenario: Continuing "SEND MESSAGE XCHUB" section
# 		Given the SEND MESSAGE XCHUB section
# 		When I click on Send Message XCHUB button
# 		Then I should see XCHUB Awaiting Response butn

# 	Scenario: Waiting "AWAITING RESPONSE"
# 		Given the Awaiting Response butn XCHUB
# 		When I wait for the butn to disappear XCHUB
# 		Then I should see Removal Successful butn XCHUB
# 		And I should see Request Sent Successfully text msg XCHUB
# 		And I should see Whitelist transfer completed check LED indication is correct text message

# 	Scenario: Confirming "Removal Successful"
# 		Given the Removal Successful butn is displayed
# 		When I click on Removal Successful butn
# 		Then I should see NEW GAS METER DETAILS section

#     Scenario: Going through "NEW GAS METER DETAILS" section
# 		Given the NEW GAS METER DETAILS section
# 		When I fill the fields and values for New gas meter details
# 		Then I should see NEW REGULATOR section

# 	Scenario: Going through "NEW REGULATOR" section
# 		Given the NEW REGULATOR section
# 		When I fill the fields and values for new regulator section
# 		Then I should see GAS INITIAL METER READING section

# 	Scenario: Going through "GAS INITIAL METER READING" section
# 		Given the GAS INITIAL METER READING section
# 		When I fill the fields with values Gas initial meter reading
# 		Then I should see INSTALL KIT section

# 	Scenario: Going through "Install Kit " GAS section
# 		Given the Gas Install Kit gas section
# 		When I fill the Gas Install Kit gas section fields with values
# 		Then I should see Perform Post Installation GAS Checks sec

# 	Scenario: Going through "Post Installation GAS" GAS section
# 		Given the Post Installation GAS sec
# 		When I fill the Post Installation GAS sec fields with values
# 		Then I should see GICOM Message sec

# 	Scenario: Going through "GAS INSTALL & COMMISSIONING" section
# 		Given the GAS INSTALL & COMMISSIONING sec
# 		When I click on Send Message GICOM butn
# 		Then I should see Awaiting Response butn

# 	Scenario: Waiting "AWAITING RESPONSE"
# 		Given the Awaiting Response butn after gas install
# 		When I wait for the button to disappear after post install
# 		Then I should see Commissioning Successful button
# 		And I should see Request Sent Successfully txt message
# 		And I should see Pair Asset to Comms Hub text message
# 		And I should see DCC Handover Requested text message
# 		And I should see Device Clock Synchronised text message
# 		And I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message
# 		And I should see DCC Handover Requested for GPF Device text message
# 		And I should see Joins are being Initiated text message


# 	Scenario: Confirming "Commissioning Successful"
# 		Given the Commissioning Successful button is displayed
# 		When I click on Commissioning Successful button
# 		Then I should see GAS APPLIANCE SAFETY CHECKS section


# 	Scenario: Going through "Gas Appliance Safety Checks" GAS section
# 		Given the Gas Appliance Safety Checks sec
# 		When I fill the Gas Appliance Safety Checks section fields with values and Sub
# 		Then I should see SMETS PPMID sec

# 	Scenario: Going through "INSTALL PPMID" section
# 		Given the "INSTALL PPMID" section
# 		When I fill the fields for Install PPMID
# 		Then I should see PPMID COMMISSIONING section


# 	Scenario: Going through "PPMID COMMISSIONING" section
# 		Given the PPMID COMMISSIONING section
# 		When I click on Send Message IHD-PPMID butn
# 		Then I should see PPMID Awaiting Response butn


# 	Scenario: Waiting "AWAITING RESPONSE"
# 		Given the Awaiting Response butn after ppmid commisioning
# 		When I wait for the button to disappear after PPMID Commisioning
# 		Then I should see PPMID Commissioning Successful button
# 		And I should see PPMID Request Sent Successfully txt message
# 		And I should see PPMID Pair Asset to Comms Hub text message
# 		And I should see Pairing Successful text message

# Scenario: Confirming "PPMID Commissioning Successful"
# 	Given the PPMID Commissioning Successful button is displayed
# 	When I click on SUB button
# 	Then I should see DEVICE BINDING and COMMISSIONING sec








