import { element, by, ElementFinder, ElementArrayFinder} from "protractor";
    const { Given, When, Then } = require("cucumber");
    const chai = require("chai");
    const expect = chai.expect;
    import { Utility } from "../support/utility";
    const utility: Utility = new Utility();



    export class RiskAssessmentforGASPageObject {

    public riskAssessGas: ElementFinder;
    public meterPressureLow: ElementFinder;
    public voltStickYEs: ElementFinder;
    public theftOfGasYes: ElementFinder;
    public ecvChksPAss: ElementFinder;
    public workAreaSafetyYes: ElementFinder;
    public captureEvidence: ElementFinder;
    public additionalGASNote: ElementFinder;
    public safeToContinueYEs: ElementFinder;
    public suitableforSmartInstallationTxt: ElementFinder;
    public suitableforInstaYes: ElementFinder;
    public repositionReqDD: ElementFinder;
    public additionalSmartNote: ElementFinder;
    public suitablenxtBtn: ElementFinder;
    public captureInitialPhotogastxt: ElementFinder;
    public captureInitialPhotogasbtn: ElementFinder;
    public preInstalationGASTxt: ElementFinder;
    public gasTightnessYes: ElementFinder;
    public captureGTTPhotobtn: ElementFinder;
    public dropInPressreYes: ElementFinder;
    public DIPGasDD: ElementFinder;
    public meterTypeDD: ElementFinder;
    public CustSmellGasYes: ElementFinder;
    public gasTightnessRemrk: ElementFinder;
    public failureOutcomeGT: ElementFinder;
    public reportToGTYes: ElementFinder;
    public inputGTRef: ElementFinder;
    public reportedToHSYEs: ElementFinder;
    public inputAirLineRef: ElementFinder;
    public waitForGTYes: ElementFinder;
    public GTResolveIssue: ElementFinder;
    public currentMeterDetailsTxt: ElementFinder;
    // public newMeterDD: ElementFinder;
    // public newMeterDD: ElementFinder;
    // public newMeterDD: ElementFinder;
    // public newMeterDD: ElementFinder;
    // public newMeterDD: ElementFinder;
    // public newMeterDD: ElementFinder;
    // public newMeterDD: ElementFinder;

    constructor() {
        this.riskAssessGas = element(by.id('Title_RiskAss_gas'));
        this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
        this.voltStickYEs = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
        this.theftOfGasYes = element(by.xpath('//input[@id="raga1"]/following-sibling::span[@class="outer"]'));
        this.ecvChksPAss = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
        this.workAreaSafetyYes = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
        this.captureEvidence = element(by.xpath('(//button[@id="btn1"])[1]'));
        this.additionalGASNote = element(by.id('text1'));
        this.safeToContinueYEs = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
        this.suitableforSmartInstallationTxt = element(by.id('Title_Smart_Elec'));
        this.suitableforInstaYes = element(by.id('rb_SuitFS_y'));
        this.repositionReqDD = element(by.id('repositionSelect'));
        this.additionalSmartNote = element(by.id('smartnotes'));
        this.suitablenxtBtn = element(by.id('btn_Next_Section'));
        this.captureInitialPhotogastxt = element(by.id('Title_Init_Photo'));
        this.captureInitialPhotogasbtn = element(by.id('btn_Init_Photo'));
        this.preInstalationGASTxt = element(by.xpath('//div/h4[text()="Pre Installation Gas Tightness Test"]'));
        this.gasTightnessYes = element(by.id('rb_PreGasTigTCarOut_y'));
        this.captureGTTPhotobtn = element(by.id('btn_CapPho_GTT'));
        this.dropInPressreYes = element(by.id('rb_WasDropPress_y'));
        this.DIPGasDD = element(by.id('cbx_DipPress_sel'));
        this.meterTypeDD = element(by.id('cbx_MetreType_sel'));
        this.CustSmellGasYes = element(by.id('rb_SmellGas_y'));
        this.gasTightnessRemrk = element(by.id('txt_AddNotGasTigT'));
        this.failureOutcomeGT = element(by.id('rb_TestFailOutCmGTIss_y'));
        this.reportToGTYes = element(by.id('rb_RepGT_y'));
        this.inputGTRef = element(by.id('gt_issue'));
        this.reportedToHSYEs = element(by.id('rb_RepAirLine_y'));
        this.inputAirLineRef = element(by.id('hsjobref'));
        this.waitForGTYes = element(by.id('rb_GTAttSite_y'));
        this.GTResolveIssue = element(by.id('rb_GTResIss_y'));
        this.currentMeterDetailsTxt = element(by.id('Title_CurrMe_Det'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
        // this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
    
    
        }
    
    public async riskAssessmentGASDisplayed(){
        if(this.riskAssessGas.isDisplayed()){
            await this.riskAssessGas.getText().then(function(riskAssess) {
                console.log("find riskAssess Text  " + riskAssess);
                });
         }

    }

    public async fillRiskAssessGas(){
        await this.meterPressureLow.click(); 
    await this.voltStickYEs.click(); 
    await this.theftOfGasYes.click(); 
    await this.ecvChksPAss.click(); 
    await this.workAreaSafetyYes.click(); 
    await this.captureEvidence.click(); 
    await expect(await this.additionalGASNote.isPresent());
    await this.additionalGASNote.sendKeys('Fault Checked');  
    await this.safeToContinueYEs.click(); 
    await utility.wait(2000);
    }
public async suitableForSmartInstallationTxt(){

    if(this.suitableforSmartInstallationTxt.isDisplayed()){
        await this.suitableforSmartInstallationTxt.getText().then(function(suitableforSmartInstallation) {
            console.log("find suitableforSmartInstallation Text  " + suitableforSmartInstallation);
            });
     }

}

public async fillSuitablityForSmartInstallation(){
    await this.suitableforInstaYes.click();
    if(await this.repositionReqDD.isDisplayed()){
        var select = this.repositionReqDD;
        select.$('[value="No Reposition Required"]').click();
        }
        await utility.wait(1000);
        await this.additionalSmartNote.click();  
        await utility.wait(1000);
}

public async captureInitialPhotoTxt(){
    if(this.captureInitialPhotogastxt.isDisplayed()){
        await this.captureInitialPhotogastxt.getText().then(function(captureInitialPhotogas) {
            console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
            });
     }
     
}

public async preInstallationGasTTxt(){
    if(this.preInstalationGASTxt.isDisplayed()){
        await this.preInstalationGASTxt.getText().then(function(preInstalationGAS) {
            console.log("find preInstalationGAS Text  " + preInstalationGAS);
            });
     }
}

public async preInstallationGasT(){
    await this.gasTightnessYes.click();
    await this.captureGTTPhotobtn.click();
    await this.dropInPressreYes.click();
    if(await this.DIPGasDD.isDisplayed()){
        var select = this.DIPGasDD;
        select.$('[value="2"]').click();
        }
        await utility.wait(2000);
        if(await this.meterTypeDD.isDisplayed()){
            var select = this.meterTypeDD;
            select.$('[value="2"]').click();
            }
            await utility.wait(2000);
            await this.CustSmellGasYes.click();
            await this.reportToGTYes.click();
            await expect(await this.inputGTRef.isPresent());
            await this.inputGTRef.sendKeys('1234'); 
            await this.reportedToHSYEs.click();
            await expect(await this.inputAirLineRef.isPresent());
            await this.inputAirLineRef.sendKeys('123456');   
            await this.waitForGTYes.click();
            await this.GTResolveIssue.click();
            await utility.wait(2000);
}

public async currentMeterDetailsTxtDisplay(){

    if(this.currentMeterDetailsTxt.isDisplayed()){
        await this.currentMeterDetailsTxt.getText().then(function(currentMeterDetails) {
            console.log("find currentMeterDetails Text  " + currentMeterDetails);
            });
     }

}

    }
