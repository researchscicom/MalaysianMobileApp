import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QRCodePage } from './qrcode.page';
import {MatButtonModule, MatDialogModule, MatIconModule} from '@angular/material';
import {QRCodeComponent} from './qrcode.component';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: QRCodePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
    ],
  declarations: [ QRCodePage, QRCodeComponent],
    entryComponents: [QRCodeComponent],
    providers: [ QRScanner]
})
export class QRCodePageModule {}
