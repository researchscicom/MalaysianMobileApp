import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QRCodePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  prevPage() {
    return this.router.navigateByUrl('dashboard');
  }

}
