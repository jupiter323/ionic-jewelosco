import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ForgotPage } from '../forgot/forgot';


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
  isFocusPass: boolean = false;


  constructor(
    private altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams, public plt: Platform) {
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
    let alert = this.altCtrl.create({
      title: 'Choose an option',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Forgot Username',         
          handler: data => {
            this.navCtrl.push(ForgotPage, {isForgotUsername:true});
          }
        },
        {
          text: 'Forgot Username + Password',         
          handler: data => {
            this.navCtrl.push(ForgotPage, {isForgotUsername:false});
          }
        }
      ]
    });
    alert.present();
  }

  signIn() {
    this.navCtrl.setRoot(TabsPage);
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
