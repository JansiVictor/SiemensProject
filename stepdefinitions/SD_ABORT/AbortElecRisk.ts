import {
	AbortPageObject
} from "../../pages/AbortPage";
import {
	HomePageObject
} from "../../pages/HomePage";

import {
	Utility
} from "../../support/utility";
import { RiskAssessmentPageObject 
} from "../../pages/RiskAssessmentPage";
import { InstallPageObject 
} from "../../pages/InstallPage";
import { RemovePageObject 
} from "../../pages/RemovePage";
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
const inst: InstallPageObject = new InstallPageObject();
const rmv: RemovePageObject = new RemovePageObject();

When('I fill the RISK ASSESSMENT - Abort ELEC fields with the values', async function () {
	await abortElecRisk.fillRiskAssesmentElecFields();
	await utility.wait(utility.medium);
});

Then('I should see AbortElec SMETS Install SUBMIT', async function (workorder) {
	await inst.clicksubmitinstall();
	await utility.wait(utility.low);
});

Then('FTwentyAbort I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
	await riskassess.capturePhotoBtnDisplayed();
});

When('FTwentyAbort I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    riskassess.gasfullmeterInst();
});

When('I fill the Abort Post Installation GAS sec fields with values for FLTY18TRAD', async function () {
	await abortElecRisk.filltheforPostinstAbort();
  
  });

  When('I fill the Abort fields with values Gas initial meter reading', async function () {
	await utility.wait(utility.very_low);
	await rmv.fillabortgasinitialmeter();
	});

	When('TSTAbort I fill the Post Installation GAS sec fields with values', async function () {
		await abortElecRisk.fillperformpostinstAbortNonS2();
	});

	Then('FTwentyAbort I click on SUBMIT button', async function () {
		await abortElecRisk.ClickElecSubmitButton();
	});
	
	Then('FTwentyAbort I click on GAS Asset remval SUBMIT button', async function () {
		await abortElecRisk.ClickElecSubmitButton();
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









