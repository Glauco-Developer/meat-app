import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styles: []
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter()

  rates: number[] = [1,2,3,4,5]
  
  rate: number = 0

  temporaryRating: number

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r
    this.temporaryRating = undefined
    this.rated.emit(this.rate)
  }

  previousRating(r: number) {
    if(this.temporaryRating === undefined) {
      this.temporaryRating = this.rate
    }
    this.rate = r
  }
  clear() {
    if(this.temporaryRating != undefined) {
      this.rate = this.temporaryRating
      this.temporaryRating = undefined
    }
  }

}
