/**
  * @Author Jansi Victor
  * @Description UAT Automation for FAULTY20 Workflow
**/

import { element, by, ElementFinder, ElementArrayFinder, browser } from "protractor";
const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import { Utility } from "../support/utility";
import { watchFile } from "fs";
import {
	Alert
} from 'selenium-webdriver';
const utility: Utility = new Utility();

export class JobCompletionPageObject {

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

    public custrefusedtoSign: ElementFinder;
    public signedbycustorRep: ElementFinder;
    public jobCompletesub: ElementFinder;
    public signpad: ElementFinder;
    public jobcompletion: ElementFinder;

    //CGP install 16 changes

    public PPMIDCommText: ElementFinder;
    public PPMIDSendMessageButton: ElementFinder;
    public PPMIDComSuccessButton: ElementFinder;
    public deviceBindingNextSecButton: ElementFinder;
    public checkDetailsAlertButton: ElementFinder;
    public smartEduNextButton: ElementFinder;
    public nextButtonWAN: ElementFinder;
    public gasMeterPairedYes: ElementFinder;
    public FUlHANYes: ElementFinder;
    public IHDPairedYes: ElementFinder;
    public FullWANYes: ElementFinder;
    public FullCOnfigAppliedElecYes: ElementFinder;
    public fullConfigAppliedGasYes: ElementFinder;
    public fullConfigAppliedPPMIDYes: ElementFinder;
    public capturePPMIDBtn: ElementFinder;
    public configAllMeterTextin16: ElementFinder;
   

    

