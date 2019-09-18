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

Given('TST12 the Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(5000);
});

When('TST12 I pass {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('TST12 I click Login button', async function () {
    await login.clickLogin();
    await utility.wait(10000);
});

Then('TST12 I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('TST12 the Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});
When('TST12 I click on select button', async function () {
    await utility.wait(2000);
    //await home.continueLink.click();
    await home.selectLink.click();
    //await home.clickOnTheSelectLink();
    await utility.wait(5000);
});
Then('TST12 I should see Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

Given('TST12 the {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
});
When('TST12 i see Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('TST12 I click on CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});
Then('TST12 I should see page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});
Then('TST12 I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
});
Then('TST12 I should see Contact made field', async function () {
    await utility.wait(5000);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('TST12 the {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
});
When('TST12 I fill the fields with the value', async function () {
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});
When('TST12 I click on DEPART button', async function () {
    await applist.clickDepartBtn();
});
Then('TST12 I should see Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('TST12 Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});
When('TST12 I click on OK button', async function () {
    await applist.mprnOKbtn();
});
Then('TST12 I should see ARRIVE button', async function () {
    await utility.wait(10000);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});
Then('TST12 I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(5000);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});
When('TST12 I click on ARRIVE button', async function () {
    await applist.clickArriveBtn();
});
Then('TST12 I should see Arrival Time details', async function () {
    await utility.wait(5000);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});
Then('TST12 I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('TST12 the BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});
When('TST12 I fill the DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});
When('TST12 I click on ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
});
Then('TST12 I should see RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
});
Then('TST12 I should see INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('TST12 the INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});
When('TST12 I fill the initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
});
Then('TST12 I should see INFO window', async function () {
    await riskassess.infoTextPopUp();
});

/***INFO window with the text */

Given('TST12 the INFO window with the text', async function () {
    await riskassess.INFOOK();
});

When('TST12 click OK in Popup', async function () {
    await riskassess.INFOOKClick();
    //await riskassess.NeedtoWork();
    await utility.wait(10000);
  if (riskassess.NeedtoWorkYES.isDisplayed()) {
    var element = riskassess.NeedtoWorkYES;
    browser.executeScript("arguments[0].click()", element);
    await utility.wait(5000);
  }
});

Then('TST12 I should see RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */

Given('TST12 the RISK ASSESSMENT - ELEC section', async function () {
    await riskassess.verifyriskElecText();
});
When('TST12 I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassess.fillRiskAssesmentElecFields();
});
When('TST12 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
    await riskassess.capturePhotoBtnDisplayed();
});
When('TST12 I click on NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
});
Then('TST12 I should see the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('TST12 the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();
});
When('TST12 I fill the field05 with the value05', async function () {
    await riskassess.fillthedtlsGas();
});
Then('TST12 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
    await riskassess.capturegasbtn();
});
Then('TST12 I fill the field06 with the value06', async function () {
    await riskassess.fillthedtl06();
});
// Then('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION btn', async function () {
//   await riskassess.capturefullmeterInst();
// });
Then('TST12 I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});

/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */

Given('TST12 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});
When('TST12 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.gasfullmeterInst();
});
Then('TST12 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('TST12 the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});
When('TST12 I fill the INITIAL POLARITY CHECK field with the values', async function () {
    await riskassess.fillthePolarityCheckMartinDale();
});
Then('TST12 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskassess.verifyCapturepreInstallation();
});
Then('TST12 I fill the Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();
});
Then('TST12 I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('TST12 the INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});
When('TST12 I fill the METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});
When('TST12 I click on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
});
Then('TST12 I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
    await remove.currentihdppmiddetailtext();
});

/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('TST12 the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});
When('TST12 I fill the field010 with the value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});
When('TST12 I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
Then('TST12 I should see the page contect display of current meter details', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('TST12 the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterGasPageContent();
});
When('TST12 I fill the field with the value', async function () {
    await remove.fillcurrentmeterdtlGassec();
});
Then('TST12 I should see CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Then('TST12 I should see the page contect display', async function () {
    await remove.currentcommsHubdtlPgCont();
});

/*** CURRENT COMMS HUB DETAILS*/

Given('TST12 the CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
When('TST12 I fill the field13 with the value13', async function () {
    await remove.fillcurrenthubdtl(1);
});
Then('TST12 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
    await remove.capturephotocommsHub();
});
Then('TST12 I should see DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('TST12 the DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});
When('TST12 I fill the field14 with the value014', async function () {
    await remove.fill14commsdtls();
});
Then('TST12 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button', async function () {
    await remove.captureevidsuspectedtamp();
});
Then('TST12 I fill the field15 with the value15', async function () {
    await remove.fill15commsdtls();
});
Then('TST12 I click OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting', async function () {
    await remove.clickOk5mins();
});
Then('TST12 I fill the field16 with the value16', async function () {
    await remove.Tst12fill16commsdtls();
});
Then('TST12 I click on NEXT SECT button', async function () {
    await remove.clickoncommsNextsection();
});
Then('TST12 I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('TST12 the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('TST12 I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('TST12 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('TST12 I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('TST12 I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('TST12 I fill the field19 with the value19', async function () {
    await remove.fill19preInstdtls();
});
Then('TST12 submit to Install section', async function () {
    await remove.NexttoInstall();
});
Then('TST12 I should see INSTALL KIT section', async function () {
    await inst.installkitSec();
});

/**********"Install Kit " */
Given('TST12 the Gas Install Kit gas section', async function () {
    await inst.installkitSec();
});
When('TST12 I fill the Gas Install Kit gas section fields with values', async function () {
    await inst.fillthedetailsforinstallkit();
});
Then('TST12 I should see Perform Post Installation GAS Checks sec', async function () {
    await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('TST12 the Post Installation GAS sec', async function () {
    await inst.performpostinst();
});
When('TST12 I fill the Post Installation GAS sec fields with values', async function () {
    await inst.Tst12fillthefieldsforperformpostinst();
});
Then('TST12 I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
    await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('TST12 the Gas Appliance Safety Checks sec', async function () {
    await inst.gasApplicancesafety();
});
When('TST12 I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
    await inst.fillthefieldsforgasApplicancesafety();
    await inst.Tst12submittoJobcompletion();
});
Then('TST12 I should see DEVICE BINDING and COMMISSIONING sec', async function () {
    await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('TST12 the DEVICE BINDING & COMMISSIONING section', async function () {
    await job.DeviceBinding();
});
When('TST12 I fill the fields53 and click next', async function () {
    await job.Tst12fillfield53dueldevicebinding();
});
Then('TST12 I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('TST12 the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
});
When('TST12 I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
});
Then('TST12 I should see Summary section', async function () {
    await job.TST12summary();
});

/**********"SUMMARY" */
Given('TST12 the Summary section', async function () {
    await job.TST12summary();
});
When('TST12 I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
});
Then('TST12 See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
});

/**********"Capture Customer Signature" */
Given('TST12 the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
});
When('TST12 I write signature in Customer Signature', async function () {
    await job.writingSign();
});
Then('TST12 I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
});
Then('TST12 see Job Completed screen', async function () {
    await job.Tst12JobCompletedScreen();
});