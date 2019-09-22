import {
	browser,
	element,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";
const {
	Given,
	When,
	Then
} = require("cucumber");

import { Utility } from "../support/utility";
import { watchFile } from "fs";
import {
	Alert
} from 'selenium-webdriver';

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();

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
	public IsCDemoofequipmentcompN:ElementFinder;
    public smartLtionsiteN:ElementFinder;
	public custaddnlhelpinfoN:ElementFinder;
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
	public nextButtonWAN:ElementFinder;
	


	constructor() {

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
		this.PPMIDCommisioningText = element(by.id('Title_xittd2'));
		this.signaturepadCanvas = element(by.id('signaturePad'))

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
		this.installPPMIDText = element(by.id('Title_ihdscan'));
		this.PPMIDOfferedYes = element(by.id('ihdscan2_ihdPpmidOfferedtrue'));
		this.PPMIDAccepted = element(by.id('ihdscan2_ihdOrPPMIDAccepted_a'));
		this.PPMIDLOCDD = element(by.id('ihdscan2_assetLocationSelect'));
		this.PPMIDToInstall = element(by.id('ihdscan2_assetSelect'));
		this.inputPPMIDSerialNum = element(by.id('ihdscan2_assetSerialNumber'));
		this.infoOKButton = element(by.xpath('//div/button[text()="OK"]'));
		this.PPMIDTxt = element(by.xpath('//div[text()=" Select Valid PPMID To Install: "]'));
		this.ppmidAdditionalNote = element(by.id('ihdscan2_additionalNotes'));
		this.ppmidNXTBtn = element(by.id('ihdscan2_nextButton'));
		this.sendMsgPPMID = element(by.id('xittd2_sendMessageButton'));
		this.ppmidCommSuccess = element(by.id('xittd2_nextButton'));
		this.diviceBindingTxt = element(by.xpath('//div/h4[text()="Device Binding & Commissioning"]'));
		this.gasMeterPairedYes = element(by.id('rb_GasElecMPairSuc_y'));
		this.FUlHANYes = element(by.id('rb_FulHANEst_y'));
		this.IHDPairedYes = element(by.id('rb_IHDPaiSucc_y'));
		this.BindingAddNotes = element(by.className('notes ng-pristine ng-valid ng-touched'));
		this.configAllMeterText = element(by.id('TITLE_CFigAllMetInst'));
		this.FullWANYes = element(by.id('rb_FulWANEst_y'));
		this.FullCOnfigAppliedElecYes = element(by.id('rb_FullCFigE_y'));
		this.fullConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
		this.fullEx20ConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
		this.fullConfigAppliedPPMIDYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[2]'));
		this.capturePPMIDBtn = element(by.xpath('//div/button[@class="cameraBtn2line grey mandatoryWhite"]'));
		this.PPMIDNxtBtn = element(by.xpath('//div/button[@id="btnNextEff"]'));
		this.energyEffProvidedYes = element(by.id('rb_EngEffInfoP_y'));
		this.energyEffDocLeftYes = element(by.id('rb_EngEffDocleft_y'));
		this.isCustHappyYes = element(by.id('rb_IsCusHap_y'));
		this.AdditionalEEInfoReqYes = element(by.id('rb_AddEEInfo_y'));
		this.EENxtBtn = element(by.id('btn_Next_Eff'));
		this.smartEducationText = element(by.id('Title_SmartEd'));
		this.smartLetLeftYes = element(by.id('radiose3'));
		this.HelpandInfoYEs = element(by.id('smicopAddInfoCheckboxYes'));
		this.DemoOfEquipmentYes = element(by.id('radiose7'));
		this.SummaryTxt = element(by.id('Title_Summary'));
		this.SummaryPageContent = element(by.className('collapse in'));
		this.PotentialCustIdenYes = element(by.id('rb_PotVulCusIden_y'));
		this.custAgreementInfoYes = element(by.id('rb_CustAgrInf_y'));
		this.captureCustSignTxt = element(by.id('lbl_CapCus_Sig'));
		this.signedbyCustorRepDD = element(by.id('cbx_SigByCus_sel'));
		this.custRefusedToSignNo = element(by.xpath('//input[@id="rb_CusRefSig_n"]/following-sibling::span[@class="outer"]'));
		this.jobCompleteBtn = element(by.id('btn_Comp_submit'));
		this.PPMIDinstallDDList = element(by.xpath('(//select[@id="ihdscan2_assetSelect"]/option)[2]'));
		this.EEInfoDiplay = element(by.id('lbl_EnEff_info'));
		this.EEUIDText = element(by.xpath('//div[text()="EUI Device ID:"]'));
		this.DeviceNxtBtn = element(by.xpath('//div/button[@id="dbc2_trad_btnNextEff"]'));
		this.eSign = element(by.id('signaturePad'));
		this.custSignText = element(by.xpath('//div[text()="Customer Signature"]'));
		this.jobcompletionFLTYNoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 20 SMETS2 Site FLAT")]'));
		this.jobcompletionFLTYTrads2NoExchange = element(by.xpath('//*[starts-with(@id,"CompletedJobFAULTY 19 Trad Non S2 site FLAT")]'));
		
		this.smartLitLeftOnsiteTxt = element(by.xpath('//h4[contains(text(),"Smart Literature Left on Site")]'));
		this.installsubmission = element(by.id('btn1'));
		
		//Supriya Changes
		this.installPPMIDText1 = element(by.id('Title_newihdppmid'));
        this.PPMIDOfferedYes1 = element(by.id('newihdppmid_ihdPpmidOfferedtrue'));
        this.PPMIDAccepted1 = element(by.id('newihdppmid_ihdOrPPMIDAccepted_a'));
        this.PPMIDLOCDD1 = element(by.id('newihdppmid_assetLocationSelect'));
        this.PPMIDToInstall1 = element(by.id('newihdppmid_assetSelect'));
        this.inputPPMIDSerialNum1 = element(by.id('newihdppmid_assetSerialNumber'));
        this.infoOKButton1 = element(by.xpath('//div/button[@class="confirm"]'));
        this.PPMIDTxt1 = element(by.xpath('//div[text()=" Select Valid PPMID To Install: "]'));
        this.ppmidAdditionalNote1 = element(by.id('newihdppmid_additionalNotes'));
		this.ppmidNXTBtn1 = element(by.id('newihdppmid_nextButton'));
		this.PPMIDinstallDDList1 = element(by.xpath('(//select[@id="newihdppmid_assetSelect"]/option)[2]'));
        this.esmeJoinedYes = element(by.id('dbc2_esme_joined_y'));
        this.gsmeJoinedYes = element(by.id('dbc2_gsme_joined_y'));
        this.fullconfigAppliedYes = element(by.id('dbc2_full_config_y'));
        this.capturePhotoAsset = element(by.id('dbc2_capture_photo_joined'));
		this.nextButtonEff = element(by.id('dbc2_btnNextEff'));
		this.devicebindingNext = element(by.xpath('//*[@id="dbc2_trad_btnNextEff"]'));
		this.FullWANYesINST15 = element(by.xpath('//input[@id="rcfg1"]//following-sibling::span[@class="outer"]'));
        this.FullCOnfigAppliedElecYesINST15 = element(by.xpath('//label[@id="rb_FullCFigE_y"]//following-sibling::span[@class="outer"]'));
        this.fullConfigAppliedPPMIDYesINST15 = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
        this.PPMIDCommText = element(by.id('Title_xittd2'));
        this.PPMIDSendMessageButton = element(by.id('xittd2_sendMessageButton'));
		this.PPMIDComSuccessButton = element(by.id('xittd2_nextButton'));
		this.deviceBindingNextSecButton = element(by.id('dbc2_trad_btnNextEff'));
        this.checkDetailsAlertButton = element(by.xpath('//button[@class = "confirm"]'));
        this.smartEduNextButton = element(by.id('btnNextComm'));
		this.gasMeterPairedYes = element(by.id('rb_GasElecMPairSuc_y'));
		this.nextButtonWAN = element(by.id('btnNextEff'));
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

	public async sendPPMIDmessageSection(){

		await this.sendMsgPPMID.click();
		await utility.wait(utility.high);
		if (this.ppmidCommSuccess.isDisplayed()) {
			await this.ppmidCommSuccess.click();
		}
		await utility.wait(utility.medium_low);
	}

	public async fillConfigAllmeter_INST15(){
		await utility.wait(utility.low);
		if (this.FullWANYesINST15.isDisplayed()) {
			await this.FullWANYesINST15.click();
		}
		if (this.FullCOnfigAppliedElecYesINST15.isDisplayed()) {
			await this.FullCOnfigAppliedElecYesINST15.click();
		}
		await utility.wait(utility.low);
		if(this.infoOKButton.isDisplayed())
		{
			await this.infoOKButton.click();
		}
		await utility.wait(utility.low);
		if (this.fullConfigAppliedPPMIDYesINST15.isDisplayed()) {
			await this.fullConfigAppliedPPMIDYesINST15.click();
		}
		if (this.capturePPMIDBtn.isDisplayed()) {
			await this.capturePPMIDBtn.click();
		}
		if (this.PPMIDNxtBtn.isDisplayed()) {
			await this.PPMIDNxtBtn.click();
		}
	}
	

	public async fillEEInfo_INST15(){
		if (this.energyEffProvidedYes.isDisplayed()) {
			await this.energyEffProvidedYes.click();
		}
		if (this.energyEffDocLeftYes.isDisplayed()) {
			await this.energyEffDocLeftYes.click();
		}
		if (this.isCustHappyYes.isDisplayed()) {
			await this.isCustHappyYes.click();
		}
		if (this.AdditionalEEInfoReqYes.isDisplayed()) {
			await this.AdditionalEEInfoReqYes.click();
		}
		await utility.wait(utility.low);
		if (this.EENxtBtn.isDisplayed()) {
			await this.EENxtBtn.click();
		}
	
	}

	public async installSubmit(){
		if (this.installsubmission.isDisplayed()) {
			await this.installsubmission.click();
	}
	}

	public async fillDeviceBindingSection_INST15(){
		if (this.IHDPairedYes.isDisplayed()) {
			await this.IHDPairedYes.click();
		}
		if (this.FUlHANYes.isDisplayed()) {
			await this.FUlHANYes.click();
		}
		await utility.wait(utility.low);
		if(this.devicebindingNext.isDisplayed()){
			await this.devicebindingNext.click();
		}
	}

   
    //TST13 FLTY20

    public async Tst13fillfield55duelsmartedu() {
        await utility.wait(utility.very_low);
        if (await this.smartLtionsiteN.isDisplayed()) {
            await this.smartLtionsiteN.click();
        }
        await utility.wait(utility.very_low);
        if (await this.custaddnlhelpinfoN.isDisplayed()) {
            await this.custaddnlhelpinfoN.click();
        }
        await utility.wait(utility.very_low);
        if (await this.IsCDemoofequipmentcompN.isDisplayed()) {
            await this.IsCDemoofequipmentcompN.click();
        }
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

	public async fillPPMIDSection_INST15(index:number){
		if (this.PPMIDOfferedYes.isDisplayed()) {
			await this.PPMIDOfferedYes.click();
		}
		if (this.PPMIDAccepted.isDisplayed()) {
			await this.PPMIDAccepted.click();
		}
		if (await this.PPMIDLOCDD.isDisplayed()) {
			var select = this.PPMIDLOCDD;
			select.$('[value="B"]').click();
			await utility.wait(utility.very_low);
		}
		if (await this.PPMIDToInstall.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.PPMIDToInstall.click()
			browser.sleep(1000)
		//index = index ;
		console.log("Selecting element based index : "+index)
		// select the option
		await this.PPMIDToInstall.element(by.css("option:nth-child("+index+")")).click()
		await utility.wait(utility.low);
			await expect(await this.inputPPMIDSerialNum.isPresent());
			var options = this.PPMIDinstallDDListINST15.getAttribute('value');
			await this.inputPPMIDSerialNum.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv1.click();
			await utility.wait(4000);
			await this.infoOKButton.click();
		}
	  
		if (this.ppmidAdditionalNote.isDisplayed()) {
			await this.ppmidAdditionalNote.sendKeys('Additonal Notes');
		}
		if (this.ppmidNXTBtn.isDisplayed()) {
			await this.ppmidNXTBtn.click();
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill PPMID section
	 ***/
	public async fillPPMIDSection(index: number) {
		if (this.PPMIDOfferedYes.isDisplayed()) {
			await this.PPMIDOfferedYes.click();
		}
		if (this.PPMIDAccepted.isDisplayed()) {
			await this.PPMIDAccepted.click();
		}
		if (await this.PPMIDLOCDD.isDisplayed()) {
			var select = this.PPMIDLOCDD;
			select.$('[value="B"]').click();
			await utility.wait(utility.very_low);
		}
		if (await this.PPMIDToInstall.isDisplayed()) {
			await utility.wait(utility.low);
			this.PPMIDToInstall.click();
			browser.sleep(1000);
			//index = index ;
			console.log("Selecting element based index : " + index);
			// select the option
			await this.PPMIDToInstall.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await expect(await this.inputPPMIDSerialNum.isPresent());
			var options = this.PPMIDinstallDDList.getAttribute('value');
			await this.inputPPMIDSerialNum.sendKeys(options);
			await this.EEUIDText.click();
			await this.infoOKButton.click();
		}

		if (this.ppmidAdditionalNote.isDisplayed()) {
			await this.ppmidAdditionalNote.sendKeys('Additonal Notes');
		}
		if (this.ppmidNXTBtn.isDisplayed()) {
			await this.ppmidNXTBtn.click();
		}
		await utility.wait(utility.very_low);
		if (this.sendMsgPPMID.isDisplayed()) {
			await this.sendMsgPPMID.click();
			await utility.wait(utility.high);
		}

	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill PPMID section
	 ***/
	public async fillPPMIDSectionDF17(index: number) {
		if (this.PPMIDOfferedYes1.isDisplayed()) {
			await this.PPMIDOfferedYes1.click();
		}
		if (this.PPMIDAccepted1.isDisplayed()) {
			await this.PPMIDAccepted1.click();
		}
		if (await this.PPMIDLOCDD1.isDisplayed()) {
			var select = this.PPMIDLOCDD1;
			select.$('[value="B"]').click();
			await utility.wait(utility.very_low);
		}
		if (await this.PPMIDToInstall1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.PPMIDToInstall1.click()
			browser.sleep(1000)
		//index = index ;
		console.log("Selecting element based index : "+index)
		// select the option
		await this.PPMIDToInstall1.element(by.css("option:nth-child("+index+")")).click()
		await utility.wait(utility.low);
		
		//if (this.infoOKButton.isPresent()) {
		  //  await this.infoOKButton.click();
		//}
		await utility.wait(4000);
			await expect(await this.inputPPMIDSerialNum1.isPresent());
			var options = this.PPMIDinstallDDList1.getAttribute('value');
			await this.inputPPMIDSerialNum1.sendKeys(options);
			await utility.wait(8000);
			if (this.ppmidNXTBtn1.isDisplayed()) {
				await this.ppmidNXTBtn1.click();
			}
			if (this.infoOKButton1.isDisplayed()) {
				await this.infoOKButton1.click();
			}
		}
	  
		if (this.ppmidAdditionalNote1.isDisplayed()) {
			await this.ppmidAdditionalNote1.sendKeys('Additonal Notes');
		}
		if (this.ppmidNXTBtn1.isDisplayed()) {
			await this.ppmidNXTBtn1.click();
		}
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
		if (this.ppmidCommSuccess.isDisplayed()) {
			await this.ppmidCommSuccess.click();
		}
		await utility.wait(utility.medium_low);
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

	public async fillDeviceBindingSection_SFEFLTY19(){
		if (this.esmeJoinedYes.isDisplayed()) {
			await this.esmeJoinedYes.click();
		}
		await utility.wait(utility.low);
		if (this.infoOKButton.isDisplayed()) {
			await this.infoOKButton.click();
		}
		await utility.wait(utility.low);
		if (this.esmeJoinedYes.isDisplayed()) {
			await this.esmeJoinedYes.click();
		}
		await utility.wait(utility.low);
		if (this.fullconfigAppliedYes.isDisplayed()) {
			await this.fullconfigAppliedYes.click();
		}
		await utility.wait(utility.low);
		if(this.capturePhotoAsset.isDisplayed()){
			await this.capturePhotoAsset.click();
		}
		await utility.wait(utility.low);
		if(this.nextButtonEff.isDisplayed()){
			await this.nextButtonEff.click();
		}
		await utility.wait(utility.low);
	}
	/***
	 * @Author Aparna Das
	 * @description Fill Device Binding Section display
	 ***/
	public async fillDeviceBindingSection() {
		if (this.gasMeterPairedYes.isDisplayed()) {
			await this.gasMeterPairedYes.click();
		}
		if (this.IHDPairedYes.isDisplayed()) {
			await this.IHDPairedYes.click();
		}
		if (this.FUlHANYes.isDisplayed()) {
			await this.FUlHANYes.click();
		}
		if (this.DeviceNxtBtn.isDisplayed()) {
			await this.DeviceNxtBtn.click();
		}
		await utility.wait(utility.very_low);

	}

	public async fillDeviceBindingSection_SFENMEX15(){
		if (this.gsmeJoinedYes.isDisplayed()) {
			await this.gsmeJoinedYes.click();
		}
		await utility.wait(utility.low);
		
		if (this.fullconfigAppliedYes.isDisplayed()) {
			await this.fullconfigAppliedYes.click();
		}
		await utility.wait(utility.low);
		if(this.capturePhotoAsset.isDisplayed()){
			await this.capturePhotoAsset.click();
		}
		await utility.wait(utility.low);
		if(this.nextButtonEff.isDisplayed()){
			await this.nextButtonEff.click();
		}
		await utility.wait(utility.low);
	}
	
    //CGP added 16/09
    public async filldDevicebinding() {
        
        await utility.wait(utility.low);
        if (await this.GSMEJoined.isDisplayed()) {
            await this.GSMEJoined.click();
        }
        await utility.wait(utility.low);
        if (await this.configIHDPPMID.isDisplayed()) {
            await this.configIHDPPMID.click();
        }
        await utility.wait(utility.very_low);
        if (await this.joinedcapture.isDisplayed()) {
            await this.joinedcapture.click();
        }
        await utility.wait(utility.very_low);
        if (await this.deviceNext.isDisplayed()) {
            await this.deviceNext.click();
        }
    }



	/***
 * @Author Supriya Harikumar
 * @description Fill Device Binding Section display
***/
public async fillDeviceBindingSectionDF17(){
    if (this.esmeJoinedYes.isDisplayed()) {
        await this.esmeJoinedYes.click();
    }
    await utility.wait(utility.low);
    if (this.infoOKButton.isDisplayed()) {
        await this.infoOKButton.click();
    }
    await utility.wait(utility.low);
    if (this.gsmeJoinedYes.isDisplayed()) {
        await this.gsmeJoinedYes.click();
    }
    await utility.wait(utility.low);
    if (this.fullconfigAppliedYes.isDisplayed()) {
        await this.fullconfigAppliedYes.click();
    }
    await utility.wait(utility.low);
    if(this.capturePhotoAsset.isDisplayed()){
        await this.capturePhotoAsset.click();
    }
    await utility.wait(utility.low);
    if(this.nextButtonEff.isDisplayed()){
        await this.nextButtonEff.click();
    }
    await utility.wait(utility.low);
}


	/***
	 * @Author Aparna Das
	 * @description Fill Device Binding Section display
	 ***/
	public async fillDeviceBindingGasMeterSection() {
		if (this.IHDPairedYes.isDisplayed()) {
			await this.IHDPairedYes.click();
		}
		if (this.FUlHANYes.isDisplayed()) {
			await this.FUlHANYes.click();
		}
		if (this.DeviceNxtBtn.isDisplayed()) {
			await this.DeviceNxtBtn.click();
		}
		await utility.wait(utility.very_low);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Device Binding Section display Ex20
	 ***/
	public async fillEx20DeviceBindingSection() {
		if (this.IHDPairedYes.isDisplayed()) {
			await this.IHDPairedYes.click();
		}
		if (this.FUlHANYes.isDisplayed()) {
			await this.FUlHANYes.click();
		}
		if (this.DeviceNxtBtn.isDisplayed()) {
			await this.DeviceNxtBtn.click();
		}
		await utility.wait(utility.very_low);
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
		if (this.FullWANYes.isDisplayed()) {
			await this.FullWANYes.click();
		}
		if (this.FullCOnfigAppliedElecYes.isDisplayed()) {
			await this.FullCOnfigAppliedElecYes.click();
		}
		if (this.infoOKButton.isDisplayed()) {
			await this.infoOKButton.click();
		}
		if (this.fullConfigAppliedGasYes.isDisplayed()) {
			await this.fullConfigAppliedGasYes.click();
		}
		// if (this.fullConfigAppliedPPMIDYes.isDisplayed()) {
		//     await this.fullConfigAppliedPPMIDYes.click();
		// }
		// await utility.wait(utility.very_low);
		// if (this.capturePPMIDBtn.isDisplayed()) {
		//     await this.capturePPMIDBtn.click();
		// }
		await utility.wait(utility.very_low);
		if (this.PPMIDNxtBtn.isDisplayed()) {
			await this.PPMIDNxtBtn.click();
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill config All meter Section
	 ***/
	public async fillConfigAllmeterGASElec() {
		if (this.FullWANYes.isDisplayed()) {
			await this.FullWANYes.click();
		}

		if (this.fullConfigAppliedGasYes.isDisplayed()) {
			await this.fullConfigAppliedGasYes.click();
		}

		await utility.wait(utility.very_low);
		if (this.fullConfigAppliedPPMIDYes.isDisplayed()) {
			await this.fullConfigAppliedPPMIDYes.click();
		}
		if (this.capturePPMIDBtn.isDisplayed()) {
			await this.capturePPMIDBtn.click();
		}
		await utility.wait(utility.very_low);
		if (this.PPMIDNxtBtn.isDisplayed()) {
			await this.PPMIDNxtBtn.click();
		}
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
		if (this.FullWANYes.isDisplayed()) {
			await this.FullWANYes.click();
		}
		if (this.FullCOnfigAppliedElecYes.isDisplayed()) {
			await this.FullCOnfigAppliedElecYes.click();
		}
		if (this.infoOKButton.isDisplayed()) {
			await this.infoOKButton.click();
			await utility.wait(utility.very_low);
		}

		//  if (this.fullEx20ConfigAppliedGasYes.isDisplayed()) {
		//      await this.fullEx20ConfigAppliedGasYes.click();
		// }
		//  await utility.wait(utility.very_low);
		// if (this.capturePPMIDBtn.isDisplayed()) {
		//     await this.capturePPMIDBtn.click();
		//     await this.capturePPMIDBtn.click();

		// }
		await utility.wait(utility.very_low);
		if (this.PPMIDNxtBtn.isDisplayed()) {
			await this.PPMIDNxtBtn.click();
		}
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
		await utility.wait(utility.very_low);
		if (this.energyEffProvidedYes.isDisplayed()) {
			await this.energyEffProvidedYes.click();
		}
		if (this.energyEffDocLeftYes.isDisplayed()) {
			await this.energyEffDocLeftYes.click();
		}
		if (this.isCustHappyYes.isDisplayed()) {
			await this.isCustHappyYes.click();
		}
		if (this.AdditionalEEInfoReqYes.isDisplayed()) {
			await this.AdditionalEEInfoReqYes.click();
		}

		if (this.EENxtBtn.isDisplayed()) {
			await this.EENxtBtn.click();
		}

	}

	/***
	 * @Author Aparna Das
	 * @description Smart Education Section display
	 ***/
	public async smartEducationDisplay() {
		if (this.smartEducationText.isDisplayed()) {
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

		if (this.smartLetLeftYes.isDisplayed()) {
			await this.smartLetLeftYes.click();
		}
		if (this.HelpandInfoYEs.isDisplayed()) {
			await this.HelpandInfoYEs.click();
		}
		if (this.DemoOfEquipmentYes.isDisplayed()) {
			await this.DemoOfEquipmentYes.click();
		}
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

		if (this.PotentialCustIdenYes.isDisplayed()) {
			await this.PotentialCustIdenYes.click();
		}
		if (this.custAgreementInfoYes.isDisplayed()) {
			await this.custAgreementInfoYes.click();

		}
	}
	/***
 * @Author Supriya Harikumar
 * @description Submit the job
***/
public async FinalSubmission1(){
    if (this.captureCustSignTxt.isDisplayed()) {
        await this.captureCustSignTxt.getText().then(function (captureCustSign) {
            console.log("Print captureCustSign Txt  " + captureCustSign);
        });
    }

    if (await this.signedbyCustorRepDD.isDisplayed()) {
        await utility.wait(utility.very_low);
        var select = this.signedbyCustorRepDD;
        select.$('[value="Customer"]').click();
    }
    await this.signaturepadCanvas.click();
    await utility.wait(utility.medium_low);
    if (this.custRefusedToSignNo.isDisplayed()) {
        await this.custRefusedToSignNo.click();
    }
    
    
    await utility.wait(20000);
    if (this.jobCompleteBtn.isDisplayed()) {
        await this.jobCompleteBtn.click();
        await utility.wait(utility.low);
        await this.infoOKButton.click();
    }

}

	/***
	 * @Author Aparna Das
	 * @description Submit the job
	 ***/
	public async FinalSubmission() {
		if (this.captureCustSignTxt.isDisplayed()) {
			await this.captureCustSignTxt.getText().then(function (captureCustSign) {
				console.log("Print captureCustSign Txt  " + captureCustSign);
			});
		}
		await utility.wait(utility.very_low);
		if (this.eSign.isDisplayed()) {
			await this.eSign.click();
		}
		if (await this.signedbyCustorRepDD.isDisplayed()) {
			await utility.wait(utility.very_low);
			var select = this.signedbyCustorRepDD;
			select.$('[value="Customer"]').click();
		}
		await utility.wait(utility.very_low);
		if (this.custRefusedToSignNo.isDisplayed()) {
			await this.custRefusedToSignNo.click();
			await this.custSignText.click();
		}
		await utility.wait(utility.very_low);
		if (this.custRefusedToSignNo.isDisplayed()) {
			await this.custRefusedToSignNo.click();
			await this.custSignText.click();
		}

		if (this.jobCompleteBtn.isDisplayed()) {
			await this.jobCompleteBtn.click();
			await utility.wait(utility.very_low);
			await this.infoOKButton.click();
			await utility.wait(utility.very_low);

		}


		await utility.wait(utility.Avg_low);

		if (this.AppointmentText.isDisplayed) {
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
		await utility.wait(utility.very_low);
		await this.deviceBindingCap.getText().then(function (deviceBindingCapTxt) {
			console.log("Device Binding " + deviceBindingCapTxt);
		});
	}
	public async fillfield53dueldevicebinding() {
		await utility.wait(utility.Avg_low);
		if (await this.ESMEJoinedY.isDisplayed()) {
			await this.ESMEJoinedY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.deviceOK.isDisplayed()) {
			await this.deviceOK.click();
		}
		// await utility.wait(utility.Avg_low);
		// if (await this.GSMEJoined.isDisplayed()) {
		//     await this.GSMEJoined.click();
		// }
		await utility.wait(utility.Avg_low);
		if (await this.configIHDPPMID.isDisplayed()) {
			await this.configIHDPPMID.click();
		}
		await utility.wait(utility.very_low);
		if (await this.joinedcapture.isDisplayed()) {
			await this.joinedcapture.click();
		}
		await utility.wait(utility.very_low);
		if (await this.deviceNext.isDisplayed()) {
			await this.deviceNext.click();
		}
	}
	public async energyeffInfo() {
		await utility.wait(utility.very_low);
		await this.EnergyeffCap.getText().then(function (EnergyeffCapText) {
			console.log("Energy Efficiency Information " + EnergyeffCapText);
		});
	}
	public async fillfield55duelenergyeff() {
		await utility.wait(utility.very_low);
		if (await this.energyeffinfoProvided.isDisplayed()) {
			await this.energyeffinfoProvided.click();
		}
		await utility.wait(utility.very_low);
		if (await this.EngeffDocLeft.isDisplayed()) {
			await this.EngeffDocLeft.click();
		}
		await utility.wait(utility.very_low);
		if (await this.IsCustomerhappy.isDisplayed()) {
			await this.IsCustomerhappy.click();
		}
		await utility.wait(utility.very_low);
		if (await this.additionaleneinfoReq.isDisplayed()) {
			await this.additionaleneinfoReq.click();
		}
		await utility.wait(utility.very_low);
		if (await this.EnergyeffNext.isDisplayed()) {
			await this.EnergyeffNext.click();
		}
	}
	public async smartEducation() {
		await utility.wait(utility.very_low);
		await this.smartEducationCap.getText().then(function (smartEducationCapTxt) {
			console.log("Smart Education " + smartEducationCapTxt);
		});
	}
	public async fillfield55duelsmartedu() {
		await utility.wait(utility.very_low);
		if (await this.smartLtionsite.isDisplayed()) {
			await this.smartLtionsite.click();
		}
		await utility.wait(utility.very_low);
		if (await this.custaddnlhelpinfo.isDisplayed()) {
			await this.custaddnlhelpinfo.click();
		}
		await utility.wait(utility.very_low);
		if (await this.IsCDemoofequipmentcomp.isDisplayed()) {
			await this.IsCDemoofequipmentcomp.click();
		}
	}
	public async smartLitLeftOnsite() {
		await utility.wait(utility.very_low);
		await this.smartLitLeftCap.getText().then(function (smartLitLeftCapTxt) {
			console.log("Smart Literature Left On Site " + smartLitLeftCapTxt);
		});
	}
	public async fillfield56duelsmartLit() {
		await utility.wait(utility.very_low);
		if (await this.potentialcustVulnerability.isDisplayed()) {
			await this.potentialcustVulnerability.click();
		}
		await utility.wait(utility.very_low);
		if (await this.customeraggreementtoInfo.isDisplayed()) {
			await this.customeraggreementtoInfo.click();
		}
	}
	public async captureCustSign() {
		await utility.wait(utility.very_low);
		await this.capturecustsignature.getText().then(function (capturecustsignatureTxt) {
			console.log("Capture customer signature " + capturecustsignatureTxt);
		});
	}
	public async writingSign() {
		browser.sleep(1000);

		await this.signpad.click();

	}
	public async fillfield57Capturecust() {
		await utility.wait(utility.very_low);
		if (await this.signedbycustorRep.isDisplayed()) {
			var select = this.signedbycustorRep;
			select.$('[value="Customer"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.custrefusedtoSign.isDisplayed()) {
			await this.custrefusedtoSign.click();
		}
		await utility.wait(utility.very_low);
		if (await this.jobCompletesub.isDisplayed()) {
			await this.jobCompletesub.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.deviceOK.isDisplayed()) {
			await this.deviceOK.click();
		}
	}
	public async JobCompletedScreen() {
		await utility.wait(utility.very_low);
		if (await this.jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST01JobCompletedScreen() {
		await utility.wait(utility.very_low);
		if (await this.TST01jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST28JobCompletedScreen() {
		await utility.wait(utility.very_low);
		if (await this.TST28jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST22JobCompletedScreen() {
		await utility.wait(utility.very_low);
		if (await this.TST22jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST13JobCompletedScreen() {
		await utility.wait(utility.very_low);
		if (await this.TST13jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async TST15JobCompletedScreen() {
		await utility.wait(utility.very_low);
		if (await this.TST15jobcompletion.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	public async JobCompletedFLTYNoExchangeScreen() {
		await utility.wait(utility.very_low);
		if (await this.jobcompletionFLTYNoExchange.isDisplayed()) {

			console.log("Job completed successfully");
		}
	}

	public async JobCompletedFLTYTradS2NoExchangeScreen() {
		await utility.wait(utility.very_low);
		if (await this.jobcompletionFLTYTrads2NoExchange.isDisplayed()) {
			console.log("Job completed successfully");
		}
	}
	//TST12 FLTY GAS

	public async Tst12fillfield53dueldevicebinding() {
		await utility.wait(utility.Avg_low);
		await utility.wait(utility.Avg_low);
		if (await this.GSMEJoined.isDisplayed()) {
			await this.GSMEJoined.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.configIHDPPMID.isDisplayed()) {
			await this.configIHDPPMID.click();
		}
		await utility.wait(utility.very_low);
		if (await this.joinedcapture.isDisplayed()) {
			await this.joinedcapture.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.deviceNext.isDisplayed()) {
			await this.deviceNext.click();
		}
	}

	public async TST12summary() {
		await utility.wait(utility.very_low);
		await this.summaryCap.getText().then(function (summaryCapTxt) {
			console.log("SUMMARY " + summaryCapTxt);
		});
	}
	public async Tst12JobCompletedScreen() {
		await utility.wait(utility.very_low);
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
        await this.PPMIDSendMessageButton.click();
        console.log("find PPMID comm SendMsg Text Button clicked  " );

        await utility.wait(80000);
        //commented below
        // await this.awaitingResponseTxt.getText().then(function (awaitingResponseTxt) {
        // 	console.log("find awaitingResponseTxt Text  " + awaitingResponseTxt);
        // });
    //	await utility.wait(60000);
        if (this.PPMIDComSuccessButton.isDisplayed()) {
            await this.PPMIDComSuccessButton.click();
            await utility.wait(3000);
        }

        //await this.submitBtn.click(); remove later
        await utility.wait(3000);
    }

}



public async fillDeviceBindingSectionInst16(){
    await utility.wait(1000);

   
   if (this.gasMeterPairedYes.isDisplayed()) {
      await this.gasMeterPairedYes.click();
    }
    await utility.wait(1000);
    if (this.IHDPairedYes.isDisplayed()) {
        await this.IHDPairedYes.click();
    }
    await utility.wait(1000);
    if (this.FUlHANYes.isDisplayed()) {
        await this.FUlHANYes.click();
    }
    await utility.wait(1000);
    if (this.deviceBindingNextSecButton.isDisplayed()) {
        await this.deviceBindingNextSecButton.click();
    }

   
}

public async fillConfigAllmeterInstall16(){
    await utility.wait(5000);
    if (this.FullWANYes.isDisplayed()) {
        await this.FullWANYes.click();
    }
    if (this.FullCOnfigAppliedElecYes.isDisplayed()) {
        await this.FullCOnfigAppliedElecYes.click();
    }
    let ale1: Alert = browser.switchTo().alert();
		// clicks 'OK' button
		await this.checkDetailsAlertButton.click();

        await utility.wait(3000);    
    if (this.fullConfigAppliedGasYes.isDisplayed()) {
        await this.fullConfigAppliedGasYes.click();
    }
    if (this.fullConfigAppliedPPMIDYes.isDisplayed()) {
        await this.fullConfigAppliedPPMIDYes.click();
    }
    if (this.capturePPMIDBtn.isDisplayed()) {
        await this.capturePPMIDBtn.click();
    }

    await utility.wait(3000); 
    //----------------------------------------------------------------
    if (this.nextButtonWAN.isDisplayed()) {
      await this.nextButtonWAN.click();
   }
}

public async configAllmeterDisplayInst16(){
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
public async fillDeviceBindingSection_NMEX16(){
    if (this.esmeJoinedYes.isDisplayed()) {
        await this.esmeJoinedYes.click();
    }
    await utility.wait(2000);
    if (this.infoOKButton.isDisplayed()) {
        await this.infoOKButton.click();
    }
    await utility.wait(2000);
    if (this.esmeJoinedYes.isDisplayed()) {
        await this.esmeJoinedYes.click();
    }
    await utility.wait(2000);
    if (this.fullconfigAppliedYes.isDisplayed()) {
        await this.fullconfigAppliedYes.click();
    }
    await utility.wait(2000);
    if(this.capturePhotoAsset.isDisplayed()){
        await this.capturePhotoAsset.click();
    }
    await utility.wait(2000);
    if(this.nextButtonEff.isDisplayed()){
        await this.nextButtonEff.click();
    }
    await utility.wait(2000);
}

}