Feature: TST042_AbortElecRisk_SFEFLTY19SMETS2.feature

    Scenario: Post SFEFLTY19 SOAP Request
        Given I post workorder using "xmlrequest/SFEFLTY19.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFEFLTY19
        When I click on select button For SFEFLTY19
        Then I should see Work Order window For SFEFLTY19

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFEFLTY19
        When i see Call Forward or Arrive Button For SFEFLTY19
        Then I click on CALL FORWARD button For SFEFLTY19
        Then I should see page contect display For SFEFLTY19
        And I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19
        And I should see Contact made field For SFEFLTY19

    Scenario: Selecting job and setting to depart
        Given the SFEFLTY19 WorkOrder Page
        When I fill the SFEFLTY19 fields with the value
        And I click on SFEFLTY19 DEPART button
        Then I should see SFEFLTY19 Depart for Appointment window
        And I should see the SFEFLTY19 correct MPAN details
        And I should see the SFEFLTY19 correct Customer Name details
        And I should see the SFEFLTY19 correct PostCode details

    Scenario: Approving "Depart for Appointment" job
        And Appointment details For SFEFLTY19
        When I click on OK button For SFEFLTY19
        And I should see ARRIVE button For SFEFLTY19
        And I should see DOORSTEP PROTOCOL tab activated For SFEFLTY19

    Scenario: Set job to Arrived status
        Given the SFEFLTY19 WorkOrder Page
        When I click on ARRIVE button For SFEFLTY19
        Then I should see Arrival Time details For SFEFLTY19
        And I should see SFEFLTY19 BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the SFEFLTY19 BE AWARE OF ANY DANGER! section
        When I fill the SFEFLTY19 DoorStep Protocol fields with the value
        And I click on SFEFLTY19 ON SITE button
        Then I should see SFEFLTY19 RISK ASSESSMENT tab activated
        And I should see SFEFLTY19 INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given the SFEFLTY19 INITIAL RISK ASSESSMENT section
        When I fill the SFEFLTY19 initialRisk field with the values
        Then I should see SFEFLTY19 RISK ASSESSMENT ELEC section

    Scenario: Going through "RISK ASSESSMENT - ELEC" section
        Given the SFEFLTY19 RISK ASSESSMENT - ELEC section
        When I fill the RISK ASSESSMENT - Abort ELEC fields with the values

    Scenario: Going through the Reason codes popup
        Given the ELEC Risk AbortReasonCodespopup
        When I click the ELEC Reason and Abort Appointment Job
        Then I should see the ELEC Risk Aborted status for the workorder "SFEFLTY19" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist
