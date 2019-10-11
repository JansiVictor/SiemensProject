Feature: DFEXCH21 - InstallAndLeave Workflow

Scenario: Post DFEXCH21 SOAP Request
        Given I post workorder using "xmlrequest/DFEXCH21.XML"

Scenario Outline: Logging in to job's ExTwOne "Work Order" window
Given the ExTwOne Login Page
When I pass ExTwOne "<Username>" and "<Password>"
Then I click ExTwOne Login button
And I should see the ExTwOne Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |


Scenario: Select the ExTwOne Latest workOrder
Given the ExTwOne Appointment List window
When I click on ExTwOne select button
Then I should see ExTwOne Work Order window

Scenario: Going through ExTwOne Call Forward
Given the ExTwOne "Work Order" window
When i see ExTwOne Call Forward or Arrive Button
Then I click on ExTwOne CALL FORWARD button
Then I should see ExTwOne page contect display
#And I should see the ExTwOne CUSTOMER CONTACT NUMBER
And I should see ExTwOne Contact made field

Scenario: Selecting ExTwOne job and setting to depart
Given the ExTwOne "Work Order" page
When I fill the ExTwOne fields with the value
And I click on ExTwOne DEPART button 
Then I should see ExTwOne Depart for Appointment window
And I should see the ExTwOne correct MPAN details
And I should see the ExTwOne correct Customer Name details
And I should see the ExTwOne correct PostCode details

Scenario: Approving ExTwOne "Depart for Appointment" job
And ExTwOne "Appointment" details
When I click on ExTwOne OK button
And I should see ExTwOne ARRIVE button
Then I should see ExTwOne DOORSTEP PROTOCOL tab activated

Scenario: Set ExTwOne job to Arrived status
Given the ExTwOne "WorkOrder" page
When I click on ExTwOne ARRIVE button  	
Then I should see ExTwOne Arrival Time details
And I should see ExTwOne BE AWARE OF ANY DANGER! section

Scenario: Going through ExTwOne "BE AWARE OF ANY DANGER!" section
Given the ExTwOne BE AWARE OF ANY DANGER! section 
When I fill the ExTwOne DoorStep Protocol fields with the value
And I click on ExTwOne ON SITE button 	
Then I should see ExTwOne RISK ASSESSMENT tab activated
And I should see ExTwOne INITIAL RISK ASSESSMENT section

Scenario: Going through ExTwOne "INITIAL RISK ASSESSMENT"
Given the ExTwOne INITIAL RISK ASSESSMENT section
When I fill the ExTwOne initialRisk field with the values
Then I should see ExTwOne INFO window

#Scenario: Going through ExTwOne "INFO" window   
Given the ExTwOne INFO window with the text
#When I click on ExTwOne OK button 
#Then I should see ExTwOne RISK ASSESSMENT ELEC section 

Scenario: Going through ExTwOne "RISK ASSESSMENT - ELEC" section	
Given the ExTwOne RISK ASSESSMENT - ELEC section
When I fill the ExTwOne RISK ASSESSMENT - ELEC fields with the values
And I click on ExTwOne CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on ExTwOne NEXT SECTION button
#Then I should see ExTwOne CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section 


Scenario: Going through ExTwOne "Suitable for Smart Installation"
#Given the Suitable for ExTwOne Smart Installation section
When I click on Is ExTwOne Site Suitable for Smart Installation? button
And I click on ExTwOne Equipment Reposition Required?
And I enter ExTwOne Additional Notes for Smart installation Check
And I click on ExTwOne smart installation NEXT SECTION button
#Then I should see ExTwOne INITIAL POLARITY CHECK - MARTINDALE TEST section 

Scenario: Going through ExTwOne "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
Given the ExTwOne CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
When I click on ExTwOne CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then I should see ExTwOne INITIAL POLARITY CHECK - MARTINDALE TEST section  

Scenario: Going through ExTwOne "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the ExTwOne INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the ExTwOne INITIAL POLARITY CHECK field with the values
And I click on ExTwOne CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the ExTwOne Socket Found field with the values
Then I should see ExTwOne INITIAL POLARITY CHECK AT METER AND CUT OUT section   

