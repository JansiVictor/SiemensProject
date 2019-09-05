import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";


export class INST16homePageObject {
	public appointmentListLabel: ElementFinder;
	public usrname: ElementFinder;
	public password: ElementFinder;
	public loginbtn: ElementFinder; 
	public arriveBtn: ElementFinder;
	public selectLink: ElementArrayFinder;
	public selectLink2: ElementArrayFinder;
	//public selectLink: ElementFinder
	//public selectLink2: ElementFinder
	public continueLink: ElementFinder;


	constructor() {

		//cgp changing
		//this.selectLink = element.all(by.xpath('//span[(@id="SelectJobCGPNEW INST16 DF SMETS2")]'));
    	//this.selectLink2 = element.all(by.xpath('//span[(@id,"SelectJobCGPNEW INST16 DF SMETS2")]'));
		this.selectLink = element.all(by.xpath('(//*[starts-with(@id,"SelectJobCGP")])[1]'));
		this.continueLink = element(by.xpath('//*[starts-with(@id,"SelectJobCGP")]'));



		this.appointmentListLabel = element(by.xpath('//*[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));

	}

	public verifyAppointmentListPage() {
		if (this.selectLink != null) {
			this.selectLink.getText().then(function (select) {
				console.log("find select link text  " + select);
			});
		}
  }
  


	public clickOnTheSelectLink() {
		var list = this.selectLink;
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			
			console.log("size is: " + size);
			var selectlatest = element(
				by.xpath('(//span[text()="select >"])'+'['+[size]+']')
			);
			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});
			console.log("link " + ('(//span[text()="select >"])' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('(//span[text()="select >"])'+'['+[size]+']')
				
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