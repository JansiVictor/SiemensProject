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
import { ElectricPageObject } from "../../pages/ElectricPage";
import { GASPageObject } from "../../pages/GASPage";
import { JobCompletionPageObject } from "../../pages/JobCompletionPage";

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
const riskassessElecInst16: ElectricPageObject = new ElectricPageObject();
const inst: InstallPageObject =new InstallPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();



Given('the Login Page for INST16', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(5000);
});
When('I pass {string} and {string} for INST16', async function (username, password) {
  await login.setUsernamePassword(username, password);
  await utility.wait(500);
});
Then('I click Login button for INST16', async function () {
  await login.clickLogin();
  await utility.wait(10000);
});
Then('I should see the Appointment List for INST16', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

/*Appointmnet List Page and Select */

Given('the Appointment List window for INST16', async function () {
  await home.verifyAppointmentListPage();
});
When('I click on select button for INST16', async function () {
  await utility.wait(2000);
  await home.clickCorrectSelectLink('DFINST16');
  await utility.wait(5000);
});
Then('I should see Work Order window for INST16', async function () {
  await applist.verifyWorkOrderWindowText();
});

/* CALL FORWARD */

Given('the {string} window for INST16', async function (string) {
   await applist.verifyWorkOrderWindowText();
});
When('i see Call Forward or Arrive Button for INST16', async function () {
  await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button for INST16', async function () {
  await applist.clickOnCallForwardBtn();
});
Then('I should see page contect display for INST16', async function () {
  await applist.validateTheCallFrwdPageTextDisplay();
});
Then('I should see the CUSTOMER CONTACT NUMBER for INST16', async function () {
    await applist.customercontactnumberavailable();
 });
Then('I should see Contact made field for INST16', async function () {
  await utility.wait(5000);
  await expect(await applist.contactMadeText.getText()).equal("Contact made?");
  await expect(applist.contactMadeYes.isPresent());
});

//--------------------------------------------------------

Given('the {string} page for INST16', async function (string) {
  await applist.verifyWorkOrderWindowText();
});
When('I fill the fields with the value for INST16', async function () {
  await applist.clickOnContactMadeOtion();
  await applist.appointmentConfirmationYes();
  await applist.additionalDetails();
});
When('I click on DEPART button for INST16', async function () {
  await applist.clickDepartBtn();
});
Then('I should see Depart for Appointment window for INST16', async function () {
  await applist.verifyDepartForAppointmentWindow();
});

//--------------------------------------------------------

Given('Appointment details for INST16', async function () {
  await applist.verifyDepartForAppointmentWindow();
});
When('I click on OK button for INST16', async function () {
  await applist.mprnOKbtn();
});
Then('I should see ARRIVE button for INST16', async function () {
  await utility.wait(10000);
  await applist.arriveBtn.getText().then(function (arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);
  });
});
Then('I should see DOORSTEP PROTOCOL tab activated for INST16', async function () {
  await utility.wait(5000);
  await applist.doorStepPROText.getText().then(function (doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
  });
});
When('I click on ARRIVE button for INST16', async function () {
  await applist.clickArriveBtn();
});
Then('I should see Arrival Time details for INST16', async function () {
  await utility.wait(5000);
  await applist.arrivalTime.getText().then(function (arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);
  });
});
Then('I should see BE AWARE OF ANY DANGER! section for INST16', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('the BE AWARE OF ANY DANGER! section for INST16', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
});
When('I fill the DoorStep Protocol fields with the value for INST16', async function () {
  await doorstep.fillTheDoorStepDetails();
});
When('I click on ON SITE button for INST16', async function () {
  await doorstep.clickONSITEBtn();
});

Then('I should see INITIAL RISK ASSESSMENT section for INST16', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('for INST16 INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
});

When('for INST16 fill the initialRisk field with the values', async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
});



When('for INST16 fill Need to work Yes', async function () {
   if (riskassess.NeedtoWorkYES.isDisplayed()) {
    var element = riskassess.NeedtoWorkYES;
    browser.executeScript("arguments[0].click()", element);
    await utility.wait(5000);
  }
});

