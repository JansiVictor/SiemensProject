# Feature: Login into Siemen Application

#     Scenario Outline: Logging in to job's "Work Order" window
#         Given TST13 the Login Page
#         When TST13 I pass "<Username>" and "<Password>"
#         Then TST13 I click Login button
#         And TST13 I should see the Appointment List

#         Examples:
#             | Username    | Password    |
#             | Automation2 | Aut0m4t1on2 |

#     Scenario: Select the Latest workOrder
#         Given TST13 the Appointment List window
#         When TST13 I click on select button
#         Then TST13 I should see Work Order window

#     Scenario: Going through Call Forward
#         Given TST13 the "Work Order" window
#         When TST13 i see Call Forward or Arrive Button
#         Then TST13 I click on CALL FORWARD button
#         Then TST13 I should see page contect display
#         And TST13 I should see the CUSTOMER CONTACT NUMBER
#         And TST13 I should see Contact made field

#     Scenario: Selecting job and setting to depart
#         Given TST13 the "Work Order" page
#         When TST13 I fill the fields with the value
#         And TST13 I click on DEPART button
#         Then TST13 I should see Depart for Appointment window

#     Scenario: Approving "Depart for Appointment" job
#         Given TST13 Appointment details
#         When TST13D I click on OK button
#         Then TST13 I should see ARRIVE button
#         And TST13 I should see DOORSTEP PROTOCOL tab activated

#     Scenario: Set job to Arrived status
#         Given TST13 the "WorkOrder" page
#         When TST13 I click on ARRIVE button
#         Then TST13 I should see Arrival Time details
#         And TST13 I should see BE AWARE OF ANY DANGER! section

#     Scenario: Going through "BE AWARE OF ANY DANGER!" section
#         Given TST13 the BE AWARE OF ANY DANGER! section
#         When TST13 I fill the DoorStep Protocol fields with the value
#         And TST13 I click on ON SITE button
#         Then TST13 I should see RISK ASSESSMENT tab activated
#         And TST13 I should see INITIAL RISK ASSESSMENT section

#     Scenario: Going through "INITIAL RISK ASSESSMENT"
#         Given the INITIAL RISK ASSESSMENT section
#         When TST13 I fill the initialRisk field with the values
#         Then TST13 I should see RISK ASSESSMENT ELEC section

#     Scenario: Going through "RISK ASSESSMENT - ELEC" section
#         Given TST13 the RISK ASSESSMENT - ELEC section
#         When TST13 I fill the RISK ASSESSMENT - ELEC fields with the values
#         And TST13 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
#         And TST13 RISK ASSESSMENT ELEC NEXT SECTION button
#         Then TST13 I should see the RISK ASSESSMENT - GAS section

#     Scenario: Going through "RISK ASSESSMENT - GAS"
#         Given TST13 the RISK ASSESSMENT - GAS section
#         When TST13 I fill the field05 with the value05
#         Then TST13 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
#         And TST13 I fill the field06 with the value06
#         And TST13E I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec

#     Scenario: Going through "CAPTURE INITIAL PHOTO OF ELEC INSTALLATION"
#         Given TST13E the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec
#         When TST13E I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
#         Then TST13E the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section

#     Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section
#         Given TST13 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
#         When TST13 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
#         Then TST13 I should see INITIAL POLARITY CHECK-MARTINDALE TEST section

#     Scenario: Going through "INITIAL POLARITY CHECK MARTINDALE TEST" section
#         Given TST13 the INITIAL POLARITY CHECK MARTINDALE TEST section
#         When TST13 I fill the INITIAL POLARITY CHECK field with the values
#         Then TST13 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
#         Then TST13 I fill the Socket Found field with the values
#         And TST13 I should see INITIAL POLARITY AT METER AND CUT OUT section

#     Scenario: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section
#         Given TST13 the INITIAL POLARITY AT METER AND CUT OUT section
#         When TST13 I fill the METER AND CUT OUT fields with the values
#         And TST13 I click on SUBMIT button
#         Then TST13 I should see the CURRENT IHD-PPMID DETAILS section in remove tab

