import { Movie } from './../../dto/movie';
import { MovieService } from './../../providers/movie.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  genreSelected: string;

  movieList: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    // console.log("Menu page");
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
      // console.log(this.movieList);
    });
  }

  //Get distinct genre
  getGenre(){
    let mergingGenreArray: string[] = [];
    let uniqueGenreArray: string[] = [];
    for (let entry of this.movieList) {
      const genreArray: string[] = entry.genres;
      mergingGenreArray = mergingGenreArray.concat(genreArray);
    }
    uniqueGenreArray = mergingGenreArray.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    return uniqueGenreArray;
  }

  chosen(genreClicked: string){
    this.genreSelected = genreClicked;
    // console.log(genreClicked);
  }

}
