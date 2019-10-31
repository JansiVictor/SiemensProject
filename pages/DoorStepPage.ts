import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
import {
	GenericPageObject
} from "../pages/GenericPage"
const utility: Utility = new Utility();
const gen: GenericPageObject = new GenericPageObject();

export class DoorStepPageObject {

	public beAware: ElementFinder;
	public selectInputField: ElementFinder;
	public accessToSiteY: ElementFinder;
	public customerOnSiteY: ElementFinder;
	public onSiteBtn: ElementFinder;
	public initialRiskAssesment: ElementFinder;
	private doorStepTextLabel: ElementFinder;
	private arriveButton: ElementFinder;
	constructor() {

		this.beAware = element(by.xpath('//div/h4[text() =" Be aware of any danger!"]'));
		this.selectInputField = element(by.id('selectInput'));
		this.accessToSiteY = element(by.id('rb_Acc_y'));
		this.customerOnSiteY = element(by.xpath('//*[@id="rb_cst_onsite_y"]/span[@class="outer"]'));
		this.onSiteBtn = element(by.xpath('(//button[@id="btn_onsite"])'));
		this.initialRiskAssesment = element(by.xpath('(//div/h4[text()="Initial Risk Assessment"])'));
		this.doorStepTextLabel = element(by.xpath('(//div[text() ="Doorstep"])[1]'));
		this.arriveButton = element(by.id("btn_arrive"));
	}

	public async clickOnSiteButton() {
		//	await utility.wait(utility.medium_low);
		await utility.wait(utility.medium);
		gen.RadioButtonClick(this.onSiteBtn, utility.medium)
		await utility.wait(utility.medium);
		await expect(this.initialRiskAssesment.isDisplayed());
	}

	public async isDoorStepTextLabelDisplayed() {
		await expect(this.doorStepTextLabel.isDisplayed());
	}

	public verifyBeAwareOfAnyDangerPage() {
		this.beAware.getText().then(function (BeAwareText) {
			console.log("find Beaware Text  " + BeAwareText);
		});
	}

	public async fillTheDoorStepDetails() {
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.selectInputField, utility.medium, 'C94');
		await utility.wait(utility.medium);
		if (this.accessToSiteY.isDisplayed()) {
			await utility.wait(utility.medium_low);
			gen.RadioButtonClick(this.accessToSiteY, utility.medium_low)
		}
		await utility.wait(utility.medium);
		if (this.customerOnSiteY.isDisplayed()) {
			await utility.wait(utility.medium);
			gen.RadioButtonClick(this.customerOnSiteY, utility.medium_low)
			await utility.wait(utility.medium);
		}
	}

	public async clickONSITEBtn() {
		await utility.wait(utility.medium_low);
		gen.RadioButtonClick(this.onSiteBtn, utility.medium_low)
		await expect(this.initialRiskAssesment.isDisplayed());
	}
}