import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuctionextendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctionextend',
  templateUrl: 'auctionextend.html',
})
export class AuctionextendPage {

  auctionList = [
    { title: "Constellation Energy", selected: "true" },
    { title: "Direct Energy", selected: "true" },
    { title: "East Coast Power Gas", selected: "true" },
    { title: "Engie", selected: "true" },
    { title: "Great Eastern Energy", selected: "true" },
    { title: "Hudson Energy", selected: "true" },
    { title: "Next Ere Energy", selected: "true" },
    { title: "Nordic Energy", selected: "true" },
    { title: "Plymouth Rock Energy", selected: "true" },
    { title: "SFE Energy", selected: "true" }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctionextendPage');
  }
  submit() {

  }

}
