import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmComponent} from './confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg) {
    return this.dialog.open(ConfirmComponent, {
      data : {
        message : msg
      }
    });
  }
}
