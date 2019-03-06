import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { EntitiesdetailPage } from './entitiesdetail/entitiesdetail';
import { NewentityPage } from './newentity/newentity';
import { NewcontractPage } from './newcontract/newcontract';
import { PreloadedcontractPage } from './newcontract/preloadedcontract/preloadedcontract';

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
      loc: "Bay Area"
    },
    {
      title: "AMLI Texas",
      loc: "Texas"
    },
    {
      title: "AMLI D.C.",
      loc: "D.C."
    },
    {
      title: "AMLI Southern California",
      loc: "Southern California"
    },
    {
      title: "AMLI Bay Area",
      loc: "Bay Area"
    },
    {
      title: "AMLI Baltimore",
      loc: "Baltimore"
    },
    {
      title: "AMLI Chicago",
      loc: "Chicago"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController,
    private altCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesPage');
  }
  goEntitiesDetail(locationItem: any) {
    this.navCtrl.push(EntitiesdetailPage, { locationItem });
  }
  selectAddContract() {
    let alert = this.altCtrl.create({
      title: 'Contract type',
      message: "If you want to add a contract that wasn't have been preloaded into PK platform, please select 'New' option.",
      buttons: [
        {
          text: 'Preloaded',
          handler: data => {
            this.navCtrl.push(PreloadedcontractPage);
          }
        },
        {
          text: 'New',
          handler: data => {
            this.goNew();
          }
        }
      ]
    });
    alert.present();
  }
  goNew() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [

        {
          text: 'Build New Entity',
          // role: 'destructive',
          handler: () => {
            this.navCtrl.push(NewentityPage);
          }
        },
        {
          text: 'Add New Contract',
          handler: () => {
            this.navCtrl.push(NewcontractPage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
