    import { element, by, ElementFinder, ElementArrayFinder} from "protractor";
    const { Given, When, Then } = require("cucumber");
    const chai = require("chai");
    const expect = chai.expect;
    import { Utility } from "../support/utility";
    const utility: Utility = new Utility();



    export class RiskAssessmentPageObject {

    public riskAssesmentHEader: ElementFinder;
    public initialRiskAssesment: ElementFinder;
    public canYouSmellText: ElementFinder;
    public canYouSmellYES:ElementFinder;
    public turnedOffGasYES: ElementFinder;
    public callEGPYES: ElementFinder;
    public inputEGPRef: ElementFinder;
    public reportToHS: ElementFinder;
    public riskelecText: ElementFinder;
    public performRiskText: ElementFinder;
    public airLineRefInput: ElementFinder;
    public OKtoProceedEGPOutcome: ElementFinder;
    public infoText: ElementFinder;
    public infoOKButton: ElementFinder;
    public performRisk: ElementFinder;
    public performRiskYES: ElementFinder;
    public selectRiskReasonDD: ElementFinder;
    public RiskAssessmentPassYES: ElementFinder;
    public riskAssessmentinput: ElementFinder;
    public cameraBtn: ElementFinder;
    public nextSectionBtn: ElementFinder;
    public riskAssessGASText: ElementFinder;
    public meterPressureLow: ElementFinder;
    public voltStickYES: ElementFinder;
    public theftOfGASFAIL: ElementFinder;
    public incidentToEGPYES: ElementFinder;
    public EGPJobRefInput: ElementFinder;
    public ECVChecksBtnYES: ElementFinder;
    public workSafetyYES: ElementFinder;
    public GASRiskTextInput: ElementFinder;
    public NextSectiontoCaptureBtn: ElementFinder;
    public NeedtoWorkYES: ElementFinder;



    constructor() {
        this.initialRiskAssesment = element(by.xpath('(//div/h4[text()="Initial Risk Assessment"])'));
        this.riskAssesmentHEader = element(by.xpath('(//div[text()="Risk Assessment"])[1]'));
        this.canYouSmellText = element(by.xpath('//div[text()="Can you smell Gas?"]'));
        this.canYouSmellYES = element(by.xpath('//label[@id="rb_SmelGas_y"]'));
        this.turnedOffGasYES = element(by.xpath('//label[@id="rb_TurnGasOff_y"]'));
        this.callEGPYES = element(by.xpath('//label[@id="rb_CallEGP_y"]'));
        this.inputEGPRef = element(by.xpath('//input[@id="txt_EGP_ref"]'));
        this.riskelecText = element(by.xpath('//div[@id="Title_RiskAss_elec"]'));
        this.performRiskText = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
        // this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
        this.OKtoProceedEGPOutcome = element(by.xpath('//label[@id="rb_OKProce_y"]'));
        this.infoText = element(by.xpath('//div/p[@style="display: block;"]'));
        this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
        this.performRisk = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
        this.RiskAssessmentPassYES = element(by.xpath('//input[@id="radiora9"]/following-sibling::span[@class="outer"]'));
        this.selectRiskReasonDD = element(by.xpath('//select[@id="select1"]'));
        this.riskAssessmentinput = element(by.xpath('//textarea[@id="ranotes"]'));
        this.cameraBtn = element(by.xpath('//button[@class="cameraBtn grey"]'));
        this.nextSectionBtn = element(by.xpath('//button[@id="btnNextrae"]'));
        this.riskAssessGASText = element(by.xpath('//div/h4[text()="Risk Assessment - Gas"]'));
        this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
        this.voltStickYES = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
        this.theftOfGASFAIL = element(by.xpath('//input[@id="ragb1"]/following-sibling::span[@class="outer"]'));
        this.incidentToEGPYES = element(by.xpath('//input[@id="ragc1"]/following-sibling::span[@class="outer"]'));
        this.EGPJobRefInput = element(by.xpath('//input[@id="input1"]'));
        this.ECVChecksBtnYES = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
        this.workSafetyYES = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
        this.GASRiskTextInput = element(by.xpath('//textarea[@id="text1"]'));
        this.workSafetyYES = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
        this.NextSectiontoCaptureBtn = element(by.xpath('((//div[@class="btn-container green"])/button[@id="btnNextComm"])[2]'));
        this.reportToHS = element(by.xpath('//label[@id="rb_RepIncHS_y"]'));
        this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
        this.NeedtoWorkYES = element(by.xpath('//input[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
    }

    public async verifyRiskAssessmentPage() {
        this.riskAssesmentHEader.getText().then(function(riskAssesmentHEaderText) {
            console.log("find RiskAssesment Header Text  " + riskAssesmentHEaderText);
        });
    }

    public async verifyInitialRiskAssessmentPage(){
        this.initialRiskAssesment.getText().then(function(initialRiskAssesmentText) {
            console.log("find initialRiskAssesment Text  " + initialRiskAssesmentText);
            });
    }

    public async inputInitialRiskAssessmentDetails(){
        await expect(this.initialRiskAssesment.isPresent());
        if(this.canYouSmellText.isDisplayed()){
            await this.canYouSmellYES.click();
        }
        if(this.turnedOffGasYES.isDisplayed()){
            await this.turnedOffGasYES.click();
        }
        if(this.callEGPYES.isDisplayed()){
            await this.callEGPYES.click();
        }
        if(this.inputEGPRef.isDisplayed()){
            await utility.wait(2000);
            await this.inputEGPRef.sendKeys('123456');
        }
        if(this.reportToHS.isDisplayed()){
            await utility.wait(2000);
            await this.reportToHS.click();
        }
        if(this.airLineRefInput.isDisplayed()){
            await utility.wait(2000);
            await this.airLineRefInput.sendKeys('5678910');
        }
        if(this.OKtoProceedEGPOutcome.isDisplayed()){
            await utility.wait(2000);
            await this.OKtoProceedEGPOutcome.click();
            await utility.wait(5000);
        }

    }

    public async infoTextPopUp(){
        if(this.infoText.isDisplayed()){
            //  await this.infoOKButton.click();
            await utility.wait(5000);
        }
    }

    public async verifyriskElecText(){

        if(this.riskelecText.isDisplayed()){
            await this.riskelecText.getText().then(function(riskelec) {
                console.log("find riskelec Text  " + riskelec);
            });
        }
    }

    public async fillRiskAssesmentElecFields(){
        if(this.performRiskText.isDisplayed()){
            await this.performRisk.click();
        }
        if(this.selectRiskReasonDD.isDisplayed()){
            var select = this.selectRiskReasonDD;
            select.$('[value="23"]').click();
            }
            if(this.RiskAssessmentPassYES.isDisplayed()){
            await this.RiskAssessmentPassYES.click();
            }
            if(this.riskAssessmentinput.isDisplayed()){
            await this.riskAssessmentinput.sendKeys('Testing Input');
            }
    }

    public async capturePhotoBtnDisplayed(){
        if(this.cameraBtn.isDisplayed()){
            await this.cameraBtn.click();
        }
    }

    public async clickNextSectionBtn(){
        if(this.nextSectionBtn.isDisplayed()){
            await this.nextSectionBtn.click();
            await utility.wait(5000);
        }
    }

    // public async electInstallationSection(){
    //     if(this.riskelecText.isDisplayed()){
    //         this.riskelecText.getText().then(function(riskelec) {
    //             console.log("find riskelec Text  " + riskelec);
    //             });
    //     }
    // }
    }
