/**
 * @description :Abort Functionalities
 * @author :Aparna
 */

import {
	element, browser,
	by,
	ElementFinder,
	ElementArrayFinder
} from "protractor";
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
const utility: Utility = new Utility();

import {
	AppointmentListPageObject
} from "../pages/AppointmentListPage";
import {
	GenericPageObject
} from "../pages/GenericPage"
import {
	DoorStepPageObject
} from "../pages/DoorStepPage";
import {
	RiskAssessmentPageObject
} from "../pages/RiskAssessmentPage";
import {
	InstallPageObject
} from "../pages/InstallPage";
import {
	RemovePageObject
} from "../pages/RemovePage";
import {
	JobCompletionPageObject
} from "../pages/JobCompletionPage";


const applist: AppointmentListPageObject = new AppointmentListPageObject();
const door: DoorStepPageObject = new DoorStepPageObject();
const risk: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const inst: InstallPageObject = new InstallPageObject();
const remove: RemovePageObject = new RemovePageObject();
const job: JobCompletionPageObject = new JobCompletionPageObject();
const Gen: GenericPageObject = new GenericPageObject();

export class AbortPageObject {


	//Abort ElementFinder Appointment List#######
	public abortNoAccessContactMade: ElementFinder;
	public notConvinientRadioBtn: ElementFinder;
	public abortNxtbtn: ElementFinder;
	public abortAddNotes: ElementFinder;
	public abortCapturePhoto: ElementFinder;
	public abortAppointment: ElementFinder;
	public reScanPopUpOK: ElementFinder;
	public appointmentRescheduledNo: ElementFinder;
	public appointmentconfirmationNo: ElementFinder;
	//###########ABORT Doorstep#############
	public accessToSiteN: ElementFinder;
	public captureNoAcess: ElementFinder;
	public suspendJobYes: ElementFinder;
	public suspendJobNo: ElementFinder;
	public AddNotesSuspend: ElementFinder;
	public suspendJobBtn: ElementFinder;
	public reScheduleAppointNo: ElementFinder;
	public abortNoAcessBtn: ElementFinder;
	//##############Risk Assessment Page ######
	public OKtoProceedEGPOutcomeN: ElementFinder;
	public riskAssessAbort: ElementFinder;
	public unabletoOffGasOption: ElementFinder;

	//################## Risk Assess Elec ##############
	public capturePhotoAbortElec: ElementFinder;
	public updatedHnSY: ElementFinder;
	public airlineRefInput: ElementFinder;
	public updateDNOY: ElementFinder;
	public dnoInput: ElementFinder;
	public workCanbeCompletedN: ElementFinder;
	public addNotes: ElementFinder;
	public elecAbortBtn: ElementFinder;
	public reasonforAbort: ElementFinder;
	public abortElecNxtBtn: ElementFinder;
	public AbortElecNotes: ElementFinder;
	public stayOnSiteN: ElementFinder;
	public submitRisk: ElementFinder;
	//################## Risk Assess Gas ##############
	public capturemeterPressureMed: ElementFinder;
	public medPressureNo: ElementFinder;
	public abortGas: ElementFinder;
	public gasabortAppointment: ElementFinder;
	public abortbtnfail: ElementFinder;
	public gasabortApp: ElementFinder;

	public AssetaddedtowallNewReg: ElementFinder;
	public nextSecnewRegulator: ElementFinder;
	public gasmeterserialSendreg: ElementFinder;
	public selectValidAssettoInst1: ElementFinder;
	public selectValidAssettoInst2: ElementFinder;

	//#####END#######
	//############# PRE GAS Abort###########
	public preGASinstallN: ElementFinder;
	public abortGASMeterBtn: ElementFinder;

	// I&L Post Installation Gas Tightness
	public contactGTYEs: ElementFinder;
	public GAStightnessTestYes: ElementFinder;
	public GasTightnessTestPerformedYes: ElementFinder;
	public nationalGTRefInput: ElementFinder;
	public reportedToHSYEsGas: ElementFinder;
	public inputAirLineRefGAS: ElementFinder;
	public gtAttendanceOnSiteYes: ElementFinder;
	public gtResolveIssueGas: ElementFinder;
	public AdditionalWorktoPassYesGAS: ElementFinder;
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
	public polNxtBtn_1: ElementFinder;
	public commsHubConnectedNo_1: ElementFinder;

	// *****************************I&L Commisioning elements**************************/
	public nonserealizedAssetDD: ElementFinder;
	public nonserealizedAssetInput: ElementFinder;
	public dccmsgRequired: ElementFinder;
	public commHubConnected_FLTY: ElementFinder;
	public commsHubConnectedNo: ElementFinder;
	public commissioningNxtBtn: ElementFinder;
	public commissioningNxtBtn_FLTY: ElementFinder;
	public replacecommshubNowan: ElementFinder;
	public commshubReplacedyes: ElementFinder;
	public commshubToInstall: ElementFinder;
	public CHFID: ElementFinder;
	public replacecommshubNowan_1: ElementFinder;
	public commshubReplacedyes_1: ElementFinder;
	public commshubToInstall_1: ElementFinder;
	public CHFID_1: ElementFinder;
	public infoOKButton: ElementFinder;
	public commshubLocation: ElementFinder;
	public aerialInstalled: ElementFinder;
	public commshubConnectionMethod: ElementFinder;
	public cradleSerialNo: ElementFinder;
	public replacecommsCapturePhoto: ElementFinder;
	public replacecommsnonserealizedAssetDD: ElementFinder;
	public replacecommsnonserealizedAssetInput: ElementFinder;
	public replacecommscommsHubConnectedNo: ElementFinder;
	public replacecommsPremiseType: ElementFinder;
	public metalObstructionYes: ElementFinder;
	public sharedObstructionNo: ElementFinder;
	public connectivityObstructionNo: ElementFinder;
	public confirmInstallAndLeaveYes: ElementFinder;
	public commshubLocation_1: ElementFinder;
	public aerialInstalled_1: ElementFinder;
	public commshubConnectionMethod_1: ElementFinder;
	public cradleSerialNo_1: ElementFinder;
	public replacecommsCapturePhoto_1: ElementFinder;
	public replacecommscommsHubConnectedNo_1: ElementFinder;
	public replacecommsPremiseType_1: ElementFinder;
	public metalObstructionYes_1: ElementFinder;
	public sharedObstructionNo_1: ElementFinder;
	public connectivityObstructionNo_1: ElementFinder;
	public confirmInstallAndLeaveYes_1: ElementFinder;
	public assetsUnaffectedYes: ElementFinder;
	public replacecommsNextButton: ElementFinder;
	public commshubPopup: ElementFinder;
	public selectinstallAssetOption: ElementFinder;
	public selectinstallAssetOption_1: ElementFinder;
	public dummydiv: ElementFinder;
	public dummydiv2: ElementFinder;
	public dummydiv3: ElementFinder;
	public replacecommsPremiseTypeOption: ElementFinder;
	public elecMeterSubmit: ElementFinder;
	public elecInstallSubmit: ElementFinder;
	public gasMeterSubmit: ElementFinder;
	public ppmidNXTBtn: ElementFinder;
	public ppmidNXTBtn_1: ElementFinder;
	public devicebindingNextSection: ElementFinder;
	public configureallmetersNextSection: ElementFinder;
	public replacecommsNextButton_1: ElementFinder;
	public dummydiv1: ElementFinder;
	public gasbuttonSubmit: ElementFinder;
	public gasNMEXbuttonSubmit: ElementFinder;
	public newregulatorReplaced: ElementFinder;

	//####Abrt for I&L Job completion page####################

