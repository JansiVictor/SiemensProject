import { element, by, ElementFinder, ElementArrayFinder } from "protractor";
const chai = require("chai");
const expect = chai.expect;
import { Utility } from "../support/utility";
const utility: Utility = new Utility();

export class FLTY19homePageObject {
    public appointmentListLabel: ElementFinder;
    public usrname: ElementFinder;
    public password: ElementFinder;
    public loginbtn: ElementFinder;
    public selectLink: ElementArrayFinder;
    public arriveBtn: ElementFinder;
    public continueLink: ElementFinder;

    constructor() {

        this.selectLink = element.all(by.xpath('(//*[starts-with(@id,"SelectJob1JFAULTY 18")])[1]'));
        this.continueLink = element(by.xpath('//div/span[starts-with(@id,"ContinueJob1JFAULTY 18")]/following-sibling::span/span[text()="continue >"]'));
        this.appointmentListLabel = element(by.xpath('//*[text()="Appointments List"]'));

        //this.selectLink = element.all(by.xpath('//span[text()="select >"]'));
        this.selectLink = element.all(by.xpath('(//*[starts-with(@id,"SelectJobCGB2")])[1]'));
        //this.selectLink = element.all(by.xpath('(//span[text()="select >"])[6]'));
        //this.continueLink = element.all(by.xpath('(//span[text()="continue >"])[1]'));
        this.continueLink = element(by.xpath('//*[starts-with(@id,"SelectJobCGB2")]'));

        
        this.appointmentListLabel = element(by.xpath('//*[@id="btn_top"]/div[2]/div'));

        this.usrname = element(by.id("input1"));
        this.password = element(by.id("input2"));
        this.loginbtn = element(by.id("submitbutton"));
        this.arriveBtn = element(by.id("btn_arrive"));
    }

    public verifyAppointmentListPage() {
        if (this.selectLink != null) {
            this.selectLink.getText().then(function(select) {
                console.log("find select link text  " + select);
            });
        }
    }

    public async seeAppList() {
        await utility.wait(1000);
        await expect(this.appointmentListLabel.isDisplayed());
    }

    public clickOnTheSelectLink() {
        var list = this.selectLink;
        list.count().then(function (promiseResult) {
            console.log("size is: " + promiseResult);
            var size = promiseResult; //4
            //Remove when there is one
            //var actualSize = size -1;
            console.log("size is: " + size);
            var selectlatest = element(
                by.xpath('(//span[text()="select >"])' + '[' + [size] + ']')
            );
            selectlatest.getText().then(function (selectText) {
                console.log("find select link text  " + selectText);
            });
            console.log("link " + ('(//span[text()="select >"])' + '[' + [size] + ']'));
            var selectMe = element(
                by.xpath('(//span[text()="select >"])' + '[' + [size] + ']')
            );
            selectMe.getText().then(function (selectMeText) {
                console.log("find select Me link text  " + selectMeText);
            });
            if (
                selectMe.isDisplayed()
            ) {
                selectMe.click();
            };

        });
    };

};