import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativePageTransition: NativePageTransitions) {}

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  nextPageEn() {
    localStorage.setItem('language', 'en');
    if (localStorage.getItem('first') === 'skipped') {
      // tslint:disable-next-line:triple-equals
      if (localStorage.getItem('token') == 'null') {
        this.navCtrl.navigateRoot('login');
      } else {
        this.navCtrl.navigateRoot('dashboard');
      }
    } else {
      this.navCtrl.navigateRoot('terms');
    }
  }
  nextPageChinese() {
    localStorage.setItem('language', 'chinese');
    if (localStorage.getItem('first') === 'skipped') {
      // tslint:disable-next-line:triple-equals
      if (localStorage.getItem('token') == 'null') {
        this.navCtrl.navigateRoot('login');
      } else {
        this.navCtrl.navigateRoot('dashboard');
      }
    } else {
      this.navCtrl.navigateRoot('terms');
    }
  }
  nextPageMalay() {
    localStorage.setItem('language', 'malay');
    if (localStorage.getItem('first') === 'skipped') {
      // tslint:disable-next-line:triple-equals
      if (localStorage.getItem('token') == 'null') {
        this.navCtrl.navigateRoot('login');
      } else {
        this.navCtrl.navigateRoot('dashboard');
      }
    } else {
      this.navCtrl.navigateRoot('terms');
    }
  }
}
