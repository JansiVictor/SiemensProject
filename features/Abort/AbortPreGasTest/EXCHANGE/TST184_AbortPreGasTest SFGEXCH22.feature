Feature: TST184_AbortPreGasTest SFGEXCH22

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
        When I fill Pre Installtion Tighness Check NO and click abort button1
        Then I should see the Abort Reason Code Pop Up PreGas

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup PreGas
        When I click the Reason and Abort Appointment Button
        Then I should see the Aborted status for the workorder "SFGEXCH22" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist