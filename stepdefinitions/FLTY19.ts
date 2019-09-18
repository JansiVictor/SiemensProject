import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { FLTY19homePageObject } from "../pages/FLTY19homePage";
import { FLTY19AppointmentListPageObject } from "../pages/AppointmentListPage";
import { DoorStepPageObject } from "../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../pages/RiskAssessmentPage";
import { RemovePageObject } from "../pages/RemovePage";
import { config } from "../config/config";
import { Utility } from "../support/utility";
import { when } from "q";
import { InstallPageObject } from "../pages/InstallPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const home: FLTY19homePageObject = new FLTY19homePageObject();
const applist: FLTY19AppointmentListPageObject = new FLTY19AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject = new InstallPageObject();

Given('the fltynineteen Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
});

When('I pass fltynineteen {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('I click fltynineteen Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});

Then('I should see fltynineteen the Appointment List', async function () {
    await home.seeAppList();
});

Given('the fltynineteen Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});

When('I click on fltynineteen select button', async function () {
    await utility.wait(2000);
    //await home.continueLink.click();
    await home.selectLink.click();
    //await home.clickOnTheSelectLink();
    await utility.wait(utility.medium_low);
});

Then('I should see fltynineteen Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

Given('the fltynineteen Work Order window', async function () {
    //WorkOrder Window
    await applist.verifyWorkOrderWindowText();
});

When('I see fltynineteen Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('I click on fltynineteen CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});

Then('I should see fltynineteen page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see fltynineteen the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnoDisplayed();
   // await utility.wait(utility.medium_low);
    //await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see fltynineteen Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('the fltynineteen Work Order page', async function () {
    await applist.verifyWorkOrderWindowText();
});

When('I fill the fltynineteen fields with the value', async function () {
    // await applist.clickOnCallForwardBtn();
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});

When('I click on fltynineteen DEPART button', async function () {
    await applist.clickDepartBtn();
});

Then('I should see fltynineteen Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

Then('I should see fltynineteen the correct MPAN details', async function () {
    await applist.mpanDetails();
});

Then('I should see fltynineteen the correct Customer Name details', async function () {
    await applist.customerNameDetails();
});

Then('I should see fltynineteen the correct PostCode details', async function () {
    await applist.postCodeDetails();
});

/***Appointment details */

Given('fltynineteen Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

When('I click on fltynineteen OK button', async function () {
    await applist.mprnOKbtn();
});

Then('I should see fltynineteen ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});

Then('I should see fltynineteen DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium_low);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

When('I click on fltynineteen ARRIVE button', async function () {
    await applist.clickArriveBtn();
});

Then('I should see fltynineteen Arrival Time details', async function () {
    //comment these 2 lines when continue link is not displayed
    // await utility.wait(utility.medium_low);
    //await applist.continueLink.click();
    await utility.wait(utility.medium_low);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});

Then('I should see fltynineteen BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('the fltynineteen BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the fltynineteen DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});

Then('I click on ON fltynineteen SITE button', async function () {
    await doorstep.clickONSITEBtn();
});

Then('I should see fltynineteen RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
});

Then('I should see fltynineteen INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('the fltynineteen INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the fltynineteen initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see fltynineteen INFO window', async function () {
    await riskassess.infoTextPopUp();
});

/***INFO window with the text */

Given('the fltynineteen INFO window with the text', async function () {
    await riskassess.INFOOK();
    // await utility.wait(utility.very_low);    
    // await expect(this.infoOK.isPresent());
});
When('pop-up ok click in fltynineteen Risk', async function () {
    await riskassess.INFOOKClick();
});

Then('I should see fltynineteen RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('the fltynineteen RISK ASSESSMENT-ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

When('I fill the fltynineteen RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassess.fillRiskAssesmentElecFields();
});

Then('I click on fltynineteen CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

    await riskassess.capturePhotoBtnDisplayed();
});

Then('I click on fltynineteen NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
});

Then('I should see fltynineteen CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassess.ElecInstSec();
});

/***CAPTURE INITIAL PHOTO OF ELEC INSTALLATION */

