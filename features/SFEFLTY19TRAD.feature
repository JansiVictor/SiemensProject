# Feature: Login into Siemen Application

# Scenario Outline: Logging in to job's "Work Order" window
# Given the Login Page For SFEFLTY19TRAD
# When I pass "<Username>" and "<Password>" For SFEFLTY19TRAD
# Then I click Login button For SFEFLTY19TRAD
# And I should see the Appointment List For SFEFLTY19TRAD

# Examples:
# | Username 		| Password      |
# |  Automation2  |  Aut0m4t1on2  |

# Scenario: Select the Latest workOrder
# Given the Appointment List window For SFEFLTY19TRAD
# When I click on select button For SFEFLTY19TRAD
# Then I should see Work Order window For SFEFLTY19TRAD

# Scenario: Going through Call Forward
# Given the "Work Order" window For SFEFLTY19TRAD
# When i see Call Forward or Arrive Button For SFEFLTY19TRAD
# Then I click on CALL FORWARD button For SFEFLTY19TRAD
# Then I should see page contect display For SFEFLTY19TRAD
# And I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19TRAD
# And I should see Contact made field For SFEFLTY19TRAD

# Scenario: Selecting job and setting to depart
# Given the SFEFLTY19TRAD WorkOrder Page
# When I fill the SFEFLTY19TRAD fields with the value 
# And I click on SFEFLTY19TRAD DEPART button
# Then I should see SFEFLTY19TRAD Depart for Appointment window 
# And I should see the SFEFLTY19TRAD correct MPAN details
# And I should see the SFEFLTY19TRAD correct Customer Name details
# And I should see the SFEFLTY19TRAD correct PostCode details

# Scenario: Approving "Depart for Appointment" job
# And Appointment details For SFEFLTY19TRAD
# When I click on OK button For SFEFLTY19TRAD	
# And I should see ARRIVE button For SFEFLTY19TRAD
# And I should see DOORSTEP PROTOCOL tab activated For SFEFLTY19TRAD

# Scenario: Set job to Arrived status
# Given the SFEFLTY19TRAD WorkOrder Page
# When I click on ARRIVE button For SFEFLTY19TRAD	
# Then I should see Arrival Time details For SFEFLTY19TRAD
# And I should see SFEFLTY19TRAD BE AWARE OF ANY DANGER! section

# Scenario: Going through "BE AWARE OF ANY DANGER!" section
# Given the SFEFLTY19TRAD BE AWARE OF ANY DANGER! section 
# When I fill the SFEFLTY19TRAD DoorStep Protocol fields with the value
# And I click on SFEFLTY19TRAD ON SITE button 	
# Then I should see SFEFLTY19TRAD RISK ASSESSMENT tab activated
# And I should see SFEFLTY19TRAD INITIAL RISK ASSESSMENT section

# Scenario: Going through "INITIAL RISK ASSESSMENT"
# Given the SFEFLTY19TRAD INITIAL RISK ASSESSMENT section
# When I fill the SFEFLTY19TRAD initialRisk field with the values
# Then I should see SFEFLTY19TRAD RISK ASSESSMENT ELEC section

# Scenario: Going through "RISK ASSESSMENT - ELEC" section	
# Given the SFEFLTY19TRAD RISK ASSESSMENT - ELEC section
# When I fill the SFEFLTY19TRAD RISK ASSESSMENT - ELEC fields with the values
# And I click on SFEFLTY19TRAD CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on SFEFLTY19TRAD NEXT SECTION button
# Then I should see SFEFLTY19TRAD CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

# Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
# Given the SFEFLTY19TRAD CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
# When I click on SFEFLTY19TRAD CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
# Then I should see SFEFLTY19TRAD INITIAL POLARITY CHECK - MARTINDALE TEST section

# Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
# Given the SFEFLTY19TRAD INITIAL POLARITY CHECK MARTINDALE TEST section  
# When I fill the SFEFLTY19TRAD INITIAL POLARITY CHECK field with the values
# And I click on SFEFLTY19TRAD CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# And I fill the SFEFLTY19TRAD Socket Found field with the values
# Then I should see SFEFLTY19TRAD INITIAL POLARITY CHECK AT METER AND CUT OUT section 

# Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
# Given the SFEFLTY19TRAD INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
# When I fill the SFEFLTY19TRAD METER AND CUT OUT fields with the values
# #for new WO this is not req, for existing one required
# And I click on SFEFLTY19TRAD SUBMIT button
# Then I should see SFEFLTY19TRAD current PPMID section

