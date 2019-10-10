Feature: TST143_AbortInitialRisk_INST16SMETS2

Scenario Outline: Logging in to job's "Work Order" window for INST16
    Given the Login Page for INST16
    When I pass "<Username>" and "<Password>" for INST16
    Then I click Login button for INST16
    And I should see the Appointment List for INST16

    Examples:
        | Username    | Password    |
        | Automation2 | Aut0m4t1on2 |

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
    When I fill the Commission Bind the Comms hub to the WAN details fields with values for INST16
    Then I should see Post Installation Check Section for INST16

Scenario: Going through Perform Post Installation Checks section for INST16
    Given Perform Post Installation Checks section for INST16
    When I fill the Perform Post Installation Checks details fields with values for INST16
    Then I should see DCC message for EICOM for INST16

Scenario: Going through Perform DCC Message Creation for EICOM section for INST16
    Given Perform DCC Message Creation for EICOM section for INST16
    When I fill the Perform DCC Message Creation for EICOM details fields with values for INST16
    Then I should see Initial Risk Assessment for GAS section for INST16      

Scenario: Going through "INITIAL RISK ASSESSMENT GAS section for INST16GAS"
    Given the INITIAL RISK ASSESSMENT INST16GAS section
    When I fill the Abort Initial Risk Fields with Values
    When I click the Unabletoturnoff Reason and Abort the GASJob

Scenario: Going through "INSTALL PPMID" section
    Given the "INSTALL PPMID" section for INST16
    When I fill the fields for Install PPMID for INST16
    Then I should see PPMID COMMISSIONING section for INST16

Scenario: Going through "PPMID COMMISSIONING" section
    Given the PPMID COMMISSIONING section for INST16
    When I click on Send Message IHD-PPMID butn for INST16		
    Then I should see DEVICE BINDING and COMMISSIONING sec for INST16

Scenario: Going through "DEVICE BINDING & COMMISSIONING" section
    Given the DEVICE BINDING & COMMISSIONING section for INST16
    When I fill the fields53 and click next for INST16
    Then I should see configuration of all meters installed section for INST16

    Scenario: Going through "configuration of all meters installed " GAS section for INST16
    Given the configuration of all meters installed  section for INST16
    When TST135 I fill the configuration of all meters       
    Then I should see ENERGY EFFICIENCY INFORMATION section for INST16

Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
    Given the ENERGY EFFICIENCY INFORMATION section for INST16
    When I fill the fields54 and click next for INST16
    Then I should see SMART EDUCATION section for INST16

Scenario: Going through "SMART EDUCATION" section
    Given the SMART EDUCATION section for INST16
    When I fill the fields55 and click next for INST16
    Then I should see SMART LITERATURE LEFT ON SITE section for INST16

Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
    Given the SMART LITERATURE LEFT ON SITE section for INST16
    When I fill the fields56 and click next for INST16
    Then See CAPTURE CUSTOMER SIGNATURE sec for INST16

Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
    Given the CAPTURE CUSTOMER SIGNATURE section for INST16
    When I write signature in Customer Signature for INST16
    And I fill the field57 and Job Complete for INST16
    Then see Job Completed screen for INST16

