import {Given,When,Then} from "cucumber";
import { browser, logging } from "protractor";
import { async } from "q";
import { login } from "../pages/login";
import { dashboard } from "../pages/dashboard";
import {expect} from "chai";

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

const l=new login();
const d=new dashboard();


Given('user on storeking login page', async ()=> {
  await browser.get("http://storeking:QA$Torek!nG@2019@qa.storeking.in/");
  
  
   expect( await l.userName.isDisplayed()).to.be.true;
});


When('user enter username {string}', async (string)=> {
  await l.userName.sendKeys(string);
  
});

When('user enter password {string}', async (string)=> {
  expect(  await l.password.isDisplayed()).to.be.true;
  await l.password.sendKeys(string);
});

When('clicks on signin button', async ()=> {
 
   expect(  await l.sign_in.isDisplayed()).to.be.true;
     await l.sign_in.click();
 
});

Then('user redirect to home page and contain username {string}', async (string)=> {
  expect(  await d.hamberger.isDisplayed()).to.be.true;
  let name1= await d.profilename.getText();
  await console.log(name1);
  expect(name1).contains('annegowda');

});

Then('logout', async () =>{
  
await d.profile.click();
  await d.logout.click();
  expect( await l.userName.isDisplayed()).to.be.true;

});

Then('get error message  {string}', async (string)=> {
   const message= await l.errormessage.getText();
   expect(message).to.be.contains('Invalid Username or Password')
});






