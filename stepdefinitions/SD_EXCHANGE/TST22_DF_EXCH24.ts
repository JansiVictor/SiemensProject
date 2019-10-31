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
    RemovePageObject
} from "../../pages/RemovePage";
import {
    InstallPageObject
} from "../../pages/InstallPage";
import {
    GASPageObject
} from "../../pages/GasPage";
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
const riskassessElec: ElectricPageObject = new ElectricPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject = new InstallPageObject();


/***LOGIN PAGE */
Given('the TST22 Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium);
});
When('I pass TST22 {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(utility.medium);
});
Then('I click TST22 Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});
Then('I should see the TST22 Appointment List', async function () {
    await home.seeAppList();
});
Given('the TST22 Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});
When('I click on TST22 select button', async function () {
    await home.clickCorrectSelectLink('DFExchange24');
    await utility.wait(utility.medium);
});
Then('I should see TST22 Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

/***CALL FORWARD */
Given('the TST22 the Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});
When('i see TST22 Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('I click on TST22 CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});
Then('I should see page TST22 contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});
Then('I should see the TST22 CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
});
Then('I should see TST22 Contact made field', async function () {
    await utility.wait(utility.medium);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***DEPART */
Given('the TST22 Work Order page', async function () {
    await applist.verifyWorkOrderWindowText();
});
When('I fill the TST22 fields with the value', async function () {
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});
When('I click on TST22 DEPART button', async function () {
    await applist.clickDepartBtn();
});
Then('I should see TST22 Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

/***MPRN WINDOW */
Given('TST22 Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});
When('I click on TST22 MPRNOK button', async function () {
    await applist.mprnOKbtn();
});
Then('I should see TST22 ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});
Then('I should see TST22 DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

/***DOORSTEP PROTOCOL ARRIVE */
Given('the TST WorkOrder page', async function () {
    await applist.verifyWorkOrderWindowText();
});
When('I click on TST22 ARRIVE button', async function () {
    await applist.clickArriveBtn();
});
Then('I should see TST22 Arrival Time details', async function () {
    await utility.wait(utility.medium);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});
Then('I should see TST22 BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */
Given('the TST22 BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});
When('I fill the TST22 DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});
When('I click on TST22 ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
});
Then('I should see TST22 RISK ASSESSMENT tab activated', async function () {
    await riskassessElec.verifyRiskAssessmentPage();
});
Then('I should see TST22 INITIAL RISK ASSESSMENT section', async function () {
    await riskassessElec.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT*/
Given('the TST22 INITIAL RISK ASSESSMENT section', async function () {
    await riskassessElec.verifyInitialRiskAssessmentPage();
});
When('I fill the TST22 initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
});
Then('I should see TST22 INFO window', async function () {
    await riskassess.INFOOK();
});

/***INFO WINDOW*/
Given('the TST22 INFO window with the text', async function () {
    await riskassess.INFOOK();
});
When('TST22 click infook', async function () {
    await riskassess.INFOOKClick();
});
Then('I should see TST22 RISK ASSESSMENT ELEC section', async function () {
    await riskassessElec.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC*/
Given('the TST22 RISK ASSESSMENT - ELEC section', async function () {
    await riskassessElec.verifyriskElecText();
});
When('I fill the TST22 RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassessElec.fillRiskAssesmentElecFields();
});
Then('I click on TST22 CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
    await riskassessElec.capturePhotoBtnDisplayed();
});
Then('I click on TST22 NEXT SECTION button', async function () {
    await riskassessElec.clickNextSectionBtn();
});
Then('I should see TST22 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassessElec.electInstallationSection();
});

/***CAPTURE INITIAL PHOTO OF ELEC INSTALLATION */
Given('the TST22 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassessElec.electInstallationSection();
});
When('I click on TST22 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.elecfullmeterInst();
    await utility.wait(utility.medium);
});
Then('I should see TST22 RISK ASSESSMENT - GAS section', async function () {
    await riskassessGAS.riskAssessmentGASDisplayed();
});

/***RISK ASSESSMENT GAS */
Given('the TST22 RISK ASSESSMENT - GAS section', async function () {
    await riskassessGAS.riskAssessmentGASDisplayed();
});
When('I fill the TST22 RISK ASSESSMENT - GAS fields with the values', async function () {
    await riskassessGAS.fillRiskAssessGas();
});
Then('I should see TST22 Capture Photo of GAS Installation section', async function () {
    await riskassessGAS.riskAssessmentGASDisplayed();
});

/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */
Given('TST22 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});
When('TST22 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.gasfullmeterInst();
});
Then('TST22 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});
Then('I should see the Suitable for TST22 Elec Smart Installation section', async function () {
    await riskassessGAS.suitableForSmartInstallationTxt();
});
Then('I should see TST22 INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY MARTINDALE TEST*/
Given('the TST22 INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});
When('I fill the TST22 INITIAL POLARITY CHECK field with the values', async function () {

    await riskassess.fillthePolarityCheckMartinDale();
});
When('I click on TST22 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskassess.verifyCapturepreInstallation();
});
When('I fill the TST22 Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();

});

/*** SMART INSTALLATION ELEC*/
Given('the Suitable for TST22 Smart Installation section', async function () {
    await riskassessElec.verifysuitableforSmartMeterInstallation();
});
When('I click on Is TST22 Site Suitable for Smart Installation? button', async function () {
    await riskassessElec.suitableforSmartMeterInstallation();
});
When('I click on TST22 Equipment Reposition Required?', async function () {
    await riskassessElec.equipmentRepositionReq();
});
When('I enter TST22 Additional Notes for Smart installation Check', async function () {
    await riskassessElec.enterNotesForMeteInstallation();
});
When('I click on TST22 smart installation NEXT SECTION button', async function () {
    await riskassessElec.clickSmartInstallationNextBtn();
});
Then('I should see TST22 Suitable for Gas smart meter installation', async function () {
    await riskassessGAS.suitableForSmartInstallationGASTxt();
});

/*** SMART INSTALLATION GAS*/
Given('the Suitable for TST22 Smart Installation GAS section', async function () {
    await riskassessGAS.suitableForSmartInstallationGASTxt();
});
When('I fill TST22 Site Suitable for Smart Installation? GAS button', async function () {
    await riskassessGAS.fillSuitablityForGASSmartInstallation();
});
Then('I should see TST22 INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/*** INITIAL POLARITY CHECK*/
Given('the TST22 INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});
When('I fill the TST22 METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});
When('I click on TST22 SUBMIT button', async function () {
    await riskassessElec.meterCutOutRemoveSubmitButton();
});
Then('TST22 I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('TST22 the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('TST22 I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('TST22 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('TST22 I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('TST22 I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('TST22 I fill the field19 with the value19', async function () {
    await remove.TST22fill19preInstdtls();
});
Then('TST22 I should see CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});

/***********CURRENT IHD-PPMID DETAILS section *********/

Given('TST22 the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});
When('TST22 I fill the field010 with the value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});
When('TST22 I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
Then('TST22 I should see the page contect display of current meter details', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('TST22 the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterGasPageContent();
});
When('TST22 I fill the field with the value', async function () {
    await remove.Tst22fillcurrentmeterdtlGassec();
});
Then('I should see TST22 CURRENT METER DETAILS Elec section', async function () {
    await remove.CurrentMeterElec();
});

/*** CURRENT METER DETAILS - Elec */
Given('the TST22 CURRENT METER DETAILS section', async function () {
    await remove.CurrentMeterElec();
});
When('I fill the TST22 field011 with the value Value011', async function () {

    await remove.Tst22fillcurrentElecmeter();
});
Then('I should see TST22 CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Given('the TST22 CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});

When('I fill the TST22 field013 with the value Value013', async function () {
    await remove.fillcurrenthubdtl(1);
    await remove.capturephotocommsHub();
});

/**** Current Comms Hub*/
Given('TST22 the CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
When('TST22 I fill the field13 with the value13', async function () {
    await remove.fillcurrenthubdtl(1);
});
Then('TST22 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
    await remove.capturephotocommsHub();
});
Then('TST22 I should see REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});
/*** REMOVE IHD-PPMID*/

Given('the TST22 REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});
When('TST22 I fill the field20 with the value20', async function () {
    await remove.fill20rmvihdppmidtls();
});
Then('TST22 I click on OK button in Info window with the text Ensure IHD is Powered On', async function () {
    await remove.ihdpowerOnOK();
});
Then('TST22 I fill the field21 with the value21', async function () {
    await remove.fill21rmvihdppmidtls();
});
Then('TST22 I click on NEXT SECTION button in remove IHD', async function () {
    await remove.rmvihdppmidnxtbtn();
});
Then('TST22 I should see SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});


/**** SEND MESSAGE IHD / PPMID*/
Given('the TST22 SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
When('TST22 I click on Send Message IHD-PPMID button', async function () {
    await remove.clickonSendMessage();
});
Then('TST22 I should see Awaiting Response button', async function () {
    await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('the TST22 Awaiting Response button', async function () {
    await remove.awaitingResponse();
});
When('TST22 I wait for the button to disappear', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('TST22 I should see PPMID Removal Successful button', async function () {
    await remove.ppmidRemovalbtn();
});
Then('TST22 I should see Request Sent Successfully text message', async function () {
    await remove.sentmesgSuccess();
});
Then('TST22 I should see Asset Unjoined text message', async function () {
    await remove.assetUnjoinedText();
});

/**** PPMID Removal Successful*/
Given('TST22 the PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('TST22 I click on PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('TST22 I should see CONFIRM IHD-PPMID REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});

/****CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the TST22 CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});
When('I fill the TST22 field22 with the Value22', async function () {
    await remove.fill22AssetRemoval();
});
Then('I clk TST22 OK button in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonOKBtn();
});
Then('I should see TST22 REMOVE METER section', async function () {
    await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('TST22 the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('TST22 I fill the field23 with the value23', async function () {
    await remove.fill23GasmeterRemoval();
});
Then('TST22 I click on NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('TST22 I should see SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('TST22 the SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});
When('TST22 I click on Send Message GMREM button', async function () {
    await remove.clickOnsendmsgGMREM();
});
Then('TST22 I should see Awaiting Response button in GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('TST22G the Awaiting Response btn in Send GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});
When('TST22G I wait for the btn to disappear in GMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('TST22G I should see Removal Successful button', async function () {
    await remove.removalsuccessfulbtn();
});
Then('TST22G I should see GMREM Request Sent Successfully txt message', async function () {
    await remove.ReqSentSuccess();
});
Then('TST22G I should see OK to Remove Asset text message', async function () {
    await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('TST22G the Removal Successful button is displayed', async function () {
    await remove.removalsuccessfulbtn();
});
When('TST22G I click on Removal Successful button', async function () {
    await remove.clickonremovalsuccessfulbtn();
});
Then('TST22 I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('TST22 the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('TST22 I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
});
Then('TST22 I click on OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonokGasAssetRemoval();
});
Then('TST22G I should see REMOVE COMMS HUB window', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE METER - Elec"*/
Given('TST22 the REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});
When('TST22 I fill the field023 with the Value023', async function () {
    await remove.Tst22fillElecmeterrem();
});
// Then('TST22 I clk remove meter NEXT SECTION button', async function () {
//     await remove.clickonnxtBtnofElecmeterRemoval();
// });
Then('TST22 I should see SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});

/*****SEND MESSAGE EMREM */

Given('TST22 the SEND MESSAGE EMREM section', async function () {
    await remove.sendmsgEMREM();
});
When('TST22 I click on Send Message EMREM button', async function () {
    await remove.clickOnsendmsgEMREM();
});
Then('TST22 I should see Awaiting Response button in EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});

/*******Awaiting Response after EMREM */

Given('TST22 the Awaiting Response btn in Send EMREM', async function () {
    await remove.AwaitingResponseEMREM();
});
When('TST22 I wait for the btn to disappear in EMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('TST22 I should see Removal Successful button', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
Then('TST22 I should see Request Sent Successfully txt message in EMREM', async function () {
    await remove.ElecReqSentSuccess();
});
Then('TST22 I should see OK to Remove Asset text message', async function () {
    await remove.ElecOktoRemoveAsset();
});

/********Removal Successful - Elec */

Given('TST22 the Removal Successful button is displayed', async function () {
    await remove.Elecremovalsuccessfulbtn();
});
When('TST22 I click on Removal Successful button', async function () {
    await remove.clickonElecremovalsuccessfulbtn();
});
Then('TST22 I should see CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('TST22 the CONFIRM ELEC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});
When('TST22 I fill the field024 with the Value024', async function () {
    await remove.fill24ElecAssetRemoval();
});
Then('TST22 Click ok on asset removal', async function () {
    await remove.clickonokElecAssetRemoval();
});
Then('TST22 I should see INSTALL COMMS HUB sec', async function () {
    await remove.clickonsubmitforRemoval();
    await inst.InstallCommsHubSection();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/

Given('TST22 the INSTALL COMMS HUB sec', async function () {
    await inst.InstallCommsHubSection();
});
When('TST22 I fill the Ins comms hub fields and capture photo EVIDENCE', async function () {
    await inst.fillfieldsInstallcommshub(2);
});
Then('TST22 I should see NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});

/**********"New Meter Details" */

Given('TST22 the NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});
When('TST22 I fill the fields and values for New meter details', async function () {
    await inst.fillDuelNewMeterDetails(2);
});
Then('TST22 I should see NEW Meter section', async function () {
    await inst.DuelManufacturerdetails();
});

/**********"New Meter Manufacturer Details" */

Given('TST22 the Manufacturer Letter radio button', async function () {
    await inst.DuelManufacturerdetails();
});
When('TST22 I fill the field33 with the Value33', async function () {
    await inst.fill33DuelManufacturerdetails();
});
Then('TST22 manufacturer NEXT SECTION button', async function () {
    await inst.NewMeterNextsection();
});
Then('TST22 I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('TST22 the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});
When('TST22 I fill the field34 with the Value34', async function () {
    await inst.fill34AdditionalElecTestandChecks();
});
Then('TST22 I click on CAPTURE PHOTO OF TERMINAL SCREWS button', async function () {
    await inst.AdditionalTerminalscrewCapturePhoto();
});
Then('TST22 I fill the field35 with the Value35', async function () {
    await inst.TST22fill35AdditionalElecTestandChecks();
});
Then('TST22 I clk additional test on NEXT SECTION button', async function () {
    await inst.additionaltestNext();
});
Then('TST22 I should see ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});

/**********"ELEC INITIAL METER READING" */

Given('TST22 the ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});
When('TST22 I fill the FldName36 with the Value36', async function () {
    await riskassessElec.fillInitialElecMeterReading();
});
Then('TST22 I should see POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});

/**********"POST INSTALLATION CHECKS" */

Given('TST22 the POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});
When('TST22 I fill the FldName37 with the Value37', async function () {
    await inst.fill37PostInstallationChks();
});
Then('TST22 post installation page content display', async function () {
    await inst.PostInstallationChksCont();
});

/**********"POST INSTALLATION CHECKS Continuation" */

Given('TST22 the post installation page contect display', async function () {
    await inst.PostInstallationChksCont();
});
When('TST22 I fill the FldName38 with the Value38', async function () {
    await inst.fill38PostInstallationChks();
});
Then('TST22 I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button', async function () {
    await inst.captureteststicker();
});
Then('TST22 I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button', async function () {
    await inst.captureFinalMeterInst();
});
Then('TST22 I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button', async function () {
    await inst.captureteststickecloseup();
});
Then('TST22 I should see COMMISSIONING section', async function () {
    await inst.Commisioning();
});

/**********"Commisioning" */

Given('TST22 the COMMISSIONING section', async function () {
    await inst.Commisioning();
});
When('TST22 I fill the FldName39 with the Value39', async function () {
    await inst.fill39Commisioning();
});
Then('TST22 I click on ADD ANOTHER ASSET button', async function () {
    await inst.DueladdanotherSet();
});
Then('TST22 I fill the FldName40 with the Value40', async function () {
    await inst.Tst22fill40Commisioning();
});
Then('TST22 I clk commisioning on NEXT button', async function () {
    await inst.CommisioningClickNext();
});
Then('TST22 I should see ELECTRIC INSTALL & COMMISSIONING section', async function () {
    await inst.ElecInstallCommisioning();
});

/****************"SEND MESSAGE EICOM" */

Given('TST22 EICOM the Send Message button is displayed', async function () {
    await inst.ElecInstallCommisioning();
});
When('TST22 EICOM I click on Send Message EICOM button', async function () {
    await inst.clicksendmsgEICOM();
});
Then('TST22 EICOM I should see AWAITING RESPONSE button', async function () {
    await inst.SeeEICOMAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('TST22 EICOM the Awaiting Response button', async function () {
    await inst.SeeEICOMAwaitingresp();
});
When('TST22 EICOM I wait for the button to disappear', async function () {
    await inst.waitEICOMbuttontoDisappear();
});
Then('TST22 EICOM I should see Request Sent Successfully text message', async function () {
    await inst.reqsentMsg();
});
Then('TST22 EICOM I should see Pair Asset to Comms Hub text message', async function () {
    await inst.PairAssettoCommsHub();
});
Then('TST22 EICOM I should see Pairing Successful text message', async function () {
    await inst.pairingsuccessfulppmidcomm();
});
Then('TST22 EICOM I should see DCC Handover Requested text message', async function () {
    await inst.DCCHandoverText();
});
Then('TST22 EICOM I should see Device Clock Synchronised text message', async function () {
    await inst.DeviceClock();
});
Then('TST22 EICOM I should see MPAN Set, ESME Is Now Installed And Being Configured By DCC text message', async function () {
    await inst.MPANSetbyDCCText();
});
Then('TST22 EICOM I should see Joins are being Initiated text message', async function () {
    await inst.JoinsareinitText();
});

/********** "Commisioning Successful"*/

Given('TST22 the Commissioning Successful button is displayed', async function () {
    await inst.Seecommisionsuccessbutton();
});
When('TST22 I click on Commissioning Successful button', async function () {
    await inst.clickSeecommisionsuccessbutton();
});
Then('TST22 I should see NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

Given('TST22 the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
});
When('TST22 I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
});
Then('TST22 I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
});

/********** "NEW REGULATOR"*/

Given('TST22 the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('TST22 I fill the fields and values for new regulator section', async function () {
    await inst.fillduelfornewregulator(2);
});
Then('TST22 I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});

/**********"GAS INITIAL METER READING" */
Given('TST22 the GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});
When('TST22 I fill the fields with values Gas initial meter reading', async function () {
    await inst.fillthefieldsforinitmeterReadingduel();
});
Then('TST22 I should see INSTALL KIT section', async function () {
    await inst.installkitSec();
});

/**********"Install Kit " */
Given('TST22 the Gas Install Kit gas section', async function () {
    await inst.installkitSec();
});
When('TST22 I fill the Gas Install Kit gas section fields with values', async function () {
    await inst.fillthedetailsforinstallkit();
});
Then('TST22 I should see Perform Post Installation GAS Checks sec', async function () {
    await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('TST22 the Post Installation GAS sec', async function () {
    await inst.performpostinst();
});
When('TST22 I fill the Post Installation GAS sec fields with values', async function () {
    await inst.Tst22fillthefieldsforperformpostinstduel();
});
Then('TST22 I should see GICOM Message sec', async function () {
    await inst.gasInstallCommisioning();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('TST22 the GAS INSTALL & COMMISSIONING sec', async function () {
    await inst.gasInstallCommisioning();
});
When('TST22 I click on Send Message GICOM butn', async function () {
    await inst.sendMesgGICOM();
});
Then('TST22 I should see Awaiting Response butn', async function () {
    await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('TST22 the Awaiting Response butn after gas install', async function () {
    await inst.Awatingforgasinstallcommisioning();
});
When('TST22 I wait for the button to disappear after post install', async function () {
    await inst.waitforthebuttoDisappear();
});
Then('TST22 I should see Commissioning Successful button', async function () {
    await inst.commisioningsuccess();
});
Then('TST22 I should see Request Sent Successfully txt message', async function () {
    await inst.reqsentsuccess();
});
Then('TST22 I should see Pair Asset to Comms Hub text message', async function () {
    await inst.pairAsset();
});
Then('TST22 I should see DCC Handover Requested text message', async function () {
    await inst.DCCHandoverText();
});
Then('TST22 I should see Device Clock Synchronised text message', async function () {
    await inst.DeviceClock();
});
Then('TST22 I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message', async function () {
    await inst.MprnGSME();
});
Then('TST22 I should see DCC Handover Requested for GPF Device text message', async function () {
    await inst.DCCforGPFdevice();
});
Then('TST22 I should see Joins are being Initiated text message', async function () {
    await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('TST22G the Commissioning Successful button is displayed', async function () {
    await inst.commisioningSuc();
});
When('TST22G Commissioning Successful butn clk', async function () {
    await inst.clickonCommissioning();
});
Then('TST22G I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
    await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('TST22 the Gas Appliance Safety Checks sec', async function () {
    await inst.gasApplicancesafety();
});
When('TST22 I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
    await inst.fillthefieldsforgasApplicancesafety();
});
Then('TST22 I should see SMETS PPMID sec', async function () {
    await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('TST22 the INSTALL PPMID section', async function () {
    await inst.seePPMIDsection();
});
When('TST22 I fill the fields for Install PPMID', async function () {
    await inst.filltheduelforseePPMIDsection(2);
});
Then('TST22 I should see PPMID COMMISSIONING section', async function () {
    await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('TST22 the PPMID COMMISSIONING section', async function () {
    await inst.SeePPMIDcommisioning();
});
When('TST22 I click on Send Message IHD-PPMID butn', async function () {
    await inst.clickonIHDPPMID();
});
Then('TST22 I should see PPMID Awaiting Response butn', async function () {
    await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('TST22 the Awaiting Response butn after ppmid commisioning', async function () {
    await inst.AwaitingrespaftPPMID();
});
When('TST22 I wait for the button to disappear after PPMID Commisioning', async function () {
    await inst.waitforthebuttontoDisappearafterppmid();
});
Then('TST22 I should see PPMID Commissioning Successful button', async function () {
    await inst.ppmidsuccessbtn();
});
Then('TST22 I should see PPMID Request Sent Successfully txt message', async function () {
    await inst.reqsentsuctxt();
});
Then('TST22 I should see PPMID Pair Asset to Comms Hub text message', async function () {
    await inst.pairAssettoComms();
});
Then('TST22 I should see Pairing Successful text message', async function () {
    await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('TST22 the PPMID Commissioning Successful button is displayed', async function () {
    await inst.pairingsuccessfulppmidcomm();
});
When('TST22 I click on SUB button', async function () {
    await inst.clickonSUBbtn();
});
Then('TST22 I should see DEVICE BINDING and COMMISSIONING sec', async function () {
    await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('TST22 the DEVICE BINDING & COMMISSIONING section', async function () {
    await job.DeviceBinding();
});
When('TST22 I fill the fields53 and click next', async function () {
    await job.fillfield53dueldevicebinding();
});
Then('TST22 I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('TST22 the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
});
When('TST22 I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
});
Then('TST22 I should see SMART EDUCATION section', async function () {
    await job.smartEducation();
});

/**********"SMART EDUCATION" */
Given('TST22 the SMART EDUCATION section', async function () {
    await job.smartEducation();
});
When('TST22 I fill the fields55 and click next', async function () {
    await job.fillfield55duelsmartedu();
});
Then('TST22 I should see SMART LITERATURE LEFT ON SITE section', async function () {
    await job.TST12summary();
});

/**********"SUMMARY" */
Given('TST22 the SUMMARY section', async function () {
    await job.TST12summary();
});
When('TST22 I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
});
Then('TST22 See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
});

/**********"Capture Customer Signature" */
Given('TST22 the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
});
When('TST22 I write signature in Customer Signature', async function () {
    await job.writingSign();
});
Then('TST22 I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
});
Then('TST22 see Job Completed screen', async function () {
    await home.verifyCompletedStatus('DFExchange24');
});