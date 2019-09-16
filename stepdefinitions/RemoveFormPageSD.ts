import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {RemovePageObject} from "../pages/RemovePage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const removePage: RemovePageObject = new RemovePageObject();

Given('the Current IHD PPMId Details section', async function () {
    await removePage.currentihdppmiddetailtext();
});

When('I update the SMETS2 IHD PPMID on Site form controls', async function () {
    await removePage.populateIHDPPMIDDetailsOnSiteFalse();
});

Then('I should see the Current Meter Details section', async function () {
    await removePage.currentmeterdetlGasSection();
});

Given('I have accessed the Determine Fault Activity section', async function () {
    await removePage.determintfaultActivity()
});

When('I update the Confirm if Elec Meter is On Supply or Off Supply with the value Yes', async function () {
    await removePage.setConfirmIfElecMeterIsOnSupplyOrOffSupplyTrueRadioOption();
});

Then('I update the Confirm if Gas Meter is On Supply or Off Supply with the value Yes', async function () {
    await  removePage.setConfirmIfGasMeterIsOnSupplyOrOffSupplyTrueRadioOption();
});

Then('I click on the Capture Photographic Evidence - Suspected Tampering button', async function () {
    await removePage.captureevidsuspectedtamp();
});

Then('I select the value No for the Are SMETS2 assets installed? radio option', async function () {
    await removePage.setAreSMETS2AssetInstalledFalseRadioOption();
});

Then('I select the value No for the Do you need to Exchange an asset? radio option', async function () {
    await removePage.setDoYouNeedToExchangeAnAssetFalseRadioOption();
});

Then('I select the value Yes for the Do you Need to carry out work on the meter installtion? radio option', async function () {
    await removePage.setDoYouNeedToCarryOutWorkOnTheMeterInstallationTrueRadioOption();
});

Then('I click on the Next button', async function () {
    await removePage.clickOnNextBtn();
});

Then('I should see the Pre Installation Gas Tightness Test section', async function () {
    await removePage.preinstgasTighttest();
});

