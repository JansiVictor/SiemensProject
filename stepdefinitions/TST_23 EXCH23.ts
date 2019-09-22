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
import { RemoveTRADPageObject } from "../pages/RemoveTRAD";
import { ElectricPageObject } from "../pages/ElectricPage";
import { GASPageObject } from "../pages/GASPage";
import { JobCompletionPageObject } from "../pages/JobCompletionPage";
import { Installation16JobCompletionPageObject } from "../pages/Installation16JobCompletion";
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
const riskassessElec: ElectricPageObject = new ElectricPageObject();
const inst: InstallPageObject = new InstallPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const installation16Complete: Installation16JobCompletionPageObject = new Installation16JobCompletionPageObject();
//const remove: RemoveTRADPageObject = new RemoveTRADPageObject();
const remove1: RemovePageObject = new RemovePageObject();

Given('the Login Page for EXCH23', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(5000);
});
When('I pass {string} and {string} for EXCH23', async function (username, password) {
  await login.setUsernamePassword(username, password);
  await utility.wait(500);
});
Then('I click Login button for EXCH23', async function () {
  await login.clickLogin();
  await utility.wait(10000);
});

Then('I should see the Appointment List for EXCH23', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window for EXCH23', async function () {
  await home.verifyAppointmentListPage();

});

When('I click on select button for EXCH23', async function () {

  await utility.wait(2000);
  await home.clickCorrectSelectLink('SFElecEXCH23');
  await utility.wait(5000);

});

Then('I should see Work Order window for EXCH23', async function () {
  await applist.verifyWorkOrderWindowText();
});

Given('the {string} window for EXCH23', async function (string) {
  //WorkOrder Window

  await applist.verifyWorkOrderWindowText();

});
When('i see Call Forward or Arrive Button for EXCH23', async function () {
  await applist.verifyWorkOrderWindowText();
});

Then('I click on CALL FORWARD button for EXCH23', async function () {
  await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display for EXCH23', async function () {
  await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER for EXCH23', async function () {
  await utility.wait(5000);
  await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");
});

Then('I should see Contact made field for EXCH23', async function () {
  await utility.wait(5000);
  await expect(await applist.contactMadeText.getText()).equal("Contact made?");
  await expect(applist.contactMadeYes.isPresent());

});

Given('the {string} page for EXCH23', async function (string) {
  await applist.verifyWorkOrderWindowText();
});


When('I fill the fields with the value for EXCH23', async function () {  
  await applist.clickOnContactMadeOtion();
  await applist.appointmentConfirmationYes();
  await applist.additionalDetails();

});

When('I click on DEPART button for EXCH23', async function () {
  await applist.clickDepartBtn();
});

Then('I should see Depart for Appointment window for EXCH23', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the correct MPAN details for EXCH23', async function () {
  await applist.mpanDetails();
});

Then('I should see the correct Customer Name details for EXCH23', async function () {
  await applist.customerNameDetails();
});

Then('I should see the correct PostCode details for EXCH23', async function () {
  await applist.postCodeDetails();
});

Given('{string} details for EXCH23', async function (string) {
  await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button for EXCH23', async function () {
  await applist.mprnOKbtn();
});

Then('I should see ARRIVE button for EXCH23', async function () {
  await utility.wait(10000);
  await applist.arriveBtn.getText().then(function (arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);

  });

});

Then('I should see DOORSTEP PROTOCOL tab activated for EXCH23', async function () {
  await utility.wait(5000);
  await applist.doorStepPROText.getText().then(function (doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
  });

});

When('I click on ARRIVE button for EXCH23', async function () {
  await applist.clickArriveBtn();
});

Then('I should see Arrival Time details for EXCH23', async function () {

  //comment these 2 lines when continue link is not displayed

  // await utility.wait(5000);

  // await applist.continueLink.click();

  await utility.wait(5000);
  await applist.arrivalTime.getText().then(function (arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);

  });

});

Then('I should see BE AWARE OF ANY DANGER! section for EXCH23', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the BE AWARE OF ANY DANGER! section for EXCH23', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the DoorStep Protocol fields with the value for EXCH23', async function () {
  await doorstep.fillTheDoorStepDetails();
});

When('I click on ON SITE button for EXCH23', async function () {
  await doorstep.clickONSITEBtn();
});

Then('I should see RISK ASSESSMENT tab activated for EXCH23', async function () {
  await riskassess.verifyRiskAssessmentPage();
});

