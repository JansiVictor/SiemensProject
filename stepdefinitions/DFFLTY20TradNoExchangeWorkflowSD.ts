import {Given, Then, When} from "cucumber";
import {config} from "../config/config";
import {browser} from "protractor";
import {Utility} from "../support/utility";
import {loginPageObject} from "../pages/loginPage";
import {AppointmentListPageObject} from "../pages/AppointmentListPage";
import {AppointmentDetailsPageObject} from "../pages/AppointmentDetailsFormPage";
import {DepartForApptDialogueBoxPageObject} from "../pages/DepartForApptDialogueBoxPage";
import {DoorStepPageObject} from "../pages/DoorStepPage";
import {RiskAssessmentPageObject} from "../pages/RiskAssessmentPage";
import {GASPageObject} from "../pages/GASPage";
import {ElectricPageObject} from "../pages/ElectricPage";
import {RemovePageObject} from "../pages/RemovePage";
import {InstallPageObject} from "../pages/InstallPage";
import {JobCompletionPageObject} from "../pages/JobCompletionPage";


const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const appointmentDetailsForm: AppointmentDetailsPageObject = new AppointmentDetailsPageObject();
const departForApptDialogueBox: DepartForApptDialogueBoxPageObject = new DepartForApptDialogueBoxPageObject();
const appointmentListForm: AppointmentListPageObject = new AppointmentListPageObject();
const doorStepPage: DoorStepPageObject = new DoorStepPageObject();
const removePage: RemovePageObject = new RemovePageObject();
const installPage: InstallPageObject = new InstallPageObject();
const riskAssmentPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const riskAssessmentForGasPage: GASPageObject = new GASPageObject();
const riskAssessmentForElecPage: ElectricPageObject = new ElectricPageObject();
const completionPage: JobCompletionPageObject = new JobCompletionPageObject();


Then('I should see the Appointment Details Form', async function () {
    appointmentDetailsForm.isH1HeaderPresentAppointmentDetailsPage();
});

When('I click on the Call Forward Button', async function () {
    await appointmentDetailsForm.clickOnCallForwardBtn();
    await utility.wait(1000);
});

Then('I should see the Customer Contact Number', async function () {
    await appointmentDetailsForm.isCustContactNoTextPresent();
    await utility.wait(1000);
});

Then('the Contact Made? Radio Option', async function () {
    await appointmentDetailsForm.isContactMadeElementsPresent();
    await utility.wait(1000);
});

Then('the Appointment Confirm? Radio Option', async function () {
    await appointmentDetailsForm.isAppointmentConfirmTextElementsPresent();
});

Then('the Additional Access Details Notes Textfield', async function () {
    await appointmentDetailsForm.isAdditionaAccessDetailElementsPresent();
});

When('I update the pre-check options for my selected appointment', async function () {
    await appointmentDetailsForm.updatePreCheckOptionsForSelectedAppointment();
    await utility.wait(3000);
});

Then('click on the Depart button', async function () {
    appointmentDetailsForm.clickOnDepartBtn();
    await utility.wait(3000);
});

Then('the Depart for Appointment Dialogue Box is displayed', async function () {
    await departForApptDialogueBox.isdepartForApptDialogueBoxDisplayed();
});

When('I click on the Depart Ok button', async function () {
    await departForApptDialogueBox.clickOnDepartOkBtn();
    await utility.wait(3000);
});

Then('I should see the Appointment List Form', async function () {
    appointmentListForm.isH1HeaderPresentAppointmentListPage();
    await utility.wait(5000);
});

When('I click on the Select link', async function () {
    await appointmentListForm.clickOnRelevantSelectLink();
    await utility.wait(1000);
});

Given('I have accessed the DoorStep page', async function () {
    doorStepPage.isDoorStepTextLabelDisplayed();
});

Then('the DoorStep page is displayed', async function () {
    doorStepPage.isDoorStepTextLabelDisplayed();
});

When('I click on the Arrive button', async function () {
    doorStepPage.clickOnArriveButton();
    await utility.wait(5000);
});

