import {
	browser,
	element,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";

import { Utility } from "../support/utility";
import { GenericPageObject } from "./GenericPage";
import { watchFile } from "fs";
import {
	Alert
} from 'selenium-webdriver';

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const Gen: GenericPageObject = new GenericPageObject();

export class JobCompletionPageObject {



	public installPPMIDText: ElementFinder;
	public PPMIDOfferedYes: ElementFinder;
	public PPMIDAccepted: ElementFinder;
	public PPMIDLOCDD: ElementFinder;
	public PPMIDToInstall: ElementFinder;
	public inputPPMIDSerialNum: ElementFinder;
	public infoOKButton: ElementFinder;
	public PPMIDTxt: ElementFinder;
	public ppmidAdditionalNote: ElementFinder;
	public ppmidNXTBtn: ElementFinder;
	public sendMsgPPMID: ElementFinder;
	public ppmidCommSuccess: ElementFinder;
	public diviceBindingTxt: ElementFinder;
	public gasMeterPairedYes: ElementFinder;
	public FUlHANYes: ElementFinder;
	public IHDPairedYes: ElementFinder;
	public BindingAddNotes: ElementFinder;
	public configAllMeterText: ElementFinder;
	public FullWANYes: ElementFinder;
	public FullCOnfigAppliedElecYes: ElementFinder;
	public fullConfigAppliedGasYes: ElementFinder;
	public fullConfigAppliedPPMIDYes: ElementFinder;
	public capturePPMIDBtn: ElementFinder;
	public PPMIDNxtBtn: ElementFinder;
	public energyEffProvidedYes: ElementFinder;
	public energyEffDocLeftYes: ElementFinder;
	public isCustHappyYes: ElementFinder;
	public AdditionalEEInfoReqYes: ElementFinder;
	public EENxtBtn: ElementFinder;
	public smartEducationText: ElementFinder;
	public smartLetLeftYes: ElementFinder;
	public HelpandInfoYEs: ElementFinder;
	public DemoOfEquipmentYes: ElementFinder;
	public PPMIDCommisioningText: ElementFinder;
	public SummaryTxt: ElementFinder;
	public SummaryPageContent: ElementFinder;
	public PotentialCustIdenYes: ElementFinder;
	public custAgreementInfoYes: ElementFinder;
	public captureCustSignTxt: ElementFinder;
	public signedbyCustorRepDD: ElementFinder;
	public custRefusedToSignNo: ElementFinder;
	public jobCompleteBtn: ElementFinder;
	public PPMIDinstallDDList: ElementFinder;
	public EEInfoDiplay: ElementFinder;
	public EEUIDText: ElementFinder;
	public DeviceNxtBtn: ElementFinder;
	public fullEx20ConfigAppliedGasYes: ElementFinder;
	public eSign: ElementFinder;
	public custSignText: ElementFinder;
	public AppointmentText: ElementFinder;

	//JANSI CHANGES 


	public jobcompletionFLTYNoExchange: ElementFinder;
	public jobcompletionFLTYTrads2NoExchange: ElementFinder;
	public installcommsHub: ElementFinder;
	public commshubReqY: ElementFinder;
	public selectValid: ElementFinder;
	public selectValidnewgas: ElementFinder;
	public commshubWarning: ElementFinder;
	public CHFIDText: ElementFinder;
	public assetSuccessAdded: ElementFinder;
	public commsHubLocation: ElementFinder;
	public Assetserialsmatchnext: ElementFinder;
	public fullconfigIHDPPMID: ElementFinder;

	public deviceBindingCap: ElementFinder;
	public ESMEJoinedY: ElementFinder;
	public deviceOK: ElementFinder;
	public GSMEJoined: ElementFinder;
	public configIHDPPMID: ElementFinder;
	public joinedcapture: ElementFinder;
	public deviceNext: ElementFinder;
	public signaturepadCanvas: ElementFinder;

	public EnergyeffCap: ElementFinder;
	public energyeffinfoProvided: ElementFinder;
	public EngeffDocLeft: ElementFinder;
	public IsCustomerhappy: ElementFinder;
	public additionaleneinfoReq: ElementFinder;
	public EnergyeffNext: ElementFinder;

	public smartEducationCap: ElementFinder;
	public smartLtionsite: ElementFinder;
	public custaddnlhelpinfo: ElementFinder;
	public IsCDemoofequipmentcomp: ElementFinder;
	public smartLitLeftCap: ElementFinder;
	public potentialcustVulnerability: ElementFinder;
	public customeraggreementtoInfo: ElementFinder;
	public capturecustsignature: ElementFinder;
	public smartLitLeftOnsiteTxt: ElementFinder;

	public custrefusedtoSign: ElementFinder;
	public signedbycustorRep: ElementFinder;
	public jobCompletesub: ElementFinder;
	public signpad: ElementFinder;
	public jobcompletion: ElementFinder;

	public summaryCap: ElementFinder;
	public TST12jobcompletion: ElementFinder;
	public installsubmission: ElementFinder;
	public installPPMIDText1: ElementFinder;
	public PPMIDOfferedYes1: ElementFinder;
	public PPMIDAccepted1: ElementFinder;
	public PPMIDLOCDD1: ElementFinder;
	public PPMIDToInstall1: ElementFinder;
	public inputPPMIDSerialNum1: ElementFinder;
	public infoOKButton1: ElementFinder;
	public PPMIDTxt1: ElementFinder;
	public ppmidAdditionalNote1: ElementFinder;
	public ppmidNXTBtn1: ElementFinder;
	public PPMIDinstallDDList1: ElementFinder;

	public esmeJoinedYes: ElementFinder;
	public gsmeJoinedYes: ElementFinder;
	public fullconfigAppliedYes: ElementFinder;
	public capturePhotoAsset: ElementFinder;
	public nextButtonEff: ElementFinder;
	public energyEfficiencyTxt: ElementFinder;
	public PPMIDinstallDDListINST15: ElementFinder;
	public dummydiv1: ElementFinder;
	public devicebindingNext: ElementFinder;
	public FullWANYesINST15: ElementFinder;
	public FullCOnfigAppliedElecYesINST15: ElementFinder;
	public fullConfigAppliedPPMIDYesINST15: ElementFinder;
	public IsCDemoofequipmentcompN: ElementFinder;
	public smartLtionsiteN: ElementFinder;
	public custaddnlhelpinfoN: ElementFinder;
	public TST22jobcompletion: ElementFinder;
	public TST13jobcompletion: ElementFinder;
	public TST15jobcompletion: ElementFinder;
	public TST01jobcompletion: ElementFinder;
	public TST28jobcompletion: ElementFinder;
	public configAllMeterTextin16: ElementFinder;
	public PPMIDCommText: ElementFinder;
	public PPMIDSendMessageButton: ElementFinder;
	public PPMIDComSuccessButton: ElementFinder;
	public deviceBindingNextSecButton: ElementFinder;
	public checkDetailsAlertButton: ElementFinder;
	public smartEduNextButton: ElementFinder;
	public nextButtonWAN: ElementFinder;



	constructor() {

		//CGP install 16 Changes Added to Master 22/09

		this.configAllMeterTextin16 = element(by.xpath('//div/h4[text()="Configure All Meters Installed (Includes Gas & Elec)"]'));


		//JANSI CHANGES

		//#region Install Comms Hub
		this.PPMIDinstallDDListINST15 = element(by.xpath('//select[@id="ihdscan2_assetSelect"]/option[2]'));
		this.dummydiv1 = element(by.xpath('(//div/h3[text()="Scan Barcode Using Device Hardware Button"])[1]'));

		this.deviceBindingCap = element(by.xpath('//div/h4[text()="Device Binding & Commissioning"]'));
		this.ESMEJoinedY = element(by.xpath('//*[@id="dbc2_esme_joined_y"]/span[@class="outer"]'));
		this.deviceOK = element(by.xpath('//*[text()="OK"]'));
		this.GSMEJoined = element(by.xpath('//input[@id="dbc2_gsme_joined_y"]/following-sibling::span[@class="cr"]'));
		this.configIHDPPMID = element(by.xpath('//input[@id="dbc2_full_config_y"]/following-sibling::span[@class="cr"]'));
		this.joinedcapture = element(by.xpath('//*[@id="dbc2_capture_photo_joined"]'));
		this.deviceNext = element(by.xpath('//button[@id="dbc2_btnNextEff"]'));
		this.PPMIDCommisioningText = element(by.xpath('//*[@id="Title_xittd2"]'));
		this.signaturepadCanvas = element(by.xpath('//*[@id="signaturePad"]'))

		this.EnergyeffCap = element(by.xpath('//div/h4[text()="Energy Efficiency Information"]'));
		this.energyeffinfoProvided = element(by.xpath('//*[@id="rb_EngEffInfoP_y"]/span[@class="outer"]'));
		this.EngeffDocLeft = element(by.xpath('//*[@id="rb_EngEffDocleft_y"]/span[@class="outer"]'));
		this.IsCustomerhappy = element(by.xpath('//*[@id="rb_IsCusHap_y"]/span[@class="outer"]'));
		this.additionaleneinfoReq = element(by.xpath('//*[@id="rb_AddEEInfo_y"]/span[@class="outer"]'));
		this.EnergyeffNext = element(by.xpath('//*[@id="btn_Next_Eff"]'));

		this.smartEducationCap = element(by.xpath('//div/h4[text()="Smart Education"]'));
		this.smartLtionsite = element(by.xpath('//*[@id="radiose3"]/span[@class="outer"]'));
		this.custaddnlhelpinfo = element(by.xpath('//*[@id="smicopAddInfoCheckboxYes"]/span[@class="outer"]'));
		this.IsCDemoofequipmentcomp = element(by.xpath('//*[@id="radiose7"]/span[@class="outer"]'));

		this.smartLitLeftCap = element(by.xpath('//div/h4[contains(text(),"Smart Literature Left on Site")]'));
		this.potentialcustVulnerability = element(by.xpath('//*[@id="rb_PotVulCusIden_y"]/span[@class="outer"]'));
		this.customeraggreementtoInfo = element(by.xpath('//*[@id="rb_CustAgrInf_y"]/span[@class="outer"]'));
		this.capturecustsignature = element(by.xpath('//div/h4[text()="Capture Customer Signature"]'));

		this.signedbycustorRep = element(by.xpath('//select[@id="cbx_SigByCus_sel"]'));
		this.custrefusedtoSign = element(by.xpath('//*[@id="rb_CusRefSig_n"]/following-sibling::span[@class="outer"]'));

		this.jobCompletesub = element(by.xpath('//*[@id="btn_Comp_submit"]'));
		this.signpad = element(by.xpath('//*[@id="signaturePad"]'));

		this.jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJob4JFAULTY 20")]'));

		this.jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJob1JFAULTY 20")]'));

		this.summaryCap = element(by.xpath('//div/h4[contains(text(),"SUMMARY")]'));
		this.TST12jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJob1JFAULTY 18")]'));


		//APARNA CHANGES
		this.AppointmentText = element(by.xpath('(//*[@id="btn_top"]/div[2]/div)[1]'));
		this.installPPMIDText = element(by.xpath('//*[@id="Title_ihdscan"]'));
		this.PPMIDOfferedYes = element(by.xpath('//*[@id="ihdscan2_ihdPpmidOfferedtrue"]'));
		this.PPMIDAccepted = element(by.xpath('//*[@id="ihdscan2_ihdOrPPMIDAccepted_a"]'));
		this.PPMIDLOCDD = element(by.xpath('//*[@id="ihdscan2_assetLocationSelect"]'));
		this.PPMIDToInstall = element(by.xpath('//*[@id="ihdscan2_assetSelect"]'));
		this.inputPPMIDSerialNum = element(by.xpath('//*[@id="ihdscan2_assetSerialNumber"]'));
		this.infoOKButton = element(by.xpath('//div/button[text()="OK"]'));
		this.PPMIDTxt = element(by.xpath('//div[text()=" Select Valid PPMID To Install: "]'));
		this.ppmidAdditionalNote = element(by.xpath('//*[@id="ihdscan2_additionalNotes"]'));
		this.ppmidNXTBtn = element(by.xpath('//*[@id="ihdscan2_nextButton"]'));
		this.sendMsgPPMID = element(by.xpath('//*[@id="xittd2_sendMessageButton"]'));
		this.ppmidCommSuccess = element(by.xpath('//*[@id="xittd2_nextButton"]'));
		this.diviceBindingTxt = element(by.xpath('//div/h4[text()="Device Binding & Commissioning"]'));
		this.gasMeterPairedYes = element(by.xpath('//*[@id="rb_GasElecMPairSuc_y"]'));
		this.FUlHANYes = element(by.xpath('//*[@id="rb_FulHANEst_y"]'));
		this.IHDPairedYes = element(by.xpath('//*[@id="rb_IHDPaiSucc_y"]'));
		this.BindingAddNotes = element(by.className('notes ng-pristine ng-valid ng-touched'));
		this.configAllMeterText = element(by.xpath('//*[@id="TITLE_CFigAllMetInst"]'));
		this.FullWANYes = element(by.xpath('//*[@id="rb_FulWANEst_y"]'));
		this.FullCOnfigAppliedElecYes = element(by.xpath('//*[@id="rb_FullCFigE_y"]'));
		this.fullConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
		this.fullEx20ConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
		this.fullConfigAppliedPPMIDYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[2]'));
		this.capturePPMIDBtn = element(by.xpath('//div/button[@class="cameraBtn2line grey mandatoryWhite"]'));
		this.PPMIDNxtBtn = element(by.xpath('//div/button[@id="btnNextEff"]'));
		this.energyEffProvidedYes = element(by.xpath('//*[@id="rb_EngEffInfoP_y"]'));
		this.energyEffDocLeftYes = element(by.xpath('//*[@id="rb_EngEffDocleft_y"]'));
		this.isCustHappyYes = element(by.xpath('//*[@id="rb_IsCusHap_y"]'));
		this.AdditionalEEInfoReqYes = element(by.xpath('//*[@id="rb_AddEEInfo_y"]'));
		this.EENxtBtn = element(by.xpath('//*[@id="btn_Next_Eff"]'));
		this.smartEducationText = element(by.xpath('//*[@id="Title_SmartEd"]'));
		this.smartLetLeftYes = element(by.xpath('//*[@id="radiose3"]'));
		this.HelpandInfoYEs = element(by.xpath('//*[@id="smicopAddInfoCheckboxYes"]'));
		this.DemoOfEquipmentYes = element(by.xpath('//*[@id="radiose7"]'));
		this.SummaryTxt = element(by.xpath('//*[@id="Title_Summary"]'));
		this.SummaryPageContent = element(by.className('collapse in'));
		this.PotentialCustIdenYes = element(by.xpath('//*[@id="rb_PotVulCusIden_y"]'));
		this.custAgreementInfoYes = element(by.xpath('//*[@id="rb_CustAgrInf_y"]'));
		this.captureCustSignTxt = element(by.xpath('//*[@id="lbl_CapCus_Sig"]'));
		this.signedbyCustorRepDD = element(by.xpath('//*[@id="cbx_SigByCus_sel"]'));
		this.custRefusedToSignNo = element(by.xpath('//input[@id="rb_CusRefSig_n"]/following-sibling::span[@class="outer"]'));
		this.jobCompleteBtn = element(by.xpath('//*[@id="btn_Comp_submit"]'));
		this.PPMIDinstallDDList = element(by.xpath('(//select[@id="ihdscan2_assetSelect"]/option)[2]'));
		this.EEInfoDiplay = element(by.xpath('//*[@id="lbl_EnEff_info"]'));
		this.EEUIDText = element(by.xpath('//div[text()="EUI Device ID:"]'));
		this.DeviceNxtBtn = element(by.xpath('//div/button[@id="dbc2_trad_btnNextEff"]'));
		this.eSign = element(by.xpath('//*[@id="signaturePad"]'));
		this.custSignText = element(by.xpath('//div[text()="Customer Signature"]'));
		this.jobcompletionFLTYNoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 20 SMETS2 Site FLAT")]'));
		this.jobcompletionFLTYTrads2NoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19 Trad Non S2 site FLAT")]'));

		this.smartLitLeftOnsiteTxt = element(by.xpath('//h4[contains(text(),"Smart Literature Left on Site")]'));
		this.installsubmission = element(by.xpath('//*[@id="btn1"]'));

		//Supriya Changes
		this.installPPMIDText1 = element(by.xpath('//*[@id="Title_newihdppmid"]'));
		this.PPMIDOfferedYes1 = element(by.xpath('//*[@id="newihdppmid_ihdPpmidOfferedtrue"]'));
		this.PPMIDAccepted1 = element(by.xpath('//*[@id="newihdppmid_ihdOrPPMIDAccepted_a"]'));
		this.PPMIDLOCDD1 = element(by.xpath('//*[@id="newihdppmid_assetLocationSelect"]'));
		this.PPMIDToInstall1 = element(by.xpath('//*[@id="newihdppmid_assetSelect"]'));
		this.inputPPMIDSerialNum1 = element(by.xpath('//*[@id="newihdppmid_assetSerialNumber"]'));
		this.infoOKButton1 = element(by.xpath('//div/button[@class="confirm"]'));
		this.PPMIDTxt1 = element(by.xpath('//div[text()=" Select Valid PPMID To Install: "]'));
		this.ppmidAdditionalNote1 = element(by.xpath('//*[@id="newihdppmid_additionalNotes"]'));
		this.ppmidNXTBtn1 = element(by.xpath('//*[@id="newihdppmid_nextButton"]'));
		this.PPMIDinstallDDList1 = element(by.xpath('(//select[@id="newihdppmid_assetSelect"]/option)[2]'));
		this.esmeJoinedYes = element(by.xpath('//*[@id="dbc2_esme_joined_y"]'));
		this.gsmeJoinedYes = element(by.xpath('//*[@id="dbc2_gsme_joined_y"]'));
		this.fullconfigAppliedYes = element(by.xpath('//*[@id="dbc2_full_config_y"]'));
		this.capturePhotoAsset = element(by.xpath('//*[@id="dbc2_capture_photo_joined"]'));
		this.nextButtonEff = element(by.xpath('//*[@id="dbc2_btnNextEff"]'));
		this.devicebindingNext = element(by.xpath('//*[@id="dbc2_trad_btnNextEff"]'));
		this.FullWANYesINST15 = element(by.xpath('//input[@id="rcfg1"]//following-sibling::span[@class="outer"]'));
		this.FullCOnfigAppliedElecYesINST15 = element(by.xpath('//label[@id="rb_FullCFigE_y"]//following-sibling::span[@class="outer"]'));
		this.fullConfigAppliedPPMIDYesINST15 = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
		this.PPMIDCommText = element(by.xpath('//*[@id="Title_xittd2"]'));
		this.PPMIDSendMessageButton = element(by.xpath('//*[@id="xittd2_sendMessageButton"]'));
		this.PPMIDComSuccessButton = element(by.xpath('//*[@id="xittd2_nextButton"]'));
		this.deviceBindingNextSecButton = element(by.xpath('//*[@id="dbc2_trad_btnNextEff"]'));
		this.checkDetailsAlertButton = element(by.xpath('//button[@class = "confirm"]'));
		this.smartEduNextButton = element(by.xpath('//*[@id="btnNextComm"]'));
		this.gasMeterPairedYes = element(by.xpath('//*[@id="rb_GasElecMPairSuc_y"]'));
		this.nextButtonWAN = element(by.xpath('//*[@id="btnNextEff"]'));
		this.jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJobNCG3")]'));
		this.energyEfficiencyTxt = element(by.xpath('//div/h4[text()="Energy Efficiency Information"]'));

		//CGP install 16 Changes Added to Master 22/09

		this.configAllMeterTextin16 = element(by.xpath('//div/h4[text()="Configure All Meters Installed (Includes Gas & Elec)"]'));



		this.energyEfficiencyTxt = element(by.xpath('//div/h4[text()="Energy Efficiency Information"]'));

		//Master Update

		this.smartLtionsiteN = element(by.xpath('//*[@id="radiose4"]/span[@class="outer"]'));
		this.custaddnlhelpinfoN = element(by.xpath('//*[@id="smicopAddInfoCheckboxNo"]/span[@class="outer"]'));
		this.IsCDemoofequipmentcompN = element(by.xpath('//*[@id="radiose8"]/span[@class="outer"]'));
		this.TST01jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 20 SMETS2")]'));
		this.TST12jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 18 SMETS2")]'));
		this.TST13jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedFAULTY 20 Non S2")]'));
		this.TST15jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedFAULTY 18 Non S2")]'));
		this.TST22jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJobEXCHANGE 24")]'));
		this.TST28jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJobRMVE7 ")]'));
	}

	public async sendPPMIDmessageSection() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sendMsgPPMID, utility.medium);
		await utility.wait(utility.high);
			Gen.ButtonClick(this.ppmidCommSuccess, utility.medium);
	}

	public async fillConfigAllmeter_INST15() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYesINST15, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullCOnfigAppliedElecYesINST15, utility.medium);
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedPPMIDYesINST15, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePPMIDBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PPMIDNxtBtn, utility.medium);
		await utility.wait(utility.medium);

	}


	public async fillEEInfo_INST15() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.energyEffProvidedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.energyEffDocLeftYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.isCustHappyYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.AdditionalEEInfoReqYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.EENxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async installSubmit() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.installsubmission, utility.medium);

	}

	public async fillDeviceBindingSection_INST15() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IHDPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FUlHANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.devicebindingNext, utility.medium);

	}


	//TST13 FLTY20

	public async Tst13fillfield55duelsmartedu() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.smartLtionsiteN, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custaddnlhelpinfoN, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IsCDemoofequipmentcompN, utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description PPMID section text display
	 ***/
	public async PPMIDSectiondispaly() {
		if (this.installPPMIDText.isDisplayed()) {
			await this.installPPMIDText.getText().then(function (installPPMID) {
				console.log("find installPPMID Text  " + installPPMID);
			});
		}
	}

	/***
	 * @Author Supriya Harikumar
	 * @description PPMID section text display
	 ***/
	public async PPMIDSectiondispalyDF17() {
		if (this.installPPMIDText1.isDisplayed()) {
			await this.installPPMIDText1.getText().then(function (installPPMID) {
				console.log("find installPPMID Text  " + installPPMID);
			});
		}
	}

	// Check again revisit
	public async fillPPMIDSection_INST15(index: number) {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDOfferedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDAccepted, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.PPMIDLOCDD, utility.medium, 'B');
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.PPMIDToInstall, utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index)
			await this.PPMIDToInstall.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			await expect(await this.inputPPMIDSerialNum.isDisplayed());
			var options = this.PPMIDinstallDDListINST15.getAttribute('value');
			await utility.wait(utility.medium);
			Gen.SendKeys(this.inputPPMIDSerialNum, utility.medium, options);
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.ppmidNXTBtn, utility.medium);
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.infoOKButton, utility.medium);
			await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.ppmidAdditionalNote, utility.medium, 'Additonal Notes');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ppmidNXTBtn, utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description Fill PPMID section
	 ***/
	public async fillPPMIDSection(index: number) {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDOfferedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDAccepted, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.PPMIDLOCDD, utility.medium, 'B');


		
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.PPMIDToInstall, utility.medium);
			browser.sleep(1000);
			//index = index ;
			console.log("Selecting element based index : " + index);
			// select the option
			await this.PPMIDToInstall.element(by.css("option:nth-child(" + index + ")")).click()

			await expect(await this.inputPPMIDSerialNum.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.PPMIDinstallDDList.getAttribute('value');
			await utility.wait(utility.medium);
			Gen.SendKeys(this.inputPPMIDSerialNum, utility.medium, options);

			await utility.wait(utility.medium);
			await this.PPMIDToInstall.element(by.css("option:nth-child(" + index + ")")).click()

			await utility.wait(utility.medium);
			Gen.ButtonClick(this.infoOKButton, utility.medium);

		

		await utility.wait(utility.medium);
		Gen.SendKeys(this.ppmidAdditionalNote, utility.medium, 'Additonal Notes');

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ppmidNXTBtn, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sendMsgPPMID, utility.medium);
		await utility.wait(utility.medium);

	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill PPMID section
	 ***/
	public async fillPPMIDSectionDF17(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PPMIDOfferedYes1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PPMIDAccepted1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.PPMIDLOCDD1, utility.medium, 'B');
		await utility.wait(utility.medium);

		await utility.wait(utility.medium);
			await utility.wait(utility.medium);

			Gen.ButtonClick(this.PPMIDToInstall1, utility.medium);
			browser.sleep(1000)

			console.log("Selecting element based index : " + index)

			await this.PPMIDToInstall1.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			await expect(await this.inputPPMIDSerialNum1.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.PPMIDinstallDDList1.getAttribute('value');
			await utility.wait(utility.medium);
			Gen.SendKeys(this.inputPPMIDSerialNum1, utility.medium, options);
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.ppmidNXTBtn1, utility.medium);
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.infoOKButton1, utility.medium);
			await utility.wait(utility.medium);
		Gen.SendKeys(this.inputPPMIDSerialNum1, utility.medium, 'Additonal Notes');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ppmidNXTBtn1, utility.medium);
		await utility.wait(utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description XIPMD section / ppmidComm Success text display
	 ***/
	public async XIPMDSectiondispaly() {
		if (this.ppmidCommSuccess.isDisplayed()) {
			await this.ppmidCommSuccess.getText().then(function (ppmidComm) {
				console.log("find ppmidCommSuccess Text  " + ppmidComm);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill XIPMD section / ppmidComm 
	 ***/
	public async fillXIPMDSection() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sendMsgPPMID, utility.medium);
		await utility.wait(utility.high);
		Gen.ButtonClick(this.ppmidCommSuccess, utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description DeviceBinding Section display
	 ***/
	public async DeviceBindingSectiondispaly() {
		if (this.diviceBindingTxt.isDisplayed()) {
			await this.diviceBindingTxt.getText().then(function (diviceBinding) {
				console.log("find diviceBinding Text  " + diviceBinding);
			});
		}
	}

	public async fillDeviceBindingSection_SFEFLTY19() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.esmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.esmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullconfigAppliedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePhotoAsset, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextButtonEff, utility.medium);

	}
	/***
	 * @Author Aparna Das
	 * @description Fill Device Binding Section display
	 ***/
	public async fillDeviceBindingSection() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.gasMeterPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IHDPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FUlHANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.DeviceNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillDeviceBindingSection_SFENMEX15() {
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.gsmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullconfigAppliedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.capturePhotoAsset, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextButtonEff, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added 16/09
	public async filldDevicebinding() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.GSMEJoined, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.configIHDPPMID, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.joinedcapture, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.deviceNext, utility.medium);
		await utility.wait(utility.medium);


	}
	/***
 * @Author Supriya Harikumar
 * @description Fill Device Binding Section display
***/
	public async fillDeviceBindingSectionDF17() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.esmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gsmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.fullconfigAppliedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePhotoAsset, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextButtonEff, utility.medium);
	}


	/***
	 * @Author Aparna Das
	 * @description Fill Device Binding Section display
	 ***/
	public async fillDeviceBindingGasMeterSection() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.IHDPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.FUlHANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.DeviceNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Device Binding Section display Ex20
	 ***/
	public async fillEx20DeviceBindingSection() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IHDPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FUlHANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.DeviceNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description config All meter Section display
	 ***/
	public async configAllmeterDisplay() {
		if (this.configAllMeterText.isDisplayed()) {
			await this.configAllMeterText.getText().then(function (configAllMeter) {
				console.log("find configAllMeter Text  " + configAllMeter);
			});
		}
	}
	/***
	 * @Author Aparna Das
	 * @description Fill config All meter Section
	 ***/
	public async fillConfigAllmeter() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullCOnfigAppliedElecYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedGasYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PPMIDNxtBtn, utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description Fill config All meter Section
	 ***/
	public async fillConfigAllmeterGASElec() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedGasYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedPPMIDYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePPMIDBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PPMIDNxtBtn, utility.medium);

	}

	/***
	 * @Author Supriya Harikumar
	 * @description Smart Literature section text display
	 ***/
	public async SmartLiteraturedispaly() {
		if (this.smartLitLeftOnsiteTxt.isDisplayed()) {
			await this.smartLitLeftOnsiteTxt.getText().then(function (SmartLiterature) {
				console.log("find installPPMID Text  " + SmartLiterature);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill config All meter Section Ex20
	 ***/
	public async fillEx20ConfigAllmeter() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullCOnfigAppliedElecYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDNxtBtn, utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description Emmergency Efficiency Info Section display
	 ***/
	public async EEInfoDisplay() {
		if (this.EEInfoDiplay.isDisplayed()) {
			await this.EEInfoDiplay.getText().then(function (EEInfo) {
				console.log("find EEInfo Text  " + EEInfo);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Energy Efficiency Info Section
	 ***/
	public async fillEEInfo() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.energyEffProvidedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.energyEffDocLeftYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.isCustHappyYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.AdditionalEEInfoReqYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.EENxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Smart Education Section display
	 ***/
	public async smartEducationDisplay() {
		await utility.wait(utility.medium);
		if (this.smartEducationText.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.smartEducationText.getText().then(function (smartEducation) {
				console.log("find smartEducation Text  " + smartEducation);
			});
		}
	}
	/***
	 * @Author Aparna Das
	 * @description Fill Smart Education details Section
	 ***/
	public async fillSmartEducationDetails() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.smartLetLeftYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.HelpandInfoYEs, utility.medium);
		//Added Wait 23.09.19
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.DemoOfEquipmentYes, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Summary Section display
	 ***/
	public async summaryDisplay() {
		if (this.SummaryTxt.isDisplayed()) {
			await this.SummaryTxt.getText().then(function (Summary) {
				console.log("find Summary Text  " + Summary);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill and Print Summary Content
	 ***/
	public async fillAndPrintSummaryContent() {
		if (this.SummaryPageContent.isDisplayed()) {
			await this.SummaryPageContent.getText().then(function (SummaryContent) {
				console.log("Print SummaryContent  " + SummaryContent);
			});
		}
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PotentialCustIdenYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custAgreementInfoYes, utility.medium);
		await utility.wait(utility.medium);
	}
	/***
 * @Author Supriya Harikumar
 * @description Submit the job
***/
	public async FinalSubmission1() {
		if (this.captureCustSignTxt.isDisplayed()) {
			await this.captureCustSignTxt.getText().then(function (captureCustSign) {
				console.log("Print captureCustSign Txt  " + captureCustSign);
			});
		}
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.signedbyCustorRepDD, utility.medium, "Neither");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.signaturepadCanvas, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custRefusedToSignNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.jobCompleteBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);

	}

	/***
	 * @Author Aparna Das
	 * @description Submit the job
	 ***/
	public async FinalSubmission() {
		await utility.wait(utility.medium);
		if (this.captureCustSignTxt.isDisplayed()) {
			await this.captureCustSignTxt.getText().then(function (captureCustSign) {
				console.log("Print captureCustSign Txt  " + captureCustSign);
			});
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.eSign, utility.medium, '-');
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.signedbyCustorRepDD, utility.medium, "Neither");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custRefusedToSignNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custSignText, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custRefusedToSignNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.custSignText, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.jobCompleteBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);

		if (this.AppointmentText.isDisplayed) {
			await utility.wait(utility.medium);
			this.AppointmentText.getText().then(async function (appointment) {
				console.log("find Appointment Page Text  " + appointment);
			});

		}
	}

	/***
		 * @Author Jansi Victor
		 * @description Job Completion changes
		 ***/
	public async DeviceBinding() {
		await utility.wait(utility.medium);
		await this.deviceBindingCap.getText().then(function (deviceBindingCapTxt) {
			console.log("Device Binding " + deviceBindingCapTxt);
		});
	}
	public async fillfield53dueldevicebinding() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.ESMEJoinedY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.deviceOK, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.configIHDPPMID, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.joinedcapture, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.deviceNext, utility.medium);
		await utility.wait(utility.medium);

	}
	public async energyeffInfo() {
		await utility.wait(utility.medium);
		await this.EnergyeffCap.getText().then(function (EnergyeffCapText) {
			console.log("Energy Efficiency Information " + EnergyeffCapText);
		});
	}
	public async fillfield55duelenergyeff() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.energyeffinfoProvided, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.EngeffDocLeft, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IsCustomerhappy, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionaleneinfoReq, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.EnergyeffNext, utility.medium);
	}

	public async smartEducation() {
		await utility.wait(utility.medium);
		await this.smartEducationCap.getText().then(function (smartEducationCapTxt) {
			console.log("Smart Education " + smartEducationCapTxt);
		});
	}
	public async fillfield55duelsmartedu() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.smartLtionsite, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custaddnlhelpinfo, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IsCDemoofequipmentcomp, utility.medium);
		await utility.wait(utility.medium);

	}
	public async smartLitLeftOnsite() {
		await utility.wait(utility.medium);
		await this.smartLitLeftCap.getText().then(function (smartLitLeftCapTxt) {
			console.log("Smart Literature Left On Site " + smartLitLeftCapTxt);
		});
	}
	public async fillfield56duelsmartLit() {
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.potentialcustVulnerability, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.customeraggreementtoInfo, utility.medium);
	}

	public async captureCustSign() {
		await utility.wait(utility.medium);
		await this.capturecustsignature.getText().then(function (capturecustsignatureTxt) {
			console.log("Capture customer signature " + capturecustsignatureTxt);
		});
	}

	public async writingSign() {
		browser.sleep(1000);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.signpad, utility.medium);
		await utility.wait(utility.medium);

	}
	public async fillfield57Capturecust() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.signedbycustorRep, utility.medium, 'Customer');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.custrefusedtoSign, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.jobCompletesub, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.deviceOK, utility.medium);
	}


	public async JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST01JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.TST01jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST28JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.TST28jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST22JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.TST22jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST13JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.TST13jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST15JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.TST15jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async JobCompletedFLTYNoExchangeScreen() {
		await utility.wait(utility.medium);
		if (await this.jobcompletionFLTYNoExchange.isDisplayed()) {

			console.log("Job completed successfully");
		}
	}

	public async JobCompletedFLTYTradS2NoExchangeScreen() {
		await utility.wait(utility.medium);
		if (await this.jobcompletionFLTYTrads2NoExchange.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	//TST12 FLTY GAS

	public async Tst12fillfield53dueldevicebinding() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GSMEJoined, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.configIHDPPMID, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.joinedcapture, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.deviceNext, utility.medium);

	}

	public async TST12summary() {
		await utility.wait(utility.medium);
		await this.summaryCap.getText().then(function (summaryCapTxt) {
			console.log("SUMMARY " + summaryCapTxt);
		});
	}
	public async Tst12JobCompletedScreen() {
		await utility.wait(utility.medium);
		if (await this.TST12jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}


	//CGP INstall 16 changes

	public async PPMIDMessage() {
		if (this.PPMIDCommText.isDisplayed()) {
			await this.PPMIDCommText.getText().then(function (PPMIDCommText) {
				console.log("find PPMID comm SendMsg Text  " + PPMIDCommText);
			});
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PPMIDSendMessageButton, utility.medium);
		console.log("find PPMID comm SendMsg Text Button clicked  ");
		await utility.wait(utility.high);
		Gen.ButtonClick(this.PPMIDComSuccessButton, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillDeviceBindingSectionInst16() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.gasMeterPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.IHDPairedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FUlHANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.deviceBindingNextSecButton, utility.medium);
		await utility.wait(utility.medium);

	}

	public async fillConfigAllmeterInstall16() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullCOnfigAppliedElecYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.checkDetailsAlertButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedGasYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedPPMIDYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePPMIDBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextButtonWAN, utility.medium);
	}

	public async configAllmeterDisplayInst16() {
		if (this.configAllMeterTextin16.isDisplayed()) {
			await this.configAllMeterTextin16.getText().then(function (configAllMeter) {
				console.log("find configAllMeter Text  " + configAllMeter);
			});
		}
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill Device Binding Section display
	***/
	public async fillDeviceBindingSection_NMEX16() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.esmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.esmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullconfigAppliedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.capturePhotoAsset, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.nextButtonEff, utility.medium);
		await utility.wait(utility.Avg_low);
	}

}