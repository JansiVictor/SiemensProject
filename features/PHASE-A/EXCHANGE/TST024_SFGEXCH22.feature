Feature: TST024_SFGEXCH22

        Scenario: Post SFGEXCH22 SOAP Request
                Given I post workorder using "xmlrequest/SFGEXCH22.XML"

        @LoginScenario
        Scenario: Select the ExchTwTwo Latest workOrder
                Given the ExchTwTwo Appointment List window
                When I click on ExchTwTwo select button
                Then I should see ExchTwTwo Work Order window

        Scenario: Going through ExchTwTwo Call Forward
                Given the ExchTwTwo "Work Order" window
                When i see ExchTwTwo Call Forward or Arrive Button
                Then I click on ExchTwTwo CALL FORWARD button
                Then I should see page ExchTwTwo contect display
                And I should see ExchTwTwo Contact made field

        Scenario: Selecting ExchTwTwo job and setting to depart
                Given the ExchTwTwo "Work Order" page
                When I fill the ExchTwTwo fields with the value
                And I click on ExchTwTwo DEPART button
                Then I should see ExchTwTwo Depart for Appointment window
                And I should see the ExchTwTwo correct MPAN details
                And I should see the ExchTwTwo correct Customer Name details
                And I should see the ExchTwTwo correct PostCode details

        Scenario: Approving ExchTwTwo "Depart for Appointment" job
                And ExchTwTwo "Appointment" details
                When I click on ExchTwTwo MPRNOK button
                And I should see ExchTwTwo ARRIVE button
                And I should see ExchTwTwo DOORSTEP PROTOCOL tab activated

        Scenario: Set ExchTwTwo job to Arrived status
                Given the ExchTwTwo "WorkOrder" page
                When I click on ExchTwTwo ARRIVE button
                Then I should see ExchTwTwo Arrival Time details
                And I should see ExchTwTwo BE AWARE OF ANY DANGER! section

        Scenario: Going through ExchTwTwo "BE AWARE OF ANY DANGER!" section
                Given the ExchTwTwo BE AWARE OF ANY DANGER! section
                When I fill the ExchTwTwo DoorStep Protocol fields with the value
                And I click on ExchTwTwo ON SITE button
                Then I should see ExchTwTwo RISK ASSESSMENT tab activated
                And I should see ExchTwTwo INITIAL RISK ASSESSMENT section

        Scenario: Going through ExchTwTwo "INITIAL RISK ASSESSMENT"
                Given the ExchTwTwo INITIAL RISK ASSESSMENT section
                When I fill the ExchTwTwo initialRisk field with the values
                Then I should see ExchTwTwo INFO window

        Scenario: Going through ExchTwTwo "INFO" window
                Given the ExchTwTwo INFO window with the text
                Then I should see ExchTwTwo RISK ASSESSMENT ELEC section

        Scenario: Going through ExchTwTwo "RISK ASSESSMENT - ELEC" section
                Given the ExchTwTwo RISK ASSESSMENT - ELEC section
                When I fill the ExchTwTwo RISK ASSESSMENT - ELEC fields with the values
                And I click on ExchTwTwo CAPTURE PHOTO OF HAZARD IDENTIFIED button
                And I click on ExchTwTwo NEXT SECTION button

        Scenario: Going through ExchTwTwo "RISK ASSESSMENT - GAS" section
               
                When I fill the ExchTwTwo RISK ASSESSMENT - GAS fields with the values
        
        Scenario: Going through ExchTwTwo "Suitable for Smart Installation GAS"
                Given the Suitable for ExchTwTwo Smart Installation GAS section
                When I fill ExchTwTwo Site Suitable for Smart Installation? GAS button

        Scenario: Going through ExchTwTwo "CAPTURE INITIAL PHOTO OF GAS and ELEC INSTALLATION"
                Given I should see ExchTwTwo Capture Photo of GAS Installation section

        Scenario: Going through ExchTwTwo "INITIAL POLARITY CHECK MARTINDALE TEST" section
                Given the ExchTwTwo INITIAL POLARITY CHECK MARTINDALE TEST section
                When I fill the ExchTwTwo INITIAL POLARITY CHECK field with the values
                And I click on ExchTwTwo CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
                And I fill the ExchTwTwo Socket Found field with the values
                Then I should see ExchTwTwo INITIAL POLARITY CHECK AT METER AND CUT OUT section

        Scenario: Going through ExchTwTwo "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
                Given the ExchTwTwo INITIAL POLARITY CHECK - AT METER AND CUT OUT section
                When I fill the ExchTwTwo METER AND CUT OUT fields with the values
                And I click on ExchTwTwo SUBMIT button
        

        Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
                Given ExchTwTwo the PRE INSTALLATION GAS TIGHTNESS TEST section
                When ExchTwTwo I fill the field17 with the value17
                Then ExchTwTwo I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
                And ExchTwTwo I fill the field18 with the value18
                And ExchTwTwo I see Gas Tightness Test Completed field as FAIL
                And ExchTwTwo I fill the field19 with the value19
        

        Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
                When ExchTwTwo I fill the field010 with the value010
                And ExchTwTwo I should see CURRENT METER DETAILS - GAS section
                Then ExchTwTwo I should see the page contect display of current meter details

        Scenario: Going through "CURRENT METER DETAILS - GAS" section
                Given ExchTwTwo the CURRENT METER DETAILS - GAS section
                When ExchTwTwo I fill the field with the value
                Then I should see ExchTwTwo CURRENT COMMS HUB DETAILS section

        Scenario: Going through "CURRENT COMMS HUB DETAILS" section
                Given the ExchTwTwo CURRENT COMMS HUB DETAILS section
                When I fill the ExchTwTwo field013 with the value Value013

        Scenario: Going through "CONFIRM IHD / PPMID REMOVAL" section
                Given ExchTwTwo the CONFIRM IHD-PPMID REMOVAL section
                When ExchTwTwo I fill the field22 with the value22
                And I should see ExchTwTwo SEND MESSAGE IHD PPMID section

        Scenario: Going through "SEND MESSAGE IHD / PPMID" section
                Given the ExchTwTwo SEND MESSAGE IHD-PPMID section
                When I click on ExchTwTwo Send Message IHD PPMID button
                Then I should see ExchTwTwo Awaiting Response button

        Scenario: Waiting "AWAITING RESPONSE"
                Given the ExchTwTwo Awaiting Response button
                When I wait for ExchTwTwo the butn to disappear
                Then I should see ExchTwTwo PPMID Removal Successful button
                And I should see ExchTwTwo Request Sent Successfully text message

        Scenario: Confirming "PPMID Removal Successful"
                Given the ExchTwTwo PPMID Removal Successful button is displayed
                When I click on ExchTwTwo PPMID Removal Successful button
                Then I should see ExchTwTwo CONFIRM IHD PPMID ASSET REMOVAL section


        Scenario: Going through "CONFIRM IHD-PPMID ASSET REMOVAL" section
                Given the ExchTwTwo CONFIRM IHD-PPMID ASSET REMOVAL section
                When I fill the ExchTwTwo field22 with the Value22
                Then I clk ExchTwTwo OK button in Updated window with the text Asset successfully added to Returns list

        Scenario: Going through "REMOVE GAS METER" section
                Given ExchTwTwo the REMOVE GAS METER section
                When ExchTwTwo I fill the field23 with the value23
                Then ExchTwTwo I click on NEXT button in removing gas meter
                And ExchTwTwo I should see SEND MESSAGE GMREM section

        Scenario: Going through "SEND MESSAGE GMREM" section
                Given the ExchTwTwo SEND MESSAGE GMREM section
                When I click on ExchTwTwo Send Message GMREM button
                Then I should see ExchTwTwo Awaiting Response button in GMREM

        Scenario: Waiting "AWAITING RESPONSE"
                Given ExchTwTwo the Awaiting Response btn in Send GMREM
                When ExchTwTwo I wait for the btn to disappear in GMREM
                Then ExchTwTwo I should see Removal Successful button
                And ExchTwTwo I should see GMREM Request Sent Successfully txt message
                And ExchTwTwo I should see OK to Remove Asset text message

        Scenario: Confirming "Removal Successful"
                Given ExchTwTwo the Removal Successful button is displayed
                When ExchTwTwo I click on Removal Successful button
                Then ExchTwTwo I should see CONFIRM GAS ASSET REMOVAL section

        Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
                Given ExchTwTwo the CONFIRM GAS ASSET REMOVAL section
                When ExchTwTwo I fill the field24 with the value24
                Then ExchTwTwo I click on Submit Btn
        
        Scenario: Going through "INSTALL COMMS HUB" section
                Given ExchTwTwo the INSTALL COMMS HUB sec
                When ExchTwTwo I fill the Ins comms hub fields and capture photo EVIDENCE
       
        Scenario: Continuing "NEW GAS METER DETAILS" section
                Given ExchTwTwo the NEW GAS METER DETAILS section
                When ExchTwTwo I fill the fields and values for New GAS meter details
        

        Scenario: Input the ExchTwTwo new Regulator S/N which transferres the Regulator from the Van List GAS section
                Given the ExchTwTwo New Regulator section
                When I fill the ExchTwTwo New Regulator fields with values

        Scenario: Going through "GAS INITIAL METER READING" section
                Given ExchTwTwo the GAS INITIAL METER READING section
                When ExchTwTwo I fill the fields with values Gas initial meter reading
                Then ExchTwTwo I should see INSTALL KIT section

        Scenario: Going through "Install Kit " GAS section
                Given ExchTwTwo the Gas Install Kit gas section
                When ExchTwTwo I fill the Gas Install Kit gas section fields with values
                Then ExchTwTwo I should see Perform Post Installation GAS Checks sec

        Scenario: Going through "Post Installation GAS" GAS section
                Given ExchTwTwo the Post Installation GAS sec
                When ExchTwTwo I fill the Post Installation GAS sec fields with values
                Then ExchTwTwo I should see GICOM Message sec

        Scenario: Going through "GAS INSTALL & COMMISSIONING" section
                Given ExchTwTwo the GAS INSTALL & COMMISSIONING sec
                When ExchTwTwo I click on Send Message GICOM butn
                Then ExchTwTwo I should see Awaiting Response butn

        Scenario: Waiting "AWAITING RESPONSE"
                Given ExchTwTwo the Awaiting Response butn after gas install
                When ExchTwTwo I wait for the button to disappear after post install
                Then ExchTwTwo I should see Commissioning Successful button
                And ExchTwTwo I should see Request Sent Successfully txt message
                And ExchTwTwo I should see Pair Asset to Comms Hub text message
                And ExchTwTwo I should see DCC Handover Requested text message
                And ExchTwTwo I should see Device Clock Synchronised text message
                And ExchTwTwo I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message
                And ExchTwTwo I should see DCC Handover Requested for GPF Device text message
                And ExchTwTwo I should see Joins are being Initiated text message

        Scenario: Confirming "Commissioning Successful"
                Given ExchTwTwoG the Commissioning Successful button is displayed
                When ExchTwTwoG Commissioning Successful butn clk
                Then ExchTwTwoG I should see GAS APPLIANCE SAFETY CHECKS section

        Scenario: Going through "Gas Appliance Safety Checks" GAS section
                Given ExchTwTwo the Gas Appliance Safety Checks sec
                When ExchTwTwo I fill the Gas Appliance Safety Checks section fields with values and Sub
                Then ExchTwTwo I should see SMETS PPMID sec

        Scenario: Going through "INSTALL PPMID" section
                Given ExchTwTwo the "INSTALL PPMID" section
                When ExchTwTwo I fill the fields for Install PPMID
                Then ExchTwTwo I should see PPMID COMMISSIONING section
        Scenario: Going through "PPMID COMMISSIONING" section
                Given ExchTwTwo the PPMID COMMISSIONING section
                When ExchTwTwo I click on Send Message IHD-PPMID butn
                Then ExchTwTwo I should see PPMID Awaiting Response butn

        Scenario: Waiting "AWAITING RESPONSE"
                Given ExchTwTwo the Awaiting Response butn after ppmid commisioning
                When ExchTwTwo I wait for the button to disappear after PPMID Commisioning
                Then ExchTwTwo I should see PPMID Commissioning Successful button
                And ExchTwTwo I should see PPMID Request Sent Successfully txt message
                And ExchTwTwo I should see PPMID Pair Asset to Comms Hub text message
                And ExchTwTwo I should see Pairing Successful text message

        Scenario: Confirming "PPMID Commissioning Successful"
                Given ExchTwTwo the PPMID Commissioning Successful button is displayed
                When ExchTwTwo I click on SUB button
                Then ExchTwTwo I should see DEVICE BINDING and COMMISSIONING sec

        Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
                Given ExchTwTwo the DEVICE BINDING & COMMISSIONING section
                When ExchTwTwo I fill the fields53 and click next
                Then ExchTwTwo I should see ENERGY EFFICIENCY INFORMATION section

        Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
                Given ExchTwTwo the ENERGY EFFICIENCY INFORMATION section
                When ExchTwTwo I fill the fields54 and click next
                Then ExchTwTwo I should see SMART EDUCATION section

        Scenario: Going through "SMART EDUCATION" section
                Given ExchTwTwo the SMART EDUCATION section
                When ExchTwTwo I fill the fields55 and click next
                Then ExchTwTwo I should see SMART LITERATURE LEFT ON SITE section

        Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
                Given ExchTwTwo the SMART LITERATURE LEFT ON SITE section
                When ExchTwTwo I fill the fields56 and click next
                Then ExchTwTwo See CAPTURE CUSTOMER SIGNATURE sec

        Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
                Given ExchTwTwo the CAPTURE CUSTOMER SIGNATURE section
                When ExchTwTwo I write signature in Customer Signature
                And ExchTwTwo I fill the field57 and Job Complete
                Then ExchTwTwo see Job Completed screen

        Scenario: Going through deleting the work order after use
                When I delete workorder after use
                Then workorder should no longer exist