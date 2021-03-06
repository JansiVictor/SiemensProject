Feature: TST104_AbortNoAccessSuspend_SFGFLTY18SMETS2NOEXCH

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
		When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
		Then TST03 I should see the Appointment List

	Scenario: Going through Aborting Suspended Job
		Given TST03 the Appointment List window
		When I should click the AbortNoAccessSuspended status for the workorder "SFGFLTY18"
		Then TST03 I should see BE AWARE OF ANY DANGER! section
		And I fill the DoorStep Protocol Values fields to abort suspended job

	Scenario: Going through the Reason codes popup
		Given the AbortReasonCodespopup
		When I click the worknolongerrequired Reason and Abort the Job
		Then I should see the Aborted status for the workorder "SFGFLTY18" on the appointments page

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist