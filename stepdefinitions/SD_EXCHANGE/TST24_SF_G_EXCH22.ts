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
import { RemovePageObject 
} from "../../pages/RemovePage";
import { InstallPageObject 
} from "../../pages/InstallPage";
import {
	GASPageObject
} from "../../pages/GASPage";
import {
	JobCompletionPageObject
} from "../../pages/JobCompletionPage";
import {
	RiskAssessmentPageObject
} from "../../pages/RiskAssessmentPage";
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
const risk: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const remove: RemovePageObject = new RemovePageObject();
const inst: InstallPageObject = new InstallPageObject();



Given('the ExchTwTwo Login Page', async function () {
	await browser.get(config.baseUrl);
	await utility.wait(utility.medium);
});

When('I pass ExchTwTwo {string} and {string}', async function (username, password) {
	await login.setUsernamePassword(username, password);
	await utility.wait(utility.medium);
});

Then('I click ExchTwTwo Login button', async function () {
	await login.clickLogin();
	await utility.wait(utility.medium);
});


//** Aparna Changes 24/09- Adding new function for EXCH22 */
Then('I should see the ExchTwTwo Appointment List', async function () {
    //await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
    await home.seeAppList();
});

//** Aparna Changes 24/09- Adding new function for EXCH22 */
Given('the ExchTwTwo Appointment List window', async function () {
    //await home.verifyAppointmentListPage();
    await home.seeAppList();

});

When('I click on ExchTwTwo select button', async function () {
	await home.clickCorrectSelectLink('SFExchange22');
	await utility.wait(utility.medium);
});

Then('I should see ExchTwTwo Work Order window', async function () {
	await applist.verifyWorkOrderWindowText();
});

Given('the ExchTwTwo {string} window', async function (string) {
	//WorkOrder Window
	await applist.verifyWorkOrderWindowText();
});

When('i see ExchTwTwo Call Forward or Arrive Button', async function () {
	await applist.verifyWorkOrderWindowText();
});
Then('I click on ExchTwTwo CALL FORWARD button', async function () {
	await applist.clickOnCallForwardBtn();
});

Then('I should see page ExchTwTwo contect display', async function () {
	await applist.validateTheCallFrwdPageTextDisplay();
});

Then('I should see the ExchTwTwo CUSTOMER CONTACT NUMBER', async function () {
	await utility.wait(utility.medium);
	await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");

});

Then('I should see ExchTwTwo Contact made field', async function () {
	await utility.wait(utility.medium);
	await expect(await applist.contactMadeText.getText()).equal("Contact made?");
	await expect(applist.contactMadeYes.isPresent());
});

Given('the ExchTwTwo {string} page', async function (string) {
	await applist.verifyWorkOrderWindowText();
});

When('I fill the ExchTwTwo fields with the value', async function () {
	// await applist.clickOnCallForwardBtn();
	await applist.clickOnContactMadeOtion();
	await applist.appointmentConfirmationYes();
	await applist.additionalDetails();
});

When('I click on ExchTwTwo DEPART button', async function () {
	await applist.clickDepartBtn();
});

Then('I should see ExchTwTwo Depart for Appointment window', async function () {
	await applist.verifyDepartForAppointmentWindow();
});

Then('I should see the ExchTwTwo correct MPAN details', async function () {
	await applist.mpanDetails();
});

Then('I should see the ExchTwTwo correct Customer Name details', async function () {
	await applist.customerNameDetails();
});

Then('I should see the ExchTwTwo correct PostCode details', async function () {
	await applist.postCodeDetails();
});

Given('ExchTwTwo {string} details', async function (string) {
	await applist.verifyDepartForAppointmentWindow();
});

When('I click on ExchTwTwo MPRNOK button', async function () {
	await applist.mprnOKbtn();
});

Then('I should see ExchTwTwo ARRIVE button', async function () {
	await utility.wait(utility.medium);
	await applist.arriveBtn.getText().then(function (arriveBtnText) {
		console.log("find Arrive Btn Text  " + arriveBtnText);
	});
});

Then('I should see ExchTwTwo DOORSTEP PROTOCOL tab activated', async function () {
	await utility.wait(utility.medium);
	await applist.doorStepPROText.getText().then(function (doorStepPROText) {
		console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
	});
});


