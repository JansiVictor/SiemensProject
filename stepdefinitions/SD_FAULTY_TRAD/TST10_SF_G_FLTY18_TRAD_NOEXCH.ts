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
	RemovePageObject
} from "../../pages/RemovePage";
import {
	RiskAssessmentPageObject
} from "../../pages/RiskAssessmentPage";
import {
	InstallPageObject
} from "../../pages/InstallPage";
import {
	config
} from "../../config/config";
import {
	Utility
} from "../../support/utility";
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
const riskassess1: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const SFGFLTY18TRADComplete: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();
const install: InstallPageObject = new InstallPageObject();


Given('the Login Page For SFGFLTY18TRAD', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium_low);
});

When('I pass {string} and {string} For SFGFLTY18TRAD', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(utility.very_low);
});

Then('I click Login button For SFGFLTY18TRAD', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});

Then('I should see the Appointment List For SFGFLTY18TRAD', async function () {
	await utility.wait(utility.Avg_low);
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window For SFGFLTY18TRAD', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on select button For SFGFLTY18TRAD', async function () {
	//await applist.continueLinkforEx21.click();
	await home.clickCorrectSelectLink('SFGFLTY18TRAD');
	await utility.wait(utility.medium_low);
});

Then('I should see Work Order window For SFGFLTY18TRAD', async function () {
	await utility.wait(utility.low);
	await applist.verifyWorkOrderWindowText();
});

Given('the {string} window For SFGFLTY18TRAD', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button For SFGFLTY18TRAD', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button For SFGFLTY18TRAD', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display For SFGFLTY18TRAD', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER For SFGFLTY18TRAD', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.custcontnumberTxt.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field For SFGFLTY18TRAD', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Then('I should see SFGFLTY18TRAD DETERMINE FAULT ACTIVITY section', async function () {
	await utility.wait(utility.medium_low);
	await remove.determintfaultActivity();
});

Given('the SFGFLTY18TRAD WorkOrder Page', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the SFGFLTY18TRAD DETERMINE FAULT ACTIVITY section', async function () {
	await remove.determintfaultActivity();
});

When('I fill the SFGFLTY18TRAD fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I fill the SFGFLTY18TRAD determine faulty activity fields with values', async function () {
	await remove.fill14commsdtls();
	await remove.captureevidsuspectedtamp();
	await remove.fill15commsdtls_FLTY18TRAD();
});

When('I click on SFGFLTY18TRAD DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see SFGFLTY18TRAD Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the SFGFLTY18TRAD correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the SFGFLTY18TRAD correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the SFGFLTY18TRAD correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('Appointment details For SFGFLTY18TRAD', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button For SFGFLTY18TRAD', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ARRIVE button For SFGFLTY18TRAD', async function () {
	await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated For SFGFLTY18TRAD', async function () {
	await utility.wait(utility.medium_low);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button For SFGFLTY18TRAD', async function () {
	await applist.clickArriveBtn();
});

Then('I should see Arrival Time details For SFGFLTY18TRAD', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(utility.medium_low);
	// await applist.continueLink.click();
	await utility.wait(utility.medium_low);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see SFGFLTY18TRAD BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the SFGFLTY18TRAD BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the SFGFLTY18TRAD DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on SFGFLTY18TRAD ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see SFGFLTY18TRAD RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see SFGFLTY18TRAD INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the SFGFLTY18TRAD INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the SFGFLTY18TRAD initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails_SFENMEX15();
});

Then('I should see SFGFLTY18TRAD INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the SFGFLTY18TRAD INFO window with the text', async function () {
	await riskassess.infoOKButton.isDisplayed();
	await riskassess.infoOKButton.click();

	//await riskassess.performanceRiskNextBtn.click();


	await utility.wait(utility.medium);
	if (riskassess.NeedtoWorkYES.isDisplayed()) {
		var element = riskassess.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(utility.medium_low);
	}
});


Then('I should see SFGFLTY18TRAD RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the SFGFLTY18TRAD RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the SFGFLTY18TRAD RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on SFGFLTY18TRAD CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await utility.wait(utility.low);
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on SFGFLTY18TRAD NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see SFGFLTY18TRAD CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the SFGFLTY18TRAD CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

Then('I should see SFGFLTY18TRAD CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
	await riskassessGAS.captureInitialPhotoTxtDF17();
});

Given('the SFGFLTY18TRAD CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {

	await riskassessGAS.captureInitialPhotoTxtDF17();

});

When('I click on SFGFLTY18TRAD CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess.capturephotoMeterInstall.click();
	await utility.wait(utility.medium_low);
});

