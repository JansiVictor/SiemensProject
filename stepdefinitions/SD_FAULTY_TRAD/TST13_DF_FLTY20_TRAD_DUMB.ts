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


Given('TST13 the Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
});

When('TST13 I pass {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(utility.very_low);
});

Then('TST13 I click Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});

Then('TST13 I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('TST13 the Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});

When('TST13 I click on select button', async function () {
    await home.clickCorrectSelectLink('DFFLTY20NonSMETS2');
    await utility.wait(utility.medium_low);
});

Then('TST13 I should see Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
});

Given('TST13 the {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('TST13 i see Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
});
Then('TST13 I click on CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
});

Then('TST13 I should see page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
});

Then('TST13 I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
});

Then('TST13 I should see Contact made field', async function () {
    await utility.wait(utility.medium);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('TST13 the {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
});

When('TST13 I fill the fields with the value', async function () {
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
});

When('TST13 I click on DEPART button', async function () {
    await applist.clickDepartBtn();
});

Then('TST13 I should see Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('TST13 Appointment details', async function () {
    await applist.verifyDepartForAppointmentWindow();
});

When('TST13D I click on OK button', async function () {
    await applist.mprnOKbtn();
});

Then('TST13 I should see ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});

Then('TST13 I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

When('TST13 I click on ARRIVE button', async function () {
    await applist.clickArriveBtn();
});

Then('TST13 I should see Arrival Time details', async function () {
    await utility.wait(utility.medium);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});

Then('TST13 I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('TST13 the BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('TST13 I fill the DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
});

When('TST13 I click on ON SITE button', async function () {
    await doorstep.clickONSITEBtn();
});

Then('TST13 I should see RISK ASSESSMENT tab activated', async function () {
    await riskassess.verifyRiskAssessmentPage();
});

Then('TST13 I should see INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('TST13 the INITIAL RISK ASSESSMENT section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
});

When('TST13 I fill the initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
});

Then('TST13 I should see RISK ASSESSMENT ELEC section', async function () {
    await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('TST13 the RISK ASSESSMENT - ELEC section', async function () {
    await riskassess.verifyriskElecText();
});
When('TST13 I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskassess.fillRiskAssesmentElecFields();
});
When('TST13 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

    await riskassess.capturePhotoBtnDisplayed();
});
When('TST13 RISK ASSESSMENT ELEC NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
});
Then('TST13 I should see the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('TST13 the RISK ASSESSMENT - GAS section', async function () {
    await riskassess.verifyriskGasText();
});
When('TST13 I fill the field05 with the value05', async function () {
    await riskassess.fillthedtlsGas();
});
Then('TST13 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
    await riskassess.capturegasbtn();
});
Then('TST13 I fill the field06 with the value06', async function () {
    await riskassess.fillthedtl06();
});
Then('TST13E I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});

/***CAPTURE INITIAL PHOTO OF ELEC INSTALLATION */

Given('TST13E the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskassess.ElecInstSec();
});
When('TST13E I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.fillelecfullmeterInst();
});
Then('TST13E the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});


/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */

Given('TST13 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskassess.gasInstSec();
});
When('TST13 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskassess.gasfullmeterInst();
});
Then('TST13 I should see INITIAL POLARITY CHECK-MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('TST13 the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
});

When('TST13 I fill the INITIAL POLARITY CHECK field with the values', async function () {

    await riskassess.fillthePolarityCheckMartinDale();
});

Then('TST13 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskassess.verifyCapturepreInstallation();
});

Then('TST13 I fill the Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();
});

Then('TST13 I should see INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('TST13 the INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskassess.verifyMeterAndCutOut();
});

When('TST13 I fill the METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
});

When('TST13 I click on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
});

