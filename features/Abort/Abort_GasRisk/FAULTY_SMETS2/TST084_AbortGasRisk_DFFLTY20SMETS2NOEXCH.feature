Feature: TST084_AbortGasRisk_DFFLTY20SMETS2NOEXCH

    Scenario: Post DFFLTY20 SOAP Request
        Given I post workorder using "xmlrequest/DFFLTY20.XML"

    @LoginScenario
    Scenario: Select the Latest FLTYTwntyNoExchange workOrder
        Given the FLTYTwntyNoExchange Appointment List window
        When I click on FLTYTwntyNoExchange select button
        Then I should see FLTYTwntyNoExchange Work Order window

    Scenario: Going through FLTYTwntyNoExchange Call Forward
        Given the FLTYTwntyNoExchange "Work Order" window
        When i see FLTYTwntyNoExchange Call Forward or Arrive Button
        Then I click on FLTYTwntyNoExchange CALL FORWARD button
        Then I should see FLTYTwntyNoExchange page contect display
        And I should see the FLTYTwntyNoExchange CUSTOMER CONTACT NUMBER
        And I should see FLTYTwntyNoExchange Contact made field

    Scenario: Selecting FLTYTwntyNoExchange job and setting to depart
        Given the FLTYTwntyNoExchange "Work Order" page
        When I fill the FLTYTwntyNoExchange fields with the value
        And I click on FLTYTwntyNoExchange DEPART button
        Then I should see FLTYTwntyNoExchange  for Appointment window
        And I should see the FLTYTwntyNoExchange correct MPAN details
        And I should see the FLTYTwntyNoExchange correct Customer Name details
        And I should see the FLTYTwntyNoExchange correct PostCode details

    Scenario: Approving FLTYTwntyNoExchange "Depart for Appointment" job
        And "Appointment" FLTYTwntyNoExchange details
        When I click on FLTYTwntyNoExchange Appointment OK button
        And I should see FLTYTwntyNoExchange ARRIVE button
        And I should see FLTYTwntyNoExchange DOORSTEP PROTOCOL tab activated

    Scenario: Set FLTYTwntyNoExchange job to Arrived status
        Given the FLTYTwntyNoExchange "WorkOrder" page
        When I click on FLTYTwntyNoExchange ARRIVE button
        Then I should see FLTYTwntyNoExchange Arrival Time details
        And I should see FLTYTwntyNoExchange  BE AWARE OF ANY DANGER! section

    Scenario: Going through FLTYTwntyNoExchange "BE AWARE OF ANY DANGER!" section
        Given the FLTYTwntyNoExchange BE AWARE OF ANY DANGER! section
        When I fill the FLTYTwntyNoExchange DoorStep Protocol fields with the value
        And I click on FLTYTwntyNoExchange ON SITE button
        Then I should see FLTYTwntyNoExchange RISK ASSESSMENT tab activated
        And I should see FLTYTwntyNoExchange Initial Risk Assessment for GAS section

    Scenario: Going through FLTYTwntyNoExchange "INITIAL RISK ASSESSMENT"
        Given the FLTYTwntyNoExchange INITIAL RISK ASSESSMENT section
        When I fill the FLTYTwntyNoExchange initialRisk field with the values

    Scenario: Going through FLTYTwntyNoExchange "INFO" window
        Given the FLTYTwntyNoExchange INFO window with the text

    Scenario: Going through FLTYTwntyNoExchange "RISK ASSESSMENT - ELEC" section
        Given the FLTYTwntyNoExchange RISK ASSESSMENT - ELEC section
        When I fill the FLTYTwntyNoExchange RISK ASSESSMENT - ELEC fields with the values
        And I click on FLTYTwntyNoExchange CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And I click on FLTYTwntyNoExchange NEXT SECTION button
        Then I should see the FLTYTwntyNoExchange RISK ASSESSMENT - GAS section

    Scenario: Going through FLTYTwntyNoExchange "RISK ASSESSMENT - GAS"
        Given the FLTYTwntyNoExchange RISK ASSESSMENT - GAS section
        And I fill the GasRisk abort fields with values
        And I select Reason and Abort the Job
        And I should see FLTYTwntyNoExchange CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section

    Scenario: Going through FLTYTwntyNoExchange "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given the FLTYTwntyNoExchange Click CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
        Then I should see FLTYTwntyNoExchange INITIAL POLARITY CHECK - MARTINDALE TEST section

    Scenario: Going through FLTYTwntyNoExchange "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given the FLTYTwntyNoExchange INITIAL POLARITY CHECK MARTINDALE TEST section
        When I fill the FLTYTwntyNoExchange INITIAL POLARITY CHECK field with the values
        Then I click on FLTYTwntyNoExchange CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then I fill the FLTYTwntyNoExchange Socket Found field with the values
        And I should see FLTYTwntyNoExchange INITIAL POLARITY CHECK AT METER AND CUT OUT section

    Scenario: Going through FLTYTwntyNoExchange "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given the FLTYTwntyNoExchange INITIAL POLARITY CHECK - AT METER AND CUT OUT section
        When I fill the FLTYTwntyNoExchange METER AND CUT OUT fields with the values
        And I click on FLTYTwntyNoExchange SUBMIT button

    Scenario: Going through FLTYTwntyNoExchange "CURRENT IHD/PPMID DETAILS" section
        Given the FLTYTwntyNoExchange CURRENT IHD-PPMID DETAILS section
        When I fill the FLTYTwntyNoExchange CURRENT IHD-PPMID fields with the values
        Then I should see the FLTYTwntyNoExchange CURRENT METER DETAILS - GAS section

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given the FLTYTwntyNoExchange CURRENT METER DETAILS - GAS section
        When I fill the FLTYTwntyNoExchange CURRENT GAS METER DETAILS field with the value
        And I fill the FLTYTwntyNoExchange CURRENT METER DETAILS field with the value
        Then I should see FLTYTwntyNoExchange CURRENT COMMS HUB DETAILS section

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given the FLTYTwntyNoExchange CURRENT COMMS HUB DETAILS section
        When I fill the FLTYTwntyNoExchange CURRENT COMMS HUB fields with the values
        Then I click on FLTYTwntyNoExchange CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        And I should see FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given the FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY section
        When FTwenty I fill the field14 with the value014
        Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And FTwenty I fill the field15 with the value15
        And FTwenty I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And FTwenty I fill the field16 with the value16
        And TST077 I fill the field with the value
        When I click on RmveSix SUBMIT button

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given FLTYTwntyNoExchange the DEVICE BINDING & COMMISSIONING section
        When FLTYTwntyNoExchange I fill the DEVICE BINDING fields and click next
        Then FLTYTwntyNoExchange I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given FLTYTwntyNoExchange the ENERGY EFFICIENCY INFORMATION section
        When FLTYTwntyNoExchange I fill the ENERGY EFFICIENCY fieldss and click next

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given FLTYTwntyNoExchange the CAPTURE CUSTOMER SIGNATURE section
        When FLTYTwntyNoExchange I write signature in Customer Signature
        And FLTYTwntyNoExchange I fill the CAPTURE CUSTOMER SIGNATURE fields and Job Complete
        Then FLTYTwntyNoExchange see Job Completed screen

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
