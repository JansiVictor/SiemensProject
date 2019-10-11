Feature: SFGNMEX15 - InstallAndLeave Workflow

Scenario: Post SFGNMEX15 SOAP Request
        Given I post workorder using "xmlrequest/SFGNMEX15.XML"

Scenario Outline: Logging in to job's "Work Order" window
Given the Login Page For SFENMEX15
When I pass "<Username>" and "<Password>" For SFENMEX15
Then I click Login button For SFENMEX15
And I should see the Appointment List For SFENMEX15

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest workOrder
Given the Appointment List window For SFENMEX15
When I click on select button For SFENMEX15
Then I should see Work Order window For SFENMEX15

Scenario: Going through Call Forward
Given the "Work Order" window For SFENMEX15
When i see Call Forward or Arrive Button For SFENMEX15
Then I click on CALL FORWARD button For SFENMEX15
Then I should see page contect display For SFENMEX15
And I should see the CUSTOMER CONTACT NUMBER For SFENMEX15
And I should see Contact made field For SFENMEX15

Scenario: Selecting job and setting to depart
Given the SFENMEX15 WorkOrder Page
When I fill the SFENMEX15 fields with the value 
And I click on SFENMEX15 DEPART button
Then I should see SFENMEX15 Depart for Appointment window 
And I should see the SFENMEX15 correct MPAN details
And I should see the SFENMEX15 correct Customer Name details
And I should see the SFENMEX15 correct PostCode details

Scenario: Approving "Depart for Appointment" job
And Appointment details For SFENMEX15
When I click on OK button For SFENMEX15	
And I should see ARRIVE button For SFENMEX15
And I should see DOORSTEP PROTOCOL tab activated For SFENMEX15

Scenario: Set job to Arrived status
Given the SFENMEX15 WorkOrder Page
When I click on ARRIVE button For SFENMEX15	
Then I should see Arrival Time details For SFENMEX15
And I should see SFENMEX15 BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given the SFENMEX15 BE AWARE OF ANY DANGER! section 
When I fill the SFENMEX15 DoorStep Protocol fields with the value
And I click on SFENMEX15 ON SITE button 	
Then I should see SFENMEX15 RISK ASSESSMENT tab activated
And I should see SFENMEX15 INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given the SFENMEX15 INITIAL RISK ASSESSMENT section
When I fill the SFENMEX15 initialRisk field with the values
Then I should see SFENMEX15 RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section	
Given the SFENMEX15 RISK ASSESSMENT - ELEC section
When I fill the SFENMEX15 RISK ASSESSMENT - ELEC fields with the values
And I click on SFENMEX15 CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on SFENMEX15 NEXT SECTION button
Then I should see SFENMEX15 Initial Risk Assessment for GAS section

Scenario: Going through "RISK ASSESSMENT - GAS" section	
Given the SFENMEX15 RISK ASSESSMENT - GAS section
When I fill the SFENMEX15 RISK ASSESSMENT - GAS fields with the values
Then I should see SFENMEX15 CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION"
Given the SFENMEX15 CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
When I click on SFENMEX15 CAPTURE PHOTO OF CURRENT FULL GAS METER INSTALLATION button
Then I should see SFENMEX15 INITIAL POLARITY CHECK - MARTINDALE TEST section

Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the SFENMEX15 INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the SFENMEX15 INITIAL POLARITY CHECK field with the values
And I click on SFENMEX15 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the SFENMEX15 Socket Found field with the values
Then I should see SFENMEX15 INITIAL POLARITY CHECK AT METER AND CUT OUT section 

Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the SFENMEX15 INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the SFENMEX15 METER AND CUT OUT fields with the values
#for new WO this is not req, for existing one required
And I click on SFENMEX15 SUBMIT button
Then I should see SFENMEX15 CURRENT GAS METER DETAILS section

Scenario: Going through "Check the current GAS meter details" section     	
Given the Check the SFENMEX15 current GAS meter detailssection  
When I fill the SFENMEX15 current GAS meter details fields with the values
Then I should see SFENMEX15 CURRENT COMMS HUB DETAILS section

Scenario: Going through "Check the current COMM HUB details" section     	
Given the SFENMEX15 current COMM HUB detailssection  
When I fill the SFENMEX15 current COMM meter details fields with the values
Then I should see SFENMEX15 Gas Install Kit section

Scenario: Going through Install Kit - Gas section 
Given the SFENMEX15 Gas Install Kit section
When I fill the InstallAndLeave Install Kit Values
Then I should see InstallLeave Replace CommsHubNoWan section

Scenario: Going through Replace CommsHubNoWan section
Given InstallLeave Replace CommsHubNoWan section
When I fill the GNMEX InstallLeave Replace CommshubNoWan details fields with values
Then I should see SFENMEX15 Install PPMID section

Scenario: Going through "Install PPMID" GAS section 
Given the SFENMEX15 Install PPMID section 
When I fill the EXCH22 InstallLeave PPMID section fields with values
Then I click the Gas NMEX Install Submit Button

Scenario: Going through Device Binding and Comissioning Section
Given the SFENMEX15 Device Binding and Comissioning Section
When I fill the EXCH22 InstallLeave Binding and commissioning of PPMID fields with values
Then I should see SFENMEX15 Energy Efficiency information section

Scenario: Going through "Energy Efficiency information"
Given the SFENMEX15 Energy Efficiency information section 
When I fill the SFENMEX15 Energy Efficiency information fields with values
Then I should see SFENMEX15 Perform Smart Meter Education and Demonstration section

Scenario: Going through "Perform Smart Meter Education and Demonstration " 
Given the SFENMEX15 Perform Smart Meter Education and Demonstration section 
When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
Then I should see InstallLeave Summary of Job and Smart literature left onsite section

Scenario: Going through Smart literature left onsite section 
Given the InstallLeave Smart No literature left onsite section
When I fill the SFENMEX15 smart literature fields with values
Then I should finally submit SFENMEX15 job
And I should see the Appointment List For SFENMEX15


Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist