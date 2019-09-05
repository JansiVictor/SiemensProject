Feature: Login into Siemen Application

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For DF17SmartCredit
When I pass "<Username>" and "<Password>" For DF17SmartCredit
Then I click Login button For DF17SmartCredit
And I should see the Appointment List For DF17SmartCredit

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest workOrder
Given the Appointment List window For DF17SmartCredit
When I click on select button For DF17SmartCredit
Then I should see Work Order window For DF17SmartCredit

Scenario: Going through Call Forward
Given the "Work Order" window For DF17SmartCredit
When i see Call Forward or Arrive Button For DF17SmartCredit
Then I click on CALL FORWARD button For DF17SmartCredit
Then I should see page contect display For DF17SmartCredit
And I should see the CUSTOMER CONTACT NUMBER For DF17SmartCredit
And I should see Contact made field For DF17SmartCredit

Scenario: Selecting job and setting to depart
Given the DF17SmartCredit WorkOrder Page
When I fill the DF17SmartCredit fields with the value 
And I click on DF17SmartCredit DEPART button
Then I should see DF17SmartCredit Depart for Appointment window 
And I should see the DF17SmartCredit correct MPAN details
And I should see the DF17SmartCredit correct Customer Name details
And I should see the DF17SmartCredit correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For DF17SmartCredit
When I click on OK button For DF17SmartCredit	
And I should see ARRIVE button For DF17SmartCredit
And I should see DOORSTEP PROTOCOL tab activated For DF17SmartCredit

Scenario: Set job to Arrived status
Given the DF17SmartCredit WorkOrder Page
When I click on ARRIVE button For DF17SmartCredit	
Then I should see Arrival Time details For DF17SmartCredit
And I should see BE AWARE OF ANY DANGER! section For DF17SmartCredit

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the BE AWARE OF ANY DANGER! section 
When I fill the DoorStep Protocol fields with the value
And I click on ON SITE button 	
Then I should see RISK ASSESSMENT tab activated
And I should see INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the INITIAL RISK ASSESSMENT section
When I fill the initialRisk field with the values
Then I should see RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
Given the RISK ASSESSMENT - ELEC section
When I fill the RISK ASSESSMENT - ELEC fields with the values
And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on NEXT SECTION button
Then I should see Initial Risk Assessment for GAS section

Scenario: Going through "RISK ASSESSMENT - GAS" section	
Given the RISK ASSESSMENT - GAS section
When I fill the RISK ASSESSMENT - GAS fields with the values
Then I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
Given the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION"
Given the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
When I click on CAPTURE PHOTO OF CURRENT FULL GAS METER INSTALLATION button
Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section

Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the INITIAL POLARITY CHECK field with the values
And I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the Socket Found field with the values
Then I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section 

Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the METER AND CUT OUT fields with the values
#for new WO this is not req, for existing one required
And I click on SUBMIT button
Then I should see CURRENT METER DETAILS section

Scenario: Going through "Check the current meter details" section     	
Given the Check the current meter detailssection  
When I fill the current meter details fields with the values
Then I should see CURRENT GAS METER DETAILS section

Scenario: Going through "Check the current GAS meter details" section     	
Given the Check the current GAS meter detailssection  
When I fill the current GAS meter details fields with the values
Then I should see CURRENT COMMS HUB DETAILS section

Scenario: Going through "Check the current COMM HUB details" section     	
Given the current COMM HUB detailssection  
When I fill the current COMM meter details fields with the values
Then I should see ADDITIONAL ELECTRICITY CHECKS section

Scenario: Going through Additional Electricity Tests and Checks section 
Given the the ADDITIONAL ELECTRICITY CHECKS details section
When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values
Then I should see Perform Post Installation Checks section

Scenario: Going through Perform Post Installation Checks section 
Given Perform Post Installation Checks section
When I fill the Perform Post Installation Checks details fields with values
Then I should see Commission Bind the Comms hub to the WAN section

Scenario: Going through Commission Bind the Comms hub to the WAN section 
Given Commission Bind the Comms hub to the WAN section
When I fill the Commission Bind the Comms hub to the WAN details fields with values
Then I should see Perform DCC Message Creation for EICOM section

Scenario: Going through Perform DCC Message Creation for EICOM section 
Given Perform DCC Message Creation for EICOM section
When I fill the Perform DCC Message Creation for EICOM details fields with values
Then I should see GICOM Message section

Scenario: Going through "GICOM Message" GAS section 
Given the GICOM Message section 
When I fill the GICOM Message section fields with values
Then I should see Install PPMID section

Scenario: Going through "Install PPMID" GAS section 
Given the Install PPMID section 
When I fill the Install PPMID section fields with values
Then I should see PPMID Comissioning section

Scenario: Going through PPMID Comissioning Section
Given the PPMID Comissioning section
When I fill the PPMID Comissioning section fields with values
Then I should click Submit button to complete the job section

Scenario: Going through Device Binding and Comissioning Section
Given the Device Binding and Comissioning Section
When I fill the device binding section fields with values
Then I should see Energy Efficiency information section

Scenario: Going through "Energy Efficiency information"
Given the Energy Efficiency information  section 
When I fill the Energy Efficiency information fields with values
Then I should see Perform Smart Meter Education and Demonstration section

Scenario: Going through "Perform Smart Meter Education and Demonstration " 
Given the Perform Smart Meter Education and Demonstration section 
When I fill the Perform Smart Meter Education and Demonstration  fields with values
Then I should see Summary of Job and Smart literature left onsite section

Scenario: Going through Smart literature left onsite section 
Given the Smart literature left onsite section
When I fill the smart literature fields with values
Then I should finally submit job