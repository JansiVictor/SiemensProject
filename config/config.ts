//import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const htmlReports = process.cwd() + "/reports/html";
const htmlfeaturesReports = process.cwd() + "/reports/html/report/features";
const jsonfeaturesReports = process.cwd() + "/reports/html/json-output-folder";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    SOAPUSER: "AUTOTEST2",
 
    USERNAME: "Automation2",
    PASSWORD: "Aut0m4t1on2",



    baseUrl: "https://siemens-og-bykrw4fz56yr6nyvlskmwpwq-sdg1-test.mbaas1.sdg.feedhenry.com/",
    capabilities: {
        browserName:'chrome',
        shardTestFiles:true,
        maxInstances:1,
        metadata: {
        browser: {
        name:'chrome',
        version:'76'
                    },
        
        device:'Automation PC',
        platform: {
        name:'Windows',
        version:'10.12.6'
                    }
                }
             },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
    
    // ********************* PHASE A END TO END SCENARIOS**********************************

    //    "../../features/PHASE-A/EXCHANGE/*.feature",
    //    "../../features/PHASE-A/FAULTY_SMETS2/*.feature",
    //    "../../features/PHASE-A/FAULTY_TRAD/*.feature",
    //    "../../features/PHASE-A/INSTALLATION/*.feature",
    //    "../../features/PHASE-A/REMOVE/*.feature",

    // ********************* PHASE B ABORT SCENARIOS**********************************

        "../../features/Abort/AbortContactMade/EXCHANGE/TST*.feature",
        "../../features/Abort/AbortContactMade/FAULTY_SMETS2/TST*.feature",
        "../../features/Abort/AbortContactMade/FAULTY_TRAD/TST*.feature",
        "../../features/Abort/AbortContactMade/INSTALLATION/TST*.feature",
        "../../features/Abort/AbortContactMade/REMOVE/TST*.feature",

        "../../features/Abort/AbortNoAccessSuspend/EXCHANGE/TST*.feature",
        "../../features/Abort/AbortNoAccessSuspend/FAULTY_SMETS2/TST*.feature",
        "../../features/Abort/AbortNoAccessSuspend/FAULTY_TRAD/TST*.feature",
        "../../features/Abort/AbortNoAccessSuspend/INSTALLATION/TST*.feature",
        "../../features/Abort/AbortNoAccessSuspend/REMOVE/TST*.feature",

        "../../features/Abort/AbortInitialRisk/EXCHANGE/TST*.feature",
        "../../features/Abort/AbortInitialRisk/FAULTY_SMETS2/TST*.feature",
        "../../features/Abort/AbortInitialRisk/FAULTY_TRAD/TST*.feature",
        "../../features/Abort/AbortInitialRisk/INSTALLATION/TST*.feature",
        "../../features/Abort/AbortInitialRisk/REMOVE/TST*.feature",

        "../../features/Abort/AbortGasRisk/EXCHANGE/TST*.feature",
        "../../features/Abort/AbortGasRisk/FAULTY_SMETS2/TST*.feature",
        "../../features/Abort/AbortGasRisk/FAULTY_TRAD/TST*.feature",
        "../../features/Abort/AbortGasRisk/INSTALLATION/TST*.feature",
        "../../features/Abort/AbortGasRisk/REMOVE/TST*.feature",

        "../../features/Abort/AbortElecRisk/EXCHANGE/TST*.feature",
        "../../features/Abort/AbortElecRisk/FAULTY_SMETS2/TST*.feature",
        "../../features/Abort/AbortElecRisk/FAULTY_TRAD/TST*.feature",
        "../../features/Abort/AbortElecRisk/INSTALLATION/TST*.feature",
        "../../features/Abort/AbortElecRisk/REMOVE/TST*.feature",

         "../../features/Abort/AbortPreGasTest/EXCHANGE/TST*.feature",
         "../../features/Abort/AbortPreGasTest/FAULTY_SMETS2/TST*.feature",
         "../../features/Abort/AbortPreGasTest/FAULTY_TRAD/TST*.feature",

       "../../features/Abort/AbortInstallAndLeave/EXCHANGE/TST*.feature",
       "../../features/Abort/AbortInstallAndLeave/FAULTY_SMETS2/TST*.feature",
       "../../features/Abort/AbortInstallAndLeave/FAULTY_TRAD/TST*.feature",
       "../../features/Abort/AbortInstallAndLeave/INSTALLATION/TST*.feature",

    
    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        
        
    },

    beforeLaunch: () => {
        Reporter.cleanseDirectory(jsonfeaturesReports);
        Reporter.cleanseDirectory(htmlfeaturesReports);
    }, 

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/html/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/SD_WO_TRIGGER/*.js",
        "../../typeScript/stepdefinitions/SD_EXCHANGE/*.js",
        "../../typeScript/stepdefinitions/SD_ABORT/*.js",
        "../../typeScript/stepdefinitions/SD_FAULTY_SMETS2/*.js",
        "../../typeScript/stepdefinitions/SD_FAULTY_TRAD/*.js",
        "../../typeScript/stepdefinitions/SD_INSTALLATION/*.js",
        "../../typeScript/stepdefinitions/SD_REMOVE/*.js",
         "../../typeScript/support/*.js"],
        strict: true
        //tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            removeExistingHtmlReportFile: true,
            outputDirectory: htmlReports
        }
    }]

};