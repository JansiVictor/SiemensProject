Feature: TST216_AbortGasRisk_SFGRMVE5

    Scenario: Post SFGRMVE5 SOAP Request
        Given I post workorder using "xmlrequest/SFGRMVE5.XML"

    @LoginScenario
    Scenario: Select the Latest RmveGas workOrder
        Given the RmveGas Appointment List window
        When I click on RmveGas select button

    Scenario: Going through RmveGas Call Forward
        Given the RmveGas "Work Order" window
        When i see RmveGas Call Forward or Arrive Button
        Then I click on RmveGas CALL FORWARD button
        Then I should see RmveGas page contect display
        And I should see RmveGas Contact made field

    Scenario: Selecting RmveGas job and setting to depart
        Given the RmveGas "Work Order" page
        When I fill the RmveGas fields with the value
        And I click on RmveGas DEPART button
        Then I should see RmveGas  for Appointment window
        And I should see the RmveGas correct MPAN details
        And I should see the RmveGas correct Customer Name details
        And I should see the RmveGas correct PostCode details

    Scenario: Approving RmveGas "Depart for Appointment" job
        And "Appointment" RmveGas details
        When I click on RmveGas Appointment OK button
        And I should see RmveGas ARRIVE button
        And I should see RmveGas DOORSTEP PROTOCOL tab activated

    Scenario: Set RmveGas job to Arrived status
        When I click on RmveGas ARRIVE button
        Then I should see RmveGas Arrival Time details
        And I should see RmveGas  BE AWARE OF ANY DANGER! section

    Scenario: Going through RmveGas "BE AWARE OF ANY DANGER!" section
        Given the RmveGas BE AWARE OF ANY DANGER! section
        When I fill the RmveGas DoorStep Protocol fields with the value
        And I click on RmveGas ON SITE button
        Then I should see RmveGas RISK ASSESSMENT tab activated
        And I should see RmveGas Initial Risk Assessment for GAS section

    Scenario: Going through RmveGas "INITIAL RISK ASSESSMENT"
        Given the RmveGas INITIAL RISK ASSESSMENT section
        When I fill the RmveGas initialRisk field with the values

    Scenario: Going through RmveGas "INFO" window
        Given the RmveGas INFO window with the text

    Scenario: Going through RmveGas "RISK ASSESSMENT - ELEC" section
        Given the RmveGas RISK ASSESSMENT - ELEC section
        When I fill the RmveGas RISK ASSESSMENT - ELEC fields with the values
        And I click on RmveGas CAPTURE PHOTO OF HAZARD IDENTIFIED button
        And I click on RmveGas NEXT SECTION button
        Then I should see the RmveGas RISK ASSESSMENT - GAS section

    Scenario: Going through RmveGas "RISK ASSESSMENT - GAS"
        Given the RmveGas RISK ASSESSMENT - GAS section
        And I fill the GasRisk abort fields with values
        And I select Reason and Gas Abort Job
        Then I should see the Aborted status for the workorder "SFGRMVE5" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
