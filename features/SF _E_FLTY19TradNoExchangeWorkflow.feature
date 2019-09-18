# Feature: SF_E_FLTY19 TRAD NoExchange Workflow

# Scenario Outline: Logging in to job's "Work Order" window
# Given the FLTYTTradNoExchange Login Page
# When I pass FLTYTTradNoExchange "<Username>" and "<Password>"
# Then I click FLTYTTradNoExchange Login button
# And I should see the FLTYTTradNoExchange Appointment List 

# Examples:
# | Username 		| Password      |
# |  Automation2  |  Aut0m4t1on2  |

# Scenario: Select the Latest FLTYTTradNoExchange workOrder
# Given the FLTYTTradNoExchange Appointment List window
# When I click on FLTYTTradNoExchange select button
# Then I should see FLTYTTradNoExchange Work Order window

# Scenario: Going through FLTYTTradNoExchange Call Forward
# Given the FLTYTTradNoExchange "Work Order" window
# When i see FLTYTTradNoExchange Call Forward or Arrive Button
# Then I click on FLTYTTradNoExchange CALL FORWARD button
# Then I should see FLTYTTradNoExchange page contect display
# #And I should see the FLTYTTradNoExchange CUSTOMER CONTACT NUMBER
# And I should see FLTYTTradNoExchange Contact made field

# Scenario: Selecting FLTYTTradNoExchange job and setting to depart
# Given the FLTYTTradNoExchange "Work Order" page
# When I fill the FLTYTTradNoExchange fields with the value
# And I click on FLTYTTradNoExchange DEPART button 
# Then I should see FLTYTTradNoExchange  for Appointment window
# And I should see the FLTYTTradNoExchange correct MPAN details
# And I should see the FLTYTTradNoExchange correct Customer Name details
# And I should see the FLTYTTradNoExchange correct PostCode details

# Scenario: Approving FLTYTTradNoExchange "Depart for Appointment" job
# And "Appointment" FLTYTTradNoExchange details
# When I click on FLTYTTradNoExchange Appointment OK button  	
# And I should see FLTYTTradNoExchange ARRIVE button
# And I should see FLTYTTradNoExchange DOORSTEP PROTOCOL tab activated

# Scenario: Set FLTYTTradNoExchange job to Arrived status
# //Given the FLTYTTradNoExchange "WorkOrder" page
# When I click on FLTYTTradNoExchange ARRIVE button  	
# Then I should see FLTYTTradNoExchange Arrival Time details
# And I should see FLTYTTradNoExchange  BE AWARE OF ANY DANGER! section

# Scenario: Going through FLTYTTradNoExchange "BE AWARE OF ANY DANGER!" section
# Given the FLTYTTradNoExchange BE AWARE OF ANY DANGER! section 
# When I fill the FLTYTTradNoExchange DoorStep Protocol fields with the value
# And I click on FLTYTTradNoExchange ON SITE button 	
# Then I should see FLTYTTradNoExchange RISK ASSESSMENT tab activated
# And I should see FLTYTTradNoExchange Initial Risk Assessment for GAS section

# Scenario: Going through FLTYTTradNoExchange "INITIAL RISK ASSESSMENT"
# Given the FLTYTTradNoExchange INITIAL RISK ASSESSMENT section
# When I fill the FLTYTTradNoExchange initialRisk field with the values
# #Then I should see the FLTYTTradNoExchange see INFO window

# Scenario: Going through FLTYTTradNoExchange "INFO" window   
# Given the FLTYTTradNoExchange INFO window with the text
# #When I click on FLTYTTradNoExchange INFO OK button 
# #Then I should see FLTYTTradNoExchange RISK ASSESSMENT ELEC section 

# Scenario: Going through FLTYTTradNoExchange "RISK ASSESSMENT - ELEC" section
# Given the FLTYTTradNoExchange RISK ASSESSMENT - ELEC section
# When I fill the FLTYTTradNoExchange RISK ASSESSMENT - ELEC fields with the values
# And I click on FLTYTTradNoExchange CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on FLTYTTradNoExchange NEXT SECTION button

# Scenario: Going through FLTYTTradNoExchange "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION" section
# Given the FLTYTTradNoExchange Click CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
# Then I should see FLTYTTradNoExchange INITIAL POLARITY CHECK - MARTINDALE TEST section

# Scenario: Going through FLTYTTradNoExchange "INITIAL POLARITY CHECK MARTINDALE TEST" section
# Given the FLTYTTradNoExchange INITIAL POLARITY CHECK MARTINDALE TEST section
# When I fill the FLTYTTradNoExchange INITIAL POLARITY CHECK field with the values
# Then I click on FLTYTTradNoExchange CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# Then I fill the FLTYTTradNoExchange Socket Found field with the values
# And I should see FLTYTTradNoExchange INITIAL POLARITY CHECK AT METER AND CUT OUT section

# Scenario: Going through FLTYTTradNoExchange "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
# Given the FLTYTTradNoExchange INITIAL POLARITY CHECK - AT METER AND CUT OUT section
# When I fill the FLTYTTradNoExchange METER AND CUT OUT fields with the values
# And I click on FLTYTTradNoExchange SUBMIT button
# #Then I should see the FLTYTTradNoExchange CURRENT IHD-PPMID DETAILS section in remove tab

# Scenario: Going through FLTYTTradNoExchange "CURRENT IHD/PPMID DETAILS" section
# Given the FLTYTTradNoExchange CURRENT IHD-PPMID DETAILS section
# When I fill the FLTYTTradNoExchange CURRENT IHD-PPMID fields with the values
# Then I should see the FLTYTTradNoExchange CURRENT METER DETAILS - Elec section
# #Then I should see the page FLTYTTradNoExchange contect display of current meter details

# Scenario: Going through "CURRENT METER DETAILS - Elec" section
# Given the FLTYTTradNoExchange CURRENT METER DETAILS - Elec section
# When I fill the FLTYTTradNoExchange CURRENT Elec METER DETAILS field with the value
# And I should see FLTYTTradNoExchange DETERMINE FAULT ACTIVITY section

# Scenario: Going through "DETERMINE FAULT ACTIVITY" section
# Given the FLTYTTradNoExchange DETERMINE FAULT ACTIVITY section
# When I fill the FLTYTTradNoExchange DETERMINE FAULT ACTIVITY fields with the values
# And FLTYTTradNoExchange I should see  Remove Submit section

# Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
# Given FLTYTTradNoExchange the ENERGY EFFICIENCY INFORMATION section
# When FLTYTTradNoExchange I fill the ENERGY EFFICIENCY fieldss and click next
# #Then FLTYTwntyNoExchange I should see SMART EDUCATION section


# Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
# Given FLTYTTradNoExchange the CAPTURE CUSTOMER SIGNATURE section
# When FLTYTTradNoExchange I write signature in Customer Signature
# And FLTYTTradNoExchange I fill the CAPTURE CUSTOMER SIGNATURE fields and Job Complete
# Then FLTYTTradNoExchange see Job Completed screen