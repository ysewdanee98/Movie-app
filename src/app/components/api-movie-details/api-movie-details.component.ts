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

  idSelected: string;

  ngOnInit(): void {
    // console.log("Api Movie Details Page");
    this.detailsMovie = [];
    this.idSelected = "";
    this.route.paramMap.subscribe(params => {
      this.idSelected = params.get('id');
      this.service.getApiMovieDetails(this.idSelected).subscribe((dataM: any) => {
        this.detailsMovie = dataM;
        // console.log(this.detailsMovie);
      });
    });
  }

  detailsMovie: any;

  getApiMovieDetails() {
    return this.detailsMovie;
  }

  getBackground(photo: string) {
    return {
      "background": `lightblue url("https://image.tmdb.org/t/p/w300${photo}")center center no-repeat`,
      "height": "500px",
      "width": "350px",
      "background-size": "cover",
      "float": "right",
      "padding": "15px",
      "position": "relative"
    };
  }

}
