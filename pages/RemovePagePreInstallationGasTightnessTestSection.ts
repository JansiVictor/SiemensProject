/**
 * @@Author Mark Raphael
 * @Description @Description  DF FLTY20 Trad No Exchange Workflow
 */
import {browser, by, element, ElementFinder, ExpectedConditions} from "protractor";
import {Utility} from "../support/utility";

const {Given, When, Then} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();

export class RemovePagePreInstallationGasTightnessTestSectionObject {

    private unableToReadMeterTrueRadioBtn: ElementFinder;

    constructor() {
        this.unableToReadMeterTrueRadioBtn = element(by.xpath("//div[contains(@class,'radioInput ng-scope')]/div[2]"));
    }


}