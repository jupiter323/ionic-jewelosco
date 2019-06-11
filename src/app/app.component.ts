import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuctioninprogressPage } from './../pages/auctioninprogress/auctioninprogress';
import { ContracttermsPage } from './../pages/contractterms/contractterms';
import { AuctionincreatecontractPage } from '../pages/auctionincreatecontract/auctionincreatecontract';
import { HomePage } from '../pages/tabs/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#19264d');
      splashScreen.hide();
    });
  }
}