#     Scenario: Going through "CURRENT IHD/PPMID DETAILS" section
#         Given TST13 the CURRENT IHD-PPMID DETAILS section
#         When TST13 I fill the field010 with the value010
#         And TST13 I should see CURRENT METER DETAILS - GAS section
#         Then TST13 current meter details page contect display

#     Scenario: Going through "CURRENT METER DETAILS - GAS" section
#         Given TST13 the CURRENT METER DETAILS - GAS section
#         When TST13 I fill the field with the value
#         Then TST13 I should see CURRENT Electric Meter

#     Scenario: Going through "CURRENT METER DETAILS - ELEC" section
#         Given TST13 the CURRENT Electric Meter
#         When TST13 I fill the field011 with the value Value011
#         Then TST13 I should see DETERMINE FAULT ACTIVITY section

#     Scenario: Going through "DETERMINE FAULT ACTIVITY" section
#         Given TST13 the DETERMINE FAULT ACTIVITY section
#         When TST13 I fill the field14 with the value014
#         Then TST13 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button
#         And TST13 I fill the field15 with the value15
#         And TST13 I select Elec Meter field
#         And TST13 I select Gas Meter field
#         And TST13 I select Regulator field
#         And TST13 fill the filelds45 and values
#         And TST13 I click on NEXT SECT button
#         And TST13 I should see PRE INSTALLATION GAS TIGHTNESS TEST section

#     Scenario: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section
#         Given TST13 the PRE INSTALLATION GAS TIGHTNESS TEST section
#         When TST13 I fill the field17 with the value17
#         Then TST13 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
#         And TST13 I fill the field18 with the value18
#         And TST13 I see Gas Tightness Test Completed field as FAIL
#         And TST13 I fill the field19 with the value19
#         And TST13 I should see REMOVE GAS METER section

#     Scenario: Going through "REMOVE GAS METER" section
#         Given TST13 the REMOVE GAS METER section
#         When TST13 I fill the field23 with the value23
#         Then TST13 I click on NEXT button in removing gas meter
#         Then TST13 I should see CONFIRM GAS ASSET REMOVAL section

#     Scenario: Going through "CONFIRM GAS ASSET REMOVAL" section
#         Given TST13 the CONFIRM GAS ASSET REMOVAL section
#         When TST13 I fill the field24 with the value24
#         Then TST13 I click OK btn in Updated window with the text Asset successfully added to Returns list
#         And TST13G I should see REMOVE COMMS HUB window

#     Scenario: Going through "REMOVE METER" section
#         Given TST13 the REMOVE METER section
#         When TST13 I fill the field023 with the Value023
#         And TST13 I clk remove meter NEXT SECTION button
#         Then TST13 I should see CONFIRM ELECTRIC ASSET REMOVAL section

#     Scenario: Going through "CONFIRM ELEC ASSET REMOVAL" section
#         Given TST13 the CONFIRM ELEC ASSET REMOVAL section
#         When TST13 I fill the field024 with the Value024
#         Then TST13 Click ok on asset removal
#         Then TST13 Sub to Install page
#         Then TST13 I should see NEW METER DETAILS section

#     Scenario: Continuing "NEW METER DETAILS" section
#         Given TST13 the NEW METER DETAILS section
#         When TST13 I fill the fields and values for New meter details
#         Then TST13 I should see NEW Meter section

#     Scenario: Continuing "NEW METER DETAILS" section
#         Given TST13 the Manufacturer Letter radio button
#         When TST13 I fill the field33 with the Value33
#         And TST13 manufacturer NEXT SECTION button
#         Then TST13 I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section

#     Scenario: Going through "ADDITIONAL ELECTRICITY TESTS & CHECKS" section
#         Given TST13 the ADDITIONAL ELECTRICITY TESTS & CHECKS section
#         When TST13 I fill the field34 with the Value34
#         And TST13 I click on CAPTURE PHOTO OF TERMINAL SCREWS button
#         And TST13 I fill the field35 with the Value35
#         And TST13 I clk additional test on NEXT SECTION button
#         Then TST13 I should see ELEC INITIAL METER READING section

