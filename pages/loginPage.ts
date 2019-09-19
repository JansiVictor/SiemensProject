import { $, ElementFinder, element, by, browser } from "protractor";

export class loginPageObject {
    public usernameTextBox: ElementFinder;
    public passwordTextBox: ElementFinder;
    public loginButton: ElementFinder;

    constructor() {
       this.usernameTextBox = element(by.model("username"));
       this.passwordTextBox = element(by.model("password"));
       this.loginButton = element(by.id("submitbutton"));
    }

    public setUsernamePassword(username: string, password: string) {
      browser.sleep(5000);
      this.usernameTextBox.sendKeys(username);
      browser.sleep(5000);
      this.passwordTextBox.sendKeys(password);
      browser.sleep(80000);
    }

    public async clickLogin(){
      await this.loginButton.click();
    }
}
