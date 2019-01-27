import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailsupportPage } from '../pages/tabs/profile/messagecenter/emailsupport/emailsupport';
import { LoginPage } from '../pages/login/login';
import { MessagecenterPage } from '../pages/tabs/profile/messagecenter/messagecenter';
import { CallsupportPage } from '../pages/tabs/profile/messagecenter/callsupport/callsupport';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = CallsupportPage;

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
