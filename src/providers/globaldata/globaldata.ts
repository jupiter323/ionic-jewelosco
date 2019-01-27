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

  public loading: Loading;
  public isIosPlatform:boolean;
  
  constructor(
    public loadingCtrl: LoadingController,
    public http: Http, public plt: Platform) {
      if (plt.is('ios')) {
        this.isIosPlatform = true;
      }
      else
        this.isIosPlatform = false;
    console.log('Hello GlobaldataProvider Provider');
  }


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
