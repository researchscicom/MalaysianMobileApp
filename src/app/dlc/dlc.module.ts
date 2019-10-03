import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DlcPage } from './dlc.page';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule,
    MatPaginatorModule, MatRadioModule, MatSelectModule, MatSlideToggleModule,
    MatTableModule
} from '@angular/material';
import {DlcComponent} from './dlc.component';
import {DialogService} from '../services/dialog.service';

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
        MatIconModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        MatSlideToggleModule
    ],
  declarations: [DlcPage, DlcComponent],
    entryComponents: [DlcComponent],
    providers: [DialogService]
})
export class DlcPageModule {}
