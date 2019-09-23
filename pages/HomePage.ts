import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder,
	browser
} from "protractor";
const chai = require("chai");
import {
	JobCompletionPageObject
} from "../pages/JobCompletionPage";
import {
	Utility
} from "../support/utility";
const utility: Utility = new Utility();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const expect = chai.expect;


//...I am checking second time
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
	public selectLinkEx21:ElementArrayFinder;
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
	public jobcompletionFLTYNoExchange: ElementFinder;
	public jobcompletionFLTYTrads2NoExchange: ElementFinder;
	public jobcompletionFLTY20: ElementFinder;
	public jobcompletionFLTY18: ElementFinder;
	public SFGASINST14:ElementArrayFinder;
	public SFGASEx22:ElementArrayFinder;
	public appointmentListLab:ElementFinder;
	private allRelevantSelectLinks: ElementArrayFinder;
	//CGP added for Master
	public Installation16: ElementArrayFinder;
	public Installaton16completedLink: ElementArrayFinder;

	public DFFLTY20NonSMETS2SelectLink: ElementArrayFinder;
	public SFGasFLTY18NonSMETS2SelectLink: ElementArrayFinder;
	public DFFLTY20SMETS2SelectLink: ElementArrayFinder;
	public SFGasFLTY18SMETS2SelectLink: ElementArrayFinder;
	public SFElecFLTY19SMETS2SelectLink: ElementArrayFinder;
	public DFRMVE7SelectLink: ElementArrayFinder;

	//CGP added for SF Elec EXCH23

	public SFElecEXCH23Select: ElementArrayFinder;
	public SFElecEXCH23Completed: ElementArrayFinder;

	public jobcompletionNonFLTY18: ElementFinder;

	//CGP added for FLTY20 TRAD 23/09

	public DFFLTY20NonSMETS2SelectLinkCompleted: ElementArrayFinder;

	constructor() {

		//CGP added for Master
		this.Installation16 = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST16 DF SMETS")]'));
		this.Installaton16completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));
		//
		//CGP added for SFElecEXCH23

		this.SFElecEXCH23Select = element.all(by.xpath('//*[starts-with(@id,"SelectJobEXCHANGE 23")]'));
		this.SFElecEXCH23Completed = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));
		//
		this.jobcompletionFLTYTrads2NoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19 Trad Non S2 site FLAT")]'));
		this.jobcompletionFLTY18 = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18")]'));
		this.jobcompletionFLTY20 = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 20 SMETS2")]'));
		this.jobcompletionNonFLTY18 = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18 Non S2")]'));
		this.Ex20selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 EXCH20 SF SMETS2")]'));
		this.Ex19selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJob1EXCHANGE 19 FLAT")]'));
		this.Ex20continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH20 SF SMETS2"]'));
		this.selectLinkEx21 = element.all(by.xpath('(//span[starts-with(@id,"SelectJobTest EXCH21 DF")])'));
		this.selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest EXCH21 DF SMETS2"]'));
		this.Remove6selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE6 FLAT")]'));
		this.SFGASEx22 = element.all(by.xpath('//span[starts-with(@id,"SelectJobEXCHANGE 22 FLAT")]'));
		this.RemoveGasSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE5 FLAT")]'));
		this.FLTYnoexchangeselectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]'));
		this.SFGASINST14 = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest1 INST14 DF SMETS")]'));
		this.DF17SmartCreditselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX17")]'));
		this.SFEFLTY19selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 19 SMETS2")]'));
		this.SFEFLTY19TRADselectLink =  element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 19 Non S2")]'));
		this.SFEINST15selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST15")]'));
		this.SFENMEX16selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX16")]'));
		
		// **************************Begin Change CGP modified in Master23/09 for Supriya and Priya changes
		
		this.SFGFLTY18TRADselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 18 Non S2")]'));
		
		//End of change *******************************/


		this.SFGNMEX15selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX15")]'));
		this.appointmentListLab = element(by.xpath('//*[text()="Appointments List"]'));

		this.allRelevantSelectLinks = element.all(by.xpath("//span[starts-with(@id,'SelectJobFAULTY 20 Non S2 site FLAT')]"));


		//FLTY Changes
		this.DFFLTY20NonSMETS2SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 Non S2")]'));
		this.SFGasFLTY18NonSMETS2SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 18 Non S2")]'));
		this.DFFLTY20SMETS2SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2")]'));
		this.SFGasFLTY18SMETS2SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 18 SMETS2")]'));
		this.SFElecFLTY19SMETS2SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 19 SMETS2")]'));
		this.DFRMVE7SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE7 ")]'));

		this.SFEFLTY19completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19")]'));
		this.SFEFLTY19TRADcompletedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19 Non S2")]'));
		this.SFEINST15completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST15")]'));
		this.SFENMEX16completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobNMEX16")]'));
		this.SFGFLTY18TRADcompletedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18")]'));
		this.SFGNMEX15completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobNMEX15")]'));
		this.jobcompletionFLTYNoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 20 SMETS2 Site FLAT")]'));
		
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

		//CGP added for Master
		this.Installation16 = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST16 DF SMETS")]'));
		this.Installaton16completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));
		
		//CGP added for SFElecEXCH23

		this.SFElecEXCH23Select = element.all(by.xpath('//*[starts-with(@id,"SelectJobEXCHANGE 23")]'));
		this.SFElecEXCH23Completed = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));

		//CGP added to Master 28/09 for FLTY20 TRAD complete link

		this.DFFLTY20NonSMETS2SelectLinkCompleted = element.all(by.xpath('//span[starts-with(@id,"CompletedJobFAULTY 20 Non S2")]'));


	}
	/***
	 * @description Verify Completed status is displayed
	***/

	public verifyCompletedStatus(fieldName) {
		var fieldName;
		switch (fieldName) {
			case ('Exchange20'):
				this.verifyCompletedTextAppointmentListPage(this.Ex20completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('DF17SmartCredit'):
				this.verifyCompletedTextAppointmentListPage(this.DF17SmartCreditcompletedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEFLTY19'):
				this.verifyCompletedTextAppointmentListPage(this.SFEFLTY19completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEFLTY19TRAD'):
				this.verifyCompletedTextAppointmentListPage(this.SFEFLTY19TRADcompletedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEINST15'):
				this.verifyCompletedTextAppointmentListPage(this.SFEINST15completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFENMEX16'):
				this.verifyCompletedTextAppointmentListPage(this.SFENMEX16completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGFLTY18TRAD'):
				this.verifyCompletedTextAppointmentListPage(this.SFGFLTY18TRADcompletedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGNMEX15'):
				this.verifyCompletedTextAppointmentListPage(this.SFGNMEX15completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('DF_FLTY20_SMETS2NoExchange'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionFLTYNoExchange);
				break;
			case ('ERemove6'):
				console.log('Fieldname:', fieldName);
				break;
			case ('Exchange19'):
				this.verifyCompletedTextAppointmentListPage(this.Ex19completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('Exchange21'):
				this.verifyCompletedTextAppointmentListPage(this.Ex21completedLink);
				console.log('Fieldname:', fieldName);
				break;
			case ('SF _E_FLTY19TradNoExchange'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionFLTYTrads2NoExchange);
				console.log('Fieldname:', fieldName);
				break;
			case ('FLTY20Trad'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionFLTY20);
				console.log('Fieldname:', fieldName);
				break;
			case ('TST_05 FLTY19 TRAD'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionFLTYTrads2NoExchange);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFFLTY20SMETS2'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionFLTY20);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGasFLTY18SMETS2'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionFLTY18);
				console.log('Fieldname:', fieldName);
				break;

			case ('DFINST16'):
					this.verifyCompletedTextAppointmentListPage(this.Installaton16completedLink);
					console.log('Fieldname:', fieldName);
					break;	
			case ('SFElecEXCH23'):
					this.verifyCompletedTextAppointmentListPage(this.SFElecEXCH23Completed);
					console.log('Fieldname:', fieldName);
					break;	

			case ('SFGasFLTY18NonSMETS2'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionNonFLTY18);
				console.log('Fieldname:', fieldName);
				break;

			//********************* CGP Begin change Mater 23/09 */
			case ('DFFLTY20NonSMETS2TRAD'):
					this.verifyCompletedTextAppointmentListPage(this.DFFLTY20NonSMETS2SelectLinkCompleted);
					console.log('Fieldname:', fieldName);
					break;	

					// End change*******************************//	

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
				this.clickOnTheSelectLink(this.Ex20selectLink,'SelectJobTest1 EXCH20 SF SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DF17SmartCredit'):
				this.clickOnTheSelectLink(this.DF17SmartCreditselectLink,'SelectJobNMEX17');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEFLTY19'):
				this.clickOnTheSelectLink(this.SFEFLTY19selectLink,'SelectJobFAULTY 19 SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEFLTY19TRAD'):
				this.clickOnTheSelectLink(this.SFEFLTY19TRADselectLink,'SelectJobFAULTY 19 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEINST15'):
				this.clickOnTheSelectLink(this.SFEINST15selectLink,'SelectJobINST15');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFENMEX16'):
				this.clickOnTheSelectLink(this.SFENMEX16selectLink,'SelectJobNMEX16');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGFLTY18TRAD'):
				this.clickOnTheSelectLink(this.SFGFLTY18TRADselectLink,'SelectJobFAULTY 18 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGNMEX15'):
				this.clickOnTheSelectLink(this.SFGNMEX15selectLink,'SelectJobNMEX15');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DF_FLTY20_SMETS2NoExchange'):
				this.clickOnTheSelectLink(this.FLTYnoexchangeselectLink,'SelectJobFAULTY 20 SMETS2 Site FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('ERemove6'):
				this.clickOnTheSelectLink(this.Remove6selectLink,'SelectJobRMVE6 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('GRemove5'):
				this.clickOnTheSelectLink(this.RemoveGasSelectLink,'SelectJobRMVE5 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('Exchange19'):
				this.clickOnTheSelectLink(this.Ex19selectLink,'SelectJob1EXCHANGE 19 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('Exchange21'):
				this.clickOnTheSelectLink(this.selectLinkEx21,'SelectJobTest EXCH21 DF');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SF _E_FLTY19TradNoExchange'):
				this.clickOnTheSelectLink(this.flty19noExTradSelectLink,'SelectJobFAULTY 19 Trad Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFINST14'):
				this.clickOnTheSelectLink(this.SFGASINST14,'SelectJobTest1 INST14 DF SMETS');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFExchange22'):
				this.clickOnTheSelectLink(this.SFGASEx22,'SelectJobEXCHANGE 22 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;


			case ('DFFLTY20NoExch'):
				this.clickOnTheSelectLink(this.allRelevantSelectLinks,'SelectJobFAULTY 20 Non S2 site FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DFINST16'):
				this.clickOnTheSelectLink(this.Installation16,'SelectJobINST16 DF SMETS');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFElecEXCH23'):
			this.clickOnTheSelectLink(this.SFElecEXCH23Select,'SelectJobEXCHANGE 23');
			console.log('Fieldname:', selectLinkName);
			break;	
			case ('DFFLTY20SMETS2'):
				this.clickOnTheSelectLink(this.DFFLTY20SMETS2SelectLink,'SelectJobFAULTY 20 SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGasFLTY18SMETS2'):
				this.clickOnTheSelectLink(this.SFGasFLTY18SMETS2SelectLink,'SelectJobFAULTY 18 SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGasFLTY18NonSMETS2'):
				this.clickOnTheSelectLink(this.SFGasFLTY18NonSMETS2SelectLink,'SelectJobFAULTY 18 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
//********************* CGP Begin change Mater 23/09 */
			case ('DFFLTY20NonSMETS2TRAD'):
					this.clickOnTheSelectLink(this.DFFLTY20NonSMETS2SelectLink,'SelectJobFAULTY 20 Non S2');
					console.log('Fieldname:', selectLinkName);
					break;	

					// End change*******************************//
			default:
				break;
		}
	}

	//===============

	//FLTY CHANGES
	public async seeAppList() {
		await utility.wait(utility.very_low);
		await expect(this.appointmentListLab.isDisplayed());
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


	public verifyCompletedTextAppointmentListPage(workordercompleted) {
		if (workordercompleted != null) {
			workordercompleted.getText().then(function (completed) {
				console.log("find completedtext  " + completed);
			});
		}
	}

	
	
	/***
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFEFLTY19 Select Link
	 ***/

	public async clickOnTheSelectLink(workorderselectlink,xpathparam) {
		var list = workorderselectlink;

		await utility.wait(2000);
		list.count().then(function (promiseResult) {
			console.log("size is: " + promiseResult);
			var size = promiseResult; //4
			//Remove when there is one
			//var actualSize = size -1;
			console.log("size is: " + size);


			var selectlatest = element(
				by.xpath('((//span[starts-with(@id,"' + xpathparam + '")]))' + '[' + [size] + ']')
			);

			selectlatest.getText().then(function (selectText) {
				console.log("find select link text  " + selectText);
			});


			console.log("link " + ('((//span[starts-with(@id,"' + xpathparam + '")]))' + '[' + [size] + ']'));
			var selectMe = element(
				by.xpath('((//span[starts-with(@id,"' + xpathparam + '")]))' + '[' + [size] + ']')
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
	
 }

