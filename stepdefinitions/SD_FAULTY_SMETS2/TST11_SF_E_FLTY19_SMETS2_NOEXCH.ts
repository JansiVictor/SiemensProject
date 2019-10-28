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
	RemovePageObject
} from "../../pages/RemovePage";
import {
	RiskAssessmentPageObject
} from "../../pages/RiskAssessmentPage";
import {
	InstallPageObject
} from "../../pages/InstallPage";
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
const riskassess1: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const remove: RemovePageObject = new RemovePageObject();
const install: InstallPageObject = new InstallPageObject();
const SFEFLTY19Complete: JobCompletionPageObject = new JobCompletionPageObject();



Given('the Login Page For SFEFLTY19', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium_low);
});

When('I pass {string} and {string} For SFEFLTY19', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(utility.very_low);
});

Then('I click Login button For SFEFLTY19', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});

Then('I should see the Appointment List For SFEFLTY19', async function () {
	//await utility.wait(utility.medium);
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window For SFEFLTY19', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on select button For SFEFLTY19', async function () {
	await home.clickCorrectSelectLink('SFEFLTY19');
	await utility.wait(utility.medium_low);
});

Then('I should see Work Order window For SFEFLTY19', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the {string} window For SFEFLTY19', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button For SFEFLTY19', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button For SFEFLTY19', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display For SFEFLTY19', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.custcontnumberTxt.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field For SFEFLTY19', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Then('I should see SFEFLTY19 DETERMINE FAULT ACTIVITY section', async function () {
	await utility.wait(utility.medium_low);
	await remove.determintfaultActivity();
});

Given('the SFEFLTY19 WorkOrder Page', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the SFEFLTY19 DETERMINE FAULT ACTIVITY section', async function () {
	await remove.determintfaultActivity();
});

When('I fill the SFEFLTY19 fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I fill the SFEFLTY19 determine faulty activity fields with values', async function () {
	await remove.filleleccommsdtls();
	await remove.captureevidsuspectedtamp();
	await remove.fillFlty19commsdtls();
	await utility.wait(utility.medium_low);
	await SFEFLTY19Complete.installSubmit();
});

When('I click on SFEFLTY19 DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see SFEFLTY19 Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the SFEFLTY19 correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the SFEFLTY19 correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the SFEFLTY19 correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('Appointment details For SFEFLTY19', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on OK button For SFEFLTY19', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ARRIVE button For SFEFLTY19', async function () {
	await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated For SFEFLTY19', async function () {
	await utility.wait(utility.medium_low);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button For SFEFLTY19', async function () {
	await applist.clickArriveBtn();
});

Then('I should see Arrival Time details For SFEFLTY19', async function () {
	await utility.wait(utility.medium_low);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see SFEFLTY19 BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the SFEFLTY19 BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the SFEFLTY19 DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on SFEFLTY19 ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see SFEFLTY19 RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see SFEFLTY19 INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the SFEFLTY19 INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the SFEFLTY19 initialRisk field with the values', async function () {
	await utility.wait(utility.medium_low);
	await riskassess.inputInitialRiskAssessmentDetails_SFEFLTY19();
});

Then('I should see SFEFLTY19 RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the SFEFLTY19 RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the SFEFLTY19 RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on SFEFLTY19 CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on SFEFLTY19 NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see SFEFLTY19 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the SFEFLTY19 CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

When('I click on SFEFLTY19 CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess1.elecfullmeterInst();
});

Then('I should see SFEFLTY19 INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the SFEFLTY19 INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the SFEFLTY19 INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on SFEFLTY19 CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the SFEFLTY19 Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Then('I should see SFEFLTY19 INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.verifyMeterAndCutOut();
});

Given('the SFEFLTY19 INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the SFEFLTY19 METER AND CUT OUT fields with the values', async function () {
	await utility.wait(utility.Avg_low);
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SFEFLTY19 SUBMIT button', async function () {
	await riskassess1.polarityMeterCutoutSubmitTRAD();
});

Then('I should see SFEFLTY19 CURRENT METER DETAILS section', async function () {
	await riskassess.currentMeterDetailsText.isDisplayed();
});

Given('the Check the SFEFLTY19 current meter detailssection', async function () {
	await riskassess.verifyDF17CurrentMeterDetails();
	await utility.wait(utility.medium);
});

When('I fill the SFEFLTY19 current COMM meter details fields with the values', async function () {
	await riskassess.fillCommsHubDetails_DF17SmartCredit();
});

Then('the SFEFLTY19 current COMM HUB detailssection', async function () {
	await remove.currentcommsHubdtl();
});

When('I fill the SFEFLTY19 current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see SFEFLTY19 CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});

Then('I should see SFEFLTY19 ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the SFEFLTY19 ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the SFEFLTY19 ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Then('I should see SFEFLTY19 Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Given('Commission Bind the SFEFLTY19 Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});


When('I fill the SFEFLTY19 Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails_SFEFLTY19();
});

Then('I should see SFEFLTY19 Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


Given('Perform SFEFLTY19 Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the SFEFLTY19 Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});

Then('I should see SFEFLTY19 current PPMID section', async function () {
	await remove.currentihdppmiddetailtext();
	await utility.wait(utility.very_low);
});

Given('the SFEFLTY19 current PPMID detailssection', async function () {
	await remove.currentihdppmiddetailtext();
});

When('I fill the SFEFLTY19 current PPMID details fields with the values', async function () {
	await remove.fillcurrentIhdPPMIDdtls();
});

Then('I should see SFEFLTY19 Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});


Given('the SFEFLTY19 Device Binding and Comissioning Section',async function () {
  await SFEFLTY19Complete.DeviceBindingSectiondispaly();
});



When('I fill the SFEFLTY19 device binding section fields with values',async function () {
  await SFEFLTY19Complete.fillDeviceBindingSection_SFEFLTY19();
  
});


Then('I should see SFEFLTY19 Energy Efficiency information section',async function () {
  await SFEFLTY19Complete.EEInfoDisplay();
});

Given('the SFEFLTY19 Energy Efficiency information section', async function () {
  await SFEFLTY19Complete.EEInfoDisplay();
});


When('I fill the SFEFLTY19 Energy Efficiency information fields with values',async function () {
  await SFEFLTY19Complete.fillEEInfo();
});

Then('I should see SFEFLTY19 Summary of Job section',async function () {
  await SFEFLTY19Complete.summaryDisplay();
});

Given('the SFEFLTY19 Summary of Job section', async function () {
  await SFEFLTY19Complete.summaryDisplay();
});


When('I fill the SFEFLTY19 summary fields with values', async function () {
  await SFEFLTY19Complete.fillAndPrintSummaryContent();
});


Then('I should click SFEFLTY19 Submit button to complete the job section',async function () {
	await SFEFLTY19Complete.installSubmit();
 
});


Then('I should finally submit SFEFLTY19 job',async function () {
	await SFEFLTY19Complete.FinalSubmission1();
 
});