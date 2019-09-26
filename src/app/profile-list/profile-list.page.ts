import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProfileService} from '../services/profile.service';

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

  searchKey: string;
  data: any;

  constructor(
      private dialog: MatDialog, private profileService: ProfileService) { }
  ngOnInit() {
    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
    });

    this.profileService.getProfiles().subscribe(
        list => {
          this.listData = new MatTableDataSource(list);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        });
  }

}
