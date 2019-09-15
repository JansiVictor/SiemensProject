import {Given, Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {InstallPageObject} from "../pages/InstallPage";


const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const installPage: InstallPageObject = new InstallPageObject();

Then('I should see the Perform Additional Electricity Tests & Checks section', async function () {
    await installPage.isH1HeaderPresentInstallPage();
});
