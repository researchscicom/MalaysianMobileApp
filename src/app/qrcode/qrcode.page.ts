import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {ProfileService} from '../services/profile.service';
import {DlcComponent} from '../dlc/dlc.component';
import {QRCodeComponent} from './qrcode.component';
import {NotificationService} from '../services/notification.service';
import {TravelService} from '../services/travel.service';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QRCodePage implements OnInit {

  constructor(private navCtrl: NavController, private barcodeScanner: BarcodeScanner,
              private travelService: TravelService,
              private profileService: ProfileService,
              private notificationService: NotificationService,
              private modalController: ModalController) { }

  createdCode = null;
  qrData = null;
  profiles: any;
  scannedCode = null;
  ngOnInit() {
      this.profileService.getProfiles().subscribe(data => {
          this.profiles = data;
      });
  }
  prevPage() {
    return this.navCtrl.navigateRoot('dashboard');
  }
  createCode() {
      if (this.qrData != null) {
          this.profileService.getProfileByNickname(this.qrData).subscribe(data => {
              const code = {
                  travelDocNum : data.travelDocNum,
                  nationality: data.nationality,
                  createdDate: new Date()
              }
              this.createdCode = JSON.stringify(code);
              this.notificationService.success('QR Generated!');
          });
      } else {
          this.notificationService.warn('Please select the Nickname!');
      }
  }
  async scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
         this.scannedCode = JSON.parse(barcodeData.text);
         console.log('scanned : ', this.scannedCode);
         // this.travelService.getTravelByNickname(this.scannedCode).subscribe(async data => {
         //     this.travelService.populateForm(data);
         //     const modal = await this.modalController.create({
         //         component: QRCodeComponent
         //     });
         //     return await modal.present();
         //  });
      });
  }
}
