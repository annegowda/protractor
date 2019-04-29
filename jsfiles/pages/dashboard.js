"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class dashboard {
    constructor() {
        this.hamberger = protractor_1.element(protractor_1.by.css('a.collapse-menu-link.ion-navicon'));
        this.profilename = protractor_1.element(protractor_1.by.xpath("//div[@class='col-md-10']/div[1]/span[1]"));
        this.profile = protractor_1.element(protractor_1.by.css('.profile-toggle-link.dropdown-toggle'));
        this.logout = protractor_1.element(protractor_1.by.css('.signout'));
    }
}
exports.dashboard = dashboard;
