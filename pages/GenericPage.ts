/**
 * @description :Generic Functionalities for IE Implementations
 * @author :Jansi Victor
 */

import {
    element, browser,
    by,
    ElementFinder,
    ElementArrayFinder,
    ExpectedConditions,
    protractor
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
            if (await byname.isDisplayed()) {
                await browser.executeScript('arguments[0].scrollIntoView();', byname.getWebElement());
                await browser.executeScript("arguments[0].click();", byname.getWebElement());
            }
        }
        catch (e) {
            console.log('Button click not successful for ' + e);
        }

    }

    public async SendKeysJS(byname, wait, notestring) {

        try {
            
            if (await byname.isDisplayed()) {
                await browser.executeScript("arguments[0].click();", byname.getWebElement());
                await browser.executeScript("arguments[0].value='" + notestring + "';", byname);
            }
        }
        catch (e) {
            console.log('SendKeysJS not successful for ' + e);
        }

    }

    public async SendKeys(byname, wait, notestring) {

        try {
       
            if (await byname.isDisplayed()) {
               await byname.sendKeys(notestring);
            }
           await byname.sendKeys(protractor.Key.TAB);
        }
        catch (e) {
            console.log('Sendkeys not successful for ' + e);
        }

    }

    public async RadioButtonClick(byname, wait) {
        try {
    
            if (await byname.isDisplayed()) {
                await browser.executeScript('arguments[0].scrollIntoView();', byname.getWebElement());
                await browser.executeScript("arguments[0].click();", byname.getWebElement());
            }
        }
        catch (e) {
            console.log('Button click not successful for ' + e);
        }
    }

    public async DropDownOptionClick(byname, wait, value) {
        try {
            if (await byname.isDisplayed()) {
                var select = byname;
                await select.$('[value="' + value + '"]').click();
            }
            await byname.sendKeys(protractor.Key.ESCAPE);
        }
        catch (e) {
            console.log('Button click not successful for ' + e);
        }
    }

    public async DropDownOptionbyLabel(byname, wait, value) {
        try {
            if (await byname.isDisplayed()) {
                var select = byname;
                await select.$('[label="' + value + '"]').click();
            }
           await byname.sendKeys(protractor.Key.ESCAPE);
        }
        catch (e) {
            console.log('Button click not successful for ' + e);
        }
    }
}