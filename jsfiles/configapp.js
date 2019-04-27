"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// const host = '0.0.0.1';   // default appium host
// const port = 8000;          // default appium port
// const waitforTimeout = 30 * 60000;
// const commandTimeout = 30 * 60000;
exports.config = {
    //directConnect:true,
    seleniumAddress: 'http://localhost:4720/wd/hub',
    specs: ["D:/ERP/futureFile/applogin.feature"],
    capabilities: {
        platformName: "Android",
        platformVersion: "6.0",
        deviceName: "ZX1D64PHN9",
        //browserName: 'chrome'
        appPackage: 'com.storeking.v3',
        appActivity: 'com.storeking.v3.MainActivity',
        app: "/data/app/com.storeking.v3-1/base.apk"
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.ignoreSynchronization = true;
    },
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["D:/ERP/jsfiles/stepdef/applogin.js"],
        //formate we need in json so,first we use Json then we are giving path where to save.
        format: "json:./reports/jsonreport.json",
    },
    //   services: ['appium'],
    //     appium: {
    //         waitStartTime: 6000,
    //         waitforTimeout: waitforTimeout,
    //         command: 'appium',
    //         logFileName: 'appium.log',
    //         args: {
    //             address: host,
    //             port: port,
    //             commandTimeout: commandTimeout,
    //             sessionOverride: true,
    //             debugLogSpacing: true
    //         }
    //  ,
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/jsonreport.json',
            output: './reports/html_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            storeScreenshots: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "QA",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            },
        };
    }
};
