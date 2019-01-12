import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {

  }
  rememberMe: boolean = false;
  isIosPlatform: boolean = false;
  isFocusEmail: boolean = false;
  isFocusPass: boolean


  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform) {
    if (plt.is('ios')) {
      // This will only print when on iOS

      this.isIosPlatform = true
    } else
      this.isIosPlatform = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  forgot() {

  }

  signIn() {

  }

  createAccount() {

  }
  isFocus(kind: string) {
    switch (kind) {
      case "email":
        this.isFocusEmail = true;
        break;
      case "pass":
        this.isFocusPass = true;
        break;
      default:
        break;
    }
  }
  isBlur(kind: string) {
    switch (kind) {
      case "email":
        this.isFocusEmail = false;
        break;
      case "pass":
        this.isFocusPass = false;
        break;
      default:
        break;
    }
  }
}
