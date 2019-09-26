import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  isCliked = false;
  constructor(private router: Router, private translate: TranslateService) { }
  public title;
  public description;
  public rules: any;
  public accept;
  public button;
  public language: string;

  private _translateLanguage(): void {
    this.translate.use(this.language);
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
    this._translateLanguage();
  }
  clicked() {
    this.isCliked = !this.isCliked;
  }

  nextPage() {
    return this.router.navigateByUrl('instruction');
  }
  prevPage() {
    return this.router.navigateByUrl('home');
  }

}
