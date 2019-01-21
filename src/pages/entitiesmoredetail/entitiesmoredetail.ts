import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntitiesmoredetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entitiesmoredetail',
  templateUrl: 'entitiesmoredetail.html',
})
export class EntitiesmoredetailPage {
  public detailItem: any;
  public locationItem: any;
  public headerDtail: any = [
    [
      { title: "Contact Name", des: "Joe O'connor" },
      { title: "Type", des: "Residential" }
    ],
    [
      { title: "Term", des: "6 Months" },
      { title: "Status", des: "Confirmed" }
    ],
    [
      { title: "Rate", des: "$0.57900" },
      { title: "Signature date", des: "Sep 17, 2018 01:42 PM" }
    ],
    [
      { title: "Start Date", des: "Oct 01,2018" },
      { title: "Expiration data", des: "Apr 01,2019" }
    ],
    [
      { title: "Phone", des: "301-423-3423" },
      { title: "Email", des: "mona_8080@yahoo.com" }
    ]
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailItem = this.navParams.data.detailItem;
    this.locationItem = this.navParams.data.locationItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesmoredetailPage');
  }

  settings() {

  }
  contact(detail: any, kindIndex) {
    alert();

  }

}
