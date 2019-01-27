import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { RisktolerancePage } from '../../../registration/risktolerance/risktolerance';

/**
 * Generated class for the SecuritysettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-securitysetting',
  templateUrl: 'securitysetting.html',
})
export class SecuritysettingsPage {
  public user: any = {};
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public gs: GlobaldataProvider) {

  }

  ionViewDidEnter() {
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
  goRisk() {
    this.navCtrl.push(RisktolerancePage);
  }


  save() {
    this.navCtrl.pop();
  }

}
