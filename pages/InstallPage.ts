/**
 * @Author Jansi Victor
 * @Description UAT Automation for FAULTY18 Workflow
 */
import {element, by, ElementFinder, ElementArrayFinder, browser, ExpectedConditions} from "protractor";

const {Given, When, Then} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import {Utility} from "../support/utility";
import {watchFile} from "fs";
import * as assert from "assert";

const utility: Utility = new Utility();

export class InstallPageObject {

    private pageHeaderText: ElementArrayFinder
    private terminalScrewTightnessText: ElementFinder
    private terminalScrewTightnessCheckedTrueRadioOption: ElementFinder
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
    private testWitnessNameTxtfield: ElementFinder
    private testWitnessNameTxtfieldPostInstallGasTightnessForm: ElementFinder
    private standingPressureTextfield: ElementFinder
    private capturePhotoOfStandingPressureBtn: ElementFinder
    private workingPressureTextfield: ElementFinder
    private capturePhotoOfWorkingPressureBtn: ElementFinder
    private capturePhotoOfFinalMeterInstallButton: ElementFinder
    private postInstallGasTightnessTestNextBtn: ElementFinder
    private installKitNextSectionBtn: ElementFinder
    private addAnotherAssetBtnInstallKitSection: ElementFinder
    private gasApplianceSafetyChecksSectionText: ElementFinder


    public installcommsHub: ElementFinder
    public commshubReqY: ElementFinder
    public selectValid: ElementFinder
    public selectValidnewgas: ElementFinder;
    public commshubWarning: ElementFinder
    public CHFIDText: ElementFinder
    public assetSuccessAdded: ElementFinder
    public commsHubLocation: ElementFinder
    public Assetserialsmatchnext: ElementFinder
    public CHF_ID_Txt: ElementFinder
    public aerialY: ElementFinder
    public commshubconnmethodselect: ElementFinder
    public commshubPhoto: ElementFinder
    public instCommshubNext: ElementFinder
    public clksendMsgXCHUB: ElementFinder
    public SendXCHUBbtn: ElementFinder
    public AwaitingRespXCHUB: ElementFinder
    public AwaitingReqSent: ElementFinder
    public AwaitingWhiteList: ElementFinder
    public remvSuccessful: ElementFinder
    public NewGasMeterDtls: ElementFinder
    public gasmeterserialSend: ElementFinder
    public Gas_Meter_Txt: ElementFinder
    public AssetaddedtoWall: ElementFinder
    public GasnewMeterSelect: ElementFinder
    public GasnewMeternewLocation: ElementFinder
    public newRegulator: ElementFinder
    public HasGasRegulatorReplacedY: ElementFinder
    public selectValidAssettoInst: ElementFinder
    public RegularclickenableOK: ElementFinder
    public AssetaddedtowallNewReg: ElementFinder
    public nextSecnewRegulator: ElementFinder
    public GasInitialmeterReading: ElementFinder
    public captureMeterReadingSend: ElementFinder
    public CaptureMeterReadingenableok: ElementFinder
    public InstKitCaption: ElementFinder
    public InstallkitUsedY: ElementFinder
    public NonserializedassetSel: ElementFinder
    public NonserializedassetSel2: ElementFinder
    public T1Aerialinput: ElementFinder
    public T1Aerialinput1: ElementFinder
    public Addanotherset: ElementFinder
    public InstallKitNextSection: ElementFinder
    public ContactGTY: ElementFinder
    public NationalGridSend: ElementFinder
    public GTAttendenceOnsiteY: ElementFinder
    public GTresolveIssueY: ElementFinder
    public TightnessIssueY: ElementFinder
    public ReplacedGasMeterY: ElementFinder
    public ReplacedGasregulatorY: ElementFinder
    public TightnessperformedY: ElementFinder
    public cappostinstallation: ElementFinder
    public Dropinpressure: ElementFinder
    public dropinpressureselect: ElementFinder
    public selectMeterType: ElementFinder
    public GasTightnessPassed: ElementFinder
    public TestWitness: ElementFinder
    public standingPressure: ElementFinder
    public cappostinstallationpressure: ElementFinder
    public workingPressure: ElementFinder
    public captureworkingPressure: ElementFinder
    public captureFinalMeterInstall: ElementFinder
    public MsgreqDCC: ElementFinder
    public hubconnectdtoWAN: ElementFinder
    public PostinstallNext: ElementFinder
    public gasInstallcommisioningcaption: ElementFinder
    public sendMsgGICOM: ElementFinder
    public awaitingresponse: ElementFinder
    public reqsentSuccess: ElementFinder
    public pairAssettocommsHub: ElementFinder
    public Pairingsuccessful: ElementFinder
    public DCChandover: ElementFinder
    public MPRNsetconfig: ElementFinder
    public Joinsareinit: ElementFinder
    public commisioningSuccessful: ElementFinder
    public GasApplianceSafetychk: ElementFinder
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

    public earthBondingInstclk: ElementFinder
    public LandlordPropclk: ElementFinder
    public Addresssend: ElementFinder
    public AddApplianceclk: ElementFinder
    public FlueTypesel: ElementFinder
    public ventSatclk: ElementFinder
    public carriedoutPurgeclk: ElementFinder
    public ApplianceTypesel: ElementFinder
    public ApplianceLocsel: ElementFinder
    public ApplCondnsel: ElementFinder
    public AppsafetoUse: ElementFinder
    public AllapplTested: ElementFinder
    public InstallPPMIDCaption: ElementFinder
    public PPMIDoffered: ElementFinder
    public PPMIDaccepted: ElementFinder
    public PPMIDLocsel: ElementFinder
    public PPMIDtoInstallsel: ElementFinder
    public SerialNoText: ElementFinder
    public EUIenableOK: ElementFinder
    public AssetsuccessOKclk: ElementFinder
    public InstallPPMIDNextSection: ElementFinder
    public PPMIDCommisioning: ElementFinder
    public sendmsgIHDPPMID: ElementFinder
    public awaitingresponsePPMID: ElementFinder
    public ReqSent: ElementFinder
    public PairAssettoComms: ElementFinder
    public PairingSuccess: ElementFinder
    public PPMIDSuccess: ElementFinder
    public gasmeterserialSendreg: ElementFinder;
    public PPMIDcommsuccessfulbtn: ElementFinder;
    public AssetaddedtoWallnewgas: ElementFinder;
    public PPMIDSubmit: ElementFinder;
    public DeviceBinding: ElementFinder;

    constructor() {

        this.pageHeaderText = element.all(by.xpath("//div[contains(@class,'header-text white tg ng-binding')]"));
        this.terminalScrewTightnessText = element(by.xpath("//*[contains(text(),'Terminal Screw Tightness Checked?')]"));
        this.terminalScrewTightnessCheckedTrueRadioOption = element(by.xpath("//label[@id='rb_TermSTi_y']"));
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
        this.addElecTestsNextBtn  = element(by.xpath("//button[@id='btn_Next_PostC']"));
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
        this.nationalGridGIJobRefTextfield = element(by.id("input1"));
        this.reportedIncidentToHAndSAIRLineTrueRadioOption = element(by.xpath("//*[@id='gtp3']/following-sibling::span[@class='outer']"));
        this.aIRLineRefTextfield = element(by.xpath("//*[@id='input2'][1]"));
        this.needToWaitForTheGTAttendanceOnSiteTrueRadioOption = element(by.xpath("//*[@id='gtp5']/following-sibling::span[@class='outer']"));
        this.gTResolveIssueTrueRadioOption = element(by.xpath("//*[@id='gtp9']/following-sibling::span[@class='outer']"));
        this.didYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption = element(by.xpath("//*[@id='gtp11']/following-sibling::span[@class='outer']"));
        this.additionalNotesTextfield = element(by.id("text1"));
        this.haveYouReplacedGasMeterTrueRadioOption = element(by.xpath("//*[@id='gtp13']/following-sibling::span[@class='outer']"));
        this.haveYouReplacedRegulatorTrueRadioOption = element(by.xpath("//*[@id='gtp15']/following-sibling::span[@class='outer']"));
        this.postInstallationGasTightnessTestPerformedTrueRadioOption = element(by.xpath("//*[@id='gtp17']/following-sibling::span[@class='outer']"));
        this.capturePhotoOfWitnessStickerAndUGaugeBtn = element(by.xpath("//*[@id='btn_CapPoTi_test']/button"));
        this.wasThereADropInPressureTrueRadioOption = element(by.xpath("//*[@id='gtp19']/following-sibling::span[@class='outer']"));
        this.enterDIPGasPressureDropDownMenu = element(by.xpath("//select[@id='select1']"));
        this.testWitnessNameTxtfieldPostInstallGasTightnessForm = element(by.xpath("//input[@id='input3']"));
        this.selectMeterTypeDropDownMenu = element(by.xpath("//select[@id='select2'][1]"));
        this.gasTightnessTestPassedTrueRadioOption = element(by.xpath("//*[@id='gtp21']/following-sibling::span[@class='outer']"));
        this.standingPressureTextfield = element(by.id("gaspoststandingpressure"));
        this.capturePhotoOfStandingPressureBtn = element(by.xpath("//*[@id='btn_CapStPr']/button"));
        this.workingPressureTextfield = element(by.id("gaspostworkingpressure"));
        this.capturePhotoOfWorkingPressureBtn = element(by.xpath("//div[@class='content-row ng-scope']//div[@class='content-row ng-scope']//div[@class='alignCenter']//button[@class='cameraBtn2line grey mandatoryWhite'][contains(text(),'CAPTURE')]"));
        this.postInstallGasTightnessTestNextBtn = element(by.xpath("//button[@id='btnNextPol']"));
        this.installKitNextSectionBtn = element(by.xpath("//button[@id='gasInstallPhoto_nextBtn']"));
        this.addAnotherAssetBtnInstallKitSection = element(by.xpath("//button[@id='gasInstallPhoto_addAssetBtn']"));
        this.gasApplianceSafetyChecksSectionText = element(by.xpath("//h4[contains(text(),'Gas Appliance Safety Checks')]"));

        //#region Install Comms Hub
        this.installcommsHub = element(by.xpath('//div/h4[text()="Install Comms Hub"]'));
        this.commshubReqY = element(by.xpath('//*[@id="chubInstall_newChubRequired_y"]/span[@class="outer"]'));
        this.selectValid = element(by.xpath('//select[@id="chubInstall_selectAsset"]'));
        this.chfIDokenable = element(by.xpath('(//*[contains(text(),"CHF ID:")])[1]'));
        this.commshubWarning = element(by.xpath('//*[text()="OK"]'));
        this.CHFIDText = element(by.xpath('//*[@id="chubInstall_CHbarcode"]'));
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


        this.clksendMsgXCHUB = element(by.xpath('//div/h4[text()="SEND MESSAGE XCHUB"]'));
        this.SendXCHUBbtn = element(by.xpath('//*[@id="xchub_sendMessageButton"]'));

        this.AwaitingRespXCHUB = element(by.xpath('//*[text()="Awaiting Response"]'));
        this.AwaitingReqSent = element(by.xpath('//*[text()="Request Sent Successfully"]'));
        this.AwaitingWhiteList = element(by.xpath('//*[text()="Whitelist transfer completed check LED indication is correct"]'));

        this.remvSuccessful = element(by.xpath('//*[@id="xchub_nextButton"]'));
        this.NewGasMeterDtls = element(by.xpath('//div/h4[text()="New Gas Meter Details"]'));

        this.selectValidnewgas = element(by.xpath('//select[@id="gasNewMeter_assetSelect"]'));
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
        this.NationalGridSend = element(by.id('input1'));
        this.HandSAirline = element(by.xpath('//*[@id="gtp3"]/following-sibling::span[@class="outer"]'));
        this.Airlineref1 = element(by.xpath('(//*[@id="input2"])[1]'));
        this.GTAttendenceOnsiteY = element(by.xpath('//*[@id="gtp5"]/following-sibling::span[@class="outer"]'));
        this.GTresolveIssueY = element(by.xpath('//*[@id="gtp9"]/following-sibling::span[@class="outer"]'));
        this.TightnessIssueY = element(by.xpath('//*[@id="gtp11"]/following-sibling::span[@class="outer"]'));
        // this.cappedgascooker = element(by.css('.ng-scope:nth-child(3) .chckbox'));
        this.cappedgascooker = element(by.xpath('(//*[@id="work[$index]"]/following-sibling::span[@class="outer"])[2]'));
        //this.cappedgascooker = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[2]'));
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
        this.standingPressure = element(by.id('gaspoststandingpressure'));
        this.cappostinstallationpressure = element(by.xpath('(//*[@id="btn_CapStPr"]/button)[1]'));
        this.workingPressure = element(by.id('gaspostworkingpressure'));
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
        this.Joinsareinit = element(by.xpath('//*[contains(text(),"Joins are being Initiated")]'));
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
    }

    public async isH1HeaderPresentInstallPage() {
        this.pageHeaderText.count().then(function (pageHeaderCount) {
            console.log("Install pageHeaderText exists, count = " + pageHeaderCount)
            assert.equal(pageHeaderCount, '1');
        });
    }

    public async clickOnCapturePhotosOfTerminalScrewsBtn() {
        await utility.wait(1000);
        if (this.capturePhotosOfTerminalScrewsBtn.isDisplayed()) {
            this.capturePhotosOfTerminalScrewsBtn.click();
        }
    }

    public async setTerminalScrewTightnessCheckedTrueRadioOption() {
        await this.terminalScrewTightnessCheckedTrueRadioOption.click();
        await utility.wait(1000);
    }

    public async setAllSealsIntactTrueRadioOption() {
        await utility.wait(1000);
        if (this.allSealsIntactTrueRadioOption.isDisplayed()) {
            this.allSealsIntactTrueRadioOption.click();
        }
    }

    public async setAllPortsSealedTrueRadioOption() {
        await utility.wait(1000);
        if (this.allPortsSealedTrueRadioOption.isDisplayed()) {
            this.allPortsSealedTrueRadioOption.click();
        }
    }

    public async setApprovedSiemensCableMarkersInstalledCorrectlyTrueRadioOption() {
        await utility.wait(1000);
        if (this.approvedSiemensCableMarkersInstalledCorrectlyTrueRadioOption.isDisplayed()) {
            this.approvedSiemensCableMarkersInstalledCorrectlyTrueRadioOption.click();
        }
    }

    public async setVisualInspectionCompletedTrueRadioOption() {
        await utility.wait(1000);
        if (this.visualInspectionCompletedTrueRadioOption.isDisplayed()) {
            this.visualInspectionCompletedTrueRadioOption.click();
        }
    }

    public async setCableMarkerVal1LNNLDropDownMenu() {
        await utility.wait(1000);
        if (this.cableMarkerDropdownMenu.isDisplayed()) {
            var select = this.cableMarkerDropdownMenu;
            select.$("[value='1']").click();
        }
    }

    public async setEarthTypeVal1DropDownMenu() {
        await utility.wait(1000);
        if (this.earthTypeDropdownMenu.isDisplayed()) {
            var select = this.earthTypeDropdownMenu;
            select.$("[value='1']").click();
        }
    }

    public async setReplacementMeterBoardTrueRadioOption() {
        await utility.wait(1000);
        if (this.replacementMeterBoardTrueRadioOption.isDisplayed()) {
            this.replacementMeterBoardTrueRadioOption.click();
        }
    }

    public async setMeterTailsChangedFalseRadioOption() {
        await utility.wait(1000);
        if (this.meterTailsChangedFalseRadioOption.isDisplayed()) {
            this.meterTailsChangedFalseRadioOption.click();
        }
    }

    public async setReplacedMainFuseTrueRadioOption() {
        await utility.wait(1000);
        if (this.replacedMainFuseTrueRadioOption.isDisplayed()) {
            this.replacedMainFuseTrueRadioOption.click();
        }
    }

    public async setEmergencyJobTrueRadioOption() {
        await utility.wait(1000);
        if (this.emergencyJobTrueRadioOption.isDisplayed()) {
            this.emergencyJobTrueRadioOption.click();
        }
    }

    public async clickOnAdditionalElectricityTestsNextBtn() {
        await utility.wait(1000);
        if (this.addElecTestsNextBtn.isDisplayed()) {
            this.addElecTestsNextBtn.click();
        }
    }

    public async validatePostInstallationChecksSectionIsVisible() {
        await utility.wait(1000);
        await this.postInstallationChecksText.getText().then(function (postInstallTxt) {
            console.log("Arrived at : " + postInstallTxt);
        });
    }

    public async setCarryOutPolarityCheckAtMeterTrueRadioOption() {
        await utility.wait(1000);
        if (this.carryOutPolarityCheckAtMeterTrueRadioOption.isDisplayed()) {
            this.carryOutPolarityCheckAtMeterTrueRadioOption.click();
        }
    }

    public async setCarryOutPolarityCheckWithPlugInTestDeviceDropDownMenu() {
        await utility.wait(1000);
        if (this.carryOutPolarityCheckWithPlugInTestDeviceDropDownMenu.isDisplayed()) {
            var select = this.carryOutPolarityCheckWithPlugInTestDeviceDropDownMenu;
            select.$("[value='true']").click();
        }
    }

    public async setConfirmSocketSafetyTestPassedTrueRadioOption() {
        await this.postInstallChecksAdditionalNotesTextfield.sendKeys("Polarity tested with plug in test device");
        await utility.wait(1000);
        if (this.confirmSocketSafetyTestPassedTrueRadioOption.isDisplayed()) {
            this.confirmSocketSafetyTestPassedTrueRadioOption.click();
        }
    }

    public async clickOnCapturePhotoOfMartindaleTestBtn() {
        await utility.wait(1000);
        if (this.capturePhotoOfMartindaleTestBtn.isDisplayed()) {
            this.capturePhotoOfMartindaleTestBtn.click();
        }
    }

    public async clickOnCapturePhotoOfFinalMeterInstallBtn() {
        await utility.wait(1000);
        if (this.capturePhotoOfFinalMeterInstallBtn.isDisplayed()) {
            this.capturePhotoOfFinalMeterInstallBtn.click();
        }
    }

    public async clickOnCapturePhotoOfCloseUpOfMeterBtn() {
        await utility.wait(1000);
        if (this.capturePhotoOfCloseUpOfMeterBtn.isDisplayed()) {
            this.capturePhotoOfCloseUpOfMeterBtn.click();
        }
    }

    public async setTestWitnessNameTextfield() {
        await utility.wait(1000);
        if (this.testWitnessNameTextfield.isDisplayed()) {
            this.testWitnessNameTextfield.sendKeys("Johny Vegas");
        }
    }

    public async validateCommissioningSectionIsVisible() {
        await utility.wait(1000);
        if (await this.commissioningText.isDisplayed()) {
            await this.commissioningText.getText().then(function (commissionTxt) {
                console.log("Arrived at : " + commissionTxt);
            });
        }
    }

    public async setInstallKitUsedTrueRadioOption() {
        await utility.wait(1000);
        if (this.installKitUsedTrueRadioOption.isDisplayed()) {
            this.installKitUsedTrueRadioOption.click();
        }
    }

    public async setNonSerialisedAssetsValT1AerialDropDownMenu() {
        await utility.wait(1000);
        if (this.assetDropDownMenu1.isDisplayed()) {
            var select = this.assetDropDownMenu1;
            select.$("[value='1']").click();
        }
    }

    public async setNonSerialisedAssetsValT1AerialDropDownMenuInstallKitForm() {
        await utility.wait(1000);
        if (this.assetDropDownMenu3.isDisplayed()) {
            var select = this.assetDropDownMenu3;
            select.$("[value='1']").click();
        }
    }

    public async setNonSerialisedAssetsValMeterBoardDropDownMenu() {
        await utility.wait(1000);
        if (this.assetDropDownMenu4.isDisplayed()) {
            var select = this.assetDropDownMenu4;
            select.$("[value='3']").click();
        }
    }

    public async setQuantityVal1Textfield() {
        await utility.wait(1000);
        if (this.quantityTextfield1.isDisplayed()) {
            this.quantityTextfield1.sendKeys("1");
        }
    }

    public async setQuantityVal1TextfieldInstallKitForm() {
        await utility.wait(1000);
        if (this.quantityTextfield3.isDisplayed()) {
            this.quantityTextfield3.sendKeys("1");
        }
    }

    public async clickOnAddAnotherAssetBtn() {
        await utility.wait(1000);
        if (await this.addAnotherAssetBtn.isDisplayed()) {
            await this.addAnotherAssetBtn.click();
        }
    }

    public async clickOnAddAnotherAssetBtnInstallKitSection() {
        await utility.wait(1000);
        if (await this.addAnotherAssetBtnInstallKitSection.isDisplayed()) {
            await this.addAnotherAssetBtnInstallKitSection.click();
        }
    }

    public async verifyThatANewRecordsetIsDynamicallyCreated() {
        await utility.wait(1000);
        assert(await this.assetDropDownMenu2.isDisplayed());
        assert(await this.quantityTextfield2.isDisplayed());
    }

    public async setNonSerialisedAssetsValConnectorBlocksDropDownMenu() {
        await utility.wait(1000);
        if (this.assetDropDownMenu2.isDisplayed()) {
            var select = this.assetDropDownMenu2;
            select.$("[value='3']").click();
        }
    }

    public async setQuantityVal2Textfield() {
        await utility.wait(1000);
        if (this.quantityTextfield2.isDisplayed()) {
            this.quantityTextfield2.sendKeys("2");
        }
    }

    public async setQuantityVal2TextfieldInstallKitForm() {
        await utility.wait(1000);
        if (this.quantityTextfield4.isDisplayed()) {
            this.quantityTextfield4.sendKeys("2");
        }
    }

    public async clickOnCommissioningNextSectionBtn() {
        await utility.wait(1000);
        if (await this.commissioningNextSectionBtn.isDisplayed()) {
            await this.commissioningNextSectionBtn.click();
        }
    }

    public async clickOnInstallKitNextSectionBtn() {
        await utility.wait(1000);
        if (await this.installKitNextSectionBtn.isDisplayed()) {
            await this.installKitNextSectionBtn.click();
        }
    }



//////////////////////////////////// POST INSTALLATION GAS TIGHTNESS TEST TST07

    public async validatePostInstallGasTightnessTestSectionIsVisible() {
        await utility.wait(1000);
        if (await this.postInstallationGasTightnessTestText.isDisplayed()) {
            await this.postInstallationGasTightnessTestText.getText().then(function (postInstGassTightTxt) {
                console.log("Arrived at : " + postInstGassTightTxt);
            });
        }
    }

    public async setDidYouHaveToContactGTTrueRadioOption() {
        await utility.wait(1000);
        if (this.didYouHaveToContactGTTrueRadioOption.isDisplayed()) {
            this.didYouHaveToContactGTTrueRadioOption.click();
        }
    }

    public async setNationalGridGIJobRefVal1Textfield() {
        await utility.wait(1000);
        if (this.nationalGridGIJobRefTextfield.isDisplayed()) {
            this.nationalGridGIJobRefTextfield.sendKeys("2");
        }
    }

    public async setReportedIncidentToHAndSAIRLineTrueRadioOption() {
        await utility.wait(1000);
        if (this.reportedIncidentToHAndSAIRLineTrueRadioOption.isDisplayed()) {
            this.reportedIncidentToHAndSAIRLineTrueRadioOption.click();
        }
    }

    public async setAIRLineRefTextfieldVal2() {
        await utility.wait(1000);
        if (this.aIRLineRefTextfield.isDisplayed()) {
            this.aIRLineRefTextfield.sendKeys("2");
        }
    }

    public async setNeedToWaitForTheGTAttendanceOnSiteTrueRadioOption() {
        await utility.wait(1000);
        if (this.needToWaitForTheGTAttendanceOnSiteTrueRadioOption.isDisplayed()) {
            this.needToWaitForTheGTAttendanceOnSiteTrueRadioOption.click();
        }
    }

    public async setGTResolveIssueTrueRadioOption() {
        await utility.wait(1000);
        if (this.gTResolveIssueTrueRadioOption.isDisplayed()) {
            this.gTResolveIssueTrueRadioOption.click();
        }
    }

    public async setDidYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption() {
        await utility.wait(1000);
        if (this.didYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption.isDisplayed()) {
            this.didYouCarryOutAnyExtraWorkToPassGasTightnessTestTrueRadioOption.click();
        }
    }

    public async setExtraNotesValGasNotesTextfield() {
        await utility.wait(1000);
        if (this.additionalNotesTextfield.isDisplayed()) {
            this.additionalNotesTextfield.sendKeys("2");
        }
    }

    public async setHaveYouReplacedGasMeterTrueRadioOption() {
        await utility.wait(1000);
        if (this.haveYouReplacedGasMeterTrueRadioOption.isDisplayed()) {
            this.haveYouReplacedGasMeterTrueRadioOption.click();
        }
    }

    public async setHaveYouReplacedRegulatorTrueRadioOption() {
        await utility.wait(1000);
        if (this.haveYouReplacedRegulatorTrueRadioOption.isDisplayed()) {
            this.haveYouReplacedRegulatorTrueRadioOption.click();
        }
    }

    public async setPostInstallationGasTightnessTestPerformedTrueRadioOption() {
        await utility.wait(1000);
        if (this.postInstallationGasTightnessTestPerformedTrueRadioOption.isDisplayed()) {
            this.postInstallationGasTightnessTestPerformedTrueRadioOption.click();
        }
    }

    public async clickOnCapturePhotoOfWitnessStickerAndUGaugeBtn() {
        await utility.wait(1000);
        if (await this.capturePhotoOfWitnessStickerAndUGaugeBtn.isDisplayed()) {
            await this.capturePhotoOfWitnessStickerAndUGaugeBtn.click();
        }
    }

    public async setWasThereADropInPressureTrueRadioOption() {
        await utility.wait(1000);
        if (this.wasThereADropInPressureTrueRadioOption.isDisplayed()) {
            this.wasThereADropInPressureTrueRadioOption.click();
        }
    }

    public async setDIPGasPressureDropDownMenu() {
        await utility.wait(1000);
        if (await this.enterDIPGasPressureDropDownMenu.isDisplayed()) {
            var select = this.enterDIPGasPressureDropDownMenu;
            select.$('[value="3"]').click();
        }
    }

    public async setSelectMeterTypValG4054DropDownMenu() {
        await utility.wait(1000);
        if (this.selectMeterTypeDropDownMenu.isDisplayed()) {
            var select = this.selectMeterTypeDropDownMenu;
            select.$("[value='3']").click();
        }
    }

    public async setGasTightnessTestPassedTrueRadioOption() {
        await utility.wait(1000);
        if (this.gasTightnessTestPassedTrueRadioOption.isDisplayed()) {
            this.gasTightnessTestPassedTrueRadioOption.click();
        }
    }

    public async setTestWitnessNameValEllieTaylorTextfield() {
        await utility.wait(1000);
        if (this.testWitnessNameTxtfieldPostInstallGasTightnessForm.isDisplayed()) {
            this.testWitnessNameTxtfieldPostInstallGasTightnessForm.sendKeys("Ellie Taylor");
        }
    }

    public async setStandingPressureVal11Textfield() {
        await utility.wait(1000);
        if (this.standingPressureTextfield.isDisplayed()) {
            this.standingPressureTextfield.sendKeys("2");
        }
    }

    public async clickOnCapturePhotoOfStandingPressureBtn() {
        await utility.wait(1000);
        if (await this.capturePhotoOfStandingPressureBtn.isDisplayed()) {
            await this.capturePhotoOfStandingPressureBtn.click();
        }
    }

    public async setWorkingPressureVal20Textfield() {
        await utility.wait(1000);
        if (this.workingPressureTextfield.isDisplayed()) {
            this.workingPressureTextfield.sendKeys("2");
        }
    }

    public async clickOnCapturePhotoOfWorkingPressureBtn() {
        await utility.wait(1000);
        if (await this.capturePhotoOfWorkingPressureBtn.isDisplayed()) {
            await this.capturePhotoOfWorkingPressureBtn.click();
        }
    }

    public async clickOnCapturePhotoOfFinalMeterInstallButton() {
        await utility.wait(1000);
        if (await this.capturePhotoOfFinalMeterInstallBtn2.isDisplayed()) {
            await this.capturePhotoOfFinalMeterInstallBtn2.click();
        }
    }

    public async clickOnPostInstallGasTightnessTestNextBtn() {
        await utility.wait(1000);
        if (await this.postInstallGasTightnessTestNextBtn.isDisplayed()) {
            await this.postInstallGasTightnessTestNextBtn.click();
        }
    }

