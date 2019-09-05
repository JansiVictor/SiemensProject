import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder,
	browser
} from "protractor";

import {
	Utility
} from "../support/utility";
const utility: Utility = new Utility();


export class ExchangehomePageObject {
public appointmentListLabel: ElementFinder;
public usrname: ElementFinder;
public password: ElementFinder;
public loginbtn: ElementFinder;
public selectLink: ElementArrayFinder;
public selectLink2: ElementArrayFinder;
public arriveBtn: ElementFinder;
public continueLink: ElementArrayFinder;
public Ex20continueLink: ElementArrayFinder;
public Ex20selectLink: ElementArrayFinder;


	constructor() {
	this.Ex20selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]'));
	this.Ex20continueLink = element.all(by.xpath('//span[@id="ContinueJobTest EXCH20 SF SMETS2"]'));
	this.selectLink = element.all(by.xpath('//span[@id="SelectJobTest EXCH21 DF SMETS2"]'));
	this.continueLink = element.all(by.xpath('//span[@id="ContinueJobTest EXCH21 DF SMETS2"]'));
    this.selectLink2 = element.all(by.xpath('//div[contains(@id,"SelectJobTest3 EXCH21 DF SMETS2")]'));
		this.appointmentListLabel = element(by.xpath('//div[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));

	}
/***

 * @description Verify Appointment List page is displayed
***/
	public verifyAppointmentListPage() {
		if (this.selectLink2 != null) {
			this.selectLink2.getText().then(function (select) {
				console.log("find select link text  " + select);
			});
		}
  }

//For Continue Link

// public verifyAppointmentListPage() {
// 		if (this.continueLink != null) {
// 			this.continueLink.getText().then(function (select) {
// 				console.log("find select link text  " + select);
// 			});
// 		}
// }


  
/***
 * @Author Aparna Das
 * @description Click on the correct Exchange 21 Select Link
***/

	public async clickOnTheExchange21SelectLink() {
		var list = this.selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);
			

			 var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobTest1 EXCH21 SF SMETS2")]))' + '[' + [size] + ']')
			);
			
			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});
			

			console.log("link " + ('((//span[starts-with(@id,"SelectJobTest1 EXCH21 SF SMETS2")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobTest1 EXCH21 SF SMETS2")]))' + '[' + [size] + ']')
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


	/***
 * @Author Aparna Das
 * @description Click on the correct Conitinue Link
***/

// public async clickOnTheExchange21ContinueLink() {
	
// 	var list = this.continueLink;

// 	await utility.wait(2000);
// 	list.count().then(function (promiseResult) {
// 		console.log("size is: " + promiseResult);
// 		var size = promiseResult; //4
// 		//Remove when there is one
// 		//var actualSize = size -1;
// 		console.log("size is: " + size);

// 		var continueLatest = element(
// 			by.xpath('((//span[@id="ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
// 		);
		
// 		continueLatest.getText().then(function (selectText) {
// 			console.log("find select link text  " + selectText);
// 		});


// 		console.log("link " + ('((//span[@id="ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']'));
// 		var continueMe = element(
// 			by.xpath('((//span[@id="ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
// 		);
		
// 		if (
// 			continueMe.isDisplayed()
// 		) {
			
// 			continueMe.click();
// 		};

// 	});
// };

/***
 * @Author Aparna Das
 * @description Click on the correct Exchange 20 Select Link
***/

public async clickOnTheExchange20SelectLink() {
	var list = this.Ex20selectLink;

	await utility.wait(2000);
	list.count().then(function (promiseResult) {
		console.log("size is: " + promiseResult);
		var size = promiseResult; //4
		//Remove when there is one
		//var actualSize = size -1;
		console.log("size is: " + size);
		

		 var selectlatest = element(
			by.xpath('((//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]))' + '[' + [size] + ']')
		);
		
		selectlatest.getText().then(function (selectText) {
			console.log("find select link text  " + selectText);
		});
		

		console.log("link " + ('((//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]))' + '[' + [size] + ']'));
		var selectMe = element(
			by.xpath('((//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]))' + '[' + [size] + ']')
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


/***
* @Author Aparna Das
* @description Click on the correct Ex 20 Conitinue Link
***/

// public async clickOnTheExchange20ContinueLink() {

// 	var list = this.Ex20continueLink;

// 	await utility.wait(2000);
// 	list.count().then(function (promiseResult) {
// 		console.log("size is: " + promiseResult);
// 		var size = promiseResult; //4
// 		//Remove when there is one
// 		//var actualSize = size -1;
// 		console.log("size is: " + size);

// 		var continueLatest = element(
// 			by.xpath('((//span[@id="ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
// 		);
	
// 		continueLatest.getText().then(function (selectText) {
// 			console.log("find select link text  " + selectText);
// 		});


// 		console.log("link " + ('((//span[@id="ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']'));
// 		var continueMe = element(
// 			by.xpath('((//span[@id="ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
// 		);
	
// 		if (
// 			continueMe.isDisplayed()
// 		) {
		
// 			continueMe.click();
// 		};

// 	});
// };

};