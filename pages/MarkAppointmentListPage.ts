import {by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {Utility} from "../support/utility";

const utility: Utility = new Utility();


export class MarkAppointmentListPageObject {

    private firstSelectLink: ElementFinder;
    private allRelevantSelectLinks: ElementArrayFinder;

    constructor() {
        this.firstSelectLink = element(by.xpath("//span[contains(@id,'SelectJobFAULTY 20 Non S2 site FLAT')]"));
        this.allRelevantSelectLinks = element.all(by.xpath("//span[contains(@id,'SelectJobFAULTY 20 Non S2 site FLAT')]"));
    }

    public verifyAppointmentListFormSelectLinksExist() {
        if (this.allRelevantSelectLinks.isDisplayed()) {
            this.allRelevantSelectLinks.getText().then(function (select) {
                console.log("Link element identified :" + select + " !!!!");
            });
        }
    }

    public clickOnRelevantSelectLink() {
        if (this.allRelevantSelectLinks.isDisplayed()) {
            this.allRelevantSelectLinks.count().then(function (count) {
                console.log("The number of relevant select > links identified is : " + count + " !!!!");
            })
            this.allRelevantSelectLinks.click();
        }
    }
}
