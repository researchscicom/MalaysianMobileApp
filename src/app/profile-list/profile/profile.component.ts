import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {MatDialogRef} from '@angular/material';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private service: ProfileService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<ProfileComponent>
  ) {}
  products: Array<any>;

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('id').value != null) {
        this.service.updateProfile(this.service.form.get('id').value, this.service.form.value).subscribe();
        this.notificationService.success('Customer Update Successfully!');
      } else {
        this.service.saveProfile(this.service.form.value).subscribe();
        this.notificationService.success('New Customer added Successfully!');
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
