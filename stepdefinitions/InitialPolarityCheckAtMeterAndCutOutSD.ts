import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {RiskAssessmentPageObject} from "../pages/RiskAssessmentPage";
import {RiskAssessmentForGasPageObject} from "../pages/RiskAssessmentForGasPage";
import {RiskAssessmentForElecPageObject} from "../pages/RiskAssessmentForElecPage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const riskAssmentPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const riskAssessmentForGasPage: RiskAssessmentForGasPageObject = new RiskAssessmentForGasPageObject();
const riskAssessmentForElecPage: RiskAssessmentForElecPageObject = new RiskAssessmentForElecPageObject();

Then('I should see Initial Polarity Check - At Meter And Cut Out button', async function () {
});

Given('I have accessed the Initial Polarity Check - At Meter And Cut Out section', async function () {
});

When('I update Initial Polarity Check - At Meter And Cut Out controls with values', async function () {
    await riskAssmentPage.populateInitialPolarityCheckAtMeterAndCutOutSection();
    //await riskAssmentPage.meterCutOutnextSection();
});