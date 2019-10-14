import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  isCliked = false;
  constructor(public navCtrl: NavController, private translate: TranslateService) { }
  public title;
  public description;
  public rules: any;
  public accept;
  public button;
  public language: string;

  private _translateLanguage(language): void {
    this.translate.use(language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title 			  = this.translate.instant('terms.title');
      this.description 	= this.translate.instant('terms.description');
      this.rules 	= this.translate.instant('terms.rules');
      this.accept 	= this.translate.instant('terms.accept');
      this.button 	= this.translate.instant('terms.button');
    }, 250);
  }
  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage(this.language);
  }
  clicked() {
    this.isCliked = !this.isCliked;
  }

  nextPage() {
    localStorage.setItem('token', 'null');
    return this.navCtrl.navigateRoot('instruction');
  }
  prevPage() {
    localStorage.setItem('language', '');
    return this.navCtrl.navigateRoot('home');
  }

}
