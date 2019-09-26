import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProfileService} from '../services/profile.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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
  displayedColumns: string[] = ['nickname', 'actions'];
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(
      private dialog: MatDialog, private profileService: ProfileService, private router: Router, private translate: TranslateService
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

  prevPage() {
    return this.router.navigateByUrl('dashboard');
  }

}
