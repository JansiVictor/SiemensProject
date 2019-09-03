# 	Feature: Running SF G FLTY18 SMETS2 - SMETS2 job
#   	 As a as field engineer 
#   	 I want to run a DF FLTY20 SMETS2 - SMETS2 end to end job 
#   	 So that I would be able to verify the correct behaviour
  
# 	Scenario: Login to Feedhenry
#   	Given the login page with feedhenry URL
#   	When I fill <Username> with following credentials of <Password>
#     And I should see the page contect display
#     Then I should see the Appointment List page displayed

# 	# -------------------------------------------------------------------------- 

#  	Scenario: Logging in to job's "Work Order" window
#   	 Given the "Appointment List" window
#   	 And the correct "Appointment Job" 
#   	 When I click on select button
#    	 Then I should see Work Order window
#   	 And I should see JOB DETAILS tab activated
# 	 And I should see the Job Details

# 	# -----------------------------------------------------------------------  

#  	Scenario: Going through Call Forward
#   	 Given the "Work Order" window
#   	 And the correct "Job ID" in URL path
#   	 When I click on CALL FORWARD button
#   	 Then I should see page contect display
#   	 And I should see the CUSTOMER CONTACT NUMBER
#   	 And I should see Contact made field  	

# 	# -----------------------------------------------------------------------   

# 	Scenario Outline: Selecting job and setting to depart
#   	 Given the "Work Order" page
#   	 When I fill the field001 <FldName_001> with the value of <Value_001>  
#   	 And I click on DEPART button 
#   	 Then I should see Depart for Appointment window

#   	Examples:	
#   	  | FldName_001								| Value_001								|
#   	  | Contact made?							| YES   								|
#   	  | Appointment Confirm?  					| YES   								|
#   	  | Additional Access Details 				| Additional access details comment 123	|  	

# 	# -----------------------------------------------------------------------  

#  	Scenario: Approving "Depart for Appointment" job
#   	 Given the "Depart for Appointment?" window
#   	 And "Appointment" details
#   	 When I click on OK button  	
#   	 Then I should see WorkOrder page
#   	 And I should see Job ID in URL path
#   	 And I should see ARRIVE button
#   	 And I should see DOORSTEP PROTOCOL tab activated

# 	# -----------------------------------------------------------------------          
 
#  	Scenario: Set job to Arrived status
#   	 Given the "WorkOrder" page
#   	 When I click on ARRIVE button  	
#   	 Then I should see Arrival Time details
#   	 And I should see BE AWARE OF ANY DANGER section

# 	# -----------------------------------------------------------------------  
 
#  	Scenario Outline: Going through "BE AWARE OF ANY DANGER!" section
#   	 Given the "BE AWARE OF ANY DANGER!" section 
#   	 When I fill the field002 <FldName_002> with the value of <Value_002>
#   	 And I click on ON SITE button 	
#   	 Then I should see ELECTRICITY METER tab activated
#   	 And I should see INITIAL RISK ASSESSMENT section
#   	 And I should see MPAN details
  	
#   	Examples:
#   	  | FldName_002								| Value_002				|
#   	  | Capture any new Risks Identified		| C99: Dangerous Dog 	|
#   	  | Access to Site Gained?  				| YES   				|
#   	  | Customer On Site? 						| YES					| 

# 	# ----------------------------------------------------------------------- 
 
#  	Scenario Outline: Going through "INITIAL RISK ASSESSMENT"
#   	 Given the "INITIAL RISK ASSESSMENT" section
#   	 When I fill the field003 <FldName_003> with the value of <Value_003>
#   	 And I click on OK button in INFO window with the text Please be aware SMETS2 Assets must be unbound in the following sequence to ensure the correct unbinding of Assets: IHD, Gas Meter, Elec Meter, Comms Hub
#   	 And I fill the field004 <FldName_070> with the value of <Value_070>
#   	 Then I should see RISK ASSESSMENT - ELEC window
  
#  	Examples:	
#  	  | FldName_003								| Value_003				| FldName_070												    | Value_070				|
#   	  | Can you smell Gas?						| YES					| Do you need to work on the existing electricity installation? | YES					|
#   	  | Turned Off Gas?		  					| YES   				| 																|						|
#   	  | Called EGP? 							| YES					| 																|						|
#   	  | EGP Ref Number:							| 11111					| 																|						|
#   	  | Reported Incident to H&S (AIRline)?		| YES					|																|						|
#   	  | AIRline Reference Number:				| 22222					|																|						|
#   	  | OK to proceed (following EGP Outcome)?	| YES					| 																|						|

# 	# ----------------------------------------------------------------------- 

#  	Scenario Outline: Going through "RISK ASSESSMENT - ELEC" section
#   	 Given the "RISK ASSESSMENT - ELEC" section
#      When I fill the field004 <FldName_004> with the value of <Value_004>
#   	 And I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button
#   	 And I click on NEXT SECTION button
#  	 Then I should see RISK ASSESSMENT - GAS section 
 
#   	Examples:
#       | FldName_004													| Value_004								|
#   	  | Perform Risk Assessment?										| YES				 					|
#   	  | Risk Reason Code:												| C99: Dangerous Dog 					|
#   	  | Risk Assessment Pass?											| YES				 					|
#   	  | Optional Additional Notes/Remarks for Risk Assessment Pass	| Risk assessmentns notes				|

# 	# -----------------------------------------------------------------------  
 
#  	Scenario Outline: Going through "RISK ASSESSMENT - GAS"
#   	 Given the "RISK ASSESSMENT - GAS" section
#   	 When I fill the field005 <FldName_005> with the value of <Value_005>
# 	 And I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
# 	 And I fill the field006 <FldName_006> with the value of <Value_006>
#   	 And I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
#   	 Then I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section
  	
#   	Examples:
#       | FldName_005									| Value_005	| FldName_006										| Value_006		|
#   	  | Capture Meter Pressure?						| LOW		| Additional Notes / Remarks - Gas Risk Assessment	| Risk notes	|
#   	  | Volt Stick Check		  					| PASS   	| Safe to Continue?		  							| YES   		|
#   	  | Check for Signs of Tampering / Theft of Gas	| PASS		| 													|				|
#   	  | ECV Checks									| PASS		| 													|				|
#   	  | Work Area Safety Check						| PASS		| 													|				|
  	
# 	# -----------------------------------------------------------------------    

#  	Scenario: Going through "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section   
#    	 Given the "CAPTURE INITIAL PHOTO OF GAS INSTALLATION" section      
#    	 When I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button
#    	 Then I should see INITIAL POLARITY CHECK - MARTINDALE TEST section  

# 	# -----------------------------------------------------------------------    
 
#  	Scenario Outline: Going through "INITIAL POLARITY CHECK - MARTINDALE TEST" section   	
#   	 Given the "INITIAL POLARITY CHECK - MARTINDALE TEST" section  
#   	 When I fill the field007 <FldName_007> with the value of <Value_007>
# 	 And I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button
# 	 And I fill the field008 <FldName_008> with the value of <Value_008>
#   	 Then I should see INITIAL POLARITY CHECK - AT METER AND CUT OUT section   

#  	Examples:	
#  	  | FldName_007											| Value_007									| FldName_008							 | Value_008	|
# 	  | Carry Out Polarity Check with Plug In Test Device:	| Polarity tested with plug in test device 	| Any Sockets Found as Reverse Polarity? | NO			|
# 	  | Has the Socket Safety Test - Passed/Failed?			| PASS									 	|										 |				|
#   	  | Socket Test Location:								| Bedroom 5								 	|										 |				|

# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section     	
#    	 Given the "INITIAL POLARITY CHECK - AT METER AND CUT OUT" section  
#    	 When I fill the field009 <FldName_009> with the value of <Value_009>
#    	 And I click on SUBMIT button
#    	 Then I should see CURRENT IHD/PPMID DETAILS section
#    	 And I should see the REMOVE tab activated
   	
