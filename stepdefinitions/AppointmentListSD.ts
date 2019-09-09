import {Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {MarkAppointmentListPageObject} from "../pages/MarkAppointmentListPage";

const chai = require("chai");
const expect = chai.expect;
const appointmentListForm: MarkAppointmentListPageObject = new MarkAppointmentListPageObject();
const utility: Utility = new Utility();

Then('the Appointment List Form is displayed', async function () {
    appointmentListForm.verifyAppointmentListFormSelectLinksExist();
    await utility.wait(1000);
});

When('I click on the Select link', async function () {
    await appointmentListForm.clickOnRelevantSelectLink();
    await utility.wait(1000);
});

