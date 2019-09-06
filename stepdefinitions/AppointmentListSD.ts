import {Then} from "cucumber";
import {FLTY19homePageObject} from "../pages/FLTY19homePage";
const home: FLTY19homePageObject = new FLTY19homePageObject();

Then('the Appointment List is displayed', async function () {
    await home.seeAppList();
});