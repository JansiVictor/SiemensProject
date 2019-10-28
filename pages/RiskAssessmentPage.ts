import {
    $,
    browser,
    element,
    by,
    ElementFinder,
    ElementArrayFinder,
    ExpectedConditions
} from "protractor";
const chai = require("chai");
const expect = chai.expect;
import {
    Utility
} from "../support/utility";
const utility: Utility = new Utility();
import { GenericPageObject } from "./GenericPage";
const Gen: GenericPageObject = new GenericPageObject();

export class RiskAssessmentPageObject {

    public riskAssesmentHEader: ElementFinder;
    public initialRiskAssesment: ElementFinder;
    public initialRiskAssessmentTab: ElementFinder;
    public RiskAssessmentTab: ElementFinder;
    public RiskAssessmentGasTab: ElementFinder;
    public CaptureInitialGasInstTab: ElementFinder;
    public InitPolCheckMartindaleTab: ElementFinder;
    public InitPCMTab: ElementFinder;
    public canYouSmellText: ElementFinder;
    public canYouSmellYES: ElementFinder;
    public turnedOffGasYES: ElementFinder;
    public callEGPYES: ElementFinder;
    public inputEGPRef: ElementFinder;
    public reportToHS: ElementFinder;
    public riskelecText: ElementFinder;
    public performRiskText: ElementFinder;
    public performRiskPassText: ElementFinder;
    public airLineRefInput: ElementFinder;
    public OKtoProceedEGPOutcome: ElementFinder;
    public infoText: ElementFinder;
    public infoOKButton: ElementFinder;
    public performRisk: ElementFinder;
    public performRiskYES: ElementFinder;
    public selectRiskReasonDD: ElementFinder;
    public RiskAssessmentPassYES: ElementFinder;
    public persormRiskPassText: ElementFinder;
    public riskAssessmentinput: ElementFinder;
    public nextSectionBtn: ElementFinder;
    public initriskNextSection: ElementFinder;
    public gasNextSection: ElementFinder;
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
    public NeedtoWorkY: ElementFinder;

    public riskAssessElecText: ElementFinder;
    public riskgasText: ElementFinder;
    public capmeterressureText: ElementFinder;
    public capmeterressureLow: ElementFinder;
    public capmeterressureHigh: ElementFinder;
    public voltstickCheckText: ElementFinder;
    public voltstickCheckPass: ElementFinder;
    public voltstickCheckFail: ElementFinder;
    public tamptheftGasText: ElementFinder;
    public tamptheftGasPass: ElementFinder;
    public tamptheftGasFail: ElementFinder;
    public ecvCheckText: ElementFinder;
    public ecvCheckPass: ElementFinder;
    public ecvCheckFail: ElementFinder;
    public WorkAreaSafetyCheckText: ElementFinder;
    public WorkAreaSafetyCheckPass: ElementFinder;
    public WorkAreaSafetyCheckFail: ElementFinder;
    public gasriskAdditionalText: ElementFinder;
    public gasriskAdditional: ElementFinder;
    public safetoContText: ElementFinder;
    public safetoContPass: ElementFinder;
    public safetoContFail: ElementFinder;
    public capgasBtn: ElementFinder;
    public capfullgasBtn: ElementFinder;
    public capfullmeterInst: ElementFinder;
    public CaptureInitialGasInstNext: ElementFinder;

