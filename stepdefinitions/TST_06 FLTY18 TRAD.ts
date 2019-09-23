import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { HomePageObject } from "../pages/HomePage";
import { AppointmentListPageObject } from "../pages/AppointmentListPage";
import { DoorStepPageObject } from "../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../pages/RiskAssessmentPage";
import { RemovePageObject } from "../pages/RemovePage";
import { config } from "../config/config";
import { Utility } from "../support/utility";
import { when } from "q";
import { InstallPageObject } from "../pages/InstallPage";
import { ElectricPageObject } from "../pages/ElectricPage";
import { GASPageObject } from "../pages/GASPage";
import { JobCompletionPageObject } from "../pages/JobCompletionPage";
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
const riskassessTRAD: ElectricPageObject = new ElectricPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject =new InstallPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();

Given('the Login Page for FLTY18TRAD', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(5000);
});
When('I pass {string} and {string} for FLTY18TRAD', async function (username, password) {
  await login.setUsernamePassword(username, password);
  await utility.wait(500);
});
Then('I click Login button for FLTY18TRAD', async function () {
  await login.clickLogin();
  await utility.wait(10000);
});
Then('I should see the Appointment List for FLTY18TRAD', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

/*Appointmnet List Page and Select */

Given('the Appointment List window for FLTY18TRAD', async function () {
  await home.verifyAppointmentListPage();
});
When('I click on select button for FLTY18TRAD', async function () {
  await utility.wait(2000);
  await home.clickCorrectSelectLink('SFGFLTY18TRAD');
  await utility.wait(5000);
});
Then('I should see Work Order window for FLTY18TRAD', async function () {
  await applist.verifyWorkOrderWindowText();
});

/* CALL FORWARD */

Given('the {string} window for FLTY18TRAD', async function (string) {
   await applist.verifyWorkOrderWindowText();
});
When('i see Call Forward or Arrive Button for FLTY18TRAD', async function () {
  await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button for FLTY18TRAD', async function () {
  await applist.clickOnCallForwardBtn();
});
Then('I should see page contect display for FLTY18TRAD', async function () {
  await applist.validateTheCallFrwdPageTextDisplay();
});
Then('I should see the CUSTOMER CONTACT NUMBER for FLTY18TRAD', async function () {
    await applist.customercontactnumberavailable();
 });
Then('I should see Contact made field for FLTY18TRAD', async function () {
  await utility.wait(5000);
  await expect(await applist.contactMadeText.getText()).equal("Contact made?");
  await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('the {string} page for FLTY18TRAD', async function (string) {
  await applist.verifyWorkOrderWindowText();
});
When('I fill the fields with the value for FLTY18TRAD', async function () {
  await applist.clickOnContactMadeOtion();
  await applist.appointmentConfirmationYes();
  await applist.additionalDetails();
});
When('I click on DEPART button for FLTY18TRAD', async function () {
  await applist.clickDepartBtn();
});
Then('I should see Depart for Appointment window for FLTY18TRAD', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('Appointment details for FLTY18TRAD', async function () {
  await applist.verifyDepartForAppointmentWindow();
});
When('I click on OK button for FLTY18TRAD', async function () {
  await applist.mprnOKbtn();
});
Then('I should see ARRIVE button for FLTY18TRAD', async function () {
  await utility.wait(10000);
  await applist.arriveBtn.getText().then(function (arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);
  });
});
Then('I should see DOORSTEP PROTOCOL tab activated for FLTY18TRAD', async function () {
  await utility.wait(5000);
  await applist.doorStepPROText.getText().then(function (doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
  });
});
When('I click on ARRIVE button for FLTY18TRAD', async function () {
  await applist.clickArriveBtn();
});
Then('I should see Arrival Time details for FLTY18TRAD', async function () {
  //comment these 2 lines when continue link is not displayed
  // await utility.wait(5000);
  //await applist.continueLink.click();
  await utility.wait(5000);
  await applist.arrivalTime.getText().then(function (arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);
  });
});
Then('I should see BE AWARE OF ANY DANGER! section for FLTY18TRAD', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('the BE AWARE OF ANY DANGER! section for FLTY18TRAD', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});
When('I fill the DoorStep Protocol fields with the value for FLTY18TRAD', async function () {
  await doorstep.fillTheDoorStepDetails();
});
When('I click on ON SITE button for FLTY18TRAD', async function () {
  await doorstep.clickONSITEBtn();
});
Then('I should see RISK ASSESSMENT tab activated for FLTY18TRAD', async function () {
  await riskassess.verifyRiskAssessmentPage();
});
Then('I should see INITIAL RISK ASSESSMENT section for FLTY18TRAD', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('the INITIAL RISK ASSESSMENT section for FLTY18TRAD', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values for FLTY18TRAD', async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see INFO window for FLTY18TRAD', async function () {
  await riskassess.infoTextPopUp();
});

When('I fill Need to work Yes for FLTY18TRAD', async function () {
   if (riskassess.NeedtoWorkYES.isDisplayed()) {
    var element = riskassess.NeedtoWorkYES;
    browser.executeScript("arguments[0].click()", element);
    await utility.wait(5000);
  }
});

Then('I should see RISK ASSESSMENT ELEC section for FLTY18TRAD', async function () {
  await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('the RISK ASSESSMENT - ELEC section for FLTY18TRAD', async function () {
  await riskassess.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY18TRAD', async function () {
  await riskassess.fillRiskAssesmentElecFields();
});

When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY18TRAD', async function () {

  await riskassess.capturePhotoBtnDisplayed();
});

When('I click on NEXT SECTION button for FLTY18TRAD', async function () {
  await riskassess.clickNextSectionBtn();
});

Then('I should see the RISK ASSESSMENT - GAS section for FLTY18TRAD', async function () {
  await riskassess.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('the RISK ASSESSMENT - GAS section for FLTY18TRAD', async function () {
  await riskassess.verifyriskGasText();
});
When('I fill the field05 with the value05 for FLTY18TRAD', async function () {
  await riskassess.fillthedtlsGas();
});
Then('I click on CAPTURE PHOTOGRAPHIC EVIDENCE button for FLTY18TRAD', async function () {
  await riskassess.capturegasbtn();
});
Then('I fill the field06 with the value06 for FLTY18TRAD', async function () {
  await riskassess.fillthedtl06();
});
Then('I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY18TRAD', async function () {
  await riskassess.gasInstSec();
});

/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */

Given('the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section for FLTY18TRAD', async function () {
  await riskassess.gasInstSec();
});
When('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button gas for FLTY18TRAD', async function () {
  await riskassess.gasfullmeterInst();
});
Then('I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for FLTY18TRAD', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY18TRAD', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

When('I fill the INITIAL POLARITY CHECK field with the values for FLTY18TRAD', async function () {

  await riskassess.fillthePolarityCheckMartinDale();
});

Then('I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY18TRAD', async function () {
  await riskassess.verifyCapturepreInstallation();
});

Then('I fill the Socket Found field with the values for FLTY18TRAD', async function () {
  await riskassess.verifyanySocketFoundNO();

});

Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY18TRAD', async function () {
  await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY18TRAD', async function () {
  await riskassess.verifyMeterAndCutOut();
});

When('I fill the METER AND CUT OUT fields with the values for FLTY18TRAD', async function () {
  await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on NEXT button for FLTY18TRAD', async function () {
  await riskassess.meterCutOutnextSection();
});

When('I click on SUBMIT button for FLTY18TRAD', async function () {
  await riskassess.polarityMeterCutoutSubmit();
});

Then('I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY18TRAD', async function () {
  await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('the CURRENT IHD-PPMID DETAILS section for FLTY18TRAD', async function () {
  await remove.currentihdppmiddetailtext();
});

When('I fill the field010 with the value010 for FLTY18TRAD', async function () {
  await remove.fillcurrentIhdPPMIDdtlsTRAD();
});

When('I should see CURRENT METER DETAILS - GAS section for FLTY18TRAD', async function () {
  await remove.capturecurrentmeterGasPageContent();
 });

Then('I should see the page contect display of current meter details for FLTY18TRAD', async function () {
  await remove.capturecurrentmeterGasPageContent();
});

//************************************* */

/*** CURRENT METER DETAILS - GAS*/

Given('the CURRENT METER DETAILS - GAS section for FLTY18TRAD', async function () {
  await remove.currentmeterGasPageContent();
});
When('I fill the field with the value gas for FLTY18TRAD',  async function () {
  await remove.fillcapturecurrentmeterdtlGassecTRAD();  
});

Then('I should see the DETERMINE FAULT ACTIVITY section for FLTY18TRAD', async function () {
  
  await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('the DETERMINE FAULT ACTIVITY section for FLTY18TRAD', async function () {
  await remove.determintfaultActivity();
});

When('I fill values elec and gas meter Supply for FLTY18TRAD', async function () {
  await remove.confirmMeterSupplyGasTRAD();
});

Then('I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY18TRAD', async function () {
  await remove.captureevidsuspectedtamp();
});
Then('I fill for SMET2 Asset Installed for FLTY18TRAD', async function () {
  await remove.smet2AssetInstalled();
});
Then('I fill do you need exchange asset for FLTY18TRAD', async function () {
  await remove.exchangeAssetGasTRAD();
});
Then('I fill equipment reposition for FLTY18TRAD', async function () {
  await remove.equipReposition();
});
Then('I select SMETS2 Offered for FLTY18TRAD', async function () {
  await remove.smetsOffered();
});

Then('I click on NEXT SECT button for FLTY18TRAD', async function () {
  await remove.clickoncommsNextsection();
});
Then('I should see PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY18TRAD', async function () {
  await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('the PRE INSTALLATION GAS TIGHTNESS TEST section for FLTY18TRAD', async function () {
  await remove.preinstgasTighttest();
});
When('I fill the field17 with the value17 for FLTY18TRAD', async function () {
  await remove.fill17preInstdtls();
});
Then('I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button for FLTY18TRAD', async function () {
  await remove.capturepressureMB();
});
Then('I fill the field18 with the value18 for FLTY18TRAD', async function () {
  await remove.fill18preInstdtls();
});
Then('I see Gas Tightness Test Completed field as FAIL for FLTY18TRAD', async function () {
  await remove.gastightnessfieldfailed();
});
Then('I fill the field19 with the value19 for FLTY18TRAD', async function () {
  await remove.fill19preInstdtls();
});
Then('I should see REMOVE GAS METER section for FLTY18TRAD', async function () {
  await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('the REMOVE GAS METER section for FLTY18TRAD', async function () {
  await remove.RmvGasmeterSec();
});
When('I fill the field23 with the value23 for FLTY18TRAD', async function () {
  await remove.fill23GasmeterRemoval();
});
Then('I click on NEXT button in removing gas meter for FLTY18TRAD', async function () {
  
  await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('I should see CONFIRM GAS ASSET REMOVAL section for FLTY18TRAD', async function () {
  await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('the CONFIRM GAS ASSET REMOVAL section for FLTY18TRAD', async function () {
  await remove.confirmGasAssetRemoval();
});
When('I fill the field24 with the value24 for FLTY18TRAD', async function () {
  await remove.fill24GasAssetRemoval();
});
Then('I click on OK btn in Updated window with the text Asset successfully added to Returns list for FLTY18TRAD', async function () {
  await remove.clickonokGasAssetRemoval();
});

Then('I should click on next section for FLTY18TRAD', async function () {
   await remove.clickonNextsectionRemoveTRAD();
  console.log("Next Sec  Clicked")
});

Then('I should click on submit button for FLTY18TRAD', async function () {
await remove.clickonsubmitforRemoval();
console.log("Submit Clicked")

 });

 Then('I should see INSTALL COMMS HUB section for FLTY18TRAD', async function () {
  await inst.InstallCommsHubSection();
});

/********** "INSTALL COMMS HUB"*/

Given('the INSTALL COMMS HUB sec for FLTY18TRAD', async function () {
    await inst.InstallCommsHubSection();
});

When('I fill the Ins comms hub fields and capture photo EVIDENCE for FLTY18TRAD', async function () {

 await inst.fillfieldsInstallcommshubTRAD(2);

});

Then('I should see NEW GAS METER DETAILS section for FLTY18TRAD', async function () {

	await inst.gasMeterdetails();

});

//---------------------------------------------------------------------------------
/**********"NEW GAS METER DETAILS" */

Given('the NEW GAS METER DETAILS section for FLTY18TRAD', async function () {
  await inst.gasMeterdetails();
});
When('I fill the fields and values for New gas meter details for FLTY18TRAD', async function () {
  await inst.fillthefieldsfornewgasmeterdtls(2);
  
});
Then('I should see the NEW REGULATOR section for FLTY18TRAD', async function () {
  await inst.newregulatorTRAD();
 
});


/********** "NEW REGULATOR"*/

Given('the NEW REGULATOR section for FLTY18TRAD', async function () {
  await inst.newregulatorTRAD();
});
When('I fill the fields and values for new regulator section for FLTY18TRAD', async function () {
await inst.fillduelfornewregulatorTRAD(2);
});
Then('I should see GAS INITIAL METER READING section for FLTY18TRAD', async function () {
  await inst.gasinitialmeterreading();
});


/**********"GAS INITIAL METER READING" */
Given('the GAS INITIAL METER READING section for FLTY18TRAD', async function () {
await inst.gasinitialmeterreading();
});
When('I fill the fields with values Gas initial meter reading for FLTY18TRAD', async function () {
await inst.fillthefieldsforinitmeterReading();
});
Then('I should see INSTALL KIT section for FLTY18TRAD', async function () {
await inst.installkitSec();
});

/**********"Install Kit " */
Given('the Gas Install Kit gas section for FLTY18TRAD', async function () {
await inst.installkitSec();
});
When('I fill the Gas Install Kit gas section fields with values for FLTY18TRAD', async function () {
await inst.fillthedetailsforinstallkit();
});
Then('I should see Perform Post Installation GAS Checks sec for FLTY18TRAD', async function () {
await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('the Post Installation GAS sec for FLTY18TRAD', async function () {
await inst.performpostinst();
});
When('I fill the Post Installation GAS sec fields with values for FLTY18TRAD', async function () {
await inst.fillthefieldsforperformpostinst();

});
Then('I should see GICOM Message sec for FLTY18TRAD', async function () {
await inst.gasInstallCommisioning();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('the GAS INSTALL & COMMISSIONING sec for FLTY18TRAD', async function () {
await inst.gasInstallCommisioning();
});
When('I click on Send Message GICOM butn for FLTY18TRAD', async function () {
await inst.sendMesgGICOM();
});
Then('I should see Awaiting Response butn for FLTY18TRAD', async function () {
await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('the Awaiting Response butn after gas install for FLTY18TRAD', async function () {
await inst.Awatingforgasinstallcommisioning();
});
When('I wait for the button to disappear after post install for FLTY18TRAD', async function () {
await inst.waitforthebuttoDisappear();
});
Then('I should see Commissioning Successful button for FLTY18TRAD', async function () {
await inst.commisioningsuccess();
});
Then('I should see Request Sent Successfully txt message for FLTY18TRAD', async function () {
await inst.reqsentsuccess();
});
Then('I should see Pair Asset to Comms Hub text message for FLTY18TRAD', async function () {
await inst.pairAsset();
});
Then('I should see DCC Handover Requested text message for FLTY18TRAD', async function () {
await inst.DCCHandoverText();
});
Then('I should see Device Clock Synchronised text message for FLTY18TRAD', async function () {
await inst.DeviceClock();
});
Then('I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message for FLTY18TRAD', async function () {
await inst.MprnGSME();
});
Then('I should see DCC Handover Requested for GPF Device text message for FLTY18TRAD', async function () {
await inst.DCCforGPFdevice();
});
Then('I should see Joins are being Initiated text message for FLTY18TRAD', async function () {
await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('the Commissioning Successful button is displayed for FLTY18TRAD', async function () {
await inst.commisioningSuc();
});
When('Commissioning Successful butn clk for FLTY18TRAD', async function () {
await inst.clickonCommissioning();
});
Then('I should see GAS APPLIANCE SAFETY CHECKS section for FLTY18TRAD', async function () {
await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('Gas Appliance Safety Checks sec for FLTY18TRAD', async function () {
await inst.gasApplicancesafety();
});
When('I fill the Gas Appliance Safety Checks section fields with values and Sub for FLTY18TRAD', async function () {
await inst.fillthefieldsforgasApplicancesafety();
});
Then('I should see SMETS PPMID sec for FLTY18TRAD', async function () {
await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('the "INSTALL PPMID" section for FLTY18TRAD', async function () {
await inst.seePPMIDsection();
});
When('I fill the fields for Install PPMID for FLTY18TRAD', async function () {
await inst.fillthefieldsforseePPMIDsection(2);

});
Then('I should see PPMID COMMISSIONING section for FLTY18TRAD', async function () {
await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('the PPMID COMMISSIONING section for FLTY18TRAD', async function () {
await inst.SeePPMIDcommisioning();
});
When('I click on Send Message IHD-PPMID butn for FLTY18TRAD', async function () {
await inst.clickonIHDPPMID();
});
Then('I should see PPMID Awaiting Response butn for FLTY18TRAD', async function () {
await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('the Awaiting Response butn after ppmid commisioning for FLTY18TRAD', async function () {
await inst.AwaitingrespaftPPMID();
});
When('I wait for the button to disappear after PPMID Commisioning for FLTY18TRAD', async function () {
await inst.waitforthebuttontoDisappearafterppmid();
});
Then('I should see PPMID Commissioning Successful button for FLTY18TRAD', async function () {
await inst.ppmidsuccessbtn();
});
Then('I should see PPMID Request Sent Successfully txt message for FLTY18TRAD', async function () {
await inst.reqsentsuctxt();
});
Then('I should see PPMID Pair Asset to Comms Hub text message for FLTY18TRAD', async function () {
await inst.pairAssettoComms();
});
Then('I should see Pairing Successful text message for FLTY18TRAD', async function () {
await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('the PPMID Commissioning Successful button is displayed for FLTY18TRAD', async function () {
await inst.pairingsuccessfulppmidcomm();
});
When('I click on SUB button for FLTY18TRAD', async function () {
await inst.clickonSUBbtn();
});
Then('I should see DEVICE BINDING and COMMISSIONING sec for FLTY18TRAD', async function () {
await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('the DEVICE BINDING & COMMISSIONING section for FLTY18TRAD', async function () {
  await job.DeviceBinding();
});
When('I fill the fields53 and click next for FLTY18TRAD', async function () {
  await job.filldDevicebinding();
});
Then('I should see ENERGY EFFICIENCY INFORMATION section for FLTY18TRAD', async function () {
  await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('the ENERGY EFFICIENCY INFORMATION section for FLTY18TRAD', async function () {
  await job.energyeffInfo();
});
When('I fill the fields54 and click next for FLTY18TRAD', async function () {
  await job.fillfield55duelenergyeff();
});
Then('I should see SMART EDUCATION section for FLTY18TRAD', async function () {
  await job.smartEducation();
});

 /**********"SMART EDUCATION" */
Given('the SMART EDUCATION section for FLTY18TRAD', async function () {
  await job.smartEducation();
});
When('I fill the fields55 and click next for FLTY18TRAD', async function () {
  await job.fillfield55duelsmartedu();
});
Then('I should see SMART LITERATURE LEFT ON SITE section for FLTY18TRAD', async function () {
  await job.smartLitLeftOnsite();
});

/**********"SMART LITERATURE LEFT ON SITE" */
Given('the SMART LITERATURE LEFT ON SITE section for FLTY18TRAD', async function () {
  await job.smartLitLeftOnsite();
});
When('I fill the fields56 and click next for FLTY18TRAD', async function () {
  await job.fillfield56duelsmartLit();
});
Then('See CAPTURE CUSTOMER SIGNATURE sec for FLTY18TRAD', async function () {
  await job.captureCustSign();
});

 /**********"Capture Customer Signature" */
Given('the CAPTURE CUSTOMER SIGNATURE section for FLTY18TRAD', async function () {
  await job.captureCustSign();
});
When('I write signature in Customer Signature for FLTY18TRAD', async function () {
  await job.writingSign();
});
Then('I fill the field57 and Job Complete for FLTY18TRAD', async function () {
  await job.fillfield57Capturecust();
});
Then('see Job Completed screen for FLTY18TRAD', async function () {
 
  await home.verifyCompletedStatus('SFGFLTY18TRAD');

  
});
