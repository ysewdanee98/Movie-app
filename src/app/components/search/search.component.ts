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
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });
    this.route.paramMap.subscribe(params => {
      this.searchMovie = params.get('searchText');
    });
  }

  searchMovie: string;

  oldSearch: string = "";
  getSearchList(){
    if(this.oldSearch != this.searchMovie){
      this.oldSearch = this.searchMovie;
      this.ratingSelected = "All";
    } else {
      //Do nothing
    }
    let listSearched: Movie[] = [];
    let title: string;
    let anoTitle: string;
    this.searchMovie = this.searchMovie.toLowerCase().trim();
    if (this.searchMovie == "") {
      //Do nothing
    } else {
      for (let entry of this.movieList) {
        title = entry.originalTitle;
        anoTitle = entry.title;
        title = title.toLowerCase().trim();
        anoTitle = anoTitle.toLowerCase().trim();
        if(title.includes(this.searchMovie)){
          listSearched.push(entry);
        }else if(anoTitle.includes(this.searchMovie)){
          listSearched.push(entry);
        }
      }
    }
    return listSearched;
  }

  public RatingStatus = {ratingSelected: "", movieByRatingList: []};
  ratingSelected: string;
  movieByRatingList: Movie[];

  changeRating(data){
    this.RatingStatus = data;
    this.ratingSelected = this.RatingStatus.ratingSelected;
    this.movieByRatingList = this.RatingStatus.movieByRatingList;
  }


}
