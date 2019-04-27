"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class login {
    constructor() {
        this.userName = protractor_1.element(protractor_1.by.css("input[ng-model='username']"));
        this.password = protractor_1.element(protractor_1.by.css("input[ng-model='password'"));
        this.sign_in = protractor_1.element(protractor_1.by.buttonText('Sign in'));
        this.errormessage = protractor_1.element(protractor_1.by.xpath("//div[@ng-show='loginError']/div[1]/label[@class='control-label']"));
    }
}
exports.login = login;
