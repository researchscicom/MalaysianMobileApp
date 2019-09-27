import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QRCodePage } from './qrcode.page';
import {MatIconModule} from '@angular/material';

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
        MatIconModule
    ],
  declarations: [QRCodePage]
})
export class QRCodePageModule {}
