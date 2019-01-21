import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

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
  goChat() {
    // this.app.getRootNav().setRoot(ChatPage);
    this.navCtrl.push(ChatPage);
  }

}
