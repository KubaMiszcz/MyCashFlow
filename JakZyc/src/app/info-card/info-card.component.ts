import { IEvent } from './../models/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  event: IEvent;

  eventId = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
