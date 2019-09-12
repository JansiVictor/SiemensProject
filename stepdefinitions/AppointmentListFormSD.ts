import {Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {MarkAppointmentListPageObject} from "../pages/AppointmentListFormPage";

const chai = require("chai");
const expect = chai.expect;
const appointmentListForm: MarkAppointmentListPageObject = new MarkAppointmentListPageObject();
const utility: Utility = new Utility();

Then('I should see the Appointment List Form', async function () {
    appointmentListForm.isH1HeaderPresentAppointmentListPage();
    await utility.wait(5000);
});

When('I click on the Select link', async function () {
    await appointmentListForm.clickOnRelevantSelectLink();
    await utility.wait(1000);
});