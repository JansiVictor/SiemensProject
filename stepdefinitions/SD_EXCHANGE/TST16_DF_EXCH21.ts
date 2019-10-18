import {
	browser,
	protractor
} from "protractor";
import {
	loginPageObject
} from "../../pages/loginPage";
import {
	HomePageObject
} from "../../pages/HomePage";
import {
	AppointmentListPageObject
} from "../../pages/AppointmentListPage";
import {
	DoorStepPageObject
} from "../../pages/DoorStepPage";
import {
	ElectricPageObject
} from "../../pages/ElectricPage";
import {
	GASPageObject
} from "../../pages/GASPage";
import {
	JobCompletionPageObject
} from "../../pages/JobCompletionPage";
import {
	config
} from "../../config/config";
import {
	Utility
} from "../../support/utility";
import { RiskAssessmentPageObject } from "../../pages/RiskAssessmentPage";
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
const applist: AppointmentListPageObject = new AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: ElectricPageObject = new ElectricPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const exchnge21Complete: JobCompletionPageObject = new JobCompletionPageObject();
const risk: RiskAssessmentPageObject = new RiskAssessmentPageObject();



Given('the ExTwOne Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium_low);
});

When('I pass ExTwOne {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(utility.very_low);
});

Then('I click ExTwOne Login button', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});

Then('I should see the ExTwOne Appointment List', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the ExTwOne Appointment List window', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on ExTwOne select button', async function () {
	await home.clickCorrectSelectLink('Exchange21');
	//await home.clickOnTheExchange21SelectLink();
	//await home.clickOnTheContinueLink();
	await utility.wait(utility.medium_low);
});

Then('I should see ExTwOne Work Order window', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the ExTwOne {string} window', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see ExTwOne Call Forward or Arrive Button', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on ExTwOne CALL FORWARD button', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see ExTwOne page contect display', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the ExTwOne CUSTOMER CONTACT NUMBER', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see ExTwOne Contact made field', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the ExTwOne {string} page', async function (string) {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the ExTwOne fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on ExTwOne DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see ExTwOne Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the ExTwOne correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the ExTwOne correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the ExTwOne correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('ExTwOne {string} details', async function (string) {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on ExTwOne OK button', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ExTwOne ARRIVE button', async function () {
	await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see ExTwOne DOORSTEP PROTOCOL tab activated', async function () {
	await utility.wait(utility.medium_low);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ExTwOne ARRIVE button', async function () {
	await applist.clickArriveBtn();
});

Then('I should see ExTwOne Arrival Time details', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(utility.medium_low);
	// await applist.continueLink.click();
	await utility.wait(utility.medium_low);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see ExTwOne BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the ExTwOne BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the ExTwOne DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on ExTwOne ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see ExTwOne RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see ExTwOne INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the ExTwOne INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the ExTwOne initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see ExTwOne INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the ExTwOne INFO window with the text', async function () {
	//await riskassess.infoOKButton.isDisplayed();
	//await risk.INFOOKClick();
	//await riskassess.performanceRiskNextBtn.click();
	await utility.wait(utility.medium);
	if (riskassess.NeedtoWorkYES.isDisplayed()) {
		var element = riskassess.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(utility.medium_low);
	}
});


Then('I should see ExTwOne RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the ExTwOne RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the ExTwOne RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on ExTwOne CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on ExTwOne NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see ExTwOne CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the ExTwOne CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

When('I click on ExTwOne CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess.capturephotoMeterInstall.click();
});

Then('I should see ExTwOne INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the ExTwOne INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the ExTwOne INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on ExTwOne CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the ExTwOne Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Given('the Suitable for ExTwOne Smart Installation section', async function () {
	await riskassess.verifysuitableforSmartMeterInstallation();
});

When('I click on Is ExTwOne Site Suitable for Smart Installation? button', async function () {
	await riskassess.suitableforSmartMeterInstallation();
});

When('I click on ExTwOne Equipment Reposition Required?', async function () {
	await riskassess.equipmentRepositionReq();
});

When('I enter ExTwOne Additional Notes for Smart installation Check', async function () {
	await riskassess.enterNotesForMeteInstallation();
});


When('I click on ExTwOne smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Then('I should see ExTwOne INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the ExTwOne INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the ExTwOne METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on ExTwOne SUBMIT button', async function () {
	await riskassess.meterCutOutnextSection();
});

Then('I should see ExTwOne CURRENT METER DETAILS section', async function () {
	await riskassess.verifyCurrentMeterDetails();
});

