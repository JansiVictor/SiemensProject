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
  const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();
  const riskassessGAS: GASPageObject = new GASPageObject();
  const exchnge21Complete: JobCompletionPageObject = new JobCompletionPageObject();
  const remove: RemovePageObject = new RemovePageObject();
  const inst: InstallPageObject = new InstallPageObject();
  
  Given('the RmveGas Login Page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
    });
    
    When('I pass RmveGas {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
    });
    
    
    Then('I click RmveGas Login button', async function () {
    await login.clickLogin();
    await utility.wait(utility.medium);
    });
    
    Then('I should see the RmveGas Appointment List', async function () {
    await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
    });
    
    Given('the RmveGas Appointment List window', async function () {
    await home.verifyAppointmentListPage();
    });
    
    
    When('I click on RmveGas select button', async function () {
    await home.clickCorrectSelectLink('GRemove5');
    await utility.wait(utility.medium_low);
    });
    
    Then('I should see RmveGas Work Order window',async  function () {
    await applist.verifyWorkOrderWindowText();
    });
    
    Given('the RmveGas {string} window', async function (string) {
    await applist.verifyWorkOrderWindowText();
    });
    
    
    When('i see RmveGas Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
    });
    
    Then('I click on RmveGas CALL FORWARD button',async  function () {
    await applist.clickOnCallForwardBtn();
    });
    
    
    Then('I should see RmveGas page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
    });
    
    
    Then('I should see the RmveGas CUSTOMER CONTACT NUMBER', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");
    
    });
    
    Then('I should see RmveGas Contact made field', async function () {
    await utility.wait(utility.medium_low);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
    });
    
    Given('the RmveGas {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
    });
    
    When('I fill the RmveGas fields with the value',async  function () {
    // await applist.clickOnCallForwardBtn();
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
    });
    
    When('I click on RmveGas DEPART button',async function () {
    await applist.clickDepartBtn();
    });
    
    
    Then('I should see RmveGas  for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
    });
    
    Then('I should see the RmveGas correct MPAN details', async function () {
    await applist.mpanDetails();
    });
    
    
    Then('I should see the RmveGas correct Customer Name details', async function () {
    await applist.customerNameDetails();
    });
    
    Then('I should see the RmveGas correct PostCode details', async function () {
    await applist.postCodeDetails();
    });
    
    
    Given('{string} RmveGas details',async function (string) {
    await applist.verifyDepartForAppointmentWindow();
    });
    
    When('I click on RmveGas Appointment OK button', async function () {
    await applist.mprnOKbtn();
    });
    
    When('I should see RmveGas ARRIVE button',async function () {
    await utility.wait(utility.medium);
    await applist.arriveBtn.getText().then(function (arriveBtnText) {
        console.log("find Arrive Btn Text  " + arriveBtnText);
    });
    });
    
    When('I should see RmveGas DOORSTEP PROTOCOL tab activated',async function () {
    await utility.wait(utility.medium_low);
    await applist.doorStepPROText.getText().then(function (doorStepPROText) {
        console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
    });
    
    When('I click on RmveGas ARRIVE button',async function () {
    await applist.clickArriveBtn();
    });
    
    Then('I should see RmveGas Arrival Time details',async function () {
    //comment these 2 lines when continue link is not displayed
    // await utility.wait(utility.medium_low);
    // await applist.continueLink.click();
    await utility.wait(utility.medium_low);
    await applist.arrivalTime.getText().then(function (arrivalTimeText) {
        console.log("find Arrival Time Text  " + arrivalTimeText);
    });
    });
    
    Then('I should see RmveGas  BE AWARE OF ANY DANGER! section',async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
    });
    
    Given('the RmveGas BE AWARE OF ANY DANGER! section',async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
    });
    
    When('I fill the RmveGas DoorStep Protocol fields with the value', async function () {
    await doorstep.fillTheDoorStepDetails();
    });
    
    When('I click on RmveGas ON SITE button',async function () {
    await doorstep.clickONSITEBtn();
    });
    
    Then('I should see RmveGas RISK ASSESSMENT tab activated',async function () {
    await riskassess.verifyRiskAssessmentPage();
    });
    
    Then('I should see RmveGas Initial Risk Assessment for GAS section', async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
    });
    
    Given('the RmveGas INITIAL RISK ASSESSMENT section',async function () {
    await riskassess.verifyInitialRiskAssessmentPage();
    });
    
    When('I fill the RmveGas initialRisk field with the values',async function () {
    await riskassess.inputInitialRiskAssessmentDetails();
    });
    
    Then('I should see the RmveGas see INFO window',async function () {
    await riskassessGAS.riskAssessmentGASDisplayed();
    });
    
    Given('the RmveGas INFO window with the text',async function () {
   // await riskassess.infoOKButton.isDisplayed();
    await riskassess.infoOKButton.click();
    
    //await riskassess.performanceRiskNextBtn.click();
    
    
    await utility.wait(utility.medium);
    if (riskassess.NeedtoWorkYES.isDisplayed()) {
        var element = riskassess.NeedtoWorkYES;
        browser.executeScript("arguments[0].click()", element);
        await utility.wait(utility.medium_low);
    }
    });

    Given('the RmveGas RISK ASSESSMENT - ELEC section', async function () {
      await riskassess.verifyriskElecText();
    });
    
    When('I fill the RmveGas RISK ASSESSMENT - ELEC fields with the values', async function () {
      await riskassess.fillRiskAssesmentElecFields();
    });

    When('I click on RmveGas CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {

      await riskassess.capturePhotoBtnDisplayed();
    });
    
    When('I click on RmveGas NEXT SECTION button', async function () {
      await riskassess.clickNextSectionBtn();
    });
    
    Then('I should see the RmveGas RISK ASSESSMENT - GAS section', async function () {
      await riskassess.verifyriskGasText();;
    });

    Given('the RmveGas RISK ASSESSMENT - GAS section', async function () {
      await riskassess.verifyriskGasText();
    });
    When('I fill the RmveGas field05 with the value05', async function () {
      await riskassess.fillthedtlsGas();
    });
    Then('I click on RmveGas CAPTURE PHOTOGRAPHIC EVIDENCE button', async function () {
      await riskassess.capturegasbtn();
    });
    Then('I fill the RmveGas field06 with the value06', async function () {
      await riskassess.fillthedtl06();
    });
    // Then('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION btn', async function () {
    //   await riskassess.capturefullmeterInst();
    // });
    Then('I should see RmveGas CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
      await riskassess.gasInstSec();
    });

    Given('the RmveGas CAPTURE INITIAL PHOTO OF GAS INSTALLATION section', async function () {
      await riskassess.gasInstSec();
    });
    When('I click on RmveGas CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button', async function () {
      await riskassess.gasfullmeterInst();
    });
    Then('I should see RmveGas INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
      await riskassess.verifyInitialPolarityCheck();
    });

    Given('the RmveGas INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
      await riskassess.verifyInitialPolarityCheck();
    });
    
    When('I fill the RmveGas INITIAL POLARITY CHECK field with the values', async function () {
    
      await riskassess.fillthePolarityCheckMartinDale();
    });
    
    Then('I click on RmveGas CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button', async function () {
      await riskassess.verifyCapturepreInstallation();
    });
    
    Then('I fill the RmveGas Socket Found field with the values', async function () {
      await riskassess.verifyanySocketFoundNO();
    
    });
    
    Then('I should see RmveGas INITIAL POLARITY CHECK AT METER AND CUT OUT section', async function () {
      await riskassess.verifyMeterAndCutOut();
    });

    Given('the RmveGas INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
      await riskassess.verifyMeterAndCutOut();
    });
    
    When('I fill the RmveGas METER AND CUT OUT fields with the values', async function () {
      await riskassess.fillthePolarityCheckMeterOut();
    });
    
    When('I click on RmveGas SUBMIT button', async function () {
      await riskassess.meterCutOutnextSection();
    });
    
    Then('I should see the RmveGas CURRENT IHD-PPMID DETAILS section in remove tab', async function () {
      await remove.currentihdppmiddetailtext();
    });

    Given('the RmveGas CURRENT IHD-PPMID DETAILS section', async function () {
      await remove.currentihdppmiddetailtext();
    });
    
    When('I fill the RmveGas CURRENT IHD-PPMID field010 with the value010', async function () {
      await remove.fillcurrentIhdPPMIDdtls();
    });
    
    When('I should see RmveGas CURRENT METER DETAILS - GAS section', async function () {
      await remove.currentmeterdetlGasSection();
    });
    
    Then('I should see the page RmveGas contect display of current meter details', async function () {
      await remove.currentmeterGasPageContent();
    });

    Given('the RmveGas CURRENT METER DETAILS - GAS section', async function () {
      await remove.currentmeterGasPageContent();
    });
    When('I fill the RmveGas CURRENT METER DETAILS field with the value', async function () {
      await remove.TST28fillcurrentmeterdtlGassec();
    });
    Then('I should see RmveGas CURRENT COMMS HUB DETAILS section', async function () {
      await remove.currentcommsHubdtl();
    });
    Then('I should see the RmveGas CURRENT COMMS HUB page contect display', async function () {
      await remove.currentcommsHubdtlPgCont();
    });

    Given('the RmveGas CURRENT COMMS HUB DETAILS section', async function () {
      await remove.currentcommsHubdtl();
    });
    When('I fill the RmveGas CURRENT COMMS HUB field13 with the value13', async function () {
      await remove.fillcurrenthubdtl(1);
    });
    Then('I click on RmveGas CAPTURE PHOTO OF EXISTING COMMS HUB INSTALLATION button', async function () {
      await remove.capturephotocommsHub();
    });
    Then('I should see RmveGas REMOVE IHD-PPMID section', async function () {
      await remove.removeihdPpmid();
    });

    Given('the RmveGas REMOVE IHD-PPMID section', async function () {
      await remove.removeihdPpmid();
    });
    When('I fill the RmveGas REMOVE IHD-PPMID field20 with the value20', async function () {
      await remove.fill20rmvihdppmidtls();
    });
    Then('I click on RmveGas IHD-PPMID OK button in Info window with the text Ensure IHD is Powered On', async function () {
      await remove.ihdpowerOnOK();
    });
    Then('I fill the RmveGas IHD field21 with the value21', async function () {
      await remove.fill21rmvihdppmidtls();
    });
    Then('I click on RmveGas NEXT SECTION button in remove IHD', async function () {
      await remove.rmvihdppmidnxtbtn();
    });
    Then('I should see RmveGas SEND MESSAGE IHD-PPMID section', async function () {
      await remove.sendmsgihdppmid();
    });

    Given('the RmveGas SEND MESSAGE IHD-PPMID section', async function () {
      await remove.sendmsgihdppmid();
    });
    When('I click on RmveGas Send Message IHD-PPMID button', async function () {
      await remove.clickonSendMessage();
    });
    Then('I should see RmveGas IHD-PPMID Awaiting Response button', async function () {
      await remove.awaitingResponse();
    });

    Given('the RmveGas IHD-PPMID Awaiting Response button', async function () {
      await remove.awaitingResponse();
    });
    When('I wait for the RmveGas button to disappear', async function () {
      await remove.waitforthebuttontoDisappear();
    });
    Then('I should see RmveGas PPMID Removal Successful button', async function () {
      await remove.ppmidRemovalbtn();
    });
    Then('I should see RmveGas PPMID Removal Request Sent Successfully text message', async function () {
      await remove.sentmesgSuccess();
    });
    Then('I should see RmveGas PPMID Asset Unjoined text message', async function () {
      await remove.assetUnjoinedText();
    });

    Given('the RmveGas PPMID Removal Successful button is displayed', async function () {
      await remove.PPMIDRemovalbtndisplayed();
    });
    When('I click on RmveGas PPMID Removal Successful button', async function () {
      await remove.clickonPPMIDRmvl();
    });
    Then('I should see RmveGas CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
      await remove.confirmAssetRmvl();
    });

    Given('the RmveGas CONFIRM IHD-PPMID ASSET REMOVAL section', async function () {
      await remove.confirmAssetRmvl();
    });
    When('I fill the RmveGas IHD-PPMID ASSET REMOVAL field22 with the value22', async function () {
      await remove.fill22AssetRemoval();
    });
    Then('I click on RmveGas OK button in IHD-PPMID ASSET REMOVAL Updated window with the text Asset successfully added to Returns list', async function () {
      await remove.clickonOKBtn();
      await remove.clickonokcaptureAssetFinalPhotoEvidence();
    });
    Then('I should see RmveGas REMOVE GAS METER section', async function () {
      await remove.RmvGasmeterSec();
    });

    Given('the RmveGas REMOVE GAS METER section', async function () {
      await remove.RmvGasmeterSec();
    });
    When('I fill the RmveGas REMOVE GAS METER field23 with the value23', async function () {
      await remove.GasmeterRemovalforRemoveGas();
    });
    Then('I click on RmveGas NEXT button in removing gas meter', async function () {
      await remove.clickonnxtBtnofgasmeterRemoval();
    });
    Then('I should see RmveGas SEND MESSAGE GMREM section', async function () {
      await remove.sendmsgGMREM();
    });

    Given('the RmveGas SEND MESSAGE GMREM section', async function () {
      await remove.sendmsgGMREM();
    });
    When('I click on RmveGas Send Message GMREM button', async function () {
      await remove.clickOnsendmsgGMREM();
    });
    Then('I should see RmveGas Awaiting Response button in GMREM', async function () {
      await remove.AwaitingResponseGMREM();
    });

    Given('the RmveGas Awaiting Response btn in Send GMREM', async function () {
      await remove.AwaitingResponseGMREM();
    });
    When('I wait for the RmveGas btn to disappear in GMREM', async function () {
      await remove.removalsuccessfulbtn();
    });
    Then('I should see RmveGas Removal Successful button', async function () {
      await remove.removalsuccessfulbtn();
    });
    Then('I should see RmveGas GMREM Request Sent Successfully txt message', async function () {
      await remove.ReqSentSuccess();
    });
    Then('I should see RmveGas OK to Remove Asset text message', async function () {
      await remove.OktoRemoveAsset();
    });

    Given('the RmveGas Removal Successful button is displayed', async function () {
      await remove.removalsuccessfulbtn();
    });
    When('I click on RmveGas Removal Successful button', async function () {
      await remove.clickonremovalsuccessfulbtn();
    });
    Then('I should see RmveGas CONFIRM GAS ASSET REMOVAL section', async function () {
      await remove.confirmGasAssetRemoval();
    });
    Given('the RmveGas CONFIRM GAS ASSET REMOVAL section', async function () {
      await remove.confirmGasAssetRemoval();
    });
    When('I fill the RmveGas CONFIRM GAS ASSET REMOVAL field24 with the value24', async function () {
      await remove.fill24GasAssetRemoval();
    });
    Then('I click on RmveGas OK btn in Updated window with the text Asset successfully added to Returns list', async function () {
      await remove.clickonokGasAssetRemoval();
      await remove.clickonokGasAssetRemovalCapture();
    });
    Then('I should see RmveGas REMOVE COMMS HUB window', async function () {
      await remove.RemoveCommsHubWindow();
    });

    Given('the RmveGas REMOVE COMMS HUB section', async function () {
      await remove.RemoveCommsHubWindow();
    });
    When('I fill the RmveGas REMOVE COMMS HUB field027 with the value27', async function () {
      await remove.fill27RmvCommsHub();
    });
    Then('I click on RmveGas NEXT SEC button from Remove Comms Hub', async function () {
      await remove.clickonNxtBtnRmvCommsHub();
	      await remove.XCHUBSubmit();
    });
    Then('I should see RmveGas SEND MSG XCHUB section', async function () {
      await inst.sendmsgXCHUB();
    });

    Given('the RmveGas SEND MESSAGE XCHUB section', async function () {
      await inst.sendmsgXCHUB();
    });
    When('I click on RmveGas Send Message XCHUB button', async function () {
      //await inst.clicksendmsgXCHUB();
      await remove.XCHUBSubmit();
	   // await remove.XCHUBRemovalsuccessfulBtn.click();
	    await utility.wait(utility.low);
    });
    // Then('I should see RmveGas XCHUB Awaiting Response butn', async function () {
    //   await inst.SeeAwaitingresp();
    // });

    // Given('the RmveGas Awaiting Response butn XCHUB', async function () {
    //   await inst.SeeAwaitingresp();
    // });
    When('I wait for the RmveGas butn to disappear XCHUB', async function () {
      await inst.waitforthebuttontoDisappear();
    });
    Then('I should see RmveGas Removal Successful butn XCHUB', async function () {
      await inst.Remosuccessful();
    });
    Then('I should see RmveGas Request Sent Successfully text msg XCHUB', async function () {
     // await inst.reqsentMsg();
      //await inst.clickonremsuccess();
      await utility.wait(utility.low);
      await inst.remvSuccessful.click();
    });
    Given('the RmveGas CONFIRM COMMS HUB REMOVAL section', async function () {
      await remove.ConfirmHubRmv();
    });
    When('I fill the RmveGas CONFIRM COMMS HUB REMOVAL field28 with the value28', async function () {
      await remove.fill28ConfirmremovalCommsHub();
    });
    Then('I click on RmveGas OK button CONFIRM COMMS HUB REMOVAL Updated window with the text Asset successfully added to Returns list in the final step', async function () {
      await remove.clickonokconfrimremovalpopupRemove();
    });

    Then('I click on RmveGas SUBMIT btn from confirm comms hub removal', async function () {
      await remove.clickonsubmitforRemovalGrmv();
    });
    When('I fill the RmveGas Ins comms hub fields and capture photo EVIDENCE', async function () {
      await inst.fillfieldsInstallcommshub(2);
    });
    Then('I should see RmveGas Submit button in remove section', async function () {
      await remove.clickonElecsubmitfor();
    });

    Given('the RmveGas Summary of Job and receive Customer Signature section',async function () {
      await exchnge21Complete.summaryDisplay();
      });
  
  
      When('I fill the RmveGas Summary of Job and receive Customer Signaturefields with values',async function () {
      await exchnge21Complete.fillAndPrintSummaryContent();
      });
  
  
      Then('I should see RmveGas Submit button to complete the job section', async function () {
      await exchnge21Complete.FinalSubmission();
  
      });



    



    