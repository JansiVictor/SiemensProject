Feature: TST077_AbortGasRisk_DFFLTY20TRADNOEXCH

    Scenario: Post DFFLTY20TRAD SOAP Request
        Given I post workorder using "xmlrequest/DFFLTY20TRAD.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given FltytwTadNoEx the Appointment List window
        When FltytwTadNoEx I click on select button
        Then FltytwTadNoEx I should see Work Order window

    Scenario: Going through Call Forward
        Given FltytwTadNoEx the "Work Order" window
        When FltytwTadNoEx i see Call Forward or Arrive Button
        Then FltytwTadNoEx I click on CALL FORWARD button
        Then FltytwTadNoEx I should see page contect display
        And FltytwTadNoEx I should see the CUSTOMER CONTACT NUMBER
        And FltytwTadNoEx I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given FltytwTadNoEx the "Work Order" page
        When FltytwTadNoEx I fill the fields with the value
        And FltytwTadNoEx I click on DEPART button
        Then FltytwTadNoEx I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given FltytwTadNoEx Appointment details
        When FltytwTadNoExD I click on OK button
        Then FltytwTadNoEx I should see ARRIVE button
        And FltytwTadNoEx I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given FltytwTadNoEx the "WorkOrder" page
        When FltytwTadNoEx I click on ARRIVE button
        Then FltytwTadNoEx I should see Arrival Time details
        And FltytwTadNoEx I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given FltytwTadNoEx the BE AWARE OF ANY DANGER! section
        When FltytwTadNoEx I fill the DoorStep Protocol fields with the value
        And FltytwTadNoEx I click on ON SITE button
        Then FltytwTadNoEx I should see RISK ASSESSMENT tab activated
        And FltytwTadNoEx I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given FltytwTadNoEx the INITIAL RISK ASSESSMENT section
        When FltytwTadNoEx I fill the initialRisk field with the values
        Then FltytwTadNoEx I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given FltytwTadNoEx the RISK ASSESSMENT - ELEC section
        When FltytwTadNoEx I fill the RISK ASSESSMENT - ELEC fields with the values
        And FltytwTadNoEx I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And FltytwTadNoEx RISK ASSESSMENT ELEC NEXT SECTION button
        Then FltytwTadNoEx I should see the RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given FltytwTadNoEx the RISK ASSESSMENT - GAS section
        And I fill the GasRisk abort fields with values
        And I select Reason and Abort the Job
        And FltytwTadNoExE I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
        Given FltytwTadNoExE the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
        When FltytwTadNoExE I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then FltytwTadNoEx I should see INITIAL POLARITY CHECK-MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given FltytwTadNoEx the INITIAL POLARITY CHECK MARTINDALE TEST section
        When FltytwTadNoEx I fill the INITIAL POLARITY CHECK field with the values
        Then FltytwTadNoEx I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then FltytwTadNoEx I fill the Socket Found field with the values
        And FltytwTadNoEx I should see INITIAL POLARITY AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given FltytwTadNoEx the INITIAL POLARITY AT METER AND CUT OUT section
        When FltytwTadNoEx I fill the METER AND CUT OUT fields with the values
        And I click on SFENMEX16 SUBMIT button
        Then FltytwTadNoEx I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given FltytwTadNoEx the CURRENT IHD-PPMID DETAILS section
        When FltytwTadNoEx I fill the field010 with the value010
        And FltytwTadNoEx I should see CURRENT METER DETAILS - GAS section
        Then FltytwTadNoEx current meter details page contect display

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given FltytwTadNoEx the CURRENT METER DETAILS - GAS section
        When FltytwTadNoEx I fill the field with the value
        Then FltytwTadNoEx I should see CURRENT Electric Meter

    Scenario: Going through "CURRENT METER DETAILS - ELEC" section
        Given FltytwTadNoEx the CURRENT Electric Meter
        When FltytwTadNoEx I fill the field011 with the value Value011
        Then FltytwTadNoEx I should see DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given FTwenty the DETERMINE FAULT ACTIVITY section
        When FTwenty I fill the field14 with the value014
        Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And FTwenty I fill the field15 with the value15
        And FTwenty I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And FTwenty I fill the field16 with the value16
        And TST077 I fill the field with the value
        When I click on RmveSix SUBMIT button
        Then FltytwTadNoEx I should see Device Binding section
        Then FltytwTadNoEx I should see ENERGY EFFICIENCY INFORMATION section

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given FltytwTadNoEx the ENERGY EFFICIENCY INFORMATION section
        When FltytwTadNoEx I fill the fields54 and click next

    Scenario: Going through RmveSix "Summary of Job and receive Customer Signature" GAS section
        Given the FltytwTadNoEx Summary of Job and receive Customer Signature section
        When I fill the FltytwTadNoEx Summary of Job and receive Customer Signaturefields with values
        Then I should see FltytwTadNoEx Submit button to complete the job section

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist