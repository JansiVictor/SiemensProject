/**
  * @Author Jansi Victor
  * @Description UAT Automation for FAULTY18 Workflow
*/
import { element, by, ElementFinder, ElementArrayFinder, browser } from "protractor";
const { Given, When, Then } = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
import { Utility } from "../support/utility";
import { watchFile } from "fs";
const utility: Utility = new Utility();

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
    public EUIenableOKTRAD: ElementFinder;

    constructor() {

        //#region Install Comms Hub
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

        this.selectValidAssettoInst1 = element(by.xpath('(//select[@ng-model="scp.selectedAsset"])[3]'));
        this.gasmeterserialSendregList = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[3])/option)[2]'));
        this.gasmeterserialSendregList1 = element(by.xpath('(((//select[@ng-model="scp.selectedAsset"])[2])/option)[2]'));

        this.CaptureMeterReadingenableok1 = element(by.xpath('(//*[contains(text(),"Capture Meter Reading - Register (null)")])[2]'));
        this.EUIenableOK1 = element(by.xpath('(//*[contains(text(),"EUI Device ID:")])[3]'));
        this.EUIenableOKTRAD = element(by.xpath('//*[contains(text(),"EUI Device ID:")]'));

    }
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
    public async fillfieldsInstallcommshub(index: number) {
        await utility.wait(1000);
        if (await this.commshubReqY.isDisplayed()) {
            await this.commshubReqY.click();
        }
        if (await this.selectValid.isDisplayed()) {
            await utility.wait(2000);
            this.selectValid.click();
            browser.sleep(1000);
            console.log("Selecting element based index : " + index);
            await this.selectValid.element(by.css("option:nth-child(" + index + ")")).click();
            await utility.wait(3000);
            await this.commshubWarning.click();
            await utility.wait(3000);
            await expect(await this.CHFIDText.isPresent());
            var options = this.CHFIDTextList.getAttribute('value');
            await this.CHFIDText.sendKeys(options);
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
    public async fillthefieldsfornewregulator(index: number) {
        await utility.wait(1000);
        if (await this.HasGasRegulatorReplacedY.isDisplayed()) {
            await this.HasGasRegulatorReplacedY.click();
        }
        await utility.wait(1000);
        if (await this.selectValidAssettoInst.isDisplayed()) {
            var select = this.selectValidAssettoInst;
            select.$('[value="MA6NC181323805"]').click();
        }
        await utility.wait(1000);
        if (await this.gasmeterserialSendreg.isDisplayed()) {
            await this.gasmeterserialSendreg.clear();
            await this.gasmeterserialSendreg.sendKeys("MA6NC181323805");
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

    public async fillthefieldsfornewgasmeterdtls(index: number) {
        if (await this.selectValidnewgas.isDisplayed()) {
            await utility.wait(2000);
            this.selectValidnewgas.click();
            browser.sleep(1000);
            console.log("Selecting element based index : " + index);
            // select the option
            await this.selectValidnewgas.element(by.css("option:nth-child(" + index + ")")).click();
            await utility.wait(3000);
            await expect(await this.gasmeterserialSend.isPresent());
            var options = this.selectValidnewgasList.getAttribute('value');
            await this.gasmeterserialSend.sendKeys(options);
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
        await utility.wait(2000);
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
        try {
            await utility.wait(1000);
            await expect(this.pairAssettocommsHub.isDisplayed());
        } catch (error) {
            console.log("First element is used");
        }
    }
    public async DCCHandoverText() {
        try {
            await utility.wait(1000);
            await expect(this.DCChandover1.isDisplayed());
        } catch (error) {
            console.log("First element is used");
        }
    }
    public async DeviceClock() {
        try {
            await utility.wait(1000);
            await expect(this.DeviceClk.isDisplayed());
        } catch (error) {
            console.log("First element is used");
        }
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
        await utility.wait(2000);
        if (await this.Addresssend.isDisplayed()) {
            await this.Addresssend.clear();
            await this.Addresssend.sendKeys("1");
        }
        await utility.wait(2000);
        if (await this.AddApplianceclk.isDisplayed()) {
            await this.AddApplianceclk.click();
        }
        await utility.wait(2000);
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
        await utility.wait(2000);
        if (await this.ApplianceTypesel.isDisplayed()) {
            var select = this.ApplianceTypesel;
            select.$('[value="0"]').click();
        }
        await utility.wait(2000);
        if (await this.ApplianceLocsel.isDisplayed()) {
            var select = this.ApplianceLocsel;
            select.$('[value="1"]').click();
        }
        await utility.wait(2000);
        if (await this.ApplCondnsel.isDisplayed()) {
            var select = this.ApplCondnsel;
            select.$('[value="2"]').click();
        }
        await utility.wait(2000);
        if (await this.AppsafetoUse.isDisplayed()) {
            await this.AppsafetoUse.click();
        }
        await utility.wait(2000);
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
    public async fillthefieldsforseePPMIDsection(index: number) {
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
        await utility.wait(2000);
        if (await this.PPMIDtoInstallsel.isDisplayed()) {
            await utility.wait(2000);
            this.PPMIDtoInstallsel.click();
            browser.sleep(1000);
            console.log("Selecting element based index : " + index);
            await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
            await utility.wait(3000);
            await expect(await this.SerialNoText.isPresent());
            var options = this.PPMIDtoInstallselList.getAttribute('value');
            await this.SerialNoText.sendKeys(options);
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
        try {
            await utility.wait(2000);
            await expect(this.Pairingsuccessful.isDisplayed());
        } catch (error) {
            console.log("First element is used");
        }
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

    //FLTY18-Electric Faul
    public async fillfieldsElecInstallcommshub(index: number) {
        await utility.wait(1000);
        if (await this.commshubReqY.isDisplayed()) {
            await this.commshubReqY.click();
        }
        if (await this.selectValid.isDisplayed()) {
            await utility.wait(2000);
            this.selectValid.click();
            browser.sleep(1000);
            console.log("Selecting element based index : " + index);
            await this.selectValid.element(by.css("option:nth-child(" + index + ")")).click();
            await utility.wait(3000);
            await this.commshubWarning.click();
            await utility.wait(3000);
            await expect(await this.CHFIDText.isPresent());
            var options = this.CHFIDTextList.getAttribute('value');
            await this.CHFIDText.sendKeys(options);
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
    //FLTY20 Changes
    public async DuelNewMeterDetails() {
        await utility.wait(2000);
        await this.NewMeterDtls.getText().then(function (NewMeterDtlsTxt) {
            console.log("New Meter Details " + NewMeterDtlsTxt);
        });
    }

    public async fillDuelNewMeterDetails(index: number) {
        if (await this.elecNewmeterselect.isDisplayed()) {
            await utility.wait(2000);
            this.elecNewmeterselect.click();
            browser.sleep(1000);
            console.log("Selecting element based index : " + index);
            await this.elecNewmeterselect.element(by.css("option:nth-child(" + index + ")")).click();
            await utility.wait(3000);
            await expect(await this.elecNewmeterserial.isPresent());
            var options = this.elecNewmeterserialList.getAttribute('value');
            await this.elecNewmeterserial.sendKeys(options);
        }
        await utility.wait(1000);
        if (await this.EUIdeviceIDenableOK.isDisplayed()) {
            await this.EUIdeviceIDenableOK.click();
        }
        await utility.wait(1000);
        if (await this.clkokEUIdev.isDisplayed()) {
            await this.clkokEUIdev.click();
        }
        await utility.wait(1000);
        await expect(this.Manufacturerletter.isDisplayed());
    }
    public async DuelManufacturerdetails() {
        await utility.wait(1000);
        await expect(this.Manufacturerletter.isDisplayed());
    }
    public async fill33DuelManufacturerdetails() {
        await utility.wait(1000);
        if (await this.meterLocCode.isDisplayed()) {
            var select = this.meterLocCode;
            select.$('[value="I"]').click();
        }
        await utility.wait(1000);
        if (await this.certYearMonth.isDisplayed()) {
            await this.certYearMonth.clear();
            await this.certYearMonth.sendKeys("16/12");
        }
    }
    public async NewMeterNextsection() {
        await utility.wait(1000);
        if (await this.ElecNewmeterNext.isDisplayed()) {
            await this.ElecNewmeterNext.click();
        }
    }
    public async AdditionalElecTestandChecks() {
        await utility.wait(2000);
        await this.additionalElecTestandChk.getText().then(function (additionalElecTestandChkTxt) {
            console.log("Additional electricity Test and Checks" + additionalElecTestandChkTxt);
        });
    }
    public async fill34AdditionalElecTestandChecks() {
        await utility.wait(1000);
        if (await this.TerminalscrewTightness.isDisplayed()) {
            await this.TerminalscrewTightness.click();
        }
    }
    public async AdditionalTerminalscrewCapturePhoto() {
        await utility.wait(1000);
        if (await this.capTerminalscrews.isDisplayed()) {
            await this.capTerminalscrews.click();
        }
    }
    public async fill35AdditionalElecTestandChecks() {
        await utility.wait(1000);
        if (await this.SealsIntactBlocks.isDisplayed()) {
            await this.SealsIntactBlocks.click();
        }
        await utility.wait(1000);
        if (await this.AllPortsSealed.isDisplayed()) {
            await this.AllPortsSealed.click();
        }
        await utility.wait(1000);
        if (await this.SiemenscableMarkersInsTxt.isDisplayed()) {
            await this.SiemenscableMarkersIns.click();
        }
        await utility.wait(1000);
        if (await this.VisualInspectionCompleted.isDisplayed()) {
            await this.VisualInspectionCompleted.click();
        }
        await utility.wait(1000);
        if (await this.cableMarkerSelect.isDisplayed()) {
            var select = this.cableMarkerSelect;
            select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.EarthTypeSelect.isDisplayed()) {
            var select = this.EarthTypeSelect;
            select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.ReplacementMeterBoardY.isDisplayed()) {
            await this.ReplacementMeterBoardY.click();
        }
        await utility.wait(1000);
        if (await this.MeterTailsChangedN.isDisplayed()) {
            await this.MeterTailsChangedN.click();
        }
        await utility.wait(1000);
        if (await this.ReplacementmainFuseY.isDisplayed()) {
            await this.ReplacementmainFuseY.click();
        }
        await utility.wait(1000);
        if (await this.EmergencyJobY.isDisplayed()) {
            await this.EmergencyJobY.click();
        }
    }
    public async additionaltestNext() {
        await utility.wait(1000);
        if (await this.AdditionalTestChkNext.isDisplayed()) {
            await this.AdditionalTestChkNext.click();
        }
    }
    public async ElecInitialMeterReading() {
        await utility.wait(2000);
        await this.ElecInitMeterReadingCap.getText().then(function (ElecInitMeterReadingCapTxt) {
            console.log("Elec Initial Meter Reading" + ElecInitMeterReadingCapTxt);
        });
    }

    public async PostInstallationChks() {
        await utility.wait(2000);
        await this.postInstallationChkCap.getText().then(function (postInstallationChkCapTxt) {
            console.log("Post Installation Checks" + postInstallationChkCapTxt);
        });
    }
    public async fill37PostInstallationChks() {
        await utility.wait(1000);
        if (await this.CarryoutPolChkatMeterY.isDisplayed()) {
            await this.CarryoutPolChkatMeterY.click();
        }
        await utility.wait(1000);
        if (await this.AdditionalTextSend.isDisplayed()) {
            await this.AdditionalTextSend.clear();
            await this.AdditionalTextSend.sendKeys("Polarity check comments");
        }

    }
    public async PostInstallationChksCont() {
        await utility.wait(1000);
        await expect(this.PostInstallationText.isDisplayed());
        console.log("Post Installation Page Content Displayed")
    }
    public async fill38PostInstallationChks() {
        await utility.wait(1000);
        if (await this.carryoutPolChksPluginTestDev.isDisplayed()) {
            var select = this.carryoutPolChksPluginTestDev;
            select.$('[value="true"]').click();
        }
        await utility.wait(1000);
        if (await this.ConfirmSocSafetyTestPassed.isDisplayed()) {
            await this.ConfirmSocSafetyTestPassed.click();
        }
        await utility.wait(1000);
        if (await this.testWitnessname.isDisplayed()) {
            await this.testWitnessname.clear();
            await this.testWitnessname.sendKeys("Jonny Vegas");
        }
    }
    public async captureteststicker() {
        await utility.wait(1000);
        if (await this.capmarindaleTestpostinst.isDisplayed()) {
            await this.capmarindaleTestpostinst.click();
        }
    }
    public async captureFinalMeterInst() {
        await utility.wait(1000);
        if (await this.capfinalmeterPostInst.isDisplayed()) {
            await this.capfinalmeterPostInst.click();
        }
    }
    public async captureteststickecloseup() {
        await utility.wait(1000);
        if (await this.capCloseUpmeterplusWitnessSticker.isDisplayed()) {
            await this.capCloseUpmeterplusWitnessSticker.click();
        }
    }
    public async Commisioning() {
        await utility.wait(2000);
        await this.commisioningCaption.getText().then(function (commisioningCaptionTxt) {
            console.log("Commisioning " + commisioningCaptionTxt);
        });
    }
    public async fill39Commisioning() {
        await utility.wait(1000);
        if (await this.NonSerializedAssetselect.isDisplayed()) {
            var select = this.NonSerializedAssetselect;
            select.$('[value="1"]').click();
        }
        await utility.wait(1000);
        if (await this.NonSerializedAssetSend.isDisplayed()) {
            await this.NonSerializedAssetSend.clear();
            await this.NonSerializedAssetSend.sendKeys("1");
        }
    }
    public async DueladdanotherSet() {
        await utility.wait(1000);
        if (await this.addAnotherasset.isDisplayed()) {
            await this.addAnotherasset.click();
        }
    }
    public async fill40Commisioning() {
        await utility.wait(1000);
        if (await this.NonSerializedAssetselect1.isDisplayed()) {
            var select = this.NonSerializedAssetselect1;
            select.$('[value="3"]').click();
        }
        await utility.wait(1000);
        if (await this.NonSerializedAssetSend1.isDisplayed()) {
            await this.NonSerializedAssetSend1.clear();
            await this.NonSerializedAssetSend1.sendKeys("2");
        }
        await utility.wait(1000);
        if (await this.mesgreqtoDCCY.isDisplayed()) {
            await this.mesgreqtoDCCY.click();
        }
        await utility.wait(1000);
        if (await this.CommsHubconnectedtoWAN.isDisplayed()) {
            await this.CommsHubconnectedtoWAN.click();
        }
    }
    public async CommisioningClickNext() {
        await utility.wait(1000);
        if (await this.CommNextSection.isDisplayed()) {
            await this.CommNextSection.click();
        }
    }
    public async ElecInstallCommisioning() {
        await utility.wait(2000);
        await this.ElecInstallCommCap.getText().then(function (ElecInstallCommCapTxt) {
            console.log("Electric Install Commisioning" + ElecInstallCommCapTxt);
        });
    }
    public async clicksendmsgEICOM() {
        await utility.wait(1000);
        if (await this.sendmesgtoEICOM.isDisplayed()) {
            await this.sendmesgtoEICOM.click();
        }
    }

    public async SeeEICOMAwaitingresp() {
        await utility.wait(1000);
        await this.awaitingresponseEICOM.getText().then(function (awaitingresponseEICOMTxt) {
            console.log("Awaiting Response for EICOM " + awaitingresponseEICOMTxt);
        });
    }

    public async waitEICOMbuttontoDisappear() {
        await utility.wait(50000);
    }
    public async PairAssettoCommsHub() {
        await utility.wait(1000);
        await expect(this.pairAssettoCommsHub.isDisplayed());
    }
    public async MPANSetbyDCCText() {
        await utility.wait(1000);
        await expect(this.MPANSetbyDCC.isDisplayed());
    }
    public async JoinsareinitText() {
        await utility.wait(1000);
        await expect(this.Joinsareinit.isDisplayed());
    }

    public async Seecommisionsuccessbutton() {
        await utility.wait(1000);
        await expect(this.EICOMcommsuccess.isDisplayed());
    }

    public async clickSeecommisionsuccessbutton() {
        await utility.wait(1000);
        if (await this.EICOMcommsuccess.isDisplayed()) {
            await this.EICOMcommsuccess.click();
        }
    }

    public async fillthefieldsforinitmeterReadingduel() {
        await utility.wait(1000);
        if (await this.captureMeterReadingSend2.isDisplayed()) {
            await this.captureMeterReadingSend2.clear();
            await this.captureMeterReadingSend2.sendKeys("12345");
        }
        await utility.wait(1000);
        if (await this.CaptureMeterReadingenableok1.isDisplayed()) {
            await this.CaptureMeterReadingenableok1.click();
        }
    }
    public async fillthefieldsforperformpostinstduel() {
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
        if (await this.captureFinalMeterInstall1.isDisplayed()) {
            await this.captureFinalMeterInstall1.click();
        }
        await utility.wait(2000);
        if (await this.MsgreqDCC1.isDisplayed()) {
            await this.MsgreqDCC1.click();
        }
        await utility.wait(2000);
        if (await this.PostinstallNext1.isDisplayed()) {
            await this.PostinstallNext1.click();
        }
    }

    public async fillduelfornewregulator(index: number) {
        await utility.wait(1000);
        if (await this.HasGasRegulatorReplacedY.isDisplayed()) {
            await this.HasGasRegulatorReplacedY.click();
        }
        await utility.wait(1000);
        if (await this.selectValidAssettoInst1.isDisplayed()) {
            var select = this.selectValidAssettoInst1;
            select.$('[value="MA6NC181323805"]').click();
        }
        await utility.wait(1000);
        if (await this.gasmeterserialSendreg.isDisplayed()) {
            await this.gasmeterserialSendreg.clear();
            await this.gasmeterserialSendreg.sendKeys("MA6NC181323805");
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
    public async filltheduelforseePPMIDsection(index: number) {
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
        await utility.wait(2000);
        if (await this.PPMIDtoInstallsel.isDisplayed()) {
            await utility.wait(2000);
            this.PPMIDtoInstallsel.click();
            browser.sleep(1000);
            console.log("Selecting element based index : " + index);
            // select the option
            await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
            await utility.wait(3000);
            await expect(await this.SerialNoText.isPresent());
            var options = this.PPMIDtoInstallselList.getAttribute('value');
            await this.SerialNoText.sendKeys(options);
        }
        await utility.wait(2000);
        if (await this.EUIenableOK1.isDisplayed()) {
            await this.EUIenableOK1.click();
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

//CGP ADDED 11/09
public async filltheduelforseePPMIDsectionTRAD(index: number) {
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
    await utility.wait(2000);
    if (await this.PPMIDtoInstallsel.isDisplayed()) {
        await utility.wait(2000);
        this.PPMIDtoInstallsel.click();
        browser.sleep(1000);
        console.log("Selecting element based index : " + index);
        // select the option
        await this.PPMIDtoInstallsel.element(by.css("option:nth-child(" + index + ")")).click();
        await utility.wait(3000);
        await expect(await this.SerialNoText.isPresent());
        var options = this.PPMIDtoInstallselList.getAttribute('value');
        await this.SerialNoText.sendKeys(options);
    }
    await utility.wait(2000);
    if (await this.EUIenableOKTRAD.isDisplayed()) {
        await this.EUIenableOKTRAD.click();
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


}