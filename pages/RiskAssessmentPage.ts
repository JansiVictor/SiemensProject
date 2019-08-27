    import { browser, element, by, ElementFinder, ElementArrayFinder} from "protractor";
    const { Given, When, Then } = require("cucumber");
    const chai = require("chai");
    const expect = chai.expect;
    import { Utility } from "../support/utility";
    const utility: Utility = new Utility();
    import { Alert } from 'selenium-webdriver';



    export class RiskAssessmentPageObject {

    public riskAssesmentHEader: ElementFinder;
    public initialRiskAssesment: ElementFinder;
    public canYouSmellText: ElementFinder;
    public canYouSmellYES:ElementFinder;
    public turnedOffGasYES: ElementFinder;
    public callEGPYES: ElementFinder;
    public inputEGPRef: ElementFinder;
    public reportToHS: ElementFinder;
    public riskelecText: ElementFinder;
    public performRiskText: ElementFinder;
    public airLineRefInput: ElementFinder;
    public OKtoProceedEGPOutcome: ElementFinder;
    public infoText: ElementFinder;
    public infoOKButton: ElementFinder;
    public performRisk: ElementFinder;
    public performRiskYES: ElementFinder;
    public selectRiskReasonDD: ElementFinder;
    public RiskAssessmentPassYES: ElementFinder;
    public riskAssessmentinput: ElementFinder;
    public cameraBtn: ElementFinder;
    public nextSectionBtn: ElementFinder;
    public riskAssessGASText: ElementFinder;
    public meterPressureLow: ElementFinder;
    public voltStickYES: ElementFinder;
    public theftOfGASFAIL: ElementFinder;
    public incidentToEGPYES: ElementFinder;
    public EGPJobRefInput: ElementFinder;
    public ECVChecksBtnYES: ElementFinder;
    public workSafetyYES: ElementFinder;
    public GASRiskTextInput: ElementFinder;
    public NextSectiontoCaptureBtn: ElementFinder;
    public NeedtoWorkYES: ElementFinder;
    public performanceRiskNextBtn: ElementFinder;
    public captureInitialPhotoElec:ElementFinder;
    public capturephotoMeterInstall: ElementFinder;
    public initialpolarityCheck:ElementFinder;
    public smartInstallationNextBtn: ElementFinder;
    public polarityCheckDD: ElementFinder;
    public socketSafetyBtnYES: ElementFinder;
    public socketSetLocDD: ElementFinder;
    public capturePreinsatllation:ElementFinder;
    public anySocketFoundNO: ElementFinder;
    public MeterAndCutOutText:ElementFinder;
    public socketSafetyBtnNO: ElementFinder;
    public anySocketFoundYES:ElementFinder;
    public suitableForSmartInstallationYes:ElementFinder;
    public equipmentRepositionDD:ElementFinder;
    public suitableSmartInstalationText:ElementFinder;
    public instalationNotes:ElementFinder;
    public polarityCheckCutOutYES:ElementFinder;
    public polarityCheckAtMeter:ElementFinder;
    public currentMeterDetailsText:ElementFinder;
    public meterCutOutNxtBtn:ElementFinder;
    public existingElecMeterYes:ElementFinder;
    public removeMeterText:ElementFinder;
    public statusOfAssetDD:ElementFinder;
    public removeMeterReadingText:ElementFinder;
    public unableToReadMeterYes:ElementFinder;
    public removeAssetTabText: ElementFinder;
    public removeMeterAddText: ElementFinder;
    public rmvNextBtn: ElementFinder;
    public assetSuccessfullyaddedOKbtn: ElementFinder;
    public Title_chubInstall: ElementFinder;
    public CommHubText: ElementFinder;
    public commHubDD: ElementFinder;
    public chfIDInput: ElementFinder;
    public commHubLocDD: ElementFinder;
    public arealInstalledYes: ElementFinder;
    public commHubConnectionDD: ElementFinder;
    public captureCommsHub: ElementFinder;
    public commHubLocNxtBtn: ElementFinder;
    public NewMeterDetailsText: ElementFinder;
    public rmOptionalText: ElementFinder;
    public currentMeterNxtbtn: ElementFinder;
    public removeassetDD: ElementFinder;
    public confirmAssetYes: ElementFinder;
    public newMeterDD: ElementFinder;
    public inputelecSerialNum: ElementFinder;
    public manufactureLetterDD: ElementFinder;
    public MeterTypeDD: ElementFinder;
    public meterLocDD: ElementFinder;
    public inputDate: ElementFinder;
    public newMeterNxtBtn: ElementFinder;
    public AddElecCheckTxt: ElementFinder;
    public terminalNewTightness: ElementFinder;
    public photoOfTerminalScrew: ElementFinder;
    public sealsIntactYes: ElementFinder;
    public portsSealedYes: ElementFinder;
    public approveCableMakersYes: ElementFinder;
    public visualInspectionYes: ElementFinder;
    public cableMArkerDD: ElementFinder;
    public earthTypeDD: ElementFinder;
    public recentMeterBoardYes: ElementFinder;
    public meterTailsChangedNo: ElementFinder;
    public replacedMainFuseYes: ElementFinder;
    public emerJobNo: ElementFinder;
    public additionalElecNxtBtn: ElementFinder;
    public ElecInitialMeterText: ElementFinder;
    public captureMeterReadingInput: ElementFinder;
    public meterReadingNxtBtn: ElementFinder;
    public commissioningTxt: ElementFinder;
    public nonserealizedAssetDD: ElementFinder;
    public nonserealizedAssetInput: ElementFinder;
    public commsHubConnectedYes: ElementFinder;
    public commissioningNxtBtn: ElementFinder;
    public postInstalationTxt: ElementFinder;
    public carryOutPolarityChkYes: ElementFinder;
    public postpolNotes: ElementFinder;
    public polChkDD: ElementFinder;
    public confirmSocketPass: ElementFinder;
    public witnessName: ElementFinder;
    public capturePostinstalation: ElementFinder;
    public capturefinalmeterinstal: ElementFinder;
    public captureCloseupMeter: ElementFinder;
    public electricInstallTxt: ElementFinder;
    public eicomSendMsg: ElementFinder;
    public awaitingResponseTxt: ElementFinder;
    public commSuccess: ElementFinder;
    public submitBtn: ElementFinder;
    public commshubPopup: ElementFinder;
    public randomClick: ElementFinder;
    public randomEUDevice: ElementFinder;
    public DDnewMeteroption: ElementFinder;
    





    constructor() {
    this.initialRiskAssesment = element(by.xpath('(//div/h4[text()="Initial Risk Assessment"])'));
    this.riskAssesmentHEader = element(by.xpath('(//div[text()="Risk Assessment"])[1]'));
    this.canYouSmellText = element(by.xpath('//div[text()="Can you smell Gas?"]'));
    this.canYouSmellYES = element(by.xpath('//label[@id="rb_SmelGas_y"]'));
    this.turnedOffGasYES = element(by.xpath('//label[@id="rb_TurnGasOff_y"]'));
    this.callEGPYES = element(by.xpath('//label[@id="rb_CallEGP_y"]'));
    this.inputEGPRef = element(by.xpath('//input[@id="txt_EGP_ref"]'));
    this.riskelecText = element(by.xpath('//div[@id="Title_RiskAss_elec"]'));
    this.performRiskText = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
    // this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
    this.OKtoProceedEGPOutcome = element(by.xpath('//label[@id="rb_OKProce_y"]'));
    this.infoText = element(by.xpath('//div/p[@style="display: block;"]'));
    this.infoOKButton = element(by.xpath('//div/button[@class="confirm"]'));
    this.performRiskYES = element(by.xpath('//input[@id="radiora5a"]/following-sibling::span[@class="outer"]'));
    this.RiskAssessmentPassYES = element(by.xpath('//input[@id="radiora9"]/following-sibling::span[@class="outer"]'));
    this.selectRiskReasonDD = element(by.xpath('//select[@id="select1"]'));
    this.riskAssessmentinput = element(by.xpath('//textarea[@id="ranotes"]'));
    this.cameraBtn = element(by.xpath('//button[@class="cameraBtn grey"]'));
    this.nextSectionBtn = element(by.xpath('//button[@id="btnNextrae"]'));
    this.riskAssessGASText = element(by.xpath('//div/h4[text()="Risk Assessment - Gas"]'));
    this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
    this.voltStickYES = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
    this.theftOfGASFAIL = element(by.xpath('//input[@id="ragb1"]/following-sibling::span[@class="outer"]'));
    this.incidentToEGPYES = element(by.xpath('//input[@id="ragc1"]/following-sibling::span[@class="outer"]'));
    this.EGPJobRefInput = element(by.xpath('//input[@id="input1"]'));
    this.ECVChecksBtnYES = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
    this.workSafetyYES = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
    this.GASRiskTextInput = element(by.xpath('//textarea[@id="text1"]'));
    this.workSafetyYES = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
    this.NextSectiontoCaptureBtn = element(by.xpath('((//div[@class="btn-container green"])/button[@id="btnNextComm"])[2]'));
    this.reportToHS = element(by.xpath('//label[@id="rb_RepIncHS_y"]'));
    this.airLineRefInput = element(by.xpath('//input[@id="txt_AirL_ref"]'));
    this.NeedtoWorkYES = element(by.xpath('//input[@id="radiorai11"]/following-sibling::span[@class="outer"]'));
    this.performanceRiskNextBtn = element(by.xpath('//button[@id="btnNextComm"]'));
    this.captureInitialPhotoElec = element(by.xpath('//div/h4[text()="Capture Initial Photo of Elec Installation"]'));
    this.capturephotoMeterInstall = element(by.id('btn_Init_Photo'));
    this.initialpolarityCheck = element(by.xpath('//div/h4[text()="Initial Polarity Check - Martindale Test"]'));
    this.smartInstallationNextBtn = element(by.xpath('//div/button[@id="btn_Next_Section"]'));
    this.polarityCheckDD = element(by.id('cbx_CarOutPol_ck'));
    this.socketSafetyBtnYES = element(by.id('rb_SocSafTe_pass'));
    this.socketSetLocDD = element(by.id('cbx_SocTestLoc_sel'));
    this.capturePreinsatllation = element(by.id('btn_CapPhoPreInstM_test'));
    this.anySocketFoundNO = element(by.id('rb_SocRevPol_n'));
    this.MeterAndCutOutText = element(by.xpath('//div/h4[text()="Initial Polarity Check - At Meter and Cut Out"]'));
    this.socketSafetyBtnNO = element(by.id('rb_SocSafTe_fail'));
    this.anySocketFoundYES = element(by.id('rb_SocRevPol_y'));
    this.suitableForSmartInstallationYes = element(by.xpath('//input[@id="radio1a"]/following-sibling::span[@class="outer"]'));
    this.equipmentRepositionDD = element(by.id('repositionSelect'));
    this.suitableSmartInstalationText = element(by.xpath('//div/h4[text()="Suitable for Smart Installation"]'));
    this.instalationNotes = element(by.id('smartnotes'));
    this.polarityCheckCutOutYES = element(by.id('rb_PolCOPass'));
    this.polarityCheckAtMeter = element(by.id('rb_PolCMPass'));
    this.currentMeterDetailsText = element(by.xpath('//div/h4[text()="Current Meter Details"]'));
    this.meterCutOutNxtBtn = element(by.id('btn_Next_Pol'));
    this.existingElecMeterYes = element(by.id('rb_ExMetDetCorrt_y'));
    this.removeMeterText = element(by.xpath('//div/h4[text()="Remove Meter"]'));
    this.statusOfAssetDD = element(by.id('cbx_StaAss_sel'));
    this.removeMeterReadingText = element(by.id('input0'));
    this.unableToReadMeterYes = element(by.xpath('//input[@id="rb_UnReadMet_y"]/following-sibling::span[@class="outer"]'));
    this.removeAssetTabText = element(by.id('Title_Remove_Ass'));
    this.removeMeterAddText = element(by.id('txt_AddUnRead_note'));
    this.rmvNextBtn = element(by.id('btn_Next_rmv'));
    this.assetSuccessfullyaddedOKbtn = element(by.className('sa-confirm-button-container'));
    this.CommHubText= element(by.id('Title_chubInstall'));
    this.commHubDD= element(by.id('chubInstall_selectAsset'));
    this.chfIDInput= element(by.id('chubInstall_CHbarcode'));
    this.commHubLocDD = element(by.id('chubInstall_chubLocationSelect'));
    this.arealInstalledYes = element(by.id('chubInstall_aerialInstalled_y'));
    this.commHubConnectionDD = element(by.id('chubInstall_connectionMethodSelect'));
    this.captureCommsHub = element(by.id('chubInstall_photoEvidence'));
    this.commHubLocNxtBtn = element(by.id('chubInstall_nextSectionBtn'));
    this.NewMeterDetailsText = element(by.id('Title_newMeter'));
    this.rmOptionalText = element(by.id('optionalassetnotes'));
    this.currentMeterNxtbtn = element(by.id('currentMeterDetails_nextButton'));
    this.removeassetDD = element(by.id('cbx_RAss_Status'));
    this.confirmAssetYes = element(by.id('rb_CAssRem_y'));
    this.inputelecSerialNum = element(by.xpath('(//div/input[@id="txt_Serial_Num"])[1]'));
    this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
    this.manufactureLetterDD = element(by.id('select_man_letter'));
    this.MeterTypeDD = element(by.id('select_meter_letter'));
    this.meterLocDD = element(by.id('cbx_MetLocCode_sel'));
    this.inputDate = element(by.id('txt_Cert_year'));
    this.newMeterNxtBtn = element(by.id('btnNextPol'));
    this.AddElecCheckTxt = element(by.id('Title_Add_ElecTC'));
    this.terminalNewTightness = element(by.id('rb_TermSTi_y'));
    this.photoOfTerminalScrew = element(by.xpath('//button[@id="btn2"]'));
    this.sealsIntactYes = element(by.id('rb_SealsInt_y'));
    this.portsSealedYes = element(by.id('rb_PortsSealed_y'));
    this.approveCableMakersYes = element(by.id('rb_SieCMark_y'));
    this.visualInspectionYes = element(by.id('rb_VisInsCom_y'));
    this.cableMArkerDD = element(by.id('cbx_CabMark_Sel'));
    this.earthTypeDD = element(by.id('cbx_EarType_Sel'));
    this.recentMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
    this.meterTailsChangedNo = element(by.id('rb_MetTailChg_n'));
    this.replacedMainFuseYes = element(by.id('rb_ReMainFuse_y'));
    this.emerJobNo = element(by.id('rb_EmerJob_n'));
    this.additionalElecNxtBtn = element(by.id('btn_Next_PostC'));
    this.ElecInitialMeterText = element(by.id('Title_InitMet_Read'));
    this.captureMeterReadingInput = element(by.id('reg0'));
    this.meterReadingNxtBtn = element(by.id('btn_Next_read'));
    this.commissioningTxt = element(by.id('Title_commissioning'));
    this.nonserealizedAssetDD = element(by.id('Cselect4'));
    this.nonserealizedAssetInput = element(by.id('Cbar3'));
    this.commsHubConnectedYes = element(by.id('Cradionm1'));
    this.commissioningNxtBtn = element(by.id('CbtnNextComm'));
    this.postInstalationTxt = element(by.xpath('//div/h4[text()="Post Installation Checks"]'));
    this.carryOutPolarityChkYes = element(by.id('rb_CarOutPolCk_y'));
    this.postpolNotes = element(by.id('postpolnotes'));
    this.polChkDD = element(by.id('cbx_PolChkplg_sel'));
    this.confirmSocketPass = element(by.id('rb_SocSafChk_pass'));
    this.witnessName = element(by.id('txt_TestWtn'));
    this.capturePostinstalation = element(by.id('btn_CapPhoMart_test'));
    this.capturefinalmeterinstal = element(by.id('btn_CapPhoFinMet_inst'));
    this.captureCloseupMeter = element(by.id('btn_CapPhoCloUp_met'));
    this.electricInstallTxt = element(by.xpath('//div/h4[text()="Electric Install & Commissioning"]'));
    this.eicomSendMsg = element(by.id('eicom_sendMessageButton'));
    this.awaitingResponseTxt = element(by.id('//div/h4[text()="Awaiting Response"]'));
    this.commSuccess = element(by.id('eicom_nextButton'));
    this.submitBtn = element(by.id('btn_Submit_elec'));
    this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
    this.randomClick= element(by.xpath('//div[text()="CHF ID:"]'));
    this.randomEUDevice = element(by.xpath('//div[text()="EUI Device ID:"]'));
    this.DDnewMeteroption = element(by.xpath('//select/option[@value="E9E00000000021"]'));
    }
    public async verifyRiskAssessmentPage() {
    this.riskAssesmentHEader.getText().then(function(riskAssesmentHEaderText) {
    console.log("find RiskAssesment Header Text  " + riskAssesmentHEaderText);
    });
    }

    public async verifyInitialRiskAssessmentPage(){
    this.initialRiskAssesment.getText().then(function(initialRiskAssesmentText) {
    console.log("find initialRiskAssesment Text  " + initialRiskAssesmentText);
    });
    }

    public async inputInitialRiskAssessmentDetails(){
    await expect(this.initialRiskAssesment.isPresent());
    if(this.canYouSmellText.isDisplayed()){
    await this.canYouSmellYES.click();
    }
    if(this.turnedOffGasYES.isDisplayed()){
    await this.turnedOffGasYES.click();
    }
    if(this.callEGPYES.isDisplayed()){
    await this.callEGPYES.click();
    }
    if(this.inputEGPRef.isDisplayed()){
    await utility.wait(2000);
    await this.inputEGPRef.sendKeys('123456');
    }
    if(this.reportToHS.isDisplayed()){
    await utility.wait(2000);
    await this.reportToHS.click();
    }
    if(this.airLineRefInput.isDisplayed()){
    await utility.wait(2000);
    await this.airLineRefInput.sendKeys('5678910');
    }
    if(this.OKtoProceedEGPOutcome.isDisplayed()){
    await utility.wait(2000);
    await this.OKtoProceedEGPOutcome.click();
    await utility.wait(5000);
    }
    }

    public async infoTextPopUp(){
    if(this.infoText.isDisplayed()){
    //  await this.infoOKButton.click();
    await utility.wait(5000);
    }
    }

    public async verifyriskElecText(){

    if(this.riskelecText.isDisplayed()){
    await this.riskelecText.getText().then(function(riskelec) {
    console.log("find riskelec Text  " + riskelec);
    });
    }
    }

    public async fillRiskAssesmentElecFields(){
    if(await this.performRiskText.isDisplayed()){
    await this.performRiskYES.click();
    }
    if(await this.selectRiskReasonDD.isDisplayed()){
    var select = this.selectRiskReasonDD;
    select.$('[value="23"]').click();
    }
    if(await this.RiskAssessmentPassYES.isDisplayed()){
    await this.RiskAssessmentPassYES.click();
    }
    if(await this.riskAssessmentinput.isDisplayed()){
    await this.riskAssessmentinput.sendKeys('Testing Input');
    }
    }

    public async capturePhotoBtnDisplayed(){
    if(this.cameraBtn.isDisplayed()){
    await this.cameraBtn.click();
    }
    }

    public async clickNextSectionBtn(){
    if(this.nextSectionBtn.isDisplayed()){
    await this.nextSectionBtn.click();
    await utility.wait(5000);
    }
    }

    public async electInstallationSection(){
    if(await this.captureInitialPhotoElec.isDisplayed()){
    await this.captureInitialPhotoElec.getText().then(function(captureInitialPhotoElecText) {
    console.log("find initialElecCapure Text  " + captureInitialPhotoElecText);
    });
    await utility.wait(1000);
    }
    }

    public async verifyInitialPolarityCheck(){
    if(await this.initialpolarityCheck.isDisplayed()){
    await this.initialpolarityCheck.getText().then(function(initialpolarityCheckText) {
    console.log("find initialpolarityCheck Text  " + initialpolarityCheckText);
    });
    await utility.wait(1000);
    }
    }

    public async fillthePolarityCheckMartinDale(){
    if(await this.polarityCheckDD.isDisplayed()){
    var select = this.polarityCheckDD;
    select.$('[value="true"]').click();
    }
    await utility.wait(1000);

    await expect(await this.socketSafetyBtnYES.isPresent());
    await this.socketSafetyBtnYES.click();
    await utility.wait(1000);

    if(await this.socketSetLocDD.isDisplayed()){
    var select = this.socketSetLocDD;
    select.$('[value="9"]').click();
    await utility.wait(1000);
    } 

    }
    public async verifyCapturepreInstallation(){
    if(await this.capturePreinsatllation.isDisplayed()){
    await this.capturePreinsatllation.click();
    await utility.wait(1000);
    } 
    }
    public async verifyanySocketFoundNO(){
    await expect(this.anySocketFoundNO.isPresent());
    await this.anySocketFoundNO.click();
    await utility.wait(1000);
    }

    public async verifyMeterAndCutOut(){
    if(await this.MeterAndCutOutText.isDisplayed()){
    await this.MeterAndCutOutText.click();
    } 
    }

    public async verifysuitableforSmartMeterInstallation(){
    if(await this.suitableSmartInstalationText.isDisplayed()){
    this.suitableSmartInstalationText.getText().then(function(suitableSmartInstalation) {
    console.log("find suitableSmartInstalation Text  " + suitableSmartInstalation);
    }); 
    } 
    }

    public async suitableforSmartMeterInstallation(){
    if(await this.suitableForSmartInstallationYes.isDisplayed()){
    await this.suitableForSmartInstallationYes.click();
    } 
    }
    public async equipmentRepositionReq(){
    if(await this.equipmentRepositionDD.isDisplayed()){
    var select = this.equipmentRepositionDD;
    select.$('[value="No Reposition Required"]').click();
    } 
    }
    public async enterNotesForMeteInstallation(){
    if(await this.instalationNotes.isDisplayed()){
    await this.instalationNotes.sendKeys('Adding instalation Notes');
    } 
    }
    public async clickSmartInstallationNextBtn(){
    if(await this.smartInstallationNextBtn.isDisplayed()){
    await this.smartInstallationNextBtn.click();
    await utility.wait(2000);
    } 
    }

    public async fillthePolarityCheckMeterOut(){
    await expect(this.polarityCheckCutOutYES.isPresent());
    await this.polarityCheckCutOutYES.click();
    await utility.wait(1000);
    await expect(this.polarityCheckAtMeter.isPresent());
    await this.polarityCheckAtMeter.click(); 
    await utility.wait(1000);
    }

    public async meterCutOutnextSection() {
    await expect(this.meterCutOutNxtBtn.isPresent());
    await this.meterCutOutNxtBtn.click();
    await utility.wait(1000);
    }

    public async verifyCurrentMeterDetails() {
    await expect(this.currentMeterDetailsText.isPresent());
    await this.currentMeterDetailsText.getText().then(function(currentMeterDetails) {
    console.log("find currentMeterDetails Text  " + currentMeterDetails);
    });
    await utility.wait(1000);
    await expect(this.existingElecMeterYes.isPresent());
    await this.existingElecMeterYes.click();
    await utility.wait(1000);
    //not req, if new WO required
    await this.currentMeterNxtbtn.click();
    } 

    public async removeTabdisplayed() {
    await expect(this.removeMeterText.isPresent());
    //await this.removeMeterText.click();
    await utility.wait(1000);
    }

    public async fillRemoveMeterDetails(){
    await utility.wait(2000);
    if(this.statusOfAssetDD.isDisplayed()){
    var select = this.statusOfAssetDD;
    select.$('[value="2"]').click();
    await utility.wait(1000);
    }
    // await expect(await this.rmOptionalText.isPresent());
    // await this.rmOptionalText.sendKeys('optional text');
    // await utility.wait(1000);

    await expect(await this.removeMeterReadingText.isPresent());
    await this.removeMeterReadingText.sendKeys('12345');
    await utility.wait(1000);

    if(await this.unableToReadMeterYes.isDisplayed()){
    await this.unableToReadMeterYes.click();
    await utility.wait(1000);
    } 
    await expect(await this.removeMeterAddText.isPresent());
    await this.removeMeterAddText.sendKeys('Additional Test Message');
    await utility.wait(1000);

    //If page is continued then this function required for new WO not req
    // if(await this.rmvNextBtn.isDisplayed()){
    //     await this.rmvNextBtn.click();
    //     await utility.wait(1000)

    }
    public async OKButton() {
    if(await this.assetSuccessfullyaddedOKbtn.isDisplayed()){
    await this.assetSuccessfullyaddedOKbtn.click();
    await utility.wait(1000);
    }
    }
    public async removeAssetTextDisplayed() {
    await expect(this.removeAssetTabText.isPresent());
    await utility.wait(1000);
    }
    public async CommHubDisplayed() {
    await expect(this.CommHubText.isPresent());
    await this.CommHubText.getText().then(function(CumHub) {
    console.log("find CuMHubText Text  " + CumHub);
    });
    await utility.wait(1000);
    }
    public async fillremoveAssetDetails(){
    if(await this.removeassetDD.isDisplayed()){
    var select = this.removeassetDD;
    select.$('[value="1"]').click();
    }

    await utility.wait(1000);
    if(await this.confirmAssetYes.isDisplayed()){
    await this.confirmAssetYes.click();
    await utility.wait(1000);
    }

    }


    public async fillCommsHubDetails(){

    if(await this.commHubDD.isDisplayed()){
    var select = this.commHubDD;
    select.$('[value="1C0000AA00110003"]').click();
    await utility.wait(3000);
    await this.commshubPopup.click();
    }
    //  await this.commshubPopup.click();
    // await utility.wait(2000);

    //await this.OKButton();
    await expect(await this.chfIDInput.isPresent());
    await this.chfIDInput.sendKeys('1C0000AA00110003');
    await this.randomClick.click();
    await this.commshubPopup.click();
    await utility.wait(2000);

    if(await this.commHubLocDD.isDisplayed()){
    var select = this.commHubLocDD;
    select.$('[value="A"]').click();
    }
    await utility.wait(3000);

    if(await this.arealInstalledYes.isDisplayed()){
    await this.arealInstalledYes.click();
    await utility.wait(1000);
    } 
    if(await this.commHubConnectionDD.isDisplayed()){
    var select = this.commHubConnectionDD;
    select.$('[value="2"]').click();
    }
    await utility.wait(3000);

    if(await this.captureCommsHub.isDisplayed()){
    await this.captureCommsHub.click();
    await utility.wait(1000);
    } 
    if(await this.commHubLocNxtBtn.isDisplayed()){
    await this.commHubLocNxtBtn.click();
    await utility.wait(1000);
    } 
    }

    public async newMeterDetailsDisplayed(){
    await expect(this.NewMeterDetailsText.isPresent());
    await this.NewMeterDetailsText.getText().then(function(NewMeterDetails) {
    console.log("find NewMeterDetails Text  " + NewMeterDetails);
    });
    await utility.wait(1000);
    }

    public async fillCurrentMeterDetails(){
    if(await this.existingElecMeterYes.isDisplayed()){
    await this.existingElecMeterYes.click();
    await utility.wait(1000);
    }  
    }

    public async fillNewMeterDetails(){
   // await utility.wait(2000);
    
    if(await this.newMeterDD.isDisplayed()){
    var select = await this.newMeterDD;
    select.$('[value="E9E00000000009"]').click();
    }
    await utility.wait(2000);

    await expect(await this.inputelecSerialNum.isPresent());
    await this.inputelecSerialNum.clear();
    await this.inputelecSerialNum.sendKeys('E9E00000000009');  
    await this.randomEUDevice.click();
    let ale:Alert = browser.switchTo().alert();
    // clicks 'OK' button
    ale.accept();
    await utility.wait(2000); 
    
    await this.commshubPopup.click();
    await utility.wait(2000);

    // if(await this.newMeterDD.isDisplayed()){
    //     var select = await this.newMeterDD;
    //     // var element = await this.newMeterDD;;
    //     // browser.executeScript("arguments[0].click()",element);
    //     select.$('[value="E9E00000000021"]').click();
    //     }
    //     await utility.wait(2000);
    
    //     await expect(await this.inputelecSerialNum.isPresent());
    //     await this.inputelecSerialNum.sendKeys('E9E00000000021');  
    //     await this.randomEUDevice.click();

    if(await this.manufactureLetterDD.isDisplayed()){
    var select1 = this.manufactureLetterDD;
    select1.$('[value="2"]').click();
    }
    await utility.wait(2000);
    if(await this.MeterTypeDD.isDisplayed()){
    var select2 = this.MeterTypeDD;
    select2.$('[value="0"]').click();
    }
    await utility.wait(2000);
    if(await this.meterLocDD.isDisplayed()){
        var select3 = this.meterLocDD;
        select3.$('[value="D"]').click();
        }
        await utility.wait(2000);

        await expect(await this.inputDate.isPresent());
        await this.inputDate.sendKeys('90/01');  

        await this.newMeterNxtBtn.click(); 
        await utility.wait(2000);

    }

    public async additionalElecCheckDisplayed(){
        if(this.AddElecCheckTxt.isDisplayed()){
            await this.AddElecCheckTxt.getText().then(function(AddElec) {
                console.log("find AddElecCheckTxt Text  " + AddElec);
                });
         }
    }

    public async fillAdditionalElecCheckDetails(){
    await this.terminalNewTightness.click();
    await utility.wait(1000);
    await this.photoOfTerminalScrew.click(); 
    await utility.wait(1000);
    await this.sealsIntactYes.click(); 
    await utility.wait(1000);
    await this.portsSealedYes.click(); 
    await utility.wait(1000);
    await this.approveCableMakersYes.click(); 
    await utility.wait(1000);
    await this.visualInspectionYes.click(); 
    await utility.wait(1000);
    if(await this.cableMArkerDD.isDisplayed()){
        var select = this.cableMArkerDD;
        select.$('[value="2"]').click();
        }
        await utility.wait(1000);
        if(await this.earthTypeDD.isDisplayed()){
            var select = this.earthTypeDD;
            select.$('[value="4"]').click();
            }
    await utility.wait(1000);
    await this.recentMeterBoardYes.click(); 
    await this.meterTailsChangedNo.click(); 
    await this.replacedMainFuseYes.click(); 
    await this.emerJobNo.click(); 
    await this.additionalElecNxtBtn.click(); 
    await utility.wait(1000);

    }
public  async initialMEterREadingTxtDisplayed(){
    if(this.ElecInitialMeterText.isDisplayed()){
        await this.ElecInitialMeterText.getText().then(function(InitialElec) {
            console.log("find ElecInitialMeterText Text  " + InitialElec);
            });
     }
}

public async fillInitialElecMeterReading(){
    await expect(await this.captureMeterReadingInput.isPresent());
    await this.captureMeterReadingInput.sendKeys('12345');  
//if new WO not req, if existing WO required nxtbtn
    await this.meterReadingNxtBtn.click(); 
    await utility.wait(1000);
}
public async commisioningTxtDisplayed(){

    if(this.commissioningTxt.isDisplayed()){
        await this.commissioningTxt.getText().then(function(commissioning) {
            console.log("find commissioning Text  " + commissioning);
            });
 }
    }
public async fillCommissioningDetails(){
    if(await this.nonserealizedAssetDD.isDisplayed()){
        var select = this.nonserealizedAssetDD;
        select.$('[value="1"]').click();
        }
        await expect(await this.nonserealizedAssetInput.isPresent());
        await this.nonserealizedAssetInput.sendKeys('1');  
        await this.commsHubConnectedYes.click(); 
    await utility.wait(1000);

    await this.commissioningNxtBtn.click(); 
    await utility.wait(1000);
}

public async postInstallationCheckDisplayed(){
    if(this.postInstalationTxt.isDisplayed()){
        await this.postInstalationTxt.getText().then(function(postInstalation) {
            console.log("find postInstalationTxt Text  " + postInstalation);
            });
}
}
public async fillPostInstallationCheck(){
    await this.carryOutPolarityChkYes.click(); 
    await this.postpolNotes.click(); 
    await utility.wait(1000);
    if(await this.polarityCheckDD.isDisplayed()){
        var select = this.polarityCheckDD;
        select.$('[value="true"]').click();
        }
    await utility.wait(1000);
    await this.confirmSocketPass.click(); 
    await expect(await this.witnessName.isPresent());
        await this.witnessName.sendKeys('John');  
        await this.capturePostinstalation.click();   
        await this.capturefinalmeterinstal.click();   
        await this.captureCloseupMeter.click();  

}
public async electricInstalDisplayed(){

    if(this.electricInstallTxt.isDisplayed()){
        await this.electricInstallTxt.getText().then(function(electricInstall) {
            console.log("find electricInstall Text  " + electricInstall);
            });
}

}

public async eicomMessage(){
    if(this.eicomSendMsg.isDisplayed()){
        await this.eicomSendMsg.getText().then(function(eicomSend) {
            console.log("find eicomSendMsg Text  " + eicomSend);
            });
            await this.eicomSendMsg.click(); 
            await utility.wait(10000); 
            await this.awaitingResponseTxt.getText().then(function(awaitingResponseTxt) {
                console.log("find awaitingResponseTxt Text  " + awaitingResponseTxt);
                });  
                await utility.wait(20000);
                if(this.commSuccess.isDisplayed()){  
                    await this.commSuccess.click();
                    await utility.wait(3000);
                }

                await this.submitBtn.click();
        await utility.wait(3000);
}

}
    }
