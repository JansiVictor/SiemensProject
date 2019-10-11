Feature: TST_138 DF INST16 Workflow - Contact made Abort No Access

Scenario: Post DFINST16 SOAP Request
        Given I post workorder using "xmlrequest/DFINST16.XML"

Scenario Outline: Logging in to job's "Work Order" window for INST16
    Given the Login Page for INST16
    When I pass "<Username>" and "<Password>" for INST16
    Then I click Login button for INST16
    And I should see the Appointment List for INST16

      Examples:
    
| Username 		| Password      |
|  E0000022     |  000Password  |


Scenario: Select the Latest workOrder for INST16
    Given the Appointment List window for INST16
    When I click on select button for INST16
    Then I should see Work Order window for INST16

Scenario: Going through Call Forward for INST16
    Given the "Work Order" window for INST16
    When i see Call Forward or Arrive Button for INST16
    Then I click on CALL FORWARD button for INST16
    Then I should see page contect display for INST16
    And I should see the CUSTOMER CONTACT NUMBER for INST16
    And I should see Contact made field for INST16

Scenario: Going through abort scenario
    Given the "Work Order" page for INST16
    When I fill the fields with the value      
    Then I should see the Abort Reason Code Pop Up

Scenario: Going through the Reason codes popup
    Given the AbortReasonCodespopup
    When I click the Not Convenient with Customer Reason and Abort the Job 
    Then I should see the Aborted status for the workorder "DFINST16" on the appointments page

 	Scenario: Going through deleting the work order after use 
        When I delete workorder after use
        Then workorder should no longer exist