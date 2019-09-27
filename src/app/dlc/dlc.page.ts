import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dlc',
  templateUrl: './dlc.page.html',
  styleUrls: ['./dlc.page.scss'],
})
export class DlcPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  prevPage() {
    return this.router.navigateByUrl('dashboard');
  }

}