    public captureInitialPhotoElec: ElementFinder
    public capturephotoMeterInstall: ElementFinder
    public initialpolarityCheck: ElementFinder
    public smartInstallationNextBtn: ElementFinder
    public polarityCheckDD: ElementFinder
    public socketSafetyBtnYES: ElementFinder
    public socketSetLocDD: ElementFinder
    public capturePreinsatllation: ElementFinder
    public anySocketFoundNO: ElementFinder
    public MeterAndCutOutText: ElementFinder
    public socketSafetyBtnNO: ElementFinder
    public anySocketFoundYES: ElementFinder
    public suitableForSmartInstallationYes: ElementFinder
    public equipmentRepositionDD: ElementFinder
    public suitableSmartInstalationText: ElementFinder
    public instalationNotes: ElementFinder
    public polarityCheckCutOutYES: ElementFinder
    public polarityCheckAtMeter: ElementFinder
    public currentMeterDetailsText: ElementFinder
    public meterCutOutNxtBtn: ElementFinder
    public existingElecMeterYes: ElementFinder
    public removeMeterText: ElementFinder
    public performanceRiskNextBtn: ElementFinder
    public theftOfGASPASS: ElementFinder;
    public capgasinstTab: ElementFinder;
    public polarityMarindaleNxt: ElementFinder;
    public meterCutOutNxt: ElementFinder;
    public cameraElecBtn: ElementFinder;
    public cameraGasBtn: ElementFinder;
    public polchkCutOutText: ElementFinder;
    public polchkatmtrText: ElementFinder;
    public nextbtntoRemove: ElementFinder;

    public performriskmodel: ElementArrayFinder;
    public performriskY: ElementFinder;

    public nextbtntoRemfromElec: ElementFinder;
    public infoOkbutn: ElementFinder;
    public captureInitialPhotoE: ElementFinder;
    public NeedtoWorkYES: ElementFinder;

    //added by CGP for FLTY20 TRAD
    public reportToMngr: ElementFinder;
    public teamMgnrName: ElementFinder;
    public teamMgnrAuth: ElementFinder;
    public calledAirline: ElementFinder;
    public reportedRiskDNO: ElementFinder;
    public airLineRefName: ElementFinder;
    public DNOrefNum: ElementFinder;
    public meterCutOutSubmitBtn: ElementFinder;
    public meterCutOutSubmit1: ElementFinder;

    //cgp added
    public CaptureInitialElecInstTab: ElementFinder;
    public clickSubmit_SFENMEX15: ElementFinder;

    //Marks Update
    private riskAssesmentSubmitButton: ElementFinder;
    private initialPolarityCheckMartindaleTestBtn: ElementFinder;

