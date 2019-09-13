import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {RemovePageObject} from "../pages/RemovePage";
import {RemovePagePreInstallationGasTightnessTestSectionObject} from "../pages/RemovePagePreInstallationGasTightnessTestSection";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const removePage: RemovePageObject = new RemovePageObject();
const removePagePreInstallGasTightnessTestSectionObject: RemovePagePreInstallationGasTightnessTestSectionObject = new RemovePagePreInstallationGasTightnessTestSectionObject();


When('I select the value Yes for the Complete Pre-Installation Gas Tightness Test section radio option', async function () {
});

When('I select the value Yes for the Pre Installation-Gas Tightness Test Carried out radio option', async function () {
});

Then('I click on the Capture Photo of U-Grade Attached to Gas Meter, showing Pressure in MB button', async function () {
});

Then('I select the value Yes for the Was there a drop in pressure radio option', async function () {
});

Then('I select the value 1.5 for the Enter DIP Gas Pressure drop-down menu', async function () {
});

Then('I select the value U6 - 0.5-4m bars for the Select Meter Type drop-down menu', async function () {
});

Then('I select the value Yes for the Can you or Customer Smell Gas radio option', async function () {
});

Then('I update the Additional Notes textfield with the value Gas Tested', async function () {
});

Then('I select the value GT Issue for the Gas Tightness Test Failure-Outcome? radio option', async function () {
});

Then('I select the value Yes for the Reported Incident to GT radio option', async function () {
});

Then('I update the National Grid job Ref textfield with the value 1', async function () {
});

Then('I select the value Yes for the Reported Incident to H&S radio option', async function () {
});

Then('I update the AIRline Ref. No. textfield with the value 2', async function () {
});

Then('I select the value Yes for the Need to wait for the GT Attendance on Site radio option', async function () {
});

Then('I select the value Yes for the GT Resolve Issue radio option', async function () {
});

Then('I click on the Submit button', async function () {
});

Then('I should see the Perform Additional Electricity Tests & Checks section', async function () {
});