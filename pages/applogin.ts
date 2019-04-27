import { ElementFinder, element, by } from "protractor";


export class applogin{

franchisename:ElementFinder;
franchisepassword:ElementFinder;
franchisesignin:ElementFinder;
framename:ElementFinder;

constructor(){
  this.franchisename=element(by.css("input[placeholder='Mobile No'"));
  this.franchisepassword=element(by.css("input[placeholder='Password'"));
  this.franchisesignin=element(by.css(''));
   this.framename=element(by.id('appIframe'))
}

}