Feature: TST_039 SF E FLTY19 SMETS2 - SMETS2 Workflow - Contact made Abort No Access

Scenario: Post SFEFLTY19 SOAP Request
        Given I post workorder using "xmlrequest/SFEFLTY19.XML"

    Scenario Outline: Logging in to job's "Work Order" window
        Given the fltynineteen Login Page
        When I pass fltynineteen "<Username>" and "<Password>"
        Then I click fltynineteen Login button
        And I should see fltynineteen the Appointment List

        Examples:
            | Username    | Password    |
            |  E0000022  |  000Password  |

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

    Scenario: Going through abort scenario
        Given the fltynineteen Work Order page
        When I fill the fields with the value     
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job 
        Then I should see the Aborted status for the workorder "SFEFLTY19" on the appointments page

        Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist