import { IEvent, Event } from './../models/event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() eventInfo: IEvent = new Event();

  constructor() { }

  ngOnInit(): void {
    console.log(this.eventInfo);
  }

}
