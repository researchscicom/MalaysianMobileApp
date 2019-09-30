import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TravelService} from '../services/travel.service';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from '../services/dialog.service';
import {NotificationService} from '../services/notification.service';
import {DlcComponent} from './dlc.component';

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
      private router: Router, private translate: TranslateService, private dialogService: DialogService,
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
  addTravel() {
    this.travelService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(DlcComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }
  onEdit(row) {
    this.travelService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    this.dialog.open(DlcComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
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
    return this.router.navigateByUrl('dashboard');
  }

}
