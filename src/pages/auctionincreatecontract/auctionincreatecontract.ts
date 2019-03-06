import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../providers/globaldata/globaldata';

/**
 * Generated class for the AuctionincreatecontractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctionincreatecontract',
  templateUrl: 'auctionincreatecontract.html',
})
export class AuctionincreatecontractPage {
  auction;
  user = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gs:GlobaldataProvider) {
  }

  ionViewWillLoad() {
    this.auction = this.navParams.data.auction || {
      title: "Fixed all-in — 12 months",
      loc: "Best plan",
      rate: "6.79",
      fee: "50.00",
      supplier: "assets/imgs/enegylogo.png"
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctionincreatecontractPage');
  }

}
