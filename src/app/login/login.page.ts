import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private service: LoginService,
              private notificationService: NotificationService,
              private translate: TranslateService,
              private navCtrl: NavController) {
    iconRegistry.addSvgIcon(
        'lock',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/lock-24px.svg'));
    iconRegistry.addSvgIcon(
        'person',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person-24px.svg'));
    iconRegistry.addSvgIcon(
        'location_on',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/location_on-24px.svg'));
    iconRegistry.addSvgIcon(
        'fingerprint',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fingerprint-24px.svg'));
    iconRegistry.addSvgIcon(
        'visibility',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/visibility-24px.svg'));
    iconRegistry.addSvgIcon(
        'visibility_off',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/visibility_off-24px.svg'));
  }

  hide = true;
  usable = false;
  locations;
  title;
  username;
  password;
  locationText;
  forget;
  public language: string;
  private _translateLanguage(language): void {
    this.translate.use(language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title 			  = this.translate.instant('login.title');
      this.username 	= this.translate.instant('login.username');
      this.password 	= this.translate.instant('login.password');
      this.locationText 	= this.translate.instant('login.locationText');
      this.forget 	= this.translate.instant('login.forget');
    }, 250);
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage(this.language);
    this.service.getLOVs().subscribe(location => {
      // @ts-ignore
      this.locations = location.data.lovItems;
    });
  }
  onLogin() {
    this.service.login(this.service.form.value).subscribe(data => {
      // @ts-ignore
      if (data.data != null) {
        // @ts-ignore
        localStorage.setItem('token', data.data.data.accessToken.access_token);
        // @ts-ignore
        localStorage.setItem('user', data.data.data.userName);
        this.navCtrl.navigateRoot('dashboard');
        this.service.form.reset();
        this.notificationService.success('Login Successfully!');
      } else {
        this.notificationService.warn('Invalid Username or Password!');
      }
    });
  }
  onEnable() {
    this.usable = true;
  }
  prevPage() {
    this.navCtrl.navigateRoot('home');
  }

}
