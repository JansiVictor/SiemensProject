import {Given, Then, When} from "cucumber";
import {browser} from "protractor";
import { AbortPageObject } from "../pages/AbortPage";
import { Utility } from "../support/utility";
import { HomePageObject } from "../pages/HomePage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const abortIR: AbortPageObject = new AbortPageObject();
const home: HomePageObject = new HomePageObject();
const delay = ms => new Promise(res => setTimeout(res, ms));

When('I fill the GasRisk abort fields with values', async function () {
    await abortIR.fillRiskAssesmentGasFields();
    await abortIR.AbortGas();
	await utility.wait(500);
});
When('I select Reason and Abort the Job', async function () {
	await abortIR.selectreasonOptionAndAbortforgas('abdradio11', 'Leave Gas Off');
	await utility.wait(utility.medium);
	await abortIR.reScanInfoPopup();
	await utility.wait(utility.medium);
});
When('I fill the GasRisk btnfail abort fields with values', async function () {
    await abortIR.fillRiskAssesmentGasFields();
    await abortIR.AbortGas_Btnfail();
	await utility.wait(500);
});