import { Component, OnInit } from '@angular/core';
import { PetFinderService } from 'src/app/pet-finder/pet-finder.service';
import { PetFinderTokenizerService } from './pet-finder-tokenizer.service';

@Component({
  selector: 'app-pet-finder',
  templateUrl: './pet-finder.component.html',
  styleUrls: ['./pet-finder.component.css']
})
export class PetFinderComponent implements OnInit {
  pets: any = [];

  constructor(private petFinderService: PetFinderService,
    private petFinderTokenizer: PetFinderTokenizerService) { }

  ngOnInit() {
    this.petFinderTokenizer.getToken().subscribe(
      (data) => {
        console.log(`token is ${data}`);
        localStorage.setItem('token', data.token);
        localStorage.setItem('tokenexpiration', data.expiration);
      },
      error => {
        console.log(`something wrong ${error}`);
      }
    );
    // this.petFinderService.getPets()
    //   .subscribe((data: any) => {
    //     this.pets = data.results;
    //   });
  }

}
