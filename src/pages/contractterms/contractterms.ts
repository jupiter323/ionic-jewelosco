import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContracttermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contractterms',
  templateUrl: 'contractterms.html',
})
export class ContracttermsPage {

  cardIndex = 0
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
      supplier: "assets/imgs/ConstellationLogo.png"
    }
    this.auctionDetail = this.navParams.data.auctiondetail || { rate: "6.80", fee: "50.00", supplier: "assets/imgs/ConstellationLogo.png" }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContracttermsPage');
  }

}
