import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

const tokenHttpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
    .set('Content-Type', 'application/x-www-form-urlencoded')
};

const petFinderApiURL = 'https://api.petfinder.com/v2/oauth2/token';
const petFinderSearchURL = 'https://api.petfinder.com/v2';
const grantType = 'client_credentials';
const clientId = 'gAR4IK6gN1eUxuzBO4Kw7Cw4VApFAC5XLrKKyjM41yrNUoamCP';
const clientSecret = 'qOVO7iz7SVFTwyh6U2UMUxpeHwHQtfmxXNs0EUrn';
const body = new URLSearchParams();
body.set('grant_type', grantType);
body.set('client_id', clientId);
body.set('client_secret', clientSecret);

@Injectable({
  providedIn: 'root'
})
export class PetFinderTokenizerService implements OnInit {
  ngOnInit(): void {}

  getToken(): Observable<any> {
    console.log('PetFinderService getToken() hit');
    return this.httpClient
      .post(petFinderApiURL, body.toString(), tokenHttpOptions)
      .pipe(
        tap(data => console.log('Data: ' + JSON.stringify(data)))
      );
  }

  // private handleError(err: HttpErrorResponse){
  //   let errorMessage: string;
  //   if (err.error instanceof Error){
  //     errorMessage = `An error Occured: ${err.error.message}`;
  //   } else {
  //     errorMessage = `Error from api: ${err.status}, Body: ${err.error}`;
  //   }
  // }

  constructor(private httpClient: HttpClient) { }
}
