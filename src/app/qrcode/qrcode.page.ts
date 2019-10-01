import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QRCodePage implements OnInit {

  constructor(private navCtrl: NavController, private dialog: MatDialog, private qrScanner: QRScanner) { }

  ngOnInit() {
  }
  prevPage() {
    return this.navCtrl.navigateRoot('dashboard');
  }
  onQR() {
      this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {
            if (status.authorized) {
              // camera permission was granted
              // start scanning
              const scanSub = this.qrScanner.scan().subscribe((text: string) => {
                console.log('Scanned something', text);
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
              });

            } else if (status.denied) {
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
            } else {
              // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
          })
          .catch((e: any) => console.log('Error is', e));
    }
}
