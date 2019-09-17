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
	public DF17SmartCreditselectLink: ElementArrayFinder;
	public SFEFLTY19selectLink: ElementArrayFinder;
	public SFEFLTY19completedLink: ElementArrayFinder;
	public SFEFLTY19TRADselectLink: ElementArrayFinder;
	public SFEFLTY19TRADcompletedLink: ElementArrayFinder;
	public SFEINST15selectLink: ElementArrayFinder;
	public SFEINST15completedLink: ElementArrayFinder;
	public SFENMEX16selectLink: ElementArrayFinder;
	public SFENMEX16completedLink: ElementArrayFinder;
	public SFGFLTY18TRADselectLink: ElementArrayFinder;
	public SFGFLTY18TRADcompletedLink: ElementArrayFinder;
	public SFGNMEX15selectLink: ElementArrayFinder;
	public SFGNMEX15completedLink: ElementArrayFinder;
	public Ex20selectLink: ElementArrayFinder;
	public Ex20completedLink: ElementArrayFinder;
	public Ex21completedLink: ElementArrayFinder;
	public DF17SmartCreditcompletedLink: ElementArrayFinder;
	public Ex19selectLink: ElementArrayFinder;
	public Ex19completedLink: ElementArrayFinder;
	public Remove6selectLink: ElementArrayFinder;
	public RemoveGasSelectLink: ElementArrayFinder;
	public FLTYnoexchangeselectLink: ElementArrayFinder;
	public flty19noExTradSelectLink: ElementArrayFinder;

	constructor() {
		this.Ex20selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]'));
		this.Ex19selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")]'));
		this.Ex20continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH20 SF SMETS2"]'));
		this.selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest EXCH21 DF SMETS2"]'));
		this.Remove6selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE6 FLAT")]'));
		this.RemoveGasSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE5 FLAT")]'));
		this.FLTYnoexchangeselectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]'));
		this.DF17SmartCreditselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX17")]'));
		this.SFEFLTY19selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 19")]'));
		this.SFEFLTY19TRADselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 19 Non S2")]'));
		this.SFEINST15selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST15")]'));
		this.SFENMEX16selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX16")]'));
		this.SFGFLTY18TRADselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 18")]'));
		this.SFGNMEX15selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX15")]'));
		
		this.SFEFLTY19completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19")]'));
		this.SFEFLTY19TRADcompletedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19 Non S2")]'));
		this.SFEINST15completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST15")]'));
		this.SFENMEX16completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobNMEX16")]'));
		this.SFGFLTY18TRADcompletedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18")]'));
		this.SFGNMEX15completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobNMEX15")]'));
		
		
		this.continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]'));
		this.Ex20completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobTest1 EXCH20 DF SMETS2"]'));
		this.Ex21completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobTest1 EXCH21 DF SMETS2"]'));
		this.DF17SmartCreditcompletedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobNMEX17")]'));
		this.flty19noExTradSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 19 Trad Non S2 site FLAT")]'));
		this.Ex19completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobEXCHANGE 19 FLAT"]'));
		this.selectLink2 = element.all(by.xpath('//div[contains(@id,"SelectJobTest3 EXCH21 DF SMETS2")]'));
		this.appointmentListLabel = element(by.xpath('//div[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));


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
			case ('DF17SmartCredit'):
				this.verifyDF17SmartCreditCompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEFLTY19'):
				this.verifySFEFLTY19CompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEFLTY19TRAD'):
				this.verifySFEFLTY19TRADCompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEINST15'):
				this.verifySFEINST15CompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SFENMEX16'):
				this.verifySFENMEX16CompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGFLTY18TRAD'):
				this.verifySFGFLTY18TRADCompletedTextAppointmentListPage();
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGNMEX15'):
				this.verifySFGNMEX15CompletedTextAppointmentListPage();
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
			case ('DF17SmartCredit'):
				this.clickOnTheDF17SmartCreditSelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEFLTY19'):
				this.clickOnTheSFEFLTY19SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEFLTY19TRAD'):
				this.clickOnTheSFEFLTY19TRADSelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEINST15'):
				this.clickOnTheSFEINST15SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFENMEX16'):
				this.clickOnTheSFENMEX16SelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGFLTY18TRAD'):
				this.clickOnTheSFGFLTY18TRADSelectLink();
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGNMEX15'):
				this.clickOnTheSFGNMEX15SelectLink();
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

	public verifySFEFLTY19CompletedTextAppointmentListPage() {
		if (this.SFEFLTY19completedLink != null) {
			this.SFEFLTY19completedLink.getText().then(function (SFEFLTY19completed) {
				console.log("find SFEFLTY19completedtext  " + SFEFLTY19completed);
			});
		}
	}

	public verifySFEFLTY19TRADCompletedTextAppointmentListPage() {
		if (this.SFEFLTY19TRADcompletedLink != null) {
			this.SFEFLTY19TRADcompletedLink.getText().then(function (SFEFLTY19TRADcompleted) {
				console.log("find SFEFLTY19TRADcompletedtext  " + SFEFLTY19TRADcompleted);
			});
		}
	}

	public verifySFEINST15CompletedTextAppointmentListPage() {
		if (this.SFEINST15completedLink != null) {
			this.SFEINST15completedLink.getText().then(function (SFEINST15completed) {
				console.log("find SFEINST15completedtext  " + SFEINST15completed);
			});
		}
	}

	public verifySFENMEX16CompletedTextAppointmentListPage() {
		if (this.SFENMEX16completedLink != null) {
			this.SFENMEX16completedLink.getText().then(function (SFENMEX16completed) {
				console.log("find SFENMEX16completedtext  " + SFENMEX16completed);
			});
		}
	}

	public verifySFGFLTY18TRADCompletedTextAppointmentListPage() {
		if (this.SFGFLTY18TRADcompletedLink != null) {
			this.SFGFLTY18TRADcompletedLink.getText().then(function (SFGFLTY18TRADcompleted) {
				console.log("find SFGFLTY18TRADcompletedtext  " + SFGFLTY18TRADcompleted);
			});
		}
	}

	public verifySFGNMEX15CompletedTextAppointmentListPage() {
		if (this.SFGNMEX15completedLink != null) {
			this.SFGNMEX15completedLink.getText().then(function (SFGNMEX15completed) {
				console.log("find SFGNMEX15completedtext  " + SFGNMEX15completed);
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

	public verifyDF17SmartCreditCompletedTextAppointmentListPage() {
		if (this.DF17SmartCreditcompletedLink != null) {
			this.DF17SmartCreditcompletedLink.getText().then(function (DF17SmartCreditcompleted) {
				console.log("find DF17SmartCreditcompletedtext  " + DF17SmartCreditcompleted);
			});
		}
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Click on the correct DF17SmartCredit Select Link
	 ***/

	public async clickOnTheDF17SmartCreditSelectLink() {
		var list = this.DF17SmartCreditselectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobNMEX17")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobNMEX17")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobNMEX17")]))' + '[' + [size] + ']')
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
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFEFLTY19 Select Link
	 ***/

	public async clickOnTheSFEFLTY19SelectLink() {
		var list = this.SFEFLTY19selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 19")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobFAULTY 19")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 19")]))' + '[' + [size] + ']')
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
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFEINST15 Select Link
	 ***/

	public async clickOnTheSFEINST15SelectLink() {
		var list = this.SFEINST15selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobINST15")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobINST15")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobINST15")]))' + '[' + [size] + ']')
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
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFENMEX16 Select Link
	 ***/

	public async clickOnTheSFENMEX16SelectLink() {
		var list = this.SFENMEX16selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobNMEX16")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobNMEX16")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobNMEX16")]))' + '[' + [size] + ']')
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
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFGFLTY18TRAD Select Link
	 ***/

	public async clickOnTheSFGFLTY18TRADSelectLink() {
		var list = this.SFGFLTY18TRADselectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 18")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobFAULTY 18")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 18")]))' + '[' + [size] + ']')
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
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFGNMEX15 Select Link
	 ***/

	public async clickOnTheSFGNMEX15SelectLink() {
		var list = this.SFGNMEX15selectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobNMEX15")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobNMEX15")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobNMEX15")]))' + '[' + [size] + ']')
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
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFEFLTY19TRAD Select Link
	 ***/

	public async clickOnTheSFEFLTY19TRADSelectLink() {
		var list = this.SFEFLTY19TRADselectLink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 19 Non S2")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"SelectJobFAULTY 19 Non S2")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"SelectJobFAULTY 19 Non S2")]))' + '[' + [size] + ']')
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