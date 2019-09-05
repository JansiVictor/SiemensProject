import {
	browser,
	protractor
} from "protractor";
import {
	loginPageObject
} from "../pages/loginPage";
import {
	INST16homePageObject
} from "../pages/INST16homePage";
import {
	FLTY19AppointmentListPageObject
} from "../pages/FLTY19AppointmentListPage";
import {
	DoorStepPageObject
} from "../pages/DoorStepPage";
import {
	 RiskAssessmentPageElecObject
} from "../pages/RiskAssessmentPageElec";
import {
	RiskAssessmentforGASPageObject
} from "../pages/RiskAssessmentForGAS";
import {
	config
} from "../config/config";
import {
	Utility
} from "../support/utility";
import { InstallationPageObject } from "../pages/InstallationPage";
import {
	Installation16JobCompletionPageObject
} from "../pages/Installation16JobCompletion";
const {
	Given,
	When,
	Then
} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const loginInst16: loginPageObject = new loginPageObject();
const homeInst16: INST16homePageObject = new INST16homePageObject();
const applistInst16: FLTY19AppointmentListPageObject = new FLTY19AppointmentListPageObject();
const doorstepInst16: DoorStepPageObject = new DoorStepPageObject();
const riskassessInst16: RiskAssessmentPageElecObject = new RiskAssessmentPageElecObject();
const riskassessGASInst16: RiskAssessmentforGASPageObject = new RiskAssessmentforGASPageObject();
const riskassessElecInst16: InstallationPageObject  = new InstallationPageObject();
const installation16Complete: Installation16JobCompletionPageObject = new Installation16JobCompletionPageObject();

// Log in
//---------------------------------------------------------------------
Given('the Login Page for INST16', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass {string} and {string} for INST16', async function (username, password) {
	await loginInst16.setUsernamePassword(username, password);
	await utility.wait(500);
});

Then('I click Login button for INST16', async function () {
	await loginInst16.clickLogin();
	await utility.wait(10000);
});

Then('I should see the Appointment List for INST16', async function () {
	await expect(await homeInst16.appointmentListLabel.getText()).equal("Appointments List");
});
//--------------------------------------------------------------------------
// Select the job from appointment link
Given('the Appointment List window for INST16', async function () {
	await homeInst16.verifyAppointmentListPage();
});

When('I click on select button for INST16', async function () {
	await homeInst16.clickOnTheSelectLink();
	await utility.wait(5000);
});

Then('I should see Work Order window for INST16', async function () {
	await applistInst16.verifyWorkOrderWindowText();
});
//----------------------------------------------------------------------------
// work order window

Given('the {string} window for INST16', async function (string) {
	//WorkOrder Window
	await applistInst16.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button for INST16', async function () {
	await applistInst16.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button for INST16', async function () {
	await applistInst16.clickOnCallForwardBtn();
});

Then('I should see page contect display for INST16', async function () {
	await applistInst16.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER for INST16', async function () {
	await utility.wait(5000);
	await expect(await applistInst16.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field for INST16', async function () {
	await utility.wait(5000);
	await expect(await applistInst16.contactMadeText.getText()).equal("Contact made?");
	await expect(applistInst16.contactMadeYes.isPresent());
});

//------------------------------------------------------------------------------------
// verify workourder
Given('the {string} page for INST16', async function (string) {
	await applistInst16.verifyWorkOrderWindowText();
});

When('I fill the fields with the value for INST16', async function () {
	// await applist.clickOnCallForwardBtn();
	await applistInst16.clickOnContactMadeOtion();
	await applistInst16.appointmentConfirmationYes();
	await applistInst16.additionalDetails();
});

When('I click on DEPART button for INST16', async function () {
	await applistInst16.clickDepartBtn();
});

Then('I should see Depart for Appointment window for INST16', async function () {
	await applistInst16.verifyDepartForAppointmentWindow();
});

Then('I should see the correct MPAN details for INST16', async function () {
	await applistInst16.mpanDetails();
});

Then('I should see the correct Customer Name details for INST16', async function () {
	await applistInst16.customerNameDetails();
});

Then('I should see the correct PostCode details for INST16', async function () {
	await applistInst16.postCodeDetails();
});
//------------------------------------------------------------------------

// Depart for appointment
Given('{string} details for INST16', async function (string) {
	await applistInst16.verifyDepartForAppointmentWindow();
});

When('I click on OK button for INST16', async function () {
	await applistInst16.mprnOKbtn();
});

Then('I should see ARRIVE button for INST16', async function () {
	await utility.wait(10000);
	await applistInst16.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated for INST16', async function () {
	await utility.wait(5000);
	await applistInst16.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button for INST16', async function () {
	await applistInst16.clickArriveBtn();
});

Then('I should see Arrival Time details for INST16', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applistInst16.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see BE AWARE OF ANY DANGER! section for INST16', async function () {
	await doorstepInst16.verifyBeAwareOfAnyDangerPage();
});
//-------------------------------------------------------------------------------------

