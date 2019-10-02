import {Given, Then, When} from "cucumber";
import {config} from "../../config/config";
import {browser} from "protractor";
import {Utility} from "../../support/utility";
import {AppointmentListPageObject} from "../../pages/AppointmentListPage";
import {DoorStepPageObject} from "../../pages/DoorStepPage";
import { RiskAssessmentPageObject } from "../../pages/RiskAssessmentPage";
import {RemovePageObject} from "../../pages/RemovePage";
import {InstallPageObject} from "../../pages/InstallPage";
import {loginPageObject} from "../../pages/loginPage";
import {JobCompletionPageObject} from "../../pages/JobCompletionPage";
import { HomePageObject } from "../../pages/HomePage";


const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const appointmentListForm: AppointmentListPageObject = new AppointmentListPageObject();
const doorStepPage: DoorStepPageObject = new DoorStepPageObject();
const removePage: RemovePageObject = new RemovePageObject();
const installPage: InstallPageObject = new InstallPageObject();
const riskAssmentPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const completionPage: JobCompletionPageObject = new JobCompletionPageObject();
const home: HomePageObject = new HomePageObject();


Given('FltytwTadNoEx the Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
});

When('FltytwTadNoEx I pass {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('FltytwTadNoEx I click Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
});

Then('FltytwTadNoEx I should see the Appointment List', async function () {
    await home.seeAppList();
});

Given('FltytwTadNoEx the Appointment List window', async function () {
    await home.verifyAppointmentListPage();
});

When('FltytwTadNoEx I click on select button', async function () {
    await home.clickCorrectSelectLink('DFFLTY20NoExch');
    await utility.wait(utility.medium_low);
});

Then('FltytwTadNoEx I should see Work Order window', async function () {
    await appointmentListForm.verifyWorkOrderWindowText();
});

Given('FltytwTadNoEx the {string} window', async function (string) {
    await appointmentListForm.verifyWorkOrderWindowText();
});

When('FltytwTadNoEx i see Call Forward or Arrive Button', async function () {
    await appointmentListForm.verifyWorkOrderWindowText();
});
Then('FltytwTadNoEx I click on CALL FORWARD button', async function () {
    await appointmentListForm.clickOnCallForwardBtn();
});

Then('FltytwTadNoEx I should see page contect display', async function () {
    await appointmentListForm.validateTheCallFrwdPageTextDisplay();
});

Then('FltytwTadNoEx I should see the CUSTOMER CONTACT NUMBER', async function () {
    await appointmentListForm.customercontactnumberavailable();
});

Then('FltytwTadNoEx I should see Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await appointmentListForm.contactMadeText.getText()).equal("Contact made?");
    await expect(appointmentListForm.contactMadeYes.isPresent());
});

/***Appointment details */

Given('FltytwTadNoEx the {string} page', async function (string) {
    await appointmentListForm.verifyWorkOrderWindowText();
});

When('FltytwTadNoEx I fill the fields with the value', async function () {
    await appointmentListForm.clickOnContactMadeOtion();
    await appointmentListForm.appointmentConfirmationYes();
    await appointmentListForm.additionalDetails();
});

When('FltytwTadNoEx I click on DEPART button', async function () {
    await appointmentListForm.clickDepartBtn();
});

Then('FltytwTadNoEx I should see Depart for Appointment window', async function () {
    await appointmentListForm.verifyDepartForAppointmentWindow();
});

/***Appointment details */

Given('FltytwTadNoEx Appointment details', async function () {
    await appointmentListForm.verifyDepartForAppointmentWindow();
});

When('FltytwTadNoExD I click on OK button', async function () {
    await appointmentListForm.mprnOKbtn();
});

Then('FltytwTadNoEx I should see ARRIVE button', async function () {
    await utility.wait(utility.medium);
    await appointmentListForm.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
});

Then('FltytwTadNoEx I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(utility.medium_low);
    await appointmentListForm.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
});

When('FltytwTadNoEx I click on ARRIVE button', async function () {
    await appointmentListForm.clickArriveBtn();
});

Then('FltytwTadNoEx I should see Arrival Time details', async function () {
    await utility.wait(utility.medium_low);
    await appointmentListForm.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
});

Then('FltytwTadNoEx I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorStepPage.verifyBeAwareOfAnyDangerPage();
});

/***BE AWARE OF ANY DANGER */

Given('FltytwTadNoEx the BE AWARE OF ANY DANGER! section', async function () {
    await doorStepPage.verifyBeAwareOfAnyDangerPage();
});

When('FltytwTadNoEx I fill the DoorStep Protocol fields with the value', async function () {
    await doorStepPage.fillTheDoorStepDetails();
});