#  	Examples:	
#  	  | FldName_009											| Value_009		|
#  	  | Polarity Check at Cut Out?							| PASS			|
#    	  | Polarity Check at Meter?							| PASS			|
 	
# 	# ----------------------------------------------------------------------- 
 
#  	Scenario Outline: Going through "CURRENT IHD/PPMID DETAILS" section     	
#    	 Given the "CURRENT IHD/PPMID DETAILS" section  
#      When I fill the field010 <FldName_010> with the value of <Value_010>
#      Then I should see CURRENT METER DETAILS - GAS section
#    	 And I should see the page contect display

#  	Examples:	
#  	  | FldName_010											| Value_010				  |
#   	  | SMETS2 IHD / PPMID on site?							| YES					  |
#    	  | IHD / PPMID Serial No:								| 00-0F-01-FF-FF-E4-85-D4 |
#    	  | Existing IHD / PPMID Details Correct?				| YES					  |

# 	# -----------------------------------------------------------------------  
 
#  	Scenario Outline: Going through "CURRENT METER DETAILS - GAS" section     	
#    	 Given the "CURRENT METER DETAILS - GAS" section  
#    	 When I fill the field011 <FldName_011> with the value of <Value_011>
#    	 Then I should see CURRENT COMMS HUB DETAILS section
#    	 And I should see the page contect display

#  	Examples:	
#  	  | FldName_011											| Value_011				  |
#   	  | Existing Gas Meter Details Correct:					| YES					  |
#       | Capture Meter Reading:								| 12345					  |

# 	# -----------------------------------------------------------------------  
 
#  	Scenario Outline: Going through "CURRENT COMMS HUB DETAILS" section     	
#    	 Given the "CURRENT COMMS HUB DETAILS" section  
#    	 When I fill the field013 <FldName_013> with the value of <Value_013>
# 	 And I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button   
#      Then I should see DETERMINE FAULT ACTIVITY section 

#  	Examples:	
#  	  | FldName_013											| Value_013				  |
#   	  | Comms Hub Location Code:							| A : Outside Premises	  |
#       | Aerial Installed?									| YES					  |
# 	  | Existing Comms Hub Details Correct?					| YES					  |

# 	# ----------------------------------------------------------------------- 
 
#  	Scenario Outline: Going through "DETERMINE FAULT ACTIVITY" section     	  
#    	 Given the "DETERMINE FAULT ACTIVITY" section  
#      When I fill the field014 <FldName_014> with the value of <Value_014>
# 	 And I click on CAPTURE PHOTOGRAPHIC EVIDENCE - SUSPECTED TAMPERING button   
# 	 And I fill the field015 <FldName_015> with the value of <Value_015>
#      And I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting
#      And I fill the field016 <FldName_016> with the value of <Value_016>    
#      And I select Comms Hub field
#      And I select Gas Meter field
#      And I select Regulator field
#      And I select IHD / PPMID field   
#      And I click on NEXT SECTION button
#      Then I should see PRE INSTALLATION GAS TIGHTNESS TEST section 

#  	Examples:	
#  	  | FldName_014									  	| Value_014	| FldName_015					| Value_015	| FldName_016										| Value_016	|
#   	  | Confirm if Gas meter is On Supply or Off Supply	| On Supply	| Are SMETS2 assets installed? 	| YES	  	| Comms Hub Connected to Supply?					| YES	  	|
#       | 												| 		  	| Does Comms Hub need resetting?| YES	  	| Comms Hub Connected to WAN?						| YES	  	|
# 	  | 												| 		  	| 								| 			| Do you need to exchange an asset?					| YES	  	|			
	
# 	# ----------------------------------------------------------------------- 
 
#  	Scenario Outline: Going through "PRE INSTALLATION GAS TIGHTNESS TEST" section  
#      Given the "PRE INSTALLATION GAS TIGHTNESS TEST" section   
#      When I fill the field017 <FldName_017> with the value of <Value_017>
# 	 And I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button
# 	 And I fill the field018 <FldName_018> with the value of <Value_018>
# 	 And I see Gas Tightness Test Completed field as FAIL
# 	 And I fill the field019 <FldName_019> with the value of <Value_019>
#   	 Then I should see REMOVE IHD/PPMID section 
#   	 And I should see the page contect display

#  	Examples:	
#  	  | FldName_017									  		| Value_017	| FldName_018					 | Value_018 		| FldName_019											| Value_019			|
# 	  | Pre Installation - Gas Tightness Test carried Out?	| YES	  	| Was there a drop in pressure?	 | YES	  	 		| Additional Notes / Remarks - Gas Tightness Test Fail	| Gas Tested		|								
# 	  |  												  	| 		  	| Enter DIP Gas Pressure (mbars):| 1.0	  	 		| Gas Tightness Test Failure-Outcome?					| GT ISSUE 			|
# 	  |  													| 		  	| Select Meter Type:			 | G4 - 0.5-4m bars | Reported Incident to GT?								| YES				|
# 	  |  													| 		  	| Can you or Customer Smell Gas? | YES	  			| National Grid(GT) Job Ref.:							| 1					|
# 	  |  													| 		  	|								 |					| Reported Incident to H&S(AIRline?)?					| YES				|
# 	  |  													| 		  	|								 |					| AIRline Ref. No.										| 2				 	|
# 	  |  													| 		  	|								 |					| Need to wait for the GT Attendance on Site?			| YES	  			|
# 	  |  													| 		  	|								 |					| GT Resolve Issue?										| YES	  			|
	
# 	# -----------------------------------------------------------------------    
 
#  	Scenario Outline: Going through "REMOVE IHD/PPMID" section  
#      Given the "REMOVE IHD/PPMID" section      
#    	 When I fill the field020 <FldName_020> with the value of <Value_020>
#   	 And I click on OK button in Info window with the text Ensure IHD is Powered On
#   	 And I fill the field021 <FldName_021> with the value of <Value_021>
#    	 And I click on NEXT SECTION button
#    	 Then I should see SEND MESSAGE IHD / PPMID section

#  	Examples:	
#  	  | FldName_020									  	| Value_020	| FldName_021					 | Value_021 		| 
# 	  | Is the Asset to be Removed/Replaced?			| YES	  	| Status of Asset				 | No Fault Found	| 							

# 	# -----------------------------------------------------------------------    

#  	Scenario: Going through "SEND MESSAGE IHD / PPMID" section
#   	 Given the "SEND MESSAGE IHD / PPMID" section
#   	 When I click on Send Message IHD / PPMID button
#   	 Then I should see Awaiting Response button    	
  	
# 	# -----------------------------------------------------------------------  

#  	Scenario: Waiting "AWAITING RESPONSE"   
#      Given the "Awaiting Response" button
#      When I wait for the button to disappear
#      Then I should see PPMID Removal Successful button
#      And I should see Request Sent Successfully text message  
#      And I should see Asset Unjoined text message

# 	# -----------------------------------------------------------------------  

#  	Scenario: Confirming "PPMID Removal Successful"   
#      Given the "PPMID Removal Successful" button is displayed
#      When I click on PPMID Removal Successful button
#      Then I should see CONFIRM IHD / PPMID ASSET REMOVAL section

# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "CONFIRM IHD / PPMID ASSET REMOVAL" section 
#      Given the "CONFIRM IHD / PPMID ASSET REMOVAL" section   
#    	 When I fill the field022 <FldName_022> with the value of <Value_022>
#   	 And I click on OK button in Updated window with the text Asset successfully added to Returns list 
#    	 Then I should see REMOVE GAS METER section   
#    	 And I should see the page contect display
   		
