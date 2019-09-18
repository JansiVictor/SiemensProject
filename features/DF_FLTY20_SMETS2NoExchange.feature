# Feature: DF_FLTY20_SMETS2NoExchange

# Scenario Outline: Logging in to job's "Work Order" window
# Given the FLTYTwntyNoExchange Login Page
# When I pass FLTYTwntyNoExchange "<Username>" and "<Password>"
# Then I click FLTYTwntyNoExchange Login button
# And I should see the FLTYTwntyNoExchange Appointment List 

# Examples:
# | Username 		| Password      |
# |  Automation2  |  Aut0m4t1on2  |

# Scenario: Select the Latest FLTYTwntyNoExchange workOrder
# Given the FLTYTwntyNoExchange Appointment List window
# When I click on FLTYTwntyNoExchange select button
# Then I should see FLTYTwntyNoExchange Work Order window

# Scenario: Going through FLTYTwntyNoExchange Call Forward
# Given the FLTYTwntyNoExchange "Work Order" window
# When i see FLTYTwntyNoExchange Call Forward or Arrive Button
# Then I click on FLTYTwntyNoExchange CALL FORWARD button
# Then I should see FLTYTwntyNoExchange page contect display
# #And I should see the FLTYTwntyNoExchange CUSTOMER CONTACT NUMBER
# And I should see FLTYTwntyNoExchange Contact made field

# Scenario: Selecting FLTYTwntyNoExchange job and setting to depart
# Given the FLTYTwntyNoExchange "Work Order" page
# When I fill the FLTYTwntyNoExchange fields with the value
# And I click on FLTYTwntyNoExchange DEPART button 
# Then I should see FLTYTwntyNoExchange  for Appointment window
# And I should see the FLTYTwntyNoExchange correct MPAN details
# And I should see the FLTYTwntyNoExchange correct Customer Name details
# And I should see the FLTYTwntyNoExchange correct PostCode details

# Scenario: Approving FLTYTwntyNoExchange "Depart for Appointment" job
# And "Appointment" FLTYTwntyNoExchange details
# When I click on FLTYTwntyNoExchange Appointment OK button  	
# And I should see FLTYTwntyNoExchange ARRIVE button
# And I should see FLTYTwntyNoExchange DOORSTEP PROTOCOL tab activated

# Scenario: Set FLTYTwntyNoExchange job to Arrived status
# //Given the FLTYTwntyNoExchange "WorkOrder" page
# When I click on FLTYTwntyNoExchange ARRIVE button  	
# Then I should see FLTYTwntyNoExchange Arrival Time details
# And I should see FLTYTwntyNoExchange  BE AWARE OF ANY DANGER! section

# Scenario: Going through FLTYTwntyNoExchange "BE AWARE OF ANY DANGER!" section
# Given the FLTYTwntyNoExchange BE AWARE OF ANY DANGER! section 
# When I fill the FLTYTwntyNoExchange DoorStep Protocol fields with the value
# And I click on FLTYTwntyNoExchange ON SITE button 	
# Then I should see FLTYTwntyNoExchange RISK ASSESSMENT tab activated
# And I should see FLTYTwntyNoExchange Initial Risk Assessment for GAS section

# Scenario: Going through FLTYTwntyNoExchange "INITIAL RISK ASSESSMENT"
# Given the FLTYTwntyNoExchange INITIAL RISK ASSESSMENT section
# When I fill the FLTYTwntyNoExchange initialRisk field with the values
# #Then I should see the FLTYTwntyNoExchange see INFO window

# Scenario: Going through FLTYTwntyNoExchange "INFO" window   
# Given the FLTYTwntyNoExchange INFO window with the text
# #When I click on FLTYTwntyNoExchange INFO OK button 
# #Then I should see FLTYTwntyNoExchange RISK ASSESSMENT ELEC section 

# Scenario: Going through FLTYTwntyNoExchange "RISK ASSESSMENT - ELEC" section
# Given the FLTYTwntyNoExchange RISK ASSESSMENT - ELEC section
# When I fill the FLTYTwntyNoExchange RISK ASSESSMENT - ELEC fields with the values
# And I click on FLTYTwntyNoExchange CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on FLTYTwntyNoExchange NEXT SECTION button
# Then I should see the FLTYTwntyNoExchange RISK ASSESSMENT - GAS section

# Scenario: Going through FLTYTwntyNoExchange "RISK ASSESSMENT - GAS"
# Given the FLTYTwntyNoExchange RISK ASSESSMENT - GAS section
# When I fill the FLTYTwntyNoExchange RISK ASSESSMENT fields with the values
# # Then I click on FLTYTwntyNoExchange CAPTURE PHOTOGRAPHIC EVIDENCE button
# # And I fill the FLTYTwntyNoExchange CAPTURE PHOTOGRAPHIC EVIDENCE fields with the values
# And I should see FLTYTwntyNoExchange CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

# Scenario: Going through FLTYTwntyNoExchange "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
# Given the FLTYTwntyNoExchange Click CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
# Then I should see FLTYTwntyNoExchange CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
# Then the FLTYTwntyNoExchange Click CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
# #When I click on FLTYTwntyNoExchange CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
# Then I should see FLTYTwntyNoExchange INITIAL POLARITY CHECK - MARTINDALE TEST section

# Scenario: Going through FLTYTwntyNoExchange "INITIAL POLARITY CHECK MARTINDALE TEST" section
# Given the FLTYTwntyNoExchange INITIAL POLARITY CHECK MARTINDALE TEST section
# When I fill the FLTYTwntyNoExchange INITIAL POLARITY CHECK field with the values
# Then I click on FLTYTwntyNoExchange CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# Then I fill the FLTYTwntyNoExchange Socket Found field with the values
# And I should see FLTYTwntyNoExchange INITIAL POLARITY CHECK AT METER AND CUT OUT section

