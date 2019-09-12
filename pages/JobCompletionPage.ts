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

    public summaryCap: ElementFinder;
    public TST12jobcompletion: ElementFinder;

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

        this.jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJob1JFAULTY 20")]'));

        this.summaryCap = element(by.xpath('//div/h4[contains(text(),"SUMMARY")]'));
        this.TST12jobcompletion = element(by.xpath('//*[starts-with(@id,"CompletedJob1JFAULTY 18")]'));
        

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
        await this.signpad.click();
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

    //TST12 FLTY GAS

    public async Tst12fillfield53dueldevicebinding() {
        await utility.wait(2000);
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
        await utility.wait(2000);
        if (await this.deviceNext.isDisplayed()) {
            await this.deviceNext.click();
        }
    }

    public async TST12summary() {
        await utility.wait(1000);
        await this.summaryCap.getText().then(function (summaryCapTxt) {
            console.log("SUMMARY " + summaryCapTxt);
        });
    }
    public async Tst12JobCompletedScreen() {
        await utility.wait(1000);
        if (await this.TST12jobcompletion.isDisplayed()) {
            console.log("Job completed successfully");
        }
    }
}