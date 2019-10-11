import {
	browser,
	protractor
} from "protractor";
import {
	config
} from "../../config/config";
const {
	Given,
	When,
	Then
} = require("cucumber");
import {
	Utility
} from "../../support/utility";

const utility: Utility = new Utility();
const chai = require("chai");
const expect = chai.expect;

let appointmentid=0;
Given('I post workorder using {string}', async function (filename) {
	appointmentid = await utility.sendsoaprequest(filename,config.SOAPUSER);
	expect(appointmentid).to.not.equal(0);
	await utility.wait(utility.medium);
});

When('I delete workorder after use', async function () {
  await utility.deletesoaprequest(appointmentid);
	await utility.wait(5000);
});

Then('workorder should no longer exist', async function () {
	await utility.checkusingGET(appointmentid);
	  await utility.wait(500);
  });