Scenario: Going through ExTwOne "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the ExTwOne INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the ExTwOne METER AND CUT OUT fields with the values
#for new WO this is not req, for existing one required
#And I click on ExTwOne SUBMIT button
#Then I should see ExTwOne CURRENT METER DETAILS section

Scenario: Going through ExTwOne "Check the current meter details" section     	
#Given the Check the ExTwOne current meter detailssection  
When I fill the ExTwOne current meter details fields with the values
Then I should see the ExTwOne REMOVE tab activated  

Scenario: Going through ExTwOne "REMOVE METER" section 
Given the ExTwOne REMOVE METER section   
When I fill the ExTwOne REMOVE METER fields with the values
Then I should see ExTwOne REMOVE ASSET section  

Scenario: Going through ExTwOne "REMOVE ASSET" section 
Given the ExTwOne REMOVE ASSET section   
When I fill the ExTwOne REMOVE ASSET field with the values
And I click on ExTwOne OK button in updated Popup notification
Then I should see ExTwOne INSTALL COMMS HUB section 

Scenario: Going through ExTwOne " Comms Hub details " section 
Given the  ExTwOne Comms Hub details section 
When I fill the ExTwOne Comms Hub fields with values
Then I should see ExTwOne NEW METER section 

Scenario: Going through ExTwOne " SMETS2 New Meter details " section 
Given the  ExTwOne New Meter details section 
When I fill the ExTwOne New Meter details fields with values
Then I should see ExTwOne ADDITIONAL ELECTRICITY CHECKS section

Scenario: Going through ExTwOne Additional Electricity Tests and Checks section 
Given the the ExTwOne ADDITIONAL ELECTRICITY CHECKS details section
When I fill the ExTwOne ADDITIONAL ELECTRICITY CHECKS details fields with values

Scenario: Going through ExTwOne Initial Meter Reading of new meter depending on the number of Registers and dials section 
Given Initial Meter Reading of ExTwOne new meter depending on the number of Registers and dials section
When I fill the ExTwOne Initial Meter Reading of new meter details fields with values
Then I should see ExTwOne Commission Bind the Comms hub to the WAN section

Scenario: Going through ExTwOne Commission Bind the Comms hub to the WAN section 
Given Commission Bind the ExTwOne Comms hub to the WAN section
When I fill the InstallLeave Commission Bind the Comms hub to the WAN details fields with values
Then I should see InstallLeave Replace CommsHubNoWan section

Scenario: Going through Replace CommsHubNoWan section
Given InstallLeave Replace CommsHubNoWan section
When I fill the InstallLeave Replace CommshubNoWan details fields with values
Then I should see ExTwOne Perform Post Installation Checks section

Scenario: Going through ExTwOne Perform Post Installation Checks section 
Given Perform ExTwOne Post Installation Checks section
When I fill the ExTwOne Perform Post Installation Checks details fields with values
Then I should see InstallLeave Submit button

Scenario: Going through ExTwOne "INITIAL RISK ASSESSMENT"
Given the ExTwOne INITIAL RISK ASSESSMENT section
When I fill the ExTwOne initialRisk field with the values
Then I should see ExTwOne INFO window

Scenario: Going through ExTwOne "RISK ASSESSMENT - GAS" section	
Given the ExTwOne RISK ASSESSMENT - GAS section
When I fill the ExTwOne RISK ASSESSMENT - GAS fields with the values
Then I should see ExTwOne Suitability for Smart Meter Installation section 

Scenario: Going through ExTwOne Suitability for Smart Meter Installation section	
Given the ExTwOne Suitability for Smart Meter Installation section
When I fill the ExTwOne Suitability for Smart Meter Installation fields with the values
Then I should see ExTwOne Capture Photo of GAS Installation section 

Scenario: Going through ExTwOne Pre Installation Gas Tightness section	
Given the ExTwOne Pre Installation Gas Tightness section
When I fill the ExTwOne Pre Installation Gas Tightness fields with the values
Then I should see ExTwOne Current Meter Details section 

