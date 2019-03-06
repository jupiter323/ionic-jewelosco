import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuctioninvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctioninvited',
  templateUrl: 'auctioninvited.html',
})
export class AuctioninvitedPage {
  suppliers = [
    { logo: "assets/imgs/ConstellationLogo.png", bids: 5 },
    { logo: "assets/imgs/enegylogo.png", bids: 5 },
    { logo: "assets/imgs/ConstellationLogo.png", bids: 5 },
    { logo: "assets/imgs/enegylogo.png", bids: 5 },
    { logo: "assets/imgs/ConstellationLogo.png", bids: 0 },
    { logo: "assets/imgs/enegylogo.png", bids: 0 },
    { logo: "assets/imgs/ConstellationLogo.png", bids: 0 },
    { logo: "assets/imgs/enegylogo.png", bids: 0 },
    { logo: "assets/imgs/ConstellationLogo.png", bids: 0 },
    { logo: "assets/imgs/enegylogo.png", bids: 0 },
    { logo: "assets/imgs/ConstellationLogo.png", bids: 0 },
    { logo: "assets/imgs/enegylogo.png", bids: 0 },
    { logo: "assets/imgs/ConstellationLogo.png", bids: 0 },
    { logo: "assets/imgs/enegylogo.png", bids: 0 }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctioninvitedPage');
  }

}
