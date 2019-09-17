import {
	browser,
	protractor
} from "protractor";
import {
	loginPageObject
} from "../pages/loginPage";
import {
	HomePageObject
} from "../pages/HomePage";
import {
	FLTY19AppointmentListPageObject
} from "../pages/AppointmentListPage";
import {
	DoorStepPageObject
} from "../pages/DoorStepPage";
import {
	ElectricPageObject
} from "../pages/ElectricPage";
import {
	GASPageObject
} from "../pages/GASPage";
import {
	JobCompletionPageObject
} from "../pages/JobCompletionPage";
import {
	config
} from "../config/config";
import {
	Utility
} from "../support/utility";
const {
	Given,
	When,
	Then
} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const home: HomePageObject = new HomePageObject();
const applist: FLTY19AppointmentListPageObject = new FLTY19AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: ElectricPageObject = new ElectricPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const exchnge21Complete: JobCompletionPageObject = new JobCompletionPageObject();



Given('the Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});

Then('I click Login button', async function () {
	await login.clickLogin();
	await utility.wait(10000);
});

Then('I should see the Appointment List', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on select button', async function () {
	await home.clickCorrectSelectLink('Exchange21');
	//await home.clickOnTheExchange21SelectLink();
	//await home.clickOnTheContinueLink();
	await utility.wait(5000);
});

Then('I should see Work Order window', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the {string} window', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER', async function () {
	await utility.wait(5000);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field', async function () {
	await utility.wait(5000);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the {string} page', async function (string) {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('{string} details', async function (string) {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ARRIVE button', async function () {
	await utility.wait(10000);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated', async function () {
	await utility.wait(5000);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button', async function () {
	await applist.clickArriveBtn();
});

Then('I should see Arrival Time details', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the INFO window with the text', async function () {
	await riskassess.infoOKButton.isDisplayed();
	await riskassess.infoOKButton.click();

	//await riskassess.performanceRiskNextBtn.click();


	await utility.wait(10000);
	if (riskassess.NeedtoWorkYES.isDisplayed()) {
		var element = riskassess.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(5000);
	}
});


Then('I should see RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

When('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess.capturephotoMeterInstall.click();
});

Then('I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Given('the Suitable for Smart Installation section', async function () {
	await riskassess.verifysuitableforSmartMeterInstallation();
});

When('I click on Is Site Suitable for Smart Installation? button', async function () {
	await riskassess.suitableforSmartMeterInstallation();
});

When('I click on Equipment Reposition Required?', async function () {
	await riskassess.equipmentRepositionReq();
});

When('I enter Additional Notes for Smart installation Check', async function () {
	await riskassess.enterNotesForMeteInstallation();
});


When('I click on smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SUBMIT button', async function () {
	await riskassess.meterCutOutnextSection();
});

Then('I should see CURRENT METER DETAILS section', async function () {
	await riskassess.verifyCurrentMeterDetails();
});

Given('the Check the current meter detailssection', async function () {
	await riskassess.verifyCurrentMeterDetails();
});


When('I fill the current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see the REMOVE tab activated', async function () {
	await riskassess.removeTabdisplayed();
});

Given('the REMOVE METER section', async function () {
	await riskassess.removeTabdisplayed();
});

When('I fill the REMOVE METER fields with the values', async function () {
	await riskassess.fillRemoveMeterDetails();
});


Then('I should see REMOVE ASSET section', async function () {
	await riskassess.removeAssetTextDisplayed();
});

Given('the REMOVE ASSET section', async function () {
	await riskassess.removeAssetTextDisplayed();
});


When('I fill the REMOVE ASSET field with the values', async function () {
	await riskassess.fillremoveAssetDetails();
});


When('I click on OK button in updated Popup notification', async function () {
	await riskassess.OKButton();
});


Then('I should see INSTALL COMMS HUB section', async function () {
	await riskassess.CommHubDisplayed();
});
Given('the  Comms Hub details section', async function () {
	await riskassess.CommHubDisplayed();
});


When('I fill the Comms Hub fields with values', async function () {
	await riskassess.fillCommsHubDetails(4);
});


Then('I should see NEW METER section', async function () {
	await riskassess.newMeterDetailsDisplayed();
});

Given('the  New Meter details section', async function () {
	await riskassess.newMeterDetailsDisplayed();
});


When('I fill the New Meter details fields with values', async function () {
	await riskassess.fillNewMeterDetails(4);
});


Then('I should see ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the the ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Given('Initial Meter Reading of new meter depending on the number of Registers and dials section', async function () {
	await riskassess.initialMEterREadingTxtDisplayed();
});

When('I fill the Initial Meter Reading of new meter details fields with values', async function () {
	await riskassess.fillInitialElecMeterReading();
});

Then('I should see Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Given('Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});


When('I fill the Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails();
});

