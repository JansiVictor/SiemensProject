Feature: TST02_SF_ELEC_FLTY19

    Scenario Outline: Logging in to job's "Work Order" window
        Given the fltynineteen Login Page
        When I pass fltynineteen "<Username>" and "<Password>"
        Then I click fltynineteen Login button
        And I should see fltynineteen the Appointment List

        Examples:
            | Username | Password    |
            | E0000022 | 000Password |

    Scenario: Select the Latest workOrder
        Given the fltynineteen Appointment List window
        When I click on fltynineteen select button
        Then I should see fltynineteen Work Order window

    Scenario: Going through Call Forward
        Given the fltynineteen Work Order window
        When I see fltynineteen Call Forward or Arrive Button
        Then I click on fltynineteen CALL FORWARD button
        Then I should see fltynineteen page contect display
        And I should see fltynineteen the CUSTOMER CONTACT NUMBER
        And I should see fltynineteen Contact made field

    Scenario: Selecting job and setting to depart
        Given the fltynineteen Work Order page
        When I fill the fltynineteen fields with the value
        And I click on fltynineteen DEPART button
        Then I should see fltynineteen Depart for Appointment window
        And I should see fltynineteen the correct MPAN details
        And I should see fltynineteen the correct Customer Name details
        And I should see fltynineteen the correct PostCode details

    Scenario: Approving "Depart for Appointment" job
        Given fltynineteen Appointment details
        When I click on fltynineteen OK button
        Then I should see fltynineteen ARRIVE button
        And I should see fltynineteen DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given the fltynineteen Work Order page
        When I click on fltynineteen ARRIVE button
        Then I should see fltynineteen Arrival Time details
        And I should see fltynineteen BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the fltynineteen BE AWARE OF ANY DANGER! section
        When I fill the fltynineteen DoorStep Protocol fields with the value
        Then I click on ON fltynineteen SITE button
        Then I should see fltynineteen RISK ASSESSMENT tab activated
        And I should see fltynineteen INITIAL RISK ASSESSMENT section

    Scenario: Going through "INITIAL RISK ASSESSMENT"
        Given the fltynineteen INITIAL RISK ASSESSMENT section
        When I click the Unabletoturnoff Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFEFLTY19" on the appointments page


