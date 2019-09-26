import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileListPage } from './profile-list.page';
import {MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';

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
    MatTableModule
  ],
  declarations: [ProfileListPage]
})
export class ProfileListPageModule {}