#   	Examples:	
#  	  | FldName_022									  	| Value_022			|
#  	  | Removed Asset Status							| Off Circuit		|
#  	  | Confirm Asset Removed?							| Yes				|
 	
# 	# -----------------------------------------------------------------------     

#  	Scenario Outline: Going through "REMOVE GAS METER" section  
#      Given the "REMOVE GAS METER" section      
#    	 When I fill the field023 <FldName_023> with the value of <Value_023>
#    	 And I click on NEXT SECTION button
#    	 Then I should see SEND MESSAGE GMREM section   

#  	Examples:	
#  	  | FldName_023									  	| Value_023			|
# 	  | Is the Asset to be Removed/Replaced?			| YES	  			|
# 	  | Status of Asset									| No Fault Found	|
# 	  | Removed Meter Reading(s):						| 12345				|

# 	# -----------------------------------------------------------------------    
  	
#  	Scenario: Going through "SEND MESSAGE GMREM" section
#   	 Given the "SEND MESSAGE GMREM" section
#   	 When I click on Send Message GMREM button
#   	 Then I should see Awaiting Response button    	
  	
# 	# -----------------------------------------------------------------------  

#  	Scenario: Waiting "AWAITING RESPONSE"   
#      Given the "Awaiting Response" button
#      When I wait for the button to disappear
#      Then I should see Removal Successful button
#      And I should see Request Sent Successfully text message  
#      And I should see OK to Remove Asset text message

# 	# -----------------------------------------------------------------------  

#  	Scenario: Confirming "Removal Successful"   
#      Given the "Removal Successful" button is displayed
#      When I click on Removal Successful button
#      Then I should see CONFIRM GAS ASSET REMOVAL section   

# # -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "CONFIRM GAS ASSET REMOVAL" section 
#      Given the "CONFIRM GAS ASSET REMOVAL" section   
#    	 When I fill the field024 <FldName_024> with the value of <Value_024>
#   	 And I click on OK button in Updated window with the text Asset successfully added to Returns list 
#      Then I should see REMOVE COMMS HUB window   
#    	 And I should see the page contect display   

#  	Examples:	
#  	  | FldName_024									  	| Value_024			|
#  	  | Removed Asset Status							| Off Circuit		|
#  	  | Confirm Asset Removed?							| Yes				|

# 	# -----------------------------------------------------------------------    

#  	Scenario Outline: Going through "REMOVE COMMS HUB" section  
#      Given the "REMOVE COMMS HUB" section      
#    	 When I fill the field027 <FldName_027> with the value of <Value_027>
#    	 And I click on NEXT SECTION button
#    	 Then I should see CONFIRM COMMS HUB REMOVAL section  
   	
#  	Examples:	
#  	  | FldName_027									  	| Value_027					|
#  	  | Is the Asset to be Removed/Replaced?			| YES	  					|
#  	  | Comms Hub Connection Method:					| ESME						|
#  	  | Status of Comms Hub								| Damaged case				|
#  	  | Optional Additional Notes/Remarks				| Remove COMMS HUB remarks	| 
#  	  | Fault Identified Post Installation				| YES	  					|
 	 	
# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "CONFIRM COMMS HUB REMOVAL" section 
#      Given the "CONFIRM COMMS HUB REMOVAL" section   
#    	 When I fill the field028 <FldName_028> with the value of <Value_028>
#   	 And I click on OK button in Updated window with the text Asset successfully added to Returns list 
#   	 And I click on SUBMIT button
#      Then I should see INSTALL COMMS HUB section   
#    	 And I should see INSTALL tab activated

#  	Examples:	
#  	  | FldName_028									  	| Value_028					|
#  	  | Removed Asset Status							| Off Circuit				|
#  	  | Confirm Asset Removed?							| YES						|	   		
   		
# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "INSTALL COMMS HUB" section 
#      Given the "INSTALL COMMS HUB" section   
#    	 When I fill the field029 <FldName_029> with the value of <Value_029>
#   	 And I click on OK button in Comms Hub Type Warning window with the text WARNING - SELECTED DEVICE IS BELOW LEVEL OF CURRENT COMMS HUB 
#   	 And I fill the field030 <FldName_030> with the value of <Value_030>
# 	 And I click on OK button in Updated window with the text Asset successfully added to wall
# 	 And I fill the field071 <FldName_071> with the value of <Value_071>
# 	 And I click on CAPTURE PHOTOGRAPHIC EVIDENCE button
#   	 And I click on NEXT SECTION button
#      Then I should see SEND MESSAGE XCHUB section 

#  	Examples:	
#  	  | FldName_029							| Value_029					| FldName_030	| Value_030 		| FldName_071			   		| Value_071 			| 
# 	  | Is New Comms Hub Required?			| YES						| CHF ID:		| 1C0000AA00110041	| Comms Hub Location Code: 		| A : Outside Premises 	|
# 	  | Select Valid Comms Hub To Install:	| 1C0000AA00110041 : GS-60B	|				|					| Aerial Installed?		   		| YES   				|
# 	  |										|							|				|					| Comms Hub Connection Method:	| ESME                  |

# 	# -----------------------------------------------------------------------  	

#   	Scenario: Continuing "SEND MESSAGE XCHUB" section    
#      Given the "SEND MESSAGE XCHUB" section   
#    	 When I click on Send Message XCHUB button
#    	 Then I should see Awaiting Response button 	

# 	# -----------------------------------------------------------------------  	

#  	Scenario: Waiting "AWAITING RESPONSE"   
#      Given the "Awaiting Response" button
#      When I wait for the button to disappear
#      Then I should see Removal Successful button
#      And I should see Request Sent Successfully text message  
#      And I should see Whitelist transfer completed check LED indication is correct text message   		

# 	# -----------------------------------------------------------------------  	

#  	Scenario: Confirming "Removal Successful"   
#      Given the "Removal Successful" button is displayed
#      When I click on Removal Successful button
#      Then I should see NEW GAS METER DETAILS section

# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "NEW GAS METER DETAILS" section 
#      Given the "NEW GAS METER DETAILS" section    
#    	 When I fill the field041 <FldName_041> with the value of <Value_041>
#   	 And I click on OK button in Updated window with the text Asset successfully added to wall 
#   	 And I fill the field042 <FldName_042> with the value of <Value_042>
#   	 Then I should see NEW REGULATOR section 	   		

#  	Examples:	
#  	  | FldName_041						| Value_041					| FldName_042					| Value_042 		|
# 	  | Select Valid Meter To Install:	| G4P00000000029 : GS-60B	| Meter Type:					| GS-60B			|
# 	  | Gas Meter Serial No(s):			| G4P00000000029			| Meter Location Code:			| 12 : Hall Cupboard|
	
# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "NEW REGULATOR" section 
#      Given the "NEW REGULATOR" section    
#    	 When I fill the field043 <FldName_043> with the value of <Value_043>
#      And I click on OK button in Updated window with the text Asset successfully added to wall
#  	 And I click on NEXT SECTION button
#   	 Then I should see GAS INITIAL METER READING section 	 
  	
# 	Examples:	
#  	  | FldName_043						| Value_043					|  	
#   	  | Has Gas Regulator been replaced?| YES						|
#   	  | Select Valid Asset To Install:	| MA6NC000000003 : A6N KitN	|  		
#   	  | Regulator Serial No(s):			| MA6NC000000003			|  
  	
# 	# -----------------------------------------------------------------------   

#  	Scenario Outline: Going through "GAS INITIAL METER READING" section     	
#    	 Given the "GAS INITIAL METER READING" section  
#    	 When I fill the field044 <FldName_044> with the value of <Value_044>
#    	 Then I should see INSTALL KIT section 

#  	Examples:	
#  	  | FldName_044											| Value_044				  |
#   	  | Capture Meter Reading:								| 12345					  |

