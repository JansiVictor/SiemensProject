/**
 * @Author Jansi Victor
 * @Description UAT Automation for FAULTY18 Workflow
 */
import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder,
	browser,
	protractor
} from "protractor";
const chai = require("chai");
const expect = chai.expect;
import { Utility } from "../support/utility";
import { GenericPageObject } from "./GenericPage";
const utility: Utility = new Utility();
const generic: GenericPageObject = new GenericPageObject();

export class InstallPageObject {

	public installcommsHub: ElementFinder;
	public commshubReqY: ElementFinder;
	public selectValid: ElementFinder;
	public selectValidnewgas: ElementFinder;
	public commshubWarning: ElementFinder;
	public CHFIDText: ElementFinder;
	public assetSuccessAdded: ElementFinder;
	public commsHubLocation: ElementFinder;
	public Assetserialsmatchnext: ElementFinder;
	public CHF_ID_Txt: ElementFinder;
	public aerialY: ElementFinder;
	public commshubconnmethodselect: ElementFinder;
	public commshubPhoto: ElementFinder;
	public instCommshubNext: ElementFinder;
	public clksendMsgXCHUB: ElementFinder;
	public SendXCHUBbtn: ElementFinder;
	public AwaitingRespXCHUB: ElementFinder;
	public AwaitingReqSent: ElementFinder;
	public AwaitingWhiteList: ElementFinder;
	public remvSuccessful: ElementFinder;
	public NewGasMeterDtls: ElementFinder;
	public gasmeterserialSend: ElementFinder;
	public Gas_Meter_Txt: ElementFinder;
	public AssetaddedtoWall: ElementFinder;
	public GasnewMeterSelect: ElementFinder;
	public GasnewMeternewLocation: ElementFinder;
	public newRegulator: ElementFinder;

	//CGP added
	public newRegulatorHeader: ElementFinder;
	public gasmeterserialSendregTRAD: ElementFinder;

	//CGP instal16
	public visualCheckPMEBonding: ElementFinder;
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
	public PPMIDinstallDDList: ElementFinder;
	public randomEUDevicePPMID: ElementFinder;
	public PPMIDCommText: ElementFinder;
	public emerJobNo: ElementFinder;
	public HasGasRegulatorReplacedY: ElementFinder;
	public selectValidAssettoInst: ElementFinder;
	public RegularclickenableOK: ElementFinder;
	public AssetaddedtowallNewReg: ElementFinder;
	public nextSecnewRegulator: ElementFinder;
	public GasInitialmeterReading: ElementFinder;
	public captureMeterReadingSend: ElementFinder;
	public CaptureMeterReadingenableok: ElementFinder;
	public InstKitCaption: ElementFinder;
	public InstallkitUsedY: ElementFinder;
	public NonserializedassetSel: ElementFinder;
	public NonserializedassetSel2: ElementFinder;
	public T1Aerialinput: ElementFinder;
	public T1Aerialinput1: ElementFinder;
	public Addanotherset: ElementFinder;
	public InstallKitNextSection: ElementFinder;
	public ContactGTY: ElementFinder;
	public NationalGridSend: ElementFinder;
	public GTAttendenceOnsiteY: ElementFinder;
	public GTresolveIssueY: ElementFinder;
	public TightnessIssueY: ElementFinder;
	public ReplacedGasMeterY: ElementFinder;
	public ReplacedGasregulatorY: ElementFinder;
	public TightnessperformedY: ElementFinder;
	public cappostinstallation: ElementFinder;
	public Dropinpressure: ElementFinder;
	public dropinpressureselect: ElementFinder;
	public selectMeterType: ElementFinder;
	public GasTightnessPassed: ElementFinder;
	public TestWitness: ElementFinder;
	public standingPressure: ElementFinder;
	public cappostinstallationpressure: ElementFinder;
	public workingPressure: ElementFinder;
	public captureworkingPressure: ElementFinder;
	public captureFinalMeterInstall: ElementFinder;
	public MsgreqDCC: ElementFinder;
	public hubconnectdtoWAN: ElementFinder;
	public PostinstallNext: ElementFinder
	public gasInstallcommisioningcaption: ElementFinder;
	public sendMsgGICOM: ElementFinder;
	public awaitingresponse: ElementFinder;
	public reqsentSuccess: ElementFinder;
	public pairAssettocommsHub: ElementFinder;
	public Pairingsuccessful: ElementFinder;
	public DCChandover: ElementFinder;
	public DCChandover1: ElementFinder;
	public MPRNsetconfig: ElementFinder;
	public Joinsareinit: ElementFinder;
	public commisioningSuccessful: ElementFinder;
	public GasApplianceSafetychk: ElementFinder;
	public postInstCaption: ElementFinder;
	public HandSAirline: ElementFinder;
	public addnlnote: ElementFinder;
	public Airlineref1: ElementFinder;
	public cappedgascooker: ElementFinder;
	public DCCGPFdevice: ElementFinder;
	public DeviceClk: ElementFinder;
	public installdelete: ElementFinder;
	public chfIDokenable: ElementFinder;
	public nextSecnewgasMeter: ElementFinder;

	public earthBondingInstclk: ElementFinder;
	public LandlordPropclk: ElementFinder;
	public Addresssend: ElementFinder;
	public AddApplianceclk: ElementFinder;
	public FlueTypesel: ElementFinder;
	public ventSatclk: ElementFinder;
	public carriedoutPurgeclk: ElementFinder;
	public ApplianceTypesel: ElementFinder;
	public ApplianceLocsel: ElementFinder;
	public ApplCondnsel: ElementFinder;
	public AppsafetoUse: ElementFinder;
	public AllapplTested: ElementFinder;
	public InstallPPMIDCaption: ElementFinder;
	public PPMIDoffered: ElementFinder;
	public PPMIDaccepted: ElementFinder;
	public PPMIDLocsel: ElementFinder;
	public PPMIDtoInstallsel: ElementFinder;
	public SerialNoText: ElementFinder;
	public EUIenableOK: ElementFinder;
	public AssetsuccessOKclk: ElementFinder;
	public InstallPPMIDNextSection: ElementFinder;
	public PPMIDCommisioning: ElementFinder;
	public sendmsgIHDPPMID: ElementFinder;
	public awaitingresponsePPMID: ElementFinder;
	public ReqSent: ElementFinder;
	public PairAssettoComms: ElementFinder;
	public PairingSuccess: ElementFinder;
	public PPMIDSuccess: ElementFinder;
	public gasmeterserialSendreg: ElementFinder;
	public PPMIDcommsuccessfulbtn: ElementFinder;
	public AssetaddedtoWallnewgas: ElementFinder;
	public PPMIDSubmit: ElementFinder;
	public DeviceBinding: ElementFinder;
	public NewMeterDtls: ElementFinder;

	public elecNewmeterselect: ElementFinder;
	public elecNewmeterserial: ElementFinder;
	public EUIdeviceIDenableOK: ElementFinder;
	public Manufacturerletter: ElementFinder;
	public meterLocCode: ElementFinder;
	public certYearMonth: ElementFinder;
	public ElecNewmeterNext: ElementFinder;
	public additionalElecTestandChk: ElementFinder;
	public clkokEUIdev: ElementFinder;

	public TerminalscrewTightness: ElementFinder;
	public capTerminalscrews: ElementFinder;
	public SealsIntactBlocks: ElementFinder;
	public AllPortsSealed: ElementFinder;
	public SiemenscableMarkersIns: ElementFinder;
	public VisualInspectionCompleted: ElementFinder;
	public cableMarkerSelect: ElementFinder;
	public EarthTypeSelect: ElementFinder;
	public ReplacementMeterBoardY: ElementFinder;
	public MeterTailsChangedN: ElementFinder;
	public ReplacementmainFuseY: ElementFinder;
	public EmergencyJobY: ElementFinder;
	public AdditionalTestChkNext: ElementFinder;
	public ElecInitMeterReadingCap: ElementFinder;
	public AllPortsSealedText: ElementFinder;
	public SiemenscableMarkersInsTxt: ElementFinder;

	public postInstallationChkCap: ElementFinder;
	public CarryoutPolChkatMeterY: ElementFinder;
	public AdditionalTextSend: ElementFinder;
	public carryoutPolChksPluginTestDev: ElementFinder;
	public ConfirmSocSafetyTestPassed: ElementFinder;
	public testWitnessname: ElementFinder;
	public capmarindaleTestpostinst: ElementFinder;
	public capfinalmeterPostInst: ElementFinder;
	public capCloseUpmeterplusWitnessSticker: ElementFinder;
	public commisioningCaption: ElementFinder;
	public PostInstallationText: ElementFinder;

	public NonSerializedAssetSend: ElementFinder;
	public addAnotherasset: ElementFinder;
	public NonSerializedAssetselect1: ElementFinder;
	public NonSerializedAssetSend1: ElementFinder;
	public mesgreqtoDCCY: ElementFinder;
	public CommsHubconnectedtoWAN: ElementFinder;
	public CommNextSection: ElementFinder;
	public NonSerializedAssetselect: ElementFinder;
	public ElecInstallCommCap: ElementFinder;

	public sendmesgtoEICOM: ElementFinder;
	public awaitingresponseEICOM: ElementFinder;
	public pairAssettoCommsHub: ElementFinder;
	public MPANSetbyDCC: ElementFinder;
	public EICOMcommsuccess: ElementFinder;
	public selectValidnewgasList: ElementFinder;
	public CHFIDTextList: ElementFinder;
	public elecNewmeterserialList: ElementFinder;
	public PPMIDtoInstallselList: ElementFinder;
	public captureMeterReadingSend2: ElementFinder;
	public captureFinalMeterInstall1: ElementFinder;
	public MsgreqDCC1: ElementFinder;
	public PostinstallNext1: ElementFinder;
	public selectValidAssettoInst1: ElementFinder;
	public gasmeterserialSendregList: ElementFinder;
	public gasmeterserialSendregList1: ElementFinder;
	public CaptureMeterReadingenableok1: ElementFinder;
	public EUIenableOK1: ElementFinder;
	public Tst13DummyHan: ElementFinder;
	public selectValidAssettoInst2: ElementFinder;
	public gasmeterserialSendregList2: ElementFinder;
	public AddAppliance: ElementFinder;
	public TightnessIssueN: ElementFinder;

	public PPMIDofferedNo: ElementFinder;
	public InstallPPMIDNotOfferedAddNote: ElementFinder;
	public Tst15selectValidAssettoInst: ElementFinder;
	public Tst15gasmeterserialSendregList: ElementFinder;

	//New Changes
	public postGastightnessNxtbtn: ElementFinder;
	public EUIenableOKTRAD: ElementFinder;
	public submitInstall: ElementFinder;
	public newGasmeterText: ElementFinder;
	public newGasMeterDD: ElementFinder;
	public gasmeterSereal: ElementFinder;
	public gasmeterSerealList: ElementFinder;
	public euDivText: ElementFinder;
	public readingText: ElementFinder;
	public selectppmidtext: ElementFinder;
	public validAssetTxt: ElementFinder;
	public dummydiv: ElementFinder;
	public infoOkButton: ElementFinder;
	public EmergencyJobN: ElementFinder;

	// CGP added 13/09
	public AssetsuccessOKclkTRAD: ElementFinder;
	public PPMIDSubmitTRAD: ElementFinder;
	public AssetaddedtowallTRAD: ElementFinder;
	public randomClickRegulator: ElementFinder;
	public selectValidAssettoInstTRAD: ElementFinder;
	//CGP for INst16
	public regulatorTxt: ElementFinder;
	//CGP added for Master
	public EUIenableOKTRAD1: ElementFinder;
	// CGP added for EX23
	public newCommsHubReqN: ElementFinder;
	private pageHeaderText: ElementArrayFinder;
	private terminalScrewTightnessCheckedTrueRadioOption: ElementFinder;
	private allSealsIntactTrueRadioOption: ElementFinder
	private allPortsSealedTrueRadioOption: ElementFinder
	private approvedSiemensCableMarkersInstalledCorrectlyTrueRadioOption: ElementFinder
	private replacementMeterBoardTrueRadioOption: ElementFinder
	private meterTailsChangedFalseRadioOption: ElementFinder
	private replacedMainFuseTrueRadioOption: ElementFinder
	private emergencyJobTrueRadioOption: ElementFinder
	private visualInspectionCompletedTrueRadioOption: ElementFinder
	private cableMarkerDropdownMenu: ElementFinder
	private earthTypeDropdownMenu: ElementFinder
	private capturePhotosOfTerminalScrewsBtn: ElementFinder
	private addElecTestsNextBtn: ElementFinder
	private postInstallationChecksText: ElementFinder
	private carryOutPolarityCheckAtMeterTrueRadioOption: ElementFinder
	private carryOutPolarityCheckWithPlugInTestDeviceDropDownMenu: ElementFinder
	private confirmSocketSafetyTestPassedTrueRadioOption: ElementFinder
	private testWitnessNameTextfield: ElementFinder
	private capturePhotoOfMartindaleTestBtn: ElementFinder
	private capturePhotoOfFinalMeterInstallBtn: ElementFinder
	private capturePhotoOfFinalMeterInstallBtn2: ElementFinder
	private capturePhotoOfCloseUpOfMeterBtn: ElementFinder
	private postInstallChecksNextBtn: ElementFinder
	private commissioningText: ElementFinder
	private postInstallChecksAdditionalNotesTextfield: ElementFinder
	private installKitUsedTrueRadioOption: ElementFinder
	private addAnotherAssetBtn: ElementFinder
	private assetDropDownMenu1: ElementFinder
	private assetDropDownMenu2: ElementFinder
	private assetDropDownMenu3: ElementFinder
	private assetDropDownMenu4: ElementFinder
	private quantityTextfield1: ElementFinder
	private quantityTextfield2: ElementFinder
	private quantityTextfield3: ElementFinder
	private quantityTextfield4: ElementFinder
	private commissioningNextSectionBtn: ElementFinder
	private postInstallationGasTightnessTestText: ElementFinder
	private didYouHaveToContactGTTrueRadioOption: ElementFinder
	private nationalGridGIJobRefTextfield: ElementFinder
	private reportedIncidentToHAndSAIRLineTrueRadioOption: ElementFinder
	private aIRLineRefTextfield: ElementFinder
	private needToWaitForTheGTAttendanceOnSiteTrueRadioOption: ElementFinder
	private gTResolveIssueTrueRadioOption: ElementFinder
	private didYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption: ElementFinder
	private additionalNotesTextfield: ElementFinder
	private haveYouReplacedGasMeterTrueRadioOption: ElementFinder
	private haveYouReplacedRegulatorTrueRadioOption: ElementFinder
	private postInstallationGasTightnessTestPerformedTrueRadioOption: ElementFinder
	private capturePhotoOfWitnessStickerAndUGaugeBtn: ElementFinder
	private wasThereADropInPressureTrueRadioOption: ElementFinder
	private enterDIPGasPressureDropDownMenu: ElementFinder
	private selectMeterTypeDropDownMenu: ElementFinder
	private gasTightnessTestPassedTrueRadioOption: ElementFinder
	private testWitnessNameTxtfieldPostInstallGasTightnessForm: ElementFinder
	private standingPressureTextfield: ElementFinder
	private capturePhotoOfStandingPressureBtn: ElementFinder
	private workingPressureTextfield: ElementFinder
	private capturePhotoOfWorkingPressureBtn: ElementFinder
	private postInstallGasTightnessTestNextBtn: ElementFinder
	private installKitNextSectionBtn: ElementFinder
	private addAnotherAssetBtnInstallKitSection: ElementFinder
	private gasApplianceSafetyChecksSectionText: ElementFinder
	private isEarthBondingInstalledTrueRadioOption: ElementFinder
	private landlordPropertyTrueRadioOption: ElementFinder
	private address1Textfield: ElementFinder
	private address2Textfield: ElementFinder
	private address3Textfield: ElementFinder
	private address4Textfield: ElementFinder
	private address5Textfield: ElementFinder
	private address6Textfield: ElementFinder
	private address7Textfield: ElementFinder
	private addApplianceBtn: ElementFinder
	private flueTypeDropDownMenu: ElementFinder
	private ventilationSatisfactoryTrueRadioOption: ElementFinder
	private carriedOutPurgeAndRelightGasApplianceTestTrueRadioOption: ElementFinder
	private applianceTypeDropDownMenu: ElementFinder
	private applianceLocationDropDownMenu: ElementFinder
	private applianceConditionDropDownMenu: ElementFinder
	private applianceSafeToUseTrueRadioOption: ElementFinder
	private allAppliancesTestedBtn: ElementFinder
	private installPageSubmitBtn: ElementFinder
	public selectValidAssettoInstLst: ElementFinder;
	public selectValidAssettoInst1Lst: ElementFinder;
	public selectValidAssettoInstTRADLst: ElementFinder;
	public Tst15selectValidAssettoInstLst: ElementFinder;
	public brandicon: ElementFinder;
	public menu: ElementFinder;

