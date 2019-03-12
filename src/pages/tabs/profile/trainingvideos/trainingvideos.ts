import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainingvideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trainingvideos',
  templateUrl: 'trainingvideos.html',
})
export class TrainingvideosPage {

  // workout-completion.page.ts
  public vidState = 'current';
  loadingVideo = false;
  @ViewChild('videoPlayer') mVideoPlayer: any;
  public emptyVideo = {
    url: 'http://techslides.com/demos/sample-videos/small.mp4',
    thumbnail: {
      url: 'assets/imgs/video1.png'
    }
  };
  // Setup Video Buffer Array, which will contain the urls that we wish to load into each video element
  public videoBuffer: any = this.emptyVideo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingvideosPage');
  }
  playVideo(kind: number) {
    let video = this.mVideoPlayer.nativeElement;
    this.loadingVideo = true;
    switch (kind) {
      case 1:
        video.src = 'http://techslides.com/demos/sample-videos/small.mp4';
        video.play();
        break;
      case 2:
        video.src = 'http://techslides.com/demos/sample-videos/small.mp4';
        video.play();
        break;
    }

  }
  stopPlay() {
    let video = this.mVideoPlayer.nativeElement;
    video.src = "";
    this.loadingVideo = false;
  }
  ionViewWillLeave() {
    this.loadingVideo = false;
  }

}