# 	# -----------------------------------------------------------------------  

#  	Scenario Outline: Going through "INSTALL KIT" section 
#      Given the "INSTALL KIT" section    
#    	 When I fill the field045 <FldName_045> with the value of <Value_045>
#   	 And I click on ADD ANOTHER ASSET button
#   	 And I fill the field046 <FldName_046> with the value of <Value_046>
#  	 And I click on NEXT SECTION button
#   	Then I should see POST INSTALLATION GAS TIGHTNESS TEST section 	 
  	
# 	Examples:	
#  	  | FldName_045			| Value_045	| FldName_046			| Value_046	| 	
#   	  | Install Kit Used?	| YES		| Meter Board 			| 2			|
#   	  | T1 Aerial			| 1			|    					|			|
  	
# 	# -----------------------------------------------------------------------  
#  	Scenario Outline: Going through "POST INSTALLATION GAS TIGHTNESS TEST" section 
#      Given the "POST INSTALLATION GAS TIGHTNESS TEST" section
#      When I fill the field047 <FldName_047> with the value of <Value_047>       				
#    	 And I select Capped Gas Cooker field
#    	 And I select Installed Meter Inlet/Outlet field
#    	 And I select Replaced Copper Pipe field 		
#    	 And I fill the field058 <FldName_058> with the value of <Value_058>
#    	 And I click on CAPTURE PHOTO OF WITNESS STICKER & U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button	
#  	 And I fill the field048 <FldName_048> with the value of <Value_048>
#  	 And I click on CAPTURE PHOTO OF STANDING PRESSURE button 
#  	 And I fill the field049 <FldName_049> with the value of <Value_049>
#  	 And I click on CAPTURE PHOTO OF WORKING PRESSURE button 
#  	 And I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button
#  	 And I click on NEXT SECTION button
#  	 Then I should see GAS INSTALL & COMMISSIONING section
 
#  	Examples:	
#  	  | FldName_047																| Value_047	| FldName_058															| Value_058	| FldName_048										 | Value_048		| FldName_049				  | Value_049	| FldName_072				  | Value_072	| 
#   	  | Did you have to contact GT?												| YES		| Additional Notes / Remarks - Additional Work Carried Out Description	| Gas Notes	| Was there a drop in pressure?						 | YES				| Working Pressure (mbar): 	  | 1.5			| Message required to DCC? 	  | YES			|
#   	  | National Grid(GT) Job Ref.:												| 1			| Have you replaced the Gas meter?										| YES		| Enter Drop in Pressure (DIP) Gas Pressure (mbars): | 1.0				|                        	  | YES			| Comms Hub Connected to WAN? | YES         |
#   	  | Reported Incident to H&S(AIRline?)?										| YES		| Have you replaced the Gas regulator?									| YES		| Select Meter Type: 								 | G4 - 0.5-4m bars |                             |             |                             |             |					                   
#   	  | AIRline Ref. No.:														| 2			| Post installation - Gas Tightness Test Performed?						| YES		| Gas Tightness Test - Passed?						 | YES				|					          |             |                             |             |
#   	  | Need to wait for the GT Attendance on Site?								| YES		| 																		|			| Test Witness Name:								 | Ellie Taylor		|					          |				|                             |             |					
#   	  | GT Resolve Issue?														| YES		|                   													|   		| Standing Pressure (mbar):							 | 1.1              |					          |				|                             |             |
#   	  | Did you carry out any Additional Work to Pass the Gas Tightness Test?	| YES		| 													 					|           |													 |                  |					          |				|                             |             |
   	
# 	# -----------------------------------------------------------------------   

#  	Scenario: Going through "GAS INSTALL & COMMISSIONING" section  
#      Given the "GAS INSTALL & COMMISSIONING" section      
#    	 When I click on Send Message GICOM button
#    	 Then I should see Awaiting Response button     	

# 	# -----------------------------------------------------------------------    

