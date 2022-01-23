import { ITopScore, TOP100 } from './../models/top-score.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top100-score-board',
  templateUrl: './top100-score-board.component.html',
  styleUrls: ['./top100-score-board.component.scss']
})
export class Top100ScoreBoardComponent implements OnInit {
  top100: ITopScore[] = [];

  constructor() { }

  ngOnInit(): void {
    this.top100 = TOP100.sort((a, b) => a.totalCash > b.totalCash ? -1 : a.totalCash < b.totalCash ? 1 : 0);
    let i = 1;
    this.top100.forEach(t => {
      t.placeNumber = i;
      i++;
    })

  }

}
