import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";


export class SFENMEX16homePageObject {
	public appointmentListLabel: ElementFinder;
	public usrname: ElementFinder;
	public password: ElementFinder;
	public loginbtn: ElementFinder;
  public selectLink: ElementArrayFinder;
  public selectLink2: ElementArrayFinder;
	public arriveBtn: ElementFinder;


	constructor() {
	this.selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX16")]'));
    this.selectLink2 = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX16")]'));
		this.appointmentListLabel = element(by.xpath('//*[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));

	}
/***
 * @Author Supriya Harikumar
 * @description Verify Appointment List page is displayed
***/
	public verifyAppointmentListPage() {
		if (this.selectLink != null) {
			this.selectLink.getText().then(function (select) {
				console.log("find select link text  " + select);
			});
		}
  }
  
/***
 * @Author Supriya Harikumar
 * @description Click on the correct Select Link
***/

	public clickOnTheSelectLink() {
		var list = this.selectLink;
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);
			var selectlatest = element(
				by.xpath('((//*[starts-with(@id,"SelectJobNMEX16")]))' + '[' + [size] + ']')
			);
			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});
			console.log("link " + ('((//*[starts-with(@id,"SelectJobNMEX16")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//*[starts-with(@id,"SelectJobNMEX16")]))' + '[' + [size] + ']')
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