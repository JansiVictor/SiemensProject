import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../../pages/loginPage";
import { HomePageObject } from "../../pages/HomePage";
import { AppointmentListPageObject } from "../../pages/AppointmentListPage";
import { DoorStepPageObject } from "../../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../../pages/RiskAssessmentPage";
import { RemovePageObject } from "../../pages/RemovePage";
import { JobCompletionPageObject } from "../../pages/JobCompletionPage";
import { config } from "../../config/config";
import { Utility } from "../../support/utility";
import { when } from "q";
import { InstallPageObject } from "../../pages/InstallPage";
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

Given('TST15 the Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
});

When('TST15 I pass {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('TST15 I click Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});

Then('TST15 I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('TST15 the Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});

When('TST15 I click on select button', async function () {
    await home.clickCorrectSelectLink('SFGasFLTY18NonSMETS2');
    await utility.wait(utility.medium_low);
});

Then('TST15 I should see Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

Given('TST15 the {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('TST15 i see Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('TST15 CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});

Then('TST15 I should see page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});

Then('TST15 I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
});

Then('TST15 I should see Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('TST15 the {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('TST15 I fill the fields with the value', async function () {
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});

When('TST15 DEPART button', async function () {
    await applist.clickDepartBtn();
});

Then('TST15 I should see Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('TST15 Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

When('TST15 OK button', async function () {
    await applist.mprnOKbtn();
});

Then('TST15 I should see ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});

Then('TST15 I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium_low);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

When('TST15 ARRIVE button', async function () {
    await applist.clickArriveBtn();
});

Then('TST15 I should see Arrival Time details', async function () {
    await utility.wait(utility.medium_low);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});

Then('TST15 I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('TST15 the BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('TST15 I fill the DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});

When('TST15 ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
});

Then('TST15 I should see RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
});

Then('TST15 I should see INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('TST15 the INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

When('TST15 I fill the initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
    if (riskassess.NeedtoWorkYES.isDisplayed()) {
        var element = riskassess.NeedtoWorkYES;
        browser.executeScript("arguments[0].click()", element);
        await utility.wait(utility.medium_low);
    }
});

Then('TST15 I should see RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('TST15 the RISK ASSESSMENT - ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

When('TST15 I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassess.fillRiskAssesmentElecFields();
});

When('TST15 CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

    await riskassess.capturePhotoBtnDisplayed();
});

When('TST15 NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
});

Then('TST15 I should see the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('TST15 the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();
});
When('TST15 I fill the field05 with the value05', async function () {
    await riskassess.fillthedtlsGas();
});
Then('TST15 CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
    await riskassess.capturegasbtn();
});
Then('TST15 I fill the field06 with the value06', async function () {
    await riskassess.fillthedtl06();
});
// Then('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION btn', async function () {
//   await riskassess.capturefullmeterInst();
// });
Then('TST15 I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});

/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */


Given('TST15 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});
When('TST15 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.gasfullmeterInst();
});
Then('TST15 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('TST15 the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

When('TST15 I fill the INITIAL POLARITY CHECK field with the values', async function () {

    await riskassess.fillthePolarityCheckMartinDale();
});

Then('TST15 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskassess.verifyCapturepreInstallation();
});

Then('TST15 I fill the Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();

});

Then('TST15 I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('TST15 the INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

When('TST15 I fill the METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});

When('TST15 on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
});

Then('TST15 I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
    await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('TST15 the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});

When('TST15 I fill the field010 with the value010', async function () {
    await remove.TST13fillcurrentIhdPPMIDdtls();
});

When('TST15 I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});

Then('TST15 I should see the page contect display of current meter details', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('TST15 the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterGasPageContent();
});
When('TST15 I fill the field with the value', async function () {
    await remove.fillcurrentmeterdtlGassec();
});
Then('TST15 I should see DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('TST15 the DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});
When('TST15 I fill the field14 with the value014', async function () {
    await remove.fill14commsdtls();
});
Then('TST15 Determine CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button', async function () {
    await remove.captureevidsuspectedtamp();
});
Then('TST15 I fill the field15 with the value15', async function () {
    await remove.Tst13fill15commsdtls();
});
Then('TST15 I select Gas Meter field', async function () {
    await remove.gasmeterSelect();
});
Then('TST15 I select Regulator field', async function () {
    await remove.regulatorSelect();
});
Then('TST15 fill the filelds45 and values', async function () {
    await remove.TST13fill45();
});
Then('TST15 I click NEXT SECT button', async function () {
    await remove.clickoncommsNextsection();
});
Then('TST15 I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('TST15 the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('TST15 I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('TST15 CAPTURE U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('TST15 I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('TST15 I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('TST15 I fill the field19 with the value19', async function () {
    await remove.fill19preInstdtls();
});
Then('TST15 I should see REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('TST15 the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('TST15 I fill the field23 with the value23', async function () {
    await remove.fill23GasmeterRemoval();
});
Then('TST15 NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('TST15 I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('TST15 the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('TST15 I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
});
Then('TST15 OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonokGasAssetRemoval();
    await remove.clickonsubmitforRemoval();
});
Then('TST15 I should see NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

Given('TST15 the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
});
When('TST15 I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
});
Then('TST15 I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
});

/********** "NEW REGULATOR"*/

Given('TST15 the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('TST15 I fill the fields and values for new regulator section', async function () {
    await inst.TST15fillthefieldsfornewregulator(2);
});
Then('TST15 I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});

/**********"GAS INITIAL METER READING" */
Given('TST15 the GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});
When('TST15 I fill the fields with values Gas initial meter reading', async function () {
    await inst.fillthefieldsforinitmeterReading();
});
Then('TST15 I should see INSTALL KIT section', async function () {
    await inst.installkitSec();
});

/**********"Install Kit " */
Given('TST15 the Gas Install Kit gas section', async function () {
    await inst.installkitSec();
});
When('TST15 I fill the Gas Install Kit gas section fields with values', async function () {
    await inst.fillthedetailsforinstallkit();
});
Then('TST15 I should see Perform Post Installation GAS Checks sec', async function () {
    await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('TST15 the Post Installation GAS sec', async function () {
    await inst.performpostinst();
});
When('TST15 I fill the Post Installation GAS sec fields with values', async function () {
    await inst.Tst15fillthefieldsforperformpostinst();
});
Then('TST15 I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
    await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('TST15 the Gas Appliance Safety Checks sec', async function () {
    await inst.gasApplicancesafety();
});
When('TST15 I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
    await inst.fillthefieldsforgasApplicancesafety();
});
When('TST15 I click SUB button', async function () {
    try {
        await inst.TST13InstallPPMIDbypass();
    } catch (error) {
        console.log("PMID is not diplayed to bypass now");
    }
    await inst.Tst12submittoJobcompletion();
});
Then('TST15 I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('TST15 the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
});
When('TST15 I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
});
Then('TST15 I should see SMART EDUCATION section', async function () {
    await job.smartEducation();
});

/**********"SMART EDUCATION" */
Given('TST15 the SMART EDUCATION section', async function () {
    await job.smartEducation();
});
When('TST15 I fill the fields55 and click next', async function () {
    await job.Tst13fillfield55duelsmartedu();
});
Then('TST15 I should see SUMMARY section', async function () {
    await job.TST12summary();
});

/**********"SUMMARY" */
Given('TST15 the SUMMARY section', async function () {
    await job.TST12summary();
});
When('TST15 I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
});
Then('TST15 See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
});

/**********"Capture Customer Signature" */
Given('TST15 the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
});
When('TST15 I write signature in Customer Signature', async function () {
    await job.writingSign();
});
Then('TST15 I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
});
Then('TST15 see Job Completed screen', async function () {
    await home.verifyCompletedStatus('SFGasFLTY18NonSMETS2');
});