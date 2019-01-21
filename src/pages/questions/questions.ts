import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  public questionIndex = 0;
  public question: any = {};
  public selectedAnswer;
  public answers = [
    [
      "Beginner: I have a basic understanding of energy products, help me find what I need",
      "Average: I understand energy products but want more detail",
      "Advanced: I am an experienced energy buyer, show me your products "
    ],
    [
      "Beginner: I have a basic understanding of energy products, help me find what I need",
      "Average: I understand energy products but want more detail",
      "Advanced: I am an experienced energy buyer, show me your products "
    ],
    [
      "Beginner: I have a basic understanding of energy products, help me find what I need",
      "Average: I understand energy products but want more detail",
      "Advanced: I am an experienced energy buyer, show me your products "
    ],
    [
      "Beginner: I have a basic understanding of energy products, help me find what I need",
      "Average: I understand energy products but want more detail",
      "Advanced: I am an experienced energy buyer, show me your products "
    ],
    [
      "Beginner: I have a basic understanding of energy products, help me find what I need",
      "Average: I understand energy products but want more detail",
      "Advanced: I am an experienced energy buyer, show me your products "
    ]
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questionIndex = navParams.data.queindex;
    this.question = navParams.data.question;
    this.selectedAnswer = navParams.data.question.answerindex


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  selectAnswer(answerIndex) {
    this.selectedAnswer = answerIndex;
    this.navParams.data.question.answerindex = answerIndex;
  }

}
