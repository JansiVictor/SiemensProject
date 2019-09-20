import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { FLTY19homePageObject } from "../pages/FLTY19homePage";
import { AppointmentListPageObject } from "../pages/AppointmentListPage";
import { DoorStepPageObject } from "../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../pages/RiskAssessmentPage";
import { RemovePageObject } from "../pages/RemovePage";
import { config } from "../config/config";
import { Utility } from "../support/utility";
import { when } from "q";
import { InstallPageObject } from "../pages/InstallPage";
import { RemoveTRADPageObject } from "../pages/RemoveTRAD";

import { RiskAssessmentPageElecObject } from "../pages/ElectricPage";
import { RiskAssessmentforGASPageObject } from "../pages/RiskAssessmentForGAS";
import { JobCompletionPageObject } from "../pages/JobCompletionPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const home: FLTY19homePageObject = new FLTY19homePageObject();
const applist: AppointmentListPageObject = new AppointmentListPageObject();
const doorstep: DoorStepPageObject = new DoorStepPageObject();
const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const riskassessTRAD: RiskAssessmentPageElecObject = new RiskAssessmentPageElecObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject =new InstallPageObject();
const riskassessGAS: RiskAssessmentforGASPageObject = new RiskAssessmentforGASPageObject();

const job: JobCompletionPageObject = new JobCompletionPageObject();

Given('the Login Page for FLTY19 Trad', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(5000);
});

When('I pass {string} and {string} for FLTY19 Trad', async function (username, password) {
  await login.setUsernamePassword(username, password);
  await utility.wait(500);
});

Then('I click Login button for FLTY19 Trad', async function () {
  await login.clickLogin();
  await utility.wait(10000);
});

Then('I should see the Appointment List for FLTY19 Trad', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window for FLTY19 Trad', async function () {
  await home.verifyAppointmentListPage();
});

When('I click on select button for FLTY19 Trad', async function () {
  await utility.wait(2000);
  //await home.continueLink.click();
  await home.selectLink.click();
  //await home.clickOnTheSelectLink();
  await utility.wait(5000);
});

Then('I should see Work Order window for FLTY19 Trad', async function () {
  await applist.verifyWorkOrderWindowText();
});

Given('the {string} window for FLTY19 Trad', async function (string) {
  //WorkOrder Window
  await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button for FLTY19 Trad', async function () {
  await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button for FLTY19 Trad', async function () {
  await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display for FLTY19 Trad', async function () {
  await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER for FLTY19 Trad', async function () {
    await applist.customercontactnumberavailable();
 });

Then('I should see Contact made field for FLTY19 Trad', async function () {
  await utility.wait(5000);
  await expect(await applist.contactMadeText.getText()).equal("Contact made?");
  await expect(applist.contactMadeYes.isPresent());
});

/***Appointment details */

Given('the {string} page for FLTY19 Trad', async function (string) {
  await applist.verifyWorkOrderWindowText();
});

When('I fill the fields with the value for FLTY19 Trad', async function () {
  await applist.clickOnContactMadeOtion();
  await applist.appointmentConfirmationYes();
  await applist.additionalDetails();
});

When('I click on DEPART button for FLTY19 Trad', async function () {
  await applist.clickDepartBtn();
});

Then('I should see Depart for Appointment window for FLTY19 Trad', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('Appointment details for FLTY19 Trad', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button for FLTY19 Trad', async function () {
  await applist.mprnOKbtn();
});

Then('I should see ARRIVE button for FLTY19 Trad', async function () {
  await utility.wait(10000);
  await applist.arriveBtn.getText().then(function (arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);
  });
});

Then('I should see DOORSTEP PROTOCOL tab activated for FLTY19 Trad', async function () {
  await utility.wait(5000);
  await applist.doorStepPROText.getText().then(function (doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
  });
});

When('I click on ARRIVE button for FLTY19 Trad', async function () {
  await applist.clickArriveBtn();
});

