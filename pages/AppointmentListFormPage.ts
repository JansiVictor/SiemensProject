import {browser, by, element, ElementArrayFinder} from "protractor";
import {Utility} from "../support/utility";

const utility: Utility = new Utility();
const chai = require("chai");
const expect = chai.expect;

export class AppointmentListPageObject {

    private pageHeaderText: ElementArrayFinder;
    private allRelevantSelectLinks: ElementArrayFinder;

    constructor() {
        this.pageHeaderText = element.all(by.xpath("//div[contains(@class,'header-text white tg ng-binding')]"));
        this.allRelevantSelectLinks = element.all(by.xpath("//span[starts-with(@id,'SelectJobFAULTY 20 Non S2 site FLAT')]"));
    }

    public async isH1HeaderPresentAppointmentListPage() {

        function presenceOfAll(elementArrayFinder) {
            return function () {
                return elementArrayFinder.count(function (count) {
                    return count > 0;
                });
            };
        }

        browser.wait(presenceOfAll(this.pageHeaderText), 10000);

        if (await this.pageHeaderText.count() > 0) {
            this.pageHeaderText.count().then(function (pageHeaderCount) {
                console.log("Arrived at : Appointment List Page");

            });
        }
    }

    public clickOnRelevantSelectLink() {
        this.allRelevantSelectLinks.count().then(function (count) {
            console.log("The number of relevant select > links identified for this scenario is " + count);
        });
        this.allRelevantSelectLinks.get(0).click();
    }
}
