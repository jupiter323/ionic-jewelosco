import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';
import { NewentityexistingcontractPage } from './newentityexistingcontract/newentityexistingcontract';

/**
 * Generated class for the NewentityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newentity',
  templateUrl: 'newentity.html',
})
export class NewentityPage {
  contractname;
  isFocusDes: boolean
  constructor(public navCtrl: NavController, public navParams: NavParams, private gs: GlobaldataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewentityPage');
  }
  isFocus() {
    this.isFocusDes = true
  }
  isBlur() {
    this.isFocusDes = false
  }
  goExistingContract() {
    this.navCtrl.push(NewentityexistingcontractPage);
  }

}
