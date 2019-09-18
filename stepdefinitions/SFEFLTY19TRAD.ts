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
	RiskAssessmentPageObject
} from "../pages/RiskAssessmentPage";
import {
	InstallPageObject
} from "../pages/InstallPage";
import {
	config
} from "../config/config";
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
const riskassess1: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const SFEFLTY19TRADComplete: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();
const install: InstallPageObject = new InstallPageObject();

Given('the Login Page For SFEFLTY19TRAD', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(5000);
});

When('I pass {string} and {string} For SFEFLTY19TRAD', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(500);
});

Then('I click Login button For SFEFLTY19TRAD', async function () {
	await login.clickLogin();
	await utility.wait(10000);
});

Then('I should see the Appointment List For SFEFLTY19TRAD', async function () {
	await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});

Given('the Appointment List window For SFEFLTY19TRAD', async function () {
	await home.verifyAppointmentListPage();
});

When('I click on select button For SFEFLTY19TRAD', async function () {
	//await applist.continueLinkforEx21.click();
	await home.clickCorrectSelectLink('SFEFLTY19TRAD');
	await utility.wait(5000);
});

Then('I should see Work Order window For SFEFLTY19TRAD', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the {string} window For SFEFLTY19TRAD', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see Call Forward or Arrive Button For SFEFLTY19TRAD', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on CALL FORWARD button For SFEFLTY19TRAD', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page contect display For SFEFLTY19TRAD', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the CUSTOMER CONTACT NUMBER For SFEFLTY19TRAD', async function () {
	await utility.wait(5000);
	await expect(await applist.custcontnumberTxt.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see Contact made field For SFEFLTY19TRAD', async function () {
	await utility.wait(5000);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Then('I should see SFEFLTY19TRAD DETERMINE FAULT ACTIVITY section', async function () {
	await utility.wait(5000);
	await remove.determintfaultActivity();
});

Given('the SFEFLTY19TRAD WorkOrder Page', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the SFEFLTY19TRAD DETERMINE FAULT ACTIVITY section', async function () {
	await remove.determintfaultActivity();
});

When('I fill the SFEFLTY19TRAD fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I fill the SFEFLTY19TRAD determine faulty activity fields with values', async function () {
	await remove.filleleccommsdtls();
	await remove.captureevidsuspectedtamp();
	await remove.fillFlty19TRADcommsdtls();
	await utility.wait(5000);
});

When('I click on SFEFLTY19TRAD DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see SFEFLTY19TRAD Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the SFEFLTY19TRAD correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see SFEFLTY19TRAD Remove Meter section', async function () {
	await remove.RmvElecmeterSec();
});

Given('the SFEFLTY19TRAD Remove Meter section', async function () {
	await remove.RmvElecmeterSec();
});


Then('I should see the SFEFLTY19TRAD correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the SFEFLTY19TRAD correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Then('I should see SFEFLTY19TRAD Confirm Electric Asset Removal section', async function () {
	await remove.confirmelectricassetremovalSectiondispaly();
});

