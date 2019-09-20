import {
    browser,
    protractor
    } from "protractor";
    import {
    loginPageObject
    } from "../pages/loginPage";
    import {
        HomePageObject
    } from "../pages/HomePage";
    import {
      AppointmentListPageObject
    } from "../pages/AppointmentListPage";
    import {
    DoorStepPageObject
    } from "../pages/DoorStepPage";
    import {
        ElectricPageObject
    } from "../pages/ElectricPage";
    import {
        GASPageObject
    } from "../pages/GASPage";
    import {
        JobCompletionPageObject
    } from "../pages/JobCompletionPage";
    import { RemovePageObject 
    } from "../pages/RemovePage";
    import {
    config
    } from "../config/config";
    import { RiskAssessmentPageObject 
    } from "../pages/RiskAssessmentPage";
    import { InstallPageObject 
    } from "../pages/InstallPage";
    import {
    Utility
    } from "../support/utility";
    const {
    Given,
    When,
    Then
    } = require("cucumber");
    const chai = require("chai");
    const expect = chai.expect;
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const utility: Utility = new Utility();
    const login: loginPageObject = new loginPageObject();
    const home: HomePageObject = new HomePageObject();
    const applist: AppointmentListPageObject = new AppointmentListPageObject();
    const doorstep: DoorStepPageObject = new DoorStepPageObject();
    const riskassess: ElectricPageObject = new ElectricPageObject();
    const riskassessPage: RiskAssessmentPageObject = new RiskAssessmentPageObject();
    const remove: RemovePageObject = new RemovePageObject();
    const job: JobCompletionPageObject = new JobCompletionPageObject();
    
    Given('the FLTYTTradNoExchange Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
    });
    
    When('I pass FLTYTTradNoExchange {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
    });
    
    
    Then('I click FLTYTTradNoExchange Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
    });
    
    Then('I should see the FLTYTTradNoExchange Appointment List', async function () {
    await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
    });
    
    Given('the FLTYTTradNoExchange Appointment List window', async function () {
    await home.verifyAppointmentListPage();
    });
    
    
    When('I click on FLTYTTradNoExchange select button', async function () {
      await home.clickCorrectSelectLink('SF _E_FLTY19TradNoExchange');
    //await home.clickFLTY19TradNoExSelectLink();
    //await home.clickOnTheContinueLink();
    await utility.wait(utility.medium_low);
    });
    
    Then('I should see FLTYTTradNoExchange Work Order window',async  function () {
    await applist.verifyWorkOrderWindowText();
    });
    
    Given('the FLTYTTradNoExchange {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
    });
    
    
    When('i see FLTYTTradNoExchange Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
    });
    
    Then('I click on FLTYTTradNoExchange CALL FORWARD button',async  function () {
    await applist.clickOnCallForwardBtn();
    });
    
    
    Then('I should see FLTYTTradNoExchange page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
    });
    
    
    // Then('I should see the FLTYTTradNoExchange CUSTOMER CONTACT NUMBER', async function () {
    // await utility.wait(utility.medium_low);
    // await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");
    
    // });
    
    Then('I should see FLTYTTradNoExchange Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
    });
    
    Given('the FLTYTTradNoExchange {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
    });
    
    When('I fill the FLTYTTradNoExchange fields with the value',async  function () {
    // await applist.clickOnCallForwardBtn();
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
    });
    
    When('I click on FLTYTTradNoExchange DEPART button',async function () {
    await applist.clickDepartBtn();
    });
    
    Then('I should see FLTYTTradNoExchange  for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
    });
    
    Then('I should see the FLTYTTradNoExchange correct MPAN details', async function () {
    await applist.mpanDetails();
    });
    
    
    Then('I should see the FLTYTTradNoExchange correct Customer Name details', async function () {
    await applist.customerNameDetails();
    });
    
    Then('I should see the FLTYTTradNoExchange correct PostCode details', async function () {
    await applist.postCodeDetails();
    });
    
    
    Given('{string} FLTYTTradNoExchange details',async function (string) {
    await applist.verifyDepartForAppointmentWindow();
    });
    
    When('I click on FLTYTTradNoExchange Appointment OK button', async function () {
    await applist.mprnOKbtn();
    });
    
    When('I should see FLTYTTradNoExchange ARRIVE button',async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
    });
    
    When('I should see FLTYTTradNoExchange DOORSTEP PROTOCOL tab activated',async function () {
    await utility.wait(utility.medium_low);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
    });
    
    When('I click on FLTYTTradNoExchange ARRIVE button',async function () {
    await applist.clickArriveBtn();
    });
    
    Then('I should see FLTYTTradNoExchange Arrival Time details',async function () {
    //comment these 2 lines when continue link is not displayed
    // await utility.wait(utility.medium_low);
    // await applist.continueLink.click();
    await utility.wait(utility.medium_low);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
    });
    
    Then('I should see FLTYTTradNoExchange  BE AWARE OF ANY DANGER! section',async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
    });
    
    Given('the FLTYTTradNoExchange BE AWARE OF ANY DANGER! section',async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
    });
    
    When('I fill the FLTYTTradNoExchange DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
    });
    
    When('I click on FLTYTTradNoExchange ON SITE button',async function () {
    await doorstep.clickONSITEBtn();
    });
    
    Then('I should see FLTYTTradNoExchange RISK ASSESSMENT tab activated',async function () {
    await riskassess.verifyRiskAssessmentPage();
    });
    
    Then('I should see FLTYTTradNoExchange Initial Risk Assessment for GAS section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
    });
    
    Given('the FLTYTTradNoExchange INITIAL RISK ASSESSMENT section',async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
    });
    
    When('I fill the FLTYTTradNoExchange initialRisk field with the values',async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
    });
    
    // Then('I should see the FLTYTTradNoExchange see INFO window', function () {
        
    //   });
    
    Given('the FLTYTTradNoExchange INFO window with the text',async function () {
    await riskassess.infoOKButton.isDisplayed();
    await riskassess.infoOKButton.click();
    
    //await riskassess.performanceRiskNextBtn.click();
    
    
    await utility.wait(utility.medium);
    if (riskassess.NeedtoWorkYES.isDisplayed()) {
        var element = riskassess.NeedtoWorkYES;
        browser.executeScript("arguments[0].click()", element);
        await utility.wait(utility.medium_low);
    }
    });
    
    Then('I should see FLTYTTradNoExchange RISK ASSESSMENT ELEC section',async function () {
    await riskassess.verifyriskElecText();
    });
    
    Given('the FLTYTTradNoExchange RISK ASSESSMENT - ELEC section',async function () {
    await riskassess.verifyriskElecText();
    });
    
    When('I fill the FLTYTTradNoExchange RISK ASSESSMENT - ELEC fields with the values',async function () {
    await riskassess.fillRiskAssesmentElecFields();
    });
    
    When('I click on FLTYTTradNoExchange CAPTURE PHOTO OF HAZARD IDENTIFIED button',async function () {
    await riskassess.capturePhotoBtnDisplayed();
    });
    
    When('I click on FLTYTTradNoExchange NEXT SECTION button', async function () {
    await riskassess.clickNextSectionBtn();
    });
    
    
    Then('I should see FLTYTTradNoExchange CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassess.electInstallationSection();
    });
    
    Given('the FLTYTTradNoExchange Click CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
    await riskassessPage.capturephotoMeterInstall.click();
    });
    
    
    Then('I should see FLTYTTradNoExchange INITIAL POLARITY CHECK - MARTINDALE TEST section',async function () {
    await riskassess.verifyInitialPolarityCheck();
    });
    
    Given('the FLTYTTradNoExchange INITIAL POLARITY CHECK MARTINDALE TEST section',async function () {
    await riskassess.verifyInitialPolarityCheck();
    });
    
    When('I fill the FLTYTTradNoExchange INITIAL POLARITY CHECK field with the values', async function () {
    await riskassess.fillthePolarityCheckMartinDale();
    });
    
    When('I click on FLTYTTradNoExchange CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button',async function () {
    await riskassess.verifyCapturepreInstallation();
    });
    
    When('I fill the FLTYTTradNoExchange Socket Found field with the values',async function () {
    await riskassess.verifyanySocketFoundNO();
    
    });
    
    Then('I should see FLTYTTradNoExchange INITIAL POLARITY CHECK AT METER AND CUT OUT section',async function () {
    await riskassess.verifyMeterAndCutOut();
    });
    
    Given('the FLTYTTradNoExchange INITIAL POLARITY CHECK - AT METER AND CUT OUT section',async function () {
    await riskassess.verifyMeterAndCutOut();
    });
    
    When('I fill the FLTYTTradNoExchange METER AND CUT OUT fields with the values',async function () {
    await riskassess.fillthePolarityCheckMeterOut();
    });
    
    When('I click on FLTYTTradNoExchange SUBMIT button',async function () {
    await riskassess.meterCutOutRemoveSubmitButton();
    });
    
    // When('I should see FLTYTTradNoExchange fltynineteen REMOVE IHDPPMID section',async function () {
    // await remove.removeihdPpmid();
    // });
    
    Given('the FLTYTTradNoExchange CURRENT IHD-PPMID DETAILS section',async function () {
    await remove.currentihdppmiddetailtext();
    });
    
    When('I fill the FLTYTTradNoExchange CURRENT IHD-PPMID fields with the values',async function () {
    await remove.fillcurrentIhdPPMIDdtlsnoExchangeTrade();
    });
    
    Then('I should see the FLTYTTradNoExchange CURRENT METER DETAILS - Elec section', async function () {
        await remove.CurrentMeterElec();
      });
    
    Given('the FLTYTTradNoExchange CURRENT METER DETAILS - Elec section', async function () {
        await remove.CurrentMeterElec();
      });
      When('I fill the FLTYTTradNoExchange CURRENT Elec METER DETAILS field with the value', async function () {
        await remove.fillcurrentElecmeter();
      });
      Then('I should see FLTYTTradNoExchange DETERMINE FAULT ACTIVITY section', async function () {
        await remove.determintfaultActivity();
      });
      
      /***DETERMINE FAULT ACTIVITY */
      
      Given('the FLTYTTradNoExchange DETERMINE FAULT ACTIVITY section', async function () {
        await remove.determintfaultActivity();
      });
      When('I fill the FLTYTTradNoExchange DETERMINE FAULT ACTIVITY fields with the values', async function () {
        await remove.FillFaultActivityTradNoExcahnge();
      });
    
      Then('FLTYTTradNoExchange I should see  Remove Submit section', async function () {
        await remove.ConfirmCommsHubNxtBtn.click();
    });

    /**********"Energy Efficiency Information" */

  Given('FLTYTTradNoExchange the ENERGY EFFICIENCY INFORMATION section', async function () {
    await job.energyeffInfo();
  });
  When('FLTYTTradNoExchange I fill the ENERGY EFFICIENCY fieldss and click next', async function () {
    await job.fillfield55duelenergyeff();
  });
//   Then('FLTYTwntyNoExchange I should see SMART EDUCATION section', async function () {
//     await job.smartEducation();
//   });

  
   /**********"Capture Customer Signature" */
 Given('FLTYTTradNoExchange the CAPTURE CUSTOMER SIGNATURE section', async function () {
   
    await job.summaryDisplay();
    
  });
  When('FLTYTTradNoExchange I write signature in Customer Signature', async function () {
    await job.fillAndPrintSummaryContent();
  });
  Then('FLTYTTradNoExchange I fill the CAPTURE CUSTOMER SIGNATURE fields and Job Complete', async function () {
    await job.FinalSubmission();
  });
  Then('FLTYTTradNoExchange see Job Completed screen', async function () {
    await job.JobCompletedFLTYTradS2NoExchangeScreen();
   
  });