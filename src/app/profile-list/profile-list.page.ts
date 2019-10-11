import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {TranslateService} from '@ngx-translate/core';
import {ProfileComponent} from './profile/profile.component';
import {DialogService} from '../services/dialog.service';
import {NotificationService} from '../services/notification.service';
import {ModalController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {
  profiles: Array<any>;
  constructor(
      private modalController: ModalController, private profileService: ProfileService,
      private navCtrl: NavController, private translate: TranslateService, private dialogService: DialogService,
      private notificationService: NotificationService
  ) { }

  public title;
  public addBtn;
  public placeholder;
  public nickname;
  public paginatorText;
  public language: string;

  private _translateLanguage(language): void {
    this.translate.use(language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title 			  = this.translate.instant('manage-profile.title');
      this.addBtn 	= this.translate.instant('manage-profile.addBtn');
      this.placeholder 	= this.translate.instant('manage-profile.placeholder');
      this.nickname 	= this.translate.instant('manage-profile.nickname');
      this.paginatorText 	= this.translate.instant('manage-profile.paginatorText');
    }, 250);
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage(this.language);
    this.profileService.getProfiles().subscribe(
        list => {
          this.profiles = list;
        });
  }
  async addProfile() {
    this.profileService.initializeFormGroup();
    const modal = await this.modalController.create({
      component: ProfileComponent
    });
    modal.onDidDismiss().then(data => {
      this.ngOnInit();
    });
    return await modal.present();
  }
  async onEdit(row) {
    this.profileService.populateForm(row);
    const modal = await this.modalController.create({
      component: ProfileComponent
    });
    modal.onDidDismiss().then(data => {
      this.ngOnInit();
    });
    return await modal.present();
  }
  remove(id: string) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
        .afterClosed().subscribe(res => {
        if (res) {
            this.profileService.deleteProfile(id).subscribe(result => {
            }, error => console.error(error));
            this.ngOnInit();
            this.notificationService.success('Successfully Deleted!');
        }
        this.ngOnInit();
    });
    }

  prevPage() {
    return this.navCtrl.navigateRoot('dashboard');
  }
}
