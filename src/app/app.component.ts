import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/tabs/profile/profile';
import { BillingPage } from '../pages/tabs/billing/billing';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = BillingPage;

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
