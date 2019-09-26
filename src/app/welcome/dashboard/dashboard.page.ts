import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }
  public title;
  public button1;
  public button2;
  public button3;
  public button4;
  public language: string;

  private _translateLanguage(): void {
    this.translate.use(this.language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title 			  = this.translate.instant('dashboard.title');
      this.button1 	= this.translate.instant('dashboard.button1');
      this.button2 	= this.translate.instant('dashboard.button2');
      this.button3 	= this.translate.instant('dashboard.button3');
      this.button4 	= this.translate.instant('dashboard.button4');
    }, 250);
  }
  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage();
  }

  prevPage() {
    return this.router.navigateByUrl('instruction');
  }
  loadProfile() {
     return this.router.navigateByUrl('profile-list');
  }
}
