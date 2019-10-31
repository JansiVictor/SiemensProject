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
const SFGNMEX15Complete: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();
const install: InstallPageObject = new InstallPageObject();


Given('the Login Page For SFENMEX15', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium_low);
});

When('I pass {string} and {string} For SFENMEX15', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(utility.very_low);
});

Then('I click Login button For SFENMEX15', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});

Then('I should see the Appointment List For SFENMEX15', async function () {
	await utility.wait(utility.medium);
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window For SFENMEX15', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on select button For SFENMEX15', async function () {
	//await applist.continueLinkforEx21.click();
	await home.clickCorrectSelectLink('SFGNMEX15');
	await utility.wait(utility.medium);
});

Then('I should see Work Order window For SFENMEX15', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the {string} window For SFENMEX15', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button For SFENMEX15', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button For SFENMEX15', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display For SFENMEX15', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER For SFENMEX15', async function () {
	await utility.wait(utility.medium);
	await expect(await applist.custcontnumberTxt.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field For SFENMEX15', async function () {
	await utility.wait(utility.medium);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the SFENMEX15 WorkOrder Page', async function () {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the SFENMEX15 fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on SFENMEX15 DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see SFENMEX15 Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the SFENMEX15 correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the SFENMEX15 correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the SFENMEX15 correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('Appointment details For SFENMEX15', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button For SFENMEX15', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ARRIVE button For SFENMEX15', async function () {
	await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated For SFENMEX15', async function () {
	await utility.wait(utility.medium);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button For SFENMEX15', async function () {
	await applist.clickArriveBtn();
});

Then('I should see Arrival Time details For SFENMEX15', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(utility.medium);
	// await applist.continueLink.click();
	await utility.wait(utility.medium);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see SFENMEX15 BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the SFENMEX15 BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the SFENMEX15 DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on SFENMEX15 ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see SFENMEX15 RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see SFENMEX15 INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the SFENMEX15 INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the SFENMEX15 initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails_SFENMEX15();
});

Then('I should see SFENMEX15 INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the SFENMEX15 INFO window with the text', async function () {
	await riskassess.infoOKButton.isDisplayed();
	await riskassess.infoOKButton.click();

	//await riskassess.performanceRiskNextBtn.click();


	await utility.wait(utility.medium);
	if (riskassess.NeedtoWorkYES.isDisplayed()) {
		var element = riskassess.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(utility.medium);
	}
});


Then('I should see SFENMEX15 RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the SFENMEX15 RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the SFENMEX15 RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on SFENMEX15 CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on SFENMEX15 NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see SFENMEX15 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the SFENMEX15 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

Then('I should see SFENMEX15 CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
	await riskassessGAS.captureInitialPhotoTxtDF17();
});

Given('the SFENMEX15 CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {

	await riskassessGAS.captureInitialPhotoTxtDF17();

});

When('I click on SFENMEX15 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess1.elecfullmeterInst();
	await utility.wait(utility.medium);
});

When('I click on SFENMEX15 CAPTURE PHOTO OF CURRENT FULL GAS METER INSTALLATION button', async function () {
	await riskassess1.gasfullmeterInst();
	await utility.wait(utility.medium);
});

Then('I should see SFENMEX15 INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the SFENMEX15 INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the SFENMEX15 INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on SFENMEX15 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the SFENMEX15 Socket Found field with the values', async function () {
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


When('I click on SFENMEX15 smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Then('I should see SFENMEX15 INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.verifyMeterAndCutOut();
});

Given('the SFENMEX15 INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the SFENMEX15 METER AND CUT OUT fields with the values', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SFENMEX15 SUBMIT button', async function () {
	await riskassess1.polarityMeterCutoutSubmitFLTY18TRAD();
});

Then('I should see SFENMEX15 CURRENT METER DETAILS section', async function () {
	await riskassess.currentMeterDetailsText.isDisplayed();
});

Given('the Check the SFENMEX15 current meter detailssection', async function () {
	await riskassess.verifyDF17CurrentMeterDetails();
	await utility.wait(utility.medium);
});

When('I fill the SFENMEX15 current COMM meter details fields with the values', async function () {
	await riskassess.fillCommsHubDetails_DF17SmartCredit();
});

Then('the SFENMEX15 current COMM HUB detailssection', async function () {
	await remove.currentcommsHubdtl();
});

