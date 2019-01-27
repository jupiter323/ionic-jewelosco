import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { ProfileeditPage } from './profileedit/profileedit';
import { ProfilechangepassPage } from './profilechangepass/profilechangepass';
import { BillinginfoPage } from './billinginfo/billinginfo';
import { SecuritysettingsPage } from './securitysetting/securitysetting';
import { MessagecenterPage } from './messagecenter/messagecenter';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profile: any = {
    img: "",
    name: "Zaid Masala",
    email: "zaid.marsala@email.com"
  }
  constructor(
    private app: App,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  goEdit() {
    this.navCtrl.push(ProfileeditPage);
  }
  goPassChange() {
    this.navCtrl.push(ProfilechangepassPage);
  }
  goBillingInfo() {
    this.navCtrl.push(BillinginfoPage);
  }
  goSecuritySetting() {
    this.navCtrl.push(SecuritysettingsPage)
  }
  goMessageCenter() {
    this.navCtrl.push(MessagecenterPage);
  }
  logOut() {
    // this.navCtrl.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);
  }


}