    public async validateGasApplianceSafetyChecksSectionIsVisible() {
        await utility.wait(1000);
        if (await this.gasApplianceSafetyChecksSectionText.isDisplayed()) {
            await this.gasApplianceSafetyChecksSectionText.getText().then(function (gasApplianceSafetyTxt) {
                console.log("Arrived at : " + gasApplianceSafetyTxt);
            });
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////


    public async dummy() {
        await this.installdelete.click();
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async InstallCommsHubSection() {
        await utility.wait(1000);
        await this.installcommsHub.getText().then(function (installcommsHubTxt) {
            console.log("Install comms Hub  " + installcommsHubTxt);
        });
    }

    public async fillfieldsInstallcommshub() {
        await utility.wait(1000);
        if (await this.commshubReqY.isDisplayed()) {
            await this.commshubReqY.click();
        }
        await utility.wait(1000);
        if (await this.selectValid.isDisplayed()) {
            var select = this.selectValid;
            select.$('[value="1C0000AA00110041"]').click();
        }
        await utility.wait(1000);
        if (await this.commshubWarning.isDisplayed()) {
            await this.commshubWarning.click();
        }
        await utility.wait(1000);
        if (await this.CHFIDText.isDisplayed()) {
            await this.CHFIDText.clear();
            await this.CHFIDText.sendKeys("1C0000AA00110041");
        }
        await utility.wait(1000);
        if (await this.chfIDokenable.isDisplayed()) {
            await this.chfIDokenable.click();
        }
        await utility.wait(1000);
        if (await this.assetSuccessAdded.isDisplayed()) {
            await this.assetSuccessAdded.click();
        }
        await utility.wait(1000);
        if (await this.commsHubLocation.isDisplayed()) {
            var select = this.commsHubLocation;
            select.$('[value="A"]').click();
        }
        await utility.wait(1000);
        if (await this.aerialY.isDisplayed()) {
            await this.aerialY.click();
        }
        await utility.wait(1000);
        if (await this.commshubconnmethodselect.isDisplayed()) {
            var select = this.commshubconnmethodselect;
            select.$('[value="3"]').click();
        }
        await utility.wait(1000);
        if (await this.commshubPhoto.isDisplayed()) {
            await this.commshubPhoto.click();
        }
        await utility.wait(1000);
        if (await this.instCommshubNext.isDisplayed()) {
            await this.instCommshubNext.click();
        }

    }

    public async sendmsgXCHUB() {
        await utility.wait(1000);
        await this.clksendMsgXCHUB.getText().then(function (sendmsgXCHUBTxt) {
            console.log("Send message XCHUB " + sendmsgXCHUBTxt);
        });
    }

    public async clicksendmsgXCHUB() {
        await utility.wait(1000);
        if (await this.SendXCHUBbtn.isDisplayed()) {
            await this.SendXCHUBbtn.click();
        }

    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async SeeAwaitingresp() {
        await utility.wait(1000);
        await this.AwaitingRespXCHUB.getText().then(function (AwaitingRespXCHUBTxt) {
            console.log("Awaiting Response for XCHUB " + AwaitingRespXCHUBTxt);
        });
    }

    public async waitforthebuttontoDisappear() {
        await utility.wait(50000);
    }

    public async Remosuccessful() {
        await utility.wait(1000);
        await expect(this.remvSuccessful.isDisplayed());
    }

    public async reqsentMsg() {
        await utility.wait(1000);
        await expect(this.AwaitingReqSent.isDisplayed());
    }

    public async LEDindication() {
        await utility.wait(1000);
        await expect(this.AwaitingWhiteList.isDisplayed());
    }

    public async Remsuccessdisplayed() {
        await utility.wait(1000);
        await this.remvSuccessful.getText().then(function (remvSuccessfulTxt) {
            console.log("Removed Successfully " + remvSuccessfulTxt);
        });
    }

    public async clickonremsuccess() {
        await utility.wait(1000);
        if (await this.remvSuccessful.isDisplayed()) {
            await this.remvSuccessful.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async newregulator() {
        await utility.wait(1000);
        await this.newRegulator.getText().then(function (newRegulatorTxt) {
            console.log("New Regulator: " + newRegulatorTxt);
        });
    }

    public async fillthefieldsfornewregulator() {
        await utility.wait(1000);
        if (await this.HasGasRegulatorReplacedY.isDisplayed()) {
            await this.HasGasRegulatorReplacedY.click();
        }
        await utility.wait(1000);
        if (await this.selectValidAssettoInst.isDisplayed()) {
            var select = this.selectValidAssettoInst;
            select.$('[value="MA6NC000000003"]').click();
        }
        await utility.wait(1000);
        if (await this.gasmeterserialSendreg.isDisplayed()) {
            await this.gasmeterserialSendreg.clear();
            await this.gasmeterserialSendreg.sendKeys("MA6NC000000003");
        }
        await utility.wait(1000);
        if (await this.RegularclickenableOK.isDisplayed()) {
            await this.RegularclickenableOK.click();
        }
        await utility.wait(1000);
        if (await this.AssetaddedtowallNewReg.isDisplayed()) {
            await this.AssetaddedtowallNewReg.click();
        }
        await utility.wait(1000);
        if (await this.nextSecnewRegulator.isDisplayed()) {
            await this.nextSecnewRegulator.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async gasMeterdetails() {
        await utility.wait(1000);
        await this.NewGasMeterDtls.getText().then(function (NewGasMeterDtlsTxt) {
            console.log("New Gas Meter Details " + NewGasMeterDtlsTxt);
        });
    }

    public async fillthefieldsfornewgasmeterdtls() {
        await utility.wait(1000);
        if (await this.selectValidnewgas.isDisplayed()) {
            var select = this.selectValidnewgas;
            select.$('[value="G4P00000000029"]').click();
        }
        await utility.wait(1000);
        if (await this.gasmeterserialSend.isDisplayed()) {
            await this.gasmeterserialSend.clear();
            await this.gasmeterserialSend.sendKeys("G4P00000000029");
        }
        await utility.wait(1000);
        if (await this.Gas_Meter_Txt.isDisplayed()) {
            await this.Gas_Meter_Txt.click();
        }
        await utility.wait(1000);
        if (await this.AssetaddedtoWallnewgas.isDisplayed()) {
            await this.AssetaddedtoWallnewgas.click();
        }
        await utility.wait(1000);
        if (await this.GasnewMeterSelect.isDisplayed()) {
            var select = this.GasnewMeterSelect;
            select.$('[value="0"]').click();
        }
        await utility.wait(1000);
        if (await this.GasnewMeternewLocation.isDisplayed()) {
            var select = this.GasnewMeternewLocation;
            select.$('[value="12"]').click();
        }
        await utility.wait(1000);
        if (await this.nextSecnewgasMeter.isDisplayed()) {
            await this.nextSecnewgasMeter.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async gasinitialmeterreading() {
        await utility.wait(1000);
        await this.GasInitialmeterReading.getText().then(function (GasInitialmeterReadingTxt) {
            console.log("Gas Meter Reading " + GasInitialmeterReadingTxt);
        });
    }

    public async fillthefieldsforinitmeterReading() {
        await utility.wait(1000);
        if (await this.captureMeterReadingSend.isDisplayed()) {
            await this.captureMeterReadingSend.clear();
            await this.captureMeterReadingSend.sendKeys("12345");
        }
        await utility.wait(1000);
        if (await this.CaptureMeterReadingenableok.isDisplayed()) {
            await this.CaptureMeterReadingenableok.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async installkitSec() {
        await utility.wait(1000);
        await this.InstKitCaption.getText().then(function (InstKitCaptionTxt) {
            console.log("Install Kit " + InstKitCaptionTxt);
        });
    }

    public async fillthedetailsforinstallkit() {
        await utility.wait(2000);
        if (await this.InstallkitUsedY.isDisplayed()) {
            await this.InstallkitUsedY.click();
        }
        await utility.wait(1000);
        if (await this.NonserializedassetSel.isDisplayed()) {
            var select = this.NonserializedassetSel;
            select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.T1Aerialinput.isDisplayed()) {
            await this.T1Aerialinput.clear();
            await this.T1Aerialinput.sendKeys("1");
        }
        await utility.wait(2000);
        if (await this.Addanotherset.isDisplayed()) {
            await this.Addanotherset.click();
        }
        await utility.wait(1000);
        if (await this.NonserializedassetSel2.isDisplayed()) {
            var select = this.NonserializedassetSel2;
            select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.T1Aerialinput1.isDisplayed()) {
            await this.T1Aerialinput1.clear();
            await this.T1Aerialinput1.sendKeys("2");
        }
        await utility.wait(1000);
        if (await this.InstallKitNextSection.isDisplayed()) {
            await this.InstallKitNextSection.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async performpostinst() {
        await utility.wait(1000);
        await this.postInstCaption.getText().then(function (postInstCaptionTxt) {
            console.log("Post Installation Kit " + postInstCaptionTxt);
        });
    }

    public async fillthefieldsforperformpostinst() {
        await utility.wait(2000);
        if (await this.ContactGTY.isDisplayed()) {
            await this.ContactGTY.click();
        }
        await utility.wait(1000);
        if (await this.NationalGridSend.isDisplayed()) {
            await this.NationalGridSend.clear();
            await this.NationalGridSend.sendKeys("1");
        }
        await utility.wait(2000);
        if (await this.HandSAirline.isDisplayed()) {
            await this.HandSAirline.click();
        }
        await utility.wait(1000);
        if (await this.Airlineref1.isDisplayed()) {
            await this.Airlineref1.clear();
            await this.Airlineref1.sendKeys("2");
        }
        await utility.wait(2000);
        if (await this.GTAttendenceOnsiteY.isDisplayed()) {
            await this.GTAttendenceOnsiteY.click();
        }
        await utility.wait(2000);
        if (await this.GTresolveIssueY.isDisplayed()) {
            await this.GTresolveIssueY.click();
        }
        await utility.wait(2000);
        if (await this.TightnessIssueY.isDisplayed()) {
            await this.TightnessIssueY.click();
        }
        await utility.wait(2000);
        if (await this.cappedgascooker.isDisplayed()) {
            await this.cappedgascooker.click();
        }
        await utility.wait(1000);
        if (await this.addnlnote.isDisplayed()) {
            await this.addnlnote.clear();
            await this.addnlnote.sendKeys("Gas Notes");
        }
        await utility.wait(2000);
        if (await this.ReplacedGasMeterY.isDisplayed()) {
            await this.ReplacedGasMeterY.click();
        }
        await utility.wait(2000);
        if (await this.ReplacedGasregulatorY.isDisplayed()) {
            await this.ReplacedGasregulatorY.click();
        }
        await utility.wait(2000);
        if (await this.TightnessperformedY.isDisplayed()) {
            await this.TightnessperformedY.click();
        }
        await utility.wait(2000);
        if (await this.cappostinstallation.isDisplayed()) {
            await this.cappostinstallation.click();
        }
        await utility.wait(2000);
        if (await this.Dropinpressure.isDisplayed()) {
            await this.Dropinpressure.click();
        }
        await utility.wait(1000);
        if (await this.dropinpressureselect.isDisplayed()) {
            var select = this.dropinpressureselect;
            select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.selectMeterType.isDisplayed()) {
            var select = this.selectMeterType;
            select.$('[value="2"]').click();
        }
        await utility.wait(2000);
        if (await this.GasTightnessPassed.isDisplayed()) {
            await this.GasTightnessPassed.click();
        }
        await utility.wait(1000);
        if (await this.TestWitness.isDisplayed()) {
            await this.TestWitness.clear();
            await this.TestWitness.sendKeys("Ellie Taylor");
        }
        await utility.wait(1000);
        if (await this.standingPressure.isDisplayed()) {
            await this.standingPressure.clear();
            await this.standingPressure.sendKeys("1.1");
        }
        await utility.wait(2000);
        if (await this.cappostinstallationpressure.isDisplayed()) {
            await this.cappostinstallationpressure.click();
        }
        await utility.wait(1000);
        if (await this.workingPressure.isDisplayed()) {
            await this.workingPressure.clear();
            await this.workingPressure.sendKeys("1.5");
        }
        await utility.wait(2000);
        if (await this.captureworkingPressure.isDisplayed()) {
            await this.captureworkingPressure.click();
        }
        await utility.wait(2000);
        if (await this.captureFinalMeterInstall.isDisplayed()) {
            await this.captureFinalMeterInstall.click();
        }
        await utility.wait(2000);
        if (await this.MsgreqDCC.isDisplayed()) {
            await this.MsgreqDCC.click();
        }
        await utility.wait(2000);
        if (await this.hubconnectdtoWAN.isDisplayed()) {
            await this.hubconnectdtoWAN.click();
        }
        await utility.wait(2000);
        if (await this.PostinstallNext.isDisplayed()) {
            await this.PostinstallNext.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async gasInstallCommisioning() {
        await utility.wait(1000);
        await this.gasInstallcommisioningcaption.getText().then(function (gasInstallcommisioningcaptionTxt) {
            console.log("Gas Install Commisioning " + gasInstallcommisioningcaptionTxt);
        });

    }

    public async sendMesgGICOM() {
        await utility.wait(2000);
        if (await this.sendMsgGICOM.isDisplayed()) {
            await this.sendMsgGICOM.click();
        }
    }

    public async Awatingforgasinstallcommisioning() {
        await expect(this.awaitingresponse.isPresent());
    }

    public async waitforthebuttoDisappear() {
        await utility.wait(50000);
    }

    public async commisioningsuccess() {
        await utility.wait(1000);
        await expect(this.commisioningSuccessful.isDisplayed());
    }

    public async reqsentsuccess() {

        await utility.wait(1000);
        await expect(this.reqsentSuccess.isDisplayed());
    }

    public async pairAsset() {
        await utility.wait(1000);
        await expect(this.pairAssettocommsHub.isDisplayed());
    }

    public async DCCHandover() {
        await utility.wait(1000);
        await expect(this.DCChandover.isDisplayed());
    }

    public async DeviceClock() {
        await utility.wait(1000);
        await expect(this.DeviceClk.isDisplayed());
    }

    public async MprnGSME() {
        await utility.wait(1000);
        await expect(this.MPRNsetconfig.isDisplayed());
    }

    public async DCCforGPFdevice() {
        await utility.wait(1000);
        await expect(this.DCCGPFdevice.isDisplayed());
    }

    public async joinsarebeingInit() {
        await utility.wait(1000);
    }

    public async commisioningSuc() {
        await utility.wait(1000);
        await expect(this.commisioningSuccessful.isDisplayed());
    }

    public async clickonCommissioning() {
        await utility.wait(2000);
        if (await this.commisioningSuccessful.isDisplayed()) {
            await this.commisioningSuccessful.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async gasApplicancesafety() {
        await utility.wait(1000);
        await this.GasApplianceSafetychk.getText().then(function (GasApplianceSafetychkTxt) {
            console.log("Gas Safety Check " + GasApplianceSafetychkTxt);
        });
    }

    public async fillthefieldsforgasApplicancesafety() {
        await utility.wait(2000);
        if (await this.earthBondingInstclk.isDisplayed()) {
            await this.earthBondingInstclk.click();
        }
        await utility.wait(2000);
        if (await this.LandlordPropclk.isDisplayed()) {
            await this.LandlordPropclk.click();
        }
        await utility.wait(1000);
        if (await this.Addresssend.isDisplayed()) {
            await this.Addresssend.clear();
            await this.Addresssend.sendKeys("1");
        }
        await utility.wait(2000);
        if (await this.AddApplianceclk.isDisplayed()) {
            await this.AddApplianceclk.click();
        }
        await utility.wait(1000);
        if (await this.FlueTypesel.isDisplayed()) {
            var select = this.FlueTypesel;
            select.$('[value="0"]').click();
        }
        await utility.wait(2000);
        if (await this.ventSatclk.isDisplayed()) {
            await this.ventSatclk.click();
        }
        await utility.wait(2000);
        if (await this.carriedoutPurgeclk.isDisplayed()) {
            await this.carriedoutPurgeclk.click();
        }
        await utility.wait(1000);
        if (await this.ApplianceTypesel.isDisplayed()) {
            var select = this.ApplianceTypesel;
            select.$('[value="0"]').click();
        }
        await utility.wait(1000);
        if (await this.ApplianceLocsel.isDisplayed()) {
            var select = this.ApplianceLocsel;
            select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.ApplCondnsel.isDisplayed()) {
            var select = this.ApplCondnsel;
            select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.AppsafetoUse.isDisplayed()) {
            await this.AppsafetoUse.click();
        }
        await utility.wait(1000);
        if (await this.AllapplTested.isDisplayed()) {
            await this.AllapplTested.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async seePPMIDsection() {
        await utility.wait(1000);
        await this.InstallPPMIDCaption.getText().then(function (InstallPPMIDCaptionTxt) {
            console.log("Install PPMID Caption " + InstallPPMIDCaptionTxt);
        });
    }

    public async fillthefieldsforseePPMIDsection() {
        await utility.wait(2000);
        if (await this.PPMIDoffered.isDisplayed()) {
            await this.PPMIDoffered.click();
        }
        await utility.wait(2000);
        if (await this.PPMIDaccepted.isDisplayed()) {
            await this.PPMIDaccepted.click();
        }
        await utility.wait(1000);
        if (await this.PPMIDLocsel.isDisplayed()) {
            var select = this.PPMIDLocsel;
            select.$('[value="A"]').click();
        }

        await utility.wait(1000);
        if (await this.PPMIDtoInstallsel.isDisplayed()) {
            var select = this.PPMIDtoInstallsel;
            select.$('[value="2C12345000000005"]').click();
        }
        await utility.wait(1000);
        if (await this.SerialNoText.isDisplayed()) {
            await this.SerialNoText.clear();
            await this.SerialNoText.sendKeys("2C12345000000005");
        }
        await utility.wait(2000);
        if (await this.EUIenableOK.isDisplayed()) {
            await this.EUIenableOK.click();
        }
        await utility.wait(2000);
        if (await this.AssetsuccessOKclk.isDisplayed()) {
            await this.AssetsuccessOKclk.click();
        }
        await utility.wait(2000);
        if (await this.InstallPPMIDNextSection.isDisplayed()) {
            await this.InstallPPMIDNextSection.click();
        }
    }

    /**
     * @Author Jansi Victor
     * @Description UAT Automation for FAULTY18 Workflow
     */
    public async SeePPMIDcommisioning() {
        await utility.wait(2000);
        await this.PPMIDCommisioning.getText().then(function (PPMIDCommisioningTxt) {
            console.log("PPMID Commisioning " + PPMIDCommisioningTxt);
        });
    }

    public async clickonIHDPPMID() {
        await utility.wait(2000);
        if (await this.sendmsgIHDPPMID.isDisplayed()) {
            await this.sendmsgIHDPPMID.click();
        }
    }

    public async AwaitingrespaftPPMID() {
        await utility.wait(2000);
        await expect(this.awaitingresponsePPMID.isDisplayed());
    }

    public async waitforthebuttontoDisappearafterppmid() {
        await utility.wait(60000);
    }

    public async ppmidsuccessbtn() {
        await utility.wait(2000);
        await expect(this.PPMIDcommsuccessfulbtn.isPresent());
    }

    public async reqsentsuctxt() {
        await utility.wait(2000);
        await expect(this.ReqSent.isDisplayed());
    }

    public async pairAssettoComms() {
        await utility.wait(2000);
        await expect(this.PairAssettoComms.isDisplayed());
    }

    public async pairingsuccessfulppmidcomm() {
        await utility.wait(2000);
        await expect(this.PairingSuccess.isDisplayed());
    }

    public async clickonSUBbtn() {
        await utility.wait(2000);
        if (await this.PPMIDcommsuccessfulbtn.isDisplayed()) {
            await this.PPMIDcommsuccessfulbtn.click();
        }
        await utility.wait(2000);
        if (await this.PPMIDSubmit.isDisplayed()) {
            await this.PPMIDSubmit.click();
        }
    }

    public async deviceBindingandCommisioning() {
        await utility.wait(2000);
        if (await this.DeviceBinding.isDisplayed()) {
            await this.DeviceBinding.click();
        }
    }

    //FLTY18-Electric Faulty Changes

    public async fillfieldsElecInstallcommshub() {
        await utility.wait(1000);
        if (await this.commshubReqY.isDisplayed()) {
            await this.commshubReqY.click();
        }
        await utility.wait(1000);
        if (await this.selectValid.isDisplayed()) {
            var select = this.selectValid;
            select.$('[value="1C0000AA00110016"]').click();
        }
        await utility.wait(1000);
        if (await this.commshubWarning.isDisplayed()) {
            await this.commshubWarning.click();
        }
        await utility.wait(1000);
        if (await this.CHFIDText.isDisplayed()) {
            await this.CHFIDText.clear();
            await this.CHFIDText.sendKeys("1C0000AA00110016");
        }
        await utility.wait(1000);
        if (await this.chfIDokenable.isDisplayed()) {
            await this.chfIDokenable.click();
        }
        await utility.wait(1000);
        if (await this.assetSuccessAdded.isDisplayed()) {
            await this.assetSuccessAdded.click();
        }
        await utility.wait(1000);
        if (await this.commsHubLocation.isDisplayed()) {
            var select = this.commsHubLocation;
            select.$('[value="A"]').click();
        }
        await utility.wait(1000);
        if (await this.aerialY.isDisplayed()) {
            await this.aerialY.click();
        }
        await utility.wait(1000);
        if (await this.commshubconnmethodselect.isDisplayed()) {
            var select = this.commshubconnmethodselect;
            select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if (await this.commshubPhoto.isDisplayed()) {
            await this.commshubPhoto.click();
        }
        await utility.wait(1000);
        if (await this.instCommshubNext.isDisplayed()) {
            await this.instCommshubNext.click();
        }

    }
}