#  	Scenario: Waiting "AWAITING RESPONSE"   
#      Given the "Awaiting Response" button
#      When I wait for the button to disappear
#      Then I should see Commissioning Successful button
#      And I should see Request Sent Successfully text message  
#      And I should see Pair Asset to Comms Hub text message
#      And I should see DCC Handover Requested text message
#      And I should see Device Clock Synchronised text message
#      And I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message
#      And I should see DCC Handover Requested for GPF Device text message
#      And I should see Joins are being Initiated text message
    	
# 	# -----------------------------------------------------------------------  

#  	Scenario: Confirming "Commissioning Successful"   
#      Given the "Commissioning Successful" button is displayed
#      When I click on Commissioning Successful button
#      Then I should see GAS APPLIANCE SAFETY CHECKS section

# 	# -----------------------------------------------------------------------  
  	
#  	Scenario Outline: Going through "GAS APPLIANCE SAFETY CHECKS" section 
#      Given the "GAS APPLIANCE SAFETY CHECKS" section    
#    	 When I fill the field050 <FldName_050> with the value of <Value_050>
#    	 And I click on ADD APPLIANCE button
#    	 And I fill the field051 <FldName_051> with the value of <Value_051>
#    	 And I click on ALL APPLIANCES TESTED button
#   	 Then I should see INSTALL PPMID section 	 
  	
# 	Examples:	
#  	  | FldName_050					| Value_050	| FldName_051									  | Value_051     | 	
#   	  | Is Earth Bonding Installed?	| YES		| Flue Type:									  | Flueless      |
#   	  | Landlord Property?			| YES		| Ventilation Satisfactory? 					  | YES		      |   	
#    	  | Address:					| 1			| Carried Out Purge & Relight Gas Appliance Test? | YES		      | 
#    	  |								|			| Appliance Type: 							 	  | Gas Cooker    |
#    	  |								|			| Appliance Location:							  | Kitchen	  	  |
#    	  |								|			| Appliance Condition:							  | Working Order |
#    	  |								|			| Appliance Safe to Use?						  | YES			  |
   	
# 	# -----------------------------------------------------------------------  
  	
#  	Scenario Outline: Going through "INSTALL PPMID" section 
#      Given the "INSTALL PPMID" section    
#    	 When I fill the field052 <FldName_052> with the value of <Value_052>
#    	 And I click on OK button in Updated window with the text Asset successfully added to wall   		
#    	 And I click on NEXT SECTION button
#    	 Then I should see PPMID COMMISSIONING section 	 
  	
# 	Examples:	
#  	  | FldName_052						| Value_052					| 
#   	  | PPMID offered?					| YES						| 
#   	  | PPMID Accepted?					| YES						| 
#    	  | PPMID Location:					| A : Attic					| 
#    	  | Select Valid PPMID To Install:	| 2C12345000000005 : PPMID	| 
#    	  | Serial Number:					| 2C12345000000005			| 
   	
# 	# -----------------------------------------------------------------------  

#  	Scenario: Going through "PPMID COMMISSIONING" section  
#      Given the "PPMID COMMISSIONING" section      
#    	 When I click on Send Message IHD/PPMID button
#    	 Then I should see Awaiting Response button     	

# 	# -----------------------------------------------------------------------    

#  	Scenario: Waiting "AWAITING RESPONSE"   
#      Given the "Awaiting Response" button
#      When I wait for the button to disappear
#      Then I should see PPMID Commissioning Successful button
#      And I should see Request Sent Successfully text message  
#      And I should see Pair Asset to Comms Hub text message
#      And I should see Pairing Successful text message
    	
# 	# -----------------------------------------------------------------------  

#  	Scenario: Confirming "PPMID Commissioning Successful"   
#      Given the "PPMID Commissioning Successful" button is displayed
#      When I click on SUBMIT button
#      Then I should see SUBMIT tab activated
#      And I should see DEVICE BINDING & COMMISSIONING section

# 	# -----------------------------------------------------------------------  













