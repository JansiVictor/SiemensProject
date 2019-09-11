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

Then('I am prompted to submit details for an initial risk assessment', async function () {
    await riskAssessmentForElecPage.verifyInitialRiskAssessmentPage();
});

Given('I have accessed the initial risk assessment tab', async function () {
    await riskAssessmentForElecPage.verifyInitialRiskAssessmentPage();
});

When('I input details for the initial risk assessment', async function () {
    await riskAssmentPage.inputInitialRiskAssessmentDetails();
});

Then('input the details for an Electric risk assessment', async function () {
    await riskAssessmentForElecPage.fillRiskAssesmentElecFields();
});

Then('input the details for a Gas risk assessment', async function () {
    await riskAssessmentForGasPage.fillRiskAssessGas();
});