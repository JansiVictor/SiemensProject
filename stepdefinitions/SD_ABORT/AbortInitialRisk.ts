import {Given, Then, When} from "cucumber";
import { AbortPageObject } from "../../pages/AbortPage";
import { Utility } from "../../support/utility";
import { HomePageObject } from "../../pages/HomePage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const abortIR: AbortPageObject = new AbortPageObject();
const home: HomePageObject = new HomePageObject();
const delay = ms => new Promise(res => setTimeout(res, ms));

When('I fill the Abort Initial Risk Fields with Values', async function () {
	await abortIR.abortJoboAfterInitialRisk();
	await utility.wait(utility.very_low);
});
When('I click the Unabletoturnoff Reason and Abort the Job', async function () {
	await abortIR.selectreasonOptionAndAbort('abdradio11', 'Leave Gass Off');
	await utility.wait(utility.medium);
	await abortIR.reScanInfoPopup();
	await utility.wait(utility.medium);
});
When('I click the Unabletoturnoff Reason and Abort the GASJob', async function () {
	await abortIR.selectreasonOptionAndAbortGas('abdradio11', 'Leave Gass Off');
	await utility.wait(utility.medium);
});