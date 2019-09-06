import { browser, protractor, element, by } from "protractor";
import {config} from "../config/config";
import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import { loginPageObject } from "../pages/loginPage";

const login: loginPageObject = new loginPageObject();
const utility: Utility = new Utility();

Given('I have accessed the home page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(5000);
});

When('I provide the {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

Then('I click on the Login button', async function () {
    await login.clickLogin();
    await utility.wait(10000);
});