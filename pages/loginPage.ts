import {
  $, ElementFinder, element,
  by, browser
} from "protractor";
import {
  Utility
} from "../support/utility";
import { config } from "../config/config";
const utility: Utility = new Utility();

export class loginPageObject {
  public usernameTextBox: ElementFinder;
  public passwordTextBox: ElementFinder;
  public loginButton: ElementFinder;

  constructor() {
    this.usernameTextBox = element(by.model("username"));
    this.passwordTextBox = element(by.model("password"));
    this.loginButton = element(by.id("submitbutton"));
  }

  public async setUsernamePassword(username: string, password: string) {
    await utility.wait(utility.low);
    this.usernameTextBox.sendKeys(username);
    await utility.wait(utility.low);
    this.passwordTextBox.sendKeys(password);
    await utility.wait(utility.low);
  }

  public async clickLogin() {
    await this.loginButton.click();
  }

  /***
	 * @Author Jansi Victor
	 * @description Generic Login Function
	 ***/
  public async performLogin() {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
    await this.setUsernamePassword(utility.username, utility.password);
    await utility.wait(500);
    await this.clickLogin();
    await utility.wait(utility.medium);
  }
}
