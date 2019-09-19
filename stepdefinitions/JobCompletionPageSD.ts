import {Utility} from "../support/utility";
import {JobCompletionPageObject} from "../pages/JobCompletionPage";

const {Given, When, Then} = require("cucumber");
const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const completionPage: JobCompletionPageObject = new JobCompletionPageObject();


Then('FLTYTwntyNoExchange I should see ENERGY EFFICIENCY INFORMATION section', async function () {
    await completionPage.energyeffInfo();
});

/**********"Energy Efficiency Information" */

Given('I have accessed the Energy Efficiency Information section', async function () {
    await completionPage.energyeffInfo();
});
When('I populate the Energy Efficiency form fields and click Next', async function () {
    await completionPage.fillfield55duelenergyeff();
});

Then('I should see the Capture Customer Signature section', async function () {
    await completionPage.summaryDisplay();
});

/**********"Capture Customer Signature" */
Given('I have accessed the Capture Customer Signature section', async function () {
    await completionPage.summaryDisplay();
});
When('I write my signature in the Customer Signature form field', async function () {
    await completionPage.fillAndPrintSummaryContent();
});
Then('I populate the Capture Customer Signature form fields and click Job Complete', async function () {
    await completionPage.FinalSubmission();
});
Then('I should see the Job Completed screen', async function () {
    await completionPage.JobCompletedFLTYNoExchangeScreen();

});





