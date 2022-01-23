import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  nextTurn() {
    this.gameService.nextTurn();
  }

}
