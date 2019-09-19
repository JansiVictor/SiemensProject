import {browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {Utility} from "../support/utility";
import * as assert from "assert";

const utility: Utility = new Utility();
const chai = require("chai");
const expect = chai.expect;

export class DepartForApptDialogueBoxPageObject {

    private departWindow: ElementFinder;
    private departForApptTextLabel: ElementFinder;
    private departBtn: ElementFinder;
    private departOkBtn: ElementFinder;

    constructor()
    {
        this.departWindow = element(by.css("[ng-show='departDialog']"));
        this.departForApptTextLabel = element(by.xpath("//div/h3[text()='Depart for Appointment?']"));
        this.departBtn = element(by.id("btn_depart"));
        this.departOkBtn = element(by.xpath("//button[@id='btnCall2']"));
    }

    public async isdepartForApptDialogueBoxDisplayed(){
        await expect(this.departWindow.isDisplayed());
    }

    public async clickOnDepartOkBtn() {
        await expect(this.departOkBtn.isDisplayed());
        this.departOkBtn.click();
    }
}