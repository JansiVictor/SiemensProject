import {
	browser,
	protractor
} from "protractor";
import {
	loginPageObject
} from "../pages/loginPage";
import {
	SFENMEX16homePageObject
} from "../pages/SFENMEX16homePage";
import {
	SFENMEX16AppointmentListPageObject
} from "../pages/SFENMEX16AppointmentListPage";
import {
	DoorStepPageObject
} from "../pages/DoorStepPage";
import {
	RiskAssessmentPageElecObject
} from "../pages/DF17SmartCreditRiskAssessmentPageElec";
import {
	RiskAssessmentforCommsHubPageObject
} from "../pages/DF17SmartCreditRiskAssessmentForCommsHub";
import {
	RiskAssessmentforGASPageObject
} from "../pages/DF17SmartCreditRiskAssessmentForGAS";
import {
	SFENMEX16JobCompletionPageObject
} from "../pages/SFENMEX16JobCompletion";
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
const home: SFENMEX16homePageObject = new SFENMEX16homePageObject();
const applist: SFENMEX16AppointmentListPageObject = new SFENMEX16AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: RiskAssessmentPageElecObject = new RiskAssessmentPageElecObject();
const riskassessGAS: RiskAssessmentforGASPageObject = new RiskAssessmentforGASPageObject();
const riskassessCommHub: RiskAssessmentforCommsHubPageObject = new RiskAssessmentforCommsHubPageObject();
const SFENMEX16Complete: SFENMEX16JobCompletionPageObject = new SFENMEX16JobCompletionPageObject();



Given('the Login Page For SFENMEX16', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass {string} and {string} For SFENMEX16', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});

Then('I click Login button For SFENMEX16', async function () {
	await login.clickLogin();
	await utility.wait(10000);
});

Then('I should see the Appointment List For SFENMEX16', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window For SFENMEX16', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on select button For SFENMEX16', async function () {
	//await applist.continueLinkforEx21.click();
	await home.clickOnTheSelectLink();
});

Then('I should see Work Order window For SFENMEX16', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the {string} window For SFENMEX16', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button For SFENMEX16', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button For SFENMEX16', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display For SFENMEX16', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER For SFENMEX16', async function () {
	await utility.wait(5000);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field For SFENMEX16', async function () {
	await utility.wait(5000);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the SFENMEX16 WorkOrder Page', async function () {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the SFENMEX16 fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on SFENMEX16 DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see SFENMEX16 Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the SFENMEX16 correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the SFENMEX16 correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the SFENMEX16 correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('Appointment details For SFENMEX16', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button For SFENMEX16', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ARRIVE button For SFENMEX16', async function () {
	await utility.wait(10000);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated For SFENMEX16', async function () {
	await utility.wait(5000);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button For SFENMEX16', async function () {
	await applist.clickArriveBtn();
});

Then('I should see Arrival Time details For SFENMEX16', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see SFENMEX16 BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the SFENMEX16 BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the SFENMEX16 DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on SFENMEX16 ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see SFENMEX16 RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see SFENMEX16 INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the SFENMEX16 INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the SFENMEX16 initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see SFENMEX16 INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the SFENMEX16 INFO window with the text', async function () {
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


Then('I should see SFENMEX16 RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the SFENMEX16 RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the SFENMEX16 RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on SFENMEX16 CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on SFENMEX16 NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see SFENMEX16 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the SFENMEX16 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

Then('I should see SFENMEX16 CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
	await riskassessGAS.captureInitialPhotoTxt();
});

Given('the SFENMEX16 CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {

	await riskassessGAS.captureInitialPhotoTxt();

});

When('I click on SFENMEX16 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess.capturephotoMeterInstall.click();
	await utility.wait(5000);
});

When('I click on SFENMEX16 CAPTURE PHOTO OF CURRENT FULL GAS METER INSTALLATION button', async function () {
	await riskassessGAS.capturephotoMeterInstall.click();
});

Then('I should see SFENMEX16 INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the SFENMEX16 INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the SFENMEX16 INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on SFENMEX16 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the SFENMEX16 Socket Found field with the values', async function () {
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


When('I click on SFENMEX16 smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Then('I should see SFENMEX16 INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the SFENMEX16 INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the SFENMEX16 METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SFENMEX16 SUBMIT button', async function () {
	await applist.meterCutOutnextSection();
});

Then('I should see SFENMEX16 CURRENT METER DETAILS section', async function () {
	await riskassess.currentMeterDetailsText.isDisplayed();
});

Given('the Check the SFENMEX16 current meter detailssection', async function () {
	await riskassess.verifyDF17CurrentMeterDetails();
	await utility.wait(10000);
});

When('I fill the SFENMEX16 current COMM meter details fields with the values', async function () {
	await riskassessCommHub.fillCommsHubDetails();
});

Then('the SFENMEX16 current COMM HUB detailssection', async function () {
	await riskassessCommHub.CommHubDisplayed();
});

When('I fill the SFENMEX16 current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see SFENMEX16 CURRENT COMMS HUB DETAILS section', async function () {
	await riskassessCommHub.CommHubDisplayed();
});

Given('the Check the SFENMEX16 current GAS meter detailssection', async function () {
	await riskassessGAS.verifyDF17CurrentMeterDetails();
	await utility.wait(10000);
});


When('I fill the SFENMEX16 current GAS meter details fields with the values', async function () {
	await riskassessGAS.fillCurrentMeterDetails();
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


Then('I should see SFENMEX16 INSTALL COMMS HUB section', async function () {
	await riskassess.CommHubDisplayed();
});
Given('the SFENMEX16 Comms Hub details section', async function () {
	await riskassessCommHub.CommHubDisplayed();
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


Then('I should see SFENMEX16 ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the SFENMEX16 ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the SFENMEX16 ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Given('Initial Meter Reading of new meter depending on the number of Registers and dials section', async function () {
	await riskassess.initialMEterREadingTxtDisplayed();
});

When('I fill the Initial Meter Reading of new meter details fields with values', async function () {
	await riskassess.fillInitialElecMeterReading();
});

Then('I should see SFENMEX16 Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Given('Commission Bind the SFENMEX16 Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});


When('I fill the SFENMEX16 Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails();
});

Then('I should see SFENMEX16 Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


Given('Perform SFENMEX16 Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the SFENMEX16 Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});


Then('I should see SFENMEX16 Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

Given('Perform SFENMEX16 DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});


When('I fill the SFENMEX16 Perform DCC Message Creation for EICOM details fields with values', async function () {
	await riskassess.eicomMessage();
});


Then('I should see SFENMEX16 Initial Risk Assessment for GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the SFENMEX16 RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});


When('I fill the SFENMEX16 RISK ASSESSMENT - GAS fields with the values', async function () {
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


Then('I should see SFENMEX16 Capture Photo of GAS Installation section', async function () {
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

Then('I should see SFENMEX16 Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});

Then('I should see SFENMEX16 CURRENT GAS METER DETAILS section', async function () {
	await riskassessGAS.currentGASMeterDetailsTxtDisplay();
});

Then('I should see New Regulator section', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});

When('I fill the New Meter details fields with values Gas', async function () {
	await riskassessGAS.fillNewMeterDetailsGAS(2);
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


Then('I should see SFENMEX16 GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});

Given('the SFENMEX16 GICOM Message section', async function () {
	await riskassessGAS.gicomSendMessageTxtDisplayed();
  });


When('I fill the SFENMEX16 GICOM Message section fields with values', async function () {
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


Then('I should see SFENMEX16 Install PPMID section', async function () {
  await SFENMEX16Complete.PPMIDSectiondispaly();
  
});

Given('the SFENMEX16 Install PPMID section', async function () {
  await SFENMEX16Complete.PPMIDSectiondispaly();
});


When('I fill the SFENMEX16 Install PPMID section fields with values',async function () {
  await SFENMEX16Complete.fillPPMIDSection(2);

});


Then('I should see SFENMEX16 PPMID Comissioning section', async function () {
  await SFENMEX16Complete.PPMIDCommisioningText.isDisplayed();
});

Given('the SFENMEX16 PPMID Comissioning section', async function () {
  await SFENMEX16Complete.PPMIDCommisioningText.isDisplayed();
});


When('I fill the SFENMEX16 PPMID Comissioning section fields with values',async function () {
  await SFENMEX16Complete.sendPPMIDmessageSection();
});


Then('I should see SFENMEX16 Check Binding and commissioning of PPMID section',async function () {
  await SFENMEX16Complete.DeviceBindingSectiondispaly();

});


Given('the SFENMEX16 Binding and commissioning of PPMID section', async function () {
  await SFENMEX16Complete.DeviceBindingSectiondispaly();
});


When('I fill the SFENMEX16 Binding and commissioning of PPMID fields with values', async function () {
  await SFENMEX16Complete.fillDeviceBindingSection();
});


Then('I should see configuration of all meters installed section', async function () {
  await SFENMEX16Complete.configAllmeterDisplay();
});


Given('the SFENMEX16 Device Binding and Comissioning Section',async function () {
  await SFENMEX16Complete.DeviceBindingSectiondispaly();
});



When('I fill the SFENMEX16 device binding section fields with values',async function () {
  await SFENMEX16Complete.fillDeviceBindingSection();
  
});


Then('I should see SFENMEX16 Energy Efficiency information section',async function () {
  await SFENMEX16Complete.EEInfoDisplay();
});

Given('the SFENMEX16 Energy Efficiency information section', async function () {
  await SFENMEX16Complete.EEInfoDisplay();
});


When('I fill the SFENMEX16 Energy Efficiency information fields with values',async function () {
  await SFENMEX16Complete.fillEEInfo();
});


Then('I should see SFENMEX16 Perform Smart Meter Education and Demonstration section', async function () {
  await SFENMEX16Complete.smartEducationDisplay();
  
});


Given('the SFENMEX16 Perform Smart Meter Education and Demonstration section', async function () {
  await SFENMEX16Complete.smartEducationDisplay();
});


When('I fill the SFENMEX16 Perform Smart Meter Education and Demonstration  fields with values', async function () {
  await SFENMEX16Complete.fillSmartEducationDetails();
});


Then('I should see SFENMEX16 Summary of Job and Smart literature left onsite section',async function () {
  await SFENMEX16Complete.summaryDisplay();
  await SFENMEX16Complete.smartLitLeftOnsiteTxt.isDisplayed();
});

Given('the SFENMEX16 Smart literature left onsite section', async function () {
  await SFENMEX16Complete.smartLitLeftOnsiteTxt.isDisplayed();
});


When('I fill the SFENMEX16 smart literature fields with values', async function () {
  await SFENMEX16Complete.fillAndPrintSummaryContent();
});


Then('I should click SFENMEX16 Submit button to complete the job section',async function () {
	await SFENMEX16Complete.installSubmit();
 
});


Then('I should finally submit SFENMEX16 job',async function () {
	await SFENMEX16Complete.FinalSubmission();
 
});