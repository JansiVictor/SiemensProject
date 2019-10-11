Feature: DFINST16 - InstallAndLeave Workflow

    Scenario: Post DFINST16 SOAP Request
        Given I post workorder using "xmlrequest/DFISNT16.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder for INST16
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

    Scenario: Approving "Depart for Appointment" job for INST16
        Given Appointment details for INST16
        When I click on OK button for INST16
        Then I should see ARRIVE button for INST16
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
        And I should see INITIAL RISK ASSESSMENT section for INST16

    Scenario: Going through "INITIAL RISK ASSESSMENT" for INST16
        Given for INST16 INITIAL RISK ASSESSMENT section
        When for INST16 fill the initialRisk field with the values
        And for INST16 fill Need to work Yes
        Then for INST16 should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section for INST16
        Given the RISK ASSESSMENT - INST16ELEC section
        When I fill the RISK ASSESSMENT - INST16ELEC fields with the values
        And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for INST16
        Then I click on NEXT SECTION INST16ELEC button

    Scenario: Going through "Suitable for Smart Installation" for INST16
        Given the Suitable for Smart Installation section for INST16
        When I click on Is Site Suitable for Smart Installation? button for INST16
        And I click on Equipment Reposition Required? for INST16
        And I enter Additional Notes for Smart installation Check for INST16
        And I click on smart installation NEXT SECTION button for INST16
        Then I should see the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for INST16

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section for INST16
        Given the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for INST16
        When I fill the METER AND CUT OUT fields with the values for INST16
        Then I should see the Comms Hub details section for INST16

    Scenario: Going through "INSTALL COMMS HUB" section for INST16
        Given the INSTALL COMMS HUB sec for INST16
        When I fill the Ins comms hub fields and capture photo EVIDENCE for INST16
        Then I should see New Meter Details section for for INST16

    Scenario: Going through "New Meter details" section for INST16
        Given the  New Meter details section for INST16
        When I fill the New Meter details fields with values for INST16
        Then I should see ADDITIONAL ELECTRICITY CHECKS section for INST16

    Scenario: Going through Additional Electricity Tests and Checks section for INST16
        Given the the ADDITIONAL ELECTRICITY CHECKS details section for INST16
        When I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for INST16
        Then I should see Electric Initial Meter Reading for INST16

    Scenario: Going through Initial Elec Meter Reading of new meter INST16
        Given electric Initial Meter Reading for INST16
        When I fill the Initial Meter Reading with values for INST16
        Then I should see Commission Bind the Comms hub to the WAN section for INST16

    Scenario: Going through Commission Bind the Comms hub to the WAN section for INST16
        Given Commission Bind the Comms hub to the WAN section for INST16
        When I fill the InstallLeave Commission Bind the Comms hub to the WAN details fields with values
        Then I should see InstallLeave Replace CommsHubNoWan section

    Scenario: Going through Replace CommsHubNoWan section
        Given InstallLeave Replace CommsHubNoWan section
        When I fill the InstallLeave Replace CommshubNoWan details fields with values
        Then I should see Post Installation Check Section for INST16

    Scenario: Going through Perform Post Installation Checks section for INST16
        Given Perform Post Installation Checks section for INST16
        When I fill the Perform Post Installation Checks details fields with values for INST16
        Then I should see InstallLeave Submit button

    Scenario: Going through "INITIAL RISK ASSESSMENT GAS section for INST16GAS"
        Given the INITIAL RISK ASSESSMENT INST16GAS section
        When I fill the initial Risk INST16GAS field with the values
        Then I should see RISK ASSESSMENT INST16GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS" section for INST16GAS
        Given the RISK ASSESSMENT - GAS section for INST16GAS
        When I fill the RISK ASSESSMENT - GAS fields with the values for INST16GAS
        Then I should see Suitability for Smart Meter Installation section for INST16GAS

    Scenario: Going through Suitability for Smart Meter Installation section for INST16GAS
        Given the Suitability for Smart Meter Installation section for INST16GAS
        When I fill the Suitability for Smart Meter Installation fields with the values for INST16GAS
        Then I should see the New Regulator section for INST16GAS

    Scenario: Input the new Regulator S/N which transferres the Regulator from the Van List GAS section for INST16
        Given the New Regulator section for INST16GAS
        When I fill the New Regulator fields with values for INST16GAS
        Then I should see NEW METER section for INST16GAS

    Scenario: Going through " SMETS2 New Meter details " GAS section for INST16GAS
        Given the  New Meter details section for INST16GAS
        When I fill the New Meter details fields with values Gas for INST16GAS
        Then I should see Gas Initial Meter Reading section for INST16GAS

    Scenario: Going through " SMETS2 Initial New Meter details " GAS section for INST16GAS
        Given the Gas Initial Meter Reading section for INST16GAS
        When I fill the Gas Initial Meter Reading details fields with values for INST16GAS
        Then I should see Gas Install Kit section for INST16GAS

    Scenario: Going through "Install Kit " GAS section for INST16GAS
        Given the Gas Install Kit section for INST16GAS
        When I fill the Gas Install Kit section fields with values for INST16GAS
        Then I should see Perform Post Installation GAS Checks section for INST16GAS

    Scenario: Going through "Post Installation GAS" GAS section for INST16GAS
        Given the Post Installation GAS section for INST16GAS
        When I fill the Post Installation GAS section fields with values for INST16GAS
        Then I should see Gas Appliance Safety Checks section for INST16GAS

    Scenario: Going through "Gas Appliance Safety Checks" GAS section for INST16GAS
        Given the Gas Appliance Safety Checks section for INST16GAS
        When I fill the Gas Appliance Safety Checks section fields with values and Submit for INST16GAS
        Then I should see SMETS PPMID section for INST16GAS

    Scenario: Going through "INSTALL PPMID" section
        Given the "INSTALL PPMID" section for INST16
        When I fill the InstallLeave PPMID section fields with values
        Then I should see DEVICE BINDING and COMMISSIONING sec for INST16

    Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
        Given the DEVICE BINDING & COMMISSIONING section for INST16
        When I fill the InstallLeave Binding and commissioning of PPMID fields with values
        Then I should see configuration of all meters installed section for INST16

    Scenario: Going through "configuration of all meters installed " GAS section for INST16
        Given the configuration of all meters installed  section for INST16
        When I fill the InstallLeave configuration of all meters installed  fields with values
        Then I should see ENERGY EFFICIENCY INFORMATION section for INST16

    Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
        Given the ENERGY EFFICIENCY INFORMATION section for INST16
        When I fill the fields54 and click next for INST16
        Then I should see SMART EDUCATION section for INST16

    Scenario: Going through "SMART EDUCATION" section
        Given the SMART EDUCATION section for INST16
        When I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values
        Then I should see InstallLeave Summary of Job and Smart literature left onsite section

    Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
        Given the InstallLeave Smart No literature left onsite section
        When I fill the fields56 and click next for INST16
        Then See CAPTURE CUSTOMER SIGNATURE sec for INST16

    Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
        Given the CAPTURE CUSTOMER SIGNATURE section for INST16
        When I write signature in Customer Signature for INST16
        And I fill the field57 and Job Complete for INST16
        Then see Job Completed screen for INST16

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist