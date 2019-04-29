import {ElementFinder,by,element} from "protractor";


export class  dashboard{

  hamberger:ElementFinder;
  profilename:ElementFinder;
  logout:ElementFinder;
  profile:ElementFinder;
  constructor(){
    this.hamberger=element(by.css('a.collapse-menu-link.ion-navicon'));
    this.profilename=element(by.xpath("//div[@class='col-md-10']/div[1]/span[1]"));
    this.profile=element(by.css('.profile-toggle-link.dropdown-toggle'));
    this.logout=element(by.css('.signout'));
  }

}