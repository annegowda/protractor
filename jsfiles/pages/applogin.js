"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class applogin {
    constructor() {
        this.franchisename = protractor_1.element(protractor_1.by.css("input[placeholder='Mobile No'"));
        this.franchisepassword = protractor_1.element(protractor_1.by.css("input[placeholder='Password'"));
        this.franchisesignin = protractor_1.element(protractor_1.by.css(''));
        this.framename = protractor_1.element(protractor_1.by.id('appIframe'));
    }
}
exports.applogin = applogin;
