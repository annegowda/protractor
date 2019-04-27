import {Given,When,Then} from "cucumber";
import {  browser,logging, element, by } from "protractor";
import { async } from "q";
import { applogin } from "../pages/applogin";
import {expect} from "chai"





const a=new applogin();



Given('user on storeking login page', {timeout: 10*5000},async ()=> {
  
  
  console.log("opened")
  
});


When('user enter username {string}', async (string)=> {
  await a.franchisename.sendKeys(string);
});