import { NumberFormatStyle } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieService } from 'src/app/providers/movie.service';

export interface DialogData {
  id: string;
  title: string;
  rating: number;
}

@Component({
  selector: 'app-dialog-rating',
  templateUrl: './dialog-rating.component.html',
  styleUrls: ['./dialog-rating.component.scss']
})
export class DialogRatingComponent implements OnInit {

  constructor(private service: MovieService, public dialogRef: MatDialogRef<DialogRatingComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  id: number;
  title: string;
  rating: number;
  error: boolean;
  ngOnInit(): void {
    this.id = null;
    this.title = "";
    this.rating = null;
    this.id = Number(this.data.id);
    this.title = this.data.title;
    this.rating = this.data.rating;
    this.error = false;
  }

  onNoClick(): void {
    this.rating = null;
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (isNaN(this.rating)) {
      // console.log("Rating is not a number");
      this.error = true;
    } else {
      this.service.postRating(this.id, this.rating).subscribe((dataM: any) => {
        // console.log(dataM);
      });
      this.dialogRef.close(this.rating);
    }
  }

}