#     Scenario: Going through "ELEC INITIAL METER READING" section
#         Given TST13 the ELEC INITIAL METER READING section
#         When TST13 I fill the FldName36 with the Value36
#         Then TST13 I should see POST INSTALLATION CHECKS section

#     Scenario: Going through "POST INSTALLATION CHECKS" section
#         Given TST13 the POST INSTALLATION CHECKS section
#         When TST13 I fill the FldName37 with the Value37
#         Then TST13 post installation page content display

#     Scenario: Going through "POST INSTALLATION CHECKS" section
#         Given TST13 the post installation page contect display
#         When TST13 I fill the FldName38 with the Value38
#         And TST13 I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button
#         And TST13 I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button
#         And TST13 I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button
#         Then TST13 I should see COMMISSIONING section

#     Scenario: Going through "COMMISSIONING" section
#         Given TST13 the COMMISSIONING section
#         When TST13 I fill the FldName39 with the Value39
#         And TST13 I click on ADD ANOTHER ASSET button
#         And TST13 I fill the FldName40 with the Value40
#         And TST13 I clk commisioning on NEXT button
#         Then TST13 I should see NEW GAS METER DETAILS section

#     Scenario: Going through "NEW GAS METER DETAILS" section
#         Given TST13 the NEW GAS METER DETAILS section
#         When TST13 I fill the fields and values for New gas meter details
#         Then TST13 I should see NEW REGULATOR section

#     Scenario: Going through "NEW REGULATOR" section
#         Given TST13 the NEW REGULATOR section
#         When TST13 I fill the fields and values for new regulator section
#         Then TST13 I should see GAS INITIAL METER READING section

#     Scenario: Going through "GAS INITIAL METER READING" section
#         Given TST13 the GAS INITIAL METER READING section
#         When TST13 I fill the fields with values Gas initial meter reading
#         Then TST13 I should see INSTALL KIT section

#     Scenario: Going through "Install Kit " GAS section
#         Given TST13 the Gas Install Kit gas section
#         When TST13 I fill the Gas Install Kit gas section fields with values
#         Then TST13 I should see Perform Post Installation GAS Checks sec

#     Scenario: Going through "Post Installation GAS" GAS section
#         Given TST13 the Post Installation GAS sec
#         When TST13 I fill the Post Installation GAS sec fields with values
#         Then TST13G I should see GAS APPLIANCE SAFETY CHECKS section

#     Scenario: Going through "Gas Appliance Safety Checks" GAS section
#         Given TST13 the Gas Appliance Safety Checks sec
#         When TST13 I fill the Gas Appliance Safety Checks section fields with values and Sub
#         When TST13 I click SUB button
#         Then TST13 I should see ENERGY EFFICIENCY INFORMATION section

#     Scenario: Going through "ENERGY EFFICIENCY INFORMATION" section
#         Given TST13 the ENERGY EFFICIENCY INFORMATION section
#         When TST13 I fill the fields54 and click next
#         Then TST13 I should see SMART EDUCATION section

#     Scenario: Going through "SMART EDUCATION" section
#         Given TST13 the SMART EDUCATION section
#         When TST13 I fill the fields55 and click next
#         Then TST13 I should see SUMMARY section

#     Scenario: Going through "SMART LITERATURE LEFT ON SITE" section
#         Given TST13 the SUMMARY section
#         When TST13 I fill the fields56 and click next
#         Then TST13 See CAPTURE CUSTOMER SIGNATURE sec

#     Scenario: Going through "CAPTURE CUSTOMER SIGNATURE" section
#         Given TST13 the CAPTURE CUSTOMER SIGNATURE section
#         When TST13 I write signature in Customer Signature
#         And TST13 I fill the field57 and Job Complete
#         Then TST13 see Job Completed screen