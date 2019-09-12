# Feature: Login into Siemen Application

# Scenario Outline: Logging in to job's "Work Order" window
# Given the Login Page
# When I pass "<Username>" and "<Password>"
# Then I click Login button
# And I should see the Appointment List

# Examples:
# 	| Username    | Password    |
# 	| E0000022 | 000Password |


# Scenario: Select the Latest workOrder
# Given the Appointment List window
# When I click on select button
# Then I should see Work Order window


# Scenario: Going through Call Forward
# Given the "Work Order" window
# When i see Call Forward or Arrive Button
# Then I click on CALL FORWARD button
# Then I should see page contect display
# And I should see the CUSTOMER CONTACT NUMBER
# And I should see Contact made field

# Scenario: Selecting job and setting to depart
# Given the "Work Order" page
# When I fill the fields with the value
# And I click on DEPART button
# Then I should see Depart for Appointment window

# Scenario: Approving "Depart for Appointment" job
# Given Appointment details
# When I click on OK button
# Then I should see ARRIVE button
# And I should see DOORSTEP PROTOCOL tab activated

# Scenario: Set job to Arrived status
# Given the "WorkOrder" page
# When I click on ARRIVE button
# Then I should see Arrival Time details
# And I should see BE AWARE OF ANY DANGER! section

# Scenario: Going through "BE AWARE OF ANY DANGER!" section
# Given the BE AWARE OF ANY DANGER! section
# When I fill the DoorStep Protocol fields with the value
# And I click on ON SITE button
# Then I should see RISK ASSESSMENT tab activated
# And I should see INITIAL RISK ASSESSMENT section

# Scenario: Going through "INITIAL RISK ASSESSMENT"
# Given the INITIAL RISK ASSESSMENT section
# When I fill the initialRisk field with the values
# Then I should see INFO window

# Scenario: Going through "INFO" window
# Given the INFO window with the text
# When I click on OK button
# Then I should see RISK ASSESSMENT ELEC section

# Scenario: Going through "RISK ASSESSMENT - ELEC" section
# Given the RISK ASSESSMENT - ELEC section
# When I fill the RISK ASSESSMENT - ELEC fields with the values
# And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on NEXT SECTION button
# Then I should see the RISK ASSESSMENT - GAS section

# Scenario: Going through "RISK ASSESSMENT - GAS"
# Given the RISK ASSESSMENT - GAS section
# When I fill the field05 with the value05
# Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
# And I fill the field06 with the value06
# And I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

# Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
# Given the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
# When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
# Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section

# Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
# Given the INITIAL POLARITY CHECK MARTINDALE TEST section
# When I fill the INITIAL POLARITY CHECK field with the values
# Then I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# Then I fill the Socket Found field with the values
# And I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section

# Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
# Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section
# When I fill the METER AND CUT OUT fields with the values
# And I click on SUBMIT button
# Then I should see the CURRENT IHD-PPMID DETAILS section in remove tab

# Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
# Given the CURRENT IHD-PPMID DETAILS section
# When I fill the field010 with the value010
# And I should see CURRENT METER DETAILS - GAS section
# Then I should see the page contect display of current meter details

# Scenario: Going through "CURRENT METER DETAILS - GAS" section
# Given the CURRENT METER DETAILS - GAS section
# When I fill the field with the value
# Then I should see CURRENT COMMS HUB DETAILS section
# And I should see the page contect display

# Scenario: Going through "CURRENT COMMS HUB DETAILS" section
# Given the CURRENT COMMS HUB DETAILS section
# When I fill the field13 with the value13
# Then I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
# And I should see DETERMINE FAULT ACTIVITY section

# Scenario: Going through "DETERMINE FAULT ACTIVITY" section
# Given the DETERMINE FAULT ACTIVITY section
# When I fill the field14 with the value014
# Then I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
# And I fill the field15 with the value15
# And I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
# And I fill the field16 with the value16
# And I select Comms Hub field
# And I select Gas Meter field
# And I select Regulator field
# And I select IHD-PPMID field
# And I click on NEXT SECT button
# And I should see PRE INSTALLATION GAS TIGHTNESS TEST section

# Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
# Given the PRE INSTALLATION GAS TIGHTNESS TEST section
# When I fill the field17 with the value17
# Then I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
# And I fill the field18 with the value18
# And I see Gas Tightness Test Completed field as FAIL
# And I fill the field19 with the value19
# And I should see REMOVE IHD-PPMID section

# Scenario: Going through "REMOVE IHD/PPMID" section
# Given the REMOVE IHD-PPMID section
# When I fill the field20 with the value20
# Then I click on OK button in Info window with the text Ensure IHD is Powered On
# Then I fill the field21 with the value21
# Then I click on NEXT SECTION button in remove IHD
# And I should see SEND MESSAGE IHD-PPMID section

# Scenario: Going through "SEND MESSAGE IHD / PPMID" section
# Given the SEND MESSAGE IHD-PPMID section
# When I click on Send Message IHD-PPMID button
# Then I should see Awaiting Response button

# Scenario: Waiting "AWAITING RESPONSE"
# Given the Awaiting Response button
# When I wait for the button to disappear
# Then I should see PPMID Removal Successful button
# And I should see Request Sent Successfully text message
# And I should see Asset Unjoined text message

# Scenario: Confirming "PPMID Removal Successful"
# Given the PPMID Removal Successful button is displayed
# When I click on PPMID Removal Successful button
# Then I should see CONFIRM IHD-PPMID ASSET REMOVAL section

# Scenario: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section
# Given the CONFIRM IHD-PPMID ASSET REMOVAL section
# When I fill the field22 with the value22
# And I click on OK button in Updated window with the text Asset successfully added to Returns list
# Then I should see REMOVE GAS METER section

# Scenario: Going through "REMOVE GAS METER" section
# Given the REMOVE GAS METER section
# When I fill the field23 with the value23
# Then I click on NEXT button in removing gas meter
# And I should see SEND MESSAGE GMREM section

# Scenario: Going through "SEND MESSAGE GMREM" section
# Given the SEND MESSAGE GMREM section
# When I click on Send Message GMREM button
# Then I should see Awaiting Response button in GMREM

# Scenario: Waiting "AWAITING RESPONSE"
# Given the Awaiting Response btn in Send GMREM
# When I wait for the btn to disappear in GMREM
# Then I should see Removal Successful button
# And I should see GMREM Request Sent Successfully txt message
# And I should see OK to Remove Asset text message

# Scenario: Confirming "Removal Successful"
# Given the Removal Successful button is displayed
# When I click on Removal Successful button
# Then I should see CONFIRM GAS ASSET REMOVAL section

# Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
# Given the CONFIRM GAS ASSET REMOVAL section
# When I fill the field24 with the value24
# Then I click on OK btn in Updated window with the text Asset successfully added to Returns list
# And I should see REMOVE COMMS HUB window

# Scenario: Going through "REMOVE COMMS HUB" section
# Given the REMOVE COMMS HUB section
# When I fill the field027 with the value27
# Then I click on NEXT SEC button from Remove Comms Hub
# And I should see CONFIRM COMMS HUB REMOVAL section

# Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
# Given the CONFIRM COMMS HUB REMOVAL section
# When I fill the field28 with the value28
# And I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step
# Then I click on SUBMIT btn from confirm comms hub removal
# And I should see INSTALL COMMS HUB section

# Scenario: Going through "INSTALL COMMS HUB" section
# Given the INSTALL COMMS HUB sec
# When I fill the Ins comms hub fields and capture photo EVIDENCE
# Then I should see SEND MSG XCHUB section

# Scenario: Continuing "SEND MESSAGE XCHUB" section
# Given the SEND MESSAGE XCHUB section
# When I click on Send Message XCHUB button
# Then I should see XCHUB Awaiting Response butn

# Scenario: Waiting "AWAITING RESPONSE"
# Given the Awaiting Response butn XCHUB
# When I wait for the butn to disappear XCHUB
# Then I should see Removal Successful butn XCHUB
# And I should see Request Sent Successfully text msg XCHUB
# And I should see Whitelist transfer completed check LED indication is correct text message

# Scenario: Confirming "Removal Successful"
# Given the Removal Successful butn is displayed
# When I click on Removal Successful butn
# Then I should see NEW GAS METER DETAILS section

# Scenario: Going through "NEW GAS METER DETAILS" section
# Given the NEW GAS METER DETAILS section
# When I fill the fields and values for New gas meter details
# Then I should see NEW REGULATOR section

# Scenario: Going through "NEW REGULATOR" section
# Given the NEW REGULATOR section
# When I fill the fields and values for new regulator section
# Then I should see GAS INITIAL METER READING section

# Scenario: Going through "GAS INITIAL METER READING" section
# Given the GAS INITIAL METER READING section
# When I fill the fields with values Gas initial meter reading
# Then I should see INSTALL KIT section

# Scenario: Going through "Install Kit " GAS section
# Given the Gas Install Kit gas section
# When I fill the Gas Install Kit gas section fields with values
# Then I should see Perform Post Installation GAS Checks sec

# Scenario: Going through "Post Installation GAS" GAS section
# Given the Post Installation GAS sec
# When I fill the Post Installation GAS sec fields with values
# Then I should see GICOM Message sec

# Scenario: Going through "GAS INSTALL & COMMISSIONING" section
# Given the GAS INSTALL & COMMISSIONING sec
# When I click on Send Message GICOM butn
# Then I should see Awaiting Response butn

# Scenario: Waiting "AWAITING RESPONSE"
# Given the Awaiting Response butn after gas install
# When I wait for the button to disappear after post install
# Then I should see Commissioning Successful button
# And I should see Request Sent Successfully txt message
# And I should see Pair Asset to Comms Hub text message
# And I should see DCC Handover Requested text message
# And I should see Device Clock Synchronised text message
# And I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message
# And I should see DCC Handover Requested for GPF Device text message
# And I should see Joins are being Initiated text message


# Scenario: Confirming "Commissioning Successful"
# Given the Commissioning Successful button is displayed
# When I click on Commissioning Successful button
# Then I should see GAS APPLIANCE SAFETY CHECKS section


# Scenario: Going through "Gas Appliance Safety Checks" GAS section
# Given the Gas Appliance Safety Checks sec
# When I fill the Gas Appliance Safety Checks section fields with values and Sub
# Then I should see SMETS PPMID sec

# Scenario: Going through "INSTALL PPMID" section
# Given the "INSTALL PPMID" section
# When I fill the fields for Install PPMID
# Then I should see PPMID COMMISSIONING section


# Scenario: Going through "PPMID COMMISSIONING" section
# Given the PPMID COMMISSIONING section
# When I click on Send Message IHD-PPMID butn
# Then I should see PPMID Awaiting Response butn


# Scenario: Waiting "AWAITING RESPONSE"
# Given the Awaiting Response butn after ppmid commisioning
# When I wait for the button to disappear after PPMID Commisioning
# Then I should see PPMID Commissioning Successful button
# And I should see PPMID Request Sent Successfully txt message
# And I should see PPMID Pair Asset to Comms Hub text message
# And I should see Pairing Successful text message

# Scenario: Confirming "PPMID Commissioning Successful"
# Given the PPMID Commissioning Successful button is displayed
# When I click on SUB button
# Then I should see DEVICE BINDING and COMMISSIONING sec