// Danger Section
Given('the BE AWARE OF ANY DANGER! section for INST16', async function () {
	await doorstepInst16.verifyBeAwareOfAnyDangerPage();
});

When('I fill the DoorStep Protocol fields with the value for INST16', async function () {
	await doorstepInst16.fillTheDoorStepDetails();
});

When('I click on ON SITE button for INST16', async function () {
	await doorstepInst16.clickONSITEBtn();
});

Then('I should see RISK ASSESSMENT tab activated for INST16', async function () {
	await riskassessInst16.verifyRiskAssessmentPage();
});

Then('I should see INITIAL RISK ASSESSMENT section for INST16', async function () {
	await riskassessInst16.verifyInitialRiskAssessmentPage();
});
//-----------------------------------------------------------------------------------------------

//Initial Risk Assessment

Given('the INITIAL RISK ASSESSMENT section for INST16', async function () {
	await riskassessInst16.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values for INST16', async function () {
	await riskassessInst16.inputInitialRiskAssessmentDetails();
});

Then('I should see INFO window for INST16', async function () {
	await riskassessInst16.infoTextPopUp();
});


Given('the INFO window with the text for INST16', async function () {
	await riskassessInst16.infoOKButton.isDisplayed();
	await riskassessInst16.infoOKButton.click();

	//await riskassess.performanceRiskNextBtn.click();


	await utility.wait(10000);
	if (riskassessInst16.NeedtoWorkYES.isDisplayed()) {
		var element = riskassessInst16.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(5000);
	}
});


Then('I should see RISK ASSESSMENT ELEC section for INST16', async function () {
	await riskassessInst16.verifyriskElecText();
});

//--------------------------------------------------------------

// Scenario 9: Risk assessment elec

Given('the RISK ASSESSMENT - ELEC section for INST16', async function () {
	await riskassessInst16.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - ELEC fields with the values for INST16', async function () {
	await riskassessElecInst16.fillRiskAssesmentElecFieldsINST16();
});

When('I click on NEXT SECTION button for INST16', async function () {
	await riskassessInst16.clickNextSectionBtn();
});
//----------------------------------------------------------------------------------------

// Smart Installation

Given('the Suitable for Smart Installation section for INST16', async function () {
	await riskassessInst16.verifysuitableforSmartMeterInstallation();
});

When('I click on Is Site Suitable for Smart Installation? button for INST16', async function () {
	await riskassessInst16.suitableforSmartMeterInstallation();
});

When('I click on Equipment Reposition Required? for INST16', async function () {
	await riskassessInst16.equipmentRepositionReq();
});

When('I enter Additional Notes for Smart installation Check for INST16', async function () {
	await riskassessInst16.enterNotesForMeteInstallation();
});


When('I click on smart installation NEXT SECTION button for INST16', async function () {
	await riskassessInst16.clickSmartInstallationNextBtn();
});

Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for INST16', async function () {
	await riskassessInst16.verifyMeterAndCutOut();
});


//Section 12: Polarity check

Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for INST16', async function () {
	await riskassessInst16.verifyMeterAndCutOut();
});

When('I fill the METER AND CUT OUT fields with the values for INST16', async function () {
	await riskassessElecInst16.fillthePolarityCheckMeterOutINST16();
});

// Then ('I click on SUBMIT button for INST16', async function () {
// 	await riskassessInst16.meterCutOutnextSection();
// });

Then('the Comms Hub details section for INST16 test', async function () {
	await riskassessInst16.CommHubDisplayed();
});

//---------------------------------------------------------------------------------------------

// COmms Hub Section

Given('the Comms Hub details section for INST16 test1', async function () {
	await riskassessInst16.CommHubDisplayed();
});


