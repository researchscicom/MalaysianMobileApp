import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000
  }

  success(msg) {
    this.config.panelClass = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }
  warn(msg) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: ['warn-snackbar']
    });
  }
}
