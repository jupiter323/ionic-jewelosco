import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../providers/globaldata/globaldata';

/**
 * Generated class for the EmailsupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emailsupport',
  templateUrl: 'emailsupport.html',
})
export class EmailsupportPage {
  isFocusEmail: boolean
  isFocusDes: boolean
  public supportFormData: any =
    {}

  
    customPopoverOptions: any = {
      header: 'Hair Color',
      subHeader: 'Select your hair color',
      message: 'Only select your dominant hair color'
    };
  
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

  }
  
}
