import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
};

const petFinderApiURL = 'grant_type=client_credentials&client_id=' +
  'gAR4IK6gN1eUxuzBO4Kw7Cw4VApFAC5XLrKKyjM41yrNUoamCP' +
  '&client_secret=qOVO7iz7SVFTwyh6U2UMUxpeHwHQtfmxXNs0EUrn';

@Injectable({
  providedIn: 'root'
})
export class PetFinderService {

  getToken(): Observable<any> {
    return this.httpClient.get(petFinderApiURL, httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
