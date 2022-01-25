import { EVENT_TYPES, IEventType } from './../models/event-type.model';
import { IPlayer } from './../models/player.model';
import { GameService } from './../services/game.service';
import { IEvent, EVENT_LIST } from './../models/event.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  player: IPlayer;
  currentEvent: IEvent;
  eventTypes: IEventType[] = [];

  totalIncomes = 0;
  totalExpenses = 0;
  totalAssets = 0;

  // @ViewChild('content') content: any;


  constructor(
    private gameService: GameService,
    private modalService: NgbModal,
  ) {
    this.eventTypes = EVENT_TYPES;
  }

  ngOnInit(): void {
    this.gameService.player$.subscribe(e => this.player = e);
    this.gameService.currentEvent$.subscribe(e => this.currentEvent = e);
    this.gameService.totalIncomes$.subscribe(e => this.totalIncomes = e);
    this.gameService.totalExpenses$.subscribe(e => this.totalExpenses = e);
    this.gameService.totalAssets$.subscribe(e => this.totalAssets = e);
  }






  closeResult: string;


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