	constructor() {
		//CGP added for MASter 22/09
		this.EUIenableOKTRAD1 = element(by.xpath('(//*[contains(text(),"EUI Device ID:")])[2]'));
		this.allSealsIntactTrueRadioOption = element(by.xpath("//label[@id='rb_SealsInt_y']"));
		this.allPortsSealedTrueRadioOption = element(by.xpath("//label[@id='rb_PortsSealed_y']"));
		this.approvedSiemensCableMarkersInstalledCorrectlyTrueRadioOption = element(by.xpath("//label[@id='rb_SieCMark_y']"));
		this.visualInspectionCompletedTrueRadioOption = element(by.xpath("//label[@id='rb_VisInsCom_y']"));
		this.replacementMeterBoardTrueRadioOption = element(by.xpath("//label[@id='rb_ReMetBoard_y']"));
		this.meterTailsChangedFalseRadioOption = element(by.xpath("//label[@id='rb_MetTailChg_n']"));
		this.replacedMainFuseTrueRadioOption = element(by.xpath("//label[@id='rb_ReMainFuse_y']"));
		this.emergencyJobTrueRadioOption = element(by.xpath("//label[@id='rb_EmerJob_y']"));
		this.cableMarkerDropdownMenu = element(by.xpath("//select[@id='cbx_CabMark_Sel']"));
		this.earthTypeDropdownMenu = element(by.xpath("//select[@id='cbx_EarType_Sel']"));
		this.capturePhotosOfTerminalScrewsBtn = element(by.xpath("//button[contains(text(),'CAPTURE PHOTO OF TERMINAL SCREWS')]"));
		this.addElecTestsNextBtn = element(by.xpath("//button[@id='btn_Next_PostC']"));
		this.postInstallationChecksText = element(by.xpath("//h4[contains(text(),'Post Installation Checks')]"));
		this.carryOutPolarityCheckAtMeterTrueRadioOption = element(by.xpath("//label[@id='rb_CarOutPolCk_y']"));
		this.carryOutPolarityCheckWithPlugInTestDeviceDropDownMenu = element(by.xpath("//select[@id='cbx_PolChkplg_sel']"));
		this.confirmSocketSafetyTestPassedTrueRadioOption = element(by.xpath("//label[text()='PASS']"));
		this.testWitnessNameTextfield = element(by.xpath("//input[@id='txt_TestWtn']"));
		this.capturePhotoOfMartindaleTestBtn = element(by.xpath("//button[@id='btn_CapPhoMart_test']"));
		this.capturePhotoOfFinalMeterInstallBtn = element(by.xpath("//button[@id='btn_CapPhoFinMet_inst']"));
		this.capturePhotoOfFinalMeterInstallBtn2 = element(by.xpath("//div[@class='btn-container2line grey']//button[@id='btn2']"));
		this.capturePhotoOfCloseUpOfMeterBtn = element(by.xpath("//button[@id='btn_CapPhoCloUp_met']"));
		this.postInstallChecksNextBtn = element(by.xpath("//*[@id='btnNextComm']"));
		this.commissioningText = element(by.xpath("//h4[contains(text(),'Commissioning')]"));
		this.postInstallChecksAdditionalNotesTextfield = element(by.xpath("//textarea[@id='postpolnotes']"));
		this.addAnotherAssetBtn = element(by.xpath("//button[@id='Cbtn1']"));
		this.assetDropDownMenu1 = element(by.xpath("//select[@id='Cselect4']"));
		this.assetDropDownMenu2 = element(by.xpath("//commissions2[@class='ng-scope ng-isolate-scope']//div[3]//div[1]//div[1]//select[1]"));
		this.assetDropDownMenu3 = element(by.xpath("//select[@id='gasassetselect0']"));
		this.assetDropDownMenu4 = element(by.xpath("//select[@id='gasassetselect1']"));
		this.quantityTextfield1 = element(by.xpath("//commissions2[@class='ng-scope ng-isolate-scope']//div[@class='collapse in']//div[2]//div[1]//div[2]//input[1]"));
		this.quantityTextfield2 = element(by.xpath("//commissions2[@class='ng-scope ng-isolate-scope']//div[3]//div[1]//div[2]//input[1]"));
		this.quantityTextfield3 = element(by.xpath("//input[@id='gasassetinput0']"));
		this.quantityTextfield4 = element(by.xpath(" //input[@id='gasassetinput1']"));
		this.commissioningNextSectionBtn = element(by.xpath("//button[@id='CbtnNextComm']"));
		this.installKitUsedTrueRadioOption = element(by.xpath("//label[@id='gasInstallPhoto_installKit_y']"));
		this.postInstallationGasTightnessTestText = element(by.xpath("//h4[contains(text(),'Post Installation Gas Tightness Test')]"));
		this.didYouHaveToContactGTTrueRadioOption = element(by.xpath("//*[@id='gtp1']/following-sibling::span[@class='outer']"));
		this.nationalGridGIJobRefTextfield = element(by.xpath('//*[@id="input1"]'));
		this.reportedIncidentToHAndSAIRLineTrueRadioOption = element(by.xpath("//*[@id='gtp3']/following-sibling::span[@class='outer']"));
		this.aIRLineRefTextfield = element(by.xpath("//*[@id='input2'][1]"));
		this.needToWaitForTheGTAttendanceOnSiteTrueRadioOption = element(by.xpath("//*[@id='gtp5']/following-sibling::span[@class='outer']"));
		this.gTResolveIssueTrueRadioOption = element(by.xpath("//*[@id='gtp9']/following-sibling::span[@class='outer']"));
		this.didYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption = element(by.xpath("//*[@id='gtp11']/following-sibling::span[@class='outer']"));
		this.additionalNotesTextfield = element(by.xpath('//*[@id="text1"]'));
		this.haveYouReplacedGasMeterTrueRadioOption = element(by.xpath("//*[@id='gtp13']/following-sibling::span[@class='outer']"));
		this.haveYouReplacedRegulatorTrueRadioOption = element(by.xpath("//*[@id='gtp15']/following-sibling::span[@class='outer']"));
		this.postInstallationGasTightnessTestPerformedTrueRadioOption = element(by.xpath("//*[@id='gtp17']/following-sibling::span[@class='outer']"));
		this.capturePhotoOfWitnessStickerAndUGaugeBtn = element(by.xpath("//*[@id='btn_CapPoTi_test']/button"));
		this.wasThereADropInPressureTrueRadioOption = element(by.xpath("//*[@id='gtp19']/following-sibling::span[@class='outer']"));
		this.enterDIPGasPressureDropDownMenu = element(by.xpath("//select[@id='select1']"));
		this.testWitnessNameTxtfieldPostInstallGasTightnessForm = element(by.xpath("//input[@id='input3']"));
		this.selectMeterTypeDropDownMenu = element(by.xpath("//select[@id='select2'][1]"));
		this.gasTightnessTestPassedTrueRadioOption = element(by.xpath("//*[@id='gtp21']/following-sibling::span[@class='outer']"));
		this.standingPressureTextfield = element(by.xpath('//*[@id="gaspoststandingpressure"]'));
		this.capturePhotoOfStandingPressureBtn = element(by.xpath("//*[@id='btn_CapStPr']/button"));
		this.workingPressureTextfield = element(by.xpath('//*[@id="gaspostworkingpressure"]'));
		this.capturePhotoOfWorkingPressureBtn = element(by.xpath("//div[@class='content-row ng-scope']//div[@class='content-row ng-scope']//div[@class='alignCenter']//button[@class='cameraBtn2line grey mandatoryWhite'][contains(text(),'CAPTURE')]"));
		this.postInstallGasTightnessTestNextBtn = element(by.xpath("//button[@id='btnNextPol']"));
		this.installKitNextSectionBtn = element(by.xpath("//button[@id='gasInstallPhoto_nextBtn']"));
		this.addAnotherAssetBtnInstallKitSection = element(by.xpath("//button[@id='gasInstallPhoto_addAssetBtn']"));
		this.gasApplianceSafetyChecksSectionText = element(by.xpath("//h4[contains(text(),'Gas Appliance Safety Checks')]"));
		this.isEarthBondingInstalledTrueRadioOption = element(by.xpath("//*[@id='radioraa1a']/following-sibling::span[@class='outer']"));
		this.landlordPropertyTrueRadioOption = element(by.xpath("//*[@id='radioraa3']/span[@class='outer']"));
		this.address1Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input1']"));
		this.address2Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input2']"));
		this.address3Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input3']"));
		this.address4Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input4']"));
		this.address5Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input5']"));
		this.address6Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input6']"));
		this.address7Textfield = element(by.xpath("//div[@class='content-row clear ng-scope']//input[@id='input7']"));
		this.addApplianceBtn = element(by.xpath("(//*[@id='btn1'])[1]"));
		this.flueTypeDropDownMenu = element(by.xpath("(//select[@id='select1'])[2]"));
		this.ventilationSatisfactoryTrueRadioOption = element(by.xpath("//*[@id='radioraa10']/following-sibling::span[@class='outer']"));
		this.carriedOutPurgeAndRelightGasApplianceTestTrueRadioOption = element(by.xpath("//*[@id='radioraa5a0']/following-sibling::span[@class='outer']"));
		this.applianceTypeDropDownMenu = element(by.xpath("(//select[@id='select2'])[2]"));
		this.applianceLocationDropDownMenu = element(by.xpath("(//select[@id='select3'])"));
		this.applianceConditionDropDownMenu = element(by.xpath("(//select[@id='select4'])"));
		this.applianceSafeToUseTrueRadioOption = element(by.xpath("//*[@id='radioraa50']/following-sibling::span[@class='outer']"));
		this.allAppliancesTestedBtn = element(by.xpath("//button[@id='btn_AllApp_tested']"));
		this.installPageSubmitBtn = element(by.xpath("//button[contains(text(),'SUBMIT')]"));
		//End of MArk changes
		this.pageHeaderText = element.all(by.xpath("//div[contains(@class,'header-text white tg ng-binding')]"));
		this.terminalScrewTightnessCheckedTrueRadioOption = element(by.xpath("//label[@id='rb_TermSTi_y']"));
		//#region TST22
		this.EmergencyJobN = element(by.xpath('//*[@id="rb_EmerJob_n"]/span[@class="outer"]'));
		this.regulatorTxt = element(by.xpath('//div[@id="lbl_SerNote"]'));
		//#region Install Comms Hub
		this.selectValidAssettoInstTRAD = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[2]'));
		this.installcommsHub = element(by.xpath('//div/h4[text()="Install Comms Hub"]'));
		this.commshubReqY = element(by.xpath('//*[@id="chubInstall_newChubRequired_y"]/span[@class="outer"]'));
		this.selectValid = element(by.xpath('//select[@id="chubInstall_selectAsset"]'));
		this.chfIDokenable = element(by.xpath('(//*[contains(text(),"CHF ID:")])[1]'));
		this.commshubWarning = element(by.xpath('//*[text()="OK"]'));
		this.CHFIDText = element(by.xpath('//*[@id="chubInstall_CHbarcode"]'));
		this.CHFIDTextList = element(by.xpath('((//select[@id="chubInstall_selectAsset"])/option)[2]'));
		this.assetSuccessAdded = element(by.xpath('//*[text()="OK"]'));
		this.commsHubLocation = element(by.xpath('//select[@id="chubInstall_chubLocationSelect"]'));
		this.Assetserialsmatchnext = element(by.xpath('//*[text()="next"]'));
		this.AssetaddedtoWallnewgas = element(by.xpath('//*[text()="OK"]'));
		this.CHF_ID_Txt = element(by.xpath('//*[contains(text(),"CHF ID:")]'));
		this.aerialY = element(by.xpath('//*[@id="chubInstall_aerialInstalled_y"]/span[@class="outer"]'));
		this.commshubconnmethodselect = element(by.xpath('//select[@id="chubInstall_connectionMethodSelect"]'));
		this.commshubPhoto = element(by.xpath('//*[@id="chubInstall_photoEvidence"]'));
		this.instCommshubNext = element(by.xpath('//*[@id="chubInstall_nextSectionBtn"]'));
		//#endregion
		this.selectValidAssettoInst1 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[3]'));
		this.gasmeterserialSendregList = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[3])/option)[2]'));
		this.gasmeterserialSendregList1 = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[2])/option)[2]'));
		this.CaptureMeterReadingenableok1 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register (null)")])[2]'));
		this.EUIenableOK1 = element(by.xpath('(//*[contains(text(),"EUI Device ID:")])[3]'));
		this.Tst13DummyHan = element(by.xpath('//*[@id="chnohanconnectedfalse"]/following-sibling::span[@class="outer"]'));
		this.selectValidAssettoInst2 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[2]'));
		// this.gasmeterserialSendregList2 = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[3])/option)[2]'));
		this.gasmeterserialSendregList2 = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[2])/option)[2]'));
		this.AddAppliance = element(by.xpath('(//*[@id="btn1"])[1]'));
		this.TightnessIssueN = element(by.xpath('//*[@id="gtp12"]/following-sibling::span[@class="outer"]'));
		this.PPMIDofferedNo = element(by.xpath('//*[@id="ihdPpmidOfferedfalse"]/following-sibling::span[@class="outer"]'));
		this.InstallPPMIDNotOfferedAddNote = element(by.xpath('(//*[@id="newihdppmid_textIhdPpmidNotOffered"])'));
		//TST15 FLTY 18 Non SMETS2
		this.Tst15selectValidAssettoInst = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[1]'));
		this.Tst15gasmeterserialSendregList = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[1])/option)[2]'));
		this.clksendMsgXCHUB = element(by.xpath('//div/h4[text()="SEND MESSAGE XCHUB"]'));
		this.SendXCHUBbtn = element(by.xpath('//*[@id="xchub_sendMessageButton"]'));
		this.AwaitingRespXCHUB = element(by.xpath('//*[text()="Awaiting Response"]'));
		this.AwaitingReqSent = element(by.xpath('//*[text()="Request Sent Successfully"]'));
		this.AwaitingWhiteList = element(by.xpath('//*[text()="Whitelist transfer completed check LED indication is correct"]'));
		this.remvSuccessful = element(by.xpath('//*[@id="xchub_nextButton"]'));
		this.NewGasMeterDtls = element(by.xpath('//div/h4[text()="New Gas Meter Details"]'));
		this.selectValidnewgas = element(by.xpath('//select[@id="gasNewMeter_assetSelect"]'));
		this.selectValidnewgasList = element(by.xpath('((//select[@id="gasNewMeter_assetSelect"])/option)[2]'));
		this.gasmeterserialSend = element(by.xpath('//*[@id="gasNewMeter_assetSerial"]'));
		this.Gas_Meter_Txt = element(by.xpath('//*[contains(text(),"Gas Meter Serial No(s):")]'));
		this.AssetaddedtoWall = element(by.xpath('//*[text()="OK"]'));
		this.GasnewMeterSelect = element(by.xpath('//select[@id="gasNewMeter_meterTypeSelect"]'));
		this.GasnewMeternewLocation = element(by.xpath('//select[@id="gasNewMeter_meterLocationSelect"]'));
		this.newRegulator = element(by.xpath('//div/h4[text()="New Regulator"]'));
		this.HasGasRegulatorReplacedY = element(by.xpath('//*[@id="regulator_replacedtrue"]/following-sibling::span[@class="outer"]'));
		this.selectValidAssettoInst = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[2]'));
		this.gasmeterserialSendreg = element(by.xpath('//*[@id="btn_RegSNum1"]'));
		this.RegularclickenableOK = element(by.xpath('//*[contains(text(),"Regulator Serial No(s)")]'));
		this.validAssetTxt = element(by.xpath('//div[text()="MA6NC181323805"]'));
		this.AssetaddedtowallNewReg = element(by.xpath('//*[text()="OK"]'));
		this.nextSecnewRegulator = element(by.xpath('//*[@id="newRegulator_nextButton"]'));
		this.GasInitialmeterReading = element(by.xpath('//div/h4[text()="Gas Initial Meter Reading"]'));
		this.captureMeterReadingSend = element(by.xpath('//*[@id="reg0"]'));
		this.CaptureMeterReadingenableok = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register (null)")]'));
		this.nextSecnewgasMeter = element(by.xpath('//*[@id="gasNewMeter_nextButton"]'));
		//Intall Kit
		this.InstKitCaption = element(by.xpath('//div/h4[text()="Install Kit"]'));
		this.InstallkitUsedY = element(by.xpath('//*[@id="gasInstallPhoto_installKit_y"]/span[@class="outer"]'));
		this.NonserializedassetSel = element(by.xpath('//select[@id="gasassetselect0"]'));
		this.T1Aerialinput = element(by.xpath('//*[@id="gasassetinput0"]'));
		this.Addanotherset = element(by.xpath('//*[@id="gasInstallPhoto_addAssetBtn"]'));
		this.NonserializedassetSel2 = element(by.xpath('//select[@id="gasassetselect1"]'));
		this.T1Aerialinput1 = element(by.xpath('//*[@id="gasassetinput1"]'));
		this.InstallKitNextSection = element(by.xpath('//*[@id="gasInstallPhoto_nextBtn"]'));
		//Post Installation
		this.postInstCaption = element(by.xpath('//div/h4[text()="Post Installation Gas Tightness Test"]'));
		this.ContactGTY = element(by.xpath('//*[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.NationalGridSend = element(by.xpath('//*[@id="input1"]'));
		this.HandSAirline = element(by.xpath('//*[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.Airlineref1 = element(by.xpath('(//*[@id="input2"])[1]'));
		this.GTAttendenceOnsiteY = element(by.xpath('//*[@id="gtp5"]/following-sibling::span[@class="outer"]'));
		this.GTresolveIssueY = element(by.xpath('//*[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.TightnessIssueY = element(by.xpath('//*[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.cappedgascooker = element(by.xpath('(//*[@id="work[$index]"]/following-sibling::span[@class="outer"])[2]'));
		this.addnlnote = element(by.xpath('//*[@id="text1"]'));
		this.ReplacedGasMeterY = element(by.xpath('//*[@id="gtp13"]/following-sibling::span[@class="outer"]'));
		this.ReplacedGasregulatorY = element(by.xpath('//*[@id="gtp15"]/following-sibling::span[@class="outer"]'));
		this.TightnessperformedY = element(by.xpath('//*[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.cappostinstallation = element(by.xpath('//*[@id="btn_CapPoTi_test"]/button'));
		this.Dropinpressure = element(by.xpath('//*[@id="gtp19"]/following-sibling::span[@class="outer"]'));
		this.dropinpressureselect = element(by.xpath('(//select[@id="select1"])[1]'));
		this.selectMeterType = element(by.xpath('(//select[@id="select2"])[1]'));
		this.GasTightnessPassed = element(by.xpath('//*[@id="gtp21"]/following-sibling::span[@class="outer"]'));
		this.TestWitness = element(by.xpath('//*[@id="input3"]'));
		this.standingPressure = element(by.xpath('//*[@id="gaspoststandingpressure"]'));
		this.cappostinstallationpressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[1]'));
		this.workingPressure = element(by.xpath('//*[@id="gaspostworkingpressure"]'));
		this.captureworkingPressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[2]'));
		this.captureFinalMeterInstall = element(by.xpath('(//*[@id="btn2"])[1]'));
		this.MsgreqDCC = element(by.xpath('//*[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.hubconnectdtoWAN = element(by.xpath('//*[@id="Cradionm1"]/following-sibling::span[@class="outer"]'));
		this.PostinstallNext = element(by.xpath('//*[@id="btnNextPol"]'));
		this.DCCGPFdevice = element(by.xpath('//*[contains(text(),"DCC Handover Requested for GPF Device")]'));
		this.DeviceClk = element(by.xpath('//*[contains(text(),"Device Clock Synchronised")]'));
		this.gasInstallcommisioningcaption = element(by.xpath('//div/h4[text()="Gas Install & Commissioning"]'));
		this.sendMsgGICOM = element(by.xpath('//*[@id="gicom_sendMessageButton"]'));
		this.awaitingresponse = element(by.xpath('(//*[text()="Awaiting Response"])'));
		//Gas Install & Commisioning
		this.reqsentSuccess = element(by.xpath('(//*[text()="Request Sent Successfully"])[2]'));
		this.pairAssettocommsHub = element(by.xpath('//*[contains(text(),"Pair Asset to Comms Hub")]'));
		this.Pairingsuccessful = element(by.xpath('//*[contains(text(),"Pairing Successful")]'));
		this.DCChandover = element(by.xpath('(//*[contains(text(),"DCC Handover Requested")])[2]'));
		this.MPRNsetconfig = element(by.xpath('//*[contains(text(),"MPRN Set, GSME Is Now Installed And Being Configured By DCC")]'));
		this.commisioningSuccessful = element(by.xpath('//*[@id="gicom_nextButton"]'));
		this.GasApplianceSafetychk = element(by.xpath('//*[contains(text(),"Gas Appliance Safety Checks")]'));
		//Gas Appliance Safety Checks
		this.earthBondingInstclk = element(by.xpath('//*[@id="radioraa1a"]/following-sibling::span[@class="outer"]'));
		this.LandlordPropclk = element(by.xpath('//*[@id="radioraa3"]/span[@class="outer"]'));
		this.Addresssend = element(by.xpath('(//*[@id="input1"])[2]'));
		this.AddApplianceclk = element(by.xpath('(//*[@id="btn1"])[1]'));
		this.FlueTypesel = element(by.xpath('(//select[@id="select1"])[2]'));
		this.ventSatclk = element(by.xpath('//*[@id="radioraa10"]/following-sibling::span[@class="outer"]'));
		this.carriedoutPurgeclk = element(by.xpath('//*[@id="radioraa5a0"]/following-sibling::span[@class="outer"]'));
		this.ApplianceTypesel = element(by.xpath('(//select[@id="select2"])[2]'));
		this.ApplianceLocsel = element(by.xpath('(//select[@id="select3"])'));
		this.ApplCondnsel = element(by.xpath('(//select[@id="select4"])'));
		this.AppsafetoUse = element(by.xpath('//*[@id="radioraa50"]/following-sibling::span[@class="outer"]'));
		this.AllapplTested = element(by.xpath('//*[@id="btn_AllApp_tested"]'));
		//Install PPMID
		this.InstallPPMIDCaption = element(by.xpath('//div/h4[text()="Install PPMID"]'));
		this.PPMIDoffered = element(by.xpath('//*[@id="ihdPpmidOfferedtrue"]/following-sibling::span[@class="outer"]'));
		this.PPMIDaccepted = element(by.xpath('//*[@id="newihdppmid_ihdOrPPMIDAccepted_a"]/span[@class="outer"]'));
		this.PPMIDLocsel = element(by.xpath('(//select[@id="newihdppmid_assetLocationSelect"])'));
		this.PPMIDtoInstallsel = element(by.xpath('(//select[@id="newihdppmid_assetSelect"])'));
		this.PPMIDtoInstallselList = element(by.xpath('((//select[@id="newihdppmid_assetSelect"])/option)[2]'));
		this.SerialNoText = element(by.xpath('(//*[@id="newihdppmid_assetSerialNumber"])'));
		this.EUIenableOK = element(by.xpath('(//*[contains(text(),"EUI Device ID:")])[2]'));
		this.AssetsuccessOKclk = element(by.xpath('//*[text()="OK"]'));
		this.InstallPPMIDNextSection = element(by.xpath('//*[@id="newihdppmid_nextButton"]'));
		//PPMID Commisioning
		this.PPMIDCommisioning = element(by.xpath('//div/h4[text()="PPMID Commissioning"]'));
		this.sendmsgIHDPPMID = element(by.xpath('(//*[@id="xittd2_sendMessageButton"])'));
		this.awaitingresponsePPMID = element(by.xpath('(//*[text()="Awaiting Response"])[2]'));
		//Awaiting Response after PPMID Commisioning
		this.ReqSent = element(by.xpath('(//*[text()="Request Sent Successfully"])[3]'));
		this.PairAssettoComms = element(by.xpath('(//*[text()="Pair Asset to Comms Hub"])[2]'));
		this.PairingSuccess = element(by.xpath('(//*[text()="Pairing Successful"])[2]'));
		//PPMID Commisioning Successful
		this.PPMIDSuccess = element(by.xpath('//*[text()="PPMID Commissioning Successful"]'));
		this.PPMIDcommsuccessfulbtn = element(by.xpath('//*[@id="xittd2_nextButton"]'));
		this.PPMIDSubmit = element(by.xpath('(//*[@id="btn1"])[2]'));
		this.DeviceBinding = element(by.xpath('//div/h4[text()="Device Binding & Commissioning"]'));
		//#endregion
		//FLTY20 - Duel Meter
		this.NewMeterDtls = element(by.xpath('//div/h4[text()="New Meter Details"]'));
		//New Meter details
		this.elecNewmeterselect = element(by.xpath('(//select[@id="newMeter_assetSelect"])'));
		this.elecNewmeterserial = element(by.xpath('(//*[@id="txt_Serial_Num"])[1]'));
		this.elecNewmeterserialList = element(by.xpath('((//select[@id="newMeter_assetSelect"])/option)[2]'));
		this.clkokEUIdev = element(by.xpath('//*[text()="OK"]'));
		this.EUIdeviceIDenableOK = element(by.xpath('(//*[text()="Elec Meter Serial No(s):"])[1]'));
		this.Manufacturerletter = element(by.xpath('(//*[contains(text(),"Manufacturer Letter:")])'));
		this.meterLocCode = element(by.xpath('(//select[@id="cbx_MetLocCode_sel"])'));
		this.certYearMonth = element(by.xpath('//*[@id="txt_Cert_year"]'));
		this.ElecNewmeterNext = element(by.xpath('//*[@id="btnNextPol"]'));
		this.additionalElecTestandChk = element(by.xpath('//div/h4[text()="Additional Electricity Tests & Checks"]'));
		this.TerminalscrewTightness = element(by.xpath('//*[@id="rb_TermSTi_y"]/span[@class="outer"]'));
		this.capTerminalscrews = element(by.xpath('(//*[@id="btn2"])[1]'));
		this.SealsIntactBlocks = element(by.xpath('//*[@id="rb_SealsInt_y"]/span[@class="outer"]'));
		this.AllPortsSealedText = element(by.xpath('(//*[contains(text(),"All Ports Sealed?")])'));
		this.AllPortsSealed = element(by.xpath('//*[@id="rb_PortsSealed_y"]/span[@class="outer"]'));
		this.SiemenscableMarkersInsTxt = element(by.xpath('(//*[contains(text(),"Approved Siemens Cable Markers Installed Correctly?")])'));
		this.SiemenscableMarkersIns = element(by.xpath('//*[@id="rb_SieCMark_y"]/span[@class="outer"]'));
		this.VisualInspectionCompleted = element(by.xpath('//*[@id="rb_VisInsCom_y"]/span[@class="outer"]'));
		this.cableMarkerSelect = element(by.xpath('//select[@id="cbx_CabMark_Sel"]'));
		this.EarthTypeSelect = element(by.xpath('//select[@id="cbx_EarType_Sel"]'));
		this.ReplacementMeterBoardY = element(by.xpath('//*[@id="rb_ReMetBoard_y"]/span[@class="outer"]'));
		this.MeterTailsChangedN = element(by.xpath('//*[@id="rb_MetTailChg_n"]/span[@class="outer"]'));
		this.ReplacementmainFuseY = element(by.xpath('//*[@id="rb_ReMainFuse_y"]/span[@class="outer"]'));
		this.EmergencyJobY = element(by.xpath('//*[@id="rb_EmerJob_y"]/span[@class="outer"]'));
		this.AdditionalTestChkNext = element(by.xpath('//*[@id="btn_Next_PostC"]'));
		this.ElecInitMeterReadingCap = element(by.xpath('//div/h4[text()="Elec Initial Meter Reading"]'));
		this.postInstallationChkCap = element(by.xpath('//div/h4[text()="Post Installation Checks"]'));
		this.CarryoutPolChkatMeterY = element(by.xpath('//*[@id="rb_CarOutPolCk_y"]/span[@class="outer"]'));
		this.AdditionalTextSend = element(by.xpath('//*[@id="postpolnotes"]'));
		this.PostInstallationText = element(by.xpath('//*[text()="PASS "]'));
		this.carryoutPolChksPluginTestDev = element(by.xpath('//select[@id="cbx_PolChkplg_sel"]'));
		this.ConfirmSocSafetyTestPassed = element(by.xpath('//*[@id="polp5"]/following-sibling::span[@class="outer"]'));
		this.testWitnessname = element(by.xpath('//*[@id="txt_TestWtn"]'));
		this.capmarindaleTestpostinst = element(by.xpath('//*[@id="btn_CapPhoMart_test"]'));
		this.capfinalmeterPostInst = element(by.xpath('//*[@id="btn_CapPhoFinMet_inst"]'));
		this.capCloseUpmeterplusWitnessSticker = element(by.xpath('//*[@id="btn_CapPhoCloUp_met"]'));
		this.commisioningCaption = element(by.xpath('//div/h4[text()="Commissioning"]'));

		// CGP added
		this.newRegulatorHeader = element(by.xpath('//*[@id="Title_newRegulator"]'));
		this.gasmeterserialSendregTRAD = element(by.xpath('//*[@id="btn_RegSNum1"]'));
		this.AssetaddedtowallTRAD = element(by.xpath('//button[@class = "confirm"]'));
		this.randomClickRegulator = element(by.xpath('//*[@id="lbl_SerNote"]'));

		//Commisioning
		this.NonSerializedAssetselect = element(by.xpath('//select[@id="Cselect4"]'));
		this.NonSerializedAssetSend = element(by.xpath('//*[@id="Cbar3"]'));

		this.addAnotherasset = element(by.xpath('//*[@id="Cbtn1"]'));
		this.NonSerializedAssetselect1 = element(by.xpath('(//select[@id="Cselect4"])[2]'));
		this.NonSerializedAssetSend1 = element(by.xpath('(//*[@id="Cbar3"])[2]'));
		this.mesgreqtoDCCY = element(by.xpath('//*[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.CommsHubconnectedtoWAN = element(by.xpath('//*[@id="Cradionm1"]/span[@class="outer"]'));
		this.CommNextSection = element(by.xpath('//*[@id="CbtnNextComm"]'));

		//Electric Install & Commissioning
		this.ElecInstallCommCap = element(by.xpath('//div/h4[text()="Electric Install & Commissioning"]'));

		//Send Message to EICOM
		this.sendmesgtoEICOM = element(by.xpath('//*[@id="eicom_sendMessageButton"]'));
		this.awaitingresponseEICOM = element(by.xpath('(//*[text()="Awaiting Response"])'));
		this.pairAssettoCommsHub = element(by.xpath('//*[text()="Pair Asset to Comms Hub"]'));
		this.DCChandover1 = element(by.xpath('//*[contains(text(),"DCC Handover Requested")]'));
		this.MPANSetbyDCC = element(by.xpath('//*[contains(text(),"MPAN Set, ESME Is Now Installed And Being Configured By DCC")]'));
		this.Joinsareinit = element(by.xpath('//*[contains(text(),"Joins are being Initiated")]'));
		this.EICOMcommsuccess = element(by.xpath('//*[@id="eicom_nextButton"]'));

		//Gas Initial meter reading
		//Post Install
		this.captureMeterReadingSend2 = element(by.xpath('(//*[@id="reg0"])[2]'));
		this.captureFinalMeterInstall1 = element(by.xpath('(//*[@id="btn2"])[2]'));
		this.MsgreqDCC1 = element(by.xpath('(//*[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"])[2]'));
		this.PostinstallNext1 = element(by.xpath('(//*[@id="btnNextPol"])[2]'));
		this.postGastightnessNxtbtn = element(by.xpath('//*[@id="btnNextPol"]'));

		this.selectValidAssettoInst1 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[3]'));
		this.gasmeterserialSendregList = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[3])/option)[2]'));
		this.gasmeterserialSendregList1 = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[2])/option)[2]'));

		this.CaptureMeterReadingenableok1 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register (null)")])[2]'));
		this.EUIenableOK1 = element(by.xpath('(//*[contains(text(),"EUI Device ID:")])[3]'));
		this.selectppmidtext = element(by.xpath('(//*[contains(text()," Select Valid PPMID To Install: ")])'));
		this.EUIenableOKTRAD = element(by.xpath('//*[contains(text(),"EUI Device ID:")]'));
		this.submitInstall = element(by.xpath('//div/button[text()="SUBMIT"]'));
		this.newGasmeterText = element(by.xpath('//*[@id="Title_gasNewMeter"]'));

		this.gasmeterSereal = element(by.xpath('//*[@id="gasNewMeter_assetSerial"]'));
		this.gasmeterSerealList = element(by.xpath('((//select[@id="gasNewMeter_assetSelect"])/option)[2]'));
		this.euDivText = element(by.xpath('//div[text()="EUI Device ID:"]'));
		this.readingText = element(by.xpath('//div[text()="Capture Meter Reading - Register (null):"]'));

		this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[1]'));
		this.infoOkButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.AssetsuccessOKclkTRAD = element(by.xpath('//button[@class="confirm"]'));
		this.PPMIDSubmitTRAD = element(by.xpath('//*[@id="btn1"]'));

		//CGP added 
		this.visualCheckPMEBonding = element(by.xpath('//*[@id="rb_VisCPMEBond_y"]'));
		this.emerJobNo = element(by.xpath('//*[@id="rb_EmerJob_n"]'));

		// CGP added for EX23
		this.newCommsHubReqN = element(by.xpath('//*[@id="chubInstall_newChubRequired_n"]'));

		//CGP INSTALL16
		this.PPMIDOfferedYes = element(by.xpath('//*[@id="ihdscan2_ihdPpmidOfferedtrue"]'));
		this.PPMIDAccepted = element(by.xpath('//*[@id="ihdscan2_ihdOrPPMIDAccepted_a"]'));
		this.PPMIDLOCDD = element(by.xpath('//*[@id="ihdscan2_assetLocationSelect"]'));
		this.PPMIDToInstall = element(by.xpath('//*[@id="ihdscan2_assetSelect"]'));
		this.inputPPMIDSerialNum = element(by.xpath('//*[@id="ihdscan2_assetSerialNumber"]'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.PPMIDTxt = element(by.xpath('//div[text()=" Select Valid PPMID To Install: "]'));
		this.ppmidAdditionalNote = element(by.xpath('//*[@id="ihdscan2_additionalNotes"]'));
		this.ppmidNXTBtn = element(by.xpath('//*[@id="ihdscan2_nextButton"]'));
		this.PPMIDCommText = element(by.xpath('//*[@id="Title_xittd2"]'));
		this.PPMIDinstallDDList = element(by.xpath('(//select[@id="ihdscan2_assetSelect"]/option)[2]'));
		this.randomEUDevicePPMID = element(by.xpath('//div[text()="EUI Device ID:"]'));

		//CGP added for MASter 22/09
		this.EUIenableOKTRAD1 = element(by.xpath('(//*[contains(text(),"EUI Device ID:")])[2]'));

		//#region IE Implementation

		this.selectValidAssettoInstLst = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[2])/option[@selected="selected"])[1]'));
		this.selectValidAssettoInst1Lst = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[3])/option[@selected="selected"])[1]'));
		this.selectValidAssettoInstTRADLst= element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[2])/option[@selected="selected"])[1]'));
		this.Tst15selectValidAssettoInstLst = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[1])/option[@selected="selected"])[1]'));

		this.brandicon = element(by.className("brand-icon"));
		this.menu = element(by.xpath('//*[@id="app"]/assettab/div/nav/label'));

		//#endregion
	}

	public async fillElecNewMeterDetails(index: number) {
		await utility.wait(utility.medium);
		if (await this.elecNewmeterselect.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.elecNewmeterselect, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await utility.wait(utility.medium);
			await this.elecNewmeterselect.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.elecNewmeterserial.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.elecNewmeterserialList.getAttribute('value');
			await utility.wait(utility.medium);
			generic.SendKeys(this.elecNewmeterserial, utility.medium, options);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.dummydiv, utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.infoOkButton, utility.medium);
			await utility.wait(utility.medium);
		}
	}

	public async fillElecnewmeterManufacturerdetails() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.meterLocCode, utility.medium, 'I');
		await utility.wait(utility.medium);
		generic.SendKeys(this.certYearMonth, utility.medium, '16/12');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ElecNewmeterNext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillinitmeterReadingGAS() {
		await utility.wait(utility.medium);
		if (await this.captureMeterReadingSend.isDisplayed()) {
			generic.SendKeys(this.captureMeterReadingSend, utility.medium, '12345');
			await utility.wait(utility.medium);
			generic.ButtonClick(this.readingText, utility.medium);
			await utility.wait(utility.medium);
		}
	}

	public async filltheduelforPPMIDsection(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDoffered, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDaccepted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.PPMIDLocsel, utility.medium, 'A');
		await utility.wait(utility.medium);
		if (await this.PPMIDtoInstallsel.isDisplayed()) {
			generic.ButtonClick(this.PPMIDtoInstallsel, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.SerialNoText.isDisplayed());
			var options = this.PPMIDtoInstallselList.getAttribute('value');
			generic.SendKeys(this.SerialNoText, utility.medium, options);
		}
		await utility.wait(utility.medium);
		generic.ButtonClick(this.selectppmidtext, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetsuccessOKclk, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.InstallPPMIDNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	// CGP added
	public async fillfieldsInstallcommshubTRAD(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.commshubReqY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.selectValid, utility.medium);
		await utility.wait(utility.medium);
		if (await this.selectValid.isDisplayed()) {
			await utility.wait(utility.Avg_low);
			generic.ButtonClick(this.selectValid, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await this.selectValid.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			generic.ButtonClick(this.commshubWarning, utility.medium);
			await utility.wait(utility.medium);
			await expect(await this.CHFIDText.isDisplayed());
			var options = this.CHFIDTextList.getAttribute('value');
			generic.SendKeys(this.CHFIDText, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		generic.ButtonClick(this.chfIDokenable, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.assetSuccessAdded, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.commsHubLocation, utility.medium, 'A');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.aerialY, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionbyLabel(this.commshubconnmethodselect, utility.medium, 'ESME');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.commshubPhoto, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.instCommshubNext, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added
	public async newregulatorTRAD() {
		await utility.wait(utility.medium);
		await this.newRegulatorHeader.getText().then(function (newRegulator1Txt) {
			utility.wait(utility.medium);
			console.log("New Regulator: " + newRegulator1Txt);
		});
	}

	/**
	 * Description : New GAS meter Details Text
	 * @Author Aparna Das
	 */

	public async gasMeterDetailsText() {
		await utility.wait(utility.medium);
		await this.newGasmeterText.getText().then(function (GAsmeterTxt) {
			utility.wait(utility.medium);
			console.log("New Gas MEter Text" + GAsmeterTxt);
		});
	}
	/**
		 * Description : New GAS meter Details Text
		 * @Author Aparna Das
		 */

	public async fillGasMeterDetails(index: number) {
		await utility.wait(utility.medium);
		if (await this.selectValidnewgas.isDisplayed()) {
			generic.ButtonClick(this.selectValidnewgas, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await this.selectValidnewgas.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterSereal.isDisplayed());
			var options = this.gasmeterSerealList.getAttribute('value');
			generic.SendKeys(this.gasmeterSereal, utility.medium, options);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.euDivText, utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.commshubWarning, utility.medium);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.GasnewMeterSelect, utility.medium, '0');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.GasnewMeternewLocation, utility.medium, '12');
		await utility.wait(utility.medium);
	}

	//TST13 FLTY 20 Changes

	public async Tst13fill40Commisioning() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.NonSerializedAssetselect1, utility.medium, '3');
		await utility.wait(utility.medium);

		generic.SendKeys(this.NonSerializedAssetSend1, utility.medium, '2');
		await utility.wait(utility.medium);
	}

	public async Tst13ElecFailedDummy() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.sendmesgtoEICOM, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Tst13DummyHan, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst13fillthefieldsforperformpostinst() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.TightnessIssueN, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);

		generic.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.TestWitness, utility.medium, 'Ellie Taylor');
		await utility.wait(utility.medium);

		generic.SendKeys(this.standingPressure, utility.medium, '1.1');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.captureFinalMeterInstall1, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.PostinstallNext1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async TST13InstallPPMIDbypass() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDofferedNo, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.InstallPPMIDNotOfferedAddNote, utility.medium, 'Bypassing to continue');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.InstallPPMIDNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	//TST15 FLTY 18

	public async TST15fillthefieldsfornewregulator(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HasGasRegulatorReplacedY, utility.medium);
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.Tst15selectValidAssettoInst, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.Tst15selectValidAssettoInst.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSendreg.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.Tst15selectValidAssettoInstLst.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
			await utility.wait(utility.medium);

		generic.ButtonClick(this.validAssetTxt, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst15fillthefieldsforperformpostinst() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.addnlnote, utility.medium, 'Gas Notes');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.TestWitness, utility.medium, "Ellie Taylor");
		await utility.wait(utility.medium);
		generic.SendKeys(this.standingPressure, utility.medium, "1.1");
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.workingPressure, utility.medium, "1.5");
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureFinalMeterInstall, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PostinstallNext, utility.medium);
		await utility.wait(utility.medium);
	}


	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async InstallCommsHubSection() {
		await utility.wait(utility.medium);
		await this.installcommsHub.getText().then(function (installcommsHubTxt) {
			utility.wait(utility.medium);
			console.log("Install comms Hub  " + installcommsHubTxt);
		});
	}

	public async fillfieldsInstallcommshub(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.commshubReqY, utility.medium);
		await utility.wait(utility.medium);

		if (await this.selectValid.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValid, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await this.selectValid.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			generic.ButtonClick(this.commshubWarning, utility.medium);
			await utility.wait(utility.medium);
			await expect(await this.CHFIDText.isDisplayed());
			var options = this.CHFIDTextList.getAttribute('value');
			generic.SendKeys(this.CHFIDText, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		await this.selectValid.element(by.css("option:nth-child(" + index + ")")).click();
		//generic.ButtonClick(this.selectValid, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.assetSuccessAdded, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.commsHubLocation, utility.medium, 'A');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.aerialY, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionbyLabel(this.commshubconnmethodselect, utility.medium, 'ESME');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.commshubPhoto, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.instCommshubNext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async sendmsgXCHUB() {
		await utility.wait(utility.medium);
		await this.clksendMsgXCHUB.getText().then(function (sendmsgXCHUBTxt) {
			utility.wait(utility.medium);
			console.log("Send message XCHUB " + sendmsgXCHUBTxt);
		});
	}
	public async clicksendmsgXCHUB() {
		await utility.wait(utility.medium);
		if (await this.SendXCHUBbtn.isDisplayed()) {
			generic.ButtonClick(this.SendXCHUBbtn, utility.medium);
			await utility.wait(utility.medium);
		}

	}

	/**
	 * @description New Regulator GAS
	 */
	public async fillNewRegulatorGas(index: number) {
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValidAssettoInst1, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectValidAssettoInst1.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSendreg.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.selectValidAssettoInst1Lst.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
			await utility.wait(utility.medium);

		generic.ButtonClick(this.RegularclickenableOK, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async SeeAwaitingresp() {
		await utility.wait(utility.medium);
		await this.AwaitingRespXCHUB.getText().then(function (AwaitingRespXCHUBTxt) {
			console.log("Awaiting Response for XCHUB " + AwaitingRespXCHUBTxt);
		});
	}

	public async waitforthebuttontoDisappear() {
		await utility.wait(utility.high);
	}
	public async Remosuccessful() {
		await utility.wait(utility.medium);
		await expect(this.remvSuccessful.isDisplayed());
	}
	public async reqsentMsg() {
		await utility.wait(utility.medium);
		await expect(this.AwaitingReqSent.isDisplayed());
	}
	public async LEDindication() {
		await utility.wait(utility.medium);
		await expect(this.AwaitingWhiteList.isDisplayed());
	}
	public async Remsuccessdisplayed() {
		await utility.wait(utility.medium);
		await this.remvSuccessful.getText().then(function (remvSuccessfulTxt) {
			utility.wait(utility.medium);
			console.log("Removed Successfully " + remvSuccessfulTxt);
		});
	}

	public async clickonremsuccess() {
		await utility.wait(utility.medium);

		if (await this.remvSuccessful.isDisplayed()) {
			generic.ButtonClick(this.remvSuccessful, utility.medium);
			await utility.wait(utility.medium);
		}
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async newregulator() {
		await utility.wait(utility.medium);
		await this.newRegulator.getText().then(function (newRegulatorTxt) {
			console.log("New Regulator: " + newRegulatorTxt);
		});
	}
	public async fillthefieldsfornewregulator(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HasGasRegulatorReplacedY, utility.medium);
		await utility.wait(utility.medium);

			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValidAssettoInst, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectValidAssettoInst.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSendreg.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.selectValidAssettoInstLst.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
			await utility.wait(utility.medium);

		generic.ButtonClick(this.RegularclickenableOK, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async gasMeterdetails() {
		await utility.wait(utility.medium);
		await this.NewGasMeterDtls.getText().then(function (NewGasMeterDtlsTxt) {
			console.log("New Gas Meter Details " + NewGasMeterDtlsTxt);
		});
	}

	public async fillthefieldsfornewgasmeterdtls(index: number) {
		if (await this.selectValidnewgas.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValidnewgas, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectValidnewgas.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSend.isDisplayed());
			var options = this.selectValidnewgasList.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSend, utility.medium, options);
			await utility.wait(utility.medium);
		}
	//	generic.ButtonClick(this.Gas_Meter_Txt, utility.medium);
		await this.selectValidnewgas.element(by.css("option:nth-child(" + index + ")")).click();
		await utility.wait(utility.medium);

		generic.ButtonClick(this.AssetaddedtoWallnewgas, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.GasnewMeterSelect, utility.medium, '0');
		await utility.wait(utility.medium);

		generic.SendKeys(this.GasnewMeternewLocation, utility.medium, '12');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.nextSecnewgasMeter, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async gasinitialmeterreading() {
		await utility.wait(utility.medium);
		await this.GasInitialmeterReading.getText().then(function (GasInitialmeterReadingTxt) {
			console.log("Gas Meter Reading " + GasInitialmeterReadingTxt);
		});
	}
	public async fillthefieldsforinitmeterReading() {
		await utility.wait(utility.medium);
		generic.SendKeys(this.captureMeterReadingSend, utility.medium, '12345');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.CaptureMeterReadingenableok, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async installkitSec() {
		await utility.wait(utility.medium);
		await this.InstKitCaption.getText().then(function (InstKitCaptionTxt) {
			console.log("Install Kit " + InstKitCaptionTxt);
		});
	}
	public async fillthedetailsforinstallkit() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.InstallkitUsedY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NonserializedassetSel, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.SendKeys(this.T1Aerialinput, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Addanotherset, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NonserializedassetSel2, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.SendKeys(this.T1Aerialinput1, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.InstallKitNextSection, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async performpostinst() {
		await utility.wait(utility.medium);
		await this.postInstCaption.getText().then(function (postInstCaptionTxt) {
			console.log("Post Installation Kit " + postInstCaptionTxt);
		});
	}

	public async fillthefieldsforperformpostinst() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.addnlnote, utility.medium, 'Gas Notes');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.SendKeys(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.TestWitness, utility.medium, 'Ellie Taylor');
		await utility.wait(utility.medium);

		generic.SendKeys(this.standingPressure, utility.medium, '1.1');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.captureFinalMeterInstall1, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.mesgreqtoDCCY, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.hubconnectdtoWAN, utility.medium);
		await utility.wait(utility.medium);

		generic.ButtonClick(this.PostinstallNext, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async gasInstallCommisioning() {
		await utility.wait(utility.medium);
		await this.gasInstallcommisioningcaption.getText().then(function (gasInstallcommisioningcaptionTxt) {
			console.log("Gas Install Commisioning " + gasInstallcommisioningcaptionTxt);
		});

	}
	public async sendMesgGICOM() {
		await utility.wait(utility.medium);
		if (await this.sendMsgGICOM.isDisplayed()) {
			generic.ButtonClick(this.sendMsgGICOM, utility.medium);
			await utility.wait(utility.medium);
		}
	}
	public async Awatingforgasinstallcommisioning() {
		await expect(this.awaitingresponse.isDisplayed());
	}
	public async waitforthebuttoDisappear() {
		await utility.wait(utility.medium);
	}
	public async commisioningsuccess() {
		await utility.wait(utility.medium);
		await expect(this.commisioningSuccessful.isDisplayed());
	}
	public async reqsentsuccess() {

		await utility.wait(utility.medium);
		await expect(this.reqsentSuccess.isDisplayed());
	}
	public async pairAsset() {
		try {
			await utility.wait(utility.medium);
			await expect(this.pairAssettocommsHub.isDisplayed());
		} catch (error) {
			console.log("First element is used");
		}
	}
	public async DCCHandoverText() {
		try {
			await utility.wait(utility.medium);
			await expect(this.DCChandover1.isDisplayed());
		} catch (error) {
			console.log("First element is used");
		}
	}
	public async DeviceClock() {
		try {
			await utility.wait(utility.medium);
			await expect(this.DeviceClk.isDisplayed());
		} catch (error) {
			console.log("First element is used");
		}
	}
	public async MprnGSME() {
		await utility.wait(utility.medium);
		await expect(this.MPRNsetconfig.isDisplayed());
	}
	public async DCCforGPFdevice() {
		await utility.wait(utility.medium);
		await expect(this.DCCGPFdevice.isDisplayed());
	}
	public async joinsarebeingInit() {
		await utility.wait(utility.medium);
	}
	public async commisioningSuc() {
		await utility.wait(utility.medium);
		await expect(this.commisioningSuccessful.isDisplayed());
	}
	public async clickonCommissioning() {
		await utility.wait(utility.medium);
		if (await this.commisioningSuccessful.isDisplayed()) {
			generic.ButtonClick(this.commisioningSuccessful, utility.medium);
			await utility.wait(utility.medium);
		}
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async gasApplicancesafety() {
		await utility.wait(utility.medium);
		await this.GasApplianceSafetychk.getText().then(function (GasApplianceSafetychkTxt) {
			console.log("Gas Safety Check " + GasApplianceSafetychkTxt);
		});
	}
	public async fillthefieldsforgasApplicancesafety() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.earthBondingInstclk, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.LandlordPropclk, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.Addresssend, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AddApplianceclk, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.FlueTypesel, utility.medium, '0');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ventSatclk, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.carriedoutPurgeclk, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.ApplianceTypesel, utility.medium, '0');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.ApplianceLocsel, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.ApplCondnsel, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AppsafetoUse, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AllapplTested, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async seePPMIDsection() {
		await utility.wait(utility.medium);
		await this.InstallPPMIDCaption.getText().then(function (InstallPPMIDCaptionTxt) {
			console.log("Install PPMID Caption " + InstallPPMIDCaptionTxt);
		});
	}
	public async fillthefieldsforseePPMIDsection(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDoffered, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDaccepted, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.PPMIDLocsel, utility.medium, 'A');
		await utility.wait(utility.medium);

		if (await this.PPMIDtoInstallsel.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.PPMIDtoInstallsel, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.SerialNoText.isDisplayed());
			var options = this.PPMIDtoInstallselList.getAttribute('value');
			generic.SendKeys(this.SerialNoText, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		generic.ButtonClick(this.EUIenableOK, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetsuccessOKclk, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.InstallPPMIDNextSection, utility.medium);
		await utility.wait(utility.medium);
	}
	/**
	 * @Author Jansi Victor
	 * @Description UAT Automation for FAULTY18 Workflow
	 */
	public async SeePPMIDcommisioning() {
		await utility.wait(utility.medium);
		await this.PPMIDCommisioning.getText().then(function (PPMIDCommisioningTxt) {
			console.log("PPMID Commisioning " + PPMIDCommisioningTxt);
		});
	}
	public async clickonIHDPPMID() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.sendmsgIHDPPMID, utility.medium);
		await utility.wait(utility.medium);
	}

	public async AwaitingrespaftPPMID() {
		await utility.wait(utility.medium);
		await expect(this.awaitingresponsePPMID.isDisplayed());
	}
	public async waitforthebuttontoDisappearafterppmid() {
		await utility.wait(utility.high);
	}
	public async ppmidsuccessbtn() {
		await utility.wait(utility.medium);
		await expect(this.PPMIDcommsuccessfulbtn.isDisplayed());
	}
	public async reqsentsuctxt() {
		await utility.wait(utility.medium);
		await expect(this.ReqSent.isDisplayed());
	}

	public async pairAssettoComms() {
		await utility.wait(utility.medium);
		await expect(this.PairAssettoComms.isDisplayed());
	}
	public async pairingsuccessfulppmidcomm() {
		try {
			await utility.wait(utility.medium);
			await expect(this.Pairingsuccessful.isDisplayed());
		} catch (error) {
			console.log("First element is used");
		}
	}
	public async clickonSUBbtn() {

		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDcommsuccessfulbtn, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDSubmit, utility.medium);
		await utility.wait(utility.medium);
	}


	public async deviceBindingandCommisioning() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.DeviceBinding, utility.medium);
		await utility.wait(utility.medium);
	}

	//FLTY18-Electric Faul
	public async fillfieldsElecInstallcommshub(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.commshubReqY, utility.medium);
		await utility.wait(utility.medium);

		if (await this.selectValid.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValid, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await this.selectValid.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			generic.ButtonClick(this.commshubWarning, utility.medium);
			await utility.wait(utility.medium);
			await expect(await this.CHFIDText.isDisplayed());
			var options = this.CHFIDTextList.getAttribute('value');
			generic.SendKeys(this.CHFIDText, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		generic.ButtonClick(this.chfIDokenable, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.assetSuccessAdded, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.commsHubLocation, utility.medium, 'A');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.aerialY, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.commshubconnmethodselect, utility.medium, '2');
		await utility.wait(utility.medium);

		generic.ButtonClick(this.commshubPhoto, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.instCommshubNext, utility.medium);
		await utility.wait(utility.medium);

	}
	//FLTY20 Changes
	public async DuelNewMeterDetails() {
		await utility.wait(utility.medium);
		await this.NewMeterDtls.getText().then(function (NewMeterDtlsTxt) {
			console.log("New Meter Details " + NewMeterDtlsTxt);
		});
	}

	public async fillDuelNewMeterDetails(index: number) {
		if (await this.elecNewmeterselect.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.elecNewmeterselect, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			await this.elecNewmeterselect.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.elecNewmeterserial.isDisplayed());
			var options = this.elecNewmeterserialList.getAttribute('value');
			generic.SendKeys(this.elecNewmeterserial, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		await this.elecNewmeterselect.element(by.css("option:nth-child(" + index + ")")).click();
		//generic.ButtonClick(this.EUIdeviceIDenableOK, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.clkokEUIdev, utility.medium);
		await utility.wait(utility.medium);
		await expect(this.Manufacturerletter.isDisplayed());
	}

	public async DuelManufacturerdetails() {
		await utility.wait(utility.medium);
		await expect(this.Manufacturerletter.isDisplayed());
	}

	public async fill33DuelManufacturerdetails() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.meterLocCode, utility.medium, 'I');
		await utility.wait(utility.medium);
		generic.SendKeys(this.certYearMonth, utility.medium, '16/12');
		await utility.wait(utility.medium);
	}

	public async NewMeterNextsection() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ElecNewmeterNext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async AdditionalElecTestandChecks() {
		await utility.wait(utility.medium);
		await this.additionalElecTestandChk.getText().then(function (additionalElecTestandChkTxt) {
			console.log("Additional electricity Test and Checks" + additionalElecTestandChkTxt);
		});
	}

	public async fill34AdditionalElecTestandChecks() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TerminalscrewTightness, utility.medium);
		await utility.wait(utility.medium);
	}

	public async AdditionalTerminalscrewCapturePhoto() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capTerminalscrews, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fill35AdditionalElecTestandChecks() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.SealsIntactBlocks, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AllPortsSealed, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.SiemenscableMarkersIns, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.VisualInspectionCompleted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.cableMarkerSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.EarthTypeSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacementMeterBoardY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.MeterTailsChangedN, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacementmainFuseY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.EmergencyJobY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async additionaltestNext() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AdditionalTestChkNext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async ElecInitialMeterReading() {
		await utility.wait(utility.medium);
		await this.ElecInitMeterReadingCap.getText().then(function (ElecInitMeterReadingCapTxt) {
			console.log("Elec Initial Meter Reading" + ElecInitMeterReadingCapTxt);
		});
	}

	public async PostInstallationChks() {
		await utility.wait(utility.medium);
		await this.postInstallationChkCap.getText().then(function (postInstallationChkCapTxt) {
			console.log("Post Installation Checks" + postInstallationChkCapTxt);
		});
	}

	public async fill37PostInstallationChks() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.CarryoutPolChkatMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.AdditionalTextSend, utility.medium, 'Polarity check comments');
		await utility.wait(utility.medium);

	}

	public async PostInstallationChksCont() {
		await utility.wait(utility.medium);
		await expect(this.PostInstallationText.isDisplayed());
		console.log("Post Installation Page Content Displayed")
		await utility.wait(utility.medium);
	}

	public async fill38PostInstallationChks() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.carryoutPolChksPluginTestDev, utility.medium, 'true');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ConfirmSocSafetyTestPassed, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.testWitnessname, utility.medium, 'Jonny Vegas');
		await utility.wait(utility.medium);
	}

	public async captureteststicker() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capmarindaleTestpostinst, utility.medium);
		await utility.wait(utility.medium);
	}

	public async captureFinalMeterInst() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capfinalmeterPostInst, utility.medium);
		await utility.wait(utility.medium);
	}
	public async captureteststickecloseup() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capCloseUpmeterplusWitnessSticker, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Commisioning() {
		await utility.wait(utility.medium);
		await this.commisioningCaption.getText().then(function (commisioningCaptionTxt) {
			console.log("Commisioning " + commisioningCaptionTxt);
		});
	}

	public async fill39Commisioning() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.NonSerializedAssetselect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.SendKeys(this.NonSerializedAssetSend, utility.medium, '1');
		await utility.wait(utility.medium);
	}

	public async DueladdanotherSet() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.addAnotherasset, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fill40Commisioning() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.NonSerializedAssetselect1, utility.medium, '3');
		await utility.wait(utility.medium);
		generic.SendKeys(this.NonSerializedAssetSend1, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.mesgreqtoDCCY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.CommsHubconnectedtoWAN, utility.medium);
		await utility.wait(utility.medium);
	}

	public async CommisioningClickNext() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.CommNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	public async ElecInstallCommisioning() {
		await utility.wait(utility.medium);
		await this.ElecInstallCommCap.getText().then(function (ElecInstallCommCapTxt) {
			console.log("Electric Install Commisioning" + ElecInstallCommCapTxt);
		});
	}
	public async clicksendmsgEICOM() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.sendmesgtoEICOM, utility.medium);
		await utility.wait(utility.medium);
	}

	public async SeeEICOMAwaitingresp() {
		await utility.wait(utility.medium);
		await this.awaitingresponseEICOM.getText().then(function (awaitingresponseEICOMTxt) {
			console.log("Awaiting Response for EICOM " + awaitingresponseEICOMTxt);
		});
	}

	public async waitEICOMbuttontoDisappear() {
		await utility.wait(utility.high);
	}
	public async PairAssettoCommsHub() {
		await utility.wait(utility.medium);
		await expect(this.pairAssettoCommsHub.isDisplayed());
	}
	public async MPANSetbyDCCText() {
		await utility.wait(utility.medium);
		await expect(this.MPANSetbyDCC.isDisplayed());
	}
	public async JoinsareinitText() {
		await utility.wait(utility.medium);
		await expect(this.Joinsareinit.isDisplayed());
	}

	public async Seecommisionsuccessbutton() {
		await utility.wait(utility.medium);
		await expect(this.EICOMcommsuccess.isDisplayed());
	}

	public async clickSeecommisionsuccessbutton() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.EICOMcommsuccess, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillthefieldsforinitmeterReadingduel() {
		await utility.wait(utility.medium);
		generic.SendKeys(this.captureMeterReadingSend2, utility.medium, '12345');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.CaptureMeterReadingenableok1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillNoExchangePerformPostInst() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.addnlnote, utility.medium, 'Gas Notes');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.TestWitness, utility.medium, 'Ellie Taylor');
		await utility.wait(utility.medium);
		generic.SendKeys(this.standingPressure, utility.medium, '1.1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureFinalMeterInstall1, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.postGastightnessNxtbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillthefieldsforperformpostinstduel() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.Airlineref1, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.addnlnote, utility.medium, 'Gas Notes');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.TestWitness, utility.medium, 'Ellie Taylor');
		await utility.wait(utility.medium);
		generic.SendKeys(this.standingPressure, utility.medium, '1.1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureFinalMeterInstall1, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.MsgreqDCC1, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PostinstallNext1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillfornewregulator(index: number) {
		await utility.wait(utility.medium);

			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValidAssettoInst, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectValidAssettoInst.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSendreg.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.selectValidAssettoInstLst.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
			await utility.wait(utility.medium);

		browser.executeScript('arguments[0].scrollIntoView()', this.validAssetTxt.getWebElement());
		generic.ButtonClick(this.validAssetTxt, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillduelfornewregulator(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HasGasRegulatorReplacedY, utility.medium);
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValidAssettoInst1, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectValidAssettoInst1.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSendreg.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.selectValidAssettoInst1Lst.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
			await utility.wait(utility.medium);
		//generic.ButtonClick(this.RegularclickenableOK, utility.medium);
		await this.selectValidAssettoInst1.element(by.css("option:nth-child(" + index + ")")).click();
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}



	//Tst12 FLTY GAS

	public async Tst12fillthefieldsforperformpostinst() {

		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.addnlnote, utility.medium, 'Gas Notes');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.TestWitness, utility.medium, 'Ellie Taylor');
		await utility.wait(utility.medium);
		generic.SendKeys(this.standingPressure, utility.medium, '1.1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureFinalMeterInstall, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PostinstallNext, utility.medium);
		await utility.wait(utility.medium);
	}
	public async Tst12submittoJobcompletion() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDSubmit, utility.medium);
		await utility.wait(utility.medium);
	}


	//CGP ADDED 11/09
	public async filltheduelforseePPMIDsectionTRAD(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDoffered, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDaccepted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.PPMIDLocsel, utility.medium, 'A');
		await utility.wait(utility.medium);
		if (await this.PPMIDtoInstallsel.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.PPMIDtoInstallsel, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.SerialNoText.isDisplayed());
			var options = this.PPMIDtoInstallselList.getAttribute('value');
			generic.SendKeys(this.SerialNoText, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		generic.ButtonClick(this.EUIenableOKTRAD1, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetsuccessOKclk, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.InstallPPMIDNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added

	public async fillduelfornewregulatorTRAD(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HasGasRegulatorReplacedY, utility.medium);
		await utility.wait(utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.selectValidAssettoInstTRAD, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.selectValidAssettoInstTRAD.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.gasmeterserialSendregTRAD.isDisplayed());
			await utility.wait(utility.medium);
			var options = this.selectValidAssettoInstTRADLst.getAttribute('value');
			generic.SendKeys(this.gasmeterserialSendregTRAD, utility.medium, options);
			await utility.wait(utility.medium);

		generic.ButtonClick(this.randomClickRegulator, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}

	public async filltheduelforseePPMIDsection(index: number) {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDoffered, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDaccepted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.PPMIDLocsel, utility.medium, 'A');
		await utility.wait(utility.medium);
		if (await this.PPMIDtoInstallsel.isDisplayed()) {
			await utility.wait(utility.medium);
			generic.ButtonClick(this.PPMIDtoInstallsel, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(1000);
			console.log("Selecting element based index : " + index);
			// select the option
			await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
			await utility.wait(utility.medium);
			await expect(await this.SerialNoText.isDisplayed());
			var options = this.PPMIDtoInstallselList.getAttribute('value');
			generic.SendKeys(this.SerialNoText, utility.medium, options);
			await utility.wait(utility.medium);
		}
		await utility.wait(utility.medium);
		await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
		//generic.ButtonClick(this.EUIenableOK1, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AssetsuccessOKclk, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.InstallPPMIDNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonSUBbtnTRAD() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDcommsuccessfulbtn, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDSubmitTRAD, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonCommissioningTRAD() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.EICOMcommsuccess, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added for INST16

	public async fillAdditionalElecCheckDetailsINST16() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.visualCheckPMEBonding, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TerminalscrewTightness, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillAdditionalElecTestandChecksInst16() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.SealsIntactBlocks, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AllPortsSealed, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.SiemenscableMarkersIns, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.VisualInspectionCompleted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.cableMarkerSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.EarthTypeSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacementMeterBoardY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.MeterTailsChangedN, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacementmainFuseY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.emerJobNo, utility.medium);
		await utility.wait(utility.medium);
	}
	//TST22 FLTY18

	public async TST22fill35AdditionalElecTestandChecks() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.SealsIntactBlocks, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.AllPortsSealed, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.SiemenscableMarkersIns, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.VisualInspectionCompleted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.cableMarkerSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.EarthTypeSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacementMeterBoardY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.MeterTailsChangedN, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacementmainFuseY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.EmergencyJobN, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst22fill40Commisioning() {
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.NonSerializedAssetselect1, utility.medium, '3');
		await utility.wait(utility.medium);
		generic.SendKeys(this.NonSerializedAssetSend1, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.CommsHubconnectedtoWAN, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst22fillthefieldsforperformpostinstduel() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.addnlnote, utility.medium, 'Gas Notes');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.TestWitness, utility.medium, 'Ellie Taylor');
		await utility.wait(utility.medium);
		generic.SendKeys(this.standingPressure, utility.medium, '1.1');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.captureFinalMeterInstall1, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PostinstallNext1, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added for EX23

	public async fillfieldsInstallcommshubEX23() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.newCommsHubReqN, utility.medium);
		await utility.wait(utility.medium);

		// Next Section Button
		await utility.wait(utility.medium);
		generic.ButtonClick(this.instCommshubNext, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added for INSTALL16

	public async fillPPMIDSectionInst16(index: number) {
		generic.ButtonClick(this.PPMIDOfferedYes, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.PPMIDaccepted, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.PPMIDLOCDD, utility.medium, 'A');
		await utility.wait(utility.medium);
		if (await this.PPMIDToInstall.isDisplayed()) {
			await utility.wait(utility.medium);
			// click the dropdown
			generic.ButtonClick(this.PPMIDToInstall, utility.medium);
			await utility.wait(utility.medium);
			browser.sleep(5000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await this.PPMIDToInstall.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.medium);
			await expect(await this.inputPPMIDSerialNum.isDisplayed());
			var options = this.PPMIDinstallDDList.getAttribute('value');
			generic.SendKeys(this.inputPPMIDSerialNum, utility.medium, options);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.randomEUDevicePPMID, utility.medium);
			await utility.wait(utility.medium);
			generic.ButtonClick(this.infoOKButton, utility.medium);
			await utility.wait(utility.medium);
		}
		generic.SendKeys(this.ppmidAdditionalNote, utility.medium, 'Aditional Notes CGP');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.ppmidNXTBtn, utility.medium);
		await utility.wait(utility.medium);
	}
	//-------------------------

	public async PPMIDCommisioningdisplay() {
		await utility.wait(utility.medium);
		if (this.PPMIDCommText.isDisplayed()) {
			await this.PPMIDCommText.getText().then(function (PPMIDCommText) {
				console.log("find PPMIDCommText Text  " + PPMIDCommText);
			});
		}
	}

	//Marks Changes

	public async isH1HeaderPresentInstallPage() {
		await utility.wait(utility.medium);
		this.pageHeaderText.count().then(function (pageHeaderCount) {
			console.log("Arrived at : Install Page");
		});
	}

	public async FillPostGAsInstallDetailsFLTY20NoEx() {
		await utility.wait(utility.medium);
		generic.ButtonClick(this.didYouHaveToContactGTTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.nationalGridGIJobRefTextfield, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.reportedIncidentToHAndSAIRLineTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.aIRLineRefTextfield, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.needToWaitForTheGTAttendanceOnSiteTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.gTResolveIssueTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.didYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.additionalNotesTextfield, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.haveYouReplacedGasMeterTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.haveYouReplacedRegulatorTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.postInstallationGasTightnessTestPerformedTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capturePhotoOfWitnessStickerAndUGaugeBtn, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.wasThereADropInPressureTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.enterDIPGasPressureDropDownMenu, utility.medium, '3');
		await utility.wait(utility.medium);
		generic.DropDownOptionClick(this.selectMeterTypeDropDownMenu, utility.medium, '3');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.gasTightnessTestPassedTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);

		generic.SendKeys(this.testWitnessNameTxtfieldPostInstallGasTightnessForm, utility.medium, 'Ellie Witness');
		await utility.wait(utility.medium);
		generic.SendKeys(this.standingPressureTextfield, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capturePhotoOfStandingPressureBtn, utility.medium);
		await utility.wait(utility.medium);
		generic.SendKeys(this.workingPressureTextfield, utility.medium, '2');
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capturePhotoOfWorkingPressureBtn, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.capturePhotoOfFinalMeterInstallBtn2, utility.medium);
		await utility.wait(utility.medium);
		generic.ButtonClick(this.postInstallGasTightnessTestNextBtn, utility.medium);
		await utility.wait(utility.medium);
	}
}