Given('Appointment details For SFEFLTY19TRAD', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Given('the SFEFLTY19TRAD Confirm Electric Asset Removal Section', async function () {
	await remove.confirmelectricassetremovalSectiondispaly();
});

When('I fill the SFEFLTY19TRAD Confirm Electric Asset Removal Section with values', async function () {
	await remove.fillElectricAssetRemovalSection();
	await utility.wait(3000);
	await SFEFLTY19TRADComplete.installSubmit();
});

When('I click on OK button For SFEFLTY19TRAD', async function () {
	await applist.mprnOKbtn();
});

When('I fill the SFEFLTY19TRAD Remove Meter details fields with values', async function () {
	await remove.fillRemoveMeterSection();
});

Then('I should see ARRIVE button For SFEFLTY19TRAD', async function () {
	await utility.wait(10000);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see DOORSTEP PROTOCOL tab activated For SFEFLTY19TRAD', async function () {
	await utility.wait(5000);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ARRIVE button For SFEFLTY19TRAD', async function () {
	await applist.clickArriveBtn();
});

Then('I should see Arrival Time details For SFEFLTY19TRAD', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(5000);
	// await applist.continueLink.click();
	await utility.wait(5000);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see SFEFLTY19TRAD BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Then('I should see the SFEFLTY19TRAD New Meter Details Section', async function () {
	await install.DuelNewMeterDetails();
});

Given('the SFEFLTY19TRAD BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the SFEFLTY19TRAD New Meter Details section', async function () {
	await install.DuelNewMeterDetails();
});

When('I fill the SFEFLTY19TRAD DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I fill the SFEFLTY19TRAD New Meter Details Section with values', async function () {
	await install.fillElecNewMeterDetails(2);
	await utility.wait(5000);
	await install.fillElecnewmeterManufacturerdetails();

});

When('I click on SFEFLTY19TRAD ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see SFEFLTY19TRAD RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see SFEFLTY19TRAD INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the SFEFLTY19TRAD INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the SFEFLTY19TRAD initialRisk field with the values', async function () {
	await utility.wait(4000);
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see SFEFLTY19TRAD RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the SFEFLTY19TRAD RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the SFEFLTY19TRAD RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on SFEFLTY19TRAD CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on SFEFLTY19TRAD NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see SFEFLTY19TRAD CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Given('the SFEFLTY19TRAD CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

When('I click on SFEFLTY19TRAD CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
	await riskassess.capturephotoMeterInstall.click();
	await utility.wait(5000);
});

Then('I should see SFEFLTY19TRAD INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the SFEFLTY19TRAD INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the SFEFLTY19TRAD INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on SFEFLTY19TRAD CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the SFEFLTY19TRAD Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Then('I should see SFEFLTY19TRAD INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await utility.wait(2000);
	await riskassess.verifyMeterAndCutOut();
});

Given('the SFEFLTY19TRAD INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await utility.wait(2000);
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the SFEFLTY19TRAD METER AND CUT OUT fields with the values', async function () {
	await utility.wait(2000);
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on SFEFLTY19TRAD SUBMIT button', async function () {
	await riskassess1.polarityMeterCutoutSubmitTRAD();
});

Then('I should see SFEFLTY19TRAD CURRENT METER DETAILS section', async function () {
	await riskassess.currentMeterDetailsText.isDisplayed();
});

Given('the Check the SFEFLTY19TRAD current meter detailssection', async function () {
	await riskassess.verifyDF17CurrentMeterDetails();
	await utility.wait(10000);
});

When('I fill the SFEFLTY19TRAD current COMM meter details fields with the values', async function () {
	await riskassess.fillCommsHubDetails_DF17SmartCredit();
});

Then('the SFEFLTY19TRAD current COMM HUB detailssection', async function () {
	await remove.currentcommsHubdtl();
});

When('I fill the SFEFLTY19TRAD current meter details fields with the values', async function () {
	await riskassess.fillCurrentMeterDetails();
});

Then('I should see SFEFLTY19TRAD CURRENT COMMS HUB DETAILS section', async function () {
	await remove.currentcommsHubdtl();
});

Then('I should see SFEFLTY19TRAD ADDITIONAL ELECTRICITY CHECKS section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

Given('the SFEFLTY19TRAD ADDITIONAL ELECTRICITY CHECKS details section', async function () {
	await riskassess.additionalElecCheckDisplayed();
});

When('I fill the SFEFLTY19TRAD ADDITIONAL ELECTRICITY CHECKS details fields with values', async function () {
	await utility.wait(2000);
	await riskassess.fillAdditionalElecCheckDetails();
});

Then('I should see SFEFLTY19TRAD Commission Bind the Comms hub to the WAN section', async function () {
  await riskassess.commisioningTxtDisplayed();
});

Then('I should see SFEFLTY19TRAD Elec Initial Meter Reading section', async function () {
	await install.ElecInitialMeterReading();
  });

Given('Commission Bind the SFEFLTY19TRAD Comms hub to the WAN section', async function () {
	await riskassess.commisioningTxtDisplayed();
  });

Given('the SFEFLTY19TRAD Elec Initial Meter Reading section', async function () {
  await install.ElecInitialMeterReading();
});


When('I fill the SFEFLTY19TRAD Commission Bind the Comms hub to the WAN details fields with values', async function () {
  await riskassess.fillCommissioningDetails_SFEFLTY19TRAD();
});

When('I fill the SFEFLTY19TRAD Elec Initial Meter Reading section details fields with values', async function () {
	await install.fillthefieldsforinitmeterReading();
  });

Then('I should see SFEFLTY19TRAD Perform Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});

Then('I should see SFEFLTY19TRAD Perform DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

Given('Perform SFEFLTY19TRAD DCC Message Creation for EICOM section', async function () {
	await riskassess.electricInstalDisplayed();
});

When('I fill the SFEFLTY19TRAD Perform DCC Message Creation for EICOM details fields with values', async function () {
	await riskassess.eicomMessage_failed();
	await utility.wait(3000);
	await SFEFLTY19TRADComplete.installSubmit();
});



Given('Perform SFEFLTY19TRAD Post Installation Checks section', async function () {
	await riskassess.postInstallationCheckDisplayed();
});


When('I fill the SFEFLTY19TRAD Perform Post Installation Checks details fields with values', async function () {
	await riskassess.fillPostInstallationCheck();
});

Then('I should see SFEFLTY19TRAD current PPMID section', async function () {
	await remove.currentihdppmiddetailtext();
	await utility.wait(1000);
});

Given('the SFEFLTY19TRAD current PPMID detailssection', async function () {
	await utility.wait(5000);
	await remove.currentihdppmiddetailtext();
});

When('I fill the SFEFLTY19TRAD current PPMID details fields with the values', async function () {
	await remove.fillcurrentIhdPPMIDdtlsnoExchangeTrade();
});

Then('I should see SFEFLTY19TRAD Current Meter Details section', async function () {
	await riskassessGAS.currentMeterDetailsTxtDisplay();
});


Given('the SFEFLTY19TRAD Device Binding and Comissioning Section',async function () {
  await SFEFLTY19TRADComplete.DeviceBindingSectiondispaly();
});



When('I fill the SFEFLTY19TRAD device binding section fields with values',async function () {
  await SFEFLTY19TRADComplete.fillDeviceBindingSection_SFEFLTY19();
  
});


Then('I should see SFEFLTY19TRAD Energy Efficiency information section',async function () {
  await SFEFLTY19TRADComplete.EEInfoDisplay();
});

Given('the SFEFLTY19TRAD Energy Efficiency information section', async function () {
  await SFEFLTY19TRADComplete.EEInfoDisplay();
});


When('I fill the SFEFLTY19TRAD Energy Efficiency information fields with values',async function () {
  await SFEFLTY19TRADComplete.fillEEInfo();
});

Then('I should see SFEFLTY19TRAD Summary of Job section',async function () {
  await SFEFLTY19TRADComplete.summaryDisplay();
});

Given('the SFEFLTY19TRAD Summary of Job section', async function () {
  await SFEFLTY19TRADComplete.summaryDisplay();
});


When('I fill the SFEFLTY19TRAD summary fields with values', async function () {
  await SFEFLTY19TRADComplete.fillAndPrintSummaryContent();
});


Then('I should click SFEFLTY19TRAD Submit button to complete the job section',async function () {
	await SFEFLTY19TRADComplete.installSubmit();
 
});


Then('I should finally submit SFEFLTY19TRAD job',async function () {
	await SFEFLTY19TRADComplete.FinalSubmission1();
 
});

Then('I should see SFEFLTY19TRAD Perform Smart Meter Education and Demonstration section', async function () {
	await SFEFLTY19TRADComplete.smartEducationDisplay();
	
  });
  
  
  Given('the SFEFLTY19TRAD Perform Smart Meter Education and Demonstration section', async function () {
	await SFEFLTY19TRADComplete.smartEducationDisplay();
  });
  
  
  When('I fill the SFEFLTY19TRAD Perform Smart Meter Education and Demonstration  fields with values', async function () {
	await SFEFLTY19TRADComplete.fillSmartEducationDetails();
  });
  
  
  Then('I should see SFEFLTY19TRAD Summary of Job and Smart literature left onsite section',async function () {
	await SFEFLTY19TRADComplete.summaryDisplay();
	await SFEFLTY19TRADComplete.smartLitLeftOnsiteTxt.isDisplayed();
  });
  
  Given('the SFEFLTY19TRAD Smart literature left onsite section', async function () {
	await SFEFLTY19TRADComplete.smartLitLeftOnsiteTxt.isDisplayed();
  });
  
  
  When('I fill the SFEFLTY19TRAD smart literature fields with values', async function () {
	await SFEFLTY19TRADComplete.fillAndPrintSummaryContent();
  });
  
  
  Then('I should click SFEFLTY19TRAD Submit button to complete the job section',async function () {
	  await SFEFLTY19TRADComplete.installSubmit();
   
  });
  