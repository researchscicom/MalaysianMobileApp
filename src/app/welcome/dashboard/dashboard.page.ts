import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user;
  constructor(public navCtrl: NavController, private translate: TranslateService) { }
  public title;
  public lang;
  public settings;
  public logout;
  public button1;
  public button2;
  public button3;
  public button4;
  public exit;
  public language: string;

  private _translateLanguage(language): void {
    this.translate.use(language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title 			  = this.translate.instant('dashboard.title');
      this.lang 	= this.translate.instant('dashboard.lang');
      this.settings 	= this.translate.instant('dashboard.settings');
      this.logout 	= this.translate.instant('dashboard.logout');
      this.button1 	= this.translate.instant('dashboard.button1');
      this.button2 	= this.translate.instant('dashboard.button2');
      this.button3 	= this.translate.instant('dashboard.button3');
      this.button4 	= this.translate.instant('dashboard.button4');
      this.exit 	= this.translate.instant('dashboard.exit');
    }, 250);
  }
  ngOnInit() {
    this.language = localStorage.getItem('language');
    this.user = localStorage.getItem('user');
    this._translateLanguage(this.language);
  }

  prevPage() {
    return this.navCtrl.navigateRoot('instruction');
  }
  loadProfile() {
     return this.navCtrl.navigateRoot('profile-list');
  }
  loadDLC() {
    return this.navCtrl.navigateRoot('dlc');
  }
  loadQR() {
    return this.navCtrl.navigateRoot('qrcode');
  }
  goHome() {
    return this.navCtrl.navigateRoot('home');
  }
  logOut() {
    localStorage.setItem('token', null);
    localStorage.setItem('user', null);
    return this.navCtrl.navigateRoot('home');
  }
}
