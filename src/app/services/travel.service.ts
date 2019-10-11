import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nickname: new FormControl('', Validators.required),
    arrivingFrom: new FormControl('', Validators.required),
    arrivalAirport: new FormControl('', Validators.required),
    arrivingFlight: new FormControl('', Validators.required),
    purposeOfTravel: new FormControl('', Validators.required),
    timeUnit: new FormControl(''),
    durationOfStay: new FormControl(''),
    commercialGood: new FormControl('', Validators.required),
    currencyExceedingValue: new FormControl('', Validators.required),
    liveAnimalOrPlant: new FormControl('', Validators.required),
    derivatives: new FormControl('', Validators.required),
    firearms: new FormControl('', Validators.required)
  });
  baseUrl = 'http://10.15.90.196:8080/api/travel';
  getTravels(): any {
    return this.http.get(this.baseUrl);
  }
  getTravelByNickname(nickname): any {
    // tslint:disable-next-line:triple-equals
    if (nickname != '') {
      return this.http.get(this.baseUrl + '/nickname/' + nickname);
    }
  }
  saveTravel(travel) {
    return this.http.post(this.baseUrl, travel);
  }
  updateTravel(id, travel) {
    return this.http.put(this.baseUrl + '/' + id, travel);
  }
  deleteTravel(id) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nickname: '',
      arrivingFrom: '',
      arrivalAirport: '',
      arrivingFlight: '',
      purposeOfTravel: '',
      timeUnit: '',
      durationOfStay: '',
      commercialGood: '',
      currencyExceedingValue: '',
      liveAnimalOrPlant: '',
      derivatives: '',
      firearms: '',
    });
  }
  populateForm(travel: Travel) {
    this.form.setValue(travel);
  }
}

export class Travel {
  id: string;
  nickname: string;
  arrivingFrom: string;
  arrivalAirport: string;
  arrivingFlight: string;
  purposeOfTravel: string;
  timeUnit: string;
  durationOfStay: string;
  commercialGood: string;
  currencyExceedingValue: string;
  liveAnimalOrPlant: string;
  derivatives: string;
  firearms: string;
}

