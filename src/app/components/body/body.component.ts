import { Component, OnInit, Input } from '@angular/core';

// export type Item = { id: number, name: string };
export type Movie = { originalTitle: any, year: any, genres: any, releaseDate: any, storyline: any,  actors: any, imdbRating: any, posterurl: any};

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  selectedName: string = "";
  // listNewReleases: any[];

  // items: Array<Item>;
  // @Input() dataTestJson: any;

  movies: Array<Movie>;
  @Input() dataMoviesJson: any;

  constructor() { }

  ngOnInit(): void {
    // this.listNewReleases =
    //   [{id: 0, name: 'The Wailing', rating: 7.9, poster: "/assets/The Wailing.jpg"},
    //   {id: 1, name: 'Warcraft', rating: 8.1, poster: "/assets/Warcraft.jpg"},
    //   {id: 2, name: 'The Space Between Us', rating: 6.8, poster: "/assets/The Space Between Us.jpg"},
    //   {id: 3, name: 'The Witch', rating: 6.7, poster: "/assets/The Witch.jpg"},
    //   {id: 4, name: 'The Shallows', rating: 7.1, poster: "/assets/The Shallows.jpg"},
    //   {id: 5, name: 'X-Men Apocalypse', rating: 7.8, poster: "/assets/X-Men Apocalypse.jpg"},
    //   {id: 6, name: 'Me Before You', rating: 5.9, poster: "/assets/Me Before You.jpg"},
    //   {id: 7, name: 'Now You See Me 2', rating: 6.2, poster: "/assets/Now You See Me 2.jpg"},
    //   {id: 8, name: 'The Fits', rating: 7.0, poster: "/assets/The Fits.jpg"},
    //   {id: 9, name: 'Money Monster', rating: 6.8, poster: "/assets/Money Monster.jpg"}];

  }

  showSelected(newMenu: string) {
    this.selectedName = newMenu;
  }

  getGenre(){

      let mergingGenreArray: string[] = [];
      let uniqueGenreArray: string[] = [];

      const sizeArray = this.dataMoviesJson.length;
      // console.log("Size is:"+ sizeArray);

      for (let entry of this.dataMoviesJson) {
        // console.log(entry.genres);
        const genreArray: string[] = entry.genres;
        mergingGenreArray = mergingGenreArray.concat(genreArray);
      }

      uniqueGenreArray = mergingGenreArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })

      // const sizeUnquie = uniqueGenreArray.length;
      // console.log("Genre Size is:"+ sizeUnquie);
      // console.log(uniqueGenreArray);

      return uniqueGenreArray;
  }

  getList(){
    let listArray: Movie[] = [];
    // let i:number = 0;
    for (let entry of this.dataMoviesJson) {
      // console.log(entry.genres);
      if(entry.genres.includes(this.selectedName)){
        listArray.push(entry);
        // console.log(i++);
      }
    }
    return listArray;
  }



}
