import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewcontractPage } from './reviewcontract/reviewcontract';

/**
 * Generated class for the ContractsreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contractsreview',
  templateUrl: 'contractsreview.html',
})
export class ContractsreviewPage {
  public contractitems: any = [
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Pacific Blvd Apartments",
      kind: "electricity",
      month: 12,
      supplier: "assets/imgs/enegylogo.png"

    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "853 N Sunset ",
      kind: "gas",
      month: 24,
      supplier: "assets/imgs/GreenMountainEnergy.svg"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Marina Del Ray Waterside Dr.",
      kind: "gas",
      month: 12,
      supplier: "assets/imgs/ConstellationLogo.png"
    },
    {
      title: "Edison",
      loc: "Southern California Edison",
      note: "Anchorage St Apartments  ",
      kind: "electricity",
      month: 12,
      supplier: "assets/imgs/enegylogo.png"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractsreviewPage');
  }

  getStartReview(index) {
    this.navCtrl.push(ReviewcontractPage, { contractdetail: this.contractitems[index] })
  }
}
