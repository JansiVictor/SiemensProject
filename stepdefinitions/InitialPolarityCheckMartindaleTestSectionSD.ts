import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {RiskAssessmentPageObject} from "../pages/RiskAssessmentPage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const riskAssmentPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();

Given('the Initial Polarity Check Martindale Test section', async function () {
    await riskAssmentPage.verifyInitialPolarityCheck();
});

When('I update Initial Polarity Check Martindale Test form controls with values', async function () {
    await riskAssmentPage.populatePolarityCheckMartinDaleWithCPAndRPF();
});