Then('TST13 I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
    await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('TST13 the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});

When('TST13 I fill the field010 with the value010', async function () {
    await remove.TST13fillcurrentIhdPPMIDdtls();
});

When('TST13 I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});

Then('TST13 current meter details page contect display', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('TST13 the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
When('TST13 I fill the field with the value', async function () {
    await remove.Tst13fillcurrentmeterdtlGassec();
});
Then('TST13 I should see CURRENT Electric Meter', async function () {
    await remove.CurrentMeterElec();
});

/*** CURRENT METER DETAILS - ELEC*/

Given('TST13 the CURRENT Electric Meter', async function () {
    await remove.CurrentMeterElec();
});
When('TST13 I fill the field011 with the value Value011', async function () {
    await remove.fillcurrentElecduelmeter();
});
Then('TST13 I should see DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('TST13 the DETERMINE FAULT ACTIVITY section', async function () {
    await remove.determintfaultActivity();
});
When('TST13 I fill the field14 with the value014', async function () {
    await remove.fillelecfaultysection();
    await remove.fill14commsdtls();
});
Then('TST13 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button', async function () {
    await remove.captureevidsuspectedtamp();
});
Then('TST13 I fill the field15 with the value15', async function () {
    await remove.Tst13fill15commsdtls();
});
Then('TST13 I select Elec Meter field', async function () {
    await remove.ElecmeterSelect();
});
Then('TST13 I select Gas Meter field', async function () {
    await remove.gasmeterSelect();
});
Then('TST13 I select Regulator field', async function () {
    await remove.regulatorSelect();
});
Then('TST13 fill the filelds45 and values', async function () {
    await remove.TST13fill45();
});
Then('TST13 I click on NEXT SECT button', async function () {
    await remove.clickoncommsNextsection();
});
Then('TST13 I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('TST13 the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('TST13 I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('TST13 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('TST13 I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('TST13 I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('TST13 I fill the field19 with the value19', async function () {
    await remove.fill19preInstdtls();
});
Then('TST13 I should see REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('TST13 the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('TST13 I fill the field23 with the value23', async function () {
    await remove.Tst13fill23GasmeterRemoval();
});
Then('TST13 I click on NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('TST13 I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('TST13 the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('TST13 I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
});
Then('TST13 I click OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonokGasAssetRemoval();
});
Then('TST13G I should see REMOVE COMMS HUB window', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE METER - Elec"*/
Given('TST13 the REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});
When('TST13 I fill the field023 with the Value023', async function () {
    await remove.Tst13fillElecmeterrem();
});
Then('TST13 I clk remove meter NEXT SECTION button', async function () {
    await remove.clickonnxtBtnofElecmeterRemoval();
});
Then('TST13 I should see CONFIRM ELECTRIC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('TST13 the CONFIRM ELEC ASSET REMOVAL section', async function () {
    await remove.confirmElecAssetRem();
});
When('TST13 I fill the field024 with the Value024', async function () {
    await remove.fill24ElecAssetRemoval();
});
Then('TST13 Click ok on asset removal', async function () {
    await remove.clickonokElecAssetRemoval();
});
Then('TST13 Sub to Install page', async function () {
    await remove.clickonsubmitforRemoval();
});
Then('TST13 I should see NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});

/**********"New Meter Details" */

Given('TST13 the NEW METER DETAILS section', async function () {
    await inst.DuelNewMeterDetails();
});
When('TST13 I fill the fields and values for New meter details', async function () {
    await inst.fillDuelNewMeterDetails(2);
});
Then('TST13 I should see NEW Meter section', async function () {
    await inst.DuelManufacturerdetails();
});

/**********"New Meter Manufacturer Details" */

Given('TST13 the Manufacturer Letter radio button', async function () {
    await inst.DuelManufacturerdetails();
});
When('TST13 I fill the field33 with the Value33', async function () {
    await inst.fill33DuelManufacturerdetails();
});
Then('TST13 manufacturer NEXT SECTION button', async function () {
    await inst.NewMeterNextsection();
});
Then('TST13 I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('TST13 the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});
When('TST13 I fill the field34 with the Value34', async function () {
    await inst.fill34AdditionalElecTestandChecks();
});
Then('TST13 I click on CAPTURE PHOTO OF TERMINAL SCREWS button', async function () {
    await inst.AdditionalTerminalscrewCapturePhoto();
});
Then('TST13 I fill the field35 with the Value35', async function () {
    await inst.fill35AdditionalElecTestandChecks();
});
Then('TST13 I clk additional test on NEXT SECTION button', async function () {
    await inst.additionaltestNext();
});
Then('TST13 I should see ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});

/**********"ELEC INITIAL METER READING" */

Given('TST13 the ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});
When('TST13 I fill the FldName36 with the Value36', async function () {
    await inst.fillthefieldsforinitmeterReading();
});
Then('TST13 I should see POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});

/**********"POST INSTALLATION CHECKS" */

Given('TST13 the POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});
When('TST13 I fill the FldName37 with the Value37', async function () {
    await inst.fill37PostInstallationChks();
});
Then('TST13 post installation page content display', async function () {
    await inst.PostInstallationChksCont();
});

/**********"POST INSTALLATION CHECKS Continuation" */

Given('TST13 the post installation page contect display', async function () {
    await inst.PostInstallationChksCont();
});
When('TST13 I fill the FldName38 with the Value38', async function () {
    await inst.fill38PostInstallationChks();
});
Then('TST13 I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button', async function () {
    await inst.captureteststicker();
});
Then('TST13 I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button', async function () {
    await inst.captureFinalMeterInst();
});
Then('TST13 I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button', async function () {
    await inst.captureteststickecloseup();
});
Then('TST13 I should see COMMISSIONING section', async function () {
    await inst.Commisioning();
});

/**********"Commisioning" */

Given('TST13 the COMMISSIONING section', async function () {
    await inst.Commisioning();
});
When('TST13 I fill the FldName39 with the Value39', async function () {
    await inst.fill39Commisioning();
});
Then('TST13 I click on ADD ANOTHER ASSET button', async function () {
    await inst.DueladdanotherSet();
});
Then('TST13 I fill the FldName40 with the Value40', async function () {
    await inst.Tst13fill40Commisioning();
});
Then('TST13 I clk commisioning on NEXT button', async function () {
    await inst.CommisioningClickNext();
});
Then('TST13 I should see NEW GAS METER DETAILS section', async function () {
    try {
        await inst.Tst13ElecFailedDummy();
    } catch (error) {
        console.log("Not need to bypadd the EICOM now");
    }
    await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

Given('TST13 the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
  });
  When('TST13 I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
  });
  Then('TST13 I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
  });

/********** "NEW REGULATOR"*/

Given('TST13 the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('TST13 I fill the fields and values for new regulator section', async function () {
  await inst.fillthefieldsfornewregulator(2);
});
Then('TST13 I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});

/**********"GAS INITIAL METER READING" */
Given('TST13 the GAS INITIAL METER READING section', async function () {
  await inst.gasinitialmeterreading();
});
When('TST13 I fill the fields with values Gas initial meter reading', async function () {
  await inst.fillthefieldsforinitmeterReadingduel();
});
Then('TST13 I should see INSTALL KIT section', async function () {
  await inst.installkitSec();
});

/**********"Install Kit " */
Given('TST13 the Gas Install Kit gas section', async function () {
  await inst.installkitSec();
});
When('TST13 I fill the Gas Install Kit gas section fields with values', async function () {
  await inst.fillthedetailsforinstallkit();
});
Then('TST13 I should see Perform Post Installation GAS Checks sec', async function () {
  await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('TST13 the Post Installation GAS sec', async function () {
  await inst.performpostinst();
});
When('TST13 I fill the Post Installation GAS sec fields with values', async function () {
  await inst.Tst13fillthefieldsforperformpostinst();
});
Then('TST13G I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
  await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('TST13 the Gas Appliance Safety Checks sec', async function () {
  await inst.gasApplicancesafety();
});
When('TST13 I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
  await inst.fillthefieldsforgasApplicancesafety();
});
When('TST13 I click SUB button', async function () {
    //await inst.TST13InstallPPMIDbypass();
    await inst.Tst12submittoJobcompletion();
});
Then('TST13 I should see ENERGY EFFICIENCY INFORMATION section', async function () {
  await job.energyeffInfo();
});

  /**********"Energy Efficiency Information" */

  Given('TST13 the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });
  When('TST13 I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
  });
  Then('TST13 I should see SMART EDUCATION section', async function () {
    await job.smartEducation();
  });

   /**********"SMART EDUCATION" */
  Given('TST13 the SMART EDUCATION section', async function () {
    await job.smartEducation();
  });
  When('TST13 I fill the fields55 and click next', async function () {
    await job.Tst13fillfield55duelsmartedu();
  });
  Then('TST13 I should see SUMMARY section', async function () {
    await job.TST12summary();
  });

 /**********"SUMMARY" */
 Given('TST13 the SUMMARY section', async function () {
    await job.TST12summary();
  });
  When('TST13 I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
  });
  Then('TST13 See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
  });

   /**********"Capture Customer Signature" */
 Given('TST13 the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
  });
  When('TST13 I write signature in Customer Signature', async function () {
    await job.writingSign();
  });
  Then('TST13 I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
  });
  Then('TST13 see Job Completed screen', async function () {
    await home.verifyCompletedStatus('DFFLTY20NonSMETS2');
  });