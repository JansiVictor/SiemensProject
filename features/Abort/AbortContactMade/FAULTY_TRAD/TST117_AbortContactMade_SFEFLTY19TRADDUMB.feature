Feature: TST117_AbortContactMade_SFEFLTY19TRADDUMB

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

	Scenario: Going through abort scenario
		Given the "Work Order" page for FLTY19 Trad
		When I fill the fields with the value
		Then I should see the Abort Reason Code Pop Up

	Scenario: Going through the Reason codes popup
		Given the AbortReasonCodespopup
		When I click the Not Convenient with Customer Reason and Abort the Job
		Then I should see the Aborted status for the workorder "SFEFLTY19TRAD" on the appointments page

	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist