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
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);
cucumber_1.Before({ tags: "@smoke" }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.After({ tags: "@smoke" }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.manage().deleteAllCookies();
    //await browser.driver.close();
}));
cucumber_1.After(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            // return  await this.attach(image1,'image/png');
            yield this.attach(screenshot, "image/png");
        }
    });
});