When('I click on ExchTwTwo ARRIVE button', async function () {
	await applist.clickArriveBtn();
});

Then('I should see ExchTwTwo Arrival Time details', async function () {
	//comment these 2 lines when continue link is not displayed
	// await utility.wait(utility.medium);
	// await applist.continueLink.click();
	await utility.wait(utility.medium);
	await applist.arrivalTime.getText().then(function (arrivalTimeText) {
		console.log("find Arrival Time Text  " + arrivalTimeText);
	});
});

Then('I should see ExchTwTwo BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

Given('the ExchTwTwo BE AWARE OF ANY DANGER! section', async function () {
	await doorstep.verifyBeAwareOfAnyDangerPage();
});

When('I fill the ExchTwTwo DoorStep Protocol fields with the value', async function () {
	await doorstep.fillTheDoorStepDetails();
});

When('I click on ExchTwTwo ON SITE button', async function () {
	await doorstep.clickONSITEBtn();
});

Then('I should see ExchTwTwo RISK ASSESSMENT tab activated', async function () {
	await riskassess.verifyRiskAssessmentPage();
});

Then('I should see ExchTwTwo INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});


Given('the ExchTwTwo INITIAL RISK ASSESSMENT section', async function () {
	await riskassess.verifyInitialRiskAssessmentPage();
});

When('I fill the ExchTwTwo initialRisk field with the values', async function () {
	await riskassess.inputInitialRiskAssessmentDetails();
});

Then('I should see ExchTwTwo INFO window', async function () {
	await riskassess.infoTextPopUp();
});


Given('the ExchTwTwo INFO window with the text', async function () {
	//await riskassess.infoOKButton.isDisplayed();
	await riskassess.verifyinfookandneedtoperform();
});


Then('I should see ExchTwTwo RISK ASSESSMENT ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

Given('the ExchTwTwo RISK ASSESSMENT - ELEC section', async function () {
	await riskassess.verifyriskElecText();
});

When('I fill the ExchTwTwo RISK ASSESSMENT - ELEC fields with the values', async function () {
	await riskassess.fillRiskAssesmentElecFields();
});

When('I click on ExchTwTwo CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('I click on ExchTwTwo NEXT SECTION button', async function () {
	await riskassess.clickNextSectionBtn();
});

Then('I should see ExchTwTwo CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
	await riskassess.electInstallationSection();
});

Then('the ExchTwTwo CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {

	await riskassess.electInstallationSection();

});

When('I click on ExchTwTwo CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {

	await risk.elecfullmeterInst();

});

Given('I should see ExchTwTwo Capture Photo of GAS Installation section', async function () {
    
	await risk.gasfullmeterInst();

});

Given('the ExchTwTwo RISK ASSESSMENT - GAS section', async function () {

	await riskassessGAS.riskAssessmentGASDisplayed();

});

When('I fill the ExchTwTwo RISK ASSESSMENT - GAS fields with the values', async function () {
	await riskassessGAS.fillRiskAssessGas();
});

Then('I should see the Suitable for ExchTwTwo Smart Installation section', async function () {
	await riskassessGAS.suitableForSmartInstallationTxt();
});


Then('I should see ExchTwTwo INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

Given('the ExchTwTwo INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
	await riskassess.verifyInitialPolarityCheck();
});

When('I fill the ExchTwTwo INITIAL POLARITY CHECK field with the values', async function () {

	await riskassess.fillthePolarityCheckMartinDale();
});

When('I click on ExchTwTwo CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
	await riskassess.verifyCapturepreInstallation();
});

When('I fill the ExchTwTwo Socket Found field with the values', async function () {
	await riskassess.verifyanySocketFoundNO();

});

Given('the Suitable for ExchTwTwo Smart Installation section', async function () {
	await riskassess.verifysuitableforSmartMeterInstallation();
});

When('I click on Is ExchTwTwo Site Suitable for Smart Installation? button', async function () {
	await riskassess.suitableforSmartMeterInstallation();
});

When('I click on ExchTwTwo Equipment Reposition Required?', async function () {
	await riskassess.equipmentRepositionReq();
});

When('I enter ExchTwTwo Additional Notes for Smart installation Check', async function () {
	await riskassess.enterNotesForMeteInstallation();
});