Then('I should see Arrival Time details for FLTY19 Trad', async function () {
  //comment these 2 lines when continue link is not displayed
  // await utility.wait(5000);
  //await applist.continueLink.click();
  await utility.wait(5000);
  await applist.arrivalTime.getText().then(function (arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);
  });
});

Then('I should see BE AWARE OF ANY DANGER! section for FLTY19 Trad', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('the BE AWARE OF ANY DANGER! section for FLTY19 Trad', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the DoorStep Protocol fields with the value for FLTY19 Trad', async function () {
  await doorstep.fillTheDoorStepDetails();
});

When('I click on ON SITE button for FLTY19 Trad', async function () {
  await doorstep.clickONSITEBtn();
});

Then('I should see RISK ASSESSMENT tab activated for FLTY19 Trad', async function () {
  await riskassess.verifyRiskAssessmentPage();
});

Then('I should see INITIAL RISK ASSESSMENT section for FLTY19 Trad', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('the INITIAL RISK ASSESSMENT section for FLTY19 Trad', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values for FLTY19 Trad', async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see RISK ASSESSMENT ELEC section for FLTY19 Trad', async function () {
  await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('the RISK ASSESSMENT - ELEC section for FLTY19 Trad', async function () {
  await riskassess.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - ELEC fields with the values for FLTY19 Trad', async function () {
  await riskassess.fillRiskAssesmentElecFields();
});

When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for FLTY19 Trad', async function () {

  await riskassess.capturePhotoBtnDisplayed();
});

When('I click on NEXT SECTION button for FLTY19 Trad', async function () {
  await riskassess.clickNextSectionBtn();
});




Then('I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY19 Trad', async function () {
  await riskassess.elecInstSec();
});

/***** capture initial photo of elec installtion*/

Given('the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for FLTY19 Trad', async function () {
  await riskassess.elecInstSec();
});
When('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button elec for FLTY19 Trad', async function () {
  await riskassess.elecfullmeterInst();
});
Then('I should see the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY19 Trad', async function () {
  await riskassess.verifyInitialPolarityCheck();
});


/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('the INITIAL POLARITY CHECK MARTINDALE TEST section for FLTY19 Trad', async function () {
  await riskassess.verifyInitialPolarityCheck();
});

When('I fill the INITIAL POLARITY CHECK field with the values for FLTY19 Trad', async function () {

  await riskassess.fillthePolarityCheckMartinDale();
});

Then('I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for FLTY19 Trad', async function () {
  await riskassess.verifyCapturepreInstallation();
});

Then('I fill the Socket Found field with the values for FLTY19 Trad', async function () {
  await riskassess.verifyanySocketFoundNO();

});

Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for FLTY19 Trad', async function () {
  await riskassess.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for FLTY19 Trad', async function () {
  await riskassess.verifyMeterAndCutOut();
});

When('I fill the METER AND CUT OUT fields with the values for FLTY19 Trad', async function () {
  await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SUBMIT button for FLTY19 Trad', async function () {
  await riskassess.polarityMeterCutoutSubmitTRAD();
});

