import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../../pages/loginPage";
import { HomePageObject } from "../../pages/HomePage";
import { AppointmentListPageObject } from "../../pages/AppointmentListPage";
import { DoorStepPageObject } from "../../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../../pages/RiskAssessmentPage";
import { RemovePageObject } from "../../pages/RemovePage";
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
const inst: InstallPageObject =new InstallPageObject();

Given('TST03 the Login Page', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(utility.medium_low);
});

When('TST03 I pass {string} and {string}', async function (username, password) {
  await login.setUsernamePassword(username, password);
  await utility.wait(utility.very_low);
});

Then('TST03 I click Login button', async function () {
  await login.clickLogin();
  await utility.wait(utility.medium);
});

Then('TST03 I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('TST03 the Appointment List window', async function () {
  await home.verifyAppointmentListPage();
});

When('TST03 I click on select button', async function () {
  await home.clickCorrectSelectLink('SFGasFLTY18SMETS2');
  await utility.wait(utility.medium_low);
});

Then('TST03 I should see Work Order window', async function () {
  await applist.verifyWorkOrderWindowText();
});

Given('TST03 the {string} window', async function (string) {
  await applist.verifyWorkOrderWindowText();
});

When('TST03 i see Call Forward or Arrive Button', async function () {
  await applist.verifyWorkOrderWindowText();
});
Then('TST03 I click on CALL FORWARD button', async function () {
  await applist.clickOnCallForwardBtn();
});

Then('TST03 I should see page contect display', async function () {
  await applist.validateTheCallFrwdPageTextDisplay();
});

Then('TST03 I should see the CUSTOMER CONTACT NUMBER', async function () {
    await applist.customercontactnumberavailable();
 });

Then('TST03 I should see Contact made field', async function () {
  await utility.wait(utility.medium_low);
  await expect(await applist.contactMadeText.getText()).equal("Contact made?");
  await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('TST03 the {string} page', async function (string) {
  await applist.verifyWorkOrderWindowText();
});

When('TST03 I fill the fields with the value', async function () {
  await applist.clickOnContactMadeOtion();
  await applist.appointmentConfirmationYes();
  await applist.additionalDetails();
});

When('TST03 I click on DEPART button', async function () {
  await applist.clickDepartBtn();
});

Then('TST03 I should see Depart for Appointment window', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('TST03 Appointment details', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

When('TST03 I click depart OK button', async function () {
  await applist.mprnOKbtn();
});

Then('TST03 I should see ARRIVE button', async function () {
  await utility.wait(utility.medium);
  await applist.arriveBtn.getText().then(function (arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);
  });
});

Then('TST03 I should see DOORSTEP PROTOCOL tab activated', async function () {
  await utility.wait(utility.medium_low);
  await applist.doorStepPROText.getText().then(function (doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
  });
});

When('TST03 I click on ARRIVE button', async function () {
  await applist.clickArriveBtn();
});

Then('TST03 I should see Arrival Time details', async function () {
  await utility.wait(utility.medium_low);
  await applist.arrivalTime.getText().then(function (arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);
  });
});

Then('TST03 I should see BE AWARE OF ANY DANGER! section', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('TST03 the BE AWARE OF ANY DANGER! section', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('TST03 I fill the DoorStep Protocol fields with the value', async function () {
  await doorstep.fillTheDoorStepDetails();
});

When('TST03 I click on ON SITE button', async function () {
  await doorstep.clickONSITEBtn();
});

Then('TST03 I should see RISK ASSESSMENT tab activated', async function () {
  await riskassess.verifyRiskAssessmentPage();
});

Then('TST03 I should see INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('TST03 the INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

When('TST03 I fill the initialRisk field with the values', async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
});

Then('TST03 I should see INFO window', async function () {
  await riskassess.INFOOK();
});

/***INFO window with the text */

Given('TST03 the INFO window with the text', async function () {
  await riskassess.INFOOKClick();
  await utility.wait(utility.medium);
  if (riskassess.NeedtoWorkYES.isDisplayed()) {
    var element = riskassess.NeedtoWorkYES;
    browser.executeScript("arguments[0].click()", element);
    await utility.wait(utility.medium_low);
  }
});


Then('TST03 I should see RISK ASSESSMENT ELEC section', async function () {
  await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('TST03 the RISK ASSESSMENT - ELEC section', async function () {
  await riskassess.verifyriskElecText();
});

When('TST03 I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
  await riskassess.fillRiskAssesmentElecFields();
});

When('TST03 I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

  await riskassess.capturePhotoBtnDisplayed();
});

When('TST03 I click on NEXT SECTION button', async function () {
  await riskassess.clickNextSectionBtn();
});

Then('TST03 I should see the RISK ASSESSMENT - GAS section', async function () {
  await riskassess.verifyriskGasText();;
});

/***********JANSI CHANGES*************************** */
/***RISK ASSESSMENT - GAS */

Given('TST03 the RISK ASSESSMENT - GAS section', async function () {
  await riskassess.verifyriskGasText();
});
When('TST03 I fill the field05 with the value05', async function () {
  await riskassess.fillthedtlsGas();
});
Then('TST03 I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
  await riskassess.capturegasbtn();
});
Then('TST03 I fill the field06 with the value06', async function () {
  await riskassess.fillthedtl06();
});
Then('TST03 I should see CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
  await riskassess.gasInstSec();
});

/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */


Given('TST03 the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
  await riskassess.gasInstSec();
});
When('TST03 I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
  await riskassess.gasfullmeterInst();
});
Then('TST03 I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('TST03 the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

When('TST03 I fill the INITIAL POLARITY CHECK field with the values', async function () {

  await riskassess.fillthePolarityCheckMartinDale();
});

Then('TST03 I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
  await riskassess.verifyCapturepreInstallation();
});

