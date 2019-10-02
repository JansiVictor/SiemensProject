import {
	browser,
	protractor
} from "protractor";
import {
	AbortPageObject
} from "../../pages/AbortPage";
import {
	HomePageObject
} from "../../pages/HomePage";
import {
	config
} from "../../config/config";
import {
	Utility
} from "../../support/utility";
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
const abortnoaccesssuspend: AbortPageObject = new AbortPageObject();
const home: HomePageObject = new HomePageObject();

When('I fill the AbortNoAccessSuspend DoorStep Protocol fields with the values', async function () {
	await abortnoaccesssuspend.suspendJobonTheDoorStepDetails();
	await utility.wait(utility.medium);
});

When('I fill the DoorStep Protocol Values fields to abort suspended job', async function () {
	await abortnoaccesssuspend.abortJoboAfterSuspend();
	await utility.wait(utility.medium);
});

Then('I should click the AbortNoAccessSuspended status for the workorder {string}', async function (workorder) {
	await home.clickCorrectSuspendedLink(workorder);
	await utility.wait(utility.medium);
});

Then('I should see the AbortReasonCodespopup', async function (workorder) {
	await abortnoaccesssuspend.VerifyAbortReasonCodePopup();
	await utility.wait(utility.low);
});

Given('the AbortReasonCodespopup', async function () {
	await abortnoaccesssuspend.VerifyAbortReasonCodePopup();
});

When('I click the worknolongerrequired Reason and Abort the Job', async function () {
	await abortnoaccesssuspend.selectreasonOptionAndAbort('abdradio2', 'No longer required');
	await utility.wait(utility.medium);
	await abortnoaccesssuspend.reScanInfoPopup();
	await utility.wait(utility.medium);
});

Then('I should see the Aborted status for the workorder {string} on the appointments page', async function (workorder) {
	await utility.wait(utility.medium);
	await home.verifyAbortedStatus(workorder)
	await utility.wait(utility.low);
});









