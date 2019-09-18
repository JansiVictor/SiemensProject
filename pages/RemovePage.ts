/**
 * @@Author Jansi Victor
 * @Description @Description  Automation for FAULTY18 Workflow
 */
import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder,
	browser
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

export class RemovePageObject {

	public ctihdppmidDtl: ElementFinder;
	public smet2ihdppidText: ElementFinder;
	public smet2ihdppidY: ElementFinder;
	public smet2ihdppidN: ElementFinder;
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
	public smets2assetInstN: ElementFinder;
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
	public unabletoReadGasMeterYES: ElementFinder;
	public carryanyAdditionalWorkNo: ElementFinder;

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
	public captureassetremovalPhoto: ElementFinder;

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
	public finalphotocommshubEvidence: ElementFinder;
	public finalaseetcapturephoto: ElementFinder;

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
	public ElecRemoveMeter: ElementFinder;
	public RemoveElecAssetrplacedorremoved: ElementFinder;
	public statusofElecAssetSelect: ElementFinder;
	public carryoutmeterinstallationN: ElementFinder;

	public reqSentSuccessEMREM: ElementFinder;
	public RemovalSuccessElec: ElementFinder;
	public OKtoremoveAssetElec: ElementFinder;
	public confirmElecAssetRemoval: ElementFinder;
	public ElecAssetRemoval: ElementFinder;
	public ElecAssetRemovalY: ElementFinder;
	public ElecAssetRemovalPopup: ElementFinder;
	public ConfirmElecCommsHubNxtBtn: ElementFinder;
	public currentMeterElecCap: ElementFinder;
	public SendElMREMBtn: ElementFinder;
	public SendElMREMBtnCap: ElementFinder;

	public captureassetPhoto: ElementFinder;
	public removemeterText: ElementFinder;
	public XCHUBBtn: ElementFinder;
	public XCHUBRemovalsuccessfulBtn: ElementFinder;

	public meterReadingduel: ElementFinder;
	public meterReadingduelen: ElementFinder;
	public duelgastightnessOutcomeGT: ElementFinder;

	public commshubconnectedtoAssetN: ElementFinder;
	public carryoutWorkontheMeterY: ElementFinder;
	public capturemeterReadingtext: ElementFinder;
	public capturemeterReadinginput: ElementFinder;
	public unabletoReadYes: ElementFinder;
	public unabletoReadGasYes: ElementFinder;
	public submitRemovebtn: ElementFinder;
	public carryoutWorkYes: ElementFinder;
	public carryoutWorkNo: ElementFinder;
	public confirmelecmeterOnsupply: ElementFinder;
	public carryoutmeterinstallation: ElementFinder;
    public carryoutmeterinstallationY: ElementFinder;
	public electricMeter: ElementFinder;
	public electricMeterY: ElementFinder;
	public assetRepositionY: ElementFinder;
	public assetReposition: ElementFinder;
	public smets2offered: ElementFinder;
	public smets2offeredfalse: ElementFinder;
	public confirmassetRemovaltext: ElementFinder;
	public removedAssetStatustext: ElementFinder;
    public removedAssetStatusOffcircuit: ElementFinder;
	public confirmedAssetRemovalY: ElementFinder;
	public infoOKButton: ElementFinder;
	public assetRemovedreplaced: ElementFinder;
	public assetRemovedreplacedtext: ElementFinder;
	public removeNextbutton: ElementFinder;
	public dummydiv: ElementFinder;
	

	constructor() {
		//#region Panel Click
		this.ctIhdPpmiddtls = element(by.css('.ng-scope:nth-child(1) > .task-section .down'));
		this.ctmeterdtlGasTab = element(by.css('.ng-scope:nth-child(2) > .task-section .down'));
		this.ctCommshubdtlTab = element(by.css('.ng-scope:nth-child(3) > .task-section .down'));
		this.rmvPPMIDTab = element(by.css('.ng-scope:nth-child(6) > .task-section .down'));

		//#endregion

		//#region Current ihd ppmid
		this.ctihdppmidDtl = element(by.id('Title_currentIhdPpmid'));
		this.smet2ihdppidText = element(by.xpath('//*[contains(text(),"SMETS2 IHD / PPMID")]'));
		this.smet2ihdppidY = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_y"]'));
		this.smet2ihdppidN = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_n"]'));
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
		this.meterReading = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register (1):")]'));
		this.capturemeterReadingtext = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register (1):")])[2]'));
		this.capturemeterReadinginput = element(by.xpath('(//input[@id="reg0"])[2]'));
		this.meterReadingLabel = element(by.xpath('//input[@id="reg0"]'));
		this.currentCommsHubTitle = element(by.xpath('//*[@id="Title_currentCommsHub"]'));
		this.currentHubDtlsPgCont = element(by.xpath('//*[contains(text(),"CHF ID")]'));
		//#endregion

		//#region CURRENT COMMS HUB DETAILS
		this.commshubLoc = element(by.xpath('//select[@id="currentCommsHub_locationSelect"]'));
		this.aerialInstalled = element(by.xpath('//*[contains(text(),"Aerial Installed")]'));
		this.aerialInstalledY = element(by.id('currentCommsHub_aerialInstalled_y'));
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
		this.smets2assetInstN = element(by.xpath('//input[@id="smets2Installedfalse"]/following-sibling::span[@class="outer"]'));
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
		this.submitRemovebtn = element(by.xpath('//div/button[text()="SUBMIT"]'));
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
		this.RemoveIHDAsset = element(by.xpath('//*[@id="Title_removeIhdPpmidAsset"]'));
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
		this.captureassetPhoto = element(by.id('removeIhdPpmidAsset_photoButton'));
		this.captureassetremovalPhoto = element(by.id('removeGasAsset_photoButton'));

		//#endregion

		//#region Gas Meter Removal 
		this.GMassettoberemoved = element(by.xpath('//*[@id="removeGasMeter_assetRemovedReplaced_y"]/span[@class="outer"]'));
		this.statusofAssetSelect = element(by.xpath('//select[@id="removeGasMeter_assetStatusSelect"]'));
		this.removedmeterReading = element(by.xpath('//input[@id="input0"]'));
		this.GMremovalNxtBtn = element(by.xpath('//*[@id="removeGasMeter_nextButton"]'));
		this.SendGMRMPanel = element(by.xpath('//div[@id="Title_gmrem"]'));
		this.unabletoReadGasMeterYES = element(by.xpath('//*[@id="removeGasMeter_unableToRead"]/following-sibling::span[@class="outer"]'));
		this.carryanyAdditionalWorkNo = element(by.xpath('//*[@id="gtp12"]/following-sibling::span[@class="outer"]'));

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
		this.finalaseetcapturephoto = element(by.id('btn_CapFin_Pho'));
		//#endregion

		//#region Removal Comms Hub
		this.IstheassettobeRemovedorReplaced = element(by.xpath('//*[@id="chubRemove_assetRemoved_y"]/span[@class="outer"]'));
		this.RemoveCommshubSelect = element(by.xpath('//select[@id="chubRemove_connectionMethodSelect"]'));
		this.StatusofCommsHub = element(by.xpath('//select[@id="chubRemove_statusSelect"]'));
		this.RemoveCommsHubAdditionalNotes = element(by.xpath('//*[@id="chubRemove_additionalNotes"]'));
		this.FaultidentifiedPostInst = element(by.xpath('//*[@id="chubRemove_faultIdentifiedPostInstall"]/following-sibling::span[@class="outer"]'));
		this.RemCommsHubNxtBtn = element(by.xpath('//*[@id="chubRemove_submitButton"]'));
		this.XCHUBBtn = element(by.xpath('//*[@id="xchub_sendMessageButton"]'));
		this.ConfirmCommsHubRemoval = element(by.xpath('//div[@id="Title_removeChubAsset"]'));
		this.carryoutWorkYes = element(by.xpath('(//*[@id="additionalworktrue"]/following-sibling::span[@class="outer"])'));
		this.carryoutWorkNo = element(by.xpath('(//*[@id="additionalworkfalse"]/following-sibling::span[@class="outer"])'));
		//#endregion

		//#region Confirm Comms Hub Removal
		this.ConfirmCommsHubRemovalSelect = element(by.xpath('//select[@id="removeChubAsset_assetStatusSelect"]'));
		this.Confirmcommhubassetremove = element(by.xpath('//*[@id="removeChubAsset_confirmAssetRemoved"]/following-sibling::span[@class="outer"]'));
		this.ConfirmCommsHubRemovalPopup = element(by.xpath('//*[text()="OK"]'));
		this.ConfirmCommsHubNxtBtn = element(by.xpath('(//button[@id="btn1"])'));
		this.finalphotocommshubEvidence = element(by.id('removeChubAsset_photoButton'));
		this.XCHUBRemovalsuccessfulBtn = element(by.id('xchub_nextButton'));
		//#endregion

		//#region Elec fields
		this.existingelecmeterdtls = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]/span[@class="outer"]'));
		this.unabletoReadYes = element(by.xpath('(//*[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"])[2]'));
		this.unabletoReadGasYes = element(by.xpath('(//*[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"])[1]'));
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

		//#endregion

		this.removemeterText = element(by.xpath('//div[text()="Removed Meter Reading(s):"]'));

		//#region Flty20 - Duel meter

		this.meterReadingduel = element(by.xpath('(//input[@id="reg0"])[2]'));
		this.meterReadingduelen = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register (1):")])[2]'));
		this.duelgastightnessOutcomeGT = element(by.id('//*[@id="rb_TestFailOutCmGTIss_y"]/span[@class="outer"]'));

		//#endregion

		//#region Flty Gas Tst12

		this.commshubconnectedtoAssetN = element(by.xpath('//input[@id="exchangeassetfalse"]/following-sibling::span[@class="outer"]'));
		this.carryoutWorkontheMeterY = element(by.xpath('//input[@id="additionalworktrue"]/following-sibling::span[@class="outer"]'));

		//#endregion

		this.confirmassetRemovaltext = element(by.xpath('//div/h4[text()="Confirm Electric Asset Removal"]'));
		this.confirmelecmeterOnsupply = element(by.xpath('//input[@id="confirmelecsupplytrue"]/following-sibling::span[@class="outer"]'));
        this.carryoutmeterinstallationY = element(by.xpath('//input[@id="additionalworktrue"]/following-sibling::span[@class="outer"]'));
        this.carryoutmeterinstallation = element(by.xpath('//*[contains(text(),"Do you need to carry out work on the meter installation?")]'));
        this.electricMeter = element(by.xpath('//*[contains(text(),"Elec Meter?")]'));
        this.electricMeterY = element(by.xpath('//input[@id="elecmexdfa"]/following-sibling::span[@class="cr"]'));
        this.assetRepositionY = element(by.xpath('(//select[@id="repositionSelect"]/option)[2]'));
        this.assetReposition = element(by.xpath('//*[contains(text(),"Equipment Reposition Required?")]'));
        this.smets2offered = element(by.xpath('//*[contains(text(),"SMETS2 Offered?")]'));
        this.smets2offeredfalse = element(by.xpath('//input[@id="smets2offeredfalse"]/following-sibling::span[@class="outer"]'));
        this.removedAssetStatustext = element(by.xpath('//*[contains(text(),"Removed Asset Status")]'));
        this.removedAssetStatusOffcircuit = element(by.xpath('(//select[@id="cbx_RAss_Status"]/option)[2]'));
		this.confirmedAssetRemovalY = element(by.xpath('//*[@id="rb_CAssRem_y"]/span'));
		this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
		this.assetRemovedreplaced =  element(by.xpath('//input[@id="CCHradio5"]/following-sibling::span[@class="outer"]'));
        this.assetRemovedreplacedtext = element(by.xpath('//*[contains(text(),"Is the Asset to be Removed/Replaced?")]'));
		this.removeNextbutton = element(by.id('btn_Next_rmv'));
		this.carryoutmeterinstallationN = element(by.xpath('//input[@id="additionalworkfalse"]/following-sibling::span[@class="outer"]'));
        this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[1]'));
		
        
	}

	public async confirmelectricassetremovalSectiondispaly(){
		if (this.confirmassetRemovaltext.isDisplayed()) {
			await this.confirmassetRemovaltext.getText().then(function (assetRemoval) {
				console.log("find installPPMID Text  " + assetRemoval);
			});
		}
	}

	/***
 * @Author Supriya Harikumar
 * @description Fill Current PPMID section / ppmidComm 
***/
public async fillRemoveMeterSection(){
    if (this.assetRemovedreplacedtext.isDisplayed()) {
        await this.assetRemovedreplaced.click();
    }
    await utility.wait(utility.low);
    if (this.removeNextbutton.isDisplayed()) {
        await this.removeNextbutton.click();
    }
    await utility.wait(utility.low);
}

	/***
 * @Author Supriya Harikumar
 * @description Fill Current PPMID section / ppmidComm 
***/
public async fillElectricAssetRemovalSection(){
    if (this.removedAssetStatustext.isDisplayed()) {
        await this.removedAssetStatusOffcircuit.click();
    }
    await utility.wait(utility.low);
    if (this.confirmedAssetRemovalY.isDisplayed()) {
        await this.confirmedAssetRemovalY.click();
    }
    await utility.wait(utility.low);
    if (this.infoOKButton.isDisplayed()) {
        await this.infoOKButton.click();
    }
    await utility.wait(utility.low);
}

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region CURRENT IHD/PPMID DETAILS

	public async currentihdppmiddetailtext() {
		await utility.wait(utility.very_low);
		await this.ctihdppmidDtl.getText().then(function (ctihdppmidDtlTxt) {
			console.log("Find Current IHD PPMID  " + ctihdppmidDtlTxt);
		});
	}
	
	public async fillcurrentIhdPPMIDdtlsnoExchangeTrade() {
		await utility.wait(2000);
		if (await this.smet2ihdppidN.isDisplayed()) {
			await this.smet2ihdppidN.click();
		}
	}

	public async fillFlty19TRADcommsdtls() {
		await utility.wait(utility.low);
			if (await this.smets2assetInst.isDisplayed()) {
				await this.smets2assetInstN.click();
			}
			
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoAsset.isDisplayed()) {
			await this.commshubconnectedtoAssetY.click();
		}
		await utility.wait(utility.low);
		if (await this.electricMeter.isDisplayed()) {
			await this.electricMeterY.click();
		}
		await utility.wait(utility.low);
		if (await this.assetReposition.isDisplayed()) {
			await this.assetRepositionY.click();
		}
		await utility.wait(utility.low);
		if (await this.smets2offered.isDisplayed()) {
			await this.smets2offeredfalse.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubNextbtn.isDisplayed()) {
			await this.commshubNextbtn.click();
		}
		await utility.wait(utility.low);
	}

	public async fillFlty19commsdtls() {
		await utility.wait(utility.low);
			if (await this.smets2assetInst.isDisplayed()) {
				await this.smets2assetInstY.click();
			}
			await utility.wait(utility.low);
			if (await this.commshubResetting.isDisplayed()) {
				await this.commshubResettingY.click();
			}
			await utility.wait(utility.low);
			if (await this.removecommshub5mins.isDisplayed()) {
				await this.removecommshub5mins.click();
			}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			await this.commshubconnectedtoSupplyY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			await this.commshubconnectedtoWanY.click();
		}
		if (await this.commshubconnectedtoAsset.isDisplayed()) {
			await this.commshubconnectedtoAssetN.click();
		}
		await utility.wait(utility.low);
		if (await this.carryoutmeterinstallation.isDisplayed()) {
			await this.carryoutmeterinstallationY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubNextbtn.isDisplayed()) {
			await this.commshubNextbtn.click();
		}
		await utility.wait(utility.low);
	}
	public async fillcurrentIhdPPMIDdtls() {
		await utility.wait(2000);
		if (await this.smet2ihdppidY.isDisplayed()) {
			await this.smet2ihdppidY.click();
		}
		await utility.wait(utility.low);
		if (await this.ihdppmidsSersk.isDisplayed()) {
			await this.ihdppmidsSersk.clear();
			await this.ihdppmidsSersk.sendKeys("00-0F-01-FF-FF-E4-85-D4");
		}
		await this.dummydiv.click();
		await utility.wait(utility.low);
		if (await this.existingihdPpmidY.isDisplayed()) {
			await this.existingihdPpmidY.click();
		}
		await utility.wait(utility.very_low);
		try {
			if (await this.IhdPpmidNxt.isPresent()) {
				await this.IhdPpmidNxt.click();
			}
		} catch (error) {
			console.log("Next section is not present at this moment");
		}
	}

	public async currentmeterdetlGasSection() {
		await utility.wait(utility.very_low);
		await this.currentmeterdetlGasSec.getText().then(function (currentdtlGasSection) {
			console.log("Find current detail gas section  " + currentdtlGasSection);
		});
	}
	public async currentmeterGasPageContent() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.existgasmeterDtlText.isDisplayed()) {
			await this.existgasmeterDtlY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.meterReading.isDisplayed()) {
			await this.meterReadingLabel.clear();
			await this.meterReadingLabel.sendKeys("12345");
			await utility.wait(utility.very_low);
			await this.meterReading.click();
		}
	}
	//#region CURRENT METER DETAILS - GAS
	public async fillcurrentmeterdtlGas() {
		await utility.wait(utility.very_low);
		if (await this.existgasmeterDtlText.isDisplayed()) {
			await this.existgasmeterDtlY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.meterReading.isDisplayed()) {
			await this.meterReadingLabel.clear();
			await this.meterReadingLabel.sendKeys("12345");
			await utility.wait(utility.very_low);
			await this.unabletoReadGasYes.click();
		}
	}
	public async currentcommsHubdtl() {
		await utility.wait(utility.medium_low);
		browser.sleep(3000);
		await this.currentCommsHubTitle.getText().then(function (currentCommsHubTit) {
			console.log("Find current comms Hub Title  " + currentCommsHubTit);
		});
	}
	public async currentcommsHubdtlPgCont() {
		await utility.wait(utility.medium_low);
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
	public async fillcurrenthubdtl(index: number) {

		if (await this.commshubLoc.isDisplayed()) {
			await utility.wait(4000);
			var select = this.commshubLoc;
			await select.$('[value="A"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.aerialInstalledY.isDisplayed()) {
			await this.aerialInstalledY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.CommshubdtlCorrectText.isDisplayed()) {
			await this.CommshubdtlCorrectY.click();
		}
		await utility.wait(utility.very_low);
	}

	public async capturephotocommsHub() {
		await utility.wait(utility.very_low);
		if (await this.capexistcommshubInstall.isDisplayed()) {
			await this.capexistcommshubInstall.click();
		}
	}
	public async determintfaultActivity() {
		await utility.wait(utility.very_low);
		await this.determinefaultActivityTitle.getText().then(function (determinefaultActivityTit) {
			console.log("Faulty activity  " + determinefaultActivityTit);
		});
		await utility.wait(4000);
	}

	
	public async filleleccommsdtls() {
		await utility.wait(4000);
		if (await this.confirmelecmeterOnsupply.isDisplayed()) {
			await this.confirmelecmeterOnsupply.click();
		}
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
		await utility.wait(utility.very_low);
		if (await this.capturesuspectedTamp.isDisplayed()) {
			await this.capturesuspectedTamp.click();
		}
	}


	public async fill15commsdtls() {
		await utility.wait(utility.low);
		if (await this.smets2assetInst.isDisplayed()) {
			await this.smets2assetInstY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubResetting.isDisplayed()) {
			await this.commshubResettingY.click();
		}
	}

	public async fill15commsdtls_FLTY18TRAD() {
		await utility.wait(utility.low);
		if (await this.smets2assetInst.isDisplayed()) {
			await this.smets2assetInstN.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoAsset.isDisplayed()) {
			await this.commshubconnectedtoAssetN.click();
		}
		await utility.wait(utility.low);
		if (await this.carryoutmeterinstallation.isDisplayed()) {
			await this.carryoutmeterinstallationN.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubNextbtn.isDisplayed()) {
			await this.commshubNextbtn.click();
		}
		await utility.wait(utility.low);
	}
	public async clickOk5mins() {
		await utility.wait(utility.low);
		if (await this.removecommshub5mins.isDisplayed()) {
			await this.removecommshub5mins.click();
		}
	}
	public async fill16commsdtls() {
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
	public async commshubSelect() {
		await utility.wait(4000);
		if (await this.commsHub.isDisplayed()) {
			await this.commsHubY.click();
		}
	}
	public async gasmeterSelect() {
		await utility.wait(utility.low);
		if (await this.gasMeter.isDisplayed()) {
			await this.gasMeterY.click();
		}
	}
	public async regulatorSelect() {
		await utility.wait(utility.low);
		if (await this.Regulator.isDisplayed()) {
			await this.RegulatorY.click();
		}
	}
	public async ihdppmidSelect() {
		await utility.wait(utility.low);
		if (await this.ihdPpmid.isDisplayed()) {
			await this.ihdPpmidY.click();
		}
	}
	public async clickoncommsNextsection() {
		await utility.wait(utility.very_low);
		if (await this.commshubNextbtn.isDisplayed()) {
			await this.commshubNextbtn.click();
		}
	}
	public async preinstgasTighttest() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.preinstGasTightness.isDisplayed()) {
			await this.preinstGasTightnessY.click();
		}
	}

	public async capturepressureMB() {
		await utility.wait(utility.very_low);
		if (await this.capturepressureinMB.isDisplayed()) {
			await this.capturepressureinMB.click();
		}
	}

	public async fill18preInstdtls() {
		await utility.wait(utility.low);
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
		await utility.wait(utility.very_low);
		if (await this.smellGas.isDisplayed()) {
			await this.smellGasY.click();
		}
	}
	public async gastightnessfieldfailed() {
		await utility.wait(utility.very_low);
		if (await this.gastightnesstestCompleted.isDisplayed()) {
			await this.gastightnesstestCompletedFail.isDisplayed();
		}
	}
	public async fill19preInstdtls() {
		await utility.wait(utility.very_low);
		if (await this.gasTightness.isDisplayed()) {
			await this.gasTightnessTextbox.sendKeys("Gas Tested");
		}
		await utility.wait(utility.very_low);
		if (await this.gastightnessOutcome.isDisplayed()) {
			await this.gastightnessOutcomeGT.click();
		}
		await utility.wait(utility.very_low);
		if (await this.reportedinctoGT.isDisplayed()) {
			await this.reportedinctoGTY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.jobRef.isDisplayed()) {
			await this.jobRef.clear();
			await this.jobRef.sendKeys("1");
		}
		await utility.wait(utility.very_low);
		if (await this.reportedinctoHS.isDisplayed()) {
			await this.reportedinctoHSY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.airRef.isDisplayed()) {
			await this.airRef.clear();
			await this.airRef.sendKeys("2");
		}
		await utility.wait(utility.very_low);
		if (await this.gtattendanceY.isDisplayed()) {
			await this.gtattendanceY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.gtresolveY.isDisplayed()) {
			await this.gtresolveY.click();
		}
		await utility.wait(utility.very_low);
		if (await this.btnnext.isDisplayed()) {
			await this.btnnext.click();
		}
	}
	public async removeihdPpmid() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.AssettobeRemoved.isDisplayed()) {
			await this.AssettobeRemoved.click();
		}
	}
	public async ihdpowerOnOK() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.rmvihdppmidNxtBtn.isDisplayed()) {
			await this.rmvihdppmidNxtBtn.click();
		}
	}
	public async sendmsgihdppmid() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		await expect(this.ppmidremoval.isDisplayed());
	}
	public async sentmesgSuccess() {
		await utility.wait(utility.very_low);
		await expect(this.reqSentSuccess.isDisplayed());
	}
	public async assetUnjoinedText() {
		await utility.wait(utility.very_low);
		await expect(this.AssetUnJoined.isDisplayed());
	}
	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region PPMID Removal Successful

	public async PPMIDRemovalbtndisplayed() {
		await utility.wait(utility.very_low);
		await expect(this.ppmidremovalSuccess.isDisplayed());
	}
	public async clickonPPMIDRmvl() {
		await utility.wait(utility.very_low);
		if (await this.ppmidremovalSuccess.isDisplayed()) {
			await this.ppmidremovalSuccess.click();
		}
	}
	public async confirmAssetRmvl() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.AssetRemovalSelect.isDisplayed()) {
			var select = this.AssetRemovalSelect;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.confirmAssetrmvYES.isDisplayed()) {
			await this.confirmAssetrmvYES.click();
		}
	}
	public async clickonOKBtn() {
		await utility.wait(utility.very_low);
		if (await this.AssetPopup.isDisplayed()) {
			await this.AssetPopup.click();
		}
	}
	public async RmvGasmeterSec() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.low);
		if (await this.GMassettoberemoved.isDisplayed()) {
			await this.GMassettoberemoved.click();
		}
		await utility.wait(utility.low);
		if (await this.statusofAssetSelect.isDisplayed()) {
			var select = this.statusofAssetSelect;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.removedmeterReading.isDisplayed()) {
			await this.removedmeterReading.clear();
			await this.removedmeterReading.sendKeys('12345');
			await this.removemeterText.click();
		}
	}

	//#region Gas Meter Removal for Remove Gas

	public async GasmeterRemovalforRemoveGas() {
		await utility.wait(utility.low);
		if (await this.GMassettoberemoved.isDisplayed()) {
			await this.GMassettoberemoved.click();
		}
		await utility.wait(utility.low);
		if (await this.statusofAssetSelect.isDisplayed()) {
			var select = this.statusofAssetSelect;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.removedmeterReading.isDisplayed()) {
			await this.removedmeterReading.clear();
			await this.removedmeterReading.sendKeys('12345');
			//await this.removemeterText.click();
		}
		await utility.wait(utility.very_low);
		if (await this.unabletoReadGasMeterYES.isDisplayed()) {
			await this.unabletoReadGasMeterYES.click();
		}
		await utility.wait(utility.very_low);
		if (await this.carryanyAdditionalWorkNo.isDisplayed()) {
			await this.carryanyAdditionalWorkNo.click();
		}

	}
	public async clickonnxtBtnofgasmeterRemoval() {
		await utility.wait(utility.very_low);
		if (await this.GMremovalNxtBtn.isDisplayed()) {
			await this.GMremovalNxtBtn.click();
		}
	}
	public async sendmsgGMREM() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		await expect(this.reqSentSuccessGMREM.isDisplayed());
	}
	public async OktoRemoveAsset() {
		await utility.wait(utility.very_low);
		await expect(this.OKtoremoveAsset.isDisplayed());
	}

	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region Removal Successful 

	public async clickonremovalsuccessfulbtn() {
		await utility.wait(utility.very_low);
		if (await this.RemovalSuccess.isDisplayed()) {
			await this.RemovalSuccess.click();
		}
	}
	public async confirmGasAssetRemoval() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.gasAssetRemoval.isDisplayed()) {
			var select = this.gasAssetRemoval;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.GasAssetRemovalY.isDisplayed()) {
			await this.GasAssetRemovalY.click();
		}
	}
	public async clickonokGasAssetRemovalCapture() {
		await utility.wait(utility.very_low);
		if (await this.captureassetremovalPhoto.isDisplayed()) {
			await this.captureassetremovalPhoto.click();
		}
	}

	public async clickonokGasAssetRemoval() {
		await utility.wait(utility.very_low);
		if (await this.GasAssetRemovalPopup.isDisplayed()) {
			await this.GasAssetRemovalPopup.click();
		}
	}
	public async RemoveCommsHubWindow() {
		await utility.wait(utility.very_low);
		await this.RemoveCommsHub.getText().then(function (RemoveCommsHubTxt) {
			console.log("Remove Comms Hub" + RemoveCommsHubTxt);
		});
	}

	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region REMOVE COMMS HUB 

	public async fill27RmvCommsHub() {
		await utility.wait(utility.very_low);
		if (await this.IstheassettobeRemovedorReplaced.isDisplayed()) {
			await this.IstheassettobeRemovedorReplaced.click();
		}
		if (await this.RemoveCommshubSelect.isDisplayed()) {
			var select = this.RemoveCommshubSelect;
			await select.$('[value="2"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.StatusofCommsHub.isDisplayed()) {
			var select = this.StatusofCommsHub;
			await select.$('[value="2"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.RemoveCommsHubAdditionalNotes.isDisplayed()) {
			await this.RemoveCommsHubAdditionalNotes.clear();
			await this.RemoveCommsHubAdditionalNotes.sendKeys("Remove COMMS HUB remarks");
		}
		await utility.wait(utility.very_low);
		if (await this.FaultidentifiedPostInst.isDisplayed()) {
			await this.FaultidentifiedPostInst.click();
		}
	}
	public async clickonNxtBtnRmvCommsHub() {
		await utility.wait(utility.very_low);
		if (await this.RemCommsHubNxtBtn.isDisplayed()) {
			await this.RemCommsHubNxtBtn.click();
		}
	}
	public async XCHUBSubmit() {
		await utility.wait(utility.very_low);
		if (await this.XCHUBBtn.isDisplayed()) {
			await this.XCHUBBtn.click();
			await utility.wait(60000);
		}
	}

	public async ConfirmHubRmv() {
		await utility.wait(utility.very_low);
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
		await utility.wait(utility.very_low);
		if (await this.ConfirmCommsHubRemovalSelect.isDisplayed()) {
			var select = this.ConfirmCommsHubRemovalSelect;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.Confirmcommhubassetremove.isDisplayed()) {
			await this.Confirmcommhubassetremove.click();
		}
	}
	public async clickonokconfrimremovalpopup() {
		await utility.wait(utility.very_low);
		if (await this.ConfirmCommsHubRemovalPopup.isDisplayed()) {
			await this.ConfirmCommsHubRemovalPopup.click();
		}
		await utility.wait(utility.very_low);
		if (await this.finalphotocommshubEvidence.isDisplayed()) {
			await this.finalphotocommshubEvidence.click();
		}
	}

	public async clickonokcaptureFinalPhotoEvidence() {
		await utility.wait(utility.very_low);
		if (await this.finalaseetcapturephoto.isDisplayed()) {
			await this.finalaseetcapturephoto.click();
		}
	}

	public async clickonokcaptureAssetFinalPhotoEvidence() {
		await utility.wait(utility.very_low);
		if (await this.captureassetPhoto.isDisplayed()) {
			await this.captureassetPhoto.click();
		}
	}


	public async clickonsubmitforRemoval() {
		await utility.wait(utility.very_low);
		if (await this.ConfirmCommsHubNxtBtn.isDisplayed()) {
			await this.ConfirmCommsHubNxtBtn.click();
		}
	}


	//#endregion

	//***************************************************************************************** *//
	/*@Author Jansi Victor
	/*@Description: UAT Testing 
	/*ELectric Section Addition
	//***************************************************************************************** */

	//#region Current Meter Details
	public async CurrentMeterElec() {
		await utility.wait(utility.very_low);
		await this.currentMeterElecCap.getText().then(function (currentMeterElecCapTxt) {
			console.log("Current Meter" + currentMeterElecCapTxt);
		});
	}


	public async fillcurrentElecmeter() {
		await utility.wait(utility.very_low);
		if (await this.existingelecmeterdtls.isDisplayed()) {
			await this.existingelecmeterdtls.click();
		}
		await utility.wait(utility.very_low);
		if (await this.meterReadingElec.isDisplayed()) {
			await this.meterReadingLabel.clear();
			await this.meterReadingLabel.sendKeys("12345");

			await this.meterReadingElec.click();
		}
	}

	public async fillcurrentmeter() {
		await utility.wait(utility.very_low);
		if (await this.existingelecmeterdtls.isDisplayed()) {
			await this.existingelecmeterdtls.click();
		}
		await utility.wait(utility.very_low);
		if (await this.capturemeterReadingtext.isDisplayed()) {
			await this.capturemeterReadinginput.clear();
			await this.capturemeterReadinginput.sendKeys("12345");

			await this.unabletoReadYes.click();
		}
	}


	//#endregion


	public async FillFaultActivityTradNoExcahnge() {
		if (await this.confirmElecmeterOnsupply.isDisplayed()) {
			await this.confirmElecmeterOnsupply.click();
		}

		if (await this.capturesuspectedTamp.isDisplayed()) {
			await this.capturesuspectedTamp.click();
		}

		await utility.wait(utility.low);
		if (await this.smets2assetInst.isDisplayed()) {
			await this.smets2assetInstN.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoAssetN.isDisplayed()) {
			await this.commshubconnectedtoAssetN.click();
		}
		if (await this.carryoutWorkNo.isDisplayed()) {
			await this.carryoutWorkNo.click();
		}

		if (await this.commshubNextbtn.isDisplayed()) {
			await this.commshubNextbtn.click();
		}
	}

	//#region Determine faulty for Elec
	public async FillFaultActivityNoExcahnge() {
		if (await this.confirmElecmeterOnsupply.isDisplayed()) {
			await this.confirmElecmeterOnsupply.click();
		}
		await utility.wait(4000);
		if (await this.confirmgasmeterOnsupply.isDisplayed()) {
			await this.confirmgasmeterOnsupply.click();
		}

		if (await this.capturesuspectedTamp.isDisplayed()) {
			await this.capturesuspectedTamp.click();
		}

		await utility.wait(utility.low);
		if (await this.smets2assetInst.isDisplayed()) {
			await this.smets2assetInstY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubResetting.isDisplayed()) {
			await this.commshubResettingY.click();
		}
		await utility.wait(utility.low);
		if (await this.removecommshub5mins.isDisplayed()) {
			await this.removecommshub5mins.click();
		}

		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			await this.commshubconnectedtoSupplyY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			await this.commshubconnectedtoWanY.click();
		}

		await utility.wait(utility.low);
		if (await this.commshubconnectedtoAssetN.isDisplayed()) {
			await this.commshubconnectedtoAssetN.click();
		}

		if (await this.carryoutWorkYes.isDisplayed()) {
			await this.carryoutWorkYes.click();
		}

		if (await this.commshubNextbtn.isDisplayed()) {
			await this.commshubNextbtn.click();
		}
	}


	public async fillelecfaultysection() {
		await utility.wait(4000);
		if (await this.confirmElecmeterOnsupply.isDisplayed()) {
			await this.confirmElecmeterOnsupply.click();
		}
	}
	public async ElecmeterSelect() {
		await utility.wait(utility.low);
		if (await this.elecMeter.isDisplayed()) {
			await this.elecMeterY.click();
		}
	}
	public async RmvElecmeterSec() {
		await utility.wait(utility.very_low);
		if (this.ElecRemoveMeter.isDisplayed()) {}
		console.log("REMOVE ELECTRIC METER");
	}
	public async fillElecmeterrem() {
		await utility.wait(utility.low);
		if (await this.RemoveElecAssetrplacedorremoved.isDisplayed()) {
			await this.RemoveElecAssetrplacedorremoved.click();
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
			await this.removemeterText.click();
		}
	}
	public async clickonnxtBtnofElecmeterRemoval() {
		await utility.wait(utility.very_low);
		if (await this.ElecremovalNxtBtn.isDisplayed()) {
			await this.ElecremovalNxtBtn.click();
		}
	}

	public async sendmsgEMREM() {
		await utility.wait(utility.very_low);
		await this.SendElMREMBtnCap.getText().then(function (SendElMREMBtnCapTxt) {
			console.log("Send EMRM" + SendElMREMBtnCapTxt);
		});
	}
	public async clickOnsendmsgEMREM() {
		await utility.wait(utility.very_low);
		if (await this.SendElMREMBtn.isDisplayed()) {
			await this.SendElMREMBtn.click();
		}
	}

	public async AwaitingResponseEMREM() {
		await utility.wait(60000);
	}
	public async Elecremovalsuccessfulbtn() {
		await utility.wait(2000);
		await expect(this.RemovalSuccessElec.isDisplayed());
	}
	public async ElecReqSentSuccess() {
		await utility.wait(utility.very_low);
		await expect(this.reqSentSuccessEMREM.isDisplayed());
	}
	public async ElecOktoRemoveAsset() {
		await utility.wait(utility.very_low);
		await expect(this.OKtoremoveAssetElec.isDisplayed());
	}
	public async clickonElecremovalsuccessfulbtn() {
		await utility.wait(utility.very_low);
		if (await this.RemovalSuccessElec.isDisplayed()) {
			await this.RemovalSuccessElec.click();
		}
	}
	public async confirmElecAssetRem() {
		await utility.wait(utility.very_low);
		await this.confirmElecAssetRemoval.getText().then(function (confirmElecAssetRemovalTxt) {
			console.log("Confirm Elec Asset Removal" + confirmElecAssetRemovalTxt);
		});
	}
	public async fill24ElecAssetRemoval() {
		await utility.wait(utility.very_low);
		if (await this.ElecAssetRemoval.isDisplayed()) {
			var select = this.ElecAssetRemoval;
			await select.$('[value="1"]').click();
		}
		await utility.wait(utility.very_low);
		if (await this.ElecAssetRemovalY.isDisplayed()) {
			await this.ElecAssetRemovalY.click();
		}
	}
	public async clickonokElecAssetRemoval() {
		await utility.wait(utility.very_low);
		if (await this.ElecAssetRemovalPopup.isDisplayed()) {
			await this.ElecAssetRemovalPopup.click();
		}
	}
	public async clickonElecsubmitforRemoval() {
		await utility.wait(utility.very_low);
		if (await this.ConfirmElecCommsHubNxtBtn.isDisplayed()) {
			await this.ConfirmElecCommsHubNxtBtn.click();
			await utility.wait(40000);
		}
	}


	//FLTY20 - Electric duel Meter

	public async fillcurrentElecduelmeter() {
		await utility.wait(utility.very_low);
		if (await this.existingelecmeterdtls.isDisplayed()) {
			await this.existingelecmeterdtls.click();
		}
		await utility.wait(utility.very_low);
		if (await this.meterReadingduel.isDisplayed()) {
			await this.meterReadingduel.clear();
			await this.meterReadingduel.sendKeys("12345");

			await this.meterReadingduelen.click();
		}
	}


	//TST12_FLTY GAS
	public async Tst12fill16commsdtls() {
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			await this.commshubconnectedtoSupplyY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			await this.commshubconnectedtoWanY.click();
		}
		await utility.wait(utility.low);
		if (await this.commshubconnectedtoAssetN.isDisplayed()) {
			await this.commshubconnectedtoAssetN.click();
		}
		await utility.wait(utility.low);
		if (await this.carryoutWorkontheMeterY.isDisplayed()) {
			await this.carryoutWorkontheMeterY.click();
		}
	}
	//Submit to continue with Install
	public async NexttoInstall() {
		await utility.wait(utility.very_low);
		if (await this.ConfirmCommsHubNxtBtn.isDisplayed()) {
			await this.ConfirmCommsHubNxtBtn.click();
		}
	}

}