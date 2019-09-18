# Feature: Login into Siemen Application And proceed with Exchange21 Work Order

# Scenario Outline: Logging in to job's "Work Order" window
# Given the ExchTwFour Login Page
# When I pass ExchTwFour "<Username>" and "<Password>"
# Then I click ExchTwFour Login button
# And I should see the ExchTwFour Appointment List 

# Examples:
# | Username 		| Password      |
# |  Automation2  |  Aut0m4t1on2  |


# Scenario: Select the ExchTwFour Latest workOrder
# Given the ExchTwFour Appointment List window
# When I click on ExchTwFour select button
# Then I should see ExchTwFour Work Order window

# Scenario: Going through ExchTwFour Call Forward
# Given the ExchTwFour "Work Order" window
# When i see ExchTwFour Call Forward or Arrive Button
# Then I click on ExchTwFour CALL FORWARD button
# Then I should see page ExchTwFour contect display
# And I should see the ExchTwFour CUSTOMER CONTACT NUMBER
# And I should see ExchTwFour Contact made field

# Scenario: Selecting ExchTwFour job and setting to depart
# Given the ExchTwFour "Work Order" page
# When I fill the ExchTwFour fields with the value
# And I click on ExchTwFour DEPART button 
# Then I should see ExchTwFour Depart for Appointment window
# And I should see the ExchTwFour correct MPAN details
# And I should see the ExchTwFour correct Customer Name details
# And I should see the ExchTwFour correct PostCode details

# Scenario: Approving ExchTwFour "Depart for Appointment" job
# And ExchTwFour "Appointment" details
# When I click on ExchTwFour MPRNOK button  	
# And I should see ExchTwFour ARRIVE button
# And I should see ExchTwFour DOORSTEP PROTOCOL tab activated

# Scenario: Set ExchTwFour job to Arrived status
# Given the ExchTwFour "WorkOrder" page
# When I click on ExchTwFour ARRIVE button  	
# Then I should see ExchTwFour Arrival Time details
# And I should see ExchTwFour BE AWARE OF ANY DANGER! section

# Scenario: Going through ExchTwFour "BE AWARE OF ANY DANGER!" section
# Given the ExchTwFour BE AWARE OF ANY DANGER! section 
# When I fill the ExchTwFour DoorStep Protocol fields with the value
# And I click on ExchTwFour ON SITE button 	
# Then I should see ExchTwFour RISK ASSESSMENT tab activated
# And I should see ExchTwFour INITIAL RISK ASSESSMENT section

# Scenario: Going through ExchTwFour "INITIAL RISK ASSESSMENT"
# Given the ExchTwFour INITIAL RISK ASSESSMENT section
# When I fill the ExchTwFour initialRisk field with the values
# Then I should see ExchTwFour INFO window

# Scenario: Going through ExchTwFour "INFO" window   
# Given the ExchTwFour INFO window with the text
# When I click on ExchTwFour OK button 
# Then I should see ExchTwFour RISK ASSESSMENT ELEC section 

# Scenario: Going through ExchTwFour "RISK ASSESSMENT - ELEC" section	
# Given the ExchTwFour RISK ASSESSMENT - ELEC section
# When I fill the ExchTwFour RISK ASSESSMENT - ELEC fields with the values
# And I click on ExchTwFour CAPTURE PHOTO OF HAZARD IDENTIFIED button
# And I click on ExchTwFour NEXT SECTION button
# Then I should see ExchTwFour CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section 

# Scenario: Going through ExchTwFour "RISK ASSESSMENT - GAS" section	
# Given the ExchTwFour RISK ASSESSMENT - GAS section
# When I fill the ExchTwFour RISK ASSESSMENT - GAS fields with the values
# Then I should see the Suitable for ExchTwFour Smart Installation section


# Scenario: Going through ExchTwFour "Suitable for Smart Installation"
# Given the Suitable for ExchTwFour Smart Installation section
# When I click on Is ExchTwFour Site Suitable for Smart Installation? button
# And I click on ExchTwFour Equipment Reposition Required?
# And I enter ExchTwFour Additional Notes for Smart installation Check
# And I click on ExchTwFour smart installation NEXT SECTION button
# Then I should see ExchTwFour INITIAL POLARITY CHECK - MARTINDALE TEST section 

