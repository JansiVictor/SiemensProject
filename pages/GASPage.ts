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
	public waitForGTYES1: ElementFinder;
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
	public suitableforSmartInstallationGASTxt: ElementFinder;
	public cptureinitialPhotogas: ElementFinder;
	public captureInitialPhotogas: ElementFinder;
	public regulatorText: ElementFinder;
	public selectassettoNewwRegGasDD: ElementFinder;
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
	public selectAssettoNewRegGas: ElementFinder;

	//CGP added
	public contactGTYES: ElementFinder;
	public reportedIncidentYES: ElementFinder;
	public airLineRefNo: ElementFinder;
	public gtResolveIssueYES: ElementFinder;
	public polNxtBtnGasMeter: ElementFinder;
	public polGasNxtBtn: ElementFinder
	private currentGasPhotoFullMeterButton: ElementFinder;
	//CGP added for Master Branch
	public selectNewMeterGasOptnIn16: ElementFinder;
	public selectAssettoNewRegGasLst: ElementFinder;
	public selectassettoNewwRegGasDDLst: ElementFinder;
	public selectValidAssetDDLst: ElementFinder;

	constructor() {
		//CGP added for Master Branch
		this.selectNewMeterGasOptnIn16 = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[2]'));
		this.currentGasPhotoFullMeterButton = element(by.xpath("//button[@id='gasbtn1']"));
		this.riskAssessGas = element(by.xpath('//*[@id="Title_RiskAss_gas"]'));
		this.commsHubConnectedYes = element(by.xpath('//input[@id="Cradionm1"]/following-sibling::span[@class="outer"]'));

		this.currentMeterDetailsText = element(by.xpath('//div/h4[text()="Current Meter Details - Gas"]'));
		this.updateValuesBtn = element(by.xpath('//*[@id="gasCurrentMeter_updateValues"]'));
		this.unableToReadMeterYes = element(by.xpath('(//input[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"])[2]'));
		this.unableToReadMeterYes_SFENMEX15 = element(by.xpath('(//*[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"])[1]'));
		this.existingElecMeterYes = element(by.xpath('//*[@id="gasCurrentMeter_detailsCorrect_y"]'));
		this.existingElecMeterNo = element(by.xpath('//*[@id="gasCurrentMeter_detailsCorrect_n"]'));
		this.currentMeterNxtbtn = element(by.xpath('//*[@id="btnNextComm"]'));
		this.DF17currentMeterNxtbtn = element(by.xpath('(//*[@id="btn_Next_read"])[2]'));
		this.SFENMEX15currentNxtbtn = element(by.xpath('(//*[@id="btn_Next_read"])[1]'));
		this.currentMeterDetailsHeader = element(by.xpath('//div[@id="Title_gasCurrentMeter"]'));

		this.clickSubmit = element(by.xpath('(//button[@id="btn1"])[3]'));
		this.capturephotoMeterInstall = element(by.xpath('//*[@id="gasbtn1"]'));
		this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
		this.voltStickYEs = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
		this.theftOfGasYes = element(by.xpath('//input[@id="raga1"]/following-sibling::span[@class="outer"]'));
		this.ecvChksPAss = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
		this.workAreaSafetyYes = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
		this.captureEvidence = element(by.xpath('(//button[@id="btn1"])[1]'));

		this.captureEvidenceGas = element(by.xpath('(//button[starts-with(text(),"CAPTURE PHOTOGRAPHIC")])[1]'));
		this.additionalGASNote = element(by.xpath('//*[@id="text1"]'));
		this.currentGASMeterDetailsTxt = element(by.xpath('//*[@id="Title_gasCurrentMeter"]'));
		this.safeToContinueYEs = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
		this.suitableforSmartInstallationTxt = element(by.xpath('//*[@id="Title_Smart_Elec"]'));
		this.suitableforSmartInstallationGASTxt = element(by.xpath('//*[@id="Title_gasSmartCheck"]'));

		this.additionalGASNote = element(by.xpath('//*[@id="text1"]'));
		this.safeToContinueYEs = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
		this.suitableforSmartInstallationTxt = element(by.xpath('//*[@id="Title_Smart_Elec"]'));

		this.suitableforInstaYes = element(by.xpath('//*[@id="rb_SuitFS_y"]'));
		this.repositionReqDD = element(by.xpath('//*[@id="repositionSelect"]'));
		this.additionalSmartNote = element(by.xpath('//*[@id="smartnotes"]'));
		this.suitablenxtBtn = element(by.xpath('//*[@id="btn_Next_Section"]'));
		this.suitableforInstaGASYes = element(by.xpath('//input[@id="gasradio1a"]/following-sibling::span[@class="outer"]'));
		this.repositionReqGASDD = element(by.xpath('//*[@id="gasSmartCheck_gasrepositionSelect"]'));
		this.additionalGASSmartNote = element(by.xpath('//*[@id="gasSmartCheck_gassmartnotes"]'));
		this.suitableGASnxtBtn = element(by.xpath('//*[@id="gasSmartCheck_nextButton"]'));
		this.captureInitialPhotogastxt = element(by.xpath('//*[@id="Title_Init_Photo"]'));
		this.captureInitialPhotogas = element(by.xpath('//*[@id="Title_gasInitialPhoto"]'));
		this.captureInitialPhotogastxtDF17 = element(by.xpath('//*[@id="Title_gasInitialPhoto"]'));
		this.captureInitialPhotogasbtn = element(by.xpath('//*[@id="btn_Init_Photo"]'));
		this.cptureinitialPhotogas = element(by.xpath('//*[@id="gasbtn1"]'));
		this.captureInitialPhotogastxt = element(by.xpath('//*[@id="Title_Init_Photo"]'));
		this.captureInitialPhotogasbtn = element(by.xpath('//*[@id="btn_Init_Photo"]'));
		this.preInstalationGASTxt = element(by.xpath('//div/h4[text()="Pre Installation Gas Tightness Test"]'));
		this.gasTightnessYes = element(by.xpath('//*[@id="rb_PreGasTigTCarOut_y"]'));
		this.captureGTTPhotobtn = element(by.xpath('(//*[@id="btn1"])[2]'));
		this.dropInPressreYes = element(by.xpath('//*[@id="rb_WasDropPress_y"]'));
		this.DIPGasDD = element(by.xpath('//*[@id="cbx_DipPress_sel"]'));
		this.meterTypeDD = element(by.xpath('//*[@id="cbx_MetreType_sel"]'));
		this.CustSmellGasYes = element(by.xpath('//*[@id="rb_SmellGas_y"]'));
		this.gasTightnessRemrk = element(by.xpath('//*[@id="txt_AddNotGasTigT"]'));
		this.failureOutcomeGT = element(by.xpath('//*[@id="rb_TestFailOutCmGTIss_y"]'));
		this.reportToGTYes = element(by.xpath('//*[@id="rb_RepGT_y"]'));
		this.inputGTRef = element(by.xpath('//*[@id="gt_issue"]'));
		this.reportedToHSYEsGas = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.inputAirLineRefGAS = element(by.xpath('//div/input[@id="input2"]'));
		this.gtResolveIssueGas = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.reportedToHSYEs = element(by.xpath('//*[@id="rb_RepAirLine_y"]'));
		this.inputAirLineRef = element(by.xpath('//*[@id="hsjobref"]'));
		this.waitForGTYes = element(by.xpath('//*[@id="rb_GTAttSite_y"]/span'));
		this.GTResolveIssue = element(by.xpath('//*[@id="rb_GTResIss_y"]/span'));
		this.currentMeterDetailsTxt = element(by.xpath('//*[@id="Title_CurrMe_Det"]'));
		this.newRegulatorTxt = element(by.xpath('//*[@id="TITLE_RegNew"]'));
		this.regulatorReplacedYes = element(by.xpath('//input[@id="regulator_replacedtrue"]/following-sibling::span[@class="outer"]'));
		this.OKpopupBtn = element(by.xpath('//div/button[text()="OK"]'));
		this.regulatorTxt = element(by.xpath('//div[@id="lbl_SerNote"]'));
		this.newRegulatorNxtBtn = element(by.xpath('//*[@id="newRegulator_nextButton"]'));
		this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
		this.selectValidAssetDD = element(by.model('scp.selectedAsset'));
		this.regulatorSerialNoinput = element(by.xpath('//*[@id="btn_RegSNum1"]'));
		this.OKpopupBtn = element(by.xpath('//div/button[text()="OK"]'));
		this.newRegulatorNxtBtn = element(by.xpath('//*[@id="newRegulator_nextButton"]'));
		this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
		this.manufactureLetterDD = element(by.xpath('//*[@id="select_man_letter"]'));
		this.MeterTypeDD = element(by.xpath('//*[@id="select_meter_letter"]'));
		this.meterLocDD = element(by.xpath('//*[@id="cbx_MetLoc_sel"]'));
		this.gasInitialMeterTxt = element(by.xpath('//div/h4[text()="Gas Initial Meter Reading"]'));
		this.NewMeterDetailsText = element(by.xpath('//*[@id="Title_newMeter"]'));
		this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
		this.capturemeterReadingInput = element(by.xpath('//*[@id="reg0"]'));
		this.randomEUDevice = element(by.xpath('//div[text()="EUI Device ID:"]'));
		this.inputelecSerialNum = element(by.xpath('//*[@id="btn_RegSNum1"]'));
		this.capturreMeterReadingTxt = element(by.xpath('//*[@id="regLabel0"]'));
		this.installKitTxt = element(by.xpath('//div/h4[text()="Install Kit"]'));
		this.installKitUsedYes = element(by.xpath('//input[@id="inp1"]/following-sibling::span[@class="outer"]'));
		this.installKitUsedYes1 = element(by.xpath('//*[@id="gasInstallPhoto_installKit_y"]'));
		this.nonSerialisedAsssetsDD = element(by.xpath('//*[@id="assetselect0"]'));
		this.nonSerialisedAsssetsDD1 = element(by.xpath('//*[@id="gasassetselect0"]'));
		this.assetInput = element(by.xpath('//*[@id="assetinput0"]'));
		this.installKitNxtBtn = element(by.xpath('//*[@id="btnNextrmmip"]'));
		this.postInstallationGasTxt = element(by.xpath('//div/h4[text()="Post Installation Gas Tightness Test"]'));
		this.additionalTxtPreInstallGas = element(by.xpath('//*[@id="txt_AddNotGasTigT"]'));
		this.selectAssettoNewRegGas = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])'));
		this.selectassettoNewwRegGasDD = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[2]'));
		this.selectassettoInstallGas = element(by.xpath('(//select[@ng-model="scp.selectedAsset"]/option)[2]'));
		this.inputinstallCommshub = element(by.xpath('//*[@id="chubInstall_CHbarcode"]'));
		this.selectNewMeterGasOptn = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[3]'));
		this.inputMeterSerialNum = element(by.xpath('(//div/input[@id="txt_Serial_Num"])[1]'));
		this.contactGTYEs = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.GasTightnessTestPerformedYes = element(by.xpath('//input[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.nationalGTRefInput = element(by.xpath('//*[@id="input1"]'));
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
		this.capturePostInstallationGas = element(by.xpath('//*[@id="btn_CapPoTi_test"]/button'));
		this.DIPGASYes = element(by.xpath('//input[@id="gtp19"]/following-sibling::span[@class="outer"]'));
		this.dipSelectDD = element(by.xpath('//*[@id="select1"]'));
		this.meterTypeGASDD = element(by.xpath('//*[@id="select2"]'));
		this.tightnessPassedYes = element(by.xpath('//input[@id="gtp21"]/following-sibling::span[@class="outer"]'));
		this.AdditionalWorktoPassYesGAS = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.witnessName = element(by.xpath('//form/input[@id="input3"]'));
		this.standingPressure = element(by.xpath('//*[@id="gaspoststandingpressure"]'));
		this.dipCaptureBtn = element(by.xpath('//*[@id="btn_CapStPr"]/button'));
		this.workingpressure = element(by.xpath('//*[@id="gaspostworkingpressure"]'));
		this.wpCapture = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[2]'));
		this.finalMeterCapture = element(by.xpath('//*[@id="btn2"]'));
		/***************Reverting to CGP changes */
		//Pol Element withoutIndex added
		this.polGasNxtBtn = element(by.xpath('(//div/button[@id="btnNextPol"])'));
		this.polNxtBtn = element(by.xpath('(//*[@id="btnNextPol"])[2]'));
		/************************* End of change**************8 */
		this.polNxtBtnGasMeter = element(by.xpath('(//div/button[@id="btnNextPol"])[2]'));
		this.gicomSendMessage = element(by.xpath('//*[@id="gicom_sendMessageButton"]'));
		this.successfulBtn = element(by.xpath('//*[@id="gicom_nextButton"]'));
		this.gasAppliencesSafetyTxt = element(by.xpath('//div/h4[text()="Gas Appliance Safety Checks"]'));
		this.earthBondingYEs = element(by.xpath('//input[@id="radioraa1a"]/following-sibling::span[@class="outer"]'));
		this.landLordPropertyYes = element(by.xpath('//input[@name="5341"]/following-sibling::span[@class="outer"]'));
		this.landLordPropertyNo = element(by.xpath('//*[@id="radioraa4"]'));
		this.gasAddressinput = element(by.xpath('(//input[@id="input1"])[2]'));
		this.allAppliTestedBtn = element(by.xpath('//*[@id="btn_AllApp_tested"]'));
		this.submitGas = element(by.xpath('//*[@id="btn_Subm_gas"]'));
		this.gtAttendanceOnSiteYes = element(by.xpath('//*[@id="rb_GTAttSite_y"]/input/following-sibling::span[@class="outer"]'));
		this.currentCommsHubText = element(by.xpath('//*[@id="Title_currentCommsHub"]'));
		this.smets2CommshubOnsiteYes = element(by.xpath('//input[@id="gascchubOnSitetrue"]/following-sibling::span[@class="outer"]'));
		this.smets2CommshubOnsiteNo = element(by.xpath('//input[@id="gascchubOnSitefalse"]/following-sibling::span[@class="outer"]'));
		this.commHubDD = element(by.xpath('//*[@id="chubInstall_selectAsset"]'));
		this.chfIDInput = element(by.xpath('//*[@id="currentCommsHub_chfId"]'));
		this.commHubLocDD = element(by.xpath('//*[@id="chubInstall_chubLocationSelect"]'));
		this.arealInstalledYes = element(by.xpath('//*[@id="chubInstall_aerialInstalled_y"]'));
		this.commHubConnectionDD = element(by.xpath('//*[@id="chubInstall_connectionMethodSelect"]'));
		this.captureCommsHub = element(by.xpath('//*[@id="chubInstall_photoEvidence"]'));
		this.commHubLocNxtBtn = element(by.xpath('//*[@id="chubInstall_nextSectionBtn"]'));
		this.selectinstallAssetOption = element(by.xpath('(//select[@id="chubInstall_selectAsset"]/option)[4]'));
		this.randomClick = element(by.xpath('//div[text()="CHF ID:"]'));
		this.commshubNxtbtn = element(by.xpath('//*[@id="btnNextcch"]'));
		this.installCommsHubNo = element(by.xpath('//*[@id="chubInstall_newChubRequired_n"]'));
		this.installCommsHubYes = element(by.xpath('//*[@id="chubInstall_newChubRequired_y"]'));
		this.installCommsHubText = element(by.xpath('//*[@id="Title_chubInstall"]'));
		this.commshubconnectedtoWANYes = element(by.xpath('//input[@id="Cradionm1"]/following-sibling::span[@class="outer"]'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.inputcradleSerialNo = element(by.xpath('//*[@id="chubInstall_cradleSerial"]'));
		this.regulatorText = element(by.xpath('//div/h4[text()="New Regulator"]'));
		this.assetInput1 = element(by.xpath('//*[@id="gasassetinput0"]'));
		this.installKitNxtBtn1 = element(by.xpath('//*[@id="gasInstallPhoto_nextBtn"]'));

		//CGP
		this.contactGTYES = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.reportedIncidentYES = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.contactGTYES = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.nationalGTRefInput = element(by.xpath('//*[@id="input1"]'));
		this.reportedIncidentYES = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.inputGTRef = element(by.xpath('//*[@id="gt_issue"]'));
		this.airLineRefNo = element(by.xpath('//*[@id="input2"]'));
		this.waitForGTYES1 = element(by.xpath('//input[@id="gtp5"]/following-sibling::span[@class="outer"]'));
		this.gtResolveIssueYES = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.replacedGasMeterYes = element(by.xpath('//input[@id="gtp13"]/following-sibling::span[@class="outer"]'));

		//CGP added for Master Branch
		this.selectNewMeterGasOptnIn16 = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[2]'));

		//#region IE Update

		this.selectAssettoNewRegGasLst = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[1])/option[@selected="selected"])'));
		this.selectassettoNewwRegGasDDLst = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[1])/option[@selected="selected"])'));
		this.selectValidAssetDDLst = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[1])/option[@selected="selected"])'));
		
		//#endregion
	}

	public async riskAssessmentGASDisplayed() {
		await utility.wait(utility.medium);
		if (this.riskAssessGas.isDisplayed()) {
			await this.riskAssessGas.getText().then(function (riskAssess) {
				console.log("find riskAssess Text  " + riskAssess);
			});
		}

	}

	public async verifySFENMEX15CurrentMeterDetails() {
		await utility.wait(utility.medium);
		
		await utility.wait(utility.medium);
		await this.currentMeterDetailsText.getText().then(function (currentMeterDetails) {
			console.log("find currentMeterDetails Text  " + currentMeterDetails);
		});
		await utility.wait(utility.medium);
		gen.ButtonClick(this.updateValuesBtn, utility.medium);
		await utility.wait(utility.medium);
		
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterNo, utility.medium);
		//await expect(this.existingElecMeterYes.isPresent());
		//await this.existingElecMeterYes.click();
		//await utility.wait(utility.very_low);
		//not req, if new WO required
		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterNxtbtn, utility.medium);
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterDetailsHeader, utility.medium);
		
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.unableToReadMeterYes_SFENMEX15, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.updateValuesBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.SFENMEX15currentNxtbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async meterCutOutnextSection() {
		await utility.wait(utility.medium);
		
		await utility.wait(utility.medium);
		gen.ButtonClick(this.clickSubmit, utility.medium);
		await utility.wait(utility.medium);
	}

	public async currentGASMeterDetailsTxtDisplay() {
		await utility.wait(utility.medium);
		if (this.currentGASMeterDetailsTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.currentGASMeterDetailsTxt.getText().then(function (currentGASMeterDetails) {
				console.log("find currentGASMeterDetails Text  " + currentGASMeterDetails);
			});
		}

	}

	public async verifyDF17CurrentMeterDetails() {
		await utility.wait(utility.medium);
		await this.currentMeterDetailsText.getText().then(function (currentMeterDetails) {
			utility.wait(utility.medium);
			console.log("find currentMeterDetails Text  " + currentMeterDetails);
		});
		await utility.wait(utility.medium);
		gen.ButtonClick(this.updateValuesBtn, utility.medium);

		await utility.wait(utility.medium);
		
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterNo, utility.medium);

		//await expect(this.existingElecMeterYes.isPresent());
		//await this.existingElecMeterYes.click();
		//await utility.wait(utility.very_low);
		//not req, if new WO required
		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterNxtbtn, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.currentMeterDetailsHeader, utility.medium);

		

		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.unableToReadMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.DF17currentMeterNxtbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillCurrentMeterDetails() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.existingElecMeterYes, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillRiskAssessGas() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.meterPressureLow, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.voltStickYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.theftOfGasYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.ecvChksPAss, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.workAreaSafetyYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.captureEvidenceGas, utility.medium);

		

		await utility.wait(utility.medium);
		gen.SendKeys(this.additionalGASNote, utility.medium, 'Fault checked');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.safeToContinueYEs, utility.medium);
		await utility.wait(utility.medium);
	}

	public async suitableForSmartInstallationTxt() {
		await utility.wait(utility.medium);
		if (this.suitableforSmartInstallationTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.suitableforSmartInstallationTxt.getText().then(function (suitableforSmartInstallation) {
				console.log("find suitableforSmartInstallation Text  " + suitableforSmartInstallation);
			});
		}

	}

	public async suitableForSmartInstallationGASTxt() {
		await utility.wait(utility.medium);
		await expect(this.suitableforSmartInstallationGASTxt.isDisplayed());
		await utility.wait(utility.medium);
	}

	public async fillSuitablityForGASSmartInstallation() {
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.suitableforInstaGASYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.repositionReqGASDD, utility.medium, 'No Reposition Required');

		await utility.wait(utility.medium);
		gen.SendKeys(this.additionalGASSmartNote, utility.medium, 'Add Remarks');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.suitableGASnxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillSuitablityForSmartInstallation() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.suitableforInstaYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.repositionReqDD, utility.medium, 'No Reposition Required');

		await utility.wait(utility.medium);
		gen.SendKeys(this.additionalSmartNote, utility.medium, 'Add Remarks');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.suitablenxtBtn, utility.medium);

		await utility.wait(utility.medium);
	}

	public async captureInitialPhotoTxt() {
		await utility.wait(utility.medium);
		if (this.captureInitialPhotogastxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.captureInitialPhotogastxt.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
		}
		await utility.wait(utility.medium);
		gen.ButtonClick(this.captureInitialPhotogasbtn, utility.medium);
		await utility.wait(utility.medium);
	}


	public async captureInitialPhotoGASTxt() {
		await utility.wait(utility.medium);
		if (this.captureInitialPhotogas.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.captureInitialPhotogas.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
		}
	}

	public async captureInitialPhotoTxtDF17() {
		await utility.wait(utility.medium);
		if (this.captureInitialPhotogastxtDF17.isDisplayed()) {
			await this.captureInitialPhotogastxtDF17.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
		}
		//await this.captureInitialPhotogasbtn.click();
	}

	public async preInstallationGasTTxt() {
		await utility.wait(utility.medium);
		if (this.preInstalationGASTxt.isDisplayed()) {
			await this.preInstalationGASTxt.getText().then(function (preInstalationGAS) {
				console.log("find preInstalationGAS Text  " + preInstalationGAS);
			});
		}
	}

	public async preInstallationGasT() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.gasTightnessYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.captureGTTPhotobtn, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.dropInPressreYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.DIPGasDD, utility.medium, '2');

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.meterTypeDD, utility.medium, '2');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.CustSmellGasYes, utility.medium);
		await utility.wait(utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.additionalTxtPreInstallGas, utility.medium, 'Reference Text');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.failureOutcomeGT, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportToGTYes, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.inputGTRef, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportedToHSYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.inputAirLineRef, utility.medium, '567890');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.waitForGTYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.GTResolveIssue, utility.medium);
		await utility.wait(utility.medium);
	}

	public async currentMeterDetailsTxtDisplay() {
		await utility.wait(utility.medium);
		if (this.currentMeterDetailsTxt.isDisplayed()) {
			await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		if (this.newRegulatorTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.newRegulatorTxt.getText().then(function (regulator) {
				console.log("find regulator Text  " + regulator);
			});
		}
	}

	public async ExGasRegulatorDetailsTxtDisplay() {
		await utility.wait(utility.medium);
		if (this.regulatorText.isDisplayed()) {
			await this.regulatorText.getText().then(function (regulator) {
				utility.wait(utility.medium);
				console.log("find regulator Text  " + regulator);
			});
		}
	}

	/***
	 * @Author Aparna Das
	 * @description Fill new meter regulator details GAS
	 ***/
	public async fillMeterRegulatorDetailsGAS(index: number) {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.regulatorReplacedYes, utility.medium);

		
			await utility.wait(utility.medium);
			gen.ButtonClick(this.selectAssettoNewRegGas, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectAssettoNewRegGas.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			
			await utility.wait(utility.medium);
			var options = this.selectAssettoNewRegGasLst.getAttribute('value');
			gen.SendKeys(this.inputelecSerialNum, utility.medium, options);
			await utility.wait(utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.regulatorTxt, utility.medium);
		
		await utility.wait(utility.medium);
		gen.ButtonClick(this.infoOKButton, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.newRegulatorNxtBtn, utility.medium);
		await utility.wait(utility.medium);
		//}
	}

	public async fillMeterRegulatorGAS(index: number) {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.regulatorReplacedYes, utility.medium);

		
			await utility.wait(utility.medium);
			gen.ButtonClick(this.selectassettoNewwRegGasDD, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectassettoNewwRegGasDD.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			
			var options = this.selectassettoNewwRegGasDDLst.getAttribute('value');
			gen.SendKeys(this.inputelecSerialNum, utility.medium, options);
			await utility.wait(utility.medium);
		

		await utility.wait(utility.medium);
		gen.ButtonClick(this.regulatorTxt, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commshubPopup, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.newRegulatorNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify new meter details section displayed
	 ***/

	public async newMeterDetailsTxtDisplay() {
		await utility.wait(utility.medium);

		if (this.NewMeterDetailsText.isDisplayed()) {
			await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);

			await utility.wait(utility.low);
			// click the dropdown
			await utility.wait(utility.medium);
			gen.ButtonClick(this.newMeterDD, utility.medium);

			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			//await this.commshubPopup.click();

			
			var options = this.selectNewMeterGasOptn.getAttribute('value');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputMeterSerialNum, utility.medium, options);

			await utility.wait(utility.medium);
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()

			await utility.wait(utility.medium);
			gen.ButtonClick(this.infoOKButton, utility.medium);

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.MeterTypeDD, utility.medium, '0');

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.meterLocDD, utility.medium, '02');

			await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Gas initial meter reading section displayed
	 ***/

	public async gasInitialMeterTxtDisplay() {
		await utility.wait(utility.medium);
		if (this.gasInitialMeterTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.gasInitialMeterTxt.getText().then(function (GasInstall) {
				console.log("find GasInstall Text  " + GasInstall);
			});
		}
	}



	public async fillGasInitialMeterREading() {
		await utility.wait(utility.medium);
		
		// await this.capturemeterReadingInput.clear();
		await utility.wait(utility.medium);
		gen.SendKeys(this.capturemeterReadingInput, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.unableToReadMeterYes_SFENMEX15, utility.medium);

		await utility.wait(utility.medium);
		//await this.OKpopupBtn.click();
	}

	public async fillGasInitialMeterREadingEXCH21() {
		await utility.wait(utility.medium);
		
		// await this.capturemeterReadingInput.clear();
		//await utility.wait(utility.medium);
		gen.SendKeys(this.capturemeterReadingInput, utility.medium, '12345');
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		gen.RandomMouseClick(this.capturemeterReadingInput, 250, 34);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Gas install Kit section displayed
	 ***/

	public async gasInstallKitTxtDisplay() {
		await utility.wait(utility.medium);
		if (this.installKitTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.installKitTxt.getText().then(function (GasInstallKit) {
				console.log("find GasInstallKit Text  " + GasInstallKit);
			});
		}
	}

	public async fillGasInstallKitDetails_NMEX15() {

		await utility.wait(utility.medium);
		gen.ButtonClick(this.installKitUsedYes1, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.nonSerialisedAsssetsDD1, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.SendKeys(this.assetInput1, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commsHubConnectedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.installKitNxtBtn1, utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description Fill Gas install Kit section 
	 ***/

	public async fillGasInstallKitDetails() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.installKitUsedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.nonSerialisedAsssetsDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.SendKeys(this.assetInput, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.installKitNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Verify Gas Post Installation Gas Tightness Test section displayed
	 ***/

	public async GasPostInstallationTxt() {
		await utility.wait(utility.medium);
		if (this.postInstallationGasTxt.isDisplayed()) {
			await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		gen.ButtonClick(this.contactGTYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.nationalGTRefInput, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportedToHSYEsGas, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.inputAirLineRefGAS, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtAttendanceOnSiteYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtResolveIssueGas, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.AdditionalWorktoPassYesGAS, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork1, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork2, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork3, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork4, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork5, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork6, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasRegulatorYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.GasTightnessTestPerformedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturePostInstallationGas, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.DIPGASYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.dipSelectDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.meterTypeGASDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.tightnessPassedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.witnessName, utility.medium, 'Dennis');

		await utility.wait(utility.medium);
		gen.SendKeys(this.standingPressure, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.dipCaptureBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.workingpressure, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.wpCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.finalMeterCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.polNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das 23.09
	 * @description Fill Gas Post Installation Gas Tightness Test section Ex19
	 ***/
	public async fillPostInstallationGasDetailsExchange19() {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.contactGTYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.nationalGTRefInput, utility.medium, '12335');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportedToHSYEsGas, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.inputAirLineRefGAS, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtAttendanceOnSiteYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtResolveIssueGas, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.AdditionalWorktoPassYesGAS, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork1, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork2, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork3, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork4, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork5, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork6, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasRegulatorYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.GasTightnessTestPerformedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturePostInstallationGas, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.DIPGASYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.dipSelectDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.meterTypeGASDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.tightnessPassedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.witnessName, utility.medium, 'Dennis');

		await utility.wait(utility.medium);
		gen.SendKeys(this.standingPressure, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.dipCaptureBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.workingpressure, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.wpCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.finalMeterCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commshubconnectedtoWANYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.polNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Gas Post Installation Gas Tightness Test section Ex20
	 ***/
	public async fillPostInstallationGasDetails() {

		await utility.wait(utility.medium);
		gen.ButtonClick(this.contactGTYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.nationalGTRefInput, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportedToHSYEsGas, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.inputAirLineRefGAS, utility.medium, '12345');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtAttendanceOnSiteYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtResolveIssueGas, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.AdditionalWorktoPassYesGAS, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork1, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork2, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork3, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork4, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork5, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork6, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasRegulatorYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.GasTightnessTestPerformedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturePostInstallationGas, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.DIPGASYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.dipSelectDD, utility.medium, '1');
		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.meterTypeGASDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.tightnessPassedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.witnessName, utility.medium, 'Dennis');

		await utility.wait(utility.medium);
		gen.SendKeys(this.standingPressure, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.dipCaptureBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.workingpressure, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.wpCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.finalMeterCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commshubconnectedtoWANYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.polGasNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description GICOM Message display section
	 ***/
	public async gicomSendMessageTxtDisplayed() {
		await utility.wait(utility.medium);
		if (this.gicomSendMessage.isDisplayed()) {
			await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		gen.ButtonClick(this.gicomSendMessage, utility.medium);

		await utility.wait(utility.high);
		gen.ButtonClick(this.successfulBtn, utility.medium);

		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Gas Safety check section displayed
	 ***/
	public async gasSafetyDisplay() {
		await utility.wait(utility.medium);
		if (this.gasAppliencesSafetyTxt.isDisplayed()) {
			await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		gen.ButtonClick(this.earthBondingYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.landLordPropertyNo, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.allAppliTestedBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.submitGas, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Gas Safety check section
	 ***/
	public async currentCommsHubDetailsDisplay() {
		await utility.wait(utility.medium);
		if (this.currentCommsHubText.isDisplayed()) {
			await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		gen.ButtonClick(this.smets2CommshubOnsiteNo, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commshubNxtbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Fill Comms Hub Section
	 ***/
	public async fillinstallCommsHubDetailsGAS(index: number) {
		await utility.wait(utility.medium);
		gen.ButtonClick(this.installCommsHubYes, utility.medium);

			// click the dropdown
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubDD, utility.medium);
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.medium);
			await this.commHubDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			gen.ButtonClick(this.commshubPopup, utility.medium);
			await utility.wait(utility.medium);
			var options = this.selectinstallAssetOption.getAttribute('value');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputinstallCommshub, utility.medium, options);
			await utility.wait(utility.medium);
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
			gen.SendKeys(this.inputcradleSerialNo, utility.medium, '12345');

			await utility.wait(utility.medium);
			gen.ButtonClick(this.captureCommsHub, utility.medium);

			await utility.wait(utility.medium);
			gen.ButtonClick(this.commHubLocNxtBtn, utility.medium);

			await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description Install Commshub Details section
	 ***/
	public async installCommsHubDetailsDisplay() {
		await utility.wait(utility.medium);
		if (this.installCommsHubText.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.installCommsHubText.getText().then(function (currentCommsHub) {
				console.log("find currentCommsHub Text  " + currentCommsHub);
			});
		}
	}


	/***************CGP added for INST16 */

	public async fillMeterRegulatorDetailsGASINST16(index: number) {

		await utility.wait(utility.medium);
		gen.ButtonClick(this.regulatorReplacedYes, utility.medium);

			await utility.wait(utility.medium);
			gen.ButtonClick(this.selectAssettoNewRegGas, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			await utility.wait(utility.medium);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectAssettoNewRegGas.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			
			await utility.wait(utility.medium);
			var options = this.selectValidAssetDDLst.getAttribute('value');
			gen.SendKeys(this.regulatorSerialNoinput, utility.medium, options);
			await utility.wait(utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.regulatorTxt, utility.medium);
		//await this.selectValidAssetDD.element(by.css("option:nth-child(" + index + ")")).click();

		await utility.wait(utility.medium);
		gen.ButtonClick(this.commshubPopup, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.newRegulatorNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}


	public async fillNewMeterDetailsGASInst16(index: number) {
		
			await utility.wait(utility.low);
			// click the dropdown
			await utility.wait(utility.medium);
			//gen.ButtonClick(this.newMeterDD, utility.medium);

			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			//await this.commshubPopup.click();        
			
			var options = this.selectNewMeterGasOptnIn16.getAttribute('value');
			await utility.wait(utility.medium);

			await utility.wait(utility.medium);
			gen.SendKeys(this.inputMeterSerialNum, utility.medium, options);

			await utility.wait(utility.medium);
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()

			await utility.wait(utility.medium);
			gen.ButtonClick(this.infoOKButton, utility.medium);

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.MeterTypeDD, utility.medium, '0');

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.meterLocDD, utility.medium, '02');
			await utility.wait(utility.medium);
		
	}


	public async fillPostInstallationGasDetailsInst16() {
		//cgp adding
		await utility.wait(utility.medium);
		gen.ButtonClick(this.contactGTYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.nationalGTRefInput, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.reportedIncidentYES, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.airLineRefNo, utility.medium, '2');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.waitForGTYES1, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.gtResolveIssueYES, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.GAStightnessTestYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork1, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork2, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork3, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork4, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork5, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.additionalWork6, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasMeterYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.replacedGasRegulatorYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.GasTightnessYes, utility.medium);
		await utility.wait(utility.medium);
		gen.ButtonClick(this.capturePostInstallationGas, utility.medium);

		await utility.wait(utility.medium);
		await browser.executeScript('arguments[0].scrollIntoView();', this.DIPGASYes.getWebElement());
		gen.ButtonClick(this.DIPGASYes, utility.medium);

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.dipSelectDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.DropDownOptionClick(this.meterTypeGASDD, utility.medium, '1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.tightnessPassedYes, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.witnessName, utility.medium, 'CGP');

		await utility.wait(utility.medium);
		gen.SendKeys(this.standingPressure, utility.medium, '1.1');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.dipCaptureBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.SendKeys(this.workingpressure, utility.medium, '2.0');

		await utility.wait(utility.medium);
		gen.ButtonClick(this.wpCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.finalMeterCapture, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.polNxtBtn, utility.medium);

		await utility.wait(utility.medium);
	}

	public async fillGasSafety16() {

		await utility.wait(utility.medium);
		gen.ButtonClick(this.landLordPropertyNo, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.allAppliTestedBtn, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.submitGas, utility.medium);
		await utility.wait(utility.medium);
	}

	//Marks update

	public async populateRiskAssessmentForGasWithoutPhotoEvidence() {
		await utility.wait(utility.medium);
		

		await utility.wait(utility.medium);
		gen.ButtonClick(this.meterPressureLow, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.voltStickYEs, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.theftOfGasYes, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.ecvChksPAss, utility.medium);

		await utility.wait(utility.medium);
		gen.ButtonClick(this.workAreaSafetyYes, utility.medium);

		
		await utility.wait(utility.medium);
		gen.SendKeys(this.additionalGASNote, utility.medium, 'Fault Checked');

		
		await utility.wait(utility.medium);
		gen.ButtonClick(this.safeToContinueYEs, utility.medium);
		await utility.wait(utility.medium);
	}

	public async captureInitialGasPhoto() {
		await utility.wait(utility.medium);
		if (this.currentGasPhotoFullMeterButton.isPresent()) {
			await utility.wait(utility.medium);
			await this.currentGasPhotoFullMeterButton.click();
		}
	}

	//** Aparna Changes 24/09- Adding new function for INST14(New Meter) */
	/***
		 * @Author Aparna Das
		 * @description Fill new meter details GAS
		 ***/

	public async fillNewMeterDetailsWomanufact(index: number) {
			
			// click the dropdown
			await utility.wait(utility.medium);
			gen.ButtonClick(this.newMeterDD, utility.medium);

			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			//await this.commshubPopup.click();

			
			var options = this.selectNewMeterGasOptn.getAttribute('value');
			await utility.wait(utility.medium);
			gen.SendKeys(this.inputMeterSerialNum, utility.medium, options);

			await utility.wait(utility.medium);
			await this.newMeterDD.element(by.css("option:nth-child(" + index + ")")).click()

			await utility.wait(utility.medium);
			gen.ButtonClick(this.infoOKButton, utility.medium);

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.MeterTypeDD, utility.medium, '0');

			await utility.wait(utility.medium);
			gen.DropDownOptionClick(this.meterLocDD, utility.medium, '02');

			await utility.wait(utility.medium);
	}

}