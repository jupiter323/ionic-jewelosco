import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../../providers/globaldata/globaldata';

/**
 * Generated class for the FeedexperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedexperience',
  templateUrl: 'feedexperience.html',
})
export class FeedexperiencePage {
  public support = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public gs:GlobaldataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedexperiencePage');
  }

}
