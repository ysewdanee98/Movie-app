import { Movie } from './../../dto/movie';
import { MovieService } from './../../providers/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieTitle: string;
  @Input() releaseDate: string;

  movieList: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });
  }

   getMovieDetails(){
    let detailMovie: Movie[] = [];
    for (let entry of this.movieList) {
      detailMovie = this.movieList.filter(m => m.title == this.movieTitle && m.releaseDate == this.releaseDate);
    }
    return detailMovie;
  }

}
