import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InstructionPage } from './instruction.page';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatListModule, MatStepperModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: InstructionPage
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
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [InstructionPage]
})
export class InstructionPageModule {}
