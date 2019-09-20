import {
	$,
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
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
import {
	threadId
} from "worker_threads";
const utility: Utility = new Utility();
import {

	Alert

} from 'selenium-webdriver';

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


	constructor() {
		this.initialRiskAssesment = element(by.xpath('//div/h4[text()="Initial Risk Assessment"]'));
		this.initialRiskAssessmentTab = element(by.css('.down'));
		this.RiskAssessmentTab = element(by.css('.ng-scope:nth-child(2) > .task-section .down'));
		this.RiskAssessmentGasTab = element(by.css('.ng-scope:nth-child(3) > .task-section .down'));
		this.CaptureInitialGasInstTab = element(by.css('.ng-scope:nth-child(4) > .task-section .down'));
		this.InitPolCheckMartindaleTab = element(by.css('#Title_InitPolMart_test > div.titleIcon.right.down'));
		this.InitPCMTab = element(by.css('#Title_InitPCM > div.titleIcon.right.down'));

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
		//this.initriskNextSection = element(by.xpath('(//button[@id="btnNextComm"])'));
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
		//this.workSafetyYES = element(by.xpath('//input[@id="raga3"]/following-sibling::span/span[@class="inner"]'));
		this.GASRiskTextInput = element(by.xpath('//textarea[@id="text1"]'));
		this.capgasBtn = element(by.xpath('(//button[@id="btn1"])[2]'));
		this.NextSectiontoCaptureBtn = element(by.xpath('((//div[@class="btn-container green"])/button[@id="btnNextComm"])[2]'));
		this.reportToHS = element(by.xpath('//label[@id="rb_RepIncHS_y"]'));
		this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
		this.NeedtoWorkY = element(by.xpath('//*[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
		this.NeedtoWorkYES = element(by.xpath('//*[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
		//this.NeedtoWorkY = element(by.xpath('//*[@id="radiorai11"]/following-sibling::span/span[@class="inner"]'));
		this.riskgasText = element(by.xpath('//div[@id="Title_RiskAss_gas"]'));
		this.capmeterressureText = element(by.xpath('//div[text()="Capture Meter Pressure? "]'));
		this.capmeterressureLow = element(by.id('radiorag1'));
		this.capmeterressureHigh = element(by.id('radiorag2'));
		this.voltstickCheckText = element(by.xpath('//div[text()="Volt Stick Check"]'));
		this.voltstickCheckPass = element(by.id('raga0'));
		this.voltstickCheckFail = element(by.id('ragb0'));
		this.tamptheftGasText = element(by.xpath('//div[text()="Check for Signs of Tampering / Theft of Gas"]'));
		this.tamptheftGasPass = element(by.id('raga1'));
		this.tamptheftGasFail = element(by.id('ragb1'));
		this.ecvCheckText = element(by.xpath('//div[text()="ECV Checks"]'));
		this.ecvCheckPass = element(by.id('raga2'));
		this.ecvCheckFail = element(by.id('ragb2'));
		this.WorkAreaSafetyCheckText = element(by.xpath('//div[text()="Work Area Safety Check"]'));
		this.WorkAreaSafetyCheckPass = element(by.id('raga3'));
		this.WorkAreaSafetyCheckFail = element(by.id('ragb3'));
		this.gasriskAdditionalText = element(by.xpath('//div[text()="Additional Notes / Remarks - Gas Risk Assessment"]'));
		this.gasriskAdditional = element(by.id('text1'));
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
		this.capturephotoMeterInstall = element(by.id('btn_Init_Photo'));
		this.initialpolarityCheck = element(by.xpath('//div/h4[text()="Initial Polarity Check - Martindale Test"]'));
		this.smartInstallationNextBtn = element(by.xpath('//div/button[@id="btn_Next_Section"]'));
		this.polarityCheckDD = element(by.id('cbx_CarOutPol_ck'));
		this.socketSafetyBtnYES = element(by.id('rb_SocSafTe_pass'));
		this.socketSetLocDD = element(by.id('cbx_SocTestLoc_sel'));
		this.capturePreinsatllation = element(by.id('btn_CapPhoPreInstM_test'));
		//this.anySocketFoundNO = element(by.id('rb_SocRevPol_n'));
		this.anySocketFoundNO = element(by.xpath('//*[@id="rb_SocRevPol_n"]/span[@class="outer"]'));
		this.polarityMarindaleNxt = element(by.id("btnNextPlug"));
		this.MeterAndCutOutText = element(by.xpath('//div/h4[text()="Initial Polarity Check - At Meter and Cut Out"]'));
		this.socketSafetyBtnNO = element(by.id('rb_SocSafTe_fail'));
		this.anySocketFoundYES = element(by.id('rb_SocRevPol_y'));
		this.suitableForSmartInstallationYes = element(by.xpath('//input[@id="radio1a"]/following-sibling::span[@class="outer"]'));
		this.equipmentRepositionDD = element(by.id('repositionSelect'));
		this.suitableSmartInstalationText = element(by.xpath('//div/h4[text()="Suitable for Smart Installation"]'));
		this.instalationNotes = element(by.id('smartnotes'));
		this.polchkCutOutText = element(by.xpath('//*[text()="Polarity Check at Cut Out?"]'));
		this.polchkatmtrText = element(by.xpath('//*[text()="Polarity Check at Meter?"]'));
		this.polarityCheckCutOutYES = element(by.id('rb_PolCOPass'));
		this.polarityCheckAtMeter = element(by.id('rb_PolCMPass'));
		//this.currentMeterDetailsText = element(by.xpath('//div/h4[text()="Current Meter Details"]'));
		this.meterCutOutNxtBtn = element(by.id('btn_Next_Pol'));
		this.nextbtntoRemove = element(by.xpath('(//*[@id="btn1"])[3]'));
		this.nextbtntoRemfromElec = element(by.xpath('(//*[@id="btn1"])[2]'));

		this.existingElecMeterYes = element(by.id('rb_ExMetDetCorrt_y'));
		this.removeMeterText = element(by.xpath('//div/h4[text()="Remove Meter"]'));
		this.captureInitialPhotoE = element(by.xpath('//*[@id="Title_Init_Photo"]'));

		//added by CGP for FLTY20 TRAD
		this.reportToMngr = element(by.id('rb_RepTM_y'));
		this.teamMgnrName = element(by.id('Txt_TM_Name'));
		this.teamMgnrAuth = element(by.id('rb_TMAuth_y'));
		this.calledAirline = element(by.id('rb_CallAline_y'));
		this.reportedRiskDNO = element(by.id('rb_RepRDNO_y'));
		this.airLineRefName = element(by.id('txt_Aline_Ref'));
		this.DNOrefNum = element(by.id('txt_DND_Ref'));
		this.meterCutOutSubmitBtn = element(by.id('btn1'));

		this.meterCutOutSubmit1 = element(by.xpath('(//button[@id = "btn1"])[2]'));
		this.clickSubmit_SFENMEX15 = element(by.xpath('(//button[@id="btn1"])[3]'));
		this.CaptureInitialElecInstTab = element(by.xpath('//div/h4[text()="Capture Initial Photo of Elec Installation"]'));

		//added by cgp fhty20 trad

		this.CaptureInitialElecInstTab = element(by.xpath('//div/h4[text()="Capture Initial Photo of Elec Installation"]'));

	}



	

	

    public async verifyRiskAssessmentPage() {
        await this.riskAssesmentHEader.getText().then(function (riskAssesmentHEaderText) {
            console.log("find RiskAssesment Header Text  " + riskAssesmentHEaderText);
        });
    }

    public async verifyInitialRiskAssessmentPage() {
        await this.initialRiskAssesment.getText().then(function (initialRiskAssesmentText) {
            console.log("find initialRiskAssesment Text  " + initialRiskAssesmentText);
        });

    }
    


    
    
    public async inputInitialRiskAssessmentDetails() {
        await expect(this.initialRiskAssesment.isPresent());
        try {
            if (this.initialRiskAssessmentTab.isPresent()) {
                await this.initialRiskAssessmentTab.click();
            }
        } catch (error) {
            console.log("continue with next step");
        }
        if (this.canYouSmellText.isDisplayed()) {
            await this.canYouSmellYES.click();
        }
        if (this.turnedOffGasYES.isDisplayed()) {
            await this.turnedOffGasYES.click();
        }
        if (this.callEGPYES.isDisplayed()) {
            await this.callEGPYES.click();
        }
        if (this.inputEGPRef.isDisplayed()) {
            await utility.wait(2000);
            await this.inputEGPRef.clear();
            await this.inputEGPRef.sendKeys('123456');
        }
        if (this.reportToHS.isDisplayed()) {
            await utility.wait(2000);
            await this.reportToHS.click();
        }
        if (this.airLineRefInput.isDisplayed()) {
            await utility.wait(2000);
            await this.airLineRefInput.clear();
            await this.airLineRefInput.sendKeys('5678910');
        }
        if (this.OKtoProceedEGPOutcome.isDisplayed()) {
            await utility.wait(2000);
            await this.OKtoProceedEGPOutcome.click();
            await utility.wait(utility.medium_low);
        }
    }

    public async infoTextPopUp() {
        if (this.infoText.isDisplayed()) {

            //CGP added
            let ale: Alert = browser.switchTo().alert();

		// clicks 'OK' button

		//ale.accept();

		await utility.wait(2000);
            await this.infoOKButton.click();

            await utility.wait(utility.medium_low);
        }
    }

    public async verifyriskElecText() {

        if (this.riskelecText.isDisplayed()) {
            await this.riskelecText.getText().then(function (riskelec) {
                console.log("find riskelec Text  " + riskelec);
            });
        }
    }

    public async fillRiskAssesmentElecFields() {
        await utility.wait(utility.very_low);
        if (await this.performRiskText.isDisplayed()) {
            try {
                await utility.wait(utility.low);
                await this.performRiskYES.click();
            } catch (error) {
                console.log("performrisk not clicked");
            }
        }
        await utility.wait(utility.very_low);
        if (await this.selectRiskReasonDD.isDisplayed()) {
            var select = await this.selectRiskReasonDD;
            await select.$('[value="37"]').click();
        }
        await utility.wait(utility.very_low);
        if (await this.performRiskPassText.isDisplayed()) {
            await this.RiskAssessmentPassYES.click();
        }
        await utility.wait(utility.very_low);
        if (await this.riskAssessmentinput.isDisplayed()) {
            await this.riskAssessmentinput.clear();
            await this.riskAssessmentinput.sendKeys('Risk assessment notes');
        }
        await utility.wait(utility.very_low);
    }

    public async capturePhotoBtnDisplayed() {
        await utility.wait(utility.medium_low);
        if (await this.cameraElecBtn.isDisplayed()) {
            await utility.wait(utility.very_low);
            await this.cameraElecBtn.click();
            await utility.wait(utility.medium_low);
        }
    }

    public async clickNextSectionBtn() {
        await utility.wait(utility.very_low);
        if (await this.nextSectionBtn.isDisplayed()) {
            await this.nextSectionBtn.click();
        }
    }

    public async verifyriskGasText() {

        if (await this.riskgasText.isDisplayed()) {
            await this.riskgasText.getText().then(function (riskgas) {
                console.log("find riskgas Text  " + riskgas);
            });
        }
    }

    public async fillthedtlsGas() {
        await utility.wait(2000);
        if (await this.capmeterressureText.isDisplayed()) {
            await this.meterPressureLow.click();
        }
        await utility.wait(utility.very_low);
        if (await this.voltstickCheckText.isDisplayed()) {
            await this.voltStickYES.click();
        }
        await utility.wait(utility.very_low);
        if (await this.tamptheftGasText.isDisplayed()) {
            await this.theftOfGASPASS.click();
        }
        await utility.wait(utility.very_low);
        if (await this.ecvCheckText.isDisplayed()) {
            await this.ECVChecksBtnYES.click();
        }
        await utility.wait(2000);
        browser.sleep(1000);
        if (await this.workSafetyYES.isDisplayed()) {
            await this.workSafetyYES.click();
        }
        await utility.wait(2000);
        if (await this.capmeterressureText.isDisplayed()) {
            await this.meterPressureLow.click();
        }
        await utility.wait(utility.very_low);
    }
    public async capturegasbtn() {
        if (await this.cameraGasBtn.isDisplayed()) {
            await this.cameraGasBtn.click();
        }
        await utility.wait(utility.very_low);
    }
    public async fillthedtl06() {
        if (await this.gasriskAdditionalText.isDisplayed()) {
            await this.GASRiskTextInput.clear();
            await this.GASRiskTextInput.sendKeys("Risk Notes");
        }
        await utility.wait(utility.very_low);
        if (await this.safetoContText.isDisplayed()) {
            await this.safetoContPass.click();
        }
        await utility.wait(utility.very_low);
    }

    // CGP for FLTY20TRAD

    public async elecInstSec() {
        await utility.wait(utility.medium_low);
        if (await this.CaptureInitialElecInstTab.isDisplayed()) {
            await this.CaptureInitialElecInstTab.getText().then(function (capinitialElecInst) {
                console.log("Find capture initial photo of elec installation  " + capinitialElecInst);
            });
        }
        await utility.wait(utility.medium_low);
    }

    public async elecfullmeterInst() {
        await utility.wait(utility.low);
        if (await this.CaptureInitialElecInstTab.isPresent()) {
       //     await this.CaptureInitialElecInstTab.click();
        }
        await utility.wait(utility.low);
        if (await this.capturephotoMeterInstall.isDisplayed()) {
            await this.capturephotoMeterInstall.click();
        }
        // await utility.wait(utility.very_low);
        // try {
        //     if (await this.CaptureInitialGasInstNext.isDisplayed()) {
        //         await this.CaptureInitialGasInstNext.click();
        //     }
        // } catch (error) {
        //     console.log("Gas full meter next section is not available at this moment");
        // }
        await utility.wait(utility.very_low);
        
    }





    public async gasInstSec() {
        await utility.wait(utility.medium_low);
        if (await this.captureInitialPhotoElec.isDisplayed()) {
            await this.captureInitialPhotoElec.getText().then(function (capinitialGasInst) {
                console.log("Find capture initial photo of gas installation  " + capinitialGasInst);
            });
        }
        await utility.wait(utility.medium_low);
    }

    public async gasfullmeterInst() {
        await utility.wait(utility.medium_low);
        if (await this.CaptureInitialGasInstTab.isPresent()) {
            await this.CaptureInitialGasInstTab.click();
        }
        await utility.wait(utility.medium_low);
        if (await this.capfullmeterInst.isDisplayed()) {
            await this.capfullmeterInst.click();
        }
        await utility.wait(utility.very_low);
    }
    public async verifyInitialPolarityCheck() {
        if (await this.initialpolarityCheck.isDisplayed()) {
            await this.initialpolarityCheck.getText().then(function (initialpolarityCheckText) {
                console.log("Find initialpolarityCheck Text " + initialpolarityCheckText);
            });
        }
        await utility.wait(utility.very_low);
    }

    public async fillthePolarityCheckMartinDale() {
        if (await this.InitPolCheckMartindaleTab.isPresent()) {
            await this.InitPolCheckMartindaleTab.click();
        }
        await utility.wait(utility.very_low);
        if (await this.polarityCheckDD.isDisplayed()) {
            var select = this.polarityCheckDD;
            await select.$('[value="true"]').click();
        }
        await utility.wait(utility.very_low);
        if (await this.socketSafetyBtnYES.isPresent()) {
            await this.socketSafetyBtnYES.click();
        }
        await utility.wait(utility.very_low);
        if (await this.socketSetLocDD.isDisplayed()) {
            var select = this.socketSetLocDD;
            await select.$('[value="9"]').click();
        }
    }

    public async verifyCapturepreInstallation() {
        if (await this.capturePreinsatllation.isDisplayed()) {
            await this.capturePreinsatllation.click();
        }
        await utility.wait(utility.very_low);
    }
    public async verifyanySocketFoundNO() {
        await utility.wait(utility.very_low);
        if (await this.anySocketFoundNO.isPresent()) {
            await this.anySocketFoundNO.click();
        }
        try {
            if (await this.polarityMarindaleNxt.isPresent()) {
                await this.polarityMarindaleNxt.click();
            }
        } catch (error) {
            console.log("Polarity marindale next section is not available at this moment");
        }
    }

    public async verifyMeterAndCutOut() {
        if (await this.MeterAndCutOutText.isDisplayed()) {
            await this.MeterAndCutOutText.getText().then(function (metercutOut) {
                console.log("Find Meter cut out Text " + metercutOut);
            });
        }
        await utility.wait(utility.very_low);
    }

    public async fillthePolarityCheckMeterOut() {
        if (await this.InitPCMTab.isPresent()) {
            await this.InitPCMTab.click();
        }
        await utility.wait(utility.very_low);
        await expect(this.polarityCheckCutOutYES.isPresent());
        await this.polarityCheckCutOutYES.click();
        await utility.wait(utility.very_low);
        await expect(this.polarityCheckAtMeter.isPresent());
        await this.polarityCheckAtMeter.click();
        await utility.wait(utility.very_low);
    }

    public async fillthePolarityCheckMeterOutFLTY20() {
        if (await this.InitPCMTab.isPresent()) {
            await this.InitPCMTab.click();
        }
        await utility.wait(utility.very_low);
        await expect(this.polarityCheckCutOutYES.isPresent());
        await this.polarityCheckCutOutYES.click();
        await utility.wait(utility.very_low);
        await expect(this.polarityCheckAtMeter.isPresent());
        await this.polarityCheckAtMeter.click(); 
        await utility.wait(utility.very_low);

        // added by cgp for FLTY20 TRAD
        await expect(this.reportToMngr.isPresent());
        await this.reportToMngr.click(); 
        await utility.wait(utility.very_low);
        await expect(this.teamMgnrName.isPresent());
        await this.teamMgnrName.sendKeys("CGP");
        await utility.wait(utility.very_low);
        await expect(this.teamMgnrAuth.isPresent());
        await this.teamMgnrAuth.click();
        await utility.wait(utility.very_low);
        await expect(this.calledAirline.isPresent());
        await this.calledAirline.click();
        await utility.wait(utility.very_low);
        await expect(this.airLineRefName.isPresent());
        await this.airLineRefName.sendKeys("Test 1");
        await utility.wait(utility.very_low);
        await expect(this.reportedRiskDNO.isPresent());
        await this.reportedRiskDNO.click();
        await utility.wait(utility.very_low);
        await expect(this.DNOrefNum.isPresent());
        await this.DNOrefNum.sendKeys("1111111");
        await utility.wait(utility.very_low);
    }

    //Added By CGP for Faulty20 TRAD

    public async polarityMeterCutoutSubmit()
    {
        await utility.wait(utility.very_low);
        if (await this.meterCutOutSubmitBtn.isDisplayed()) {
            await this.meterCutOutSubmitBtn.click();
            await utility.wait(utility.very_low);
        }
        
    

    }

    public async polarityMeterCutoutSubmitTRAD()
    {
        await utility.wait(utility.low);
        if (await this.meterCutOutSubmit1.isDisplayed()) {
            await this.meterCutOutSubmit1.click();
            await utility.wait(utility.low);
        }
        
    

    }

    public async polarityMeterCutoutSubmitFLTY18TRAD()
    {
        await utility.wait(utility.low);
        if (await this.clickSubmit_SFENMEX15.isDisplayed()) {
            await this.clickSubmit_SFENMEX15.click();
            await utility.wait(utility.low);
        }
        
    }
    public async meterCutOutnextSection() {

        if (await this.meterCutOutNxtBtn.isDisplayed()) {
            await this.meterCutOutNxtBtn.click();
            await utility.wait(utility.very_low);
        }
        await utility.wait(utility.very_low);
        if (await this.nextbtntoRemove.isDisplayed()) {
            await this.nextbtntoRemove.click();
            console.log("Clicked on Submit");
            await utility.wait(utility.very_low);
        }
    }

    //***************************************************************************************** *//
    /*@Author Jansi Victor
    /*@Description: UAT Testing 
    /*ELectric Section Addition
    //***************************************************************************************** */

    public async fillelecfullmeterInst() {

        if (await this.capturephotoMeterInstall.isDisplayed()) {
            await this.capturephotoMeterInstall.click();
            await utility.wait(utility.very_low);
        }
    }
    public async meterCutOutnextSectionfrmElec() {

        await utility.wait(utility.very_low);
        if (await this.nextbtntoRemfromElec.isDisplayed()) {
            await this.nextbtntoRemfromElec.click();
            console.log("Clicked on Submit from Elec");
            await utility.wait(utility.very_low);
        }
    }
    public async INFOOK() {
        await expect(this.infoOkbutn.isPresent());
    }

    public async INFOOKClick() {

        if (await this.infoOkbutn.isDisplayed()) {
            await this.infoOkbutn.click();
            await utility.wait(utility.very_low);
        }
    }

    public async ElecInstSec() {
        await utility.wait(utility.very_low);
        if (await this.captureInitialPhotoE.isDisplayed()) {
            await this.captureInitialPhotoE.getText().then(function (captureInitialPhotoETxt) {
                console.log("Find capture initial photo of Elec installation  " + captureInitialPhotoETxt);
            });
        }
    }
    //TST_12 FLTY GAS

    public async NeedtoWork() {
        await utility.wait(utility.medium_low);
        if (await this.NeedtoWorkY.isDisplayed()) {
            await this.NeedtoWorkY.click();
            await utility.wait(utility.very_low);
        }
    }


}
