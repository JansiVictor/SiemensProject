Feature: Exchange 21 Workflow

Scenario Outline: Logging in to job's ExTwOne "Work Order" window
Given the ExTwOne Login Page
When I pass ExTwOne "<Username>" and "<Password>"
Then I click ExTwOne Login button
And I should see the ExTwOne Appointment List 

Examples:
| Username 		| Password      |
|  E0000022  |  000Password  |


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
When I fill the ExTwOne DoorStep Protocol fields with the value
And I click on ExTwOne ON SITE button 	
Then I should see ExTwOne RISK ASSESSMENT tab activated
And I should see ExTwOne INITIAL RISK ASSESSMENT section

Scenario: Going through ExTwOne "INITIAL RISK ASSESSMENT"
Given the ExTwOne INITIAL RISK ASSESSMENT section
When I fill the ExTwOne initialRisk field with the values
Then I should see ExTwOne INFO window

#Scenario: Going through ExTwOne "INFO" window   
Given the ExTwOne INFO window with the text
#When I click on ExTwOne OK button 
#Then I should see ExTwOne RISK ASSESSMENT ELEC section 