When('I click on ExchTwTwo smart installation NEXT SECTION button', async function () {
	await riskassess.clickSmartInstallationNextBtn();
});

Given('the Suitable for ExchTwTwo Smart Installation GAS section', async function () {
	await riskassessGAS.suitableForSmartInstallationGASTxt();
});

When('I fill ExchTwTwo Site Suitable for Smart Installation? GAS button', async function () {
	await riskassessGAS.fillSuitablityForGASSmartInstallation();
});

Then('I should see ExchTwTwo INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

Given('the ExchTwTwo INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
	await riskassess.verifyMeterAndCutOut();
});

When('I fill the ExchTwTwo METER AND CUT OUT fields with the values', async function () {
	await riskassess.fillthePolarityCheckMeterOut();
});

When('I click on ExchTwTwo SUBMIT button', async function () {
	await riskassess.meterCutOutRemoveSubmitButton();
});

Then('ExchTwTwo I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});

/*** CURRENT COMMS HUB SECTION */

Then('I should see ExchTwTwo CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});
Given('the ExchTwTwo CURRENT COMMS HUB DETAILS section', async function () {
    await remove.currentcommsHubdtl();
});

When('I fill the ExchTwTwo field013 with the value Value013', async function () {
    await remove.fillcurrenthubdtl(1);
    await remove.capturephotocommsHub();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('ExchTwTwo the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await remove.preinstgasTighttest();
});
When('ExchTwTwo I fill the field17 with the value17', async function () {
    await remove.fill17preInstdtls();
});
Then('ExchTwTwo I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await remove.capturepressureMB();
});
Then('ExchTwTwo I fill the field18 with the value18', async function () {
    await remove.fill18preInstdtls();
});
Then('ExchTwTwo I see Gas Tightness Test Completed field as FAIL', async function () {
    await remove.gastightnessfieldfailed();
});
Then('ExchTwTwo I fill the field19 with the value19', async function () {
    await remove.fillPreInstdtls();
});
Then('ExchTwTwo I should see REMOVE IHD-PPMID section', async function () {
    await remove.removeihdPpmid();
});

/***********CURRENT IHD-PPMID DETAILS section *********/

Given('ExchTwTwo the CURRENT IHD-PPMID DETAILS section', async function () {
    await remove.currentihdppmiddetailtext();
});
When('ExchTwTwo I fill the field010 with the value010', async function () {
    await remove.fillcurrentIhdPPMIDdtls();
});
When('ExchTwTwo I should see CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterdetlGasSection();
});
Then('ExchTwTwo I should see the page contect display of current meter details', async function () {
    await remove.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('ExchTwTwo the CURRENT METER DETAILS - GAS section', async function () {
    await remove.currentmeterGasPageContent();
});
When('ExchTwTwo I fill the field with the value', async function () {
    await remove.Tst22fillcurrentmeterdtlGassec();
});

/******Remove IHD / PPMID */

Given('ExchTwTwo the CONFIRM IHD-PPMID REMOVAL section', async function () {
    await remove.removeihdPpmid();
});
When('ExchTwTwo I fill the field22 with the value22', async function () {
    await remove.fillRemovePPMID();
});
Then('I should see ExchTwTwo SEND MESSAGE IHD PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
/**** SEND MESSAGE IHD / PPMID*/
Given('the ExchTwTwo SEND MESSAGE IHD-PPMID section', async function () {
    await remove.sendmsgihdppmid();
});
When('I click on ExchTwTwo Send Message IHD PPMID button', async function () {
    await remove.clickonSendMessage();
});
Then('I should see ExchTwTwo Awaiting Response button', async function () {
    await remove.awaitingResponse();
});


/**** AWAITING RESPONSE*/
Given('the ExchTwTwo Awaiting Response button', async function () {
    await remove.awaitingResponse();
});
When('I wait for ExchTwTwo the butn to disappear', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('I should see ExchTwTwo PPMID Removal Successful button', async function () {
    await remove.ppmidRemovalbtn();
});
Then('I should see ExchTwTwo Request Sent Successfully text message', async function () {
    await remove.sentmesgSuccess();
});


/**** PPMID Removal Successful*/
Given('the ExchTwTwo PPMID Removal Successful button is displayed', async function () {
    await remove.PPMIDRemovalbtndisplayed();
});
When('I click on ExchTwTwo PPMID Removal Successful button', async function () {
    await remove.clickonPPMIDRmvl();
});
Then('I should see ExchTwTwo CONFIRM IHD PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});

/****CONFIRM IHD / PPMID ASSET REMOVAL */

Given('the ExchTwTwo CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
    await remove.confirmAssetRmvl();
});
When('I fill the ExchTwTwo field22 with the Value22', async function () {
    await remove.fill22AssetRemoval();
});
Then('I clk ExchTwTwo OK button in Updated window with the text Asset successfully added to Returns list', async function () {
    await remove.clickonOKBtn();
});
Then('I should see ExchTwTwo REMOVE METER section', async function () {
    await remove.RmvElecmeterSec();
});

/**** "REMOVE GAS METER"*/
Given('ExchTwTwo the REMOVE GAS METER section', async function () {
    await remove.RmvGasmeterSec();
});
When('ExchTwTwo I fill the field23 with the value23', async function () {
    await remove.fillGasmeterRemoval();
});
Then('ExchTwTwo I click on NEXT button in removing gas meter', async function () {
    await remove.clickonnxtBtnofgasmeterRemoval();
});
Then('ExchTwTwo I should see SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});

/*****SEND MESSAGE GMREM */

Given('the ExchTwTwo SEND MESSAGE GMREM section', async function () {
    await remove.sendmsgGMREM();
});
When('I click on ExchTwTwo Send Message GMREM button', async function () {
    await remove.clickOnsendmsgGMREM();
});
Then('I should see ExchTwTwo Awaiting Response button in GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});

/*******Awaiting Response after GMREM */

Given('ExchTwTwo the Awaiting Response btn in Send GMREM', async function () {
    await remove.AwaitingResponseGMREM();
});
When('ExchTwTwo I wait for the btn to disappear in GMREM', async function () {
    await remove.waitforthebuttontoDisappear();
});
Then('ExchTwTwo I should see Removal Successful button', async function () {
    await remove.removalsuccessfulbtn();
});
Then('ExchTwTwo I should see GMREM Request Sent Successfully txt message', async function () {
    await remove.ReqSentSuccess();
});
Then('ExchTwTwo I should see OK to Remove Asset text message', async function () {
    await remove.OktoRemoveAsset();
});

/********Removal Successful */

Given('ExchTwTwo the Removal Successful button is displayed', async function () {
    await remove.removalsuccessfulbtn();
});
When('ExchTwTwo I click on Removal Successful button', async function () {
    await remove.clickonremovalsuccessfulbtn();
});
Then('ExchTwTwo I should see CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});

/********CONFIRM GAS ASSET REMOVAL */

Given('ExchTwTwo the CONFIRM GAS ASSET REMOVAL section', async function () {
    await remove.confirmGasAssetRemoval();
});
When('ExchTwTwo I fill the field24 with the value24', async function () {
    await remove.fill24GasAssetRemoval();
    await remove.clickonokGasAssetRemoval();
});
Then('ExchTwTwo I click on Submit Btn', async function () {
    await utility.wait(utility.medium);
    await remove.clicksubmitok();
});

/********** "Install Page"**** */
/********** "INSTALL COMMS HUB"*/

Given('ExchTwTwo the INSTALL COMMS HUB sec', async function () {
    //await inst.dummy();
    await inst.InstallCommsHubSection();
});
When('ExchTwTwo I fill the Ins comms hub fields and capture photo EVIDENCE', async function () {
    await inst.fillfieldsInstallcommshub(2);
});
Then('ExchTwTwo I should see SEND MSG XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});

/****************"SEND MESSAGE XCHUB" */

Given('ExchTwTwo the SEND MESSAGE XCHUB section', async function () {
    await inst.sendmsgXCHUB();
});
When('ExchTwTwo I click on Send Message XCHUB button', async function () {
    await inst.clicksendmsgXCHUB();
});
Then('ExchTwTwo I should see XCHUB Awaiting Response butn', async function () {
    await inst.SeeAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('ExchTwTwo the Awaiting Response butn XCHUB', async function () {
    await inst.SeeAwaitingresp();
});
When('ExchTwTwo I wait for the butn to disappear XCHUB', async function () {
    await inst.waitforthebuttontoDisappear();
});
Then('ExchTwTwo I should see Removal Successful butn XCHUB', async function () {
    await inst.Remosuccessful();
});
Then('ExchTwTwo I should see Request Sent Successfully text msg XCHUB', async function () {
    await inst.reqsentMsg();
});
Then('ExchTwTwo I should see Whitelist transfer completed check LED indication is correct text message', async function () {
    await inst.LEDindication();
});

/**********"Removal Successful" */

Given('ExchTwTwo the Removal Successful butn is displayed', async function () {
    await inst.Remsuccessdisplayed();
});
When('ExchTwTwo I click on Removal Successful butn', async function () {
    await inst.clickonremsuccess();
});


/**********"New GAS Meter Details" */

Given('ExchTwTwo the NEW GAS METER DETAILS section', async function () {
    await inst.gasMeterDetailsText();
});
When('ExchTwTwo I fill the fields and values for New GAS meter details', async function () {
    await inst.fillGasMeterDetails(2);
});
Then('I should see ExchTwTwo New Regulator section',async function () {
    if (riskassessGAS.regulatorText.isDisplayed()) {
        await utility.wait(utility.medium);
        await riskassessGAS.regulatorText.getText().then(function (regulator) {
            console.log("find regulator Text  " + regulator);
        });
    }
   });


/***** NEW REGULATOR */

   Given('the ExchTwTwo New Regulator section', async function () {
    await utility.wait(utility.medium);
    if (inst.newRegulatorHeader.isDisplayed()) {
        await inst.newRegulatorHeader.getText().then(function (regulator) {
            console.log("find regulator Text  " + regulator);
        });
    }
   });

   When('I fill the ExchTwTwo New Regulator fields with values',async function () {
    await utility.wait(utility.very_low);
    await inst.checkregulatoryes();
    await inst.fillfornewregulator(2);
    
   });

/**********"New Meter Manufacturer Details" */

Given('ExchTwTwo the Manufacturer Letter radio button', async function () {
    await inst.DuelManufacturerdetails();
});
When('ExchTwTwo I fill the field33 with the Value33', async function () {
    await inst.fill33DuelManufacturerdetails();
});
Then('ExchTwTwo manufacturer NEXT SECTION button', async function () {
    await inst.NewMeterNextsection();
});
Then('ExchTwTwo I should see ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('ExchTwTwo the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await inst.AdditionalElecTestandChecks();
});
When('ExchTwTwo I fill the field34 with the Value34', async function () {
    await inst.fill34AdditionalElecTestandChecks();
});
Then('ExchTwTwo I click on CAPTURE PHOTO OF TERMINAL SCREWS button', async function () {
    await inst.AdditionalTerminalscrewCapturePhoto();
});
Then('ExchTwTwo I fill the field35 with the Value35', async function () {
    await inst.fill35AdditionalElecTestandChecks();
});
Then('ExchTwTwo I clk additional test on NEXT SECTION button', async function () {
    await inst.additionaltestNext();
});
Then('ExchTwTwo I should see ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});

/**********"ELEC INITIAL METER READING" */

Given('ExchTwTwo the ELEC INITIAL METER READING section', async function () {
    await inst.ElecInitialMeterReading();
});
When('ExchTwTwo I fill the FldName36 with the Value36', async function () {
    await inst.fillthefieldsforinitmeterReading();
});
Then('ExchTwTwo I should see POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});

/**********"POST INSTALLATION CHECKS" */

Given('ExchTwTwo the POST INSTALLATION CHECKS section', async function () {
    await inst.PostInstallationChks();
});
When('ExchTwTwo I fill the FldName37 with the Value37', async function () {
    await inst.fill37PostInstallationChks();
});
Then('ExchTwTwo post installation page content display', async function () {
    await inst.PostInstallationChksCont();
});

/**********"POST INSTALLATION CHECKS Continuation" */

Given('ExchTwTwo the post installation page contect display', async function () {
    await inst.PostInstallationChksCont();
});
When('ExchTwTwo I fill the FldName38 with the Value38', async function () {
    await inst.fill38PostInstallationChks();
});
Then('ExchTwTwo I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button', async function () {
    await inst.captureteststicker();
});
Then('ExchTwTwo I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button', async function () {
    await inst.captureFinalMeterInst();
});
Then('ExchTwTwo I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button', async function () {
    await inst.captureteststickecloseup();
});
Then('ExchTwTwo I should see COMMISSIONING section', async function () {
    await inst.Commisioning();
});

/**********"Commisioning" */

Given('ExchTwTwo the COMMISSIONING section', async function () {
    await inst.Commisioning();
});
When('ExchTwTwo I fill the FldName39 with the Value39', async function () {
    await inst.fill39Commisioning();
});
Then('ExchTwTwo I click on ADD ANOTHER ASSET button', async function () {
    await inst.DueladdanotherSet();
});
Then('ExchTwTwo I fill the FldName40 with the Value40', async function () {
    await inst.fill40Commisioning();
});
Then('ExchTwTwo I clk commisioning on NEXT button', async function () {
    await inst.CommisioningClickNext();
});
Then('ExchTwTwo I should see ELECTRIC INSTALL & COMMISSIONING section', async function () {
    await inst.ElecInstallCommisioning();
});

/****************"SEND MESSAGE EICOM" */

Given('ExchTwTwo EICOM the Send Message button is displayed', async function () {
    await inst.ElecInstallCommisioning();
});
When('ExchTwTwo EICOM I click on Send Message EICOM button', async function () {
    await inst.clicksendmsgEICOM();
});
Then('ExchTwTwo EICOM I should see AWAITING RESPONSE button', async function () {
    await inst.SeeEICOMAwaitingresp();
});

/********** "AWAITING RESPONSE"*/

Given('ExchTwTwo EICOM the Awaiting Response button', async function () {
    await inst.SeeEICOMAwaitingresp();
});
When('ExchTwTwo EICOM I wait for the button to disappear', async function () {
    await inst.waitEICOMbuttontoDisappear();
});
Then('ExchTwTwo EICOM I should see Commissioning Successful button', async function () {
    await inst.Remosuccessful();
});
Then('ExchTwTwo EICOM I should see Request Sent Successfully text message', async function () {
    await inst.reqsentMsg();
});
Then('ExchTwTwo EICOM I should see Pair Asset to Comms Hub text message', async function () {
    await inst.PairAssettoCommsHub();
});
Then('ExchTwTwo EICOM I should see Pairing Successful text message', async function () {
    await inst.pairingsuccessfulppmidcomm();
});
Then('ExchTwTwo EICOM I should see DCC Handover Requested text message', async function () {
    await inst.DCCHandoverText();
});
Then('ExchTwTwo EICOM I should see Device Clock Synchronised text message', async function () {
    await inst.DeviceClock();
});
Then('ExchTwTwo EICOM I should see MPAN Set, ESME Is Now Installed And Being Configured By DCC text message', async function () {
    await inst.MPANSetbyDCCText();
});
Then('ExchTwTwo EICOM I should see Joins are being Initiated text message', async function () {
    await inst.JoinsareinitText();
});

/********** "Commisioning Successful"*/

Given('ExchTwTwo the Commissioning Successful button is displayed', async function () {
    await inst.Seecommisionsuccessbutton();
});
When('ExchTwTwo I click on Commissioning Successful button', async function () {
    await inst.clickSeecommisionsuccessbutton();
});
Then('ExchTwTwo I should see NEW GAS METER DETAILS section', async function () {
    if (this.newRegulatorTxt.isDisplayed()) {
        await utility.wait(utility.medium);
        await this.newRegulatorTxt.getText().then(function (regulator) {
            console.log("find regulator Text  " + regulator);
        });
    }
});


  When('ExchTwTwo I fill the fields and values for New gas meter details', async function () {
    await inst.fillthefieldsfornewgasmeterdtls(2);
  });
  Then('ExchTwTwo I should see NEW REGULATOR section', async function () {
    if (this.newRegulatorTxt.isDisplayed()) {
        await utility.wait(utility.medium);
        await this.newRegulatorTxt.getText().then(function (regulator) {
            console.log("find regulator Text  " + regulator);
        });
    }
  });

/********** "NEW REGULATOR"*/

Given('ExchTwTwo the NEW REGULATOR section', async function () {
    if (this.newRegulatorTxt.isDisplayed()) {
        await utility.wait(utility.medium);
        await this.newRegulatorTxt.getText().then(function (regulator) {
            console.log("find regulator Text  " + regulator);
        });
    }
});
When('ExchTwTwo I fill the fields and values for new regulator section', async function () {
    await inst.checkregulatoryes();
    await inst.fillNewRegulatorGas(2);
});
Then('ExchTwTwo I should see GAS INITIAL METER READING section', async function () {
    await riskassessGAS.gasInitialMeterTxtDisplay();
});

/**********"GAS INITIAL METER READING" */
Given('ExchTwTwo the GAS INITIAL METER READING section', async function () {
    await riskassessGAS.gasInitialMeterTxtDisplay();
});
When('ExchTwTwo I fill the fields with values Gas initial meter reading', async function () {
    await inst.fillthefieldsforinitmeterReading();
});
Then('ExchTwTwo I should see INSTALL KIT section', async function () {
    await riskassessGAS.gasInstallKitTxtDisplay();
});

/**********"Install Kit " */
Given('ExchTwTwo the Gas Install Kit gas section', async function () {
    await riskassessGAS.gasInstallKitTxtDisplay();
});
When('ExchTwTwo I fill the Gas Install Kit gas section fields with values', async function () {
    await inst.fillthedetailsforinstallkit();
});
Then('ExchTwTwo I should see Perform Post Installation GAS Checks sec', async function () {
    await riskassessGAS.GasPostInstallationTxt();
});

/**********"Post Installation GAS" */
Given('ExchTwTwo the Post Installation GAS sec', async function () {
    await riskassessGAS.GasPostInstallationTxt();
});
When('ExchTwTwo I fill the Post Installation GAS sec fields with values', async function () {
    await riskassessGAS.fillPostInstallationGasDetails();
});
Then('ExchTwTwo I should see GICOM Message sec', async function () {
    await riskassessGAS.gicomSendMessageTxtDisplayed();
});

/**********"GAS INSTALL & COMMISSIONING" */
Given('ExchTwTwo the GAS INSTALL & COMMISSIONING sec', async function () {
  await inst.gasInstallCommisioning();
});
When('ExchTwTwo I click on Send Message GICOM butn', async function () {
  await inst.sendMesgGICOM();
});
Then('ExchTwTwo I should see Awaiting Response butn', async function () {
  await inst.Awatingforgasinstallcommisioning();
});

/**********"AWAITING RESPONSE" */
Given('ExchTwTwo the Awaiting Response butn after gas install', async function () {
  await inst.Awatingforgasinstallcommisioning();
});
When('ExchTwTwo I wait for the button to disappear after post install', async function () {
  await inst.waitforthebuttoDisappear();
});
Then('ExchTwTwo I should see Commissioning Successful button', async function () {
  await inst.commisioningsuccess();
});
Then('ExchTwTwo I should see Request Sent Successfully txt message', async function () {
  await inst.reqsentsuccess();
});
Then('ExchTwTwo I should see Pair Asset to Comms Hub text message', async function () {
  await inst.pairAsset();
});
Then('ExchTwTwo I should see DCC Handover Requested text message', async function () {
  await inst.DCCHandoverText();
});
Then('ExchTwTwo I should see Device Clock Synchronised text message', async function () {
  await inst.DeviceClock();
});
Then('ExchTwTwo I should see MPRN Set, GSME Is Now Installed And Being Configured By DCC text message', async function () {
  await inst.MprnGSME();
});
Then('ExchTwTwo I should see DCC Handover Requested for GPF Device text message', async function () {
  await inst.DCCforGPFdevice();
});
Then('ExchTwTwo I should see Joins are being Initiated text message', async function () {
  await inst.joinsarebeingInit();
});

/********** "Commissioning Successful"*/
Given('ExchTwTwoG the Commissioning Successful button is displayed', async function () {
  await inst.commisioningSuc();
});
When('ExchTwTwoG Commissioning Successful butn clk', async function () {
  await inst.clickonCommissioning();
});
Then('ExchTwTwoG I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
    await riskassessGAS.gasSafetyDisplay();
});

/**********"Gas Appliance Safety Checks" */
Given('ExchTwTwo the Gas Appliance Safety Checks sec', async function () {
    await riskassessGAS.gasSafetyDisplay();
});
When('ExchTwTwo I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
  await inst.fillthefieldsforgasApplicancesafety();
});
Then('ExchTwTwo I should see SMETS PPMID sec', async function () {
  await inst.seePPMIDsection();
});

/**********"INSTALL PPMID"*/
Given('ExchTwTwo the "INSTALL PPMID" section', async function () {
  await inst.seePPMIDsection();
});
When('ExchTwTwo I fill the fields for Install PPMID', async function () {
  await inst.filltheduelforPPMIDsection(2);
});
Then('ExchTwTwo I should see PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});

/**********"PPMID COMMISSIONING" */
Given('ExchTwTwo the PPMID COMMISSIONING section', async function () {
  await inst.SeePPMIDcommisioning();
});
When('ExchTwTwo I click on Send Message IHD-PPMID butn', async function () {
  await inst.clickonIHDPPMID();
});
Then('ExchTwTwo I should see PPMID Awaiting Response butn', async function () {
  await inst.AwaitingrespaftPPMID();
});

/********** "AWAITING RESPONSE"*/
Given('ExchTwTwo the Awaiting Response butn after ppmid commisioning', async function () {
  await inst.AwaitingrespaftPPMID();
});
When('ExchTwTwo I wait for the button to disappear after PPMID Commisioning', async function () {
  await inst.waitforthebuttontoDisappearafterppmid();
});
Then('ExchTwTwo I should see PPMID Commissioning Successful button', async function () {
  await inst.ppmidsuccessbtn();
});
Then('ExchTwTwo I should see PPMID Request Sent Successfully txt message', async function () {
  await inst.reqsentsuctxt();
});
Then('ExchTwTwo I should see PPMID Pair Asset to Comms Hub text message', async function () {
  await inst.pairAssettoComms();
});
Then('ExchTwTwo I should see Pairing Successful text message', async function () {
  await inst.pairingsuccessfulppmidcomm();
});

/**********"PPMID Commissioning Successful" */

Given('ExchTwTwo the PPMID Commissioning Successful button is displayed', async function () {
  await inst.pairingsuccessfulppmidcomm();
});
When('ExchTwTwo I click on SUB button', async function () {
  await inst.clickonSUBbtn();
});
Then('ExchTwTwo I should see DEVICE BINDING and COMMISSIONING sec', async function () {
  await job.DeviceBinding();
});

/**********"Device Binding & Commisioning" */

Given('ExchTwTwo the DEVICE BINDING & COMMISSIONING section', async function () {
    await job.DeviceBinding();
  });
  When('ExchTwTwo I fill the fields53 and click next', async function () {
    await job.Tst12fillfield53dueldevicebinding();
  });
  Then('ExchTwTwo I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });

  /**********"Energy Efficiency Information" */

  Given('ExchTwTwo the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });
  When('ExchTwTwo I fill the fields54 and click next', async function () {
    await job.fillfield55duelenergyeff();
  });
  Then('ExchTwTwo I should see SMART EDUCATION section', async function () {
    await job.smartEducation();
  });

   /**********"SMART EDUCATION" */
  Given('ExchTwTwo the SMART EDUCATION section', async function () {
    await job.smartEducation();
  });
  When('ExchTwTwo I fill the fields55 and click next', async function () {
    await job.fillfield55duelsmartedu();
  });
  Then('ExchTwTwo I should see SMART LITERATURE LEFT ON SITE section', async function () {
    await job.smartLitLeftOnsite();
  });

 /**********"SMART LITERATURE LEFT ON SITE" */
 Given('ExchTwTwo the SMART LITERATURE LEFT ON SITE section', async function () {
    await job.smartLitLeftOnsite();
  });
  When('ExchTwTwo I fill the fields56 and click next', async function () {
    await job.fillfield56duelsmartLit();
  });
  Then('ExchTwTwo See CAPTURE CUSTOMER SIGNATURE sec', async function () {
    await job.captureCustSign();
  });

   /**********"Capture Customer Signature" */
 Given('ExchTwTwo the CAPTURE CUSTOMER SIGNATURE section', async function () {
    await job.captureCustSign();
  });
  When('ExchTwTwo I write signature in Customer Signature', async function () {
    await job.writingSign();
  });
  Then('ExchTwTwo I fill the field57 and Job Complete', async function () {
    await job.fillfield57Capturecust();
  });
  Then('ExchTwTwo see Job Completed screen', async function () {
    await home.seeAppList();
  });
