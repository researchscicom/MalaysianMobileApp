import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DlcPage } from './dlc.page';
import {MatIconModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: DlcPage
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
  declarations: [DlcPage]
})
export class DlcPageModule {}
