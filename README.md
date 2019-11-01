<p> <strong><center><h1>SIEMENS-SMETS2 Mobility Workflow Process</h1></center></strong>
<p align="center">
<!--<img src= "./images/protractor-typescript-cucumber.png" height=300 alt="titleImage.png"/>-->
</p>

<p align="center">
   <i><strong>This project automates the SMETS2 and TRAD workflows using protractor-cucumber-typescript framework.
</strong></i>
<p>

### Protractor-Cucumber-TypeScript Setup Guide   

### Features
* All scripts written with > Typescript2.0 & Cucumber2.0.
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation.
* Extensive hooks implemented for BeforeLaunch, OnPrepare etc.
* Screenshots attached to failure feature scenarios.
* Reports generated at the end of execution with error messages for failed steps
* Parallel execution possible with the multicapabilities feature.

### To Get Started

#### Pre-requisites
1.Install NodeJS
    https://nodejs.org/en/download/

2.Install Chrome browser.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

4.Install Java

#### Setup Environment
* Clone the repository fresh from Master branch , into a folder.
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Setup Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!
```
npm install webdriver-manager
```
 * To get the latest update of the webdriver-manager, please run the below command
```
webdriver-manager update
``` 
* Then you should start your selenium server!
```
webdriver-manager start
```
* Ensure Chrome is set to 100% ZOOM LEVEL by default.

#### Setup Scripts on IE
```
For Internet Explorer runs:
1. Open Windows command prompt 
2. Run webdriver-manager update --ie
3. Change security Settings on IE browser - 
    Settings->Security->Internet - Check 'Enable Protected Mode'
    Settings->Security->Local intranet - Check 'Enable Protected Mode'
    Settings->Security->Trusted sites - Check 'Enable Protected Mode'
    Settings->Security->Restricted sites - Check 'Enable Protected Mode' 
4. Change General settings on IE browser -
    Settings->General->Internet - Check 'Delete browsing history on exit'
5. Change Privacy settings on IE browser - 
    Settings->Privacy - Check Turn on Pop-up blocker
                        Settings - Check High-Block all pop-ups option 
6. Ensure Internet Explorer is set to 100% ZOOM LEVEL by default.
7. Run webdriver-manager start

Incase of Machine Restart:
    Repeat steps 1-6 specified above, before test execution.
```

#### Install Dependencies
* Run the below commands to install dependencies used within the project 
```
npm install protractor-multiple-cucumber-html-reporter-plugin
npm install unlink
```

* Run the below commands to install API dependencies used within the project 
```
npm install easy-soap-request
npm install xmlhttprequest
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

#### Configuration specifications 
* Specify the user id to be used for the test execution on the config file. Ensure the SOAPUSER is specified in accordance with the user account.

* Uncomment the required Spec on the config file based on the batch of testcases to be run.
```
  ********************* PHASE A END TO END SCENARIOS**********************************
        "../../features/PHASE-A/EXCHANGE/*.feature",
    //    "../../features/PHASE-A/FAULTY_SMETS2/*.feature",
    //    "../../features/PHASE-A/FAULTY_TRAD/*.feature",
    //    "../../features/PHASE-A/INSTALLATION/*.feature",
    //    "../../features/PHASE-A/REMOVE/*.feature",
   ********************* PHASE B ABORT SCENARIOS**********************************
         "../../features/Abort/AbortGasRisk/EXCHANGE/*.feature",
    //     "../../features/Abort/AbortGasRisk/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/AbortGasRisk/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/AbortGasRisk/INSTALLATION/*.feature",
    //     "../../features/Abort/AbortGasRisk/REMOVE/*.feature",
    //     "../../features/Abort/AbortInitialRisk/EXCHANGE/*.feature",
    //     "../../features/Abort/AbortInitialRisk/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/AbortInitialRisk/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/AbortInitialRisk/INSTALLATION/*.feature",
    //     "../../features/Abort/AbortInitialRisk/REMOVE/*.feature",
    //     "../../features/Abort/AbortContactMade/EXCHANGE/*.feature",
    //     "../../features/Abort/AbortContactMade/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/AbortContactMade/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/AbortContactMade/INSTALLATION/*.feature",
    //     "../../features/Abort/AbortContactMade/REMOVE/*.feature",
    //     "../../features/Abort/AbortNoAccessSuspend/EXCHANGE/*.feature",
    //     "../../features/Abort/AbortNoAccessSuspend/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/AbortNoAccessSuspend/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/AbortNoAccessSuspend/INSTALLATION/*.feature",
    //     "../../features/Abort/AbortNoAccessSuspend/REMOVE/*.feature",
    //     "../../features/Abort/AbortElecRisk/EXCHANGE/*.feature",
    //     "../../features/Abort/AbortElecRisk/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/AbortElecRisk/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/AbortElecRisk/INSTALLATION/*.feature",
    //     "../../features/Abort/AbortElecRisk/REMOVE/*.feature",
    //    "../../features/Abort/AbortInstallAndLeave/EXCHANGE/*.feature",
    //    "../../features/Abort/AbortInstallAndLeave/FAULTY_SMETS2/*.feature",
    //    "../../features/Abort/AbortInstallAndLeave/FAULTY_TRAD/*.feature",
    //    "../../features/Abort/AbortInstallAndLeave/INSTALLATION/*.feature",
    //      "../../features/Abort/AbortPreGasTest/EXCHANGE/*.feature",
    //      "../../features/Abort/AbortPreGasTest/FAULTY_SMETS2/*.feature",
    //      "../../features/Abort/AbortPreGasTest/FAULTY_TRAD/*.feature"
