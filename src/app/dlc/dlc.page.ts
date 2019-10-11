import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
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
  travels: Array<any>;

  constructor(
      private dialog: MatDialog, private travelService: TravelService,
      private navCtrl: NavController, private translate: TranslateService, private dialogService: DialogService,
      private notificationService: NotificationService,
      private modalController: ModalController
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
          this.travels = list;
        });
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
          this.travels = list;
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
