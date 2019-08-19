import { browser, protractor } from "protractor";
import { loginPageObject } from "../pages/loginPage";
import { homePageObject } from "../pages/homePage";
import { config } from "../config/config";
import { Utility } from "../support/utility";
const { Given, When, Then } = require("cucumber");

const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();
const home: homePageObject = new homePageObject();

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
  await utility.wait(5000);
});

Then('I should see the Appointment List', async function () {
  await expect(await home.appointmentListLabel.getText()).equal("Appointments List");
});
