import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';

/**
 * Generated class for the RisktolerancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risktolerance',
  templateUrl: 'risktolerance.html',
})
export class RisktolerancePage {
  public questions: any = [
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
    },
    {
      des: "How would you rate your energy expertise?",
      answerindex: 0
    },
    {
      des: "When planning your energy spend, which statement aligns with your business profile?",
      answerindex: 0
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RisktolerancePage');
  }
  goAnswer(questionIndex: any) {
    this.navCtrl.push(QuestionsPage, { queindex: questionIndex, question: this.questions[questionIndex] })
  }

}
