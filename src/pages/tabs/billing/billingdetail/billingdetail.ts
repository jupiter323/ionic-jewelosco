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
  public billingdetails: any = [
    {
      address: "4175 S. Laspina St. Tulare, CA 93274",
      status: "unpaid",
      selected: true,
      account: "1234561110",
      due: "10/01/2018",
      billstart: "08/01/2018",
      billend: "09/01/2018",
      usage: "3534",
      amount: "324.34"
    },
    {
      address: "4175 S. Laspina St. Tulare, CA 93274",
      status: "unpaid",
      selected: true,
      account: "1234561110",
      due: "10/01/2018",
      billstart: "08/01/2018",
      billend: "09/01/2018",
      usage: "534",
      amount: "34.34"
    },
    {
      address: "4175 S. Laspina St. Tulare, CA 93274",
      status: "unpaid",
      selected: true,
      account: "1234561110",
      due: "10/01/2018",
      billstart: "08/01/2018",
      billend: "09/01/2018",
      usage: "334",
      amount: "24.34"
    }

  ]
  public headerDtail: any = [
    [
      { title: "Contact Name", des: "Joe O'connor" },
      { title: "Phone number", des: "818-348-3948" }
    ]
  ]
  public buttonTitle = "Pay for all";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.billingitem = this.navParams.data.billingitem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingdetailPage');
  }

  clickBillingDetail(index) {
    this.billingdetails[index].selected = !this.billingdetails[index].selected;
    this.buttonTitle = "Pay for all";
    for (let billingdetail of this.billingdetails)
      if (!billingdetail.selected) {
        this.buttonTitle = "Pay for selected items only";
        break;
      }
  }

}
