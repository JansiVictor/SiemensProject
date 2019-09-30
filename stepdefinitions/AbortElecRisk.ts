import {
	browser,
	protractor
} from "protractor";
import {
	AbortPageObject
} from "../pages/AbortPage";
import {
	HomePageObject
} from "../pages/HomePage";
import {
	config
} from "../config/config";
import {
	Utility
} from "../support/utility";
import { RiskAssessmentPageObject 
} from "../pages/RiskAssessmentPage";
import { homedir } from "os";
const {
	Given,
	When,
	Then
} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const abortElecRisk: AbortPageObject = new AbortPageObject();
const home: HomePageObject = new HomePageObject();
const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();

When('I fill the RISK ASSESSMENT - Abort ELEC fields with the values', async function () {
	await abortElecRisk.fillRiskAssesmentElecFields();
	await utility.wait(utility.medium);
});

Then('FTwentyAbort I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('FTwentyAbort I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await utility.wait(utility.medium_low);
	if (await riskassess.capfullmeterInst.isDisplayed()) {
		await riskassess.capfullmeterInst.click();
	}
	await utility.wait(utility.very_low);
});

Then('FTwentyAbort I click on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSectionfrmElec();
});

Then('I should see the AbortReasonCodespopup', async function (workorder) {
	await abortElecRisk.VerifyAbortReasonCodePopup();
	await utility.wait(utility.low);
});

Given('the ELEC Risk AbortReasonCodespopup', async function () {
	await abortElecRisk.VerifyAbortReasonCodePopup();
});

When('I click the ELEC Risk  Reason and Abort the Job', async function () {
	await abortElecRisk.elecRiskOptionAndAbortElecMeter('abdradio6', 'A10 : DB Earthing issues at existing installations which present an immediate risk to consumer/MO');
	await utility.wait(utility.medium);
	////await abortElecRisk.reScanInfoPopup();
	//await utility.wait(utility.medium);
});

When('I click the ELEC Reason and Abort Appointment Job', async function () {
	await abortElecRisk.elecRiskOptionAndAbortAppointment('abdradio6', 'A10 : DB Earthing issues at existing installations which present an immediate risk to consumer/MO');
	await utility.wait(utility.medium);
	await abortElecRisk.reScanInfoPopup();
	await utility.wait(utility.medium);
});

Then('I should see the ELEC Risk Aborted status for the workorder {string} on the appointments page', async function (workorder) {
	await utility.wait(utility.medium);
	await home.verifyAbortedStatus(workorder)
	await utility.wait(utility.low);
});









