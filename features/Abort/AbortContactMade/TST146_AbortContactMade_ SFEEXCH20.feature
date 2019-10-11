Feature: TST_146 SF E EXCH20 Workflow - Contact made Abort No Access

Scenario: Post SFEEXCH20 SOAP Request
        Given I post workorder using "xmlrequest/SFEEXCH20.XML"

Feature: Exchange20 Workflow

    Scenario Outline: Logging in to job's "Work Order" window
        Given the ExTwnty Login Page
        When I pass ExTwnty "<Username>" and "<Password>"
        Then I click ExTwnty Login button
        And I should see the ExchangeTwnty Appointment List

           Examples:
    
| Username 		| Password      |
|  E0000022     |  000Password  |



    Scenario: Select the Latest ExchangeTwnty workOrder
        Given the ExchangeTwnty Appointment List window
        When I click on ExchangeTwnty select button
        Then I should see ExchangeTwnty Work Order window

    Scenario: Going through ExchangeTwnty Call Forward
        Given the ExchangeTwnty "Work Order" window
        When i see ExchangeTwnty Call Forward or Arrive Button
        Then I click on ExchangeTwnty CALL FORWARD button
        Then I should see ExchangeTwnty page contect display
        And I should see ExchangeTwnty Contact made field

    Scenario: Selecting ExchangeTwnty job and setting to depart
        Given the ExchangeTwnty Work Order page
        When I fill the fields with the value for Contact Made Abort       
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup for Contact Made Abort
        When I click the Not Convenient with Customer Reason and Abort the Job
        Then I should see the Aborted status for the workorder "SFEEXCH20" on the appointments page


 	Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist