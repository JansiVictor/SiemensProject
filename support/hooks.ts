const { BeforeAll, After, Before, AfterAll, Status } = require("cucumber");
//import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";
import { loginPageObject } from "../pages/loginPage";
import { Utility } from "./utility";
import * as moment from 'moment';
const login: loginPageObject = new loginPageObject();
const utility: Utility = new Utility();

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(600 * 1000);

BeforeAll({timeout: 1000 * 1000}, async () => {
    //await browser.get(config.baseUrl);
    browser.sleep(5000);
});

Before({ tags: '@LoginScenario' }, async function(scenario) {
    console.log('Name:', scenario.Name);
    await login.performLogin();   
    await this.attach(moment().format('dddd, MMMM Do YYYY, h:mm:ss a')); 
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 1000 * 1000}, async () => {
    //await browser.quit();
    browser.sleep(5000);
});
