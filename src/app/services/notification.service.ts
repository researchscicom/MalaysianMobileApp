import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) { }

  async success(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'primary',
      duration: 2000
    });
    toast.present();
  }
  async warn(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
