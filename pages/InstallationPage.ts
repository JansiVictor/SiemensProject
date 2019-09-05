import {
	browser,
	element,
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
	Alert
} from 'selenium-webdriver';

export class InstallationPageObject {
    public performRiskText: ElementFinder;
    public performRiskYES: ElementFinder;
    public RiskAssessmentPassYES: ElementFinder;
    public riskAssessmentinput: ElementFinder;
    public polarityCheckCutOutYES: ElementFinder;
    
    public AddElecCheckTxt: ElementFinder;
	public terminalNewTightness: ElementFinder;
	public photoOfTerminalScrew: ElementFinder;
	public sealsIntactYes: ElementFinder;
	public portsSealedYes: ElementFinder;
	public approveCableMakersYes: ElementFinder;
	public visualInspectionYes: ElementFinder;
	public cableMArkerDD: ElementFinder;
	public earthTypeDD: ElementFinder;
	public replacementMeterBoardYes: ElementFinder;
	public meterTailsChangedNo: ElementFinder;
	public replacedMainFuseYes: ElementFinder;
	public emerJobNo: ElementFinder;
    public additionalElecNxtBtn: ElementFinder;
    public visualCheckPMEBonding: ElementFinder;
    public carryOutPolarityChkYes: ElementFinder;
    public postpolNotes: ElementFinder;
    public polChkDD: ElementFinder;
    public confirmSocketPass: ElementFinder;

    //new meter details
    public newMeterDD: ElementFinder;
	public inputelecSerialNum: ElementFinder;
	public manufactureLetterDD: ElementFinder;
	public MeterTypeDD: ElementFinder;
	public meterLocDD: ElementFinder;
	public inputDate: ElementFinder;
    public newMeterNxtBtn: ElementFinder;
    public selectinstallMeterOption: ElementFinder;
    public randomEUDevice: ElementFinder;

    public commshubPopup: ElementFinder;

    //post installation gas web elements
    public contactGTYES: ElementFinder;
    public nationalGTRefInput: ElementFinder;
    
    public inputGTRef: ElementFinder;
    public reportedIncidentYES: ElementFinder;
    public airLineRefNo: ElementFinder;
    public waitForGTYES: ElementFinder;

    public gtResolveIssueYES: ElementFinder;
    public GAStightnessTestYes: ElementFinder
    public replacedGasMeterYes: ElementFinder;

    public additionalWork1: ElementFinder;
    public additionalWork2: ElementFinder;
    public additionalWork3: ElementFinder;
    public additionalWork4: ElementFinder;
    public additionalWork5: ElementFinder;
    public additionalWork6: ElementFinder;
    public GasPostAddText: ElementFinder;
    
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
    public gicomSendMessage: ElementFinder;
    public successfulBtn: ElementFinder;
    public gasAppliencesSafetyTxt: ElementFinder;
    public earthBondingYEs: ElementFinder;
    public landLordPropertyYes: ElementFinder;
    public gasAddressinput: ElementFinder;
    public allAppliTestedBtn: ElementFinder;
    public submitGas: ElementFinder;
    public landLordPropertyNo: ElementFinder;
    
    
    
   
    


    
    
    
    
