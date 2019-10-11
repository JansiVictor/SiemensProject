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
	AppointmentListPageObject
} from "../pages/AppointmentListPage";
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
	public workCanbeCompletedN:ElementFinder;
	public addNotes:ElementFinder;
	public elecAbortBtn:ElementFinder;
	public reasonforAbort:ElementFinder;
	public abortElecNxtBtn:ElementFinder;
	public AbortElecNotes:ElementFinder;
	public stayOnSiteN:ElementFinder;
	public submitRisk:ElementFinder;
//################## Risk Assess Gas ##############
	public capturemeterPressureMed:ElementFinder;
	public medPressureNo:ElementFinder;
	public abortGas:ElementFinder;
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
	//
	// I&L Commisioning elements
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
	//
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

	// I & L Remove Page Elements
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
	//

	// I & L Install Page Elements
	public installKitUsedYes1: ElementFinder;
	public nonSerialisedAsssetsDD1: ElementFinder;
	public assetInput1: ElementFinder;
	public installKitNxtBtn1: ElementFinder;
	//

	// I & L FLTY Elements
	public commshubconnectedtoSupply: ElementFinder;
	public commshubconnectedtoSupplyY: ElementFinder;
	public commshubconnectedtoSWan: ElementFinder;
	public commshubconnectedtoWanY: ElementFinder;
	public commshubconnectedtoAsset: ElementFinder;
	public commshubconnectedtoAssetY: ElementFinder;

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
	//
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



	constructor() {
		//Abort Elements Appointment List########
		this.appointmentRescheduledNo = element(by.id('rb_app_re_n'));
		this.abortNoAccessContactMade = element(by.id('btn_call_fwd_abort'));
		this.notConvinientRadioBtn = element(by.xpath('//label/div[@id="abdradio1"]'));
		this.abortNxtbtn = element(by.id('btnCallNext'));
		this.abortAddNotes = element(by.id('txt_addNotAbort'));
		this.abortCapturePhoto = element(by.id('cameraBtn1'));
		this.abortAppointment = element(by.xpath('//button[text()="ABORT APPOINTMENT"]'));
		this.reScanPopUpOK = element(by.xpath('//button[text()="OK"]'));
		this.appointmentconfirmationNo = element(by.id('rb_app_conf_n'));
		//###########ABORT Door Step#############
		this.accessToSiteN = element(by.id('rb_access_n'));
		this.captureNoAcess = element(by.id('btn_NoAccCusPre'));
		this.suspendJobYes = element(by.id('rb_SuspJob_y'));
		this.suspendJobNo = element(by.id('rb_SuspJob_n'));
		this.AddNotesSuspend = element(by.model('wo.doorstep.suspendJobNotes'));
		this.suspendJobBtn = element(by.id('btn_drstp_suspend'));
		this.reScheduleAppointNo = element(by.id('rb_ReschAppRq_n'));
		this.abortNoAcessBtn = element(by.id('btn_drstp_abort'));
		//#############END#############

		//#################Risk Assessment Page#############
		this.OKtoProceedEGPOutcomeN = element(by.xpath('//label[@id="rb_OKProce_n"]'));
		this.riskAssessAbort = element(by.xpath('//button[text()="Abort"]'));
		this.unabletoOffGasOption = element(by.id('abdradio11'));


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
		this.NationalGridSend = element(by.id('input1'));
		//this.NationalGridSend2 = element(by.xpath('(//*[@id="input1"])[2]'));
		this.HandSAirline = element(by.xpath('//*[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.Airlineref1 = element(by.xpath('(//*[@id="input2"])[1]'));
		this.GTAttendenceOnsiteY = element(by.xpath('//*[@id="gtp5"]/following-sibling::span[@class="outer"]'));
		this.GTresolveIssueY = element(by.xpath('//*[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.TightnessIssueY = element(by.xpath('//*[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.cappedgascooker = element(by.xpath('(//*[@id="work[$index]"]/following-sibling::span[@class="outer"])[2]'));
		this.addnlnote = element(by.id('text1'));
		this.ReplacedGasMeterY = element(by.xpath('//*[@id="gtp13"]/following-sibling::span[@class="outer"]'));
		this.ReplacedGasregulatorY = element(by.xpath('//*[@id="gtp15"]/following-sibling::span[@class="outer"]'));
		this.TightnessperformedY = element(by.xpath('//*[@id="gtp17"]/following-sibling::span[@class="outer"]'));
		this.cappostinstallation = element(by.xpath('//*[@id="btn_CapPoTi_test"]/button'));
		this.Dropinpressure = element(by.xpath('//*[@id="gtp19"]/following-sibling::span[@class="outer"]'));

		this.dropinpressureselect = element(by.xpath('(//select[@id="select1"])[1]'));
		this.selectMeterType = element(by.xpath('(//select[@id="select2"])[1]'));
		this.GasTightnessPassed = element(by.xpath('//*[@id="gtp21"]/following-sibling::span[@class="outer"]'));
		this.TestWitness = element(by.id('input3'));
		this.standingPressure1 = element(by.id('gaspoststandingpressure'));
		this.cappostinstallationpressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[1]'));
		this.workingPressure = element(by.id('gaspostworkingpressure'));
		this.captureworkingPressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[2]'));
		this.captureFinalMeterInstall = element(by.xpath('(//*[@id="btn2"])[1]'));
		this.MsgreqDCC = element(by.xpath('//*[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.hubconnectdtoWAN = element(by.xpath('//*[@id="Cradionm2"]/following-sibling::span[@class="outer"]'));
		this.PostinstallNext = element(by.xpath('//*[@id="btnNextPol"]'));
		//

		//##################Reason Popup#####################
		this.AbortNoAccessReasonCodes = element(by.xpath('//*[text()="Abort: No Access Reason Codes"]'));

		//######################################

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
		this.gasabortApp = element(by.xpath('//*[@id="btnCallabr2"]'))



		this.abortGas = element(by.xpath('//input[@id="btn_Gas_fail"]'));
		this.selectValidAssettoInst1 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[4]'));
		this.selectValidAssettoInst2 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[1]'));
		this.gasmeterserialSendreg = element(by.xpath('//*[@id="btn_RegSNum1"]'));
		this.nextSecnewRegulator = element(by.xpath('//*[@id="newRegulator_nextButton"]'));
		//################ PRE GAS Abort########

		this.preGASinstallN = element(by.id('rb_PreGasTigTCarOut_n'));
		this.abortGASMeterBtn = element(by.xpath('//button[text()="ABORT  METER"]'));
		// I&L Post Gas Installation 
		this.reportedToHSYEsGas = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
		this.inputAirLineRefGAS = element(by.xpath('//div/input[@id="input2"]'));
		this.gtResolveIssueGas = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
		this.gtAttendanceOnSiteYes = element(by.xpath('//input[@id="gtp5"]/following-sibling::span[@class="outer"]'));
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
		this.gasbuttonSubmit = element(by.xpath('(//*[@id="btn1"])[2]'));
		this.gasNMEXbuttonSubmit = element(by.xpath('//*[@id="btn1"]'));
		this.polNxtBtn = element(by.xpath('(//div/button[@id="btnNextPol"])[2]'));
		this.polNxtBtn_1 = element(by.xpath('(//div/button[@id="btnNextPol"])[1]'));
		//
		this.submitRisk = element(by.xpath('//button[text()="SUBMIT"]'));

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
		//

		// I & L Install page elements
		this.assetInput1 = element(by.id('gasassetinput0'));
		this.installKitNxtBtn1 = element(by.id('gasInstallPhoto_nextBtn'));
		this.nonSerialisedAsssetsDD1 = element(by.id('gasassetselect0'));
		this.installKitUsedYes1 = element(by.xpath('//*[@id="gasInstallPhoto_installKit_y"]'));
		//
		// I&L Commisioning elements
		this.nonserealizedAssetDD = element(by.id('Cselect4'));
		this.nonserealizedAssetInput = element(by.id('Cbar3'));
		this.commissioningNxtBtn_FLTY = element(by.xpath('//*[@id="CbtnNextComm"]'));
		this.dccmsgRequired = element(by.xpath('//input[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.commsHubConnectedNo = element(by.id('Cradionm2'));
		this.commHubConnected_FLTY = element(by.xpath('//*[@id="Cradionm2"]/span'));
		this.commsHubConnectedNo_1 = element(by.xpath('//input[@id="Cradionm2"]/following-sibling::span[@class="outer"]'));
		this.commissioningNxtBtn = element(by.id('CbtnNextComm'));
		this.replacecommsNextButton = element(by.id('replacechnowan_nextButton'));
		this.replacecommsNextButton_1 = element(by.id('replacechnowan2_nextButton'));
		this.replacecommshubNowan = element(by.xpath('(//div/h4[text()="Replace Comms Hub No WAN"])'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.commshubReplacedyes = element(by.xpath('//*[@id="replacechnowan_ICHreplacedRadioTrue"]/span'));
		this.commshubReplacedyes_1 = element(by.id('replacechnowan2_ICHreplacedRadioTrue'));
		this.commshubToInstall_1 = element(by.id('replacechnowan2_assetList'));
		this.CHFID_1 = element(by.id('replacechnowan2_chfId'));
		this.commshubLocation_1 = element(by.id('replacechnowan2_chubLocationSelect'));
		this.aerialInstalled_1 = element(by.id('replacechnowan2_aerialInstalled_y'));
		this.commshubConnectionMethod_1 = element(by.id('replacechnowan2_connectionMethod'));
		this.cradleSerialNo_1 = element(by.xpath('//*[@id="replacechnowan2_cradleSerialNumber"]'));
		this.replacecommsCapturePhoto_1 = element(by.id('replacechnowan2_photoButton'));
		this.replacecommshubNowan_1 = element(by.xpath('//*[@id="replacechnowan2_chnowanconnectedfalse"]/span'));
		this.replacecommsPremiseType_1 = element(by.id('replacechnowan2_PremTypeDropdownRepNoWan'));
		this.replacecommsPremiseTypeOption = element(by.xpath('//select[@id="replacechnowan_PremTypeDropdownRepNoWan"]/option[2]'));
		this.metalObstructionYes_1 = element(by.xpath('//*[@id="replacechnowan2_metalObsTrue"]/span'));
		this.sharedObstructionNo_1 = element(by.xpath('//*[@id="replacechnowan2_sharedObsFalse"]/span'));
		this.connectivityObstructionNo_1 = element(by.xpath('//*[@id="replacechnowan2_connectObsFalse"]/span'));
		this.confirmInstallAndLeaveYes_1 = element(by.xpath('//*[@id="replacechnowan2_CanLeave1RTrue"]/span'));
		this.smartNoLitLeftOnsiteTxt = element(by.xpath('//h4[contains(text(),"Smart Literature Not Left on Site")]'));
		this.commshubToInstall = element(by.id('replacechnowan_assetList'));
		this.CHFID = element(by.id('replacechnowan_chfId'));
		this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
		this.selectinstallAssetOption = element(by.xpath('(//select[@id="replacechnowan_assetList"]/option)[4]'));
		this.selectinstallAssetOption_1 = element(by.xpath('(//select[@id="replacechnowan2_assetList"]/option)[4]'));
		this.dummydiv1 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[5]'));
		this.dummydiv2 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[3]'));
		this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[4]'));
		this.dummydiv3 = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[1]'));
		this.commshubLocation = element(by.id('replacechnowan_chubLocationSelect'));
		this.aerialInstalled = element(by.id('replacechnowan_aerialInstalled_y'));
		this.commshubConnectionMethod = element(by.id('replacechnowan_connectionMethod'));
		this.replacecommsCapturePhoto = element(by.id('replacechnowan_photoButton'));
		this.replacecommshubNowan = element(by.xpath('//*[@id="replacechnowan_chnowanconnectedfalse"]/span'));
		this.replacecommsPremiseType = element(by.id('replacechnowan_PremTypeDropdownRepNoWan'));
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

		//

		//############## I&L Abort Job completion page ##############
		this.PPMIDOfferedNo = element(by.id('ihdscan2_ihdPpmidOfferedfalse'));
		this.PPMIDAddNotes = element(by.id('ihdscan2_textIhdPpmidNotOffered'));
		this.PPMIDOfferedNo = element(by.id('ihdscan2_ihdPpmidOfferedfalse'));

		this.gasAndElecMeterN = element(by.id('rb_GasElecMPairSuc_n'));
		this.fullHanDeviceNo = element(by.id('rb_FulHANEst_n'));
		this.fullWanAllmeterNo = element(by.id('rb_FulWANEst_n'));
		this.fullconfigElecApplyNo = element(by.id('rb_FullCFigE_n'));

		this.PPMIDAddNotes_1 = element(by.id('newihdppmid_textIhdPpmidNotOffered'));
		this.PPMIDOfferedNo_1 = element(by.xpath('//*[@id="newihdppmid_ihdPpmidOfferedfalse"]/span'));
		this.gasAndElecMeterN = element(by.id('rb_GasElecMPairSuc_n'));
		this.fullHanDeviceNo = element(by.id('rb_FulHANEst_n'));
		this.fullWanAllmeterNo = element(by.id('rb_FulWANEst_n'));
		this.fullconfigElecApplyNo = element(by.xpath('//*[@id="rb_FullCFigE_n"]/label/span'));

		this.ppmidNXTBtn = element(by.id('ihdscan2_nextButton'));
		this.ppmidNXTBtn_1 = element(by.id('newihdppmid_nextButton'));
		this.devicebindingNextSection = element(by.id('dbc2_trad_btnNextEff'));
		this.configureallmetersNextSection = element(by.id('btnNextEff'));
		this.smartLitLeftNo = element(by.id('radiose4'));
		this.additionalInfo = element(by.id('smicopAddInfoCheckboxNo'));
		this.demoEquipment = element(by.id('radiose8'));
		this.gsmeJoinedYes = element(by.id('dbc2_gsme_joined_y'));
		this.esmeJoinedNo = element(by.id('dbc2_esme_joined_n'));
		this.devicebindnext = element(by.xpath('//*[@id="dbc2_btnNextEff"]'));

		//##################Reason Popup#####################
		this.AbortNoAccessReasonCodes = element(by.xpath('//*[text()="Abort: No Access Reason Codes"]'));

		// ########################CGP added For PreGas Test################
		this.abortBtn = element(by.xpath('//button[@id="btn2"]'));
		this.abortApntButton = element(by.id("btnCallabr2"));
		this.abortPreGas = element(by.id("btn_Gas_fail"));

		this.AbortGasMeterReasonCodes = element(by.xpath('//*[text()="Abort: Gas Meter Reason Codes"]'));
		this.RescanAssetPopUp = element(by.xpath('//button[@class="confirm"]'));
		this.FullWANYes = element(by.id('rb_FulWANEst_y'));
		this.FullCOnfigAppliedElecYes = element(by.id('rb_FullCFigE_y'));
		this.fullConfigAppliedGasYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[1]'));

		this.fullConfigAppliedPPMIDYes = element(by.xpath('(//input[@id="rcfg5"]/following-sibling::span[@class="cr"])[2]'));
		this.capturePPMIDBtn = element(by.xpath('//div/button[@class="cameraBtn2line grey mandatoryWhite"]'));
		this.PPMIDNxtBtn = element(by.xpath('//div/button[@id="btnNextEff"]'));
		this.checkDetails = element(by.xpath('//button[@class="confirm"]'));
		this.fullConfigAppliedPPMIDYesAbort = element(by.xpath('(//input[@id="rcfg5"])'));
		this.nextButtonWAN = element(by.id('btnNextEff'));
		this.btnnext1 = element(by.xpath('(//*[@id="btnNextComm"])[1]'));
		this.Tst22removedmeterReading = element(by.xpath('//input[@id="input0"]'));
		this.Tst22removemeterText = element(by.xpath('(//div[text()="Removed Meter Reading(s):"])[2]'));
		this.Tst22RemoveMeterEnNxt = element(by.xpath('(//div[@class = "checkLabel"])[5]'));
		this.Tst22RemoveNxtEnable = element(by.css('.ng-scope > .ng-scope:nth-child(5) .checkLabel'));
		this.randomClickEX23 = element(by.id('rb_UnReadMet_y'));
	}

	public VerifyAbortReasonCodePopup() {
		if (this.AbortNoAccessReasonCodes.isDisplayed) {
			this.AbortNoAccessReasonCodes.getText().then(async function (abortreason) {
				console.log("find Appointment Page Text  " + abortreason);
			});
		}
	}

	//Abort reason popup options - generic function ################
	public async selectreasonOptionAndAbort(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (this.GenericReasonCodeSelect.isDisplayed()) {
			await this.GenericReasonCodeSelect.click();
		}
		try {
			await expect(this.abortNxtbtn.isDisplayed());
			await this.abortNxtbtn.click();
		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys(notesstring);
		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAppointment.isDisplayed()) {
			await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
	}

	public async noAccessAbortContactMade() {
		await applist.clickOnContactMadeOtion();
		await utility.wait(utility.very_low);
		if (this.appointmentconfirmationNo.isDisplayed()) {
			await this.appointmentconfirmationNo.click();
		}
		await utility.wait(utility.very_low);
		if (this.appointmentRescheduledNo.isDisplayed()) {
			await this.appointmentRescheduledNo.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortNoAccessContactMade.isDisplayed()) {
			await this.abortNoAccessContactMade.click();
		}

	}

	//Abort Options ################
	public async notConvinientOptionAndAbort() {
		await utility.wait(utility.very_low);
		if (this.notConvinientRadioBtn.isDisplayed()) {
			await this.notConvinientRadioBtn.click();
		}
		try {
			await expect(this.abortNxtbtn.isDisplayed());
			await this.abortNxtbtn.click();
		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys('Not able to Call the customer');
		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAppointment.isDisplayed()) {
			await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
	}

	// Unable to turn off Gas option ###################
	public async unableToOffGasOptionAndAbort() {
		await utility.wait(utility.very_low);
		if (this.unabletoOffGasOption.isDisplayed()) {
			await this.unabletoOffGasOption.click();
		}
		try {
			if (this.abortNxtbtn.isDisplayed()) {
				await this.abortNxtbtn.click();
			}
		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.very_low);

		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys('Leave Gass Off');
		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAppointment.isDisplayed()) {
			await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
	}

	// No Meter Onsite Option##########
	public async elecRiskOptionAndAbortElecMeter(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (await this.reasonforAbort.isDisplayed() && await this.reasonforAbort.isSelected()) {
		}
		await utility.wait(utility.very_low);
		if (this.abortElecNxtBtn.isDisplayed()) {
			await this.abortElecNxtBtn.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys(notesstring);
			await utility.wait(utility.very_low);
		}
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.AbortElecMeter.isDisplayed()) {
			await this.AbortElecMeter.click();
		}
		await utility.wait(utility.very_low);

	}


	public async elecRiskOptionAndAbortAppointment(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (await this.reasonforAbort.isDisplayed() && await this.reasonforAbort.isSelected()) {
		}
		await utility.wait(utility.very_low);
		if (this.abortElecNxtBtn.isDisplayed()) {
			await this.abortElecNxtBtn.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys(notesstring);
			await utility.wait(utility.very_low);
		}
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAppointment.isDisplayed()) {
			await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);

	}


	// Abort Rescan Pop up ###################
	public async reScanInfoPopup() {

		if (this.reScanPopUpOK.isDisplayed()) {
			await this.reScanPopUpOK.click();
		}
		await utility.wait(utility.very_low);
	}

	public async suspendJobonTheDoorStepDetails() {
		await utility.wait(utility.low);
		var select = door.selectInputField;
		select.$('[value="C94"]').click();

		if (this.accessToSiteN.isDisplayed()) {
			await utility.wait(utility.medium_low);
			await this.accessToSiteN.click();
		}

		if (door.customerOnSiteY.isDisplayed()) {
			await utility.wait(utility.medium_low);
			await door.customerOnSiteY.click();
		}

		if (this.captureNoAcess.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.captureNoAcess.click();
		}

		if (this.suspendJobYes.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.suspendJobYes.click();
		}
		if (this.AddNotesSuspend.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.AddNotesSuspend.sendKeys('Come Back Later');
		}
		if (this.suspendJobBtn.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.suspendJobBtn.click();
		}
	}


	//Abort Job after Suspend #################  
	public async abortJoboAfterSuspend() {
		await utility.wait(utility.very_low);
		if (this.suspendJobNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.suspendJobNo.click();
		}
		if (this.reScheduleAppointNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.reScheduleAppointNo.click();
		}
		if (this.abortNoAcessBtn.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.abortNoAcessBtn.click();
		}
	}
	//updates
	/***
	* @Author Jansi Victor
	* @description ABORT Fill Risk Elec page details
	***/
	public async abortJoboAfterInitialRisk() {

		if (risk.canYouSmellText.isDisplayed()) {
			await risk.canYouSmellYES.click();
		}
		if (risk.turnedOffGasYES.isDisplayed()) {
			await risk.turnedOffGasYES.click();
		}
		if (risk.callEGPYES.isDisplayed()) {
			await risk.callEGPYES.click();
		}
		if (risk.inputEGPRef.isDisplayed()) {
			await utility.wait(utility.Avg_low);
			await risk.inputEGPRef.clear();
			await risk.inputEGPRef.sendKeys('123456');
		}
		if (risk.reportToHS.isDisplayed()) {
			await utility.wait(utility.Avg_low);
			await risk.reportToHS.click();
		}
		if (risk.airLineRefInput.isDisplayed()) {
			await utility.wait(utility.Avg_low);
			await risk.airLineRefInput.clear();
			await risk.airLineRefInput.sendKeys('5678910');
		}
		if (this.OKtoProceedEGPOutcomeN.isDisplayed()) {
			await utility.wait(utility.Avg_low);
			await this.OKtoProceedEGPOutcomeN.click();
			await utility.wait(utility.medium_low);
		}
		if (this.riskAssessAbort.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.riskAssessAbort.click();
			await utility.wait(utility.Avg_low);
		}

	}
	public async selectreasonOptionAndAbortGas(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (this.GenericReasonCodeSelect.isDisplayed()) {
			await this.GenericReasonCodeSelect.click();
		}
		try {
			await expect(this.abortNxtbtn.isDisplayed());
			await this.abortNxtbtn.click();
		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys(notesstring);
		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.gasabortAppointment.isDisplayed()) {
			await this.gasabortAppointment.click();
		}
		await utility.wait(utility.very_low);
	}


	//TST135
	public async TST135fillConfigAllmeter() {
		await utility.wait(5000);
		if (job.FullWANYes.isDisplayed()) {
			await job.FullWANYes.click();
		}
		await utility.wait(1000);
		if (job.FullCOnfigAppliedElecYes.isDisplayed()) {
			await job.FullCOnfigAppliedElecYes.click();
		}
		if (job.deviceOK.isDisplayed()) {
			await job.deviceOK.click();
		}
		await utility.wait(3000);
		// if (job.fullConfigAppliedGasYes.isDisplayed()) {
		// 	await job.fullConfigAppliedGasYes.click();
		// }
		if (job.fullEx20ConfigAppliedGasYes.isDisplayed()) {
			await job.fullEx20ConfigAppliedGasYes.click();
		}
		if (job.capturePPMIDBtn.isDisplayed()) {
			await job.capturePPMIDBtn.click();
		}
		await utility.wait(3000);
		if (job.nextButtonWAN.isDisplayed()) {
			await job.nextButtonWAN.click();
		}
	}

	/***
		 * @Author Jansi Victor
		 * @description Remove Meter
		 ***/

	public async Tst35fillElecmeterrem() {
		await utility.wait(utility.low);
		if (await remove.RemoveElecAssetrplacedorremoved.isDisplayed()) {
			await remove.RemoveElecAssetrplacedorremoved.click();
		}
		await utility.wait(utility.low);
		if (await remove.statusofElecAssetSelect.isDisplayed()) {
			var select = remove.statusofElecAssetSelect;
			await select.$('[value="0"]').click();
		}
	}

	public async ElectricInitmeterReading() {
		await utility.wait(utility.very_low);
		if (await inst.captureMeterReadingSend.isDisplayed()) {
			await inst.captureMeterReadingSend.clear();
			await inst.captureMeterReadingSend.sendKeys("12345");
		}
		await utility.wait(utility.medium);
		await expect(inst.CaptureMeterReadingenableok.isPresent());
		if (inst.CaptureMeterReadingenableok.isDisplayed()) {
			var element = inst.CaptureMeterReadingenableok;
			browser.executeScript("arguments[0].click()", element);
			await utility.wait(utility.medium_low);
		}
	}

	public async TST77DetermineFaulty() {
		await utility.wait(utility.low);
		if (await remove.commshubconnectedtoAssetN.isDisplayed()) {
			await remove.commshubconnectedtoAssetN.click();
		}
		if (await remove.carryoutWorkNo.isDisplayed()) {
			await remove.carryoutWorkNo.click();
		}
		if (await remove.commshubNextbtn.isDisplayed()) {
			await remove.commshubNextbtn.click();
		}
	}


	/***
	 * @Author Aparna Das
	 * @description ABORT Fill Risk Elec page details
	 ***/

	public async fillRiskAssesmentElecFields() {
		if (await risk.performRiskText.isDisplayed()) {
			await risk.performRiskYES.click();
		}
		if (await risk.selectRiskReasonDD.isDisplayed()) {
			var select = risk.selectRiskReasonDD;
			select.$('[value="4"]').click();
		}
		if (await risk.riskAssessmentinput.isDisplayed()) {
			await risk.riskAssessmentinput.sendKeys('A05 : Sign of DB equipment burning, smoking or arcing');
		}
		if (await this.capturePhotoAbortElec.isDisplayed()) {
			await this.capturePhotoAbortElec.click();
		}
		if (await this.updatedHnSY.isDisplayed()) {
			await this.updatedHnSY.click();
		}
		if (await this.airlineRefInput.isDisplayed()) {
			await this.airlineRefInput.sendKeys('1');
		}
		if (await this.updateDNOY.isDisplayed()) {
			await this.updateDNOY.click();
		}
		if (await this.dnoInput.isDisplayed()) {
			await this.dnoInput.sendKeys('2');
		}
		if (await this.workCanbeCompletedN.isDisplayed()) {
			await this.workCanbeCompletedN.click();
		}
		await utility.wait(utility.very_low);
		if (await this.elecAbortBtn.isDisplayed()) {
			await this.elecAbortBtn.click();
		}
	}

	/***
	 * @Author Aparna Das
	 * @description ABORT Fill Risk Gas page details
	 ***/

	public async fillRiskAssesmentGasFields() {
		if (await this.capturemeterPressureMed.isDisplayed()) {
			await this.capturemeterPressureMed.click();
		}
		if (await this.medPressureNo.isDisplayed()) {
			await this.medPressureNo.click();
		}
		if (await this.abortGas.isDisplayed()) {
			await this.abortGas.click();
		}
		await utility.wait(utility.very_low);

		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys('Leave Gass Off');
		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAppointment.isDisplayed()) {
			await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
	}

	/***
	 * @Author Jansi Victor
	 * @description ABORT Fill Risk Gas page details
	 ***/
	public async AbortGas() {
		await utility.wait(utility.very_low);
		if (await this.abortGas.isDisplayed()) {
			await this.abortGas.click();
		}
	}

	public async AbortGas_Btnfail() {
		await utility.wait(utility.very_low);
		if (await this.abortbtnfail.isDisplayed()) {
			await this.abortbtnfail.click();
		}
	}

	/***
	 * @Author Jansi Victor
	 * @description ABORT GAS Click
	 ***/
	public async selectreasonOptionAndAbortforgas(xpathparam, notesstring) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.very_low);
		if (this.GenericReasonCodeSelect.isDisplayed()) {
			await this.GenericReasonCodeSelect.click();
		}
		try {
			await expect(this.abortNxtbtn.isDisplayed());
			await this.abortNxtbtn.click();
		} catch (error) {
			console.log('No Next btn present Currently');
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys(notesstring);
		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
	}
	public async GasabortApp() {
		await utility.wait(utility.very_low);
		if (this.gasabortApp.isDisplayed()) {
			await this.gasabortApp.click();
		}
		await utility.wait(utility.very_low);
	}

	public async AbortGasbtncall() {
		await utility.wait(utility.very_low);
		if (this.gasabortAppointment.isDisplayed()) {
			await this.gasabortAppointment.click();
		}
		await utility.wait(utility.very_low);
	}
	/***
	 * @Author Aparna Das
	 * @description ABORT pre GAs Test details
	 ***/

	public async fillPreGasAbort() {
		if (await this.preGASinstallN.isDisplayed()) {
			await this.preGASinstallN.click();
		}
		if (await this.abortGas.isDisplayed()) {
			await this.abortGas.click();
		}
		await utility.wait(utility.very_low);
	}

	/***
	 * @Author Supriya
	 * @description ABORT for Leave and install
	 * Functions altered per flow
	 ***/

	public async fillPPMIDSection() {
		if (this.PPMIDOfferedNo.isDisplayed()) {
			await this.PPMIDOfferedNo.click();
		}

		if (this.PPMIDAddNotes.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.PPMIDAddNotes.sendKeys('Come Back Later');
		}
		if (this.ppmidNXTBtn.isDisplayed()) {
			await this.ppmidNXTBtn.click();
		}

	}

	public async fillPPMIDSection_EXCH22() {
		if (this.PPMIDOfferedNo_1.isDisplayed()) {
			await this.PPMIDOfferedNo_1.click();
		}

		if (this.PPMIDAddNotes_1.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.PPMIDAddNotes_1.sendKeys('Come Back Later');
		}
		if (this.ppmidNXTBtn_1.isDisplayed()) {
			await this.ppmidNXTBtn_1.click();
		}

	}

	public async fillDeviceBindingSection() {
		if (this.gasAndElecMeterN.isDisplayed()) {
			await this.gasAndElecMeterN.click();
		}

		if (this.fullHanDeviceNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.fullHanDeviceNo.click();
		}
		if (this.devicebindingNextSection.isDisplayed()) {
			await this.devicebindingNextSection.click()
		}

	}

	public async fillDeviceBindingSection_Installremove() {
		if (this.gsmeJoinedYes.isDisplayed()) {
			await this.gsmeJoinedYes.click();
		}

		await utility.wait(utility.low);
		if (this.devicebindnext.isDisplayed()) {
			await this.devicebindnext.click()
		}

	}


	public async fillElecmeterremEX23() {

		await utility.wait(3000);

		if (await this.RemoveElecAssetrplacedorremoved.isDisplayed()) {

			await this.RemoveElecAssetrplacedorremoved.click();

		}

		await utility.wait(3000);

		if (await this.statusofElecAssetSelect.isDisplayed()) {

			var select = this.statusofElecAssetSelect;

			await select.$('[label="No Fault Found"]').click();

		}

		await utility.wait(1000);

		if (await this.removedmeterReading.isDisplayed()) {

			await this.removedmeterReading.clear();

			await this.removedmeterReading.sendKeys('12345');

			await utility.wait(5000);

			await this.randomClick2.click();
			console.log("Random Click EX23");

		}

	}

	//Post Installation for Abort ######################

	public async filltheforPostinstAbort() {
		await utility.wait(utility.Avg_low);
		if (await inst.ContactGTY.isDisplayed()) {
			await inst.ContactGTY.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.NationalGridSend.isDisplayed()) {
			await inst.NationalGridSend.clear();
			await inst.NationalGridSend.sendKeys("1");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.HandSAirline.isDisplayed()) {
			await inst.HandSAirline.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.Airlineref1.isDisplayed()) {
			await inst.Airlineref1.clear();
			await inst.Airlineref1.sendKeys("2");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.GTAttendenceOnsiteY.isDisplayed()) {
			await inst.GTAttendenceOnsiteY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.GTresolveIssueY.isDisplayed()) {
			await inst.GTresolveIssueY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.TightnessIssueY.isDisplayed()) {
			await inst.TightnessIssueY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.cappedgascooker.isDisplayed()) {
			await inst.cappedgascooker.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.addnlnote.isDisplayed()) {
			await inst.addnlnote.clear();
			await inst.addnlnote.sendKeys("Gas Notes");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.ReplacedGasMeterY.isDisplayed()) {
			await inst.ReplacedGasMeterY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.ReplacedGasregulatorY.isDisplayed()) {
			await inst.ReplacedGasregulatorY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.TightnessperformedY.isDisplayed()) {
			await inst.TightnessperformedY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.cappostinstallation.isDisplayed()) {
			await inst.cappostinstallation.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.Dropinpressure.isDisplayed()) {
			await inst.Dropinpressure.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.dropinpressureselect.isDisplayed()) {
			var select = inst.dropinpressureselect;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.very_low);
		if (await inst.selectMeterType.isDisplayed()) {
			var select = inst.selectMeterType;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.GasTightnessPassed.isDisplayed()) {
			await inst.GasTightnessPassed.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.TestWitness.isDisplayed()) {
			await inst.TestWitness.clear();
			await inst.TestWitness.sendKeys("Ellie Taylor");
		}
		await utility.wait(utility.very_low);
		if (await inst.standingPressure.isDisplayed()) {
			await inst.standingPressure.clear();
			await inst.standingPressure.sendKeys("1.1");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.cappostinstallationpressure.isDisplayed()) {
			await inst.cappostinstallationpressure.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.workingPressure.isDisplayed()) {
			await inst.workingPressure.clear();
			await inst.workingPressure.sendKeys("1.5");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.captureworkingPressure.isDisplayed()) {
			await inst.captureworkingPressure.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.captureFinalMeterInstall.isDisplayed()) {
			await inst.captureFinalMeterInstall.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.MsgreqDCC.isDisplayed()) {
			await inst.MsgreqDCC.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.PostinstallNext.isDisplayed()) {
			await inst.PostinstallNext.click();
		}
	}


	public async fillElecmeterremEX24() {

		await utility.wait(3000);

		if (await this.RemoveElecAssetrplacedorremoved.isDisplayed()) {

			await this.RemoveElecAssetrplacedorremoved.click();

		}

		await utility.wait(3000);

		if (await this.statusofElecAssetSelect.isDisplayed()) {

			var select = this.statusofElecAssetSelect;

			await select.$('[label="No Fault Found"]').click();

		}

		await utility.wait(1000);

		if (await this.removedgasmeterreading.isDisplayed()) {

			await this.removedgasmeterreading.clear();

			await this.removedgasmeterreading.sendKeys('12345');

			await utility.wait(5000);

			await this.randomClick2.click();
			console.log("Random Click EX24");

		}

	}

	public async fillGasmeterremEX24() {

		await utility.wait(3000);

		if (await this.RemoveGasAssetrplacedorremoved.isDisplayed()) {

			await this.RemoveGasAssetrplacedorremoved.click();

		}

		await utility.wait(3000);

		if (await this.statusofAssetSelect.isDisplayed()) {

			var select = this.statusofAssetSelect;

			await select.$('[label="No Fault Found"]').click();

		}

		await utility.wait(1000);

		if (await this.removedmeterReading.isDisplayed()) {

			await this.removedmeterReading.clear();

			await this.removedmeterReading.sendKeys('12345');

			await utility.wait(5000);

			await this.randomClick.click();
			console.log("Random Click EX24");

		}

	}

	public async newregulatorsection_EXCH24() {
		{
			await utility.wait(utility.very_low);
			if (await this.newregulatorReplaced.isDisplayed()) {
				await this.newregulatorReplaced.click();
			}
			await utility.wait(utility.very_low);
			if (await this.selectValidAssettoInst1.isDisplayed()) {
				var select = this.selectValidAssettoInst1;
				select.$('[value="MA6NC181323805"]').click();
			}
			await utility.wait(utility.very_low);
			if (await this.gasmeterserialSendreg.isDisplayed()) {
				await this.gasmeterserialSendreg.clear();
				await this.gasmeterserialSendreg.sendKeys("MA6NC181323805");
			}
			await utility.wait(utility.very_low);
			if (await this.dummydiv1.isDisplayed()) {
				await this.dummydiv1.click();
			}
			await utility.wait(utility.very_low);
			if (await this.AssetaddedtowallNewReg.isDisplayed()) {
				await this.AssetaddedtowallNewReg.click();
			}
			await utility.wait(utility.very_low);
			if (await this.nextSecnewRegulator.isDisplayed()) {
				await this.nextSecnewRegulator.click();
			}
		}


	}

	public async newregulatorsection_FLTYTRAD() {
		{
			await utility.wait(utility.very_low);
			if (await this.newregulatorReplaced.isDisplayed()) {
				await this.newregulatorReplaced.click();
			}
			await utility.wait(utility.very_low);
			if (await this.selectValidAssettoInst2.isDisplayed()) {
				var select = this.selectValidAssettoInst2;
				select.$('[value="MA6NC181323805"]').click();
			}
			await utility.wait(utility.very_low);
			if (await this.gasmeterserialSendreg.isDisplayed()) {
				await this.gasmeterserialSendreg.clear();
				await this.gasmeterserialSendreg.sendKeys("MA6NC181323805");
			}
			await utility.wait(utility.very_low);
			if (await this.dummydiv3.isDisplayed()) {
				await this.dummydiv3.click();
			}
			await utility.wait(utility.very_low);
			if (await this.AssetaddedtowallNewReg.isDisplayed()) {
				await this.AssetaddedtowallNewReg.click();
			}
			await utility.wait(utility.very_low);
			if (await this.nextSecnewRegulator.isDisplayed()) {
				await this.nextSecnewRegulator.click();
			}
		}


	}

	public async fillGasInstallKitDetails_InstallLeave() {

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
		await this.commsHubConnectedNo_1.click();
		await utility.wait(utility.medium_low);
		await this.installKitNxtBtn1.click();
	}

	public async fillthefieldsforperformpost_InstallAndLeave() {
		await utility.wait(utility.Avg_low);
		if (await this.ContactGTY.isDisplayed()) {
			await this.ContactGTY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.NationalGridSend.isDisplayed()) {
			await this.NationalGridSend.clear();
			await this.NationalGridSend.sendKeys("1");
		}
		await utility.wait(utility.Avg_low);
		if (await this.HandSAirline.isDisplayed()) {
			await this.HandSAirline.click();
		}
		await utility.wait(utility.very_low);
		if (await this.Airlineref1.isDisplayed()) {
			await this.Airlineref1.clear();
			await this.Airlineref1.sendKeys("2");
		}
		await utility.wait(utility.Avg_low);
		if (await this.GTAttendenceOnsiteY.isDisplayed()) {
			await this.GTAttendenceOnsiteY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.GTresolveIssueY.isDisplayed()) {
			await this.GTresolveIssueY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.TightnessIssueY.isDisplayed()) {
			await this.TightnessIssueY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.cappedgascooker.isDisplayed()) {
			await this.cappedgascooker.click();
		}
		await utility.wait(utility.very_low);
		if (await this.addnlnote.isDisplayed()) {
			await this.addnlnote.clear();
			await this.addnlnote.sendKeys("Gas Notes");
		}
		await utility.wait(utility.Avg_low);
		if (await this.ReplacedGasMeterY.isDisplayed()) {
			await this.ReplacedGasMeterY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.ReplacedGasregulatorY.isDisplayed()) {
			await this.ReplacedGasregulatorY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.TightnessperformedY.isDisplayed()) {
			await this.TightnessperformedY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.cappostinstallation.isDisplayed()) {
			await this.cappostinstallation.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.Dropinpressure.isDisplayed()) {
			await this.Dropinpressure.click();
		}
		await utility.wait(utility.very_low);
		if (await this.dropinpressureselect.isDisplayed()) {
			var select = this.dropinpressureselect;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.selectMeterType.isDisplayed()) {
			var select = this.selectMeterType;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.GasTightnessPassed.isDisplayed()) {
			await this.GasTightnessPassed.click();
		}
		await utility.wait(utility.very_low);
		if (await this.TestWitness.isDisplayed()) {
			await this.TestWitness.clear();
			await this.TestWitness.sendKeys("Ellie Taylor");
		}
		await utility.wait(utility.very_low);
		if (await this.standingPressure1.isDisplayed()) {
			await this.standingPressure1.clear();
			await this.standingPressure1.sendKeys("1.1");
		}
		await utility.wait(utility.Avg_low);
		if (await this.cappostinstallationpressure.isDisplayed()) {
			await this.cappostinstallationpressure.click();
		}
		await utility.wait(utility.very_low);
		if (await this.workingPressure.isDisplayed()) {
			await this.workingPressure.clear();
			await this.workingPressure.sendKeys("1.5");
		}
		await utility.wait(utility.Avg_low);
		if (await this.captureworkingPressure.isDisplayed()) {
			await this.captureworkingPressure.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.captureFinalMeterInstall.isDisplayed()) {
			await this.captureFinalMeterInstall.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.MsgreqDCC.isDisplayed()) {
			await this.MsgreqDCC.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.hubconnectdtoWAN.isDisplayed()) {
			await this.hubconnectdtoWAN.click();
		}
		await utility.wait(utility.Avg_low);
		if (await this.PostinstallNext.isDisplayed()) {
			await this.PostinstallNext.click();
		}
	}

	public async fillElecmeterrem_FLTY() {
		await utility.wait(utility.low);
		if (await this.RemoveElecAssetrplacedorremoved1.isDisplayed()) {
			await this.RemoveElecAssetrplacedorremoved1.click();
		}
		await utility.wait(utility.low);
		if (await this.statusofElecAssetSelect.isDisplayed()) {
			var select = this.statusofElecAssetSelect;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.removedmeterReading.isDisplayed()) {
			await this.removedmeterReading.clear();
			await this.removedmeterReading.sendKeys('12345');

		}
	}

	public async fillDeviceBindingSection_InstallEXCH23() {
		if (this.esmeJoinedNo.isDisplayed()) {
			await this.esmeJoinedNo.click();
		}

		await utility.wait(utility.low);
		if (this.devicebindnext.isDisplayed()) {
			await this.devicebindnext.click()
		}

	}

	public async fillDeviceBindingSection_EXCH19() {
		if (this.fullHanDeviceNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.fullHanDeviceNo.click();
		}
		if (this.devicebindingNextSection.isDisplayed()) {
			await this.devicebindingNextSection.click()
		}

	}

	public async fillSmartLiteratureEducationSection() {
		if (this.smartLitLeftNo.isDisplayed()) {
			await this.smartLitLeftNo.click();
		}
		await utility.wait(utility.low);
		if (this.additionalInfo.isDisplayed()) {
			await this.additionalInfo.click();
		}
		await utility.wait(utility.low);
		if (this.demoEquipment.isDisplayed()) {
			await this.demoEquipment.click();
		}
		await utility.wait(utility.low);
	}

	public async fillConfigAllMetersSection_EXCH19() {
		if (this.fullWanAllmeterNo.isDisplayed()) {
			await this.fullWanAllmeterNo.click();
		}
		await utility.wait(utility.low);
		if (this.configureallmetersNextSection.isDisplayed()) {
			await this.configureallmetersNextSection.click();
			await utility.wait(utility.very_low);
		}

	}

	/***
	 * @Author Supriya Harikumar
	 * @description Smart No Literature section text display
	 ***/
	public async SmartNoLiteraturedispaly() {
		if (this.smartNoLitLeftOnsiteTxt.isDisplayed()) {
			await this.smartNoLitLeftOnsiteTxt.getText().then(function (SmartLiterature) {
				console.log("find smartNoLit Text  " + SmartLiterature);
			});
		}
	}

	public async fillConfigAllMetersSection() {
		if (this.fullWanAllmeterNo.isDisplayed()) {
			await this.fullWanAllmeterNo.click();
		}

		if (this.fullconfigElecApplyNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.fullconfigElecApplyNo.click();
		}

		// if (this.fullconfigElecApplyNo.isDisplayed()) {
		// 	await this.fullconfigElecApplyNo.click();
		// 	await utility.wait(utility.very_low);
		// }
		await utility.wait(utility.low);
		if (this.configureallmetersNextSection.isDisplayed()) {
			await this.configureallmetersNextSection.click();
			await utility.wait(utility.very_low);
		}

	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill commissioning details Install and Leave 
	 ***/

	public async verifyReplaceCommshubNoWANSection() {
		this.replacecommshubNowan.getText().then(function (replacecomms) {
			console.log("find replacecommshubsection Text  " + replacecomms);
		});
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill Gas Post Installation Gas Tightness Test section Install And Leave
	 ***/
	public async fillPostInstallationGasDetailsInstallLeave() {
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
		await this.commsHubConnectedNo_1.click();
		await utility.wait(utility.Avg_low);
		//changed to polGasNxtBtn nt working chk polNxtBtn element
		browser.executeScript('arguments[0].scrollIntoView()', this.polNxtBtn.getWebElement());
		await this.polNxtBtn.click();
	}

	/***
	 * @Author Supriya Harikumar
	 * @description Fill Gas Post Installation Gas Tightness Test section Install And Leave
	 ***/
	public async fillPostInstallationGasDetails_EXCH22() {
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
		await this.commsHubConnectedNo_1.click();
		await utility.wait(utility.Avg_low);
		//changed to polGasNxtBtn nt working chk polNxtBtn element
		browser.executeScript('arguments[0].scrollIntoView()', this.polNxtBtn_1.getWebElement());
		await this.polNxtBtn_1.click();
	}

	public async clickGasInstallSubmitButton() {
		if (await this.gasbuttonSubmit.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.gasbuttonSubmit.click()
		}
	}

	public async clickNMEXInstallSubmitButton() {
		if (await this.gasNMEXbuttonSubmit.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.gasNMEXbuttonSubmit.click()
		}
	}
	public async clickElecSubmitButton() {
		if (await this.elecMeterSubmit.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.elecMeterSubmit.click()
		}
	}

	public async clickElecInstallSubmitButton() {
		if (await this.elecInstallSubmit.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.elecInstallSubmit.click()
		}
	}

	public async clickGasSubmitButton() {
		if (await this.gasMeterSubmit.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.gasMeterSubmit.click()
		}
	}



	public async fillReplaceCommshubdetails(index: number) {

		if (await this.commshubReplacedyes.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID.isPresent());
			var options = this.selectinstallAssetOption.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID.clear();
			await utility.wait(utility.very_low);
			await this.CHFID.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation.isDisplayed()) {
				var select = this.commshubLocation;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled.isDisplayed()) {
				await this.aerialInstalled.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod.isDisplayed()) {
				var select = this.commshubConnectionMethod;
				select.$('[value="0"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto.isDisplayed()) {
				await this.replacecommsCapturePhoto.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan.isDisplayed()) {
				await this.replacecommshubNowan.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType.isDisplayed()) {
				var select = this.replacecommsPremiseType;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes.isDisplayed()) {
				await this.metalObstructionYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo.isDisplayed()) {
				await this.sharedObstructionNo.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo.isDisplayed()) {
				await this.connectivityObstructionNo.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes.isDisplayed()) {
				await this.confirmInstallAndLeaveYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.assetsUnaffectedYes.isDisplayed()) {
				await this.assetsUnaffectedYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsNextButton.isDisplayed()) {
				await this.replacecommsNextButton.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	public async fill16commsdtls_InstallAndLeave() {
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			await this.commshubconnectedtoSupplyY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			await this.commshubconnectedtoWanY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoAssetY.isDisplayed()) {
			await this.commshubconnectedtoAssetY.click();
		}
	}



	public async fillReplaceCommshubdetails_EXCH23(index: number) {

		if (await this.commshubReplacedyes.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID.isPresent());
			var options = this.selectinstallAssetOption.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID.clear();
			await utility.wait(utility.very_low);
			await this.CHFID.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv2.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation.isDisplayed()) {
				var select = this.commshubLocation;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled.isDisplayed()) {
				await this.aerialInstalled.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod.isDisplayed()) {
				var select = this.commshubConnectionMethod;
				select.$('[value="0"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto.isDisplayed()) {
				await this.replacecommsCapturePhoto.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan.isDisplayed()) {
				await this.replacecommshubNowan.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType.isDisplayed()) {
				var select = this.replacecommsPremiseType;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes.isDisplayed()) {
				await this.metalObstructionYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo.isDisplayed()) {
				await this.sharedObstructionNo.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo.isDisplayed()) {
				await this.connectivityObstructionNo.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes.isDisplayed()) {
				await this.confirmInstallAndLeaveYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.assetsUnaffectedYes.isDisplayed()) {
				await this.assetsUnaffectedYes.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton.isDisplayed()) {
				await this.replacecommsNextButton.click();
				await utility.wait(utility.very_low);
			}
		}
	}


	public async fillReplaceCommshubdetails_ENMEX(index: number) {

		if (await this.commshubReplacedyes.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID.isPresent());
			var options = this.selectinstallAssetOption.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID.clear();
			await utility.wait(utility.very_low);
			await this.CHFID.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv3.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation.isDisplayed()) {
				var select = this.commshubLocation;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled.isDisplayed()) {
				await this.aerialInstalled.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod.isDisplayed()) {
				var select = this.commshubConnectionMethod;
				select.$('[value="0"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto.isDisplayed()) {
				await this.replacecommsCapturePhoto.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan.isDisplayed()) {
				await this.replacecommshubNowan.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType.isDisplayed()) {
				var select = this.replacecommsPremiseType;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes.isDisplayed()) {
				await this.metalObstructionYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo.isDisplayed()) {
				await this.sharedObstructionNo.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo.isDisplayed()) {
				await this.connectivityObstructionNo.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes.isDisplayed()) {
				await this.confirmInstallAndLeaveYes.click();
				await utility.wait(utility.very_low);
			}
			if (await this.assetsUnaffectedYes.isDisplayed()) {
				await this.assetsUnaffectedYes.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton.isDisplayed()) {
				await this.replacecommsNextButton.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	public async fillReplaceCommshubdetails_EXCH19(index: number) {

		if (await this.commshubReplacedyes_1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes_1.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID_1.isPresent());
			var options = this.selectinstallAssetOption_1.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID_1.clear();
			await utility.wait(utility.very_low);
			await this.CHFID_1.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv1.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation_1.isDisplayed()) {
				var select = this.commshubLocation_1;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled_1.isDisplayed()) {
				await this.aerialInstalled_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod_1.isDisplayed()) {
				var select = this.commshubConnectionMethod_1;
				select.$('[value="1"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo_1.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo_1.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto_1.isDisplayed()) {
				await this.replacecommsCapturePhoto_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan_1.isDisplayed()) {
				await this.replacecommshubNowan_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType_1.isDisplayed()) {
				var select = this.replacecommsPremiseType_1;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes_1.isDisplayed()) {
				await this.metalObstructionYes_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo_1.isDisplayed()) {
				await this.sharedObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo_1.isDisplayed()) {
				await this.connectivityObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes_1.isDisplayed()) {
				await this.confirmInstallAndLeaveYes_1.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton_1.isDisplayed()) {
				await this.replacecommsNextButton_1.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	public async fillReplaceCommshubdetails_GNMEX(index: number) {

		if (await this.commshubReplacedyes_1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes_1.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID_1.isPresent());
			var options = this.selectinstallAssetOption_1.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID_1.clear();
			await utility.wait(utility.very_low);
			await this.CHFID_1.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv3.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation_1.isDisplayed()) {
				var select = this.commshubLocation_1;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled_1.isDisplayed()) {
				await this.aerialInstalled_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod_1.isDisplayed()) {
				var select = this.commshubConnectionMethod_1;
				select.$('[value="1"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo_1.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo_1.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto_1.isDisplayed()) {
				await this.replacecommsCapturePhoto_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan_1.isDisplayed()) {
				await this.replacecommshubNowan_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType_1.isDisplayed()) {
				var select = this.replacecommsPremiseType_1;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes_1.isDisplayed()) {
				await this.metalObstructionYes_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo_1.isDisplayed()) {
				await this.sharedObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo_1.isDisplayed()) {
				await this.connectivityObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes_1.isDisplayed()) {
				await this.confirmInstallAndLeaveYes_1.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton_1.isDisplayed()) {
				await this.replacecommsNextButton_1.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	public async fillReplaceCommshubdetails_EXCH22(index: number) {

		if (await this.commshubReplacedyes_1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes_1.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID_1.isPresent());
			var options = this.selectinstallAssetOption_1.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID_1.clear();
			await utility.wait(utility.very_low);
			await this.CHFID_1.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation_1.isDisplayed()) {
				var select = this.commshubLocation_1;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled_1.isDisplayed()) {
				await this.aerialInstalled_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod_1.isDisplayed()) {
				var select = this.commshubConnectionMethod_1;
				select.$('[value="1"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo_1.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo_1.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto_1.isDisplayed()) {
				await this.replacecommsCapturePhoto_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan_1.isDisplayed()) {
				await this.replacecommshubNowan_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType_1.isDisplayed()) {
				var select = this.replacecommsPremiseType_1;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes_1.isDisplayed()) {
				await this.metalObstructionYes_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo_1.isDisplayed()) {
				await this.sharedObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo_1.isDisplayed()) {
				await this.connectivityObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes_1.isDisplayed()) {
				await this.confirmInstallAndLeaveYes_1.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton_1.isDisplayed()) {
				await this.replacecommsNextButton_1.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	public async fillReplaceCommshubdetails_FLTY20(index: number) {

		if (await this.commshubReplacedyes_1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes_1.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID_1.isPresent());
			var options = this.selectinstallAssetOption_1.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID_1.clear();
			await utility.wait(utility.very_low);
			await this.CHFID_1.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation_1.isDisplayed()) {
				var select = this.commshubLocation_1;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled_1.isDisplayed()) {
				await this.aerialInstalled_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod_1.isDisplayed()) {
				var select = this.commshubConnectionMethod_1;
				select.$('[value="0"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo_1.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo_1.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto_1.isDisplayed()) {
				await this.replacecommsCapturePhoto_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan_1.isDisplayed()) {
				await this.replacecommshubNowan_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType_1.isDisplayed()) {
				var select = this.replacecommsPremiseType_1;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes_1.isDisplayed()) {
				await this.metalObstructionYes_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo_1.isDisplayed()) {
				await this.sharedObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo_1.isDisplayed()) {
				await this.connectivityObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes_1.isDisplayed()) {
				await this.confirmInstallAndLeaveYes_1.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton_1.isDisplayed()) {
				await this.replacecommsNextButton_1.click();
				await utility.wait(utility.very_low);
			}
		}
	}

	public async fillReplaceCommshubdetails_FLTYTRAD(index: number) {

		if (await this.commshubReplacedyes_1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes_1.click()
			browser.sleep(1000)
			//index = index ;
			console.log("Selecting element based index : " + index)
			// select the option
			await utility.wait(utility.low);
			await this.commshubToInstall_1.element(by.css("option:nth-child(" + index + ")")).click()
			await utility.wait(utility.low);
			await this.commshubPopup.click();

			await expect(await this.CHFID_1.isPresent());
			var options = this.selectinstallAssetOption_1.getAttribute('value');
			console.log(options);
			await utility.wait(utility.medium_low);
			await this.CHFID_1.clear();
			await utility.wait(utility.very_low);
			await this.CHFID_1.sendKeys(options);
			await utility.wait(utility.low);
			await this.dummydiv2.click();
			await utility.wait(4000);
			await this.commshubPopup.click();
			await utility.wait(utility.low);

			if (await this.commshubLocation_1.isDisplayed()) {
				var select = this.commshubLocation_1;
				select.$('[value="A"]').click();
			}
			await utility.wait(utility.low);

			if (await this.aerialInstalled_1.isDisplayed()) {
				await this.aerialInstalled_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.commshubConnectionMethod_1.isDisplayed()) {
				var select = this.commshubConnectionMethod_1;
				select.$('[value="0"]').click();
			}
			await utility.wait(utility.low);
			await utility.wait(utility.medium_low);
			await this.cradleSerialNo_1.clear();
			await utility.wait(utility.very_low);
			await this.cradleSerialNo_1.sendKeys('12345');
			await utility.wait(utility.low);

			if (await this.replacecommsCapturePhoto_1.isDisplayed()) {
				await this.replacecommsCapturePhoto_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommshubNowan_1.isDisplayed()) {
				await this.replacecommshubNowan_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.replacecommsPremiseType_1.isDisplayed()) {
				var select = this.replacecommsPremiseType_1;
				select.$('[value="2"]').click();
				await utility.wait(utility.low);
			}
			if (await this.metalObstructionYes_1.isDisplayed()) {
				await this.metalObstructionYes_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.sharedObstructionNo_1.isDisplayed()) {
				await this.sharedObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.connectivityObstructionNo_1.isDisplayed()) {
				await this.connectivityObstructionNo_1.click();
				await utility.wait(utility.very_low);
			}
			if (await this.confirmInstallAndLeaveYes_1.isDisplayed()) {
				await this.confirmInstallAndLeaveYes_1.click();
				await utility.wait(utility.very_low);
			}

			if (await this.replacecommsNextButton_1.isDisplayed()) {
				await this.replacecommsNextButton_1.click();
				await utility.wait(utility.very_low);
			}
		}
	}
	//###########################CGP ADDED FOR PRE GAS ABORT#####################

	public async fillPreGasAbortTST136() {

		if (await this.preGASinstallN.isDisplayed()) {
			await this.preGASinstallN.click();
		}
		await utility.wait(utility.very_low);
		if (await this.abortPreGas.isDisplayed()) {
			await this.abortPreGas.click();
		}
		await utility.wait(utility.very_low);

	}

	public VerifyPreGasAbortReasonCodePopup() {
		if (this.AbortGasMeterReasonCodes.isDisplayed) {
			this.AbortGasMeterReasonCodes.getText().then(async function (abortgasreason) {
				console.log("Abort Reason Code Pop up Header" + abortgasreason);
			});
		}
	}

	public async selectreasonOptionAndAbortPreGas(xpathparam, notesstring, buttonText) {
		this.GenericReasonCodeSelect = element(by.xpath('//label/div[@id="' + xpathparam + '"]'));
		await utility.wait(utility.low);
		if (this.GenericReasonCodeSelect.isDisplayed()) {
			await this.GenericReasonCodeSelect.click();
		}
		await utility.wait(utility.very_low);
		if (this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys(notesstring);

		}
		await utility.wait(utility.very_low);
		if (this.abortCapturePhoto.isDisplayed()) {
			await this.abortCapturePhoto.click();
		}
		this.buttonTextVal = element(by.xpath('//button[@id ="' + buttonText + '"]'));

		await utility.wait(utility.very_low);
		if (this.buttonTextVal.isDisplayed()) {
			await this.buttonTextVal.click();
		}
		await utility.wait(utility.very_low);
	}

	public async reScanAssetPopupclick() {

		if (await this.RescanAssetPopUp.isDisplayed()) {
			await this.RescanAssetPopUp.click();
		}
	}

	public async fillConfigAllmeterAbort() {
		await utility.wait(utility.medium);
		if (this.FullWANYes.isDisplayed()) {
			await this.FullWANYes.click();
		}
		if (this.FullCOnfigAppliedElecYes.isDisplayed()) {
			await this.FullCOnfigAppliedElecYes.click();
		}
		await utility.wait(utility.low);
		if (this.checkDetails.isDisplayed()) {
			await this.checkDetails.click();
		}
		await utility.wait(utility.low);
		if (this.fullConfigAppliedPPMIDYesAbort.isDisplayed()) {
			await this.fullConfigAppliedPPMIDYesAbort.click();
		}
		if (this.capturePPMIDBtn.isDisplayed()) {
			await this.capturePPMIDBtn.click();
		}
		await utility.wait(utility.low);
		if (this.nextButtonWAN.isDisplayed()) {
			await this.nextButtonWAN.click();
		}
	}

	public async fillPreGasAbortTST35() {
		if (await this.preGASinstallN.isDisplayed()) {
			await this.preGASinstallN.click();
		}
		await utility.wait(utility.medium);
		if (await this.abortBtn.isDisplayed()) {
			console.log('Abort Button');
			await this.abortBtn.click();
			console.log('Abort Button Clicked');

		}
		await utility.wait(utility.very_low);

	}

	public async Tst22fillElecmeterrem() {
		await utility.wait(utility.low);
		if (await this.RemoveElecAssetrplacedorremoved.isDisplayed()) {
			await this.RemoveElecAssetrplacedorremoved.click();
		}
		await utility.wait(utility.low);
		if (await this.statusofElecAssetSelect.isDisplayed()) {
			var select = this.statusofElecAssetSelect;
			await select.$('[label = "No Fault Found"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.Tst22removedmeterReading.isDisplayed()) {
			await this.Tst22removedmeterReading.clear();
			await this.Tst22removedmeterReading.sendKeys('12345');

		}

		await utility.wait(utility.low);

		if (await this.statusofElecAssetSelect.isDisplayed()) {
			await this.statusofElecAssetSelect.click();
			console.log("clicked");
		}
		await utility.wait(utility.very_low);
	}

	public async fillCommissioningDetails_InstallLeave() {
		if (await this.nonserealizedAssetDD.isDisplayed()) {
			await utility.wait(utility.low);
			var select = this.nonserealizedAssetDD;
			select.$('[value="1"]').click();
		}
		await expect(await this.nonserealizedAssetInput.isPresent());
		await this.nonserealizedAssetInput.sendKeys('1');
		await this.commsHubConnectedNo.click();
		await utility.wait(utility.very_low);

		await this.commissioningNxtBtn.click();
		await utility.wait(utility.very_low);
	}

	public async fillCommissioningDetails_FLTYInstallLeave() {
		if (await this.dccmsgRequired.isDisplayed()) {
			await utility.wait(utility.low);
			await this.dccmsgRequired.click();
		}
		await this.commHubConnected_FLTY.click();
		await utility.wait(utility.very_low);

		await this.commissioningNxtBtn_FLTY.click();
		await utility.wait(utility.very_low);
	}


	public async fillperformpostinstAbortNonS2() {
		await utility.wait(utility.Avg_low);
		if (await inst.ContactGTY.isDisplayed()) {
			await inst.ContactGTY.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.NationalGridSend.isDisplayed()) {
			await inst.NationalGridSend.clear();
			await inst.NationalGridSend.sendKeys("1");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.HandSAirline.isDisplayed()) {
			await inst.HandSAirline.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.Airlineref1.isDisplayed()) {
			await inst.Airlineref1.clear();
			await inst.Airlineref1.sendKeys("2");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.GTAttendenceOnsiteY.isDisplayed()) {
			await inst.GTAttendenceOnsiteY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.GTresolveIssueY.isDisplayed()) {
			await inst.GTresolveIssueY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.TightnessIssueY.isDisplayed()) {
			await inst.TightnessIssueY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.cappedgascooker.isDisplayed()) {
			await inst.cappedgascooker.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.addnlnote.isDisplayed()) {
			await inst.addnlnote.clear();
			await inst.addnlnote.sendKeys("Gas Notes");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.ReplacedGasMeterY.isDisplayed()) {
			await inst.ReplacedGasMeterY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.ReplacedGasregulatorY.isDisplayed()) {
			await inst.ReplacedGasregulatorY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.TightnessperformedY.isDisplayed()) {
			await inst.TightnessperformedY.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.cappostinstallation.isDisplayed()) {
			await inst.cappostinstallation.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.Dropinpressure.isDisplayed()) {
			await inst.Dropinpressure.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.dropinpressureselect.isDisplayed()) {
			var select = inst.dropinpressureselect;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.very_low);
		if (await inst.selectMeterType.isDisplayed()) {
			var select = inst.selectMeterType;
			select.$('[value="2"]').click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.GasTightnessPassed.isDisplayed()) {
			await inst.GasTightnessPassed.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.TestWitness.isDisplayed()) {
			await inst.TestWitness.clear();
			await inst.TestWitness.sendKeys("Ellie Taylor");
		}
		await utility.wait(utility.very_low);
		if (await inst.standingPressure.isDisplayed()) {
			await inst.standingPressure.clear();
			await inst.standingPressure.sendKeys("1.1");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.cappostinstallationpressure.isDisplayed()) {
			await inst.cappostinstallationpressure.click();
		}
		await utility.wait(utility.very_low);
		if (await inst.workingPressure.isDisplayed()) {
			await inst.workingPressure.clear();
			await inst.workingPressure.sendKeys("1.5");
		}
		await utility.wait(utility.Avg_low);
		if (await inst.captureworkingPressure.isDisplayed()) {
			await inst.captureworkingPressure.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.captureFinalMeterInstall.isDisplayed()) {
			await inst.captureFinalMeterInstall.click();
		}
		await utility.wait(utility.Avg_low);
		if (await inst.PostinstallNext.isDisplayed()) {
			await inst.PostinstallNext.click();
		}
	}
}
