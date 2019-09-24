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
import {
	ElectricPageObject
} from "../pages/ElectricPage";


const applist: AppointmentListPageObject = new AppointmentListPageObject();
const door: DoorStepPageObject = new DoorStepPageObject();
const risk: RiskAssessmentPageObject = new RiskAssessmentPageObject();
const elec: ElectricPageObject = new ElectricPageObject();

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
	public captureabortElec:ElementFinder;
    

	//#####END#######

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
        this.OKtoProceedEGPOutcomeN = element(by.xpath('//label[@id="rb_OKProce_y"]'));
        this.riskAssessAbort = element(by.xpath('//button[text()="Abort"]'));
        this.unabletoOffGasOption = element(by.id('abdradio11'));
	   // ####################################
	   
	   //###########Elec Risk Assess##########
	   this.captureabortElec = element(by.xpath('//button[text()="CAPTURE PHOTO OF HAZARDS IDENTIFIED"]'));
	   
        

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
        try {
            if (risk.initialRiskAssessmentTab.isDisplayed()) {
                await risk.initialRiskAssessmentTab.click();
            }
        } catch (error) {
            console.log("continue with next step");
        }
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
	
	public async abortJoboAfterElecRisk() {
		if (await elec.performRiskText.isDisplayed()) {
			await elec.performRiskYES.click();
		}
		if (await elec.selectRiskReasonDD.isDisplayed()) {
			var select = elec.selectRiskReasonDD;
			select.$('[value="5"]').click();
		}
		if (await elec.riskAssessmentinput.isDisplayed()) {
			await elec.riskAssessmentinput.sendKeys('Testing Input');
		}
		if (await this.captureabortElec.isDisplayed()) {
			await this.captureabortElec.click();
		}
	}
}