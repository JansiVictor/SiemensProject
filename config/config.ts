//import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const htmlReports = process.cwd() + "/reports/html";
const htmlfeaturesReports = process.cwd() + "/reports/html/report/features";
const jsonfeaturesReports = process.cwd() + "/reports/html/json-output-folder";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

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
        "../../features/SF_G_INST14.feature"
    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        
        //Reporter.createDirectory(htmlReports);
    },

    beforeLaunch: () => {
        Reporter.cleanseDirectory(jsonfeaturesReports);
        Reporter.cleanseDirectory(htmlfeaturesReports);
    }, 

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/html/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
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

    // onComplete: () => {
    //     for(let s of config.specs)
    //     {
    //         console.log(s);
    //         var s1= s.split('/');
    //         console.log(s1);
    //         var s2= s1[3].split('.');
    //         console.log(s2);
    //         Reporter.createHTMLReport(s2[0]);
    //     }
    //     //Reporter.createHTMLReport();
    // },
};