import {Given, When} from "cucumber";
import {config} from "../config/config";
import {browser} from "protractor";
import {Utility} from "../support/utility";
import {loginPageObject} from "../pages/loginPage";

const utility: Utility = new Utility();
const login: loginPageObject = new loginPageObject();

Given('I have accessed the login page', async function () {
    await browser.get(config.baseUrl);
    await utility.wait(3000);
});

When('I provide the {string} and {string}', async function (username, password) {
    await login.setUsernamePassword(username, password);
    await utility.wait(500);
});

When('I click on the Login button', async function () {
    await login.clickLogin();
    await utility.wait(3000);
});