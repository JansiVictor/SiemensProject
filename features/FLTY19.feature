Feature: Login into Siemen Application

Scenario Outline: Logging in to job's "Work Order" window
	Given the Login Page
	When I pass "<Username>" and "<Password>"
	Then I click Login button
	And I should see the Appointment List 

	Examples:
	| Username 		| Password      |
	|   Automation2 |  Aut0m4t1on2  |

Scenario: Select the Latest workOrder
	Given the Appointment List window
	When I click on select button
	Then I should see Work Order window

Scenario: Going through Call Forward
	Given the "Work Order" window
	When i see Call Forward or Arrive Button
	Then I click on CALL FORWARD button
	Then I should see page contect display
	And I should see the CUSTOMER CONTACT NUMBER
	And I should see Contact made field

Scenario: Selecting job and setting to depart
	Given the "Work Order" page
	When I fill the fields with the value
	And I click on DEPART button 
	Then I should see Depart for Appointment window
	And I should see the correct MPAN details
	And I should see the correct Customer Name details
	And I should see the correct PostCode details