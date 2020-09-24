import { Movie } from './../../dto/movie';
import { MovieService } from './../../providers/movie.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() genreSelected: string;
  // @Input() isGenreSelected: boolean;

  movieList: Movie[] = [];

  constructor(private service: MovieService, private route: ActivatedRoute) {
    this.genreSelected = "";
    // this.isGenreSelected = false;
  }

  ngOnInit(): void {
    //Getting data from JSON and store in movies array
    this.service.getMovieData().subscribe((dataM: any) => {
      this.movieList = dataM;
    });
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('title'));
      this.genreSelected = params.get('genre');
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

  // @Output() newMenuEvent = new EventEmitter <{genreSelected: string, isGenreSelected: boolean}>();

  chosen(genreClicked: string){
    // console.log(genreClicked);
    this.genreSelected = genreClicked;
    // this.isGenreSelected = true;
    // this.newMenuEvent.emit({genreSelected: this.genreSelected, isGenreSelected: this.isGenreSelected});
  }

}
