Feature: Exchange20 Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the ExTwnty Login Page
When I pass ExTwnty "<Username>" and "<Password>"
Then I click ExTwnty Login button
And I should see the ExchangeTwnty Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |


Scenario: Select the Latest ExchangeTwnty workOrder
Given the ExchangeTwnty Appointment List window
When I click on ExchangeTwnty select button
Then I should see ExchangeTwnty Work Order window

Scenario: Going through ExchangeTwnty Call Forward
Given the ExchangeTwnty "Work Order" window
When i see ExchangeTwnty Call Forward or Arrive Button
Then I click on ExchangeTwnty CALL FORWARD button
Then I should see ExchangeTwnty page contect display
And I should see ExchangeTwnty Contact made field

Scenario: Selecting ExchangeTwnty job and setting to depart
Given the ExchangeTwnty Work Order page
When I fill the ExchangeTwnty fields with the value
And I click on ExchangeTwnty DEPART button 
Then I should see ExchangeTwnty Depart for Appointment window
And I should see the ExchangeTwnty correct MPAN details
And I should see the ExchangeTwnty correct Customer Name details
And I should see the ExchangeTwnty correct PostCode details

Scenario: Approving ExchangeTwnty "Depart for Appointment" job
And ExchangeTwnty "Appointment" details
When I click on ExchangeTwnty OK button  	
And I should see ExchangeTwnty ARRIVE button
Then I should see ExchangeTwnty DOORSTEP PROTOCOL tab activated

Scenario: Set ExchangeTwnty job to Arrived status
When I click on ExchangeTwnty ARRIVE button  	
Then I should see ExchangeTwnty Arrival Time details
And I should see ExchangeTwnty BE AWARE OF ANY DANGER! section

Scenario: Going through ExchangeTwnty "BE AWARE OF ANY DANGER!" section
Given the ExchangeTwnty BE AWARE OF ANY DANGER! section 
When I fill the ExchangeTwnty DoorStep Protocol fields with the value
And I click on ExchangeTwnty ON SITE button 	
Then I should see ExchangeTwnty RISK ASSESSMENT tab activated
And I should see ExchangeTwnty INITIAL RISK ASSESSMENT section

Scenario: Going through ExchangeTwnty "INITIAL RISK ASSESSMENT"
Given the ExchangeTwnty INITIAL RISK ASSESSMENT section
When I fill the ExchangeTwnty initialRisk field with the values
Then I should see ExchangeTwnty INFO window

# Scenario: Going through ExchangeTwnty "INFO" window   
# Given the ExchangeTwnty INFO window with the text
# When I click on OK button
# Then I should see ExchangeTwnty RISK ASSESSMENT ELEC section 
 
Scenario: Going through ExchangeTwnty "RISK ASSESSMENT - ELEC" section	
Given the ExchangeTwnty RISK ASSESSMENT - ELEC section
When I fill the ExchangeTwnty RISK ASSESSMENT - ELEC fields with the values
And I click on ExchangeTwnty CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on ExchangeTwnty NEXT SECTION button


Scenario: Going through ExchangeTwnty "Suitable for Smart Installation"
Given the Suitable for ExchangeTwnty Smart Installation section
When I click on ExchangeTwnty Is Site Suitable for Smart Installation? button
And I click on ExchangeTwnty Equipment Reposition Required?
And I enter ExchangeTwnty Additional Notes for Smart installation Check
And I click on ExchangeTwnty smart installation NEXT SECTION button 

Scenario: Going through ExchangeTwnty "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
Given the ExchangeTwnty CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
When I click on ExchangeTwnty CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then I should see ExchangeTwnty INITIAL POLARITY CHECK - MARTINDALE TEST section  

Scenario: Going through ExchangeTwnty "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the ExchangeTwnty INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the ExchangeTwnty INITIAL POLARITY CHECK field with the values
And I click on ExchangeTwnty CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the ExchangeTwnty Socket Found field with the values
Then I should see ExchangeTwnty INITIAL POLARITY CHECK AT METER AND CUT OUT section   

Scenario: Going through ExchangeTwnty "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the ExchangeTwnty INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the ExchangeTwnty METER AND CUT OUT fields with the values
Then I should see ExchangeTwnty CURRENT METER DETAILS section

Scenario: Going through ExchangeTwnty "Check the current meter details" section     	
Given the Check the ExchangeTwnty current meter detailssection  
When I fill the ExchangeTwnty current meter details fields with the values
Then I should see the ExchangeTwnty REMOVE tab activated  