Then('I should see INITIAL RISK ASSESSMENT section for EXCH23', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

Given('the INITIAL RISK ASSESSMENT section for EXCH23', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the initialRisk field with the values for EXCH23', async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see INFO window for EXCH23', async function () {
  await riskassess.infoTextPopUp();
});

Given('the RISK ASSESSMENT - ELEC section for EXCH23', async function () {
  await riskassess.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - ELEC fields with the values for EXCH23', async function () {
  await riskassess.fillRiskAssesmentElecFields();
});

When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for EXCH23', async function () {
  await riskassess.capturePhotoBtnDisplayed();
});

When('I click on NEXT SECTION button for EXCH23', async function () {
  await riskassess.clickNextSectionBtn();
});

Then('I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for EXCH23', async function () {

  //await riskassessElec.electInstallationSection();
  console.log(" No photo click");

});

Given('the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section for EXCH23', async function () {

 await riskassessElec.electInstallationSection();
});
When('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button for EXCH23', async function () {

  await riskassess.capturephotoMeterInstall.click();

});

Then('I should see INITIAL POLARITY CHECK - MARTINDALE TEST section for EXCH23', async function () {

  await riskassess.verifyInitialPolarityCheck();

});
Given('the INITIAL POLARITY CHECK MARTINDALE TEST section for EXCH23', async function () {

  await riskassess.verifyInitialPolarityCheck();

});
When('I fill the INITIAL POLARITY CHECK field with the values for EXCH23', async function () {
  await riskassess.fillthePolarityCheckMartinDale();

});
When('I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button for EXCH23', async function () {

  await riskassess.verifyCapturepreInstallation();

});

When('I fill the Socket Found field with the values for EXCH23', async function () {

  await riskassess.verifyanySocketFoundNO();
});

Given('the Suitable for Smart Installation section for EXCH23', async function () {

  await riskassessElec.verifysuitableforSmartMeterInstallation();

});

When('I click on Is Site Suitable for Smart Installation? button for EXCH23', async function () {

  await riskassessElec.suitableforSmartMeterInstallation();

});

When('I click on Equipment Reposition Required? for EXCH23', async function () {

  await riskassessElec.equipmentRepositionReq();

});
When('I enter Additional Notes for Smart installation Check for EXCH23', async function () {

  await riskassessElec.enterNotesForMeteInstallation();

});

When('I click on smart installation NEXT SECTION button for EXCH23', async function () {

  await riskassessElec.clickSmartInstallationNextBtn();

});

Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section for EXCH23', async function () {

  await riskassessElec.verifyMeterAndCutOut();

});
Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for EXCH23', async function () {

  await riskassess.verifyMeterAndCutOut();

});

When('I fill the METER AND CUT OUT fields with the values for EXCH23', async function () {

  await riskassess.fillthePolarityCheckMeterOut();

});
When('I click on SUBMIT button for EXCH23', async function () {

  await riskassess.polarityMeterCutoutSubmitTRAD();

});

Then('I should see CURRENT PPMID Details section for EXCH23', async function () {

	await remove1.currentihdppmiddetailtext();

});

Given('CURRENT PPMID Details section for EXCH23', async function () {

await remove1.currentihdppmiddetailtext();

});

When('I fill the Current PPMID  fields with the values for EXCH23', async function () {

 	await remove1.fillcurrentIhdPPMIDdtls();

 });

Then('I should see Current Meter Details section for EXCH23', async function () {
  await utility.wait(2000);
	await remove1.currentMeterDetailsHeader();

});
Given('the Current Meter Details section for EXCH23', async function () {
  await utility.wait(2000);
	await remove1.currentMeterDetailsHeader();

});

When('I fill the current meter details fields with the values for EXCH23', async function () {

	await remove1.fillcurrentmeterdtlElecsecEX23();

});

Then('I should see CURRENT COMMS HUB DETAILS section for EXCH23', async function () {

  await remove1.currentcommsHubdtl();

  

});

/*** CURRENT COMMS HUB DETAILS*/

Given('the CURRENT COMMS HUB DETAILS section for EXCH23', async function () {

  await remove1.currentcommsHubdtl();

});

When('I fill the field13 with the value13 for EXCH23', async function () {

  await remove1.fillcurrenthubdtl(1);

});

When('I click on CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button for EXCH23', async function () {

  await remove1.capturephotocommsHub();

});

