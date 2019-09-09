import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { FLTY19homePageObject } from "../pages/FLTY19homePage";
import { FLTY19AppointmentListPageObject } from "../pages/FLTY19AppointmentListPage";
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
const inst: InstallPageObject =new InstallPageObject();

Given('the Login Page', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(5000);
});

When('I pass {string} and {string}', async function (username, password) {
  await login.setUsernamePassword(username, password);
  await utility.wait(500);
});

Then('I click Login button', async function () {
  await login.clickLogin();
  await utility.wait(10000);
});

Then('I should see the Appointment List', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window', async function () {
  await home.verifyAppointmentListPage();
});

When('I click on select button', async function () {
  await utility.wait(2000);
  //await home.continueLink.click();
  await home.selectLink.click();
  //await home.clickOnTheSelectLink();
  await utility.wait(5000);
});

Then('I should see Work Order window', async function () {
  await applist.verifyWorkOrderWindowText();
});

Given('the {string} window', async function (string) {
  //WorkOrder Window
  await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button', async function () {
  await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button', async function () {
  await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display', async function () {
  await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
 });

Then('I should see Contact made field', async function () {
  await utility.wait(5000);
  await expect(await applist.contactMadeText.getText()).equal("Contact made?");
  await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('the {string} page', async function (string) {
  await applist.verifyWorkOrderWindowText();
});

When('I fill the fields with the value', async function () {
  await applist.clickOnContactMadeOtion();
  await applist.appointmentConfirmationYes();
  await applist.additionalDetails();
});

When('I click on DEPART button', async function () {
  await applist.clickDepartBtn();
});

Then('I should see Depart for Appointment window', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('Appointment details', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button', async function () {
  await applist.mprnOKbtn();
});

Then('I should see ARRIVE button', async function () {
  await utility.wait(10000);
  await applist.arriveBtn.getText().then(function (arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);
  });
});

Then('I should see DOORSTEP PROTOCOL tab activated', async function () {
  await utility.wait(5000);
  await applist.doorStepPROText.getText().then(function (doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
  });
});

When('I click on ARRIVE button', async function () {
  await applist.clickArriveBtn();
});

Then('I should see Arrival Time details', async function () {
  //comment these 2 lines when continue link is not displayed
  // await utility.wait(5000);
  //await applist.continueLink.click();
  await utility.wait(5000);
  await applist.arrivalTime.getText().then(function (arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);
  });
});

Then('I should see BE AWARE OF ANY DANGER! section', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('the BE AWARE OF ANY DANGER! section', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the DoorStep Protocol fields with the value', async function () {
  await doorstep.fillTheDoorStepDetails();
});

When('I click on ON SITE button', async function () {
  await doorstep.clickONSITEBtn();
});

Then('I should see RISK ASSESSMENT tab activated', async function () {
  await riskassess.verifyRiskAssessmentPage();
});

Then('I should see INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('the INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values', async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see INFO window', async function () {
  await riskassess.infoTextPopUp();
});

/***INFO window with the text */

Given('the INFO window with the text', async function () {
  await riskassess.infoOKButton.click();
  await utility.wait(10000);
  if (riskassess.NeedtoWorkYES.isDisplayed()) {
    var element = riskassess.NeedtoWorkYES;
    browser.executeScript("arguments[0].click()", element);
    await utility.wait(5000);
  }
});


Then('I should see RISK ASSESSMENT ELEC section', async function () {
  await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('the RISK ASSESSMENT - ELEC section', async function () {
  await riskassess.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
  await riskassess.fillRiskAssesmentElecFields();
});

When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

  await riskassess.capturePhotoBtnDisplayed();
});

When('I click on NEXT SECTION button', async function () {
  await riskassess.clickNextSectionBtn();
});

Then('I should see the RISK ASSESSMENT - GAS section', async function () {
  await riskassess.verifyriskGasText();;
});

/***********JANSI CHANGES*************************** */
/***RISK ASSESSMENT - GAS */

Given('the RISK ASSESSMENT - GAS section', async function () {
  await riskassess.verifyriskGasText();
});
When('I fill the field05 with the value05', async function () {
  await riskassess.fillthedtlsGas();
});
Then('I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
  await riskassess.capturegasbtn();
});
Then('I fill the field06 with the value06', async function () {
  await riskassess.fillthedtl06();
});
// Then('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION btn', async function () {
//   await riskassess.capturefullmeterInst();
// });
Then('I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
  await riskassess.gasInstSec();
});

/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */


Given('the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
  await riskassess.gasInstSec();
});
When('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
  await riskassess.gasfullmeterInst();
});
Then('I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

When('I fill the INITIAL POLARITY CHECK field with the values', async function () {

  await riskassess.fillthePolarityCheckMartinDale();
});

Then('I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
  await riskassess.verifyCapturepreInstallation();
});