When('I fill the Comms Hub fields with values for INST16', async function () {
	await riskassessInst16.fillCommsHubDetails(4);
});


Then('I should see NEW METER section for INST16', async function () {
	await riskassessInst16.newMeterDetailsDisplayed();
});
//--------------------------------------------------------------------
// Given('the  New Meter details section', async function () {
// 	await riskassess.newMeterDetailsDisplayed();
// });


// When('I fill the New Meter details fields with values', async function () {
// 	await riskassess.fillNewMeterDetails(4);
// });


// Then('I should see ADDITIONAL ELECTRICITY CHECKS section', async function () {
// 	await riskassess.additionalElecCheckDisplayed();
// });

// Given('the the ADDITIONAL ELECTRICITY CHECKS details section', async function () {
// 	await riskassess.additionalElecCheckDisplayed();
// });

// When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
// 	await riskassess.fillAdditionalElecCheckDetails();
// });

// Given('Initial Meter Reading of new meter depending on the number of Registers and dials section', async function () {
// 	await riskassess.initialMEterREadingTxtDisplayed();
// });

// When('I fill the Initial Meter Reading of new meter details fields with values', async function () {
// 	await riskassess.fillInitialElecMeterReading();
// });

// Then('I should see Commission Bind the Comms hub to the WAN section', async function () {
//   await riskassess.commisioningTxtDisplayed();
// });

//---------------------------------------------------------------

//New meter


Given('the  New Meter details section for INST16', async function () {
	await riskassessInst16.newMeterDetailsDisplayed();
});


When('I fill the New Meter details fields with values for INST16', async function () {
	await riskassessElecInst16.fillNewMeterDetailsInst16(4);
});

Then('I should see ADDITIONAL ELECTRICITY CHECKS section for INST16', async function () {
	await riskassessInst16.additionalElecCheckDisplayed();
});
//---------------------------------------------------------------------------------
//Additional electricity check
Given('the the ADDITIONAL ELECTRICITY CHECKS details section for INST16', async function () {
	await riskassessInst16.additionalElecCheckDisplayed();
});

When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for INST16', async function () {
	await riskassessElecInst16.fillAdditionalElecCheckDetailsINST16();
});

//---------------------------------------------------------------------------------------

//Initial Meter Reading

Given('Initial Meter Reading of new meter depending on the number of Registers and dials section for INST16', async function () {
	await riskassessInst16.initialMEterREadingTxtDisplayed();
});

When('I fill the Initial Meter Reading of new meter details fields with values for INST16', async function () {
	await riskassessInst16.fillInitialElecMeterReading();
});

Then('I should see Commission Bind the Comms hub to the WAN section for INST16', async function () {
  await riskassessInst16.commisioningTxtDisplayed();
});

//------------------------------------------------------------------------------------
// Commission Binding

Given('Commission Bind the Comms hub to the WAN section for INST16', async function () {
  await riskassessInst16.commisioningTxtDisplayed();
});


When('I fill the Commission Bind the Comms hub to the WAN details fields with values for INST16', async function () {
  await riskassessInst16.fillCommissioningDetails();
});

Then('I should see Perform Post Installation Checks section for INST16', async function () {
	await riskassessInst16.postInstallationCheckDisplayed();
});


// Scenario 17 : Post Installation check

  Given('Perform Post Installation Checks section for INST16', async function () {
	await riskassessInst16.postInstallationCheckDisplayed();
});


When('I fill the Perform Post Installation Checks details fields with values for INST16', async function () {

await riskassessElecInst16.fillPostInstallationCheckINST16();
});


Then('I should see Perform DCC Message Creation for EICOM section for INST16', async function () {
	await riskassessInst16.electricInstalDisplayed();
});
//-----------------------------------------------------------------------------------
// EICOM  Message

Given('Perform DCC Message Creation for EICOM section for INST16', async function () {
	await riskassessInst16.electricInstalDisplayed();
	 });
	
	
	When('I fill the Perform DCC Message Creation for EICOM details fields with values for INST16', async function () {
		await riskassessInst16.eicomMessage();
	});
	
	
	Then('I should see Initial Risk Assessment for GAS section for INST16', async function () {
		await riskassessGASInst16.riskAssessmentGASDisplayed();
	});
	
//	--------------------------------------------------------------------------------------------

//Initial Risk assemssment

Given('the INITIAL RISK ASSESSMENT section for INST16 Part 2', async function () {
	await riskassessInst16.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values for INST16 Part 2', async function () {
	await riskassessInst16.inputInitialRiskAssessmentDetails();
});

Then('I should see INFO window for INST16 Part 2', async function () {
	await riskassessInst16.infoTextPopUp();
});


Given('the INFO window with the text for INST16 Part 2', async function () {
	await riskassessInst16.infoOKButton.isDisplayed();
	await riskassessInst16.infoOKButton.click();

	//await riskassess.performanceRiskNextBtn.click();


	await utility.wait(10000);
	if (riskassessInst16.NeedtoWorkYES.isDisplayed()) {
		var element = riskassessInst16.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(5000);
	}
});


Then('I should see RISK ASSESSMENT GAS section for INST16', async function () {
	await riskassessInst16.verifyriskElecText();
});

//-------------------------------------------------------------------------------------------



// Risk Assessment for Gas

Given('the RISK ASSESSMENT - GAS section for INST16', async function () {
	await riskassessGASInst16.riskAssessmentGASDisplayed();
});


When('I fill the RISK ASSESSMENT - GAS fields with the values for INST16', async function () {
	await riskassessGASInst16.fillRiskAssessGas();
});


Then('I should see Suitability for Smart Meter Installation section for INST16', async function () {
	await riskassessGASInst16.suitableForSmartInstallationTxt();
});
//-----------------------------------------------------------------------

Given('the Suitability for Smart Meter Installation section for INST16', async function () {
	await riskassessGASInst16.suitableForSmartInstallationTxt();
});


When('I fill the Suitability for Smart Meter Installation fields with the values for INST16', async function () {
	await riskassessGASInst16.fillSuitablityForSmartInstallation();
});


Then('I should see Capture Photo of GAS Installation section for INST16', async function () {
	await riskassessGASInst16.captureInitialPhotoTxt();
	await riskassessGASInst16.captureInitialPhotogasbtn.click();
	await utility.wait(1000);
});

//

Given('the Pre Installation Gas Tightness section for INST16', async function () {
	await riskassessGASInst16.preInstallationGasTTxt();
});

When('I fill the Pre Installation Gas Tightness fields with the values for INST16', async function () {
	await riskassessGASInst16.preInstallationGasT();
});

Then('I should see Current Meter Details section for INST16', async function () {
	await riskassessGASInst16.currentMeterDetailsTxtDisplay();
});

Then('I should see New Regulator section for INST16', async function () {
  await riskassessGASInst16.meterRegulatorDetailsTxtDisplay();
});

When('I fill the New Meter details fields with values Gas for INST16', async function () {
	await riskassessGASInst16.fillNewMeterDetailsGAS(2);
});

//-------------------------------------------------------------------

Given('the New Regulator section for INST16', async function () {
  await riskassessGASInst16.meterRegulatorDetailsTxtDisplay();
});

When('I fill the New Regulator fields with values for INST16', async function () {
  await riskassessGASInst16.fillMeterRegulatorDetailsGAS();
});


Then('I should see Gas Initial Meter Reading section for INST16', async function () {
  await riskassessGASInst16.gasInitialMeterTxtDisplay();
});

//----------------------------------------------------------

Given('the Gas Initial Meter Reading section for INST16', async function () {
  await riskassessGASInst16.gasInitialMeterTxtDisplay();
});

When('I fill the Gas Initial Meter Reading details fields with values for INST16', async function () {
  await riskassessGASInst16.fillGasInitialMeterREading();
});


Then('I should see Gas Install Kit section for INST16', async function () {
  await riskassessGASInst16.gasInstallKitTxtDisplay();
});
//------------------------------------------------------------------
 Given('the Gas Install Kit section for INST16', async function () {
  await riskassessGASInst16.gasInstallKitTxtDisplay();
 });


When('I fill the Gas Install Kit section fields with values for INST16', async function () {
  await riskassessGASInst16.fillGasInstallKitDetails();
 });


 Then('I should see Perform Post Installation GAS Checks section for INST16', async function () {
  await riskassessGASInst16.GasPostInstallationTxt();
 });
//---------------------------------------------------------------
 Given('the Post Installation GAS section for INST16', async function () {
  await riskassessGASInst16.GasPostInstallationTxt();
});

When('I fill the Post Installation GAS section fields with values for INST16', async function () {
  await riskassessElecInst16.fillPostInstallationGasDetailsInst16();
});