Then('I should see ther REMOVE IHD-PPMID section for EXCH23', async function () {

	await remove1.removeihdPpmid();

});
Given('the REMOVE IHD-PPMID section for EXCH23', async function () {

  await remove1.removeihdPpmid();

});
When('I fill the field20 with the value20 for EXCH23', async function () {

  await remove1.fill20rmvihdppmidtls();

});
Then('I click on OK button in Info window with the text Ensure IHD is Powered On for EXCH23', async function () {

  await remove1.ihdpowerOnOK();

});
Then('I fill the field21 with the value21 for EXCH23', async function () {

  await remove1.fill21rmvihdppmidtlsEX23(); //Working fine

});
Then('remove IHD click NEXT SECTION button for EXCH23', async function () {

  await remove1.rmvihdppmidnxtbtn();

});
Then('I should see SEND MESSAGE IHD-PPMID section for EXCH23', async function () {

  await remove1.sendmsgihdppmid();

});

/**** SEND MESSAGE IHD / PPMID*/

Given('the SEND MESSAGE IHD-PPMID section for EXCH23', async function () {

  await remove1.sendmsgihdppmid();

});

When('I click on Send Message IHD-PPMID button for EXCH23', async function () {

  await remove1.clickonSendMessage();

});
Then('I should see Awaiting Response button for PPMID for EXCH23', async function () {

  await remove1.awaitingResponse();

});
/**** AWAITING RESPONSE*/

Given('the Awaiting Response button for EXCH23', async function () {

  await remove1.awaitingResponse();

});

When('I wait for the button to disappear for EXCH23', async function () {

  await remove1.waitforthebuttontoDisappear();

});

Then('I should see PPMID Removal Successful button for EXCH23', async function () {

  await remove1.ppmidRemovalbtn();

});

Then('I should see Request Sent Successfully text message for EXCH23', async function () {

  await remove1.sentmesgSuccess();

});

Then('I should see Asset Unjoined text message for EXCH23', async function () {

  await remove1.assetUnjoinedText();

});
/**** PPMID Removal Successful*/

Given('the PPMID Removal Successful button is displayed for EXCH23', async function () {

  await remove1.PPMIDRemovalbtndisplayed();

});

When('I click on PPMID Removal Successful button for EXCH23', async function () {

  await remove1.clickonPPMIDRmvl();

});

Then('I should see CONFIRM IHD-PPMID ASSET REMOVAL section for EXCH23', async function () {

  await remove1.confirmAssetRmvl();

});

/******CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the CONFIRM IHD-PPMID ASSET REMOVAL section for EXCH23', async function () {

  await remove1.confirmAssetRmvl();

});

When('I fill the field22 with the value22 for EXCH23', async function () {

  await remove1.fill22AssetRemoval();

});

Then('I click on OK button in Updated window with the text Asset successfully added to Returns list for EXCH23', async function () {

  await remove1.clickonOKBtn();

});

Given('the REMOVE METER section for EXCH23', async function () {

  await remove1.RmvElecmeterSec();

});

When('I fill the field023 with the Value023 for EXCH23', async function () {

  await remove1.fillElecmeterremEX23();
  
});

// Then('I clk remove meter NEXT SECTION button for EXCH23', async function () {

//   await remove.clickonnxtBtnofElecmeterRemovalEX23();

// });

Then('I should see SEND MESSAGE EMREM section for EXCH23', async function () {

  await remove1.sendmsgEMREM();

});

/*****SEND MESSAGE EMREM */

Given('the SEND MESSAGE EMREM section for EXCH23', async function () {

  await remove1.sendmsgEMREM();

});

When('I click on Send Message EMREM button for EXCH23', async function () {

  await remove1.clickOnsendmsgEMREM();

});

Then('I should see Awaiting Response button EREM for EXCH23', async function () {

  //await remove.AwaitingResponseEMREM();

  await remove1.AwaitingResponseEMREMEX23();

});



/*******Awaiting Response after EMREM */



Given('the Awaiting Response btn in Send EMREM for EXCH23', async function () {

  //await remove.AwaitingResponseEMREM();

  await remove1.AwaitingResponseEMREMEX23();

});

When('I wait for the butn to disappear for EXCH23', async function () {

  await remove1.waitforthebuttontoDisappear();

});

Then('I should see Removal Successful button for EXCH23', async function () {

  await remove1.Elecremovalsuccessfulbtn();

});

Then('I should see Request Sent Successfully txt message in EMREM for EXCH23', async function () {

  await remove1.ElecReqSentSuccess();

});