Then('TST03 I fill the Socket Found field with the values', async function () {
  await riskassess.verifyanySocketFoundNO();

});

Then('TST03 I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
  await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('TST03 the INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
  await riskassess.verifyMeterAndCutOut();
});

When('TST03 I fill the METER AND CUT OUT fields with the values', async function () {
  await riskassess.fillthePolarityCheckMeterOut();
});

When('TST03 I click on SUBMIT button', async function () {
  await riskassess.meterCutOutnextSection();
});

Then('TST03 I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
  await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('TST03 the CURRENT IHD-PPMID DETAILS section', async function () {
  await remove.currentihdppmiddetailtext();
});

When('TST03 I fill the field010 with the value010', async function () {
  await remove.fillcurrentIhdPPMIDdtls();
});

When('TST03 I should see CURRENT METER DETAILS - GAS section', async function () {
  await remove.currentmeterdetlGasSection();
});

Then('TST03 I should see the page contect display of current meter details', async function () {
  await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('TST03 the CURRENT METER DETAILS - GAS section', async function () {
  await remove.currentmeterGasPageContent();
});
When('TST03 I fill the field with the value', async function () {
  await remove.fillcurrentmeterdtlGassec();
});
Then('TST03 I should see CURRENT COMMS HUB DETAILS section', async function () {
  await remove.currentcommsHubdtl();
});
Then('TST03 I should see the page contect display', async function () {
  await remove.currentcommsHubdtlPgCont();
});

/*** CURRENT COMMS HUB DETAILS*/

Given('TST03 the CURRENT COMMS HUB DETAILS section', async function () {
  await remove.currentcommsHubdtl();
});
When('TST03 I fill the field13 with the value13', async function () {
  await remove.fillcurrenthubdtl(1);
});
Then('TST03 I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
  await remove.capturephotocommsHub();
});
Then('TST03 I should see DETERMINE FAULT ACTIVITY section', async function () {
  await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('TST03 the DETERMINE FAULT ACTIVITY section', async function () {
  await remove.determintfaultActivity();
});
When('TST03 I fill the field14 with the value014', async function () {
  await remove.fill14commsdtls();
});
Then('TST03 I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button', async function () {
  await remove.captureevidsuspectedtamp();
});
Then('TST03 I fill the field15 with the value15', async function () {
  await remove.fill15commsdtls();
});
Then('TST03 I click on Faulty OK in INFO window with the text Remove Comms Hub from Supply and wait 5 minutes before reconnecting', async function () {
  await remove.clickOk5mins();
});
Then('TST03 I fill the field16 with the value16', async function () {
  await remove.fill16commsdtls();
});
Then('TST03 I select Comms Hub field', async function () {
  await remove.commshubSelect();
});
Then('TST03 I select Gas Meter field', async function () {
  await remove.gasmeterSelect();
});
Then('TST03 I select Regulator field', async function () {
  await remove.regulatorSelect();
});
Then('TST03 I select IHD-PPMID field', async function () {
  await remove.ihdppmidSelect();
});
Then('TST03 I click NEXT SECT button', async function () {
  await remove.clickoncommsNextsection();
});
Then('TST03 I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
  await remove.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('TST03 the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
  await remove.preinstgasTighttest();
});
When('TST03 I fill the field17 with the value17', async function () {
  await remove.fill17preInstdtls();
});
Then('TST03 I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
  await remove.capturepressureMB();
});
Then('TST03 I fill the field18 with the value18', async function () {
  await remove.fill18preInstdtls();
});
Then('TST03 I see Gas Tightness Test Completed field as FAIL', async function () {
  await remove.gastightnessfieldfailed();
});
Then('TST03 I fill the field19 with the value19', async function () {
  await remove.fill19preInstdtls();
});
Then('TST03 I should see REMOVE IHD-PPMID section', async function () {
  await remove.removeihdPpmid();
});

/*** REMOVE IHD-PPMID*/

Given('TST03 the REMOVE IHD-PPMID section', async function () {
  await remove.removeihdPpmid();
});
When('TST03 I fill the field20 with the value20', async function () {
  await remove.fill20rmvihdppmidtls();
});
Then('TST03 I click on Remove IHD OK button in Info window with the text Ensure IHD is Powered On', async function () {
  await remove.ihdpowerOnOK();
});
Then('TST03 I fill the field21 with the value21', async function () {
  await remove.fill21rmvihdppmidtls();
});
Then('TST03 I click on NEXT in remove IHD', async function () {
  await remove.rmvihdppmidnxtbtn();
});
Then('TST03 I should see SEND MESSAGE IHD-PPMID section', async function () {
  await remove.sendmsgihdppmid();
});


/**** SEND MESSAGE IHD / PPMID*/
Given('TST03 the SEND MESSAGE IHD-PPMID section', async function () {
  await remove.sendmsgihdppmid();
});
When('TST03 I click on Send Message IHD-PPMID button', async function () {
  await remove.clickonSendMessage();
});
Then('TST03 I should see Awaiting Response button', async function () {
  await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('TST03 the Awaiting Response button', async function () {
  await remove.awaitingResponse();
});
When('TST03 I wait for the button to disappear', async function () {
  await remove.waitforthebuttontoDisappear();
});
Then('TST03 I should see PPMID Removal Successful button', async function () {
  await remove.ppmidRemovalbtn();
});
Then('TST03 I should see Request Sent Successfully text message', async function () {
  await remove.sentmesgSuccess();
});
Then('TST03 I should see Asset Unjoined text message', async function () {
  await remove.assetUnjoinedText();
});


/**** PPMID Removal Successful*/
Given('TST03 the PPMID Removal Successful button is displayed', async function () {
  await remove.PPMIDRemovalbtndisplayed();
});
When('TST03 I click on PPMID Removal Successful button', async function () {
  await remove.clickonPPMIDRmvl();
});
Then('TST03 I should see CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
  await remove.confirmAssetRmvl();
});

/******CONFIRM IHD / PPMID ASSET REMOVAL */

Given('TST03 the CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
  await remove.confirmAssetRmvl();
});
When('TST03 I fill the field22 with the value22', async function () {
  await remove.fill22AssetRemoval();
});
Then('TST03 I click on OK in Updated window with the text Asset successfully added to Returns list', async function () {
  await remove.clickonOKBtn();
});
Then('TST03 I should see REMOVE GAS METER section', async function () {
  await remove.RmvGasmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('TST03 the REMOVE GAS METER section', async function () {
  await remove.RmvGasmeterSec();
});
When('TST03 I fill the field23 with the value23', async function () {
  await remove.fill23GasmeterRemoval();
});
Then('TST03 I click on NEXT button in removing gas meter', async function () {
  await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('TST03 I should see SEND MESSAGE GMREM section', async function () {
  await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('TST03 the SEND MESSAGE GMREM section', async function () {
  await remove.sendmsgGMREM();
});
When('TST03 I click on Send Message GMREM button', async function () {
  await remove.clickOnsendmsgGMREM();
});
Then('TST03 I should see Awaiting Response button in GMREM', async function () {
  await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('TST03 the Awaiting Response btn in Send GMREM', async function () {
  await remove.AwaitingResponseGMREM();
});
When('TST03 I wait for the btn to disappear in GMREM', async function () {
  await remove.waitforthebuttontoDisappear();
});
Then('TST03 I should see Removal Successful button', async function () {
  await remove.removalsuccessfulbtn();
});
Then('TST03 I should see GMREM Request Sent Successfully txt message', async function () {
  await remove.ReqSentSuccess();
});
Then('TST03 I should see OK to Remove Asset text message', async function () {
  await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('TST03 the Removal Successful button is displayed', async function () {
  await remove.removalsuccessfulbtn();
});
When('TST03 I click on Removal Successful button', async function () {
  await remove.clickonremovalsuccessfulbtn();
});
Then('TST03 I should see CONFIRM GAS ASSET REMOVAL section', async function () {
  await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('TST03 the CONFIRM GAS ASSET REMOVAL section', async function () {
  await remove.confirmGasAssetRemoval();
});
When('TST03 I fill the field24 with the value24', async function () {
  await remove.fill24GasAssetRemoval();
});
Then('TST03 I click on OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
  await remove.clickonokGasAssetRemoval();
});
Then('TST03 I should see REMOVE COMMS HUB window', async function () {
  await remove.RemoveCommsHubWindow();
});
/*****REMOVE COMMS HUB */

Given('TST03 the REMOVE COMMS HUB section', async function () {
  await remove.RemoveCommsHubWindow();
});
When('TST03 I fill the field027 with the value27', async function () {
  await remove.fill27RmvCommsHub();
});
Then('TST03 I click on NEXT SEC button from Remove Comms Hub', async function () {
  await remove.clickonNxtBtnRmvCommsHub();
});
Then('TST03 I should see CONFIRM COMMS HUB REMOVAL section', async function () {
  await remove.ConfirmHubRmv();
});

/*****CONFIRM REMOVE COMMS HUB */

Given('TST03 the CONFIRM COMMS HUB REMOVAL section', async function () {
  await remove.ConfirmHubRmv();
});
When('TST03 I fill the field28 with the value28', async function () {
  await remove.fill28ConfirmremovalCommsHub();
});
Then('TST03 I click on OK button in Updated window with the text Asset successfully added to Returns list in the final step', async function () {
  await remove.clickonokconfrimremovalpopup();
});
Then('TST03 I click on SUBMIT btn from confirm comms hub removal', async function () {
  await remove.clickonsubmitforRemoval();
});
Then('TST03 I should see INSTALL COMMS HUB section', async function () {
  await inst.InstallCommsHubSection();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/

Given('TST03 the INSTALL COMMS HUB sec', async function () {
  await inst.InstallCommsHubSection();
});
When('TST03 I fill the Ins comms hub fields and capture photo EVIDENCE', async function () {
  await inst.fillfieldsInstallcommshub(2);
});
Then('TST03 I should see SEND MSG XCHUB section', async function () {
  await inst.sendmsgXCHUB();
});

/****************"SEND MESSAGE XCHUB" */

Given('TST03 the SEND MESSAGE XCHUB section', async function () {
  await inst.sendmsgXCHUB();
});
When('TST03 I click on Send Message XCHUB button', async function () {
  await inst.clicksendmsgXCHUB();
});
Then('TST03 I should see XCHUB Awaiting Response butn', async function () {
  await inst.SeeAwaitingresp();
});

/********** "AWAITING RESPONSE"*/
Given('TST03 the Awaiting Response butn XCHUB', async function () {
  await inst.SeeAwaitingresp();
});
When('TST03 I wait for the butn to disappear XCHUB', async function () {
  await inst.waitforthebuttontoDisappear();
});
Then('TST03 I should see Removal Successful butn XCHUB', async function () {
  await inst.Remosuccessful();
});
Then('TST03 I should see Request Sent Successfully text msg XCHUB', async function () {
  await inst.reqsentMsg();
});
Then('TST03 I should see Whitelist transfer completed check LED indication is correct text message', async function () {
  await inst.LEDindication();
});

/**********"Removal Successful" */
Given('TST03 the Removal Successful butn is displayed', async function () {
  await inst.Remsuccessdisplayed();
});
When('TST03 I click on Removal Successful butn', async function () {
  await inst.clickonremsuccess();
});
Then('TST03 I should see NEW GAS METER DETAILS section', async function () {
  await inst.gasMeterdetails();
});

/**********"NEW GAS METER DETAILS" */

  Given('TST03 the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterdetails();
  });
  When('TST03 I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
  });
  Then('TST03 I should see NEW REGULATOR section', async function () {
    await inst.newregulator();
  });

/********** "NEW REGULATOR"*/

Given('TST03 the NEW REGULATOR section', async function () {
    await inst.newregulator();
});
When('TST03 I fill the fields and values for new regulator section', async function () {
  await inst.fillthefieldsfornewregulator(2);
});
Then('TST03 I should see GAS INITIAL METER READING section', async function () {
    await inst.gasinitialmeterreading();
});


/**********"GAS INITIAL METER READING" */
Given('TST03 the GAS INITIAL METER READING section', async function () {
  await inst.gasinitialmeterreading();
});
When('TST03 I fill the fields with values Gas initial meter reading', async function () {
  await inst.fillthefieldsforinitmeterReading();
});
Then('TST03 I should see INSTALL KIT section', async function () {
  await inst.installkitSec();
});

/**********"Install Kit " */
Given('TST03 the Gas Install Kit gas section', async function () {
  await inst.installkitSec();
});
When('TST03 I fill the Gas Install Kit gas section fields with values', async function () {
  await inst.fillthedetailsforinstallkit();
});
Then('TST03 I should see Perform Post Installation GAS Checks sec', async function () {
  await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('TST03 the Post Installation GAS sec', async function () {
  await inst.performpostinst();
});
When('TST03 I fill the Post Installation GAS sec fields with values', async function () {
  await inst.fillthefieldsforperformpostinst();
});
Then('TST03 I should see GICOM Message sec', async function () {
  await inst.gasInstallCommisioning();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('TST03 the GAS INSTALL & COMMISSIONING sec', async function () {
  await inst.gasInstallCommisioning();
});
When('TST03 I click on Send Message GICOM butn', async function () {
  await inst.sendMesgGICOM();
});
Then('TST03 I should see Awaiting Response butn', async function () {
  await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('TST03 the Awaiting Response butn after gas install', async function () {
  await inst.Awatingforgasinstallcommisioning();
});
When('TST03 I wait for the button to disappear after post install', async function () {
  await inst.waitforthebuttoDisappear();
});
Then('TST03 I should see Commissioning Successful button', async function () {
  await inst.commisioningsuccess();
});
Then('TST03 I should see Request Sent Successfully txt message', async function () {
  await inst.reqsentsuccess();
});
Then('TST03 I should see Pair Asset to Comms Hub text message', async function () {
  await inst.pairAsset();
});
Then('TST03 I should see DCC Handover Requested text message', async function () {
  await inst.DCCHandoverText();
});
Then('TST03 I should see Device Clock Synchronised text message', async function () {
  await inst.DeviceClock();
});
Then('TST03 I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message', async function () {
  await inst.MprnGSME();
});
Then('TST03 I should see DCC Handover Requested for GPF Device text message', async function () {
  await inst.DCCforGPFdevice();
});
Then('TST03 I should see Joins are being Initiated text message', async function () {
  await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('TST03 the Commissioning Successful button is displayed', async function () {
  await inst.commisioningSuc();
});
When('TST03 I click on Commissioning Successful button', async function () {
  await inst.clickonCommissioning();
});
Then('TST03 I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
  await inst.gasApplicancesafety();
});

/**********"Gas Appliance Safety Checks" */
Given('TST03 the Gas Appliance Safety Checks sec', async function () {
  await inst.gasApplicancesafety();
});
When('TST03 I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
  await inst.fillthefieldsforgasApplicancesafety();
});
Then('TST03 I should see SMETS PPMID sec', async function () {
  await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('TST03 the "INSTALL PPMID" section', async function () {
  await inst.seePPMIDsection();
});
When('TST03 I fill the fields for Install PPMID', async function () {
  await inst.fillthefieldsforseePPMIDsection(2);
});
Then('TST03 I should see PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('TST03 the PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});
When('TST03 I click on Send Message IHD-PPMID butn', async function () {
  await inst.clickonIHDPPMID();
});
Then('TST03 I should see PPMID Awaiting Response butn', async function () {
  await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('TST03 the Awaiting Response butn after ppmid commisioning', async function () {
  await inst.AwaitingrespaftPPMID();
});
When('TST03 I wait for the button to disappear after PPMID Commisioning', async function () {
  await inst.waitforthebuttontoDisappearafterppmid();
});
Then('TST03 I should see PPMID Commissioning Successful button', async function () {
  await inst.ppmidsuccessbtn();
});
Then('TST03 I should see PPMID Request Sent Successfully txt message', async function () {
  await inst.reqsentsuctxt();
});
Then('TST03 I should see PPMID Pair Asset to Comms Hub text message', async function () {
  await inst.pairAssettoComms();
});
Then('TST03 I should see Pairing Successful text message', async function () {
  await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('TST03 the PPMID Commissioning Successful button is displayed', async function () {
  await inst.pairingsuccessfulppmidcomm();
});
When('TST03 I click on SUB button', async function () {
  await inst.clickonSUBbtn();
});
Then('TST03 I should see DEVICE BINDING and COMMISSIONING sec', async function () {
  await inst.deviceBindingandCommisioning();
});
