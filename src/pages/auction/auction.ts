import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, MenuController, AlertController } from 'ionic-angular';
import { AuctioninprogressPage } from '../auctioninprogress/auctioninprogress';
import { GlobaldataProvider } from '../../providers/globaldata/globaldata';
import { CalendarModalOptions, CalendarComponentOptions } from "ion2-calendar";
/**
 * Generated class for the AuctionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auction',
  templateUrl: 'auction.html',
})
export class AuctionPage {
  @ViewChild(Slides) slides: Slides;
  stepIndex
  questions: any
  answers
  selectedQuestion;
  selectedDate

  // for data picker

  public type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  public format: 'YYYY-MM-DD'
  public optionsRange: CalendarComponentOptions = {
    from: new Date(1),
    pickMode: 'range',
    color: 'primary',
    // showMonthPicker: false,
    // showToggleButtons: false,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthFormat: "MMMM YYYY",
    // monthPickerFormat: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  public optionsPicker: CalendarComponentOptions = {
    from: new Date(1),
    color: 'primary',
    // showMonthPicker: false,
    // showToggleButtons: false,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthFormat: "MMMM YYYY",
    // monthPickerFormat: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  public optionsModalRange: CalendarModalOptions = {
    from: new Date(1),
    pickMode: 'range',
    color: 'primary',
    // showMonthPicker: false,
    // showToggleButtons: false,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthFormat: "MMMM YYYY",
    // monthPickerFormat: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private gs: GlobaldataProvider,
    private menuCtl: MenuController,
    private altCtrl: AlertController
  ) {
  }

  ionViewWillLoad() {
    this.selectedQuestion = undefined;
    this.stepIndex = 1;
    this.questions = [
      {
        des: "How would you rate your energy expertise?",
        answerindex: 0
      },
      {
        des: "When planning your energy spend, which statement aligns with your business profile?",
        answerindex: 0
      },
      {
        des: "How often do your business' operations and energy needs change?",
        answerindex: 0
      }
    ]
    this.answers = [
      [
        "Beginner: I have a basic understanding of energy products, help me find what I need. ",
        "Average: I understand energy products but want more detail",
        "Advanced: I am an experienced energy buyer, show me your products "
      ],
      [
        "I need budget certainty. My price per kwh or dth cannot fluctuate each month. ",
        "My operations and energy needs  change frequently.",
        "I need budget certainty. My price per kwh or dth cannot fluctuate each month. "
      ],
      [
        "My operations and energy needs  change frequently.",
        "I need budget certainty. My price per kwh or dth cannot fluctuate each month. ",
        "My price per kwh or dth cannot fluctuate each month. "
      ]
    ]

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuctionPage');

  }
  next() {
    if (++this.stepIndex > 3) this.stepIndex = 3;
  }

  previous() {
    if (--this.stepIndex < 1) this.stepIndex = 1;

  }
  startAuction() {
    this.navCtrl.push(AuctioninprogressPage)
  }
  goAnswer(questionIndex: any) {
    this.selectedQuestion = questionIndex + 1;
    console.log(this.gs.deviceWidth, questionIndex);
    // this.slides.slideTo(this.gs.deviceWidth * questionIndex);
  }

  closeMenu() {
    this.gs.settingTabHidden(false);
    this.menuCtl.close();
  }
  openMenu() {
    this.gs.settingTabHidden(true);
    this.menuCtl.enable(true, "availability");
    this.menuCtl.open("availability");
  }
  onChangeCalendar(event: any) {
    this.closeMenu();
    let alert = this.altCtrl.create({
      title: 'Confirmation',
      message: 'You only have until 4 pm on the day your auction closes to accept in order to keep the bid offered. If a bid is not accepted by 4 pm on day of closing, a new auction will have to be started. ', buttons: [
        {
          text: 'I got it',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
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


}
