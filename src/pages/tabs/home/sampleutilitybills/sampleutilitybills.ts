import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';
import { SamplebillPage } from './samplebill/samplebill';

/**
 * Generated class for the SampleutilitybillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sampleutilitybills',
  templateUrl: 'sampleutilitybills.html',
})
export class SampleutilitybillsPage {
  menuid = "utility"
  subtitle = "Any"
  selecteddetailitem = -1
  items = ["Jo-Carroll", "Citizens", "Peoples Gas", "North Shore Gas", "NICOR", "MidAmerican Energy", "Ameren"]
  selectedSupport = 0
  constructor(public navCtrl: NavController, public navParams: NavParams, private gs: GlobaldataProvider,
    private menuCtl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleutilitybillsPage');
  }
  closeMenu() {
    this.gs.settingTabHidden(false);
    this.menuCtl.close();
  }
  selectAnswerItem(answerindex) {
    this.selecteddetailitem = answerindex;
    this.subtitle = this.items[answerindex];
    this.closeMenu();
  }
  openMenu() {
    this.gs.settingTabHidden(true);
    this.menuCtl.enable(true, this.menuid);
    this.menuCtl.toggle(this.menuid);
  }
  goSamplebill() {
    this.navCtrl.push(SamplebillPage);
  }

}
