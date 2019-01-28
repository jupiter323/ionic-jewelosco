import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../providers/globaldata/globaldata';
import { MessagecenterPage } from '../messagecenter';

/**
 * Generated class for the CallsupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-callsupport',
  templateUrl: 'callsupport.html',
})
export class CallsupportPage {

  public supportFormData: any = {}
  public isFocusEmail: boolean
  public isFocusDes: boolean
  public isRequested: boolean = false;
  public phone="(203) 283-2849";

  constructor(public navCtrl: NavController, public navParams: NavParams, public gs: GlobaldataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailsupportPage');
  }
  isFocus(kind) {
    switch (kind) {
      case "input":
        this.isFocusEmail = true
        break;
      case "text":
        this.isFocusDes = true
        break;
    }

  }
  isBlur(kind) {
    switch (kind) {
      case "input":
        this.isFocusEmail = false
        break;
      case "text":
        this.isFocusDes = false
        break;
    }

  }

  request() {
    this.isRequested = true;
  }
  cancelCall() {
    this.navCtrl.push(MessagecenterPage);
  }
}
