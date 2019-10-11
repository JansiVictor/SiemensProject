Feature: TST_051 DF FLTY20 Trad - SMETS2 Workflow - Contact made Abort No Access

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

	Scenario: Going through abort scenario
		Given the "Work Order" page for FLTY20TRAD
		When I fill the fields with the value
		Then I should see the Abort Reason Code Pop Up

	Scenario: Going through the Reason codes popup
		Given the AbortReasonCodespopup
		When I click the Not Convenient with Customer Reason and Abort the Job
		Then I should see the Aborted status for the workorder "DFFLTY20TRAD" on the appointments page

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist