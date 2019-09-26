Feature: SF Gas Inst14 - Abort No Contact

    Scenario Outline: Logging in to job's "Work Order" window
        Given the INSTFrtn Login Page
        When I pass INSTFrtn "<Username>" and "<Password>"
        Then I click INSTFrtn Login button        

          Examples:
    
| Username 		| Password      |
|  E0000022     |  000Password  |



    Scenario: Select the Latest INSTFrtn workOrder
        Given the INSTFrtn Appointment List window
        When I click on INSTFrtn select button
        Then I should see INSTFrtn Work Order window

    Scenario: Going through INSTFrtn Call Forward
        Given the INSTFrtn "Work Order" window
        When i see INSTFrtn Call Forward or Arrive Button
        Then I click on INSTFrtn CALL FORWARD button
        Then I should see INSTFrtn page contect display
        And I should see INSTFrtn Contact made field

    Scenario: Selecting INSTFrtn job and setting to depart
        Given the INSTFrtn "Work Order" page
        When I fill the fields with the value for Contact Made Abort    
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup for Contact Made Abort
        When I click the Not Convenient with Customer Reason and Abort the Job 
        Then I should see the Aborted status for the workorder "SFGINST14" on the appointments page







