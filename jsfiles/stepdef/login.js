"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const login_1 = require("../pages/login");
const dashboard_1 = require("../pages/dashboard");
const chai_1 = require("chai");
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);
const l = new login_1.login();
const d = new dashboard_1.dashboard();
cucumber_1.Given('user on storeking login page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get("http://storeking:QA$Torek!nG@2019@qa.storeking.in/");
    chai_1.expect(yield l.userName.isDisplayed()).to.be.true;
}));
cucumber_1.When('user enter username {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield l.userName.sendKeys(string);
}));
cucumber_1.When('user enter password {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    chai_1.expect(yield l.password.isDisplayed()).to.be.true;
    yield l.password.sendKeys(string);
}));
cucumber_1.When('clicks on signin button', () => __awaiter(this, void 0, void 0, function* () {
    chai_1.expect(yield l.sign_in.isDisplayed()).to.be.true;
    yield l.sign_in.click();
}));
cucumber_1.Then('user redirect to home page and contain username {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    chai_1.expect(yield d.hamberger.isDisplayed()).to.be.true;
    let name1 = yield d.profilename.getText();
    yield console.log(name1);
    chai_1.expect(name1).contains('annegowda');
}));
cucumber_1.Then('logout', () => __awaiter(this, void 0, void 0, function* () {
    yield d.profile.click();
    yield d.logout.click();
    chai_1.expect(yield l.userName.isDisplayed()).to.be.true;
}));
cucumber_1.Then('get error message  {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    const message = yield l.errormessage.getText();
    chai_1.expect(message).to.be.contains('Invalid Username or Password');
}));