# Scenario: Going through ExchTwFour "Suitable for Smart Installation GAS"
# Given the Suitable for ExchTwFour Smart Installation GAS section
# When I fill ExchTwFour Site Suitable for Smart Installation? GAS button

# Scenario: Going through ExchTwFour "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
# Given the ExchTwFour CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
# When I click on ExchTwFour CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
# Then I should see ExchTwFour Capture Photo of GAS Installation section
# Then I should see ExchTwFour INITIAL POLARITY CHECK - MARTINDALE TEST section  

# Scenario: Going through ExchTwFour "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
# Given the ExchTwFour INITIAL POLARITY CHECK MARTINDALE TEST section  
# When I fill the ExchTwFour INITIAL POLARITY CHECK field with the values
# And I click on ExchTwFour CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# And I fill the ExchTwFour Socket Found field with the values
# Then I should see ExchTwFour INITIAL POLARITY CHECK AT METER AND CUT OUT section   

# Scenario: Going through ExchTwFour "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
# Given the ExchTwFour INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
# When I fill the ExchTwFour METER AND CUT OUT fields with the values
# #for new WO this is not req, for existing one required
# And I click on ExchTwFour SUBMIT button
# And I should see PRE INSTALLATION GAS TIGHTNESS TEST section

# Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
# Given ExchTwFour the PRE INSTALLATION GAS TIGHTNESS TEST section
# When ExchTwFour I fill the field17 with the value17
# Then ExchTwFour I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
# And ExchTwFour I fill the field18 with the value18
# And ExchTwFour I see Gas Tightness Test Completed field as FAIL
# And ExchTwFour I fill the field19 with the value19
# And ExchTwFour I should see REMOVE IHD-PPMID section

# Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
# Given ExchTwFour the CURRENT IHD-PPMID DETAILS section
# When ExchTwFour I fill the field010 with the value010
# And ExchTwFour I should see CURRENT METER DETAILS - GAS section
# Then ExchTwFour I should see the page contect display of current meter details

# Scenario: Going through "CURRENT METER DETAILS - GAS" section
# Given ExchTwFour the CURRENT METER DETAILS - GAS section
# When ExchTwFour I fill the field with the value
# Then I should see ExchTwFour CURRENT COMMS HUB DETAILS section 

# # Scenario: Going through "CURRENT METER DETAILS" section
# # Given the ExchTwFour CURRENT METER DETAILS section 
# # When I fill the ExchTwFour field011 with the value Value011 
# # Then I should see ExchTwFour CURRENT COMMS HUB DETAILS section 

# Scenario: Going through "CURRENT COMMS HUB DETAILS" section
# Given the ExchTwFour CURRENT COMMS HUB DETAILS section 
# When I fill the ExchTwFour field013 with the value Value013 



# # Scenario: Confirming "PPMID Removal Successful"
# # Given ExchTwFour the PPMID Removal Successful button is displayed
# # When ExchTwFour I click on PPMID Removal Successful button
# # Then ExchTwFour I should see CONFIRM IHD-PPMID REMOVAL section

# # Scenario: Going through "CONFIRM IHD / PPMID REMOVAL" section
# # Given ExchTwFour the CONFIRM IHD-PPMID REMOVAL section
# # When ExchTwFour I fill the field22 with the value22
# # And I should see ExchTwFour SEND MESSAGE IHD PPMID section 

# # Scenario: Going through "SEND MESSAGE IHD / PPMID" section
# # Given the ExchTwFour SEND MESSAGE IHD-PPMID section 
# # When I click on ExchTwFour Send Message IHD PPMID button 
# # Then I should see ExchTwFour Awaiting Response button 

# # Scenario: Waiting "AWAITING RESPONSE"
# # Given the ExchTwFour Awaiting Response button 
# # When I wait for ExchTwFour the butn to disappear 
# # Then I should see ExchTwFour PPMID Removal Successful button 
# # And I should see ExchTwFour Request Sent Successfully text message 

# # Scenario: Going through "CONFIRM IHD-PPMID ASSET REMOVAL" section
# # Given the ExchTwFour CONFIRM IHD-PPMID ASSET REMOVAL section 
# # When I fill the ExchTwFour field22 with the Value22 
# # Then I clk ExchTwFour OK button in Updated window with the text Asset successfully added to Returns list 
# # And I should see ExchTwFour REMOVE METER section

