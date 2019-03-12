import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../../providers/globaldata/globaldata';

/**
 * Generated class for the FeedsuppliersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedsuppliers',
  templateUrl: 'feedsuppliers.html',
})
export class FeedsuppliersPage {
  public rate = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public gs:GlobaldataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsuppliersPage');
  }

  onClickStar(selectedStar) {
    this.rate = selectedStar;
  }

}