    constructor() {
        this.initialPolarityCheckMartindaleTestBtn = element(by.xpath("//div[@id='Title_InitPolMart_test']"))
        this.initialRiskAssesment = element(by.xpath('//div/h4[text()="Initial Risk Assessment"]'));
        this.initialRiskAssessmentTab = element(by.css('.down'));
        this.RiskAssessmentTab = element(by.css('.ng-scope:nth-child(2) > .task-section .down'));
        this.RiskAssessmentGasTab = element(by.css('.ng-scope:nth-child(3) > .task-section .down'));
        this.CaptureInitialGasInstTab = element(by.css('.ng-scope:nth-child(4) > .task-section .down'));
        this.InitPolCheckMartindaleTab = element(by.css('#Title_InitPolMart_test > div.titleIcon.right.down'));
        this.InitPCMTab = element(by.css('#Title_InitPCM > div.titleIcon.right.down'));
        this.riskAssesmentSubmitButton = element(by.xpath("//button[@ng-click='submitRiskTask(wo)']"));
        this.riskAssesmentHEader = element(by.xpath('(//div[text()="Risk Assessment"])[1]'));
        this.canYouSmellText = element(by.xpath('//div[text()="Can you smell Gas?"]'));
        this.canYouSmellYES = element(by.xpath('//label[@id="rb_SmelGas_y"]'));
        this.turnedOffGasYES = element(by.xpath('//label[@id="rb_TurnGasOff_y"]'));
        this.callEGPYES = element(by.xpath('//label[@id="rb_CallEGP_y"]'));
        this.inputEGPRef = element(by.xpath('//input[@id="txt_EGP_ref"]'));
        this.riskelecText = element(by.xpath('//div[@id="Title_RiskAss_elec"]'));
        this.OKtoProceedEGPOutcome = element(by.xpath('//label[@id="rb_OKProce_y"]'));
        this.infoText = element(by.xpath('//div/p[@style="display: block;"]'));
        this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
        this.infoOkbutn = element(by.xpath('//*[text()="OK"]'));
        this.performRisk = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
        this.performRiskPassText = element(by.xpath('//div[text()="Risk Assessment Pass:"]'));
        this.selectRiskReasonDD = element(by.xpath('//select[@id="select1"]'));
        this.riskAssessmentinput = element(by.xpath('//textarea[@id="ranotes"]'));
        this.cameraElecBtn = element(by.xpath('(//button[@class="cameraBtn grey"])'));
        this.cameraGasBtn = element(by.xpath('(//button[@class="cameraBtn grey"])[2]'));
        this.nextSectionBtn = element(by.xpath('//button[@id="btnNextrae"]'));
        this.initriskNextSection = element(by.xpath('(//button[@id="btnNextComm"])'));
        this.gasNextSection = element(by.xpath('(//button[@id="btnNextComm"])[2]'));
        this.CaptureInitialGasInstNext = element(by.xpath('(//button[@id="btnNextComm"])[3]'));
        this.riskAssessGASText = element(by.xpath('//div/h4[text()="Risk Assessment - Gas"]'));
        this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
        this.voltStickYES = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
        this.theftOfGASFAIL = element(by.xpath('//input[@id="ragb1"]/following-sibling::span[@class="outer"]'));
        this.theftOfGASPASS = element(by.xpath('//input[@id="raga1"]/following-sibling::span[@class="outer"]'));
        this.incidentToEGPYES = element(by.xpath('//input[@id="ragc1"]/following-sibling::span[@class="outer"]'));
        this.EGPJobRefInput = element(by.xpath('//input[@id="input1"]'));
        this.ECVChecksBtnYES = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
        this.workSafetyYES = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
        this.GASRiskTextInput = element(by.xpath('//textarea[@id="text1"]'));
        this.capgasBtn = element(by.xpath('(//button[@id="btn1"])[2]'));
        this.NextSectiontoCaptureBtn = element(by.xpath('((//div[@class="btn-container green"])/button[@id="btnNextComm"])[2]'));
        this.reportToHS = element(by.xpath('//label[@id="rb_RepIncHS_y"]'));
        this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
        this.NeedtoWorkY = element(by.xpath('//*[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
        this.NeedtoWorkYES = element(by.xpath('//*[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
        this.riskgasText = element(by.xpath('//div[@id="Title_RiskAss_gas"]'));
        this.capmeterressureText = element(by.xpath('//div[text()="Capture Meter Pressure? "]'));
        this.capmeterressureLow = element(by.xpath('//*[@id="radiorag1"]'));
        this.capmeterressureLow = element(by.xpath('//*[@id="radiorag1"]'));
        this.capmeterressureHigh = element(by.xpath('//*[@id="radiorag2"]'));
        this.voltstickCheckText = element(by.xpath('//div[text()="Volt Stick Check"]'));
        this.voltstickCheckPass = element(by.xpath('//*[@id="raga0"]'));
        this.voltstickCheckFail = element(by.xpath('//*[@id="ragb0"]'));
        this.tamptheftGasText = element(by.xpath('//div[text()="Check for Signs of Tampering / Theft of Gas"]'));
        this.tamptheftGasPass = element(by.xpath('//*[@id="raga1"]'));
        this.tamptheftGasFail = element(by.xpath('//*[@id="ragb1"]'));
        this.ecvCheckText = element(by.xpath('//div[text()="ECV Checks"]'));
        this.ecvCheckPass = element(by.xpath('//*[@id="raga2"]'));
        this.ecvCheckFail = element(by.xpath('//*[@id="ragb2"]'));
        this.WorkAreaSafetyCheckText = element(by.xpath('//div[text()="Work Area Safety Check"]'));
        this.WorkAreaSafetyCheckPass = element(by.xpath('//*[@id="raga3"]'));
        this.WorkAreaSafetyCheckFail = element(by.xpath('//*[@id="ragb3"]'));
        this.gasriskAdditionalText = element(by.xpath('//div[text()="Additional Notes / Remarks - Gas Risk Assessment"]'));
        this.gasriskAdditional = element(by.xpath('//*[@id="text1"])'));
        this.safetoContText = element(by.xpath('//div[text()="Safe to Continue?"]'));
        this.safetoContPass = element(by.xpath('//*[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
        this.safetoContFail = element(by.xpath('//*[@id="radiorag6"][1]'));
        this.capfullmeterInst = element(by.xpath('//*[@id="gasbtn1"]'));
        this.riskAssesmentHEader = element(by.xpath('(//div[text()="Risk Assessment"])[1]'));
        this.canYouSmellText = element(by.xpath('//div[text()="Can you smell Gas?"]'));
        this.canYouSmellYES = element(by.xpath('//label[@id="rb_SmelGas_y"]'));
        this.turnedOffGasYES = element(by.xpath('//label[@id="rb_TurnGasOff_y"]'));
        this.callEGPYES = element(by.xpath('//label[@id="rb_CallEGP_y"]'));
        this.inputEGPRef = element(by.xpath('//input[@id="txt_EGP_ref"]'));
        this.riskelecText = element(by.xpath('//div[@id="Title_RiskAss_elec"]'));
        this.performRiskText = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
        this.OKtoProceedEGPOutcome = element(by.xpath('//label[@id="rb_OKProce_y"]'));
        this.infoText = element(by.xpath('//div/p[@style="display: block;"]'));
        this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
        this.performRiskYES = element(by.xpath('//input[@id="radiora5a"]/following-sibling::span[@class="outer"]'));
        this.RiskAssessmentPassYES = element(by.xpath('//input[@id="radiora9"]/following-sibling::span[@class="outer"]'));
        this.selectRiskReasonDD = element(by.xpath('//select[@id="select1"]'));
        this.captureInitialPhotoElec = element(by.xpath('//*[@id="Title_gasInitialPhoto"]/h4'));
        this.capturephotoMeterInstall = element(by.xpath('//*[@id="btn_Init_Photo"]'));
        this.initialpolarityCheck = element(by.xpath('//div/h4[text()="Initial Polarity Check - Martindale Test"]'));
        this.smartInstallationNextBtn = element(by.xpath('//div/button[@id="btn_Next_Section"]'));
        this.polarityCheckDD = element(by.xpath('//*[@id="cbx_CarOutPol_ck"]'));
        this.socketSafetyBtnYES = element(by.xpath('//*[@id="rb_SocSafTe_pass"]'));
        this.socketSetLocDD = element(by.xpath('//*[@id="cbx_SocTestLoc_sel"]'));
        this.capturePreinsatllation = element(by.xpath('//*[@id="btn_CapPhoPreInstM_test"]'));
        this.anySocketFoundNO = element(by.xpath('//*[@id="rb_SocRevPol_n"]/span[@class="outer"]'));
        this.polarityMarindaleNxt = element(by.xpath('//*[@id="btnNextPlug"]'));
        this.MeterAndCutOutText = element(by.xpath('//div/h4[text()="Initial Polarity Check - At Meter and Cut Out"]'));
        this.socketSafetyBtnNO = element(by.xpath('//*[@id="rb_SocSafTe_fail"]'));
        this.anySocketFoundYES = element(by.xpath('//*[@id="rb_SocRevPol_y"]'));
        this.suitableForSmartInstallationYes = element(by.xpath('//input[@id="radio1a"]/following-sibling::span[@class="outer"]'));
        this.equipmentRepositionDD = element(by.xpath('//*[@id="repositionSelect"]'));
        this.suitableSmartInstalationText = element(by.xpath('//div/h4[text()="Suitable for Smart Installation"]'));
        this.instalationNotes = element(by.xpath('//*[@id="smartnotes"]'));
        this.polchkCutOutText = element(by.xpath('//*[text()="Polarity Check at Cut Out?"]'));
        this.polchkatmtrText = element(by.xpath('//*[text()="Polarity Check at Meter?"]'));
        this.polarityCheckCutOutYES = element(by.xpath('//*[@id="rb_PolCOPass"]'));
        this.polarityCheckAtMeter = element(by.xpath('//*[@id="rb_PolCMPass"]'));
        this.meterCutOutNxtBtn = element(by.xpath('//*[@id="btn_Next_Pol"]'));
        this.nextbtntoRemove = element(by.xpath('(//*[@id="btn1"])[3]'));
        this.nextbtntoRemfromElec = element(by.xpath('(//*[@id="btn1"])[2]'));
        this.existingElecMeterYes = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]'));
        this.removeMeterText = element(by.xpath('//div/h4[text()="Remove Meter"]'));
        this.captureInitialPhotoE = element(by.xpath('//*[@id="Title_Init_Photo"]'));

        //added by CGP for FLTY20 TRAD
        this.reportToMngr = element(by.xpath('//*[@id="rb_RepTM_y"]'));
        this.teamMgnrName = element(by.xpath('//*[@id="Txt_TM_Name"]'));
        this.teamMgnrAuth = element(by.xpath('//*[@id="rb_TMAuth_y"]'));
        this.calledAirline = element(by.xpath('//*[@id="rb_CallAline_y"]'));
        this.reportedRiskDNO = element(by.xpath('//*[@id="rb_RepRDNO_y"]'));
        this.airLineRefName = element(by.xpath('//*[@id="txt_Aline_Ref"]'));
        this.DNOrefNum = element(by.xpath('//*[@id="txt_DND_Ref"]'));
        this.meterCutOutSubmitBtn = element(by.xpath('//*[@id="btn1"]'));
        this.meterCutOutSubmit1 = element(by.xpath('(//button[@id = "btn1"])[2]'));
        this.clickSubmit_SFENMEX15 = element(by.xpath('(//button[@id="btn1"])[3]'));
        this.CaptureInitialElecInstTab = element(by.xpath('//div/h4[text()="Capture Initial Photo of Elec Installation"]'));

        //added by cgp fhty20 trad
        this.CaptureInitialElecInstTab = element(by.xpath('//div/h4[text()="Capture Initial Photo of Elec Installation"]'));

    }

    public async verifyRiskAssessmentPage() {
        await utility.wait(utility.medium);
        await this.riskAssesmentHEader.getText().then(function (riskAssesmentHEaderText) {
            console.log("find RiskAssesment Header Text  " + riskAssesmentHEaderText);
        });
    }

    public async verifyInitialRiskAssessmentPage() {
        await utility.wait(utility.medium);
        await this.initialRiskAssesment.getText().then(function (initialRiskAssesmentText) {
            console.log("find initialRiskAssesment Text  " + initialRiskAssesmentText);
        });

    }

    public async inputInitialRiskAssessmentDetails() {
        if (this.canYouSmellText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.canYouSmellYES, utility.medium);
        }
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.turnedOffGasYES, utility.medium);
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.callEGPYES, utility.medium);
        await utility.wait(utility.medium);
        Gen.SendKeys(this.inputEGPRef, utility.medium, '123456');
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.reportToHS, utility.medium);
        await utility.wait(utility.medium);
        Gen.SendKeys(this.airLineRefInput, utility.medium, '5678910');
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.OKtoProceedEGPOutcome, utility.medium);
        await utility.wait(utility.medium);
    }

