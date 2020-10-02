import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/providers/movie.service';

@Component({
  selector: 'app-api-movie-details',
  templateUrl: './api-movie-details.component.html',
  styleUrls: ['./api-movie-details.component.scss']
})
export class ApiMovieDetailsComponent implements OnInit {

  constructor(private service: MovieService, private route: ActivatedRoute) {
  }

  idSelected: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idSelected = params.get('id');
      this.service.getApiMovieDetails(this.idSelected).subscribe((dataM: any) => {
        this.detailsMovie = dataM;
        console.log(this.detailsMovie);
      });
    });
  }

  detailsMovie: any = [];

  getApiMovieDetails() {
    return this.detailsMovie;
  }

  getBackground(photo: string) {
    return {
      "background" : `url("https://image.tmdb.org/t/p/w300${photo}")`,
      "background-repeat": "no-repeat",
      "height": "600px",
      "width": "450px",
      "float": "right",
      "padding": "15px",
      "position": "relative"
    };
  }

}
