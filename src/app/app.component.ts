import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private iab: InAppBrowser,
    private socialSharing: SocialSharing
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public testInnap(): void {
    this.iab.create('https://ionicframework.com/', '_system');
  }

  public testSocialShare() {
    this.socialSharing.shareViaFacebook('https://wkm.com.br');
  }
}

