import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';

/**
 * Generated class for the NewcontractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcontract',
  templateUrl: 'newcontract.html',
})
export class NewcontractPage {
  stepIndex = 1;
  items = ["None", "AMLI Bay Area", "AMLI Texas", "AMLI D.C.", "AMLI Southern California", "AMLI Bay Area", "AMLI Baltimore", "AMLI Chicago"];
  selectedItem = 0;
  user = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtl: MenuController, private gs: GlobaldataProvider,
    private altCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcontractPage');
  }
  closeMenu() {
    this.gs.settingTabHidden(false);
    this.menuCtl.close();
  }
  openMenu() {
    this.gs.settingTabHidden(true);
    this.menuCtl.enable(true, "status");
    this.menuCtl.open("status");
  }
  selectAnswerItem(answerindex) {
    this.selectedItem = answerindex;
    this.closeMenu();
  }
  next() {
    if (++this.stepIndex > 3) this.stepIndex = 3;
  }

  previous() {
    if (--this.stepIndex < 1) this.stepIndex = 1;
  }
  addNew() {
    let alert = this.altCtrl.create({
      title: 'New Entity Name',
      message: 'Type name of a new entity, which best classifies it',
      inputs: [
        {
          name: 'newcontract',
          placeholder: 'New Contract'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: "cancel",
          handler: data => {

          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log(data.newcontract);
            if (data.newcontract) {
              this.items.push(data.newcontract)
              this.selectedItem = this.items.length - 1;
            }
          }
        }
      ]
    });
    alert.present();
  }
  submit() {

  }
}