Scenario: Going through ExchangeTwnty "REMOVE METER" section 
Given the ExchangeTwnty REMOVE METER section   
When I fill the ExchangeTwnty REMOVE METER fields with the values
Then I should see ExchangeTwnty REMOVE ASSET section  

Scenario: Going through ExchangeTwnty "REMOVE ASSET" section 
Given the ExchangeTwnty REMOVE ASSET section   
When I fill the ExchangeTwnty REMOVE ASSET field with the values
And I click on ExchangeTwnty OK button in updated Popup notification
Then I should see ExchangeTwnty INSTALL COMMS HUB section 

Scenario: Going through ExchangeTwnty "Comms Hub details " section 
Given the ExchangeTwnty Comms Hub details section 
When I fill the ExchangeTwnty Comms Hub fields with values
Then I should see ExchangeTwnty NEW METER section 

Scenario: Going through ExchangeTwnty "SMETS2 New Meter details " section 
Given the  ExchangeTwnty New Meter details section 
When I fill the ExchangeTwnty New Meter details fields with values
Then I should see ExchangeTwnty ADDITIONAL ELECTRICITY CHECKS section

Scenario: Going through ExchangeTwnty Additional Electricity Tests and Checks section 
Given the the ExchangeTwnty ADDITIONAL ELECTRICITY CHECKS details section
When I fill the ExchangeTwnty ADDITIONAL ELECTRICITY CHECKS details fields with values

Scenario: Going through ExchangeTwnty Initial Meter Reading of new meter depending on the number of Registers and dials section 
Given Initial Meter Reading of ExchangeTwnty new meter depending on the number of Registers and dials section
When I fill the Initial Meter Reading of ExchangeTwnty new meter details fields with values
Then I should see ExchangeTwnty Commission Bind the Comms hub to the WAN section

Scenario: Going through ExchangeTwnty Commission Bind the Comms hub to the WAN section 
Given Commission Bind the ExchangeTwnty Comms hub to the WAN section
When I fill the ExchangeTwnty Commission Bind the Comms hub to the WAN details fields with values
Then I should see ExchangeTwnty Perform Post Installation Checks section

Scenario: Going through ExchangeTwnty Perform Post Installation Checks section 
Given Perform ExchangeTwnty Post Installation Checks section
When I fill the ExchangeTwnty Perform Post Installation Checks details fields with values
Then I should see ExchangeTwnty Perform DCC Message Creation for EICOM section

Scenario: Going through ExchangeTwnty Perform DCC Message Creation for EICOM section 
Given Perform ExchangeTwnty DCC Message Creation for EICOM section
When I fill the Perform ExchangeTwnty DCC Message Creation for EICOM details fields with values
Then I should see ExchangeTwnty SMETS PPMID section

Scenario: Going through ExchangeTwnty "SMETS PPMID" GAS section 
Given the ExchangeTwnty SMETS PPMID section 
When I fill the ExchangeTwnty SMETS PPMID section fields with values
Then I should see ExchangeTwnty Check Binding and commissioning of PPMID section

Scenario: Going through ExchangeTwnty "Check Binding and commissioning of PPMID" GAS section 
Given the ExchangeTwnty Binding and commissioning of PPMID section 
When I fill the ExchangeTwnty Binding and commissioning of PPMID fields with values
Then I should see ExchangeTwnty configuration of all meters installed section

Scenario: Going through ExchangeTwnty "configuration of all meters installed " GAS section 
Given the ExchangeTwnty configuration of all meters installed  section 
When I fill the ExchangeTwnty configuration of all meters installed  fields with values
Then I should see ExchangeTwnty Energy Efficiency information section

Scenario: Going through ExchangeTwnty "Energy Efficiency information" GAS section 
Given the ExchangeTwnty Energy Efficiency information  section 
When I fill the ExchangeTwnty Energy Efficiency information fields with values
Then I should see Perform ExchangeTwnty Smart Meter Education and Demonstration section

Scenario: Going through ExchangeTwnty "Perform Smart Meter Education and Demonstration " GAS section 
Given the Perform ExchangeTwnty Smart Meter Education and Demonstration section 
When I fill the Perform ExchangeTwnty Smart Meter Education and Demonstration  fields with values
Then I should see ExchangeTwnty Summary of Job and receive Customer Signature section

Scenario: Going through ExchangeTwnty "Summary of Job and receive Customer Signature" GAS section 
Given the ExchangeTwnty Summary of Job and receive Customer Signature section 
When I fill the ExchangeTwnty Summary of Job and receive Customer Signaturefields with values
Then I should see ExchangeTwnty Submit button to complete the job section