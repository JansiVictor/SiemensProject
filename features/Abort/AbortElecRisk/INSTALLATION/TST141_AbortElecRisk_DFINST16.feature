Feature: TST141_AbortElecRisk_DFINST16

    Scenario: Post DFINST16 SOAP Request
        Given I post workorder using "xmlrequest/DFINST16.XML"

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
        When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

    Scenario: Going through the Reason codes popup
        Given the ELEC Risk AbortReasonCodespopup
        When I click the ELEC Reason and Abort Appointment Job
        Then I should see the ELEC Risk Aborted status for the workorder "DFINST16" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