Then('I should see the CURRENT IHD-PPMID DETAILS section in remove tab for FLTY19 Trad', async function () {
  await remove.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('the CURRENT IHD-PPMID DETAILS section for FLTY19 Trad', async function () {
  await remove.currentihdppmiddetailtext();
});

When('I fill the field010 with the value010 for FLTY19 Trad', async function () {
  await remove.fillcurrentIhdPPMIDdtlsTRAD();
});

Then ('I should see the page contect display of current meter details for FLTY19 Trad', async function () {
      await remove.currentMeterDetailsHeader();
 });





 //Capture Current Meter

Given('the CAPTURE CURRENT METER section for FLTY19 Trad', async function () {
  
  await remove.currentMeterDetailsHeader();
});
When('I fill capture current meter elec for FLTY19 Trad', async function () {
 // await remove.fillcurrentmeterdtlElecsec();
  await remove.fillcurrentmeterdtlElecsecTRAD();
  
});

Then('I should see the DETERMINE FAULT ACTIVITY section for FLTY19 Trad', async function () {
  
  await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('the DETERMINE FAULT ACTIVITY section for FLTY19 Trad', async function () {
  await remove.determintfaultActivity();
});

When('I fill values elec and gas meter Supply for FLTY19 Trad', async function () {
  await remove.confirmMeterSupplyTRAD();
});

Then('I click on CAPTURE PHOTOGRAPHIC EVIDENCE-SUSPECTED TAMPERING button for FLTY19 Trad', async function () {
  await remove.captureevidsuspectedtamp();
});
Then('I fill for SMET2 Asset Installed for FLTY19 Trad', async function () {
  await remove.smet2AssetInstalled();
});
Then('I fill do you need exchange asset for FLTY19 Trad', async function () {
  await remove.exchangeAssetTRAD();
});
Then('I fill equipment reposition for FLTY19 Trad', async function () {
  await remove.equipReposition();
});
Then('I select SMETS2 Offered for FLTY19 Trad', async function () {
  await remove.smetsOffered();
});

Then('I click on NEXT SECT button for FLTY19 Trad', async function () {
  await remove.clickoncommsNextsection();
});
Then('I should see REMOVE ELEC ASSET REMOVAL section for FLTY19 Trad', async function () {
  await remove.removeElecmeterSec();
});

 /**** "REMOVE ELEC METER"*/
Given('the REMOVE ELEC ASSET REMOVAL section for FLTY19 Trad', async function () {
  await remove.removeElecmeterSec();
});
When('I fill the values for elec removal FLTY19 Trad', async function () {
  await remove.fillElecmeterRemoval();
});
Then('I click on NEXT button in removing elec meter for FLTY19 Trad', async function () {
 // await remove.clickonnxtBtnofElecmeterRemoval();
 await remove.clickonnxtBtnofElecmeterRemovalTRAD();

});
Then('I should see CONFIRM ELEC ASSET REMOVAL section for FLTY19 Trad', async function () {
 await remove.confirmElecAssetRemovalTRAD();
 console.log("Confirm elec asset removal");
});

/********CONFIRM ELEC ASSET REMOVAL */

Given('the CONFIRM ELEC ASSET REMOVAL section for FLTY19 Trad', async function () {
  await remove.confirmElecAssetRemovalTRAD();
  console.log("Confirm elec asset removal");

});
When('I fill values for FLTY19 Trad', async function () {
  await remove.fillElecAssetRemoval();
});
Then('I click on OK btn in Updated window with the text Elec Asset successfully added to Returns list for FLTY19 Trad', async function () {
  await remove.clickonokElecAssetRemoval();
  await utility.wait(2000);
});

Then('I should click on next section for FLTY19 Trad', async function () {
  await remove.clickonNextsectionRemove()
  console.log("Next Sec  Clicked")
});

Then('I should click on submit button for FLTY19 Trad', async function () {
//await remove.clickonsubmitforRemoval();

await remove.clickSubmitRemElecSecTRAD();

console.log("Submit Clicked")

 });

 Then('I should see INSTALL COMMS HUB section for FLTY19 Trad', async function () {
  //await inst.dummy();
  //await riskassessTRAD.CommHubDisplayed();
  await inst.InstallCommsHubSection();
});

/********** "INSTALL COMMS HUB"*/

Given('the INSTALL COMMS HUB sec for FLTY19 Trad', async function () {
    //await riskassessTRAD.CommHubDisplayed();
  await inst.InstallCommsHubSection();
});

When('I fill the Ins comms hub fields and capture photo EVIDENCE for FLTY19 Trad', async function () {
 // await remove.fillCommsHubReqY();
  //await utility.wait(4000);
 // await riskassessTRAD.fillCommsHubDetails(4);
 await inst.fillfieldsInstallcommshub(2);
});

Then('I should see New Meter Details section for for FLTY19 Trad', async function () {

	await riskassessTRAD.newMeterDetailsDisplayed();

});

//*************************New Meter Details************** */
Given('the  New Meter details section for FLTY19 Trad', async function () {
	await riskassessTRAD.newMeterDetailsDisplayed();
});

When('I fill the New Meter details fields with values for FLTY19 Trad', async function () {
  await riskassessTRAD.fillNewMeterDetailsTRAD(); 
});

Then('I should see ADDITIONAL ELECTRICITY CHECKS section for FLTY19 Trad', async function () {
	await riskassessTRAD.additionalElecCheckDisplayed();
});

//*************************Additional Electricity Checks*******/

Given('the the ADDITIONAL ELECTRICITY CHECKS details section for FLTY19 Trad', async function () {
	await riskassessTRAD.additionalElecCheckDisplayed();
});

When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for FLTY19 Trad', async function () {
	await riskassessTRAD.fillAdditionalElecCheckDetails();
});

//************************New Meter Reading ****************/

Given('Initial Meter Reading of new meter depending on the number of Registers and dials section for FLTY19 Trad', async function () {

	await riskassessTRAD.initialMEterREadingTxtDisplayed();

});

When('I fill the Initial Meter Reading of new meter details fields with values for FLTY19 Trad', async function () {

	await riskassessTRAD.fillInitialElecMeterReading();

});

Then('I should see Post Installation Check Section for FLTY19 Trad', async function () {

  await riskassessTRAD.postInstallationCheckDisplayed();

});

/*****************************Post Installation checks*********** */


Given('Perform Post Installation Checks section for FLTY19 Trad', async function () {

	await riskassessTRAD.postInstallationCheckDisplayed();

});

When('I fill the Perform Post Installation Checks details fields with values for FLTY19 Trad', async function () {

	await riskassessTRAD.fillPostInstallationCheck();
});

Then('I should see Commission Bind the Comms hub to the WAN section for FLTY19 Trad', async function () {

	await riskassessTRAD.commisioningTxtDisplayed();

});

//********************Commision Binding************************* */

Given('Commission Bind the Comms hub to the WAN section for FLTY19 Trad', async function () {

  await riskassessTRAD.commisioningTxtDisplayed();

});

When('I fill the Commission Bind the Comms hub to the WAN details fields with values for FLTY19 Trad', async function () {

  await remove.fillCommissioningDetailsTRAD();

});

Then('I should see Electric Install and Commisioning for FLTY19 Trad', async function () {

  await riskassessTRAD.electricInstalDisplayed();

});

/************************************DCC Message******************** */
Given('Perform DCC Message Creation for EICOM section for FLTY19 Trad', async function () {

	await riskassessTRAD.electricInstalDisplayed();

});
When('I fill the Perform DCC Message Creation for EICOM details fields with values for FLTY19 Trad', async function () {

	await riskassessTRAD.eicomMessageEX23();

});
Then('I should see Commissioning Successful button for FLTY19 Trad', async function () {
  await inst.commisioningSuc();
  });


/********** "Commissioning Successful"*/
Given('the Commissioning Successful button is displayed for FLTY19 Trad', async function () {
  await inst.Seecommisionsuccessbutton();
  });
  When('Commissioning Successful butn clk for FLTY19 Trad', async function () {
  //await inst.clickonCommissioning();
  await inst.clickSeecommisionsuccessbutton();
  
  });  
  Then('I should see the "INSTALL PPMID" section for FLTY19 Trad', async function () {
    await inst.seePPMIDsection();
    });

/**********"INSTALL PPMID"*/
Given('the "INSTALL PPMID" section for FLTY19 Trad', async function () {
await inst.seePPMIDsection();
});
When('I fill the fields for Install PPMID for FLTY19 Trad', async function () {
await inst.filltheduelforseePPMIDsectionTRAD(2);
//await inst.filltheduelforseePPMIDsection(2);

});
Then('I should see PPMID COMMISSIONING section for FLTY19 Trad', async function () {
await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('the PPMID COMMISSIONING section for FLTY19 Trad', async function () {
await inst.SeePPMIDcommisioning();
});
When('I click on Send Message IHD-PPMID butn for FLTY19 Trad', async function () {
await inst.clickonIHDPPMID();
});
Then('I should see PPMID Awaiting Response butn for FLTY19 Trad', async function () {
await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('the Awaiting Response butn after ppmid commisioning for FLTY19 Trad', async function () {
await inst.AwaitingrespaftPPMID();
});
When('I wait for the button to disappear after PPMID Commisioning for FLTY19 Trad', async function () {
await inst.waitforthebuttontoDisappearafterppmid();
});
Then('I should see PPMID Commissioning Successful button for FLTY19 Trad', async function () {
await inst.ppmidsuccessbtn();
});
Then('I should see PPMID Request Sent Successfully txt message for FLTY19 Trad', async function () {
await inst.reqsentsuctxt();
});
Then('I should see PPMID Pair Asset to Comms Hub text message for FLTY19 Trad', async function () {
await inst.pairAssettoComms();
});
Then('I should see Pairing Successful text message for FLTY19 Trad', async function () {
await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('the PPMID Commissioning Successful button is displayed for FLTY19 Trad', async function () {
await inst.pairingsuccessfulppmidcomm();
});
When('I click on SUB button for FLTY19 Trad', async function () {
await inst.clickonSUBbtnTRAD();
});
Then('I should see DEVICE BINDING and COMMISSIONING sec for FLTY19 Trad', async function () {
await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('the DEVICE BINDING & COMMISSIONING section for FLTY19 Trad', async function () {
  await job.DeviceBinding();
});
When('I fill the fields53 and click next for FLTY19 Trad', async function () {
  await job.fillfield53dueldevicebinding();
});
Then('I should see ENERGY EFFICIENCY INFORMATION section for FLTY19 Trad', async function () {
  await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('the ENERGY EFFICIENCY INFORMATION section for FLTY19 Trad', async function () {
  await job.energyeffInfo();
});
When('I fill the fields54 and click next for FLTY19 Trad', async function () {
  await job.fillfield55duelenergyeff();
});
Then('I should see SMART EDUCATION section for FLTY19 Trad', async function () {
  await job.smartEducation();
});

 /**********"SMART EDUCATION" */
Given('the SMART EDUCATION section for FLTY19 Trad', async function () {
  await job.smartEducation();
});
When('I fill the fields55 and click next for FLTY19 Trad', async function () {
  await job.fillfield55duelsmartedu();
});
Then('I should see SMART LITERATURE LEFT ON SITE section for FLTY19 Trad', async function () {
  await job.smartLitLeftOnsite();
});

/**********"SMART LITERATURE LEFT ON SITE" */
Given('the SMART LITERATURE LEFT ON SITE section for FLTY19 Trad', async function () {
  await job.smartLitLeftOnsite();
});
When('I fill the fields56 and click next for FLTY19 Trad', async function () {
  await job.fillfield56duelsmartLit();
});
Then('See CAPTURE CUSTOMER SIGNATURE sec for FLTY19 Trad', async function () {
  await job.captureCustSign();
});

 /**********"Capture Customer Signature" */
Given('the CAPTURE CUSTOMER SIGNATURE section for FLTY19 Trad', async function () {
  await job.captureCustSign();
});
When('I write signature in Customer Signature for FLTY19 Trad', async function () {
  await job.writingSign();
});
Then('I fill the field57 and Job Complete for FLTY19 Trad', async function () {
  await job.fillfield57Capturecust();
});
Then('see Job Completed screen for FLTY19 Trad', async function () {
  await job.JobCompletedScreen();
});



























