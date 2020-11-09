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

  movieList: Movie[];
  listSearched: Movie[];
  searchMovies: string;
  // isServiceLoaded: boolean;
  // isSearchListLoaded: boolean;

  constructor(private service: MovieService, private route: ActivatedRoute) { }

   async ngOnInit() {
    // console.log("Search page");
    this.searchMovies = "";
    this.movieList = [];
    // this.isServiceLoaded=false;
    await this.service.getMovieData().toPromise().then((dataM: any) => {
      this.movieList = dataM;
      // console.log(this.movieList);
      // this.isServiceLoaded=true;
      // console.log("Service loaded? " + this.isServiceLoaded);
      // console.log('Promise resolved.')
    });
    // console.log('I will not wait until promise is resolved..');
    this.route.paramMap.subscribe(async params => {
      this.searchMovies = params.get('searchText');
      // console.log("From Url: " +this.searchMovies);
      // this.isSearchListLoaded=false;
      // console.log("Search list loaded? " + this.isSearchListLoaded);
      this.listSearched = [];
      await this.getSearchList();
    });
    // console.log('I will not wait haha');
  }

  oldSearch: string = "";
  getSearchList(){
    if(this.oldSearch != this.searchMovies){
      this.oldSearch = this.searchMovies;
      this.ratingSelected = "All";
      // console.log("Search rating: " + this.ratingSelected);
    }
    let title: string;
    let anoTitle: string;
    this.searchMovies = this.searchMovies.toLowerCase().trim();
    // console.log("Search movie: " + this.searchMovies);
    if (this.searchMovies != "") {
      // console.log("Searching movie");
      for (let entry of this.movieList) {
        title = entry.originalTitle;
        anoTitle = entry.title;
        title = title.toLowerCase().trim();
        anoTitle = anoTitle.toLowerCase().trim();
        if(title.includes(this.searchMovies)){
          // console.log("Searched movie matched");
          this.listSearched.push(entry);
        }else if(anoTitle.includes(this.searchMovies)){
          // console.log("Searched movie matched");
          this.listSearched.push(entry);
        }
      }
    }
    // console.log('I waited');
    // this.isSearchListLoaded=true;
    // console.log("Search list loaded? " + this.isSearchListLoaded);
  }

  public RatingStatus = {ratingSelected: "", movieByRatingList: []};
  ratingSelected: string;
  movieByRatingList: Movie[];

  changeRating(data){
    this.RatingStatus = data;
    this.ratingSelected = this.RatingStatus.ratingSelected;
    this.movieByRatingList = this.RatingStatus.movieByRatingList;
    // console.log("Search Rating changed");
  }

}