When('I click on SFGFLTY18TRAD CAPTURE PHOTO OF CURRENT FULL GAS METER INSTALLATION button', async function () {
	await riskassessGAS.capturephotoMeterInstall.click();
});

Then('I should see SFGFLTY18TRAD INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the SFGFLTY18TRAD INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the SFGFLTY18TRAD INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on SFGFLTY18TRAD CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the SFGFLTY18TRAD Socket Found field with the values', async function () {
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


When('I click on SFGFLTY18TRAD smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Then('I should see SFGFLTY18TRAD INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.verifyMeterAndCutOut();
});

Given('the SFGFLTY18TRAD INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the SFGFLTY18TRAD METER AND CUT OUT fields with the values', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SFGFLTY18TRAD SUBMIT button', async function () {
	await riskassess1.polarityMeterCutoutSubmitFLTY18TRAD();
});

Then('I should see SFGFLTY18TRAD CURRENT METER DETAILS section', async function () {
	await riskassess.currentMeterDetailsText.isDisplayed();
});

Given('the Check the SFGFLTY18TRAD current meter detailssection', async function () {
	await riskassess.verifyDF17CurrentMeterDetails();
	await utility.wait(utility.medium);
});

When('I fill the SFGFLTY18TRAD current COMM meter details fields with the values', async function () {
	await riskassess.fillCommsHubDetails_DF17SmartCredit();
});

Then('the SFGFLTY18TRAD current COMM HUB detailssection', async function () {
	await riskassess.CommHubDisplayed_DF17SmartCredit();
});

When('I fill the SFGFLTY18TRAD current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see SFGFLTY18TRAD CURRENT COMMS HUB DETAILS section', async function () {
	await riskassess.CommHubDisplayed_DF17SmartCredit();
});

Given('the Check the SFGFLTY18TRAD current GAS meter detailssection', async function () {
	await riskassessGAS.verifySFENMEX15CurrentMeterDetails();
	await utility.wait(utility.medium);
});


