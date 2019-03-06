import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading, Platform } from 'ionic-angular';


/*
  Generated class for the GlobaldataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobaldataProvider {

  public isTabHidden: boolean;
  public loading: Loading;
  public isIosPlatform: boolean;
  public deviceWidth;
  public deviceHeight
  constructor(
    public loadingCtrl: LoadingController,
    public http: Http, public plt: Platform) {
    plt.ready().then(() => {
      if (plt.is('ios')) {
        this.isIosPlatform = true;
      }
      else
        this.isIosPlatform = false;
      this.deviceWidth = plt.width();
      this.deviceHeight = plt.height();

    })


    console.log('Hello GlobaldataProvider Provider');
  }

  // tab hidden start
  settingTabHidden(value: boolean) {
    this.isTabHidden = value;
  }
  getTabHiddenStatus() {
    return this.isTabHidden;
  }

  // tab hidden end
  presentLoading() {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  dismissLoading() {
    this.loading.dismiss();
  }

}
