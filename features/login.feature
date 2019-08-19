Feature: Login into Siemen Application

@CucumberScenario
 Scenario Outline: Logging in to job's "Work Order" window
  Given the Login Page
  When I pass "<Username>" and "<Password>"
   Then I click Login button
   And I should see the Appointment List 
  
  	Examples:
  	| Username 		| Password      |
  	|   Automation2 |  Aut0m4t1on2  |
  	|   E0000167    |  000Password  |
	|   E0000022    |  000Password  |
	|   E0000066    |  111Siemens   |
	|   111011      |  111Siemens   |