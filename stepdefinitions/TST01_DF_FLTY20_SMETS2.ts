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


Given('FTwenty the Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
});

When('FTwenty I pass {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('FTwenty I click Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});

Then('FTwenty I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('FTwenty the Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});

When('FTwenty I click on select button', async function () {
    await home.clickCorrectSelectLink('DFFLTY20SMETS2');
    await utility.wait(utility.medium_low);
});

Then('FTwenty I should see Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

Given('FTwenty the {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('FTwenty i see Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('FTwenty I click on CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});

Then('FTwenty I should see page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});

Then('FTwenty I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
});

Then('FTwenty I should see Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('FTwenty the {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('FTwenty I fill the fields with the value', async function () {
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});

When('FTwenty I click on DEPART button', async function () {
    await applist.clickDepartBtn();
});

Then('FTwenty I should see Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('FTwenty Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

When('FTwentyD I click on OK button', async function () {
    await applist.mprnOKbtn();
});

Then('FTwenty I should see ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});

Then('FTwenty I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium_low);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

When('FTwenty I click on ARRIVE button', async function () {
    await applist.clickArriveBtn();
});

Then('FTwenty I should see Arrival Time details', async function () {
    await utility.wait(utility.medium_low);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});

Then('FTwenty I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('FTwenty the BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('FTwenty I fill the DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});

When('FTwenty I click on ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
});

Then('FTwenty I should see RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
});

Then('FTwenty I should see INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('FTwenty the INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

When('FTwenty I fill the initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
});

Then('FTwenty I should see INFO window', async function () {
    await riskassess.INFOOK();
});

/***INFO window with the text */

Given('FTwenty the INFO window with the text', async function () {
    await riskassess.INFOOK();
    //   await riskassess.infoOKButton.click();
    //   await utility.wait(utility.medium);
    //   if (riskassess.NeedtoWorkYES.isDisplayed()) {
    //     var element = riskassess.NeedtoWorkYES;
    //     browser.executeScript("arguments[0].click()", element);
    //     await utility.wait(utility.medium_low);
    //   }
});

When('FTwentyI I click on OK button', async function () {
    await riskassess.INFOOKClick();
});

Then('FTwenty I should see RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('FTwenty the RISK ASSESSMENT - ELEC section', async function () {
    await riskassess.verifyriskElecText();
});
When('FTwenty I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassess.fillRiskAssesmentElecFields();
});
When('FTwenty I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

    await riskassess.capturePhotoBtnDisplayed();
});
When('FTwenty RISK ASSESSMENT ELEC NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
});
Then('FTwenty I should see the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('FTwenty the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();
});
When('FTwenty I fill the field05 with the value05', async function () {
    await riskassess.fillthedtlsGas();
});
Then('FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
    await riskassess.capturegasbtn();
});
Then('FTwenty I fill the field06 with the value06', async function () {
    await riskassess.fillthedtl06();
});
Then('FTwentyE I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});

/***CAPTURE INITIAL PHOTO OF ELEC INSTALLATION */

Given('FTwentyE the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});
When('FTwentyE I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.fillelecfullmeterInst();
});
Then('FTwentyE the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});


/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */

Given('FTwenty the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});
When('FTwenty I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.gasfullmeterInst();
});
Then('FTwenty I should see INITIAL POLARITY CHECK-MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('FTwenty the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

When('FTwenty I fill the INITIAL POLARITY CHECK field with the values', async function () {

    await riskassess.fillthePolarityCheckMartinDale();
});

Then('FTwenty I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskassess.verifyCapturepreInstallation();
});

Then('FTwenty I fill the Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();
});

Then('FTwenty I should see INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('FTwenty the INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

When('FTwenty I fill the METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});

When('FTwenty I click on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
});

Then('FTwenty I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
    await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('FTwenty the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});

When('FTwenty I fill the field010 with the value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});

When('FTwenty I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});

Then('FTwenty current meter details page contect display', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('FTwenty the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
When('FTwenty I fill the field with the value', async function () {
    await remove.fillcurrentmeterdtlGassec();
});
Then('FTwenty I should see CURRENT Electric Meter', async function () {
    await remove.CurrentMeterElec();
});

/*** CURRENT METER DETAILS - ELEC*/

Given('FTwenty the CURRENT Electric Meter', async function () {
    await remove.CurrentMeterElec();
});
When('FTwenty I fill the field011 with the value Value011', async function () {
    await remove.fillcurrentElecduelmeter();
});
Then('FTwenty I should see CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Then('FTwenty current Electric page contect display', async function () {
    await remove.currentcommsHubdtlPgCont();
});

/*** CURRENT COMMS HUB DETAILS*/

Given('FTwenty the CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
When('FTwenty I fill the field13 with the value13', async function () {
    await remove.fillcurrenthubdtl(1);
});
Then('FTwenty I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
    await remove.capturephotocommsHub();
});
Then('FTwenty I should see DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('FTwenty the DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});
When('FTwenty I fill the field14 with the value014', async function () {
    await remove.fillelecfaultysection();
    await remove.fill14commsdtls();
});
Then('FTwenty I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button', async function () {
    await remove.captureevidsuspectedtamp();
});
Then('FTwenty I fill the field15 with the value15', async function () {
    await remove.fill15commsdtls();
});
Then('FTwenty I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting', async function () {
    await remove.clickOk5mins();
});
Then('FTwenty I fill the field16 with the value16', async function () {
    await remove.fill16commsdtls();
});
Then('FTwenty I select Comms Hub field', async function () {
    await remove.commshubSelect();
});
Then('FTwenty I select Elec Meter field', async function () {
    await remove.ElecmeterSelect();
});
Then('FTwenty I select Gas Meter field', async function () {
    await remove.gasmeterSelect();
});
Then('FTwenty I select Regulator field', async function () {
    await remove.regulatorSelect();
});
Then('FTwenty I select IHD-PPMID field', async function () {
    await remove.ihdppmidSelect();
});
Then('FTwenty I click on NEXT SECT button', async function () {
    await remove.clickoncommsNextsection();
});
Then('FTwenty I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('FTwenty the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('FTwenty I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('FTwenty I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('FTwenty I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('FTwenty I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('FTwenty I fill the field19 with the value19', async function () {
    await remove.fill19preInstdtls();
});
Then('FTwenty I should see REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});

/*** REMOVE IHD-PPMID*/

Given('FTwenty the REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});
When('FTwenty I fill the field20 with the value20', async function () {
    await remove.fill20rmvihdppmidtls();
});
Then('FTwentyRE I click on OK button in Info window with the text Ensure IHD is Powered On', async function () {
    await remove.ihdpowerOnOK();
});
Then('FTwenty I fill the field21 with the value21', async function () {
    await remove.fill21rmvihdppmidtls();
});
Then('FTwenty remove IHD click NEXT SECTION button', async function () {
    await remove.rmvihdppmidnxtbtn();
});
Then('FTwenty I should see SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});


/**** SEND MESSAGE IHD / PPMID*/
Given('FTwenty the SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
When('FTwenty I click on Send Message IHD-PPMID button', async function () {
    await remove.clickonSendMessage();
});
Then('FTwenty I should see Awaiting Response button', async function () {
    await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('FTwenty the Awaiting Response button', async function () {
    await remove.awaitingResponse();
});
When('FTwenty I wait for the button to disappear', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('FTwenty I should see PPMID Removal Successful button', async function () {
    await remove.ppmidRemovalbtn();
});
Then('FTwenty I should see Request Sent Successfully text message', async function () {
    await remove.sentmesgSuccess();
});
Then('FTwenty I should see Asset Unjoined text message', async function () {
    await remove.assetUnjoinedText();
});


/**** PPMID Removal Successful*/
Given('FTwenty the PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('FTwenty I click on PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('FTwenty I should see CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});

/******CONFIRM IHD / PPMID ASSET REMOVAL */

Given('FTwenty the CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});
When('FTwenty I fill the field22 with the value22', async function () {
    await remove.fill22AssetRemoval();
});
Then('FTwentyCO I click on OK button in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonOKBtn();
});
Then('FTwenty I should see REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('FTwenty the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('FTwenty I fill the field23 with the value23', async function () {
    await remove.fill23GasmeterRemoval();
});
Then('FTwenty I click on NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('FTwenty I should see SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('FTwenty the SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});
When('FTwenty I click on Send Message GMREM button', async function () {
    await remove.clickOnsendmsgGMREM();
});
Then('FTwenty I should see Awaiting Response button in GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('FTwentyG the Awaiting Response btn in Send GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});
When('FTwentyG I wait for the btn to disappear in GMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('FTwentyG I should see Removal Successful button', async function () {
    await remove.removalsuccessfulbtn();
});
Then('FTwentyG I should see GMREM Request Sent Successfully txt message', async function () {
    await remove.ReqSentSuccess();
});
Then('FTwentyG I should see OK to Remove Asset text message', async function () {
    await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('FTwentyG the Removal Successful button is displayed', async function () {
    await remove.removalsuccessfulbtn();
});
When('FTwentyG I click on Removal Successful button', async function () {
    await remove.clickonremovalsuccessfulbtn();
});
Then('FTwenty I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('FTwenty the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('FTwenty I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
});
Then('FTwenty I click on OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonokGasAssetRemoval();
});
Then('FTwentyG I should see REMOVE COMMS HUB window', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE METER - Elec"*/
Given('FTwenty the REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});
When('FTwenty I fill the field023 with the Value023', async function () {
    await remove.fillElecmeterrem();
});
Then('FTwenty I clk remove meter NEXT SECTION button', async function () {
    await remove.clickonnxtBtnofElecmeterRemoval();
});
Then('FTwenty I should see SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});

/*****SEND MESSAGE EMREM */

Given('FTwenty the SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});
When('FTwenty I click on Send Message EMREM button', async function () {
    await remove.clickOnsendmsgEMREM();
});
Then('FTwenty I should see Awaiting Response button in EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});

/*******Awaiting Response after EMREM */

Given('FTwenty the Awaiting Response btn in Send EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});
When('FTwenty I wait for the btn to disappear in EMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('FTwenty I should see Removal Successful button', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
Then('FTwenty I should see Request Sent Successfully txt message in EMREM', async function () {
    await remove.ElecReqSentSuccess();
});
Then('FTwenty I should see OK to Remove Asset text message', async function () {
    await remove.ElecOktoRemoveAsset();
});

/********Removal Successful - Elec */

Given('FTwenty the Removal Successful button is displayed', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
When('FTwenty I click on Removal Successful button', async function () {
    await remove.clickonElecremovalsuccessfulbtn();
});
Then('FTwenty I should see CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('FTwenty the CONFIRM ELEC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});
When('FTwenty I fill the field024 with the Value024', async function () {
    await remove.fill24ElecAssetRemoval();
});
Then('FTwenty Click ok on asset removal', async function () {
    await remove.clickonokElecAssetRemoval();
});
Then('FTwenty I should see REMOVE COMMS HUB window', async function () {
    //await remove.clickonsubmitforRemoval();
    await remove.RemoveCommsHubWindow();
});

/*****REMOVE COMMS HUB */

Given('FTwenty the REMOVE COMMS HUB section', async function () {
    await remove.RemoveCommsHubWindow();
});
When('FTwenty I fill the field027 with the value27', async function () {
    await remove.fill27RmvCommsHub();
});
Then('FTwenty I click on NEXT SEC button from Remove Comms Hub', async function () {
    await remove.clickonNxtBtnRmvCommsHub();
});
Then('FTwenty I should see CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('FTwenty the CONFIRM COMMS HUB REMOVAL section', async function () {
    await remove.ConfirmHubRmv();
});
When('FTwenty I fill the field28 with the value28', async function () {
    await remove.fill28ConfirmremovalCommsHub();
});
Then('FTwentyCOM I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
    await remove.clickonokconfrimremovalpopup();
});
Then('FTwenty I click on SUBMIT btn from confirm comms hub removal', async function () {
    await remove.clickonsubmitforRemoval();
});
Then('FTwenty I should see INSTALL COMMS HUB section', async function () {
    await inst.InstallCommsHubSection();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/

Given('FTwenty the INSTALL COMMS HUB sec', async function () {
    //await inst.dummy();
    await inst.InstallCommsHubSection();
});
When('FTwenty I fill the Ins comms hub fields and capture photo EVIDENCE', async function () {
    await inst.fillfieldsInstallcommshub(2);
});
Then('FTwenty I should see SEND MSG XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});

/****************"SEND MESSAGE XCHUB" */

Given('FTwenty the SEND MESSAGE XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});
When('FTwenty I click on Send Message XCHUB button', async function () {
    await inst.clicksendmsgXCHUB();
});
Then('FTwenty I should see XCHUB Awaiting Response butn', async function () {
    await inst.SeeAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('FTwenty the Awaiting Response butn XCHUB', async function () {
    await inst.SeeAwaitingresp();
});
When('FTwenty I wait for the butn to disappear XCHUB', async function () {
    await inst.waitforthebuttontoDisappear();
});
Then('FTwenty I should see Removal Successful butn XCHUB', async function () {
    await inst.Remosuccessful();
});
Then('FTwenty I should see Request Sent Successfully text msg XCHUB', async function () {
    await inst.reqsentMsg();
});
Then('FTwenty I should see Whitelist transfer completed check LED indication is correct text message', async function () {
    await inst.LEDindication();
});

/**********"Removal Successful" */

Given('FTwenty the Removal Successful butn is displayed', async function () {
    await inst.Remsuccessdisplayed();
});
When('FTwenty I click on Removal Successful butn', async function () {
    await inst.clickonremsuccess();
});
Then('FTwenty I should see NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});

/**********"New Meter Details" */

Given('FTwenty the NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});
When('FTwenty I fill the fields and values for New meter details', async function () {
    await inst.fillDuelNewMeterDetails(2);
});
Then('FTwenty I should see NEW Meter section', async function () {
    await inst.DuelManufacturerdetails();
});

/**********"New Meter Manufacturer Details" */

Given('FTwenty the Manufacturer Letter radio button', async function () {
    await inst.DuelManufacturerdetails();
});
When('FTwenty I fill the field33 with the Value33', async function () {
    await inst.fill33DuelManufacturerdetails();
});
Then('FTwenty manufacturer NEXT SECTION button', async function () {
    await inst.NewMeterNextsection();
});
Then('FTwenty I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('FTwenty the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});
When('FTwenty I fill the field34 with the Value34', async function () {
    await inst.fill34AdditionalElecTestandChecks();
});
Then('FTwenty I click on CAPTURE PHOTO OF TERMINAL SCREWS button', async function () {
    await inst.AdditionalTerminalscrewCapturePhoto();
});
Then('FTwenty I fill the field35 with the Value35', async function () {
    await inst.fill35AdditionalElecTestandChecks();
});
Then('FTwenty I clk additional test on NEXT SECTION button', async function () {
    await inst.additionaltestNext();
});
Then('FTwenty I should see ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});

/**********"ELEC INITIAL METER READING" */

Given('FTwenty the ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});
When('FTwenty I fill the FldName36 with the Value36', async function () {
    await inst.fillthefieldsforinitmeterReading();
});
Then('FTwenty I should see POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});

/**********"POST INSTALLATION CHECKS" */

Given('FTwenty the POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});
When('FTwenty I fill the FldName37 with the Value37', async function () {
    await inst.fill37PostInstallationChks();
});
Then('FTwenty post installation page content display', async function () {
    await inst.PostInstallationChksCont();
});

/**********"POST INSTALLATION CHECKS Continuation" */

Given('FTwenty the post installation page contect display', async function () {
    await inst.PostInstallationChksCont();
});
When('FTwenty I fill the FldName38 with the Value38', async function () {
    await inst.fill38PostInstallationChks();
});
Then('FTwenty I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button', async function () {
    await inst.captureteststicker();
});
Then('FTwenty I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button', async function () {
    await inst.captureFinalMeterInst();
});
Then('FTwenty I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button', async function () {
    await inst.captureteststickecloseup();
});
Then('FTwenty I should see COMMISSIONING section', async function () {
    await inst.Commisioning();
});

/**********"Commisioning" */

Given('FTwenty the COMMISSIONING section', async function () {
    await inst.Commisioning();
});
When('FTwenty I fill the FldName39 with the Value39', async function () {
    await inst.fill39Commisioning();
});
Then('FTwenty I click on ADD ANOTHER ASSET button', async function () {
    await inst.DueladdanotherSet();
});
Then('FTwenty I fill the FldName40 with the Value40', async function () {
    await inst.fill40Commisioning();
});
Then('FTwenty I clk commisioning on NEXT button', async function () {
    await inst.CommisioningClickNext();
});
Then('FTwenty I should see ELECTRIC INSTALL & COMMISSIONING section', async function () {
    await inst.ElecInstallCommisioning();
});

/****************"SEND MESSAGE EICOM" */

Given('FTwenty EICOM the Send Message button is displayed', async function () {
    await inst.ElecInstallCommisioning();
});
When('FTwenty EICOM I click on Send Message EICOM button', async function () {
    await inst.clicksendmsgEICOM();
});
Then('FTwenty EICOM I should see AWAITING RESPONSE button', async function () {
    await inst.SeeEICOMAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('FTwenty EICOM the Awaiting Response button', async function () {
    await inst.SeeEICOMAwaitingresp();
});
When('FTwenty EICOM I wait for the button to disappear', async function () {
    await inst.waitEICOMbuttontoDisappear();
});
Then('FTwenty EICOM I should see Commissioning Successful button', async function () {
    await inst.Remosuccessful();
});
Then('FTwenty EICOM I should see Request Sent Successfully text message', async function () {
    await inst.reqsentMsg();
});
Then('FTwenty EICOM I should see Pair Asset to Comms Hub text message', async function () {
    await inst.PairAssettoCommsHub();
});
Then('FTwenty EICOM I should see Pairing Successful text message', async function () {
    await inst.pairingsuccessfulppmidcomm();
});
Then('FTwenty EICOM I should see DCC Handover Requested text message', async function () {
    await inst.DCCHandoverText();
});
Then('FTwenty EICOM I should see Device Clock Synchronised text message', async function () {
    await inst.DeviceClock();
});
Then('FTwenty EICOM I should see MPAN Set, ESME Is Now Installed And Being Configured By DCC text message', async function () {
    await inst.MPANSetbyDCCText();
});
Then('FTwenty EICOM I should see Joins are being Initiated text message', async function () {
    await inst.JoinsareinitText();
});

/********** "Commisioning Successful"*/

Given('FTwenty the Commissioning Successful button is displayed', async function () {
    await inst.Seecommisionsuccessbutton();
});
When('FTwenty I click on Commissioning Successful button', async function () {
    await inst.clickSeecommisionsuccessbutton();
});
Then('FTwenty I should see NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

Given('FTwenty the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
  });
  When('FTwenty I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
  });
  Then('FTwenty I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
  });

/********** "NEW REGULATOR"*/

Given('FTwenty the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('FTwenty I fill the fields and values for new regulator section', async function () {
  await inst.fillduelfornewregulator(2);
});
Then('FTwenty I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});

/**********"GAS INITIAL METER READING" */
Given('FTwenty the GAS INITIAL METER READING section', async function () {
  await inst.gasinitialmeterreading();
});
When('FTwenty I fill the fields with values Gas initial meter reading', async function () {
  await inst.fillthefieldsforinitmeterReadingduel();
});
Then('FTwenty I should see INSTALL KIT section', async function () {
  await inst.installkitSec();
});

/**********"Install Kit " */
Given('FTwenty the Gas Install Kit gas section', async function () {
  await inst.installkitSec();
});
When('FTwenty I fill the Gas Install Kit gas section fields with values', async function () {
  await inst.fillthedetailsforinstallkit();
});
Then('FTwenty I should see Perform Post Installation GAS Checks sec', async function () {
  await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('FTwenty the Post Installation GAS sec', async function () {
  await inst.performpostinst();
});
When('FTwenty I fill the Post Installation GAS sec fields with values', async function () {
  await inst.fillthefieldsforperformpostinstduel();
});
Then('FTwenty I should see GICOM Message sec', async function () {
  await inst.gasInstallCommisioning();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('FTwenty the GAS INSTALL & COMMISSIONING sec', async function () {
  await inst.gasInstallCommisioning();
});
When('FTwenty I click on Send Message GICOM butn', async function () {
  await inst.sendMesgGICOM();
});
Then('FTwenty I should see Awaiting Response butn', async function () {
  await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('FTwenty the Awaiting Response butn after gas install', async function () {
  await inst.Awatingforgasinstallcommisioning();
});
When('FTwenty I wait for the button to disappear after post install', async function () {
  await inst.waitforthebuttoDisappear();
});
Then('FTwenty I should see Commissioning Successful button', async function () {
  await inst.commisioningsuccess();
});
Then('FTwenty I should see Request Sent Successfully txt message', async function () {
  await inst.reqsentsuccess();
});
Then('FTwenty I should see Pair Asset to Comms Hub text message', async function () {
  await inst.pairAsset();
});
Then('FTwenty I should see DCC Handover Requested text message', async function () {
  await inst.DCCHandoverText();
});
Then('FTwenty I should see Device Clock Synchronised text message', async function () {
  await inst.DeviceClock();
});
Then('FTwenty I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message', async function () {
  await inst.MprnGSME();
});
Then('FTwenty I should see DCC Handover Requested for GPF Device text message', async function () {
  await inst.DCCforGPFdevice();
});
Then('FTwenty I should see Joins are being Initiated text message', async function () {
  await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('FTwentyG the Commissioning Successful button is displayed', async function () {
  await inst.commisioningSuc();
});
When('FTwentyG Commissioning Successful butn clk', async function () {
  await inst.clickonCommissioning();
});
Then('FTwentyG I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
  await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('FTwenty the Gas Appliance Safety Checks sec', async function () {
  await inst.gasApplicancesafety();
});
When('FTwenty I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
  await inst.fillthefieldsforgasApplicancesafety();
});
Then('FTwenty I should see SMETS PPMID sec', async function () {
  await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('FTwenty the "INSTALL PPMID" section', async function () {
  await inst.seePPMIDsection();
});
When('FTwenty I fill the fields for Install PPMID', async function () {
  await inst.filltheduelforseePPMIDsection(2);
});
Then('FTwenty I should see PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('FTwenty the PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});
When('FTwenty I click on Send Message IHD-PPMID butn', async function () {
  await inst.clickonIHDPPMID();
});
Then('FTwenty I should see PPMID Awaiting Response butn', async function () {
  await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('FTwenty the Awaiting Response butn after ppmid commisioning', async function () {
  await inst.AwaitingrespaftPPMID();
});
When('FTwenty I wait for the button to disappear after PPMID Commisioning', async function () {
  await inst.waitforthebuttontoDisappearafterppmid();
});
Then('FTwenty I should see PPMID Commissioning Successful button', async function () {
  await inst.ppmidsuccessbtn();
});
Then('FTwenty I should see PPMID Request Sent Successfully txt message', async function () {
  await inst.reqsentsuctxt();
});
Then('FTwenty I should see PPMID Pair Asset to Comms Hub text message', async function () {
  await inst.pairAssettoComms();
});
Then('FTwenty I should see Pairing Successful text message', async function () {
  await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('FTwenty the PPMID Commissioning Successful button is displayed', async function () {
  await inst.pairingsuccessfulppmidcomm();
});
When('FTwenty I click on SUB button', async function () {
  await inst.clickonSUBbtn();
});
Then('FTwenty I should see DEVICE BINDING and COMMISSIONING sec', async function () {
  await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('FTwenty the DEVICE BINDING & COMMISSIONING section', async function () {
    await job.DeviceBinding();
  });
  When('FTwenty I fill the fields53 and click next', async function () {
    await job.fillfield53dueldevicebinding();
  });
  Then('FTwenty I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });

  /**********"Energy Efficiency Information" */

  Given('FTwenty the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });
  When('FTwenty I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
  });
  Then('FTwenty I should see SMART EDUCATION section', async function () {
    await job.smartEducation();
  });

   /**********"SMART EDUCATION" */
  Given('FTwenty the SMART EDUCATION section', async function () {
    await job.smartEducation();
  });
  When('FTwenty I fill the fields55 and click next', async function () {
    await job.fillfield55duelsmartedu();
  });
  Then('FTwenty I should see SMART LITERATURE LEFT ON SITE section', async function () {
    await job.smartLitLeftOnsite();
  });

 /**********"SMART LITERATURE LEFT ON SITE" */
 Given('FTwenty the SMART LITERATURE LEFT ON SITE section', async function () {
    await job.smartLitLeftOnsite();
  });
  When('FTwenty I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
  });
  Then('FTwenty See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
  });

   /**********"Capture Customer Signature" */
 Given('FTwenty the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
  });
  When('FTwenty I write signature in Customer Signature', async function () {
    await job.writingSign();
  });
  Then('FTwenty I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
  });
  Then('FTwenty see Job Completed screen', async function () {
     await home.verifyCompletedStatus('DFFLTY20SMETS2');
  });