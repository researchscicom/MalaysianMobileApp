import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare var blowfish;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginBaseURL = 'http://sl-esol-devapp-vm.scicom.msc:8080/user-service/sessions/v1';
  lovURL = 'http://sl-esol-devapp-vm.scicom.msc:8080/setup-service/lov/v1/LOCATION';
  secretKey = 'Es01@Scic0m$2ol8';

  form: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required)
  });
  getLOVs() {
    return this.http.get(this.lovURL);
  }
  login(data) {
    const encryptedPassword = this.encrypt(data.password);
    const httpOptions = {
      headers: new HttpHeaders({
        username: data.userName,
        password: encryptedPassword,
        location: data.location,
      }),
    };
    return this.http.post(this.loginBaseURL, null, httpOptions);
  }
  encrypt(rowValue: string) {
    return blowfish.encrypt(rowValue, this.secretKey, {outputType: +0, cipherMode: +0});
  }

  decrypt(encryptedVal: string) {
    return blowfish.decrypt(encryptedVal, this.secretKey, {outputType: +0, cipherMode: +0});
  }
}
