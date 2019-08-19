import { browser, protractor } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { FLTY19homePageObject } from "../pages/FLTY19homePage";
import { FLTY19AppointmentListPageObject } from "../pages/FLTY19AppointmentListPage";
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
  await applist.validateThePageTextDisplay(this.customerContactNumberText, 'CUSTOMER CONTACT NUMBER:');
});

Then('I should see Contact made field', async function () {
  await applist.clickOnContactMadeOtion();
});

Given('the {string} page', async function (string) {
  await applist.verifyWorkOrderWindowText();
});

When('I fill the fields with the value', async function () {
  this.clickOnCallForwardBtn();
  this.clickOnContactMadeOtion();
  this.appointmentConfirmationYes();
  this.additionalDetails();
});

When('I click on DEPART button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see Depart for Appointment window', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see the correct MPAN details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see the correct Customer Name details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see the correct PostCode details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

