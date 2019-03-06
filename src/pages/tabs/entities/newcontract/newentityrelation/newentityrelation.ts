import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../providers/globaldata/globaldata';

/**
 * Generated class for the NewentityrelationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newentityrelation',
  templateUrl: 'newentityrelation.html',
})
export class NewentityrelationPage {
  items = ["None", "AMLI Bay Area", "AMLI Texas", "AMLI D.C.", "AMLI Southern California", "AMLI Bay Area", "AMLI Baltimore", "AMLI Chicago"];
  selectedItem = 0;
  location;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtl: MenuController, private gs: GlobaldataProvider) {
  }

  ionViewWillLoad() {
    this.location = this.navParams.data.location || {
      title: "Southern California Edison",
      loc: "Hanson Hills ",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "electron"
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewentityrelationPage');
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
}