Then('I should see Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


Given('Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});


Then('I should see Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

Given('Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});


When('I fill the Perform DCC Message Creation for EICOM details fields with values', async function () {
	await riskassess.eicomMessage();
});


Then('I should see Initial Risk Assessment for GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});


When('I fill the RISK ASSESSMENT - GAS fields with the values', async function () {
	await riskassessGAS.fillRiskAssessGas();
});


Then('I should see Suitability for Smart Meter Installation section', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


Given('the Suitability for Smart Meter Installation section', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


When('I fill the Suitability for Smart Meter Installation fields with the values', async function () {
	await riskassessGAS.fillSuitablityForSmartInstallation();
});


Then('I should see Capture Photo of GAS Installation section', async function () {
	await riskassessGAS.captureInitialPhotoTxt();
	await riskassessGAS.captureInitialPhotogasbtn.click();
	await utility.wait(1000);
});

Given('the Pre Installation Gas Tightness section', async function () {
	await riskassessGAS.preInstallationGasTTxt();
});

When('I fill the Pre Installation Gas Tightness fields with the values', async function () {
	await riskassessGAS.preInstallationGasT();
});

Then('I should see Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});

Then('I should see New Regulator section', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});

When('I fill the New Meter details fields with values Gas', async function () {
	await riskassessGAS.fillNewMeterDetailsGAS(3);
});

Given('the New Regulator section', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});

When('I fill the New Regulator fields with values', async function () {
  await riskassessGAS.fillMeterRegulatorDetailsGAS();
});


Then('I should see Gas Initial Meter Reading section', async function () {
  await riskassessGAS.gasInitialMeterTxtDisplay();
});

Given('the Gas Initial Meter Reading section', async function () {
  await riskassessGAS.gasInitialMeterTxtDisplay();
});

When('I fill the Gas Initial Meter Reading details fields with values', async function () {
  await riskassessGAS.fillGasInitialMeterREading();
});


Then('I should see Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
});

 Given('the Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
 });


When('I fill the Gas Install Kit section fields with values', async function () {
  await riskassessGAS.fillGasInstallKitDetails();
 });


 Then('I should see Perform Post Installation GAS Checks section', async function () {
  await riskassessGAS.GasPostInstallationTxt();
 });

 Given('the Post Installation GAS section', async function () {
  await riskassessGAS.GasPostInstallationTxt();
});

When('I fill the Post Installation GAS section fields with values', async function () {
  await riskassessGAS.fillPostInstallationGasDetails();
});


Then('I should see GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});

Given('the GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});


When('I fill the GICOM Message section fields with values', async function () {
  await riskassessGAS.filllGiComSection();
});


Then('I should see Gas Appliance Safety Checks section', async function () {
  await riskassessGAS.gasSafetyDisplay();
});

Given('the Gas Appliance Safety Checks section', async function () {
  await riskassessGAS.gasSafetyDisplay();
});


When('I fill the Gas Appliance Safety Checks section fields with values and Submit', async function () {
  await riskassessGAS.fillGasSafety();
});


Then('I should see SMETS PPMID section', async function () {
  await exchnge21Complete.PPMIDSectiondispaly();
  
});

Given('the SMETS PPMID section', async function () {
  await exchnge21Complete.PPMIDSectiondispaly();
});


When('I fill the SMETS PPMID section fields with values',async function () {
  await exchnge21Complete.fillPPMIDSection(4);
});


Then('I should see SMETS XIPMD section', async function () {
  await exchnge21Complete.XIPMDSectiondispaly();
});

Given('the SMETS XIPMD section', async function () {
  await exchnge21Complete.XIPMDSectiondispaly();
});


When('I fill the SMETS XIPMD section fields with values',async function () {
  await exchnge21Complete.fillXIPMDSection();
});


Then('I should see Check Binding and commissioning of PPMID section',async function () {
  await exchnge21Complete.DeviceBindingSectiondispaly();

});


Given('the Binding and commissioning of PPMID section', async function () {
  await exchnge21Complete.DeviceBindingSectiondispaly();
});


When('I fill the Binding and commissioning of PPMID fields with values', async function () {
  await exchnge21Complete.fillDeviceBindingSection();
});


Then('I should see configuration of all meters installed section', async function () {
  await exchnge21Complete.configAllmeterDisplay();
});


Given('the configuration of all meters installed  section',async function () {
  await exchnge21Complete.configAllmeterDisplay();
});



When('I fill the configuration of all meters installed  fields with values',async function () {
  await exchnge21Complete.fillConfigAllmeter();
  
});


Then('I should see Energy Efficiency information section',async function () {
  await exchnge21Complete.EEInfoDisplay();
});

Given('the Energy Efficiency information  section', async function () {
  await exchnge21Complete.EEInfoDisplay();
});


When('I fill the Energy Efficiency information fields with values',async function () {
  await exchnge21Complete.fillEEInfo();
});


Then('I should see Perform Smart Meter Education and Demonstration section', async function () {
  await exchnge21Complete.smartEducationDisplay();
  
});


Given('the Perform Smart Meter Education and Demonstration section', async function () {
  await exchnge21Complete.smartEducationDisplay();
});


When('I fill the Perform Smart Meter Education and Demonstration  fields with values', async function () {
  await exchnge21Complete.fillSmartEducationDetails();
});


Then('I should see Summary of Job and receive Customer Signature section',async function () {
  await exchnge21Complete.summaryDisplay();
});

Given('the Summary of Job and receive Customer Signature section', async function () {
  await exchnge21Complete.summaryDisplay();
});


When('I fill the Summary of Job and receive Customer Signaturefields with values', async function () {
  await exchnge21Complete.fillAndPrintSummaryContent();
});


Then('I should see Submit button to complete the job section',async function () {
	await exchnge21Complete.FinalSubmission();
});


