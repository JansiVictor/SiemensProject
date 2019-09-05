import { browser,
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

export class RiskAssessmentforGASPageObject {

	public riskAssessGas: ElementFinder;
	public meterPressureLow: ElementFinder;
	public voltStickYEs: ElementFinder;
	public theftOfGasYes: ElementFinder;
	public ecvChksPAss: ElementFinder;
	public workAreaSafetyYes: ElementFinder;
	public captureEvidence: ElementFinder;
	public additionalGASNote: ElementFinder;
	public safeToContinueYEs: ElementFinder;
	public suitableforSmartInstallationTxt: ElementFinder;
	public suitableforInstaYes: ElementFinder;
	public repositionReqDD: ElementFinder;
	public additionalSmartNote: ElementFinder;
	public suitablenxtBtn: ElementFinder;
	public captureInitialPhotogastxt: ElementFinder;
	public captureInitialPhotogasbtn: ElementFinder;
	public preInstalationGASTxt: ElementFinder;
	public gasTightnessYes: ElementFinder;
	public captureGTTPhotobtn: ElementFinder;
	public dropInPressreYes: ElementFinder;
	public DIPGasDD: ElementFinder;
	public meterTypeDD: ElementFinder;
	public CustSmellGasYes: ElementFinder;
	public gasTightnessRemrk: ElementFinder;
	public failureOutcomeGT: ElementFinder;
	public reportToGTYes: ElementFinder;
	public inputGTRef: ElementFinder;
	public reportedToHSYEs: ElementFinder;
	public inputAirLineRef: ElementFinder;
	public waitForGTYes: ElementFinder;
	public GTResolveIssue: ElementFinder;
	public currentMeterDetailsTxt: ElementFinder;
	public newRegulatorTxt: ElementFinder;
	public regulatorReplacedYes: ElementFinder;
	public selectValidAssetDD: ElementFinder;
	public OKpopupBtn: ElementFinder;
	public regulatorTxt: ElementFinder;
    public newRegulatorNxtBtn: ElementFinder;
    public newMeterDD: ElementFinder;
	public inputelecSerialNum: ElementFinder;
	public manufactureLetterDD: ElementFinder;
	public MeterTypeDD: ElementFinder;
	public meterLocDD: ElementFinder;
	public gasInitialMeterTxt: ElementFinder;
    public regulatorSerialNoinput: ElementFinder;
    public commshubPopup: ElementFinder;
	public NewMeterDetailsText: ElementFinder;
	public randomEUDevice: ElementFinder;
    public capturemeterReadingInput: ElementFinder;
    public capturreMeterReadingTxt: ElementFinder;
    public installKitTxt: ElementFinder;
    public installKitUsedYes: ElementFinder;
    public nonSerialisedAsssetsDD: ElementFinder;
    public assetInput: ElementFinder;
    public installKitNxtBtn: ElementFinder;
    public postInstallationGasTxt: ElementFinder;
    public additionalTxtPreInstallGas: ElementFinder;
    public selectassettoInstallGas: ElementFinder;
    public selectNewMeterGasOptn: ElementFinder;
    public inputMeterSerialNum: ElementFinder;
    public contactGTYEs: ElementFinder;
    public GAStightnessTestYes: ElementFinder;
    public GasTightnessTestPerformedYes: ElementFinder;
    public nationalGTRefInput: ElementFinder;
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
    public gicomSendMessage: ElementFinder;
    public successfulBtn: ElementFinder;
    public gasAppliencesSafetyTxt: ElementFinder;
    public earthBondingYEs: ElementFinder;
    public landLordPropertyYes: ElementFinder;
    public gasAddressinput: ElementFinder;
    public allAppliTestedBtn: ElementFinder;
    public submitGas: ElementFinder;
    public landLordPropertyNo: ElementFinder;
    


	constructor() {
		this.riskAssessGas = element(by.id('Title_RiskAss_gas'));
		this.meterPressureLow = element(by.xpath('//input[@id="radiorag1"]/following-sibling::span[@class="outer"]'));
		this.voltStickYEs = element(by.xpath('//input[@id="raga0"]/following-sibling::span[@class="outer"]'));
		this.theftOfGasYes = element(by.xpath('//input[@id="raga1"]/following-sibling::span[@class="outer"]'));
		this.ecvChksPAss = element(by.xpath('//input[@id="raga2"]/following-sibling::span[@class="outer"]'));
		this.workAreaSafetyYes = element(by.xpath('//input[@id="raga3"]/following-sibling::span[@class="outer"]'));
		this.captureEvidence = element(by.xpath('(//button[@id="btn1"])[1]'));
		this.additionalGASNote = element(by.id('text1'));
		this.safeToContinueYEs = element(by.xpath('//input[@id="radiorag5"]/following-sibling::span[@class="outer"]'));
		this.suitableforSmartInstallationTxt = element(by.id('Title_Smart_Elec'));
		this.suitableforInstaYes = element(by.id('rb_SuitFS_y'));
		this.repositionReqDD = element(by.id('repositionSelect'));
		this.additionalSmartNote = element(by.id('smartnotes'));
		this.suitablenxtBtn = element(by.id('btn_Next_Section'));
		this.captureInitialPhotogastxt = element(by.id('Title_Init_Photo'));
		this.captureInitialPhotogasbtn = element(by.id('btn_Init_Photo'));
		this.preInstalationGASTxt = element(by.xpath('//div/h4[text()="Pre Installation Gas Tightness Test"]'));
		this.gasTightnessYes = element(by.id('rb_PreGasTigTCarOut_y'));
		this.captureGTTPhotobtn = element(by.id('btn_CapPho_GTT'));
		this.dropInPressreYes = element(by.id('rb_WasDropPress_y'));
		this.DIPGasDD = element(by.id('cbx_DipPress_sel'));
		this.meterTypeDD = element(by.id('cbx_MetreType_sel'));
		this.CustSmellGasYes = element(by.id('rb_SmellGas_y'));
		this.gasTightnessRemrk = element(by.id('txt_AddNotGasTigT'));
		this.failureOutcomeGT = element(by.id('rb_TestFailOutCmGTIss_y'));
		this.reportToGTYes = element(by.id('rb_RepGT_y'));
		this.inputGTRef = element(by.id('gt_issue'));
		this.reportedToHSYEs = element(by.id('rb_RepAirLine_y'));
		this.inputAirLineRef = element(by.id('hsjobref'));
		this.waitForGTYes = element(by.id('rb_GTAttSite_y'));
		this.GTResolveIssue = element(by.id('rb_GTResIss_y'));
		this.currentMeterDetailsTxt = element(by.id('Title_CurrMe_Det'));
		this.newRegulatorTxt = element(by.id('TITLE_RegNew'));
		this.regulatorReplacedYes = element(by.xpath('//input[@id="regulator_replacedtrue"]/following-sibling::span[@class="outer"]'));
        this.selectValidAssetDD = element(by.model('scp.selectedAsset'));
        this.regulatorSerialNoinput = element(by.id('btn_RegSNum1'));
		this.OKpopupBtn = element(by.xpath('//div/button[text()="OK"]'));
		this.regulatorTxt = element(by.xpath('//div[text()="Regulator Serial No(s):"]'));
        this.newRegulatorNxtBtn = element(by.id('newRegulator_nextButton'));
        this.newMeterDD = element(by.xpath('//select[@id="newMeter_assetSelect"]'));
		this.manufactureLetterDD = element(by.id('select_man_letter'));
		this.MeterTypeDD = element(by.id('select_meter_letter'));
		this.meterLocDD = element(by.id('cbx_MetLoc_sel'));
		this.gasInitialMeterTxt = element(by.xpath('//div/h4[text()="Gas Initial Meter Reading"]'));
        this.NewMeterDetailsText = element(by.id('Title_newMeter'));
        this.commshubPopup = element(by.xpath('//div/button[text()="OK"]'));
		this.capturemeterReadingInput = element(by.id('reg0'));
        this.randomEUDevice = element(by.xpath('//div[text()="EUI Device ID:"]'));
        this.inputelecSerialNum = element(by.id('btn_RegSNum1'));
		this.capturreMeterReadingTxt = element(by.xpath('//div[text()="Capture Meter Reading - Register (null):"]'));
        this.installKitTxt = element(by.xpath('//div/h4[text()="Install Kit"]'));
        this.installKitUsedYes = element(by.xpath('//input[@id="inp1"]/following-sibling::span[@class="outer"]'));
        this.nonSerialisedAsssetsDD = element(by.id('assetselect0'));
        this.assetInput = element(by.id('assetinput0'));
        this.installKitNxtBtn = element(by.id('btnNextrmmip'));
        this.postInstallationGasTxt = element(by.xpath('//div/h4[text()="Post Installation Gas Tightness Test"]'));
        this.additionalTxtPreInstallGas = element(by.id('txt_AddNotGasTigT'));
        this.selectassettoInstallGas = element(by.xpath('(//select[@ng-model="scp.selectedAsset"]/option)[1]'));
        this.selectNewMeterGasOptn = element(by.xpath('(//select[@id="newMeter_assetSelect"]/option)[2]'));
        this.inputMeterSerialNum = element(by.xpath('(//div/input[@id="txt_Serial_Num"])[1]'));
        this.contactGTYEs = element(by.xpath('//input[@id="gtp1"]/following-sibling::span[@class="outer"]'));
        //this.contactGTYEs = element(by.id('gtp11'));
        this.GAStightnessTestYes = element(by.xpath('//input[@id="gtp11"]/following-sibling::span[@class="outer"]'));
        this.GasTightnessTestPerformedYes = element(by.xpath('//input[@id="gtp17"]/following-sibling::span[@class="outer"]'));
        this.nationalGTRefInput = element(by.id('input1'));
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
        this.gicomSendMessage = element(by.id('gicom_sendMessageButton'));
        this.successfulBtn = element(by.id('gicom_nextButton'));
        this.gasAppliencesSafetyTxt = element(by.xpath('//div/h4[text()="Gas Appliance Safety Checks"]'));
        this.earthBondingYEs = element(by.xpath('//input[@id="radioraa1a"]/following-sibling::span[@class="outer"]'));
        this.landLordPropertyYes = element(by.xpath('//input[@name="5341"]/following-sibling::span[@class="outer"]'));
        this.landLordPropertyNo = element(by.id('radioraa4'));
        this.gasAddressinput = element(by.xpath('(//input[@id="input1"])[2]'));
        this.allAppliTestedBtn = element(by.id('btn_AllApp_tested'));
        this.submitGas = element(by.id('btn_Subm_gas'));

	}

	public async riskAssessmentGASDisplayed() {
		if (this.riskAssessGas.isDisplayed()) {
			await this.riskAssessGas.getText().then(function (riskAssess) {
				console.log("find riskAssess Text  " + riskAssess);
			});
		}

	}

	public async fillRiskAssessGas() {
		await this.meterPressureLow.click();
		await this.voltStickYEs.click();
		await this.theftOfGasYes.click();
		await this.ecvChksPAss.click();
		await this.workAreaSafetyYes.click();
		await this.captureEvidence.click();
		await expect(await this.additionalGASNote.isPresent());
		await this.additionalGASNote.sendKeys('Fault Checked');
		await this.safeToContinueYEs.click();
		await utility.wait(2000);
    }
    
	public async suitableForSmartInstallationTxt() {

		if (this.suitableforSmartInstallationTxt.isDisplayed()) {
			await this.suitableforSmartInstallationTxt.getText().then(function (suitableforSmartInstallation) {
				console.log("find suitableforSmartInstallation Text  " + suitableforSmartInstallation);
			});
		}

	}

	public async fillSuitablityForSmartInstallation() {
		await this.suitableforInstaYes.click();
		if (await this.repositionReqDD.isDisplayed()) {
			var select = this.repositionReqDD;
			select.$('[value="No Reposition Required"]').click();
		}
		await utility.wait(1000);
        await this.additionalSmartNote.sendKeys('Add Remarks');
        await utility.wait(1000);
        await this.suitablenxtBtn.click();
	}

	public async captureInitialPhotoTxt() {
		if (this.captureInitialPhotogastxt.isDisplayed()) {
			await this.captureInitialPhotogastxt.getText().then(function (captureInitialPhotogas) {
				console.log("find captureInitialPhotogas Text  " + captureInitialPhotogas);
			});
        }
        await this.captureInitialPhotogasbtn.click();
	}

	public async preInstallationGasTTxt() {
		if (this.preInstalationGASTxt.isDisplayed()) {
			await this.preInstalationGASTxt.getText().then(function (preInstalationGAS) {
				console.log("find preInstalationGAS Text  " + preInstalationGAS);
			});
		}
	}

	public async preInstallationGasT() {
		await this.gasTightnessYes.click();
		await this.captureGTTPhotobtn.click();
		await this.dropInPressreYes.click();
		if (await this.DIPGasDD.isDisplayed()) {
			var select = this.DIPGasDD;
			select.$('[value="2"]').click();
		}
		await utility.wait(2000);
		if (await this.meterTypeDD.isDisplayed()) {
			var select = this.meterTypeDD;
			select.$('[value="2"]').click();
		}
		await utility.wait(2000);
		await this.CustSmellGasYes.click();
		
		
		await expect(await this.additionalTxtPreInstallGas.isPresent());
		await this.additionalTxtPreInstallGas.sendKeys('Reference Text');
        await this.failureOutcomeGT.click();
        await this.reportToGTYes.click();
        await expect(await this.inputGTRef.isPresent());
		await this.inputGTRef.sendKeys('1234');
        await this.reportedToHSYEs.click();
        if (this.inputAirLineRef.isDisplayed()) {
			await utility.wait(2000);
			await this.inputAirLineRef.sendKeys('5678910');
        }
        await this.waitForGTYes.click();
		await this.GTResolveIssue.click();
		await utility.wait(2000);
	}

	public async currentMeterDetailsTxtDisplay() {

		if (this.currentMeterDetailsTxt.isDisplayed()) {
			await this.currentMeterDetailsTxt.getText().then(function (currentMeterDetails) {
				console.log("find currentMeterDetails Text  " + currentMeterDetails);
			});
		}

    }

/***
 * @Author Aparna Das
 * @description Verify new meter regulator section displayed
***/

public async meterRegulatorDetailsTxtDisplay() {

    if (this.newRegulatorTxt.isDisplayed()) {
        await this.newRegulatorTxt.getText().then(function (regulator) {
            console.log("find regulator Text  " + regulator);
        });
    }

}
    
/***
 * @Author Aparna Das
 * @description Fill new meter regulator details GAS
***/
public async fillMeterRegulatorDetailsGAS() {
    await this.regulatorReplacedYes.click();
    
// if (await this.selectValidAssetDD.isDisplayed()) {
// await utility.wait(2000);
// // click the dropdown
// this.selectValidAssetDD.click()
// browser.sleep(1000)
// //index = index ;
// console.log("Selecting element based index : "+index)
// // select the option
// await this.selectValidAssetDD.element(by.css("option:nth-child("+index+")")).click()
// await utility.wait(3000);
// //await this.commshubPopup.click();

// await expect(await this.inputelecSerialNum.isPresent());
// var options=this.selectassettoInstallGas.getAttribute('value');
// await this.inputelecSerialNum.sendKeys(options);

    if (await this.selectValidAssetDD.isDisplayed()) {
        var select = await this.selectValidAssetDD;
        select.$('[value="MA6NC000000003"]').click();
    }
    await utility.wait(2000);
    await expect(await this.regulatorSerialNoinput.isPresent());
    await this.regulatorSerialNoinput.clear();
    await this.regulatorSerialNoinput.sendKeys('MA6NC000000003');
    await this.regulatorTxt.click();
    await utility.wait(2000);
    await this.commshubPopup.click();
    await utility.wait(2000);
    await this.newRegulatorNxtBtn.click();
    await utility.wait(1000);
    //}
}

/***
 * @Author Aparna Das
 * @description Verify new meter details section displayed
***/

public async newMeterDetailsTxtDisplay() {

    if (this.NewMeterDetailsText.isDisplayed()) {
        await this.NewMeterDetailsText.getText().then(function (NewMeter) {
            console.log("find NewMeter Text  " + NewMeter);
        });
    }

}


/***
 * @Author Aparna Das
 * @description Fill new meter details GAS
***/

public async fillNewMeterDetailsGAS(index:number) {
    if (await this.newMeterDD.isDisplayed()) {
        await utility.wait(2000);
        // click the dropdown
        this.newMeterDD.click()
        browser.sleep(1000)
        //index = index ;
        console.log("Selecting element based index : "+index)
        // select the option
        await this.newMeterDD.element(by.css("option:nth-child("+index+")")).click()
        await utility.wait(3000);
        //await this.commshubPopup.click();
        
        await expect(await this.inputMeterSerialNum.isPresent());
        var options=this.selectNewMeterGasOptn.getAttribute('value');
        await this.inputMeterSerialNum.sendKeys(options);
    await this.randomEUDevice.click();
    let ale: Alert = browser.switchTo().alert();
    // clicks 'OK' button
    ale.accept();
    await utility.wait(2000);
    await this.commshubPopup.click();
    await utility.wait(2000);

    // cgp add remove later-------------------------

    if (await this.manufactureLetterDD.isDisplayed()) {
        var select1 = this.manufactureLetterDD;
            select1.$('[value="34"]').click();
        }
        await utility.wait(2000);

        //-------------------------------


    if (await this.MeterTypeDD.isDisplayed()) {
        var select2 = this.MeterTypeDD;
        select2.$('[value="0"]').click();
    }
    await utility.wait(2000);
    if (await this.meterLocDD.isDisplayed()) {
        var select3 = this.meterLocDD;
        select3.$('[value="02"]').click();
    }
    await utility.wait(2000);
}
}

/***
 * @Author Aparna Das
 * @description Verify Gas initial meter reading section displayed
***/

public async gasInitialMeterTxtDisplay() {

    if (this.gasInitialMeterTxt.isDisplayed()) {
        await this.gasInitialMeterTxt.getText().then(function (GasInstall) {
            console.log("find GasInstall Text  " + GasInstall);
        });
    }
}

public async fillGasInitialMeterREading(){
    await expect(await this.capturemeterReadingInput.isPresent());
   // await this.capturemeterReadingInput.clear();
    await this.capturemeterReadingInput.sendKeys('12345');
    await this.capturreMeterReadingTxt.click();
    await utility.wait(2000);
    //await this.OKpopupBtn.click();
}

/***
 * @Author Aparna Das
 * @description Verify Gas install Kit section displayed
***/

public async gasInstallKitTxtDisplay() {

    if (this.installKitTxt.isDisplayed()) {
        await this.installKitTxt.getText().then(function (GasInstallKit) {
            console.log("find GasInstallKit Text  " + GasInstallKit);
        });
    }
}

/***
 * @Author Aparna Das
 * @description Fill Gas install Kit section 
***/

public async fillGasInstallKitDetails() {

        await this.installKitUsedYes.click();
        if (await this.nonSerialisedAsssetsDD.isDisplayed()) {
            var select3 = this.nonSerialisedAsssetsDD;
            select3.$('[value="1"]').click();
        }
        await utility.wait(2000);
        await this.assetInput.sendKeys('1');
        await this.installKitNxtBtn.click();
    }
    

/***
 * @Author Aparna Das
 * @description Verify Gas Post Installation Gas Tightness Test section displayed
***/

public async GasPostInstallationTxt() {

    if (this.postInstallationGasTxt.isDisplayed()) {
        await this.postInstallationGasTxt.getText().then(function (postInstallationGas) {
            console.log("find postInstallationGas Text  " + postInstallationGas);
        });
    }
}
/***
 * @Author Aparna Das
 * @description Fill Gas Post Installation Gas Tightness Test section
***/
public async fillPostInstallationGasDetails() {
    //cgp adding
    await utility.wait(5000);
    await this.contactGTYEs.click();
    await this.inputGTRef.sendKeys('12345');
    await this.tightnessPassedYes.click();
    await this.additionalWork1.click();
    await this.additionalWork2.click();
    await this.additionalWork3.click();
    await this.additionalWork4.click();
    await this.additionalWork5.click();
    await this.additionalWork6.click();
    await this.additionalSmartNote.click();
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
    await this.tightnessPassedYes.click();
    await this.witnessName.sendKeys('Denis');
    await this.standingPressure.sendKeys('1');
    await this.dipCaptureBtn.click();
    await this.workingpressure.sendKeys('1');
    await this.wpCapture.click();
    await this.finalMeterCapture.click();
    await this.polNxtBtn.click();
}
/***
 * @Author Aparna Das
 * @description GICOM Message display section
***/
    public async gicomSendMessageTxtDisplayed(){
        if (this.gicomSendMessage.isDisplayed()) {
            await this.gicomSendMessage.getText().then(function (gicomSendMsg) {
                console.log("find gicomSendMsg Text  " + gicomSendMsg);
            });
        }
        
    }

    /***
 * @Author Aparna Das
 * @description Fill Gas GICOM message section
***/

    public async filllGiComSection(){

    await this.gicomSendMessage.click();
    await utility.wait(80000);
    if (this.successfulBtn.isDisplayed()) {
        await this.successfulBtn.click();
        await utility.wait(3000);
    }
}

/***
 * @Author Aparna Das
 * @description Gas Safety check section displayed
***/
public async gasSafetyDisplay(){
    if (this.gasAppliencesSafetyTxt.isDisplayed()) {
        await this.gasAppliencesSafetyTxt.getText().then(function (gasAppliencesSafety) {
            console.log("find gasAppliencesSafety Text  " + gasAppliencesSafety);
        });
    }
}

/***
 * @Author Aparna Das
 * @description Fill Gas Safety check section
***/
public async fillGasSafety(){
    if (this.earthBondingYEs.isDisplayed()) {
        await this.earthBondingYEs.click();
    }
    if (this.landLordPropertyNo.isDisplayed()) {
        await this.landLordPropertyNo.click();
    }
    // if (this.gasAddressinput.isDisplayed()) {
    //     await this.landLordPropertyYes.sendKeys('UB22GT');
    // }
    if (this.allAppliTestedBtn.isDisplayed()) {
        await this.allAppliTestedBtn.click();
    }
    if (this.submitGas.isDisplayed()) {
        await this.submitGas.click();
    }

}

}