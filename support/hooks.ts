const { BeforeAll, After, AfterAll, Status } = require("cucumber");
//import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(600 * 1000);

BeforeAll({timeout: 1000 * 1000}, async () => {
    //await browser.get(config.baseUrl);
    browser.sleep(5000);
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