# Scenario: Going through "Check the current PPMID section details"     	
# Given the SFEFLTY19TRAD current PPMID detailssection  
# When I fill the SFEFLTY19TRAD current PPMID details fields with the values
# Then I should see SFEFLTY19TRAD CURRENT METER DETAILS section

# Scenario: Going through "Check the current meter details" section     	
# Given the Check the SFEFLTY19TRAD current meter detailssection  
# When I fill the SFEFLTY19TRAD current meter details fields with the values
# Then I should see SFEFLTY19TRAD DETERMINE FAULT ACTIVITY section

# Scenario: Going through "Check determine fault activity" section     	
# Given the SFEFLTY19TRAD DETERMINE FAULT ACTIVITY section  
# When I fill the SFEFLTY19TRAD determine faulty activity fields with values
# Then I should see SFEFLTY19TRAD Remove Meter section

# Scenario: Going through Remove Meter section 
# Given the SFEFLTY19TRAD Remove Meter section
# When I fill the SFEFLTY19TRAD Remove Meter details fields with values
# Then I should see SFEFLTY19TRAD Confirm Electric Asset Removal section

# Scenario: Going through Confirm Asset Removal section
# Given the SFEFLTY19TRAD Confirm Electric Asset Removal Section
# When I fill the SFEFLTY19TRAD Confirm Electric Asset Removal Section with values
# Then I should see the SFEFLTY19TRAD New Meter Details Section

# Scenario: Going through New Meter Details section 
# Given the SFEFLTY19TRAD New Meter Details section
# When I fill the SFEFLTY19TRAD New Meter Details Section with values
# Then I should see SFEFLTY19TRAD ADDITIONAL ELECTRICITY CHECKS section

# Scenario: Going through Additional Electricity Tests and Checks section 
# Given the SFEFLTY19TRAD ADDITIONAL ELECTRICITY CHECKS details section
# When I fill the SFEFLTY19TRAD ADDITIONAL ELECTRICITY CHECKS details fields with values
# Then I should see SFEFLTY19TRAD Elec Initial Meter Reading section

# Scenario: Going through Elec Initial Meter Reading section 
# Given the SFEFLTY19TRAD Elec Initial Meter Reading section
# When I fill the SFEFLTY19TRAD Elec Initial Meter Reading section details fields with values
# Then I should see SFEFLTY19TRAD Perform Post Installation Checks section

# Scenario: Going through Perform Post Installation Checks section 
# Given Perform SFEFLTY19TRAD Post Installation Checks section
# When I fill the SFEFLTY19TRAD Perform Post Installation Checks details fields with values
# Then I should see SFEFLTY19TRAD Commission Bind the Comms hub to the WAN section

# Scenario: Going through Commission Bind the Comms hub to the WAN section 
# Given Commission Bind the SFEFLTY19TRAD Comms hub to the WAN section
# When I fill the SFEFLTY19TRAD Commission Bind the Comms hub to the WAN details fields with values
# Then I should see SFEFLTY19TRAD Perform DCC Message Creation for EICOM section

# Scenario: Going through Failing EICOM section
# Given Perform SFEFLTY19TRAD DCC Message Creation for EICOM section
# When I fill the SFEFLTY19TRAD Perform DCC Message Creation for EICOM details fields with values
# Then I should see SFEFLTY19TRAD Energy Efficiency information section

# Scenario: Going through "Energy Efficiency information"
# Given the SFEFLTY19TRAD Energy Efficiency information section 
# When I fill the SFEFLTY19TRAD Energy Efficiency information fields with values
# Then I should see SFEFLTY19TRAD Perform Smart Meter Education and Demonstration section

# Scenario: Going through "Perform Smart Meter Education and Demonstration " 
# Given the SFEFLTY19TRAD Perform Smart Meter Education and Demonstration section 
# When I fill the SFEFLTY19TRAD Perform Smart Meter Education and Demonstration  fields with values
# Then I should see SFEFLTY19TRAD Summary of Job and Smart literature left onsite section

# Scenario: Going through Smart literature left onsite section 
# Given the SFEFLTY19TRAD Smart literature left onsite section
# When I fill the SFEFLTY19TRAD smart literature fields with values
# Then I should finally submit SFEFLTY19TRAD job
# And I should see the Appointment List For SFEFLTY19TRAD