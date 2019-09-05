Feature: INSTALLATION16 WORKFLOW

    Scenario Outline: Logging in to job's "Work Order" window for INST16
        Given the Login Page for INST16
        When I pass "<Username>" and "<Password>" for INST16
        Then I click Login button for INST16
        And I should see the Appointment List for INST16

        Examples:
            | Username    | Password    |
            | Automation2 | Aut0m4t1on2 |

    Scenario: Select the Latest workOrder for INST16 new
        Given the Appointment List window for INST16
        When I click on select button for INST16
        Then I should see Work Order window for INST16

    Scenario: Going through Call Forward for INST16
        Given the "Work Order" window for INST16
        When i see Call Forward or Arrive Button for INST16
        Then I click on CALL FORWARD button for INST16
        Then I should see page contect display for INST16
        And I should see the CUSTOMER CONTACT NUMBER for INST16
        And I should see Contact made field for INST16

    Scenario: Selecting job and setting to depart for INST16
        Given the "Work Order" page for INST16
        When I fill the fields with the value for INST16
        And I click on DEPART button for INST16
        Then I should see Depart for Appointment window for INST16
        And I should see the correct MPAN details for INST16
        And I should see the correct Customer Name details for INST16
        And I should see the correct PostCode details for INST16

    Scenario: Approving "Depart for Appointment" job for INST16
        And "Appointment" details for INST16
        When I click on OK button for INST16
        And I should see ARRIVE button for INST16
        And I should see DOORSTEP PROTOCOL tab activated for INST16

    Scenario: Set job to Arrived status for INST16
        Given the "WorkOrder" page for INST16
        When I click on ARRIVE button for INST16
        Then I should see Arrival Time details for INST16
        And I should see BE AWARE OF ANY DANGER! section for INST16

    Scenario: Going through "BE AWARE OF ANY DANGER!" section for INST16
        Given the BE AWARE OF ANY DANGER! section for INST16
        When I fill the DoorStep Protocol fields with the value for INST16
        And I click on ON SITE button for INST16
        Then I should see RISK ASSESSMENT tab activated for INST16
        And I should see INITIAL RISK ASSESSMENT section for INST16

    Scenario: Going through "INITIAL RISK ASSESSMENT" for INST16
        Given the INITIAL RISK ASSESSMENT section for INST16
        When I fill the initialRisk field with the values for INST16
        Then I should see INFO window for INST16

    Scenario: Going through "INFO" window
        Given the INFO window with the text for INST16
        Then I should see RISK ASSESSMENT ELEC section for INST16

    Scenario: Going through "RISK ASSESSMENT - ELEC" section for INST16
        Given the RISK ASSESSMENT - ELEC section for INST16
        When I fill the RISK ASSESSMENT - ELEC fields with the values for INST16
        And I click on NEXT SECTION button for INST16

    Scenario: Going through "Suitable for Smart Installation" for INST16
        Given the Suitable for Smart Installation section for INST16
        When I click on Is Site Suitable for Smart Installation? button for INST16
        And I click on Equipment Reposition Required? for INST16
        And I enter Additional Notes for Smart installation Check for INST16
        And I click on smart installation NEXT SECTION button for INST16

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for INST16
        Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for INST16
        When I fill the METER AND CUT OUT fields with the values for INST16
        Then the Comms Hub details section for INST16 test

    Scenario: Going through " Comms Hub details " section for INST16
        Given the Comms Hub details section for INST16 test1
        When I fill the Comms Hub fields with values for INST16
        Then I should see NEW METER section for INST16

    Scenario: Going through " SMETS2 New Meter details  " section for INST16
        Given the  New Meter details section for INST16
        When I fill the New Meter details fields with values for INST16
        Then I should see ADDITIONAL ELECTRICITY CHECKS section for INST16

    Scenario: Going through Additional Electricity Tests and Checks section for INST16
        Given the the ADDITIONAL ELECTRICITY CHECKS details section for INST16
        When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for INST16

    Scenario: Going through Initial Meter Reading of new meter depending on the number of Registers and dials section for INST16
        Given Initial Meter Reading of new meter depending on the number of Registers and dials section for INST16
        When I fill the Initial Meter Reading of new meter details fields with values for INST16
        Then I should see Commission Bind the Comms hub to the WAN section for INST16

    Scenario: Going through Commission Bind the Comms hub to the WAN section for INST16
        Given Commission Bind the Comms hub to the WAN section for INST16
        When I fill the Commission Bind the Comms hub to the WAN details fields with values for INST16
        Then I should see Perform Post Installation Checks section for INST16

    Scenario: Going through Perform Post Installation Checks section for INST16
        Given Perform Post Installation Checks section for INST16
        When I fill the Perform Post Installation Checks details fields with values for INST16
        Then I should see Perform DCC Message Creation for EICOM section for INST16

    Scenario: Going through Perform DCC Message Creation for EICOM section for INST16
        Given Perform DCC Message Creation for EICOM section for INST16
        When I fill the Perform DCC Message Creation for EICOM details fields with values for INST16
        Then I should see Initial Risk Assessment for GAS section for INST16

    Scenario: Going through "INITIAL RISK ASSESSMENT for INST16 Part 2"
        Given the INITIAL RISK ASSESSMENT section for INST16 Part 2
        When I fill the initialRisk field with the values for INST16 Part 2
        Then I should see INFO window for INST16 Part 2

    Scenario: Going through "INFO" window for INST16 Part 2
        Given the INFO window with the text for INST16 Part 2
        Then I should see RISK ASSESSMENT GAS section for INST16

    Scenario: Going through "RISK ASSESSMENT - GAS" section for INST16
        Given the RISK ASSESSMENT - GAS section for INST16
        When I fill the RISK ASSESSMENT - GAS fields with the values for INST16
        Then I should see Suitability for Smart Meter Installation section for INST16

    Scenario: Going through Suitability for Smart Meter Installation section for INST16
        Given the Suitability for Smart Meter Installation section for INST16
        When I fill the Suitability for Smart Meter Installation fields with the values for INST16
        Then I should see Capture Photo of GAS Installation section for INST16

    Scenario: Input the new Regulator S/N which transferres the Regulator from the Van List GAS section for INST16
        Given the New Regulator section for INST16
        When I fill the New Regulator fields with values for INST16
        Then I should see NEW METER section for INST16

    Scenario: Going through " SMETS2 New Meter details " GAS section for INST16
        Given the  New Meter details section for INST16
        When I fill the New Meter details fields with values Gas for INST16
        Then I should see Gas Initial Meter Reading section for INST16

    Scenario: Going through " SMETS2 Initial New Meter details " GAS section for INST16
        Given the Gas Initial Meter Reading section for INST16
        When I fill the Gas Initial Meter Reading details fields with values for INST16
        Then I should see Gas Install Kit section for INST16

    Scenario: Going through "Install Kit " GAS section for INST16
        Given the Gas Install Kit section for INST16
        When I fill the Gas Install Kit section fields with values for INST16
        Then I should see Perform Post Installation GAS Checks section for INST16

    Scenario: Going through "Post Installation GAS" GAS section for INST16
        Given the Post Installation GAS section for INST16
        When I fill the Post Installation GAS section fields with values for INST16
        Then I should see GICOM Message section for INST16

    Scenario: Going through "GICOM Message" GAS section for INST16
        Given the GICOM Message section for INST16
        When I fill the GICOM Message section fields with values for INST16
        Then I should see Gas Appliance Safety Checks section for INST16

    Scenario: Going through "Gas Appliance Safety Checks" GAS section for INST16
        Given the Gas Appliance Safety Checks section for INST16
        When I fill the Gas Appliance Safety Checks section fields with values and Submit for INST16
        Then I should see SMETS PPMID section for INST16

    Scenario: Going through "SMETS PPMID" GAS section for INST16
        Given the SMETS PPMID section for INST16
        When I fill the SMETS PPMID section fields with values for INST16
        Then I should see PPMID commissioning section for INST16

    #------------------------------------------------------------

    Scenario: Going through PPMID commissioning section for INST16

        Given the PPMID commissioning section for INST16
        When I click on send message IHD PPMID for INST16
        Then I should see Check Binding and commissioning of PPMID section for INST16

    #-----------------------------------------------------------

    # Scenario: Going through "SMETS XIPMD" GAS section for INST16
    #     Given the SMETS XIPMD section for INST16
    #     When I fill the SMETS XIPMD section fields with values for INST16
    #     Then I should see Check Binding and commissioning of PPMID section for INST16

    Scenario: Going through "Check Binding and commissioning of PPMID" GAS section for INST16
        Given the Binding and commissioning of PPMID section for INST16
        When I fill the Binding and commissioning of PPMID fields with values for INST16
        Then I should see configuration of all meters installed section for INST16

    Scenario: Going through "configuration of all meters installed " GAS section for INST16
        Given the configuration of all meters installed  section for INST16
        When I fill the configuration of all meters installed  fields with values for INST16
        Then I should see Energy Efficiency information section for INST16

    Scenario: Going through "Energy Efficiency information" GAS section for INST16
        Given the Energy Efficiency information  section for INST16
        When I fill the Energy Efficiency information fields with values for INST16
        Then I should see Perform Smart Meter Education and Demonstration section for INST16

    Scenario: Going through "Perform Smart Meter Education and Demonstration " GAS section for INST16
        Given the Perform Smart Meter Education and Demonstration section for INST16
        When I fill the Perform Smart Meter Education and Demonstration  fields with values for INST16
        Then I should see Summary of Job and receive Customer Signature section for INST16

    Scenario: Going through "Summary of Job and receive Customer Signature" GAS section for INST16
        Given the Summary of Job and receive Customer Signature section for INST16
        When I fill the Summary of Job and receive Customer Signaturefields with values for INST16
        Then I should see Submit button to complete the job section for INST16