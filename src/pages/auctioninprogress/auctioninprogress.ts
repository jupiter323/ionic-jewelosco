import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuctioninprogressdetailPage } from '../auctioninprogressdetail/auctioninprogressdetail';
import { AuctionextendPage } from '../auctionextend/auctionextend';
import { AuctioninvitedPage } from '../auctioninvited/auctioninvited';

/**
 * Generated class for the AuctioninprogressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctioninprogress',
  templateUrl: 'auctioninprogress.html',
})
export class AuctioninprogressPage {
  public showHeaderDtail: any
  public auctions: any
  public expandIndex = -1
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillLoad() {
    this.showHeaderDtail = [
      [
        { title: "Start", des: "Jan 10, 2019 10:00 AM" },
        { title: "End", des: "Jan 14, 2019 10:00 AM" }
      ]
    ];
    this.auctions = [
      {
        title: "Fixed all-in — 12 months",
        loc: "Best plan",
        rate: "6.79",
        fee: "50.00",
        supplier: "assets/imgs/enegylogo.png",
        others: [{ rate: "5.79", fee: "40.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "6.79", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "3.79", fee: "30.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "6.79", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }]
      },
      {
        title: "Energy Only — 24 months",
        loc: "Best plan",
        rate: "7.09",
        fee: "38.98",
        supplier: "assets/imgs/enegylogo.png",
        others: [{ rate: "5.79", fee: "40.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "6.79", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "3.79", fee: "30.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "6.79", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }]
      },
      {
        title: "Index — 36 months",
        loc: "Best plan",
        rate: "7.35",
        fee: "25.00",
        supplier: "assets/imgs/enegylogo.png",
        others: [{ rate: "5.79", fee: "40.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "6.79", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "3.79", fee: "30.00", supplier: "assets/imgs/enegylogo.png" }, { rate: "6.79", fee: "50.00", supplier: "assets/imgs/enegylogo.png" }]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctioninprogressPage');
  }
  goInvitedSuppliers() {
    this.navCtrl.push(AuctioninvitedPage);

  }
  goInprogressDetail(index) {
    this.navCtrl.push(AuctioninprogressdetailPage, { auction: this.auctions[index] });
  }
  goExtendAuction() {
    this.navCtrl.push(AuctionextendPage);

  }
  setExpandIndex(index) {
    if (this.expandIndex == index)
      this.expandIndex = -1
    else
      this.expandIndex = index
  }
}
