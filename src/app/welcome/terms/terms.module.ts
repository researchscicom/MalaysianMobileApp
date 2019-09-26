import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermsPage } from './terms.page';
import {MatCardModule, MatListModule, MatRadioModule, MatButtonModule, MatSlideToggleModule, MatIconModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: TermsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  declarations: [TermsPage]
})
export class TermsPageModule {}
