# Feature: SFENMEX16 Workflow

# Scenario Outline: Logging in to job's "Work Order" window
# Given the Login Page For SFENMEX16
# When I pass "<Username>" and "<Password>" For SFENMEX16
# Then I click Login button For SFENMEX16
# And I should see the Appointment List For SFENMEX16

# Examples:
# | Username 		| Password      |
# |  Automation2  |  Aut0m4t1on2  |

# Scenario: Select the Latest workOrder
# Given the Appointment List window For SFENMEX16
# When I click on select button For SFENMEX16
# Then I should see Work Order window For SFENMEX16

# Scenario: Going through Call Forward
# Given the "Work Order" window For SFENMEX16
# When i see Call Forward or Arrive Button For SFENMEX16
# Then I click on CALL FORWARD button For SFENMEX16
# Then I should see page contect display For SFENMEX16
# And I should see the CUSTOMER CONTACT NUMBER For SFENMEX16
# And I should see Contact made field For SFENMEX16

# Scenario: Selecting job and setting to depart
# Given the SFENMEX16 WorkOrder Page
# When I fill the SFENMEX16 fields with the value 
# And I click on SFENMEX16 DEPART button
# Then I should see SFENMEX16 Depart for Appointment window 
# And I should see the SFENMEX16 correct MPAN details
# And I should see the SFENMEX16 correct Customer Name details
# And I should see the SFENMEX16 correct PostCode details

# Scenario: Approving "Depart for Appointment" job
# And Appointment details For SFENMEX16
# When I click on OK button For SFENMEX16	
# And I should see ARRIVE button For SFENMEX16
# And I should see DOORSTEP PROTOCOL tab activated For SFENMEX16

# Scenario: Set job to Arrived status
# Given the SFENMEX16 WorkOrder Page
# When I click on ARRIVE button For SFENMEX16	
# Then I should see Arrival Time details For SFENMEX16
# And I should see SFENMEX16 BE AWARE OF ANY DANGER! section

# Scenario: Going through "BE AWARE OF ANY DANGER!" section
# Given the SFENMEX16 BE AWARE OF ANY DANGER! section 
# When I fill the SFENMEX16 DoorStep Protocol fields with the value
# And I click on SFENMEX16 ON SITE button 	
# Then I should see SFENMEX16 RISK ASSESSMENT tab activated
# And I should see SFENMEX16 INITIAL RISK ASSESSMENT section

# Scenario: Going through "INITIAL RISK ASSESSMENT"
# Given the SFENMEX16 INITIAL RISK ASSESSMENT section
# When I fill the SFENMEX16 initialRisk field with the values
# Then I should see SFENMEX16 RISK ASSESSMENT ELEC section

# Scenario: Going through "RISK ASSESSMENT - ELEC" section	
# Given the SFENMEX16 RISK ASSESSMENT - ELEC section
# When I fill the SFENMEX16 RISK ASSESSMENT - ELEC fields with the values
# And I click on SFENMEX16 CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on SFENMEX16 NEXT SECTION button
# Then I should see SFENMEX16 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

# Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
# Given the SFENMEX16 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
# When I click on SFENMEX16 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
# Then I should see SFENMEX16 INITIAL POLARITY CHECK - MARTINDALE TEST section

# Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
# Given the SFENMEX16 INITIAL POLARITY CHECK MARTINDALE TEST section  
# When I fill the SFENMEX16 INITIAL POLARITY CHECK field with the values
# And I click on SFENMEX16 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# And I fill the SFENMEX16 Socket Found field with the values
# Then I should see SFENMEX16 INITIAL POLARITY CHECK AT METER AND CUT OUT section 

# Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
# Given the SFENMEX16 INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
# When I fill the SFENMEX16 METER AND CUT OUT fields with the values
# #for new WO this is not req, for existing one required
# And I click on SFENMEX16 SUBMIT button
# Then I should see SFENMEX16 CURRENT METER DETAILS section

# Scenario: Going through "Check the current meter details" section     	
# Given the Check the SFENMEX16 current meter detailssection  
# When I fill the SFENMEX16 current meter details fields with the values
# Then I should see SFENMEX16 CURRENT COMMS HUB DETAILS section

# Scenario: Going through "Check the current COMM HUB details" section     	
# Given the SFENMEX16 current COMM HUB detailssection  
# When I fill the SFENMEX16 current COMM meter details fields with the values
# Then I should see SFENMEX16 ADDITIONAL ELECTRICITY CHECKS section

# Scenario: Going through Additional Electricity Tests and Checks section 
# Given the SFENMEX16 ADDITIONAL ELECTRICITY CHECKS details section
# When I fill the SFENMEX16 ADDITIONAL ELECTRICITY CHECKS details fields with values
# Then I should see SFENMEX16 Perform Post Installation Checks section

# Scenario: Going through Perform Post Installation Checks section 
# Given Perform SFENMEX16 Post Installation Checks section
# When I fill the SFENMEX16 Perform Post Installation Checks details fields with values
# Then I should see SFENMEX16 Commission Bind the Comms hub to the WAN section

# Scenario: Going through Commission Bind the Comms hub to the WAN section 
# Given Commission Bind the SFENMEX16 Comms hub to the WAN section
# When I fill the SFENMEX16 Commission Bind the Comms hub to the WAN details fields with values
# Then I should see SFENMEX16 Perform DCC Message Creation for EICOM section

# Scenario: Going through Perform DCC Message Creation for EICOM section 
# Given Perform SFENMEX16 DCC Message Creation for EICOM section
# When I fill the SFENMEX16 Perform DCC Message Creation for EICOM details fields with values
# Then I should see SFENMEX16 Install PPMID section

# Scenario: Going through "Install PPMID" GAS section 
# Given the SFENMEX16 Install PPMID section 
# When I fill the SFENMEX16 Install PPMID section fields with values
# Then I should see SFENMEX16 PPMID Comissioning section

# Scenario: Going through PPMID Comissioning Section
# Given the SFENMEX16 PPMID Comissioning section
# When I fill the SFENMEX16 PPMID Comissioning section fields with values
# Then I should click SFENMEX16 Submit button to complete the job section

# Scenario: Going through Device Binding and Comissioning Section
# Given the SFENMEX16 Device Binding and Comissioning Section
# When I fill the SFENMEX16 device binding section fields with values
# Then I should see SFENMEX16 Energy Efficiency information section

# Scenario: Going through "Energy Efficiency information"
# Given the SFENMEX16 Energy Efficiency information section 
# When I fill the SFENMEX16 Energy Efficiency information fields with values
# Then I should see SFENMEX16 Perform Smart Meter Education and Demonstration section

# Scenario: Going through "Perform Smart Meter Education and Demonstration " 
# Given the SFENMEX16 Perform Smart Meter Education and Demonstration section 
# When I fill the SFENMEX16 Perform Smart Meter Education and Demonstration  fields with values
# Then I should see SFENMEX16 Summary of Job and Smart literature left onsite section

# Scenario: Going through Smart literature left onsite section 
# Given the SFENMEX16 Smart literature left onsite section
# When I fill the SFENMEX16 smart literature fields with values
# Then I should finally submit SFENMEX16 job
# And I should see the Appointment List For SFENMEX16