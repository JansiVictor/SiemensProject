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
	GASPageObject
} from "../../pages/GASPage";
import {
	JobCompletionPageObject
} from "../../pages/JobCompletionPage";
import {
	config
} from "../../config/config";
import {
	Utility
} from "../../support/utility";
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
const riskassess: ElectricPageObject = new ElectricPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const exchnge21Complete: JobCompletionPageObject = new JobCompletionPageObject();

Given('the INSTFrtn Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium_low);
});

When('I pass INSTFrtn {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(utility.very_low);
});

Then('I click INSTFrtn Login button', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});

Given('the INSTFrtn Appointment List window', async function () {
    await home.verifyAppointmentListPage();
  });


  When('I click on INSTFrtn select button', async function () {
    await home.clickCorrectSelectLink('SFINST14');
	await utility.wait(utility.medium_low);
  });

  Then('I should see INSTFrtn Work Order window', async function () {
    await applist.verifyWorkOrderWindowText();
  });

  Given('the INSTFrtn {string} window', async function (string) {
    //WorkOrder Window
	await applist.verifyWorkOrderWindowText();
  });

  When('i see INSTFrtn Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
  });


  Then('I click on INSTFrtn CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
  });


  Then('I should see INSTFrtn page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
  });


  Then('I should see the INSTFrtn CUSTOMER CONTACT NUMBER', async function () {
    await utility.wait(utility.medium_low);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");
    await expect(applist.customerContactNumberText.isPresent());
  });


  Then('I should see INSTFrtn Contact made field',async function () {
    await utility.wait(utility.medium_low);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
  });


  Given('the INSTFrtn {string} page',async function (string) {
    await applist.verifyWorkOrderWindowText();
  });

  When('I fill the INSTFrtn fields with the value',async function () {
    // await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
  });


  When('I click on INSTFrtn DEPART button',async function () {
    await applist.clickDepartBtn();
  });


  Then('I should see INSTFrtn  for Appointment window',async function () {
    await applist.verifyDepartForAppointmentWindow();
  });


  Then('I should see the INSTFrtn correct MPAN details',async function () {
    await applist.mpanDetails();
  });

  Then('I should see the INSTFrtn correct Customer Name details',async function () {
    await applist.customerNameDetails();
  });

  Then('I should see the INSTFrtn correct PostCode details',async function () {
    await applist.postCodeDetails();
  });


  Given('{string} INSTFrtn details',async function (string) {
    await applist.verifyDepartForAppointmentWindow();
  });

  When('I click on INSTFrtn OK button',async function () {
    await applist.mprnOKbtn();

  });


  When('I should see INSTFrtn ARRIVE button',async function () {
    await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
  });

  When('I should see INSTFrtn DOORSTEP PROTOCOL tab activated',async function () {
    await utility.wait(utility.medium_low);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
  });

//   Given('the INSTFrtn {string} page',async function (string) {
//     await applist.clickArriveBtn();
//   });


  When('I click on INSTFrtn ARRIVE button', async function () {
    await applist.clickArriveBtn();
  });


  Then('I should see INSTFrtn Arrival Time details',async function () {
    await utility.wait(utility.medium_low);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
  });


  Then('I should seeINSTFrtn  BE AWARE OF ANY DANGER! section',async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
  });

  Given('the INSTFrtn BE AWARE OF ANY DANGER! section',async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
  });


  When('I fill the INSTFrtn DoorStep Protocol fields with the value',async function () {
    await doorstep.fillTheDoorStepDetails();
  });


  When('I click on INSTFrtn ON SITE button',async function () {
    await doorstep.clickONSITEBtn();
  });


//   Then('I should see INSTFrtn RISK ASSESSMENT tab activated',async function () {
//     await riskassess.verifyRiskAssessmentPage();
//   });


  Then('I should see INSTFrtn Initial Risk Assessment for GAS section',async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
  });


  Given('the INSTFrtn INITIAL RISK ASSESSMENT section',async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
  });


  When('I fill the INSTFrtn initialRisk field with the values', async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
  });

  Then('I should see the INSTFrtn RISK ASSESSMENT - GAS section',async function () {
    await riskassessGAS.riskAssessmentGASDisplayed();
  });


  Given('the INSTFrtn RISK ASSESSMENT - GAS section',async function () {
    await riskassessGAS.riskAssessmentGASDisplayed();
  });


  When('I fill the INSTFrtn RISK ASSESSMENT - GAS fields with the values', async function () {
    await riskassessGAS.fillRiskAssessGas();
  });



  Then('I should see INSTFrtn Suitability for Smart Meter Installation section',async function () {
    await riskassessGAS.suitableForSmartInstallationTxt();
  });


  Given('the INSTFrtn Suitability for Smart Meter Installation section',async function () {
    await riskassessGAS.suitableForSmartInstallationTxt();
  });


  When('I fill the INSTFrtn Suitability for Smart Meter Installation fields with the values',async function () {
    await riskassessGAS.fillSuitablityForSmartInstallation();
  });


  Then('I should see INSTFrtn Capture Photo of GAS Installation section', async function () {
    await riskassessGAS.captureInitialPhotoTxt();
	await riskassessGAS.captureInitialPhotogasbtn.click();
	await utility.wait(utility.very_low);
  });


   Given('the INSTFrtn Pre Installation Gas Tightness section', async function () {
    await riskassessGAS.preInstallationGasTTxt();
   });


   When('I fill the INSTFrtn Pre Installation Gas Tightness fields with the values',async function () {
    await riskassessGAS.preInstallationGasT();
   });


   Then('I should see INSTFrtn Current Meter Details section',async function () {
    await riskassessGAS.currentMeterDetailsTxtDisplay();
   });

   Given('the Check the INSTFrtn current meter detailssection',async function () {
    await riskassess.verifyCurrentMeterDetails();
   });


   When('I fill the INSTFrtn current meter details fields with the values',async function () {
    await riskassess.fillCurrentMeterDetails();
   });

 Then('I should see the INSTFrtn CommsHub details section',async function () {
    await riskassessGAS.currentCommsHubDetailsDisplay();
   });

   Given('the Check the INSTFrtn current CommsHub detailssection',async function () {
    await riskassessGAS.currentCommsHubDetailsDisplay();
   });


   When('I fill the INSTFrtn current CommsHub details fields with the values',async function () {
    await riskassessGAS.fillCurrentCommsHubDetailsGAS();
   });


   Then('I should see the INSTFrtn REMOVE tab activated',async function () {
    await riskassess.removeTabdisplayed();
   });


   Given('the INSTFrtnREMOVE METER section',async function () {
    await riskassess.removeTabdisplayed();
   });


   When('I fill the INSTFrtn REMOVE METER fields with the values',async function () {
    await riskassess.fillRemoveMeterDetails();
   });

   Then('I should see INSTFrtn REMOVE ASSET section',async function () {
    await riskassess.removeAssetTextDisplayed();
   });


   Given('the INSTFrtn REMOVE ASSET section',async function () {
    await riskassess.removeAssetTextDisplayed();
   });

   When('I fill the INSTFrtn REMOVE ASSET field with the values', async function () {
    await riskassess.fillremoveAssetDetails();
   });


   When('I click on INSTFrtn OK button in updated Popup notification',async function () {
    await riskassess.OKButton();
   });

   Then('I should see INSTFrtn New Regulator section',async function () {
    await riskassessGAS.meterRegulatorDetailsTxtDisplay();
   });

   Given('the INSTFrtn New Regulator section', async function () {
    await riskassessGAS.meterRegulatorDetailsTxtDisplay();
   });


   When('I fill the INSTFrtn New Regulator fields with values',async function () {
    await riskassessGAS.fillMeterRegulatorDetailsGAS();
   });

   Then('I should see INSTFrtn install CommsHub section',async function () {
    await riskassessGAS.installCommsHubDetailsDisplay();
   });

   Given('the INSTFrtn install CommsHub section', async function () {
    await riskassessGAS.installCommsHubDetailsDisplay();
   });


   When('I fill the INSTFrtn install CommsHub fields with values',async function () {
    await riskassessGAS.fillinstallCommsHubDetailsGAS(4);
   });


   Then('I should see INSTFrtn NEW METER section',async function () {
    await riskassess.newMeterDetailsDisplayed();
   });

   Given('the  INSTFrtn New Meter details section',async function () {
    await riskassess.newMeterDetailsDisplayed();
   });

   //** Aparna Changes 24/09- Adding new function for INST14(New Meter) */
   When('I fill the INSTFrtn New Meter details fields with values Gas',async function () {
    await riskassessGAS.fillNewMeterDetailsWomanufact(3);
   });

   Then('I should see INSTFrtn Gas Initial Meter Reading section',async function () {
    await riskassessGAS.gasInitialMeterTxtDisplay();
   });

   Given('the INSTFrtn Gas Initial Meter Reading section',async function () {
    await riskassessGAS.gasInitialMeterTxtDisplay();
   });


   When('I fill the INSTFrtn Gas Initial Meter Reading details fields with values',async function () {
    await riskassessGAS.fillGasInitialMeterREading();
   });


   Then('I should see INSTFrtn Gas Install Kit section',async function () {
    await riskassessGAS.gasInstallKitTxtDisplay();
   });

   Given('the INSTFrtn Gas Install Kit section',async function () {
    await riskassessGAS.gasInstallKitTxtDisplay();
   });


   When('I fill the INSTFrtn Gas Install Kit section fields with values', async function () {
    await riskassessGAS.fillGasInstallKitDetails();
   });


   Then('I should see INSTFrtn Perform Post Installation GAS Checks section',async function () {
    await riskassessGAS.GasPostInstallationTxt();
   });

   Given('the INSTFrtn Post Installation GAS section',async function () {
    await riskassessGAS.GasPostInstallationTxt();
   });


   When('I fill the INSTFrtn Post Installation GAS section fields with values',async function () {
    await riskassessGAS.fillPostInstallationGasDetailsExchange19();
   });


   Then('I should see INSTFrtn GICOM Message section', async function () {
    await riskassessGAS.gicomSendMessageTxtDisplayed();
   });


   Given('the INSTFrtn GICOM Message section',async function () {
    await riskassessGAS.gicomSendMessageTxtDisplayed();
   });

   When('I fill the INSTFrtn GICOM Message section fields with values',async function () {
    await riskassessGAS.filllGiComSection();
   });


   Then('I should see INSTFrtn Gas Appliance Safety Checks section',async function () {
    await riskassessGAS.gasSafetyDisplay();
   });


   Given('the INSTFrtn Gas Appliance Safety Checks section',async function () {
    await riskassessGAS.gasSafetyDisplay();
   });

   When('I fill the INSTFrtn Gas Appliance Safety Checks section fields with values and Submit',async function () {
    await riskassessGAS.fillGasSafety();
   });


   Then('I should see INSTFrtn SMETS PPMID section',async function () {
    await exchnge21Complete.PPMIDSectiondispaly();
   });


   Given('the INSTFrtn SMETS PPMID section',async function () {
    await exchnge21Complete.PPMIDSectiondispaly();
   });

   When('I fill the INSTFrtn SMETS PPMID section fields with values',async function () {
    await exchnge21Complete.fillPPMIDSection(2);
   });


   Then('I should see INSTFrtn SMETS XIPMD section', async function () {
    await exchnge21Complete.XIPMDSectiondispaly();
   });


   Given('the INSTFrtn SMETS XIPMD section', async function () {
    await exchnge21Complete.XIPMDSectiondispaly();
   });


   When('I fill the INSTFrtn SMETS XIPMD section fields with values', async function () {
    await exchnge21Complete.fillXIPMDSection();
   });


   Then('I should see INSTFrtn Check Binding and commissioning of PPMID section',async function () {
    await exchnge21Complete.DeviceBindingSectiondispaly();
   });


   Given('the INSTFrtn Binding and commissioning of PPMID section',async function () {
    await exchnge21Complete.DeviceBindingSectiondispaly();
   });


   When('I fill the INSTFrtn Binding and commissioning of PPMID fields with values',async function () {
    await exchnge21Complete.fillDeviceBindingGasMeterSection();
   });


   Then('I should see INSTFrtn configuration of all meters installed section',async function () {
    await exchnge21Complete.configAllmeterDisplay();
   });

   Given('the INSTFrtn configuration of all meters installed  section', async function () {
    await exchnge21Complete.configAllmeterDisplay();
   });


   When('I fill the INSTFrtn configuration of all meters installed  fields with values', async function () {          
    await exchnge21Complete.fillConfigAllmeterGASElec();
   });


   Then('I should see INSTFrtn Energy Efficiency information section', async function () {
    await exchnge21Complete.EEInfoDisplay();
   });


   Given('the INSTFrtn Energy Efficiency information  section',async function () {
    await exchnge21Complete.EEInfoDisplay();
   });


   When('I fill the INSTFrtn Energy Efficiency information fields with values',async function () {
    await exchnge21Complete.fillEEInfo();
   });


   Then('I should see INSTFrtn Perform Smart Meter Education and Demonstration section',async function () {            // Write code here that turns the phrase above into concrete actions
    await exchnge21Complete.smartEducationDisplay();
   });

   Given('the INSTFrtn Perform Smart Meter Education and Demonstration section',async function () {
    await exchnge21Complete.smartEducationDisplay();
   });


   When('I fill the INSTFrtn Perform Smart Meter Education and Demonstration  fields with values', async function () {
    await exchnge21Complete.fillSmartEducationDetails();
   });

   Then('I should see INSTFrtn Summary of Job and receive Customer Signature section',async function () {
    await exchnge21Complete.summaryDisplay();
   });



   Given('the INSTFrtn Summary of Job and receive Customer Signature section',async function () {
    await exchnge21Complete.summaryDisplay();
   });


   When('I fill the INSTFrtn Summary of Job and receive Customer Signaturefields with values',async function () {
    await exchnge21Complete.fillAndPrintSummaryContent();
   });


   Then('I should see INSTFrtn Submit button to complete the job section', async function () {
    await exchnge21Complete.FinalSubmission();
   });