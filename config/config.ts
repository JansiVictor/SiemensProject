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
         "../../features/Abort/Abort_GasRisk/EXCHANGE/*.feature",
    //     "../../features/Abort/Abort_GasRisk/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/Abort_GasRisk/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/Abort_GasRisk/INSTALLATION/*.feature",
    //     "../../features/Abort/Abort_GasRisk/REMOVE/*.feature",

    //     "../../features/Abort/Abort_InitialRisk/EXCHANGE/*.feature",
    //     "../../features/Abort/Abort_InitialRisk/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/Abort_InitialRisk/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/Abort_InitialRisk/INSTALLATION/*.feature",
    //     "../../features/Abort/Abort_InitialRisk/REMOVE/*.feature",

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

    //     "../../features/Abort/Abort_ElecRisk/EXCHANGE/*.feature",
    //     "../../features/Abort/Abort_ElecRisk/FAULTY_SMETS2/*.feature",
    //     "../../features/Abort/Abort_ElecRisk/FAULTY_TRAD/*.feature",
    //     "../../features/Abort/Abort_ElecRisk/INSTALLATION/*.feature",
    //     "../../features/Abort/Abort_ElecRisk/REMOVE/*.feature",

    //    "../../features/Abort/InstallAndLeave/EXCHANGE/*.feature",
    //    "../../features/Abort/InstallAndLeave/FAULTY_SMETS2/*.feature",
    //    "../../features/Abort/InstallAndLeave/FAULTY_TRAD/*.feature",
    //    "../../features/Abort/InstallAndLeave/INSTALLATION/*.feature",
    //    "../../features/Abort/InstallAndLeave/REMOVE/*.feature",

    //    "../../features/EXCHANGE/*.feature",
    //    "../../features/FAULTY_SMETS2/*.feature",
    //    "../../features/FAULTY_TRAD/*.feature",
    //    "../../features/INSTALLATION/*.feature",
    //    "../../features/REMOVE/*.feature",
    
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