import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
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
    private socialSharing: SocialSharing,
    private camera: Camera,
    private safari: SafariViewController
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

  public testCamera() {
    this.camera.getPicture({
      sourceType: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 200,
      targetHeight: 200,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true
    }).then(img => {
      console.log(img);
    }, err => {
      console.log(err);
    });
  }

  public testSafari() {
    this.safari.isAvailable()
      .then((ok: boolean) => {
        if(ok) {
          this.safari.show({
            url: 'https://wkm.com.br',
            hidden: false,
            animated: true,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#0000ff'
          })
        } else {
          console.log('Impossível acessar o safari')
        }
      })
  }
}