```
* Ensure the correct wait periods are uncommented on the utility.ts file for Chrome and IE execution
```
    //**IE utility run
    //**Uncomment for IE run

    public high = 80000;
    public medium = 5000;
    public medium_low = 4000;
    public low = 3000;
    public Avg_low = 2000;
    public very_low = 1000;

    //**Chrome utility run
    //**Uncomment for Chrome run

    // public high = 80000;
    // public medium = 3500;
    // public medium_low = 3200;
    // public low = 3000;
    // public Avg_low = 2000;
    // public very_low = 1000;
```

#### Run Scripts 

### Ensure all existing jobs on the portal are flushed out for the user account before the bulk execution starts.

* Run the test command which launches the Chrome Browser and runs the scripts.
```
npm run test
```
![result](https://raw.githubusercontent.com/igniteram/protractor-cucumber-typescript/master/images/protractor-cucumber-typescript-result.gif)


#### Writing Features
```
Feature: To search typescript in google
@TypeScriptScenario

  Scenario: Typescript Google Search
    Given I am on google page
    When I type "Typescript"
    Then I click on search button
    Then I clear the search text
```
#### Writing Step Definitions
    
```
import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on google page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Google");
});
```

#### Writing Page Objects
```
import { $ } from "protractor";

export class SearchPageObject {
    public searchTextBox: any;
    public searchButton: any;

    constructor() {
        this.searchTextBox = $("#lst-ib");
        this.searchButton = $("input[value='Google Search']");
    }
}
```
#### Cucumber Hooks
Following method takes screenshot on failure of each scenario
```
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
```
Includes implementation that records the time for each workflow login
```
await this.attach(moment().format('dddd, MMMM Do YYYY, HH:MM:SS a'));
FORMAT - Day, Month Date Year, HH:MM:SS AM/PM

```


#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
    strict: true,
    tags: "@TypeScriptScenario or @CucumberScenario or @ProtractorScenario",
},
```
#### HTML Reports
Currently this project has been integrated with [protractor-multiple-cucumber-html-reporter-plugin], which generates execution reports in the `reports` folder when you run `npm run test`.

index.html file within the reports folder contains the overall execution status and the number of scenarios passed/failed. Each scenario's status can be viewed in detail using the corresponding Workorder link on the page.

They can be customized according to user's specific needs.

![cucumberreporterscreen](https://raw.githubusercontent.com/JansiVictor/SiemensProject/Updated/images/cucumberReporter.PNG)
 
![cucumberreporterscreen1](https://raw.githubusercontent.com/JansiVictor/SiemensProject/Updated/images/cucumberReporter_1.png)

#### Contributors
* Aparna Das 
* Jansi Victor
* Supriya Harikumar
* Priya Gangadharan
* Mark Raphael

#### License
```   
MIT License
Copyright (c) 2019
```
