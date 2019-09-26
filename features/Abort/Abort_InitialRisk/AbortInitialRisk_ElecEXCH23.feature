Feature: Exchange 23 Work Flow



Scenario Outline: Logging in to job's "Work Order" window for EXCH23

    Given the Login Page for EXCH23
    When I pass "<Username>" and "<Password>" for EXCH23
    Then I click Login button for EXCH23
    And I should see the Appointment List for EXCH23

    Examples:

        | Username    | Password    |
        | E0000022 | 000Password |

Scenario: Select the Latest workOrder for EXCH23
    Given the Appointment List window for EXCH23
    When I click on select button for EXCH23
    Then I should see Work Order window for EXCH23

Scenario: Going through Call Forward for EXCH23
    Given the "Work Order" window for EXCH23
    When i see Call Forward or Arrive Button for EXCH23
    Then I click on CALL FORWARD button for EXCH23
    Then I should see page contect display for EXCH23
    #And I should see the CUSTOMER CONTACT NUMBER for EXCH23
    #And I should see Contact made field for EXCH23

Scenario: Selecting job and setting to depart for EXCH23
    Given the "Work Order" page for EXCH23
    When I fill the fields with the value for EXCH23
    And I click on DEPART button for EXCH23
    Then I should see Depart for Appointment window for EXCH23
    And I should see the correct MPAN details for EXCH23
    And I should see the correct Customer Name details for EXCH23
    And I should see the correct PostCode details for EXCH23

Scenario: Approving "Depart for Appointment" job for EXCH23
    And "Appointment" details for EXCH23
    When I click on OK button for EXCH23
    And I should see ARRIVE button for EXCH23
    And I should see DOORSTEP PROTOCOL tab activated for EXCH23

Scenario: Set job to Arrived status for EXCH23
    Given the "WorkOrder" page for EXCH23
    When I click on ARRIVE button for EXCH23
    Then I should see Arrival Time details for EXCH23
    And I should see BE AWARE OF ANY DANGER! section for EXCH23

Scenario: Going through "BE AWARE OF ANY DANGER!" section for EXCH23
    Given the BE AWARE OF ANY DANGER! section for EXCH23
    When I fill the DoorStep Protocol fields with the value for EXCH23
    And I click on ON SITE button for EXCH23
    Then I should see RISK ASSESSMENT tab activated for EXCH23
    And I should see INITIAL RISK ASSESSMENT section for EXCH23

Scenario: Going through "INITIAL RISK ASSESSMENT" for EXCH23
    Given the INITIAL RISK ASSESSMENT section for EXCH23
    When I fill the initialRisk field with the values for EXCH23
    Then I should see INFO window for EXCH23