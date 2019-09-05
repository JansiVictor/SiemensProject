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

export class Installation16JobCompletionPageObject {

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
    public EEInfoDisplayText : ElementFinder;
    public randomEUDevicePPMID: ElementFinder;
    public PPMIDCommText: ElementFinder;
    public PPMIDSendMessageButton: ElementFinder;
    public PPMIDComSuccessButton: ElementFinder;
    public deviceBindingNextSecButton: ElementFinder;
    public checkDetailsAlertButton: ElementFinder;
    public smartEduNextButton: ElementFinder;
    public nextButtonWAN: ElementFinder;
   


    constructor() {
        this.installPPMIDText = element(by.id('Title_ihdscan'));
        this.PPMIDOfferedYes = element(by.id('ihdscan2_ihdPpmidOfferedtrue'));
        this.PPMIDAccepted = element(by.id('ihdscan2_ihdOrPPMIDAccepted_a'));
        this.PPMIDLOCDD = element(by.id('ihdscan2_assetLocationSelect'));
        this.PPMIDToInstall = element(by.id('ihdscan2_assetSelect'));
        this.inputPPMIDSerialNum = element(by.id('ihdscan2_assetSerialNumber'));
        this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
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
        //this.configAllMeterText = element(by.id('TITLE_CFigAllMetInst'));
        this.configAllMeterText = element(by.xpath('//div/h4[text()="Configure All Meters Installed (Includes Gas & Elec)"]'));
        
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
        this.nextButtonWAN = element(by.id('btnNextEff'));
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
        this.EEInfoDisplayText = element(by.xpath('//*[@id="lbl_EnEff_info"]/div/h4'));
        //this.EEInfoDisplayText = element(by.id('lbl_EnEff_info'));
        this.randomEUDevicePPMID = element(by.xpath('//div[text()="EUI Device ID:"]'));
        this.PPMIDCommText = element(by.id('Title_xittd2'));
        this.PPMIDSendMessageButton = element(by.id('xittd2_sendMessageButton'));
        this.PPMIDComSuccessButton = element(by.id('xittd2_nextButton'));
        this.deviceBindingNextSecButton = element(by.id('dbc2_trad_btnNextEff'));
        this.checkDetailsAlertButton = element(by.xpath('//button[@class = "confirm"]'));
        this.smartEduNextButton = element(by.id('btnNextComm'));    

   }
 
public async PPMIDSectiondispaly(){
    await utility.wait(5000);

    if (this.installPPMIDText.isDisplayed()) {
        await this.installPPMIDText.getText().then(function (installPPMID) {
            console.log("find installPPMID Text  " + installPPMID);
        });
    }
}

public async fillPPMIDSection(index:number){
    if (this.PPMIDOfferedYes.isDisplayed()) {
        await this.PPMIDOfferedYes.click();
    }
    if (this.PPMIDAccepted.isDisplayed()) {
        await this.PPMIDAccepted.click();
    }
    if (await this.PPMIDLOCDD.isDisplayed()) {
        var select = this.PPMIDLOCDD;
        select.$('[value="A"]').click();
        await utility.wait(1000);
    }
    if (await this.PPMIDToInstall.isDisplayed()) {
		await utility.wait(5000);
		// click the dropdown
		this.PPMIDToInstall.click()
		browser.sleep(5000)
	//index = index ;
	console.log("Selecting element based index : "+index)
	// select the option
	await this.PPMIDToInstall.element(by.css("option:nth-child("+index+")")).click()
	await utility.wait(8000);
		await expect(await this.inputPPMIDSerialNum.isPresent());
		var options = this.PPMIDinstallDDList.getAttribute('value');
        await this.inputPPMIDSerialNum.sendKeys(options);
        await this.randomEUDevicePPMID.click();
		let ale: Alert = browser.switchTo().alert();
		// clicks 'OK' button
		ale.accept();
		//await utility.wait(2000);
        await this.infoOKButton.click();
    }
  
    if (this.ppmidAdditionalNote.isDisplayed()) {
        await this.ppmidAdditionalNote.sendKeys('Additonal Notes CGP');
    }
    if (this.ppmidNXTBtn.isDisplayed()) {
        await this.ppmidNXTBtn.click();
    }
}
//-------------------------

public async PPMIDCommisioningdisplay(){
    if (this.PPMIDCommText.isDisplayed()) {
        await this.PPMIDCommText.getText().then(function (PPMIDCommText) {
            console.log("find PPMIDCommText Text  " + PPMIDCommText);
        });
    }
}
//--------------------------

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

//---------------------------------
 
public async XIPMDSectiondispaly(){
    if (this.ppmidCommSuccess.isDisplayed()) {
        await this.ppmidCommSuccess.getText().then(function (ppmidComm) {
            console.log("find ppmidCommSuccess Text  " + ppmidComm);
        });
    }
}

public async fillXIPMDSection(){
    if (this.ppmidCommSuccess.isDisplayed()) {
        await this.ppmidCommSuccess.click();
    }
    await utility.wait(5000);
}


public async DeviceBindingSectiondispaly(){
    
    if (this.diviceBindingTxt.isDisplayed()) {
        await this.diviceBindingTxt.getText().then(function (diviceBinding) {
            console.log("find diviceBinding Text  " + diviceBinding);
        });
    }
}

