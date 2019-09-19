/**
  * @@Author Jansi Victor
  * @Description @Description  Automation for FAULTY18 Workflow
*/
import { element, by, ElementFinder, ElementArrayFinder, browser } from "protractor";
const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import { Utility } from "../support/utility";
const utility: Utility = new Utility();

export class RemovePageObject {

    public ctihdppmidDtl: ElementFinder;
    public smet2ihdppidText: ElementFinder;
    public smet2ihdppidY: ElementFinder;
    public ihdppmidsNoText: ElementFinder;
    public ihdppmidsSersk: ElementFinder;
    public ihdppmidsSerText: ElementFinder;
    public existingihdPpmidText: ElementFinder;
    public existingihdPpmidY: ElementFinder;
    public currentmeterdetlGasSec: ElementFinder;
    public currentmeterdtlPgCont: ElementFinder;
    public existgasmeterDtlText: ElementFinder;
    public existgasmeterDtlY: ElementFinder;
    public meterReadingLabel: ElementFinder;
    public meterReading: ElementFinder;
    public currentCommsHubTitle: ElementFinder;
    public currentHubDtlsPgCont: ElementFinder;
    public commshubLoc: ElementFinder;
    public aerialInstalled: ElementFinder;
    public aerialInstalledY: ElementFinder;
    public CommshubdtlCorrectText: ElementFinder;
    public CommshubdtlCorrectY: ElementFinder;
    public capexistcommshubInstall: ElementFinder;
    public determinefaultActivityTitle: ElementFinder;
    public confirmgasmeterOnsupply: ElementFinder;
    public confirmgasmeterText: ElementFinder;
    public capturesuspectedTamp: ElementFinder;
    public smets2assetInst: ElementFinder;
    public smets2assetInstY: ElementFinder;
    public commshubResetting: ElementFinder;
    public commshubResettingY: ElementFinder;
    public removecommshub5mins: ElementFinder;
    public commshubconnectedtoSupply: ElementFinder;
    public commshubconnectedtoSupplyY: ElementFinder;
    public commshubconnectedtoSWan: ElementFinder;
    public commshubconnectedtoWanY: ElementFinder;
    public commshubconnectedtoAsset: ElementFinder;
    public commshubconnectedtoAssetY: ElementFinder;
    public commsHub: ElementFinder;
    public commsHubY: ElementFinder;
    public gasMeter: ElementFinder;
    public gasMeterY: ElementFinder;
    public Regulator: ElementFinder;
    public RegulatorY: ElementFinder;
    public ihdPpmid: ElementFinder;
    public ihdPpmidY: ElementFinder;
    public commshubNextbtn: ElementFinder;
    public preInstgastightnessTest: ElementFinder;
    public preinstGasTightness: ElementFinder;
    public preinstGasTightnessY: ElementFinder;
    public capturepressureinMB: ElementFinder;
    public wasthereadropinPressure: ElementFinder;
    public wasthereadropinPressureY: ElementFinder;
    public enterdipGasPressure: ElementFinder;
    public enterdipGasPressureSelect: ElementFinder;
    public selectmeterType: ElementFinder;
    public selectmeterTypeSelect: ElementFinder;
    public smellGas: ElementFinder;
    public smellGasY: ElementFinder;
    public gasTightness: ElementFinder;
    public gasTightnessTextbox: ElementFinder;
    public gastightnessOutcome: ElementFinder;
    public gastightnessOutcomeGT: ElementFinder;
    public reportedinctoGT: ElementFinder;
    public reportedinctoGTY: ElementFinder;
    public jobRefText: ElementFinder;
    public jobRef: ElementFinder;
    public reportedinctoHS: ElementFinder;
    public reportedinctoHSY: ElementFinder;
    public airRefText: ElementFinder;
    public airRef: ElementFinder;
    public gtattendanceText: ElementFinder;
    public gtattendanceY: ElementFinder;
    public gtresolveText: ElementFinder;
    public gtresolveY: ElementFinder;
    public gastightnesstestCompleted: ElementFinder;
    public gastightnesstestCompletedFail: ElementFinder;
    public IhdPpmidNxt: ElementFinder;
    public ctIhdPpmiddtls: ElementFinder;
    public currentIhdPpmidnxtBtn: ElementFinder;
    public ctmeterdtlGasNxt: ElementFinder;
    public capctmeterReadingPanel: ElementFinder;
    public ctmeterdtlGasTab: ElementFinder;
    public ctCommshubdtlTab: ElementFinder;

    public rmvPPMIDPanel: ElementFinder;
    public AssettobeRemoved: ElementFinder;
    public rmvihdppmidpopupOK: ElementFinder;
    public rmvihdppmidstatusofAssetSel: ElementFinder;
    public rmvihdppmidNxtBtn: ElementFinder;
    public sendmsgPanel: ElementFinder;
    public rmvPPMIDTab: ElementFinder;

    public sendmsgbtn: ElementFinder;
    public awaitingResp: ElementFinder;
    public reqSentSuccess: ElementFinder;
    public AssetUnJoined: ElementFinder;
    public RemoveIHDAsset: ElementFinder;
    public ppmidremovalSuccess: ElementFinder;

    public AssetRemovalSelect: ElementFinder;
    public confirmAssetrmvYES: ElementFinder;
    public AssetPopup: ElementFinder;
    public RemoveGasMeterPanel: ElementFinder;

    public GMassettoberemoved: ElementFinder;
    public statusofAssetSelect: ElementFinder;
    public removedmeterReading: ElementFinder;
    public GMremovalNxtBtn: ElementFinder;
    public SendGMRMPanel: ElementFinder;

    public SendGMREMBtn: ElementFinder;
    public AwaitingRespGMREM: ElementFinder;

    public reqSentSuccessGMREM: ElementFinder;
    public RemovalSuccess: ElementFinder;
    public OKtoremoveAsset: ElementFinder;

    public confirmgasAssetRemoval: ElementFinder;

    public gasAssetRemoval: ElementFinder;
    public GasAssetRemovalY: ElementFinder;
    public GasAssetRemovalPopup: ElementFinder;
    public RemoveCommsHub: ElementFinder;

    public IstheassettobeRemovedorReplaced: ElementFinder;
    public RemoveCommshubSelect: ElementFinder;
    public StatusofCommsHub: ElementFinder;
    public RemoveCommsHubAdditionalNotes: ElementFinder;
    public FaultidentifiedPostInst: ElementFinder;
    public ConfirmCommsHubRemoval: ElementFinder;
    public RemCommsHubNxtBtn: ElementFinder;

    public ConfirmCommsHubRemovalSelect: ElementFinder;
    public Confirmcommhubassetremove: ElementFinder;

    public ConfirmCommsHubRemovalPopup: ElementFinder;
    public ConfirmCommsHubNxtBtn: ElementFinder;
    public removePPMID: ElementFinder;
    public SMawaitingResp: ElementFinder;
    public ppmidremoval: ElementFinder;
    public btnnext: ElementFinder;

     //cgp added 13/09
     public nextSecGasBtn: ElementFinder;
     //CGP added 18/09    
    public ElecRemoveMeter: ElementFinder;
	public RemoveElecAssetrplacedorremoved: ElementFinder;
    public statusofElecAssetSelect: ElementFinder;
	public reqSentSuccessEMREM: ElementFinder;
	public RemovalSuccessElec: ElementFinder;
    public OKtoremoveAssetElec: ElementFinder;    
	public ElecAssetRemoval: ElementFinder;
	public ElecAssetRemovalY: ElementFinder;
    public ElecAssetRemovalPopup: ElementFinder;
    public ConfirmElecCommsHubNxtBtn: ElementFinder;
    public currentMeterElecCap: ElementFinder;
    public SendElMREMBtn: ElementFinder;
    public SendElMREMBtnCap: ElementFinder;
    public existingelecmeterdtls: ElementFinder;
    public meterReadingElec: ElementFinder;
    public confirmElecmeterText: ElementFinder;
    public confirmElecmeterOnsupply: ElementFinder;
    public elecMeter: ElementFinder;
    public elecMeterY: ElementFinder;
	public ElecremovalNxtBtn: ElementFinder;
	public SendElecRMPanel: ElementFinder;
	public SendEMREMBtn: ElementFinder;
    public AwaitingRespEMREM: ElementFinder;
    //CGP added
    public currentMeterDetTRAD: ElementFinder
    public captureCurrentMeterText: ElementFinder;
    public randomClick1: ElementFinder;
    public randomClick2: ElementFinder;
    public randomClickEX23: ElementFinder;
    public randomClickTRAD: ElementFinder;
    public currentMetDet: ElementFinder;
    public nonserealizedAssetDD: ElementFinder;
    public nonserealizedAssetInput: ElementFinder;  
    
    public removeMeter: ElementFinder;
    public assetRemovalElec: ElementFinder;
    public elecRemoveNextSec: ElementFinder;
    public confirmElecAssetRemoval: ElementFinder;
    public elecAssetRemoval: ElementFinder;
    public elecAssetRemovalY: ElementFinder;
    public elecAssetRemovalPopup: ElementFinder;
    public statusofAssetElec: ElementFinder;
    public nextSecRem: ElementFinder;
    public commshubReqY: ElementFinder;
    public msgToDCCY: ElementFinder;
    public commsHubConnectedYes: ElementFinder;
    public commissioningNxtBtn: ElementFinder;
    public submitElecRemSecEndTRAD: ElementFinder;
    public meterReadingLabel1: ElementFinder;
    public meterReadingLabel2: ElementFinder;
    public meterReadingLabelTRAD: ElementFinder;
    public meterReading1: ElementFinder;
    public meterReading2: ElementFinder;    
    public meterReadingTRAD: ElementFinder;
    public existelecmeterDtlY: ElementFinder;
    public confirmElecMeterOnsupply: ElementFinder;
    public SMET2AssetInstalledN: ElementFinder;
    public exchangeAssetY: ElementFinder;
    public equipmentRepositionRequired: ElementFinder;
    public SMETSOffered: ElementFinder;    
    public elecMeterRadio: ElementFinder;
    public gasMeterRadio: ElementFinder;
    public regulatorRadio: ElementFinder;
    public smet2ihdppidN: ElementFinder;



