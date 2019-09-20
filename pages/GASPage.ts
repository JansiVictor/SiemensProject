import {
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
const utility: Utility = new Utility();
import {
	Alert
} from 'selenium-webdriver';

export class GASPageObject {

	public riskAssessGas: ElementFinder;
	public capturephotoMeterInstall: ElementFinder;  
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
	public suitableforInstaGASYes: ElementFinder;
	public repositionReqGASDD: ElementFinder;
	public additionalGASSmartNote: ElementFinder;
	public suitableGASnxtBtn: ElementFinder;
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
	public newRegulatorTxt: ElementFinder;
	public regulatorReplacedYes: ElementFinder;
	public selectValidAssetDD: ElementFinder;
	public OKpopupBtn: ElementFinder;
	public regulatorTxt: ElementFinder;
	public newRegulatorNxtBtn: ElementFinder;
	public newMeterDD: ElementFinder;
	public inputelecSerialNum: ElementFinder;
	public manufactureLetterDD: ElementFinder;
	public MeterTypeDD: ElementFinder;
	public meterLocDD: ElementFinder;
	public gasInitialMeterTxt: ElementFinder;
	public regulatorSerialNoinput: ElementFinder;
	public commshubPopup: ElementFinder;
	public NewMeterDetailsText: ElementFinder;
	public randomEUDevice: ElementFinder;
	public capturemeterReadingInput: ElementFinder;
	public capturreMeterReadingTxt: ElementFinder;
	public installKitTxt: ElementFinder;
	public installKitUsedYes: ElementFinder;
	public nonSerialisedAsssetsDD: ElementFinder;
	public nonSerialisedAsssetsDD1: ElementFinder;
	public assetInput: ElementFinder;
	public installKitNxtBtn: ElementFinder;
	public postInstallationGasTxt: ElementFinder;
	public additionalTxtPreInstallGas: ElementFinder;
	public selectassettoInstallGas: ElementFinder;
	public selectNewMeterGasOptn: ElementFinder;
	public inputMeterSerialNum: ElementFinder;
	public contactGTYEs: ElementFinder;
	public GAStightnessTestYes: ElementFinder;
	public GasTightnessTestPerformedYes: ElementFinder;
	public nationalGTRefInput: ElementFinder;
	public additionalWork1: ElementFinder;
	public additionalWork2: ElementFinder;
	public additionalWork3: ElementFinder;
	public additionalWork4: ElementFinder;
	public additionalWork5: ElementFinder;
	public additionalWork6: ElementFinder;
	public GasPostAddText: ElementFinder;
	public replacedGasMeterYes: ElementFinder;
	public replacedGasRegulatorYes: ElementFinder;
	public GasTightnessYes: ElementFinder;
	public capturePostInstallationGas: ElementFinder;
	public DIPGASYes: ElementFinder;
	public dipSelectDD: ElementFinder;
	public meterTypeGASDD: ElementFinder;
	public tightnessPassedYes: ElementFinder;
	public witnessName: ElementFinder;
	public standingPressure: ElementFinder;
	public dipCaptureBtn: ElementFinder;
	public workingpressure: ElementFinder;
	public wpCapture: ElementFinder;
	public finalMeterCapture: ElementFinder;
	public polNxtBtn: ElementFinder;
	public gicomSendMessage: ElementFinder;
	public successfulBtn: ElementFinder;
	public gasAppliencesSafetyTxt: ElementFinder;
	public earthBondingYEs: ElementFinder;
	public landLordPropertyYes: ElementFinder;
	public gasAddressinput: ElementFinder;
	public allAppliTestedBtn: ElementFinder;
	public submitGas: ElementFinder;
	public landLordPropertyNo: ElementFinder;
	public reportedToHSYEsGas: ElementFinder;
	public inputAirLineRefGAS: ElementFinder;
	public gtAttendanceOnSiteYes: ElementFinder;
	public gtResolveIssueGas: ElementFinder;
	public AdditionalWorktoPassYesGAS: ElementFinder;
	public currentCommsHubText: ElementFinder;
	public smets2CommshubOnsiteYes: ElementFinder;
	public commHubDD: ElementFinder;
	public chfIDInput: ElementFinder;
	public commHubLocDD: ElementFinder;
	public arealInstalledYes: ElementFinder;
	public commHubConnectionDD: ElementFinder;
	public captureCommsHub: ElementFinder;
	public commHubLocNxtBtn: ElementFinder;
	public selectinstallAssetOption: ElementFinder;
	public randomClick: ElementFinder;
	public smets2CommshubOnsiteNo: ElementFinder;
	public installCommsHubNo: ElementFinder;
	public commshubNxtbtn: ElementFinder;
	public installCommsHubText: ElementFinder;
	public commshubconnectedtoWANYes: ElementFinder;
	public inputinstallCommshub: ElementFinder;
	public installCommsHubYes: ElementFinder;
	public infoOKButton: ElementFinder;
	public inputcradleSerialNo: ElementFinder;
	public captureEvidenceGas: ElementFinder;

	public suitableforSmartInstallationGASTxt:ElementFinder;
	public cptureinitialPhotogas:ElementFinder;
	public captureInitialPhotogas:ElementFinder;
	public regulatorText:ElementFinder;
	public selectassettoNewwRegGasDD:ElementFinder;


	public clickSubmit: ElementFinder;
	public currentGASMeterDetailsTxt: ElementFinder;
	public captureInitialPhotogastxtDF17: ElementFinder;
	public currentMeterDetailsText: ElementFinder;
	public updateValuesBtn: ElementFinder;
    public unableToReadMeterYes: ElementFinder;
	public unableToReadMeterYes_SFENMEX15: ElementFinder;
	public existingElecMeterNo: ElementFinder;
	public installKitUsedYes1: ElementFinder;
    public currentMeterNxtbtn: ElementFinder;
    public DF17currentMeterNxtbtn: ElementFinder;
	public SFENMEX15currentNxtbtn: ElementFinder;
	public currentMeterDetailsHeader: ElementFinder;
	public existingElecMeterYes: ElementFinder;
	public commsHubConnectedYes: ElementFinder;
	public assetInput1: ElementFinder;
	public installKitNxtBtn1: ElementFinder;
	public selectAssettoNewRegGas:ElementFinder;

	 //CGP added
	 public contactGTYES: ElementFinder;
   
	 public reportedIncidentYES: ElementFinder;
	 public airLineRefNo: ElementFinder;
	 public waitForGTYES: ElementFinder;
 
	 public gtResolveIssueYES: ElementFinder;
	 public polNxtBtnGasMeter:ElementFinder;



	constructor() {
		this.riskAssessGas = element(by.id('Title_RiskAss_gas'));
		this.commsHubConnectedYes = element(by.xpath('//input[@id="Cradionm1"]/following-sibling::span[@class="outer"]'));
        
		this.currentMeterDetailsText = element(by.xpath('//div/h4[text()="Current Meter Details - Gas"]'));
		this.updateValuesBtn = element(by.xpath('//*[@id="gasCurrentMeter_updateValues"]'));
        this.unableToReadMeterYes = element(by.xpath('(//input[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"])[2]'));
		this.unableToReadMeterYes_SFENMEX15 = element(by.xpath('(//input[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"])[1]'));
		this.existingElecMeterYes = element(by.id('gasCurrentMeter_detailsCorrect_y'));
		this.existingElecMeterNo = element(by.id('gasCurrentMeter_detailsCorrect_n'));
		this.currentMeterNxtbtn = element(by.id('btnNextComm'));
        this.DF17currentMeterNxtbtn = element(by.xpath('(//*[@id="btn_Next_read"])[2]'));
        this.SFENMEX15currentNxtbtn = element(by.xpath('(//*[@id="btn_Next_read"])[1]'));
        this.currentMeterDetailsHeader = element(by.xpath('//div[@id="Title_gasCurrentMeter"]'));
			
		this.clickSubmit = element(by.xpath('(//button[@id="btn1"])[3]'));
		this.capturephotoMeterInstall = element(by.id('gasbtn1'));
		this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
		this.voltStickYEs = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
		this.theftOfGasYes = element(by.xpath('//input[@id="raga1"]/following-sibling::span[@class="outer"]'));
		this.ecvChksPAss = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
		this.workAreaSafetyYes = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
		this.captureEvidence = element(by.xpath('(//button[@id="btn1"])[1]'));

		this.captureEvidenceGas = element(by.xpath('(//button[starts-with(text(),"CAPTURE PHOTOGRAPHIC")])[1]'));
		this.additionalGASNote = element(by.id('text1'));
		this.currentGASMeterDetailsTxt = element(by.id('Title_gasCurrentMeter'));
		this.safeToContinueYEs = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
		this.suitableforSmartInstallationTxt = element(by.id('Title_Smart_Elec'));
		this.suitableforSmartInstallationGASTxt = element(by.id('Title_gasSmartCheck'));

		this.additionalGASNote = element(by.id('text1'));
		this.safeToContinueYEs = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
		this.suitableforSmartInstallationTxt = element(by.id('Title_Smart_Elec'));

		this.suitableforInstaYes = element(by.id('rb_SuitFS_y'));
		this.repositionReqDD = element(by.id('repositionSelect'));
		this.additionalSmartNote = element(by.id('smartnotes'));
		this.suitablenxtBtn = element(by.id('btn_Next_Section'));
		this.suitableforInstaGASYes = element(by.xpath('//input[@id="gasradio1a"]/following-sibling::span[@class="outer"]'));
		this.repositionReqGASDD = element(by.id('gasSmartCheck_gasrepositionSelect'));
		this.additionalGASSmartNote = element(by.id('gasSmartCheck_gassmartnotes'));
		this.suitableGASnxtBtn = element(by.id('gasSmartCheck_nextButton'));
		this.captureInitialPhotogastxt = element(by.id('Title_Init_Photo'));
		this.captureInitialPhotogas = element(by.id('Title_gasInitialPhoto'));
		this.captureInitialPhotogastxtDF17 = element(by.id('Title_gasInitialPhoto'));
		this.captureInitialPhotogasbtn = element(by.id('btn_Init_Photo'));
		this.cptureinitialPhotogas = element(by.id('gasbtn1'));
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
		this.reportedToHSYEsGas = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.inputAirLineRefGAS = element(by.xpath('//div/input[@id="input2"]'));
		this.gtResolveIssueGas = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.reportedToHSYEs = element(by.id('rb_RepAirLine_y'));
		this.inputAirLineRef = element(by.id('hsjobref'));
		this.waitForGTYes = element(by.id('rb_GTAttSite_y'));
		this.GTResolveIssue = element(by.id('rb_GTResIss_y'));
		this.currentMeterDetailsTxt = element(by.id('Title_CurrMe_Det'));
		this.newRegulatorTxt = element(by.id('TITLE_RegNew'));
		this.regulatorReplacedYes = element(by.xpath('//input[@id="regulator_replacedtrue"]/following-sibling::span[@class="outer"]'));
		this.OKpopupBtn = element(by.xpath('//div/button[text()="OK"]'));
		this.regulatorTxt = element(by.xpath('//div[@id="lbl_SerNote"]'));
		this.newRegulatorNxtBtn = element(by.id('newRegulator_nextButton'));
		this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
        this.selectValidAssetDD = element(by.model('scp.selectedAsset'));
        this.regulatorSerialNoinput = element(by.id('btn_RegSNum1'));
		this.OKpopupBtn = element(by.xpath('//div/button[text()="OK"]'));
        this.newRegulatorNxtBtn = element(by.id('newRegulator_nextButton'));
        this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
		this.manufactureLetterDD = element(by.id('select_man_letter'));
		this.MeterTypeDD = element(by.id('select_meter_letter'));
		this.meterLocDD = element(by.id('cbx_MetLoc_sel'));
		this.gasInitialMeterTxt = element(by.xpath('//div/h4[text()="Gas Initial Meter Reading"]'));
		this.NewMeterDetailsText = element(by.id('Title_newMeter'));
		this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
		this.capturemeterReadingInput = element(by.id('reg0'));
		this.randomEUDevice = element(by.xpath('//div[text()="EUI Device ID:"]'));
		this.inputelecSerialNum = element(by.id('btn_RegSNum1'));
		this.capturreMeterReadingTxt = element(by.xpath('//div[text()="Capture Meter Reading - Register (null):"]'));
		this.installKitTxt = element(by.xpath('//div/h4[text()="Install Kit"]'));
		this.installKitUsedYes = element(by.xpath('//input[@id="inp1"]/following-sibling::span[@class="outer"]'));
		this.installKitUsedYes1 = element(by.xpath('//*[@id="gasInstallPhoto_installKit_y"]'));
		this.nonSerialisedAsssetsDD = element(by.id('assetselect0'));
		this.nonSerialisedAsssetsDD1 = element(by.id('gasassetselect0'));
		this.assetInput = element(by.id('assetinput0'));
		this.installKitNxtBtn = element(by.id('btnNextrmmip'));
		this.postInstallationGasTxt = element(by.xpath('//div/h4[text()="Post Installation Gas Tightness Test"]'));
		this.additionalTxtPreInstallGas = element(by.id('txt_AddNotGasTigT'));
		this.selectAssettoNewRegGas = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])'));
		this.selectassettoNewwRegGasDD = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[2]'));
		this.selectassettoInstallGas = element(by.xpath('(//select[@ng-model="scp.selectedAsset"]/option)[2]'));
		this.inputinstallCommshub = element(by.id('chubInstall_CHbarcode'));
		this.selectNewMeterGasOptn = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[3]'));
		this.inputMeterSerialNum = element(by.xpath('(//div/input[@id="txt_Serial_Num"])[1]'));
		this.contactGTYEs = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.GasTightnessTestPerformedYes = element(by.xpath('//input[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.nationalGTRefInput = element(by.id('input1'));
		this.additionalWork1 = element(by.xpath('(//input[@id="work[$index]"]/following-sibling::span[@class="outer"])[1]'));
		this.additionalWork2 = element(by.xpath('(//input[@id="work[$index]"]/following-sibling::span[@class="outer"])[2]'));
		this.additionalWork3 = element(by.xpath('(//input[@id="work[$index]"]/following-sibling::span[@class="outer"])[3]'));
		this.additionalWork4 = element(by.xpath('(//input[@id="work[$index]"]/following-sibling::span[@class="outer"])[4]'));
		this.additionalWork5 = element(by.xpath('(//input[@id="work[$index]"]/following-sibling::span[@class="outer"])[5]'));
		this.additionalWork6 = element(by.xpath('(//input[@id="work[$index]"]/following-sibling::span[@class="outer"])[6]'));
		this.GasPostAddText = element(by.xpath('(//textarea[@id="text1"])[2]'));
		this.replacedGasMeterYes = element(by.xpath('//input[@id="gtp13"]/following-sibling::span[@class="outer"]'));
		this.replacedGasRegulatorYes = element(by.xpath('//input[@id="gtp15"]/following-sibling::span[@class="outer"]'));
		this.GasTightnessYes = element(by.xpath('//input[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.capturePostInstallationGas = element(by.id('btn_CapPoTi_test'));
		this.DIPGASYes = element(by.xpath('//input[@id="gtp19"]/following-sibling::span[@class="outer"]'));
		this.dipSelectDD = element(by.id('select1'));
		this.meterTypeGASDD = element(by.id('select2'));
		this.tightnessPassedYes = element(by.xpath('//input[@id="gtp21"]/following-sibling::span[@class="outer"]'));
		this.AdditionalWorktoPassYesGAS = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.witnessName = element(by.xpath('//form/input[@id="input3"]'));
		this.standingPressure = element(by.id('gaspoststandingpressure'));
		this.dipCaptureBtn = element(by.id('btn_CapStPr'));
		this.workingpressure = element(by.id('gaspostworkingpressure'));
		this.wpCapture = element(by.xpath('(//div[@id="btn_CapStPr"])[2]'));
		this.finalMeterCapture = element(by.xpath('//button[@id="btn2"]'));
		this.polNxtBtn = element(by.xpath('(//div/button[@id="btnNextPol"])'));
		this.polNxtBtnGasMeter = element(by.xpath('(//div/button[@id="btnNextPol"])[2]'));
		this.gicomSendMessage = element(by.id('gicom_sendMessageButton'));
		this.successfulBtn = element(by.id('gicom_nextButton'));
		this.gasAppliencesSafetyTxt = element(by.xpath('//div/h4[text()="Gas Appliance Safety Checks"]'));
		this.earthBondingYEs = element(by.xpath('//input[@id="radioraa1a"]/following-sibling::span[@class="outer"]'));
		this.landLordPropertyYes = element(by.xpath('//input[@name="5341"]/following-sibling::span[@class="outer"]'));
		this.landLordPropertyNo = element(by.id('radioraa4'));
		this.gasAddressinput = element(by.xpath('(//input[@id="input1"])[2]'));
		this.allAppliTestedBtn = element(by.id('btn_AllApp_tested'));
		this.submitGas = element(by.id('btn_Subm_gas'));
		this.gtAttendanceOnSiteYes = element(by.xpath('//input[@id="gtp5"]/following-sibling::span[@class="outer"]'));
		this.currentCommsHubText = element(by.id('Title_currentCommsHub'));
		this.smets2CommshubOnsiteYes = element(by.xpath('//input[@id="gascchubOnSitetrue"]/following-sibling::span[@class="outer"]'));
		this.smets2CommshubOnsiteNo = element(by.xpath('//input[@id="gascchubOnSitefalse"]/following-sibling::span[@class="outer"]'));
		this.commHubDD = element(by.id('chubInstall_selectAsset'));
		this.chfIDInput = element(by.id('currentCommsHub_chfId'));
		this.commHubLocDD = element(by.id('chubInstall_chubLocationSelect'));
		this.arealInstalledYes = element(by.id('chubInstall_aerialInstalled_y'));
		this.commHubConnectionDD = element(by.id('chubInstall_connectionMethodSelect'));
		this.captureCommsHub = element(by.id('chubInstall_photoEvidence'));
		this.commHubLocNxtBtn = element(by.id('chubInstall_nextSectionBtn'));
		this.selectinstallAssetOption = element(by.xpath('(//select[@id="chubInstall_selectAsset"]/option)[4]'));
		this.randomClick = element(by.xpath('//div[text()="CHF ID:"]'));
		this.commshubNxtbtn = element(by.id('btnNextcch'));
		this.installCommsHubNo = element(by.id('chubInstall_newChubRequired_n'));
		this.installCommsHubYes = element(by.id('chubInstall_newChubRequired_y'));
		this.installCommsHubText = element(by.id('Title_chubInstall'));
		this.commshubconnectedtoWANYes = element(by.xpath('//input[@id="Cradionm1"]/following-sibling::span[@class="outer"]'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.inputcradleSerialNo = element(by.id('chubInstall_cradleSerial'));
		this.regulatorText = element(by.xpath('//div/h4[text()="New Regulator"]'));
		this.assetInput1 = element(by.id('gasassetinput0'));
        this.installKitNxtBtn1 = element(by.id('gasInstallPhoto_nextBtn'));

        //CGP
        this.contactGTYES = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
        this.reportedIncidentYES = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
        this.contactGTYES = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
        this.nationalGTRefInput = element(by.id('input1'));
        this.reportedIncidentYES = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
        this.inputGTRef = element(by.id('gt_issue'));
        this.airLineRefNo =  element(by.id('input2'));
        this.waitForGTYES =  element(by.xpath('//input[@id="gtp5"]/following-sibling::span[@class="outer"]'));
        this.gtResolveIssueYES = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
        this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
        this.replacedGasMeterYes = element(by.xpath('//input[@id="gtp13"]/following-sibling::span[@class="outer"]'));
    }


	public async riskAssessmentGASDisplayed() {
		if (this.riskAssessGas.isDisplayed()) {
			await this.riskAssessGas.getText().then(function (riskAssess) {
				console.log("find riskAssess Text  " + riskAssess);
			});
		}

	}

	public async verifySFENMEX15CurrentMeterDetails() {
		await expect(this.currentMeterDetailsText.isPresent());
		await this.currentMeterDetailsText.getText().then(function (currentMeterDetails) {
			console.log("find currentMeterDetails Text  " + currentMeterDetails);
		});
		await this.updateValuesBtn.click();
		await utility.wait(utility.medium_low);
		await expect(this.existingElecMeterNo.isPresent());
		await this.existingElecMeterNo.click();
		//await expect(this.existingElecMeterYes.isPresent());
		//await this.existingElecMeterYes.click();
		//await utility.wait(utility.very_low);
		//not req, if new WO required
		if (await this.currentMeterNxtbtn.isDisplayed()) {
			await this.currentMeterNxtbtn.click();
		}
		await utility.wait(6000);
		await this.currentMeterDetailsHeader.click();
		await expect(this.existingElecMeterYes.isPresent());
		await utility.wait(6000);
		await this.existingElecMeterYes.click();
		await utility.wait(6000);
		if (await this.unableToReadMeterYes_SFENMEX15.isDisplayed()) {
			await this.unableToReadMeterYes_SFENMEX15.click();
			await utility.wait(6000);
        }
        
		await this.SFENMEX15currentNxtbtn.click();
		await utility.wait(utility.low);
    }


	public async meterCutOutnextSection() {
		await expect(this.clickSubmit.isPresent());
		await this.clickSubmit.click();
		await utility.wait(utility.medium_low);
	}

	public async currentGASMeterDetailsTxtDisplay() {

		if (this.currentGASMeterDetailsTxt.isDisplayed()) {
			await this.currentGASMeterDetailsTxt.getText().then(function (currentGASMeterDetails) {
				console.log("find currentGASMeterDetails Text  " + currentGASMeterDetails);
			});
		} 

}

public async verifyDF17CurrentMeterDetails() {
	await expect(this.currentMeterDetailsText.isPresent());
	await this.currentMeterDetailsText.getText().then(function (currentMeterDetails) {
		console.log("find currentMeterDetails Text  " + currentMeterDetails);
	});
	await this.updateValuesBtn.click();
	await utility.wait(utility.medium_low);
	await expect(this.existingElecMeterNo.isPresent());
	await this.existingElecMeterNo.click();
	//await expect(this.existingElecMeterYes.isPresent());
	//await this.existingElecMeterYes.click();
	//await utility.wait(utility.very_low);
	//not req, if new WO required
	if (await this.currentMeterNxtbtn.isDisplayed()) {
		await this.currentMeterNxtbtn.click();
	}
	await utility.wait(6000);
	await this.currentMeterDetailsHeader.click();
	await expect(this.existingElecMeterYes.isPresent());
	await utility.wait(6000);
	await this.existingElecMeterYes.click();
	await utility.wait(6000);
	if (await this.unableToReadMeterYes.isDisplayed()) {
		await this.unableToReadMeterYes.click();
		await utility.wait(6000);
	}
	
	await this.DF17currentMeterNxtbtn.click();
	await utility.wait(utility.low);
}

public async fillCurrentMeterDetails() {
	if (await this.existingElecMeterYes.isDisplayed()) {
		await this.existingElecMeterYes.click();
		await utility.wait(utility.very_low);
	}
}

	public async fillRiskAssessGas() {
		await this.meterPressureLow.click();
		await this.voltStickYEs.click();
		await this.theftOfGasYes.click();
		await this.ecvChksPAss.click();
		await this.workAreaSafetyYes.click();
		await utility.wait(utility.very_low);
		await this.captureEvidenceGas.click();
		await expect(await this.additionalGASNote.isPresent());
		await this.additionalGASNote.sendKeys('Fault Checked');
		await this.safeToContinueYEs.click();
		await utility.wait(utility.low);
	}

	public async suitableForSmartInstallationTxt() {

		if (this.suitableforSmartInstallationTxt.isDisplayed()) {
			await this.suitableforSmartInstallationTxt.getText().then(function (suitableforSmartInstallation) {
				console.log("find suitableforSmartInstallation Text  " + suitableforSmartInstallation);
			});
		}

	}

	public async suitableForSmartInstallationGASTxt() {

		if (this.suitableforSmartInstallationGASTxt.isDisplayed()) {
			await this.suitableforSmartInstallationGASTxt.getText().then(function (suitableforSmartInstallation) {
				console.log("find suitableforSmartInstallation GAS Text  " + suitableforSmartInstallation);
			});
		}

	}

	public async fillSuitablityForGASSmartInstallation() {
		await utility.wait(utility.very_low);
		await this.suitableforInstaGASYes.click();
		if (await this.repositionReqGASDD.isDisplayed()) {
			var select = this.repositionReqGASDD;
			select.$('[value="No Reposition Required"]').click();
		}
		await utility.wait(utility.very_low);
		await this.additionalGASSmartNote.sendKeys('Add Remarks');
		await utility.wait(utility.very_low);
		await this.suitableGASnxtBtn.click();
	}

	public async fillSuitablityForSmartInstallation() {
		await this.suitableforInstaYes.click();
		if (await this.repositionReqDD.isDisplayed()) {
			var select = this.repositionReqDD;
			select.$('[value="No Reposition Required"]').click();
		}
		await utility.wait(utility.very_low);
		await this.additionalSmartNote.sendKeys('Add Remarks');
		await utility.wait(utility.very_low);
		await this.suitablenxtBtn.click();
	}

	public async captureInitialPhotoTxt() {
		if (this.captureInitialPhotogastxt.isDisplayed()) {
			await this.captureInitialPhotogastxt.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
		}
		await this.captureInitialPhotogasbtn.click();
	}
	public async captureInitialPhotoGASTxt() {
		if (this.captureInitialPhotogas.isDisplayed()) {
			await this.captureInitialPhotogas.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
		}
	}
	

	public async captureInitialPhotoTxtDF17() {
		if (this.captureInitialPhotogastxtDF17.isDisplayed()) {
			await this.captureInitialPhotogastxtDF17.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
		}
		//await this.captureInitialPhotogasbtn.click();
        
	}

	public async preInstallationGasTTxt() {
		if (this.preInstalationGASTxt.isDisplayed()) {
			await this.preInstalationGASTxt.getText().then(function (preInstalationGAS) {
				console.log("find preInstalationGAS Text  " + preInstalationGAS);
			});
		}
	}

	public async preInstallationGasT() {
		await this.gasTightnessYes.click();
		await this.captureGTTPhotobtn.click();
		await this.dropInPressreYes.click();
		if (await this.DIPGasDD.isDisplayed()) {
			var select = this.DIPGasDD;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.low);
		if (await this.meterTypeDD.isDisplayed()) {
			var select = this.meterTypeDD;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.low);
		await this.CustSmellGasYes.click();


		await expect(await this.additionalTxtPreInstallGas.isPresent());
		await this.additionalTxtPreInstallGas.sendKeys('Reference Text');
		await this.failureOutcomeGT.click();
		await this.reportToGTYes.click();
		await expect(await this.inputGTRef.isPresent());
		await this.inputGTRef.sendKeys('1234');
		await this.reportedToHSYEs.click();
		if (this.inputAirLineRef.isDisplayed()) {
			await utility.wait(utility.low);
			await this.inputAirLineRef.sendKeys('5678910');
		}
		await this.waitForGTYes.click();
		await this.GTResolveIssue.click();
		await utility.wait(utility.low);
	}

	public async currentMeterDetailsTxtDisplay() {

		if (this.currentMeterDetailsTxt.isDisplayed()) {
			await this.currentMeterDetailsTxt.getText().then(function (currentMeterDetails) {
				console.log("find currentMeterDetails Text  " + currentMeterDetails);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Verify new meter regulator section displayed
	 ***/

	public async meterRegulatorDetailsTxtDisplay() {

		if (this.newRegulatorTxt.isDisplayed()) {
			await this.newRegulatorTxt.getText().then(function (regulator) {
				console.log("find regulator Text  " + regulator);
			});
		}

	}

	public async ExGasRegulatorDetailsTxtDisplay() {

		if (this.regulatorText.isDisplayed()) {
			await this.regulatorText.getText().then(function (regulator) {
				console.log("find regulator Text  " + regulator);
			});
		}

	}


	/***
	 * @Author Aparna Das
	 * @description Fill new meter regulator details GAS
	 ***/
	public async fillMeterRegulatorDetailsGAS() {
		await utility.wait(utility.very_low);
		await this.regulatorReplacedYes.click();
		await utility.wait(utility.very_low);
		if (await this.selectAssettoNewRegGas.isDisplayed()) {
			var select = await this.selectAssettoNewRegGas;
			select.$('[value="MA6NC181323805"]').click();
		}
		await utility.wait(utility.low);
	//	await expect(await this.regulatorSerialNoinput.isPresent());
		await this.inputelecSerialNum.clear();
		await this.inputelecSerialNum.sendKeys('MA6NC181323805');
		await this.regulatorTxt.click();
		await utility.wait(utility.low);
		await this.commshubPopup.click();
		await utility.wait(utility.low);
		await this.newRegulatorNxtBtn.click();
		await utility.wait(utility.very_low);
		//}
	}

	public async fillMeterRegulatorGAS() {
		await this.regulatorReplacedYes.click();
		await utility.wait(utility.very_low);
		if (await this.selectassettoNewwRegGasDD.isDisplayed()) {
			var select = await this.selectassettoNewwRegGasDD;
			select.$('[value="MA6NC181323805"]').click();
		}
		await utility.wait(utility.low);
	//	await expect(await this.regulatorSerialNoinput.isPresent());
		await this.inputelecSerialNum.clear();
		await this.inputelecSerialNum.sendKeys('MA6NC181323805');
		await utility.wait(utility.very_low);
		await this.regulatorTxt.click();
		await utility.wait(utility.low);
		await this.commshubPopup.click();
		await utility.wait(utility.low);
		await this.newRegulatorNxtBtn.click();
		await utility.wait(utility.very_low);
		//}
	}

	

	/***
	 * @Author Aparna Das
	 * @description Verify new meter details section displayed
	 ***/

	public async newMeterDetailsTxtDisplay() {

		if (this.NewMeterDetailsText.isDisplayed()) {
			await this.NewMeterDetailsText.getText().then(function (NewMeter) {
				console.log("find NewMeter Text  " + NewMeter);
			});
		}

	}


	/***
	 * @Author Aparna Das
	 * @description Fill new meter details GAS
	 ***/

	public async fillNewMeterDetailsGAS(index: number) {
		if (await this.newMeterDD.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.newMeterDD.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			//await this.commshubPopup.click();

			await expect(await this.inputMeterSerialNum.isPresent());
			var options = this.selectNewMeterGasOptn.getAttribute('value');
			await this.inputMeterSerialNum.sendKeys(options);
			await this.randomEUDevice.click();
			let ale: Alert = browser.switchTo().alert();
			// clicks 'OK' button
			ale.accept();
			await utility.wait(utility.low);
			await this.commshubPopup.click();
			await utility.wait(utility.low);
			if (await this.manufactureLetterDD.isDisplayed()) {
				var select1 = this.manufactureLetterDD;
				select1.$('[value="2"]').click();
			}
			await utility.wait(utility.low);
			if (await this.MeterTypeDD.isDisplayed()) {
				var select2 = this.MeterTypeDD;
				select2.$('[value="0"]').click();
			}
			await utility.wait(utility.low);
			if (await this.meterLocDD.isDisplayed()) {
				var select3 = this.meterLocDD;
				select3.$('[value="02"]').click();
			}
			await utility.wait(utility.low);
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Gas initial meter reading section displayed
	 ***/

	public async gasInitialMeterTxtDisplay() {

		if (this.gasInitialMeterTxt.isDisplayed()) {
			await this.gasInitialMeterTxt.getText().then(function (GasInstall) {
				console.log("find GasInstall Text  " + GasInstall);
			});
		}
	}

	public async fillGasInitialMeterREading() {
		await expect(await this.capturemeterReadingInput.isPresent());
		// await this.capturemeterReadingInput.clear();
		await this.capturemeterReadingInput.sendKeys('12345');
		await this.capturreMeterReadingTxt.click();
		await utility.wait(utility.low);
		//await this.OKpopupBtn.click();
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Gas install Kit section displayed
	 ***/

	public async gasInstallKitTxtDisplay() {

		if (this.installKitTxt.isDisplayed()) {
			await this.installKitTxt.getText().then(function (GasInstallKit) {
				console.log("find GasInstallKit Text  " + GasInstallKit);
			});
		}
	}
	public async fillGasInstallKitDetails_NMEX15() {

        await this.installKitUsedYes1.click();
        await utility.wait(utility.low);
        
        if (await this.nonSerialisedAsssetsDD1.isDisplayed()) {
            var select3 = this.nonSerialisedAsssetsDD1;
            select3.$('[value="1"]').click();
        }
        
        await utility.wait(utility.low);
        await this.assetInput1.sendKeys('1');
        await utility.wait(utility.medium_low);
        //browser.executeScript('arguments[0].scrollIntoView()', this.commsHubConnectedYes.getWebElement());
        await this.commsHubConnectedYes.click();
		await utility.wait(utility.medium_low);
        await this.installKitNxtBtn1.click();
    }
	/***
	 * @Author Aparna Das
	 * @description Fill Gas install Kit section 
	 ***/

	public async fillGasInstallKitDetails() {

		await this.installKitUsedYes.click();
		if (await this.nonSerialisedAsssetsDD.isDisplayed()) {
			var select3 = this.nonSerialisedAsssetsDD;
			select3.$('[value="1"]').click();
		}
		await utility.wait(utility.low);
		await this.assetInput.sendKeys('1');
		await this.installKitNxtBtn.click();
	}


	/***
	 * @Author Aparna Das
	 * @description Verify Gas Post Installation Gas Tightness Test section displayed
	 ***/

	public async GasPostInstallationTxt() {

		if (this.postInstallationGasTxt.isDisplayed()) {
			await this.postInstallationGasTxt.getText().then(function (postInstallationGas) {
				console.log("find postInstallationGas Text  " + postInstallationGas);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Gas Post Installation Gas Tightness Test section EX21
	 ***/
	public async fillPostInstallationEx21Details() {
		await utility.wait(utility.very_low);
		await this.contactGTYEs.click();
		await this.nationalGTRefInput.sendKeys('12345');
		await this.reportedToHSYEsGas.click();
		await this.inputAirLineRefGAS.sendKeys('12345');
		await this.gtAttendanceOnSiteYes.click();
		await this.gtResolveIssueGas.click();
		await this.AdditionalWorktoPassYesGAS.click();
		await this.additionalWork1.click();
		await this.additionalWork2.click();
		await this.additionalWork3.click();
		await this.additionalWork4.click();
		await this.additionalWork5.click();
		await this.additionalWork6.click();
		//await this.additionalSmartNote.click();
		await this.replacedGasMeterYes.click();
		await this.replacedGasRegulatorYes.click();
		await this.GasTightnessTestPerformedYes.click();
		await this.capturePostInstallationGas.click();
		await this.DIPGASYes.click();
		if (await this.dipSelectDD.isDisplayed()) {
			var select3 = this.dipSelectDD;
			select3.$('[value="1"]').click();
		}
		if (await this.meterTypeGASDD.isDisplayed()) {
			var select3 = this.meterTypeGASDD;
			select3.$('[value="1"]').click();
		}
		await utility.wait(utility.low);
		await this.tightnessPassedYes.click();
		await this.witnessName.sendKeys('Dennis');
		await this.standingPressure.sendKeys('1');
		await this.dipCaptureBtn.click();
		await this.workingpressure.sendKeys('1');
		await this.wpCapture.click();
		await this.finalMeterCapture.click();
		await utility.wait(utility.low);
		await this.polNxtBtnGasMeter.click();
	}
	/***
	 * @Author Aparna Das
	 * @description Fill Gas Post Installation Gas Tightness Test section Ex20
	 ***/
	public async fillPostInstallationGasDetails() {
		await utility.wait(utility.very_low);
		await this.contactGTYEs.click();
		await this.nationalGTRefInput.sendKeys('12345');
		await this.reportedToHSYEsGas.click();
		await this.inputAirLineRefGAS.sendKeys('12345');
		await this.gtAttendanceOnSiteYes.click();
		await this.gtResolveIssueGas.click();
		await this.AdditionalWorktoPassYesGAS.click();
		await this.additionalWork1.click();
		await this.additionalWork2.click();
		await this.additionalWork3.click();
		await this.additionalWork4.click();
		await this.additionalWork5.click();
		await this.additionalWork6.click();
		//await this.additionalSmartNote.click();
		await this.replacedGasMeterYes.click();
		await this.replacedGasRegulatorYes.click();
		await this.GasTightnessTestPerformedYes.click();
		await this.capturePostInstallationGas.click();
		await this.DIPGASYes.click();
		if (await this.dipSelectDD.isDisplayed()) {
			var select3 = this.dipSelectDD;
			select3.$('[value="1"]').click();
		}
		if (await this.meterTypeGASDD.isDisplayed()) {
			var select3 = this.meterTypeGASDD;
			select3.$('[value="1"]').click();
		}
		await utility.wait(utility.low);
		await this.tightnessPassedYes.click();
		await this.witnessName.sendKeys('Dennis');
		await this.standingPressure.sendKeys('1');
		await this.dipCaptureBtn.click();
		await this.workingpressure.sendKeys('1');
		await this.wpCapture.click();
		await this.finalMeterCapture.click();
		await this.commshubconnectedtoWANYes.click();
		await this.polNxtBtnGasMeter.click();
	}
	/***
	 * @Author Aparna Das
	 * @description GICOM Message display section
	 ***/
	public async gicomSendMessageTxtDisplayed() {
		if (this.gicomSendMessage.isDisplayed()) {
			await this.gicomSendMessage.getText().then(function (gicomSendMsg) {
				console.log("find gicomSendMsg Text  " + gicomSendMsg);
			});
		}

	}

	/***
	 * @Author Aparna Das
	 * @description Fill Gas GICOM message section
	 ***/

	public async filllGiComSection() {

		await this.gicomSendMessage.click();
		await utility.wait(utility.high);
		if (this.successfulBtn.isDisplayed()) {
			await this.successfulBtn.click();
			await utility.wait(utility.low);
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Gas Safety check section displayed
	 ***/
	public async gasSafetyDisplay() {
		if (this.gasAppliencesSafetyTxt.isDisplayed()) {
			await this.gasAppliencesSafetyTxt.getText().then(function (gasAppliencesSafety) {
				console.log("find gasAppliencesSafety Text  " + gasAppliencesSafety);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Gas Safety check section
	 ***/
	public async fillGasSafety() {
		if (this.earthBondingYEs.isDisplayed()) {
			await this.earthBondingYEs.click();
		}
		if (this.landLordPropertyNo.isDisplayed()) {
			await this.landLordPropertyNo.click();
		}
		// if (this.gasAddressinput.isDisplayed()) {
		//     await this.landLordPropertyYes.sendKeys('UB22GT');
		// }
		if (this.allAppliTestedBtn.isDisplayed()) {
			await this.allAppliTestedBtn.click();
		}
		await utility.wait(utility.very_low);
		if (this.submitGas.isDisplayed()) {
			await this.submitGas.click();
		}

	}

	/***
	 * @Author Aparna Das
	 * @description Fill Gas Safety check section
	 ***/
	public async currentCommsHubDetailsDisplay() {
		if (this.currentCommsHubText.isDisplayed()) {
			await this.currentCommsHubText.getText().then(function (currentCommsHub) {
				console.log("find currentCommsHub Text  " + currentCommsHub);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Comms Hub Section
	 ***/
	public async fillCurrentCommsHubDetailsGAS() {

		if (await this.smets2CommshubOnsiteNo.isDisplayed()) {
			await this.smets2CommshubOnsiteNo.click();
			await utility.wait(utility.very_low);
		}
		if (await this.commshubNxtbtn.isDisplayed()) {
			await this.commshubNxtbtn.click();
			await utility.wait(utility.very_low);
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Comms Hub Section
	 ***/
	public async fillinstallCommsHubDetailsGAS(index: number) {

		if (await this.installCommsHubYes.isDisplayed()) {
			await this.installCommsHubYes.click();
			await utility.wait(utility.very_low);
		}

		if (await this.commHubDD.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commHubDD.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.commHubDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();
			await expect(await this.inputinstallCommshub.isPresent());
			var options = this.selectinstallAssetOption.getAttribute('value');
			await this.inputinstallCommshub.sendKeys(options);
			await this.randomClick.click();
			await this.infoOKButton.click();
			await utility.wait(utility.low);

			if (await this.commHubLocDD.isDisplayed()) {
				var select = this.commHubLocDD;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.arealInstalledYes.isDisplayed()) {
				await this.arealInstalledYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commHubConnectionDD.isDisplayed()) {
				var select = this.commHubConnectionDD;
				select.$('[value="2"]').click();
			}
			await utility.wait(utility.low);
			await expect(await this.inputcradleSerialNo.isPresent());
			var options = this.selectinstallAssetOption.getAttribute('value');
			await this.inputcradleSerialNo.sendKeys(options);
			await utility.wait(utility.low);

			if (await this.captureCommsHub.isDisplayed()) {
				await this.captureCommsHub.click();
				await utility.wait(utility.very_low);
			}


			if (await this.commHubLocNxtBtn.isDisplayed()) {
				await this.commHubLocNxtBtn.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Install Commshub Details section
	 ***/
	public async installCommsHubDetailsDisplay() {
		if (this.installCommsHubText.isDisplayed()) {
			await this.installCommsHubText.getText().then(function (currentCommsHub) {
				console.log("find currentCommsHub Text  " + currentCommsHub);
			});
		}
	}

    
/***************CGP added for INST16 */

public async fillMeterRegulatorDetailsGASINST16() {
   
    await utility.wait(utility.very_low);
    if (await this.regulatorReplacedYes.isDisplayed()) {
        await this.regulatorReplacedYes.click();
    }
   
    await utility.wait(utility.very_low);
        if (await this.selectValidAssetDD.isDisplayed()) {
            var select = this.selectValidAssetDD;
            select.$('[value="MA6NC181323805"]').click();
        }
        await utility.wait(utility.very_low);
        if (await this.regulatorSerialNoinput.isDisplayed()) {
            await this.regulatorSerialNoinput.clear();
            await this.regulatorSerialNoinput.sendKeys("MA6NC181323805");
        }

        await utility.wait(utility.very_low);
        if (await this.regulatorTxt.isDisplayed()) {
            await this.regulatorTxt.click();
        }
 
        await utility.wait(utility.very_low);
        if (await this.commshubPopup.isDisplayed()) {
            await this.commshubPopup.click();
        }
        await utility.wait(utility.very_low);
        if (await this.newRegulatorNxtBtn.isDisplayed()) {
            await this.newRegulatorNxtBtn.click();
        }
    
}


public async fillNewMeterDetailsGASInst16(index:number) {
    if (await this.newMeterDD.isDisplayed()) {
        await utility.wait(utility.low);
        // click the dropdown
        this.newMeterDD.click()
        browser.sleep(1000)
        //index = index ;
        console.log("Selecting element based index : "+index)
        // select the option
        await this.newMeterDD.element(by.css("option:nth-child("+index+")")).click()
        await utility.wait(3000);
        //await this.commshubPopup.click();        
        await expect(await this.inputMeterSerialNum.isPresent());
        var options=this.selectNewMeterGasOptn.getAttribute('value');
        await this.inputMeterSerialNum.sendKeys(options);
    await this.randomEUDevice.click();
    let ale: Alert = browser.switchTo().alert();
    // clicks 'OK' button
    ale.accept();
    await utility.wait(utility.low);
    await this.commshubPopup.click();
    await utility.wait(utility.low);

    if (await this.manufactureLetterDD.isDisplayed()) {
        var select1 = this.manufactureLetterDD;
            select1.$('[value="34"]').click();
        }
        await utility.wait(utility.low);

    if (await this.MeterTypeDD.isDisplayed()) {
        var select2 = this.MeterTypeDD;
        select2.$('[value="0"]').click();
    }
    await utility.wait(utility.low);
    if (await this.meterLocDD.isDisplayed()) {
        var select3 = this.meterLocDD;
        select3.$('[value="02"]').click();
    }
    await utility.wait(utility.low);
}
}
    

public async fillPostInstallationGasDetailsInst16() {
    //cgp adding
    await utility.wait(3000);
    await this.contactGTYES.click();    
    await this.nationalGTRefInput.sendKeys('1');
    await utility.wait(utility.low);
    await this.reportedIncidentYES.click();
    await utility.wait(utility.low);
    await this.airLineRefNo.sendKeys('2');
    await utility.wait(utility.low);
    await this.waitForGTYES.click();
    await utility.wait(utility.low);
    await this.gtResolveIssueYES.click();
    await utility.wait(utility.low);
    await this.GAStightnessTestYes.click();
    await utility.wait(utility.low);
    await this.replacedGasMeterYes.click();   
    await utility.wait(utility.low);
    //await this.tightnessPassedYes.click();
    //await utility.wait(utility.low);
    await this.additionalWork1.click();
    await this.additionalWork2.click();
    await this.additionalWork3.click();
    await this.additionalWork4.click();
    await this.additionalWork5.click();
    await this.additionalWork6.click();
    await utility.wait(utility.low);
    await this.replacedGasMeterYes.click();
    await utility.wait(utility.low);
    
    await this.replacedGasRegulatorYes.click();
    await utility.wait(utility.low);
    await this.GasTightnessYes.click();
    await utility.wait(utility.low);
    await this.capturePostInstallationGas.click();
    await this.DIPGASYes.click();
    await utility.wait(utility.low);



    if (await this.dipSelectDD.isDisplayed()) {
        var select3 = this.dipSelectDD;
        select3.$('[value="1"]').click();
    }
    await utility.wait(utility.medium_low);

    if (await this.meterTypeGASDD.isDisplayed()) {
        var select3 = this.meterTypeGASDD;
        select3.$('[value="1"]').click();
    }
    await utility.wait(utility.medium_low);
    await this.tightnessPassedYes.click();
    await utility.wait(utility.low);
    await this.witnessName.sendKeys('CGP');
    await utility.wait(utility.low);
    await this.standingPressure.sendKeys('1.1');
    await utility.wait(utility.low);
    await this.dipCaptureBtn.click();
    await utility.wait(utility.low);
    await this.workingpressure.sendKeys('2.0');
    await utility.wait(utility.low);
    await this.wpCapture.click();
    await utility.wait(utility.low);
    await this.finalMeterCapture.click();
    await utility.wait(utility.low);
    await this.polNxtBtn.click();
}

public async fillGasSafety16(){
    await utility.wait(utility.very_low);
    if (this.landLordPropertyNo.isDisplayed()) {
        await this.landLordPropertyNo.click();
    }
    await utility.wait(utility.very_low);
    if (this.allAppliTestedBtn.isDisplayed()) {
        await this.allAppliTestedBtn.click();
    }
    await utility.wait(utility.very_low);
    if (this.submitGas.isDisplayed()) {
        await this.submitGas.click();
    }

}

}