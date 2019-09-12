import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {MarkDoorStepFormPageObject} from "../pages/DoorStepFormPage";
import {DoorStepPageObject} from "../pages/DoorStepPage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const doorStepForm: MarkDoorStepFormPageObject = new MarkDoorStepFormPageObject();
const doorStepPage: DoorStepPageObject = new DoorStepPageObject();

Given('I have accessed the DoorStep page', async function () {
    doorStepForm.isDoorStepTextLabelDisplayed();
});

Then('the DoorStep page is displayed', async function () {
    doorStepForm.isDoorStepTextLabelDisplayed();
});

When('I click on the Arrive button', async function () {
    doorStepForm.clickOnArriveButton();
    await utility.wait(5000);
});

Then('update the pre-check options for the Door Step Protocol', async function () {
    doorStepPage.fillTheDoorStepDetails();
    await utility.wait(10000);
});

Then('click on the On-Site button', async function () {
    doorStepPage.clickOnSiteButton();
    await utility.wait(10000);
});

