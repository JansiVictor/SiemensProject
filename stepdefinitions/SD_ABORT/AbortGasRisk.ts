import {Given, Then, When} from "cucumber";
import {browser} from "protractor";
import { AbortPageObject } from "../../pages/AbortPage";
import { Utility } from "../../support/utility";
import { HomePageObject } from "../../pages/HomePage";

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
//For Duel Meter
When('I select Reason and Abort the Job', async function () {
	await abortIR.selectreasonOptionAndAbortforgas('abdradio11', 'Leave Gas Off');
	await utility.wait(utility.medium);
	await abortIR.AbortGasbtncall();
	await utility.wait(utility.medium);
	// await abortIR.reScanInfoPopup();
	// await utility.wait(utility.medium);
});
//Not for Duel Meter
When('I select Reason and Gas Abort Job', async function () {
	await abortIR.selectreasonOptionAndAbortforgas('abdradio11', 'Leave Gas Off');
	await utility.wait(utility.medium);
	await abortIR.GasabortApp();
	await utility.wait(utility.medium);
	await abortIR.reScanInfoPopup();
	await utility.wait(utility.medium);
});
When('I fill the GasRisk btnfail abort fields with values', async function () {
    await abortIR.fillRiskAssesmentGasFields();
    await abortIR.AbortGas_Btnfail();
	await utility.wait(500);
});
When('I fill the GasRisk btn1 abort fields with values', async function () {
    await abortIR.fillRiskAssesmentGasFields();
    await abortIR.AbortGas();
	await utility.wait(500);
});
//Remove Meter
When('TST35 I fill the field023 with the Value023', async function () {
    await abortIR.Tst35fillElecmeterrem();
	await utility.wait(500);
});
When('TST55 I fill the FldName with the Value', async function () {
    await abortIR.ElectricInitmeterReading();
	await utility.wait(500);
});
Then('TST077 I fill the field with the value', async function () {
    await abortIR.TST77DetermineFaulty();
	await utility.wait(500);
});
Then('TST135 I fill the configuration of all meters', async function () {
    await abortIR.TST135fillConfigAllmeter();
	await utility.wait(500);
});







