import{Before,After, Status,Scenario} from "cucumber";

import { browser } from "protractor";
import { async } from "q";


var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

Before({tags:"@smoke"},async ()=>{
 


  await browser.manage().window().maximize();
});

After( {tags:"@smoke"},async ()=> {
  await browser.manage().deleteAllCookies();
  //await browser.driver.close();

});


After(async function(Scenario){
  if(Scenario.result.status===Status.FAILED){
    
    const screenshot= await browser.takeScreenshot();
   // return  await this.attach(image1,'image/png');
     
   await   this.attach(screenshot,"image/png");
  }

});