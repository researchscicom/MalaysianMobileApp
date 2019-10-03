import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {TranslateService} from '@ngx-translate/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QRCodeComponent implements OnInit {

  constructor(private service: ProfileService,
              public modalController: ModalController,
              public translate: TranslateService
  ) {}
  isMalaysian = false;
  // tslint:disable-next-line:max-line-length
  countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay'
    , 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];

  nationalities = ['Malaysian', 'Indian', 'Sri Lankan', 'Chinese', 'Australian', 'Yudev', 'Latin', 'American', 'Britans'];

  searchKey: string;
  public profile;
  public profile2;
  public nickname;
  public isMalay;
  public nationality;
  public country;
  public travelDocNo;
  public expiryDate1;
  public givenName;
  public surname;
  public dob1;
  public male;
  public female;
  public identificationNo;
  public submit;
  public mandatory;
  public clear;
  public language: string;

  private _translateLanguage(language): void {
    this.translate.use(language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.profile = this.translate.instant('add-profile.profile');
      this.profile2 = this.translate.instant('add-profile.profile2');
      this.nickname = this.translate.instant('add-profile.nickname');
      this.isMalay = this.translate.instant('add-profile.isMalaysian');
      this.nationality = this.translate.instant('add-profile.nationality');
      this.country = this.translate.instant('add-profile.country');
      this.travelDocNo = this.translate.instant('add-profile.travelDocNo');
      this.expiryDate1 = this.translate.instant('add-profile.expiryDate');
      this.givenName = this.translate.instant('add-profile.givenName');
      this.surname = this.translate.instant('add-profile.surname');
      this.dob1 = this.translate.instant('add-profile.dob');
      this.male = this.translate.instant('add-profile.male');
      this.female = this.translate.instant('add-profile.female');
      this.identificationNo = this.translate.instant('add-profile.identificationNo');
      this.submit = this.translate.instant('add-profile.submit');
      this.mandatory = this.translate.instant('add-profile.mandatory');
      this.clear = this.translate.instant('add-profile.clear');
    }, 250);
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage(this.language);
  }
  setMalaysian() {
    if (this.service.form.get('id').value) {
      this.isMalaysian = !this.service.form.get('isMalaysian').value;
      this.service.form.get('isMalaysian').setValue(this.isMalaysian);
    } else {
      this.isMalaysian = !this.isMalaysian;
    }
  }

  async onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    return await this.modalController.dismiss();
  }
}