When('I fill the SFGFLTY18TRAD current GAS meter details fields with the values', async function () {
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


Then('I should see SFGFLTY18TRAD INSTALL COMMS HUB section', async function () {
	await riskassess.CommHubDisplayed();
});
Given('the SFGFLTY18TRAD Comms Hub details section', async function () {
	await riskassess.CommHubDisplayed_DF17SmartCredit();
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


Then('I should see SFGFLTY18TRAD ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the SFGFLTY18TRAD ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the SFGFLTY18TRAD ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Given('Initial Meter Reading of new meter depending on the number of Registers and dials section', async function () {
	await riskassess.initialMEterREadingTxtDisplayed();
});

When('I fill the Initial Meter Reading of new meter details fields with values', async function () {
	await riskassess.fillInitialElecMeterReading();
});

Then('I should see SFGFLTY18TRAD Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Given('Commission Bind the SFGFLTY18TRAD Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});


When('I fill the SFGFLTY18TRAD Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails();
});

Then('I should see SFGFLTY18TRAD Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


Given('Perform SFGFLTY18TRAD Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the SFGFLTY18TRAD Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});


Then('I should see SFGFLTY18TRAD Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

Given('Perform SFGFLTY18TRAD DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});


When('I fill the SFGFLTY18TRAD Perform DCC Message Creation for EICOM details fields with values', async function () {
	await riskassess.eicomMessage();
});


Then('I should see SFGFLTY18TRAD Initial Risk Assessment for GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the SFGFLTY18TRAD RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});


When('I fill the SFGFLTY18TRAD RISK ASSESSMENT - GAS fields with the values', async function () {
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


Then('I should see SFGFLTY18TRAD Capture Photo of GAS Installation section', async function () {
	await riskassessGAS.captureInitialPhotoTxt();
	await riskassessGAS.captureInitialPhotogasbtn.click();
	await utility.wait(utility.very_low);
});

Given('the Pre Installation Gas Tightness section', async function () {
	await riskassessGAS.preInstallationGasTTxt();
});

Then('I should see SFGFLTY18TRAD current PPMID section', async function () {
	await remove.currentihdppmiddetailtext();
	await utility.wait(utility.very_low);
});

Given('the SFGFLTY18TRAD current PPMID detailssection', async function () {
	await remove.currentihdppmiddetailtext();
});

When('I fill the Pre Installation Gas Tightness fields with the values', async function () {
	await riskassessGAS.preInstallationGasT();
});

When('I fill the SFGFLTY18TRAD current PPMID details fields with the values', async function () {
	await remove.fillcurrentIhdPPMIDdtlsnoExchangeTrade();
});

Then('I should see SFGFLTY18TRAD Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});

Then('I should see SFGFLTY18TRAD CURRENT GAS METER DETAILS section', async function () {
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


Then('I should see SFGFLTY18TRAD Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
});

 Given('the SFGFLTY18TRAD Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
 });


When('I fill the SFGFLTY18TRAD Gas Install Kit section fields with values', async function () {
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


Then('I should see SFGFLTY18TRAD GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});

Given('the SFGFLTY18TRAD GICOM Message section', async function () {
	await riskassessGAS.gicomSendMessageTxtDisplayed();
  });


When('I fill the SFGFLTY18TRAD GICOM Message section fields with values', async function () {
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


Then('I should see SFGFLTY18TRAD Install PPMID section', async function () {
  await SFGFLTY18TRADComplete.PPMIDSectiondispaly();
  
});

Given('the SFGFLTY18TRAD Install PPMID section', async function () {
  await SFGFLTY18TRADComplete.PPMIDSectiondispaly();
});


When('I fill the SFGFLTY18TRAD Install PPMID section fields with values',async function () {
  await SFGFLTY18TRADComplete.fillPPMIDSection(2);

});


Then('I should see SFGFLTY18TRAD PPMID Comissioning section', async function () {
  await SFGFLTY18TRADComplete.PPMIDCommisioningText.isDisplayed();
});

Given('the SFGFLTY18TRAD PPMID Comissioning section', async function () {
  await SFGFLTY18TRADComplete.PPMIDCommisioningText.isDisplayed();
});


When('I fill the SFGFLTY18TRAD PPMID Comissioning section fields with values',async function () {
  await SFGFLTY18TRADComplete.sendPPMIDmessageSection();
});


Then('I should see SFGFLTY18TRAD Check Binding and commissioning of PPMID section',async function () {
  await SFGFLTY18TRADComplete.DeviceBindingSectiondispaly();

});


Given('the SFGFLTY18TRAD Binding and commissioning of PPMID section', async function () {
  await SFGFLTY18TRADComplete.DeviceBindingSectiondispaly();
});


When('I fill the SFGFLTY18TRAD Binding and commissioning of PPMID fields with values', async function () {
  await SFGFLTY18TRADComplete.fillDeviceBindingSection();
});


Then('I should see configuration of all meters installed section', async function () {
  await SFGFLTY18TRADComplete.configAllmeterDisplay();
});


Given('the SFGFLTY18TRAD Device Binding and Comissioning Section',async function () {
  await SFGFLTY18TRADComplete.DeviceBindingSectiondispaly();
});



When('I fill the SFGFLTY18TRAD device binding section fields with values',async function () {
  await SFGFLTY18TRADComplete.fillDeviceBindingSection_SFENMEX15();
  
});


Then('I should see SFGFLTY18TRAD Energy Efficiency information section',async function () {
  await SFGFLTY18TRADComplete.EEInfoDisplay();
});

Given('the SFGFLTY18TRAD Energy Efficiency information section', async function () {
  await SFGFLTY18TRADComplete.EEInfoDisplay();
});


When('I fill the SFGFLTY18TRAD Energy Efficiency information fields with values',async function () {
  await SFGFLTY18TRADComplete.fillEEInfo();
});


Then('I should see SFGFLTY18TRAD Perform Smart Meter Education and Demonstration section', async function () {
  await SFGFLTY18TRADComplete.smartEducationDisplay();
  
});


Given('the SFGFLTY18TRAD Perform Smart Meter Education and Demonstration section', async function () {
  await SFGFLTY18TRADComplete.smartEducationDisplay();
});


When('I fill the SFGFLTY18TRAD Perform Smart Meter Education and Demonstration  fields with values', async function () {
  await SFGFLTY18TRADComplete.fillSmartEducationDetails();
});


Then('I should see SFGFLTY18TRAD Summary of Job section',async function () {
  await SFGFLTY18TRADComplete.summaryDisplay();
});

Given('the SFGFLTY18TRAD Summary of Job section', async function () {
  await SFGFLTY18TRADComplete.summaryDisplay();
});


When('I fill the SFGFLTY18TRAD summary fields with values', async function () {
  await SFGFLTY18TRADComplete.fillAndPrintSummaryContent();
});


Then('I should click SFGFLTY18TRAD Submit button to complete the job section',async function () {
	await SFGFLTY18TRADComplete.installSubmit();
 
});


Then('I should finally submit SFGFLTY18TRAD job',async function () {
	await SFGFLTY18TRADComplete.FinalSubmission1();
 
});