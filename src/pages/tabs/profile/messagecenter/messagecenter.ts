import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from './chat/chat';
import { EmailsupportPage } from './emailsupport/emailsupport';
import { CallsupportPage } from './callsupport/callsupport';

/**
 * Generated class for the MessagecenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagecenter',
  templateUrl: 'messagecenter.html',
})
export class MessagecenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagecenterPage');
  }
  goEmailSupport() {
    this.navCtrl.push(EmailsupportPage);
  }
  goCallCenter() {
    this.navCtrl.push(CallsupportPage);

  }
  goChat() {
    // this.app.getRootNav().setRoot(ChatPage);
    this.navCtrl.push(ChatPage);
  }
  ProvideFeedback() {

  }
}
