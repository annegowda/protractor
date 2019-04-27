
import {ElementFinder,by, element} from "protractor"

export class login{

  userName:ElementFinder;
  password:ElementFinder;
  sign_in:ElementFinder;
  errormessage:ElementFinder;
  constructor(){
    this.userName=element(by.css("input[ng-model='username']"));
    this.password=element(by.css("input[ng-model='password'"));
    this.sign_in=element(by.buttonText('Sign in'));
    this.errormessage=element(by.xpath("//div[@ng-show='loginError']/div[1]/label[@class='control-label']"));

  }



}