# # Scenario: Going through "REMOVE GAS METER" section
# # Given ExchTwFour the REMOVE GAS METER section
# # When ExchTwFour I fill the field23 with the value23
# # Then ExchTwFour I click on NEXT button in removing gas meter
# # And ExchTwFour I should see SEND MESSAGE GMREM section

# # # Scenario: Going through "SEND MESSAGE GMREM" section
# # # Given the SEND MESSAGE GMREM section
# # # When I click on Send Message GMREM button
# # # Then I should see Awaiting Response button in GMREM

# # Scenario: Waiting "AWAITING RESPONSE"
# # Given ExchTwFourG the Awaiting Response btn in Send GMREM
# # When ExchTwFourG I wait for the btn to disappear in GMREM
# # Then ExchTwFourG I should see Removal Successful button
# # And ExchTwFourG I should see GMREM Request Sent Successfully txt message
# # And ExchTwFourG I should see OK to Remove Asset text message

# # Scenario: Confirming "Removal Successful"
# # Given ExchTwFourG the Removal Successful button is displayed
# # When ExchTwFourG I click on Removal Successful button
# # Then ExchTwFour I should see CONFIRM GAS ASSET REMOVAL section

# # Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
# # Given ExchTwFour the CONFIRM GAS ASSET REMOVAL section
# # When ExchTwFour I fill the field24 with the value24
# # Then ExchTwFour I click on OK btn in Updated window with the text Asset successfully added to Returns list
# # And ExchTwFourG I should see REMOVE COMMS HUB window

# # Scenario: Going through "REMOVE METER" section
# # Given ExchTwFour the REMOVE METER section
# # When ExchTwFour I fill the field023 with the Value023
# # And ExchTwFour I clk remove meter NEXT SECTION button
# # Then ExchTwFour I should see SEND MESSAGE EMREM section

# # Scenario: Going through "SEND MESSAGE EMREM" section
# # Given ExchTwFour the SEND MESSAGE EMREM section
# # When ExchTwFour I click on Send Message EMREM button
# # Then ExchTwFour I should see Awaiting Response button

# # Scenario: Waiting "AWAITING RESPONSE"
# # Given ExchTwFour the Awaiting Response button
# # When ExchTwFour I wait for the btn to disappear in EMREM
# # Then ExchTwFour I should see Removal Successful button
# # And ExchTwFour I should see Request Sent Successfully text message
# # And ExchTwFour I should see OK to Remove Asset text message

# # Scenario: Confirming "Removal Successful"
# # Given ExchTwFour the Removal Successful button is displayed
# # When ExchTwFour I click on Removal Successful button
# # Then ExchTwFour I should see CONFIRM ELECTRIC ASSET REMOVAL section

# # Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section
# # Given ExchTwFour the CONFIRM ELEC ASSET REMOVAL section
# # When ExchTwFour I fill the field024 with the Value024
# # Then ExchTwFour Click ok on asset removal
# # And ExchTwFour I should see REMOVE COMMS HUB window

# # Scenario: Going through "REMOVE COMMS HUB" section
# # Given ExchTwFour the REMOVE COMMS HUB section
# # When ExchTwFour I fill the field027 with the value27
# # Then ExchTwFour I click on NEXT SEC button from Remove Comms Hub
# # And ExchTwFour I should see CONFIRM COMMS HUB REMOVAL section

# # Scenario: Going through "CONFIRM COMMS HUB REMOVAL" section
# # Given ExchTwFour the CONFIRM COMMS HUB REMOVAL section
# # When ExchTwFour I fill the field28 with the value28
# # And ExchTwFourCOM I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step
# # Then ExchTwFour I click on SUBMIT btn from confirm comms hub removal






# # And ExchTwFour I should see INSTALL COMMS HUB section

# # Scenario: Going through "INSTALL COMMS HUB" section
# # Given ExchTwFour the INSTALL COMMS HUB sec
# # When ExchTwFour I fill the Ins comms hub fields and capture photo EVIDENCE
# # Then ExchTwFour I should see NEW METER DETAILS section

# # Scenario: Continuing "NEW METER DETAILS" section
# # Given ExchTwFour the NEW METER DETAILS section
# # When ExchTwFour I fill the fields and values for New meter details
# # Then ExchTwFour I should see NEW Meter section

# # Scenario: Continuing "NEW METER DETAILS" section
# # Given ExchTwFour the Manufacturer Letter radio button
# # When ExchTwFour I fill the field33 with the Value33
# # And ExchTwFour manufacturer NEXT SECTION button
# # Then ExchTwFour I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section