    constructor() {

        //#region Install Comms Hub
        this.deviceBindingCap = element(by.xpath('//div/h4[text()="Device Binding & Commissioning"]'));
        this.ESMEJoinedY = element(by.xpath('//*[@id="dbc2_esme_joined_y"]/span[@class="outer"]'));
        this.deviceOK = element(by.xpath('//*[text()="OK"]'));
        this.GSMEJoined = element(by.xpath('//input[@id="dbc2_gsme_joined_y"]/following-sibling::span[@class="cr"]'));
        this.configIHDPPMID = element(by.xpath('//input[@id="dbc2_full_config_y"]/following-sibling::span[@class="cr"]'));
        this.joinedcapture = element(by.xpath('//*[@id="dbc2_capture_photo_joined"]'));
        this.deviceNext = element(by.xpath('//button[@id="dbc2_btnNextEff"]'));

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

        // CGP changed as per my Job
        this.jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJobMAN4")]'));

        //CGP install 16 Changes

        this.PPMIDCommText = element(by.id('Title_xittd2'));
        this.PPMIDSendMessageButton = element(by.id('xittd2_sendMessageButton'));
        this.PPMIDComSuccessButton = element(by.id('xittd2_nextButton'));
        this.deviceBindingNextSecButton = element(by.id('dbc2_trad_btnNextEff'));
        this.checkDetailsAlertButton = element(by.xpath('//button[@class = "confirm"]'));
        this.smartEduNextButton = element(by.id('btnNextComm'));
        this.gasMeterPairedYes = element(by.id('rb_GasElecMPairSuc_y'));
        this.FUlHANYes = element(by.id('rb_FulHANEst_y'));
        this.IHDPairedYes = element(by.id('rb_IHDPaiSucc_y'));
        this.FullWANYes = element(by.id('rb_FulWANEst_y'));
        this.FullCOnfigAppliedElecYes = element(by.id('rb_FullCFigE_y'));
        this.fullConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));
        this.fullConfigAppliedPPMIDYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[2]'));
        this.capturePPMIDBtn = element(by.className('cameraBtn2line grey mandatoryWhite'));
        this.configAllMeterTextin16 = element(by.xpath('//div/h4[text()="Configure All Meters Installed (Includes Gas & Elec)"]'));    
        this.nextButtonWAN = element(by.id('btnNextEff'));
    }
    public async DeviceBinding() {
        await utility.wait(1000);
        await this.deviceBindingCap.getText().then(function (deviceBindingCapTxt) {
            console.log("Device Binding " + deviceBindingCapTxt);
        });
    }
    public async fillfield53dueldevicebinding() {
        await utility.wait(2000);
        if (await this.ESMEJoinedY.isDisplayed()) {
            await this.ESMEJoinedY.click();
        }
        await utility.wait(2000);
        if (await this.deviceOK.isDisplayed()) {
            await this.deviceOK.click();
        }
        // await utility.wait(2000);
        // if (await this.GSMEJoined.isDisplayed()) {
        //     await this.GSMEJoined.click();
        // }
        await utility.wait(2000);
        if (await this.configIHDPPMID.isDisplayed()) {
            await this.configIHDPPMID.click();
        }
        await utility.wait(1000);
        if (await this.joinedcapture.isDisplayed()) {
            await this.joinedcapture.click();
        }
        await utility.wait(1000);
        if (await this.deviceNext.isDisplayed()) {
            await this.deviceNext.click();
        }
    }

    //CGP added 16/09
    public async filldDevicebinding() {
        
        await utility.wait(2000);
        if (await this.GSMEJoined.isDisplayed()) {
            await this.GSMEJoined.click();
        }
        await utility.wait(2000);
        if (await this.configIHDPPMID.isDisplayed()) {
            await this.configIHDPPMID.click();
        }
        await utility.wait(1000);
        if (await this.joinedcapture.isDisplayed()) {
            await this.joinedcapture.click();
        }
        await utility.wait(1000);
        if (await this.deviceNext.isDisplayed()) {
            await this.deviceNext.click();
        }
    }




    public async energyeffInfo() {
        await utility.wait(1000);
        await this.EnergyeffCap.getText().then(function (EnergyeffCapText) {
            console.log("Energy Efficiency Information " + EnergyeffCapText);
        });
    }
    public async fillfield55duelenergyeff() {
        await utility.wait(1000);
        if (await this.energyeffinfoProvided.isDisplayed()) {
            await this.energyeffinfoProvided.click();
        }
        await utility.wait(1000);
        if (await this.EngeffDocLeft.isDisplayed()) {
            await this.EngeffDocLeft.click();
        }
        await utility.wait(1000);
        if (await this.IsCustomerhappy.isDisplayed()) {
            await this.IsCustomerhappy.click();
        }
        await utility.wait(1000);
        if (await this.additionaleneinfoReq.isDisplayed()) {
            await this.additionaleneinfoReq.click();
        }
        await utility.wait(1000);
        if (await this.EnergyeffNext.isDisplayed()) {
            await this.EnergyeffNext.click();
        }
    }
    public async smartEducation() {
        await utility.wait(1000);
        await this.smartEducationCap.getText().then(function (smartEducationCapTxt) {
            console.log("Smart Education " + smartEducationCapTxt);
        });
    }
    public async fillfield55duelsmartedu() {
        await utility.wait(1000);
        if (await this.smartLtionsite.isDisplayed()) {
            await this.smartLtionsite.click();
        }
        await utility.wait(1000);
        if (await this.custaddnlhelpinfo.isDisplayed()) {
            await this.custaddnlhelpinfo.click();
        }
        await utility.wait(1000);
        if (await this.IsCDemoofequipmentcomp.isDisplayed()) {
            await this.IsCDemoofequipmentcomp.click();
        }
    }
    public async smartLitLeftOnsite() {
        await utility.wait(1000);
        await this.smartLitLeftCap.getText().then(function (smartLitLeftCapTxt) {
            console.log("Smart Literature Left On Site " + smartLitLeftCapTxt);
        });
    }
    public async fillfield56duelsmartLit() {
        await utility.wait(1000);
        if (await this.potentialcustVulnerability.isDisplayed()) {
            await this.potentialcustVulnerability.click();
        }
        await utility.wait(1000);
        if (await this.customeraggreementtoInfo.isDisplayed()) {
            await this.customeraggreementtoInfo.click();
        }
    }
    public async captureCustSign() {
        await utility.wait(1000);
        await this.capturecustsignature.getText().then(function (capturecustsignatureTxt) {
            console.log("Capture customer signature " + capturecustsignatureTxt);
        });
    }
    public async writingSign() {
        browser.sleep(1000);
        this.signpad.click();
    }
    public async fillfield57Capturecust() {
        await utility.wait(1000);
        if (await this.signedbycustorRep.isDisplayed()) {
            var select = this.signedbycustorRep;
            select.$('[value="Customer"]').click();
        }
        await utility.wait(1000);
        if (await this.custrefusedtoSign.isDisplayed()) {
            await this.custrefusedtoSign.click();
        }
        await utility.wait(1000);
        if (await this.jobCompletesub.isDisplayed()) {
            await this.jobCompletesub.click();
        }
        await utility.wait(2000);
        if (await this.deviceOK.isDisplayed()) {
            await this.deviceOK.click();
        }
    }
    public async JobCompletedScreen() {
        await utility.wait(1000);
        if (await this.jobcompletion.isDisplayed()) {
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






}