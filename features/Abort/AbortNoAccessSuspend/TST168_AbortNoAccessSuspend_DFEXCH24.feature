Feature: DFEXCH24 - AbortNoAccessSuspend Workflow

Scenario: Post DFEXCH24 SOAP Request
Given I post workorder using "xmlrequest/DFEXCH24.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given the TST22 Login Page
        When I pass TST22 "<Username>" and "<Password>"
        Then I click TST22 Login button
        And I should see the TST22 Appointment List

        Examples:
            | Username    | Password    |
            |  E0000022  |  000Password  |

    Scenario: Select the Latest workOrder
        Given the TST22 Appointment List window
        When I click on TST22 select button
        Then I should see TST22 Work Order window

    Scenario: Going through Call Forward
        Given the TST22 the Work Order window
        When i see TST22 Call Forward or Arrive Button
        Then I click on TST22 CALL FORWARD button
        Then I should see page TST22 contect display
        Then I should see TST22 Contact made field

    Scenario: Selecting job and setting to depart
        When I fill the TST22 fields with the value
        When I click on TST22 DEPART button
        Then I should see TST22 Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST22 Appointment details
        When I click on TST22 MPRNOK button
        Then I should see TST22 ARRIVE button
        Then I should see TST22 DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given the TST WorkOrder page
        When I click on TST22 ARRIVE button
        Then I should see TST22 Arrival Time details
        And I should see TST22 BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the TST22 BE AWARE OF ANY DANGER! section
        When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
        Then I should see the TST22 Appointment List

    Scenario: Going through Aborting Suspended Job
        Given the TST22 Appointment List window
        When I should click the AbortNoAccessSuspended status for the workorder "DFEXCH24"
        Then I should see TST22 BE AWARE OF ANY DANGER! section
        And I fill the DoorStep Protocol Values fields to abort suspended job

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the worknolongerrequired Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFEXCH24" on the appointments page

        Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist   