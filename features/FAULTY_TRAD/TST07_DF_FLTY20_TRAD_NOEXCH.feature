Feature: DF FLTY20 Trad No Exchange Workflow

@TypeScriptScenario
Scenario Outline: Logging in to job's "Work Order" window
Given FltytwTadNoEx the Login Page
When FltytwTadNoEx I pass "<Username>" and "<Password>"
Then FltytwTadNoEx I click Login button
And FltytwTadNoEx I should see the Appointment List

Examples:
| Username    | Password    |
| Automation2 | Aut0m4t1on2 |

Scenario: Select the Latest workOrder
Given FltytwTadNoEx the Appointment List window
When FltytwTadNoEx I click on select button
Then FltytwTadNoEx I should see Work Order window

Scenario: Going through Call Forward
Given FltytwTadNoEx the "Work Order" window
When FltytwTadNoEx i see Call Forward or Arrive Button
Then FltytwTadNoEx I click on CALL FORWARD button
Then FltytwTadNoEx I should see page contect display
And FltytwTadNoEx I should see the CUSTOMER CONTACT NUMBER
And FltytwTadNoEx I should see Contact made field

Scenario: Selecting job and setting to depart
Given FltytwTadNoEx the "Work Order" page
When FltytwTadNoEx I fill the fields with the value
And FltytwTadNoEx I click on DEPART button
Then FltytwTadNoEx I should see Depart for Appointment window

Scenario: Approving "Depart for Appointment" job
Given FltytwTadNoEx Appointment details
When FltytwTadNoExD I click on OK button
Then FltytwTadNoEx I should see ARRIVE button
And FltytwTadNoEx I should see DOORSTEP PROTOCOL tab activated

Scenario: Set job to Arrived status
Given FltytwTadNoEx the "WorkOrder" page
When FltytwTadNoEx I click on ARRIVE button
Then FltytwTadNoEx I should see Arrival Time details
And FltytwTadNoEx I should see BE AWARE OF ANY DANGER! section

Scenario: Going through "BE AWARE OF ANY DANGER!" section
Given FltytwTadNoEx the BE AWARE OF ANY DANGER! section
When FltytwTadNoEx I fill the DoorStep Protocol fields with the value
And FltytwTadNoEx I click on ON SITE button
Then FltytwTadNoEx I should see RISK ASSESSMENT tab activated
And FltytwTadNoEx I should see INITIAL RISK ASSESSMENT section

Scenario: Going through "INITIAL RISK ASSESSMENT"
Given FltytwTadNoEx the INITIAL RISK ASSESSMENT section
When FltytwTadNoEx I fill the initialRisk field with the values
Then FltytwTadNoEx I should see RISK ASSESSMENT ELEC section

Scenario: Going through "RISK ASSESSMENT - ELEC" section
Given FltytwTadNoEx the RISK ASSESSMENT - ELEC section
When FltytwTadNoEx I fill the RISK ASSESSMENT - ELEC fields with the values
And FltytwTadNoEx I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
And FltytwTadNoEx RISK ASSESSMENT ELEC NEXT SECTION button
Then FltytwTadNoEx I should see the RISK ASSESSMENT - GAS section

Scenario: Going through "RISK ASSESSMENT - GAS"
Given FltytwTadNoEx the RISK ASSESSMENT - GAS section
When FltytwTadNoEx I fill the field05 with the value05
Then FltytwTadNoEx I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
And FltytwTadNoEx I fill the field06 with the value06
And FltytwTadNoExE I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec

Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
Given FltytwTadNoExE the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
When FltytwTadNoExE I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then FltytwTadNoExE the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
Given FltytwTadNoEx the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
When FltytwTadNoEx I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
Then FltytwTadNoEx I should see INITIAL POLARITY CHECK-MARTINDALE TEST section

Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
Given FltytwTadNoEx the INITIAL POLARITY CHECK MARTINDALE TEST section
When FltytwTadNoEx I fill the INITIAL POLARITY CHECK field with the values
Then FltytwTadNoEx I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
Then FltytwTadNoEx I fill the Socket Found field with the values
And FltytwTadNoEx I should see INITIAL POLARITY AT METER AND CUT OUT section

Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
Given FltytwTadNoEx the INITIAL POLARITY AT METER AND CUT OUT section
When FltytwTadNoEx I fill the METER AND CUT OUT fields with the values
And FltytwTadNoEx I click on SUBMIT button
Then FltytwTadNoEx I should see the CURRENT IHD-PPMID DETAILS section in remove tab

Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
Given FltytwTadNoEx the CURRENT IHD-PPMID DETAILS section
When FltytwTadNoEx I fill the field010 with the value010
And FltytwTadNoEx I should see CURRENT METER DETAILS - GAS section
Then FltytwTadNoEx current meter details page contect display

