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
public Ex20completedLink: ElementArrayFinder;
public Ex21completedLink: ElementArrayFinder;
public Ex19selectLink: ElementArrayFinder;
public Ex19completedLink: ElementArrayFinder;
public Remove6selectLink:ElementArrayFinder;
public RemoveGasSelectLink:ElementArrayFinder;
public FLTYnoexchangeselectLink:ElementArrayFinder;

	constructor() {
	this.Ex20selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]'));
	this.Ex19selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")]'));
	this.Ex20continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH20 SF SMETS2"]'));
	this.selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest EXCH21 DF SMETS2"]'));
	this.Remove6selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE6 FLAT")]'));
	this.RemoveGasSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE5 FLAT")]'));
	this.FLTYnoexchangeselectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]'));
	
	this.continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH21 DF SMETS2"]'));
	this.Ex20completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobTest1 EXCH20 DF SMETS2"]'));
	this.Ex21completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobTest1 EXCH21 DF SMETS2"]'));
	this.Ex19completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobEXCHANGE 19 FLAT"]'));
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