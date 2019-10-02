Feature: TST_151 SF E INST15 Workflow - Contact made Abort No Access

    Scenario Outline: Logging in to job's "Work Order" window
        Given the Login Page For SFEINST15
        When I pass "<Username>" and "<Password>" For SFEINST15
        Then I click Login button For SFEINST15
        And I should see the Appointment List For SFEINST15

           Examples:
    
| Username 		| Password      |
|  E0000022     |  000Password  |


    Scenario: Select the Latest workOrder
        Given the Appointment List window For SFEINST15
        When I click on select button For SFEINST15
        Then I should see Work Order window For SFEINST15

    Scenario: Going through Call Forward
        Given the "Work Order" window For SFEINST15
        When i see Call Forward or Arrive Button For SFEINST15
        Then I click on CALL FORWARD button For SFEINST15
        Then I should see page contect display For SFEINST15
        And I should see the CUSTOMER CONTACT NUMBER For SFEINST15
        And I should see Contact made field For SFEINST15

    Scenario: Selecting job and setting to depart
        Given the SFEINST15 WorkOrder Page
       When I fill the fields with the value       
        Then I should see the Abort Reason Code Pop Up

    Scenario: Going through the Reason codes popup
        Given the AbortReasonCodespopup
        When I click the Not Convenient with Customer Reason and Abort the Job 
        Then I should see the Aborted status for the workorder "SFEINST15" on the appointments page





