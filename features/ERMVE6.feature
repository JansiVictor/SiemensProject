Feature: ERMVE6 Work Flow

Scenario Outline: Logging in to job's "Work Order" window
Given the RmveSix Login Page
When I pass RmveSix "<Username>" and "<Password>"
Then I click RmveSix Login button
And I should see the RmveSix Appointment List 

Examples:
| Username 		| Password      |
|  Automation2  |  Aut0m4t1on2  |

Scenario: Select the Latest RmveSix workOrder
Given the RmveSix Appointment List window
When I click on RmveSix select button
Then I should see RmveSix Work Order window

Scenario: Going through RmveSix Call Forward
Given the RmveSix "Work Order" window
When i see RmveSix Call Forward or Arrive Button
Then I click on RmveSix CALL FORWARD button
Then I should see RmveSix page contect display
#And I should see the RmveSix CUSTOMER CONTACT NUMBER
And I should see RmveSix Contact made field

Scenario: Selecting RmveSix job and setting to depart
Given the RmveSix "Work Order" page
When I fill the RmveSix fields with the value
And I click on RmveSix DEPART button 
Then I should see RmveSix  for Appointment window
And I should see the RmveSix correct MPAN details
And I should see the RmveSix correct Customer Name details
And I should see the RmveSix correct PostCode details

Scenario: Approving RmveSix "Depart for Appointment" job
And "Appointment" RmveSix details
When I click on RmveSix OK button  	
And I should see RmveSix ARRIVE button
And I should see RmveSix DOORSTEP PROTOCOL tab activated

Scenario: Set RmveSix job to Arrived status
//Given the RmveSix "WorkOrder" page
When I click on RmveSix ARRIVE button  	
Then I should see RmveSix Arrival Time details
And I should seeRmveSix  BE AWARE OF ANY DANGER! section

Scenario: Going through RmveSix "BE AWARE OF ANY DANGER!" section
Given the RmveSix BE AWARE OF ANY DANGER! section 
When I fill the RmveSix DoorStep Protocol fields with the value
And I click on RmveSix ON SITE button 	
Then I should see RmveSix RISK ASSESSMENT tab activated
And I should see RmveSix Initial Risk Assessment for GAS section

Scenario: Going through RmveSix "INITIAL RISK ASSESSMENT"
Given the RmveSix INITIAL RISK ASSESSMENT section
When I fill the RmveSix initialRisk field with the values
#Then I should see the RmveSix RISK ASSESSMENT - GAS section

Scenario: Going through RmveSix "INFO" window   
Given the RmveSix INFO window with the text
#When I click on RmveSix OK button 
Then I should see RmveSix RISK ASSESSMENT ELEC section 

Scenario: Going through RmveSix "RISK ASSESSMENT - ELEC" section	
Given the RmveSix RISK ASSESSMENT - ELEC section
When I fill the RmveSix RISK ASSESSMENT - ELEC fields with the values
And I click on RmveSix CAPTURE PHOTO OF HAZARD IDENTIFIED button
And I click on RmveSix NEXT SECTION button
Then I should see RmveSix CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section 

Scenario: Going through RmveSix "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
Given the RmveSix CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section
When I click on RmveSix CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then I should see RmveSix INITIAL POLARITY CHECK - MARTINDALE TEST section 

Scenario: Going through RmveSix "INITIAL POLARITY CHECK MARTINDALE TEST" section   	
Given the RmveSix INITIAL POLARITY CHECK MARTINDALE TEST section  
When I fill the RmveSix INITIAL POLARITY CHECK field with the values
And I click on RmveSix CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
And I fill the RmveSix Socket Found field with the values
Then I should see RmveSix INITIAL POLARITY CHECK AT METER AND CUT OUT section  

Scenario: Going through RmveSix "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
Given the RmveSix INITIAL POLARITY CHECK - AT METER AND CUT OUT section  
When I fill the RmveSix METER AND CUT OUT fields with the values
And I click on RmveSix SUBMIT button
#And I should see RmveSix fltynineteen REMOVE IHDPPMID section 

Scenario: Going through RmveSix "CURRENT IHD/PPMID DETAILS" section
Given the RmveSix CURRENT IHD-PPMID DETAILS section
When I fill the RmveSix fields with the values
And I should see RmveSix CURRENT METER DETAILS
#Then I should see the RmveSix page contect display of current meter details

Scenario: Going through RmveSix "CURRENT METER DETAILS
Given the RmveSix CURRENT METER DETAILS
When I fill the RmveSix CURRENT METER DETAILS field with the value
Then I should see RmveSix CURRENT COMMS HUB DETAILS section
#And I should see the RmveSix CURRENT COMMS HUB DETAILS contect display

Scenario: Going through RmveSix "CURRENT COMMS HUB DETAILS" section
#Given the RmveSix CURRENT COMMS HUB DETAILS section
When I fill the RmveSix CURRENT COMMS HUB fields with the values
Then I click on RmveSix CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button
#And I should see RmveSix DETERMINE FAULT ACTIVITY section

Scenario: Going through RmveSix "REMOVE IHD/PPMID" section
#Given the RmveSix REMOVE IHD-PPMID section
When I fill the RmveSix IHD-PPMID fields with the values
Then I click on RmveSix OK button in Info window with the text Ensure IHD is Powered On
Then I fill the RmveSix IHD fields with the values
Then I click on RmveSix NEXT SECTION button in remove IHD
#And I should see RmveSix SEND MESSAGE IHD-PPMID section


Scenario: Going through RmveSix "SEND MESSAGE IHD / PPMID" section
Given the RmveSix SEND MESSAGE IHD-PPMID section 
When I click on RmveSix Send Message IHD PPMID button 
Then I should see RmveSix Awaiting Response button

Scenario: Waiting RmveSix "AWAITING RESPONSE"
Given the RmveSix Awaiting Response button 
When I wait for RmveSix the butn to disappear 
Then I should see RmveSix PPMID Removal Successful button 
And I should see RmveSix Request Sent Successfully text message 
And I should see RmveSix Asset Unjoined text message 


Scenario: Confirming RmveSix "PPMID Removal Successful"
Given the RmveSix PPMID Removal Successful button is displayed 
When I click on RmveSix PPMID Removal Successful button 
Then I should see RmveSix CONFIRM IHD PPMID ASSET REMOVAL section 

Scenario: Going through RmveSix "CONFIRM IHD-PPMID ASSET REMOVAL" section
Given the RmveSix CONFIRM IHD-PPMID ASSET REMOVAL section 
When I fill the RmveSix field22 with the Value22 
Then I clk RmveSix OK button in Updated window with the text Asset successfully added to Returns list 
And I should see RmveSix REMOVE METER section


Scenario: Going through RmveSix "REMOVE METER" section
Given the RmveSix REMOVE METER section 
When I fill the RmveSix field023 with the Value023 
#And I clk RmveSix remove meter NEXT SECTION button 
Then I should see RmveSix SEND MESSAGE EMREM section 


Scenario: Going through RmveSix "SEND MESSAGE EMREM" section
Given the RmveSix SEND MESSAGE EMREM section 
When I click on RmveSix Send Message EMREM button 
#Then I should see RmveSix Awaiting Response button 


Scenario: Waiting RmveSix "AWAITING RESPONSE"
Given the RmveSix Awaiting Response button 
When I wait for RmveSix the butn to disappear 
Then I should see RmveSix Removal Successful button 
And I should see RmveSix Request Sent Successfully text message 
And I should see RmveSix OK to Remove Asset text message 


Scenario: Confirming RmveSix "Removal Successful"
Given the RmveSix Removal Successful button is displayed 
When I click on RmveSix Removal Successful button 
Then I should see RmveSix CONFIRM ELECTRIC ASSET REMOVAL section 


Scenario: Going through RmveSix "CONFIRM ELECTRIC ASSET REMOVAL" section
Given the RmveSix CONFIRM ELEC ASSET REMOVAL section 
When I fill the RmveSix field024 with the Value024 
And Click ok on RmveSix asset removal 
Then I should see RmveSix REMOVE COMMS HUB window 


Scenario: Going through RmveSix "REMOVE COMMS HUB" section
Given the RmveSix REMOVE COMMS HUB section 
When I fill the RmveSix field027 with the Value027 
And I click on RmveSix NEXT SEC button from Remove Comms Hub 
Then I should see RmveSix CONFIRM COMMS HUB REMOVAL section 

Scenario: Going through RmveSix "CONFIRM COMMS HUB REMOVAL" section
Given the RmveSix CONFIRM COMMS HUB REMOVAL section 
When I fill the RmveSix field028 with the Value028 
And I click OK RmveSix button in Updated window with the text Asset successfully added to Returns list in the final step 
And I clk RmveSix SUBMIT
Then I should see RmveSix JobCompletion Summary


Scenario: Going through RmveSix "Summary of Job and receive Customer Signature" GAS section 
Given the RmveSix Summary of Job and receive Customer Signature section 
When I fill the RmveSix Summary of Job and receive Customer Signaturefields with values
Then I should see RmveSix Submit button to complete the job section