import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../dto/movie';
import { Component, OnInit} from '@angular/core';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genreSelected: string;
  movieList: Movie[] = [];
  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });
    this.route.paramMap.subscribe(params => {
      this.genreSelected = params.get('genreSel');
    });
  }

  oldGenre: string = "";
  getListMovieOfGenre(){
    if(this.oldGenre != this.genreSelected){
      this.oldGenre = this.genreSelected;
      this.ratingSelected = "All";
    } else {
      //Do nothing
    }
    let listMovieOfGenre: Movie[] = [];
    for (let entry of this.movieList) {
      if(entry.genres.includes(this.genreSelected)){
        listMovieOfGenre.push(entry);
      }
    }
    return listMovieOfGenre;
  }

  public RatingStatus = {ratingSelected: "", movieByRatingList: []};
  ratingSelected: string;
  movieByRatingList: Movie[];

  changeRating(data){
    this.RatingStatus = data;
    this.ratingSelected = this.RatingStatus.ratingSelected;
    this.movieByRatingList = this.RatingStatus.movieByRatingList;
    // console.log(this.ratingSelected);
  }

}
