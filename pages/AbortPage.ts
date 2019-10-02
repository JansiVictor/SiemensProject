/**
 * @description :Abort Functionalities
 * @author :Aparna
 */

import {
	element,browser,
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


const applist: AppointmentListPageObject = new AppointmentListPageObject();
const door: DoorStepPageObject = new DoorStepPageObject();
const risk: RiskAssessmentPageObject = new RiskAssessmentPageObject();

export class AbortPageObject {

    
	//Abort ElementFinder Appointment List#######
	public abortNoAccessContactMade:ElementFinder;
	public notConvinientRadioBtn:ElementFinder;
	public abortNxtbtn:ElementFinder;
	public abortAddNotes:ElementFinder;
	public abortCapturePhoto:ElementFinder;
	public abortAppointment:ElementFinder;
    public reScanPopUpOK:ElementFinder;
    public appointmentRescheduledNo:ElementFinder;
    public appointmentconfirmationNo: ElementFinder;
    //###########ABORT Doorstep#############
	public accessToSiteN: ElementFinder;
	public captureNoAcess: ElementFinder;
	public suspendJobYes: ElementFinder;
	public suspendJobNo: ElementFinder;
	public AddNotesSuspend:ElementFinder;
	public suspendJobBtn:ElementFinder;
	public reScheduleAppointNo:ElementFinder;
    public abortNoAcessBtn:ElementFinder;
    //##############Risk Assessment Page ######
    public OKtoProceedEGPOutcomeN:ElementFinder;
    public riskAssessAbort:ElementFinder;
	public unabletoOffGasOption:ElementFinder;
	
	//################## Risk Assess Elec ##############
	public capturePhotoAbortElec:ElementFinder;
	public updatedHnSY: ElementFinder;
	public airlineRefInput: ElementFinder;
	public updateDNOY: ElementFinder;
	public dnoInput: ElementFinder;
	public workCanbeCompletedN:ElementFinder;
	public addNotes:ElementFinder;
	public elecAbortBtn:ElementFinder;
	public reasonforAbort:ElementFinder;
	public abortElecNxtBtn:ElementFinder;
//################## Risk Assess Gas ##############
	public capturemeterPressureMed:ElementFinder;
	public medPressureNo:ElementFinder;
	public abortGas:ElementFinder;
    

	//#####END#######
	//############# PRE GAS Abort###########
	public preGASinstallN:ElementFinder;
	public abortGASMeterBtn:ElementFinder;

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
	public commsHubConnectedNo_1: ElementFinder;
	//
	// I&L Commisioning elements
	public nonserealizedAssetDD: ElementFinder;
	public nonserealizedAssetInput: ElementFinder;
	public commsHubConnectedNo: ElementFinder;
	public commissioningNxtBtn: ElementFinder;
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
	public replacecommsPremiseTypeOption: ElementFinder;
	public elecMeterSubmit: ElementFinder;
	public gasMeterSubmit: ElementFinder;
	public ppmidNXTBtn: ElementFinder;
	public devicebindingNextSection: ElementFinder;
	public configureallmetersNextSection: ElementFinder;
	public replacecommsNextButton_1: ElementFinder;
	public dummydiv1: ElementFinder;

	//
	//####Abrt for I&L Job completion page####################

	public PPMIDOfferedNo:ElementFinder;
	public PPMIDAddNotes:ElementFinder;
	public gasAndElecMeterN:ElementFinder;
	public fullHanDeviceNo:ElementFinder;
	public fullWanAllmeterNo:ElementFinder;
	public fullconfigElecApplyNo:ElementFinder;
	public AbortElecMeter:ElementFinder;
	public smartLitLeftNo: ElementFinder;
	public additionalInfo: ElementFinder;
	public demoEquipment: ElementFinder;
	public smartNoLitLeftOnsiteTxt: ElementFinder;


	//###############Reason Popup Elemenst##########
	public AbortNoAccessReasonCodes: ElementFinder;
	public GenericReasonCodeSelect: ElementFinder;

    constructor(){
    //Abort Elements Appointment List########
		this.appointmentRescheduledNo = element(by.id('rb_app_re_n'));
		this.abortNoAccessContactMade = element(by.id('btn_call_fwd_abort'));
		this.notConvinientRadioBtn = element(by.xpath('//label/div[@id="abdradio1"]'));
		this.abortNxtbtn = element(by.id('btnCallNext'));
		this.abortAddNotes= element(by.id('txt_addNotAbort'));
		this.abortCapturePhoto= element(by.id('cameraBtn1'));
		this.abortAppointment = element(by.xpath('//button[text()="ABORT APPOINTMENT"]'));
        this.reScanPopUpOK=element(by.xpath('//button[text()="OK"]'));
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
	   
	   //##################Reason Popup#####################
	   this.AbortNoAccessReasonCodes = element(by.xpath('//*[text()="Abort: No Access Reason Codes"]'));

	   //######################################
        
	   // #################################### Risk Assess Elec##########
	   
	   this.capturePhotoAbortElec =element(by.xpath('//button[text()="CAPTURE PHOTO OF HAZARDS IDENTIFIED"]'));
		this.updatedHnSY = element(by.xpath('//input[@id="radiora11"]/following-sibling::span[@class="outer"]'));
		this.airlineRefInput = element(by.xpath('//input[@id="input1"]'));
		this.updateDNOY = element(by.xpath('//input[@id="radiora13"]/following-sibling::span[@class="outer"]'));
		this.dnoInput = element(by.xpath('//input[@id="input2"]'));
		this.workCanbeCompletedN = element(by.xpath('//input[@id="radiora18"]/following-sibling::span[@class="outer"]'));
		this.addNotes = element(by.xpath('//input[@id="text3"]'));
		this.elecAbortBtn = element(by.xpath('//button[text()="Abort"]'));
		this.reasonforAbort = element(by.xpath('//div[@id="abdradio4"]'));
		this.abortElecNxtBtn = element(by.xpath('//button[text()="NEXT"]'));
	
	   // #################################### Risk Assess Gas##########	
		
	   this.capturemeterPressureMed =element(by.xpath('//input[@id="radiorag2"]/following-sibling::span[@class="outer"]'));
	   this.medPressureNo = element(by.xpath('//input[@id="radiorag4"]/following-sibling::span[@class="outer"]'));
	   this.abortGas = element(by.xpath('//input[@id="btn_Gas_fail"]'));

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
		
		this.polNxtBtn = element(by.xpath('(//div/button[@id="btnNextPol"])[2]'));
	   //

	   // I&L Commisioning elements
	   this.nonserealizedAssetDD = element(by.id('Cselect4'));
	   this.nonserealizedAssetInput = element(by.id('Cbar3'));
	   this.commsHubConnectedNo = element(by.id('Cradionm2'));
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
	   this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[4]'));
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
	   this.fullconfigElecApplyNo = element(by.xpath('//*[@id="rb_FullCFigE_n"]/label/span'));

	   this.ppmidNXTBtn = element(by.id('ihdscan2_nextButton'));
	   this.devicebindingNextSection = element(by.id('dbc2_trad_btnNextEff'));
	   this.configureallmetersNextSection = element(by.id('btnNextEff'));
	   this.smartLitLeftNo = element(by.id('radiose4'));
	   this.additionalInfo = element(by.id('smicopAddInfoCheckboxNo'));
	   this.demoEquipment = element(by.id('radiose8'));

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
		if(this.GenericReasonCodeSelect.isDisplayed()){
		await this.GenericReasonCodeSelect.click();
		}
        try{
            await expect(this.abortNxtbtn.isDisplayed());
            await this.abortNxtbtn.click();
            } catch(error){
                console.log('No Next btn present Currently');
            }
		await utility.wait(utility.very_low);
		if(this.abortAddNotes.isDisplayed()){
		await this.abortAddNotes.sendKeys(notesstring);
		}
		await utility.wait(utility.very_low);
		if(this.abortCapturePhoto.isDisplayed()){
		await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if(this.abortAppointment.isDisplayed()){
		await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
    }

	public async noAccessAbortContactMade() {
		await applist.clickOnContactMadeOtion();
		await utility.wait(utility.very_low);
		if(this.appointmentconfirmationNo.isDisplayed()){
		await this.appointmentconfirmationNo.click();
		}
		await utility.wait(utility.very_low);
		if(this.appointmentRescheduledNo.isDisplayed()){
		await this.appointmentRescheduledNo.click();
		}
		await utility.wait(utility.very_low);
		if(this.abortNoAccessContactMade.isDisplayed()){
		await this.abortNoAccessContactMade.click();
		}

	}
	
//Abort Options ################
	public async notConvinientOptionAndAbort() {
		await utility.wait(utility.very_low);
		if(this.notConvinientRadioBtn.isDisplayed()){
		await this.notConvinientRadioBtn.click();
		}
        try{
            await expect(this.abortNxtbtn.isDisplayed());
            await this.abortNxtbtn.click();
            } catch(error){
                console.log('No Next btn present Currently');
            }
		await utility.wait(utility.very_low);
		if(this.abortAddNotes.isDisplayed()){
		await this.abortAddNotes.sendKeys('Not able to Call the customer');
		}
		await utility.wait(utility.very_low);
		if(this.abortCapturePhoto.isDisplayed()){
		await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if(this.abortAppointment.isDisplayed()){
		await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
    }

    public async unableToOffGasOptionAndAbort() {
		await utility.wait(utility.very_low);
		if(this.unabletoOffGasOption.isDisplayed()){
		await this.unabletoOffGasOption.click();
		}
        try{
			if(this.abortNxtbtn.isDisplayed()){
				await this.abortNxtbtn.click();
				}
        } catch(error) {
            console.log('No Next btn present Currently');
        }
		await utility.wait(utility.very_low);

		if(this.abortAddNotes.isDisplayed()){
			await this.abortAddNotes.sendKeys('Leave Gass Off');
			}
		await utility.wait(utility.very_low);
		if(this.abortCapturePhoto.isDisplayed()){
			await this.abortCapturePhoto.click();
			}
		await utility.wait(utility.very_low);
		if(this.abortAppointment.isDisplayed()){
			await this.abortAppointment.click();
			}
        await utility.wait(utility.very_low);
    }


    

// Abort Rescan Pop up ###################
	public async reScanInfoPopup(){

		if(this.reScanPopUpOK.isDisplayed()){
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
		if (await this.reasonforAbort.isDisplayed() && await this.reasonforAbort.isSelected() ) {
			await this.reasonforAbort.click();
		}
		await utility.wait(utility.very_low);
		if (await this.abortAddNotes.isDisplayed()) {
			await this.abortAddNotes.sendKeys('Serious Issue');
		}
		await utility.wait(utility.very_low);
		if(this.abortCapturePhoto.isDisplayed()){
		await this.abortCapturePhoto.click();
		}
		await utility.wait(utility.very_low);
		if(this.abortAppointment.isDisplayed()){
		await this.abortAppointment.click();
		}
		await utility.wait(utility.very_low);
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

		if(this.abortAddNotes.isDisplayed()){
			await this.abortAddNotes.sendKeys('Leave Gass Off');
			}
		await utility.wait(utility.very_low);
		if(this.abortCapturePhoto.isDisplayed()){
			await this.abortCapturePhoto.click();
			}
		await utility.wait(utility.very_low);
		if(this.abortAppointment.isDisplayed()){
			await this.abortAppointment.click();
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
	 * @description ABORT for Leave and install
	 * Functions altered per flow
	 ***/

	public async fillPPMIDSection(){
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

	public async fillDeviceBindingSection(){
		if (this.gasAndElecMeterN.isDisplayed()) {
			await this.gasAndElecMeterN.click();
		}

		if (this.fullHanDeviceNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.fullHanDeviceNo.click();
		}
		if(this.devicebindingNextSection.isDisplayed()){
			await this.devicebindingNextSection.click()
		}

	}

	public async fillDeviceBindingSection_EXCH19(){
		if (this.fullHanDeviceNo.isDisplayed()) {
			await utility.wait(utility.very_low);
			await this.fullHanDeviceNo.click();
		}
		if(this.devicebindingNextSection.isDisplayed()){
			await this.devicebindingNextSection.click()
		}

	}

	public async fillSmartLiteratureEducationSection(){
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

	public async fillConfigAllMetersSection_EXCH19(){
		if (this.fullWanAllmeterNo.isDisplayed()) {
			await this.fullWanAllmeterNo.click();
		}
		await utility.wait(utility.low);
		if(this.configureallmetersNextSection.isDisplayed()){
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

	public async fillConfigAllMetersSection(){
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
		if(this.configureallmetersNextSection.isDisplayed()){
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

	public async clickElecSubmitButton(){
		if (await this.elecMeterSubmit.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.elecMeterSubmit.click()
	}
}

public async clickGasSubmitButton(){
	if (await this.gasMeterSubmit.isDisplayed()) {
		await utility.wait(utility.low);
		// click the dropdown
		this.gasMeterSubmit.click()
}
}

	

	public async fillReplaceCommshubdetails(index:number) {

		if (await this.commshubReplacedyes.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes.click()
			browser.sleep(1000)
		//index = index ;
		console.log("Selecting element based index : "+index)
		// select the option
		await utility.wait(utility.low);
		await this.commshubToInstall.element(by.css("option:nth-child("+index+")")).click()
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

	public async fillReplaceCommshubdetails_EXCH19(index:number) {

		if (await this.commshubReplacedyes_1.isDisplayed()) {
			await utility.wait(utility.low);
			// click the dropdown
			this.commshubReplacedyes_1.click()
			browser.sleep(1000)
		//index = index ;
		console.log("Selecting element based index : "+index)
		// select the option
		await utility.wait(utility.low);
		await this.commshubToInstall_1.element(by.css("option:nth-child("+index+")")).click()
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
}
