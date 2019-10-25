import {
	browser,
	element,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
import {
	GenericPageObject
} from "../pages/GenericPage"
const utility: Utility = new Utility();
const gen: GenericPageObject = new GenericPageObject();

export class ElectricPageObject {

	public riskAssesmentHEader: ElementFinder;
	public initialRiskAssesment: ElementFinder;
	public canYouSmellText: ElementFinder;
	public canYouSmellYES: ElementFinder;
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
	public performanceRiskNextBtn: ElementFinder;
	public captureInitialPhotoElec: ElementFinder;
	public capturephotoMeterInstall: ElementFinder;
	public initialpolarityCheck: ElementFinder;
	public smartInstallationNextBtn: ElementFinder;
	public polarityCheckDD: ElementFinder;
	public socketSafetyBtnYES: ElementFinder;
	public socketSetLocDD: ElementFinder;
	public capturePreinsatllation: ElementFinder;
	public anySocketFoundNO: ElementFinder;
	public MeterAndCutOutText: ElementFinder;
	public socketSafetyBtnNO: ElementFinder;
	public anySocketFoundYES: ElementFinder;
	public suitableForSmartInstallationYes: ElementFinder;
	public equipmentRepositionDD: ElementFinder;
	public suitableSmartInstalationText: ElementFinder;
	public instalationNotes: ElementFinder;
	public polarityCheckCutOutYES: ElementFinder;
	public polarityCheckCutOutYES1: ElementFinder;
	public polarityCheckAtMeter: ElementFinder;
	public currentMeterDetailsText: ElementFinder;
	public meterCutOutNxtBtn: ElementFinder;
	public existingElecMeterYes: ElementFinder;
	public removeMeterText: ElementFinder;
	public statusOfAssetDD: ElementFinder;
	public removeMeterReadingText: ElementFinder;
	public unableToReadMeterYes: ElementFinder;
	public removeAssetTabText: ElementFinder;
	public removeMeterAddText: ElementFinder;
	public rmvNextBtn: ElementFinder;
	public assetSuccessfullyaddedOKbtn: ElementFinder;
	public Title_chubInstall: ElementFinder;
	public CommHubText: ElementFinder;
	public commHubDD: ElementFinder;
	public chfIDInput: ElementFinder;
	public commHubLocDD: ElementFinder;
	public arealInstalledYes: ElementFinder;
	public commHubConnectionDD: ElementFinder;
	public captureCommsHub: ElementFinder;
	public commHubLocNxtBtn: ElementFinder;
	public commHubLocNxtBtn1: ElementFinder;
	public NewMeterDetailsText: ElementFinder;
	public rmOptionalText: ElementFinder;
	public currentMeterNxtbtn: ElementFinder;
	public removeassetDD: ElementFinder;
	public confirmAssetYes: ElementFinder;
	public newMeterDD: ElementFinder;
	public inputelecSerialNum: ElementFinder;
	public manufactureLetterDD: ElementFinder;
	public MeterTypeDD: ElementFinder;
	public meterLocDD: ElementFinder;
	public inputDate: ElementFinder;
	public newMeterNxtBtn: ElementFinder;
	public AddElecCheckTxt: ElementFinder;
	public terminalNewTightness: ElementFinder;
	public photoOfTerminalScrew: ElementFinder;
	public sealsIntactYes: ElementFinder;
	public portsSealedYes: ElementFinder;
	public approveCableMakersYes: ElementFinder;
	public visualInspectionYes: ElementFinder;
	public cableMArkerDD: ElementFinder;
	public earthTypeDD: ElementFinder;
	public recentMeterBoardYes: ElementFinder;
	public meterTailsChangedNo: ElementFinder;
	public replacedMainFuseYes: ElementFinder;
	public emerJobNo: ElementFinder;
	public additionalElecNxtBtn: ElementFinder;
	public ElecInitialMeterText: ElementFinder;
	public captureMeterReadingInput: ElementFinder;
	public meterReadingNxtBtn: ElementFinder;
	public commissioningTxt: ElementFinder;
	public nonserealizedAssetDD: ElementFinder;
	public nonserealizedAssetInput: ElementFinder;
	public commsHubConnectedYes: ElementFinder;
	public commissioningNxtBtn: ElementFinder;
	public postInstalationTxt: ElementFinder;
	public carryOutPolarityChkYes: ElementFinder;
	public postpolNotes: ElementFinder;
	public polChkDD: ElementFinder;
	public confirmSocketPass: ElementFinder;
	public witnessName: ElementFinder;
	public capturePostinstalation: ElementFinder;
	public capturefinalmeterinstal: ElementFinder;
	public captureCloseupMeter: ElementFinder;
	public electricInstallTxt: ElementFinder;
	public eicomSendMsg: ElementFinder;
	public awaitingResponseTxt: ElementFinder;
	public commSuccess: ElementFinder;
	public submitBtn: ElementFinder;
	public commshubPopup: ElementFinder;
	public randomClick: ElementFinder;
	public randomEUDevice: ElementFinder;
	public DDnewMeteroption: ElementFinder;
	public initialElctext: ElementFinder;
	public selectinstallAssetOption: ElementFinder;
	public selectinstallMeterOption: ElementFinder;
	public meterCutOutSubmitButton: ElementFinder;
	public updateValuesBtn: ElementFinder;
	public updateValuesBtn1: ElementFinder;
	public commHubConnectionDD_n: ElementFinder;
	public currentMeterDetailsHeader: ElementFinder;
	public existingElecMeterNo: ElementFinder;
	public DF17currentMeterNxtbtn: ElementFinder;
	public currentMeterDetailsHeader1: ElementFinder;
	public dummydiv: ElementFinder;
	public dummydiv1: ElementFinder;

	public commHubLocDD1: ElementFinder;
	public arealInstalledYes1: ElementFinder;
	public commHubConnectionDD1: ElementFinder;
	public commHubConnectionDD_n1: ElementFinder;
	public captureCommsHub1: ElementFinder;
	public addAnotherAsset: ElementFinder;
	public hanAvailableText: ElementFinder;
	public nonserealizedAssetDD1: ElementFinder;
	public nonserealizedAssetInput1: ElementFinder;
	public hanAvailableN: ElementFinder;
	public currentElectricPhotoFullMeterButton: ElementFinder;
	/***
	 * @Author Aparna Das
	 * @description Page Objects
	 ***/

	constructor() {
		this.currentElectricPhotoFullMeterButton = element(by.xpath("//button[@id='btn_Init_Photo']"));
		this.initialRiskAssesment = element(by.xpath('(//div/h4[text()="Initial Risk Assessment"])'));
		this.riskAssesmentHEader = element(by.xpath('(//div[text()="Risk Assessment"])[1]'));
		this.updateValuesBtn = element(by.xpath('//*[@id="CCHbtnUpdate"]'));
		this.updateValuesBtn1 = element(by.xpath('//*[@id="btn_Update_values"]'));
		this.commHubConnectionDD_n = element(by.xpath('//*[@id="currentCommsHub_existingDetailsCorrect_n"]'));
		this.currentMeterDetailsHeader = element(by.xpath('//div[@id="Title_currentCommsHub"]'));
		this.currentMeterDetailsHeader1 = element(by.xpath('//div[@id="Title_currentMeterDetails"]'));
		this.canYouSmellText = element(by.xpath('//div[text()="Can you smell Gas?"]'));
		this.canYouSmellYES = element(by.xpath('//label[@id="rb_SmelGas_y"]'));
		this.turnedOffGasYES = element(by.xpath('//*[@id="rb_TurnGasOff_y"]'));
		this.callEGPYES = element(by.xpath('//*[@id="rb_CallEGP_y"]'));
		this.inputEGPRef = element(by.xpath('//*[@id="txt_EGP_ref"]'));
		this.riskelecText = element(by.xpath('//div[@id="Title_RiskAss_elec"]'));
		this.performRiskText = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
		this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[1]'));

		// this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
		this.OKtoProceedEGPOutcome = element(by.xpath('//label[@id="rb_OKProce_y"]'));
		this.infoText = element(by.xpath('//div/p[@style="display: block;"]'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.performRiskYES = element(by.xpath('//input[@id="radiora5a"]/following-sibling::span[@class="outer"]'));
		this.RiskAssessmentPassYES = element(by.xpath('//input[@id="radiora9"]/following-sibling::span[@class="outer"]'));
		this.selectRiskReasonDD = element(by.xpath('//*[@id="select1"]'));
		this.riskAssessmentinput = element(by.xpath('//textarea[@id="ranotes"]'));
		this.cameraBtn = element(by.xpath('//button[@class="cameraBtn grey"]'));
		this.nextSectionBtn = element(by.xpath('//button[@id="btnNextrae"]'));
		this.existingElecMeterNo = element(by.xpath('//*[@id="rb_ExMetDetCorrt_n"]'));
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
		this.reportToHS = element(by.xpath('//*[@id="rb_RepIncHS_y"]'));
		this.airLineRefInput = element(by.xpath('//*[@id="txt_AirL_ref"]'));
		this.NeedtoWorkYES = element(by.xpath('//input[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
		this.performanceRiskNextBtn = element(by.xpath('//button[@id="btnNextComm"]'));
		this.captureInitialPhotoElec = element(by.xpath('//div/h4[text()="Capture Initial Photo of Elec Installation"]'));
		this.capturephotoMeterInstall = element(by.xpath('//*[@id="btn_Init_Photo"]'));
		this.initialpolarityCheck = element(by.xpath('//div/h4[text()="Initial Polarity Check - Martindale Test"]'));
		this.smartInstallationNextBtn = element(by.xpath('//div/button[@id="btn_Next_Section"]'));
		this.polarityCheckDD = element(by.xpath('//*[@id="cbx_CarOutPol_ck"]'));
		this.socketSafetyBtnYES = element(by.xpath('//*[@id="rb_SocSafTe_pass"]'));
		this.socketSetLocDD = element(by.xpath('//*[@id="cbx_SocTestLoc_sel"]'));
		this.capturePreinsatllation = element(by.xpath('//*[@id="btn_CapPhoPreInstM_test"]'));
		this.anySocketFoundNO = element(by.xpath('//*[@id="rb_SocRevPol_n"]'));
		this.MeterAndCutOutText = element(by.xpath('//div/h4[text()="Initial Polarity Check - At Meter and Cut Out"]'));
		this.socketSafetyBtnNO = element(by.xpath('//*[@id="rb_SocSafTe_fail"]'));
		this.anySocketFoundYES = element(by.xpath('//*[@id="rb_SocRevPol_y"]'));
		this.suitableForSmartInstallationYes = element(by.xpath('//input[@id="radio1a"]/following-sibling::span[@class="outer"]'));
		this.equipmentRepositionDD = element(by.xpath('//*[@id="repositionSelect"]'));
		this.suitableSmartInstalationText = element(by.xpath('//div/h4[text()="Suitable for Smart Installation"]'));
		this.instalationNotes = element(by.xpath('//*[@id="smartnotes"]'));
		this.polarityCheckCutOutYES = element(by.xpath('//*[@id="rb_PolCOPass"]'));
		this.polarityCheckCutOutYES1 = element(by.xpath('//*[@id="rb_PolCOPass"]//following-sibling::span[@class="outer"]'));

		this.polarityCheckAtMeter = element(by.xpath('//*[@id="rb_PolCMPass"]'));
		this.currentMeterDetailsText = element(by.xpath('//div/h4[text()="Current Meter Details"]'));
		this.meterCutOutNxtBtn = element(by.xpath('//*[@id="btn_Next_Pol"]'));
		this.existingElecMeterYes = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]'));
		this.DF17currentMeterNxtbtn = element(by.xpath('//*[@id="btn_Next_read"]'));
		this.removeMeterText = element(by.xpath('//div/h4[text()="Remove Meter"]'));
		this.statusOfAssetDD = element(by.xpath('//*[@id="cbx_StaAss_sel"]'));
		this.removeMeterReadingText = element(by.xpath('//*[@id="input0"]'));
		this.unableToReadMeterYes = element(by.xpath('//input[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"]'));
		this.removeAssetTabText = element(by.xpath('//*[@id="Title_Remove_Ass"]'));
		this.removeMeterAddText = element(by.xpath('//*[@id="txt_AddUnRead_note"]'));
		this.rmvNextBtn = element(by.xpath('//*[@id="btn_Next_rmv"]'));
		this.assetSuccessfullyaddedOKbtn = element(by.className('sa-confirm-button-container'));
		this.CommHubText = element(by.xpath('//*[@id="Title_chubInstall"]'));
		this.commHubDD = element(by.xpath('//*[@id="chubInstall_selectAsset"]'));
		this.chfIDInput = element(by.xpath('//*[@id="chubInstall_CHbarcode"]'));
		this.commHubLocDD = element(by.xpath('//*[@id="chubInstall_chubLocationSelect"]'));

		this.commHubLocDD1 = element(by.xpath('//*[@id="currentCommsHub_locationSelect"]'));
		this.arealInstalledYes1 = element(by.xpath('//*[@id="currentCommsHub_aerialInstalled_y"]'));
		this.commHubConnectionDD1 = element(by.xpath('//*[@id="currentCommsHub_existingDetailsCorrect_y"]'));
		this.commHubConnectionDD_n1 = element(by.xpath('//*[@id="currentCommsHub_existingDetailsCorrect_n"]'));
		this.captureCommsHub1 = element(by.xpath('//*[@id="currentCommsHub_existingPhotoButton"]'));
		this.arealInstalledYes = element(by.xpath('//*[@id="chubInstall_aerialInstalled_y"]'));
		this.commHubConnectionDD = element(by.xpath('//*[@id="chubInstall_connectionMethodSelect"]'));
		this.captureCommsHub = element(by.xpath('//*[@id="chubInstall_photoEvidence"]'));
		this.commHubLocNxtBtn = element(by.xpath('//*[@id="chubInstall_nextSectionBtn"]'));
		this.commHubLocNxtBtn1 = element(by.xpath('//*[@id="btnNextcch"]'));
		this.NewMeterDetailsText = element(by.xpath('//*[@id="Title_newMeter"]'));
		this.rmOptionalText = element(by.xpath('//*[@id="optionalassetnotes"]'));
		this.currentMeterNxtbtn = element(by.xpath('//*[@id="currentMeterDetails_nextButton"]'));
		this.removeassetDD = element(by.xpath('//*[@id="cbx_RAss_Status"]'));
		this.confirmAssetYes = element(by.xpath('//*[@id="rb_CAssRem_y"]'));
		this.inputelecSerialNum = element(by.xpath('(//div/input[@id="txt_Serial_Num"])[1]'));
		this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
		this.manufactureLetterDD = element(by.xpath('//*[@id="select_man_letter"]'));
		this.MeterTypeDD = element(by.xpath('//*[@id="select_meter_letter"]'));
		this.meterLocDD = element(by.xpath('//*[@id="cbx_MetLocCode_sel"]'));
		this.inputDate = element(by.xpath('//*[@id="txt_Cert_year"]'));
		this.newMeterNxtBtn = element(by.xpath('//*[@id="btnNextPol"]'));
		this.AddElecCheckTxt = element(by.xpath('//*[@id="Title_Add_ElecTC"]'));
		this.terminalNewTightness = element(by.xpath('//*[@id="rb_TermSTi_y"]'));
		this.photoOfTerminalScrew = element(by.xpath('//button[@id="btn2"]'));
		this.sealsIntactYes = element(by.xpath('//*[@id="rb_SealsInt_y"]'));
		this.portsSealedYes = element(by.xpath('//*[@id="rb_PortsSealed_y"]'));
		this.approveCableMakersYes = element(by.xpath('//*[@id="rb_SieCMark_y"]'));
		this.visualInspectionYes = element(by.xpath('//*[@id="rb_VisInsCom_y"]'));
		this.cableMArkerDD = element(by.xpath('//*[@id="cbx_CabMark_Sel"]'));
		this.earthTypeDD = element(by.xpath('//*[@id="cbx_EarType_Sel"]'));
		this.recentMeterBoardYes = element(by.xpath('//*[@id="rb_ReMetBoard_y"]'));
		this.meterTailsChangedNo = element(by.xpath('//*[@id="rb_MetTailChg_n"]'));
		this.replacedMainFuseYes = element(by.xpath('//*[@id="rb_ReMainFuse_y"]'));
		this.emerJobNo = element(by.xpath('//*[@id="rb_EmerJob_n"]'));
		this.additionalElecNxtBtn = element(by.xpath('//*[@id="btn_Next_PostC"]'));
		this.ElecInitialMeterText = element(by.xpath('//*[@id="Title_InitMet_Read"]'));
		this.captureMeterReadingInput = element(by.xpath('//*[@id="reg0"]'));
		this.meterReadingNxtBtn = element(by.xpath('//*[@id="btn_Next_read"]'));
		this.commissioningTxt = element(by.xpath('//*[@id="Title_commissioning"]'));
		this.nonserealizedAssetDD = element(by.xpath('//*[@id="Cselect4"]'));
		this.nonserealizedAssetInput = element(by.xpath('//*[@id="Cbar3"]'));
		this.commsHubConnectedYes = element(by.xpath('//*[@id="Cradionm1"]'));
		this.commissioningNxtBtn = element(by.xpath('//*[@id="CbtnNextComm"]'));
		this.postInstalationTxt = element(by.xpath('//div/h4[text()="Post Installation Checks"]'));
		this.carryOutPolarityChkYes = element(by.xpath('//*[@id="rb_CarOutPolCk_y"]'));
		this.postpolNotes = element(by.xpath('//*[@id="postpolnotes"]'));
		this.polChkDD = element(by.xpath('//*[@id="cbx_PolChkplg_sel"]'));
		this.confirmSocketPass = element(by.xpath('//*[@id="rb_SocSafChk_pass"]/label/span'));
		this.witnessName = element(by.xpath('//*[@id="txt_TestWtn"]'));
		this.capturePostinstalation = element(by.xpath('//*[@id="btn_CapPhoMart_test"]'));
		this.capturefinalmeterinstal = element(by.xpath('//*[@id="btn_CapPhoFinMet_inst"]'));
		this.captureCloseupMeter = element(by.xpath('//*[@id="btn_CapPhoCloUp_met"]'));
		this.electricInstallTxt = element(by.xpath('//div/h4[text()="Electric Install & Commissioning"]'));
		this.eicomSendMsg = element(by.xpath('//*[@id="eicom_sendMessageButton"]'));;
		this.awaitingResponseTxt = element(by.xpath('//*[@id="//div/h4[text()="Awaiting Response"]'));
		this.commSuccess = element(by.xpath('//*[@id="eicom_nextButton"]'));
		this.submitBtn = element(by.xpath('//*[@id="btn_Submit_elec"]'));
		this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
		this.dummydiv1 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[2]'));
		this.randomClick = element(by.xpath('//div[text()="CHF ID:"]'));
		this.randomEUDevice = element(by.xpath('//div[text()="EUI Device ID:"]'));
		this.DDnewMeteroption = element(by.xpath('//select/option[@value="E9E00000000021"]'));
		this.initialElctext = element(by.xpath('//*[@id="regLabel0"]'));
		this.selectinstallAssetOption = element(by.xpath('(//select[@id="chubInstall_selectAsset"]/option)[4]'));
		this.selectinstallMeterOption = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[4]'));
		this.meterCutOutSubmitButton = element(by.xpath('//div/button[text()="SUBMIT"]'));
		this.addAnotherAsset = element(by.xpath('//*[@id="Cbtn1"]'));
		this.nonserealizedAssetInput1 = element(by.xpath('(//*[@id="Cbar3"])[2]'));
		this.nonserealizedAssetDD1 = element(by.xpath('(//*[@id="Cselect4"])[2]'));
		this.hanAvailableText = element(by.xpath('//*[contains(text(),"HAN Available?")]'));
		this.hanAvailableN = element(by.xpath('(//input[@id="chnohanconnectedfalse"]/following-sibling::span[@class="outer"])[1]'));
		this.selectinstallMeterOption = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[4]'));
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Risk Assessment page is displayed
	 ***/

	public async verifyRiskAssessmentPage() {
		await utility.wait(utility.medium);
		this.riskAssesmentHEader.getText().then(function (riskAssesmentHEaderText) {
			utility.wait(utility.medium);
			console.log("find RiskAssesment Header Text  " + riskAssesmentHEaderText);
		});
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Initial Risk Assessment page is displayed
	 ***/

	public async verifyInitialRiskAssessmentPage() {
		await utility.wait(utility.medium);
		this.initialRiskAssesment.getText().then(function (initialRiskAssesmentText) {
			console.log("find initialRiskAssesment Text  " + initialRiskAssesmentText);
		});
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Input Initial Risk Assessment page Details
	 ***/
	public async inputInitialRiskAssessmentDetails() {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.canYouSmellYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.turnedOffGasYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.callEGPYES, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.inputEGPRef, utility.medium, '123456');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportToHS, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.airLineRefInput, utility.medium, '5678910');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.OKtoProceedEGPOutcome, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Info Pop up is displayed
	 ***/

	public async infoTextPopUp() {
		await utility.wait(utility.medium);
		await expect(await this.infoText.isDisplayed());
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Risk Elec page is displayed
	 ***/

	public async verifyriskElecText() {
		await utility.wait(utility.medium);
		if (this.riskelecText.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.riskelecText.getText().then(function (riskelec) {
				console.log("find riskelec Text  " + riskelec);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Risk Elec page details
	 ***/

	public async fillRiskAssesmentElecFields() {
		await utility.wait(utility.medium);
		if (await this.performRiskText.isDisplayed()) {
			await utility.wait(utility.medium);
			gen.ButtonClick(this.performRiskYES, utility.medium);
		}
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.selectRiskReasonDD, utility.medium, '23');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.RiskAssessmentPassYES, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.riskAssessmentinput, utility.medium, 'Testing Input');
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on capture photo button
	 ***/

	public async capturePhotoBtnDisplayed() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.cameraBtn, utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on Risk Elec Next button
	 ***/

	public async clickNextSectionBtn() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.nextSectionBtn, utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Risk Installation page is displayed
	 ***/

	public async electInstallationSection() {
		await utility.wait(utility.medium);
		if (await this.captureInitialPhotoElec.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.captureInitialPhotoElec.getText().then(function (captureInitialPhotoElecText) {
				console.log("find initialElecCapure Text  " + captureInitialPhotoElecText);
			});
			await utility.wait(utility.medium);
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Initial Polarity Check section is displayed
	 ***/

	public async verifyInitialPolarityCheck() {
		await utility.wait(utility.medium);
		if (await this.initialpolarityCheck.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.initialpolarityCheck.getText().then(function (initialpolarityCheckText) {
				console.log("find initialpolarityCheck Text  " + initialpolarityCheckText);
			});
			await utility.wait(utility.medium);
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Initial Polarity check details
	 ***/

	public async fillthePolarityCheckMartinDale() {
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.polarityCheckDD, utility.medium, 'true');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.socketSafetyBtnYES, utility.medium);
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.socketSetLocDD, utility.medium, '9');
		await utility.wait(utility.very_low);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on capture for preInstalation Button
	 ***/

	public async verifyCapturepreInstallation() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturePreinsatllation, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on No socket Found
	 ***/

	public async verifyanySocketFoundNO() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.anySocketFoundNO, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on Meter Cut Out option
	 ***/

	public async verifyMeterAndCutOut() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.MeterAndCutOutText, utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Suitable for Smart Meter Installation section is displayed
	 ***/

	public async verifysuitableforSmartMeterInstallation() {
		if (await this.suitableSmartInstalationText.isDisplayed()) {
			await utility.wait(utility.medium);
			this.suitableSmartInstalationText.getText().then(function (suitableSmartInstalation) {
				console.log("find suitableSmartInstalation Text  " + suitableSmartInstalation);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Click on Samrt meter installation option
	 ***/

	public async suitableforSmartMeterInstallation() {
		await utility.wait(utility.medium);
		if (await this.suitableForSmartInstallationYes.isDisplayed()) {
			await utility.wait(utility.medium);
			gen.ButtonClick(this.suitableForSmartInstallationYes, utility.medium);
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Select the Equipment Reposition required option
	 ***/

	public async equipmentRepositionReq() {
		await utility.wait(utility.medium);
		if (await this.equipmentRepositionDD.isDisplayed()) {
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.equipmentRepositionDD, utility.medium, 'No Reposition Required');
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Enter Additional Notes for Meter Installation
	 ***/

	public async enterNotesForMeteInstallation() {
		await utility.wait(utility.medium);
		gen.SendKeys(this.instalationNotes, utility.medium, 'Adding instalation Notes');
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on Smart Installation Next button
	***/

	public async clickSmartInstallationNextBtn() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.smartInstallationNextBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Polarity Check Meter Out Details
	***/

	public async fillthePolarityCheckMeterOut() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.polarityCheckCutOutYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.polarityCheckAtMeter, utility.medium);
		await utility.wait(utility.very_low);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on Meter Cutout Next Button
	 ***/

	public async meterCutOutnextSection() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.meterCutOutNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on Meter Cutout Next Button
	 ***/

	public async meterCutOutRemoveSubmitButton() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.meterCutOutSubmitButton, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify current meter Details section and select the option
	***/

	public async verifyCurrentMeterDetails() {
		await utility.wait(utility.medium);
		await this.currentMeterDetailsText.getText().then(function (currentMeterDetails) {
			console.log("find currentMeterDetails Text  " + currentMeterDetails);
		});
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterYes, utility.medium);

		//not req, if new WO required
		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterNxtbtn, utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify remove Tab is displayed
	 ***/

	public async removeTabdisplayed() {
		await utility.wait(utility.medium);
		await expect(this.removeMeterText.isDisplayed());
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Remove meter details
	 ***/

	public async fillRemoveMeterDetails() {
		await utility.wait(utility.medium);
		gen.DropDownOptionbyLabel(this.statusOfAssetDD, utility.medium, 'No Fault Found');
		await utility.wait(utility.medium);
		gen.SendKeys(this.removeMeterReadingText, utility.medium, '12345');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.unableToReadMeterYes, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Click on the OK pop up button
	 ***/

	public async OKButton() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.assetSuccessfullyaddedOKbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify remove asset section is displayed
	 ***/

	public async removeAssetTextDisplayed() {
		await utility.wait(utility.medium);
		await expect(this.removeAssetTabText.isDisplayed());
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Comms Hub Section is displayed
	 ***/

	public async CommHubDisplayed() {
		await utility.wait(utility.medium);
		await this.CommHubText.getText().then(function (CumHub) {
			console.log("find CuMHubText Text  " + CumHub);
		});
		await utility.wait(utility.medium);
	}

	public async fillthePolarityCheckMeterOut_INST15() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.polarityCheckCutOutYES1, utility.medium);
	}

	public async fillCommsHubDetails_INST15(index: number) {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			// click the dropdown
			gen.ButtonClick(this.commHubDD, utility.medium);
			browser.sleep(1000)
			console.log("Selecting element based index : " + index)
			// select the option
			await this.commHubDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commshubPopup, utility.medium);
			await utility.wait(utility.medium);
			
			var options = this.selectinstallAssetOption.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium);
			await this.chfIDInput.clear();
			await utility.wait(utility.medium);
			gen.SendKeys(this.chfIDInput, utility.medium, options);
			await utility.wait(utility.medium);
			await this.commHubDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commshubPopup, utility.medium);
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.commHubLocDD, utility.medium, 'A');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.arealInstalledYes, utility.medium);
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.commHubConnectionDD, utility.medium, '2');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.captureCommsHub, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubLocNxtBtn, utility.medium);
			await utility.wait(utility.medium);
	}

	public async fillInitialElecMeterReading_INST15() {
		await expect(await this.captureMeterReadingInput.isPresent());
		await utility.wait(utility.medium);
		gen.SendKeys(this.captureMeterReadingInput, utility.medium, '12345');
		//if new WO not req, if existing WO required nxtbtn
		await utility.wait(utility.medium);
		gen.ButtonClick(this.unableToReadMeterYes, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillPostInstallationCheck_INST15() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.carryOutPolarityChkYes, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.postpolNotes, utility.medium, 'Additional Remarks');
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.polChkDD, utility.medium, 'true');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.confirmSocketPass, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill new meter details
	***/

	public async fillNewMeterDetails(index: number) {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.newMeterDD, utility.medium);
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			var options = this.selectinstallMeterOption.getAttribute('value');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputelecSerialNum, utility.medium, options);
			await utility.wait(utility.medium);
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.infoOKButton, utility.medium);
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.MeterTypeDD, utility.medium, '0');
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.meterLocDD, utility.medium, 'D');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputDate, utility.medium, '90/01');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.newMeterNxtBtn, utility.medium);
			await utility.wait(utility.low);

	}
	/***
 * @Author Supriya Harikumar
 * @description Verify Comms Hub Section is displayed
***/

	public async CommHubDisplayed_DF17SmartCredit() {
		await utility.wait(utility.medium);
		await this.currentMeterDetailsText.getText().then(function (CumHub) {
			console.log("find CuMHubText Text  " + CumHub);
		});
		await utility.wait(utility.very_low);
	}

	public async verifyDF17CurrentMeterDetails() {
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		await this.currentMeterDetailsText.getText().then(function (currentMeterDetails) {
			console.log("find currentMeterDetails Text  " + currentMeterDetails);
		});
		gen.ButtonClick(this.updateValuesBtn1, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterNo, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterNxtbtn, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterDetailsHeader1, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.unableToReadMeterYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.DF17currentMeterNxtbtn, utility.medium);
		await utility.wait(utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description Fill Remove asset details
	 ***/

	public async fillremoveAssetDetails() {
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.removeassetDD, utility.medium, '1');
		await utility.wait(utility.medium);;
		gen.ButtonClick(this.confirmAssetYes, utility.medium);
		await utility.wait(utility.very_low);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Comms Hub Details
	 ***/

	public async fillCommsHubDetails(index: number) {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubDD, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.commHubDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commshubPopup, utility.medium);
			await utility.wait(utility.medium);
			var options = this.selectinstallAssetOption.getAttribute('value');
			await this.chfIDInput.clear();
			await utility.wait(utility.medium);
			gen.SendKeys(this.chfIDInput, utility.medium, options);
			await utility.wait(utility.medium);
			// IE random click fix
			await this.commHubDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.infoOKButton, utility.medium);
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.commHubLocDD, utility.medium, 'A');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.arealInstalledYes, utility.medium);
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.commHubConnectionDD, utility.medium, '2');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.captureCommsHub, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubLocNxtBtn, utility.medium);
			await utility.wait(utility.medium);
	}

	/***
 * @Author Supriya Harikumar
 * @description Fill Comms Hub Details
***/
	public async fillCommissioningDetails_SFEFLTY19TRAD() {
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.nonserealizedAssetDD, utility.medium, '2');
		await utility.wait(utility.medium);
		gen.SendKeys(this.nonserealizedAssetInput, utility.medium, '1');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.addAnotherAsset, utility.medium);
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.nonserealizedAssetDD1, utility.medium, '1');
		await utility.wait(utility.medium);
		gen.SendKeys(this.nonserealizedAssetInput1, utility.medium, '2');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.commissioningNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillCommsHubDetails_DF17SmartCredit() {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
				await utility.wait(utility.medium);
				gen.ButtonClick(this.updateValuesBtn, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			gen.DropDownOptionClick(this.commHubLocDD1, utility.medium, 'A');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.arealInstalledYes1, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubConnectionDD_n1, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.currentMeterDetailsHeader, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubConnectionDD1, utility.medium);
			await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.captureCommsHub1, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubLocNxtBtn1, utility.medium);
			await utility.wait(utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description Verify New Meter Details section is displayed
	 ***/

	public async newMeterDetailsDisplayed() {
		await utility.wait(utility.medium);
		await this.NewMeterDetailsText.getText().then(function (NewMeterDetails) {
			console.log("find NewMeterDetails Text  " + NewMeterDetails);
		});
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Current Meter Details
	 ***/

	public async fillCurrentMeterDetails() {
			await utility.wait(utility.medium);
			gen.ButtonClick(this.existingElecMeterYes, utility.medium);
			await utility.wait(utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description Verify additional Elec Check section is displayed
	 ***/

	public async additionalElecCheckDisplayed() {
		await utility.wait(utility.medium);
		if (this.AddElecCheckTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.AddElecCheckTxt.getText().then(function (AddElec) {
				console.log("find AddElecCheckTxt Text  " + AddElec);
			});
		}
	}
	/***
	 * @Author Aparna Das
	 * @description Fill Additional Elec check details
	 ***/
	public async fillAdditionalElecCheckDetails() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.terminalNewTightness, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.photoOfTerminalScrew, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.sealsIntactYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.portsSealedYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.approveCableMakersYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.visualInspectionYes, utility.medium);
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.cableMArkerDD, utility.medium, '2');
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.earthTypeDD, utility.medium, '4');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.recentMeterBoardYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.meterTailsChangedNo, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedMainFuseYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.emerJobNo, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalElecNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description Verify Initial meter Reading section is displayed
	 ***/

	public async initialMEterREadingTxtDisplayed() {
		await utility.wait(utility.medium);
		if (this.ElecInitialMeterText.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.ElecInitialMeterText.getText().then(function (InitialElec) {
				console.log("find ElecInitialMeterText Text  " + InitialElec);
			});
		}
	}

	public async fillNewMeterDetailsTRAD(index: number) {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			await this.inputelecSerialNum.clear();
			var options = this.selectinstallMeterOption.getAttribute('value');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputelecSerialNum, utility.medium, options);

		await utility.wait(utility.medium);
		// IE random click fix
		await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
		//gen.ButtonClick(this.newMeterDD, utility.medium);
		//await utility.wait(utility.medium);
		console.log('click1 done');
		gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.meterLocDD, utility.medium, 'D');
		await utility.wait(utility.medium);
		gen.SendKeys(this.inputDate, utility.medium, '90/01');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.newMeterNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill initial meter reading details
	 ***/

	public async fillInitialElecMeterReading() {
		await utility.wait(utility.medium);
		gen.SendKeys(this.captureMeterReadingInput, utility.medium, '12345');

		//if new WO not req, if existing WO required nxtbtn
		await utility.wait(utility.medium);
		//gen.ButtonClick(this.initialElctext, utility.medium);
		await utility.wait(utility.medium);

		
	}
	//CGP added for ex23

	public async fillInitialElecMeterReadingEX23() {
		await utility.wait(utility.medium);
		await this.captureMeterReadingInput.clear();
		await utility.wait(utility.medium);
		gen.SendKeys(this.captureMeterReadingInput, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.initialElctext, utility.medium);
		console.log("Clicked");

		//Below can be used if random click doesnt work

		// if (await this.unableToReadMeterYes.isDisplayed()) {
		//     await this.unableToReadMeterYes.click();
		// }    
		// await utility.wait(utility.very_low);	 

		// if (await this.meterReadingNxtBtn.isDisplayed()) {
		//     await this.meterReadingNxtBtn.click();
		// }   
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Commisssioning section is displayed
	***/
	public async commisioningTxtDisplayed() {
		await utility.wait(utility.medium);
		if (this.commissioningTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.commissioningTxt.getText().then(function (commissioning) {
				console.log("find commissioning Text  " + commissioning);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill commissioning details
	 ***/

	public async fillCommissioningDetails() {
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.nonserealizedAssetDD, utility.medium, '1');
		await utility.wait(utility.medium);
		gen.SendKeys(this.nonserealizedAssetInput, utility.medium, '1');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.commsHubConnectedYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.commissioningNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify post installation check is displayed
	 ***/

	public async postInstallationCheckDisplayed() {
		await utility.wait(utility.medium);
		if (this.postInstalationTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.postInstalationTxt.getText().then(function (postInstalation) {
				console.log("find postInstalationTxt Text  " + postInstalation);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill post installation check details
	 ***/

	public async fillPostInstallationCheck() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.carryOutPolarityChkYes, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.postpolNotes, utility.medium, 'Additional Remarks');
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.polChkDD, utility.medium, 'true');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.confirmSocketPass, utility.medium);
		
		await utility.wait(utility.medium);
		gen.SendKeys(this.witnessName, utility.medium, 'John');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturePostinstalation, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturefinalmeterinstal, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.captureCloseupMeter, utility.medium);
		await utility.wait(utility.medium);
	}

	// CGP added for Installation 16


	public async fillPostInstallationCheckINST16() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.carryOutPolarityChkYes, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.postpolNotes, utility.medium, 'Additional Remarks');

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.polChkDD, utility.medium, 'true');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.confirmSocketPass, utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Electric installation section is displayed
	***/
	public async electricInstalDisplayed() {
		await utility.wait(utility.medium);
		if (this.electricInstallTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.electricInstallTxt.getText().then(function (electricInstall) {
				console.log("find electricInstall Text  " + electricInstall);
			});
		}

	}

	public async eicomMessage_INST15() {
		await utility.wait(utility.medium);
		if (this.eicomSendMsg.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.eicomSendMsg.getText().then(function (eicomSend) {
				console.log("find eicomSendMsg Text  " + eicomSend);
			});
			await utility.wait(utility.medium);
			gen.ButtonClick(this.eicomSendMsg, utility.medium);
			await utility.wait(utility.high);

			gen.ButtonClick(this.commSuccess, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.submitBtn, utility.medium);
			await utility.wait(utility.medium);
		}
	}

	public async eicomMessage_failed() {
		await utility.wait(utility.medium);
		if (this.eicomSendMsg.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.eicomSendMsg.getText().then(function (eicomSend) {
				console.log("find eicomSendMsg Text  " + eicomSend);
			});
			await utility.wait(utility.medium);
			gen.ButtonClick(this.eicomSendMsg, utility.medium);
			await utility.wait(utility.medium);
			if (this.hanAvailableText.isDisplayed()) {
				await utility.wait(utility.medium);
				await utility.wait(utility.medium);
				gen.ButtonClick(this.hanAvailableN, utility.medium);
				await utility.wait(utility.medium);
			}
		}
	}
	/***
	 * @Author Aparna Das
	 * @description FIll and submit EICOM Message section
	 ***/
	public async eicomMessage() {
		if (this.eicomSendMsg.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.eicomSendMsg.getText().then(function (eicomSend) {
				console.log("find eicomSendMsg Text  " + eicomSend);
			});
			await utility.wait(utility.medium);
			gen.ButtonClick(this.eicomSendMsg, utility.medium);
			await utility.wait(utility.high);
			gen.ButtonClick(this.commSuccess, utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.submitBtn, utility.medium);
			await utility.wait(utility.medium);
		}
	}

	//CGP added
	public async fillthePolarityCheckMeterOutINST16() {
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.polarityCheckCutOutYES, utility.medium);
		await utility.wait(utility.medium);
	}

	public async inputInitialRiskAssessmentDetails_SFENMEX15() {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.canYouSmellYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.turnedOffGasYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.callEGPYES, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.inputEGPRef, utility.medium, '123456');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportToHS, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.airLineRefInput, utility.medium, '5678910');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.OKtoProceedEGPOutcome, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.NeedtoWorkYES, utility.medium);
		await utility.wait(utility.medium);
	}

	public async inputInitialRiskAssessmentDetails_SFEFLTY19() {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.canYouSmellYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.turnedOffGasYES, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.callEGPYES, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.inputEGPRef, utility.medium, '123456');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportToHS, utility.medium);
		await utility.wait(utility.medium);
		gen.SendKeys(this.airLineRefInput, utility.medium, '5678910');
		await utility.wait(utility.medium);
		gen.ButtonClick(this.OKtoProceedEGPOutcome, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillCommissioningDetails_SFEFLTY19() {
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.nonserealizedAssetDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.SendKeys(this.nonserealizedAssetInput, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commissioningNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
 * @Author Supriya Harikumar
 * @description FIll and submit EICOM Message section
 ***/
	public async eicomMessageDF17() {
		await utility.wait(utility.medium);
		if (this.eicomSendMsg.isDisplayed()) {
			await utility.wait(utility.medium);

			await this.eicomSendMsg.getText().then(function (eicomSend) {
				console.log("find eicomSendMsg Text  " + eicomSend);
			});
			await utility.wait(utility.medium);
			gen.ButtonClick(this.eicomSendMsg, utility.medium);
			await utility.wait(utility.high);

			gen.ButtonClick(this.commSuccess, utility.medium);
			await utility.wait(utility.medium);
			await utility.wait(utility.medium);
		}
	}

	//CGP added for EX23
	public async eicomMessageEX23() {
		await utility.wait(utility.medium);
		if (this.eicomSendMsg.isDisplayed()) {
			await utility.wait(utility.medium);

			await this.eicomSendMsg.getText().then(function (eicomSend) {
				console.log("find eicomSendMsg Text  " + eicomSend);
			});
			await utility.wait(utility.medium);
			gen.ButtonClick(this.eicomSendMsg, utility.medium);
			await utility.wait(utility.high);
			gen.ButtonClick(this.commSuccess, utility.medium);
			await utility.wait(utility.medium);
		}

	}

	public async fillNewMeterDetails_INST15(index: number) {
		await utility.wait(utility.medium);
		// await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			gen.ButtonClick(this.newMeterDD, utility.medium);
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			//await this.commshubPopup.click();
			var options = this.selectinstallMeterOption.getAttribute('value');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputelecSerialNum, utility.medium, options);
			await utility.wait(utility.medium);
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.infoOKButton, utility.medium);

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.MeterTypeDD, utility.medium, '0');
			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.meterLocDD, utility.medium, 'D');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputDate, utility.medium, '90/01');
			await utility.wait(utility.medium);
			gen.ButtonClick(this.newMeterNxtBtn, utility.medium);
			await utility.wait(utility.medium);

	}

	public async captureInitialElectricalPhoto() {
		await utility.wait(utility.medium);
		if (this.currentElectricPhotoFullMeterButton.isDisplayed()) {
			await utility.wait(utility.medium);
			gen.ButtonClick(this.currentElectricPhotoFullMeterButton, utility.medium)
			await utility.wait(utility.medium);
		}
	}
}
