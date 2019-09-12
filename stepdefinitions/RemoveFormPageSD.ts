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

When('I update the SMETS2 IHD PPMID on Site form control with the value false', async function () {
    await removePage.populateIHDPPMIDDetailsOnSiteFalse();
});

Then('I should see the Current Meter Details section', async function () {
    await removePage.currentmeterdetlGasSection();
});