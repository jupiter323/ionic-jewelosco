import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { RisktolerancePage } from '../risktolerance/risktolerance';
import { TermsandconditionsPage } from '../termsandconditions/termsandconditions';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  isIosPlatform: boolean = false
  public user: any = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    cphone: "",
    ophone: "",
    cardnumber: "",
    expires: "",
    cvv: "",
    account: "",
    routing: "",
    billaddress: "",
    mailaddress: "",

  }
  public stepIndex = 1;
  public actNot: boolean = true;
  public autoRenew: boolean = false;
  public finishBtnSpl: string = "Next step"

  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(
    public navCtrl: NavController, public navParams: NavParams, public plt: Platform) {
    if (plt.is('ios')){
      this.finishBtnSpl = "Finish";
      this.isIosPlatform = true;
    }
    else
      this.isIosPlatform = false;
  }

  ionViewDidEnter() {
    if (this.stepIndex == 3)
      this.showSignature();

  }

  showSignature() {
    this.signature = localStorage.getItem('savedSignature');
    let intervaltime = setInterval(() => {
      console.log("interval");
      if (this.signaturePad) {
        this.signaturePad.fromDataURL(this.signature);
        clearInterval(intervaltime);
      }
    }, 100);

  }
  drawComplete() {
    this.isDrawing = false;
    this.savePad();
  }

  drawStart() {
    this.isDrawing = true;
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    localStorage.setItem('savedSignature', this.signature);
  }

  clearPad() {
    this.signaturePad.clear();
  }

  next() {
    if (++this.stepIndex > 3) this.stepIndex = 3;
    if (this.stepIndex == 3)
      this.showSignature();

  }

  previous() {
    if (--this.stepIndex < 1) this.stepIndex = 1;

  }
  goRisk() {
    this.navCtrl.push(RisktolerancePage);
  }
  goTerms() {
    this.navCtrl.push(TermsandconditionsPage);
  }

  finish() {
    this.navCtrl.setRoot(TabsPage);
  }

}
