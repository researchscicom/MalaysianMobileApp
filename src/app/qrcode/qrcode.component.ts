import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {TranslateService} from '@ngx-translate/core';
import {ModalController} from '@ionic/angular';
import {TravelService} from '../services/travel.service';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QRCodeComponent implements OnInit {

  constructor(private service: TravelService,
              private notificationService: NotificationService,
              public modalController: ModalController,
              public translate: TranslateService,
              private profileService: ProfileService
  ) {}
  // tslint:disable-next-line:max-line-length
  countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay'
    , 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];

  airports = ['Malaysian', 'Indian', 'Sri Lankan', 'Chinese', 'Australian', 'Yudev', 'Latin', 'American', 'Britans'];
  public travel;
  public travel2;
  public nickname;
  public arrivingFrom;
  public arrivalAirport;
  public arrivingFlight;
  public purposeOfTravel;
  public durationOfStay;
  public commercialGood;
  public currencyExceedingValue;
  public liveAnimalOrPlant;
  public derivatives;
  public firearms;
  public submit;
  public mandatory;
  public clear;
  public yes;
  public no;
  public language: string;
  profiles: any;
  private _translateLanguage(language): void {
    this.translate.use(language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.travel = this.translate.instant('add-travel.travel');
      this.travel2 = this.translate.instant('add-travel.travel2');
      this.nickname = this.translate.instant('add-travel.nickname');
      this.arrivingFrom = this.translate.instant('add-travel.arrivingFrom');
      this.arrivalAirport = this.translate.instant('add-travel.arrivalAirport');
      this.arrivingFlight = this.translate.instant('add-travel.arrivingFlight');
      this.purposeOfTravel = this.translate.instant('add-travel.purposeOfTravel');
      this.durationOfStay = this.translate.instant('add-travel.durationOfStay');
      this.commercialGood = this.translate.instant('add-travel.commercialGood');
      this.currencyExceedingValue = this.translate.instant('add-travel.currencyExceedingValue');
      this.liveAnimalOrPlant = this.translate.instant('add-travel.liveAnimalOrPlant');
      this.derivatives = this.translate.instant('add-travel.derivatives');
      this.firearms = this.translate.instant('add-travel.firearms');
      this.submit = this.translate.instant('add-travel.submit');
      this.mandatory = this.translate.instant('add-travel.mandatory');
      this.clear = this.translate.instant('add-travel.clear');
      this.yes = this.translate.instant('add-travel.yes');
      this.no = this.translate.instant('add-travel.no');
    }, 250);
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage(this.language);
    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
    });
  }

  async onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    return await this.modalController.dismiss(null, undefined);
  }
}
