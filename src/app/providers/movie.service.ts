import { Poster } from '../dto/poster';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../dto/movie';
import {map, mergeMap} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient, private translate: TranslateService) { }

  getMovieData(){
    return this.http.get("../../assets/movies.json");
  }

  private _movieList: Movie[];

  get movieList(): Movie[] {
    return this._movieList;
  }

  url: string= "https://api.themoviedb.org/3/movie/";
  apiKey: string= "api_key=fed69657ba4cc6e1078d2a6a95f51c8c"
  language: string= "&language="

  fetchPopularMovies(): Observable<any> {
    this._movieList = [];
    // console.log(this.url + "popular?" + this.apiKey + this.language + this.translate.currentLang.toLowerCase());
    return this.http.get(this.url + "popular?" + this.apiKey + this.language + this.translate.currentLang.toLowerCase())
      .pipe(map((data: any) => {
      if (data != null) {
        data.results.forEach(element => {
          const movie: Movie = new Movie();
          movie.id = element.id;
          movie.title = element.original_title;
          movie.imdbRating = element.vote_average;
          movie.posterurl = element.poster_path;
          this._movieList.push(movie);
        });
      }
    }));
  }

  fetchUpcomingMovies(): Observable<any> {
    this._movieList = [];
    // console.log(this.url + "upcoming?" + this.apiKey + this.language + this.translate.currentLang.toLowerCase());
    return this.http.get(this.url + "upcoming?" + this.apiKey + this.language + this.translate.currentLang.toLowerCase())
      .pipe(map((data: any) => {
      if (data != null) {
        data.results.forEach(element => {
          const movie: Movie = new Movie();
          movie.id = element.id;
          movie.title = element.original_title;
          movie.imdbRating = element.vote_average;
          movie.posterurl = element.poster_path;
          this._movieList.push(movie);
        });
      }
    }));
  }

  getApiMovieDetails(id: string) {
    // console.log(this.url + id + "?" + this.apiKey + this.language + this.translate.currentLang.toLowerCase());
    return this.http.get(this.url + id + "?" + this.apiKey + this.language + this.translate.currentLang.toLowerCase());
  }

  postRating(id: number, rating: number): Observable<any> {
    // console.log("https://api.themoviedb.org/3/authentication/guest_session/new?"+ this.apiKey);
    return this.http.get("https://api.themoviedb.org/3/authentication/guest_session/new?"+ this.apiKey).pipe(
      mergeMap((response: any) => {
        if (response) {
          // console.log(response);
          const httpOptions = {
            params: {
              api_key: "fed69657ba4cc6e1078d2a6a95f51c8c",
              guest_session_id: response.guest_session_id
            },
            headers: {
              'Content-Type': 'application/json;chatset=utf-8'
            }
          };
          const body = {
            value: rating
          };
          // console.log(this.url + id + "/rating");
          return this.http.post(this.url + id + "/rating", body, httpOptions);
        }
      })
    );
  }

  private _galleryList: Poster[];

  get galleryList(): Poster[] {
    return this._galleryList;
  }

  getGalleryOfMovie(id: string): Observable<any> {
    this._galleryList = [];
    // console.log(this.url + id + "/images?" + this.apiKey);
    return this.http.get(this.url + id + "/images?" + this.apiKey)
    .pipe(map((data: any) => {
      if (data != null) {
        data.backdrops.forEach(element => {
          const gal: Poster = new Poster();
          gal.image = "https://image.tmdb.org/t/p/original"+element.file_path;
          // console.log(gal);
          this._galleryList.push(gal);
        });
      }
    }));
  }

}
