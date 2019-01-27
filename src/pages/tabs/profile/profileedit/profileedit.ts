import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';

/**
 * Generated class for the ProfileeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profileedit',
  templateUrl: 'profileedit.html',
})
export class ProfileeditPage {
  public user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public gs: GlobaldataProvider) {

  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad ProfileeditPage');
  }

  save() {
    this.navCtrl.pop();
  }

}
