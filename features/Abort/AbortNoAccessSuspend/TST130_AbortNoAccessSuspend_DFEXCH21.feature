Feature: DFEXCH21 - AbortNoAccessSuspend Workflow

    Scenario: Post DFEXCH21 SOAP Request
        Given I post workorder using "xmlrequest/DFEXCH21.XML"

    @LoginScenario
    Scenario: Select the ExTwOne Latest workOrder
        Given the ExTwOne Appointment List window
        When I click on ExTwOne select button
        Then I should see ExTwOne Work Order window

    Scenario: Going through ExTwOne Call Forward
        Given the ExTwOne "Work Order" window
        When i see ExTwOne Call Forward or Arrive Button
        Then I click on ExTwOne CALL FORWARD button
        Then I should see ExTwOne page contect display
        #And I should see the ExTwOne CUSTOMER CONTACT NUMBER
        And I should see ExTwOne Contact made field

    Scenario: Selecting ExTwOne job and setting to depart
        Given the ExTwOne "Work Order" page
        When I fill the ExTwOne fields with the value
        And I click on ExTwOne DEPART button
        Then I should see ExTwOne Depart for Appointment window
        And I should see the ExTwOne correct MPAN details
        And I should see the ExTwOne correct Customer Name details
        And I should see the ExTwOne correct PostCode details

    Scenario: Approving ExTwOne "Depart for Appointment" job
        And ExTwOne "Appointment" details
        When I click on ExTwOne OK button
        And I should see ExTwOne ARRIVE button
        Then I should see ExTwOne DOORSTEP PROTOCOL tab activated

    Scenario: Set ExTwOne job to Arrived status
        Given the ExTwOne "WorkOrder" page
        When I click on ExTwOne ARRIVE button
        Then I should see ExTwOne Arrival Time details
        And I should see ExTwOne BE AWARE OF ANY DANGER! section

    Scenario: Going through ExTwOne "BE AWARE OF ANY DANGER!" section
        Given the ExTwOne BE AWARE OF ANY DANGER! section
        When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
        Then I should see the ExTwOne Appointment List

    Scenario: Going through Aborting Suspended Job
        Given the ExTwOne Appointment List window
        When I should click the AbortNoAccessSuspended status for the workorder "DFEXCH21"
        Then I should see ExTwOne BE AWARE OF ANY DANGER! section
        And I fill the DoorStep Protocol Values fields to abort suspended job

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the worknolongerrequired Reason and Abort the Job
        Then I should see the Aborted status for the workorder "DFEXCH21" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist