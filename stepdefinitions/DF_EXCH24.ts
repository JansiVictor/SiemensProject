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
	AppointmentListPageObject
} from "../pages/AppointmentListPage";
import {
	DoorStepPageObject
} from "../pages/DoorStepPage";
import {
	ElectricPageObject
} from "../pages/ElectricPage";
import { RemovePageObject 
} from "../pages/RemovePage";
import { InstallPageObject 
} from "../pages/InstallPage";
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
const applist: AppointmentListPageObject = new AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: ElectricPageObject = new ElectricPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject = new InstallPageObject();



Given('the ExchTwFour Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass ExchTwFour {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});

Then('I click ExchTwFour Login button', async function () {
	await login.clickLogin();
	await utility.wait(10000);
});

Then('I should see the ExchTwFour Appointment List', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the ExchTwFour Appointment List window', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on ExchTwFour select button', async function () {
	await home.clickCorrectSelectLink('DFExchange24');
	await utility.wait(5000);
});

Then('I should see ExchTwFour Work Order window', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the ExchTwFour {string} window', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see ExchTwFour Call Forward or Arrive Button', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on ExchTwFour CALL FORWARD button', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page ExchTwFour contect display', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the ExchTwFour CUSTOMER CONTACT NUMBER', async function () {
	await utility.wait(5000);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see ExchTwFour Contact made field', async function () {
	await utility.wait(5000);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the ExchTwFour {string} page', async function (string) {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the ExchTwFour fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on ExchTwFour DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see ExchTwFour Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the ExchTwFour correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the ExchTwFour correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the ExchTwFour correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('ExchTwFour {string} details', async function (string) {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on ExchTwFour MPRNOK button', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ExchTwFour ARRIVE button', async function () {
	await utility.wait(2000);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see ExchTwFour DOORSTEP PROTOCOL tab activated', async function () {
	await utility.wait(3000);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ExchTwFour ARRIVE button', async function () {
	await applist.clickArriveBtn();
});

Then('I should see ExchTwFour Arrival Time details', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see ExchTwFour BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the ExchTwFour BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the ExchTwFour DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on ExchTwFour ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see ExchTwFour RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see ExchTwFour INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the ExchTwFour INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the ExchTwFour initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see ExchTwFour INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the ExchTwFour INFO window with the text', async function () {
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


Then('I should see ExchTwFour RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the ExchTwFour RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the ExchTwFour RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on ExchTwFour CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on ExchTwFour NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see ExchTwFour CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the ExchTwFour CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

When('I click on ExchTwFour CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {

	await riskassess.capturephotoMeterInstall.click();

});

Then('I should see ExchTwFour Capture Photo of GAS Installation section', async function () {
    
	await riskassessGAS.cptureinitialPhotogas.click();

});

Given('the ExchTwFour RISK ASSESSMENT - GAS section', async function () {

	await riskassessGAS.riskAssessmentGASDisplayed();

});

When('I fill the ExchTwFour RISK ASSESSMENT - GAS fields with the values', async function () {
	await riskassessGAS.fillRiskAssessGas();
});

Then('I should see the Suitable for ExchTwFour Smart Installation section', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


Then('I should see ExchTwFour INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the ExchTwFour INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the ExchTwFour INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on ExchTwFour CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the ExchTwFour Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Given('the Suitable for ExchTwFour Smart Installation section', async function () {
	await riskassess.verifysuitableforSmartMeterInstallation();
});

When('I click on Is ExchTwFour Site Suitable for Smart Installation? button', async function () {
	await riskassess.suitableforSmartMeterInstallation();
});

When('I click on ExchTwFour Equipment Reposition Required?', async function () {
	await riskassess.equipmentRepositionReq();
});

When('I enter ExchTwFour Additional Notes for Smart installation Check', async function () {
	await riskassess.enterNotesForMeteInstallation();
});


When('I click on ExchTwFour smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Given('the Suitable for ExchTwFour Smart Installation GAS section', async function () {
	await riskassessGAS.suitableForSmartInstallationGASTxt();
});

When('I fill ExchTwFour Site Suitable for Smart Installation? GAS button', async function () {
	await riskassessGAS.fillSuitablityForGASSmartInstallation();
});

