import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {InstallPageObject} from "../pages/InstallPage";


const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const installPage: InstallPageObject = new InstallPageObject();

Given('I have accessed the Perform Additional Electricity Tests & Checks section', async function () {
    await installPage.isH1HeaderPresentInstallPage();
});

Then('I should see the Perform Additional Electricity Tests & Checks section', async function () {
    await installPage.isH1HeaderPresentInstallPage();
});

When('I select the value Yes for the Terminal Screw Tightness Checked radio option', async function () {
    await installPage.setTerminalScrewTightnessCheckedTrueRadioOption();
});

When('I click on the Capture Photo of Terminal Screws button', async function () {
    await installPage.clickOnCapturePhotosOfTerminalScrewsBtn();
});

Then('I select the value Yes for the All Seals Intact – Including Blocks & Isolators radio option', async function () {
    await installPage.setAllSealsIntactTrueRadioOption();
});

Then('I select the value Yes for the All Ports Sealed radio option', async function () {
    await installPage.setAllPortsSealedTrueRadioOption();
});

Then('I select the value Yes for the Approved Siemens Cable Markers installed radio option', async function () {
    await installPage.setApprovedSiemensCableMarkersInstalledCorrectlyTrueRadioOption();
});

Then('I select the value Yes for the Visual Inspection Completed radio option', async function () {
    await installPage.setVisualInspectionCompletedTrueRadioOption();
});

Then('I select the value 1. L N N L for the Cable Marker drop-down menu', async function () {
    await installPage.setCableMarkerVal1LNNLDropDownMenu();
});

Then('I select the value TN-C-S for the Earth Type drop-down menu', async function () {
    await installPage.setEarthTypeVal1DropDownMenu();
});

Then('I select the value Yes for the Replacement Meter Board radio option', async function () {
    await installPage.setReplacementMeterBoardTrueRadioOption();
});

Then('I select the value No for the Meter Tails Changed radio option', async function () {
    await  installPage.setMeterTailsChangedFalseRadioOption();
});

Then('I select the value Yes for the Replaced Main Fuse radio option', async function () {
    await installPage.setReplacedMainFuseTrueRadioOption();
});

Then('I select the value Yes for the Emergency Job radio option', async function () {
    await installPage.setEmergencyJobTrueRadioOption();
});

Then('I click on the Next button in the Additional Electricity Tests & Checks section', async function () {
    await installPage.clickOnAdditionalElectricityTestsNextBtn();
});

Then('I should see the Post Installation Checks section', async function () {
    await installPage.validatePostInstallationChecksSectionIsVisible();
});

