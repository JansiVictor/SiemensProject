Feature: Login into Siemen Application

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFGFLTY18TRAD
When I pass "<Username>" and "<Password>" For SFGFLTY18TRAD
Then I click Login button For SFGFLTY18TRAD
And I should see the Appointment List For SFGFLTY18TRAD

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFGFLTY18TRAD
When I click on select button For SFGFLTY18TRAD
Then I should see Work Order window For SFGFLTY18TRAD

Scenario: Going through Call Forward
Given the "Work Order" window For SFGFLTY18TRAD
When i see Call Forward or Arrive Button For SFGFLTY18TRAD
Then I click on CALL FORWARD button For SFGFLTY18TRAD
Then I should see page contect display For SFGFLTY18TRAD
And I should see the CUSTOMER CONTACT NUMBER For SFGFLTY18TRAD
And I should see Contact made field For SFGFLTY18TRAD

Scenario: Selecting job and setting to depart
Given the SFGFLTY18TRAD WorkOrder Page
When I fill the SFGFLTY18TRAD fields with the value 
And I click on SFGFLTY18TRAD DEPART button
Then I should see SFGFLTY18TRAD Depart for Appointment window 
And I should see the SFGFLTY18TRAD correct MPAN details
And I should see the SFGFLTY18TRAD correct Customer Name details
And I should see the SFGFLTY18TRAD correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFGFLTY18TRAD
When I click on OK button For SFGFLTY18TRAD	
And I should see ARRIVE button For SFGFLTY18TRAD
And I should see DOORSTEP PROTOCOL tab activated For SFGFLTY18TRAD

Scenario: Set job to Arrived status
Given the SFGFLTY18TRAD WorkOrder Page
When I click on ARRIVE button For SFGFLTY18TRAD	
Then I should see Arrival Time details For SFGFLTY18TRAD
And I should see SFGFLTY18TRAD BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFGFLTY18TRAD BE AWARE OF ANY DANGER! section 
When I fill the SFGFLTY18TRAD DoorStep Protocol fields with the value
And I click on SFGFLTY18TRAD ON SITE button 	
Then I should see SFGFLTY18TRAD RISK ASSESSMENT tab activated
And I should see SFGFLTY18TRAD INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFGFLTY18TRAD INITIAL RISK ASSESSMENT section
When I fill the SFGFLTY18TRAD initialRisk field with the values
Then I should see SFGFLTY18TRAD RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
Given the SFGFLTY18TRAD RISK ASSESSMENT - ELEC section
When I fill the SFGFLTY18TRAD RISK ASSESSMENT - ELEC fields with the values
And I click on SFGFLTY18TRAD CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on SFGFLTY18TRAD NEXT SECTION button
Then I should see SFGFLTY18TRAD Initial Risk Assessment for GAS section

Scenario: Going through "RISK ASSESSMENT - GAS" section	
Given the SFGFLTY18TRAD RISK ASSESSMENT - GAS section
When I fill the SFGFLTY18TRAD RISK ASSESSMENT - GAS fields with the values
Then I should see SFGFLTY18TRAD CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION"
Given the SFGFLTY18TRAD CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
When I click on SFGFLTY18TRAD CAPTURE PHOTO OF CURRENT FULL GAS METER INSTALLATION button
Then I should see SFGFLTY18TRAD INITIAL POLARITY CHECK - MARTINDALE TEST section

Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the SFGFLTY18TRAD INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the SFGFLTY18TRAD INITIAL POLARITY CHECK field with the values
And I click on SFGFLTY18TRAD CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the SFGFLTY18TRAD Socket Found field with the values
Then I should see SFGFLTY18TRAD INITIAL POLARITY CHECK AT METER AND CUT OUT section 

Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the SFGFLTY18TRAD INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the SFGFLTY18TRAD METER AND CUT OUT fields with the values
#for new WO this is not req, for existing one required
And I click on SFGFLTY18TRAD SUBMIT button
Then I should see SFGFLTY18TRAD current PPMID section

Scenario: Going through "Check the current PPMID section details"     	
Given the SFGFLTY18TRAD current PPMID detailssection  
When I fill the SFGFLTY18TRAD current PPMID details fields with the values
Then I should see SFGFLTY18TRAD CURRENT GAS METER DETAILS section

Scenario: Going through "Check the current GAS meter details" section     	
Given the Check the SFGFLTY18TRAD current GAS meter detailssection  
When I fill the SFGFLTY18TRAD current GAS meter details fields with the values
Then I should see SFGFLTY18TRAD DETERMINE FAULT ACTIVITY section

Scenario: Going through "Check determine fault activity" section     	
Given the SFGFLTY18TRAD DETERMINE FAULT ACTIVITY section  
When I fill the SFGFLTY18TRAD determine faulty activity fields with values
Then I should click SFGFLTY18TRAD Submit button to complete the job section
And I should see SFGFLTY18TRAD Energy Efficiency information section

Scenario: Going through "Energy Efficiency information"
Given the SFGFLTY18TRAD Energy Efficiency information section 
When I fill the SFGFLTY18TRAD Energy Efficiency information fields with values
Then I should see SFGFLTY18TRAD Summary of Job section

Scenario: Going through Summary section 
Given the SFGFLTY18TRAD Summary of Job section
When I fill the SFGFLTY18TRAD summary fields with values
Then I should finally submit SFGFLTY18TRAD job
And I should see the Appointment List For SFGFLTY18TRAD