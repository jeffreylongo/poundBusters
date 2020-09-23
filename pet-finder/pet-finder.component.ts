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
        console.log(`token is ${data.access_token}`);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('tokenexpiration', data.expires_in);
      },
      error => {
        console.log(`something wrong ${error}`);
      }
    );
    this.petFinderService.getPets()
      .subscribe((data: any) => {
        this.pets = data.animals;
        if (data.pagination != null) {
          console.log(`there are ${data.pagination.total_pages} pages of animals`);
        }
        console.log(this.pets);
      });
    // this.getArticles(url: string, articles: any[]) {
    //   this.httpClient.get(url).subscribe(data => {
    //     if (articles === undefined) { articles = data['articles']; } else { articles = articles.concat(data['articles']); }
    //     if (data['next_page'] != null) {
    //       this.getArticles(data['next_page'], articles);
    //     } else { console.log('Finished'); }
    //     this.articles = articles;
    //   });
    // }
  }

}



