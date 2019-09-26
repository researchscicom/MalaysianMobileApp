import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {TermsPage} from '../terms/terms.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  nextPageEn() {
    localStorage.setItem('language', 'en');
    this.router.navigateByUrl('terms');
  }
  nextPageChinese() {
    localStorage.setItem('language', 'chinese');
    this.router.navigateByUrl('terms');
  }
  nextPageMalay() {
    localStorage.setItem('language', 'malay');
    this.router.navigateByUrl('terms');
  }
}
