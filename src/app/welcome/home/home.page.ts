import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {TermsPage} from '../terms/terms.page';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

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
