import {Then, When} from "cucumber";
import {Utility} from "../support/utility";
import {DepartForApptDialogueBoxPageObject} from "../pages/DepartForApptDialogueBoxPage";
import {AppointmentDetailsPageObject} from "../pages/AppointmentDetailsFormPage";

const chai = require("chai");
const expect = chai.expect;
const utility: Utility = new Utility();
const appointmentDetailsForm: AppointmentDetailsPageObject = new AppointmentDetailsPageObject();
const departForApptDialogueBox: DepartForApptDialogueBoxPageObject = new DepartForApptDialogueBoxPageObject();

Then('I should see the Appointment Details Form', async function () {
    appointmentDetailsForm.isH1HeaderPresentAppointmentDetailsPage();
});

When('I click on the Call Forward Button', async function () {
    await appointmentDetailsForm.clickOnCallForwardBtn();
    await utility.wait(1000);
});

Then('I should see the Customer Contact Number', async function () {
    await appointmentDetailsForm.isCustContactNoTextPresent();
    await utility.wait(1000);
});

Then('the Contact Made? Radio Option', async function () {
    await appointmentDetailsForm.isContactMadeElementsPresent();
    await utility.wait(1000);
});

Then('the Appointment Confirm? Radio Option', async function () {
    await appointmentDetailsForm.isAppointmentConfirmTextElementsPresent();
});

Then('the Additional Access Details Notes Textfield', async function () {
    await appointmentDetailsForm.isAdditionaAccessDetailElementsPresent();
});

When('I update the pre-check options for my selected appointment', async function () {
    await appointmentDetailsForm.updatePreCheckOptionsForSelectedAppointment();
    await utility.wait(3000);
});

Then('click on the Depart button', async function () {
    appointmentDetailsForm.clickOnDepartBtn();
    await utility.wait(3000);
});

Then('the Depart for Appointment Dialogue Box is displayed', async function () {
    await departForApptDialogueBox.isdepartForApptDialogueBoxDisplayed();
});

When('I click on the Depart Ok button', async function () {
    await departForApptDialogueBox.clickOnDepartOkBtn();
    await utility.wait(3000);
});