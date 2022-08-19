import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  _url = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url, {
      headers: header,
    });
  }
}
