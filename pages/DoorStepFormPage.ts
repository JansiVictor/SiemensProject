import {Utility} from "../support/utility";
import {by, element, ElementFinder} from "protractor";

const {Given, When, Then} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();


export class DoorStepFormPageObject {

    private doorStepTextLabel: ElementFinder;
    private arriveButton: ElementFinder;

    constructor()
    {
        this.doorStepTextLabel = element(by.xpath('(//div[text() ="Doorstep"])[1]'));
        this.arriveButton = element(by.id("btn_arrive"));
    }

    public async isDoorStepTextLabelDisplayed() {
        await expect(this.doorStepTextLabel.isDisplayed());
    }

    public async clickOnArriveButton() {
        await expect(this.arriveButton.isPresent());
        this.arriveButton.click();
    }
}