  import { browser, protractor } from "protractor";
  import { loginPageObject } from "../pages/loginPage";
  import { FLTY19homePageObject } from "../pages/FLTY19homePage";
  import { FLTY19AppointmentListPageObject } from "../pages/FLTY19AppointmentListPage";
  import { DoorStepPageObject } from "../pages/DoorStepPage";
  import { RiskAssessmentPageObject } from "../pages/RiskAssessmentPage";
  import { config } from "../config/config";
  import { Utility } from "../support/utility";
  const { Given, When, Then } = require("cucumber");
  const chai = require("chai");
  const expect = chai.expect;

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const utility: Utility = new Utility();
  const login: loginPageObject = new loginPageObject();
  const home: FLTY19homePageObject = new FLTY19homePageObject();
  const applist: FLTY19AppointmentListPageObject = new FLTY19AppointmentListPageObject();
  const doorstep: DoorStepPageObject = new DoorStepPageObject();
  const riskassess: RiskAssessmentPageObject = new RiskAssessmentPageObject();

  Given('the Login Page', async function () {
  await browser.get(config.baseUrl);
  await utility.wait(5000);
  });

  When('I pass {string} and {string}', async function (username, password) {   
  await login.setUsernamePassword(username, password);
  await utility.wait(500);
  });

  Then('I click Login button', async function () {  
  await login.clickLogin();
  await utility.wait(10000);
  });

  Then('I should see the Appointment List', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
  });

  Given('the Appointment List window', async function () {
  await home.verifyAppointmentListPage();
  });

  When('I click on select button', async function () {
    //await applist.continueLinkforEx21.click();
  await home.clickOnTheSelectLink();
  await utility.wait(5000);
  });

  Then('I should see Work Order window', async function () {
  await applist.verifyWorkOrderWindowText();
  });

  Given('the {string} window', async function (string) {
  //WorkOrder Window
  await applist.verifyWorkOrderWindowText();
  });

  When('i see Call Forward or Arrive Button', async function () {
    await applist.verifyWorkOrderWindowText();
    });
    Then('I click on CALL FORWARD button', async function () {
    await applist.clickOnCallForwardBtn();
    });
  
    Then('I should see page contect display', async function () {
    await applist.validateTheCallFrwdPageTextDisplay();
    });
  
    Then('I should see the CUSTOMER CONTACT NUMBER', async function () {
    await utility.wait(5000);
    await expect(await applist.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");
  
    });
  
    Then('I should see Contact made field', async function () {
    await utility.wait(5000);
    await expect(await applist.contactMadeText.getText()).equal("Contact made?");
    await expect(applist.contactMadeYes.isPresent());
    });
  
    Given('the {string} page', async function (string) {
    await applist.verifyWorkOrderWindowText();
    });
  
    When('I fill the fields with the value', async function () {
    // await applist.clickOnCallForwardBtn();
    await applist.clickOnContactMadeOtion();
    await applist.appointmentConfirmationYes();
    await applist.additionalDetails();
    });
  
    When('I click on DEPART button', async function () {
    await applist.clickDepartBtn();
    });
  
    Then('I should see Depart for Appointment window', async function () {
    await applist.verifyDepartForAppointmentWindow();
    });
  
    Then('I should see the correct MPAN details', async function () {
    await applist.mpanDetails();
    });
  
    Then('I should see the correct Customer Name details', async function () {
    await applist.customerNameDetails();
    });
  
    Then('I should see the correct PostCode details', async function () {
    await applist.postCodeDetails();
    });
  
    Given('{string} details', async function (string) {
    await applist.verifyDepartForAppointmentWindow();
    });
  
    When('I click on OK button', async function () {
    await applist.mprnOKbtn();
    });
  
    Then('I should see ARRIVE button', async function () {
    await utility.wait(10000);
    await applist.arriveBtn.getText().then(function(arriveBtnText) {
    console.log("find Arrive Btn Text  " + arriveBtnText);
    });
    });
  
    Then('I should see DOORSTEP PROTOCOL tab activated', async function () {
    await utility.wait(5000);
    await applist.doorStepPROText.getText().then(function(doorStepPROText) {
    console.log("find DoorStep PROTOCOLText  " + doorStepPROText);
    });
    });
  
  
    When('I click on ARRIVE button', async function () {
    await applist.clickArriveBtn();
    });
  
    Then('I should see Arrival Time details', async function () {
    //comment these 2 lines when continue link is not displayed
    // await utility.wait(5000);
    // await applist.continueLink.click();
    await utility.wait(5000);
    await applist.arrivalTime.getText().then(function(arrivalTimeText) {
    console.log("find Arrival Time Text  " + arrivalTimeText);
    });
    });
  
    Then('I should see BE AWARE OF ANY DANGER! section', async function () {
    await doorstep.verifyBeAwareOfAnyDangerPage();
    });

  Given('the BE AWARE OF ANY DANGER! section', async function () {
  await doorstep.verifyBeAwareOfAnyDangerPage();
  });

  When('I fill the DoorStep Protocol fields with the value', async function () {
  await doorstep.fillTheDoorStepDetails();
  });

  When('I click on ON SITE button', async function () {
  await doorstep.clickONSITEBtn();
  });

  Then('I should see RISK ASSESSMENT tab activated', async function () {
  await riskassess.verifyRiskAssessmentPage();
  });

  Then('I should see INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
  });


  Given('the INITIAL RISK ASSESSMENT section', async function () {
  await riskassess.verifyInitialRiskAssessmentPage();
  });

  When('I fill the initialRisk field with the values',async function () {
  await riskassess.inputInitialRiskAssessmentDetails();
  });

  Then('I should see INFO window', async function () {
  await riskassess.infoTextPopUp();
  });


  Given('the INFO window with the text', async function () {
     await riskassess.infoOKButton.isDisplayed();
     await riskassess.infoOKButton.click();
   
    //await riskassess.performanceRiskNextBtn.click();
   

  await utility.wait(10000);
    if(riskassess.NeedtoWorkYES.isDisplayed()){
    var element = riskassess.NeedtoWorkYES;
    browser.executeScript("arguments[0].click()",element);
    await utility.wait(5000);
  }
  });


  Then('I should see RISK ASSESSMENT ELEC section', async function () {
  await riskassess.verifyriskElecText();
  });

  Given('the RISK ASSESSMENT - ELEC section', async function () {
  await riskassess.verifyriskElecText();
  });

  When('I fill the RISK ASSESSMENT - ELEC fields with the values', async function () {
  await riskassess.fillRiskAssesmentElecFields();
  });

  When('I click on CAPTURE PHOTO OF HAZARD IDENTIFIED button', async function () {
  await riskassess.capturePhotoBtnDisplayed();
  });

  When('I click on NEXT SECTION button', async function () {
  await riskassess.clickNextSectionBtn();
  });

  Then('I should see CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section',async function () {
    await riskassess.electInstallationSection();
   });

   Given('the CAPTURE INITIAL PHOTO OF ELEC INSTALLATION section', async function () {
   
    await riskassess.electInstallationSection();

  });

  When('I click on CAPTURE PHOTO OF CURRENT FULL METER INSTALLATION button',async function () {
    await riskassess.capturephotoMeterInstall.click();
  });

  Then('I should see INITIAL POLARITY CHECK - MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
  });

   Given('the INITIAL POLARITY CHECK MARTINDALE TEST section', async function () {
    await riskassess.verifyInitialPolarityCheck();
   });

   When('I fill the INITIAL POLARITY CHECK field with the values', async function () {
  
    await riskassess.fillthePolarityCheckMartinDale();
  });

  When('I click on CAPTURE PHOTO OF PRE INSTALLATION MARTINDALE TEST button',async function () {
    await riskassess.verifyCapturepreInstallation();
  });

  When('I fill the Socket Found field with the values', async function () {
    await riskassess.verifyanySocketFoundNO();

  });
 
  Given('the Suitable for Smart Installation section', async function () {
    await riskassess.verifysuitableforSmartMeterInstallation();
  });

  When('I click on Is Site Suitable for Smart Installation? button', async function () {
    await riskassess.suitableforSmartMeterInstallation();
  });

  When('I click on Equipment Reposition Required?', async function () {
    await riskassess.equipmentRepositionReq();
  });

  When('I enter Additional Notes for Smart installation Check', async function () {
    await riskassess.enterNotesForMeteInstallation();
  });


  When('I click on smart installation NEXT SECTION button', async function () {
    await riskassess.clickSmartInstallationNextBtn();
  });

  Then('I should see INITIAL POLARITY CHECK AT METER AND CUT OUT section',async function () {
    await riskassess.verifyMeterAndCutOut();
  });

  Given('the INITIAL POLARITY CHECK - AT METER AND CUT OUT section', async function () {
     await riskassess.verifyMeterAndCutOut();
  });

  When('I fill the METER AND CUT OUT fields with the values', async function () {
    await riskassess.fillthePolarityCheckMeterOut();
  });

  When('I click on SUBMIT button', async function () {
    await riskassess.meterCutOutnextSection();
  });

  Then('I should see CURRENT METER DETAILS section', async function () {
    await riskassess.verifyCurrentMeterDetails();
  });
  Then('I should see the REMOVE tab activated', async function () {
    await riskassess.removeTabdisplayed();
  });
  Given('the REMOVE METER section', async function () {
    await riskassess.removeTabdisplayed();
  });

  When('I fill the REMOVE METER fields with the values', async function () {
    await riskassess.fillRemoveMeterDetails();
  });


  Then('I should see REMOVE ASSET section',async function () {
    await riskassess.removeAssetTextDisplayed();
  });

  Given('the REMOVE ASSET section', async function () {
    await riskassess.removeAssetTextDisplayed();
  });


  When('I fill the REMOVE ASSET field with the values', async function () {
    await riskassess.fillremoveAssetDetails();
  });


  When('I click on OK button in updated Popup notification', async function () {
    await riskassess.OKButton();
  });


  Then('I should see INSTALL COMMS HUB section', async function () {
    await riskassess.CommHubDisplayed();
  });
  Given('the  Comms Hub details section', async function () {
    await riskassess.CommHubDisplayed();
  });


  When('I fill the Comms Hub fields with values', async function () {
    await riskassess.fillCommsHubDetails();
  });


  Then('I should see NEW METER section', async function () {
    await riskassess.newMeterDetailsDisplayed();
  });

  Given('the  New Meter details section', async function () {
    await riskassess.newMeterDetailsDisplayed();
  });


  When('I fill the New Meter details fields with values', function () {
    
  });


  Then('I should see ADDITIONAL ELECTRICITY CHECKS section', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('I fill the ADDITIONAL ELECTRICITY CHECKS details fields with values', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  