Then('I should see GICOM Message section for INST16', async function () {
  await riskassessGASInst16.gicomSendMessageTxtDisplayed();
});
//------------------------------------------------------------------------------------------
Given('the GICOM Message section for INST16', async function () {
  await riskassessGASInst16.gicomSendMessageTxtDisplayed();
});


When('I fill the GICOM Message section fields with values for INST16', async function () {
  await riskassessGASInst16.filllGiComSection();
});


Then('I should see Gas Appliance Safety Checks section for INST16', async function () {
  await riskassessGASInst16.gasSafetyDisplay();
});
//---------------------------------------------------------------------
Given('the Gas Appliance Safety Checks section for INST16', async function () {
  await riskassessGASInst16.gasSafetyDisplay();
});


When('I fill the Gas Appliance Safety Checks section fields with values and Submit for INST16', async function () {
  await riskassessGASInst16.fillGasSafety();
});


Then('I should see SMETS PPMID section for INST16', async function () {
  await installation16Complete.PPMIDSectiondispaly();
  
});
//-----------------------------------------------------------------------------

//PPMID
Given('the SMETS PPMID section for INST16', async function () {
  await installation16Complete.PPMIDSectiondispaly();
});


When('I fill the SMETS PPMID section fields with values for INST16',async function () {
  await installation16Complete.fillPPMIDSection(5);
});


Then('I should see PPMID commissioning section for INST16', async function () {
  await installation16Complete.PPMIDCommisioningdisplay();
});
//------------------------------------------------------------------
Given('the PPMID commissioning section for INST16', async function () {
  await installation16Complete.PPMIDCommisioningdisplay();
});

When('I click on send message IHD PPMID for INST16', async function () {
  await installation16Complete.PPMIDMessage();
});


Then('I should see Check Binding and commissioning of PPMID section for INST16', async function () {
  await installation16Complete.DeviceBindingSectiondispaly();

});

//--------------------------------------------------------------------------------------
Given('the Binding and commissioning of PPMID section for INST16', async function () {
  await installation16Complete.DeviceBindingSectiondispaly();
});


When('I fill the Binding and commissioning of PPMID fields with values for INST16', async function () {
  await installation16Complete.fillDeviceBindingSection();
});


Then('I should see configuration of all meters installed section for INST16', async function () {
  await installation16Complete.configAllmeterDisplay();
  console.log ("Test");
});

//----------------------------------------------------------------------------------------
Given('the configuration of all meters installed  section for INST16',async function () {
  await installation16Complete.configAllmeterDisplay();
  console.log ("Test");
});



When('I fill the configuration of all meters installed  fields with values for INST16',async function () {
  await installation16Complete.fillConfigAllmeterInstall16();
  
});


Then('I should see Energy Efficiency information section for INST16',async function () {
 await installation16Complete.EEInfoDisplay();
 console.log ("Test dispay");
});
//-----------------------------------------------------------------------------------
Given('the Energy Efficiency information  section for INST16', async function () {
 await installation16Complete.EEInfoDisplay();
  console.log ("Test display");
});

When('I fill the Energy Efficiency information fields with values for INST16',async function () {
  await installation16Complete.fillEEInfo();
});

Then('I should see Perform Smart Meter Education and Demonstration section for INST16', async function () {
 await installation16Complete.smartEducationDisplay();
 console.log("test display");
  
});

//-------------------------------------------------------------------------------------------
Given('the Perform Smart Meter Education and Demonstration section for INST16', async function () {
 await installation16Complete.smartEducationDisplay();
  console.log("test");
});


When('I fill the Perform Smart Meter Education and Demonstration  fields with values for INST16', async function () {
  await installation16Complete.fillSmartEducationDetails();
});


Then('I should see Summary of Job and receive Customer Signature section for INST16',async function () {
  await installation16Complete.summaryDisplay();
});
//---------------------------------------------------------------------------------------------------
Given('the Summary of Job and receive Customer Signature section for INST16', async function () {
  await installation16Complete.summaryDisplay();
});


When('I fill the Summary of Job and receive Customer Signaturefields with values for INST16', async function () {
  await installation16Complete.fillAndPrintSummaryContent();
});


Then('I should see Submit button to complete the job section for INST16', async function () 
{
  await installation16Complete.FinalSubmission();
});

