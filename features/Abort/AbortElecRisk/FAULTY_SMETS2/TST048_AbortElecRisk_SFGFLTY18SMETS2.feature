Feature: TST048_AbortElecRisk_SFGFLTY18SMETS2.feature

	Scenario: Post SFGFLTY18 SOAP Request
		Given I post workorder using "xmlrequest/SFGFLTY18.XML"

	@LoginScenario
	Scenario: Select the Latest workOrder
		Given TST03 the Appointment List window
		When TST03 I click on select button
		Then TST03 I should see Work Order window

	Scenario: Going through Call Forward
		Given TST03 the "Work Order" window
		When TST03 i see Call Forward or Arrive Button
		Then TST03 I click on CALL FORWARD button
		Then TST03 I should see page contect display
		And TST03 I should see the CUSTOMER CONTACT NUMBER
		And TST03 I should see Contact made field

	Scenario: Selecting job and setting to depart
		Given TST03 the "Work Order" page
		When TST03 I fill the fields with the value
		And TST03 I click on DEPART button
		Then TST03 I should see Depart for Appointment window

	Scenario: Approving "Depart for Appointment" job
		Given TST03 Appointment details
		When TST03 I click depart OK button
		Then TST03 I should see ARRIVE button
		And TST03 I should see DOORSTEP PROTOCOL tab activated

	Scenario: Set job to Arrived status
		Given TST03 the "WorkOrder" page
		When TST03 I click on ARRIVE button
		Then TST03 I should see Arrival Time details
		And TST03 I should see BE AWARE OF ANY DANGER! section

	Scenario: Going through "BE AWARE OF ANY DANGER!" section
		Given TST03 the BE AWARE OF ANY DANGER! section
		When TST03 I fill the DoorStep Protocol fields with the value
		And TST03 I click on ON SITE button
		Then TST03 I should see RISK ASSESSMENT tab activated
		And TST03 I should see INITIAL RISK ASSESSMENT section

	Scenario: Going through "INITIAL RISK ASSESSMENT"
		Given TST03 the INITIAL RISK ASSESSMENT section
		When TST03 I fill the initialRisk field with the values
		Then TST03 I should see INFO window

	Scenario: Going through "INFO" window
		Given TST03 the INFO window with the text
		Then TST03 I should see RISK ASSESSMENT ELEC section

	Scenario: Going through "RISK ASSESSMENT - ELEC" section
		Given TST03 the RISK ASSESSMENT - ELEC section
		When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

	Scenario: Going through the Reason codes popup
		Given the ELEC Risk AbortReasonCodespopup
		When I click the ELEC Reason and Abort Appointment Job
		Then I should see the ELEC Risk Aborted status for the workorder "SFGFLTY18" on the appointments page

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist
