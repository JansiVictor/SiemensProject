/**
 * @@Author Jansi Victor
 * @Description @Description  Automation for FAULTY18 Workflow
 */
import {
	element,
	by,
	ElementFinder,
	ElementArrayFinder,
	browser,
	ExpectedConditions
} from "protractor";
const chai = require("chai");
const expect = chai.expect;
import {
	Utility
} from "../support/utility";
import { GenericPageObject } from "./GenericPage";
const utility: Utility = new Utility();
const Gen: GenericPageObject = new GenericPageObject();

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

	public currentEleccap: ElementFinder;

	public smets2Declined: ElementFinder;
	public Equipmentreposel: ElementFinder;
	public Equipmentreposition: ElementFinder;
	public RemoveElecAssetrplacedorremoved1: ElementFinder;

	public btnnext1: ElementFinder;
	public Tst22removedmeterReading: ElementFinder;
	public Tst22removemeterText: ElementFinder;
	public Tst22RemoveMeterEnNxt: ElementFinder;
	public Tst22RemoveNxtEnable: ElementFinder;

	public Tst28IhdAssetPhotEvidence: ElementFinder;
	public Tst28carryadditlwork: ElementFinder;
	public Tst28cappedgascooker: ElementFinder;
	public Tst28GasAssetPhotEvidence: ElementFinder;
	public confirmElecEvidence: ElementFinder;
	public commshubevidence: ElementFinder;

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
	public removePPMIDOK: ElementFinder;

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
	public captureCurrentMeterText: ElementFinder;
	public meterReadingLabel1: ElementFinder;
	public meterReadingLabel2: ElementFinder;
	public meterReadingLabelTRAD: ElementFinder;
	public meterReading1: ElementFinder;
	public meterReading2: ElementFinder;
	public meterReadingTRAD: ElementFinder;
	public randomClick1: ElementFinder;
	public SMET2AssetInstalledN: ElementFinder;
	public exchangeAssetY: ElementFinder;
	public gasMeterRadio: ElementFinder;
	public regulatorRadio: ElementFinder
	public equipmentRepositionRequired: ElementFinder;
	public SMETSOffered: ElementFinder;
	public nextSecGasBtn: ElementFinder;
	public submitElecRemSecEndTRAD: ElementFinder;
	public dummydiv: ElementFinder;
	public remvSuccessful: ElementFinder;
	public remvSuccessfulFInal: ElementFinder;
	public remvSuccessfulERemove: ElementFinder;


	//CGP added
	public currentMeterDetTRAD: ElementFinder

	public randomClick2: ElementFinder;
	public randomClickEX23: ElementFinder;
	public randomClickTRAD: ElementFinder;
	public currentMetDet: ElementFinder;
	public nonserealizedAssetDD: ElementFinder;
	public nonserealizedAssetInput: ElementFinder;

	public removeMeter: ElementFinder;
	public assetRemovalElec: ElementFinder;
	public elecRemoveNextSec: ElementFinder;

	public elecAssetRemoval: ElementFinder;
	public elecAssetRemovalY: ElementFinder;
	public elecAssetRemovalPopup: ElementFinder;
	public statusofAssetElec: ElementFinder;
	public nextSecRem: ElementFinder;
	public commshubReqY: ElementFinder;
	public msgToDCCY: ElementFinder;
	public commsHubConnectedYes: ElementFinder;
	public commissioningNxtBtn: ElementFinder;

	public existelecmeterDtlY: ElementFinder;
	public confirmElecMeterOnsupply: ElementFinder;

	public elecMeterRadio: ElementFinder;
	private unableToReadMeterTrueRadioBtn: ElementFinder;
	private unabeToReadMeterTrueRadioBtn2: ElementFinder;
	private meterReadingElectricTextfield: ElementFinder;
	private areSMETS2AssetInstalledFalseRadioOption: ElementFinder;
	private smet2IHDPPIdFalse: ElementFinder;
	private doYouNeedToExchangeAnAssetFalseRadioOption: ElementFinder;
	private doYouNeedToCarryOutWorkOnTheMeterInstallationTrueRadioOption: ElementFinder;
	private captureMeterReadingText: ElementFinder;
	private confirmgasmeterOnsupply1: ElementFinder;
	private confirmgasmeterOnsupply2: ElementFinder;
	private determineFaultActivityNextBtn: ElementFinder;
	private capturePhotoOfUGaugeAttachedToGasMeterBtn: ElementFinder;
	private preInstallationGasTightnessTestSubmitBtn: ElementFinder;
	public ConfirmCommsHubNxtBtnRmv: ElementFinder;
	public ConfirmElecCommsHubSubmit: ElementFinder;
	public currentmeterreadingunabletoread: ElementFinder;

	constructor() {

		//Master updates
		this.randomClick2 = element(by.xpath('(//div[@class="checkLabel"])[2]'));
		this.randomClickTRAD = element(by.xpath('//div[@class="checkLabel"]'));
		this.currentMetDet = element(by.xpath('//*[@id="Title_CurrMe_Det"]'));
		this.nonserealizedAssetDD = element(by.xpath('//*[@id="Cselect4"]'));
		this.nonserealizedAssetInput = element(by.xpath('//*[@id="Cbar3"]'));
		//Master updates
		this.unableToReadMeterTrueRadioBtn = element(by.xpath("//div[contains(@class,'radioInput ng-scope')]/div[2]"));
		this.unabeToReadMeterTrueRadioBtn2 = element(by.xpath("//reading[@name='currentmeter']//label[text()='YES']"));
		this.meterReadingElectricTextfield = element(by.xpath("//reading[@name='currentmeter']//input[@id='reg0']"));
		this.areSMETS2AssetInstalledFalseRadioOption = element(by.xpath("//radiobutton[@id='smets2Installed']//label[text()='NO']"));
		this.smet2IHDPPIdFalse = element(by.xpath("//label[@id='currentIhdPpmid_assetOnSite_n']"));
		this.doYouNeedToExchangeAnAssetFalseRadioOption = element(by.xpath("//radiobutton[@id='exchangeasset']//label[text()='NO']"));
		this.doYouNeedToCarryOutWorkOnTheMeterInstallationTrueRadioOption = element(by.xpath("//radiobutton[@id='additionalwork']//label[text()='YES']"));
		this.captureMeterReadingText = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register")]'));
		this.confirmgasmeterOnsupply1 = element(by.xpath("//radiobutton[@id='confirmelecsupply']//label[text()='On Supply']"));
		this.confirmgasmeterOnsupply2 = element(by.xpath("//radiobutton[@id='confirmgassupply']//label[text()='On Supply']"));
		this.determineFaultActivityNextBtn = element(by.xpath("//button[@id='btnNextComm']"));
		this.capturePhotoOfUGaugeAttachedToGasMeterBtn = element(by.xpath("//button[contains(text(),'CAPTURE PHOTO OF U-GAUGE ATTACHED TO GAS METER, SH')]"));
		this.preInstallationGasTightnessTestSubmitBtn = element(by.xpath("//button[contains(text(),'SUBMIT')]"));

		this.remvSuccessfulERemove = element(by.xpath('(//div/button[contains(text(),"Removal Successful")])[3]'));
		this.remvSuccessfulFInal = element(by.xpath('(//div/button[contains(text(),"Removal Successful")])[3]'));
		this.remvSuccessful = element(by.xpath('//*[@id="xchub_nextButton"]'));
		this.submitElecRemSecEndTRAD = element(by.xpath('//button[@id="btn1"]'));
		this.nextSecGasBtn = element(by.xpath('//*[@id="removeGasAsset_nextButton"]'));
		this.equipmentRepositionRequired = element(by.xpath('//*[@id="repositionSelect"]'));
		this.SMETSOffered = element(by.xpath('//input[@id="smets2offeredtrue"]/following-sibling::span[@class="outer"]'));
		this.gasMeterRadio = element(by.xpath('//input[@id="gasmexdfa"]/following-sibling::span[@class="cr"]'));
		this.regulatorRadio = element(by.xpath('//input[@id="regexdfa"]/following-sibling::span[@class="cr"]'));
		this.exchangeAssetY = element(by.xpath('//input[@id="exchangeassettrue"]/following-sibling::span[@class="outer"]'));
		this.meterReading1 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register")])[1]'));
		this.meterReading2 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register")])[2]'));
		this.meterReadingTRAD = element(by.xpath('//*[contains(text(),"Capture Meter Reading - Register")]'));
		this.meterReadingLabel1 = element(by.xpath('(//input[@id="reg0"])[1]'));
		this.meterReadingLabel2 = element(by.xpath('(//input[@id="reg0"])[2]'));
		this.randomClick1 = element(by.xpath('(//div[@class = "checkLabel"])[1]'));
		this.SMET2AssetInstalledN = element(by.xpath('//input[@id="smets2Installedfalse"]/following-sibling::span[@class="outer"]'));

		//#region Panel Click
		this.ctIhdPpmiddtls = element(by.css('.ng-scope:nth-child(1) > .task-section .down'));
		this.ctmeterdtlGasTab = element(by.css('.ng-scope:nth-child(2) > .task-section .down'));
		this.ctCommshubdtlTab = element(by.css('.ng-scope:nth-child(3) > .task-section .down'));
		this.rmvPPMIDTab = element(by.css('.ng-scope:nth-child(6) > .task-section .down'));
		this.captureCurrentMeterText = element(by.xpath('//div[@class="sectionTitle assessHeader alignCenter orange"]'));

		//#endregion

		//#region Current ihd ppmid
		this.ctihdppmidDtl = element(by.xpath('//*[@id="Title_currentIhdPpmid"]'));
		this.smet2ihdppidText = element(by.xpath('//*[contains(text(),"SMETS2 IHD / PPMID")]'));
		this.smet2ihdppidY = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_y"]'));
		this.smet2ihdppidN = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_n"]'));
		this.ihdppmidsSerText = element(by.xpath('//div[contains(text(),"IHD / PPMID Serial")]'));
		this.ihdppmidsSersk = element(by.xpath('//input[@id="currentIhdPpmid_ihdPpmidSerial"]'));
		this.existingihdPpmidText = element(by.xpath('//*[contains(text(),"Existing IHD / PPMID")]'));
		this.existingihdPpmidY = element(by.xpath('//*[@id="currentIhdPpmid_existingAssetDetailsCorrect_y"]'));
		this.IhdPpmidNxt = element(by.xpath('//*[@id="currentIhdPpmid_nextButton"]'));
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
		this.aerialInstalledY = element(by.xpath('//*[@id="currentCommsHub_aerialInstalled_y"]'));
		this.CommshubdtlCorrectText = element(by.xpath('//*[contains(text(),"Existing Comms Hub Details Correct?")]'));
		this.CommshubdtlCorrectY = element(by.xpath('//*[@id="currentCommsHub_existingDetailsCorrect_y"]'));
		this.capexistcommshubInstall = element(by.xpath('//*[@id="currentCommsHub_existingPhotoButton"]'));
		this.determinefaultActivityTitle = element(by.xpath('//*[contains(text(),"Determine Fault Activity")]'));
		//#endregion

		/*****Resolved Conflicts */
		//#region Tst13 -Flty 20

		this.smet2ihdppidN = element(by.xpath('//*[@id="currentIhdPpmid_assetOnSite_n"]/span[@class="outer"]'));
		this.currentEleccap = element(by.xpath('//div[@id="Title_currentMeterDetails"]'));
		this.smets2assetInstN = element(by.xpath('//input[@id="smets2Installedfalse"]/following-sibling::span[@class="outer"]'));

		this.Equipmentreposel = element(by.xpath('//select[@id="repositionSelect"]'));
		this.Equipmentreposition = element(by.xpath('(//select[@id="repositionSelect"])'));
		this.smets2Declined = element(by.xpath('//input[@id="smets2offeredfalse"]/following-sibling::span[@class="outer"]'));

		this.RemoveElecAssetrplacedorremoved1 = element(by.xpath('(//*[@id="CCHradio5"])/following-sibling::span[@class="outer"]'));
		//#endregion

		//#region Determine Faulty Activity
		this.confirmgasmeterText = element(by.xpath('//*[contains(text(),"Confirm if Gas meter is On Supply or Off Supply")]'));
		this.confirmgasmeterOnsupply = element(by.xpath('//input[@id="confirmgassupplytrue"]/following-sibling::span[@class="outer"]'));
		this.capturesuspectedTamp = element(by.xpath('//*[@id="determinefaultyassets_tamperingPhotoButton"]'));
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
		this.commshubNextbtn = element(by.xpath('//*[@id="btnNextComm"]'));
		this.submitRemovebtn = element(by.xpath('//div/button[text()="SUBMIT"]'));
		this.preInstgastightnessTest = element(by.xpath('//div/h4[text()="Pre Installation Gas Tightness Test"]'));
		this.preinstGasTightness = element(by.xpath('//*[contains(text(),"Pre Installation - Gas Tightness Test carried Out?")]'));
		this.preinstGasTightnessY = element(by.xpath('//*[@id="rb_PreGasTigTCarOut_y"]/span[@class="outer"]'));
		//#endregion

		//#region Pre installation gas tightnes
		this.capturepressureinMB = element(by.xpath('(//*[@id="btn1"])[1]'));
		this.wasthereadropinPressure = element(by.xpath('//*[contains(text(),"Was there a drop in pressure?")]'));
		this.wasthereadropinPressureY = element(by.xpath('//*[@id="rb_WasDropPress_y"]'));
		this.enterdipGasPressure = element(by.xpath('//*[contains(text(),"Enter DIP Gas Pressure (mbars)")]'));
		this.enterdipGasPressureSelect = element(by.xpath('//*[@id="cbx_DipPress_sel"]'));
		this.selectmeterType = element(by.xpath('//*[contains(text(),"Select Meter Type")]'));
		this.selectmeterTypeSelect = element(by.xpath('//*[@id="cbx_MetreType_sel"]'));
		this.smellGas = element(by.xpath('//*[contains(text(),"Can you or Customer Smell Gas")]'));
		this.smellGasY = element(by.xpath('//*[@id="rb_SmellGas_y"]'));
		this.gasTightness = element(by.xpath('//*[contains(text(),"Additional Notes / Remarks - Gas Tightness Test Fail")]'));
		this.gasTightnessTextbox = element(by.xpath('//*[@id="txt_AddNotGasTigT"]'));
		this.gastightnessOutcome = element(by.xpath('//*[contains(text(),"Gas Tightness Test Failure-Outcome?")]'));
		this.gastightnessOutcomeGT = element(by.xpath('//*[@id="rb_TestFailOutCmGTIss_y"]'));
		this.reportedinctoGT = element(by.xpath('//*[contains(text(),"Reported Incident to GT?")]'));
		this.reportedinctoGTY = element(by.xpath('//*[@id="rb_RepGT_y"]/span[@class="outer"]'));
		this.jobRef = element(by.xpath('//*[@id="gt_issue"]'));
		this.reportedinctoHS = element(by.xpath('//*[contains(text(),"Reported Incident to H&S(AIRline?)?")]'));
		this.reportedinctoHSY = element(by.xpath('//*[@id="rb_RepAirLine_y"]/span[@class="outer"]'));
		this.airRef = element(by.xpath('//*[@id="hsjobref"]'));
		this.gtattendanceY = element(by.xpath('//*[@id="rb_GTAttSite_y"]/span[@class="outer"]'));
		this.gtresolveY = element(by.xpath('//*[@id="rb_GTResIss_y"]/span[@class="outer"]'));
		this.gastightnesstestCompleted = element(by.xpath('//*[contains(text(),"Gas Tightness Test Completed?")]'));
		this.gastightnesstestCompletedFail = element(by.xpath('//*[contains(text(),"FAIL")]'));
		this.capctmeterReadingPanel = element(by.xpath('(//*[contains(text(),"Capture Current Meter Reading")])[1]'));
		this.btnnext = element(by.xpath('(//*[@id="btnNextComm"])[2]'));
		this.ctmeterdtlGasNxt = element(by.xpath('//*[@id="btn_Next_read"]'));
		//#endregion

		//#region Remove Ihd-ppmid */

		this.removePPMID = element(by.xpath('//*[@id="Title_removeIhdPpmid"]'));
		this.rmvPPMIDPanel = element(by.xpath('//div/h4[text()="Remove PPMID"]'));
		this.AssettobeRemoved = element(by.xpath('//*[@id="removeIhdPpmid_assetRemoved_y"]/span[@class="outer"]'));
		this.rmvihdppmidpopupOK = element(by.xpath('//button[text()="OK"]'));
		this.rmvihdppmidstatusofAssetSel = element(by.xpath('//select[@id="removeIhdPpmid_assetStatusSelect"]'));
		this.rmvihdppmidNxtBtn = element(by.xpath('//*[@id="removeIhdPpmid_nextButton"]'));
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
		this.captureassetPhoto = element(by.xpath('//*[@id="removeIhdPpmidAsset_photoButton"]'));
		this.captureassetremovalPhoto = element(by.xpath('//*[@id="removeGasAsset_photoButton"]'));
		this.removePPMIDOK = element(by.xpath('//div/button[@class="confirm"]'));
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
		this.finalaseetcapturephoto = element(by.xpath('//*[@id="btn_CapFin_Pho"]'));
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
		this.ConfirmCommsHubNxtBtnRmv = element(by.xpath('(//button[@id="btn1"])'));
		//****Resolved Conflicts */
		this.ConfirmCommsHubNxtBtn = element(by.xpath('(//button[@id="btn1"])[2]'));
		this.finalphotocommshubEvidence = element(by.xpath('//*[@id="removeChubAsset_photoButton"]'));
		this.XCHUBRemovalsuccessfulBtn = element(by.xpath('//*[@id="xchub_nextButton"]'));
		//#endregion



		//CGP TRAD changes Master Branch Update 22/09
		this.smet2ihdppidN = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_n"]'));
		this.existelecmeterDtlY = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]'));
		this.meterReadingLabelTRAD = element(by.xpath('//input[@id="reg0"]'));
		this.confirmElecMeterOnsupply = element(by.xpath('//input[@id="confirmelecsupplytrue"]/following-sibling::span[@class="outer"]'));
		this.SMET2AssetInstalledN = element(by.xpath('//input[@id="smets2Installedfalse"]/following-sibling::span[@class="outer"]'));
		this.exchangeAssetY = element(by.xpath('//input[@id="exchangeassettrue"]/following-sibling::span[@class="outer"]'));
		this.equipmentRepositionRequired = element(by.xpath('//*[@id="repositionSelect"]'));
		this.SMETSOffered = element(by.xpath('//input[@id="smets2offeredtrue"]/following-sibling::span[@class="outer"]'));
		this.elecMeterRadio = element(by.xpath('//input[@id="elecmexdfa"]/following-sibling::span[@class="cr"]'));
		this.gasMeterRadio = element(by.xpath('//input[@id="gasmexdfa"]/following-sibling::span[@class="cr"]'));
		this.regulatorRadio = element(by.xpath('//input[@id="regexdfa"]/following-sibling::span[@class="cr"]'));
		this.nextSecRem = element(by.xpath('//*[@id="btnNextEff"]'));
		this.msgToDCCY = element(by.xpath('//input[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.currentMeterDetTRAD = element(by.xpath('//*[@id="Title_currentMeterDetails"]'));
		this.randomClickEX23 = element(by.xpath('//*[@id="rb_UnReadMet_y"]'));
		this.removeMeter = element(by.xpath('//div/h4[text()="Remove Meter"]'));
		this.assetRemovalElec = element(by.xpath('//input[@id ="CCHradio5"]/following-sibling::span[@class="outer"]'));
		this.statusofAssetElec = element(by.xpath('//select[@id="cbx_StaAss_sel"]'));
		this.elecRemoveNextSec = element(by.xpath('//*[@id="btn_Next_rmv"]'));
		this.confirmElecAssetRemoval = element(by.xpath('//div/h4[text()="Confirm Electric Asset Removal"]'));
		this.elecAssetRemoval = element(by.xpath('//select[@id="cbx_RAss_Status"]'));
		this.elecAssetRemovalY = element(by.xpath('//*[@id="rb_CAssRem_y"]'));
		this.elecAssetRemovalPopup = element(by.xpath('//*[text()="OK"]'));
		this.commshubReqY = element(by.xpath('//*[@id="chubInstall_newChubRequired_y"]/span[@class="outer"]'));
		this.commsHubConnectedYes = element(by.id('//*[@id="Cradionm1"]'));
		this.commissioningNxtBtn = element(by.id('//*[@id="CbtnNextComm"]'));
		this.existelecmeterDtlY = element(by.id('//*[@id="rb_ExMetDetCorrt_y"]'));

		//To Be added to Master 22/09
		// cgp added

		this.existelecmeterDtlY = element(by.id('rb_ExMetDetCorrt_y'));

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
		//Resolved Conflicts Jansi
		this.ConfirmElecCommsHubNxtBtn = element(by.xpath('(//button[@id="btn1"])'));
		this.ConfirmElecCommsHubSubmit = element(by.xpath('(//button[text()="SUBMIT"])'));
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
		this.assetRemovedreplaced = element(by.xpath('//input[@id="CCHradio5"]/following-sibling::span[@class="outer"]'));
		this.assetRemovedreplacedtext = element(by.xpath('//*[contains(text(),"Is the Asset to be Removed/Replaced?")]'));
		this.removeNextbutton = element(by.xpath('//*[@id="btn_Next_rmv"]'));
		this.carryoutmeterinstallationN = element(by.xpath('//input[@id="additionalworkfalse"]/following-sibling::span[@class="outer"]'));
		this.dummydiv = element(by.xpath('(//div/h4[text()="Scan Barcode Using Device Hardware Button"])[1]'));
		//CGP added
		this.currentMeterDetTRAD = element(by.xpath('//*[@id="Title_currentMeterDetails"]'));
		this.randomClickEX23 = element(by.xpath('//*[@id="rb_UnReadMet_y"]'));
		this.randomClickTRAD = element(by.xpath('//div[@class="checkLabel"]'));
		this.currentMetDet = element(by.xpath('//*[@id="Title_CurrMe_Det"]'));
		this.nonserealizedAssetDD = element(by.xpath('//*[@id="Cselect4"]'));
		this.nonserealizedAssetInput = element(by.xpath('//*[@id="Cbar3"]'));



		//CGP TRAD changes Master Branch Update 22/09
		this.smet2ihdppidN = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_n"]'));
		this.existelecmeterDtlY = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]'));
		this.meterReadingLabelTRAD = element(by.xpath('//input[@id="reg0"]'));
		this.confirmElecMeterOnsupply = element(by.xpath('//input[@id="confirmelecsupplytrue"]/following-sibling::span[@class="outer"]'));
		this.SMET2AssetInstalledN = element(by.xpath('//input[@id="smets2Installedfalse"]/following-sibling::span[@class="outer"]'));
		this.exchangeAssetY = element(by.xpath('//input[@id="exchangeassettrue"]/following-sibling::span[@class="outer"]'));
		this.equipmentRepositionRequired = element(by.xpath('//*[@id="repositionSelect"]'));
		this.SMETSOffered = element(by.xpath('//input[@id="smets2offeredtrue"]/following-sibling::span[@class="outer"]'));
		this.elecMeterRadio = element(by.xpath('//input[@id="elecmexdfa"]/following-sibling::span[@class="cr"]'));
		this.gasMeterRadio = element(by.xpath('//input[@id="gasmexdfa"]/following-sibling::span[@class="cr"]'));
		this.regulatorRadio = element(by.xpath('//input[@id="regexdfa"]/following-sibling::span[@class="cr"]'));
		this.nextSecRem = element(by.xpath('//*[@id="btnNextEff"]'));
		this.msgToDCCY = element(by.xpath('//input[@id="comms2MessageReqtrue"]/following-sibling::span[@class="outer"]'));
		this.currentMeterDetTRAD = element(by.xpath('//*[@id="Title_currentMeterDetails"]'));
		this.randomClickEX23 = element(by.xpath('//*[@id="rb_UnReadMet_y"]'));
		this.removeMeter = element(by.xpath('//div/h4[text()="Remove Meter"]'));
		this.assetRemovalElec = element(by.xpath('//input[@id ="CCHradio5"]/following-sibling::span[@class="outer"]'));
		this.statusofAssetElec = element(by.xpath('//select[@id="cbx_StaAss_sel"]'));
		this.elecRemoveNextSec = element(by.xpath('//*[@id="btn_Next_rmv"]'));
		this.confirmElecAssetRemoval = element(by.xpath('//div/h4[text()="Confirm Electric Asset Removal"]'));
		this.elecAssetRemoval = element(by.xpath('//select[@id="cbx_RAss_Status"]'));
		this.elecAssetRemovalY = element(by.xpath('//*[@id="rb_CAssRem_y"]'));
		this.elecAssetRemovalPopup = element(by.xpath('//*[text()="OK"]'));
		this.commshubReqY = element(by.xpath('//*[@id="chubInstall_newChubRequired_y"]/span[@class="outer"]'));
		this.commsHubConnectedYes = element(by.xpath('//*[@id="Cradionm1"]'));
		this.commissioningNxtBtn = element(by.xpath('//*[@id="CbtnNextComm"]'));
		this.existelecmeterDtlY = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]'));

		//To Be added to Master 22/09
		// cgp added

		this.existelecmeterDtlY = element(by.xpath('//*[@id="rb_ExMetDetCorrt_y"]'));

		// CGP added

		this.currentMeterDetTRAD = element(by.xpath('//*[@id="Title_currentMeterDetails"]'));
		this.randomClick1 = element(by.xpath('(//div[@class="checkLabel"])[1]'));
		this.randomClick2 = element(by.xpath('(//div[@class="checkLabel"])[2]'));
		this.currentMeterDetTRAD = element(by.xpath('//*[@id="Title_currentMeterDetails"]'));
		this.randomClickEX23 = element(by.xpath('//*[@id="rb_UnReadMet_y"]'));
		this.randomClickTRAD = element(by.xpath('//div[@class="checkLabel"]'));
		this.currentMetDet = element(by.xpath('//*[@id="Title_CurrMe_Det"]'));
		this.nonserealizedAssetDD = element(by.xpath('//*[@id="Cselect4"]'));
		this.nonserealizedAssetInput = element(by.xpath('//*[@id="Cbar3"]'));

		//CGP TRAD changes

		this.smet2ihdppidN = element(by.xpath('//label[@id="currentIhdPpmid_assetOnSite_n"]'));

		//Resolved Conflicts for TST22
		//#region Flty TST22 EXCH24

		this.btnnext1 = element(by.xpath('(//*[@id="btnNextComm"])[1]'));
		this.Tst22removedmeterReading = element(by.xpath('(//input[@id="input0"])[2]'));
		this.Tst22removemeterText = element(by.xpath('(//div[text()="Removed Meter Reading(s):"])[2]'));
		this.Tst22RemoveMeterEnNxt = element(by.xpath('(//div[@class = "checkLabel"])[5]'));
		this.Tst22RemoveNxtEnable = element(by.css('.ng-scope > .ng-scope:nth-child(5) .checkLabel'));

		//#endregion
		//Resolved Conflicts for TST28

		//#region Flty TST28 RMVE7
		this.Tst28IhdAssetPhotEvidence = element(by.xpath('(//*[@id="removeIhdPpmidAsset_photoButton"])'));
		this.Tst28GasAssetPhotEvidence = element(by.xpath('(//*[@id="removeGasAsset_photoButton"])'));
		this.Tst28carryadditlwork = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
		this.Tst28cappedgascooker = element(by.xpath('(//*[@id="work[$index]"]/following-sibling::span[@class="outer"])[2]'));
		this.confirmElecEvidence = element(by.xpath('(//*[@id="btn_CapFin_Pho"])'));
		this.commshubevidence = element(by.xpath('(//*[@id="removeChubAsset_photoButton"])'));
		//#endregion

		//#region IE Implementation
		this.currentmeterreadingunabletoread = element(by.xpath('//input[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"]'));

		//#endregion

	}

	public async confirmelectricassetremovalSectiondispaly() {
		await utility.wait(utility.medium);
		if (this.confirmassetRemovaltext.isDisplayed()) {
			await utility.wait(utility.medium);
			await this.confirmassetRemovaltext.getText().then(function (assetRemoval) {
				console.log("find installPPMID Text  " + assetRemoval);
			});
		}
	}

	/***
 * @Author Supriya Harikumar
 * @description Fill Current PPMID section / ppmidComm 
***/
	public async fillRemoveMeterSection() {
		await utility.wait(utility.medium);
		if (this.assetRemovedreplacedtext.isDisplayed()) {
			Gen.ButtonClick(this.assetRemovedreplaced, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.removeNextbutton, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillabortgasinitialmeter() {
		Gen.SendKeys(this.meterReadingLabel, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.RandomMouseClick(this.meterReadingLabel, 250, 34);
		await utility.wait(utility.medium);
	}

	/***
 * @Author Supriya Harikumar
 * @description Fill Current PPMID section / ppmidComm 
***/
	public async fillElectricAssetRemovalSection() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.elecAssetRemoval, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmedAssetRemovalY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.infoOKButton, utility.medium);
		await utility.wait(utility.medium);
	}


	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region CURRENT IHD/PPMID DETAILS

	public async currentihdppmiddetailtext() {
		await utility.wait(utility.medium);
		await this.ctihdppmidDtl.getText().then(function (ctihdppmidDtlTxt) {
			utility.wait(utility.medium);
			console.log("Find Current IHD PPMID  " + ctihdppmidDtlTxt);
		});
	}

	public async fillcurrentIhdPPMIDdtlsnoExchangeTrade() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smet2ihdppidN, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clicksubmitok() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.submitRemovebtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonremsuccess() {
		await utility.wait(utility.medium);
		if (await this.remvSuccessful.isDisplayed()) {
			Gen.ButtonClick(this.remvSuccessful, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async fillFlty19TRADcommsdtls() {
		await utility.wait(utility.medium);
		if (await this.smets2assetInst.isDisplayed()) {
			Gen.ButtonClick(this.smets2assetInstN, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoAsset.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoAssetY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.electricMeter.isDisplayed()) {
			Gen.ButtonClick(this.electricMeterY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.assetReposition.isDisplayed()) {
			Gen.DropDownOptionClick(this.equipmentRepositionRequired, utility.medium, 'Yes-Customer Agreed');
		}
		await utility.wait(utility.medium);
		if (await this.smets2offered.isDisplayed()) {
			Gen.ButtonClick(this.smets2offeredfalse, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubNextbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillFlty19commsdtls() {
		await utility.wait(utility.medium);
		if (await this.smets2assetInst.isDisplayed()) {
			Gen.ButtonClick(this.smets2assetInstY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubResetting.isDisplayed()) {
			Gen.ButtonClick(this.commshubResettingY, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.removecommshub5mins, utility.medium);
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoSupplyY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoWanY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoAsset.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoAssetN, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.carryoutmeterinstallation.isDisplayed()) {
			Gen.ButtonClick(this.carryoutmeterinstallationY, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubNextbtn, utility.medium);
		await utility.wait(utility.medium);
	}
	public async fillcurrentIhdPPMIDdtls() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smet2ihdppidY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.ihdppmidsSersk, utility.medium, '00-0F-01-FF-FF-E4-85-D4');
		//Gen.ButtonClick(this.dummydiv, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingihdPpmidY, utility.medium);
		await utility.wait(utility.medium);
		try {
			Gen.ButtonClick(this.IhdPpmidNxt, utility.medium);
		} catch (error) {
			console.log("Next section is not present at this moment");
		}
	}

	public async currentmeterdetlGasSection() {
		await utility.wait(utility.medium);
		await this.currentmeterdetlGasSec.getText().then(function (currentdtlGasSection) {
			utility.wait(utility.medium);
			console.log("Find current detail gas section  " + currentdtlGasSection);
		});
	}
	public async currentmeterGasPageContent() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		if (await this.existgasmeterDtlText.isDisplayed()) {
			Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.meterReadingLabel, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.currentmeterreadingunabletoread, utility.medium);
		await utility.wait(utility.medium);
	}

	public async currentcommsHubdtl() {
		await utility.wait(utility.medium);
		browser.sleep(3000);
		await this.currentCommsHubTitle.getText().then(function (currentCommsHubTit) {
			console.log("Find current comms Hub Title  " + currentCommsHubTit);
		});
	}
	public async currentcommsHubdtlPgCont() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.commshubLoc, utility.medium, 'A');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.aerialInstalledY, utility.medium);
		await utility.wait(utility.medium);
		if (await this.CommshubdtlCorrectText.isDisplayed()) {
			Gen.ButtonClick(this.CommshubdtlCorrectY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async capturephotocommsHub() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capexistcommshubInstall, utility.medium);
		await utility.wait(utility.medium);
	}

	public async determintfaultActivity() {
		await utility.wait(utility.medium);
		await this.determinefaultActivityTitle.getText().then(function (determinefaultActivityTit) {
			console.log("Faulty activity  " + determinefaultActivityTit);
		});
		await utility.wait(utility.medium);
	}


	public async filleleccommsdtls() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmelecmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
	}

	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region Determine Faulty Activity
	public async fill14commsdtls() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmgasmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
	}

	public async captureevidsuspectedtamp() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturesuspectedTamp, utility.medium);
		await utility.wait(utility.medium);
	}


	public async fill15commsdtls() {
		await utility.wait(utility.medium);
		if (await this.smets2assetInst.isDisplayed()) {
			Gen.ButtonClick(this.smets2assetInstY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubResetting.isDisplayed()) {
			Gen.ButtonClick(this.commshubResettingY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async fill15commsdtls_FLTY18TRAD() {
		await utility.wait(utility.medium);
		if (await this.smets2assetInst.isDisplayed()) {
			Gen.ButtonClick(this.smets2assetInstN, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoAsset.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoAssetN, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.carryoutmeterinstallation.isDisplayed()) {
			Gen.ButtonClick(this.carryoutmeterinstallationN, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubNextbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickOk5mins() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.removecommshub5mins, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fill16commsdtls() {
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoSupplyY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoWanY, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoAssetY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async commshubSelect() {
		await utility.wait(utility.medium);
		if (await this.commsHub.isDisplayed()) {
			Gen.ButtonClick(this.commsHubY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async gasmeterSelect() {
		await utility.wait(utility.medium);
		if (await this.gasMeter.isDisplayed()) {
			Gen.ButtonClick(this.gasMeterY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async regulatorSelect() {
		await utility.wait(utility.medium);
		if (await this.Regulator.isDisplayed()) {
			Gen.ButtonClick(this.RegulatorY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async ihdppmidSelect() {
		await utility.wait(utility.medium);
		if (await this.ihdPpmid.isDisplayed()) {
			Gen.ButtonClick(this.ihdPpmidY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async clickoncommsNextsection() {
		await utility.wait(utility.medium);
		if (await this.commshubNextbtn.isDisplayed()) {
			Gen.ButtonClick(this.commshubNextbtn, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async preinstgasTighttest() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		if (await this.preinstGasTightness.isDisplayed()) {
			Gen.ButtonClick(this.preinstGasTightnessY, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async capturepressureMB() {
		await utility.wait(utility.medium);
		if (await this.capturepressureinMB.isDisplayed()) {
			Gen.ButtonClick(this.capturepressureinMB, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async fill18preInstdtls() {
		await utility.wait(utility.medium);
		if (await this.wasthereadropinPressure.isDisplayed()) {
			Gen.ButtonClick(this.wasthereadropinPressureY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.enterdipGasPressure.isDisplayed()) {
			Gen.DropDownOptionClick(this.enterdipGasPressureSelect, utility.medium, '3');
		}
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.selectmeterTypeSelect, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smellGasY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async gastightnessfieldfailed() {
		await utility.wait(utility.medium);
		if (await this.gastightnesstestCompleted.isDisplayed()) {
			await this.gastightnesstestCompletedFail.isDisplayed();
		}
	}

	public async fillPreInstdtls() {
		await utility.wait(utility.medium);
		if (await this.gasTightness.isDisplayed()) {
			Gen.SendKeys(this.gasTightnessTextbox, utility.medium, 'Gas Tested');
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gastightnessOutcomeGT, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reportedinctoGTY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.jobRef, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reportedinctoHSY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.airRef, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtattendanceY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtresolveY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fill19preInstdtls() {
		await utility.wait(utility.medium);
		Gen.SendKeys(this.gasTightnessTextbox, utility.medium, 'Gas Tested');
		await utility.wait(utility.medium);
		if (await this.gastightnessOutcome.isDisplayed()) {
			Gen.ButtonClick(this.gastightnessOutcomeGT, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reportedinctoGTY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.jobRef, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reportedinctoHSY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.airRef, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtattendanceY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtresolveY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.btnnext, utility.medium);
		await utility.wait(utility.medium);
	}

	public async removeihdPpmid() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AssettobeRemoved, utility.medium);
		await utility.wait(utility.medium);
	}

	public async ihdpowerOnOK() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.rmvihdppmidpopupOK, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fill21rmvihdppmidtls() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.rmvihdppmidstatusofAssetSel, utility.medium, '1');
		await utility.wait(utility.medium);
	}

	public async rmvihdppmidnxtbtn() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.rmvihdppmidNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async sendmsgihdppmid() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.sendmsgbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async awaitingResponse() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.high);
	}

	public async ppmidRemovalbtn() {
		await utility.wait(utility.medium);
		await expect(this.ppmidremoval.isDisplayed());
		await utility.wait(utility.medium);
	}

	public async sentmesgSuccess() {
		await utility.wait(utility.medium);
		await expect(this.reqSentSuccess.isDisplayed());
		await utility.wait(utility.medium);
	}

	public async assetUnjoinedText() {
		await utility.wait(utility.medium);
		await expect(this.AssetUnJoined.isDisplayed());
		await utility.wait(utility.medium);
	}

	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region PPMID Removal Successful

	public async PPMIDRemovalbtndisplayed() {
		await utility.wait(utility.medium);
		await expect(this.ppmidremovalSuccess.isDisplayed());
		await utility.wait(utility.medium);
	}

	public async clickonPPMIDRmvl() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ppmidremovalSuccess, utility.medium);
		await utility.wait(utility.medium);
	}

	public async confirmAssetRmvl() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.AssetRemovalSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmAssetrmvYES, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonOKBtn() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AssetPopup, utility.medium);
		await utility.wait(utility.medium);
	}

	public async RmvGasmeterSec() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GMassettoberemoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofAssetSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		///***IE Changes 21/10/19*/
		//Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		//await utility.wait(utility.medium);
	}

	public async fillremovemeterreading() {
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
	}

	//#region Gas Meter Removal for Remove Gas

	public async GasmeterRemovalforRemoveGas() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GMassettoberemoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofAssetSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.unabletoReadGasMeterYES, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.carryanyAdditionalWorkNo, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonnxtBtnofgasmeterRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GMremovalNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async sendmsgGMREM() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.SendGMREMBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async AwaitingResponseGMREM() {
		await utility.wait(utility.high);
	}
	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region Awaiting Response After GMREM 

	public async removalsuccessfulbtn() {
		await utility.wait(utility.medium);
		await expect(this.RemovalSuccess.isDisplayed());
		//await this.RemovalSuccess.click();
	}

	public async ReqSentSuccess() {
		await utility.wait(utility.medium);
		await expect(this.reqSentSuccessGMREM.isDisplayed());
	}

	public async OktoRemoveAsset() {
		await utility.wait(utility.medium);
		await expect(this.OKtoremoveAsset.isDisplayed());
	}

	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region Removal Successful 

	public async clickonremovalsuccessfulbtn() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemovalSuccess, utility.medium);
		await utility.wait(utility.medium);
	}

	public async confirmGasAssetRemoval() {
		await utility.wait(utility.medium);
		await this.confirmgasAssetRemoval.getText().then(function (confirmgasAssetRemovalTxt) {
			console.log("Confirm Gas Asset Removal" + confirmgasAssetRemovalTxt);
		});
	}

	//#region Gas Meter Removal 

	public async fillGasmeterRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GMassettoberemoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofAssetSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
	}

	//#endregion

	/**
	 * @Author Jansi Victor
	 * @Description  Automation for FAULTY18 Workflow
	 */

	//#region Gas Asset Removal 

	public async fill24GasAssetRemoval() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.gasAssetRemoval, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GasAssetRemovalY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonokGasAssetRemovalCapture() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.captureassetremovalPhoto, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonokGasAssetRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GasAssetRemovalPopup, utility.medium);
		await utility.wait(utility.medium);
	}

	public async RemoveCommsHubWindow() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.IstheassettobeRemovedorReplaced, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.RemoveCommshubSelect, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.StatusofCommsHub, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.RemoveCommsHubAdditionalNotes, utility.medium, 'Remove COMMS HUB remarks');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.FaultidentifiedPostInst, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonNxtBtnRmvCommsHub() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemCommsHubNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async XCHUBSubmit() {
		await utility.wait(utility.medium);
		if (await this.XCHUBBtn.isDisplayed()) {
			Gen.ButtonClick(this.XCHUBBtn, utility.medium);
			await utility.wait(utility.high);
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.remvSuccessfulFInal, utility.medium);
		}
		await utility.wait(utility.medium);
	}

	public async ConfirmHubRmv() {
		await utility.wait(utility.medium);
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
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.ConfirmCommsHubRemovalSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.Confirmcommhubassetremove, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonokconfrimremovalpopup() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmCommsHubRemovalPopup, utility.medium);
		await utility.wait(utility.medium);
	}

	/**Conflict changes */

	/****Resolve Conflicts */

	// await utility.wait(utility.medium);
	// if (await this.finalphotocommshubEvidence.isDisplayed()) {
	// 	await this.finalphotocommshubEvidence.click();
	// }

	/** Conflicts changes not required */

	public async clickonokconfrimremovalpopupRemove() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmCommsHubRemovalPopup, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.finalphotocommshubEvidence, utility.medium);
		await utility.wait(utility.medium);
		/****Resolve Conflicts */
	}

	public async clickonokcaptureFinalPhotoEvidence() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.finalaseetcapturephoto, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonokcaptureAssetFinalPhotoEvidence() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.captureassetPhoto, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonsubmitforRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmCommsHubNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonsubmitforRemovalGrmv() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmCommsHubNxtBtnRmv, utility.medium);
		await utility.wait(utility.medium);
	}


	//#endregion

	//***************************************************************************************** *//
	/*@Author Jansi Victor
	/*@Description: UAT Testing 
	/*ELectric Section Addition
	//***************************************************************************************** */

	//#region Current Meter Details
	public async CurrentMeterElec() {
		await utility.wait(utility.medium);
		await this.currentMeterElecCap.getText().then(function (currentMeterElecCapTxt) {
			console.log("Current Meter" + currentMeterElecCapTxt);
		});
	}

	public async fillcurrentElecmeter() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingelecmeterdtls, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.meterReadingLabel, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.currentmeterreadingunabletoread, utility.medium);
		await utility.wait(utility.medium);
	}

	//#endregion

	public async fillelecfaultysection() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmElecmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
	}

	public async ElecmeterSelect() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecMeterY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillElecmeterrem() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofElecAssetSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		//***IE Changes 21/10/19 */
		//Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		//await utility.wait(utility.medium);
		//Gen.ButtonClick(this.unabletoReadGasYes, utility.medium);
		//await utility.wait(utility.medium);
		/****Resolving Conflicts */
		// await this.removemeterText.click();
		// await this.unabletoReadGasYes.click();
	}

	public async fillEEREM() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofElecAssetSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.unabletoReadGasYes, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillRemovePPMID() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.AssettobeRemoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.rmvihdppmidpopupOK, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.rmvihdppmidstatusofAssetSel, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.rmvihdppmidNxtBtn, utility.medium);
	}
	public async clickonnxtBtnofElecmeterRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ElecremovalNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async capturecurrentmeterGasPageContent() {
		await utility.wait(utility.medium);
		await this.captureCurrentMeterText.getText().then(function (capturecurrentmeterdtlPgContent) {
			console.log("Find current detail gas section content  " + capturecurrentmeterdtlPgContent);
		});
	}

	public async AwaitingResponseEMREM() {
		await utility.wait(utility.high);
	}
	//FLTY20 - Electric duel Meter

	public async fillcurrentElecduelmeter() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingelecmeterdtls, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.meterReadingduel, utility.medium, '12345');
		await utility.wait(utility.medium);
		//Gen.ButtonClick(this.meterReadingduelen, utility.medium);
		Gen.RandomMouseClick(this.meterReadingduel, 250, 34);
		await utility.wait(utility.medium);
		/****Resolve Conflicts */
		//  await utility.wait(utility.medium);
		//		await this.rmvihdppmidNxtBtn.click();
		/****Resolve Conflicts */
	}

	public async fillcurrentElecduelmeterNoex() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingelecmeterdtls, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.meterReadingduel, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.RandomMouseClick(this.meterReadingduel, 250, 34);
		await utility.wait(utility.medium);
	}

	//TST12_FLTY GAS
	public async Tst12fill16commsdtls() {
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoSupply.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoSupplyY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.commshubconnectedtoSWan.isDisplayed()) {
			Gen.ButtonClick(this.commshubconnectedtoWanY, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoAssetN, utility.medium);

		await utility.wait(utility.medium);
		Gen.ButtonClick(this.carryoutWorkontheMeterY, utility.medium);
		await utility.wait(utility.medium);
	}
	//Submit to continue with Install
	public async NexttoInstall() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmCommsHubNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	//TST13 FLTY20

	public async TST13fillcurrentIhdPPMIDdtls() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smet2ihdppidN, utility.medium);
		await utility.wait(utility.medium);
		try {
			Gen.ButtonClick(this.IhdPpmidNxt, utility.medium);
		} catch (error) {
			console.log("Next section is not present at this moment");
		}
	}

	public async Tst13fillcurrentmeterdtlGassec() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		await utility.wait(utility.medium);
		if (await this.meterReading.isDisplayed()) {
			Gen.SendKeys(this.meterReadingLabel, utility.medium, '1234');
		}
		await utility.wait(utility.medium);
		await utility.wait(utility.medium);
		Gen.RandomMouseClick(this.meterReadingLabel, 250, 34);
		await utility.wait(utility.medium);
	}

	public async Tst13fill15commsdtls() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smets2assetInstN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoAssetY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async TST13fill45() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.Equipmentreposition, utility.medium, 'Yes-Customer Agreed');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smets2Declined, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst13fill23GasmeterRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GMassettoberemoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofAssetSelect, utility.medium, '0');
		await utility.wait(utility.medium);
	}

	public async Tst13fillElecmeterrem() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved1, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofElecAssetSelect, utility.medium, '0');
		await utility.wait(utility.medium);
	}

	//Conflict Changes    

	//#region CURRENT METER DETAILS - GAS
	public async fillcurrentmeterdtlGas() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.meterReadingLabel, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.unabletoReadGasYes, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillcurrentmeter() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingelecmeterdtls, utility.medium);
		await utility.wait(utility.medium);
		if (await this.capturemeterReadingtext.isDisplayed()) {
			Gen.SendKeys(this.capturemeterReadinginput, utility.medium, '12345');
		}
		Gen.ButtonClick(this.unabletoReadYes, utility.medium);
		await utility.wait(utility.medium);
	}

	public async FillFaultActivityTradNoExcahnge() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmElecmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturesuspectedTamp, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smets2assetInstN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoAssetN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.carryoutWorkNo, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubNextbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	//#region Determine faulty for Elec
	public async FillFaultActivityNoExcahnge() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmElecmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmgasmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturesuspectedTamp, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.smets2assetInstY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubResettingY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.removecommshub5mins, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoSupplyY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoWanY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubconnectedtoAssetN, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.carryoutWorkYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubNextbtn, utility.medium);
		await utility.wait(utility.medium);
	}

	//TST22 FLTY EXCHANGE24 changes

	public async TST22fill19preInstdtls() {
		await utility.wait(utility.medium);
		if (await this.gasTightness.isDisplayed()) {
			Gen.SendKeys(this.gasTightnessTextbox, utility.medium, 'Gas Tested');
		}
		await utility.wait(utility.medium);
		if (await this.gastightnessOutcome.isDisplayed()) {
			Gen.ButtonClick(this.gastightnessOutcomeGT, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.reportedinctoGT.isDisplayed()) {
			Gen.ButtonClick(this.reportedinctoGTY, utility.medium);
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.jobRef, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.reportedinctoHSY, utility.medium);
		await utility.wait(utility.medium);
		Gen.SendKeys(this.airRef, utility.medium, '2');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtattendanceY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gtresolveY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.btnnext1, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst22fillcurrentmeterdtlGassec() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst22fillcurrentElecmeter() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingelecmeterdtls, utility.medium);
		await utility.wait(utility.medium);
	}

	//TST22 EXCH24

	public async Tst22fillElecmeterrem() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.statusofElecAssetSelect, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.Tst22removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
		//***IE Changes 21/10/19 */
		//await expect(this.Tst22RemoveMeterEnNxt.isDisplayed());
		//await utility.wait(utility.medium);
		Gen.ButtonClick(this.unabletoReadGasYes, utility.medium);
		await utility.wait(utility.medium);
	}

	//TST28 -RMVE7 Changes

	public async TST28fillcurrentmeterdtlGassec() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async TST28fillcurrentElecduelmeter() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existingelecmeterdtls, utility.medium);
		await utility.wait(utility.medium);
	}

	public async TST28TakeEvidence() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.Tst28IhdAssetPhotEvidence, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst28AdditionalWork() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.Tst28carryadditlwork, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.Tst28cappedgascooker, utility.medium);
		await utility.wait(utility.medium);
	}

	public async TST28TakeEvidenceGas() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.Tst28GasAssetPhotEvidence, utility.medium);
		await utility.wait(utility.medium);
	}

	public async TST28TakeEvidenceAsset() {
		await utility.wait(utility.medium);
		try {
			Gen.ButtonClick(this.AssetPopup, utility.medium);
		}
		catch (error) {
			console.log("Continue without pop-up");
		}
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmElecEvidence, utility.medium);
		await utility.wait(utility.medium);
	}

	public async Tst28CommshubEvidence() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubevidence, utility.medium);
		await utility.wait(utility.medium);

	}
	//#endregion

	//CGP added

	public async captureElecSection() {
		await utility.wait(utility.medium);
		await this.currentMetDet.getText().then(function (capturecurrentmeterdtlPgContentElec) {
			console.log("Find current detail elec section content  " + capturecurrentmeterdtlPgContentElec);
		});
	}

	//CGP added
	public async captureElecSectionTRAD() {
		await utility.wait(utility.medium);
		await this.capctmeterReadingPanel.getText().then(function (Test1) {
			console.log("Find current detail elec section content  " + Test1);
		});
	}

	//CGP added capture current meter
	public async fillcapturecurrentmeterdtlGassec() {
		await utility.wait(utility.medium);
		if (await this.captureCurrentMeterText.isDisplayed()) {
			Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.meterReading1.isDisplayed()) {
			Gen.SendKeys(this.meterReadingLabel1, utility.medium, '1234');
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.randomClick1, utility.medium);
			console.log("Random Click 1");
			await utility.wait(utility.medium);
		}
	}

	// CGP added 13/09

	public async fillcapturecurrentmeterdtlGassecTRAD() {
		await utility.wait(utility.medium);
		if (await this.captureCurrentMeterText.isDisplayed()) {
			Gen.ButtonClick(this.existgasmeterDtlY, utility.medium);
		}
		await utility.wait(utility.medium);
		if (await this.meterReading1.isDisplayed()) {
			Gen.SendKeys(this.meterReadingLabel1, utility.medium, '12345');
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.randomClick1, utility.medium);
			console.log("Random Click 1");
			await utility.wait(utility.medium);
		}
	}

	public async  currentMeterDetailsHeader() {
		await utility.wait(utility.medium);
		await this.currentMeterDetTRAD.getText().then(function (currentMeterDetails) {
			console.log("Current Meter Details Title  " + currentMeterDetails);
		});
	}

	public async fillcurrentmeterdtlElecsecTRAD() {
		await utility.wait(utility.medium);
		if (await this.currentMetDet.isDisplayed()) {
			await utility.wait(utility.medium);
			console.log("Current meter details displayed");
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.existelecmeterDtlY, utility.medium);
			console.log("Electric section clciked");
		}
		await utility.wait(utility.medium);
		Gen.SendKeys(this.meterReadingLabelTRAD, utility.medium, '12345');
		console.log("Text Enterd for elect 5 digits");
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.randomClickTRAD, utility.medium);
		console.log("Random Click 2");
		// Change Later
		console.log("Next Button clicked 2");
		await utility.wait(utility.medium);
	}

	public async fillcurrentmeterdtlElecsecEX23() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.existelecmeterDtlY, utility.medium);
		console.log("Electric section clciked");
	}

	public async fillcurrentmeterdtlElecsec() {
		await utility.wait(utility.medium);
		if (await this.currentMetDet.isDisplayed()) {
			await utility.wait(utility.medium);
			console.log("Current meter details displayed");
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.existelecmeterDtlY, utility.medium);
			console.log("Electric section clciked");
		}
		await utility.wait(utility.medium);
		if (await this.meterReading2.isDisplayed()) {
			Gen.SendKeys(this.meterReadingLabel2, utility.medium, '12345');
			console.log("Text Enterd for elect 5 digits");
			await utility.wait(utility.medium);
			Gen.ButtonClick(this.randomClick2, utility.medium);
			console.log("Random Click 2");
			console.log("No Next Section Button");
			await utility.wait(utility.medium);
		}
	}

	//CGP added for FLTY20TRAD

	public async confirmMeterSupply() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmElecMeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmgasmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
	}

	public async confirmMeterSupplyTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmElecMeterOnsupply, utility.medium);
	}

	public async confirmMeterSupplyGasTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmgasmeterOnsupply, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added 13/09

	public async exchangeAssetGasTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.exchangeAssetY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasMeterRadio, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.regulatorRadio, utility.medium);
		await utility.wait(utility.medium);
	}

	public async exchangeAssetTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.exchangeAssetY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecMeterRadio, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP Added for FLTY20 TRAD flow
	public async removeGasMeter() {
		await utility.wait(utility.medium);
		await this.removePPMID.getText().then(function (removePPMIDTxt) {
			console.log("Remove PPMID " + removePPMIDTxt);
		});
	}

	// CGP added for EX23
	public async fill21rmvihdppmidtlsEX23() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.rmvihdppmidstatusofAssetSel, utility.medium, '1');
		await utility.wait(utility.medium);
	}


	// CGP Added for TRAD20

	public async removeElecmeterSec() {
		await utility.wait(utility.medium);
		await this.removeMeter.getText().then(function (RemoveIRemoveElecMeterPanelTxt) {
			console.log("Remove Elec Meter " + RemoveIRemoveElecMeterPanelTxt);
		});
	}
	//CGP Elect Asset Removal


	public async fillElecmeterRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.assetRemovalElec, utility.medium);
		console.log("Status of elec asset removed yes selected")
		await utility.wait(utility.medium); // Change Later
		Gen.DropDownOptionbyLabel(this.statusofAssetElec, utility.medium, 'No Fault Found');
		console.log("No Fault Found Selected")
		await utility.wait(utility.medium);
	}

	public async clickonnxtBtnofElecmeterRemovalTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecRemoveNextSec, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP ADDED for EX23

	public async RmvElecmeterSec() {
		await utility.wait(utility.medium);
		await expect(this.ElecRemoveMeter.isDisplayed());
		console.log("REMOVE ELECTRIC METER");
	}

	public async fillElecmeterremEX23() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemoveElecAssetrplacedorremoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionbyLabel(this.statusofElecAssetSelect, utility.medium, 'No Fault Found');
		await utility.wait(utility.medium);
		Gen.SendKeys(this.removedmeterReading, utility.medium, '12345');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.statusofElecAssetSelect, utility.medium);
		console.log("Random Click EX23");
		await utility.wait(utility.medium);

	}

	public async clickonnxtBtnofElecmeterRemovalEX23() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ElecremovalNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async sendmsgEMREM() {
		await utility.wait(utility.medium);
		await this.SendElMREMBtnCap.getText().then(function (SendElMREMBtnCapTxt) {
			console.log("Send EMRM" + SendElMREMBtnCapTxt);
		});
	}

	public async clickOnsendmsgEMREM() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.SendElMREMBtn, utility.medium);
		await utility.wait(utility.medium);
	}
	public async AwaitingResponseEMREMEX23() {
		await utility.wait(utility.high);
	}

	public async Elecremovalsuccessfulbtn() {
		await utility.wait(utility.medium);
		await expect(this.RemovalSuccessElec.isDisplayed());
	}

	public async ElecReqSentSuccess() {
		await utility.wait(utility.medium);
		await expect(this.reqSentSuccessEMREM.isDisplayed());
	}

	public async ElecOktoRemoveAsset() {
		await utility.wait(utility.medium);
		await expect(this.OKtoremoveAssetElec.isDisplayed());
	}

	public async clickonElecremovalsuccessfulbtn() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.RemovalSuccessElec, utility.medium);
		await utility.wait(utility.medium);
	}

	public async confirmElecAssetRem() {
		await utility.wait(utility.medium);
		await this.confirmElecAssetRemoval.getText().then(function (confirmElecAssetRemovalTxt) {
			console.log("Confirm Elec Asset Removal" + confirmElecAssetRemovalTxt);
		});
	}

	public async fill24ElecAssetRemoval() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.ElecAssetRemoval, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ElecAssetRemovalY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonokElecAssetRemovalEX23() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ElecAssetRemovalPopup, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonElecsubmitfor() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmElecCommsHubSubmit, utility.medium);
		await utility.wait(utility.medium);
	}
	public async clickonElecsubmitforRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.ConfirmElecCommsHubNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	// CGP Added Elec Removal

	public async fillElecAssetRemoval() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.elecAssetRemoval, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecAssetRemovalY, utility.medium);
		await utility.wait(utility.medium);
	}
	public async clickonokElecAssetRemoval() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GasAssetRemovalPopup, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickonNextsectionRemove() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextSecRem, utility.medium);
		await utility.wait(utility.medium);
	}

	//CGP added 13/09

	public async clickonNextsectionRemoveTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.nextSecGasBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	// Added for FLTY19 TRAD
	public async clickSubmitRemElecSecTRAD() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.submitElecRemSecEndTRAD, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillCommsHubReqY() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commshubReqY, utility.medium);
		await utility.wait(utility.medium);
	}

	public async fillCommissioningDetailsTRAD() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.nonserealizedAssetDD, utility.medium, '1');
		await expect(await this.nonserealizedAssetInput.isPresent());
		await utility.wait(utility.medium);
		Gen.SendKeys(this.nonserealizedAssetInput, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.msgToDCCY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commsHubConnectedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commissioningNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}
	//CGP added
	public async fillCommissioningDetailsEX23() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.nonserealizedAssetDD, utility.medium, '1');
		await utility.wait(utility.medium);
		await expect(await this.nonserealizedAssetInput.isPresent());
		Gen.SendKeys(this.nonserealizedAssetInput, utility.medium, '1');
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commsHubConnectedYes, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.commissioningNxtBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	// CGP TRAD CHanges

	public async fillcurrentIhdPPMIDdtlsTRAD() {
		await utility.wait(utility.medium);
		if (await this.smet2ihdppidText.isDisplayed()) {
			Gen.ButtonClick(this.smet2ihdppidN, utility.medium);
		}
		await utility.wait(utility.medium);
		try {
			Gen.ButtonClick(this.IhdPpmidNxt, utility.medium);
		}
		catch (error) {
			console.log("Next section is not present at this moment");
		}
	}

	public async smet2AssetInstalled() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.SMET2AssetInstalledN, utility.medium);
		await utility.wait(utility.medium);
	}

	public async equipReposition() {
		await utility.wait(utility.medium);
		Gen.DropDownOptionClick(this.equipmentRepositionRequired, utility.medium, 'Yes-Customer Agreed');
		await utility.wait(utility.medium);
	}

	public async smetsOffered() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.SMETSOffered, utility.medium);
		await utility.wait(utility.medium);
	}

	public async exchangeAsset() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.exchangeAssetY, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.elecMeterRadio, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.gasMeterRadio, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.regulatorRadio, utility.medium);
		await utility.wait(utility.medium);
	}

	//Added By CGP TRAD

	public async confirmElecAssetRemovalTRAD() {
		await utility.wait(utility.medium);
		await this.confirmElecAssetRemoval.getText().then(function (confirmElecAssetRemovalTxt) {
			console.log("Confirm Elec Asset Removal" + confirmElecAssetRemovalTxt);
		});
	}

	public async fill23GasmeterRemovalTC4() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.GMassettoberemoved, utility.medium);
		await utility.wait(utility.medium);
		Gen.DropDownOptionbyLabel(this.statusofAssetSelect, utility.medium, 'No Fault Found');
		await utility.wait(utility.medium);
	}

	public async capturePhotoOfUGaugeAttachedToGasMeter() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.capturePhotoOfUGaugeAttachedToGasMeterBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async clickOnPreInstallationGasTightnessTestSubmitBtn() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.preInstallationGasTightnessTestSubmitBtn, utility.medium);
		await utility.wait(utility.medium);
	}

	public async flty20NoexDefaultActivity() {
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmgasmeterOnsupply1, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.confirmgasmeterOnsupply2, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.areSMETS2AssetInstalledFalseRadioOption, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.doYouNeedToExchangeAnAssetFalseRadioOption, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.doYouNeedToCarryOutWorkOnTheMeterInstallationTrueRadioOption, utility.medium);
		await utility.wait(utility.medium);
		Gen.ButtonClick(this.btnnext, utility.medium);
		await utility.wait(utility.medium);
	}
}