Feature: TST62_AbortElecRisk_FLTY19TRAD Workflow

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
		When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

	Scenario: Going through the Reason codes popup
		Given the ELEC Risk AbortReasonCodespopup
		When I click the ELEC Reason and Abort Appointment Job
		Then I should see the ELEC Risk Aborted status for the workorder "SFEFLTY19TRAD" on the appointments page

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist
