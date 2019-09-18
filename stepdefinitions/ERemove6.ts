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
import {
	GASPageObject
} from "../pages/GASPage";
import {
	JobCompletionPageObject
} from "../pages/JobCompletionPage";
import {
	RemovePageObject
} from "../pages/RemovePage";
import {
	config
} from "../config/config";
import {
	InstallPageObject
} from "../pages/InstallPage";
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
const exchnge21Complete: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();

Given('the RmveSix Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass RmveSix {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});


Then('I click RmveSix Login button', async function () {
	await login.clickLogin();
	await utility.wait(10000);
});

Then('I should see the RmveSix Appointment List', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the RmveSix Appointment List window', async function () {
	await home.verifyAppointmentListPage();
});


When('I click on RmveSix select button', async function () {
	await home.clickCorrectSelectLink('ERemove6');
	//await home.clickOnTheRemove6SelectLink();
	//await home.clickOnTheContinueLink();
	await utility.wait(5000);
});

Then('I should see RmveSix Work Order window', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the RmveSix {string} window', async function (string) {
	await applist.verifyWorkOrderWindowText();
});


When('i see RmveSix Call Forward or Arrive Button', async function () {
	await applist.verifyWorkOrderWindowText();
});

Then('I click on RmveSix CALL FORWARD button', async function () {
	await applist.clickOnCallForwardBtn();
});


Then('I should see RmveSix page contect display', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});


