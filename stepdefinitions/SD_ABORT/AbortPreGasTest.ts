import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { HomePageObject } from "../pages/HomePage";
import { AppointmentListPageObject } from "../pages/AppointmentListPage";

import { config } from "../config/config";
import { Utility } from "../support/utility";
import { AbortPageObject } from "../pages/AbortPage";
import { JobCompletionPageObjectAbort } from "../pages/JobCompletionPageAbort";


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
const jobcompleteabort: JobCompletionPageObjectAbort = new JobCompletionPageObjectAbort();

Then('I fill Pre Installtion Tighness Check NO and click abort button', async function () {  
	
	 //await abortnoaccesssuspend.fillPreGasAbortTST35();

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

When('I click the Tampering Identified Reason and Abort the Job EXCH21', async function () {
	console.log('Entering abort pop up');	
	await abortnoaccesssuspend.selectreasonOptionAndAbortCGP('abdradio2', 'Tampering Identified','btnCall1');
	await utility.wait(utility.low);	
});

When('I click the Tampering Identified Reason and Abort the Job EX19', async function () {
	console.log('Entering abort pop up');
	await abortnoaccesssuspend.selectreasonOptionAndAbortCGP('abdradio2', 'Tampering Identified','btnCallabr2')
	await utility.wait(utility.low);
	await abortnoaccesssuspend.reScanAssetPopupclick();	
});

When('I fill the configuration for abort', async function () {	
	await abortnoaccesssuspend.fillConfigAllmeterAbort();
	
});