Given('the Check the ExTwOne current meter detailssection', async function () {
	await riskassess.verifyCurrentMeterDetails();
});


When('I fill the ExTwOne current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see the ExTwOne REMOVE tab activated', async function () {
	await riskassess.removeTabdisplayed();
});

Given('the ExTwOne REMOVE METER section', async function () {
	await riskassess.removeTabdisplayed();
});

When('I fill the ExTwOne REMOVE METER fields with the values', async function () {
	await riskassess.fillRemoveMeterDetails();
});


Then('I should see ExTwOne REMOVE ASSET section', async function () {
	await riskassess.removeAssetTextDisplayed();
});

Given('the ExTwOne REMOVE ASSET section', async function () {
	await riskassess.removeAssetTextDisplayed();
});


When('I fill the ExTwOne REMOVE ASSET field with the values', async function () {
	await riskassess.fillremoveAssetDetails();
});


When('I click on ExTwOne OK button in updated Popup notification', async function () {
	await riskassess.OKButton();
});


Then('I should see ExTwOne INSTALL COMMS HUB section', async function () {
	await riskassess.CommHubDisplayed();
});
Given('the  ExTwOne Comms Hub details section', async function () {
	await riskassess.CommHubDisplayed();
});


When('I fill the ExTwOne Comms Hub fields with values', async function () {
	await riskassess.fillCommsHubDetails(4);
});


Then('I should see ExTwOne NEW METER section', async function () {
	await riskassess.newMeterDetailsDisplayed();
});

Given('the  ExTwOne New Meter details section', async function () {
	await riskassess.newMeterDetailsDisplayed();
});


When('I fill the ExTwOne New Meter details fields with values', async function () {
	await riskassess.fillNewMeterDetails(4);
});


Then('I should see ExTwOne ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the the ExTwOne ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the ExTwOne ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Given('Initial Meter Reading of ExTwOne new meter depending on the number of Registers and dials section', async function () {
	await riskassess.initialMEterREadingTxtDisplayed();
});

When('I fill the ExTwOne Initial Meter Reading of new meter details fields with values', async function () {
	await riskassess.fillInitialElecMeterReading();
});

Then('I should see ExTwOne Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Given('Commission Bind the ExTwOne Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});


When('I fill the ExTwOne Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails();
});

Then('I should see ExTwOne Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


Given('Perform ExTwOne Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the ExTwOne Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});


Then('I should see ExTwOne Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

Given('Perform ExTwOne DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});


When('I fill the ExTwOne Perform DCC Message Creation for EICOM details fields with values', async function () {
	await riskassess.eicomMessage();
});


Then('I should see ExTwOne Initial Risk Assessment for GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the ExTwOne RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});


When('I fill the ExTwOne RISK ASSESSMENT - GAS fields with the values', async function () {
	await riskassessGAS.fillRiskAssessGas();
});


Then('I should see ExTwOne Suitability for Smart Meter Installation section', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


Given('the ExTwOne Suitability for Smart Meter Installation section', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


When('I fill the ExTwOne Suitability for Smart Meter Installation fields with the values', async function () {
	await riskassessGAS.fillSuitablityForSmartInstallation();
});


Then('I should see ExTwOne Capture Photo of GAS Installation section', async function () {
	await riskassessGAS.captureInitialPhotoTxt();
	await riskassessGAS.captureInitialPhotogasbtn.click();
	await utility.wait(utility.very_low);
});

Given('the ExTwOne Pre Installation Gas Tightness section', async function () {
	await riskassessGAS.preInstallationGasTTxt();
});

When('I fill the ExTwOne Pre Installation Gas Tightness fields with the values', async function () {
	await riskassessGAS.preInstallationGasT();
});

Then('I should see ExTwOne Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});

Then('I should see ExTwOne New Regulator section', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});

When('I fill the ExTwOne New Meter details fields with values Gas', async function () {
	await riskassessGAS.fillNewMeterDetailsGAS(3);
});

Given('the ExTwOne New Regulator section', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});

When('I fill the ExTwOne New Regulator fields with values', async function () {
  await riskassessGAS.fillMeterRegulatorDetailsGAS(2);
});


Then('I should see ExTwOne Gas Initial Meter Reading section', async function () {
  await riskassessGAS.gasInitialMeterTxtDisplay();
});

Given('the Gas ExTwOne Initial Meter Reading section', async function () {
  await riskassessGAS.gasInitialMeterTxtDisplay();
});

When('I fill the ExTwOne Gas Initial Meter Reading details fields with values', async function () {
  await riskassessGAS.fillGasInitialMeterREading();
});


Then('I should see ExTwOne Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
});

 Given('the Gas ExTwOne Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
 });


When('I fill the ExTwOne Gas Install Kit section fields with values', async function () {
  await riskassessGAS.fillGasInstallKitDetails();
 });


 Then('I should see ExTwOne Perform Post Installation GAS Checks section', async function () {
  await riskassessGAS.GasPostInstallationTxt();
 });

 Given('the ExTwOne Post Installation GAS section', async function () {
  await riskassessGAS.GasPostInstallationTxt();
});

When('I fill the ExTwOne Post Installation GAS section fields with values', async function () {
  await riskassessGAS.fillPostInstallationEx21Details();
});


Then('I should see ExTwOne GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});

Given('the ExTwOne GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});


When('I fill the ExTwOne GICOM Message section fields with values', async function () {
  await riskassessGAS.filllGiComSection();
});


Then('I should see ExTwOne Gas Appliance Safety Checks section', async function () {
  await riskassessGAS.gasSafetyDisplay();
});

Given('the ExTwOne Gas Appliance Safety Checks section', async function () {
  await riskassessGAS.gasSafetyDisplay();
});


When('I fill the ExTwOne Gas Appliance Safety Checks section fields with values and Submit', async function () {
  await riskassessGAS.fillGasSafety();
});


Then('I should see ExTwOne SMETS PPMID section', async function () {
  await exchnge21Complete.PPMIDSectiondispaly();
  
});

Given('the ExTwOne SMETS PPMID section', async function () {
  await exchnge21Complete.PPMIDSectiondispaly();
});


When('I fill the ExTwOne SMETS PPMID section fields with values',async function () {
  await exchnge21Complete.fillPPMIDSection(2);
});


Then('I should see ExTwOne SMETS XIPMD section', async function () {
  await exchnge21Complete.XIPMDSectiondispaly();
});

Given('the ExTwOne SMETS XIPMD section', async function () {
  await exchnge21Complete.XIPMDSectiondispaly();
});


When('I fill the ExTwOne SMETS XIPMD section fields with values',async function () {
  await exchnge21Complete.fillXIPMDSection();
});


Then('I should see Check ExTwOne Binding and commissioning of PPMID section',async function () {
  await exchnge21Complete.DeviceBindingSectiondispaly();

});


Given('the ExTwOne Binding and commissioning of PPMID section', async function () {
  await exchnge21Complete.DeviceBindingSectiondispaly();
});


When('I fill the ExTwOne Binding and commissioning of PPMID fields with values', async function () {
  await exchnge21Complete.fillDeviceBindingSection();
});


Then('I should see ExTwOne configuration of all meters installed section', async function () {
  await exchnge21Complete.configAllmeterDisplay();
});


Given('the ExTwOne configuration of all meters installed  section',async function () {
  await exchnge21Complete.configAllmeterDisplay();
});



When('I fill the ExTwOne configuration of all meters installed  fields with values',async function () {
  await exchnge21Complete.fillConfigAllmeterInstall16();
  
});


Then('I should see ExTwOne Energy Efficiency information section',async function () {
  await exchnge21Complete.EEInfoDisplay();
});

Given('the ExTwOne Energy Efficiency information  section', async function () {
  await exchnge21Complete.EEInfoDisplay();
});


When('I fill the ExTwOne Energy Efficiency information fields with values',async function () {
  await exchnge21Complete.fillfield55duelenergyeff();
});


Then('I should see ExTwOne Perform Smart Meter Education and Demonstration section', async function () {
  await exchnge21Complete.smartEducationDisplay();
  
});


Given('the Perform ExTwOne Smart Meter Education and Demonstration section', async function () {
  await exchnge21Complete.smartEducationDisplay();
});


When('I fill the Perform ExTwOne Smart Meter Education and Demonstration  fields with values', async function () {
  await exchnge21Complete.fillfield55duelsmartedu();
});


Then('I should see ExTwOne Summary of Job and receive Customer Signature section',async function () {
  await exchnge21Complete.summaryDisplay();
});

Given('the ExTwOne Summary of Job and receive Customer Signature section', async function () {
  await exchnge21Complete.summaryDisplay();
});


When('I fill the ExTwOne Summary of Job and receive Customer Signaturefields with values', async function () {
  await exchnge21Complete.fillAndPrintSummaryContent();
});


Then('I should see ExTwOne Submit button to complete the job section',async function () {
	await exchnge21Complete.FinalSubmission();
});