    constructor() {
        //#region Panel Click
        //this.ctIhdPpmiddtls = element(by.css('.down'));
        //.ng-scope:nth-child(1) > .task-section .down
        this.ctIhdPpmiddtls = element(by.css('.ng-scope:nth-child(1) > .task-section .down'));
        this.ctmeterdtlGasTab = element(by.css('.ng-scope:nth-child(2) > .task-section .down'));
        this.ctCommshubdtlTab = element(by.css('.ng-scope:nth-child(3) > .task-section .down'));
        this.rmvPPMIDTab = element(by.css('.ng-scope:nth-child(6) > .task-section .down'));

        //#endregion

        //#region Current ihd ppmid
        this.ctihdppmidDtl = element(by.id('Title_currentIhdPpmid'));
        this.smet2ihdppidText = element(by.xpath('//*[contains(text(),"SMETS2 IHD / PPMID")]'));
        this.smet2ihdppidY = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_y"]'));
        this.ihdppmidsSerText = element(by.xpath('//div[contains(text(),"IHD / PPMID Serial")]'));
        this.ihdppmidsSersk = element(by.xpath('//input[@id="currentIhdPpmid_ihdPpmidSerial"]'));
        this.existingihdPpmidText = element(by.xpath('//*[contains(text(),"Existing IHD / PPMID")]'));
        this.existingihdPpmidY = element(by.xpath('//*[@id="currentIhdPpmid_existingAssetDetailsCorrect_y"]'));
        this.IhdPpmidNxt = element(by.id('currentIhdPpmid_nextButton'));
        this.currentmeterdetlGasSec = element(by.xpath('//*[@id="Title_gasCurrentMeter"]'));
        this.currentmeterdtlPgCont = element(by.xpath('//*[contains(text(),"Current Meter Details - Gas")]'));
        //#endregion

        //#region CURRENT METER DETAILS - GAS
        this.existgasmeterDtlText = element(by.xpath('//*[contains(text(),"Existing Gas Meter Details Correct")]'));
        this.existgasmeterDtlY = element(by.xpath('//div/label[@id="gasCurrentMeter_detailsCorrect_y"]'));
        this.meterReading = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register")]'));
        this.meterReadingLabel = element(by.xpath('//input[@id="reg0"]'));
        this.currentCommsHubTitle = element(by.xpath('//*[@id="Title_currentCommsHub"]'));
        this.currentHubDtlsPgCont = element(by.xpath('//*[contains(text(),"CHF ID")]'));
        //#endregion

        //#region CURRENT COMMS HUB DETAILS
        this.commshubLoc = element(by.xpath('//select[@id="currentCommsHub_locationSelect"]'));
        this.aerialInstalled = element(by.xpath('//*[contains(text(),"Aerial Installed")]'));
        this.aerialInstalledY = element(by.id('currentCommsHub_aerialInstalled_y'));
        //input[@id="currentCommsHub_aerialInstalled_y"]/following-sibling::span[@class="outer"]
        this.CommshubdtlCorrectText = element(by.xpath('//*[contains(text(),"Existing Comms Hub Details Correct?")]'));
        this.CommshubdtlCorrectY = element(by.id('currentCommsHub_existingDetailsCorrect_y'));
        this.capexistcommshubInstall = element(by.id('currentCommsHub_existingPhotoButton'));
        this.determinefaultActivityTitle = element(by.xpath('//*[contains(text(),"Determine Fault Activity")]'));
        //#endregion

        //#region Determine Faulty Activity
        this.confirmgasmeterText = element(by.xpath('//*[contains(text(),"Confirm if Gas meter is On Supply or Off Supply")]'));
        this.confirmgasmeterOnsupply = element(by.xpath('//input[@id="confirmgassupplytrue"]/following-sibling::span[@class="outer"]'));
        this.capturesuspectedTamp = element(by.id('determinefaultyassets_tamperingPhotoButton'));
        this.smets2assetInst = element(by.xpath('//*[contains(text(),"Are SMETS2 assets installed?")]'));
        this.smets2assetInstY = element(by.xpath('//input[@id="smets2Installedtrue"]/following-sibling::span[@class="outer"]'));
        this.commshubResetting = element(by.xpath('//*[contains(text(),"Does Comms Hub need resetting?")]'));
        this.commshubResettingY = element(by.xpath('//input[@id="commshubresettrue"]/following-sibling::span[@class="outer"]'));
        this.removecommshub5mins = element(by.xpath('//button[text()="OK"]'));
        this.commshubconnectedtoSupply = element(by.xpath('//*[contains(text(),"Comms Hub Connected to Supply?")]'));
        this.commshubconnectedtoSupplyY = element(by.xpath('//input[@id="commshubconnectedtrue"]/following-sibling::span[@class="outer"]'));
        this.commshubconnectedtoSWan = element(by.xpath('//*[contains(text(),"Comms Hub Connected to WAN?")]'));
        this.commshubconnectedtoWanY = element(by.xpath('//input[@id="commhubwantrue"]/following-sibling::span[@class="outer"]'));
        this.commshubconnectedtoAsset = element(by.xpath('//*[contains(text(),"Do you need to exchange an asset?")]'));
        this.commshubconnectedtoAssetY = element(by.xpath('//input[@id="exchangeassettrue"]/following-sibling::span[@class="outer"]'));
        this.commsHub = element(by.xpath('//*[contains(text(),"Comms Hub?")]'));
        this.commsHubY = element(by.xpath('//input[@id="chubexdfa"]/following-sibling::span[@class="cr"]'));
        this.gasMeter = element(by.xpath('//*[contains(text(),"Gas Meter?")]'));
        this.gasMeterY = element(by.xpath('//input[@id="gasmexdfa"]/following-sibling::span[@class="cr"]'));
        this.Regulator = element(by.xpath('//*[contains(text(),"Regulator?")]'));
        this.RegulatorY = element(by.xpath('//input[@id="regexdfa"]/following-sibling::span[@class="cr"]'));
        this.ihdPpmid = element(by.xpath('//*[contains(text(),"IHD / PPMID?")]'));
        this.ihdPpmidY = element(by.xpath('//input[@id="ihdppmidexdfa"]/following-sibling::span[@class="cr"]'));
        this.commshubNextbtn = element(by.id('btnNextComm'));
        this.preInstgastightnessTest = element(by.xpath('//div/h4[text()="Pre Installation Gas Tightness Test"]'));
        this.preinstGasTightness = element(by.xpath('//*[contains(text(),"Pre Installation - Gas Tightness Test carried Out?")]'));
        this.preinstGasTightnessY = element(by.xpath('//*[@id="rb_PreGasTigTCarOut_y"]/span[@class="outer"]'));
        //#endregion

        //#region Pre installation gas tightnes
        this.capturepressureinMB = element(by.xpath('(//*[@id="btn1"])[1]'));
        this.wasthereadropinPressure = element(by.xpath('//*[contains(text(),"Was there a drop in pressure?")]'));
        this.wasthereadropinPressureY = element(by.id('rb_WasDropPress_y'));
        this.enterdipGasPressure = element(by.xpath('//*[contains(text(),"Enter DIP Gas Pressure (mbars)")]'));
        this.enterdipGasPressureSelect = element(by.id('cbx_DipPress_sel'));
        this.selectmeterType = element(by.xpath('//*[contains(text(),"Select Meter Type")]'));
        this.selectmeterTypeSelect = element(by.id('cbx_MetreType_sel'));
        this.smellGas = element(by.xpath('//*[contains(text(),"Can you or Customer Smell Gas")]'));
        this.smellGasY = element(by.id('rb_SmellGas_y'));
        this.gasTightness = element(by.xpath('//*[contains(text(),"Additional Notes / Remarks - Gas Tightness Test Fail")]'));
        this.gasTightnessTextbox = element(by.id('txt_AddNotGasTigT'));
        this.gastightnessOutcome = element(by.xpath('//*[contains(text(),"Gas Tightness Test Failure-Outcome?")]'));
        this.gastightnessOutcomeGT = element(by.id('rb_TestFailOutCmGTIss_y'));
        this.reportedinctoGT = element(by.xpath('//*[contains(text(),"Reported Incident to GT?")]'));
        this.reportedinctoGTY = element(by.xpath('//*[@id="rb_RepGT_y"]/span[@class="outer"]'));
        this.jobRef = element(by.id('gt_issue'));
        this.reportedinctoHS = element(by.xpath('//*[contains(text(),"Reported Incident to H&S(AIRline?)?")]'));
        this.reportedinctoHSY = element(by.xpath('//*[@id="rb_RepAirLine_y"]/span[@class="outer"]'));
        this.airRef = element(by.xpath('//*[@id="hsjobref"]'));
        this.gtattendanceY = element(by.xpath('//*[@id="rb_GTAttSite_y"]/span[@class="outer"]'));
        this.gtresolveY = element(by.xpath('//*[@id="rb_GTResIss_y"]/span[@class="outer"]'));
        this.gastightnesstestCompleted = element(by.xpath('//*[contains(text(),"Gas Tightness Test Completed?")]'));
        this.gastightnesstestCompletedFail = element(by.xpath('//*[contains(text(),"FAIL")]'));
        this.capctmeterReadingPanel = element(by.xpath('(//*[contains(text(),"Capture Current Meter Reading")])[1]'));
        this.btnnext = element(by.xpath('(//*[@id="btnNextComm"])[2]'));
        this.ctmeterdtlGasNxt = element(by.id('btn_Next_read'));
        //#endregion

        //#region Remove Ihd-ppmid */

        this.removePPMID = element(by.xpath('//*[@id="Title_removeIhdPpmid"]'));
        this.rmvPPMIDPanel = element(by.xpath('//div/h4[text()="Remove PPMID"]'));
        this.AssettobeRemoved = element(by.xpath('//*[@id="removeIhdPpmid_assetRemoved_y"]/span[@class="outer"]'));
        this.rmvihdppmidpopupOK = element(by.xpath('//button[text()="OK"]'));
        this.rmvihdppmidstatusofAssetSel = element(by.xpath('//select[@id="removeIhdPpmid_assetStatusSelect"]'));
        this.rmvihdppmidNxtBtn = element(by.id('removeIhdPpmid_nextButton'));
        this.sendmsgPanel = element(by.xpath('//*[contains(text(),"SEND MESSAGE PPMID")]'));
        this.RemoveIHDAsset=element(by.xpath('//*[@id="Title_removeIhdPpmidAsset"]'));
        //#endregion

        //#region Send Mesg */
        this.sendmsgbtn = element(by.xpath('//*[@id="xttmt_sendMessageButton"]'));
        this.reqSentSuccess = element(by.xpath('//*[text()="Request Sent Successfully"]'));
        this.AssetUnJoined = element(by.xpath('//*[text()="Asset Unjoined"]'));
        this.SMawaitingResp = element(by.xpath('(//*[text()="Awaiting Response"])[1]'));
        this.ppmidremoval = element(by.xpath('//*[@id="xttmt_nextButton"]'));
        this.ppmidremovalSuccess = element(by.xpath('//*[contains(text(),"PPMID Removal Successful")]'));
        this.awaitingResp = element(by.xpath('//*[@id="Title_removeIhdPpmidAsset"]'));
        //#endregion

        //#region Asset Removal 
        this.AssetRemovalSelect = element(by.xpath('//select[@id="removeIhdPpmidAsset_removeAssetStatusSelect"]'));
        this.confirmAssetrmvYES = element(by.xpath('//*[@id="removeIhdPpmidAsset_confirmRemoved"]/following-sibling::span[@class="outer"]'));
        this.AssetPopup = element(by.xpath('//*[text()="OK"]'));
        this.RemoveGasMeterPanel = element(by.xpath('//div[@id="Title_removeGasMeter"]'));
        //#endregion

        //#region Gas Meter Removal 
        this.GMassettoberemoved = element(by.xpath('//*[@id="removeGasMeter_assetRemovedReplaced_y"]/span[@class="outer"]'));
        this.statusofAssetSelect = element(by.xpath('//select[@id="removeGasMeter_assetStatusSelect"]'));
        this.removedmeterReading = element(by.xpath('//input[@id="input0"]'));
        this.GMremovalNxtBtn = element(by.xpath('//*[@id="removeGasMeter_nextButton"]'));
        this.SendGMRMPanel = element(by.xpath('//div[@id="Title_gmrem"]'));
        //#endregion

        //#region Send GMREM 
        this.SendGMREMBtn = element(by.xpath('//*[@id="gmrem_sendMessageButton"]'));
        this.AwaitingRespGMREM = element(by.xpath('//*[text()="Awaiting Response"][2]'));
        //#endregion

        //#region Awaiting Response after GMREM 
        this.reqSentSuccessGMREM = element(by.xpath('(//*[text()="Request Sent Successfully"])[2]'));
        this.RemovalSuccess = element(by.xpath('//*[@id="gmrem_nextButton"]'));
        this.OKtoremoveAsset = element(by.xpath('//*[text()="OK to Remove Asset"]'));
        //#endregion

        //#region Removal Successful 
        this.confirmgasAssetRemoval = element(by.xpath('//*[@id="Title_removeGasAsset"]'));
        //#endregion

        //#region Confirm gas Asset Removal
        this.gasAssetRemoval = element(by.xpath('//select[@id="removeGasAsset_removedAssetStatus"]'));
        this.GasAssetRemovalY = element(by.xpath('//*[@id="removeGasAsset_confirmAssetRemoved"]/following-sibling::span[@class="outer"]'));
        this.GasAssetRemovalPopup = element(by.xpath('//*[text()="OK"]'));
        this.RemoveCommsHub = element(by.xpath('//div[@id="Title_chubRemove"]'));
        //#endregion

        //#region Removal Comms Hub
        this.IstheassettobeRemovedorReplaced = element(by.xpath('//*[@id="chubRemove_assetRemoved_y"]/span[@class="outer"]'));
        this.RemoveCommshubSelect = element(by.xpath('//select[@id="chubRemove_connectionMethodSelect"]'));
        this.StatusofCommsHub = element(by.xpath('//select[@id="chubRemove_statusSelect"]'));
        this.RemoveCommsHubAdditionalNotes = element(by.xpath('//*[@id="chubRemove_additionalNotes"]'));
        this.FaultidentifiedPostInst = element(by.xpath('//*[@id="chubRemove_faultIdentifiedPostInstall"]/following-sibling::span[@class="outer"]'));
        this.RemCommsHubNxtBtn = element(by.xpath('//*[@id="chubRemove_submitButton"]'));
        this.ConfirmCommsHubRemoval = element(by.xpath('//div[@id="Title_removeChubAsset"]'));
        //#endregion

        //#region Confirm Comms Hub Removal
        this.ConfirmCommsHubRemovalSelect = element(by.xpath('//select[@id="removeChubAsset_assetStatusSelect"]'));
        this.Confirmcommhubassetremove = element(by.xpath('//*[@id="removeChubAsset_confirmAssetRemoved"]/following-sibling::span[@class="outer"]'));
        this.ConfirmCommsHubRemovalPopup = element(by.xpath('//*[text()="OK"]'));
        this.ConfirmCommsHubNxtBtn = element(by.xpath('(//button[@id="btn1"])[2]'));
        //#endregion

        
        //CGP added for FLTY TRAD20

        this.removeMeter = element(by.xpath('//div/h4[text()="Remove Meter"]'));
        this.assetRemovalElec = element(by.xpath('//input[@id ="CCHradio5"]/following-sibling::span[@class="outer"]'));
        this.statusofAssetElec = element(by.xpath('//select[@id="cbx_StaAss_sel"]'));
        this.elecRemoveNextSec = element(by.id('btn_Next_rmv'));
        this.confirmElecAssetRemoval = element(by.xpath('//div/h4[text()="Confirm Electric Asset Removal"]'));
        this.elecAssetRemoval = element(by.xpath('//select[@id="cbx_RAss_Status"]'));
        this.elecAssetRemovalY = element(by.xpath('//*[@id="rb_CAssRem_y"]'));
        this.elecAssetRemovalPopup = element(by.xpath('//*[text()="OK"]'));
        this.commshubReqY = element(by.xpath('//*[@id="chubInstall_newChubRequired_y"]/span[@class="outer"]'));
        this.commsHubConnectedYes = element(by.id('Cradionm1'));
        this.commissioningNxtBtn = element(by.id('CbtnNextComm'));
        this.submitElecRemSecEndTRAD = element(by.xpath('//button[@id="btn1"]'));
        this.existelecmeterDtlY = element(by.id('rb_ExMetDetCorrt_y'));

        //CGP added
        this.nextSecGasBtn = element(by.id('removeGasAsset_nextButton'));
        this.existingelecmeterdtls = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]/span[@class="outer"]'));
        this.meterReadingElec = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register (1):")]'));
        this.currentMeterElecCap = element(by.xpath('//*[contains(text(),"Current Meter Details")]'));
        this.confirmElecmeterText = element(by.xpath('//*[contains(text(),"Confirm if Elec meter is On Supply or Off Supply")]'));
        this.confirmElecmeterOnsupply = element(by.xpath('//input[@id="confirmelecsupplytrue"]/following-sibling::span[@class="outer"]'));
		this.elecMeter = element(by.xpath('//*[contains(text(),"Elec Meter?")]'));
        this.elecMeterY = element(by.xpath('//input[@id="elecmexdfa"]/following-sibling::span[@class="cr"]'));
        this.ElecremovalNxtBtn = element(by.xpath('//*[@id="btn_Next_rmv"]'));
        this.SendElecRMPanel = element(by.xpath('//div[@id="Title_emrem"]'));	
		this.SendEMREMBtn = element(by.xpath('//*[@id="gmrem_sendMessageButton"]'));
        this.AwaitingRespEMREM = element(by.xpath('//*[text()="Awaiting Response"]'));     
		this.ElecRemoveMeter = element(by.xpath('//div/h4[text()="Remove Meter"]'));
		this.RemoveElecAssetrplacedorremoved = element(by.xpath('((//*[@id="CCHradio5"])[2])/following-sibling::span[@class="outer"]'));
        this.statusofElecAssetSelect = element(by.xpath('//select[@id="cbx_StaAss_sel"]'));      
        this.reqSentSuccessEMREM = element(by.xpath('(//*[text()="Request Sent Successfully"])[2]'));
        this.RemovalSuccessElec = element(by.xpath('//*[@id="emrem_nextButton"]'));
        this.OKtoremoveAssetElec = element(by.xpath('//*[text()="OK to Remove Asset"]'));
        this.confirmElecAssetRemoval = element(by.xpath('//*[@id="Title_Remove_Ass"]'));
        this.ElecAssetRemoval = element(by.xpath('//select[@id="cbx_RAss_Status"]'));
        this.ElecAssetRemovalY = element(by.xpath('//*[@id="rb_CAssRem_y"]/span[@class="outer"]'));
        this.ElecAssetRemovalPopup = element(by.xpath('//*[text()="OK"]'));
        this.ConfirmElecCommsHubNxtBtn = element(by.xpath('(//button[@id="btn1"])'));
        this.SendElMREMBtnCap = element(by.xpath('//*[@id="Title_emrem"]'));
        this.SendElMREMBtn = element(by.xpath('//*[@id="emrem_sendMessageButton"]'));
        this.meterReading1 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register")])[1]'));
        this.meterReading2 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register")])[2]'));
        this.meterReadingTRAD = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register")]'));
        this.meterReadingLabel1 = element(by.xpath('(//input[@id="reg0"])[1]'));
        this.meterReadingLabel2 = element(by.xpath('(//input[@id="reg0"])[2]'));
        this.meterReadingLabelTRAD = element(by.xpath('//input[@id="reg0"]'));

        this.captureCurrentMeterText = element(by.xpath('//div[@class="sectionTitle assessHeader alignCenter orange"]'));
        // CGP added for Determine Fault Activity
        //this.confirmgasmeterOnsupply = element(by.xpath('//input[@id="confirmgassupplytrue"]/following-sibling::span[@class="outer"]'));
        this.confirmElecMeterOnsupply = element(by.xpath('//input[@id="confirmelecsupplytrue"]/following-sibling::span[@class="outer"]'));
        this.SMET2AssetInstalledN = element(by.xpath('//input[@id="smets2Installedfalse"]/following-sibling::span[@class="outer"]'));
        this.exchangeAssetY = element(by.xpath('//input[@id="exchangeassettrue"]/following-sibling::span[@class="outer"]'));
        this.equipmentRepositionRequired = element(by.id('repositionSelect'));
        this.SMETSOffered = element(by.xpath('//input[@id="smets2offeredtrue"]/following-sibling::span[@class="outer"]'));
        this.elecMeterRadio = element(by.xpath('//input[@id="elecmexdfa"]/following-sibling::span[@class="cr"]'));
        this.gasMeterRadio = element(by.xpath('//input[@id="gasmexdfa"]/following-sibling::span[@class="cr"]'));
        this.regulatorRadio = element(by.xpath('//input[@id="regexdfa"]/following-sibling::span[@class="cr"]'));
        this.nextSecRem = element(by.id('btnNextEff'));
        this.msgToDCCY = element(by.xpath('//input[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
        this.currentMeterDetTRAD = element(by.id('Title_currentMeterDetails'));
        this.randomClickEX23 = element(by.id('rb_UnReadMet_y'));
        // cgp added
        this.existelecmeterDtlY = element(by.id('rb_ExMetDetCorrt_y'));
        // CGP added
        this.currentMeterDetTRAD = element(by.id('Title_currentMeterDetails'));
        this.randomClick1 = element(by.xpath('(//div[@class="checkLabel"])[1]'));
        this.randomClick2 =  element(by.xpath('(//div[@class="checkLabel"])[2]'));
        this.currentMeterDetTRAD = element(by.id('Title_currentMeterDetails'));
       // this.randomClick1 = element(by.xpath('(//div[@class="checkLabel"])[1]'));
       // this.randomClick2 =  element(by.xpath('(//div[@class="checkLabel"])[2]'));
        this.randomClickEX23 = element(by.id('rb_UnReadMet_y'));

        this.randomClickTRAD = element(by.xpath('//div[@class="checkLabel"]'));
        this.currentMetDet = element(by.id('Title_CurrMe_Det'));
        this.nonserealizedAssetDD = element(by.id('Cselect4'));
        this.nonserealizedAssetInput = element(by.id('Cbar3'));
        //CGP TRAD changes
        this.smet2ihdppidN = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_n"]'));

        




    }

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */

    //#region CURRENT IHD/PPMID DETAILS

    public async currentihdppmiddetailtext() {
        await utility.wait(1000);
        await this.ctihdppmidDtl.getText().then(function (ctihdppmidDtlTxt) {
            console.log("Find Current IHD PPMID  " + ctihdppmidDtlTxt);
        });
    }

    public async fillcurrentIhdPPMIDdtls() {
        await utility.wait(3000);
        if (await this.smet2ihdppidText.isDisplayed()) {
            await this.smet2ihdppidY.click();
        }
        await utility.wait(3000);
        if (await this.ihdppmidsSersk.isDisplayed()) {
            await this.ihdppmidsSersk.clear();
            await this.ihdppmidsSersk.sendKeys("00-0F-01-FF-FF-E4-85-D4");
        }
        await utility.wait(1000);
        if (await this.existingihdPpmidText.isDisplayed()) {
            await this.existingihdPpmidY.click();
        }
        await utility.wait(1000);
        try {
            if (await this.IhdPpmidNxt.isPresent()) {
                await this.IhdPpmidNxt.click();
            }
        } catch (error) {
            console.log("Next section is not present at this moment");
        }  
    }
    public async currentmeterdetlGasSection() {
        await utility.wait(1000);
        await this.currentmeterdetlGasSec.getText().then(function (currentdtlGasSection) {
            console.log("Find current detail gas section  " + currentdtlGasSection);
        });
    }
    public async currentmeterGasPageContent() {
        await utility.wait(1000);
        await this.currentmeterdtlPgCont.getText().then(function (currentmeterdtlPgContent) {
            console.log("Find current detail gas section content  " + currentmeterdtlPgContent);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region CURRENT METER DETAILS - GAS
    public async fillcurrentmeterdtlGassec() {
        await utility.wait(1000);
        if (await this.existgasmeterDtlText.isDisplayed()) {
            await this.existgasmeterDtlY.click();
        }
        await utility.wait(1000);
        if (await this.meterReading.isDisplayed()) {
            await this.meterReadingLabel.clear();
            await this.meterReadingLabel.sendKeys("12345");

            await this.meterReading.click();
        }
    }
    public async currentcommsHubdtl() {
        await utility.wait(8000);
        browser.sleep(3000);
        await this.currentCommsHubTitle.getText().then(function (currentCommsHubTit) {
            console.log("Find current comms Hub Title  " + currentCommsHubTit);
        });
    }
    public async currentcommsHubdtlPgCont() {
        await utility.wait(8000);
        browser.sleep(6000);
        await this.currentHubDtlsPgCont.getText().then(function (currentCommsHubTitlePgCont) {
            console.log("Find current comms Hub Detail page content  " + currentCommsHubTitlePgCont);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region CURRENT COMMS HUB DETAILS
    public async fillcurrenthubdtl(index:number) {
       
        if (await this.commshubLoc.isDisplayed()) {
            await utility.wait(4000);
            var select = this.commshubLoc;
            await select.$('[value="A"]').click();
            //await select.$('[label="A : Outside Premises"]').click();
        }
        await utility.wait(1000);
        if (await this.aerialInstalledY.isDisplayed()) {
            await this.aerialInstalledY.click();
        }
        await utility.wait(1000);
        if (await this.CommshubdtlCorrectText.isDisplayed()) {
            await this.CommshubdtlCorrectY.click();
        }
        await utility.wait(1000);
    }

    public async capturephotocommsHub() {
        await utility.wait(1000);
        if (await this.capexistcommshubInstall.isDisplayed()) {
            await this.capexistcommshubInstall.click();
        }
    }
    public async determintfaultActivity() {
        await utility.wait(1000);
        await this.determinefaultActivityTitle.getText().then(function (determinefaultActivityTit) {
            console.log("Faulty activity  " + determinefaultActivityTit);
        });
        await utility.wait(4000);
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Determine Faulty Activity
    public async fill14commsdtls() {
        await utility.wait(4000);
        if (await this.confirmgasmeterOnsupply.isDisplayed()) {
            await this.confirmgasmeterOnsupply.click();
        }
    }

    public async captureevidsuspectedtamp() {
        await utility.wait(1000);
        if (await this.capturesuspectedTamp.isDisplayed()) {
            await this.capturesuspectedTamp.click();
        }
    }

    public async fill15commsdtls() {
        await utility.wait(3000);
        if (await this.smets2assetInst.isDisplayed()) {
            await this.smets2assetInstY.click();
        }
        await utility.wait(3000);
        if (await this.commshubResetting.isDisplayed()) {
            await this.commshubResettingY.click();
        }
    }
    public async clickOk5mins() {
        await utility.wait(3000);
        if (await this.removecommshub5mins.isDisplayed()) {
            await this.removecommshub5mins.click();
        }
    }
    public async fill16commsdtls() {
        await utility.wait(3000);
        if (await this.commshubconnectedtoSupply.isDisplayed()) {
            await this.commshubconnectedtoSupplyY.click();
        }
        await utility.wait(3000);
        if (await this.commshubconnectedtoSWan.isDisplayed()) {
            await this.commshubconnectedtoWanY.click();
        }
        await utility.wait(3000);
        if (await this.commshubconnectedtoAssetY.isDisplayed()) {
            await this.commshubconnectedtoAssetY.click();
        }
    }
    public async commshubSelect() {
        await utility.wait(4000);
        if (await this.commsHub.isDisplayed()) {
            await this.commsHubY.click();
        }
    }
    public async gasmeterSelect() {
        await utility.wait(3000);
        if (await this.gasMeter.isDisplayed()) {
            await this.gasMeterY.click();
        }
    }
    public async regulatorSelect() {
        await utility.wait(3000);
        if (await this.Regulator.isDisplayed()) {
            await this.RegulatorY.click();
        }
    }
    public async ihdppmidSelect() {
        await utility.wait(3000);
        if (await this.ihdPpmid.isDisplayed()) {
            await this.ihdPpmidY.click();
        }
    }
    public async clickoncommsNextsection() {
        await utility.wait(1000);
        if (await this.commshubNextbtn.isDisplayed()) {
            await this.commshubNextbtn.click();
        }
    }
    public async preinstgasTighttest() {
        await utility.wait(1000);
        await this.preInstgastightnessTest.getText().then(function (preInstgastightnessTst) {
            console.log("Pre Installation Gas Tightness " + preInstgastightnessTst);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Pre installation gas tightness
    public async fill17preInstdtls() {
        await utility.wait(1000);
        if (await this.preinstGasTightness.isDisplayed()) {
            await this.preinstGasTightnessY.click();
        }
    }

    public async capturepressureMB() {
        await utility.wait(1000);
        if (await this.capturepressureinMB.isDisplayed()) {
            await this.capturepressureinMB.click();
        }
    }

    public async fill18preInstdtls() {
        await utility.wait(3000);
        if (await this.wasthereadropinPressure.isDisplayed()) {
            await this.wasthereadropinPressureY.click();
        }
        await utility.wait(2000);
        if (await this.enterdipGasPressure.isDisplayed()) {
            var select = this.enterdipGasPressureSelect;
            select.$('[value="3"]').click();
        }
        await utility.wait(2000);
        if (await this.selectmeterType.isDisplayed()) {
            var select = this.selectmeterTypeSelect;
            await select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.smellGas.isDisplayed()) {
            await this.smellGasY.click();
        }
    }
    public async gastightnessfieldfailed() {
        await utility.wait(1000);
        if (await this.gastightnesstestCompleted.isDisplayed()) {
            await this.gastightnesstestCompletedFail.isDisplayed();
        }
    }
    public async fill19preInstdtls() {
        await utility.wait(1000);
        if (await this.gasTightness.isDisplayed()) {
            await this.gasTightnessTextbox.sendKeys("Gas Tested");
        }
        await utility.wait(1000);
        if (await this.gastightnessOutcome.isDisplayed()) {
            await this.gastightnessOutcomeGT.click();
        }
        await utility.wait(1000);
        if (await this.reportedinctoGT.isDisplayed()) {
            await this.reportedinctoGTY.click();
        }
        await utility.wait(1000);
        if (await this.jobRef.isDisplayed()) {
            await this.jobRef.clear();
            await this.jobRef.sendKeys("1");
        }
        await utility.wait(1000);
        if (await this.reportedinctoHS.isDisplayed()) {
            await this.reportedinctoHSY.click();
        }
        await utility.wait(1000);
        if (await this.airRef.isDisplayed()) {
            await this.airRef.clear();
            await this.airRef.sendKeys("2");
        }
        await utility.wait(1000);
        if (await this.gtattendanceY.isDisplayed()) {
            await this.gtattendanceY.click();
        }
        await utility.wait(1000);
        if (await this.gtresolveY.isDisplayed()) {
            await this.gtresolveY.click();
        }
        await utility.wait(1000);
        if (await this.btnnext.isDisplayed()) {
            await this.btnnext.click();
        }
    }
    public async removeihdPpmid() {
        await utility.wait(1000);
        await this.removePPMID.getText().then(function (removePPMIDTxt) {
            console.log("Remove PPMID " + removePPMIDTxt);
        });
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region REMOVE IHD/PPMID
    public async fill20rmvihdppmidtls() {
        await utility.wait(1000);
        if (await this.AssettobeRemoved.isDisplayed()) {
            await this.AssettobeRemoved.click();
        }
    }
    public async ihdpowerOnOK() {
        await utility.wait(1000);
        if (await this.rmvihdppmidpopupOK.isDisplayed()) {
            await this.rmvihdppmidpopupOK.click();
        }
    }
    public async fill21rmvihdppmidtls() {
        await utility.wait(2000);
        if (await this.rmvihdppmidstatusofAssetSel.isDisplayed()) {
            var select = await this.rmvihdppmidstatusofAssetSel;
            await select.$('[value="1"]').click();
        }
    }
    public async rmvihdppmidnxtbtn() {
        await utility.wait(1000);
        if (await this.rmvihdppmidNxtBtn.isDisplayed()) {
            await this.rmvihdppmidNxtBtn.click();
        }
    }
    public async sendmsgihdppmid() {
        await utility.wait(1000);
        await this.sendmsgPanel.getText().then(function (sendmsgPanelTxt) {
            console.log("Send Msg Tab " + sendmsgPanelTxt);
        });
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Send Message

    public async clickonSendMessage() {
        await utility.wait(2000);
        if (await this.sendmsgbtn.isDisplayed()) {
            await this.sendmsgbtn.click();
        }

    }
    public async awaitingResponse() {
        await utility.wait(1000);
        await this.SMawaitingResp.getText().then(function (SMawaitingRespTxt) {
            console.log("Awaiting Response " + SMawaitingRespTxt);
        });
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region AWAITING RESPONSE

    public async waitforthebuttontoDisappear() {
        await utility.wait(60000);
    }
    public async ppmidRemovalbtn() {
        await utility.wait(1000);
        await expect(this.ppmidremoval.isDisplayed());
    }
    public async sentmesgSuccess() {
        await utility.wait(1000);
        await expect(this.reqSentSuccess.isDisplayed());
    }
    public async assetUnjoinedText() {
        await utility.wait(1000);
        await expect(this.AssetUnJoined.isDisplayed());
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region PPMID Removal Successful

    public async PPMIDRemovalbtndisplayed() {
        await utility.wait(1000);
        await expect(this.ppmidremovalSuccess.isDisplayed());
    }
    public async clickonPPMIDRmvl() {
        await utility.wait(1000);
        if (await this.ppmidremovalSuccess.isDisplayed()) {
            await this.ppmidremovalSuccess.click();
        }
    }
    public async confirmAssetRmvl() {
        await utility.wait(1000);
        await this.RemoveIHDAsset.getText().then(function (RemoveIHDAssetTxt) {
            console.log("Confirm Asset Removal " + RemoveIHDAssetTxt);
        });
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Asset Removal
    public async fill22AssetRemoval() {
        await utility.wait(1000);
        if (await this.AssetRemovalSelect.isDisplayed()) {
            var select = this.AssetRemovalSelect;
            await select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.confirmAssetrmvYES.isDisplayed()) {
            await this.confirmAssetrmvYES.click();
        }
    }
    public async clickonOKBtn() {
        await utility.wait(1000);
        if (await this.AssetPopup.isDisplayed()) {
            await this.AssetPopup.click();
        }
    }
    public async RmvGasmeterSec() {
        await utility.wait(1000);
        await this.RemoveGasMeterPanel.getText().then(function (RemoveIRemoveGasMeterPanelTxt) {
            console.log("Remove Gas Meter " + RemoveIRemoveGasMeterPanelTxt);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Gas Meter Removal 

    public async fill23GasmeterRemoval() {
        await utility.wait(3000);
        if (await this.GMassettoberemoved.isDisplayed()) {
            await this.GMassettoberemoved.click();
        }
        await utility.wait(3000);
        if (await this.statusofAssetSelect.isDisplayed()) {
            var select = this.statusofAssetSelect;
            await select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.removedmeterReading.isDisplayed()) {
            await this.removedmeterReading.clear();
            await this.removedmeterReading.sendKeys('12345');
        }
    }
    public async clickonnxtBtnofgasmeterRemoval() {
        await utility.wait(1000);
        if (await this.GMremovalNxtBtn.isDisplayed()) {
            await this.GMremovalNxtBtn.click();
        }
    }
    public async sendmsgGMREM() {
        await utility.wait(1000);
        await this.SendGMRMPanel.getText().then(function (SendGMRMPanelTxt) {
            console.log("Send GMRM" + SendGMRMPanelTxt);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Send GMREM 

    public async clickOnsendmsgGMREM() {
        await utility.wait(1000);
        if (await this.SendGMREMBtn.isDisplayed()) {
            await this.SendGMREMBtn.click();
        }
    }
    public async AwaitingResponseGMREM() {
        await utility.wait(20000);
    }
    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Awaiting Response After GMREM 

    public async removalsuccessfulbtn() {
        await utility.wait(2000);
        await expect(this.RemovalSuccess.isDisplayed());
    }
    public async ReqSentSuccess() {
        await utility.wait(1000);
        await expect(this.reqSentSuccessGMREM.isDisplayed());
    }
    public async OktoRemoveAsset() {
        await utility.wait(1000);
        await expect(this.OKtoremoveAsset.isDisplayed());
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Removal Successful 

    public async clickonremovalsuccessfulbtn() {
        await utility.wait(1000);
        if (await this.RemovalSuccess.isDisplayed()) {
            await this.RemovalSuccess.click();
        }
    }
    public async confirmGasAssetRemoval() {
        await utility.wait(1000);
        await this.confirmgasAssetRemoval.getText().then(function (confirmgasAssetRemovalTxt) {
            console.log("Confirm Gas Asset Removal" + confirmgasAssetRemovalTxt);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Gas Asset Removal 

    public async fill24GasAssetRemoval() {
        await utility.wait(1000);
        if (await this.gasAssetRemoval.isDisplayed()) {
            var select = this.gasAssetRemoval;
            await select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.GasAssetRemovalY.isDisplayed()) {
            await this.GasAssetRemovalY.click();
        }
    }
    public async clickonokGasAssetRemoval() {
        await utility.wait(1000);
        if (await this.GasAssetRemovalPopup.isDisplayed()) {
            await this.GasAssetRemovalPopup.click();
        }
    }
    public async RemoveCommsHubWindow() {
        await utility.wait(1000);
        await this.RemoveCommsHub.getText().then(function (RemoveCommsHubTxt) {
            console.log("Gas Asset Removal" + RemoveCommsHubTxt);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region REMOVE COMMS HUB 

    public async fill27RmvCommsHub() {
        await utility.wait(1000);
        if (await this.IstheassettobeRemovedorReplaced.isDisplayed()) {
            await this.IstheassettobeRemovedorReplaced.click();
        }
        if (await this.RemoveCommshubSelect.isDisplayed()) {
            var select = this.RemoveCommshubSelect;
            await select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.StatusofCommsHub.isDisplayed()) {
            var select = this.StatusofCommsHub;
            await select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.RemoveCommsHubAdditionalNotes.isDisplayed()) {
            await this.RemoveCommsHubAdditionalNotes.clear();
            await this.RemoveCommsHubAdditionalNotes.sendKeys("Remove COMMS HUB remarks");
        }
        await utility.wait(1000);
        if (await this.FaultidentifiedPostInst.isDisplayed()) {
            await this.FaultidentifiedPostInst.click();
        }
    }
    public async clickonNxtBtnRmvCommsHub() {
        await utility.wait(1000);
        if (await this.RemCommsHubNxtBtn.isDisplayed()) {
            await this.RemCommsHubNxtBtn.click();
        }
    }
    public async ConfirmHubRmv() {
        await utility.wait(1000);
        await this.ConfirmCommsHubRemoval.getText().then(function (ConfirmCommsHubRemovalTxt) {
            console.log("Confirm Hub Removal" + ConfirmCommsHubRemovalTxt);
        });
    }

    //#endregion

    /**
  * @Author Jansi Victor
  * @Description  Automation for FAULTY18 Workflow
    */
   
    //#region Confirm Comm hub removal

    public async fill28ConfirmremovalCommsHub() {
        await utility.wait(1000);
        if (await this.ConfirmCommsHubRemovalSelect.isDisplayed()) {
            var select = this.ConfirmCommsHubRemovalSelect;
            await select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.Confirmcommhubassetremove.isDisplayed()) {
            await this.Confirmcommhubassetremove.click();
        }
    }
    public async clickonokconfrimremovalpopup() {
        await utility.wait(1000);
        if (await this.ConfirmCommsHubRemovalPopup.isDisplayed()) {
            await this.ConfirmCommsHubRemovalPopup.click();
        }
    }
    public async clickonsubmitforRemoval() {
        await utility.wait(1000);
        if (await this.ConfirmCommsHubNxtBtn.isDisplayed()) {
            await this.ConfirmCommsHubNxtBtn.click();
        }
    }
    //#endregion

// cgp added

public async capturecurrentmeterGasPageContent() {
    await utility.wait(5000);
    await this.captureCurrentMeterText.getText().then(function (capturecurrentmeterdtlPgContent) {
        console.log("Find current detail gas section content  " + capturecurrentmeterdtlPgContent);
    });
}

//CGP added
//CGP added

public async captureElecSection() {
    await utility.wait(5000);
    await this.currentMetDet.getText().then(function (capturecurrentmeterdtlPgContentElec) {
        console.log("Find current detail elec section content  " + capturecurrentmeterdtlPgContentElec);
    });
}

//CGP added
public async captureElecSectionTRAD() {
    await utility.wait(5000);
    await this.capctmeterReadingPanel.getText().then(function (Test1) {
        console.log("Find current detail elec section content  " + Test1);
    });
}





//CGP added capture current meter
    public async fillcapturecurrentmeterdtlGassec() {
        await utility.wait(2000);
        if (await this.captureCurrentMeterText.isDisplayed()) {
            await this.existgasmeterDtlY.click();
        }
        await utility.wait(1000);
        if (await this.meterReading1.isDisplayed()) {
            await this.meterReadingLabel1.clear();
            await this.meterReadingLabel1.sendKeys("1234");
            await this.randomClick1.click();
            console.log("Random Click 1");
            await utility.wait(2000);
          
        }
    }

    // CGP added 13/09

 public async fillcapturecurrentmeterdtlGassecTRAD() {
        await utility.wait(2000);
        if (await this.captureCurrentMeterText.isDisplayed()) {
            await this.existgasmeterDtlY.click();
        }
        await utility.wait(1000);
        if (await this.meterReading1.isDisplayed()) {
            await this.meterReadingLabel1.clear();
            await this.meterReadingLabel1.sendKeys("12345");
            await this.randomClick1.click();
            console.log("Random Click 1");
            await utility.wait(2000);
          
        }
    }
 public async  currentMeterDetailsHeader()
    {
        await this.currentMeterDetTRAD.getText().then(function (currentMeterDetails) {
            console.log("Current Meter Details Title  " + currentMeterDetails);
        });
    }
   
public async fillcurrentmeterdtlElecsecTRAD() {
        await utility.wait(2000);
        if (await this.currentMetDet.isDisplayed()) {
            await utility.wait(2000);
            console.log("Current meter details displayed");
            await this.existelecmeterDtlY.click();
            console.log("Electric section clciked");
            
        }
        await utility.wait(2000);
        if (await this.meterReadingTRAD.isDisplayed()) {
            await this.meterReadingLabelTRAD.clear();
            await this.meterReadingLabelTRAD.sendKeys("12345");
            console.log("Text Enterd for elect 5 digits");
            await this.randomClickTRAD.click();
            console.log("Random Click 2");
            // Change Later

           //await utility.wait(1000);
            //await this.elecRemoveNextSec.click();
            
            //await this.ctmeterdtlGasNxt.click();
            console.log("Next Button clicked 2");
            await utility.wait(3000);

           // await this.meterReading.click();
        }
    }

   
public async fillcurrentmeterdtlElecsecEX23() {
        await utility.wait(2000);
        if (await this.existelecmeterDtlY.isDisplayed()) {                        
            await this.existelecmeterDtlY.click();
            console.log("Electric section clciked");         
        
    }
}

public async fillcurrentmeterdtlElecsec() {
        await utility.wait(2000);
        if (await this.currentMetDet.isDisplayed()) {
            await utility.wait(2000);
            console.log("Current meter details displayed");
            await this.existelecmeterDtlY.click();
            console.log("Electric section clciked");
            
        }
        await utility.wait(2000);
        if (await this.meterReading2.isDisplayed()) {
            await this.meterReadingLabel2.clear();
            await this.meterReadingLabel2.sendKeys("12345");
            console.log("Text Enterd for elect 5 digits");
            await this.randomClick2.click();
            console.log("Random Click 2");
            
            await utility.wait(3000);
            await this.elecRemoveNextSec.click();            
            //await this.ctmeterdtlGasNxt.click();
            console.log("Next Button clicked 2");
            await utility.wait(3000);
           // await this.meterReading.click();
        }
    }

//CGP added for FLTY20TRAD

public async confirmMeterSupply() {
    await utility.wait(4000);
    if (await this.confirmElecMeterOnsupply.isDisplayed()) {
        await this.confirmElecMeterOnsupply.click();
    }
    await utility.wait(2000);
    if (await this.confirmgasmeterOnsupply.isDisplayed()) {
        await this.confirmgasmeterOnsupply.click();
    }
}
 
public async confirmMeterSupplyTRAD() {
    await utility.wait(4000);
    if (await this.confirmElecMeterOnsupply.isDisplayed()) {
        await this.confirmElecMeterOnsupply.click();
    }
}

public async confirmMeterSupplyGasTRAD() {
    await utility.wait(4000);
    if (await this.confirmgasmeterOnsupply.isDisplayed()) {
        await this.confirmgasmeterOnsupply.click();
    }
}

//CGP added 13/09

public async exchangeAssetGasTRAD()
{
    await utility.wait(3000);
    if (await this.exchangeAssetY.isDisplayed()) {
        await this.exchangeAssetY.click();
    }        
    await utility.wait(3000);
    if (await this.gasMeterRadio.isDisplayed()) {
        await this.gasMeterRadio.click();
    }
    await utility.wait(3000);
    if (await this.regulatorRadio.isDisplayed()) {
        await this.regulatorRadio.click();
    }

}

public async exchangeAssetTRAD()
{
    await utility.wait(3000);
    if (await this.exchangeAssetY.isDisplayed()) {
        await this.exchangeAssetY.click();
    }
    await utility.wait(3000);
    if (await this.elecMeterRadio.isDisplayed()) {
        await this.elecMeterRadio.click();
    }
}

//CGP Added for FLTY20 TRAD flow
public async removeGasMeter() {
    await utility.wait(1000);
    await this.removePPMID.getText().then(function (removePPMIDTxt) {
        console.log("Remove PPMID " + removePPMIDTxt);
    });
}

// CGP added for EX23
public async fill21rmvihdppmidtlsEX23() {
    await utility.wait(2000);
    if (await this.rmvihdppmidstatusofAssetSel.isDisplayed()) {
        var select = await this.rmvihdppmidstatusofAssetSel;
        await select.$('[label = "No Fault Found"]').click();
    }
}


// CGP Added for TRAD20

public async removeElecmeterSec() {
    await utility.wait(1000);
    await this.removeMeter.getText().then(function (RemoveIRemoveElecMeterPanelTxt) {
        console.log("Remove Elec Meter " + RemoveIRemoveElecMeterPanelTxt);
    });
}
   //CGP Elect Asset Removal


   public async fillElecmeterRemoval() {
    await utility.wait(1000);
    if (await this.assetRemovalElec.isDisplayed()) {
        await this.assetRemovalElec.click();
        console.log("Status of elec asset removed yes selected")
    }
    await utility.wait(1000); // Change Later
    if (await this.statusofAssetElec.isDisplayed()) {
        var select1 = this.statusofAssetElec;
        await select1.$('[label = "No Fault Found"]').click();

        console.log("No Fault Found Selected")
    }
    await utility.wait(1000);
    // if (await this.removedmeterReading.isDisplayed()) {
    //     await this.removedmeterReading.clear();
    //     //await this.removedmeterReading.sendKeys('1234');
    // }
}

public async clickonnxtBtnofElecmeterRemovalTRAD() {
    await utility.wait(1000);
    if (await this.elecRemoveNextSec.isDisplayed()) {
        await this.elecRemoveNextSec.click();
    }
}

//CGP ADDED for EX23

public async RmvElecmeterSec() {

    await utility.wait(1000);

    if(this.ElecRemoveMeter.isDisplayed()){}

        console.log("REMOVE ELECTRIC METER");

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

public async clickonnxtBtnofElecmeterRemovalEX23() {

    await utility.wait(1000);

    if (await this.ElecremovalNxtBtn.isDisplayed()) {

        await this.ElecremovalNxtBtn.click();

    }

}

public async sendmsgEMREM() {

    await utility.wait(1000);

    await this.SendElMREMBtnCap.getText().then(function (SendElMREMBtnCapTxt) {

        console.log("Send EMRM" + SendElMREMBtnCapTxt);

    });

}

public async clickOnsendmsgEMREM() {

    await utility.wait(1000);

    if (await this.SendElMREMBtn.isDisplayed()) {

        await this.SendElMREMBtn.click();

    }

}



public async AwaitingResponseEMREMEX23() {

    await utility.wait(80000);

}

public async Elecremovalsuccessfulbtn() {

    await utility.wait(2000);

    await expect(this.RemovalSuccessElec.isDisplayed());

}

public async ElecReqSentSuccess() {

    await utility.wait(1000);

    await expect(this.reqSentSuccessEMREM.isDisplayed());

}

public async ElecOktoRemoveAsset() {

    await utility.wait(1000);

    await expect(this.OKtoremoveAssetElec.isDisplayed());

}

public async clickonElecremovalsuccessfulbtn() {

    await utility.wait(1000);

    if (await this.RemovalSuccessElec.isDisplayed()) {

        await this.RemovalSuccessElec.click();

    }

}

public async confirmElecAssetRem() {

    await utility.wait(1000);

    await this.confirmElecAssetRemoval.getText().then(function (confirmElecAssetRemovalTxt) {

        console.log("Confirm Elec Asset Removal" + confirmElecAssetRemovalTxt);

    });

}

public async fill24ElecAssetRemoval() {

    await utility.wait(1000);

    if (await this.ElecAssetRemoval.isDisplayed()) {

        var select = this.ElecAssetRemoval;

        await select.$('[value="1"]').click();

    }

    await utility.wait(1000);

    if (await this.ElecAssetRemovalY.isDisplayed()) {

        await this.ElecAssetRemovalY.click();

    }

}

public async clickonokElecAssetRemovalEX23() {

    await utility.wait(1000);

    if (await this.ElecAssetRemovalPopup.isDisplayed()) {

        await this.ElecAssetRemovalPopup.click();

    }

}

public async clickonElecsubmitforRemoval() {

    await utility.wait(1000);

    if (await this.ConfirmElecCommsHubNxtBtn.isDisplayed()) {

        await this.ConfirmElecCommsHubNxtBtn.click();

    }

}

// CGP Added Elec Removal

public async fillElecAssetRemoval() {
    await utility.wait(4000);
    if (await this.elecAssetRemoval.isDisplayed()) {
        var select = this.elecAssetRemoval;
        await select.$('[value="1"]').click();
    }
    await utility.wait(4000);
    if (await this.elecAssetRemovalY.isDisplayed()) {
        await this.elecAssetRemovalY.click();
    }
}
public async clickonokElecAssetRemoval() {
    await utility.wait(2000);
    if (await this.GasAssetRemovalPopup.isDisplayed()) {
        await this.GasAssetRemovalPopup.click();
    }
}

public async clickonNextsectionRemove()
{
await utility.wait(2000);
    if (await this.nextSecRem.isDisplayed()) {
        await this.nextSecRem.click();
    }
}

//CGP added 13/09

public async clickonNextsectionRemoveTRAD()
{
    await utility.wait(2000);
        if (await this.nextSecGasBtn.isDisplayed()) {
            await this.nextSecGasBtn.click();
        }
}

// Added for FLTY19 TRAD
public async clickSubmitRemElecSecTRAD()
{
    await utility.wait(2000);
        if (await this.submitElecRemSecEndTRAD.isDisplayed()) {
            await this.submitElecRemSecEndTRAD.click();
        }
}

public async fillCommsHubReqY() {
    await utility.wait(5000);
    if (await this.commshubReqY.isDisplayed()) {
        await this.commshubReqY.click();
    }
}

public async fillCommissioningDetailsTRAD() {
    if (await this.nonserealizedAssetDD.isDisplayed()) {
        await utility.wait(2000);
        var select = this.nonserealizedAssetDD;
        select.$('[value="1"]').click();
    }
    await expect(await this.nonserealizedAssetInput.isPresent());
    await this.nonserealizedAssetInput.sendKeys('1');

    await utility.wait(1000);
        if (await this.msgToDCCY.isDisplayed()) {
            await this.msgToDCCY.click();
        }
        await this.commsHubConnectedYes.click();
		await utility.wait(3000);

		await this.commissioningNxtBtn.click();
		await utility.wait(1000);
}
//CGP added
public async fillCommissioningDetailsEX23() {

    if (await this.nonserealizedAssetDD.isDisplayed()) {
        await utility.wait(3000);
        var select = this.nonserealizedAssetDD;
        select.$('[value="1"]').click();
    }
    await utility.wait(3000);
    await expect(await this.nonserealizedAssetInput.isPresent());
    await this.nonserealizedAssetInput.sendKeys('1');

    await utility.wait(3000);
        if (await this.commsHubConnectedYes.isDisplayed()) {
            await this.commsHubConnectedYes.click();
        }      
        await utility.wait(3000);    
		await this.commissioningNxtBtn.click();
		await utility.wait(1000);
}

// CGP TRAD CHanges

public async fillcurrentIhdPPMIDdtlsTRAD() {
    await utility.wait(2000);
    if (await this.smet2ihdppidText.isDisplayed()) {
        await this.smet2ihdppidN.click();
    }
    await utility.wait(1000);
    try {
        if (await this.IhdPpmidNxt.isPresent()) {
            await this.IhdPpmidNxt.click();
        }
    } catch (error) {
        console.log("Next section is not present at this moment");
    }  
}

public async smet2AssetInstalled()
    {
        await utility.wait(3000);
        if (await this.SMET2AssetInstalledN.isDisplayed()) {
            await this.SMET2AssetInstalledN.click();
        }
    }

    public async equipReposition()
    {
        await utility.wait(2000);
        if (await this.equipmentRepositionRequired.isDisplayed()) {
            var select = await this.equipmentRepositionRequired;
            await select.$('[value="Yes-Customer Agreed"]').click();
        }
    }

    public async smetsOffered()
    { 
        await utility.wait(3000);
        if (await this.SMETSOffered.isDisplayed()) {
            await this.SMETSOffered.click();
        }

    }





}



