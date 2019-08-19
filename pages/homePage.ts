import { element, by, ElementFinder} from "protractor";

export class homePageObject {
    public appointmentListLabel: ElementFinder;
    //public appointmentListLabel: ElementFinder;
    constructor() {
        this.appointmentListLabel = element(by.xpath('//*[@id="btn_top"]/div[2]/div'));
       // this.select_Link = element(by.xpath('//span[text()="select >"]'));
       // this.continue_Link = element(by.xpath('//span[text()="continue >"]'))
     //element(by.xpath('//span[text()="continue >"]')).click();

    }
}