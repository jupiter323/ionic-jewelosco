import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntitiesdetailPage } from './entitiesdetail/entitiesdetail';

/**
 * Generated class for the EntitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entities',
  templateUrl: 'entities.html',
})
export class EntitiesPage {
  public locationItems: any = [
    {
      title: "AMLI Bay Area",
      loc:"Bay Area"
    },
    {
      title: "AMLI Texas",
      loc:"Texas"
    },
    {
      title: "AMLI D.C.",
      loc:"D.C."
    },
    {
      title: "AMLI Southern California",
      loc:"Southern California"
    },
    {
      title: "AMLI Bay Area",
      loc:"Bay Area"
    },
    {
      title: "AMLI Baltimore",
      loc:"Baltimore"
    },
    {
      title: "AMLI Chicago",
      loc:"Chicago"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesPage');
  }
  goEntitiesDetail(locationItem: any) {
    this.navCtrl.push(EntitiesdetailPage, { locationItem });
  }

}