 /***
 
 * @description Fill Device Binding Section display
***/
public async fillDeviceBindingSection(){
    await utility.wait(5000);

   
   if (this.gasMeterPairedYes.isDisplayed()) {
      await this.gasMeterPairedYes.click();
    }
    if (this.IHDPairedYes.isDisplayed()) {
        await this.IHDPairedYes.click();
    }
    if (this.FUlHANYes.isDisplayed()) {
        await this.FUlHANYes.click();
    }
    if (this.deviceBindingNextSecButton.isDisplayed()) {
        await this.deviceBindingNextSecButton.click();
    }

   
}

/***
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
 
 * @description Fill config All meter Section
***/
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

/***

 * @description Emmergency Efficiency Info Section display
***/
public async EEInfoDisplay(){
    
    if (this.EEInfoDisplayText .isDisplayed()) {
        await this.EEInfoDisplayText .getText().then(function (EEInfo) {
            console.log("find EEInfo Text  " + EEInfo);
        });
    }
}

/***
 
 * @description Fill Energy Efficiency Info Section
***/
public async fillEEInfo(){
    await utility.wait(5000);
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
    await utility.wait(3000); 

    if (this.EENxtBtn.isDisplayed()) {
        await this.EENxtBtn.click();
    }
}

/***

 * @description Smart Education Section display
***/
public async smartEducationDisplay(){
    await utility.wait(5000);
    if (this.smartEducationText.isDisplayed()) {
        await this.smartEducationText.getText().then(function (smartEducation) {
            console.log("find smartEducation Text  " + smartEducation);
        });
    }
}
/***

 * @description Fill Smart Education details Section
***/
public async fillSmartEducationDetails(){
    await utility.wait(5000);
if (this.smartLetLeftYes.isDisplayed()) {
        await this.smartLetLeftYes.click();
    }
    if (this.HelpandInfoYEs.isDisplayed()) {
        await this.HelpandInfoYEs.click();
    }
    if (this.DemoOfEquipmentYes.isDisplayed()) {
        await this.DemoOfEquipmentYes.click();
    }
    if (this.smartEduNextButton.isDisplayed()) {
        await this.smartEduNextButton.click();
    }
   
}

/***

 * @description Summary Section display
***/
public async summaryDisplay(){
    await utility.wait(5000);
    if (this.SummaryTxt.isDisplayed()) {
        await this.SummaryTxt.getText().then(function (Summary) {
            console.log("find Summary Text  " + Summary);
        });
    }
}

/***

 * @description Fill and Print Summary Content
***/
public async fillAndPrintSummaryContent(){
    await utility.wait(3000);
    if (this.SummaryPageContent.isDisplayed()) {
        await this.SummaryPageContent.getText().then(function (SummaryContent) {
            console.log("Print SummaryContent  " + SummaryContent);
        });
    }
    await utility.wait(3000);
    if (this.PotentialCustIdenYes.isDisplayed()) {
        await this.PotentialCustIdenYes.click();
        console.log("poetenttial button clicked");
    }else{
        console.log("poterntial not clicked");
    }
    await utility.wait(3000);
    if (this.custAgreementInfoYes.isDisplayed()) {
        await this.custAgreementInfoYes.click();
        console.log("button clicked");
    }else{
        console.log("button not clicked");
    }
}
/***
 
 * @description Submit the job
***/
public async FinalSubmission(){
    if (this.captureCustSignTxt.isDisplayed()) {
        await this.captureCustSignTxt.getText().then(function (captureCustSign) {
            console.log("Print captureCustSign Txt  " + captureCustSign);
        });
    }
    await utility.wait(3000);
    if (await this.signedbyCustorRepDD.isDisplayed()) {
        this.signedbyCustorRepDD.click();
        await utility.wait(1000);
        var select = this.signedbyCustorRepDD;
        select.$('[value="Customer"]').click();
        this.signedbyCustorRepDD.click(); // check later
    }
    await utility.wait(3000);
    if (this.custRefusedToSignNo.isDisplayed()) {
        await this.custRefusedToSignNo.click();
    }
    await utility.wait(5000);
    if (this.jobCompleteBtn.isDisplayed()) {
        await utility.wait(3000);
        await this.jobCompleteBtn.click();
        await this.infoOKButton.click();
    }
}

}