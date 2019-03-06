import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillingdetailPage } from './billingdetail/billingdetail';
import { BillingfirstPage } from './billingfirst/billingfirst';

/**
 * Generated class for the BillingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html',
})
export class BillingPage {
  public locationItems: any = [
    {
      title: "AMLI Bay Area",
      loc: "Bay Area"
    },
    {
      title: "AMLI Texas",
      loc: "Texas"
    },
    {
      title: "AMLI D.C.",
      loc: "D.C."
    },
    {
      title: "AMLI Southern California",
      loc: "Southern California"
    },
    {
      title: "AMLI Bay Area",
      loc: "Bay Area"
    },
    {
      title: "AMLI Baltimore",
      loc: "Baltimore"
    },
    {
      title: "AMLI Chicago",
      loc: "Chicago"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesPage');
  }
  goEntitiesDetail(locationItem: any) {
    this.navCtrl.push(BillingfirstPage, { locationItem });
  }

}