Scenario: Going through ExTwOne "Check the current meter details" GAS section     	
#Given the Check the ExTwOne current meter detailssection  
When I fill the ExTwOne current meter details fields with the values
Then I should see the ExTwOne REMOVE tab activated  

Scenario: Going through ExTwOne "REMOVE METER" GAS section 
Given the ExTwOne REMOVE METER section   
When I fill the ExTwOne REMOVE METER fields with the values
Then I should see ExTwOne REMOVE ASSET section  

Scenario: Going through ExTwOne "REMOVE ASSET" GAS section 
Given the ExTwOne REMOVE ASSET section   
When I fill the ExTwOne REMOVE ASSET field with the values
And I click on ExTwOne OK button in updated Popup notification
Then I should see ExTwOne New Regulator section 

Scenario: Input the ExTwOne new Regulator S/N which transferres the Regulator from the Van List GAS section 
Given the ExTwOne New Regulator section 
When I fill the ExTwOne New Regulator fields with values
Then I should see ExTwOne NEW METER section 

Scenario: Going through ExTwOne " SMETS2 New Meter details " GAS section 
Given the  ExTwOne New Meter details section 
When I fill the ExTwOne New Meter details fields with values Gas
Then I should see ExTwOne Gas Initial Meter Reading section

Scenario: Going through ExTwOne " SMETS2 Initial New Meter details " GAS section 
Given the Gas ExTwOne Initial Meter Reading section 
When I fill the ExTwOne Gas Initial Meter Reading details fields with values
Then I should see ExTwOne Gas Install Kit section

Scenario: Going through ExTwOne "Install Kit " GAS section 
Given the Gas ExTwOne Install Kit section 
When I fill the ExTwOne Gas Install Kit section fields with values
Then I should see ExTwOne Perform Post Installation GAS Checks section

Scenario: Going through ExTwOne "Post Installation GAS" GAS section 
Given the ExTwOne Post Installation GAS section 
When I fill the ExTwOne Post Installation GAS section fields with values
Then I should see ExTwOne Gas Appliance Safety Checks section

Scenario: Going through ExTwOne "Gas Appliance Safety Checks" GAS section 
Given the ExTwOne Gas Appliance Safety Checks section 
When I fill the ExTwOne Gas Appliance Safety Checks section fields with values and Submit
Then I should see ExTwOne SMETS PPMID section

Scenario: Going through ExTwOne "SMETS PPMID" GAS section 
Given the ExTwOne SMETS PPMID section 
When I fill the InstallLeave PPMID section fields with values
Then I should see Check ExTwOne Binding and commissioning of PPMID section

Scenario: Going through ExTwOne "Check Binding and commissioning of PPMID" GAS section 
Given the ExTwOne Binding and commissioning of PPMID section 
When I fill the InstallLeave Binding and commissioning of PPMID fields with values
Then I should see ExTwOne configuration of all meters installed section

Scenario: Going through ExTwOne "configuration of all meters installed " GAS section 
Given the ExTwOne configuration of all meters installed  section 
When I fill the InstallLeave configuration of all meters installed  fields with values
Then I should see ExTwOne Energy Efficiency information section

Scenario: Going through ExTwOne "Energy Efficiency information" GAS section 
Given the ExTwOne Energy Efficiency information  section 
When I fill the ExTwOne Energy Efficiency information fields with values
Then I should see ExTwOne Perform Smart Meter Education and Demonstration section

Scenario: Going through ExTwOne "Perform Smart Meter Education and Demonstration " GAS section 
Given the Perform ExTwOne Smart Meter Education and Demonstration section 
When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
Then I should see ExTwOne Summary of Job and receive Customer Signature section

Scenario: Going through ExTwOne "Summary of Job and receive Customer Signature" GAS section 
Given the ExTwOne Summary of Job and receive Customer Signature section 
When I fill the ExTwOne Summary of Job and receive Customer Signaturefields with values
Then I should see ExTwOne Submit button to complete the job section

Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist