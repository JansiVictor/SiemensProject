import {
	browser,
	protractor
} from "protractor";
import {
	loginPageObject
} from "../pages/loginPage";
import {
	HomePageObject
} from "../pages/HomePage";
import {
	AppointmentListPageObject
} from "../pages/AppointmentListPage";
import {
	DoorStepPageObject
} from "../pages/DoorStepPage";
import {
	ElectricPageObject
} from "../pages/ElectricPage";
import {
	GASPageObject
} from "../pages/GASPage";
import {
	JobCompletionPageObject
} from "../pages/JobCompletionPage";
import {
	RemovePageObject
} from "../pages/RemovePage";
import {
	config
} from "../config/config";
import {
	RiskAssessmentPageObject
} from "../pages/RiskAssessmentPage";
import {
	InstallPageObject
} from "../pages/InstallPage";
import {
	Utility
} from "../support/utility";
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
const riskassessPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject = new InstallPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();

Given('the FLTYTwntyNoExchange Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium_low);
});

When('I pass FLTYTwntyNoExchange {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});


Then('I click FLTYTwntyNoExchange Login button', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});

Then('I should see the FLTYTwntyNoExchange Appointment List', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the FLTYTwntyNoExchange Appointment List window', async function () {
	await home.verifyAppointmentListPage();
});


When('I click on FLTYTwntyNoExchange select button', async function () {
	await home.clickCorrectSelectLink('DF_FLTY20_SMETS2NoExchange');
	//await home.clickOnTheFLTY20NoExchangeSelectLink();
	//await home.clickOnTheContinueLink();
	await utility.wait(utility.medium_low);
});

Then('I should see FLTYTwntyNoExchange Work Order window', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the FLTYTwntyNoExchange {string} window', async function (string) {
	await applist.verifyWorkOrderWindowText();
});


When('i see FLTYTwntyNoExchange Call Forward or Arrive Button', async function () {
	await applist.verifyWorkOrderWindowText();
});

Then('I click on FLTYTwntyNoExchange CALL FORWARD button', async function () {
	await applist.clickOnCallForwardBtn();
});


Then('I should see FLTYTwntyNoExchange page contect display', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});


// Then('I should see the FLTYTwntyNoExchange CUSTOMER CONTACT NUMBER', async function () {
// await utility.wait(utility.medium_low);
// await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

// });

Then('I should see FLTYTwntyNoExchange Contact made field', async function () {
	await utility.wait(utility.medium_low);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the FLTYTwntyNoExchange {string} page', async function (string) {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the FLTYTwntyNoExchange fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on FLTYTwntyNoExchange DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see FLTYTwntyNoExchange  for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the FLTYTwntyNoExchange correct MPAN details', async function () {
	await applist.mpanDetails();
});


Then('I should see the FLTYTwntyNoExchange correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the FLTYTwntyNoExchange correct PostCode details', async function () {
	await applist.postCodeDetails();
});


Given('{string} FLTYTwntyNoExchange details', async function (string) {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on FLTYTwntyNoExchange Appointment OK button', async function () {
	await applist.mprnOKbtn();
});

When('I should see FLTYTwntyNoExchange ARRIVE button', async function () {
	await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

When('I should see FLTYTwntyNoExchange DOORSTEP PROTOCOL tab activated', async function () {
	await utility.wait(utility.medium_low);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});

When('I click on FLTYTwntyNoExchange ARRIVE button', async function () {
	await applist.clickArriveBtn();
});

Then('I should see FLTYTwntyNoExchange Arrival Time details', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(utility.medium_low);
	// await applist.continueLink.click();
	await utility.wait(utility.medium_low);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see FLTYTwntyNoExchange  BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the FLTYTwntyNoExchange BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the FLTYTwntyNoExchange DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on FLTYTwntyNoExchange ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see FLTYTwntyNoExchange RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see FLTYTwntyNoExchange Initial Risk Assessment for GAS section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

Given('the FLTYTwntyNoExchange INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the FLTYTwntyNoExchange initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

// Then('I should see the FLTYTwntyNoExchange see INFO window', function () {

//   });

Given('the FLTYTwntyNoExchange INFO window with the text', async function () {
	//await riskassess.infoOKButton.isDisplayed();
	await riskassess.infoOKButton.click();

	//await riskassess.performanceRiskNextBtn.click();


	await utility.wait(utility.medium);
	if (riskassess.NeedtoWorkYES.isDisplayed()) {
		var element = riskassess.NeedtoWorkYES;
		browser.executeScript("arguments[0].click()", element);
		await utility.wait(utility.medium_low);
	}
});

Then('I should see FLTYTwntyNoExchange RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the FLTYTwntyNoExchange RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the FLTYTwntyNoExchange RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on FLTYTwntyNoExchange CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on FLTYTwntyNoExchange NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});


Then('I should see the FLTYTwntyNoExchange RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

Given('the FLTYTwntyNoExchange RISK ASSESSMENT - GAS section', async function () {
	await riskassessGAS.riskAssessmentGASDisplayed();
});

When('I fill the FLTYTwntyNoExchange RISK ASSESSMENT fields with the values', async function () {
	await riskassessGAS.fillRiskAssessGas();
});

// Then('I click on FLTYTwntyNoExchange CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
// await riskassessPage.capturegasbtn();
// });
// Then('I fill the FLTYTwntyNoExchange CAPTURE PHOTOGRAPHIC EVIDENCE fields with the values', async function () {
// await riskassessPage.fillthedtl06();
// });
Then('I should see FLTYTwntyNoExchange CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the FLTYTwntyNoExchange Click CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassessPage.capturephotoMeterInstall.click();
});

Then('I should see FLTYTwntyNoExchange CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
	await riskassessPage.gasInstSec();
});

Then('the FLTYTwntyNoExchange Click CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
	await riskassessPage.capfullmeterInst.click();
});


// When('I click on FLTYTwntyNoExchange CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
// await riskassess.capturephotoMeterInstall.click();
// });

Then('I should see FLTYTwntyNoExchange INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the FLTYTwntyNoExchange INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the FLTYTwntyNoExchange INITIAL POLARITY CHECK field with the values', async function () {
	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on FLTYTwntyNoExchange CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the FLTYTwntyNoExchange Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Then('I should see FLTYTwntyNoExchange INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the FLTYTwntyNoExchange INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the FLTYTwntyNoExchange METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on FLTYTwntyNoExchange SUBMIT button', async function () {
	await riskassess.meterCutOutRemoveSubmitButton();
});

// When('I should see FLTYTwntyNoExchange fltynineteen REMOVE IHDPPMID section',async function () {
// await remove.removeihdPpmid();
// });

Given('the FLTYTwntyNoExchange CURRENT IHD-PPMID DETAILS section', async function () {
	await remove.currentihdppmiddetailtext();
});

When('I fill the FLTYTwntyNoExchange CURRENT IHD-PPMID fields with the values', async function () {
	await remove.fillcurrentIhdPPMIDdtls();
});

Then('I should see the FLTYTwntyNoExchange CURRENT METER DETAILS - GAS section', async function () {
	await remove.currentmeterGasPageContent();
});

Given('the FLTYTwntyNoExchange CURRENT METER DETAILS - GAS section', async function () {
	await remove.currentmeterGasPageContent();
});
When('I fill the FLTYTwntyNoExchange CURRENT GAS METER DETAILS field with the value', async function () {
	await remove.fillcurrentmeterdtlGas();
});

When('I fill the FLTYTwntyNoExchange CURRENT METER DETAILS field with the value', async function () {
	await remove.fillcurrentmeter();
});

Then('I should see FLTYTwntyNoExchange CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});


/*** CURRENT COMMS HUB DETAILS*/

Given('the FLTYTwntyNoExchange CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});
When('I fill the FLTYTwntyNoExchange CURRENT COMMS HUB fields with the values', async function () {
	await remove.fillcurrenthubdtl(1);
});
Then('I click on FLTYTwntyNoExchange CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
	await remove.capturephotocommsHub();
});
Then('I should see FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY section', async function () {
	await remove.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('the FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY section', async function () {
	await remove.determintfaultActivity();
});
When('I fill the FLTYTwntyNoExchange DETERMINE FAULT ACTIVITY fields with the values', async function () {
	await remove.FillFaultActivityNoExcahnge();
});

Then('FLTYTwntyNoExchange I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
	await remove.preinstgasTighttest();
});
/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('FLTYTwntyNoExchange the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
	await remove.preinstgasTighttest();
});
When('FLTYTwntyNoExchange I fill the PRE INSTALLATION GAS TIGHTNESS TEST fields with the values', async function () {
	await riskassessGAS.preInstallationGasT();
});
Then('I should see FLTYTwntyNoExchange Submit Button', async function () {
	await remove.submitRemovebtn.click();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('FLTYTwntyNoExchange the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
	await inst.AdditionalElecTestandChecks();
});
When('FLTYTwntyNoExchange I fill the ADDITIONAL ELECTRICITY TESTS & CHECKS fields with the Values', async function () {
	await riskassess.fillAdditionalElecCheckDetails();
});

Then('FLTYTwntyNoExchange I should see POST INSTALLATION CHECKS section', async function () {
	await inst.PostInstallationChksCont();
});

Given('the FLTYTwntyNoExchange Post Installation GAS section', async function () {
	await inst.PostInstallationChksCont();
});

When('I fill the FLTYTwntyNoExchange Post Installation GAS section fields with values', async function () {
	await inst.fill37PostInstallationChks();
	await inst.fill38PostInstallationChks();
	await inst.captureteststicker();
	await inst.captureFinalMeterInst();
	await inst.captureteststickecloseup();
});


Then('FLTYTwntyNoExchange I should see the COMMISSIONING section', async function () {
	await inst.Commisioning();
});
Given('FLTYTwntyNoExchange the COMMISSIONING section', async function () {
	await inst.Commisioning();
});
When('FLTYTwntyNoExchange I fill the COMMISSIONING FldNames with the Values', async function () {
	await inst.fill39Commisioning();
});
Then('FLTYTwntyNoExchange I click on ADD ANOTHER ASSET button', async function () {
	await inst.DueladdanotherSet();
});
// Then('FLTYTwntyNoExchange I fill the FldName40 with the Value40', async function () {
//     await inst.fill40Commisioning();
// });
Then('FLTYTwntyNoExchange I clk commisioning on NEXT button', async function () {
	await inst.CommisioningClickNext();
});
Then('FLTYTwntyNoExchange I should see INSTALL KIT section', async function () {
	await inst.installkitSec();
});

Given('FLTYTwntyNoExchange the Gas Install Kit gas section', async function () {
	await inst.installkitSec();
});
When('FLTYTwntyNoExchange I fill the Gas Install Kit gas section fields with values', async function () {
	await inst.fillthedetailsforinstallkit();
});
Then('FLTYTwntyNoExchange I should see Perform Post Installation GAS Checks sec', async function () {
	await inst.performpostinst();
});

/**********"Post Installation GAS" */
Given('FLTYTwntyNoExchange the Post Installation GAS Tightness Test sec', async function () {
	await inst.performpostinst();
});
When('FLTYTwntyNoExchange I fill the Post Installation GAS Tightness Test sec fields with values', async function () {
	await inst.fillNoExchangePerformPostInst();
});
Then('FLTYTwntyNoExchange I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
	await inst.gasApplicancesafety();
});


/**********"Gas Appliance Safety Checks" */
Given('FLTYTwntyNoExchange the Gas Appliance Safety Checks sec', async function () {
	await inst.gasApplicancesafety();
});
When('FLTYTwntyNoExchange I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
	await inst.fillthefieldsforgasApplicancesafety();
});
Then('FLTYTwntyNoExchange I should see Submit Install Button', async function () {
	await inst.submitInstall.click();
});

/**********"Device Binding & Commisioning" */

Given('FLTYTwntyNoExchange the DEVICE BINDING & COMMISSIONING section', async function () {
	await job.DeviceBinding();
});
When('FLTYTwntyNoExchange I fill the DEVICE BINDING fields and click next', async function () {
	await job.fillfield53dueldevicebinding();
});
Then('FLTYTwntyNoExchange I should see ENERGY EFFICIENCY INFORMATION section', async function () {
	await job.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('FLTYTwntyNoExchange the ENERGY EFFICIENCY INFORMATION section', async function () {
	await job.energyeffInfo();
});
When('FLTYTwntyNoExchange I fill the ENERGY EFFICIENCY fieldss and click next', async function () {
	await job.fillfield55duelenergyeff();
});
//   Then('FLTYTwntyNoExchange I should see SMART EDUCATION section', async function () {
//     await job.smartEducation();
//   });


/**********"Capture Customer Signature" */
Given('FLTYTwntyNoExchange the CAPTURE CUSTOMER SIGNATURE section', async function () {
	await job.summaryDisplay();
});
When('FLTYTwntyNoExchange I write signature in Customer Signature', async function () {
	await job.fillAndPrintSummaryContent();
});
Then('FLTYTwntyNoExchange I fill the CAPTURE CUSTOMER SIGNATURE fields and Job Complete', async function () {
	await job.FinalSubmission();
});
Then('FLTYTwntyNoExchange see Job Completed screen', async function () {
	await job.JobCompletedFLTYNoExchangeScreen();

});