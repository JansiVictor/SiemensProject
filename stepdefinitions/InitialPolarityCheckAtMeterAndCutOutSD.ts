import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {RiskAssessmentPageObject} from "../pages/RiskAssessmentPage";
import {RemovePageObject} from "../pages/RemovePage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const riskAssmentPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const removePage: RemovePageObject = new RemovePageObject();


Then('I should see Initial Polarity Check - At Meter And Cut Out button', async function () {
});

Given('I have accessed the Initial Polarity Check - At Meter And Cut Out section', async function () {
});

When('I update Initial Polarity Check - At Meter And Cut Out controls with values', async function () {
    await riskAssmentPage.populateInitialPolarityCheckAtMeterAndCutOutSection();
});

Then('I click on the Submit button', async function () {
    await riskAssmentPage.clickOnRiskAssessmentPageSubmitButton();
});

Then('I should be directed to the Remove page', async function () {
    await removePage.currentihdppmiddetailtext();
});

