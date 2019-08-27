Feature: Login into Siemen Application

Scenario Outline: Logging in to job's "Work Order" window
	Given the Login Page
	When I pass "<Username>" and "<Password>"
	Then I click Login button
	And I should see the Appointment List 

	Examples:
	| Username 		| Password      |
	|  Automation2 |  Aut0m4t1on2  |

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
	Then I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section 

	
Scenario: Going through "Suitable for Smart Installation"
 	Given the Suitable for Smart Installation section
 	When I click on Is Site Suitable for Smart Installation? button
	And I click on Equipment Reposition Required?
	And I enter Additional Notes for Smart installation Check
	And I click on smart installation NEXT SECTION button
 	#Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section 

Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
	Given the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
	When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
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
	   Then I should see the REMOVE tab activated  

Scenario: Going through "REMOVE METER" section 
     Given the REMOVE METER section   
   	 When I fill the REMOVE METER fields with the values
     Then I should see REMOVE ASSET section  

Scenario: Going through "REMOVE ASSET" section 
     Given the REMOVE ASSET section   
   	 When I fill the REMOVE ASSET field with the values
     And I click on OK button in updated Popup notification
     Then I should see INSTALL COMMS HUB section 

Scenario: Going through " Comms Hub details " section 
     Given the  Comms Hub details section 
   	 When I fill the Comms Hub fields with values
     Then I should see NEW METER section 

Scenario: Going through " SMETS2 New Meter details " section 
     Given the  New Meter details section 
   	 When I fill the New Meter details fields with values
     Then I should see ADDITIONAL ELECTRICITY CHECKS section

Scenario: Going through Additional Electricity Tests and Checks section 
     Given the the ADDITIONAL ELECTRICITY CHECKS details section
   	 When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values
    
Scenario: Going through Initial Meter Reading of new meter depending on the number of Registers and dials section 
     Given Initial Meter Reading of new meter depending on the number of Registers and dials section
   	 When I fill the Initial Meter Reading of new meter details fields with values
	Then I should see Commission/Bind the Comms hub to the WAN section

Scenario: Going through Commission/Bind the Comms hub to the WAN section 
     Given Commission/Bind the Comms hub to the WAN section
   	 When I fill the Commission/Bind the Comms hub to the WAN details fields with values
	Then I should see Perform Post Installation Checks section

Scenario: Going through Perform Post Installation Checks section 
     Given Perform Post Installation Checks section
   	 When I fill the Perform Post Installation Checks details fields with values
	Then I should see Perform DCC Message Creation for EICOM section

Scenario: Going through Perform DCC Message Creation for EICOM section 
     Given Perform DCC Message Creation for EICOM section
   	 When I fill the Perform DCC Message Creation for EICOM details fields with values
	Then I should see Initial Risk Assessment for GAS section

Scenario: Going through "INITIAL RISK ASSESSMENT"
	Given the INITIAL RISK ASSESSMENT section
	When I fill the initialRisk field with the values
	Then I should see INFO window


Scenario: Going through "RISK ASSESSMENT - GAS" section	
	Given the RISK ASSESSMENT - GAS section
	When I fill the RISK ASSESSMENT - GAS fields with the values
	Then I should see Suitability for Smart Meter Installation section 

Scenario: Going through Suitability for Smart Meter Installation section	
	Given the Suitability for Smart Meter Installation section
	When I fill the Suitability for Smart Meter Installation fields with the values
	Then I should see Capture Photo of GAS Installation section 

Scenario: Going through Pre Installation Gas Tightness section	
	Given the Pre Installation Gas Tightness section
	When I fill the Pre Installation Gas Tightness fields with the values
	Then I should see Current Meter Details section 