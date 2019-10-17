/**
 * @description :Generic Functionalities for IE Implementations
 * @author :Jansi Victor
 */

import {
    element, browser,
    by,
    ElementFinder,
    ElementArrayFinder,
    ExpectedConditions
} from "protractor";
const {
    Given,
    When,
    Then
} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import {
    Utility
} from "../support/utility";
const utility: Utility = new Utility();


export class GenericPageObject {

    constructor() {


    }

    public async SelectLinkClick(byname) {
        try {
            await browser.executeScript('arguments[0].scrollIntoView();', byname.getWebElement());
            await browser.executeScript("arguments[0].click();", byname.getWebElement());
        }
        catch (e) {
            console.log('Select link click not successful for ' + byname);
        }
    }

    public async ButtonClick(byname, wait) {
        try {
            await utility.wait(wait);
            if (await byname.isDisplayed()) {
                await browser.executeScript('arguments[0].scrollIntoView();', byname.getWebElement());
                await browser.executeScript("arguments[0].click();", byname.getWebElement());
            }
        }
        catch (e) {
            console.log('Button click not successful for ' + byname);
        }

    }

    public async SendKeysJS(byname, wait, notestring) {

        try {
            await utility.wait(wait);
            if (await byname.isDisplayed()) {
                await browser.executeScript("arguments[0].click();", byname.getWebElement());
                await browser.executeScript("arguments[0].value='" + notestring + "';", byname);
            }
        }
        catch (e) {
            console.log('SendKeysJS not successful for ' + byname);
        }

    }

    public async SendKeys(byname, wait, notestring) {

        try {
            await utility.wait(wait);
            if (await byname.isDisplayed()) {
                byname.sendKeys(notestring);
            }
        }
        catch (e) {
            console.log('Sendkeys not successful for ' + byname);
        }

    }

    public async RadioButtonClick(byname, wait) {
        try {
            await utility.wait(wait);
            if (await byname.isDisplayed()) {
                await browser.executeScript('arguments[0].scrollIntoView();', byname.getWebElement());
                await browser.executeScript("arguments[0].click();", byname.getWebElement());
            }
        }
        catch (e) {
            console.log('Button click not successful for ' + byname);
        }
    }

    public async DropDownOptionClick(byname, wait, value) {
        try {
            await utility.wait(wait);
            if (await byname.isDisplayed()) {
                var select = byname;
                await select.$('[value="' + value + '"]').click();
            }
        }
        catch (e) {
            console.log('Button click not successful for ' + byname);
        }
    }


}