Then('for INST16 should see RISK ASSESSMENT ELEC section', async function () {
  await riskassess.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('the RISK ASSESSMENT - INST16ELEC section', async function () {
  await riskassess.verifyriskElecText();
});

When('I fill the RISK ASSESSMENT - INST16ELEC fields with the values', async function () {
  await riskassess.fillRiskAssesmentElecFields();
});

When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button for INST16', async function () {

  await riskassess.capturePhotoBtnDisplayed();
});

Then('I click on NEXT SECTION INST16ELEC button', async function () {
  await riskassess.clickNextSectionBtn();
});

Given('the Suitable for Smart Installation section for INST16', async function () {
	await riskassessElecInst16.verifysuitableforSmartMeterInstallation();
});

When('I click on Is Site Suitable for Smart Installation? button for INST16', async function () {
	await riskassessElecInst16.suitableforSmartMeterInstallation();
});

When('I click on Equipment Reposition Required? for INST16', async function () {
	await riskassessElecInst16.equipmentRepositionReq();
});

When('I enter Additional Notes for Smart installation Check for INST16', async function () {
	await riskassessElecInst16.enterNotesForMeteInstallation();
});


When('I click on smart installation NEXT SECTION button for INST16', async function () {
	await riskassessElecInst16.clickSmartInstallationNextBtn();
});

Then('I should see the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for INST16', async function () {
	await riskassessElecInst16.verifyMeterAndCutOut();
});


//Section 12: Polarity check

Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section for INST16', async function () {
	await riskassessElecInst16.verifyMeterAndCutOut();
});

When('I fill the METER AND CUT OUT fields with the values for INST16', async function () {
	await riskassessElecInst16.fillthePolarityCheckMeterOutINST16();
});

Then('I should see the Comms Hub details section for INST16', async function () {
	await inst.InstallCommsHubSection();
});

/********** "INSTALL COMMS HUB"*/

Given('the INSTALL COMMS HUB sec for INST16', async function () {
  
  await inst.InstallCommsHubSection();

});

When('I fill the Ins comms hub fields and capture photo EVIDENCE for INST16', async function () {

await riskassessElecInst16.fillCommsHubDetails(4);

});

Then('I should see New Meter Details section for for INST16', async function () {

  await inst.DuelNewMeterDetails();

});

Given('the  New Meter details section for INST16', async function () {

	await inst.DuelNewMeterDetails();

});

When('I fill the New Meter details fields with values for INST16', async function () {



  await riskassessElecInst16.fillNewMeterDetailsTRAD();

});

Then('I should see ADDITIONAL ELECTRICITY CHECKS section for INST16', async function () {

  
  await riskassessElecInst16.additionalElecCheckDisplayed();

});
//*************************Additional Electricity Checks*******/
Given('the the ADDITIONAL ELECTRICITY CHECKS details section for INST16', async function () {

  await riskassessElecInst16.additionalElecCheckDisplayed();

});
When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values for INST16', async function () {

await inst.fillAdditionalElecCheckDetailsINST16();
await inst.AdditionalTerminalscrewCapturePhoto();
await inst.fillAdditionalElecTestandChecksInst16();
await inst.additionaltestNext();
});

Then('I should see Electric Initial Meter Reading for INST16', async function () {
  await inst.ElecInitialMeterReading();
   });

/*NEW METER READING */

Given('electric Initial Meter Reading for INST16', async function () {
	await inst.ElecInitialMeterReading();
});

When('I fill the Initial Meter Reading with values for INST16', async function () {
	await inst.fillthefieldsforinitmeterReading();
});
Then('I should see Commission Bind the Comms hub to the WAN section for INST16', async function () {
  await riskassessElecInst16.commisioningTxtDisplayed()

});

//********************Commision Binding************************* */
Given('Commission Bind the Comms hub to the WAN section for INST16', async function () {
  await riskassessElecInst16.commisioningTxtDisplayed();
});

When('I fill the Commission Bind the Comms hub to the WAN details fields with values for INST16', async function () {
  await riskassessElecInst16.fillCommissioningDetails();
});

Then('I should see Post Installation Check Section for INST16', async function () {
	await riskassessElecInst16.postInstallationCheckDisplayed();
  
});
Given('Perform Post Installation Checks section for INST16', async function () {

	await riskassessElecInst16.postInstallationCheckDisplayed();
});

When('I fill the Perform Post Installation Checks details fields with values for INST16', async function () {
	await riskassessElecInst16.fillPostInstallationCheckINST16();

});