Then('I fill the Socket Found field with the values', async function () {
  await riskassess.verifyanySocketFoundNO();

});

Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
  await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
  await riskassess.verifyMeterAndCutOut();
});

When('I fill the METER AND CUT OUT fields with the values', async function () {
  await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SUBMIT button', async function () {
  await riskassess.meterCutOutnextSection();
});

Then('I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
  await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('the CURRENT IHD-PPMID DETAILS section', async function () {
  await remove.currentihdppmiddetailtext();
});

When('I fill the field010 with the value010', async function () {
  await remove.fillcurrentIhdPPMIDdtls();
});

When('I should see CURRENT METER DETAILS - GAS section', async function () {
  await remove.currentmeterdetlGasSection();
});

Then('I should see the page contect display of current meter details', async function () {
  await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('the CURRENT METER DETAILS - GAS section', async function () {
  await remove.currentmeterGasPageContent();
});
When('I fill the field with the value', async function () {
  await remove.fillcurrentmeterdtlGassec();
});
Then('I should see CURRENT COMMS HUB DETAILS section', async function () {
  await remove.currentcommsHubdtl();
});
Then('I should see the page contect display', async function () {
  await remove.currentcommsHubdtlPgCont();
});

/*** CURRENT COMMS HUB DETAILS*/

Given('the CURRENT COMMS HUB DETAILS section', async function () {
  await remove.currentcommsHubdtl();
});
When('I fill the field13 with the value13', async function () {
  await remove.fillcurrenthubdtl(1);
});
Then('I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
  await remove.capturephotocommsHub();
});
Then('I should see DETERMINE FAULT ACTIVITY section', async function () {
  await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('the DETERMINE FAULT ACTIVITY section', async function () {
  await remove.determintfaultActivity();
});
When('I fill the field14 with the value014', async function () {
  await remove.fill14commsdtls();
});
Then('I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button', async function () {
  await remove.captureevidsuspectedtamp();
});
Then('I fill the field15 with the value15', async function () {
  await remove.fill15commsdtls();
});
Then('I click on OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting', async function () {
  await remove.clickOk5mins();
});
Then('I fill the field16 with the value16', async function () {
  await remove.fill16commsdtls();
});
Then('I select Comms Hub field', async function () {
  await remove.commshubSelect();
});
Then('I select Gas Meter field', async function () {
  await remove.gasmeterSelect();
});
Then('I select Regulator field', async function () {
  await remove.regulatorSelect();
});
Then('I select IHD-PPMID field', async function () {
  await remove.ihdppmidSelect();
});
Then('I click on NEXT SECT button', async function () {
  await remove.clickoncommsNextsection();
});
Then('I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
  await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
  await remove.preinstgasTighttest();
});
When('I fill the field17 with the value17', async function () {
  await remove.fill17preInstdtls();
});
Then('I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
  await remove.capturepressureMB();
});
Then('I fill the field18 with the value18', async function () {
  await remove.fill18preInstdtls();
});
Then('I see Gas Tightness Test Completed field as FAIL', async function () {
  await remove.gastightnessfieldfailed();
});
Then('I fill the field19 with the value19', async function () {
  await remove.fill19preInstdtls();
});
Then('I should see REMOVE IHD-PPMID section', async function () {
  await remove.removeihdPpmid();
});

/*** REMOVE IHD-PPMID*/

Given('the REMOVE IHD-PPMID section', async function () {
  await remove.removeihdPpmid();
});
When('I fill the field20 with the value20', async function () {
  await remove.fill20rmvihdppmidtls();
});
Then('I click on OK button in Info window with the text Ensure IHD is Powered On', async function () {
  await remove.ihdpowerOnOK();
});
Then('I fill the field21 with the value21', async function () {
  await remove.fill21rmvihdppmidtls();
});
Then('I click on NEXT SECTION button in remove IHD', async function () {
  await remove.rmvihdppmidnxtbtn();
});
Then('I should see SEND MESSAGE IHD-PPMID section', async function () {
  await remove.sendmsgihdppmid();
});


/**** SEND MESSAGE IHD / PPMID*/
Given('the SEND MESSAGE IHD-PPMID section', async function () {
  await remove.sendmsgihdppmid();
});
When('I click on Send Message IHD-PPMID button', async function () {
  await remove.clickonSendMessage();
});
Then('I should see Awaiting Response button', async function () {
  await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('the Awaiting Response button', async function () {
  await remove.awaitingResponse();
});
When('I wait for the button to disappear', async function () {
  await remove.waitforthebuttontoDisappear();
});
Then('I should see PPMID Removal Successful button', async function () {
  await remove.ppmidRemovalbtn();
});
Then('I should see Request Sent Successfully text message', async function () {
  await remove.sentmesgSuccess();
});
Then('I should see Asset Unjoined text message', async function () {
  await remove.assetUnjoinedText();
});


/**** PPMID Removal Successful*/
Given('the PPMID Removal Successful button is displayed', async function () {
  await remove.PPMIDRemovalbtndisplayed();
});
When('I click on PPMID Removal Successful button', async function () {
  await remove.clickonPPMIDRmvl();
});
Then('I should see CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
  await remove.confirmAssetRmvl();
});

/******CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
  await remove.confirmAssetRmvl();
});
When('I fill the field22 with the value22', async function () {
  await remove.fill22AssetRemoval();
});
Then('I click on OK button in Updated window with the text Asset successfully added to Returns list', async function () {
  await remove.clickonOKBtn();
});
Then('I should see REMOVE GAS METER section', async function () {
  await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('the REMOVE GAS METER section', async function () {
  await remove.RmvGasmeterSec();
});
When('I fill the field23 with the value23', async function () {
  await remove.fill23GasmeterRemoval();
});
Then('I click on NEXT button in removing gas meter', async function () {
  await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('I should see SEND MESSAGE GMREM section', async function () {
  await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('the SEND MESSAGE GMREM section', async function () {
  await remove.sendmsgGMREM();
});
When('I click on Send Message GMREM button', async function () {
  await remove.clickOnsendmsgGMREM();
});
Then('I should see Awaiting Response button in GMREM', async function () {
  await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('the Awaiting Response btn in Send GMREM', async function () {
  await remove.AwaitingResponseGMREM();
});
When('I wait for the btn to disappear in GMREM', async function () {
  await remove.waitforthebuttontoDisappear();
});
Then('I should see Removal Successful button', async function () {
  await remove.removalsuccessfulbtn();
});
Then('I should see GMREM Request Sent Successfully txt message', async function () {
  await remove.ReqSentSuccess();
});
Then('I should see OK to Remove Asset text message', async function () {
  await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('the Removal Successful button is displayed', async function () {
  await remove.removalsuccessfulbtn();
});
When('I click on Removal Successful button', async function () {
  await remove.clickonremovalsuccessfulbtn();
});
Then('I should see CONFIRM GAS ASSET REMOVAL section', async function () {
  await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('the CONFIRM GAS ASSET REMOVAL section', async function () {
  await remove.confirmGasAssetRemoval();
});
When('I fill the field24 with the value24', async function () {
  await remove.fill24GasAssetRemoval();
});
Then('I click on OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
  await remove.clickonokGasAssetRemoval();
});
Then('I should see REMOVE COMMS HUB window', async function () {
  await remove.RemoveCommsHubWindow();
});
/*****REMOVE COMMS HUB */

Given('the REMOVE COMMS HUB section', async function () {
  await remove.RemoveCommsHubWindow();
});
When('I fill the field027 with the value27', async function () {
  await remove.fill27RmvCommsHub();
});
Then('I click on NEXT SEC button from Remove Comms Hub', async function () {
  await remove.clickonNxtBtnRmvCommsHub();
});
Then('I should see CONFIRM COMMS HUB REMOVAL section', async function () {
  await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('the CONFIRM COMMS HUB REMOVAL section', async function () {
  await remove.ConfirmHubRmv();
});
When('I fill the field28 with the value28', async function () {
  await remove.fill28ConfirmremovalCommsHub();
});
Then('I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
  await remove.clickonokconfrimremovalpopup();
});
Then('I click on SUBMIT btn from confirm comms hub removal', async function () {
  await remove.clickonsubmitforRemoval();
});
Then('I should see INSTALL COMMS HUB section', async function () {
  await inst.InstallCommsHubSection();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/


Given('the INSTALL COMMS HUB sec', async function () {
  //await inst.dummy();
  await inst.InstallCommsHubSection();
});
When('I fill the Ins comms hub fields and capture photo EVIDENCE', async function () {
  await inst.fillfieldsInstallcommshub();
});
Then('I should see SEND MSG XCHUB section', async function () {
  await inst.sendmsgXCHUB();
});

/****************"SEND MESSAGE XCHUB" */

Given('the SEND MESSAGE XCHUB section', async function () {
  await inst.sendmsgXCHUB();
});
When('I click on Send Message XCHUB button', async function () {
  await inst.clicksendmsgXCHUB();
});
Then('I should see XCHUB Awaiting Response butn', async function () {
  await inst.SeeAwaitingresp();
});

/********** "AWAITING RESPONSE"*/
Given('the Awaiting Response butn XCHUB', async function () {
  await inst.SeeAwaitingresp();
});
When('I wait for the butn to disappear XCHUB', async function () {
  await inst.waitforthebuttontoDisappear();
});
Then('I should see Removal Successful butn XCHUB', async function () {
  await inst.Remosuccessful();
});
Then('I should see Request Sent Successfully text msg XCHUB', async function () {
  await inst.reqsentMsg();
});
Then('I should see Whitelist transfer completed check LED indication is correct text message', async function () {
  await inst.LEDindication();
});

/**********"Removal Successful" */
Given('the Removal Successful butn is displayed', async function () {
  await inst.Remsuccessdisplayed();
});
When('I click on Removal Successful butn', async function () {
  await inst.clickonremsuccess();
});
Then('I should see NEW GAS METER DETAILS section', async function () {
  await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

  Given('the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
  });
  When('I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls();
  });
  Then('I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
  });

/********** "NEW REGULATOR"*/

Given('the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('I fill the fields and values for new regulator section', async function () {
  await inst.fillthefieldsfornewregulator();
});
Then('I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});


/**********"GAS INITIAL METER READING" */
Given('the GAS INITIAL METER READING section', async function () {
  await inst.gasinitialmeterreading();
});
When('I fill the fields with values Gas initial meter reading', async function () {
  await inst.fillthefieldsforinitmeterReading();
});
Then('I should see INSTALL KIT section', async function () {
  await inst.installkitSec();
});

/**********"Install Kit " */
Given('the Gas Install Kit gas section', async function () {
  await inst.installkitSec();
});
When('I fill the Gas Install Kit gas section fields with values', async function () {
  await inst.fillthedetailsforinstallkit();
});
Then('I should see Perform Post Installation GAS Checks sec', async function () {
  await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('the Post Installation GAS sec', async function () {
  await inst.performpostinst();
});
When('I fill the Post Installation GAS sec fields with values', async function () {
  await inst.fillthefieldsforperformpostinst();
});
Then('I should see GICOM Message sec', async function () {
  await inst.gasInstallCommisioning();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('the GAS INSTALL & COMMISSIONING sec', async function () {
  await inst.gasInstallCommisioning();
});
When('I click on Send Message GICOM butn', async function () {
  await inst.sendMesgGICOM();
});
Then('I should see Awaiting Response butn', async function () {
  await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('the Awaiting Response butn after gas install', async function () {
  await inst.Awatingforgasinstallcommisioning();
});
When('I wait for the button to disappear after post install', async function () {
  await inst.waitforthebuttoDisappear();
});
Then('I should see Commissioning Successful button', async function () {
  await inst.commisioningsuccess();
});
Then('I should see Request Sent Successfully txt message', async function () {
  await inst.reqsentsuccess();
});
Then('I should see Pair Asset to Comms Hub text message', async function () {
  await inst.pairAsset();
});
Then('I should see DCC Handover Requested text message', async function () {
  await inst.DCCHandover();
});
Then('I should see Device Clock Synchronised text message', async function () {
  await inst.DeviceClock();
});
Then('I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message', async function () {
  await inst.MprnGSME();
});
Then('I should see DCC Handover Requested for GPF Device text message', async function () {
  await inst.DCCforGPFdevice();
});
Then('I should see Joins are being Initiated text message', async function () {
  await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('the Commissioning Successful button is displayed', async function () {
  await inst.commisioningSuc();
});
When('I click on Commissioning Successful button', async function () {
  await inst.clickonCommissioning();
});
Then('I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
  await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('the Gas Appliance Safety Checks sec', async function () {
  await inst.gasApplicancesafety();
});
When('I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
  await inst.fillthefieldsforgasApplicancesafety();
});
Then('I should see SMETS PPMID sec', async function () {
  await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('the "INSTALL PPMID" section', async function () {
  await inst.seePPMIDsection();
});
When('I fill the fields for Install PPMID', async function () {
  await inst.fillthefieldsforseePPMIDsection();
});
Then('I should see PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('the PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});
When('I click on Send Message IHD-PPMID butn', async function () {
  await inst.clickonIHDPPMID();
});
Then('I should see PPMID Awaiting Response butn', async function () {
  await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('the Awaiting Response butn after ppmid commisioning', async function () {
  await inst.AwaitingrespaftPPMID();
});
When('I wait for the button to disappear after PPMID Commisioning', async function () {
  await inst.waitforthebuttontoDisappearafterppmid();
});
Then('I should see PPMID Commissioning Successful button', async function () {
  await inst.ppmidsuccessbtn();
});
Then('I should see PPMID Request Sent Successfully txt message', async function () {
  await inst.reqsentsuctxt();
});
Then('I should see PPMID Pair Asset to Comms Hub text message', async function () {
  await inst.pairAssettoComms();
});
Then('I should see Pairing Successful text message', async function () {
  await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('the PPMID Commissioning Successful button is displayed', async function () {
  await inst.pairingsuccessfulppmidcomm();
});
When('I click on SUB button', async function () {
  await inst.clickonSUBbtn();
});
Then('I should see DEVICE BINDING and COMMISSIONING sec', async function () {
  await inst.deviceBindingandCommisioning();
});
