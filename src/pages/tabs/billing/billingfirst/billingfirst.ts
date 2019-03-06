import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillingdetailPage } from '../billingdetail/billingdetail';
import { BillingmethodPage } from '../billingmethod/billingmethod';

/**
 * Generated class for the BillingfirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billingfirst',
  templateUrl: 'billingfirst.html',
})
export class BillingfirstPage {
  locationItem;
  buttonTitle = "Pay for all";
  cardNum;
  public billingitems: any = [
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "545.45",
      payment: "345.34",
      balance: "453.45",
      selected: true

    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "853 N Sunset ",
      kind: "electricity",
      invoice: "55.45",
      payment: "3345.34",
      balance: "453.00",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Marina Del Ray Waterside Dr.",
      kind: "gas",
      invoice: "545.45",
      payment: "345.34",
      balance: "453.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Anchorage St Apartments  ",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "7741 Bay St.",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Riverside Drive Condos d",
      kind: "electricity",
      invoice: "34.45",
      payment: "789.34",
      balance: "65.45",
      selected: true
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.locationItem = this.navParams.data.locationItem || {
      title: "AMLI Chicago",
      loc: "Chicago"
    };
    this.cardNum = "1928  ●●●●  ●●●●  1928"
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPage');
  }
  goBillingDetail(billingitem: any) {
    this.navCtrl.push(BillingdetailPage, { billingitem })
  }
  clickBillingDetail(index) {
    this.billingitems[index].selected = !this.billingitems[index].selected;
    this.buttonTitle = "Pay for all";
    for (let billingitem of this.billingitems)
      if (!billingitem.selected) {
        this.buttonTitle = "Pay for selected items only";
        break;
      }
  }
  goPaymentmethod() {
    this.navCtrl.push(BillingmethodPage);
  }

}