Then('I should see OK to Remove Asset text message for EXCH23', async function () {

  await remove1.ElecOktoRemoveAsset();

});



/********Removal Successful */



Given('the Removal Successful button is displayed for EXCH23', async function () {

  await remove1.Elecremovalsuccessfulbtn();

});

When('I click on Removal Successful button for EXCH23', async function () {

  await remove1.clickonElecremovalsuccessfulbtn();

});

Then('I should see CONFIRM ELECTRIC ASSET REMOVAL section for EXCH23', async function () {

  await remove1.confirmElecAssetRem();

});

/********CONFIRM ELEC ASSET REMOVAL */

Given('the CONFIRM ELEC ASSET REMOVAL section for EXCH23', async function () {
  await remove1.confirmElecAssetRem();
});

When('I fill the field024 with the Value024 for EXCH23', async function () {
  await remove1.fill24ElecAssetRemoval();
});

When('Click ok on asset removal for EXCH23', async function () {
  await remove1.clickonokElecAssetRemovalEX23(); 
});

When('CLick on the Submit Button for EXCH23', async function () {
  await remove1.clickSubmitRemElecSecTRAD();

});

Then('I should see Install COMMS HUB window for EXCH23', async function () {
  await inst.InstallCommsHubSection();
});


Given('the Install COMMS HUB window for EXCH23', async function () {
await inst.InstallCommsHubSection();
});

When('I fill values for Install Comms Hub Section for EXCH23', async function () {
await inst.fillfieldsInstallcommshubEX23();
});

Then('I should see New Meter Details Section for EXCH23', async function () {
await riskassessElec.newMeterDetailsDisplayed();
});

//*************************New Meter Details************** */

Given('the New Meter Details Section for EXCH23', async function () {
await riskassessElec.newMeterDetailsDisplayed();
});
When('I fill values for New Meter Details Section for EXCH23', async function () {
await riskassessElec.fillNewMeterDetailsTRAD(); 
});
Then('I should see Additional Electricity Tests & Checks for EXCH23', async function () {
await riskassessElec.additionalElecCheckDisplayed();
});

//*************************Additional Electricity Checks*******/
Given('the the ADDITIONAL ELECTRICITY CHECKS details section for EXCH23', async function () {
await riskassessElec.additionalElecCheckDisplayed();
});

When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for EXCH23', async function () {
await riskassessElec.fillAdditionalElecCheckDetails();
});

Then('Initial Meter Reading of new meter for EXCH23', async function () {
  await riskassessElec.initialMEterREadingTxtDisplayed();
  });

//************************New Meter Reading ****************/
Given('Initial Meter Reading of new meter depending on the number of Registers and dials section for EXCH23', async function () {
await riskassessElec.initialMEterREadingTxtDisplayed();
});

When('I fill the Initial Meter Reading of new meter details fields with values for EXCH23', async function () {
//await riskassessElec.fillInitialElecMeterReading();
await riskassessElec.fillInitialElecMeterReadingEX23();




});

Then('I should see Post Installation Check Section for EXCH23', async function () {

  await utility.wait(5000);
await riskassessElec.postInstallationCheckDisplayed();
});

/*****************************Post Installation checks*********** */
Given('Perform Post Installation Checks section for EXCH23', async function () {
await riskassessElec.postInstallationCheckDisplayed();
});

When('I fill the Perform Post Installation Checks details fields with values for EXCH23', async function () {
await riskassessElec.fillPostInstallationCheck();
});

Then('I should see Commission Bind the Comms hub to the WAN section for EXCH23', async function () {
await riskassessElec.commisioningTxtDisplayed();
});


//********************Commision Binding************************* */

Given('Commission Bind the Comms hub to the WAN section for EXCH23', async function () {
await riskassessElec.commisioningTxtDisplayed();
});

When('I fill the Commission Bind the Comms hub to the WAN details fields with values for EXCH23', async function () {
await remove1.fillCommissioningDetailsEX23();
});

Then('I should see Electric Install and Commisioning for EXCH23', async function () {
await riskassessElec.electricInstalDisplayed();
});

/************************************DCC Message******************** */
Given('Perform DCC Message Creation for EICOM section for EXCH23', async function () {
await riskassessElec.electricInstalDisplayed();
});


When('I fill the Perform DCC Message Creation for EICOM details fields with values for EXCH23', async function () {
await riskassessElec.eicomMessageEX23();
});

Then('I should See INSTALL PPMID section for EXCH23', async function () {
  await inst.seePPMIDsection();
  });

/**********"INSTALL PPMID"*/

Given('the INSTALL PPMID section for EXCH23', async function () {
await inst.seePPMIDsection();
});

When('I fill the fields for Install PPMID for EXCH23', async function () {
await inst.filltheduelforseePPMIDsectionTRAD(2);
});

Then('I should see PPMID COMMISSIONING section for EXCH23', async function () {
await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */

Given('the PPMID COMMISSIONING section for EXCH23', async function () {
await inst.SeePPMIDcommisioning();
});

When('I click on Send Message IHD-PPMID butn for EXCH23', async function () {
await inst.clickonIHDPPMID();
});

Then('I should see PPMID Awaiting Response butn for EXCH23', async function () {
await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/

Given('the Awaiting Response butn after ppmid commisioning for EXCH23', async function () {
await inst.AwaitingrespaftPPMID();
});

When('I wait for the button to disappear after PPMID Commisioning for EXCH23', async function () {
await inst.waitforthebuttontoDisappearafterppmid();
});

Then('I should see PPMID Commissioning Successful button for EXCH23', async function () {
await inst.ppmidsuccessbtn();
});

Then('I should see PPMID Request Sent Successfully txt message for EXCH23', async function () {
await inst.reqsentsuctxt();
});

Then('I should see PPMID Pair Asset to Comms Hub text message for EXCH23', async function () {
await inst.pairAssettoComms();
});

Then('I should see Pairing Successful text message for EXCH23', async function () {
await inst.pairingsuccessfulppmidcomm();
});



/**********"PPMID Commissioning Successful" */

Given('the PPMID Commissioning Successful button is displayed for EXCH23', async function () {
await inst.pairingsuccessfulppmidcomm();
});

When('I click on SUB button for EXCH23', async function () {
await inst.clickonSUBbtnTRAD();
});

Then('I should see DEVICE BINDING and COMMISSIONING sec for EXCH23', async function () {
await job.DeviceBinding();
});  
  
  /**********"Device Binding & Commisioning" */
  
  
  Given('the DEVICE BINDING & COMMISSIONING section for EXCH23', async function () {  
    await job.DeviceBinding();  
  });
  
  When('I fill the fields53 and click next for EXCH23', async function () {  
    await job.fillfield53dueldevicebinding();  
  });  
  
  Then('I should see ENERGY EFFICIENCY INFORMATION section for EXCH23', async function () {  
    await job.energyeffInfo();  
  });
  
  
  
  /**********"Energy Efficiency Information" */  
  
  Given('the ENERGY EFFICIENCY INFORMATION section for EXCH23', async function () {  
    await job.energyeffInfo();  
  });
  
  When('I fill the fields54 and click next for EXCH23', async function () {  
    await job.fillfield55duelenergyeff();  
  });
  
  Then('I should see SMART EDUCATION section for EXCH23', async function () {
  
    await job.smartEducation();
  
  });  
  
   /**********"SMART EDUCATION" */
  
  Given('the SMART EDUCATION section for EXCH23', async function () {  
    await job.smartEducation();  
  });
  
  When('I fill the fields55 and click next for EXCH23', async function () {  
    await job.fillfield55duelsmartedu();  
  });
  
  Then('I should see SMART LITERATURE LEFT ON SITE section for EXCH23', async function () {  
    await job.smartLitLeftOnsite();  
  });  
   
  /**********"SMART LITERATURE LEFT ON SITE" */
  
  Given('the SMART LITERATURE LEFT ON SITE section for EXCH23', async function () {  
    await job.smartLitLeftOnsite();  
  });
  
  When('I fill the fields56 and click next for EXCH23', async function () {  
    await job.fillfield56duelsmartLit();  
  });
  
  Then('See CAPTURE CUSTOMER SIGNATURE sec for EXCH23', async function () {  
    await job.captureCustSign();  
  });
   
   /**********"Capture Customer Signature" */  
  Given('the CAPTURE CUSTOMER SIGNATURE section for EXCH23', async function () {  
    await job.captureCustSign();  
  });
  
  When('I write signature in Customer Signature for EXCH23', async function () {
      await job.writingSign();  
  });
  
  Then('I fill the field57 and Job Complete for EXCH23', async function () {
      await job.fillfield57Capturecust();  
  });
  
  Then('see Job Completed screen for EXCH23', async function () {
    await home.verifyCompletedStatus('SFElecEXCH23');
  });