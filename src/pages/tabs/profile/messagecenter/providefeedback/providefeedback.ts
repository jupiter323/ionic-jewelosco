import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedexperiencePage } from './feedexperience/feedexperience';
import { FeedsuppliersPage } from './feedsuppliers/feedsuppliers';
import { RateuppliersPage } from './rateuppliers/rateuppliers';

/**
 * Generated class for the ProvidefeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providefeedback',
  templateUrl: 'providefeedback.html',
})
export class ProvidefeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidefeedbackPage');
  }
  goFeedexp() {
    this.navCtrl.push(FeedexperiencePage);
  }
  goFeedSuppl() {
    this.navCtrl.push(FeedsuppliersPage);
  }
  goRateSuppl() {
    this.navCtrl.push(RateuppliersPage);
  }


}
