import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobaldataProvider } from './../../../providers/globaldata/globaldata';

/**
 * Generated class for the ReviewcontractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewcontract',
  templateUrl: 'reviewcontract.html',
})
export class ReviewcontractPage {
  contractdetail
  public rate = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gs: GlobaldataProvider,
    private altCtrl: AlertController) {
      this.contractdetail = navParams.data.contractdetail || {
        title: "Edison",
        loc: "Southern California Edison",
        note: "Pacific Blvd Apartments",
        kind: "electricity",
        month: 12,
        supplier: "assets/imgs/enegylogo.png"
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewcontractPage');
   
  }

  onClickStar(selectedStar) {
    this.rate = selectedStar;
  }
  submit() {
    let alert = this.altCtrl.create({
      title: 'Thank you!',
      message: 'Thank you for taking your time for the review. We love to hear about our great staff and services. We really appreciate it!', buttons: [
        {
          text: 'OK',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }
}
