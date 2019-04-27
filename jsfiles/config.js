"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//import * as reporter from "cucumber-html-reporter";
exports.config = {
    directConnect: true,
    specs: ["D:/ERP/futureFile/login.feature"],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
    },
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["D:/ERP/jsfiles/stepdef/login.js"],
        //formate we need in json so,first we use Json then we are giving path where to save.
        format: "json:./reports/jsonreport.json",
    },
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
        //reporter.generate(options);
    }
};