# # Scenario: Going through "ADDITIONAL ELECTRICITY TESTS & CHECKS" section
# # Given ExchTwFour the ADDITIONAL ELECTRICITY TESTS & CHECKS section
# # When ExchTwFour I fill the field34 with the Value34
# # And ExchTwFour I click on CAPTURE PHOTO OF TERMINAL SCREWS button
# # And ExchTwFour I fill the field35 with the Value35
# # And ExchTwFour I clk additional test on NEXT SECTION button
# # Then ExchTwFour I should see ELEC INITIAL METER READING section

# # Scenario: Going through "ELEC INITIAL METER READING" section
# # Given ExchTwFour the ELEC INITIAL METER READING section
# # When ExchTwFour I fill the FldName36 with the Value36
# # Then ExchTwFour I should see POST INSTALLATION CHECKS section

# # Scenario: Going through "POST INSTALLATION CHECKS" section
# # Given ExchTwFour the POST INSTALLATION CHECKS section
# # When ExchTwFour I fill the FldName37 with the Value37
# # Then ExchTwFour post installation page content display

# # Scenario: Going through "POST INSTALLATION CHECKS" section
# # Given ExchTwFour the post installation page contect display
# # When ExchTwFour I fill the FldName38 with the Value38
# # And ExchTwFour I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button
# # And ExchTwFour I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button
# # And ExchTwFour I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button
# # Then ExchTwFour I should see COMMISSIONING section

# # Scenario: Going through "COMMISSIONING" section
# # Given ExchTwFour the COMMISSIONING section
# # When ExchTwFour I fill the FldName39 with the Value39
# # And ExchTwFour I click on ADD ANOTHER ASSET button
# # And ExchTwFour I fill the FldName40 with the Value40
# # And ExchTwFour I clk commisioning on NEXT button
# # Then ExchTwFour I should see ELECTRIC INSTALL & COMMISSIONING section

# # Scenario: Confirming "ELECTRIC INSTALL & COMMISSIONING"
# # Given ExchTwFour EICOM the Send Message button is displayed
# # When ExchTwFour EICOM I click on Send Message EICOM button
# # Then ExchTwFour EICOM I should see AWAITING RESPONSE button

# # Scenario: Waiting "AWAITING RESPONSE"
# # Given ExchTwFour EICOM the Awaiting Response button
# # When ExchTwFour EICOM I wait for the button to disappear
# # Then ExchTwFour EICOM I should see Commissioning Successful button
# # And ExchTwFour EICOM I should see Request Sent Successfully text message
# # And ExchTwFour EICOM I should see Pair Asset to Comms Hub text message
# # And ExchTwFour EICOM I should see Pairing Successful text message
# # And ExchTwFour EICOM I should see DCC Handover Requested text message
# # And ExchTwFour EICOM I should see Device Clock Synchronised text message
# # And ExchTwFour EICOM I should see MPAN Set, ESME Is Now Installed And Being Configured By DCC text message
# # And ExchTwFour EICOM I should see Joins are being Initiated text message

# # Scenario: Confirming "Commissioning Successful"
# # Given ExchTwFour the Commissioning Successful button is displayed
# # When ExchTwFour I click on Commissioning Successful button
# # Then ExchTwFour I should see NEW GAS METER DETAILS section



# # Scenario: Going through "NEW GAS METER DETAILS" section
# # Given ExchTwFour the NEW GAS METER DETAILS section
# # When ExchTwFour I fill the fields and values for New gas meter details
# # Then ExchTwFour I should see NEW REGULATOR section


# # Scenario: Going through "NEW REGULATOR" section
# # Given ExchTwFour the NEW REGULATOR section
# # When ExchTwFour I fill the fields and values for new regulator section
# # Then ExchTwFour I should see GAS INITIAL METER READING section

# # Scenario: Going through "GAS INITIAL METER READING" section
# # Given ExchTwFour the GAS INITIAL METER READING section
# # When ExchTwFour I fill the fields with values Gas initial meter reading
# # Then ExchTwFour I should see INSTALL KIT section

# # Scenario: Going through "Install Kit " GAS section
# # Given ExchTwFour the Gas Install Kit gas section
# # When ExchTwFour I fill the Gas Install Kit gas section fields with values
# # Then ExchTwFour I should see Perform Post Installation GAS Checks sec

