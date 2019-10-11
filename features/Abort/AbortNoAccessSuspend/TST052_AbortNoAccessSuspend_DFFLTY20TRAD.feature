Feature: DFFLTY20TRAD - AbortNoAccessSuspenf Workflow

Scenario: Post DFFLTY20TRAD SOAP Request
Given I post workorder using "xmlrequest/DFFLTY20TRAD.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given TST13 the Login Page
        When TST13 I pass "<Username>" and "<Password>"
        Then TST13 I click Login button
        And TST13 I should see the Appointment List

        Examples:
            | Username    | Password    |
            |  E0000022  |  000Password  |

    Scenario: Select the Latest workOrder
        Given TST13 the Appointment List window
        When TST13 I click on select button
        Then TST13 I should see Work Order window

    Scenario: Going through Call Forward
        Given TST13 the "Work Order" window
        When TST13 i see Call Forward or Arrive Button
        Then TST13 I click on CALL FORWARD button
        Then TST13 I should see page contect display
        And TST13 I should see the CUSTOMER CONTACT NUMBER
        And TST13 I should see Contact made field

    Scenario: Selecting job and setting to depart
        Given TST13 the "Work Order" page
        When TST13 I fill the fields with the value
        And TST13 I click on DEPART button
        Then TST13 I should see Depart for Appointment window

    Scenario: Approving "Depart for Appointment" job
        Given TST13 Appointment details
        When TST13D I click on OK button
        Then TST13 I should see ARRIVE button
        And TST13 I should see DOORSTEP PROTOCOL tab activated

    Scenario: Set job to Arrived status
        Given TST13 the "WorkOrder" page
        When TST13 I click on ARRIVE button
        Then TST13 I should see Arrival Time details
        And TST13 I should see BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given TST13 the BE AWARE OF ANY DANGER! section
        When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
        Then TST13 I should see the Appointment List

    Scenario: Going through Aborting Suspended Job
        Given TST13 the Appointment List window
        When I should click the AbortNoAccessSuspended status for the workorder "DFFLTY20TRAD"
        Then TST13 I should see BE AWARE OF ANY DANGER! section
        And I fill the DoorStep Protocol Values fields to abort suspended job

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the worknolongerrequired Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFFLTY20TRAD" on the appointments page

Scenario: Going through deleting the work order after use 
When I delete workorder after use
Then workorder should no longer exist