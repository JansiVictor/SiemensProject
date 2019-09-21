import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { HomePageObject } from "../pages/HomePage";
import { AppointmentListPageObject } from "../pages/AppointmentListPage";
import { DoorStepPageObject } from "../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../pages/RiskAssessmentPage";
import { RemovePageObject } from "../pages/RemovePage";
import { JobCompletionPageObject } from "../pages/JobCompletionPage";
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
const home: HomePageObject = new HomePageObject();
const applist: AppointmentListPageObject = new AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject = new InstallPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();


Given('TST28 the Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
});

When('TST28 I pass {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('TST28 I click Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});

Then('TST28 I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('TST28 the Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});

When('TST28 I click on select button', async function () {
    await home.clickCorrectSelectLink('DFRMVE7');
    await utility.wait(utility.medium_low);
});

Then('TST28 I should see Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

Given('TST28 the {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('TST28 i see Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('TST28 I click on CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});

Then('TST28 I should see page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});

Then('TST28 I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
});

Then('TST28 I should see Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('TST28 the {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('TST28 I fill the fields with the value', async function () {
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});

When('TST28 I click on DEPART button', async function () {
    await applist.clickDepartBtn();
});

Then('TST28 I should see Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('TST28 Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

When('TST28D I click on OK button', async function () {
    await applist.mprnOKbtn();
});

Then('TST28 I should see ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});

Then('TST28 I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium_low);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

When('TST28 I click on ARRIVE button', async function () {
    await applist.clickArriveBtn();
});

Then('TST28 I should see Arrival Time details', async function () {
    await utility.wait(utility.medium_low);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});

Then('TST28 I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('TST28 the BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('TST28 I fill the DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});

When('TST28 I click on ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
});

Then('TST28 I should see RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
});

Then('TST28 I should see INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('TST28 the INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

When('TST28 I fill the initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
});

Then('TST28 I should see INFO window', async function () {
    await riskassess.INFOOK();
});

/***INFO window with the text */

Given('TST28 the INFO window with the text', async function () {
    await riskassess.INFOOK();
    //   await riskassess.infoOKButton.click();
    //   await utility.wait(utility.medium);
    //   if (riskassess.NeedtoWorkYES.isDisplayed()) {
    //     var element = riskassess.NeedtoWorkYES;
    //     browser.executeScript("arguments[0].click()", element);
    //     await utility.wait(utility.medium_low);
    //   }
});

When('TST28I I click on OK button', async function () {
    await riskassess.INFOOKClick();
});

Then('TST28 I should see RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('TST28 the RISK ASSESSMENT - ELEC section', async function () {
    await riskassess.verifyriskElecText();
});
When('TST28 I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassess.fillRiskAssesmentElecFields();
});
When('TST28 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

    await riskassess.capturePhotoBtnDisplayed();
});
When('TST28 RISK ASSESSMENT ELEC NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
});
Then('TST28 I should see the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('TST28 the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();
});
When('TST28 I fill the field05 with the value05', async function () {
    await riskassess.fillthedtlsGas();
});
Then('TST28 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
    await riskassess.capturegasbtn();
});
Then('TST28 I fill the field06 with the value06', async function () {
    await riskassess.fillthedtl06();
});
Then('TST28E I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});

/***CAPTURE INITIAL PHOTO OF ELEC INSTALLATION */

Given('TST28E the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});
When('TST28E I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.fillelecfullmeterInst();
});
Then('TST28E the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});


/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */

Given('TST28 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});
When('TST28 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.gasfullmeterInst();
});
Then('TST28 I should see INITIAL POLARITY CHECK-MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('TST28 the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

When('TST28 I fill the INITIAL POLARITY CHECK field with the values', async function () {

    await riskassess.fillthePolarityCheckMartinDale();
});

Then('TST28 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskassess.verifyCapturepreInstallation();
});

Then('TST28 I fill the Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();
});

Then('TST28 I should see INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */
Given('TST28 the INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});
When('TST28 I fill the METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});
When('TST28 I click on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
});
Then('TST28 I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
    await remove.currentihdppmiddetailtext();
});

/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('TST28 the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});
When('TST28 I fill the field010 with the value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});
When('TST28 I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
Then('TST28 current meter details page contect display', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/
Given('TST28 the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
When('TST28 I fill the field with the value', async function () {
    await remove.TST28fillcurrentmeterdtlGassec();
});
Then('TST28 I should see CURRENT Electric Meter', async function () {
    await remove.CurrentMeterElec();
});

/*** CURRENT METER DETAILS - ELEC*/
Given('TST28 the CURRENT Electric Meter', async function () {
    await remove.CurrentMeterElec();
});
When('TST28 I fill the field011 with the value Value011', async function () {
    await remove.TST28fillcurrentElecduelmeter();
});
Then('TST28 I should see CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Then('TST28 current Electric page contect display', async function () {
    await remove.currentcommsHubdtlPgCont();
});

/*** CURRENT COMMS HUB DETAILS*/
Given('TST28 the CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
When('TST28 I fill the field13 with the value13', async function () {
    await remove.fillcurrenthubdtl(1);
});
Then('TST28 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
    await remove.capturephotocommsHub();
});
Then('TST28 I should see REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});

/*** REMOVE IHD-PPMID*/
Given('TST28 the REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});
When('TST28 I fill the field20 with the value20', async function () {
    await remove.fill20rmvihdppmidtls();
});
Then('TST28RE I click on OK button in Info window with the text Ensure IHD is Powered On', async function () {
    await remove.ihdpowerOnOK();
});
Then('TST28 I fill the field21 with the value21', async function () {
    await remove.fill21rmvihdppmidtls();
});
Then('TST28 remove IHD click NEXT SECTION button', async function () {
    await remove.rmvihdppmidnxtbtn();
});
Then('TST28 I should see SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});

/**** SEND MESSAGE IHD / PPMID*/
Given('TST28 the SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
When('TST28 I click on Send Message IHD-PPMID button', async function () {
    await remove.clickonSendMessage();
});
Then('TST28 I should see Awaiting Response button', async function () {
    await remove.awaitingResponse();
});

/**** AWAITING RESPONSE*/
Given('TST28 the Awaiting Response button', async function () {
    await remove.awaitingResponse();
});
When('TST28 I wait for the button to disappear', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('TST28 I should see PPMID Removal Successful button', async function () {
    await remove.ppmidRemovalbtn();
});
Then('TST28 I should see Request Sent Successfully text message', async function () {
    await remove.sentmesgSuccess();
});
Then('TST28 I should see Asset Unjoined text message', async function () {
    await remove.assetUnjoinedText();
});

/**** PPMID Removal Successful*/
Given('TST28 the PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('TST28 I click on PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('TST28 I should see CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});

/******CONFIRM IHD / PPMID ASSET REMOVAL */

Given('TST28 the CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});
When('TST28 I fill the field22 with the value22', async function () {
    await remove.fill22AssetRemoval();
});
Then('TST28CO I click on OK button in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonOKBtn();
});
Then('TST28CO take evidence', async function () {
    await remove.TST28TakeEvidence();
});
Then('TST28 I should see REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('TST28 the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('TST28 I fill the field23 with the value23', async function () {
    await remove.fill23GasmeterRemoval();
});
Then('Tst28 select Additional work needed', async function () {
    await remove.Tst28AdditionalWork();
});
Then('TST28 I click on NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('TST28 I should see SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('TST28 the SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});
When('TST28 I click on Send Message GMREM button', async function () {
    await remove.clickOnsendmsgGMREM();
});
Then('TST28 I should see Awaiting Response button in GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('TST28G the Awaiting Response btn in Send GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});
When('TST28G I wait for the btn to disappear in GMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('TST28G I should see Removal Successful button', async function () {
    await remove.removalsuccessfulbtn();
});
Then('TST28G I should see GMREM Request Sent Successfully txt message', async function () {
    await remove.ReqSentSuccess();
});
Then('TST28G I should see OK to Remove Asset text message', async function () {
    await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('TST28G the Removal Successful button is displayed', async function () {
    await remove.removalsuccessfulbtn();
});
When('TST28G I click on Removal Successful button', async function () {
    await remove.clickonremovalsuccessfulbtn();
});
Then('TST28 I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('TST28 the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('TST28 I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
});
Then('TST28 I click on OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonokGasAssetRemoval();
});
Then('TST28 Gas Take Photo Evidence', async function () {
    await remove.TST28TakeEvidenceGas();
});
Then('TST28G I should see REMOVE METER', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE METER - Elec"*/
Given('TST28 the REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});
When('TST28 I fill the field023 with the Value023', async function () {
    await remove.Tst22fillElecmeterrem();
});
Then('TST28 I should see SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});

/*****SEND MESSAGE EMREM */

Given('TST28 the SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});
When('TST28 I click on Send Message EMREM button', async function () {
    await remove.clickOnsendmsgEMREM();
});
Then('TST28 I should see Awaiting Response button in EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});

/*******Awaiting Response after EMREM */

Given('TST28 the Awaiting Response btn in Send EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});
When('TST28 I wait for the btn to disappear in EMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('TST28 I should see Removal Successful button', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
Then('TST28 I should see Request Sent Successfully txt message in EMREM', async function () {
    await remove.ElecReqSentSuccess();
});
Then('TST28 I should see OK to Remove Asset text message', async function () {
    await remove.ElecOktoRemoveAsset();
});

/********Removal Successful - Elec */

Given('TST28 the Removal Successful button is displayed', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
When('TST28 I click on Removal Successful button', async function () {
    await remove.clickonElecremovalsuccessfulbtn();
});
Then('TST28 I should see CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('TST28 the CONFIRM ELEC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});
When('TST28 I fill the field024 with the Value024', async function () {
    await remove.fill24ElecAssetRemoval();
});
Then('TST28 Take Photo Evidence', async function () {
    await remove.TST28TakeEvidenceAsset();
});
Then('TST28 I should see REMOVE COMMS HUB window', async function () {
    //await remove.clickonsubmitforRemoval();
    await remove.RemoveCommsHubWindow();
});

/*****REMOVE COMMS HUB */

Given('TST28 the REMOVE COMMS HUB section', async function () {
    await remove.RemoveCommsHubWindow();
});
When('TST28 I fill the field027 with the value27', async function () {
    await remove.fill27RmvCommsHub();
});
Then('TST28 I click on NEXT SEC button from Remove Comms Hub', async function () {
    await remove.clickonNxtBtnRmvCommsHub();
});
Then('TST28 I should see SEND MSG XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});

/****************"SEND MESSAGE XCHUB" */

Given('TST28 the SEND MESSAGE XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});
When('TST28 I click on Send Message XCHUB button', async function () {
    await inst.clicksendmsgXCHUB();
});
Then('TST28 I should see XCHUB Awaiting Response butn', async function () {
    await inst.SeeAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('TST28 the Awaiting Response butn XCHUB', async function () {
    await inst.SeeAwaitingresp();
});
When('TST28 I wait for the butn to disappear XCHUB', async function () {
    await inst.waitforthebuttontoDisappear();
});
Then('TST28 I should see Removal Successful butn XCHUB', async function () {
    await inst.Remosuccessful();
});
Then('TST28 I should see Request Sent Successfully text msg XCHUB', async function () {
    await inst.reqsentMsg();
});
Then('TST28 I should see Whitelist transfer completed check LED indication is correct text message', async function () {
    await inst.LEDindication();
});

/**********"Removal Successful" */

Given('TST28 the Removal Successful butn is displayed', async function () {
    await inst.Remsuccessdisplayed();
});
When('TST28 I click on Removal Successful butn', async function () {
    await inst.clickonremsuccess();
});
Then('TST28 I should see CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('TST28 the CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});
When('TST28 I fill the field28 with the value28', async function () {
    await remove.fill28ConfirmremovalCommsHub();
});
Then('TST28COM I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
    await remove.clickonokconfrimremovalpopup();
});
Then('TST28 take Evidence as photo', async function () {
    await remove.Tst28CommshubEvidence();
});
Then('TST28 I click on SUBMIT btn from confirm comms hub removal', async function () {
    await remove.clickonElecsubmitforRemoval();
});

/**********"SUMMARY" */
Given('TST28 the SUMMARY section', async function () {
    await job.TST12summary();
});
When('TST28 I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
});
Then('TST28 See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
});

/**********"Capture Customer Signature" */

Given('TST28 the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
});
When('TST28 I write signature in Customer Signature', async function () {
    await job.writingSign();
});
Then('TST28 I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
});
Then('TST28 see Job Completed screen', async function () {
    await home.verifyCompletedStatus('DFRMVE7');
});