# # Scenario: Going through "Post Installation GAS" GAS section
# # Given ExchTwFour the Post Installation GAS sec
# # When ExchTwFour I fill the Post Installation GAS sec fields with values
# # Then ExchTwFour I should see GICOM Message sec

# # Scenario: Going through "GAS INSTALL & COMMISSIONING" section
# # Given ExchTwFour the GAS INSTALL & COMMISSIONING sec
# # When ExchTwFour I click on Send Message GICOM butn
# # Then ExchTwFour I should see Awaiting Response butn

# # Scenario: Waiting "AWAITING RESPONSE"
# # Given ExchTwFour the Awaiting Response butn after gas install
# # When ExchTwFour I wait for the button to disappear after post install
# # Then ExchTwFour I should see Commissioning Successful button
# # And ExchTwFour I should see Request Sent Successfully txt message
# # And ExchTwFour I should see Pair Asset to Comms Hub text message
# # And ExchTwFour I should see DCC Handover Requested text message
# # And ExchTwFour I should see Device Clock Synchronised text message
# # And ExchTwFour I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message
# # And ExchTwFour I should see DCC Handover Requested for GPF Device text message
# # And ExchTwFour I should see Joins are being Initiated text message

# # Scenario: Confirming "Commissioning Successful"
# # Given ExchTwFourG the Commissioning Successful button is displayed
# # When ExchTwFourG Commissioning Successful butn clk
# # Then ExchTwFourG I should see GAS APPLIANCE SAFETY CHECKS section

# # Scenario: Going through "Gas Appliance Safety Checks" GAS section
# # Given ExchTwFour the Gas Appliance Safety Checks sec
# # When ExchTwFour I fill the Gas Appliance Safety Checks section fields with values and Sub
# # Then ExchTwFour I should see SMETS PPMID sec

# # Scenario: Going through "INSTALL PPMID" section
# # Given ExchTwFour the "INSTALL PPMID" section
# # When ExchTwFour I fill the fields for Install PPMID
# # Then ExchTwFour I should see PPMID COMMISSIONING section
# # Scenario: Going through "PPMID COMMISSIONING" section
# # Given ExchTwFour the PPMID COMMISSIONING section
# # When ExchTwFour I click on Send Message IHD-PPMID butn
# # Then ExchTwFour I should see PPMID Awaiting Response butn

# # Scenario: Waiting "AWAITING RESPONSE"
# # Given ExchTwFour the Awaiting Response butn after ppmid commisioning
# # When ExchTwFour I wait for the button to disappear after PPMID Commisioning
# # Then ExchTwFour I should see PPMID Commissioning Successful button
# # And ExchTwFour I should see PPMID Request Sent Successfully txt message
# # And ExchTwFour I should see PPMID Pair Asset to Comms Hub text message
# # And ExchTwFour I should see Pairing Successful text message

# # Scenario: Confirming "PPMID Commissioning Successful"
# # Given ExchTwFour the PPMID Commissioning Successful button is displayed
# # When ExchTwFour I click on SUB button
# # Then ExchTwFour I should see DEVICE BINDING and COMMISSIONING sec

# # Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
# # Given ExchTwFour the DEVICE BINDING & COMMISSIONING section
# # When ExchTwFour I fill the fields53 and click next
# # Then ExchTwFour I should see ENERGY EFFICIENCY INFORMATION section

# # Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
# # Given ExchTwFour the ENERGY EFFICIENCY INFORMATION section
# # When ExchTwFour I fill the fields54 and click next
# # Then ExchTwFour I should see SMART EDUCATION section

# # Scenario: Going through "SMART EDUCATION" section
# # Given ExchTwFour the SMART EDUCATION section
# # When ExchTwFour I fill the fields55 and click next
# # Then ExchTwFour I should see SMART LITERATURE LEFT ON SITE section

# # Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
# # Given ExchTwFour the SMART LITERATURE LEFT ON SITE section
# # When ExchTwFour I fill the fields56 and click next
# # Then ExchTwFour See CAPTURE CUSTOMER SIGNATURE sec

# # Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
# # Given ExchTwFour the CAPTURE CUSTOMER SIGNATURE section
# # When ExchTwFour I write signature in Customer Signature
# # And ExchTwFour I fill the field57 and Job Complete
# # Then ExchTwFour see Job Completed screen