Then('update the pre-check options for the Door Step Protocol', async function () {
    doorStepPage.fillTheDoorStepDetails();
    await utility.wait(10000);
});

Then('click on the On-Site button', async function () {
    doorStepPage.clickONSITEBtn();
    await utility.wait(10000);
});

Then('I should see Initial Polarity Check - At Meter And Cut Out button', async function () {
});

Given('I have accessed the Initial Polarity Check - At Meter And Cut Out section', async function () {

});

When('I update Initial Polarity Check - At Meter And Cut Out controls with values', async function () {
    await riskAssmentPage.populateInitialPolarityCheckAtMeterAndCutOutSection();
});

Then('I click on the Submit button', async function () {
    await riskAssmentPage.clickOnRiskAssessmentPageSubmitButton();
});

Then('I should be directed to the Remove page', async function () {
    await removePage.currentihdppmiddetailtext();
});

Given('the Initial Polarity Check Martindale Test section', async function () {
    await riskAssmentPage.verifyInitialPolarityCheck();
});

When('I update Initial Polarity Check Martindale Test form controls with values', async function () {
    await riskAssmentPage.populatePolarityCheckMartinDaleWithCPAndRPF();
});

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
    await installPage.setMeterTailsChangedFalseRadioOption();
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
    await installPage.clickOnCapturePhotoOfMartindaleTestBtn();
});

Then('I click on the Capture Photo, of Final Meter Installation button', async function () {
    await installPage.clickOnCapturePhotoOfFinalMeterInstallBtn();
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

Given('I have accessed the login page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(3000);
});

When('I provide the {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

When('I click on the Login button', async function () {
    await login.clickLogin();
    await utility.wait(3000);
});

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
    await removePage.setConfirmIfGasMeterIsOnSupplyOrOffSupplyTrueRadioOption();
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

Then('I am prompted to submit details for an initial risk assessment', async function () {
    await riskAssessmentForElecPage.verifyInitialRiskAssessmentPage();
});

Given('I have accessed the initial risk assessment tab', async function () {
    await riskAssessmentForElecPage.verifyInitialRiskAssessmentPage();
});

When('I input details for the initial risk assessment', async function () {
    await riskAssmentPage.inputInitialRiskAssessmentDetails();
});

Then('input the details for a Electric risk assessment', async function () {
    await riskAssessmentForElecPage.fillRiskAssesmentElecFields();
});

Then('input the details for a Gas risk assessment', async function () {
    await riskAssessmentForGasPage.populateRiskAssessmentForGasWithoutPhotoEvidence();
});

Given('I have accessed the Gas risk assessment tab section', async function () {
});

When('I capture photo of initial electric installation', async function () {
    await riskAssessmentForElecPage.captureInitialElectricalPhoto();
});

Then('I capture photo of initial gas installation', async function () {
    await riskAssessmentForGasPage.captureInitialGasPhoto();

});

Then('I should see Initial Polarity Check - Martindale Test button', async function () {
    await riskAssmentPage.verifyInitialPolarityCheckMartindaleTestBtnIsPresent();
});

Given('I have accessed the Energy Efficiency Information section', async function () {
    await completionPage.energyeffInfo();
});
When('I populate the Energy Efficiency form fields and click Next', async function () {
    await completionPage.fillfield55duelenergyeff();
});

Then('I should see the Capture Customer Signature section', async function () {
    await completionPage.summaryDisplay();
});

/**********"Capture Customer Signature" */
Given('I have accessed the Capture Customer Signature section', async function () {
    await completionPage.summaryDisplay();
});
When('I write my signature in the Customer Signature form field', async function () {
    await completionPage.fillAndPrintSummaryContent();
});
Then('I populate the Capture Customer Signature form fields and click Job Complete', async function () {
    await completionPage.FinalSubmission();
});
Then('I should see the Job Completed screen', async function () {
    await completionPage.JobCompletedFLTYNoExchangeScreen();

});