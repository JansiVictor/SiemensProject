Feature: TST_092 SF G FLTY18 Trad No Exchange Workflow - Contact made Abort No Access

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

	Scenario: Going through abort scenario
		Given the "Work Order" page for FLTY18TRAD
		When I fill the fields with the value
		Then I should see the Abort Reason Code Pop Up

	Scenario: Going through the Reason codes popup
		Given the AbortReasonCodespopup
		When I click the Not Convenient with Customer Reason and Abort the Job
		Then I should see the Aborted status for the workorder "SFGFLTY18TRAD" on the appointments page


	Scenario: Going through deleting the work order after use
		When I delete workorder after use
		Then workorder should no longer exist