    constructor(){
        this.performRiskText = element(by.xpath('//div[text()="Perform Risk Assessment?"]'));
        this.performRiskYES = element(by.xpath('//input[@id="radiora5a"]/following-sibling::span[@class="outer"]'));
        this.RiskAssessmentPassYES = element(by.xpath('//input[@id="radiora9"]/following-sibling::span[@class="outer"]'));
        this.riskAssessmentinput = element(by.xpath('//textarea[@id="ranotes"]'));
        this.polarityCheckCutOutYES = element(by.id('rb_PolCOPass'));
        this.AddElecCheckTxt = element(by.id('Title_Add_ElecTC'));
        this.visualCheckPMEBonding = element(by.id('rb_VisCPMEBond_y'));
		this.terminalNewTightness = element(by.id('rb_TermSTi_y'));
		this.photoOfTerminalScrew = element(by.xpath('//button[@id="btn2"]'));
		this.sealsIntactYes = element(by.id('rb_SealsInt_y'));
		this.portsSealedYes = element(by.id('rb_PortsSealed_y'));
		this.approveCableMakersYes = element(by.id('rb_SieCMark_y'));
		this.visualInspectionYes = element(by.id('rb_VisInsCom_y'));
		this.cableMArkerDD = element(by.id('cbx_CabMark_Sel'));
		this.earthTypeDD = element(by.id('cbx_EarType_Sel'));
		this.replacementMeterBoardYes = element(by.id('rb_ReMetBoard_y'));
		this.meterTailsChangedNo = element(by.id('rb_MetTailChg_n'));
		this.replacedMainFuseYes = element(by.id('rb_ReMainFuse_y'));
		this.emerJobNo = element(by.id('rb_EmerJob_n'));
        this.additionalElecNxtBtn = element(by.id('btn_Next_PostC'));
        this.carryOutPolarityChkYes = element(by.id('rb_CarOutPolCk_y'));
        this.postpolNotes = element(by.id('postpolnotes'));
        this.polChkDD = element(by.id('cbx_PolChkplg_sel'));
        this.confirmSocketPass = element(by.id('rb_SocSafChk_pass'));
        this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
		this.manufactureLetterDD = element(by.id('select_man_letter'));
		this.MeterTypeDD = element(by.id('select_meter_letter'));
		this.meterLocDD = element(by.id('cbx_MetLocCode_sel'));
		this.inputDate = element(by.id('txt_Cert_year'));
        this.newMeterNxtBtn = element(by.id('btnNextPol'));
        this.selectinstallMeterOption=element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[8]'));
        this.randomEUDevice = element(by.xpath('//div[text()="EUI Device ID:"]'));
        this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
        this.inputelecSerialNum = element(by.xpath('(//div/input[@id="txt_Serial_Num"])[1]'));

        //Post Installation Gas Elements
        this.contactGTYES = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
        this.nationalGTRefInput = element(by.id('input1'));
        this.reportedIncidentYES = element(by.xpath('//input[@id="gtp3"]/following-sibling::span[@class="outer"]'));
        this.inputGTRef = element(by.id('gt_issue'));
        this.airLineRefNo =  element(by.id('input2'));
        this.waitForGTYES =  element(by.xpath('//input[@id="gtp5"]/following-sibling::span[@class="outer"]'));
        this.gtResolveIssueYES = element(by.xpath('//input[@id="gtp9"]/following-sibling::span[@class="outer"]'));
        this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
        this.replacedGasMeterYes = element(by.xpath('//input[@id="gtp13"]/following-sibling::span[@class="outer"]'));
        
        
        this.additionalWork1 = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[1]'));
        this.additionalWork2 = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[2]'));
        this.additionalWork3 = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[3]'));
        this.additionalWork4 = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[4]'));
        this.additionalWork5 = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[5]'));
        this.additionalWork6 = element(by.xpath('(//div/label[@class="chckbox ng-binding"])[6]'));
        this.GasPostAddText = element(by.xpath('(//textarea[@id="text1"])[2]'));
        this.replacedGasMeterYes = element(by.xpath('//input[@id="gtp13"]/following-sibling::span[@class="outer"]'));
        this.replacedGasRegulatorYes = element(by.xpath('//input[@id="gtp15"]/following-sibling::span[@class="outer"]'));
        this.GasTightnessYes = element(by.xpath('//input[@id="gtp17"]/following-sibling::span[@class="outer"]'));
        this.capturePostInstallationGas = element(by.id('btn_CapPoTi_test'));
        this.DIPGASYes = element(by.xpath('//input[@id="gtp19"]/following-sibling::span[@class="outer"]'));
        this.dipSelectDD = element(by.id('select1'));
        this.meterTypeGASDD = element(by.id('select2'));
        this.tightnessPassedYes = element(by.xpath('//input[@id="gtp21"]/following-sibling::span[@class="outer"]'));
        this.witnessName = element(by.xpath('//form/input[@id="input3"]'));
        this.standingPressure = element(by.id('gaspoststandingpressure'));
        this.dipCaptureBtn = element(by.id('btn_CapStPr'));
        this.workingpressure = element(by.id('gaspostworkingpressure'));
        this.wpCapture = element(by.xpath('(//div[@id="btn_CapStPr"])[2]'));
        this.finalMeterCapture = element(by.xpath('//button[@id="btn2"]'));
        this.polNxtBtn = element(by.xpath('(//div/button[@id="btnNextPol"])[2]'));
     
    

    
    }

// Installation electric risk assessment function

public async fillRiskAssesmentElecFieldsINST16() 
{
    if (await this.performRiskText.isDisplayed()) {
        await this.performRiskYES.click();
    }
  
    if (await this.RiskAssessmentPassYES.isDisplayed()) {
        await this.RiskAssessmentPassYES.click();
    }
    if (await this.riskAssessmentinput.isDisplayed()) {
        await this.riskAssessmentinput.sendKeys('Testing Input');
    }

} 

public async fillthePolarityCheckMeterOutINST16() 
{
        await expect(this.polarityCheckCutOutYES.isPresent());
        await this.polarityCheckCutOutYES.click();
}

public async fillAdditionalElecCheckDetailsINST16() 
{
    await utility.wait(6000);
    await this.visualCheckPMEBonding.click();
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
    if (await this.cableMArkerDD.isDisplayed()) {
        var select = this.cableMArkerDD;
        select.$('[value="1"]').click();
    }
    await utility.wait(1000);
    if (await this.earthTypeDD.isDisplayed()) {
        var select = this.earthTypeDD;
        select.$('[value="1"]').click();
    }
    await utility.wait(1000);
    await this.replacementMeterBoardYes.click();
    await this.meterTailsChangedNo.click();
    await this.replacedMainFuseYes.click();
    await this.emerJobNo.click();
    await this.additionalElecNxtBtn.click();
    await utility.wait(1000);

}

public async fillPostInstallationCheckINST16() {
    await this.carryOutPolarityChkYes.click();
    
    await this.postpolNotes.sendKeys('Additional Remarks');
    await utility.wait(1000);
    
    if (await this.polChkDD.isDisplayed()) {
        var select = this.polChkDD;
        select.$('[value="true"]').click();
    }
    await utility.wait(1000);
    await this.confirmSocketPass.click();
}

public async fillNewMeterDetailsInst16(index:number) 
{
     await utility.wait(2000);

    if (await this.newMeterDD.isDisplayed()) 
    {
        await utility.wait(3000);
        // click the dropdown
        this.newMeterDD.click()
        browser.sleep(3000)
         index = index ;
        console.log("Selecting element based index : "+index) 
        await this.newMeterDD.element(by.css("option:nth-child("+index+")")).click()
        await utility.wait(5000);
            //await this.commshubPopup.click();
        

       // await expect(await this.inputelecSerialNum.isDisplayed());
        var options = this.selectinstallMeterOption.getAttribute('value');
        console.log("Selecting element based index : "+ options) 
        await this.inputelecSerialNum.sendKeys(options);
    
        await this.randomEUDevice.click();
    let ale: Alert = browser.switchTo().alert();
    // clicks 'OK' button
    ale.accept();
    await utility.wait(5000);

    await this.commshubPopup.click();
    await utility.wait(5000);
//-------------------------------------
    // if (await this.manufactureLetterDD.isDisplayed()) {
    // var select1 = this.manufactureLetterDD;
    // 	select1.$('[value="34"]').click();
    // }
    // await utility.wait(2000);
    //commenting cgp------------------------
    await utility.wait(4000);
    if (await this.MeterTypeDD.isDisplayed()) {
    	var select2 = this.MeterTypeDD;
        select2.$('[value="0"]').click();
    }
    if (await this.MeterTypeDD.isDisplayed()) {
		var select2 = this.MeterTypeDD;
		select2.$('[value="0"]').click();
		}
    await utility.wait(4000);
    if (await this.meterLocDD.isDisplayed()) {
        var select3 = this.meterLocDD;
        //select3.$('[value="D"]').click();
        select3.$('[value="I"]').click();

        //
    }
    await utility.wait(4000);

    await expect(await this.inputDate.isDisplayed());
    //await this.inputDate.sendKeys('90/01');
    await this.inputDate.sendKeys('19/09');

    await this.newMeterNxtBtn.click();
    await utility.wait(3000);

} 
}

public async fillPostInstallationGasDetailsInst16() {
    //cgp adding
    await utility.wait(3000);
    await this.contactGTYES.click();
    
    await this.nationalGTRefInput.sendKeys('1');
    await utility.wait(2000);
    await this.reportedIncidentYES.click();
    await utility.wait(2000);
    await this.airLineRefNo.sendKeys('2');
    await utility.wait(2000);
    await this.waitForGTYES.click();
    await utility.wait(2000);
    await this.gtResolveIssueYES.click();
    await utility.wait(2000);
    await this.GAStightnessTestYes.click();
    await utility.wait(2000);
    await this.replacedGasMeterYes.click();   
    await utility.wait(2000);

    //await this.tightnessPassedYes.click();
    //await utility.wait(2000);
    await this.additionalWork1.click();
    await this.additionalWork2.click();
    await this.additionalWork3.click();
    await this.additionalWork4.click();
    await this.additionalWork5.click();
    await this.additionalWork6.click();
    await utility.wait(2000);
    await this.replacedGasMeterYes.click();
    await utility.wait(2000);
    
    await this.replacedGasRegulatorYes.click();
    await utility.wait(2000);
    await this.GasTightnessYes.click();
    await utility.wait(2000);
    await this.capturePostInstallationGas.click();
    await this.DIPGASYes.click();
    await utility.wait(2000);



    if (await this.dipSelectDD.isDisplayed()) {
        var select3 = this.dipSelectDD;
        select3.$('[value="1"]').click();
    }
    await utility.wait(5000);

    if (await this.meterTypeGASDD.isDisplayed()) {
        var select3 = this.meterTypeGASDD;
        select3.$('[value="1"]').click();
    }
    await utility.wait(5000);
    await this.tightnessPassedYes.click();
    await utility.wait(2000);
    await this.witnessName.sendKeys('CGP');
    await utility.wait(2000);
    await this.standingPressure.sendKeys('1.1');
    await utility.wait(2000);
    await this.dipCaptureBtn.click();
    await utility.wait(2000);
    await this.workingpressure.sendKeys('2.0');
    await utility.wait(2000);
    await this.wpCapture.click();
    await utility.wait(2000);
    await this.finalMeterCapture.click();
    await utility.wait(2000);
    await this.polNxtBtn.click();
}


}

