Feature: SF Elec  WorkFLow - Abort No Contact

    Scenario Outline: Logging in to job's "Work Order" window for EXCH23

        Given the Login Page for EXCH23
        When I pass "<Username>" and "<Password>" for EXCH23
        Then I click Login button for EXCH23
        And I should see the Appointment List for EXCH23

            Examples:
    
| Username 		| Password      |
|  E0000022     |  000Password  |

    Scenario: Select the Latest workOrder for EXCH23
        Given the Appointment List window for EXCH23
        When I click on select button for EXCH23
        Then I should see Work Order window for EXCH23

    Scenario: Going through Call Forward for EXCH23
        Given the "Work Order" window for EXCH23
        When i see Call Forward or Arrive Button for EXCH23
        Then I click on CALL FORWARD button for EXCH23
        Then I should see page contect display for EXCH23

    Scenario: Selecting job and setting to depart for EXCH23
        Given the "Work Order" page for EXCH23
        When I fill the fields with the value for Abort Scenario         
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job 
        Then I should see the Aborted status for the workorder "SFElecEXCH23" on the appointments page







