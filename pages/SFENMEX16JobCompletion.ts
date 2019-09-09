import { browser,
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
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
const utility: Utility = new Utility();
import {
	Alert
} from 'selenium-webdriver';

export class SFENMEX16JobCompletionPageObject {

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
    public PPMIDCommisioningText: ElementFinder;
    public installsubmission: ElementFinder;
    public deviceBindingText: ElementFinder;
    public esmeJoinedYes: ElementFinder;
    public gsmeJoinedYes: ElementFinder;
    public fullconfigAppliedYes: ElementFinder;
    public capturePhotoAsset: ElementFinder;
    public nextButtonEff: ElementFinder;
    public energyEfficiencyTxt: ElementFinder;
    public smartLitLeftOnsiteTxt: ElementFinder;
    public custAgreementInfoNo: ElementFinder;
    public signaturepadCanvas: ElementFinder;


    constructor() {
        this.installPPMIDText = element(by.id('Title_newihdppmid'));
        this.PPMIDOfferedYes = element(by.id('newihdppmid_ihdPpmidOfferedtrue'));
        this.PPMIDAccepted = element(by.id('newihdppmid_ihdOrPPMIDAccepted_a'));
        this.PPMIDLOCDD = element(by.id('newihdppmid_assetLocationSelect'));
        this.PPMIDToInstall = element(by.id('newihdppmid_assetSelect'));
        this.inputPPMIDSerialNum = element(by.id('newihdppmid_assetSerialNumber'));
        this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
        this.PPMIDTxt = element(by.xpath('//div[text()=" Select Valid PPMID To Install: "]'));
        this.ppmidAdditionalNote = element(by.id('newihdppmid_additionalNotes'));
        this.ppmidNXTBtn = element(by.id('newihdppmid_nextButton'));
        this.PPMIDCommisioningText = element(by.id('Title_xittd2'))
        this.sendMsgPPMID = element(by.id('xittd2_sendMessageButton'));
        this.ppmidCommSuccess = element(by.id('xittd2_nextButton'));
        this.diviceBindingTxt = element(by.xpath('//div/h4[text()="Device Binding & Commissioning"]'));
        this.smartLitLeftOnsiteTxt = element(by.xpath('//*[@id="app"]/div[2]/div/div/div[2]/ng-switch/div/complete/div/div/div[4]/div[2]/div[7]/div/h4'));
        this.gasMeterPairedYes = element(by.id('rb_GasElecMPairSuc_y'));
        this.FUlHANYes = element(by.id('rb_FulHANEst_y'));
        this.IHDPairedYes = element(by.id('rb_IHDPaiSucc_y'));
        this.BindingAddNotes = element(by.className('notes ng-pristine ng-valid ng-touched'));
        this.configAllMeterText = element(by.id('TITLE_CFigAllMetInst'));
        this.FullWANYes = element(by.id('rb_FulWANEst_y'));
        this.FullCOnfigAppliedElecYes = element(by.id('rb_FullCFigE_y'));
        this.fullConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
        this.fullConfigAppliedPPMIDYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[2]'));
        this.capturePPMIDBtn = element(by.className('cameraBtn2line grey mandatoryWhite'));
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
        this.custAgreementInfoNo = element(by.id('rb_CustAgrInf_n'));
        this.captureCustSignTxt = element(by.id('lbl_CapCus_Sig'));
        this.signedbyCustorRepDD = element(by.id('cbx_SigByCus_sel'));
        this.custRefusedToSignNo = element(by.xpath('//input[@id="rb_CusRefSig_n"]/following-sibling::span[@class="outer"]'));
        this.jobCompleteBtn = element(by.id('btn_Comp_submit'));
        this.PPMIDinstallDDList = element(by.xpath('(//select[@id="newihdppmid_assetSelect"]/option)[2]'));
        this.EEInfoDiplay = element(by.id('lbl_EnEff_info'));
        this.installsubmission = element(by.id('btn1'));
        this.deviceBindingText = element(by.id('Title_DevBinComm2'));
        this.esmeJoinedYes = element(by.id('dbc2_esme_joined_y'));
        this.gsmeJoinedYes = element(by.id('dbc2_gsme_joined_y'));
        this.fullconfigAppliedYes = element(by.id('dbc2_full_config_y'));
        this.capturePhotoAsset = element(by.id('dbc2_capture_photo_joined'));
        this.nextButtonEff = element(by.id('dbc2_btnNextEff'));
        this.energyEfficiencyTxt = element(by.xpath('//div/h4[text()="Energy Efficiency Information"]'));
        this.signaturepadCanvas = element(by.id('signaturePad'))
        
    }

    /***
 * @Author Supriya Harikumar
 * @description PPMID section text display
***/
public async PPMIDSectiondispaly(){
    if (this.installPPMIDText.isDisplayed()) {
        await this.installPPMIDText.getText().then(function (installPPMID) {
            console.log("find installPPMID Text  " + installPPMID);
        });
    }
}

/***
 * @Author Supriya Harikumar
 * @description Fill PPMID section
***/
public async fillPPMIDSection(index:number){
    if (this.PPMIDOfferedYes.isDisplayed()) {
        await this.PPMIDOfferedYes.click();
    }
    if (this.PPMIDAccepted.isDisplayed()) {
        await this.PPMIDAccepted.click();
    }
    if (await this.PPMIDLOCDD.isDisplayed()) {
        var select = this.PPMIDLOCDD;
        select.$('[value="B"]').click();
        await utility.wait(1000);
    }
    if (await this.PPMIDToInstall.isDisplayed()) {
		await utility.wait(2000);
		// click the dropdown
		this.PPMIDToInstall.click()
		browser.sleep(1000)
	//index = index ;
	console.log("Selecting element based index : "+index)
	// select the option
	await this.PPMIDToInstall.element(by.css("option:nth-child("+index+")")).click()
    await utility.wait(3000);
    
    //if (this.infoOKButton.isPresent()) {
      //  await this.infoOKButton.click();
    //}
    await utility.wait(4000);
		await expect(await this.inputPPMIDSerialNum.isPresent());
		var options = this.PPMIDinstallDDList.getAttribute('value');
        await this.inputPPMIDSerialNum.sendKeys(options);
        await utility.wait(8000);
        if (this.ppmidNXTBtn.isDisplayed()) {
            await this.ppmidNXTBtn.click();
        }
        if (this.infoOKButton.isDisplayed()) {
            await this.infoOKButton.click();
        }
    }
  
    if (this.ppmidAdditionalNote.isDisplayed()) {
        await this.ppmidAdditionalNote.sendKeys('Additonal Notes');
    }
    if (this.ppmidNXTBtn.isDisplayed()) {
        await this.ppmidNXTBtn.click();
    }
}

 /***
 * @Author Supriya Harikumar
 * @description XIPMD section / ppmidComm Success text display
***/
public async XIPMDSectiondispaly(){
    if (this.ppmidCommSuccess.isDisplayed()) {
        await this.ppmidCommSuccess.getText().then(function (ppmidComm) {
            console.log("find ppmidCommSuccess Text  " + ppmidComm);
        });
    }
}

/***
 * @Author Supriya Harikumar
 * @description Fill XIPMD section / ppmidComm 
***/
public async fillXIPMDSection(){
    if (this.ppmidCommSuccess.isDisplayed()) {
        await this.ppmidCommSuccess.click();
    }
    await utility.wait(5000);
}

 /***
 * @Author Supriya Harikumar
 * @description DeviceBinding Section display
***/
public async DeviceBindingSectiondispaly(){
    if (this.diviceBindingTxt.isDisplayed()) {
        await this.diviceBindingTxt.getText().then(function (diviceBinding) {
            console.log("find diviceBinding Text  " + diviceBinding);
        });
    }
}

public async sendPPMIDmessageSection(){

    await this.sendMsgPPMID.click();
    await utility.wait(80000);
    if (this.ppmidCommSuccess.isDisplayed()) {
        await this.ppmidCommSuccess.click();
    }
    await utility.wait(5000);
}

 /***
 * @Author Supriya Harikumar
 * @description Fill Device Binding Section display
***/
public async fillDeviceBindingSection(){
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

public async fillDeviceBindingSection_SFENMEX15(){
    if (this.gsmeJoinedYes.isDisplayed()) {
        await this.gsmeJoinedYes.click();
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

/***
 * @Author Supriya Harikumar
 * @description config All meter Section display
***/
public async configAllmeterDisplay(){
    if (this.configAllMeterText.isDisplayed()) {
        await this.configAllMeterText.getText().then(function (configAllMeter) {
            console.log("find configAllMeter Text  " + configAllMeter);
        });
    }
}
/***
 * @Author Supriya Harikumar
 * @description Fill config All meter Section
***/
public async fillConfigAllmeter(){
    if (this.FullWANYes.isDisplayed()) {
        await this.FullWANYes.click();
    }
    if (this.FullCOnfigAppliedElecYes.isDisplayed()) {
        await this.FullCOnfigAppliedElecYes.click();
    }
    if (this.fullConfigAppliedGasYes.isDisplayed()) {
        await this.fullConfigAppliedGasYes.click();
    }
    if (this.fullConfigAppliedPPMIDYes.isDisplayed()) {
        await this.fullConfigAppliedPPMIDYes.click();
    }
    if (this.capturePPMIDBtn.isDisplayed()) {
        await this.capturePPMIDBtn.click();
    }
    if (this.ppmidNXTBtn.isDisplayed()) {
        await this.capturePPMIDBtn.click();
    }
}

/***
 * @Author Supriya Harikumar
 * @description Emmergency Efficiency Info Section display
***/
public async EEInfoDisplay(){
    if (this.EEInfoDiplay.isDisplayed()) {
        await this.EEInfoDiplay.getText().then(function (EEInfo) {
            console.log("find EEInfo Text  " + EEInfo);
        });
    }
}

/***
 * @Author Supriya Harikumar
 * @description Fill Energy Efficiency Info Section
***/
public async fillEEInfo(){
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
 * @Author Supriya Harikumar
 * @description Smart Education Section display
***/
public async smartEducationDisplay(){
    if (this.smartEducationText.isDisplayed()) {
        await this.smartEducationText.getText().then(function (smartEducation) {
            console.log("find smartEducation Text  " + smartEducation);
        });
    }
}
/***
 * @Author Supriya Harikumar
 * @description Fill Smart Education details Section
***/
public async fillSmartEducationDetails(){

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
 * @Author Supriya Harikumar
 * @description Summary Section display
***/
public async summaryDisplay(){
    if (this.SummaryTxt.isDisplayed()) {
        await this.SummaryTxt.getText().then(function (Summary) {
            console.log("find Summary Text  " + Summary);
        });
    }
}

/***
 * @Author Supriya Harikumar
 * @description Fill and Print Summary Content
***/
public async fillAndPrintSummaryContent(){
    if (this.SummaryPageContent.isDisplayed()) {
        await this.SummaryPageContent.getText().then(function (SummaryContent) {
            console.log("Print SummaryContent  " + SummaryContent);
        });
    }

    if (this.PotentialCustIdenYes.isDisplayed()) {
        await this.PotentialCustIdenYes.click();
    }
    
    if (this.custAgreementInfoNo.isDisplayed()) {
        await this.custAgreementInfoNo.click();
    }
    await this.SummaryTxt.click();
    await utility.wait(3000);
    if (this.custAgreementInfoYes.isDisplayed()) {
        await this.custAgreementInfoYes.click();
    }
}



public async installSubmit(){
    if (this.installsubmission.isDisplayed()) {
        await this.installsubmission.click();
}
}
/***
 * @Author Supriya Harikumar
 * @description Submit the job
***/
public async FinalSubmission(){
    if (this.captureCustSignTxt.isDisplayed()) {
        await this.captureCustSignTxt.getText().then(function (captureCustSign) {
            console.log("Print captureCustSign Txt  " + captureCustSign);
        });
    }

    if (await this.signedbyCustorRepDD.isDisplayed()) {
        await utility.wait(1000);
        var select = this.signedbyCustorRepDD;
        select.$('[value="Customer"]').click();
    }
    await this.signaturepadCanvas.click();
    await utility.wait(5000);
    if (this.custRefusedToSignNo.isDisplayed()) {
        await this.custRefusedToSignNo.click();
    }
    
    
    await utility.wait(20000);
    if (this.jobCompleteBtn.isDisplayed()) {
        await this.jobCompleteBtn.click();
        await utility.wait(2000);
        await this.infoOKButton.click();
    }
}

}