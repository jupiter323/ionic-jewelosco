import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsandconditionsPage } from '../registration/termsandconditions/termsandconditions';
import { AuctionincreatecontractPage } from '../auctionincreatecontract/auctionincreatecontract';

/**
 * Generated class for the AuctioninprogressmoredetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctioninprogressmoredetail',
  templateUrl: 'auctioninprogressmoredetail.html',
})
export class AuctioninprogressmoredetailPage {

  auction: any
  auctionDetail: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.auction = this.navParams.data.auction || {
      title: "Fixed all-in — 12 months",
      loc: "Best plan",
      rate: "6.79",
      fee: "50.00",
      supplier: "assets/imgs/enegylogo.png"
    }
    this.auctionDetail = this.navParams.data.auctiondetail || { rate: "6.80", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctioninprogressmoredetailPage');
  }
  goTermsandConditions() {
    this.navCtrl.push(TermsandconditionsPage);
  }
  goCreateContract() {
    this.navCtrl.push(AuctionincreatecontractPage, { auction: this.auction });
  }

}
