import {
	element,browser,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";
const {
	Given,
	When,
	Then
} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
import {
	GenericPageObject
} from "../pages/GenericPage"
const utility: Utility = new Utility();
const Gen: GenericPageObject = new GenericPageObject();
export class AppointmentListPageObject {

	
	//public appointmentListLabel: ElementFinder;
	public usrname: ElementFinder;
	public password: ElementFinder;
	public loginbtn: ElementFinder;
	public elem: ElementFinder;
	public AppointmentText: ElementFinder;
	public callForwardText: ElementFinder;
	public contactMadeText: ElementFinder;
	public contactMadeYes: ElementFinder;
	public appointmentConfirmation: ElementFinder;
	public appointmentconfirmationYes: ElementFinder;
	public additionalAccessDetails: ElementFinder;
	public additionalAccessDetailsTextBox: ElementFinder;
	public departBtn: ElementFinder;
	public departAppointment: ElementFinder;
	public departWindow: ElementFinder;
	public MPRNdiplayed: ElementFinder;
	public mprnOK: ElementFinder;
	public expandAll: ElementFinder;
	public customerContactNumberText: ElementFinder;
	public mpan: ElementFinder;
	public customerDetails: ElementFinder;
	public postCode: ElementFinder;
	public arriveBtn: ElementFinder;
	public doorStepText: ElementFinder;
	public arrivalTime: ElementFinder;
	public callfrwdpageContent: ElementFinder;
	public doorStepPROText: ElementFinder;
	public beAware: ElementFinder;
	public continueLink: ElementFinder;

	public continueLinkforEx21: ElementFinder;
	public contactMadeNo: ElementFinder;
	
	
	
	public custcontnumberTxt: ElementFinder;
	public customercontactnumberdis: ElementFinder;

	private pageHeaderText: ElementArrayFinder;
    private allRelevantSelectLinks: ElementArrayFinder;
	
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
	private departOkBtn: ElementFinder;

    

	constructor() {
		
        this.departOkBtn = element(by.xpath("//button[@id='btnCall2']"));
		this.departWindow = element(by.css("[ng-show='departDialog']"));
        this.departBtn = element(by.id("btn_depart"));
		//this.appointmentListLabel = element(by.xpath('//*[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.elem = element(by.xpath('//[@id="app"]/siemensheader'));
		this.AppointmentText = element(by.xpath('(//*[@id="btn_top"]/div[2]/div)[1]'));
		//this.AppointmentText = element(by.xpath('//[@id="btn_top"]/div[2]/div'));
		this.callForwardText = element(by.xpath('(//button[@id="btnCall1"])[1]'));
		this.custcontnumberTxt = element(by.xpath('//*[contains(text(),"CUSTOMER CONTACT NUMBER:")]'));
		this.contactMadeText = element(by.xpath('//div[text()="Contact made?"]'));
		this.contactMadeYes = element(by.xpath('//label[@id="rb_contact_y"]'));
		this.contactMadeNo = element(by.xpath('//label[@id="rb_contact_n"]'));
		this.appointmentConfirmation = element(by.xpath('//div[text()="Appointment Confirm?"]'));
		this.appointmentconfirmationYes = element(by.id('rb_app_conf_y'));
		this.additionalAccessDetails = element(by.xpath('//div[text()="Additional Access Details"]'));
		this.additionalAccessDetailsTextBox = element(by.id('call_fwd_notes'));
		this.departBtn = element(by.id('btn_depart'));
		this.departAppointment = element(by.xpath('//div/h3[text()="Depart for Appointment?"]'));
		this.departWindow = element(by.css("[ng-show='departDialog']"));
		this.MPRNdiplayed = element(by.xpath('//div[text()="MPRN:"]'));
		this.mprnOK = element(by.id('btnCall2'));
		this.expandAll = element(by.xpath('//*[text()="Expand All"]'));
		this.mpan = element(by.xpath('(//div[@class="depart-text alignCenter"]/div[@class="content-row"])[1]'));
		this.customerDetails = element(by.xpath('(//div[@class="depart-text alignCenter"]/div[@class="content-row"])[2]'));
		this.postCode = element(by.xpath('(//div[@class="depart-text alignCenter"]/div[@class="content-row"])[3]'));
		this.arriveBtn = element(by.id('btn_arrive'));
		this.doorStepText = element(by.xpath('(//div[text() ="Doorstep"])[1]'));
		this.doorStepPROText = element(by.xpath('//div[text() ="DOORSTEP PROTOCOL"]'));
		this.arrivalTime = element(by.xpath('//div[@class="content-row bold"]'));
		this.callfrwdpageContent = element(by.xpath('//div[@class="description"]'));
		this.beAware = element(by.xpath('//div/h4[text() =" Be aware of any danger!"]'));

		this.continueLink = element(by.xpath('//span[text()="continue >"]'));
		this.continueLinkforEx21 = element(by.xpath('(//div[(@id="SelectJobTest1 EXCH21 DF SMETS2")])'));
		this.pageHeaderText = element.all(by.xpath("//div[contains(@class,'header-text white tg ng-binding')]"));
        this.allRelevantSelectLinks = element.all(by.xpath("//span[starts-with(@id,'SelectJobFAULTY 20 Non S2 site FLAT')]"));
		//this.continueLink = element(by.xpath('(//span[text()="continue >"])[1]'));
		this.continueLink = element(by.xpath('//*[starts-with(@id,"SelectJob3JFAULTY 18")]'));

		this.customercontactnumberdis = element(by.xpath('//*[contains(text(),"CUSTOMER CONTACT NUMBER:")]'));
		//this.continueLink = element(by.xpath('(//span[text()="continue >"])[1]'));

		this.continueLink = element(by.xpath('//*[starts-with(@id,"ContinueJob3JFAULTY 19")]'));
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
	//MARKS UPDATE

	public async isH1HeaderPresentAppointmentDetailsPage() {
        this.pageHeaderText.count().then(function (pageHeaderCount) {
            console.log("Arrived at Appointment Details Page");
        });
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
        await this.contactMadeRadioOptionTrue.click();
        await this.appointmentConfRadioOptionTrue.click()
    }

	public verifyDoorstepWorkOrderWindow() {
		if (this.doorStepText.isDisplayed) {
			this.verifydoorStepWindow();
		}
	}

	public verifyWorkOrderWindowText() {
		if (this.AppointmentText.isDisplayed) {
			this.AppointmentText.getText().then(async function (appointment) {
				console.log("find Appointment Page Text  " + appointment);
			});
		} else if (this.doorStepText.isDisplayed) {
			this.doorStepText.getText().then(async function (doorstep) {
				console.log("find doorStepText Page Text  " + doorstep);
			});
		}
	}

	public async validateThePageTextDisplay(xpathVariable, text) {
		await xpathVariable.getText().then(async function (xpathVar) {
			console.log("find Page Text  " + xpathVar);
			await expect(xpathVariable.getText()).toEqual(text);
		});
	};

	public async validateTheCallFrwdPageTextDisplay() {
		this.callfrwdpageContent.getText().then(async function (callforwdcontent) {
			console.log("find callforwdcontent Text  " + callforwdcontent);
		});
	};

	public async customercontactnoDisplayed() {
		await utility.wait(utility.low);
		if (await this.customercontactnumberdis.isDisplayed()) {
			await this.customercontactnumberdis.click();
		}
	}

	public async verifydoorStepWindow() {
		try {
			await expect(this.doorStepText.isPresent());
			await expect(this.arriveBtn.isPresent());
			this.arriveBtn.click();
			await utility.wait(utility.medium_low);
			this.arrivalTime.getText().then(function (arrivalTimeText) {
				console.log("Arrival Time Text  " + arrivalTimeText);
			});


		} catch (err) {
			console.log("Error is " + err);
		}
	}
	public async clickOnCallForwardBtn() {
		//customerContactNumberText
		// await expect(await this.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");
		//await expect(this.callForwardText.isPresent());
		//browser.executeScript('arguments[0].scrollIntoView()', this.callForwardText.getWebElement());
	
		//browser.executeScript("arguments[0].click();", this.callForwardText.getWebElement());
		Gen.ButtonClick(this.callForwardText, utility.medium);
		//this.callForwardText.click();
		//await utility.wait(utility.very_low);
		//this.callForwardText.click();
		//customerContactNumberText
		//await utility.wait(utility.very_low);
		//await expect(await this.customerContactNumberText.getText()).equal("CUSTOMER CONTACT NUMBER:");


	}

	/**
	 * //Mark's Update
	 * 
	 */

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

	//ContactMadeText
	public async clickOnContactMadeOtion() {
		await expect(await this.contactMadeText.getText()).equal("Contact made?");
		//await expect(this.contactMadeYes.isPresent());
		Gen.ButtonClick(this.contactMadeYes, utility.medium);
		//this.contactMadeYes.click();
	}

	public async isdepartForApptDialogueBoxDisplayed(){
        await expect(this.departWindow.isDisplayed());
    }

    public async clickOnDepartOkBtn() {
        //await expect(this.departOkBtn.isDisplayed());
		//this.departOkBtn.click();
		Gen.ButtonClick(this.departOkBtn, utility.medium);
	}
	
	public async verifyDepartForAppointmentWindow() {
		await utility.wait(utility.medium_low);
		await expect(await this.departAppointment.getText()).equal("Depart for Appointment?");
		expect(this.departAppointment.isPresent());
	}
	public async clickDepartBtn() {
		//await utility.wait(utility.very_low);
		//await expect(this.departBtn.isDisplayed());
		Gen.ButtonClick(this.departOkBtn, utility.medium);
		//await utility.wait(utility.very_low);
	}
	public async customercontactnumberavailable() {

		await utility.wait(utility.very_low);
		await expect(this.custcontnumberTxt.isPresent());
	}

	public async appointmentConfirmationYes() {
		//await utility.wait(utility.Avg_low);
		//await expect(await this.appointmentConfirmation.getText()).equal("Appointment Confirm?");
		//this.appointmentconfirmationYes.click();
		Gen.ButtonClick(this.appointmentConfirmationYes, utility.medium);
	}

	public async mpanDetails() {
		await expect(this.mpan.isPresent());
		this.mpan.getText().then(function (mpanText) {
			console.log("find Mpan Text  " + mpanText);
		});
	}

	public async customerNameDetails() {
		await expect(this.customerDetails.isPresent());
		this.customerDetails.getText().then(function (customerDetailsText) {
			console.log("find Customer Details Text  " + customerDetailsText);
		});
	}
	public async postCodeDetails() {
		await expect(this.postCode.isPresent());
		this.postCode.getText().then(function (postCodeText) {
			console.log("find PostCode Text  " + postCodeText);
		});
	}

	public async fillContactDetails() {
		//this.appointmentconfirmationYes.click();
		Gen.ButtonClick(this.appointmentconfirmationYes, utility.Avg_low);
		await expect(this.additionalAccessDetails.isPresent()).toBe(true);

	}

	public async additionalDetails() {
		//await utility.wait(utility.very_low);
		await this.additionalAccessDetailsTextBox.clear();
		//Gen.SendItems(this.additionalAccessDetailsTextBox, utility.medium,'Additional access details comment 123');
		await this.additionalAccessDetailsTextBox.sendKeys('Additional access details comment 123');
	}


	public async mprnOKbtn() {
		//await utility.wait(utility.very_low);
		//await expect(this.mprnOK.isPresent());
		//await this.mprnOK.click();
		Gen.ButtonClick(this.mprnOK, utility.medium);
		//await utility.wait(utility.medium);

		await expect(this.arriveBtn.isPresent());
	}

	public async clickArriveBtn() {
		//await expect(this.arriveBtn.isPresent());
		//this.arriveBtn.click();
		Gen.ButtonClick(this.arriveBtn, utility.medium);
		//await utility.wait(utility.medium);
		await expect(this.arrivalTime.isPresent());
	}

}