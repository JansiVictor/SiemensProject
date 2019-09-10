import {by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {Utility} from "../support/utility";
import * as assert from "assert";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();


export class MarkAppointmentDetailsPageObject {

    private pageHeaderText: ElementArrayFinder;
    private callForwardButton: ElementFinder;
    private departButton: ElementFinder;
    private custContactNoText: ElementFinder;
    private contactMadeTextLabel: ElementFinder;
    private contactMadeRadioOptionTrue: ElementFinder;
    private contactMadeRadioOptionFalse: ElementFinder;
    private appointmentConfTextLabel: ElementFinder;
    private appointmentConfRadioOptionTrue: ElementFinder;
    private appointmentConfRadioOptionFalse: ElementFinder;
    private additionalAccessDetailsTextLabel: ElementFinder;
    private additionalAccessDetailsTextBox: ElementFinder;

    constructor() {
        this.pageHeaderText = element.all(by.xpath("//div[contains(@class,'header-text white tg ng-binding')]"));

        this.callForwardButton = element(by.xpath("//*[@id='btnCall1'][1]"));
        this.departButton = element(by.id('btn_depart'));

        this.custContactNoText = element(by.xpath("//p[contains(@class,'ng-binding')]"));

        this.contactMadeTextLabel = element(by.xpath('//div[text()="Contact made?"]'));
        this.contactMadeRadioOptionTrue = element(by.xpath('//label[@id="rb_contact_y"]'));
        this.contactMadeRadioOptionFalse = element(by.xpath('//label[@id="rb_contact_n"]'));

        this.appointmentConfTextLabel = element(by.xpath('//div[text()="Appointment Confirm?"]'));
        this.appointmentConfRadioOptionTrue = element(by.id('rb_app_conf_y'));
        this.appointmentConfRadioOptionFalse = element(by.id('rb_app_conf_n'));

        this.additionalAccessDetailsTextLabel = element(by.xpath('//div[text()="Additional Access Details"]'));
        this.additionalAccessDetailsTextBox = element(by.id('call_fwd_notes'));
    }

    public async isH1HeaderPresentAppointmentDetailsPage() {
        this.pageHeaderText.count().then(function (pageHeaderCount) {
            console.log("AppointmentDetailsPage pageHeaderText exists, count = " + pageHeaderCount)
            assert.equal(pageHeaderCount, '1');
        });
    }

    public async clickOnCallForwardBtn() {
        await expect(this.callForwardButton.isPresent());
        this.callForwardButton.click();
    }

    public async clickOnDepartBtn() {
        await expect(this.departButton.isPresent());
        this.departButton.click();
    }

    public async isCustContactNoTextPresent() {
        await expect(this.custContactNoText.isPresent());
    }

    public async isContactMadeElementsPresent() {
        await expect(this.contactMadeTextLabel.isPresent());
        await expect(this.contactMadeRadioOptionTrue.isPresent());
        await expect(this.contactMadeRadioOptionFalse.isPresent());
    }

    public async isAppointmentConfirmTextElementsPresent() {
        await expect(this.appointmentConfTextLabel.isPresent());
        await expect(this.appointmentConfRadioOptionTrue.isPresent());
        await expect(this.contactMadeRadioOptionFalse.isPresent());
    }

    public async isAdditionaAccessDetailElementsPresent() {
        await expect(this.additionalAccessDetailsTextLabel.isPresent());
        await expect(this.additionalAccessDetailsTextBox.isPresent());
    }

    public async updatePreCheckOptionsForSelectedAppointment() {
        this.contactMadeRadioOptionTrue.click();
        this.appointmentConfRadioOptionTrue.click()
    }
}