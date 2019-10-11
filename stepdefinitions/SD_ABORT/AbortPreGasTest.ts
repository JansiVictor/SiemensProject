import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../../pages/loginPage";
import { HomePageObject } from "../../pages/HomePage";
import { AppointmentListPageObject } from "../../pages/AppointmentListPage";

import { config } from "../../config/config";
import { Utility } from "../../support/utility";
import { AbortPageObject } from "../../pages/AbortPage";
import { RemovePageObject } from "../../pages/RemovePage";



const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const home: HomePageObject = new HomePageObject();
const applist: AppointmentListPageObject = new AppointmentListPageObject();
const abort: AbortPageObject = new AbortPageObject();
const abortnoaccesssuspend: AbortPageObject = new AbortPageObject();
const remove: RemovePageObject = new RemovePageObject();

Then('I fill Pre Installtion Tighness Check NO and click abort button1', async function () {  
		  
	 await abortnoaccesssuspend.fillPreGasAbortTST35();
	
  });

  Then('I fill Pre Installtion Tighness Check NO and click abort button2', async function () {  
		
   await abortnoaccesssuspend.fillPreGasAbortTST136();
   
 });

Then('I should see the Abort Reason Code Pop Up PreGas', async function () {  
  await abortnoaccesssuspend.VerifyPreGasAbortReasonCodePopup();
  console.log('pop up');
});


Given('the AbortReasonCodespopup PreGas', async function () {
	await abortnoaccesssuspend.VerifyPreGasAbortReasonCodePopup();
	console.log('pop up');
	
});

When('I click the Reason and Click Abort Gas Button', async function () {
	console.log('Entering abort pop up');	
	await abortnoaccesssuspend.selectreasonOptionAndAbortPreGas('abdradio2', 'Tampering Identified','btnCall1');
	await utility.wait(utility.low);	
});

When('I click the Reason and Abort Appointment Button', async function () {
	console.log('Entering abort pop up');
	await abortnoaccesssuspend.selectreasonOptionAndAbortPreGas('abdradio2', 'Test Data','btnCallabr2')
	await utility.wait(utility.low);
	await abortnoaccesssuspend.reScanAssetPopupclick();	
});

When('I fill the configuration for abort', async function () {	
	await abortnoaccesssuspend.fillConfigAllmeterAbort();
	
});


When('I fill the field023 with the Value023 PreGas', async function () {	
	await abortnoaccesssuspend.Tst22fillElecmeterrem();
	
});

When('I should click Submit button for pre gas', async function () {	
	await utility.wait(utility.medium);
	await remove.clickonElecsubmitforRemoval();	
});

When('Abort Button for Double abort', async function () {	
	await utility.wait(utility.medium);
	await abortnoaccesssuspend.abortBtn.isDisplayed();
	console.log("Double Abort");
	
});
When('I click on the Abort Button', async function () {	
	await utility.wait(utility.medium);
	await abortnoaccesssuspend.abortBtn.click();
	console.log("Double Abort Clicked");
	
});