    public async infoTextPopUp() {
        await utility.wait(utility.medium);
        if (this.infoText.isDisplayed()) {
            Gen.ButtonClick(this.infoOKButton, utility.medium);
        }
    }

    public async verifyriskElecText() {
        await utility.wait(utility.medium);
        if (this.riskelecText.isDisplayed()) {
            await utility.wait(utility.medium);
            await this.riskelecText.getText().then(function (riskelec) {
                console.log("find riskelec Text  " + riskelec);
            });
        }
    }

    public async fillRiskAssesmentElecFields() {
        await utility.wait(utility.medium);
        if (await this.performRiskText.isDisplayed()) {
            try {
                await utility.wait(utility.medium);
                Gen.ButtonClick(this.performRiskYES, utility.medium);
            } catch (error) {
                console.log("performrisk not clicked");
            }
        }
        await utility.wait(utility.medium);
        Gen.DropDownOptionClick(this.selectRiskReasonDD, utility.medium, '37');
        if (await this.performRiskPassText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.RiskAssessmentPassYES, utility.medium);
        }
        await utility.wait(utility.medium);
        Gen.SendKeys(this.riskAssessmentinput, utility.medium, 'Risk assessment notes');
    }

    public async capturePhotoBtnDisplayed() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.cameraElecBtn, utility.medium_low);
    }

    public async clickNextSectionBtn() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.nextSectionBtn, utility.medium);
    }

    public async verifyriskGasText() {
        await utility.wait(utility.medium);
        if (await this.riskgasText.isDisplayed()) {
            await this.riskgasText.getText().then(function (riskgas) {
                console.log("find riskgas Text  " + riskgas);
            });
        }
    }

    public async fillthedtlsGas() {

        if (await this.capmeterressureText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.meterPressureLow, utility.Avg_low);
        }
        await utility.wait(utility.medium);
        if (await this.voltstickCheckText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.voltStickYES, utility.medium);
        }
        await utility.wait(utility.medium);
        if (await this.tamptheftGasText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.theftOfGASPASS, utility.medium);
        }
        await utility.wait(utility.medium);
        if (await this.ecvCheckText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.ECVChecksBtnYES, utility.medium);
        }
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.workSafetyYES, utility.medium_low);
        if (await this.capmeterressureText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.meterPressureLow, utility.Avg_low);
        }
    }
    public async capturegasbtn() {
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.cameraGasBtn, utility.medium);
    }
    public async fillthedtl06() {
        await utility.wait(utility.medium);
        if (await this.gasriskAdditionalText.isDisplayed()) {
            Gen.SendKeys(this.GASRiskTextInput, utility.medium, 'Risk Notes');
        }
        await utility.wait(utility.medium);
        if (await this.safetoContText.isDisplayed()) {
            await utility.wait(utility.medium);
            Gen.RadioButtonClick(this.safetoContPass, utility.medium);
        }
    }

    // CGP for FLTY20TRAD

    public async elecInstSec() {
        await utility.wait(utility.medium);
        if (await this.CaptureInitialElecInstTab.isDisplayed()) {
            await this.CaptureInitialElecInstTab.getText().then(function (capinitialElecInst) {
                console.log("Find capture initial photo of elec installation  " + capinitialElecInst);
            });
        }
        await utility.wait(utility.medium_low);
    }

    public async elecfullmeterInst() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.capturephotoMeterInstall, utility.low);
    }

    public async gasInstSec() {
        await utility.wait(utility.medium);
        if (await this.captureInitialPhotoElec.isDisplayed()) {
            await this.captureInitialPhotoElec.getText().then(function (capinitialGasInst) {
                console.log("Find capture initial photo of gas installation  " + capinitialGasInst);
            });
        }
        await utility.wait(utility.medium_low);
    }

    public async gasfullmeterInst() {
        await utility.wait(utility.medium);
        //Gen.ButtonClick(this.CaptureInitialGasInstTab, utility.low);
        //await utility.wait(utility.medium);
        Gen.ButtonClick(this.capfullmeterInst, utility.low);
        await utility.wait(utility.medium);
    }

    public async verifyInitialPolarityCheck() {
        await utility.wait(utility.medium);
        if (await this.initialpolarityCheck.isDisplayed()) {
            await this.initialpolarityCheck.getText().then(function (initialpolarityCheckText) {
                console.log("Find initialpolarityCheck Text " + initialpolarityCheckText);
            });
        }
        await utility.wait(utility.medium);
    }

    public async fillthePolarityCheckMartinDale() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.InitPolCheckMartindaleTab, utility.low);
        await utility.wait(utility.medium);
        Gen.DropDownOptionClick(this.polarityCheckDD, utility.medium, 'true');
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.socketSafetyBtnYES, utility.medium);
        await utility.wait(utility.medium);
        Gen.DropDownOptionClick(this.socketSetLocDD, utility.medium, '9');
    }

    public async verifyCapturepreInstallation() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.capturePreinsatllation, utility.medium);
    }

    public async verifyanySocketFoundNO() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.anySocketFoundNO, utility.medium);
        try {
            await utility.wait(utility.medium);
            Gen.ButtonClick(this.polarityMarindaleNxt, utility.medium);
        } catch (error) {
            console.log("Polarity marindale next section is not available at this moment");
        }
    }

    public async verifyMeterAndCutOut() {
        await utility.wait(utility.medium);
        if (await this.MeterAndCutOutText.isDisplayed()) {
            await this.MeterAndCutOutText.getText().then(function (metercutOut) {
                console.log("Find Meter cut out Text " + metercutOut);
            });
        }
        await utility.wait(utility.medium);
    }

    public async fillthePolarityCheckMeterOut() {
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.InitPCMTab, utility.medium);
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.polarityCheckCutOutYES, utility.medium);
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.polarityCheckAtMeter, utility.medium);
        await utility.wait(utility.medium);
    }

    public async fillthePolarityCheckMeterOutFLTY20() {
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.InitPCMTab, utility.medium);
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.polarityCheckCutOutYES, utility.medium);
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.polarityCheckAtMeter, utility.medium);

        // added by cgp for FLTY20 TRAD
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.reportToMngr, utility.medium);
        await utility.wait(utility.medium);
        Gen.SendKeys(this.teamMgnrName, utility.medium, 'CGP');
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.teamMgnrAuth, utility.medium);
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.calledAirline, utility.medium);
        await utility.wait(utility.medium);
        Gen.SendKeys(this.airLineRefName, utility.medium, 'Test 1');
        await utility.wait(utility.medium);
        Gen.RadioButtonClick(this.reportedRiskDNO, utility.medium);
        await utility.wait(utility.medium);
        Gen.SendKeys(this.DNOrefNum, utility.medium, '1111111');
    }

    //Added By CGP for Faulty20 TRAD

    public async polarityMeterCutoutSubmit() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.meterCutOutSubmitBtn, utility.medium);
    }

    public async polarityMeterCutoutSubmitTRAD() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.meterCutOutSubmit1, utility.medium);
    }

    public async polarityMeterCutoutSubmitFLTY18TRAD() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.clickSubmit_SFENMEX15, utility.low);
    }
    public async meterCutOutnextSection() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.meterCutOutNxtBtn, utility.medium);
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.nextbtntoRemove, utility.medium);
    }

    //***************************************************************************************** *//
    /*@Author Jansi Victor
    /*@Description: UAT Testing 
    /*ELectric Section Addition
    //***************************************************************************************** */

    public async fillelecfullmeterInst() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.capturephotoMeterInstall, utility.medium);
    }
    public async meterCutOutnextSectionfrmElec() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.nextbtntoRemfromElec, utility.medium);
        console.log("Clicked on Submit from Elec");
    }
    public async INFOOK() {
        await utility.wait(utility.medium);
        await expect(this.infoOkbutn.isPresent());
    }

    public async INFOOKClick() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.infoOkbutn, utility.medium);
    }

    public async ElecInstSec() {
        await utility.wait(utility.medium);
        if (await this.captureInitialPhotoE.isDisplayed()) {
            await this.captureInitialPhotoE.getText().then(function (captureInitialPhotoETxt) {
                console.log("Find capture initial photo of Elec installation  " + captureInitialPhotoETxt);
            });
        }
    }
    //TST_12 FLTY GAS

    public async NeedtoWork() {
        await utility.wait(utility.medium);
        Gen.ButtonClick(this.NeedtoWorkY, utility.medium);
        await utility.wait(utility.medium);
    }
}
