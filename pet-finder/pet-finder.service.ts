import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const tokenHttpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
    .set('Content-Type', 'application/x-www-form-urlencoded')
};

const petFinderApiURL = 'https://api.petfinder.com/v2/oauth2/token';
const petFinderSearchURL = 'https://api.petfinder.com/v2/animals';
const grantType = 'client_credentials';
const clientId = 'gAR4IK6gN1eUxuzBO4Kw7Cw4VApFAC5XLrKKyjM41yrNUoamCP';
const clientSecret = 'qOVO7iz7SVFTwyh6U2UMUxpeHwHQtfmxXNs0EUrn';
const body = new URLSearchParams();
body.set('grant_type', grantType);
body.set('client_id', clientId);
body.set('client_secret', clientSecret);
// let token = '';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
    .set('Content-Type', 'application/x-www-form-urlencoded')
};


@Injectable({
  providedIn: 'root'
})
export class PetFinderService {

  getToken(): Observable<any> {
    console.log('PetFinderService getToken() hit');
    return this.httpClient
      .post(petFinderApiURL, body.toString(), tokenHttpOptions);
  }

  getPets(): Observable<any> {
    console.log(`trying to get pets with token: ${localStorage.getItem('token')}`);
    return this.httpClient
      .get(petFinderSearchURL, httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