When('FltytwTadNoEx I click on ON SITE button', async function () {
    await doorStepPage.clickONSITEBtn();
});

Then('FltytwTadNoEx I should see RISK ASSESSMENT tab activated', async function () {
    await riskAssmentPage.verifyRiskAssessmentPage();
});

Then('FltytwTadNoEx I should see INITIAL RISK ASSESSMENT section', async function () {
    await riskAssmentPage.verifyInitialRiskAssessmentPage();
});

/***INITIAL RISK ASSESSMENT section */

Given('FltytwTadNoEx the INITIAL RISK ASSESSMENT section', async function () {
    await riskAssmentPage.verifyInitialRiskAssessmentPage();
});

When('FltytwTadNoEx I fill the initialRisk field with the values', async function () {
    await riskAssmentPage.inputInitialRiskAssessmentDetails();
});

Then('FltytwTadNoEx I should see RISK ASSESSMENT ELEC section', async function () {
    await riskAssmentPage.verifyriskElecText();
});

/***RISK ASSESSMENT - ELEC */
Given('FltytwTadNoEx the RISK ASSESSMENT - ELEC section', async function () {
    await riskAssmentPage.verifyriskElecText();
});
When('FltytwTadNoEx I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
    await riskAssmentPage.fillRiskAssesmentElecFields();
});
When('FltytwTadNoEx I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

    await riskAssmentPage.capturePhotoBtnDisplayed();
});
When('FltytwTadNoEx RISK ASSESSMENT ELEC NEXT SECTION button', async function () {
    await riskAssmentPage.clickNextSectionBtn();
});
Then('FltytwTadNoEx I should see the RISK ASSESSMENT - GAS section', async function () {
    await riskAssmentPage.verifyriskGasText();;
});

/***RISK ASSESSMENT - GAS */

Given('FltytwTadNoEx the RISK ASSESSMENT - GAS section', async function () {
    await riskAssmentPage.verifyriskGasText();
});
When('FltytwTadNoEx I fill the field05 with the value05', async function () {
    await riskAssmentPage.fillthedtlsGas();
});
Then('FltytwTadNoEx I click on CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
    await riskAssmentPage.capturegasbtn();
});
Then('FltytwTadNoEx I fill the field06 with the value06', async function () {
    await riskAssmentPage.fillthedtl06();
});
Then('FltytwTadNoExE I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskAssmentPage.ElecInstSec();
});

/***CAPTURE INITIAL PHOTO OF ELEC INSTALLATION */

Given('FltytwTadNoExE the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION sec', async function () {
    await riskAssmentPage.ElecInstSec();
});
When('FltytwTadNoExE I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskAssmentPage.fillelecfullmeterInst();
});
Then('FltytwTadNoExE the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskAssmentPage.gasInstSec();
});


/***CAPTURE INITIAL PHOTO OF GAS INSTALLATION */

Given('FltytwTadNoEx the CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
    await riskAssmentPage.gasInstSec();
});
When('FltytwTadNoEx I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
    await riskAssmentPage.gasfullmeterInst();
});
Then('FltytwTadNoEx I should see INITIAL POLARITY CHECK-MARTINDALE TEST section', async function () {
    await riskAssmentPage.verifyInitialPolarityCheck();
});

/*** INITIAL POLARITY CHECK MARTINDALE TEST*/

Given('FltytwTadNoEx the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskAssmentPage.verifyInitialPolarityCheck();
});

When('FltytwTadNoEx I fill the INITIAL POLARITY CHECK field with the values', async function () {

    await riskAssmentPage.fillthePolarityCheckMartinDale();
});

Then('FltytwTadNoEx I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
    await riskAssmentPage.verifyCapturepreInstallation();
});

Then('FltytwTadNoEx I fill the Socket Found field with the values', async function () {
    await riskAssmentPage.verifyanySocketFoundNO();
});

Then('FltytwTadNoEx I should see INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskAssmentPage.verifyMeterAndCutOut();
});

/***INITIAL POLARITY CHECK */

Given('FltytwTadNoEx the INITIAL POLARITY AT METER AND CUT OUT section', async function () {
    await riskAssmentPage.verifyMeterAndCutOut();
});

When('FltytwTadNoEx I fill the METER AND CUT OUT fields with the values', async function () {
    await riskAssmentPage.fillthePolarityCheckMeterOut();
});

When('FltytwTadNoEx I click on SUBMIT button', async function () {
    await riskAssmentPage.meterCutOutnextSection();
});

Then('FltytwTadNoEx I should see the CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
    await removePage.currentihdppmiddetailtext();
});


/***********Remove Page *************************** */
/***********CURRENT IHD-PPMID DETAILS section *********/

Given('FltytwTadNoEx the CURRENT IHD-PPMID DETAILS section', async function () {
    await removePage.currentihdppmiddetailtext();
});

When('FltytwTadNoEx I fill the field010 with the value010', async function () {
    await removePage.TST13fillcurrentIhdPPMIDdtls();
});

When('FltytwTadNoEx I should see CURRENT METER DETAILS - GAS section', async function () {
    await removePage.currentmeterdetlGasSection();
});

Then('FltytwTadNoEx current meter details page contect display', async function () {
    await removePage.currentmeterGasPageContent();
});

/*** CURRENT METER DETAILS - GAS*/

Given('FltytwTadNoEx the CURRENT METER DETAILS - GAS section', async function () {
    await removePage.currentmeterdetlGasSection();
});
When('FltytwTadNoEx I fill the field with the value', async function () {
    await removePage.Tst13fillcurrentmeterdtlGassec();
});
Then('FltytwTadNoEx I should see CURRENT Electric Meter', async function () {
    await removePage.CurrentMeterElec();
});

/*** CURRENT METER DETAILS - ELEC*/

Given('FltytwTadNoEx the CURRENT Electric Meter', async function () {
    await removePage.CurrentMeterElec();
});
When('FltytwTadNoEx I fill the field011 with the value Value011', async function () {
    await removePage.fillcurrentElecduelmeterNoex();
});
Then('FltytwTadNoEx I should see DETERMINE FAULT ACTIVITY section', async function () {
    await removePage.determintfaultActivity();
});

/***DETERMINE FAULT ACTIVITY */

Given('FltytwTadNoEx the DETERMINE FAULT ACTIVITY section', async function () {
    await removePage.determintfaultActivity();
});
When('FltytwTadNoEx I fill the field14 with the value014', async function () {
    await removePage.FillFaultActivityNoExcahnge();
});

Then('FltytwTadNoEx I should see PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await removePage.preinstgasTighttest();
});

/*** PRE INSTALLATION GAS TIGHTNESS TEST*/

Given('FltytwTadNoEx the PRE INSTALLATION GAS TIGHTNESS TEST section', async function () {
    await removePage.preinstgasTighttest();
});
When('FltytwTadNoEx I fill the field17 with the value17', async function () {
    await removePage.fill17preInstdtls();
});
Then('FltytwTadNoEx I click on CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SHOWING PRESSURE IN MB button', async function () {
    await removePage.capturepressureMB();
});
Then('FltytwTadNoEx I fill the field18 with the value18', async function () {
    await removePage.fill18preInstdtls();
});
Then('FltytwTadNoEx I see Gas Tightness Test Completed field as FAIL', async function () {
    await removePage.gastightnessfieldfailed();
});
Then('FltytwTadNoEx I fill the field19 with the value19', async function () {
    await removePage.fill19preInstdtls();
});

Then('I click on the Submit button in the Determine Faulty Activity Section', async function () {
    await removePage.clickOnPreInstallationGasTightnessTestSubmitBtn();
});
Then('I should see the Perform Additional Electricity Tests & Checks section', async function () {
    await installPage.isH1HeaderPresentInstallPage();
});

/**********"ADDITIONAL ELECTRICITY TESTS & CHECKS" */

Given('FltytwTadNoEx the ADDITIONAL ELECTRICITY TESTS & CHECKS section', async function () {
    await installPage.AdditionalElecTestandChecks();
});
When('FltytwTadNoEx I fill the field34 with the Value34', async function () {
    await installPage.fill34AdditionalElecTestandChecks();
});
Then('FltytwTadNoEx I click on CAPTURE PHOTO OF TERMINAL SCREWS button', async function () {
    await installPage.AdditionalTerminalscrewCapturePhoto();
});
Then('FltytwTadNoEx I fill the field35 with the Value35', async function () {
    await installPage.fill35AdditionalElecTestandChecks();
});
Then('FltytwTadNoEx I clk additional test on NEXT SECTION button', async function () {
    await installPage.additionaltestNext();
});
Then('FltytwTadNoEx I should see POST INSTALLATION CHECKS section', async function () {
    await installPage.PostInstallationChks();
});

/**********"POST INSTALLATION CHECKS" */

Given('FltytwTadNoEx the POST INSTALLATION CHECKS section', async function () {
    await installPage.PostInstallationChks();
});
When('FltytwTadNoEx I fill the FldName37 with the Value37', async function () {
    await installPage.fill37PostInstallationChks();
});
Then('FltytwTadNoEx post installation page content display', async function () {
    await installPage.PostInstallationChksCont();
});

/**********"POST INSTALLATION CHECKS Continuation" */