Then('I should see the RmveSix CUSTOMER CONTACT NUMBER', async function () {
	await utility.wait(5000);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see RmveSix Contact made field', async function () {
	await utility.wait(5000);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the RmveSix {string} page', async function (string) {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the RmveSix fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on RmveSix DEPART button', async function () {
	await applist.clickDepartBtn();
});


Then('I should see RmveSix  for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the RmveSix correct MPAN details', async function () {
	await applist.mpanDetails();
});


Then('I should see the RmveSix correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the RmveSix correct PostCode details', async function () {
	await applist.postCodeDetails();
});


Given('{string} RmveSix details', async function (string) {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on RmveSix OK button', async function () {
	await applist.mprnOKbtn();
});

When('I should see RmveSix ARRIVE button', async function () {
	await utility.wait(10000);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

When('I should see RmveSix DOORSTEP PROTOCOL tab activated', async function () {
	await utility.wait(5000);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});

When('I click on RmveSix ARRIVE button', async function () {
	await applist.clickArriveBtn();
});

Then('I should see RmveSix Arrival Time details', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should seeRmveSix  BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the RmveSix BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the RmveSix DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on RmveSix ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see RmveSix RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see RmveSix Initial Risk Assessment for GAS section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

Given('the RmveSix INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the RmveSix initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see the RmveSix RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the RmveSix INFO window with the text', async function () {
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

Then('I should see RmveSix RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the RmveSix RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the RmveSix RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on RmveSix CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on RmveSix NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see RmveSix CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the RmveSix CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

When('I click on RmveSix CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess.capturephotoMeterInstall.click();
});

Then('I should see RmveSix INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the RmveSix INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the RmveSix INITIAL POLARITY CHECK field with the values', async function () {
	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on RmveSix CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the RmveSix Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Then('I should see RmveSix INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the RmveSix INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the RmveSix METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on RmveSix SUBMIT button', async function () {
	await riskassess.meterCutOutRemoveSubmitButton();
});

// When('I should see RmveSix fltynineteen REMOVE IHDPPMID section',async function () {
// await remove.removeihdPpmid();
// });

Given('the RmveSix CURRENT IHD-PPMID DETAILS section', async function () {
	await remove.currentihdppmiddetailtext();
});

When('I fill the RmveSix fields with the values', async function () {
	await remove.fillcurrentIhdPPMIDdtls();
});

When('I should see RmveSix CURRENT METER DETAILS', async function () {
	await remove.CurrentMeterElec();
});

// Then('I should see the RmveSix page contect display of current meter details',async function () {

// });

Given('the RmveSix CURRENT METER DETAILS', async function () {
	await remove.CurrentMeterElec();
});

When('I fill the RmveSix CURRENT METER DETAILS field with the value', async function () {
	await remove.fillcurrentElecmeter();
});

Then('I should see RmveSix CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});

Then('I should see the RmveSix CURRENT COMMS HUB DETAILS contect display', async function () {
	await remove.currentcommsHubdtlPgCont();
});

Given('the RmveSix CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});

When('I fill the RmveSix CURRENT COMMS HUB fields with the values', async function () {
	await remove.fillcurrenthubdtl(1);
});

Then('I click on RmveSix CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
	await remove.capturephotocommsHub();
});

Then('I should see RmveSix DETERMINE FAULT ACTIVITY section', async function () {
	await remove.determintfaultActivity();
});

Given('the RmveSix REMOVE IHD-PPMID section', async function () {
	await remove.removeihdPpmid();
});

When('I fill the RmveSix IHD-PPMID fields with the values', async function () {
	await remove.fill20rmvihdppmidtls();
});

Then('I click on RmveSix OK button in Info window with the text Ensure IHD is Powered On', async function () {
	await remove.ihdpowerOnOK();
});


Then('I fill the RmveSix IHD fields with the values', async function () {
	await remove.fill21rmvihdppmidtls();
});


Then('I click on RmveSix NEXT SECTION button in remove IHD', async function () {
	await remove.rmvihdppmidnxtbtn();
});


Then('I should see RmveSix SEND MESSAGE IHD-PPMID section', async function () {
	await remove.sendmsgihdppmid();
});


/**** SEND MESSAGE IHD / PPMID*/
Given('the RmveSix SEND MESSAGE IHD-PPMID section', async function () {
	await remove.sendmsgihdppmid();
});

When('I click on RmveSix Send Message IHD PPMID button', async function () {
	await remove.clickonSendMessage();
});

Then('I should see RmveSix Awaiting Response button', async function () {
	await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('the RmveSix Awaiting Response button', async function () {
	await remove.awaitingResponse();
});
When('I wait for RmveSix the butn to disappear', async function () {
	await remove.waitforthebuttontoDisappear();
});
Then('I should see RmveSix PPMID Removal Successful button', async function () {
	await remove.ppmidRemovalbtn();
});
Then('I should see RmveSix Request Sent Successfully text message', async function () {
	await remove.sentmesgSuccess();
});
Then('I should see RmveSix Asset Unjoined text message', async function () {
	await remove.assetUnjoinedText();
});

/**** PPMID Removal Successful*/
Given('the RmveSix PPMID Removal Successful button is displayed', async function () {
	await remove.PPMIDRemovalbtndisplayed();
});
When('I click on RmveSix PPMID Removal Successful button', async function () {
	await remove.clickonPPMIDRmvl();
});
Then('I should see RmveSix CONFIRM IHD PPMID ASSET REMOVAL section', async function () {
	await remove.confirmAssetRmvl();
});

/****CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the RmveSix CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
	await remove.confirmAssetRmvl();
});
When('I fill the RmveSix field22 with the Value22', async function () {
	await remove.fill22AssetRemoval();
});
Then('I clk RmveSix OK button in Updated window with the text Asset successfully added to Returns list', async function () {
	await remove.clickonOKBtn();
	await remove.clickonokcaptureAssetFinalPhotoEvidence();
});
Then('I should see RmveSix REMOVE METER section', async function () {
	await remove.RmvElecmeterSec();
});

/**** "REMOVE METER"*/
Given('the RmveSix REMOVE METER section', async function () {
	await remove.RmvElecmeterSec();
});
When('I fill the RmveSix field023 with the Value023', async function () {
	await remove.fillElecmeterrem();
});
Then('I clk RmveSix remove meter NEXT SECTION button', async function () {
	await remove.clickonnxtBtnofElecmeterRemoval();
});
Then('I should see RmveSix SEND MESSAGE EMREM section', async function () {
	await remove.sendmsgEMREM();
});

/*****SEND MESSAGE EMREM */

Given('the RmveSix SEND MESSAGE EMREM section', async function () {
	await remove.sendmsgEMREM();
});
When('I click on RmveSix Send Message EMREM button', async function () {
	await remove.clickOnsendmsgEMREM();
});
Then('I should see RmveSix Awaiting Response button in EMREM', async function () {
	await remove.AwaitingResponseEMREM();
});

/*******Awaiting Response after EMREM */

Given('the RmveSix Awaiting Response btn in Send EMREM', async function () {
	await remove.AwaitingResponseEMREM();
});
When('I wait for the RmveSix btn to disappear in EMREM', async function () {
	await remove.waitforthebuttontoDisappear();
});
Then('I should see RmveSix Removal Successful button', async function () {
	await remove.Elecremovalsuccessfulbtn();
});
Then('I should see RmveSix Request Sent Successfully txt message in EMREM', async function () {
	await remove.ElecReqSentSuccess();
});
Then('I should see RmveSix OK to Remove Asset text message', async function () {
	await remove.ElecOktoRemoveAsset();
});

/********Removal Successful */

Given('the RmveSix Removal Successful button is displayed', async function () {
	await remove.Elecremovalsuccessfulbtn();
});
When('I click on RmveSix Removal Successful button', async function () {
	await remove.clickonElecremovalsuccessfulbtn();
});
Then('I should see RmveSix CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
	await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('the RmveSix CONFIRM ELEC ASSET REMOVAL section', async function () {
	await remove.confirmElecAssetRem();
});
When('I fill the RmveSix field024 with the Value024', async function () {
	await remove.fill24ElecAssetRemoval();

});
Then('Click ok on RmveSix asset removal', async function () {
	await remove.clickonokElecAssetRemoval();
	await remove.clickonokcaptureFinalPhotoEvidence();
});
Then('I should see RmveSix REMOVE COMMS HUB window', async function () {
	await remove.RemoveCommsHubWindow();
});
/*****REMOVE COMMS HUB */

Given('the RmveSix REMOVE COMMS HUB section', async function () {
	await remove.RemoveCommsHubWindow();
});
When('I fill the RmveSix field027 with the Value027', async function () {
	await remove.fill27RmvCommsHub();
});
Then('I click on RmveSix NEXT SEC button from Remove Comms Hub', async function () {
	await remove.clickonNxtBtnRmvCommsHub();
	await remove.XCHUBSubmit();
	await utility.wait(1000);
	await remove.XCHUBRemovalsuccessfulBtn.click();
	await utility.wait(2000);
});
Then('I should see RmveSix CONFIRM COMMS HUB REMOVAL section', async function () {
	await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('the RmveSix CONFIRM COMMS HUB REMOVAL section', async function () {
	await remove.ConfirmHubRmv();
});
When('I fill the RmveSix field028 with the Value028', async function () {
	await remove.fill28ConfirmremovalCommsHub();
});
Then('I click OK RmveSix button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
	await remove.clickonokconfrimremovalpopup();

});
Then('I clk RmveSix SUBMIT', async function () {
	await remove.clickonElecsubmitforRemoval();
});
Then('I should see RmveSix JobCompletion Summary', async function () {
	await exchnge21Complete.summaryDisplay();
});

Given('the RmveSix Summary of Job and receive Customer Signature section', async function () {
	await exchnge21Complete.summaryDisplay();
});


When('I fill the RmveSix Summary of Job and receive Customer Signaturefields with values', async function () {
	await exchnge21Complete.fillAndPrintSummaryContent();
});


Then('I should see RmveSix Submit button to complete the job section', async function () {
	await exchnge21Complete.FinalSubmission();

});