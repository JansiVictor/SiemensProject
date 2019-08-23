import { element, by, ElementFinder, ElementArrayFinder} from "protractor";
const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import { Utility } from "../support/utility";
const utility: Utility = new Utility();



export class DoorStepPageObject {
    
    public beAware: ElementFinder;
    public selectInputField: ElementFinder;
    public accessToSiteY: ElementFinder;
    public customerOnSiteY: ElementFinder;
    public onSiteBtn: ElementFinder;
    public initialRiskAssesment: ElementFinder;

    constructor() {
        
        this.beAware = element(by.xpath('//div/h4[text() =" Be aware of any danger!"]'));
        this.selectInputField = element(by.id('selectInput'));
        this.accessToSiteY = element(by.xpath('//label[text()="YES"]'));
        this.customerOnSiteY = element(by.xpath('(//label[@id="rb_cst_onsite_y"])'));
        this.onSiteBtn = element(by.xpath('(//button[@id="btn_onsite"])'));
        this.initialRiskAssesment = element(by.xpath('(//div/h4[text()="Initial Risk Assessment"])'));
        
    }

    public verifyBeAwareOfAnyDangerPage(){
        this.beAware.getText().then(function(BeAwareText) {
            console.log("find Beaware Text  " + BeAwareText);
            });
    }

    public async fillTheDoorStepDetails() {
        var select = this.selectInputField;
        select.$('[value="C94"]').click();

        if(this.accessToSiteY.isDisplayed()) {
            await utility.wait(5000);
            this.accessToSiteY.click();
        }

        if(this.customerOnSiteY.isDisplayed()) {
            await utility.wait(5000);
            this.customerOnSiteY.click();
        }
    }

    public async clickONSITEBtn(){
        this.onSiteBtn.click();
        await utility.wait(5000);
        await expect(this.initialRiskAssesment.isPresent());
    }
}

