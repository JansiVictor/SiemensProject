Feature: TST_037 DF FLTY20 SMETS2 - SMETS2 Workflow - Abort Pre Gas Test

    Scenario Outline: Logging in to job's "Work Order" window
        Given FTwenty the Login Page
        When FTwenty I pass "<Username>" and "<Password>"
        Then FTwenty I click Login button
        And FTwenty I should see the Appointment List

        Examples:
            | Username    | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given FTwenty the Appointment List window
        When FTwenty I click on select button
        Then FTwenty I should see Work Order window

    Scenario: Going through Call Forward
        Given FTwenty the "Work Order" window
        When FTwenty i see Call Forward or Arrive Button
        Then FTwenty I click on CALL FORWARD button
        Then FTwenty I should see page contect display
        And FTwenty I should see the CUSTOMER CONTACT NUMBER
        And FTwenty I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given FTwenty the "Work Order" page
        When FTwenty I fill the fields with the value
        And FTwenty I click on DEPART button
        Then FTwenty I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given FTwenty Appointment details
        When FTwentyD I click on OK button
        Then FTwenty I should see ARRIVE button
        And FTwenty I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given FTwenty the "WorkOrder" page
        When FTwenty I click on ARRIVE button
        Then FTwenty I should see Arrival Time details
        And FTwenty I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given FTwenty the BE AWARE OF ANY DANGER! section
        When FTwenty I fill the DoorStep Protocol fields with the value
        And FTwenty I click on ON SITE button
        Then FTwenty I should see RISK ASSESSMENT tab activated
        And FTwenty I should see INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given FTwenty the INITIAL RISK ASSESSMENT section
        When FTwenty I fill the initialRisk field with the values
        Then FTwenty I should see INFO window

    Scenario: Going through "INFO" window
        Given FTwenty the INFO window with the text
        When FTwentyI I click on OK button
        Then FTwenty I should see RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given FTwenty the RISK ASSESSMENT - ELEC section
        When FTwenty I fill the RISK ASSESSMENT - ELEC fields with the values
        And FTwenty I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And FTwenty RISK ASSESSMENT ELEC NEXT SECTION button
        Then FTwenty I should see the RISK ASSESSMENT - GAS section

    Scenario: Going through "RISK ASSESSMENT - GAS"
        Given FTwenty the RISK ASSESSMENT - GAS section
        When FTwenty I fill the field05 with the value05
        Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
        And FTwenty I fill the field06 with the value06
        And FTwentyE I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec

    Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
        Given FTwentyE the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
        When FTwentyE I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then FTwentyE the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

    Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
        Given FTwenty the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
        When FTwenty I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
        Then FTwenty I should see INITIAL POLARITY CHECK-MARTINDALE TEST section

    Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
        Given FTwenty the INITIAL POLARITY CHECK MARTINDALE TEST section
        When FTwenty I fill the INITIAL POLARITY CHECK field with the values
        Then FTwenty I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
        Then FTwenty I fill the Socket Found field with the values
        And FTwenty I should see INITIAL POLARITY AT METER AND CUT OUT section

    Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
        Given FTwenty the INITIAL POLARITY AT METER AND CUT OUT section
        When FTwenty I fill the METER AND CUT OUT fields with the values
        And FTwenty I click on SUBMIT button
        Then FTwenty I should see the CURRENT IHD-PPMID DETAILS section in remove tab

    Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
        Given FTwenty the CURRENT IHD-PPMID DETAILS section
        When FTwenty I fill the field010 with the value010
        And FTwenty I should see CURRENT METER DETAILS - GAS section
        Then FTwenty current meter details page contect display

    Scenario: Going through "CURRENT METER DETAILS - GAS" section
        Given FTwenty the CURRENT METER DETAILS - GAS section
        When FTwenty I fill the field with the value
        Then FTwenty I should see CURRENT Electric Meter

    Scenario: Going through "CURRENT METER DETAILS - ELEC" section
        Given FTwenty the CURRENT Electric Meter
        When FTwenty I fill the field011 with the value Value011
        Then FTwenty I should see CURRENT COMMS HUB DETAILS section
        And FTwenty current Electric page contect display

    Scenario: Going through "CURRENT COMMS HUB DETAILS" section
        Given FTwenty the CURRENT COMMS HUB DETAILS section
        When FTwenty I fill the field13 with the value13
        Then FTwenty I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
        And FTwenty I should see DETERMINE FAULT ACTIVITY section

    Scenario: Going through "DETERMINE FAULT ACTIVITY" section
        Given FTwenty the DETERMINE FAULT ACTIVITY section
        When FTwenty I fill the field14 with the value014
        Then FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
        And FTwenty I fill the field15 with the value15
        And FTwenty I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
        And FTwenty I fill the field16 with the value16
        And FTwenty I select Comms Hub field
        And FTwenty I select Elec Meter field
        And FTwenty I select Gas Meter field
        And FTwenty I select Regulator field
        And FTwenty I select IHD-PPMID field
        And FTwenty I click on NEXT SECT button
        And FTwenty I should see PRE INSTALLATION GAS TIGHTNESS TEST section

    Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
        Given FTwenty the PRE INSTALLATION GAS TIGHTNESS TEST section
        When I fill Pre Installtion Tighness Check NO and click abort button
        Then I should see the Abort Reason Code Pop Up PreGas

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup PreGas
        When I click the Tampering Identified Reason and Abort the Job 
        Then I should see the Aborted status for the workorder "DFFLTY20" on the appointments page
        
        