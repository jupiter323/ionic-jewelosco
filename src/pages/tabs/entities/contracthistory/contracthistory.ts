import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContracthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contracthistory',
  templateUrl: 'contracthistory.html',
})
export class ContracthistoryPage {
  public contractHistories: any = [
    {
      signed: {
        des: "You signed up with Green Mountain Energy",
        logo: "assets/imgs/GreenMountainEnergy.svg"
      },
      title: "Fixed all-in",
      rate: "Rate of 3.59 cents",
      dur: "2 months term",
      startdate: "Dec 01,2018",
      enddate: "Feb 01,2019"
    },
    {
      title: "Fixed all-in",
      rate: "Rate of 3.39 cents",
      dur: "6 months term",
      startdate: "Oct 01,2018",
      enddate: "Apr 01,2019"
    },
    {
      signed: {
        des: "You signed up with Green Mountain Energy",
        logo: "assets/imgs/GreenMountainEnergy.svg"
      },
      title: "Fixed all-in",
      rate: "Rate of 3.59 cents",
      dur: "2 months term",
      startdate: "Dec 01,2018",
      enddate: "Feb 01,2019"
    },
    {
      title: "Fixed all-in",
      rate: "Rate of 3.39 cents",
      dur: "6 months term",
      startdate: "Oct 01,2018",
      enddate: "Apr 01,2019"
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContracthistoryPage');
  }

}