Then('I should see DCC message for EICOM for INST16',async function () {

	await riskassessElecInst16.electricInstalDisplayed();
});
/************************************DCC Message******************** */
Given('Perform DCC Message Creation for EICOM section for INST16', async function () {
	await riskassessElecInst16.electricInstalDisplayed();
});

When('I fill the Perform DCC Message Creation for EICOM details fields with values for INST16', async function () {
	await riskassessElecInst16.eicomMessage();
});

Then('I should see Initial Risk Assessment for GAS section for INST16', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
	});

/****************************Initial Risk Assessment Gas***************************/

Given('the INITIAL RISK ASSESSMENT INST16GAS section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the initial Risk INST16GAS field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see RISK ASSESSMENT INST16GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

//------------------------------------------------------------------------------------------
// Risk Assessment for Gas

Given('the RISK ASSESSMENT - GAS section for INST16GAS', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});


When('I fill the RISK ASSESSMENT - GAS fields with the values for INST16GAS', async function () {
	await riskassessGAS.fillRiskAssessGas();
});


Then('I should see Suitability for Smart Meter Installation section for INST16GAS', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});
//-----------------------------------------------------------------------

Given('the Suitability for Smart Meter Installation section for INST16GAS', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


When('I fill the Suitability for Smart Meter Installation fields with the values for INST16GAS', async function () {
	await riskassessGAS.fillSuitablityForSmartInstallation();
});

Then('I should see the New Regulator section for INST16GAS', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});


// Then('I should see Capture Photo of GAS Installation section for INST16GAS', async function () {
// 	await riskassessGAS.captureInitialPhotoTxt();
// 	await riskassessGAS.captureInitialPhotogasbtn.click();
// 	await utility.wait(1000);
// });

/*******************NEW REGULATOR************************ */
Given('the New Regulator section for INST16GAS', async function () {
  await riskassessGAS.meterRegulatorDetailsTxtDisplay();
});

When('I fill the New Regulator fields with values for INST16GAS', async function () {
  await riskassessGAS.fillMeterRegulatorDetailsGASINST16();
   
});

Then('I should see NEW METER section for INST16GAS', async function () {
  await riskassessGAS.newMeterDetailsTxtDisplay();
});

/*********************************New Meter Details***************/

Given('the  New Meter details section for INST16GAS', async function () {
  await riskassessGAS.newMeterDetailsTxtDisplay();
});
When('I fill the New Meter details fields with values Gas for INST16GAS', async function () {
  
 await riskassessGAS.fillNewMeterDetailsGASInst16(2);
});
Then('I should see Gas Initial Meter Reading section for INST16GAS', async function () {
  
  //await riskassessGAS.gasInitialMeterTxtDisplay();

  await inst.gasinitialmeterreading();
});

/*******************Gas Initial Meter Readind***************** */
Given('the Gas Initial Meter Reading section for INST16GAS', async function () {
  //await riskassessGAS.gasInitialMeterTxtDisplay();
  await inst.gasinitialmeterreading();


});

When('I fill the Gas Initial Meter Reading details fields with values for INST16GAS', async function () {
  //await riskassessGAS.fillGasInitialMeterREading();
  await inst.fillthefieldsforinitmeterReading();

});

Then('I should see Gas Install Kit section for INST16GAS', async function () {
  await riskassessGAS.gasInstallKitTxtDisplay();
  
});

/****************** Gas Install Kit section */

Given('the Gas Install Kit section for INST16GAS', async function () {
  
  await riskassessGAS.gasInstallKitTxtDisplay();
  
 });
When('I fill the Gas Install Kit section fields with values for INST16GAS', async function () {
  await riskassessGAS.fillGasInstallKitDetails();
 });

 Then('I should see Perform Post Installation GAS Checks section for INST16GAS', async function () {
  await riskassessGAS.GasPostInstallationTxt();
 });


 //*******************POst Installation***************** */

 Given('the Post Installation GAS section for INST16GAS', async function () {
  await riskassessGAS.GasPostInstallationTxt();
});

When('I fill the Post Installation GAS section fields with values for INST16GAS', async function () {
  //await riskassessGAS.fillPostInstallationGasDetails();

  await riskassessGAS.fillPostInstallationGasDetailsInst16();
});


Then('I should see GICOM Message section for INST16GAS', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});
//-----------------------------------GICOM Message-------------------------------------------------------
Given('the GICOM Message section for INST16GAS', async function () {
  await riskassessGAS.gicomSendMessageTxtDisplayed();
});


When('I fill the GICOM Message section fields with values for INST16GAS', async function () {
  await riskassessGAS.filllGiComSection();
});


Then('I should see Gas Appliance Safety Checks section for INST16GAS', async function () {
  await riskassessGAS.gasSafetyDisplay();
});
//********************************Gas Appliance Safety Checks */

Given('the Gas Appliance Safety Checks section for INST16GAS', async function () {
  await riskassessGAS.gasSafetyDisplay();
});


When('I fill the Gas Appliance Safety Checks section fields with values and Submit for INST16GAS', async function () {
  await riskassessGAS.fillGasSafety16();
});

Then('I should see SMETS PPMID section for INST16GAS', async function () {
await inst.seePPMIDsection();
});

// /**********"INSTALL PPMID"*/
Given('the "INSTALL PPMID" section for INST16', async function () {
await inst.seePPMIDsection();
});
When('I fill the fields for Install PPMID for INST16', async function () {
//await inst.fillthefieldsforseePPMIDsection(2);
await inst.fillPPMIDSectionInst16(2);

});
Then('I should see PPMID COMMISSIONING section for INST16', async function () {
await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('the PPMID COMMISSIONING section for INST16', async function () {
await inst.SeePPMIDcommisioning();
});
When('I click on Send Message IHD-PPMID butn for INST16', async function () {
//await inst.clickonIHDPPMID();
await job.PPMIDMessage();
});

Then('I should see DEVICE BINDING and COMMISSIONING sec for INST16', async function () {
await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('the DEVICE BINDING & COMMISSIONING section for INST16', async function () {
  await job.DeviceBinding();
});
When('I fill the fields53 and click next for INST16', async function () {
  await job.fillDeviceBindingSectionInst16();
});
Then('I should see configuration of all meters installed section for INST16', async function () {
  await job.configAllmeterDisplayInst16();
  console.log ("Test");
});

//----------------------------------------------------------------------------------------
Given('the configuration of all meters installed  section for INST16',async function () {
  await job.configAllmeterDisplayInst16();
  console.log ("Test");
});

When('I fill the configuration of all meters installed  fields with values for INST16',async function () {
  await job.fillConfigAllmeterInstall16();
  
});

Then('I should see ENERGY EFFICIENCY INFORMATION section for INST16', async function () {
  await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('the ENERGY EFFICIENCY INFORMATION section for INST16', async function () {
  await job.energyeffInfo();
});
When('I fill the fields54 and click next for INST16', async function () {
  await job.fillfield55duelenergyeff();
});
Then('I should see SMART EDUCATION section for INST16', async function () {
  await job.smartEducation();
});

 /**********"SMART EDUCATION" */
Given('the SMART EDUCATION section for INST16', async function () {
  await job.smartEducation();
});
When('I fill the fields55 and click next for INST16', async function () {
  await job.fillfield55duelsmartedu();
});
Then('I should see SMART LITERATURE LEFT ON SITE section for INST16', async function () {
  await job.smartLitLeftOnsite();
});

/**********"SMART LITERATURE LEFT ON SITE" */
Given('the SMART LITERATURE LEFT ON SITE section for INST16', async function () {
  await job.smartLitLeftOnsite();
});
When('I fill the fields56 and click next for INST16', async function () {
  await job.fillfield56duelsmartLit();
});
Then('See CAPTURE CUSTOMER SIGNATURE sec for INST16', async function () {
  await job.captureCustSign();
});

 /**********"Capture Customer Signature" */
Given('the CAPTURE CUSTOMER SIGNATURE section for INST16', async function () {
  await job.captureCustSign();
});
When('I write signature in Customer Signature for INST16', async function () {
  await job.writingSign();
});
Then('I fill the field57 and Job Complete for INST16', async function () {
  await job.fillfield57Capturecust();
});
Then('see Job Completed screen for INST16', async function () {
  //await job.JobCompletedScreen();

  await home.verifyCompletedStatus('DFINST16');

});
