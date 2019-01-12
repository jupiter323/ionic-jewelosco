import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  isIosPlatform: boolean
  isForgotUsername: boolean
  navTitle: string
  isFocusEmail:boolean
  user: any = {

  }

  constructor(
    private navParam: NavParams,
    private plt: Platform,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage', this.navParam.data.isForgotUsername);
    if (this.plt.is('ios'))
      this.isIosPlatform = true;
    else
      this.isIosPlatform = false;
    this.isForgotUsername = this.navParam.data.isForgotUsername;
    this.navTitle = this.isForgotUsername ? "Forgot Username" : "Forgot Username + Password"

  }
  submit() {

  }
  isFocus() {
    this.isFocusEmail = true
    
  }
  isBlur() {
    this.isFocusEmail = false
    
  }


}