When('I fill the SFENMEX15 current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see SFENMEX15 CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});

Given('the Check the SFENMEX15 current GAS meter detailssection', async function () {
	await riskassessGAS.verifySFENMEX15CurrentMeterDetails();
	await utility.wait(utility.medium);
});


When('I fill the SFENMEX15 current GAS meter details fields with the values', async function () {
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


Then('I should see SFENMEX15 INSTALL COMMS HUB section', async function () {
	await riskassess.CommHubDisplayed();
});
Given('the SFENMEX15 Comms Hub details section', async function () {
	await remove.currentcommsHubdtl();
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


Then('I should see SFENMEX15 ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the SFENMEX15 ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the SFENMEX15 ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Given('Initial Meter Reading of new meter depending on the number of Registers and dials section', async function () {
	await riskassess.initialMEterREadingTxtDisplayed();
});

When('I fill the Initial Meter Reading of new meter details fields with values', async function () {
	await riskassess.fillInitialElecMeterReading();
});

Then('I should see SFENMEX15 Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Given('Commission Bind the SFENMEX15 Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});


When('I fill the SFENMEX15 Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails();
});

Then('I should see SFENMEX15 Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


Given('Perform SFENMEX15 Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the SFENMEX15 Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});


Then('I should see SFENMEX15 Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

Given('Perform SFENMEX15 DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});


When('I fill the SFENMEX15 Perform DCC Message Creation for EICOM details fields with values', async function () {
	await riskassess.eicomMessage();
});


Then('I should see SFENMEX15 Initial Risk Assessment for GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the SFENMEX15 RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});


When('I fill the SFENMEX15 RISK ASSESSMENT - GAS fields with the values', async function () {
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


Then('I should see SFENMEX15 Capture Photo of GAS Installation section', async function () {
	await riskassessGAS.captureInitialPhotoTxt();
	await riskassessGAS.captureInitialPhotogasbtn.click();
	await utility.wait(utility.very_low);
});

Given('the Pre Installation Gas Tightness section', async function () {
	await riskassessGAS.preInstallationGasTTxt();
});

When('I fill the Pre Installation Gas Tightness fields with the values', async function () {
	await riskassessGAS.preInstallationGasT();
});

Then('I should see SFENMEX15 Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});

Then('I should see SFENMEX15 CURRENT GAS METER DETAILS section', async function () {
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
  await riskassessGAS.fillMeterRegulatorDetailsGAS(2);
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


Then('I should see SFENMEX15 Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
});

 Given('the SFENMEX15 Gas Install Kit section', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
 });


When('I fill the SFENMEX15 Gas Install Kit section fields with values', async function () {
  await riskassessGAS.fillGasInstallKitDetails_NMEX15();
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


Then('I should see SFENMEX15 GICOM Message section', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});

Given('the SFENMEX15 GICOM Message section', async function () {
	await riskassessGAS.gicomSendMessageTxtDisplayed();
  });


When('I fill the SFENMEX15 GICOM Message section fields with values', async function () {
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


Then('I should see SFENMEX15 Install PPMID section', async function () {
  await SFGNMEX15Complete.PPMIDSectiondispalyDF17();
  
});

Given('the SFENMEX15 Install PPMID section', async function () {
  await SFGNMEX15Complete.PPMIDSectiondispalyDF17();
});


When('I fill the SFENMEX15 Install PPMID section fields with values',async function () {
  await SFGNMEX15Complete.fillPPMIDSectionDF17(2);

});


Then('I should see SFENMEX15 PPMID Comissioning section', async function () {
  await SFGNMEX15Complete.PPMIDCommisioningText.isDisplayed();
});

Given('the SFENMEX15 PPMID Comissioning section', async function () {
  await SFGNMEX15Complete.PPMIDCommisioningText.isDisplayed();
});


When('I fill the SFENMEX15 PPMID Comissioning section fields with values',async function () {
  await SFGNMEX15Complete.sendPPMIDmessageSection();
});


Then('I should see SFENMEX15 Check Binding and commissioning of PPMID section',async function () {
  await SFGNMEX15Complete.DeviceBindingSectiondispaly();

});


Given('the SFENMEX15 Binding and commissioning of PPMID section', async function () {
  await SFGNMEX15Complete.DeviceBindingSectiondispaly();
});


When('I fill the SFENMEX15 Binding and commissioning of PPMID fields with values', async function () {
  await SFGNMEX15Complete.fillDeviceBindingSection();
});


Then('I should see configuration of all meters installed section', async function () {
  await SFGNMEX15Complete.configAllmeterDisplay();
});


Given('the SFENMEX15 Device Binding and Comissioning Section',async function () {
  await SFGNMEX15Complete.DeviceBindingSectiondispaly();
});



When('I fill the SFENMEX15 device binding section fields with values',async function () {
  await SFGNMEX15Complete.fillDeviceBindingSection_SFENMEX15();
  
});


Then('I should see SFENMEX15 Energy Efficiency information section',async function () {
  await SFGNMEX15Complete.EEInfoDisplay();
});

Given('the SFENMEX15 Energy Efficiency information section', async function () {
  await SFGNMEX15Complete.EEInfoDisplay();
});


When('I fill the SFENMEX15 Energy Efficiency information fields with values',async function () {
  await SFGNMEX15Complete.fillEEInfo();
});


Then('I should see SFENMEX15 Perform Smart Meter Education and Demonstration section', async function () {
  await SFGNMEX15Complete.smartEducationDisplay();
  
});


Given('the SFENMEX15 Perform Smart Meter Education and Demonstration section', async function () {
  await SFGNMEX15Complete.smartEducationDisplay();
});


When('I fill the SFENMEX15 Perform Smart Meter Education and Demonstration  fields with values', async function () {
  await SFGNMEX15Complete.fillSmartEducationDetails();
});


Then('I should see SFENMEX15 Summary of Job and Smart literature left onsite section',async function () {
  await SFGNMEX15Complete.summaryDisplay();
  await SFGNMEX15Complete.smartLitLeftOnsiteTxt.isDisplayed();
});

Given('the SFENMEX15 Smart literature left onsite section', async function () {
  await SFGNMEX15Complete.smartLitLeftOnsiteTxt.isDisplayed();
});


When('I fill the SFENMEX15 smart literature fields with values', async function () {
  await SFGNMEX15Complete.fillAndPrintSummaryContent();
});


Then('I should click SFENMEX15 Submit button to complete the job section',async function () {
	await SFGNMEX15Complete.installSubmit();
 
});


Then('I should finally submit SFENMEX15 job',async function () {
	await SFGNMEX15Complete.FinalSubmission1();
 
});