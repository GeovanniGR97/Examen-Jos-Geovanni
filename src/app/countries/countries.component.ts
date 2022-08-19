import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private countriesService: CountriesService
  ) {}

  countries: any = [];
  ngOnInit(): void {
    this.allCountries();
  }

  allCountries() {
    this.http
      .get('https://restcountries.com/v3.1/all')
      .subscribe((listCountries: any) => {
        console.log(listCountries);
        listCountries.map((firstCountrie: any) => {
          let countrie = {
            nombre: firstCountrie.name.common,
            region: firstCountrie.region,
            bandera: firstCountrie.flags.svg,
            moneda: firstCountrie.currencies,
            mapa: firstCountrie.maps.googleMaps,
          };
          this.countries.push(countrie);
          console.log(countrie);
        });
      });
  }
}
