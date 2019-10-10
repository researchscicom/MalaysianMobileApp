import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TravelService} from '../services/travel.service';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from '../services/dialog.service';
import {NotificationService} from '../services/notification.service';
import {DlcComponent} from './dlc.component';
import {ModalController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-dlc',
  templateUrl: './dlc.page.html',
  styleUrls: ['./dlc.page.scss'],
})
export class DlcPage implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  travels: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'nickname', 'actions'];
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
      private dialog: MatDialog, private travelService: TravelService,
      private navCtrl: NavController, private translate: TranslateService, private dialogService: DialogService,
      private notificationService: NotificationService,
      private modalController: ModalController
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
      this.title 			  = this.translate.instant('manage-travel.title');
      this.addBtn 	= this.translate.instant('manage-travel.addBtn');
      this.placeholder 	= this.translate.instant('manage-travel.placeholder');
      this.nickname 	= this.translate.instant('manage-travel.nickname');
      this.paginatorText 	= this.translate.instant('manage-travel.paginatorText');
    }, 250);
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage(this.language);
    this.travelService.getTravels().subscribe(
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
  async addTravel() {
    this.travelService.initializeFormGroup();
    const modal = await this.modalController.create({
      component: DlcComponent
    });
    modal.onDidDismiss().then(data => {
      this.ngOnInit();
    });
    return await modal.present();
  }
  async onEdit(row) {
    this.travelService.populateForm(row);
    const modal = await this.modalController.create({
      component: DlcComponent
    });
    modal.onDidDismiss().then(data => {
      this.ngOnInit();
    });
    return await modal.present();
  }
  refresh() {
    this.travelService.getTravels().subscribe(
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
        this.travelService.deleteTravel(id).subscribe(result => {
        }, error => console.error(error));
        this.ngOnInit();
        this.notificationService.warn('Successfully Deleted!');
      }
      this.refresh();
    });
  }

  prevPage() {
    return this.navCtrl.navigateRoot('dashboard');
  }
}
