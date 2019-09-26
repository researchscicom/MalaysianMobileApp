import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileListPage } from './profile-list.page';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {ProfileComponent} from './profile/profile.component';
import {ConfirmComponent} from '../services/confirm/confirm.component';
import {DialogService} from '../services/dialog.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileListPage
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
    MatDatepickerModule
  ],
  providers: [DialogService],
  declarations: [ProfileListPage, ProfileComponent, ConfirmComponent],
  entryComponents: [ProfileComponent, ConfirmComponent]
})
export class ProfileListPageModule {}
