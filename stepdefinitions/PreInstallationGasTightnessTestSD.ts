import {Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {RemovePageObject} from "../pages/RemovePage";


const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const removePage: RemovePageObject = new RemovePageObject();


When('I have accessed the Pre Installation Gas Tightness Test section', async function () {
    await removePage.preinstgasTighttest();
});

When('I select the value Yes for the Pre Installation-Gas Tightness Test Carried out radio option', async function () {
    await removePage.fill17preInstdtls();
});

Then('I click on the Capture Photo of U-Grade Attached to Gas Meter, showing Pressure in MB button', async function () {
    await removePage.capturePhotoOfUGaugeAttachedToGasMeter();
});

Then('I select the value Yes for the Was there a drop in pressure radio option', async function () {
    await removePage.fill18preInstdtls();
});

Then('I complete the remainder of the Pre Installation Gas Tightness form with values', async function () {
    await removePage.fill19preInstdtls();
});

Then('I click on the Submit button in the Determine Faulty Activity Section', async function () {
    await removePage.clickOnPreInstallationGasTightnessTestSubmitBtn();
});