Feature: GRMVE5 Workflow

Scenario Outline: Logging in to job's "Work Order" window
Given the RmveGas Login Page
When I pass RmveGas "<Username>" and "<Password>"
Then I click RmveGas Login button
#And I should see the RmveGas Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest RmveGas workOrder
Given the RmveGas Appointment List window
When I click on RmveGas select button
#Then I should see RmveGas Work Order window

Scenario: Going through RmveGas Call Forward
Given the RmveGas "Work Order" window
When i see RmveGas Call Forward or Arrive Button
Then I click on RmveGas CALL FORWARD button
Then I should see RmveGas page contect display
#And I should see the RmveGas CUSTOMER CONTACT NUMBER
And I should see RmveGas Contact made field

Scenario: Selecting RmveGas job and setting to depart
Given the RmveGas "Work Order" page
When I fill the RmveGas fields with the value
And I click on RmveGas DEPART button 
Then I should see RmveGas  for Appointment window
And I should see the RmveGas correct MPAN details
And I should see the RmveGas correct Customer Name details
And I should see the RmveGas correct PostCode details

Scenario: Approving RmveGas "Depart for Appointment" job
And "Appointment" RmveGas details
When I click on RmveGas Appointment OK button  	
And I should see RmveGas ARRIVE button
And I should see RmveGas DOORSTEP PROTOCOL tab activated

Scenario: Set RmveGas job to Arrived status
//Given the RmveGas "WorkOrder" page
When I click on RmveGas ARRIVE button  	
Then I should see RmveGas Arrival Time details
And I should see RmveGas  BE AWARE OF ANY DANGER! section

Scenario: Going through RmveGas "BE AWARE OF ANY DANGER!" section
Given the RmveGas BE AWARE OF ANY DANGER! section 
When I fill the RmveGas DoorStep Protocol fields with the value
And I click on RmveGas ON SITE button 	
Then I should see RmveGas RISK ASSESSMENT tab activated
And I should see RmveGas Initial Risk Assessment for GAS section

Scenario: Going through RmveGas "INITIAL RISK ASSESSMENT"
Given the RmveGas INITIAL RISK ASSESSMENT section
When I fill the RmveGas initialRisk field with the values
#Then I should see the RmveGas see INFO window

Scenario: Going through RmveGas "INFO" window   
Given the RmveGas INFO window with the text
#When I click on RmveGas INFO OK button 
#Then I should see RmveGas RISK ASSESSMENT ELEC section 

Scenario: Going through RmveGas "RISK ASSESSMENT - ELEC" section
Given the RmveGas RISK ASSESSMENT - ELEC section
When I fill the RmveGas RISK ASSESSMENT - ELEC fields with the values
And I click on RmveGas CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on RmveGas NEXT SECTION button
Then I should see the RmveGas RISK ASSESSMENT - GAS section

Scenario: Going through RmveGas "RISK ASSESSMENT - GAS"
Given the RmveGas RISK ASSESSMENT - GAS section
When I fill the RmveGas field05 with the value05
Then I click on RmveGas CAPTURE PHOTOGRAPHIC EVIDENCE button
And I fill the RmveGas field06 with the value06
And I should see RmveGas CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

Scenario: Going through RmveGas "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
Given the RmveGas CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
When I click on RmveGas CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then I should see RmveGas INITIAL POLARITY CHECK - MARTINDALE TEST section

Scenario: Going through RmveGas "INITIAL POLARITY CHECK MARTINDALE TEST" section
Given the RmveGas INITIAL POLARITY CHECK MARTINDALE TEST section
When I fill the RmveGas INITIAL POLARITY CHECK field with the values
Then I click on RmveGas CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
Then I fill the RmveGas Socket Found field with the values
And I should see RmveGas INITIAL POLARITY CHECK AT METER AND CUT OUT section

Scenario: Going through RmveGas "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
Given the RmveGas INITIAL POLARITY CHECK - AT METER AND CUT OUT section
When I fill the RmveGas METER AND CUT OUT fields with the values
And I click on RmveGas SUBMIT button
Then I should see the RmveGas CURRENT IHD-PPMID DETAILS section in remove tab

Scenario: Going through RmveGas "CURRENT IHD/PPMID DETAILS" section
Given the RmveGas CURRENT IHD-PPMID DETAILS section
When I fill the RmveGas CURRENT IHD-PPMID field010 with the value010
And I should see RmveGas CURRENT METER DETAILS - GAS section
Then I should see the page RmveGas contect display of current meter details

Scenario: Going through RmveGas "CURRENT METER DETAILS - GAS" section
Given the RmveGas CURRENT METER DETAILS - GAS section
When I fill the RmveGas CURRENT METER DETAILS field with the value
#Then I should see RmveGas CURRENT COMMS HUB DETAILS section
#And I should see the RmveGas CURRENT COMMS HUB page contect display

Scenario: Going through "CURRENT COMMS HUB DETAILS" section
#Given the CURRENT COMMS HUB DETAILS section
When I fill the RmveGas CURRENT COMMS HUB field13 with the value13
Then I click on RmveGas CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
#And I should see RmveGas REMOVE IHD-PPMID section

