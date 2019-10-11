Feature: TST068_AbortInitialRisk_SFEFLTY18Trad

	Scenario: Post SFGFLTY18TRAD SOAP Request
		Given I post workorder using "xmlrequest/SFGFLTY18TRAD.XML"

	@LoginScenario
	Scenario: Select the Latest workOrder for FLTY18TRAD
		Given the Appointment List window for FLTY18TRAD
		When I click on select button for FLTY18TRAD
		Then I should see Work Order window for FLTY18TRAD

	Scenario: Going through Call Forward for FLTY18TRAD
		Given the "Work Order" window for FLTY18TRAD
		When i see Call Forward or Arrive Button for FLTY18TRAD
		Then I click on CALL FORWARD button for FLTY18TRAD
		Then I should see page contect display for FLTY18TRAD
		And I should see the CUSTOMER CONTACT NUMBER for FLTY18TRAD
		And I should see Contact made field for FLTY18TRAD

	Scenario: Selecting job and setting to depart for FLTY18TRAD
		Given the "Work Order" page for FLTY18TRAD
		When I fill the fields with the value for FLTY18TRAD
		And I click on DEPART button for FLTY18TRAD
		Then I should see Depart for Appointment window for FLTY18TRAD

	Scenario: Approving "Depart for Appointment" job for FLTY18TRAD
		Given Appointment details for FLTY18TRAD
		When I click on OK button for FLTY18TRAD
		Then I should see ARRIVE button for FLTY18TRAD
		And I should see DOORSTEP PROTOCOL tab activated for FLTY18TRAD

	Scenario: Set job to Arrived status for FLTY18TRAD
		Given the "WorkOrder" page for FLTY18TRAD
		When I click on ARRIVE button for FLTY18TRAD
		Then I should see Arrival Time details for FLTY18TRAD
		And I should see BE AWARE OF ANY DANGER! section for FLTY18TRAD

	Scenario: Going through "BE AWARE OF ANY DANGER!" section for FLTY18TRAD
		Given the BE AWARE OF ANY DANGER! section for FLTY18TRAD
		When I fill the DoorStep Protocol fields with the value for FLTY18TRAD
		And I click on ON SITE button for FLTY18TRAD
		Then I should see RISK ASSESSMENT tab activated for FLTY18TRAD
		And I should see INITIAL RISK ASSESSMENT section for FLTY18TRAD

	Scenario: Going through "INITIAL RISK ASSESSMENT" for FLTY18TRAD
		Given the INITIAL RISK ASSESSMENT section for FLTY18TRAD
		When I fill the Abort Initial Risk Fields with Values
		When I click the Unabletoturnoff Reason and Abort the Job
		Then I should see the Aborted status for the workorder "SFGFLTY18TRAD" on the appointments page

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist