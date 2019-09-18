import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {InstallPageObject} from "../pages/InstallPage";
import {JobCompletionPageObject} from "../pages/JobCompletionPage";


const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const installPage: InstallPageObject = new InstallPageObject();
const completionPage: JobCompletionPageObject = new JobCompletionPageObject();

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

Then('I click on the Capture Photo, of Final Meter Installation button', async function () {
    await  installPage.clickOnCapturePhotoOfFinalMeterInstallBtn();
});

Then('I click on the Capture Photo of Close Up of Meter Witness Sticker button', async function () {
    await installPage.clickOnCapturePhotoOfCloseUpOfMeterBtn();

});

Then('I click on the Next button in the Post Installation Checks Section', async function () {
    await installPage.clickOnPostInstallGasTightnessTestNextBtn();
});

Given('I have accessed the Commissioning section', async function () {
    await installPage.validateCommissioningSectionIsVisible();
});

Then('I should see the Commissioning section', async function () {
    await installPage.validateCommissioningSectionIsVisible();
});

When('I select the value Yes for the Installed Kit Used? radio option', async function () {
    await installPage.setInstallKitUsedTrueRadioOption();
});

Then('I select the value T1 Aerial from the Non Serialised Assets drop-down menu', async function () {
    await installPage.setNonSerialisedAssetsValT1AerialDropDownMenu();
});

Then('I select the value T1 Aerial, from the Non Serialised Assets drop-down menu', async function () {
    await installPage.setNonSerialisedAssetsValT1AerialDropDownMenuInstallKitForm();
});

When('I select the value Meter Board from the Non Serialised Assets drop-down menu', async function () {
    await installPage.setNonSerialisedAssetsValMeterBoardDropDownMenu();
});

Then('I click on the Install Kit section Next button', async function () {
    await installPage.clickOnInstallKitNextSectionBtn();
});

Then('I update the Quantity textfield with the value 1', async function () {
    await installPage.setQuantityVal1Textfield();
});

Then('I update the Quantity textfield, in the with the value 1', async function () {
    await installPage.setQuantityVal1TextfieldInstallKitForm();
});

Then('I click on the Add Another Asset button from the Commissioning section', async function () {
    await installPage.clickOnAddAnotherAssetBtn();
});

Then('I click on the Add Another Asset button from the Install Kit section', async function () {
    await installPage.clickOnAddAnotherAssetBtnInstallKitSection();
});

Then('A new recordset is displayed dyanmically, directly below the first entry', async function () {
    await installPage.verifyThatANewRecordsetIsDynamicallyCreated();
});

When('I select the value Connector Blocks from the Non Serialised Assets drop-down menu', async function () {
    await installPage.setNonSerialisedAssetsValConnectorBlocksDropDownMenu();
});

Then('I update the Quantity textfield with the value 2', async function () {
    await installPage.setQuantityVal2Textfield();
});

Then('I update the Quantity textfield, with the value 2', async function () {
    await installPage.setQuantityVal2TextfieldInstallKitForm();
});

Then('I click on the Commissioning section Next button', async function () {
    await installPage.clickOnCommissioningNextSectionBtn();
});

Given('I have accessed the Install Kit section', async function () {
    await installPage.installkitSec();
});

Then('I should see the Install Kit section', async function () {
    await installPage.installkitSec();
});

Given('I should see the Post Installation Gas Tightness Test section', async function () {
    await installPage.validatePostInstallGasTightnessTestSectionIsVisible();
});

Given('I have accessed the Post Installation Gas Tightness Test section', async function () {
    await installPage.validatePostInstallGasTightnessTestSectionIsVisible();
});

When('I select the value Yes for the Did you have to Contact GT radio option', async function () {
    await installPage.setDidYouHaveToContactGTTrueRadioOption();
});

Then('I update the National Grid GI Job ref textfield with the value 1', async function () {
    await installPage.setNationalGridGIJobRefVal1Textfield();
});

Then('I select the value Yes for the Reported Incident to H&S AIRline radio option', async function () {
    await installPage.setReportedIncidentToHAndSAIRLineTrueRadioOption();
});

Then('I update the AIRLine Ref No textfield with the value 2', async function () {
    await installPage.setAIRLineRefTextfieldVal2();
});

Then('I select the value Yes for the Need to wait for the GT Attendance on Site radio option', async function () {
    await installPage.setNeedToWaitForTheGTAttendanceOnSiteTrueRadioOption();
});

Then('I select the value Yes for the GT Resolve Issue radio option', async function () {
    await installPage.setGTResolveIssueTrueRadioOption();
});

Then('I select the value Yes for the Did you Carry out any Additional Work to Pass the Gas Tightness Test radio option', async function () {
    await installPage.setDidYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption();
});

Then('I update the Additional Notes textfield with the value Gas Notes', async function () {
    await installPage.setExtraNotesValGasNotesTextfield();
});

Then('I select the value Yes for the Have you replaced the Gas meter radio option', async function () {
    await installPage.setHaveYouReplacedGasMeterTrueRadioOption();
});

Then('I select the value Yes for the Have you replaced the Regulator radio option', async function () {
    await installPage.setHaveYouReplacedRegulatorTrueRadioOption();
});

Then('I select the value Yes for the Post Installation-Gas Tightness Test Performed radio option', async function () {
    await installPage.setPostInstallationGasTightnessTestPerformedTrueRadioOption();
});

Then('I click on the Capture Photo of Witness Sticker and U-Gauge button', async function () {
    await installPage.clickOnCapturePhotoOfWitnessStickerAndUGaugeBtn();
});

Then('I select the value Yes, for the Was there a drop in pressure radio option', async function () {
    await installPage.setWasThereADropInPressureTrueRadioOption();
});

Then('I select the value 1.1 for the Enter DIP Gas Pressure drop-down menu', async function () {
    await installPage.setDIPGasPressureDropDownMenu();
});

Then('I select the value G4 0.5 4m bars for the Select Meter Type drop-down menu', async function () {
    await installPage.setSelectMeterTypValG4054DropDownMenu();
});

Then('I select the value Yes for the Gas Tightness Test – Passed radio option', async function () {
    await installPage.setGasTightnessTestPassedTrueRadioOption();
});

Then('I update the Test Witness Name textfield with the value Ellie Taylor', async function () {
    await installPage.setTestWitnessNameValEllieTaylorTextfield();
});

Then('I update the Standing Pressure textfield with the value 1.1', async function () {
    await installPage.setStandingPressureVal11Textfield();
});

Then('I click on the Capture Photo of Standing Pressure button', async function () {
    await installPage.clickOnCapturePhotoOfStandingPressureBtn();
});

Then('I update the Working Pressure textfield with the value 2.0', async function () {
    await installPage.setWorkingPressureVal20Textfield();
});

Then('I click on the Capture Photo of Working Pressure button', async function () {
    await installPage.clickOnCapturePhotoOfWorkingPressureBtn();
});

Then('I click on the Capture Photo of Final Meter Installation button', async function () {
    await installPage.clickOnCapturePhotoOfFinalMeterInstallButton();
});

Then('I click on the Post Installation Gas Tightness Test Next button', async function () {
    await installPage.clickOnPostInstallGasTightnessTestNextBtn();
});

Then('I should see the Gas Appliance Safety Checks section', async function () {
    await installPage.validateGasApplianceSafetyChecksSectionIsVisible();
});

Given('I have accessed the Gas Appliance Safety Checks section', async function () {
    await installPage.validateGasApplianceSafetyChecksSectionIsVisible();
});

When('I select the value Yes for the Is Earth Bonding Installed radio option', async function () {
    await installPage.setIsEarthBondingInstalledTrueRadioOption();
});

Then('I select the value Yes for Landlord Property? radio option', async function () {
    await installPage.setLandlordPropertyTrueRadioOption();
});

Then('I update the Address1 textfield with value', async function () {
    await installPage.setAddress1ValTextfieldDetails();
});

Then('I update the Address2 textfield with value', async function () {
    await installPage.setAddress2ValTextfieldDetails();
});

Then('I update the Address3 textfield with value', async function () {
    await installPage.setAddress3ValTextfieldDetails();
});

Then('I update the Address4 textfield with value', async function () {
    await installPage.setAddress4ValTextfieldDetails();
});

Then('I update the Address5 textfield with value', async function () {
    await installPage.setAddress5ValTextfieldDetails();
});

Then('I update the Address6 textfield with value', async function () {
    await installPage.setAddress6ValTextfieldDetails();
});

Then('I update the Address7 textfield with value', async function () {
    await installPage.setAddress7ValTextfieldDetails();
});

Then('I click on the Add Appliance button', async function () {
    await installPage.clickOnAddApplianceBtn();
});

Then('I select the value Flueless from the Flue Type drop-down menu', async function () {
    await installPage.setFlueTypeValFluelessDropDownMenu();
});

Then('I select the value Yes for the Ventilation Satisfactory? radio option', async function () {
    await installPage.setVentilationSatisfactoryTrueRadioOption();
});

Then('I select the value Yes for the Carried Out Purge & Relight Gas Appliance Test?', async function () {
    await installPage.setCarriedOutPurgeAndRelightGasApplianceTestTrueRadioOption();
});

Then('I select the value Gas Cooker from the Appliance Type drop-down menu', async function () {
    await installPage.setApplianceTypeValGasCookerDropDownMenu();
});

Then('I select the value Kitchen from the Appliance Location drop-down menu', async function () {
    await installPage.setApplianceLocationValKitchenDropDownMenu();
});

Then('I select the value Working Order from the Appliance Condition drop-down menu', async function () {
    await installPage.setApplianceConditionValWorkingOrderDropDownMenu();
});

Then('I select the value Yes for the Appliance Safe to Use radio option', async function () {
    await installPage.setApplianceSafeToUseTrueRadioOption();
});

Then('I click on the All Appliances Tested button', async function () {
    await installPage.clickOnAllAppliancesTestedBtn();
});

Then('I click on the Gas Appliance Safety Checks Submit button', async function () {
    await installPage.clickOnInstallPageSubmitBtn();
    await utility.wait(1000);
});