Scenario: Going through RmveGas "REMOVE IHD/PPMID" section
#Given the RmveGas REMOVE IHD-PPMID section
When I fill the RmveGas REMOVE IHD-PPMID field20 with the value20
Then I click on RmveGas IHD-PPMID OK button in Info window with the text Ensure IHD is Powered On
Then I fill the RmveGas IHD field21 with the value21
Then I click on RmveGas NEXT SECTION button in remove IHD
#And I should see RmveGas SEND MESSAGE IHD-PPMID section

Scenario: Going through RmveGas "SEND MESSAGE IHD / PPMID" section
#Given the RmveGas SEND MESSAGE IHD-PPMID section
When I click on RmveGas Send Message IHD-PPMID button
Then I should see RmveGas IHD-PPMID Awaiting Response button

Scenario: Waiting RmveGas "AWAITING RESPONSE"
Given the RmveGas IHD-PPMID Awaiting Response button
When I wait for the RmveGas button to disappear
Then I should see RmveGas PPMID Removal Successful button
And I should see RmveGas PPMID Removal Request Sent Successfully text message
And I should see RmveGas PPMID Asset Unjoined text message

Scenario: Confirming RmveGas "PPMID Removal Successful"
Given the RmveGas PPMID Removal Successful button is displayed
When I click on RmveGas PPMID Removal Successful button
Then I should see RmveGas CONFIRM IHD-PPMID ASSET REMOVAL section

Scenario: Going through RmveGas "CONFIRM IHD / PPMID ASSET REMOVAL" section
Given the RmveGas CONFIRM IHD-PPMID ASSET REMOVAL section
When I fill the RmveGas IHD-PPMID ASSET REMOVAL field22 with the value22
And I click on RmveGas OK button in IHD-PPMID ASSET REMOVAL Updated window with the text Asset successfully added to Returns list
Then I should see RmveGas REMOVE GAS METER section

Scenario: Going through RmveGas "REMOVE GAS METER" section
Given the RmveGas REMOVE GAS METER section
When I fill the RmveGas REMOVE GAS METER field23 with the value23
Then I click on RmveGas NEXT button in removing gas meter
And I should see RmveGas SEND MESSAGE GMREM section

Scenario: Going through RmveGas "SEND MESSAGE GMREM" section
Given the RmveGas SEND MESSAGE GMREM section
When I click on RmveGas Send Message GMREM button
Then I should see RmveGas Awaiting Response button in GMREM

Scenario: Waiting RmveGas "AWAITING RESPONSE"
Given the RmveGas Awaiting Response btn in Send GMREM
When I wait for the RmveGas btn to disappear in GMREM
Then I should see RmveGas Removal Successful button
And I should see RmveGas GMREM Request Sent Successfully txt message
And I should see RmveGas OK to Remove Asset text message

Scenario: Confirming RmveGas "Removal Successful"
Given the RmveGas Removal Successful button is displayed
When I click on RmveGas Removal Successful button
#Then I should see RmveGas CONFIRM GAS ASSET REMOVAL section

Scenario: Going through RmveGas "CONFIRM GAS ASSET REMOVAL" section
Given the RmveGas CONFIRM GAS ASSET REMOVAL section
When I fill the RmveGas CONFIRM GAS ASSET REMOVAL field24 with the value24
Then I click on RmveGas OK btn in Updated window with the text Asset successfully added to Returns list
And I should see RmveGas REMOVE COMMS HUB window

Scenario: Going through RmveGas "REMOVE COMMS HUB" section
Given the RmveGas REMOVE COMMS HUB section
When I fill the RmveGas REMOVE COMMS HUB field027 with the value27
Then I click on RmveGas NEXT SEC button from Remove Comms Hub
# Then I should see RmveGas SEND MSG XCHUB section

# Scenario: Continuing RmveGas "SEND MESSAGE XCHUB" section
# Given the RmveGas SEND MESSAGE XCHUB section
# When I click on RmveGas Send Message XCHUB button
# #Then I should see RmveGas XCHUB Awaiting Response butn

# #Scenario: Waiting RmveGas "AWAITING RESPONSE"
# #Given the RmveGas Awaiting Response butn XCHUB
# # When I wait for the RmveGas butn to disappear XCHUB
# # Then I should see RmveGas Removal Successful butn XCHUB
# #And I should see RmveGas Request Sent Successfully text msg XCHUB

Scenario: Going through RmveGas "CONFIRM COMMS HUB REMOVAL" section
Given the RmveGas CONFIRM COMMS HUB REMOVAL section
When I fill the RmveGas CONFIRM COMMS HUB REMOVAL field28 with the value28
And I click on RmveGas OK button CONFIRM COMMS HUB REMOVAL Updated window with the text Asset successfully added to Returns list in the final step
Then I click on RmveGas SUBMIT btn from confirm comms hub removal


Scenario: Going through RmveGas RmveSix "Summary of Job and receive Customer Signature" GAS section 
Given the RmveGas Summary of Job and receive Customer Signature section 
When I fill the RmveGas Summary of Job and receive Customer Signaturefields with values
Then I should see RmveGas Submit button to complete the job section



