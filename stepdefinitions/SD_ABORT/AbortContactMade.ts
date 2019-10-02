import { browser, protractor, element, by } from "protractor";
import { loginPageObject } from "../../pages/loginPage";
import { HomePageObject } from "../../pages/HomePage";
import { AppointmentListPageObject } from "../../pages/AppointmentListPage";

import { config } from "../../config/config";
import { Utility } from "../../support/utility";
import { AbortPageObject } from "../../pages/AbortPage";


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


When('I fill the fields with the value', async function () {  
  await applist.clickOnContactMadeOtion();
  await abort.noAccessAbortContactMade();

});

Then('I should see the Abort Reason Code Pop Up', async function () {  
  await abortnoaccesssuspend.VerifyAbortReasonCodePopup();
});

When('I click the Not Convenient with Customer Reason and Abort the Job', async function () {
	await abortnoaccesssuspend.selectreasonOptionAndAbort('abdradio1', 'Not Convenient with Customer');
	await utility.wait(utility.medium);
	
});
