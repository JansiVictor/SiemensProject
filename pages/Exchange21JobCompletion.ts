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

export class Exchange21JobCompletionPageObject {

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
    public EEUIDText:ElementFinder;
    public DeviceNxtBtn: ElementFinder;
    public fullEx20ConfigAppliedGasYes: ElementFinder;
    public eSign: ElementFinder;
    public custSignText:ElementFinder;
    public AppointmentText:ElementFinder;

    constructor() {
        this.AppointmentText = element(by.xpath('(//*[@id="btn_top"]/div[2]/div)[1]'));
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
    }

    /***
 * @Author Aparna Das
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
 * @Author Aparna Das
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
        await utility.wait(utility.very_low);
    }
    if (await this.PPMIDToInstall.isDisplayed()) {
		await utility.wait(2000);
		// click the dropdown
		this.PPMIDToInstall.click();
		browser.sleep(1000);
	//index = index ;
	console.log("Selecting element based index : "+index);
	// select the option
	await this.PPMIDToInstall.element(by.css("option:nth-child("+index+")")).click()
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
 * @Author Aparna Das
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
 * @Author Aparna Das
 * @description Fill XIPMD section / ppmidComm 
***/
public async fillXIPMDSection(){
    if (this.ppmidCommSuccess.isDisplayed()) {
        await this.ppmidCommSuccess.click();
    }
    await utility.wait(utility.medium_low);
}

 /***
 * @Author Aparna Das
 * @description DeviceBinding Section display
***/
public async DeviceBindingSectiondispaly(){
    if (this.diviceBindingTxt.isDisplayed()) {
        await this.diviceBindingTxt.getText().then(function (diviceBinding) {
            console.log("find diviceBinding Text  " + diviceBinding);
        });
    }
}

 /***
 * @Author Aparna Das
 * @description Fill Device Binding Section display
***/
public async fillDeviceBindingSection(){
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

/***
 * @Author Aparna Das
 * @description Fill Device Binding Section display
***/
public async fillDeviceBindingGasMeterSection(){
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
public async fillEx20DeviceBindingSection(){
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
public async configAllmeterDisplay(){
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
public async fillConfigAllmeter(){
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
public async fillConfigAllmeterGASElec(){
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
 * @Author Aparna Das
 * @description Fill config All meter Section Ex20
***/
public async fillEx20ConfigAllmeter(){
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
public async EEInfoDisplay(){
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
 * @Author Aparna Das
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
 * @Author Aparna Das
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
 * @Author Aparna Das
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
 * @Author Aparna Das
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
    if (this.custAgreementInfoYes.isDisplayed()) {
        await this.custAgreementInfoYes.click();
        
    }
}
/***
 * @Author Aparna Das
 * @description Submit the job
***/
public async FinalSubmission(){
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
        await this.infoOKButton.click();
        
    }

    await utility.wait(2000);
    if(this.AppointmentText.isDisplayed){
        this.AppointmentText.getText().then(async function(appointment) {
            console.log("find Appointment Page Text  " + appointment);
        });
   
    }
}

}