Given('FltytwTadNoEx the post installation page contect display', async function () {
    await installPage.PostInstallationChksCont();
});
When('FltytwTadNoEx I fill the FldName38 with the Value38', async function () {
    await installPage.fill38PostInstallationChks();
});
Then('FltytwTadNoEx I click on CAPTURE PHOTO OF MARTINDALE TEST SHOWING WITNESS STICKER button', async function () {
    await installPage.captureteststicker();
});
Then('FltytwTadNoEx I click on CAPTURE PHOTO OF FINAL METER INSTALLATION button', async function () {
    await installPage.captureFinalMeterInst();
});
Then('FltytwTadNoEx I click on CAPTURE PHOTO OF CLOSE UP OF METER WITNESS STICKER button', async function () {
    await installPage.captureteststickecloseup();
});
Then('FltytwTadNoEx I should see COMMISSIONING section', async function () {
    await installPage.Commisioning();
});

/**********"Commisioning" */

Given('FltytwTadNoEx the COMMISSIONING section', async function () {
    await installPage.Commisioning();
});
When('FltytwTadNoEx I fill the FldName39 with the Value39', async function () {
    await installPage.fill39Commisioning();
});
Then('FltytwTadNoEx I click on ADD ANOTHER ASSET button', async function () {
    await installPage.DueladdanotherSet();
});
Then('FltytwTadNoEx I fill the FldName40 with the Value40', async function () {
    await installPage.Tst13fill40Commisioning();
});
Then('FltytwTadNoEx I clk commisioning on NEXT button', async function () {
    await installPage.CommisioningClickNext();
});
Then('FltytwTadNoEx I should see INSTALL KIT section', async function () {
    await installPage.installkitSec();
  });
  
  /**********"Install Kit " */
  Given('FltytwTadNoEx the Gas Install Kit gas section', async function () {
    await installPage.installkitSec();
  });
  When('FltytwTadNoEx I fill the Gas Install Kit gas section fields with values', async function () {
    await installPage.fillthedetailsforinstallkit();
  });
  Then('FltytwTadNoEx I should see Perform Post Installation GAS Checks sec', async function () {
    await installPage.performpostinst();
  });
  
  /**********"Post Installation GAS" */
  Given('FltytwTadNoEx the Post Installation GAS sec', async function () {
    await installPage.performpostinst();
  });
  When('FltytwTadNoEx I fill the Post Installation GAS sec fields with values', async function () {
    await installPage.FillPostGAsInstallDetailsFLTY20NoEx();
  });
  Then('FltytwTadNoExG I should see GAS APPLIANCE SAFETY CHECKS section', async function () {
    await installPage.gasApplicancesafety();
  });
  
  /**********"Gas Appliance Safety Checks" */
  Given('FltytwTadNoEx the Gas Appliance Safety Checks sec', async function () {
    await installPage.gasApplicancesafety();
  });
  When('FltytwTadNoEx I fill the Gas Appliance Safety Checks section fields with values and Sub', async function () {
    await installPage.fillthefieldsforgasApplicancesafety();
  });
  When('FltytwTadNoEx I click SUB button', async function () {
      //await inst.FltytwTadNoExInstallPPMIDbypass();
      await installPage.Tst12submittoJobcompletion();
  });

  Then('FltytwTadNoEx I should see Device Binding section', async function () {
    await completionPage.fillfield53dueldevicebinding();
  });
  Then('FltytwTadNoEx I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await completionPage.energyeffInfo();
  });
  
    /**********"Energy Efficiency Information" */
  
    Given('FltytwTadNoEx the ENERGY EFFICIENCY INFORMATION section', async function () {
      await completionPage.energyeffInfo();
    });
    When('FltytwTadNoEx I fill the fields54 and click next', async function () {
      await completionPage.fillfield55duelenergyeff();
    });
    Then('FltytwTadNoEx I should see SMART EDUCATION section', async function () {
      await completionPage.smartEducation();
    });
  
     /**********"SMART EDUCATION" */
    Given('FltytwTadNoEx the SMART EDUCATION section', async function () {
      await completionPage.smartEducation();
    });
    When('FltytwTadNoEx I fill the fields55 and click next', async function () {
      await completionPage.Tst13fillfield55duelsmartedu();
    });
    Then('FltytwTadNoEx I should see SUMMARY section', async function () {
      await completionPage.TST12summary();
    });
  
   /**********"SUMMARY" */
   Given('the FltytwTadNoEx Summary of Job and receive Customer Signature section', async function () {
	await completionPage.summaryDisplay();
});


When('I fill the FltytwTadNoEx Summary of Job and receive Customer Signaturefields with values', async function () {
	await completionPage.fillAndPrintSummaryContent();
});


Then('I should see FltytwTadNoEx Submit button to complete the job section', async function () {
    await completionPage.FinalSubmission();
    await home.seeAppList();

});