Then('I should see ExchTwFour INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the ExchTwFour INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the ExchTwFour METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on ExchTwFour SUBMIT button', async function () {
	await riskassess.meterCutOutSubmitButton.click();
});

Then('ExchTwFour I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('ExchTwFour the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('ExchTwFour I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('ExchTwFour I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('ExchTwFour I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('ExchTwFour I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('ExchTwFour I fill the field19 with the value19', async function () {
    await remove.fill19preInstdtls();
});
Then('ExchTwFour I should see REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});

/***********CURRENT IHD-PPMID DETAILS section *********/

Given('ExchTwFour the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});
When('ExchTwFour I fill the field010 with the value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});
When('ExchTwFour I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
Then('ExchTwFour I should see the page contect display of current meter details', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('ExchTwFour the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterGasPageContent();
});
When('ExchTwFour I fill the field with the value', async function () {
    await remove.fillcurrentmeterdtlGassec();
});

/*** CURRENT METER DETAILS - Elec */
Given('the ExchTwFour CURRENT METER DETAILS section', async function () {
    await remove.CurrentMeterElec();
});
When('I fill the ExchTwFour field011 with the value Value011', async function () {
  
    await remove.fillcurrentElecmeter();
});
Then('I should see ExchTwFour CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Given('the ExchTwFour CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});

When('I fill the ExchTwFour field013 with the value Value013', async function () {
    await remove.fillcurrenthubdtl(1);
    await remove.capturephotocommsHub();
});


/**** PPMID Removal Successful*/
Given('ExchTwFour the PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('ExchTwFour I click on PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('ExchTwFour I should see CONFIRM IHD-PPMID REMOVAL section', async function () {
    await remove.removeihdPpmid();
});

/******Remove IHD / PPMID */

Given('ExchTwFour the CONFIRM IHD-PPMID REMOVAL section', async function () {
    await remove.removeihdPpmid();
});
When('ExchTwFour I fill the field22 with the value22', async function () {
    await remove.fillRemovePPMID();
});
Then('I should see ExchTwFour SEND MESSAGE IHD PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
/**** SEND MESSAGE IHD / PPMID*/
Given('the ExchTwFour SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
When('I click on ExchTwFour Send Message IHD PPMID button', async function () {
    await remove.clickonSendMessage();
});
Then('I should see ExchTwFour Awaiting Response button', async function () {
    await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('the ExchTwFour Awaiting Response button', async function () {
    await remove.awaitingResponse();
});
When('I wait for ExchTwFour the butn to disappear', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('I should see ExchTwFour PPMID Removal Successful button', async function () {
    await remove.ppmidRemovalbtn();
});
Then('I should see ExchTwFour Request Sent Successfully text message', async function () {
    await remove.sentmesgSuccess();
});


/**** PPMID Removal Successful*/
Given('the ExchTwFour PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('I click on ExchTwFour PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('I should see ExchTwFour CONFIRM IHD PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});

/****CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the ExchTwFour CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});
When('I fill the ExchTwFour field22 with the Value22', async function () {
    await remove.fill22AssetRemoval();
});
Then('I clk ExchTwFour OK button in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonOKBtn();
});
Then('I should see ExchTwFour REMOVE METER section', async function () {
    await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('ExchTwFour the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('ExchTwFour I fill the field23 with the value23', async function () {
    await remove.fill23GasmeterRemoval();
});
Then('ExchTwFour I click on NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('ExchTwFour I should see SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('ExchTwFour the SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});
When('ExchTwFour I click on Send Message GMREM button', async function () {
    await remove.clickOnsendmsgGMREM();
});
Then('ExchTwFour I should see Awaiting Response button in GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('ExchTwFourG the Awaiting Response btn in Send GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});
When('ExchTwFourG I wait for the btn to disappear in GMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('ExchTwFourG I should see Removal Successful button', async function () {
    await remove.removalsuccessfulbtn();
});
Then('ExchTwFourG I should see GMREM Request Sent Successfully txt message', async function () {
    await remove.ReqSentSuccess();
});
Then('ExchTwFourG I should see OK to Remove Asset text message', async function () {
    await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('ExchTwFourG the Removal Successful button is displayed', async function () {
    await remove.removalsuccessfulbtn();
});
When('ExchTwFourG I click on Removal Successful button', async function () {
    await remove.clickonremovalsuccessfulbtn();
});
Then('ExchTwFour I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('ExchTwFour the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('ExchTwFour I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
});
Then('ExchTwFour I click on OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonokGasAssetRemoval();
});
Then('ExchTwFourG I should see REMOVE COMMS HUB window', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE METER - Elec"*/
Given('ExchTwFour the REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});
When('ExchTwFour I fill the field023 with the Value023', async function () {
    await remove.fillElecmeterrem();
});
Then('ExchTwFour I clk remove meter NEXT SECTION button', async function () {
    await remove.clickonnxtBtnofElecmeterRemoval();
});
Then('ExchTwFour I should see SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});

/*****SEND MESSAGE EMREM */

Given('ExchTwFour the SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});
When('ExchTwFour I click on Send Message EMREM button', async function () {
    await remove.clickOnsendmsgEMREM();
});
Then('ExchTwFour I should see Awaiting Response button in EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});

/*******Awaiting Response after EMREM */

Given('ExchTwFour the Awaiting Response btn in Send EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});
When('ExchTwFour I wait for the btn to disappear in EMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('ExchTwFour I should see Removal Successful button', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
Then('ExchTwFour I should see Request Sent Successfully txt message in EMREM', async function () {
    await remove.ElecReqSentSuccess();
});
Then('ExchTwFour I should see OK to Remove Asset text message', async function () {
    await remove.ElecOktoRemoveAsset();
});

/********Removal Successful - Elec */

Given('ExchTwFour the Removal Successful button is displayed', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
When('ExchTwFour I click on Removal Successful button', async function () {
    await remove.clickonElecremovalsuccessfulbtn();
});
Then('ExchTwFour I should see CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('ExchTwFour the CONFIRM ELEC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});
When('ExchTwFour I fill the field024 with the Value024', async function () {
    await remove.fill24ElecAssetRemoval();
});
Then('ExchTwFour Click ok on asset removal', async function () {
    await remove.clickonokElecAssetRemoval();
});
Then('ExchTwFour I should see REMOVE COMMS HUB window', async function () {
    //await remove.clickonsubmitforRemoval();
    await remove.RemoveCommsHubWindow();
});

/*****REMOVE COMMS HUB */

Given('ExchTwFour the REMOVE COMMS HUB section', async function () {
    await remove.RemoveCommsHubWindow();
});
When('ExchTwFour I fill the field027 with the value27', async function () {
    await remove.fill27RmvCommsHub();
});
Then('ExchTwFour I click on NEXT SEC button from Remove Comms Hub', async function () {
    await remove.clickonNxtBtnRmvCommsHub();
});
Then('ExchTwFour I should see CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('ExchTwFour the CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});
When('ExchTwFour I fill the field28 with the value28', async function () {
    await remove.fill28ConfirmremovalCommsHub();
});
Then('ExchTwFourCOM I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
    await remove.clickonokconfrimremovalpopup();
});
Then('ExchTwFour I click on SUBMIT btn from confirm comms hub removal', async function () {
    await remove.clickonsubmitforRemoval();
});
Then('ExchTwFour I should see INSTALL COMMS HUB section', async function () {
    await inst.InstallCommsHubSection();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/

Given('ExchTwFour the INSTALL COMMS HUB sec', async function () {
    //await inst.dummy();
    await inst.InstallCommsHubSection();
});
When('ExchTwFour I fill the Ins comms hub fields and capture photo EVIDENCE', async function () {
    await inst.fillfieldsInstallcommshub(2);
});
Then('ExchTwFour I should see SEND MSG XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});

/****************"SEND MESSAGE XCHUB" */

Given('ExchTwFour the SEND MESSAGE XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});
When('ExchTwFour I click on Send Message XCHUB button', async function () {
    await inst.clicksendmsgXCHUB();
});
Then('ExchTwFour I should see XCHUB Awaiting Response butn', async function () {
    await inst.SeeAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('ExchTwFour the Awaiting Response butn XCHUB', async function () {
    await inst.SeeAwaitingresp();
});
When('ExchTwFour I wait for the butn to disappear XCHUB', async function () {
    await inst.waitforthebuttontoDisappear();
});
Then('ExchTwFour I should see Removal Successful butn XCHUB', async function () {
    await inst.Remosuccessful();
});
Then('ExchTwFour I should see Request Sent Successfully text msg XCHUB', async function () {
    await inst.reqsentMsg();
});
Then('ExchTwFour I should see Whitelist transfer completed check LED indication is correct text message', async function () {
    await inst.LEDindication();
});

/**********"Removal Successful" */

Given('ExchTwFour the Removal Successful butn is displayed', async function () {
    await inst.Remsuccessdisplayed();
});
When('ExchTwFour I click on Removal Successful butn', async function () {
    await inst.clickonremsuccess();
});
Then('ExchTwFour I should see NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});

/**********"New Meter Details" */

Given('ExchTwFour the NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});
When('ExchTwFour I fill the fields and values for New meter details', async function () {
    await inst.fillDuelNewMeterDetails(2);
});
Then('ExchTwFour I should see NEW Meter section', async function () {
    await inst.DuelManufacturerdetails();
});

/**********"New Meter Manufacturer Details" */

Given('ExchTwFour the Manufacturer Letter radio button', async function () {
    await inst.DuelManufacturerdetails();
});
When('ExchTwFour I fill the field33 with the Value33', async function () {
    await inst.fill33DuelManufacturerdetails();
});
Then('ExchTwFour manufacturer NEXT SECTION button', async function () {
    await inst.NewMeterNextsection();
});
Then('ExchTwFour I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('ExchTwFour the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});
When('ExchTwFour I fill the field34 with the Value34', async function () {
    await inst.fill34AdditionalElecTestandChecks();
});
Then('ExchTwFour I click on CAPTURE PHOTO OF TERMINAL SCREWS button', async function () {
    await inst.AdditionalTerminalscrewCapturePhoto();
});
Then('ExchTwFour I fill the field35 with the Value35', async function () {
    await inst.fill35AdditionalElecTestandChecks();
});
Then('ExchTwFour I clk additional test on NEXT SECTION button', async function () {
    await inst.additionaltestNext();
});
Then('ExchTwFour I should see ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});

/**********"ELEC INITIAL METER READING" */

Given('ExchTwFour the ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});
When('ExchTwFour I fill the FldName36 with the Value36', async function () {
    await inst.fillthefieldsforinitmeterReading();
});
Then('ExchTwFour I should see POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});

/**********"POST INSTALLATION CHECKS" */

Given('ExchTwFour the POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});
When('ExchTwFour I fill the FldName37 with the Value37', async function () {
    await inst.fill37PostInstallationChks();
});
Then('ExchTwFour post installation page content display', async function () {
    await inst.PostInstallationChksCont();
});

/**********"POST INSTALLATION CHECKS Continuation" */

Given('ExchTwFour the post installation page contect display', async function () {
    await inst.PostInstallationChksCont();
});
When('ExchTwFour I fill the FldName38 with the Value38', async function () {
    await inst.fill38PostInstallationChks();
});
Then('ExchTwFour I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button', async function () {
    await inst.captureteststicker();
});
Then('ExchTwFour I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button', async function () {
    await inst.captureFinalMeterInst();
});
Then('ExchTwFour I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button', async function () {
    await inst.captureteststickecloseup();
});
Then('ExchTwFour I should see COMMISSIONING section', async function () {
    await inst.Commisioning();
});

/**********"Commisioning" */

Given('ExchTwFour the COMMISSIONING section', async function () {
    await inst.Commisioning();
});
When('ExchTwFour I fill the FldName39 with the Value39', async function () {
    await inst.fill39Commisioning();
});
Then('ExchTwFour I click on ADD ANOTHER ASSET button', async function () {
    await inst.DueladdanotherSet();
});
Then('ExchTwFour I fill the FldName40 with the Value40', async function () {
    await inst.fill40Commisioning();
});
Then('ExchTwFour I clk commisioning on NEXT button', async function () {
    await inst.CommisioningClickNext();
});
Then('ExchTwFour I should see ELECTRIC INSTALL & COMMISSIONING section', async function () {
    await inst.ElecInstallCommisioning();
});

/****************"SEND MESSAGE EICOM" */

Given('ExchTwFour EICOM the Send Message button is displayed', async function () {
    await inst.ElecInstallCommisioning();
});
When('ExchTwFour EICOM I click on Send Message EICOM button', async function () {
    await inst.clicksendmsgEICOM();
});
Then('ExchTwFour EICOM I should see AWAITING RESPONSE button', async function () {
    await inst.SeeEICOMAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('ExchTwFour EICOM the Awaiting Response button', async function () {
    await inst.SeeEICOMAwaitingresp();
});
When('ExchTwFour EICOM I wait for the button to disappear', async function () {
    await inst.waitEICOMbuttontoDisappear();
});
Then('ExchTwFour EICOM I should see Commissioning Successful button', async function () {
    await inst.Remosuccessful();
});
Then('ExchTwFour EICOM I should see Request Sent Successfully text message', async function () {
    await inst.reqsentMsg();
});
Then('ExchTwFour EICOM I should see Pair Asset to Comms Hub text message', async function () {
    await inst.PairAssettoCommsHub();
});
Then('ExchTwFour EICOM I should see Pairing Successful text message', async function () {
    await inst.pairingsuccessfulppmidcomm();
});
Then('ExchTwFour EICOM I should see DCC Handover Requested text message', async function () {
    await inst.DCCHandoverText();
});
Then('ExchTwFour EICOM I should see Device Clock Synchronised text message', async function () {
    await inst.DeviceClock();
});
Then('ExchTwFour EICOM I should see MPAN Set, ESME Is Now Installed And Being Configured By DCC text message', async function () {
    await inst.MPANSetbyDCCText();
});
Then('ExchTwFour EICOM I should see Joins are being Initiated text message', async function () {
    await inst.JoinsareinitText();
});

/********** "Commisioning Successful"*/

Given('ExchTwFour the Commissioning Successful button is displayed', async function () {
    await inst.Seecommisionsuccessbutton();
});
When('ExchTwFour I click on Commissioning Successful button', async function () {
    await inst.clickSeecommisionsuccessbutton();
});
Then('ExchTwFour I should see NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

Given('ExchTwFour the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
  });
  When('ExchTwFour I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
  });
  Then('ExchTwFour I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
  });

/********** "NEW REGULATOR"*/

Given('ExchTwFour the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('ExchTwFour I fill the fields and values for new regulator section', async function () {
  await inst.fillduelfornewregulator(2);
});
Then('ExchTwFour I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});

/**********"GAS INITIAL METER READING" */
Given('ExchTwFour the GAS INITIAL METER READING section', async function () {
  await inst.gasinitialmeterreading();
});
When('ExchTwFour I fill the fields with values Gas initial meter reading', async function () {
  await inst.fillthefieldsforinitmeterReadingduel();
});
Then('ExchTwFour I should see INSTALL KIT section', async function () {
  await inst.installkitSec();
});

/**********"Install Kit " */
Given('ExchTwFour the Gas Install Kit gas section', async function () {
  await inst.installkitSec();
});
When('ExchTwFour I fill the Gas Install Kit gas section fields with values', async function () {
  await inst.fillthedetailsforinstallkit();
});
Then('ExchTwFour I should see Perform Post Installation GAS Checks sec', async function () {
  await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('ExchTwFour the Post Installation GAS sec', async function () {
  await inst.performpostinst();
});
When('ExchTwFour I fill the Post Installation GAS sec fields with values', async function () {
  await inst.fillthefieldsforperformpostinstduel();
});
Then('ExchTwFour I should see GICOM Message sec', async function () {
  await inst.gasInstallCommisioning();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('ExchTwFour the GAS INSTALL & COMMISSIONING sec', async function () {
  await inst.gasInstallCommisioning();
});
When('ExchTwFour I click on Send Message GICOM butn', async function () {
  await inst.sendMesgGICOM();
});
Then('ExchTwFour I should see Awaiting Response butn', async function () {
  await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('ExchTwFour the Awaiting Response butn after gas install', async function () {
  await inst.Awatingforgasinstallcommisioning();
});
When('ExchTwFour I wait for the button to disappear after post install', async function () {
  await inst.waitforthebuttoDisappear();
});
Then('ExchTwFour I should see Commissioning Successful button', async function () {
  await inst.commisioningsuccess();
});
Then('ExchTwFour I should see Request Sent Successfully txt message', async function () {
  await inst.reqsentsuccess();
});
Then('ExchTwFour I should see Pair Asset to Comms Hub text message', async function () {
  await inst.pairAsset();
});
Then('ExchTwFour I should see DCC Handover Requested text message', async function () {
  await inst.DCCHandoverText();
});
Then('ExchTwFour I should see Device Clock Synchronised text message', async function () {
  await inst.DeviceClock();
});
Then('ExchTwFour I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message', async function () {
  await inst.MprnGSME();
});
Then('ExchTwFour I should see DCC Handover Requested for GPF Device text message', async function () {
  await inst.DCCforGPFdevice();
});
Then('ExchTwFour I should see Joins are being Initiated text message', async function () {
  await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('ExchTwFourG the Commissioning Successful button is displayed', async function () {
  await inst.commisioningSuc();
});
When('ExchTwFourG Commissioning Successful butn clk', async function () {
  await inst.clickonCommissioning();
});
Then('ExchTwFourG I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
  await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('ExchTwFour the Gas Appliance Safety Checks sec', async function () {
  await inst.gasApplicancesafety();
});
When('ExchTwFour I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
  await inst.fillthefieldsforgasApplicancesafety();
});
Then('ExchTwFour I should see SMETS PPMID sec', async function () {
  await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('ExchTwFour the "INSTALL PPMID" section', async function () {
  await inst.seePPMIDsection();
});
When('ExchTwFour I fill the fields for Install PPMID', async function () {
  await inst.filltheduelforseePPMIDsection(2);
});
Then('ExchTwFour I should see PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('ExchTwFour the PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});
When('ExchTwFour I click on Send Message IHD-PPMID butn', async function () {
  await inst.clickonIHDPPMID();
});
Then('ExchTwFour I should see PPMID Awaiting Response butn', async function () {
  await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('ExchTwFour the Awaiting Response butn after ppmid commisioning', async function () {
  await inst.AwaitingrespaftPPMID();
});
When('ExchTwFour I wait for the button to disappear after PPMID Commisioning', async function () {
  await inst.waitforthebuttontoDisappearafterppmid();
});
Then('ExchTwFour I should see PPMID Commissioning Successful button', async function () {
  await inst.ppmidsuccessbtn();
});
Then('ExchTwFour I should see PPMID Request Sent Successfully txt message', async function () {
  await inst.reqsentsuctxt();
});
Then('ExchTwFour I should see PPMID Pair Asset to Comms Hub text message', async function () {
  await inst.pairAssettoComms();
});
Then('ExchTwFour I should see Pairing Successful text message', async function () {
  await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('ExchTwFour the PPMID Commissioning Successful button is displayed', async function () {
  await inst.pairingsuccessfulppmidcomm();
});
When('ExchTwFour I click on SUB button', async function () {
  await inst.clickonSUBbtn();
});
Then('ExchTwFour I should see DEVICE BINDING and COMMISSIONING sec', async function () {
  await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('ExchTwFour the DEVICE BINDING & COMMISSIONING section', async function () {
    await job.DeviceBinding();
  });
  When('ExchTwFour I fill the fields53 and click next', async function () {
    await job.fillfield53dueldevicebinding();
  });
  Then('ExchTwFour I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });

  /**********"Energy Efficiency Information" */

  Given('ExchTwFour the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });
  When('ExchTwFour I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
  });
  Then('ExchTwFour I should see SMART EDUCATION section', async function () {
    await job.smartEducation();
  });

   /**********"SMART EDUCATION" */
  Given('ExchTwFour the SMART EDUCATION section', async function () {
    await job.smartEducation();
  });
  When('ExchTwFour I fill the fields55 and click next', async function () {
    await job.fillfield55duelsmartedu();
  });
  Then('ExchTwFour I should see SMART LITERATURE LEFT ON SITE section', async function () {
    await job.smartLitLeftOnsite();
  });

 /**********"SMART LITERATURE LEFT ON SITE" */
 Given('ExchTwFour the SMART LITERATURE LEFT ON SITE section', async function () {
    await job.smartLitLeftOnsite();
  });
  When('ExchTwFour I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
  });
  Then('ExchTwFour See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
  });

   /**********"Capture Customer Signature" */
 Given('ExchTwFour the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
  });
  When('ExchTwFour I write signature in Customer Signature', async function () {
    await job.writingSign();
  });
  Then('ExchTwFour I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
  });
  Then('ExchTwFour see Job Completed screen', async function () {
    await job.JobCompletedScreen();
  });