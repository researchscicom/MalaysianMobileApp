import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nickname: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    travelDocNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    expiryDate: new FormControl('', Validators.required),
    givenName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    identificationNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
  });
  baseUrl = 'http://10.15.90.196:8080/api/profile';
  getProfiles(): any {
    return this.http.get(this.baseUrl);
  }
  getProfileByNickname(nickname): any {
    return this.http.get(this.baseUrl + '/nickname/' + nickname );
  }
  saveProfile(profile) {
    return this.http.post(this.baseUrl, profile);
  }
  updateProfile(id, profile) {
    return this.http.put(this.baseUrl + '/' + id, profile);
  }
  deleteProfile(id) {
      return this.http.delete(this.baseUrl + '/' + id);
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nickname: '',
      nationality: '',
      country: '',
      travelDocNum: '',
      expiryDate: '',
      givenName: '',
      surname: '',
      dob: '',
      gender: '',
      identificationNo: '',
    });
  }
  populateForm(profile: Profile) {
    this.form.setValue(profile);
  }
}

export class Profile {
  id: string;
  nickname: string;
  nationality: string;
  country: string;
  travelDocNum: string;
  expiryDate: string;
  givenName: string;
  surname: string;
  dob: string;
  gender: string;
  identificationNo: string;
}