	public PPMIDOfferedNo: ElementFinder;
	public PPMIDAddNotes: ElementFinder;
	public PPMIDOfferedNo_1: ElementFinder;
	public PPMIDAddNotes_1: ElementFinder;
	public gasAndElecMeterN: ElementFinder;
	public fullHanDeviceNo: ElementFinder;
	public fullWanAllmeterNo: ElementFinder;
	public fullconfigElecApplyNo: ElementFinder;
	public AbortElecMeter: ElementFinder;

	//###############Reason Popup Elemenst##########
	public AbortNoAccessReasonCodes: ElementFinder;
	public GenericReasonCodeSelect: ElementFinder;

	public smartLitLeftNo: ElementFinder;
	public additionalInfo: ElementFinder;
	public demoEquipment: ElementFinder;
	public smartNoLitLeftOnsiteTxt: ElementFinder;
	public gsmeJoinedYes: ElementFinder;
	public esmeJoinedNo: ElementFinder;
	public devicebindnext: ElementFinder;

	//******************* */ I & L Remove Page Elements***********************/
	public RemoveElecAssetrplacedorremoved: ElementFinder;
	public RemoveElecAssetrplacedorremoved1: ElementFinder;
	public statusofElecAssetSelect: ElementFinder;
	public statusofAssetSelect: ElementFinder;
	public removedmeterReading: ElementFinder;
	public randomClick2: ElementFinder;
	public randomClick: ElementFinder;
	public RemoveGasAssetrplacedorremoved: ElementFinder;
	public removedgasmeterreading: ElementFinder;
	public captureMeterReadingSend2: ElementFinder;
	public captureFinalMeterInstall1: ElementFinder;

	//******************** */ I & L Install Page Elements
	public installKitUsedYes1: ElementFinder;
	public nonSerialisedAsssetsDD1: ElementFinder;
	public assetInput1: ElementFinder;
	public installKitNxtBtn1: ElementFinder;

	//************************* */ I & L FLTY Elements
	public commshubconnectedtoSupply: ElementFinder;
	public commshubconnectedtoSupplyY: ElementFinder;
	public commshubconnectedtoSWan: ElementFinder;
	public commshubconnectedtoWanY: ElementFinder;
	public commshubconnectedtoAsset: ElementFinder;
	public commshubconnectedtoAssetY: ElementFinder;

	//****************************** */ I & L Fill Gas Safety 
	public earthBondingYEs: ElementFinder;
	public landLordPropertyNo: ElementFinder;
	public allAppliTestedBtn: ElementFinder;
	public submitGas: ElementFinder;
	public ContactGTY: ElementFinder;
	public NationalGridSend: ElementFinder;
	public HandSAirline: ElementFinder;
	public GTAttendenceOnsiteY: ElementFinder;
	public GTresolveIssueY: ElementFinder;
	public TightnessIssueY: ElementFinder;
	public cappedgascooker: ElementFinder;
	public addnlnote: ElementFinder;
	public ReplacedGasMeterY: ElementFinder;
	public ReplacedGasregulatorY: ElementFinder;
	public Airlineref1: ElementFinder;
	public TightnessperformedY: ElementFinder;
	public cappostinstallation: ElementFinder;
	public Dropinpressure: ElementFinder;
	public dropinpressureselect: ElementFinder;
	public GasTightnessPassed: ElementFinder;
	public TestWitness: ElementFinder;
	public standingPressure1: ElementFinder;
	public cappostinstallationpressure: ElementFinder;
	public workingPressure: ElementFinder;
	public captureworkingPressure: ElementFinder;
	public captureFinalMeterInstall: ElementFinder;
	public MsgreqDCC: ElementFinder;
	public hubconnectdtoWAN: ElementFinder;
	public PostinstallNext: ElementFinder;
	public selectMeterType: ElementFinder;

	//########################## CGP added for Pre gas test#############
	public abortBtn: ElementFinder;
	public abortApntButton: ElementFinder;
	public abortPreGas: ElementFinder;
	public buttonTextVal: ElementFinder;
	public AbortGasMeterReasonCodes: ElementFinder;
	public RescanAssetPopUp: ElementFinder;
	public checkDetails: ElementFinder;
	public fullConfigAppliedPPMIDYesAbort: ElementFinder;
	public FullWANYes: ElementFinder;
	public FullCOnfigAppliedElecYes: ElementFinder;
	public fullConfigAppliedGasYes: ElementFinder;
	public fullConfigAppliedPPMIDYes: ElementFinder;
	public capturePPMIDBtn: ElementFinder;
	public PPMIDNxtBtn: ElementFinder;
	public nextButtonWAN: ElementFinder;
	public btnnext1: ElementFinder;
	public Tst22removedmeterReading: ElementFinder;
	public Tst22removemeterText: ElementFinder;
	public Tst22RemoveMeterEnNxt: ElementFinder;
	public Tst22RemoveNxtEnable: ElementFinder;
	public randomClickEX23: ElementFinder;
	public nextbtntoRemfromElec: ElementFinder;



	constructor() {
		//Abort Elements Appointment List########
		this.appointmentRescheduledNo = element(by.xpath('//*[@id="rb_app_re_n"]/span'));
		this.abortNoAccessContactMade = element(by.xpath('//*[@id = "btn_call_fwd_abort"]'));
		this.notConvinientRadioBtn = element(by.xpath('//label/div[@id="abdradio1"]'));
		this.abortNxtbtn = element(by.xpath('//*[@id = "btnCallNext"]'));
		this.abortAddNotes = element(by.xpath('//*[@id = "txt_addNotAbort"]'));
		this.abortCapturePhoto = element(by.xpath('//*[@id = "cameraBtn1"]'));
		this.abortAppointment = element(by.xpath('//button[text()="ABORT APPOINTMENT"]'));
		this.reScanPopUpOK = element(by.xpath('//button[text()="OK"]'));
		this.appointmentconfirmationNo = element(by.xpath('//*[@id="rb_app_conf_n"]/span'));
		//###########ABORT Door Step#############
		this.accessToSiteN = element(by.xpath('//*[@id = "rb_access_n"]'));
		this.captureNoAcess = element(by.xpath('//*[@id = "btn_NoAccCusPre"]'));
		this.suspendJobYes = element(by.xpath('//*[@id = "rb_SuspJob_y"]'));
		this.suspendJobNo = element(by.xpath('//*[@id = "rb_SuspJob_n"]'));
		this.AddNotesSuspend = element(by.model('wo.doorstep.suspendJobNotes"]'));
		this.suspendJobBtn = element(by.xpath('//*[@id = "btn_drstp_suspend"]'));
		this.reScheduleAppointNo = element(by.xpath('//*[@id = "rb_ReschAppRq_n"]'));
		this.abortNoAcessBtn = element(by.xpath('//*[@id = "btn_drstp_abort"]'));
		//#############END#############

		//#################Risk Assessment Page#############
		this.OKtoProceedEGPOutcomeN = element(by.xpath('//label[@id="rb_OKProce_n"]'));
		this.riskAssessAbort = element(by.xpath('//button[text()="Abort"]'));
		this.unabletoOffGasOption = element(by.xpath('//*[@id = "abdradio11"]'));


		// ####################################
		// I & L FLTY Elements
		this.captureMeterReadingSend2 = element(by.xpath('//*[@id="reg0"]'));
		this.captureFinalMeterInstall1 = element(by.xpath('//*[@id="btn_Next_read"]'));
		this.commshubconnectedtoSupply = element(by.xpath('//*[contains(text(),"Comms Hub Connected to Supply?")]'));
		this.commshubconnectedtoSupplyY = element(by.xpath('//input[@id="commshubconnectedtrue"]/following-sibling::span[@class="outer"]'));
		this.commshubconnectedtoSWan = element(by.xpath('//*[contains(text(),"Comms Hub Connected to WAN?")]'));
		this.commshubconnectedtoWanY = element(by.xpath('//input[@id="commhubwanfalse"]/following-sibling::span[@class="outer"]'));
		this.commshubconnectedtoAsset = element(by.xpath('//*[contains(text(),"Do you need to exchange an asset?")]'));
		this.commshubconnectedtoAssetY = element(by.xpath('//input[@id="exchangeassettrue"]/following-sibling::span[@class="outer"]'));


		this.ContactGTY = element(by.xpath('//*[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.NationalGridSend = element(by.xpath('//*[@id = "input1"]'));
		//this.NationalGridSend2 = element(by.xpath('(//*[@id="input1"])[2]'));
		this.HandSAirline = element(by.xpath('//*[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.Airlineref1 = element(by.xpath('(//*[@id="input2"])[1]'));
		this.GTAttendenceOnsiteY = element(by.xpath('//*[@id="gtp5"]/following-sibling::span[@class="outer"]'));
		this.GTresolveIssueY = element(by.xpath('//*[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.TightnessIssueY = element(by.xpath('//*[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.cappedgascooker = element(by.xpath('(//*[@id="work[$index]"]/following-sibling::span[@class="outer"])[2]'));
		this.addnlnote = element(by.xpath('//*[@id = "text1"]'));
		this.ReplacedGasMeterY = element(by.xpath('//*[@id="gtp13"]/following-sibling::span[@class="outer"]'));
		this.ReplacedGasregulatorY = element(by.xpath('//*[@id="gtp15"]/following-sibling::span[@class="outer"]'));
		this.TightnessperformedY = element(by.xpath('//*[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.cappostinstallation = element(by.xpath('//*[@id="btn_CapPoTi_test"]/button'));
		this.Dropinpressure = element(by.xpath('//*[@id="gtp19"]/following-sibling::span[@class="outer"]'));

		this.dropinpressureselect = element(by.xpath('(//select[@id="select1"])[1]'));
		this.selectMeterType = element(by.xpath('(//select[@id="select2"])[1]'));
		this.GasTightnessPassed = element(by.xpath('//*[@id="gtp21"]/following-sibling::span[@class="outer"]'));
		this.TestWitness = element(by.xpath('//*[@id = "input3"]'));
		this.standingPressure1 = element(by.xpath('//*[@id = "gaspoststandingpressure"]'));
		this.cappostinstallationpressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[1]'));
		this.workingPressure = element(by.xpath('//*[@id = "gaspostworkingpressure"]'));
		this.captureworkingPressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[2]'));
		this.captureFinalMeterInstall = element(by.xpath('(//*[@id="btn2"])[1]'));
		this.MsgreqDCC = element(by.xpath('//*[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.hubconnectdtoWAN = element(by.xpath('//*[@id="Cradionm2"]/following-sibling::span[@class="outer"]'));
		this.PostinstallNext = element(by.xpath('//*[@id="btnNextPol"]'));

		//##################Reason Popup#####################

		this.AbortNoAccessReasonCodes = element(by.xpath('//*[text()="Abort: No Access Reason Codes"]'));

		// #################################### Risk Assess Elec##########

		this.capturePhotoAbortElec = element(by.xpath('//button[text()="CAPTURE PHOTO OF HAZARDS IDENTIFIED"]'));
		this.updatedHnSY = element(by.xpath('//input[@id="radiora11"]/following-sibling::span[@class="outer"]'));
		this.newregulatorReplaced = element(by.xpath('//input[@id="regulator_replacedtrue"]/following-sibling::span[@class="outer"]'));
		this.airlineRefInput = element(by.xpath('//input[@id="input1"]'));
		this.updateDNOY = element(by.xpath('//input[@id="radiora13"]/following-sibling::span[@class="outer"]'));
		this.dnoInput = element(by.xpath('//input[@id="input2"]'));
		this.workCanbeCompletedN = element(by.xpath('//input[@id="radiora18"]/following-sibling::span[@class="outer"]'));
		this.addNotes = element(by.xpath('//input[@id="text3"]'));
		this.elecAbortBtn = element(by.xpath('//button[text()="Abort"]'));
		this.reasonforAbort = element(by.xpath('//div[@id="abdradio4"]'));
		this.abortElecNxtBtn = element(by.xpath('//button[text()="NEXT"]'));
		this.AbortElecNotes = element(by.model('scp.riskAssessFailNotes'));
		this.AbortElecMeter = element(by.xpath('//button[text()="ABORT ELEC METER"]'));

		// #################################### Risk Assess Gas##########	

		this.capturemeterPressureMed = element(by.xpath('//input[@id="radiorag2"]/following-sibling::span[@class="outer"]'));
		this.medPressureNo = element(by.xpath('//input[@id="radiorag4"]/following-sibling::span[@class="outer"]'));
		this.abortGas = element(by.xpath('//*[@id="btn2"]'));
		this.gasabortAppointment = element(by.xpath('//*[@id="btnCall1"]'));
		this.abortbtnfail = element(by.xpath('//*[@id="btn_Gas_fail"]'));
		this.gasabortApp = element(by.xpath('//*[@id="btnCallabr2"]'));

		this.selectValidAssettoInst1 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[4]'));
		this.selectValidAssettoInst2 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[1]'));
		this.gasmeterserialSendreg = element(by.xpath('//*[@id="btn_RegSNum1"]'));
		this.nextSecnewRegulator = element(by.xpath('//*[@id="newRegulator_nextButton"]'));
		//################ PRE GAS Abort########

		this.preGASinstallN = element(by.xpath('//*[@id = "rb_PreGasTigTCarOut_n"]'));
		this.abortGASMeterBtn = element(by.xpath('//button[text()="ABORT  METER"]'));
		// I&L Post Gas Installation 
		this.reportedToHSYEsGas = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.inputAirLineRefGAS = element(by.xpath('//div/input[@id="input2"]'));
		this.gtResolveIssueGas = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.gtAttendanceOnSiteYes = element(by.xpath('//input[@id="gtp5"]/following-sibling::span[@class="outer"]'));
		this.contactGTYEs = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
		this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.GasTightnessTestPerformedYes = element(by.xpath('//input[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.nationalGTRefInput = element(by.xpath('//*[@id = "input1"]'));
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
		this.capturePostInstallationGas = element(by.xpath('//*[@id = "btn_CapPoTi_test"]/button'));
		this.DIPGASYes = element(by.xpath('//input[@id="gtp19"]/following-sibling::span[@class="outer"]'));
		this.dipSelectDD = element(by.xpath('//*[@id = "select1"]'));
		this.meterTypeGASDD = element(by.xpath('//*[@id = "select2"]'));
		this.tightnessPassedYes = element(by.xpath('//input[@id="gtp21"]/following-sibling::span[@class="outer"]'));
		this.AdditionalWorktoPassYesGAS = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.witnessName = element(by.xpath('//form/input[@id="input3"]'));
		this.standingPressure = element(by.xpath('//*[@id = "gaspoststandingpressure"]'));
		this.dipCaptureBtn = element(by.xpath('//*[@id = "btn_CapStPr"]/button'));
		this.workingpressure = element(by.xpath('//*[@id = "gaspostworkingpressure"]'));
		this.wpCapture = element(by.xpath('(//div[@id="btn_CapStPr"])[2]/button'));
		this.finalMeterCapture = element(by.xpath('//button[@id="btn2"]'));
		this.gasbuttonSubmit = element(by.xpath('(//*[@id="btn1"])[2]'));
		this.gasNMEXbuttonSubmit = element(by.xpath('//*[@id="btn1"]'));
		this.polNxtBtn = element(by.xpath('(//div/button[@id="btnNextPol"])[2]'));
		this.polNxtBtn_1 = element(by.xpath('(//div/button[@id="btnNextPol"])[1]'));
		//
		this.nextbtntoRemfromElec = element(by.xpath('(//*[@id="btn1"])[2]'));
		this.submitRisk = element(by.xpath('//div[text()="REMOVE"]'));

		//I & L Remove Page Elements
		this.statusofElecAssetSelect = element(by.xpath('//select[@id="cbx_StaAss_sel"]'));
		this.statusofAssetSelect = element(by.xpath('//select[@id="removeGasMeter_assetStatusSelect"]'));
		this.removedmeterReading = element(by.xpath('//input[@id="input0"]'));
		this.RemoveElecAssetrplacedorremoved = element(by.xpath('((//*[@id="CCHradio5"])[2])/following-sibling::span[@class="outer"]'));
		this.RemoveElecAssetrplacedorremoved1 = element(by.xpath('(//*[@id="CCHradio5"])/following-sibling::span[@class="outer"]'));
		this.randomClick = element(by.xpath('//*[@id="removeGasMeter_unableToRead"]/following-sibling::span[@class="outer"]'));
		this.randomClick2 = element(by.xpath('//*[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"]'));
		this.RemoveGasAssetrplacedorremoved = element(by.xpath('//*[@id="removeGasMeter_assetRemovedReplaced_y"]/span'));
		this.removedgasmeterreading = element(by.xpath('(//*[@id="input0"])[2]'));
		this.AssetaddedtowallNewReg = element(by.xpath('//*[text()="OK"]'));

		// I & L Gas safety elements
		this.earthBondingYEs = element(by.xpath('//input[@id="radioraa1a"]/following-sibling::span[@class="outer"]'));
		this.landLordPropertyNo = element(by.xpath('//*[@id = "radioraa4"]'));
		this.allAppliTestedBtn = element(by.xpath('//*[@id = "btn_AllApp_tested"]'));
		this.submitGas = element(by.xpath('//*[@id = "btn_Subm_gas"]'));

		// I & L Install page elements
		this.assetInput1 = element(by.xpath('//*[@id = "gasassetinput0"]'));
		this.installKitNxtBtn1 = element(by.xpath('//*[@id = "gasInstallPhoto_nextBtn"]'));
		this.nonSerialisedAsssetsDD1 = element(by.xpath('//*[@id = "asassetselect0"]'));
		this.installKitUsedYes1 = element(by.xpath('//*[@id="gasInstallPhoto_installKit_y"]'));

		// I&L Commisioning elements
		this.nonserealizedAssetDD = element(by.xpath('//*[@id = "Cselect4"]'));
		this.nonserealizedAssetInput = element(by.xpath('//*[@id = "Cbar3"]'));
		this.commissioningNxtBtn_FLTY = element(by.xpath('//*[@id="CbtnNextComm"]'));
		this.dccmsgRequired = element(by.xpath('//input[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.commsHubConnectedNo = element(by.xpath('//*[@id = "Cradionm2"]'));
		this.commHubConnected_FLTY = element(by.xpath('//*[@id="Cradionm2"]/span'));
		this.commsHubConnectedNo_1 = element(by.xpath('//input[@id="Cradionm2"]/following-sibling::span[@class="outer"]'));
		this.commissioningNxtBtn = element(by.xpath('//*[@id = "CbtnNextComm"]'));
		this.replacecommsNextButton = element(by.xpath('//*[@id = "replacechnowan_nextButton"]'));
		this.replacecommsNextButton_1 = element(by.xpath('//*[@id = "replacechnowan2_nextButton"]'));
		this.replacecommshubNowan = element(by.xpath('(//div/h4[text()="Replace Comms Hub No WAN"])'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.commshubReplacedyes = element(by.xpath('//*[@id="replacechnowan_ICHreplacedRadioTrue"]/span'));
		this.commshubReplacedyes_1 = element(by.xpath('//*[@id = "replacechnowan2_ICHreplacedRadioTrue"]'));
		this.commshubToInstall_1 = element(by.xpath('//*[@id = "replacechnowan2_assetList"]'));
		this.CHFID_1 = element(by.xpath('//*[@id = "replacechnowan2_chfId"]'));
		this.commshubLocation_1 = element(by.xpath('//*[@id = "replacechnowan2_chubLocationSelect"]'));
		this.aerialInstalled_1 = element(by.xpath('//*[@id = "replacechnowan2_aerialInstalled_y"]'));
		this.commshubConnectionMethod_1 = element(by.xpath('//*[@id = "replacechnowan2_connectionMethod"]'));
		this.cradleSerialNo_1 = element(by.xpath('//*[@id="replacechnowan2_cradleSerialNumber"]'));
		this.replacecommsCapturePhoto_1 = element(by.xpath('//*[@id = "replacechnowan2_photoButton"]'));
		this.replacecommshubNowan_1 = element(by.xpath('//*[@id="replacechnowan2_chnowanconnectedfalse"]/span'));
		this.replacecommsPremiseType_1 = element(by.xpath('//*[@id = "replacechnowan2_PremTypeDropdownRepNoWan"]'));
		this.replacecommsPremiseTypeOption = element(by.xpath('//select[@id="replacechnowan_PremTypeDropdownRepNoWan"]/option[2]'));
		this.metalObstructionYes_1 = element(by.xpath('//*[@id="replacechnowan2_metalObsTrue"]/span'));
		this.sharedObstructionNo_1 = element(by.xpath('//*[@id="replacechnowan2_sharedObsFalse"]/span'));
		this.connectivityObstructionNo_1 = element(by.xpath('//*[@id="replacechnowan2_connectObsFalse"]/span'));
		this.confirmInstallAndLeaveYes_1 = element(by.xpath('//*[@id="replacechnowan2_CanLeave1RTrue"]/span'));
		this.smartNoLitLeftOnsiteTxt = element(by.xpath('//h4[contains(text(),"Smart Literature Not Left on Site")]'));
		this.commshubToInstall = element(by.xpath('//*[@id = "replacechnowan_assetList"]'));
		this.CHFID = element(by.xpath('//*[@id = "replacechnowan_chfId"]'));
		this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
		this.selectinstallAssetOption = element(by.xpath('(//select[@id="replacechnowan_assetList"]/option)[4]'));
		this.selectinstallAssetOption_1 = element(by.xpath('(//select[@id="replacechnowan2_assetList"]/option)[4]'));
		this.dummydiv1 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[5]'));
		this.dummydiv2 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[3]'));
		this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[4]'));
		this.dummydiv3 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[1]'));
		this.commshubLocation = element(by.xpath('//*[@id = "replacechnowan_chubLocationSelect"]'));
		this.aerialInstalled = element(by.xpath('//*[@id = "replacechnowan_aerialInstalled_y"]'));
		this.commshubConnectionMethod = element(by.xpath('//*[@id = "replacechnowan_connectionMethod"]'));
		this.replacecommsCapturePhoto = element(by.xpath('//*[@id = "replacechnowan_photoButton"]'));
		this.replacecommshubNowan = element(by.xpath('//*[@id="replacechnowan_chnowanconnectedfalse"]/span'));
		this.replacecommsPremiseType = element(by.xpath('//*[@id = "replacechnowan_PremTypeDropdownRepNoWan"]'));
		this.replacecommsPremiseTypeOption = element(by.xpath('//select[@id="replacechnowan_PremTypeDropdownRepNoWan"]/option[2]'));
		this.metalObstructionYes = element(by.xpath('//*[@id="replacechnowan_metalObsTrue"]/span'));
		this.sharedObstructionNo = element(by.xpath('//*[@id="replacechnowan_sharedObsFalse"]/span'));
		this.connectivityObstructionNo = element(by.xpath('//*[@id="replacechnowan_connectObsFalse"]/span'));
		this.confirmInstallAndLeaveYes = element(by.xpath('//*[@id="replacechnowan_CanLeave1RTrue"]/span'));
		this.assetsUnaffectedYes = element(by.xpath('//*[@id="replacechnowan_InstallLeaveConfirmedTrue"]/span'));
		this.elecMeterSubmit = element(by.xpath('//*[@id="btn_Submit_elec"]'));
		this.elecInstallSubmit = element(by.xpath('(//*[@id="btn1"])[1]'));
		this.gasMeterSubmit = element(by.xpath('//*[@id="btn_Subm_gas"]'));
		this.cradleSerialNo = element(by.xpath('//*[@id="replacechnowan_cradleSerialNumber"]'));

		//############## I&L Abort Job completion page ##############
		this.PPMIDOfferedNo = element(by.xpath('//*[@id = "ihdscan2_ihdPpmidOfferedfalse"]'));
		this.PPMIDAddNotes = element(by.xpath('//*[@id = "ihdscan2_textIhdPpmidNotOffered"]'));
		this.PPMIDOfferedNo = element(by.xpath('//*[@id = "ihdscan2_ihdPpmidOfferedfalse"]'));

		this.gasAndElecMeterN = element(by.xpath('//*[@id = "rb_GasElecMPairSuc_n"]'));
		this.fullHanDeviceNo = element(by.xpath('//*[@id = "rb_FulHANEst_n"]'));
		this.fullWanAllmeterNo = element(by.xpath('//*[@id="rb_FulWANEst_n"]/span[@class="outer"]'));
		this.fullconfigElecApplyNo = element(by.xpath('//*[@id="rb_FullCFigE_n"]/label/span[@class="outer"]'));

		this.PPMIDAddNotes_1 = element(by.xpath('//*[@id = "newihdppmid_textIhdPpmidNotOffered"]'));
		this.PPMIDOfferedNo_1 = element(by.xpath('//*[@id="newihdppmid_ihdPpmidOfferedfalse"]/span'));
		this.gasAndElecMeterN = element(by.xpath('//*[@id = "rb_GasElecMPairSuc_n"]'));
		this.fullHanDeviceNo = element(by.xpath('//*[@id = "rb_FulHANEst_n"]'));

		this.ppmidNXTBtn = element(by.xpath('//*[@id = "ihdscan2_nextButton"]'));
		this.ppmidNXTBtn_1 = element(by.xpath('//*[@id = "newihdppmid_nextButton"]'));
		this.devicebindingNextSection = element(by.xpath('//*[@id = "dbc2_trad_btnNextEff"]'));
		this.configureallmetersNextSection = element(by.xpath('//*[@id = "btnNextEff"]'));
		this.smartLitLeftNo = element(by.xpath('//*[@id="radiose4"]/span[@class="outer"]'));
		this.additionalInfo = element(by.xpath('//*[@id="smicopAddInfoCheckboxNo"]/span[@class="outer"]'));
		this.demoEquipment = element(by.xpath('//*[@id="radiose8"]/span[@class="outer"]'));
		this.gsmeJoinedYes = element(by.xpath('//*[@id = "dbc2_gsme_joined_y"]'));
		this.esmeJoinedNo = element(by.xpath('//*[@id = "dbc2_esme_joined_n"]'));
		this.devicebindnext = element(by.xpath('//*[@id="dbc2_btnNextEff"]'));

		//##################Reason Popup#####################
		this.AbortNoAccessReasonCodes = element(by.xpath('//*[text()="Abort: No Access Reason Codes"]'));

		// ########################CGP added For PreGas Test################
		this.abortBtn = element(by.xpath('//button[@id="btn2"]'));
		this.abortApntButton = element(by.xpath('//*[@id="btnCallabr2"]'));
		this.abortPreGas = element(by.xpath('//*[@id="btn_Gas_fail"]'));

		this.AbortGasMeterReasonCodes = element(by.xpath('//*[text()="Abort: Gas Meter Reason Codes"]'));
		this.RescanAssetPopUp = element(by.xpath('//button[@class="confirm"]'));
		this.FullWANYes = element(by.xpath('//*[@id = "rb_FulWANEst_y"]'));
		this.FullCOnfigAppliedElecYes = element(by.xpath('//*[@id = "rb_FullCFigE_y"]'));
		this.fullConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));

		this.fullConfigAppliedPPMIDYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[2]'));
		this.capturePPMIDBtn = element(by.xpath('//div/button[@class="cameraBtn2line grey mandatoryWhite"]'));
		this.PPMIDNxtBtn = element(by.xpath('//div/button[@id="btnNextEff"]'));
		this.checkDetails = element(by.xpath('//button[@class="confirm"]'));
		this.fullConfigAppliedPPMIDYesAbort = element(by.xpath('(//input[@id="rcfg5"])'));
		this.nextButtonWAN = element(by.xpath('//*[@id = "btnNextEff"]'));
		this.btnnext1 = element(by.xpath('(//*[@id="btnNextComm"])[1]'));
		this.Tst22removedmeterReading = element(by.xpath('//input[@id="input0"]'));
		this.Tst22removemeterText = element(by.xpath('(//div[text()="Removed Meter Reading(s):"])[2]'));
		this.Tst22RemoveMeterEnNxt = element(by.xpath('(//div[@class = "checkLabel"])[5]'));
		this.Tst22RemoveNxtEnable = element(by.css('.ng-scope > .ng-scope:nth-child(5) .checkLabel'));
		this.randomClickEX23 = element(by.xpath('//*[@id = "rb_UnReadMet_y"]'));
	}

	public async VerifyAbortReasonCodePopup() {
		await utility.wait(utility.medium);
		if (this.AbortNoAccessReasonCodes.isDisplayed) {
			await utility.wait(utility.medium);
			this.AbortNoAccessReasonCodes.getText().then(async function (abortreason) {
				console.log("find Appointment Page Text  " + abortreason);
			});
		}
	}

	public async ClickAbortButton() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async ClickElecSubmitButton() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.submitRisk, utility.medium);
		await utility.wait(utility.medium);
	}

	//Abort reason popup options - generic function ################
	public async selectreasonOptionAndAbort(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.GenericReasonCodeSelect, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortNxtbtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, notesstring);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortAppointment, utility.medium);
		await utility.wait(utility.medium);

	}

	public async noAccessAbortContactMade() {

		await applist.clickOnContactMadeOtion();
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.appointmentconfirmationNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.appointmentRescheduledNo, utility.medium);
		await utility.wait(utility.medium);
		await applist.additionalAccessDetailsTextBox.sendKeys('Additional access details comment 123');
		//Gen.SendKeys(applist.additionalAccessDetailsTextBox, utility.medium, 'Additional access details comment 123');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortNoAccessContactMade, utility.medium);
		await utility.wait(utility.medium);
	}

	//Abort Options ################
	public async notConvinientOptionAndAbort() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.notConvinientRadioBtn, utility.medium);
		await utility.wait(utility.medium);
		try {
			//await expect(this.abortNxtbtn.isDisplayed());
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.abortNxtbtn, utility.medium);

		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, 'Not able to Call the customer');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortAppointment, utility.medium);
		await utility.wait(utility.medium);
	}

	// Unable to turn off Gas option ###################
	public async unableToOffGasOptionAndAbort() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.unabletoOffGasOption, utility.medium);
		await utility.wait(utility.medium);
		try {
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.abortNxtbtn, utility.medium);
		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, 'Leave Gass Off');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortAppointment, utility.medium);
		await utility.wait(utility.very_low);
	}

	// No Meter Onsite Option##########
	public async elecRiskOptionAndAbortElecMeter(xpathparam, notesstring) {

		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (await this.reasonforAbort.isDisplayed() && await this.reasonforAbort.isSelected()) {
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortElecNxtBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, notesstring);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AbortElecMeter, utility.medium);
		await utility.wait(utility.medium);
	}

	public async elecRiskOptionAndAbortAppointment(xpathparam, notesstring) {

		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (await this.reasonforAbort.isDisplayed() && await this.reasonforAbort.isSelected()) {
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortElecNxtBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, notesstring);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortAppointment, utility.medium);
		await utility.wait(utility.medium);

	}
	// Abort Rescan Pop up ###################
	public async reScanInfoPopup() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reScanPopUpOK, utility.medium);
		await utility.wait(utility.medium);
	}

	public async suspendJobonTheDoorStepDetails() {

		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(door.selectInputField, utility.medium, "C94");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.accessToSiteN, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(door.customerOnSiteY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.captureNoAcess, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.suspendJobYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.AddNotesSuspend, utility.medium, 'Come Back Later');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.suspendJobBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	//Abort Job after Suspend #################  
	public async abortJoboAfterSuspend() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.suspendJobNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.reScheduleAppointNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortNoAcessBtn, utility.medium);
		await utility.wait(utility.medium);

	}
	//updates
	/***
	* @Author Jansi Victor
	* @description ABORT Fill Risk Elec page details
	***/
	public async abortJoboAfterInitialRisk() {


		await utility.wait(utility.medium);
		if (risk.canYouSmellText.isDisplayed()) {
			Gen.RadioButtonClick(risk.canYouSmellYES, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(risk.turnedOffGasYES, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(risk.callEGPYES, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(risk.inputEGPRef, utility.medium, '123456');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(risk.reportToHS, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(risk.airLineRefInput, utility.medium, '5678910');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.OKtoProceedEGPOutcomeN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.riskAssessAbort, utility.medium);
		await utility.wait(utility.medium);
	}

	public async selectreasonOptionAndAbortGas(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GenericReasonCodeSelect, utility.medium);

		try {
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.abortNxtbtn, utility.medium);
		}
		catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, notesstring);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasabortAppointment, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill Gas Safety check section
	 ***/
	public async fillGasSafety_InstallLeave() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.earthBondingYEs, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.landLordPropertyNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.allAppliTestedBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.submitGas, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillGasSafety_toPPMID_InstallLeave() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.earthBondingYEs, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.landLordPropertyNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.allAppliTestedBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	//TST135
	public async TST135fillConfigAllmeter() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.FullCOnfigAppliedElecYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(job.deviceOK, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(job.fullEx20ConfigAppliedGasYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(job.capturePPMIDBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(job.nextButtonWAN, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
		 * @Author Jansi Victor
		 * @description Remove Meter
		 ***/

	public async Tst35fillElecmeterrem() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(remove.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(remove.statusofElecAssetSelect, utility.medium, "0");
		await utility.wait(utility.medium);
	}

	public async ElectricInitmeterReading() {

		await utility.wait(utility.medium);
		Gen.SendKeys(inst.captureMeterReadingSend, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.RandomMouseClick(inst.captureMeterReadingSend, 250, 34);
		await utility.wait(utility.medium);
	}

	public async TST77DetermineFaulty() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(remove.commshubconnectedtoAssetN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(remove.carryoutWorkNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(remove.commshubNextbtn, utility.medium);
		await utility.wait(utility.medium);

	}


	/***
	 * @Author Aparna Das
	 * @description ABORT Fill Risk Elec page details
	 ***/

	public async fillRiskAssesmentElecFields() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(risk.performRiskYES, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(risk.selectRiskReasonDD, utility.medium, "6");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.AbortElecNotes, utility.medium, 'A10 : DB Earthing issues at existing installations which present an immediate risk to consumer/MO');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePhotoAbortElec, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.updatedHnSY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.airlineRefInput, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.updateDNOY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.dnoInput, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.workCanbeCompletedN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecAbortBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Aparna Das
	 * @description ABORT Fill Risk Gas page details
	 ***/

	public async fillRiskAssesmentGasFields() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturemeterPressureMed, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.medPressureNo, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Jansi Victor
	 * @description ABORT Fill Risk Gas page details
	 ***/
	public async AbortGas() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortGas, utility.medium);
		await utility.wait(utility.medium);
	}

	public async AbortGas_Btnfail() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortbtnfail, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Jansi Victor
	 * @description ABORT GAS Click
	 ***/
	public async selectreasonOptionAndAbortforgas(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GenericReasonCodeSelect, utility.medium);

		try {

			await utility.wait(utility.medium);
			Gen.ButtonClick(this.abortNxtbtn, utility.medium);
		}
		catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, notesstring);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
	}
	public async GasabortApp() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasabortApp, utility.medium);
		await utility.wait(utility.medium);
	}

	public async AbortGasbtncall() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasabortAppointment, utility.medium);
		await utility.wait(utility.medium);
	}
	/***
	 * @Author Aparna Das
	 * @description ABORT pre GAs Test details
	 ***/

	public async fillPreGasAbort() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.preGASinstallN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortGas, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Supriya
	 * @description ABORT for Leave and install
	 * Functions altered per flow
	 ***/

	public async fillPPMIDSection() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDOfferedNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.PPMIDAddNotes, utility.medium, 'Come Back Later');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ppmidNXTBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillPPMIDSection_EXCH22() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.PPMIDOfferedNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.PPMIDAddNotes_1, utility.medium, 'Come Back Later');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ppmidNXTBtn_1, utility.medium);

	}

	public async fillDeviceBindingSection() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.gasAndElecMeterN, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullHanDeviceNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.devicebindingNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillDeviceBindingSection_Installremove() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gsmeJoinedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.devicebindnext, utility.medium);
		await utility.wait(utility.medium);
	}


	public async fillElecmeterremEX23() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);

		await utility.wait(utility.medium);
		Gen.DropDownOptionbyLabel(this.statusofElecAssetSelect, utility.medium, "No Fault Found");

		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.randomClick2, utility.medium);
		console.log("Random Click EX23");
		await utility.wait(utility.medium);
	}

	//Post Installation for Abort ######################

	public async filltheforPostinstAbort() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.NationalGridSend, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.Airlineref1, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.addnlnote, utility.medium, "Gas Notes");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(inst.dropinpressureselect, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(inst.selectMeterType, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.TestWitness, utility.medium, "Ellie Taylor");
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.standingPressure, utility.medium, "1.1");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.workingPressure, utility.medium, "1.5");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.captureFinalMeterInstall, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.MsgreqDCC, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.PostinstallNext, utility.medium);
		await utility.wait(utility.medium);
	}


	public async fillElecmeterremEX24() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionbyLabel(this.statusofElecAssetSelect, utility.medium, "No Fault Found");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedgasmeterreading, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.randomClick2, utility.medium);
		console.log("Random Click EX24");
		await utility.wait(utility.medium);
	}

	public async fillGasmeterremEX24() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveGasAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionbyLabel(this.statusofAssetSelect, utility.medium, "No Fault Found");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.randomClick, utility.medium);
		console.log("Random Click EX24");
		await utility.wait(utility.medium);

	}

	public async newregulatorsection_EXCH24(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.newregulatorReplaced, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.selectValidAssettoInst1, utility.medium);
		await utility.wait(utility.medium);
		await this.selectValidAssettoInst1.element(by.css("option:nth-child(" + index + ")")).click();
		await utility.wait(utility.medium);

		var options = this.selectValidAssettoInst1.getAttribute('value');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
		await utility.wait(utility.medium);
		Gen.RandomMouseClick(this.gasmeterserialSendreg, 350, 34);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}

	public async newregulatorsection_FLTYTRAD(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.newregulatorReplaced, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.selectValidAssettoInst2, utility.medium);
		await utility.wait(utility.medium);
		await this.selectValidAssettoInst2.element(by.css("option:nth-child(" + index + ")")).click();
		await utility.wait(utility.medium);

		var options = this.selectValidAssettoInst2.getAttribute('value');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.gasmeterserialSendreg, utility.medium, options);
		await utility.wait(utility.medium);
		Gen.RandomMouseClick(this.gasmeterserialSendreg, 350, 34);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AssetaddedtowallNewReg, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextSecnewRegulator, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillGasInstallKitDetails_InstallLeave() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.installKitUsedYes1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.nonSerialisedAsssetsDD1, utility.medium, "1");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.assetInput1, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commsHubConnectedNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.installKitNxtBtn1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillthefieldsforperformpost_InstallAndLeave() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortAppointment, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.Airlineref1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.Airlineref1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.addnlnote, utility.medium, "Gas Notes");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.dropinpressureselect, utility.medium, '2');
		await utility.wait(utility.very_low);
		Gen.DropDownOptionClick(this.selectMeterType, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.TestWitness, utility.medium, "Ellie Taylor");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.standingPressure1, utility.medium, '1.1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.workingPressure, utility.medium, '1.5');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.captureFinalMeterInstall, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.MsgreqDCC, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.hubconnectdtoWAN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.PostinstallNext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillElecmeterrem_FLTY() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofElecAssetSelect, utility.medium, "1");
		await utility.wait(utility.medium);
		//Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		//await utility.wait(utility.medium);

	}

	public async fillDeviceBindingSection_InstallEXCH23() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.esmeJoinedNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.devicebindnext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillDeviceBindingSection_EXCH19() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.fullHanDeviceNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.devicebindingNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillSmartLiteratureEducationSection() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smartLitLeftNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalInfo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.demoEquipment, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillConfigAllMetersSection_EXCH19() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.fullWanAllmeterNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.configureallmetersNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Smart No Literature section text display
	 ***/
	public async SmartNoLiteraturedispaly() {
		if (this.smartNoLitLeftOnsiteTxt.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.smartNoLitLeftOnsiteTxt.getText().then(function (SmartLiterature) {
				console.log("find smartNoLit Text  " + SmartLiterature);
			});
		}
	}

	public async fillConfigAllMetersSection() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.fullWanAllmeterNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.fullconfigElecApplyNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.configureallmetersNextSection, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill commissioning details Install and Leave 
	 ***/

	public async verifyReplaceCommshubNoWANSection() {
		await utility.wait(utility.medium);
		this.replacecommshubNowan.getText().then(function (replacecomms) {
			console.log("find replacecommshubsection Text  " + replacecomms);
		});
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill Gas Post Installation Gas Tightness Test section Install And Leave
	 ***/
	public async fillPostInstallationGasDetailsInstallLeave() {


		await utility.wait(utility.medium);
		Gen.ButtonClick(this.contactGTYEs, utility.medium);

		Gen.SendKeys(this.nationalGTRefInput, utility.medium, '12345');

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reportedToHSYEsGas, utility.medium);
		await utility.wait(utility.medium);

		Gen.SendKeys(this.inputAirLineRefGAS, utility.medium, '12345');

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtAttendanceOnSiteYes, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtResolveIssueGas, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AdditionalWorktoPassYesGAS, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalWork1, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalWork2, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalWork3, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalWork4, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalWork5, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.additionalWork6, utility.medium);


		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacedGasMeterYes, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacedGasRegulatorYes, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GasTightnessTestPerformedYes, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePostInstallationGas, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.DIPGASYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.dipSelectDD, utility.medium, "1");
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.meterTypeGASDD, utility.medium, "1");

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.tightnessPassedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.witnessName, utility.medium, 'Dennis');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.standingPressure, utility.medium, '1');

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.dipCaptureBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.workingpressure, utility.medium, '1');

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.wpCapture, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.finalMeterCapture, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commsHubConnectedNo_1, utility.medium);
		await utility.wait(utility.Avg_low);
		//changed to polGasNxtBtn nt working chk polNxtBtn element
		browser.executeScript('arguments[0].scrollIntoView()', this.polNxtBtn.getWebElement());

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.polNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill Gas Post Installation Gas Tightness Test section Install And Leave
	 ***/
	public async fillPostInstallationGasDetails_EXCH22() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.contactGTYEs, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.nationalGTRefInput, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.reportedToHSYEsGas, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.inputAirLineRefGAS, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.gtAttendanceOnSiteYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.gtResolveIssueGas, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.AdditionalWorktoPassYesGAS, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionalWork1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionalWork2, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionalWork3, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionalWork4, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionalWork5, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.additionalWork6, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacedGasMeterYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacedGasRegulatorYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.GasTightnessTestPerformedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.capturePostInstallationGas, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.DIPGASYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.dipSelectDD, utility.medium, "1");
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.meterTypeGASDD, utility.medium, "1");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.tightnessPassedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.witnessName, utility.medium, 'Dennis');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.standingPressure, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.dipCaptureBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.workingpressure, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.wpCapture, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.finalMeterCapture, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commsHubConnectedNo_1, utility.medium);
		await utility.wait(utility.Avg_low);
		browser.executeScript('arguments[0].scrollIntoView()', this.polNxtBtn_1.getWebElement());
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.polNxtBtn_1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickGasInstallSubmitButton() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasbuttonSubmit, utility.medium);
		await utility.wait(utility.medium);

	}

	public async clickNMEXInstallSubmitButton() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasNMEXbuttonSubmit, utility.medium);
		await utility.wait(utility.medium);

	}
	public async clickElecSubmitButton() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecMeterSubmit, utility.medium);
		await utility.wait(utility.medium);

	}

	public async clickElecInstallSubmitButton() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecInstallSubmit, utility.medium);
		await utility.wait(utility.medium);

	}

	public async clickGasSubmitButton() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasMeterSubmit, utility.medium);
		await utility.wait(utility.medium);

	}



	public async fillReplaceCommshubdetails(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall, utility.medium);
		await utility.wait(utility.medium);
		console.log("Selecting element based index : " + index)
		await utility.wait(utility.medium);
		await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);

		var options = this.selectinstallAssetOption.getAttribute('value');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID, utility.medium, options);
		await utility.wait(utility.medium);
		await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation, utility.medium, "B");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalled, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod, utility.medium, "0");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.cradleSerialNo, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommshubNowan, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.metalObstructionYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sharedObstructionNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.connectivityObstructionNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmInstallAndLeaveYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.assetsUnaffectedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsNextButton, utility.medium);
		await utility.wait(utility.medium);

	}

	public async fill16commsdtls_InstallAndLeave() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoSupplyY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoWanY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoAssetY, utility.medium);
		await utility.wait(utility.medium);

	}



	public async fillReplaceCommshubdetails_EXCH23(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall, utility.medium);
		await utility.wait(utility.medium);
		console.log("Selecting element based index : " + index)
		await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);
		var options = this.selectinstallAssetOption.getAttribute('value');

		await utility.wait(utility.medium_low);
		await this.CHFID.clear();
		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID, utility.medium, options);
		await utility.wait(utility.low);

		await utility.wait(utility.medium);
		await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation, utility.medium, "A");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalled, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod, utility.medium, "0");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.cradleSerialNo, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommshubNowan, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.metalObstructionYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sharedObstructionNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.connectivityObstructionNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmInstallAndLeaveYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.assetsUnaffectedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsNextButton, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillReplaceCommshubdetails_ENMEX(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall, utility.medium);
		await utility.wait(utility.medium);
		console.log("Selecting element based index : " + index)
		await utility.wait(utility.medium);
		await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);

		var options = this.selectinstallAssetOption.getAttribute('value');

		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID, utility.medium, options);
		await utility.wait(utility.medium);
		await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation, utility.medium, "A");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalled, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod, utility.medium, "0");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.cradleSerialNo, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommshubNowan, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.metalObstructionYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.sharedObstructionNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.connectivityObstructionNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.confirmInstallAndLeaveYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.assetsUnaffectedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacecommsNextButton, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillReplaceCommshubdetails_EXCH19(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes_1, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall_1, utility.medium);
		await utility.wait(utility.medium);
		console.log("Selecting element based index : " + index)
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);

		var options = this.selectinstallAssetOption_1.getAttribute('value');

		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID_1, utility.medium, options);
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation_1, utility.medium, "A");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalled_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod_1, utility.medium, "1");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.cradleSerialNo_1, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommshubNowan_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType_1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.metalObstructionYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sharedObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.connectivityObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.confirmInstallAndLeaveYes_1, utility.medium);;
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsNextButton_1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillReplaceCommshubdetails_GNMEX(index: number) {


		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes_1, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall_1, utility.medium);
		await utility.wait(utility.medium);
		console.log("Selecting element based index : " + index)
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);
		await utility.wait(utility.medium);

		var options = this.selectinstallAssetOption_1.getAttribute('value');

		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID_1, utility.medium, options);
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation_1, utility.medium, "A");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalled_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod_1, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.cradleSerialNo_1, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommshubNowan_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType_1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.metalObstructionYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sharedObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.connectivityObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmInstallAndLeaveYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsNextButton_1, utility.medium);
		await utility.wait(utility.medium);


	}

	public async fillReplaceCommshubdetails_EXCH22(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes_1, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall_1, utility.medium);
		await utility.wait(utility.medium);
		console.log("Selecting element based index : " + index)
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);

		var options = this.selectinstallAssetOption_1.getAttribute('value');

		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID_1, utility.medium, options);
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation_1, utility.medium, 'A');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.aerialInstalled_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod_1, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.cradleSerialNo_1, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacecommshubNowan_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType_1, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.metalObstructionYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.sharedObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.connectivityObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.confirmInstallAndLeaveYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsNextButton_1, utility.medium);
		await utility.wait(utility.medium);

	}

	public async fillReplaceCommshubdetails_FLTY20(index: number) {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReplacedyes_1, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall_1, utility.medium);
		await utility.wait(utility.medium);
		//index = index ;
		console.log("Selecting element based index : " + index)
		// select the option
		await utility.wait(utility.low);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.low);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubPopup, utility.medium);

		var options = this.selectinstallAssetOption_1.getAttribute('value');

		await this.CHFID_1.clear();
		Gen.SendKeys(this.CHFID_1, utility.medium, options);
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation_1, utility.medium, 'A');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalled_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod_1, utility.medium, "0");
		await utility.wait(utility.medium);
		await this.cradleSerialNo_1.clear();
		Gen.SendKeys(this.cradleSerialNo_1, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacecommsCapturePhoto_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacecommshubNowan_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType_1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.metalObstructionYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.sharedObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.connectivityObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.confirmInstallAndLeaveYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacecommsNextButton_1, utility.medium);
		await utility.wait(utility.medium);


	}

	public async fillReplaceCommshubdetails_FLTYTRAD(index: number) {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.commshubReplacedyes_1, utility.medium);
		browser.sleep(1000)
		Gen.ButtonClick(this.commshubToInstall_1, utility.medium);
		await utility.wait(utility.medium);
		//index = index ;
		console.log("Selecting element based index : " + index)
		// select the option
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click();

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.commshubPopup, utility.medium);

		var options = this.selectinstallAssetOption_1.getAttribute('value');

		await utility.wait(utility.medium);
		Gen.SendKeys(this.CHFID_1, utility.medium, options);
		await utility.wait(utility.low);
		await utility.wait(utility.medium);
		await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortAppointment, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLocation_1, utility.medium, "A");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.aerialInstalled_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubConnectionMethod_1, utility.medium, "0");
		await utility.wait(utility.medium);
		await this.cradleSerialNo_1.clear();
		Gen.SendKeys(this.cradleSerialNo_1, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsCapturePhoto_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.replacecommshubNowan_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.replacecommsPremiseType_1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.metalObstructionYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.sharedObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.connectivityObstructionNo_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.confirmInstallAndLeaveYes_1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.replacecommsNextButton_1, utility.medium);
		await utility.wait(utility.medium);

	}
	//###########################CGP ADDED FOR PRE GAS ABORT#####################

	public async fillPreGasAbortTST136() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.preGASinstallN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortPreGas, utility.medium);
		await utility.wait(utility.medium);

	}

	public VerifyPreGasAbortReasonCodePopup() {
		utility.wait(utility.medium);
		if (this.AbortGasMeterReasonCodes.isDisplayed) {
			utility.wait(utility.medium);
			this.AbortGasMeterReasonCodes.getText().then(async function (abortgasreason) {
				console.log("Abort Reason Code Pop up Header" + abortgasreason);
			});
		}
	}

	public async selectreasonOptionAndAbortPreGas(xpathparam, notesstring, buttonText) {

		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GenericReasonCodeSelect, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.abortAddNotes, utility.medium, notesstring);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.abortCapturePhoto, utility.medium);
		this.buttonTextVal = element(by.xpath('//button[@id ="' + buttonText + '"]'));
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.buttonTextVal, utility.medium);
		await utility.wait(utility.medium);
	}

	public async reScanAssetPopupclick() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RescanAssetPopUp, utility.medium);
		await utility.wait(utility.medium);

	}

	public async fillConfigAllmeterAbort() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullCOnfigAppliedElecYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.FullWANYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.checkDetails, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.fullConfigAppliedPPMIDYesAbort, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePPMIDBtn, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextButtonWAN, utility.medium);
		await utility.wait(utility.medium);

	}

	public async fillPreGasAbortTST35() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.preGASinstallN, utility.medium);
		await utility.wait(utility.medium);
		console.log('Abort Button');
		Gen.ButtonClick(this.abortBtn, utility.medium);
		console.log('Abort Button Clicked');
		await utility.wait(utility.medium);
	}

	public async Tst22fillElecmeterrem() {

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionbyLabel(this.statusofElecAssetSelect, utility.medium, "No Fault Found");
		await utility.wait(utility.medium_low);
		Gen.SendKeys(this.Tst22removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.statusofElecAssetSelect, utility.medium);
		console.log("clicked");
		await utility.wait(utility.medium);

	}

	public async fillCommissioningDetails_InstallLeave() {

		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.nonserealizedAssetDD, utility.medium, "1");

		await utility.wait(utility.medium);
		Gen.SendKeys(this.nonserealizedAssetInput, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commsHubConnectedNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commissioningNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillCommissioningDetails_FLTYInstallLeave() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.dccmsgRequired, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(this.commHubConnected_FLTY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commissioningNxtBtn_FLTY, utility.medium);
		await utility.wait(utility.medium);
	}


	public async fillperformpostinstAbortNonS2() {

		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.ContactGTY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.NationalGridSend, utility.medium, "1");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.HandSAirline, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.Airlineref1, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.GTAttendenceOnsiteY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.GTresolveIssueY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.TightnessIssueY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.addnlnote, utility.medium, "Gas Notes");
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.ReplacedGasMeterY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.ReplacedGasregulatorY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.TightnessperformedY, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.cappostinstallation, utility.medium);
		await utility.wait(utility.medium);
		Gen.RadioButtonClick(inst.Dropinpressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(inst.dropinpressureselect, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(inst.selectMeterType, utility.medium, "2");
		await utility.wait(utility.medium);
		Gen.ButtonClick(inst.GasTightnessPassed, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.TestWitness, utility.medium, "Ellie Taylor");
		await utility.wait(utility.medium);
		Gen.SendKeys(this.standingPressure, utility.medium, "1.1");
		await utility.wait(utility.medium);
		Gen.ButtonClick(inst.cappostinstallationpressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(inst.workingPressure, utility.medium, "1.5");
		await utility.wait(utility.medium);
		Gen.ButtonClick(inst.captureworkingPressure, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(inst.captureFinalMeterInstall, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(inst.PostinstallNext, utility.medium);
		await utility.wait(utility.medium);
	}

}
