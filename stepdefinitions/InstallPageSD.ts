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

Given('I have accessed Post Installation Checks section', async function () {
    await installPage.validatePostInstallationChecksSectionIsVisible();
});

Then('I should see the Post Installation Checks section', async function () {
    await installPage.validatePostInstallationChecksSectionIsVisible();
});

When('I select the value Yes for the Carry Out Polarity Check at Meter radio option', async function () {
    await installPage.setCarryOutPolarityCheckAtMeterTrueRadioOption();
});

Then('I select the value Polarity tested with plug in option from Carry Out Polarity Check with Plug In Test Device drop-down menu', async function () {
    await installPage.setCarryOutPolarityCheckWithPlugInTestDeviceDropDownMenu();
});

Then('I select the value PASS for the Confirm Socket Safety Test Passed radio option', async function () {
    await installPage.setConfirmSocketSafetyTestPassedTrueRadioOption();
});

Then('I update the Test Witness Name textfield with the value Johny Vegas', async function () {
    await installPage.setTestWitnessNameTextfield();
});

Then('I click on the Capture Photo of Martindale Test button', async function () {
    await  installPage.clickOnCapturePhotoOfMartindaleTestBtn();
});

Then('I click on the Capture Photo of Final Meter Installation button', async function () {
    await  installPage.clickOnCapturePhotoOfFinalMeterInstallBtn();
});

Then('I click on the Capture Photo of Close Up of Meter Witness Sticker button', async function () {
    await installPage.clickOnCapturePhotoOfCloseUpOfMeterBtn();
});

Then('I click on the Next button in the Post Installation Checks Section', async function () {
    await installPage.clickOnPostInstallationChecksNextBtn();
});

Given('I have accessed the Commissioning section', async function () {
    await installPage.validateCommissioningSectionIsVisible();
});

Then('I should see the Commissioning section', async function () {
    await installPage.validateCommissioningSectionIsVisible();
});
