import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetFinderComponent } from './pet-finder/pet-finder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PetFinderService } from './pet-finder/pet-finder.service';

export function jwtOptionsFactory(petFinderTokenService: PetFinderService) {
  return {
      tokenGetter: () => petFinderTokenService.getToken(),
      whitelistedDomains: ['http://localhost:4200/']
  };
}

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
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [PetFinderService]
      }
    }),
  ],
  providers: [PetFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
