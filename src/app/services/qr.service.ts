import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:8080/api'
  getQRImage(imageId) {
    return this.http.get(this.baseURL + '/downloadFile/' + imageId);
  }
  saveQRImage(imageFile: File) {
    return this.http.post( this.baseURL + '/uploadFile', imageFile);
  }
}
