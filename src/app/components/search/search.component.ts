import { MovieService } from './../../providers/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/dto/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private service: MovieService, private route: ActivatedRoute) { }

   ngOnInit(): void {
    console.log("Search page");
    this.route.paramMap.subscribe(params => {
      this.searchMovies = params.get('searchText');
    });
    console.log(this.movieList);
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
      console.log(this.movieList);
    });
  }

  searchMovies: string;

  oldSearch: string = "";

  getSearchList(){
    if(this.oldSearch != this.searchMovies){
      this.oldSearch = this.searchMovies;
      this.ratingSelected = "All";
      console.log("Search rating:" + this.ratingSelected);
    }
    let listSearched: Movie[] = [];
    let title: string;
    let anoTitle: string;
    console.log(this.searchMovies);
    this.searchMovies = this.searchMovies.toLowerCase().trim();
    if (this.searchMovies == "") {
      console.log("Not searching movie");
      this.searchMovies = " ";
    } else {
      console.log("Searching movie");
      for (let entry of this.movieList) {
        // console.log(entry.originalTitle);
        title = entry.originalTitle;
        anoTitle = entry.title;
        title = title.toLowerCase().trim();
        anoTitle = anoTitle.toLowerCase().trim();
        if(title.includes(this.searchMovies)){
          console.log("Searched movie matched");
          listSearched.push(entry);
        }else if(anoTitle.includes(this.searchMovies)){
          console.log("Searched movie matched");
          listSearched.push(entry);
        }
      }
    }
    this.listmovie = listSearched;
    return listSearched;
  }

  public RatingStatus = {ratingSelected: "", movieByRatingList: []};
  ratingSelected: string;
  movieByRatingList: Movie[];

  changeRating(data){
    this.RatingStatus = data;
    this.ratingSelected = this.RatingStatus.ratingSelected;
    this.movieByRatingList = this.RatingStatus.movieByRatingList;
    console.log("Search Rating changed");
  }

  listmovie: any;

}
