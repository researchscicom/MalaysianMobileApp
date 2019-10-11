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
    this.navCtrl.navigateRoot('terms');
  }
  nextPageChinese() {
    localStorage.setItem('language', 'chinese');
    this.navCtrl.navigateRoot('terms');
  }
  nextPageMalay() {
    localStorage.setItem('language', 'malay');
    this.navCtrl.navigateRoot('terms');
  }
}
