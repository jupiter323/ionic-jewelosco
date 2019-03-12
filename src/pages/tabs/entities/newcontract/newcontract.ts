import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ModalController } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';
import {
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { AuctionPage } from '../../../auction/auction';

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
  user = { signaturedate: "", startdate: "" }
  date: Date = new Date();
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private menuCtl: MenuController, private gs: GlobaldataProvider,
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


  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date: any = a.getDate();
    date = (date.toString().length == 1) ? ('0' + date) : date
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = month + ' ' + date + ', ' + year;
    return time;
  }
  openCalendar(kind) {
    const options: CalendarModalOptions = {
      title: kind == 1 ? 'Signature date' : "Start Date",
      defaultDate: this.date
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date, type) => {
      if (type === 'done') {
        this.date = date.dateObj;
      }
      console.log(date);
      console.log('type', type);
      if (date) {
        if (kind == 1)
          this.user.signaturedate = this.timeConverter(date.time);
        else

          this.user.startdate = this.timeConverter(date.time);
      }
    })

  }

}
