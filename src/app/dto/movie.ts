export class Movie {
  public title: any;
  public originalTitle: any;
  public year: any;
  public genres: any;
  public releaseDate: any;
  public storyline: any;
  public actors: any;
  public imdbRating: any;
  public posterurl: any;

    /**
     * Getter $title
     * @return {any}
     */
	public get $title(): any {
		return this.title;
	}

    /**
     * Getter $originalTitle
     * @return {any}
     */
	public get $originalTitle(): any {
		return this.originalTitle;
	}

    /**
     * Getter $year
     * @return {any}
     */
	public get $year(): any {
		return this.year;
	}

    /**
     * Getter $genres
     * @return {any}
     */
	public get $genres(): any {
		return this.genres;
	}

    /**
     * Getter $releaseDate
     * @return {any}
     */
	public get $releaseDate(): any {
		return this.releaseDate;
	}

    /**
     * Getter $storyline
     * @return {any}
     */
	public get $storyline(): any {
		return this.storyline;
	}

    /**
     * Getter $actors
     * @return {any}
     */
	public get $actors(): any {
		return this.actors;
	}

    /**
     * Getter $imdbRating
     * @return {any}
     */
	public get $imdbRating(): any {
		return this.imdbRating;
	}

      /**
     * Getter $posterurl
     * @return {any}
     */
	public get $posterurl(): any {
		return this.posterurl;
  }
  
    /**
     * Setter $title
     * @param {any} value
     */
	public set $title(value: any) {
		this.title = value;
	}

    /**
     * Setter $originalTitle
     * @param {any} value
     */
	public set $originalTitle(value: any) {
		this.originalTitle = value;
	}

    /**
     * Setter $year
     * @param {any} value
     */
	public set $year(value: any) {
		this.year = value;
	}

    /**
     * Setter $genres
     * @param {any} value
     */
	public set $genres(value: any) {
		this.genres = value;
	}

    /**
     * Setter $releaseDate
     * @param {any} value
     */
	public set $releaseDate(value: any) {
		this.releaseDate = value;
	}

    /**
     * Setter $storyline
     * @param {any} value
     */
	public set $storyline(value: any) {
		this.storyline = value;
	}

    /**
     * Setter $actors
     * @param {any} value
     */
	public set $actors(value: any) {
		this.actors = value;
	}

    /**
     * Setter $imdbRating
     * @param {any} value
     */
	public set $imdbRating(value: any) {
		this.imdbRating = value;
  }

    /**
     * Setter $posterurl
     * @param {any} value
     */
	public set $posterurl(value: any) {
		this.posterurl = value;
	}

}
