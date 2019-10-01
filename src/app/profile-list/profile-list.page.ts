import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProfileService} from '../services/profile.service';
import {TranslateService} from '@ngx-translate/core';
import {ProfileComponent} from './profile/profile.component';
import {DialogService} from '../services/dialog.service';
import {NotificationService} from '../services/notification.service';
import {ModalController, NavController} from '@ionic/angular';
import {DlcComponent} from '../dlc/dlc.component';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  profiles: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'nickname', 'actions'];
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
      private modalController: ModalController, private profileService: ProfileService,
      private navCtrl: NavController, private translate: TranslateService, private dialogService: DialogService,
      private notificationService: NotificationService
  ) { }
  searchKey: string;
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
          this.listData = new MatTableDataSource(list);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        });
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  async addProfile() {
    this.profileService.initializeFormGroup();
    const modal = await this.modalController.create({
      component: ProfileComponent
    });
    return await modal.present();
  }
  async onEdit(row) {
    this.profileService.populateForm(row);
    const modal = await this.modalController.create({
      component: ProfileComponent
    });
    return await modal.present();
  }
  refresh() {
    this.profileService.getProfiles().subscribe(
        list => {
          this.listData = new MatTableDataSource(list);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        });
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
        this.refresh();
    });
    }

  prevPage() {
    return this.navCtrl.navigateRoot('dashboard');
  }
}
