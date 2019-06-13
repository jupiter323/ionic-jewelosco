import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';
/**
 * Generated class for the PkemailsupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pkemailsupport',
  templateUrl: 'pkemailsupport.html',
})
export class PkemailsupportPage {
  isFocusEmail: boolean
  isFocusDes: boolean
  public supportFormData: any =
    {}


  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public gs: GlobaldataProvider, private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailsupportPage');
  }
  isFocus(kind) {
    switch (kind) {
      case "input":
        this.isFocusEmail = true
        break;
      case "text":
        this.isFocusDes = true
        break;
    }

  }
  isBlur(kind) {
    switch (kind) {
      case "input":
        this.isFocusEmail = false
        break;
      case "text":
        this.isFocusDes = false
        break;
    }

  }

  attache() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: 'Camera',
          // role: 'destructive',
          handler: () => {
          }
        },
        {
          text: 'Photo & Video Library',
          handler: () => {
          }
        },
        {
          text: 'Document',
          handler: () => {
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
  request() {

  }

}
