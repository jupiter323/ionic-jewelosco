import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuctioninprogressmoredetailPage } from '../auctioninprogressmoredetail/auctioninprogressmoredetail';

/**
 * Generated class for the AuctioninprogressdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctioninprogressdetail',
  templateUrl: 'auctioninprogressdetail.html',
})
export class AuctioninprogressdetailPage {
  auction;
  auctionDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillLoad() {
    this.auction = this.navParams.data.auction || {
      title: "Fixed all-in — 12 months",
      loc: "Best plan",
      rate: "6.79",
      fee: "50.00",
      supplier: "assets/imgs/enegylogo.png"
    };
    this.auctionDetails = [
      { rate: "6.80", fee: "50.00", supplier: "assets/imgs/enegylogo.png" },
      { rate: "6.80", fee: "50.00", supplier: "assets/imgs/enegylogo.png" },
      { rate: "6.80", fee: "50.00", supplier: "assets/imgs/enegylogo.png" },
      { rate: "6.80", fee: "50.00", supplier: "assets/imgs/enegylogo.png" },
      { rate: "6.80", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }
    ]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctioninprogressdetailPage');
  }
  goMoredetail(index) {
    this.navCtrl.push(AuctioninprogressmoredetailPage, { auctiondetail: this.auctionDetails[index], auction: this.auction });
  }

}
