import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) {

  }

  // getData(){
  //   return this.http.get("../assets/test.JSON");
  // }

  getMovieData(){
    return this.http.get("../../assets/movies.json");
  }

}
