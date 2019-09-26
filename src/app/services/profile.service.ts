import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  getProfiles(): any {
    return this.http.get('http://10.15.90.196:8080/api/profile');
  }
}
