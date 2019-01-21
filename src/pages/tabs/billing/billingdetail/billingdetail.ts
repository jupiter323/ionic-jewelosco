import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BillingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billingdetail',
  templateUrl: 'billingdetail.html',
})
export class BillingdetailPage {

  public billingitem: any;
  public headerDtail: any = [
    [
      { title: "Contact Name", des: "Joe O'connor" },
      { title: "Phone number", des: "818-348-3948" }
    ]
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.billingitem = this.navParams.data.billingitem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingdetailPage');
  }

}