# Scenario: Going through FLTYTwntyNoExchange "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
# Given the FLTYTwntyNoExchange INITIAL POLARITY CHECK - AT METER AND CUT OUT section
# When I fill the FLTYTwntyNoExchange METER AND CUT OUT fields with the values
# And I click on FLTYTwntyNoExchange SUBMIT button
# #Then I should see the FLTYTwntyNoExchange CURRENT IHD-PPMID DETAILS section in remove tab

# Scenario: Going through FLTYTwntyNoExchange "CURRENT IHD/PPMID DETAILS" section
# Given the FLTYTwntyNoExchange CURRENT IHD-PPMID DETAILS section
# When I fill the FLTYTwntyNoExchange CURRENT IHD-PPMID fields with the values
# Then I should see the FLTYTwntyNoExchange CURRENT METER DETAILS - GAS section
# #Then I should see the page FLTYTwntyNoExchange contect display of current meter details

# Scenario: Going through "CURRENT METER DETAILS - GAS" section
# Given the FLTYTwntyNoExchange CURRENT METER DETAILS - GAS section
# When I fill the FLTYTwntyNoExchange CURRENT GAS METER DETAILS field with the value
# And I fill the FLTYTwntyNoExchange CURRENT METER DETAILS field with the value
# Then I should see FLTYTwntyNoExchange CURRENT COMMS HUB DETAILS section

# Scenario: Going through "CURRENT COMMS HUB DETAILS" section
# Given the FLTYTwntyNoExchange CURRENT COMMS HUB DETAILS section
# When I fill the FLTYTwntyNoExchange CURRENT COMMS HUB fields with the values
# Then I click on FLTYTwntyNoExchange CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
# And I should see FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY section

# Scenario: Going through "DETERMINE FAULT ACTIVITY" section
# Given the FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY section
# When I fill the FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY fields with the values
# And FLTYTwntyNoExchange I should see PRE INSTALLATION GAS TIGHTNESS TEST section

# Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
# Given FLTYTwntyNoExchange the PRE INSTALLATION GAS TIGHTNESS TEST section
# When FLTYTwntyNoExchange I fill the PRE INSTALLATION GAS TIGHTNESS TEST fields with the values
# Then I should see FLTYTwntyNoExchange Submit Button

# Scenario: Going through "ADDITIONAL ELECTRICITY TESTS & CHECKS" section
# Given FLTYTwntyNoExchange the ADDITIONAL ELECTRICITY TESTS & CHECKS section
# When FLTYTwntyNoExchange I fill the ADDITIONAL ELECTRICITY TESTS & CHECKS fields with the Values
# Then FLTYTwntyNoExchange I should see POST INSTALLATION CHECKS section

# Scenario: Going through FLTYTwntyNoExchange "Post Installation GAS" GAS section 
# Given the FLTYTwntyNoExchange Post Installation GAS section 
# When I fill the FLTYTwntyNoExchange Post Installation GAS section fields with values
# Then FLTYTwntyNoExchange I should see the COMMISSIONING section

# Scenario: Going through "COMMISSIONING" section
# Given FLTYTwntyNoExchange the COMMISSIONING section
# When FLTYTwntyNoExchange I fill the COMMISSIONING FldNames with the Values
# And FLTYTwntyNoExchange I click on ADD ANOTHER ASSET button
# #And FLTYTwntyNoExchange I fill the FldName40 with the Value40
# And FLTYTwntyNoExchange I clk commisioning on NEXT button
# Then FLTYTwntyNoExchange I should see INSTALL KIT section

# Scenario: Going through "Install Kit " GAS section
# Given FLTYTwntyNoExchange the Gas Install Kit gas section
# When FLTYTwntyNoExchange I fill the Gas Install Kit gas section fields with values
# Then FLTYTwntyNoExchange I should see Perform Post Installation GAS Checks sec


#  Scenario: Going through "Post Installation GAS" GAS Tightness Test section
# Given FLTYTwntyNoExchange the Post Installation GAS Tightness Test sec
# When FLTYTwntyNoExchange I fill the Post Installation GAS Tightness Test sec fields with values
# Then FLTYTwntyNoExchange I should see GAS APPLIANCE SAFETY CHECKS section

# Scenario: Going through "Gas Appliance Safety Checks" GAS section
# Given FLTYTwntyNoExchange the Gas Appliance Safety Checks sec
# When FLTYTwntyNoExchange I fill the Gas Appliance Safety Checks section fields with values and Sub
# Then FLTYTwntyNoExchange I should see Submit Install Button

# Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
# Given FLTYTwntyNoExchange the DEVICE BINDING & COMMISSIONING section
# When FLTYTwntyNoExchange I fill the DEVICE BINDING fields and click next
# Then FLTYTwntyNoExchange I should see ENERGY EFFICIENCY INFORMATION section

# Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
# Given FLTYTwntyNoExchange the ENERGY EFFICIENCY INFORMATION section
# When FLTYTwntyNoExchange I fill the ENERGY EFFICIENCY fieldss and click next
# #Then FLTYTwntyNoExchange I should see SMART EDUCATION section


# Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
# Given FLTYTwntyNoExchange the CAPTURE CUSTOMER SIGNATURE section
# When FLTYTwntyNoExchange I write signature in Customer Signature
# And FLTYTwntyNoExchange I fill the CAPTURE CUSTOMER SIGNATURE fields and Job Complete
# Then FLTYTwntyNoExchange see Job Completed screen