Given('the fltynineteen CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});
When('I click on fltynineteen CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.fillelecfullmeterInst();
});
Then('I should see fltynineteen INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('the fltynineteen INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

When('I fill the fltynineteen field007 with the Value007', async function () {

    await riskassess.fillthePolarityCheckMartinDale();
});

Then('I click on fltynineteen CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST btn', async function () {
    await riskassess.verifyCapturepreInstallation();
});

Then('I fill the fltynineteen field08 with the Value08', async function () {
    await riskassess.verifyanySocketFoundNO();

});

Then('I should see fltynineteen INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('the fltynineteen INITIAL POLARITY CHECK-AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

When('I fill the fltynineteen field09 with the Value09', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});

Then('I click on fltynineteen SUBMIT button', async function () {
    await riskassess.meterCutOutnextSectionfrmElec();
});

Then('I should see fltynineteen CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});

/***********CURRENT IHD-PPMID DETAILS section *********/

Given('the fltynineteen CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});
When('I fill the fltynineteen field010 with the Value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});
Then('I should see fltynineteen CURRENT METER DETAILS section', async function () {
    await remove.CurrentMeterElec();
});

/*** CURRENT METER DETAILS - ELEC*/

Given('the fltynineteen CURRENT METER DETAILS section', async function () {
    await remove.CurrentMeterElec();
});
When('I fill the fltynineteen field011 with the value Value011', async function () {
    await remove.fillcurrentElecmeter();
});
Then('I should see fltynineteen CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Then('I should see the fltynineteen page contect display', async function () {
    await remove.currentcommsHubdtlPgCont();
});

/*** CURRENT COMMS HUB DETAILS*/

Given('the fltynineteen CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
When('I fill the fltynineteen field013 with the value Value013', async function () {
    await remove.fillcurrenthubdtl(1);
});
Then('I click on fltynineteen CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
    await remove.capturephotocommsHub();
});
Then('I should see fltynineteen DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('the fltynineteen DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});
When('I fill the fltynineteen field014 with the Value014', async function () {
    await remove.fillelecfaultysection();
});
Then('I click on fltynineteen CAPTURE PHOTOGRAPHIC EVIDENCE SUSPECTED TAMPERING button', async function () {
    await remove.captureevidsuspectedtamp();
});
Then('I fill the fltynineteen field015 with the Value015', async function () {
    await remove.fill15commsdtls();
});
Then('I click on fltynineteen OK in Info window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting', async function () {
    await remove.clickOk5mins();
});
Then('I fill the fltynineteen field016 with the Value016', async function () {
    await remove.fill16commsdtls();
});
Then('I select fltynineteen Comms Hub field', async function () {
    await remove.commshubSelect();
});
Then('I select fltynineteen Elec Meter field', async function () {
    await remove.ElecmeterSelect();
});
Then('I select fltynineteen IHD PPMID field', async function () {
    await remove.ihdppmidSelect();
});
Then('I click on fltynineteen NEXT SECTION butn in determine faulty activity', async function () {
    await remove.clickoncommsNextsection();
});
Then('I should see fltynineteen REMOVE IHDPPMID section', async function () {
    await remove.removeihdPpmid();
});

/*** REMOVE IHD-PPMID*/

Given('the fltynineteen REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});
When('I fill the fltynineteen field020 with the Value020', async function () {
    await remove.fill20rmvihdppmidtls();
});
Then('I click on fltynineteen OK button in Info window with the text Ensure IHD is Powered On', async function () {
    await remove.ihdpowerOnOK();
});
Then('I fill the fltynineteen field021 with the Value021', async function () {
    await remove.fill21rmvihdppmidtls();
});
Then('I click on fltynineteen NEXT SECTION butn in remove IHD', async function () {
    await remove.rmvihdppmidnxtbtn();
});
Then('I should see fltynineteen SEND MESSAGE IHD PPMID section', async function () {
    await remove.sendmsgihdppmid();
});


/**** SEND MESSAGE IHD / PPMID*/
Given('the fltynineteen SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
When('I click on fltynineteen Send Message IHD PPMID button', async function () {
    await remove.clickonSendMessage();
});
Then('I should see fltynineteen Awaiting Response button', async function () {
    await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('the fltynineteen Awaiting Response button', async function () {
    await remove.awaitingResponse();
});
When('I wait for fltynineteen the butn to disappear', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('I should see fltynineteen PPMID Removal Successful button', async function () {
    await remove.ppmidRemovalbtn();
});
Then('I should see fltynineteen Request Sent Successfully text message', async function () {
    await remove.sentmesgSuccess();
});
Then('I should see fltynineteen Asset Unjoined text message', async function () {
    await remove.assetUnjoinedText();
});


/**** PPMID Removal Successful*/
Given('the fltynineteen PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('I click on fltynineteen PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('I should see fltynineteen CONFIRM IHD PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});

/****CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the fltynineteen CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});
When('I fill the fltynineteen field22 with the Value22', async function () {
    await remove.fill22AssetRemoval();
});
Then('I clk fltynineteen OK button in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonOKBtn();
});
Then('I should see fltynineteen REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE METER"*/
Given('the fltynineteen REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});
When('I fill the fltynineteen field023 with the Value023', async function () {
    await remove.fillElecmeterrem();
});
Then('I clk fltynineteen remove meter NEXT SECTION button', async function () {
    await remove.clickonnxtBtnofElecmeterRemoval();
});
Then('I should see fltynineteen SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});

/*****SEND MESSAGE EMREM */

Given('the fltynineteen SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});
When('I click on fltynineteen Send Message EMREM button', async function () {
    await remove.clickOnsendmsgEMREM();
});
Then('I should see fltynineteen Awaiting Response button in EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});

/*******Awaiting Response after EMREM */

Given('the fltynineteen Awaiting Response btn in Send EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});
When('I wait for the fltynineteen btn to disappear in EMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('I should see fltynineteen Removal Successful button', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
Then('I should see fltynineteen Request Sent Successfully txt message in EMREM', async function () {
    await remove.ElecReqSentSuccess();
});
Then('I should see fltynineteen OK to Remove Asset text message', async function () {
    await remove.ElecOktoRemoveAsset();
});

/********Removal Successful */

Given('the fltynineteen Removal Successful button is displayed', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
When('I click on fltynineteen Removal Successful button', async function () {
    await remove.clickonElecremovalsuccessfulbtn();
});
Then('I should see fltynineteen CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('the fltynineteen CONFIRM ELEC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});
When('I fill the fltynineteen field024 with the Value024', async function () {
    await remove.fill24ElecAssetRemoval();
});
Then('Click ok on asset removal', async function () {
    await remove.clickonokElecAssetRemoval();
});
Then('I should see fltynineteen REMOVE COMMS HUB window', async function () {
    await remove.RemoveCommsHubWindow();
});
/*****REMOVE COMMS HUB */

Given('the fltynineteen REMOVE COMMS HUB section', async function () {
    await remove.RemoveCommsHubWindow();
});
When('I fill the fltynineteen field027 with the Value027', async function () {
    await remove.fill27RmvCommsHub();
});
Then('I click on fltynineteen NEXT SEC button from Remove Comms Hub', async function () {
    await remove.clickonNxtBtnRmvCommsHub();
});
Then('I should see fltynineteen CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('the fltynineteen CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});
When('I fill the fltynineteen field028 with the Value028', async function () {
    await remove.fill28ConfirmremovalCommsHub();
});
Then('I click OK fltynineteen button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
    await remove.clickonokconfrimremovalpopup();
});
Then('I clk fltynineteen SUBMIT to Install', async function () {
    await remove.clickonElecsubmitforRemoval();
});
Then('I should see fltynineteen INSTALL COMMS HUB section', async function () {
    await inst.InstallCommsHubSection();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/


Given('the fltynineteen INSTALL COMMS HUB section', async function () {
    //await inst.dummy();
    await inst.InstallCommsHubSection();
});
When('I fill the fltynineteen field029 with the Valuek029', async function () {
    await inst.fillfieldsElecInstallcommshub(2);
});
Then('I should see fltynineteen send message xchub', async function () {
    await inst.sendmsgXCHUB();
});