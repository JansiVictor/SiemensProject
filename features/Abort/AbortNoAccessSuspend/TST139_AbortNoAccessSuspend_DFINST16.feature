Feature: DFINST16 - AbortNoAccessSuspend Workflow

Scenario Outline: Logging in to job's "Work Order" window for INST16
    Given the Login Page for INST16
    When I pass "<Username>" and "<Password>" for INST16
    Then I click Login button for INST16
    And I should see the Appointment List for INST16

    Examples:
        | Username    | Password    |
        |  E0000022  |  000Password  |

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
    When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
    Then I should see the Appointment List for INST16

Scenario: Going through Aborting Suspended Job
Given the Appointment List window for INST16
When I should click the AbortNoAccessSuspended status for the workorder "DFINST16"
Then I should see BE AWARE OF ANY DANGER! section for INST16
And I fill the DoorStep Protocol Values fields to abort suspended job

Scenario: Going through the Reason codes popup
Given the AbortReasonCodespopup
When I click the worknolongerrequired Reason and Abort the Job
Then I should see the Aborted status for the workorder "DFINST16" on the appointments page