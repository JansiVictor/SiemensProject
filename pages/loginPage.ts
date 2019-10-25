import {
  $, ElementFinder, element,
  by, browser
} from "protractor";
import {
  Utility
} from "../support/utility";
import {
  GenericPageObject
} from "../pages/GenericPage"
import { config } from "../config/config";
const utility: Utility = new Utility();
const Gen: GenericPageObject = new GenericPageObject();

export class loginPageObject {
  public usernameTextBox: ElementFinder;
  public passwordTextBox: ElementFinder;
  public loginButton: ElementFinder;

  constructor() {
    this.usernameTextBox = element(by.model("username"));
    this.passwordTextBox = element(by.model("password"));
    this.loginButton = element(by.xpath("//div/button[@id='btn']"));
  }

  public async setUsernamePassword(username: string, password: string) {
    await utility.wait(utility.low);
    this.usernameTextBox.sendKeys(username);
    await utility.wait(utility.low);
    this.passwordTextBox.sendKeys(password);
    await utility.wait(utility.low);
  }

  public async clickLogin() {
    //await this.loginButton.click();
    Gen.ButtonClick(this.loginButton, utility.medium);
  }

  /***
	 * @Author Jansi Victor
	 * @description Generic Login Function
	 ***/
  public async performLogin() {
    await browser.get(config.baseUrl);
    await utility.wait(utility.medium_low);
    await this.setUsernamePassword(config.USERNAME, config.PASSWORD);
    await utility.wait(utility.very_low);
    await this.clickLogin();
    await utility.wait(utility.medium);
    await utility.wait(utility.medium);
  }
}