Scenario: Going through "CURRENT METER DETAILS - GAS" section
Given FltytwTadNoEx the CURRENT METER DETAILS - GAS section
When FltytwTadNoEx I fill the field with the value
Then FltytwTadNoEx I should see CURRENT Electric Meter

Scenario: Going through "CURRENT METER DETAILS - ELEC" section
Given FltytwTadNoEx the CURRENT Electric Meter
When FltytwTadNoEx I fill the field011 with the value Value011
Then FltytwTadNoEx I should see DETERMINE FAULT ACTIVITY section

Scenario: Going through "DETERMINE FAULT ACTIVITY" section
#Given FltytwTadNoEx the DETERMINE FAULT ACTIVITY section
When FltytwTadNoEx I fill the field14 with the value014
And FltytwTadNoEx I should see PRE INSTALLATION GAS TIGHTNESS TEST section

Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
Given FltytwTadNoEx the PRE INSTALLATION GAS TIGHTNESS TEST section
When FltytwTadNoEx I fill the field17 with the value17
Then FltytwTadNoEx I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
And FltytwTadNoEx I fill the field18 with the value18
And FltytwTadNoEx I see Gas Tightness Test Completed field as FAIL
And FltytwTadNoEx I fill the field19 with the value19

And I click on the Submit button in the Determine Faulty Activity Section
Then I should see the Perform Additional Electricity Tests & Checks section

Scenario: Going through "ADDITIONAL ELECTRICITY TESTS & CHECKS" section
Given FltytwTadNoEx the ADDITIONAL ELECTRICITY TESTS & CHECKS section
When FltytwTadNoEx I fill the field34 with the Value34
And FltytwTadNoEx I click on CAPTURE PHOTO OF TERMINAL SCREWS button
And FltytwTadNoEx I fill the field35 with the Value35
And FltytwTadNoEx I clk additional test on NEXT SECTION button
Then FltytwTadNoEx I should see POST INSTALLATION CHECKS section

Scenario: Going through "POST INSTALLATION CHECKS" section
Given FltytwTadNoEx the POST INSTALLATION CHECKS section
When FltytwTadNoEx I fill the FldName37 with the Value37
Then FltytwTadNoEx post installation page content display

Scenario: Going through "POST INSTALLATION CHECKS" section
Given FltytwTadNoEx the post installation page contect display
When FltytwTadNoEx I fill the FldName38 with the Value38
And FltytwTadNoEx I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button
And FltytwTadNoEx I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button
And FltytwTadNoEx I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button
Then FltytwTadNoEx I should see COMMISSIONING section

Scenario: Going through "COMMISSIONING" section
Given FltytwTadNoEx the COMMISSIONING section
When FltytwTadNoEx I fill the FldName39 with the Value39
And FltytwTadNoEx I click on ADD ANOTHER ASSET button
And FltytwTadNoEx I fill the FldName40 with the Value40
And FltytwTadNoEx I clk commisioning on NEXT button
#Then FltytwTadNoEx I should see NEW GAS METER DETAILS section
And FltytwTadNoEx I clk commisioning on NEXT button
Then FltytwTadNoEx I should see INSTALL KIT section


Scenario: Going through "Install Kit " GAS section
Given FltytwTadNoEx the Gas Install Kit gas section
When FltytwTadNoEx I fill the Gas Install Kit gas section fields with values
Then FltytwTadNoEx I should see Perform Post Installation GAS Checks sec
Then FltytwTadNoEx I should see Perform Post Installation GAS Checks sec

Scenario: Going through "Post Installation GAS" GAS section
Given FltytwTadNoEx the Post Installation GAS sec
When FltytwTadNoEx I fill the Post Installation GAS sec fields with values
Then FltytwTadNoExG I should see GAS APPLIANCE SAFETY CHECKS section

Scenario: Going through "Gas Appliance Safety Checks" GAS section
Given FltytwTadNoEx the Gas Appliance Safety Checks sec
When FltytwTadNoEx I fill the Gas Appliance Safety Checks section fields with values and Sub
When FltytwTadNoEx I click SUB button

Then FltytwTadNoEx I should see Device Binding section

Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
Given FltytwTadNoEx the ENERGY EFFICIENCY INFORMATION section
When FltytwTadNoEx I fill the fields54 and click next

Scenario: Going through RmveSix "Summary of Job and receive Customer Signature" GAS section 
Given the FltytwTadNoEx Summary of Job and receive Customer Signature section 
When I fill the FltytwTadNoEx Summary of Job and receive Customer Signaturefields with values
Then I should see FltytwTadNoEx Submit button to complete the job section