import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainingvideosPage } from '../trainingvideos/trainingvideos';

/**
 * Generated class for the TroublshootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-troublshoot',
  templateUrl: 'troublshoot.html',
})
export class TroublshootPage {
  public troubleshoots = ["Help me with my Sign Up", "I don’t understand Market Feed message", "I have questions about the current or past bills", "I have questions about the recent audit results on my bills and the payback", "Changing my profile or managing my account numbers", "Other matter"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTrainningvideo() {
    this.navCtrl.push(TrainingvideosPage);
  }
  goDetail(toubleshootIndex) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TroublshootPage');
  }

}
