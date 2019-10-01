import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QRCodePage } from './qrcode.page';
import {
    MatButtonModule, MatCardModule,
    MatDatepickerModule,
    MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule
} from '@angular/material';
import {QRCodeComponent} from './qrcode.component';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {ProfileComponent} from '../profile-list/profile/profile.component';

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
        NgxQRCodeModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
  declarations: [ QRCodePage, QRCodeComponent],
    entryComponents: [QRCodeComponent],
    providers: [ BarcodeScanner]
})
export class QRCodePageModule {}
