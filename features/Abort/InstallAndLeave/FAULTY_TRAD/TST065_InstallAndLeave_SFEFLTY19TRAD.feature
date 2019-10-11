Feature: SFEFLTY19Trad  - InstallAndLeave Workflow

	Scenario: Post SFEFLTY19TRAD SOAP Request
        Given I post workorder using "xmlrequest/SFEFLTY19TRAD.XML"

	Scenario Outline: Logging in to job's "Work Order" window for FLTY19 Trad
		Given the Login Page for FLTY19 Trad
		When I pass "<Username>" and "<Password>" for FLTY19 Trad
		Then I click Login button for FLTY19 Trad
		And I should see the Appointment List for FLTY19 Trad

		Examples:
			| Username    | Password    |
			| Automation2 | Aut0m4t1on2 |

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
		#####And I click on NEXT button for FLTY19 Trad
		And I click on SUBMIT button for FLTY19 Trad
		Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY19 Trad

	Scenario: Going through "CURRENT IHD/PPMID DETAILS" section for FLTY19 Trad
		Given the CURRENT IHD-PPMID DETAILS section for FLTY19 Trad
		When I fill the field010 with the value010 for FLTY19 Trad
		######And I should see CURRENT METER DETAILS section for FLTY19 Trad		
        Then I should see the page contect display of current meter details for FLTY19 Trad

    Scenario: Going through "CAPTURE CURRENT METER Elec" section for FLTY19 Trad
		Given the CAPTURE CURRENT METER section for FLTY19 Trad
		When I fill capture current meter elec for FLTY19 Trad
		Then I should see the DETERMINE FAULT ACTIVITY section for FLTY19 Trad

	Scenario: Going through "DETERMINE FAULT ACTIVITY" section for FLTY19 Trad
		Given the fltynineteen DETERMINE FAULT ACTIVITY section
        When I fill the fltynineteen field014 with the Value014
        Then I click on fltynineteen CAPTURE PHOTOGRAPHIC EVIDENCE SUSPECTED TAMPERING button
        And I fill the fltynineteen field015 with the Value015
        And I click on fltynineteen OK in Info window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And I should fill InstallAndLeave field16 with the value16
        And I select fltynineteen Elec Meter field
        Then I click on fltynineteen NEXT SECTION butn in determine faulty activity
        And I should see fltynineteen REMOVE METER section

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
		And I should see New Meter Details section for for FLTY20TRAD

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
		When I should fill InstallAndLeave FLTY Commissioning Values
		And I should see InstallLeave Replace CommsHubNoWan section

    Scenario: Going through Replace CommsHubNoWan section
        Given InstallLeave Replace CommsHubNoWan section
        When I fill the EXCH23 InstallLeave Replace CommshubNoWan details fields with values
        Then I click the Gas NMEX Install Submit Button
		Then I should see DEVICE BINDING and COMMISSIONING sec for FLTY19 Trad

	Scenario: Going through "DEVICE BINDING & COMMISSIONING" section FLTY19 Trad
		Given the DEVICE BINDING & COMMISSIONING section for FLTY19 Trad
		When I fill the EXCH23 InstallLeave Binding and commissioning of PPMID fields with values
		Then I should see ENERGY EFFICIENCY INFORMATION section for FLTY19 Trad

	Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section FLTY19 Trad
		Given the ENERGY EFFICIENCY INFORMATION section for FLTY19 Trad
		When I fill the fields54 and click next for FLTY19 Trad
		Then I should see SMART EDUCATION section for FLTY19 Trad

	Scenario: Going through "SMART EDUCATION" section FLTY19 Trad
		Given the SMART EDUCATION section for FLTY19 Trad
		When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
		Then I should see InstallLeave Summary of Job and Smart literature left onsite section

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
        Given the InstallLeave Smart No literature left onsite section
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