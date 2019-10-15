Feature: TST067_AbortNoAccessSuspend_SFGFLTY18TRAD

    Scenario: Post SFGFLTY18TRAD SOAP Request
        Given I post workorder using "xmlrequest/SFGFLTY18TRAD.XML"

    @LoginScenario
    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFGFLTY18TRAD
        When I click on select button For SFGFLTY18TRAD
        Then I should see Work Order window For SFGFLTY18TRAD

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFGFLTY18TRAD
        When i see Call Forward or Arrive Button For SFGFLTY18TRAD
        Then I click on CALL FORWARD button For SFGFLTY18TRAD
        Then I should see page contect display For SFGFLTY18TRAD
        And I should see the CUSTOMER CONTACT NUMBER For SFGFLTY18TRAD
        And I should see Contact made field For SFGFLTY18TRAD

    Scenario: Selecting job and setting to depart
        Given the SFGFLTY18TRAD WorkOrder Page
        When I fill the SFGFLTY18TRAD fields with the value
        And I click on SFGFLTY18TRAD DEPART button
        Then I should see SFGFLTY18TRAD Depart for Appointment window
        And I should see the SFGFLTY18TRAD correct MPAN details
        And I should see the SFGFLTY18TRAD correct Customer Name details
        And I should see the SFGFLTY18TRAD correct PostCode details

    Scenario: Approving "Depart for Appointment" job
        And Appointment details For SFGFLTY18TRAD
        When I click on OK button For SFGFLTY18TRAD
        And I should see ARRIVE button For SFGFLTY18TRAD
        And I should see DOORSTEP PROTOCOL tab activated For SFGFLTY18TRAD

    Scenario: Set job to Arrived status
        Given the SFGFLTY18TRAD WorkOrder Page
        When I click on ARRIVE button For SFGFLTY18TRAD
        Then I should see Arrival Time details For SFGFLTY18TRAD
        And I should see SFGFLTY18TRAD BE AWARE OF ANY DANGER! section

    Scenario: Going through "BE AWARE OF ANY DANGER!" section
        Given the SFGFLTY18TRAD BE AWARE OF ANY DANGER! section
        When I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values
        Then I should see the Appointment List For SFGFLTY18TRAD

    Scenario: Going through Aborting Suspended Job
        Given the Appointment List window For SFGFLTY18TRAD
        When I should click the AbortNoAccessSuspended status for the workorder "SFGFLTY18TRAD"
        Then I should see SFGFLTY18TRAD BE AWARE OF ANY DANGER! section
        And I fill the DoorStep Protocol Values fields to abort suspended job

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the worknolongerrequired Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFGFLTY18TRAD" on the appointments page

    Scenario: Going through deleting the work order after use
        When I delete workorder after use
        Then workorder should no longer exist