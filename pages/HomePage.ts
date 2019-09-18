import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder,
	browser
} from "protractor";
import {
	JobCompletionPageObject
} from "../pages/JobCompletionPage";

import {
	Utility
} from "../support/utility";
const utility: Utility = new Utility();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const chai = require("chai");
const expect = chai.expect;


export class HomePageObject {
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
	public Ex20completedLink: ElementArrayFinder;
	public Ex21completedLink: ElementArrayFinder;
	public Ex19selectLink: ElementArrayFinder;
	public Ex19completedLink: ElementArrayFinder;
	public Remove6selectLink: ElementArrayFinder;
	public RemoveGasSelectLink: ElementArrayFinder;
	public FLTYnoexchangeselectLink: ElementArrayFinder;
	public flty19noExTradSelectLink: ElementArrayFinder;
	public SFGASINST14:ElementArrayFinder;
	public Exch24SelectLink:ElementArrayFinder;
	public SFGASEx22:ElementArrayFinder;
	public appointmentListLab:ElementFinder;

	constructor() {
		this.Ex20selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]'));
		this.Ex19selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")]'));
		this.Ex20continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH20 SF SMETS2"]'));
		this.selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest EXCH21 DF SMETS2"]'));
		this.Remove6selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE6 FLAT")]'));
		this.RemoveGasSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE5 FLAT")]'));
		this.FLTYnoexchangeselectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]'));
		this.SFGASINST14 = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 INST14 DF SMETS")]'));
		this.SFGASEx22 = element.all(by.xpath('//span[starts-with(@id,"SelectJobEXCHANGE 22 FLAT")]'));
		this.Exch24SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobEXCHANGE 24 FLAT")]'));
		this.continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]'));
		this.Ex20completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobTest1 EXCH20 DF SMETS2"]'));
		this.Ex21completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobTest1 EXCH21 DF SMETS2"]'));
		this.flty19noExTradSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 19 Trad Non S2 site FLAT")]'));
		this.Ex19completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobEXCHANGE 19 FLAT"]'));
		this.selectLink2 = element.all(by.xpath('//div[contains(@id,"SelectJobTest3 EXCH21 DF SMETS2")]'));
		this.appointmentListLabel = element(by.xpath('//div[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));
		this.appointmentListLab = element(by.xpath('//*[text()="Appointments List"]'));


	}
	/***

	 * @description Verify Completed status is displayed
	***/

	public verifyCompletedStatus(fieldName) {
		var fieldName;
		switch (fieldName) {
			case ('Exchange20'):
				this.verifyEx20CompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('DF_FLTY20_SMETS2NoExchange'):
				job.JobCompletedFLTYNoExchangeScreen();
				break;
			case ('ERemove6'):

				console.log('Fieldname:', fieldName);
				break;
			case ('Exchange19'):
				this.verifyEx19CompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('Exchange21'):
				this.verifyEx21CompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SF _E_FLTY19TradNoExchange'):
				job.JobCompletedFLTYTradS2NoExchangeScreen();
				console.log('Fieldname:', fieldName);
				break;
			case ('FLTY20Trad'):
				job.JobCompletedScreen();
				console.log('Fieldname:', fieldName);
				break;
			case ('TST_05 FLTY19 TRAD'):
				job.JobCompletedScreen();
				console.log('Fieldname:', fieldName);
				break;
			case ('TST01_FLTY20'):
				job.JobCompletedScreen();
				console.log('Fieldname:', fieldName);
				break;
			case ('TST12'):
				job.Tst12JobCompletedScreen();
				console.log('Fieldname:', fieldName);
				break;
			default:
				break;
		}
	}

	/***

 * @description Correct Select Link clicked
***/
	public clickCorrectSelectLink(selectLinkName) {
		var selectLinkName;
		switch (selectLinkName) {
			case ('Exchange20'):
				this.clickOnTheExchange20SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DF_FLTY20_SMETS2NoExchange'):
				this.clickOnTheFLTY20NoExchangeSelectLink();
				break;
			case ('ERemove6'):
				this.clickOnTheRemove6SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('Exchange19'):
				this.clickOnTheExchange19SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('Exchange21'):
				this.clickOnTheExchange21SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SF _E_FLTY19TradNoExchange'):
				this.clickFLTY19TradNoExSelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFINST14'):
			this.clickOnTheSFInst14SelectLink();
			console.log('Fieldname:', selectLinkName);
			break;
			case ('DFExchange24'):
			this.clickOnTheDFECXH24SelectLink();
			console.log('Fieldname:', selectLinkName);
			break;
			case ('SFExchange22'):
			this.clickOnSFGASEx22SelectLink();
			console.log('Fieldname:', selectLinkName);
			break;
			default:
				break;
		}
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

	public verifyContinueLinkAppointmentListPage() {
		if (this.continueLink != null) {
			this.continueLink.getText().then(function (select) {
				console.log("find select link text  " + select);
			});
		}
	}


	public verifyEx20CompletedTextAppointmentListPage() {
		if (this.Ex20completedLink != null) {
			this.Ex20completedLink.getText().then(function (Ex20completed) {
				console.log("find Ex20completedtext  " + Ex20completed);
			});
		}
	}

	public verifyEx21CompletedTextAppointmentListPage() {
		if (this.Ex21completedLink != null) {
			this.Ex21completedLink.getText().then(function (Ex20completed) {
				console.log("find Ex21completedtext  " + Ex20completed);
			});
		}
	}

	public verifyEx19CompletedTextAppointmentListPage() {
		if (this.Ex19completedLink != null) {
			this.Ex19completedLink.getText().then(function (Ex19completed) {
				console.log("find Ex19completedtext  " + Ex19completed);
			});
		}
	}

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
	 * @description Click on the correct Exchange 21 Select Link
	 ***/

	public async clickOnSFGASEx22SelectLink() {
		var list = this.SFGASEx22;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobEXCHANGE 22 FLAT")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobEXCHANGE 22 FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobEXCHANGE 22 FLAT")]))' + '[' + [size] + ']')
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
	 * @description Click on the correct Exchange 21 Select Link
	 ***/

	public async clickOnTheSFInst14SelectLink() {
		var list = this.SFGASINST14;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobTest1 INST14 DF SMETS")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobTest1 INST14 DF SMETS")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobTest1 INST14 DF SMETS")]))' + '[' + [size] + ']')
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
	 * @description Click on the correct Exchange 21 Select Link
	 ***/

	public async clickOnTheDFECXH24SelectLink() {
		var list = this.Exch24SelectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobEXCHANGE 24 FLAT")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobEXCHANGE 24 FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobEXCHANGE 24 FLAT")]))' + '[' + [size] + ']')
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

	public async clickOnTheExchange21ContinueLink() {

		var list = this.continueLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);

			var continueLatest = element(
				by.xpath('((//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
			);

			continueLatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']'));
			var continueMe = element(
				by.xpath('((//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
			);

			if (
				continueMe.isDisplayed()
			) {

				continueMe.click();
			};

		});
	};

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

	public async clickOnTheExchange20ContinueLink() {

		var list = this.Ex20continueLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);

			var continueLatest = element(
				by.xpath('((//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
			);

			continueLatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']'));
			var continueMe = element(
				by.xpath('((//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
			);

			if (
				continueMe.isDisplayed()
			) {

				continueMe.click();
			};

		});
	};


	/***
	 * @Author Aparna Das
	 * @description Click on the correct Exchange 19 Select Link
	 ***/

	public async clickOnTheExchange19SelectLink() {
		var list = this.Ex19selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('(//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")])' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")]))' + '[' + [size] + ']')
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

	public async VerifyTheExchange20CompletedLink() {

		var list = this.Ex20completedLink;

		await utility.wait(2000);
		list.count().then(async function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);

			var completedLatest = element(
				by.xpath('((//span[starts-with(@id,"CompletedJobTest1 EXCH20 DF SMETS2"]))' + '[' + [size] + ']')
			);

			completedLatest.getText().then(function (completedText) {
				console.log("find completedText text  " + completedText);
			});


			console.log("link " + ('((//span[starts-with(@id,"CompletedJobTest1 EXCH20 DF SMETS2"]))' + '[' + [size] + ']'));
			var completed = element(
				by.xpath('((//span[starts-with(@id,"CompletedJobTest1 EXCH20 DF SMETS2"]))' + '[' + [size] + ']')
			);

			if (
				completed.isDisplayed()
			) {
				await this.completed.getText().then(function (complete) {
					console.log("Print complete Job Txt  " + complete);
				});
			};
		});
	};

	/***
	 * @Author Aparna Das
	 * @description Click on the correct Ex 21 Completed Text
	 ***/

	public async VerifyTheExchange21CompletedLink() {

		var list = this.Ex21completedLink;

		await utility.wait(2000);
		list.count().then(async function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);

			var completedLatest = element(
				by.xpath('((//span[starts-with(@id,"CompletedJobTest1 EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
			);

			completedLatest.getText().then(function (completedText) {
				console.log("find completedText text  " + completedText);
			});


			console.log("link " + ('((//span[starts-with(@id,"CompletedJobTest1 EXCH21 DF SMETS2"]))' + '[' + [size] + ']'));
			var completed = element(
				by.xpath('((//span[starts-with(@id,"CompletedJobTest1 EXCH21 DF SMETS2"]))' + '[' + [size] + ']')
			);

			await this.completed.getText().then(function (complete) {
				console.log("Print complete Job Txt  " + complete);
			});
		});
	};

	/***
	 * @Author Aparna Das
	 * @description Click on the correct Remove6 Select Link
	 ***/

	public async clickOnTheRemove6SelectLink() {
		var list = this.Remove6selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobRMVE6 FLAT")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobRMVE6 FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobRMVE6 FLAT")]))' + '[' + [size] + ']')
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
	 * @description Click on the correct FLTY20 No Exchange Select Link
	 ***/
	public async clickOnTheFLTY20NoExchangeSelectLink() {
		var list = this.FLTYnoexchangeselectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]))' + '[' + [size] + ']')
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
	 * @description Click on the correct FLTY20 No Exchange Select Link
	 ***/
	public async clickFLTY19TradNoExSelectLink() {
		var list = this.flty19noExTradSelectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 19 Trad Non S2 site FLAT")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobFAULTY 19 Trad Non S2 site FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 19 Trad Non S2 site FLAT")]))' + '[' + [size] + ']')
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
/**
 * @description App List
 */

public async seeAppList() {
await utility.wait(1000);
await expect(this.appointmentListLab.isDisplayed());
    }



	/***
	 * @Author Aparna Das
	 * @description Click on the correct Remove5 Select Link
	 ***/

	public async clickOnTheRemoveGASSelectLink() {
		var list = this.RemoveGasSelectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobRMVE5 FLAT")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobRMVE5 FLAT")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobRMVE5 FLAT")]))' + '[' + [size] + ']')
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