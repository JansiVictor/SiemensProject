import {
	browser,
	protractor
} from "protractor";
import {
	loginPageObject
} from "../pages/loginPage";
import {
	ExchangehomePageObject
} from "../pages/ExchangehomePage";
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
	Exchange21JobCompletionPageObject
} from "../pages/Exchange21JobCompletion";
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
const home: ExchangehomePageObject = new ExchangehomePageObject();
const applist: FLTY19AppointmentListPageObject = new FLTY19AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: RiskAssessmentPageElecObject = new RiskAssessmentPageElecObject();
const riskassessGAS: RiskAssessmentforGASPageObject = new RiskAssessmentforGASPageObject();
const exchnge21Complete: Exchange21JobCompletionPageObject = new Exchange21JobCompletionPageObject();

Given('the ExTwnty Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass ExTwnty {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});

Then('I click ExTwnty Login button', async function () {
	await login.clickLogin();
	await utility.wait(10000);
});

Then('I should see the ExchangeTwnty Appointment List', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the ExchangeTwnty Appointment List window', async function () {
    await home.verifyAppointmentListPage();
  });


  When('I click on ExchangeTwnty select button', async function () {
 await home.clickOnTheExchange20SelectLink();
 await utility.wait(5000);
  });


  Then('I should see ExchangeTwnty Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
  });

  Given('the ExchangeTwnty {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
  });

  When('i see ExchangeTwnty Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
  });


  Then('I click on ExchangeTwnty CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
  });

  Then('I should see ExchangeTwnty page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
  });

  Then('I should see the ExchangeTwnty CUSTOMER CONTACT NUMBER', async function () {
    await utility.wait(5000);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

  });

  Then('I should see ExchangeTwnty Contact made field', async function () {
    await utility.wait(5000);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
  });

  Given('the ExchangeTwnty Work Order page', async function () {
    await applist.verifyWorkOrderWindowText();
  });

  When('I fill the ExchangeTwnty fields with the value', async function () {
    // await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
  });


  When('I click on ExchangeTwnty DEPART button', async function () {
    await applist.clickDepartBtn();
  });

  Then('I should see ExchangeTwnty Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
  });

  Then('I should see the ExchangeTwnty correct MPAN details', async function () {
    await applist.mpanDetails();
  });


  Then('I should see the ExchangeTwnty correct Customer Name details', async function () {
    await applist.customerNameDetails();
  });


  Then('I should see the ExchangeTwnty correct PostCode details', async function () {
    await applist.postCodeDetails();
  });

  Given('ExchangeTwnty {string} details', async function (string) {
    await applist.verifyDepartForAppointmentWindow();
  });

  When('I click on ExchangeTwnty OK button', async function () {
    await applist.mprnOKbtn();
  });

  When('I should see ExchangeTwnty ARRIVE button', async function () {
    await utility.wait(10000);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
  });

  Then('I should see ExchangeTwnty DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(5000);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
  });

