Feature: TST211_AbortElecRisk_SFERMVE6

    Scenario: Post SFERMVE6 SOAP Request
        Given I post workorder using "xmlrequest/SFERMVE6.XML"

    @LoginScenario
    Scenario: Select the Latest RmveSix workOrder
        Given the RmveSix Appointment List window
        When I click on RmveSix select button
        Then I should see RmveSix Work Order window

    Scenario: Going through RmveSix Call Forward
        Given the RmveSix "Work Order" window
        When i see RmveSix Call Forward or Arrive Button
        Then I click on RmveSix CALL FORWARD button
        Then I should see RmveSix page contect display
        And I should see RmveSix Contact made field

    Scenario: Selecting RmveSix job and setting to depart
        Given the RmveSix "Work Order" page
        When I fill the RmveSix fields with the value
        And I click on RmveSix DEPART button
        Then I should see RmveSix  for Appointment window
        And I should see the RmveSix correct MPAN details
        And I should see the RmveSix correct Customer Name details
        And I should see the RmveSix correct PostCode details

    Scenario: Approving RmveSix "Depart for Appointment" job
        And "Appointment" RmveSix details
        When I click on RmveSix OK button
        And I should see RmveSix ARRIVE button
        And I should see RmveSix DOORSTEP PROTOCOL tab activated

    Scenario: Set RmveSix job to Arrived status
        When I click on RmveSix ARRIVE button
        Then I should see RmveSix Arrival Time details
        And I should seeRmveSix  BE AWARE OF ANY DANGER! section

    Scenario: Going through RmveSix "BE AWARE OF ANY DANGER!" section
        Given the RmveSix BE AWARE OF ANY DANGER! section
        When I fill the RmveSix DoorStep Protocol fields with the value
        And I click on RmveSix ON SITE button
        Then I should see RmveSix RISK ASSESSMENT tab activated
        And I should see RmveSix Initial Risk Assessment for GAS section

    Scenario: Going through RmveSix "INITIAL RISK ASSESSMENT"
        Given the RmveSix INITIAL RISK ASSESSMENT section
        When I fill the RmveSix initialRisk field with the values

    Scenario: Going through RmveSix "INFO" window
        Given the RmveSix INFO window with the text
        Then I should see RmveSix RISK ASSESSMENT ELEC section

    Scenario: Going through RmveSix "RISK ASSESSMENT - ELEC" section
        Given the RmveSix RISK ASSESSMENT - ELEC section
        When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

    Scenario: Going through the Reason codes popup
        Given the ELEC Risk AbortReasonCodespopup
        When I click the ELEC Reason and Abort Appointment Job
        Then I should see the ELEC Risk Aborted status for the workorder "SFERMVE6" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
