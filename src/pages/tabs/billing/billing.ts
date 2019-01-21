import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillingdetailPage } from './billingdetail/billingdetail';

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
  public billingitems: any = [
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "545.45",
      payment: "345.34",
      balance: "453.45"

    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "853 N Sunset ",
      kind: "electricity",
      invoice: "55.45",
      payment: "3345.34",
      balance: "453.00"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Marina Del Ray Waterside Dr.",
      kind: "gas",
      invoice: "545.45",
      payment: "345.34",
      balance: "453.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Anchorage St Apartments  ",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "7741 Bay St.",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos d",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPage');
  }
  goBillingDetail(billingitem: any) {
    this.navCtrl.push(BillingdetailPage, { billingitem })
  }

}