//   Given('the ExchangeTwnty {string} page', async function (string) {
//    
//   });

  When('I click on ExchangeTwnty ARRIVE button', async function () {
    await applist.clickArriveBtn();
  });

  Then('I should see ExchangeTwnty Arrival Time details', async function () {
   //comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
  });

  Then('I should see ExchangeTwnty BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
  });

  Given('the ExchangeTwnty BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
  });

  When('I fill the ExchangeTwnty DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
  });

  When('I click on ExchangeTwnty ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
  });

  Then('I should see ExchangeTwnty RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
  });

  Then('I should see ExchangeTwnty INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
  });

  Given('the ExchangeTwnty INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
  });

  When('I fill the ExchangeTwnty initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
  });

  Then('I should see ExchangeTwnty INFO window', async function () {
    await riskassess.infoTextPopUp();
  });

  Given('the ExchangeTwnty INFO window with the text', async function () {
	await riskassess.infoOKButton.click();
	//await riskassess.performanceRiskNextBtn.click();
	await utility.wait(10000);
	if (riskassess.NeedtoWorkYES.isDisplayed()) {
		var element = riskassess.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(5000);
	}
  });

  Then('I should see ExchangeTwnty RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
  });

  Given('the ExchangeTwnty RISK ASSESSMENT - ELEC section', async function () {
    await riskassess.verifyriskElecText();
  });

  When('I fill the ExchangeTwnty RISK ASSESSMENT - ELEC fields with the values',async  function () {
    await riskassess.fillRiskAssesmentElecFields();
  });

  When('I click on ExchangeTwnty CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
    await riskassess.capturePhotoBtnDisplayed();
  });

  When('I click on ExchangeTwnty NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
  });

  Then('I should see ExchangeTwnty CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassess.electInstallationSection();
  });

  Given('the Suitable for ExchangeTwnty Smart Installation section', async function () {
    await riskassess.verifysuitableforSmartMeterInstallation();
  });

  When('I click on ExchangeTwnty Is Site Suitable for Smart Installation? button',async  function () {
    await riskassess.suitableforSmartMeterInstallation();
  });

  When('I click on ExchangeTwnty Equipment Reposition Required?', async function () {
    await riskassess.equipmentRepositionReq();
  });

  When('I enter ExchangeTwnty Additional Notes for Smart installation Check',async  function () {
    await riskassess.enterNotesForMeteInstallation();
  });


  When('I click on ExchangeTwnty smart installation NEXT SECTION button', async function () {
    await riskassess.clickSmartInstallationNextBtn();
  });

  Given('the ExchangeTwnty CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassess.electInstallationSection();
  });

  When('I click on ExchangeTwnty CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {            // Write code here that turns the phrase above into concrete actions
    await riskassess.capturephotoMeterInstall.click();
  });

  Then('I should see ExchangeTwnty INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
  });

  Given('the ExchangeTwnty INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
  });

  When('I fill the ExchangeTwnty INITIAL POLARITY CHECK field with the values', async function () {
    await riskassess.fillthePolarityCheckMartinDale();
  });

  When('I click on ExchangeTwnty CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function ()
{
    await riskassess.verifyCapturepreInstallation();   
  });

  When('I fill the ExchangeTwnty Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();
  });

  Then('I should see ExchangeTwnty INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
  });

  Given('the ExchangeTwnty INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
  });

  When('I fill the ExchangeTwnty METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
  });

  When('I click on ExchangeTwnty SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
  });

  Then('I should see ExchangeTwnty CURRENT METER DETAILS section', async function () {
    await riskassessGAS.currentMeterDetailsTxtDisplay();
  });

  Given('the Check the ExchangeTwnty current meter detailssection', async function () {
    await riskassessGAS.currentMeterDetailsTxtDisplay();
  });

  When('I fill the ExchangeTwnty current meter details fields with the values', async function () {
    await riskassess.fillCurrentMeterDetails();
  });

  Then('I should see the ExchangeTwnty REMOVE tab activated', async function () {
    await riskassess.removeTabdisplayed();
  });

  Given('the ExchangeTwnty REMOVE METER section', async function () {
    await riskassess.removeTabdisplayed();
  });

  When('I fill the ExchangeTwnty REMOVE METER fields with the values', async function () {
    await riskassess.fillRemoveMeterDetails();
  });

  Then('I should see ExchangeTwnty REMOVE ASSET section', async function () {
    await riskassess.removeAssetTextDisplayed();
  });

  Given('the ExchangeTwnty REMOVE ASSET section', async function () {
    await riskassess.removeAssetTextDisplayed();
  });

  When('I fill the ExchangeTwnty REMOVE ASSET field with the values', async function () {
    await riskassess.fillremoveAssetDetails();
  });

  When('I click on ExchangeTwnty OK button in updated Popup notification', async function () {
    await riskassess.OKButton();
  });

  Then('I should see ExchangeTwnty INSTALL COMMS HUB section', async function () {
    await riskassess.CommHubDisplayed();
  });

  Given('the ExchangeTwnty Comms Hub details section', async function () {
    await riskassess.CommHubDisplayed();
  });

  When('I fill the ExchangeTwnty Comms Hub fields with values', async function () {
    await riskassess.fillCommsHubDetails(4);
  });

  Then('I should see ExchangeTwnty NEW METER section', async function () {
    await riskassess.newMeterDetailsDisplayed();
  });

  Given('the  ExchangeTwnty New Meter details section', async function () {
    await riskassess.newMeterDetailsDisplayed();
  });

  When('I fill the ExchangeTwnty New Meter details fields with values', async function () {
    await riskassess.fillNewMeterDetails(4);
  });

  Then('I should see ExchangeTwnty ADDITIONAL ELECTRICITY CHECKS section', async function () {
    await riskassess.additionalElecCheckDisplayed();
  });

  Given('the the ExchangeTwnty ADDITIONAL ELECTRICITY CHECKS details section', async function () {
    await riskassess.additionalElecCheckDisplayed();
  });

  When('I fill the ExchangeTwnty ADDITIONAL ELECTRICITY CHECKS details fields with values', async  function ()
{
    await riskassess.fillAdditionalElecCheckDetails();
  });

  Given('Initial Meter Reading of ExchangeTwnty new meter depending on the number of Registers and dials section', async function () {
    await riskassess.initialMEterREadingTxtDisplayed();
  });

  When('I fill the Initial Meter Reading of ExchangeTwnty new meter details fields with values', async function () {
    await riskassess.fillInitialElecMeterReading();
  });

  Then('I should see ExchangeTwnty Commission Bind the Comms hub to the WAN section', async function () {
    await riskassess.commisioningTxtDisplayed();
  });

  Given('Commission Bind the ExchangeTwnty Comms hub to the WAN section', async function () {
    await riskassess.commisioningTxtDisplayed();
  });

  When('I fill the ExchangeTwnty Commission Bind the Comms hub to the WAN details fields with values', async function () {
    await riskassess.fillCommissioningDetails();
  });

  Then('I should see ExchangeTwnty Perform Post Installation Checks section', async function () {
    await riskassess.postInstallationCheckDisplayed();
  });

  Given('Perform ExchangeTwnty Post Installation Checks section', async function () {
    await riskassess.postInstallationCheckDisplayed();
  });

  When('I fill the ExchangeTwnty Perform Post Installation Checks details fields with values', async function () {
    await riskassess.fillPostInstallationCheck();
  });

  Then('I should see ExchangeTwnty Perform DCC Message Creation for EICOM section', async  function () {
    await riskassess.electricInstalDisplayed();
  });

  Given('Perform ExchangeTwnty DCC Message Creation for EICOM section', async function () {
    await riskassess.electricInstalDisplayed();
  });

  When('I fill the Perform ExchangeTwnty DCC Message Creation for EICOM details fields with values', async function () {
    await riskassess.eicomMessage();
  });

  Then('I should see ExchangeTwnty SMETS PPMID section', async function () {
    await exchnge21Complete.PPMIDSectiondispaly();
  });

  Given('the ExchangeTwnty SMETS PPMID section', async function () {
    await exchnge21Complete.PPMIDSectiondispaly();
  });


  When('I fill the ExchangeTwnty SMETS PPMID section fields with values', async function () {
    await exchnge21Complete.fillPPMIDSection(2);
    await exchnge21Complete.fillXIPMDSection();
  });

  Then('I should see ExchangeTwnty Check Binding and commissioning of PPMID section', async function () {
    await exchnge21Complete.DeviceBindingSectiondispaly();
  });

  Given('the ExchangeTwnty Binding and commissioning of PPMID section',async function () {
    await exchnge21Complete.DeviceBindingSectiondispaly();
  });

  When('I fill the ExchangeTwnty Binding and commissioning of PPMID fields with values',async  function () {
    await exchnge21Complete.fillEx20DeviceBindingSection();
  });


  Then('I should see ExchangeTwnty configuration of all meters installed section', async function () {
    await exchnge21Complete.configAllmeterDisplay();
  });

  Given('the ExchangeTwnty configuration of all meters installed  section', async function () {
    await exchnge21Complete.configAllmeterDisplay();
  });

  When('I fill the ExchangeTwnty configuration of all meters installed  fields with values', async function () {
    await exchnge21Complete.fillEx20ConfigAllmeter();
  });


  Then('I should see ExchangeTwnty Energy Efficiency information section', async function () {
    await exchnge21Complete.EEInfoDisplay();
  });

  Given('the ExchangeTwnty Energy Efficiency information  section', async function () {
    await exchnge21Complete.EEInfoDisplay();
  });

  When('I fill the ExchangeTwnty Energy Efficiency information fields with values', async function () {
    await exchnge21Complete.fillEEInfo();
  });

  Then('I should see Perform ExchangeTwnty Smart Meter Education and Demonstration section', async function () {
    await exchnge21Complete.smartEducationDisplay();
  });

  Given('the Perform ExchangeTwnty Smart Meter Education and Demonstration section',async  function () {
    await exchnge21Complete.smartEducationDisplay();
  });

  When('I fill the Perform ExchangeTwnty Smart Meter Education and Demonstration  fields with values', async function () {
    await exchnge21Complete.fillSmartEducationDetails();
  });

  Then('I should see ExchangeTwnty Summary of Job and receive Customer Signature section', async function () {
    await exchnge21Complete.summaryDisplay();
  });

  Given('the ExchangeTwnty Summary of Job and receive Customer Signature section', async function () {
    await exchnge21Complete.summaryDisplay();
  });

  When('I fill the ExchangeTwnty Summary of Job and receive Customer Signaturefields with values', async function() {
  await exchnge21Complete.fillAndPrintSummaryContent();
  });


  Then('I should see ExchangeTwnty Submit button to complete the job section', async function () {
    await exchnge21Complete.FinalSubmission();
  });



