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


export class FLTY19homePageObject {
	public appointmentListLabel: ElementFinder;
	public usrname: ElementFinder;
	public password: ElementFinder;
	public loginbtn: ElementFinder;
  public selectLink: ElementArrayFinder;
  public selectLink2: ElementArrayFinder;
	public arriveBtn: ElementFinder;


	constructor() {
    this.selectLink = element.all(by.xpath('//div[(@id="SelectJobTest4 EXCH21 DF SMETS2")]'));
    this.selectLink2 = element.all(by.xpath('//div[contains(@id,"SelectJobTest3 EXCH21 DF SMETS2")]'));
		this.appointmentListLabel = element(by.xpath('//div[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));

	}
/***
 * @Author Aparna Das
 * @description Verify Appointment List page is displayed
***/
	public verifyAppointmentListPage() {
		if (this.selectLink2 != null) {
			this.selectLink2.getText().then(function (select) {
				console.log("find select link text  " + select);
			});
		}
  }
  
/***
 * @Author Aparna Das
 * @description Click on the correct Select Link
***/

	public async clickOnTheSelectLink() {
		var list = this.selectLink;

		// browser.executeScript('window.scrollTo(500,0);').then(function () {
		// 	this.selectLink2.click();
		// })
		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			var actualSize = size -1;
			console.log("size is: " + size);
			var selectlatest = element(
				by.xpath('((//div[(@id="SelectJobTest4 EXCH21 DF SMETS2")]))' + '[' + [size] + ']')
			);
			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});
			console.log("link " + ('((//div[(@id="SelectJobTest4 EXCH21 DF SMETS2")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//div[(@id="SelectJobTest4 EXCH21 DF SMETS2")]))' + '[' + [size] + ']')
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