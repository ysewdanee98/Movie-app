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
  detailsMovie: any;
  isMovieListLoaded: boolean;

  ngOnInit(): void {
    // console.log("Api Movie Details Page");
    this.idSelected = ""
    this.route.paramMap.subscribe(params => {
      this.idSelected = params.get('id');
      // console.log("From Url: " +this.idSelected);
      this.isMovieListLoaded=false;
      // console.log("List Api details loaded? " + this.isMovieListLoaded);
      this.detailsMovie = [];
      this.imageObject = [];
    });
  }

  getApiMovieDetails() {
    this.service.getApiMovieDetails(this.idSelected).subscribe((dataM: any) => {
      this.detailsMovie = dataM;
      // console.log(this.detailsMovie);
      // console.log("List Api details loaded? " + this.isMovieListLoaded);
    });
    this.service.getGalleryOfMovie(this.idSelected).subscribe(() => {
      this.imageObject = this.service.galleryList;
      // console.log(this.imageObject);
    });
    this.isMovieListLoaded=true;
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

  currentIndex: any = -1;
  showFlag: any = false;
  imageObject: Array<object>;

  showLightbox(index) {
    // console.log(index);
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    // console.log("Close full-screen");
    this.showFlag = false;
    this.currentIndex = -1;
  }

}
