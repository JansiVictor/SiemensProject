import {Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {MarkAppointmentDetailsPageObject} from "../pages/MarkAppointmentDetailsFormPage";

const chai = require("chai");
const expect = chai.expect;
const appointmentDetailsForm: MarkAppointmentDetailsPageObject = new MarkAppointmentDetailsPageObject();
const utility: Utility = new Utility();

Then('I should see the Appointment Details Form', async function () {
    appointmentDetailsForm.isH1HeaderPresentAppointmentDetailsPage();
});

When('I click on the Call Forward Button', async function () {
    appointmentDetailsForm.clickOnCallForwardBtn();
    await utility.wait(1000);
});

Then('I should see the Customer Contact Number', async function () {
    appointmentDetailsForm.isCustContactNoTextPresent();
});

Then('the Contact Made Radio? Radio Option', async function () {
    appointmentDetailsForm.isContactMadeElementsPresent();
});

Then('the Appointment Confirm? Radio Option', async function () {
    appointmentDetailsForm.isAppointmentConfirmTextElementsPresent();
});

Then('the Additional Access Details Notes Textfield', async function () {
    appointmentDetailsForm.isAdditionaAccessDetailElementsPresent();
});

When('I update the Appointment pre-check options', async function () {
    appointmentDetailsForm.updatePreCheckOptionsForSelectedAppointment();
    await utility.wait(2000);
});

Then('click on the Depart button', async function () {
    appointmentDetailsForm.clickOnDepartBtn();
    await utility.wait(10000);
});


