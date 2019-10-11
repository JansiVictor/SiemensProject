import {
	browser,
	protractor
} from "protractor";
import {
	AbortPageObject
} from "../../pages/AbortPage";
import {
	HomePageObject
} from "../../pages/HomePage";
import {
	ElectricPageObject
} from "../../pages/ElectricPage";
import {
	GASPageObject
} from "../../pages/GASPage";
import {
	config
} from "../../config/config";
import {
	Utility
} from "../../support/utility";
import { homedir } from "os";
import { JobCompletionPageObject } from "../../pages/JobCompletionPage";
const {
	Given,
	When,
	Then
} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;

const delay = ms => new Promise(res => setTimeout(res, ms));
const utility: Utility = new Utility();
const installleave: AbortPageObject = new AbortPageObject();
const home: HomePageObject = new HomePageObject();
const riskassess: ElectricPageObject = new ElectricPageObject();
const riskassessGAS: GASPageObject = new GASPageObject();
const jobComplete: JobCompletionPageObject = new JobCompletionPageObject();

When('I fill the InstallLeave Commission Bind the Comms hub to the WAN details fields with values', async function () {
	await installleave.fillCommissioningDetails_InstallLeave();
  });

Then('I should see InstallLeave Replace CommsHubNoWan section', async function () {
	await installleave.verifyReplaceCommshubNoWANSection();
});

Given('InstallLeave Replace CommsHubNoWan section', async function () {
	await installleave.verifyReplaceCommshubNoWANSection();
});

When('I fill the InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails(4);
});

When('I fill the FLTYTRAD InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_FLTYTRAD(4);
});

When('I fill the FLTY InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_FLTY20(4);
});

When('I fill the EXCH19 InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_EXCH19(4);
});

When('I fill the EXCH23 InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_EXCH23(4);
});

When('I fill the EXCH22 InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_EXCH22(4);
});

When('I fill the GNMEX InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_GNMEX(4);
});

When('I fill the ENMEX InstallLeave Replace CommshubNoWan details fields with values', async function (){
	await installleave.fillReplaceCommshubdetails_ENMEX(4);
});

Then('I should see InstallLeave Submit button', async function () {
	await installleave.clickElecSubmitButton();
	await utility.wait(utility.low);
});

Then('I should see InstallLeave GAS Submit button', async function () {
	await installleave.clickGasSubmitButton();
});

When('I fill the InstallLeave PPMID section fields with values', async function (){
	await installleave.fillPPMIDSection();
});

When('I fill the EXCH22 InstallLeave PPMID section fields with values', async function (){
	await installleave.fillPPMIDSection_EXCH22();
});

When('I fill the InstallLeave Binding and commissioning of PPMID fields with values', async function ()
{
	await installleave.fillDeviceBindingSection();
});

When('I fill the EXCH19 InstallLeave Binding and commissioning of PPMID fields with values', async function ()
{
	await installleave.fillDeviceBindingSection_EXCH19();
});

When('I fill the InstallLeave configuration of all meters installed  fields with values', async function ()
{
	await installleave.fillConfigAllMetersSection();
});

When('I fill the EXCH19 InstallLeave configuration of all meters installed  fields with values', async function ()
{
	await installleave.fillConfigAllMetersSection_EXCH19();
});

When('I fill the Perform InstallLeave Smart Meter Education and Demonstration  fields with values', async function ()
{
	await installleave.fillSmartLiteratureEducationSection();
})

When('I fill the InstallLeave Post Installation GAS section fields with values', async function()
{
	await installleave.fillPostInstallationGasDetailsInstallLeave();
});

When('I fill the EXCH22 InstallLeave Post Installation GAS section fields with values', async function()
{
	await installleave.fillPostInstallationGasDetails_EXCH22();
});

Then('I should see InstallLeave Summary of Job and Smart literature left onsite section',async function () {
	await jobComplete.summaryDisplay();
	await utility.wait(utility.medium);
	await installleave.SmartNoLiteraturedispaly();
});

Given('the InstallLeave Smart No literature left onsite section', async function () {
	await installleave.SmartNoLiteraturedispaly();
});

Then('I click the Gas Install Submit Button' , async function(){
	await installleave.clickGasInstallSubmitButton();
})

Then('I click the Gas NMEX Install Submit Button' , async function(){
	await installleave.clickNMEXInstallSubmitButton();
	await utility.wait(utility.low);
})

Then('I click the EXCH23 Elec Install Submit Button' , async function(){
	await installleave.clickElecInstallSubmitButton();
})

When('I fill the EXCH22 InstallLeave Binding and commissioning of PPMID fields with values', async function ()
{
	await installleave.fillDeviceBindingSection_Installremove();
});

When('I fill the EXCH23 InstallLeave Binding and commissioning of PPMID fields with values', async function ()
{
	await installleave.fillDeviceBindingSection_InstallEXCH23();
});

When('I fill the InstallAndLeave Remove meter values for EXCH23', async function () {

	await installleave.fillElecmeterremEX23();
	
  });

  When('I fill the FLTY InstallAndLeave Remove meter values', async function () {

	await installleave.fillElecmeterrem_FLTY();
	
  });

  When('I fill the InstallAndLeave Remove Gas meter values for EXCH24', async function () {

	await installleave.fillGasmeterremEX24();
	
  });

  When('I fill the InstallAndLeave New Regulator values', async function () {

	await installleave.newregulatorsection_EXCH24();
	
  });


  When('I fill the FLTY InstallAndLeave New Regulator values', async function () {

	await installleave.newregulatorsection_FLTYTRAD();
	
  });

  When('I fill the InstallAndLeave Install Kit Values', async function () {

	await installleave.fillGasInstallKitDetails_InstallLeave();
	
  });

  When('I fill the InstallAndLeave Post Installation Tightness Test Values', async function () {

	await installleave.fillthefieldsforperformpost_InstallAndLeave();
	
  });

  Then('I should see InstallAndLeave SMART EDUCATION section', async function () {
	await jobComplete.smartEducation();
  });


  Then('I should fill InstallAndLeave field16 with the value16', async function () {
	await installleave.fill16commsdtls_InstallAndLeave();
  });

  Then('I should fill InstallAndLeave FLTY Commissioning Values', async function () {
	await installleave. fillCommissioningDetails_FLTYInstallLeave();
  });