import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobaldataProvider } from '../../providers/globaldata/globaldata';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the AuctionincreatecontractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auctionincreatecontract',
  templateUrl: 'auctionincreatecontract.html',
})
export class AuctionincreatecontractPage {
  auction;
  user = {}
  public stepIndex = 1;
  pdfLink: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gs: GlobaldataProvider,
    private altCtrl: AlertController,
    private sanitizer: DomSanitizer) {
    // this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.termsfeed.com/blog/wp-content/uploads/2019/04/terms-and-conditions-template.pdf');
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('assets/pdf/mydes.pdf');  // local assets

  }

  ionViewWillLoad() {
    this.auction = this.navParams.data.auction || {
      title: "Fixed all-in — 12 months",
      loc: "Best plan",
      rate: "6.79",
      fee: "50.00",
      supplier: "assets/imgs/enegylogo.png"
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctionincreatecontractPage');
  }

  next() {
    if (++this.stepIndex > 3) this.stepIndex = 3;
  }

  previous() {
    if (--this.stepIndex < 1) this.stepIndex = 1;

  }
  approveViaSign() {
    let alert = this.altCtrl.create({
      title: 'Approvement',
      message: 'A separate email has been sent to zaid.marsala@amil.com. You have until 4 pm ET to complete the e-signature document.', buttons: [
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
