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
	GenericPageObject
} from "../pages/GenericPage"
import {
	Utility
} from "../support/utility";
const utility: Utility = new Utility();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const Gen: GenericPageObject = new GenericPageObject();
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
	public selectLinkEx21: ElementArrayFinder;
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
	public SFGASINST14: ElementArrayFinder;
	public SFGASEx22: ElementArrayFinder;
	public appointmentListLab: ElementFinder;
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


	// Abort and Suspended links for all work orders
	public SFEINST15SuspendStatusLink: ElementArrayFinder;
	public SFEINST15AbortStatus: ElementFinder;
	public DF17SmartCreditSuspendStatusLink: ElementArrayFinder;
	public DF17SmartCreditAbortStatus: ElementFinder;
	public SFEFLTY19SuspendStatusLink: ElementArrayFinder;
	public SFEFLTY19AbortStatus: ElementFinder;
	public SFEFLTY19TRADSuspendStatusLink: ElementArrayFinder;
	public SFEFLTY19TRADAbortStatus: ElementFinder;
	public SFGFLTY18TRADSuspendStatusLink: ElementArrayFinder;
	public SFGFLTY18TRADAbortStatus: ElementFinder;
	public SFENMEX16SuspendStatusLink: ElementArrayFinder;
	public SFENMEX16AbortStatus: ElementFinder;
	public SFGNMEX15SuspendStatusLink: ElementArrayFinder;
	public SFGNMEX15AbortStatus: ElementFinder;
	public SFGEXCH19SuspendStatusLink: ElementArrayFinder;
	public SFGEXCH19AbortStatus: ElementFinder;
	public SFEEXCH20SuspendStatusLink: ElementArrayFinder;
	public SFEEXCH20AbortStatus: ElementFinder;
	public DFEXCH21SuspendStatusLink: ElementArrayFinder;
	public DFEXCH21AbortStatus: ElementFinder;
	public SFGINST14SuspendStatusLink: ElementArrayFinder;
	public SFGINST14AbortStatus: ElementFinder;
	public DFINST16SuspendStatusLink: ElementArrayFinder;
	public DFINST16AbortStatus: ElementFinder;
	public SFGEXCH22SuspendStatusLink: ElementArrayFinder;
	public SFGEXCH22AbortStatus: ElementFinder;
	public SFEEXCH23SuspendStatusLink: ElementArrayFinder;
	public SFEEXCH23AbortStatus: ElementFinder;
	public DFEXCH24SuspendStatusLink: ElementArrayFinder;
	public DFEXCH24AbortStatus: ElementFinder;
	public SFGRMVE5SuspendStatusLink: ElementArrayFinder;
	public SFGRMVE5AbortStatus: ElementFinder;
	public SFERMVE6SuspendStatusLink: ElementArrayFinder;
	public SFERMVE6AbortStatus: ElementFinder;
	public DFRMVE7SuspendStatusLink: ElementArrayFinder;
	public DFRMVE7AbortStatus: ElementFinder;
	public SFGFLTY18SuspendStatusLink: ElementArrayFinder;
	public SFGFLTY18AbortStatus: ElementFinder;
	public DFFLTY20SuspendStatusLink: ElementArrayFinder;
	public DFFLTY20AbortStatus: ElementFinder;
	public DFFLTY20TRADSuspendStatusLink: ElementArrayFinder;
	public DFFLTY20TRADAbortStatus: ElementFinder;
	// Abort and Suspended Links for all workorders

	public jobcompletionNonFLTY20: ElementArrayFinder;
	public jobcompletionEXCH24: ElementArrayFinder;
	public DFExchange24SelectLink: ElementArrayFinder;
	public jobcompletionRMVE7: ElementArrayFinder;
	//CGP added for FLTY20 TRAD 23/09

	public DFFLTY20NonSMETS2SelectLinkCompleted: ElementArrayFinder;
	//#############END################

	constructor() {

		//############ABORT Status######
		this.SFGEXCH19AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobEXCHANGE 19")]'));
		this.SFEEXCH20AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobEXCHANGE 20")]'));
		this.DFEXCH21AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobEXCHANGE 21")]'));
		this.SFGINST14AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobINST14")]'));
		this.SFEINST15AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobINST15")]'));
		this.DFINST16AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobINST16")]'));
		this.SFGEXCH22AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobEXCHANGE 22")]'));
		this.SFEEXCH23AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobEXCHANGE 23")]'));
		this.DFEXCH24AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobEXCHANGE 24")]'));
		this.SFGNMEX15AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobNMEX15")]'));
		this.SFENMEX16AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobNMEX16")]'));
		this.DF17SmartCreditAbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobNMEX17")]'));
		this.SFGRMVE5AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobRMVE5")]'));
		this.SFERMVE6AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobRMVE6")]'));
		this.DFRMVE7AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobRMVE7")]'));
		this.SFGFLTY18AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobFAULTY 18")]'));
		this.SFGFLTY18TRADAbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobFAULTY 18 Non S2)]'));
		this.SFEFLTY19AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobFAULTY 19")]'));
		this.SFEFLTY19TRADAbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobFAULTY 19 Non S2")]'));
		this.DFFLTY20AbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobFAULTY 20")]'));
		this.DFFLTY20TRADAbortStatus = element(by.xpath('//*[starts-with(@id,"AbortedJobFAULTY 20 Non S2")]'));

		//Suspend Links
		this.SFGEXCH19SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobEXCHANGE 19")]'));
		this.SFEEXCH20SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobEXCHANGE 20")]'));
		this.DFEXCH21SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobEXCHANGE 21")]'));
		this.SFGINST14SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobINST14")]'));
		this.SFEINST15SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobINST15")]'));
		this.DFINST16SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobINST16")]'));
		this.SFGEXCH22SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobEXCHANGE 22")]'));
		this.SFEEXCH23SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobEXCHANGE 23")]'));
		this.DFEXCH24SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobEXCHANGE 24")]'));
		this.SFGNMEX15SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobNMEX15")]'));
		this.SFENMEX16SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobNMEX16")]'));
		this.DF17SmartCreditSuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobNMEX17")]'));
		this.SFGRMVE5SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobRMVE5")]'));
		this.SFERMVE6SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobRMVE6")]'));
		this.DFRMVE7SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobRMVE7")]'));
		this.SFGFLTY18TRADSuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobFAULTY 18 Non S2")]'));
		this.SFGFLTY18SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobFAULTY 18")]'));
		this.SFEFLTY19SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobFAULTY 19")]'));
		this.SFEFLTY19TRADSuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobFAULTY 19 Non S2")]'));
		this.DFFLTY20SuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobFAULTY 20")]'));
		this.DFFLTY20TRADSuspendStatusLink = element.all(by.xpath('//*[starts-with(@id,"SuspendedJobFAULTY 20 Non S2")]'));

		//CGP added for Master
		//***CGP - Adding approriate select link xpath on 26/09 */
		this.Installation16 = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST16 DF SMETS2")]'));
		this.Installaton16completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));
		//
		//CGP added for SFElecEXCH23
		//***CGP - Adding approriate select link xpath on 26/09 */
		this.SFElecEXCH23Select = element.all(by.xpath('//*[starts-with(@id,"SelectJobEXCHANGE 23")]'));
		this.SFElecEXCH23Completed = element.all(by.xpath('//*[starts-with(@id,"CompletedJobEXCHANGE 23")]'));
		//
		this.jobcompletionFLTYTrads2NoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19 Trad Non S2 site FLAT")]'));
		this.jobcompletionFLTY18 = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18")]'));
		this.jobcompletionFLTY20 = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 20 SMETS2")]'));
		this.jobcompletionNonFLTY18 = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18 Non S2")]'));
		//***Aparna Das - Adding approriate select link xpath on 26/09 */
		this.Ex20selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobEXCHANGE 20 DF SMETS2")]'));
		//***Aparna Das - Adding approriate select link xpath on 26/09 */
		this.Ex19selectLink = element.all(by.xpath('(//span[starts-with(@id,"SelectJobEXCHANGE 19 FLAT")])'));
		this.Ex20continueLink = element.all(by.xpath('//span[starts-with(@id,"ContinueJobTest EXCH20 SF SMETS2"]'));
		//***Aparna Das - Adding approriate select link xpath on 26/09 */
		this.selectLinkEx21 = element.all(by.xpath('(//span[starts-with(@id,"SelectJobEXCHANGE 21 DF SMETS2")])'));
		this.selectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobTest EXCH21 DF SMETS2"]'));
		this.Remove6selectLink = element.all(by.xpath('(//span[starts-with(@id,"SelectJobRMVE6 FLAT")])'));
		this.SFGASEx22 = element.all(by.xpath('//span[starts-with(@id,"SelectJobEXCHANGE 22 FLAT")]'));
		this.RemoveGasSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobRMVE5 FLAT")]'));
		this.FLTYnoexchangeselectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 20 SMETS2 Site FLAT")]'));
		this.SFGASINST14 = element.all(by.xpath('//span[starts-with(@id,"SelectJobINST14 DF SMETS2")]'));
		this.DF17SmartCreditselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX17")]'));
		this.SFEFLTY19selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 19 SMETS2")]'));
		this.SFEFLTY19TRADselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 19 Non S2")]'));
		//***Supriya - Adding approriate select link xpath on 26/09 */
		this.SFEINST15selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST15")]'));
		this.SFENMEX16selectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobNMEX16")]'));
		this.SFGFLTY18TRADselectLink = element.all(by.xpath('//*[starts-with(@id,"SelectJobFAULTY 18")]'));
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
		//***Aparna Das - Adding approriate select link xpath on 26/09 */
		this.Ex20completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobEXCHANGE20 DF SMETS2"]'));
		this.Ex21completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobEXCHANGE21 DF SMETS2"]'));
		this.DF17SmartCreditcompletedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobNMEX17")]'));
		this.flty19noExTradSelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobFAULTY 19 Non S2")]'));
		this.Ex19completedLink = element.all(by.xpath('//span[starts-with(@id,"CompletedJobEXCHANGE 19 FLAT"]'));
		//***Aparna Das - Adding approriate select link xpath on 26/09 */
		this.selectLink2 = element.all(by.xpath('//div[contains(@id,"SelectJobEXCHANGE21 DF SMETS2")]'));
		this.appointmentListLabel = element(by.xpath('//div[@id="btn_top"]/div[2]/div'));
		this.usrname = element(by.id("input1"));
		this.password = element(by.id("input2"));
		this.loginbtn = element(by.id("submitbutton"));
		this.arriveBtn = element(by.id('btn_arrive'));

		//CGP added for Master
		//***CGP - Adding approriate select link xpath on 26/09 */
		this.Installation16 = element.all(by.xpath('//*[starts-with(@id,"SelectJobINST16 DF SMETS2")]'));
		this.Installaton16completedLink = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));

		//CGP added for SFElecEXCH23

		this.SFElecEXCH23Select = element.all(by.xpath('//*[starts-with(@id,"SelectJobEXCHANGE 23")]'));
		this.SFElecEXCH23Completed = element.all(by.xpath('//*[starts-with(@id,"CompletedJobINST16")]'));

		//CGP added to Master 23/09 for FLTY20 TRAD complete link

		this.DFFLTY20NonSMETS2SelectLinkCompleted = element.all(by.xpath('//span[starts-with(@id,"CompletedJobFAULTY 20 Non S2")]'));

		//Jansi Added
		this.jobcompletionNonFLTY20 = element.all(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY Non S2")]'));
		this.jobcompletionEXCH24 = element.all(by.xpath('//*[starts-with(@id,"CompletedJobEXCHANGE 24")]'));
		this.DFExchange24SelectLink = element.all(by.xpath('//span[starts-with(@id,"SelectJobEXCHANGE 24")]'));
		this.jobcompletionRMVE7 = element.all(by.xpath('//*[starts-with(@id,"CompletedJobRMVE7 ")]'));

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

			case ('DFFLTY20NonSMETS2'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionNonFLTY20);
				console.log('Fieldname:', fieldName);
				break;

			case ('DFExchange24'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionEXCH24);
				console.log('Fieldname:', fieldName);
				break;

			case ('DFRMVE7'):
				this.verifyCompletedTextAppointmentListPage(this.jobcompletionRMVE7);
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
	 * @description Correct Suspended Link clicked
	***/
	public async clickCorrectSuspendedLink(suspendedLinkName) {
		var suspendedLinkName;

		switch (suspendedLinkName) {
			case ('SFGEXCH19'):
				this.clickOnTheSelectLink(this.SFGEXCH19SuspendStatusLink, 'SuspendedJobEXCHANGE 19');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFEEXCH20'):
				this.clickOnTheSelectLink(this.SFEEXCH20SuspendStatusLink, 'SuspendedJobEXCHANGE 20');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DFEXCH21'):
				this.clickOnTheSelectLink(this.DFEXCH21SuspendStatusLink, 'SuspendedJobEXCHANGE 21');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFGINST14'):
				this.clickOnTheSelectLink(this.SFGINST14SuspendStatusLink, 'SuspendedJobINST14');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFEINST15'):
				this.clickOnTheSelectLink(this.SFEINST15SuspendStatusLink, 'SuspendedJobINST15');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DFINST16'):
				this.clickOnTheSelectLink(this.DFINST16SuspendStatusLink, 'SuspendedJobINST16');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFGEXCH22'):
				this.clickOnTheSelectLink(this.SFGEXCH22SuspendStatusLink, 'SuspendedJobEXCHANGE 22');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFEEXCH23'):
				this.clickOnTheSelectLink(this.SFEEXCH23SuspendStatusLink, 'SuspendedJobEXCHANGE 23');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DFEXCH24'):
				this.clickOnTheSelectLink(this.DFEXCH24SuspendStatusLink, 'SuspendedJobEXCHANGE 24');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFGNMEX15'):
				this.clickOnTheSelectLink(this.SFGNMEX15SuspendStatusLink, 'SuspendedJobNMEX15');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFENMEX16'):
				this.clickOnTheSelectLink(this.SFENMEX16SuspendStatusLink, 'SuspendedJobNMEX16');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DF17SmartCredit'):
				this.clickOnTheSelectLink(this.DF17SmartCreditSuspendStatusLink, 'SuspendedJobNMEX17');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFGRMVE5'):
				this.clickOnTheSelectLink(this.SFGRMVE5SuspendStatusLink, 'SuspendedJobRMVE5');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFERMVE6'):
				this.clickOnTheSelectLink(this.SFERMVE6SuspendStatusLink, 'SuspendedJobRMVE6');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DFRMVE7'):
				this.clickOnTheSelectLink(this.DFRMVE7SuspendStatusLink, 'SuspendedJobRMVE7');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFGFLTY18'):
				this.clickOnTheSelectLink(this.SFGFLTY18SuspendStatusLink, 'SuspendedJobFAULTY 18');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFGFLTY18TRAD'):
				this.clickOnTheSelectLink(this.SFGFLTY18TRADSuspendStatusLink, 'SuspendedJobFAULTY 18 Non S2');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFEFLTY19'):
				this.clickOnTheSelectLink(this.SFEFLTY19SuspendStatusLink, 'SuspendedJobFAULTY 19');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('SFEFLTY19TRAD'):
				this.clickOnTheSelectLink(this.SFEFLTY19TRADSuspendStatusLink, 'SuspendedJobFAULTY 19 Non S2');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DFFLTY20'):
				this.clickOnTheSelectLink(this.DFFLTY20SuspendStatusLink, 'SuspendedJobFAULTY 20');
				console.log('Fieldname:', suspendedLinkName);
				break;
			case ('DFFLTY20TRAD'):
				this.clickOnTheSelectLink(this.DFFLTY20TRADSuspendStatusLink, 'SuspendedJobFAULTY 20 Non S2');
				console.log('Fieldname:', suspendedLinkName);
				break;
			default:
				console.log('Fieldname:', suspendedLinkName);
				break;
		}
	}


	/***
	 * @description Correct Select Link clicked
	***/
	public clickCorrectSelectLink(selectLinkName) {
		var selectLinkName;
		switch (selectLinkName) {
			//***Aparna Das - Adding approriate select link xpath 26/09 */
			case ('Exchange20'):
				this.clickOnTheSelectLink(this.Ex20selectLink, 'SelectJobEXCHANGE 20 DF SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DF17SmartCredit'):
				this.clickOnTheSelectLink(this.DF17SmartCreditselectLink, 'SelectJobNMEX17');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEFLTY19'):
				this.clickOnTheSelectLink(this.SFEFLTY19selectLink, 'SelectJobFAULTY 19 SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEFLTY19TRAD'):
				this.clickOnTheSelectLink(this.SFEFLTY19TRADselectLink, 'SelectJobFAULTY 19 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFEINST15'):
				this.clickOnTheSelectLink(this.SFEINST15selectLink, 'SelectJobINST15 DF SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFENMEX16'):
				this.clickOnTheSelectLink(this.SFENMEX16selectLink, 'SelectJobNMEX16');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGFLTY18TRAD'):
				this.clickOnTheSelectLink(this.SFGFLTY18TRADselectLink, 'SelectJobFAULTY 18 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGNMEX15'):
				this.clickOnTheSelectLink(this.SFGNMEX15selectLink, 'SelectJobNMEX15');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DF_FLTY20_SMETS2NoExchange'):
				this.clickOnTheSelectLink(this.FLTYnoexchangeselectLink, 'SelectJobFAULTY 20 SMETS2 Site FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('ERemove6'):
				this.clickOnTheSelectLink(this.Remove6selectLink, 'SelectJobRMVE6 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('GRemove5'):
				this.clickOnTheSelectLink(this.RemoveGasSelectLink, 'SelectJobRMVE5 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			//***Aparna Das - Adding approriate select link xpath 26/09 */
			case ('Exchange19'):
				this.clickOnTheSelectLink(this.Ex19selectLink, 'SelectJobEXCHANGE 19 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			//***Aparna Das - Adding approriate select link xpath 26/09 */
			case ('Exchange21'):
				this.clickOnTheSelectLink(this.selectLinkEx21, 'SelectJobEXCHANGE 21 DF SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SF_E_FLTY19TradNoExchange'):
				this.clickOnTheSelectLink(this.flty19noExTradSelectLink, 'SelectJobFAULTY 19 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			//***Aparna Das - Adding approriate select link xpath 26/09 */
			case ('SFINST14'):
				this.clickOnTheSelectLink(this.SFGASINST14, 'SelectJobINST14 DF SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFExchange22'):
				this.clickOnTheSelectLink(this.SFGASEx22, 'SelectJobEXCHANGE 22 FLAT');
				console.log('Fieldname:', selectLinkName);
				break;


			case ('DFFLTY20NoExch'):
				this.clickOnTheSelectLink(this.allRelevantSelectLinks, 'SelectJobFAULTY 20 Non S2 site FLAT');
				console.log('Fieldname:', selectLinkName);
				break;
			//***CGP - Adding approriate select link xpath on 26/09 */
			case ('DFINST16'):
				this.clickOnTheSelectLink(this.Installation16, 'SelectJobINST16 DF SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFElecEXCH23'):
				this.clickOnTheSelectLink(this.SFElecEXCH23Select, 'SelectJobEXCHANGE 23');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DFFLTY20SMETS2'):
				this.clickOnTheSelectLink(this.DFFLTY20SMETS2SelectLink, 'SelectJobFAULTY 20 SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGasFLTY18SMETS2'):
				this.clickOnTheSelectLink(this.SFGasFLTY18SMETS2SelectLink, 'SelectJobFAULTY 18 SMETS2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('SFGasFLTY18NonSMETS2'):
				this.clickOnTheSelectLink(this.SFGasFLTY18NonSMETS2SelectLink, 'SelectJobFAULTY 18 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DFFLTY20NonSMETS2'):
				this.clickOnTheSelectLink(this.DFFLTY20NonSMETS2SelectLink, 'SelectJobFAULTY 20 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DFExchange24'):
				this.clickOnTheSelectLink(this.DFExchange24SelectLink, 'SelectJobEXCHANGE 24');
				console.log('Fieldname:', selectLinkName);
				break;
			case ('DFRMVE7'):
				this.clickOnTheSelectLink(this.DFRMVE7SelectLink, 'SelectJobRMVE7 ');
				console.log('Fieldname:', selectLinkName);
				break;
			//********************* CGP Begin change Mater 23/09 */
			case ('DFFLTY20NonSMETS2TRAD'):
				this.clickOnTheSelectLink(this.DFFLTY20NonSMETS2SelectLink, 'SelectJobFAULTY 20 Non S2');
				console.log('Fieldname:', selectLinkName);
				break;
			// End change*******************************//
			default:
				break;
		}
	}


	/***
	 * @description Verify Aborted status is displayed
	***/

	public verifyAbortedStatus(fieldName) {
		var fieldName;
		switch (fieldName) {
			case ('SFGEXCH19'):
				this.verifyAbortedTextAppointmentListPage(this.SFGEXCH19AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEEXCH20'):
				this.verifyAbortedTextAppointmentListPage(this.SFEEXCH20AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFEXCH21'):
				this.verifyAbortedTextAppointmentListPage(this.DFEXCH21AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGINST14'):
				this.verifyAbortedTextAppointmentListPage(this.SFGINST14AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEINST15'):
				this.verifyAbortedTextAppointmentListPage(this.SFEINST15AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFINST16'):
				this.verifyAbortedTextAppointmentListPage(this.DFINST16AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGEXCH22'):
				this.verifyAbortedTextAppointmentListPage(this.SFGEXCH22AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEEXCH23'):
				this.verifyAbortedTextAppointmentListPage(this.SFEEXCH23AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFEXCH24'):
				this.verifyAbortedTextAppointmentListPage(this.DFEXCH24AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGNMEX15'):
				this.verifyAbortedTextAppointmentListPage(this.SFGNMEX15AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFENMEX16'):
				this.verifyAbortedTextAppointmentListPage(this.SFENMEX16AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DF17SmartCredit'):
				this.verifyAbortedTextAppointmentListPage(this.DF17SmartCreditAbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGRMVE5'):
				this.verifyAbortedTextAppointmentListPage(this.SFGRMVE5AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFERMVE6'):
				this.verifyAbortedTextAppointmentListPage(this.SFERMVE6AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFRMVE7'):
				this.verifyAbortedTextAppointmentListPage(this.DFRMVE7AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGFLTY18'):
				this.verifyAbortedTextAppointmentListPage(this.SFGFLTY18AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFGFLTY18TRAD'):
				this.verifyAbortedTextAppointmentListPage(this.SFGFLTY18TRADAbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEFLTY19'):
				this.verifyAbortedTextAppointmentListPage(this.SFEFLTY19AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('SFEFLTY19TRAD'):
				this.verifyAbortedTextAppointmentListPage(this.SFEFLTY19TRADAbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFFLTY20'):
				this.verifyAbortedTextAppointmentListPage(this.DFFLTY20AbortStatus);
				console.log('Fieldname:', fieldName);
				break;
			case ('DFFLTY20TRAD'):
				this.verifyAbortedTextAppointmentListPage(this.DFFLTY20TRADAbortStatus);
				console.log('Fieldname:', fieldName);
				break;



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

	public verifyAbortedTextAppointmentListPage(workorderAborted) {
		if (workorderAborted != null) {
			workorderAborted.getText().then(function (Aborted) {
				console.log("find Abortedtext  " + Aborted);
			});
		}
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Click on the correct SFEFLTY19 Select Link
	 ***/

	public async clickOnTheSelectLink(workorderselectlink, xpathparam) {
		var list = workorderselectlink;

		await utility.wait(utility.Avg_low);
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
			utility.wait(utility.medium);
			selectMe.getText().then(function (selectMeText) {
				console.log("find select Me link text  " + selectMeText);
			});
			if (
				selectMe.isDisplayed()

			) {
				Gen.SelectLinkClick(selectMe);

			};

		});
	};


}

