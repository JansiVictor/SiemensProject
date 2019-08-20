	Feature: Login into Siemen Application

Scenario Outline: Logging in to job's "Work Order" window
	Given the Login Page
	When I pass "<Username>" and "<Password>"
	Then I click Login button
	And I should see the Appointment List 

	Examples:
	| Username 		| Password      |
	|  E0000022 |  000Password  |

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

Scenario: Approving "Depart for Appointment" job
	And "Appointment" details
	When I click on OK button  	
	And I should see ARRIVE button
	And I should see DOORSTEP PROTOCOL tab activated

Scenario: Set job to Arrived status
	Given the "WorkOrder" page
	When I click on ARRIVE button  	
	Then I should see Arrival Time details
	And I should see BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
	Given the BE AWARE OF ANY DANGER! section 
	When I fill the DoorStep Protocol fields with the value
	And I click on ON SITE button 	
	Then I should see RISK ASSESSMENT tab activated
	And I should see INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
	Given the INITIAL RISK ASSESSMENT section
	When I fill the initialRisk field with the values
	Then I should see INFO window

Scenario: Going through "INFO" window   
	Given the INFO window with the text
	#When I click on OK button 
	Then I should see RISK ASSESSMENT ELEC section 

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
	Given the RISK ASSESSMENT - ELEC section
	When I fill the RISK ASSESSMENT - ELEC fields with the values
	And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
	And I click on NEXT SECTION button
	#Then I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section 