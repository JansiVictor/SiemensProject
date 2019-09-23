Feature: SFEFLTY19 Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFEFLTY19
When I pass "<Username>" and "<Password>" For SFEFLTY19
Then I click Login button For SFEFLTY19
And I should see the Appointment List For SFEFLTY19

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFEFLTY19
When I click on select button For SFEFLTY19
Then I should see Work Order window For SFEFLTY19

Scenario: Going through Call Forward
Given the "Work Order" window For SFEFLTY19
When i see Call Forward or Arrive Button For SFEFLTY19
Then I click on CALL FORWARD button For SFEFLTY19
Then I should see page contect display For SFEFLTY19
And I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19
And I should see Contact made field For SFEFLTY19

Scenario: Selecting job and setting to depart
Given the SFEFLTY19 WorkOrder Page
When I fill the SFEFLTY19 fields with the value 
And I click on SFEFLTY19 DEPART button
Then I should see SFEFLTY19 Depart for Appointment window 
And I should see the SFEFLTY19 correct MPAN details
And I should see the SFEFLTY19 correct Customer Name details
And I should see the SFEFLTY19 correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFEFLTY19
When I click on OK button For SFEFLTY19	
And I should see ARRIVE button For SFEFLTY19
And I should see DOORSTEP PROTOCOL tab activated For SFEFLTY19

Scenario: Set job to Arrived status
Given the SFEFLTY19 WorkOrder Page
When I click on ARRIVE button For SFEFLTY19	
Then I should see Arrival Time details For SFEFLTY19
And I should see SFEFLTY19 BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFEFLTY19 BE AWARE OF ANY DANGER! section 
When I fill the SFEFLTY19 DoorStep Protocol fields with the value
And I click on SFEFLTY19 ON SITE button 	
Then I should see SFEFLTY19 RISK ASSESSMENT tab activated
And I should see SFEFLTY19 INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFEFLTY19 INITIAL RISK ASSESSMENT section
When I fill the SFEFLTY19 initialRisk field with the values
Then I should see SFEFLTY19 RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
Given the SFEFLTY19 RISK ASSESSMENT - ELEC section
When I fill the SFEFLTY19 RISK ASSESSMENT - ELEC fields with the values
And I click on SFEFLTY19 CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on SFEFLTY19 NEXT SECTION button
Then I should see SFEFLTY19 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
Given the SFEFLTY19 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
When I click on SFEFLTY19 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then I should see SFEFLTY19 INITIAL POLARITY CHECK - MARTINDALE TEST section

Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the SFEFLTY19 INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the SFEFLTY19 INITIAL POLARITY CHECK field with the values
And I click on SFEFLTY19 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the SFEFLTY19 Socket Found field with the values
Then I should see SFEFLTY19 INITIAL POLARITY CHECK AT METER AND CUT OUT section 

Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the SFEFLTY19 INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the SFEFLTY19 METER AND CUT OUT fields with the values
#for new WO this is not req, for existing one required
And I click on SFEFLTY19 SUBMIT button
Then I should see SFEFLTY19 current PPMID section

Scenario: Going through "Check the current PPMID section details"     	
Given the SFEFLTY19 current PPMID detailssection  
When I fill the SFEFLTY19 current PPMID details fields with the values
Then I should see SFEFLTY19 CURRENT METER DETAILS section

Scenario: Going through "Check the current meter details" section     	
Given the Check the SFEFLTY19 current meter detailssection  
When I fill the SFEFLTY19 current meter details fields with the values
Then I should see SFEFLTY19 CURRENT COMMS HUB DETAILS section

Scenario: Going through "Check the current COMM HUB details" section     	
Given the SFEFLTY19 current COMM HUB detailssection  
When I fill the SFEFLTY19 current COMM meter details fields with the values
Then I should see SFEFLTY19 DETERMINE FAULT ACTIVITY section

Scenario: Going through "Check determine fault activity" section     	
Given the SFEFLTY19 DETERMINE FAULT ACTIVITY section  
When I fill the SFEFLTY19 determine faulty activity fields with values
Then I should see SFEFLTY19 ADDITIONAL ELECTRICITY CHECKS section

Scenario: Going through Additional Electricity Tests and Checks section 
Given the SFEFLTY19 ADDITIONAL ELECTRICITY CHECKS details section
When I fill the SFEFLTY19 ADDITIONAL ELECTRICITY CHECKS details fields with values
Then I should see SFEFLTY19 Perform Post Installation Checks section

Scenario: Going through Perform Post Installation Checks section 
Given Perform SFEFLTY19 Post Installation Checks section
When I fill the SFEFLTY19 Perform Post Installation Checks details fields with values
Then I should see SFEFLTY19 Commission Bind the Comms hub to the WAN section

Scenario: Going through Commission Bind the Comms hub to the WAN section 
Given Commission Bind the SFEFLTY19 Comms hub to the WAN section
When I fill the SFEFLTY19 Commission Bind the Comms hub to the WAN details fields with values
Then I should click SFEFLTY19 Submit button to complete the job section

Scenario: Going through Device Binding and Comissioning Section
Given the SFEFLTY19 Device Binding and Comissioning Section
When I fill the SFEFLTY19 device binding section fields with values
Then I should see SFEFLTY19 Energy Efficiency information section

Scenario: Going through "Energy Efficiency information"
Given the SFEFLTY19 Energy Efficiency information section 
When I fill the SFEFLTY19 Energy Efficiency information fields with values
Then I should see SFEFLTY19 Summary of Job section

Scenario: Going through Summary section 
Given the SFEFLTY19 Summary of Job section
When I fill the SFEFLTY19 summary fields with values
Then I should finally submit SFEFLTY19 job
And I should see the Appointment List For SFEFLTY19
