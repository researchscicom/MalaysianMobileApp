import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatIconModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
