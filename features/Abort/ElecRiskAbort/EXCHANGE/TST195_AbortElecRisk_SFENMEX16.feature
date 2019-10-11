Feature: TST195_AbortElecRisk_NMEX16 Workflow

    Scenario: Post SFENMEX16 SOAP Request
        Given I post workorder using "xmlrequest/SFENMEX16.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFENMEX16
        When I click on select button For SFENMEX16
        Then I should see Work Order window For SFENMEX16

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFENMEX16
        When i see Call Forward or Arrive Button For SFENMEX16
        Then I click on CALL FORWARD button For SFENMEX16
        Then I should see page contect display For SFENMEX16
        And I should see the CUSTOMER CONTACT NUMBER For SFENMEX16
        And I should see Contact made field For SFENMEX16

    Scenario: Selecting job and setting to depart
        Given the SFENMEX16 WorkOrder Page
        When I fill the SFENMEX16 fields with the value
        And I click on SFENMEX16 DEPART button
        Then I should see SFENMEX16 Depart for Appointment window
        And I should see the SFENMEX16 correct MPAN details
        And I should see the SFENMEX16 correct Customer Name details
        And I should see the SFENMEX16 correct PostCode details

    Scenario: Approving "Depart for Appointment" job
        And Appointment details For SFENMEX16
        When I click on OK button For SFENMEX16
        And I should see ARRIVE button For SFENMEX16
        And I should see DOORSTEP PROTOCOL tab activated For SFENMEX16

    Scenario: Set job to Arrived status
        Given the SFENMEX16 WorkOrder Page
        When I click on ARRIVE button For SFENMEX16
        Then I should see Arrival Time details For SFENMEX16
        And I should see SFENMEX16 BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the SFENMEX16 BE AWARE OF ANY DANGER! section
        When I fill the SFENMEX16 DoorStep Protocol fields with the value
        And I click on SFENMEX16 ON SITE button
        Then I should see SFENMEX16 RISK ASSESSMENT tab activated
        And I should see SFENMEX16 INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given the SFENMEX16 INITIAL RISK ASSESSMENT section
        When I fill the SFENMEX16 initialRisk field with the values
        Then I should see SFENMEX16 RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given the SFENMEX16 RISK ASSESSMENT - ELEC section
        When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

    Scenario: Going through the Reason codes popup
        Given the ELEC Risk AbortReasonCodespopup
        When I click the ELEC Reason and Abort Appointment Job
        Then I should see the ELEC Risk Aborted status for the workorder "SFENMEX16" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
