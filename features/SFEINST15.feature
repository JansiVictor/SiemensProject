# Feature: SFEINST15 Workflow

# Scenario Outline: Logging in to job's "Work Order" window
# Given the Login Page For SFEINST15
# When I pass "<Username>" and "<Password>" For SFEINST15
# Then I click Login button For SFEINST15
# And I should see the Appointment List For SFEINST15

# Examples:
# | Username 		| Password      |
# |  Automation2  |  Aut0m4t1on2  |

# Scenario: Select the Latest workOrder
# Given the Appointment List window For SFEINST15
# When I click on select button For SFEINST15
# Then I should see Work Order window For SFEINST15

# Scenario: Going through Call Forward
# Given the "Work Order" window For SFEINST15
# When i see Call Forward or Arrive Button For SFEINST15
# Then I click on CALL FORWARD button For SFEINST15
# Then I should see page contect display For SFEINST15
# And I should see the CUSTOMER CONTACT NUMBER For SFEINST15
# And I should see Contact made field For SFEINST15

# Scenario: Selecting job and setting to depart
# Given the SFEINST15 WorkOrder Page
# When I fill the SFEINST15 fields with the value 
# And I click on SFEINST15 DEPART button
# Then I should see SFEINST15 Depart for Appointment window 
# And I should see the SFEINST15 correct MPAN details
# And I should see the SFEINST15 correct Customer Name details
# And I should see the SFEINST15 correct PostCode details

# Scenario: Approving "Depart for Appointment" job
# And Appointment details For SFEINST15
# When I click on OK button For SFEINST15	
# And I should see ARRIVE button For SFEINST15
# And I should see DOORSTEP PROTOCOL tab activated For SFEINST15

# Scenario: Set job to Arrived status
# Given the SFEINST15 WorkOrder Page
# When I click on ARRIVE button For SFEINST15	
# Then I should see Arrival Time details For SFEINST15
# And I should see SFEINST15 BE AWARE OF ANY DANGER! section

# Scenario: Going through "BE AWARE OF ANY DANGER!" section
# Given the SFEINST15 BE AWARE OF ANY DANGER! section 
# When I fill the SFEINST15 DoorStep Protocol fields with the value
# And I click on SFEINST15 ON SITE button 	
# Then I should see SFEINST15 RISK ASSESSMENT tab activated
# And I should see SFEINST15 INITIAL RISK ASSESSMENT section

# Scenario: Going through "INITIAL RISK ASSESSMENT"
# Given the SFEINST15 INITIAL RISK ASSESSMENT section
# When I fill the SFEINST15 initialRisk field with the values
# Then I should see SFEINST15 RISK ASSESSMENT ELEC section

# Scenario: Going through "RISK ASSESSMENT - ELEC" section	
# Given the SFEINST15 RISK ASSESSMENT - ELEC section
# When I fill the SFEINST15 RISK ASSESSMENT - ELEC fields with the values
# And I click on SFEINST15 CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on SFEINST15 NEXT SECTION button
# Then I should see SFEINST15 Suitable for Smart Installation section

# Scenario: Going through "Suitable for Smart Installation" for SFEINST15
# Given the SFEINST15 Suitable for Smart Installation section
# When I click on Is Site Suitable for Smart Installation? button for SFEINST15
# And I click on Equipment Reposition Required? for SFEINST15
# And I enter Additional Notes for Smart installation Check for SFEINST15
# And I click on smart installation NEXT SECTION button for SFEINST15
# Then I should see SFEINST15 INITIAL POLARITY CHECK AT METER AND CUT OUT section 

# Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
# Given the SFEINST15 INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
# When I fill the SFEINST15 METER AND CUT OUT fields with the values
# #for new WO this is not req, for existing one required
# #And I click on SFEINST15 SUBMIT button
# Then I should see SFEINST15 INSTALL COMMS HUB section

# Scenario: Going through "Check the Install COMM HUB details" section     	
# Given the SFEINST15 Comms Hub details section  
# When I fill the SFEINST15 Install COMM meter details fields with the values
# Then I should see SFEINST15 NEW METER section

# Scenario: Going through "Check the NEW METER details" section     	
# Given the SFEINST15 New Meter details section 
# When I fill the SFEINST15 New Meter details fields with values
# Then I should see SFEINST15 ADDITIONAL ELECTRICITY CHECKS section

# Scenario: Going through Additional Electricity Tests and Checks section 
# Given the SFEINST15 ADDITIONAL ELECTRICITY CHECKS details section
# When I fill the SFEINST15 ADDITIONAL ELECTRICITY CHECKS details fields with values
# Then I should see SFEINST15 Elec Initial Meter Reading section

# Scenario: Going through Elec Initial Meter reading section
# Given the SFEINST15 Initial Meter Reading of new meter depending on the number of Registers and dials section
# When I fill the SFEINST15 Initial Meter Reading of new meter details fields with values
# Then I should see SFEINST15 Commission Bind the Comms hub to the WAN section

# Scenario: Going through Commission Bind the Comms hub to the WAN section 
# Given Commission Bind the SFEINST15 Comms hub to the WAN section
# When I fill the SFEINST15 Commission Bind the Comms hub to the WAN details fields with values
# Then I should see SFEINST15 Perform Post Installation Checks section

# Scenario: Going through Perform Post Installation Checks section 
# Given Perform SFEINST15 Post Installation Checks section
# When I fill the SFEINST15 Perform Post Installation Checks details fields with values
# Then I should see SFEINST15 Perform DCC Message Creation for EICOM section

# Scenario: Going through Perform DCC Message Creation for EICOM section 
# Given Perform SFEINST15 DCC Message Creation for EICOM section
# When I fill the SFEINST15 Perform DCC Message Creation for EICOM details fields with values
# Then I should see SFEINST15 Install PPMID section

# Scenario: Going through "Install PPMID" section 
# Given the SFEINST15 Install PPMID section 
# When I fill the SFEINST15 Install PPMID section fields with values
# Then I should see SFEINST15 PPMID Comissioning section

# Scenario: Going through PPMID Comissioning Section
# Given the SFEINST15 PPMID Comissioning section
# When I fill the SFEINST15 PPMID Comissioning section fields with values
# Then I should see SFEINST15 Check Binding and commissioning of PPMID section

# Scenario: Going through Device Binding and Comissioning Section
# Given the SFEINST15 Device Binding and Comissioning Section
# When I fill the SFEINST15 device binding section fields with values
# Then I should see configuration of all meters installed section for SFEINST15

# Scenario: Going through "configuration of all meters installed " GAS and ELEC section for SFEINST15
# Given the configuration of all meters installed section for SFEINST15
# When I fill the configuration of all meters installed fields with values for SFEINST15
# Then I should see SFEINST15 Energy Efficiency information section

# Scenario: Going through "Energy Efficiency information"
# Given the SFEINST15 Energy Efficiency information section 
# When I fill the SFEINST15 Energy Efficiency information fields with values
# Then I should see SFEINST15 Perform Smart Meter Education and Demonstration section

# Scenario: Going through "Perform Smart Meter Education and Demonstration " 
# Given the SFEINST15 Perform Smart Meter Education and Demonstration section 
# When I fill the SFEINST15 Perform Smart Meter Education and Demonstration  fields with values
# Then I should see SFEINST15 Summary of Job and Smart literature left onsite section

# Scenario: Going through Smart literature left onsite section 
# Given the SFEINST15 Smart literature left onsite section
# When I fill the SFEINST15 smart literature fields with values
# Then I should finally submit SFEINST15 job
# And I should see the Appointment List For SFEINST15
