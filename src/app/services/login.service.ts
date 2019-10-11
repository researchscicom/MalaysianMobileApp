import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginBaseURL = 'http://sl-esol-devapp-vm.scicom.msc:8080/user-service/sessions/v1';
  lovURL = 'http://sl-esol-devapp-vm.scicom.msc:8080/setup-service/lov/v1/LOCATION';

  form: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required)
  });
  getLOVs() {
    return this.http.get(this.lovURL);
  }
  login(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        username: data.userName,
        password: data.password,
        location: data.location,
      }),
    };
    return this.http.post(this.loginBaseURL, null, httpOptions);
  }
}
