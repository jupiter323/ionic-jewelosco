import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../../providers/globaldata/globaldata';

/**
 * Generated class for the RateuppliersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rateuppliers',
  templateUrl: 'rateuppliers.html',
})
export class RateuppliersPage {
  public rate = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public gs: GlobaldataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateuppliersPage');
  }

  onClickStar(selectedStar) {
    this.rate = selectedStar;
  }

}
