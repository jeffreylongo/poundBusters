import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetFinderComponent } from './pet-finder/pet-finder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PetFinderService } from './pet-finder/pet-finder.service';
import { PetFinderInterceptorService } from './pet-finder/pet-finder-interceptor.service';
import { PetFinderTokenizerService } from './pet-finder/pet-finder-tokenizer.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PetFinderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [
    PetFinderService,
    PetFinderTokenizerService,
    {provide: HTTP_INTERCEPTORS, useClass: PetFinderInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
