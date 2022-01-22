import { GameService } from './services/game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JakZyc';

  constructor(
    private gameService: GameService,
  ) {

  }

  nextTurn() {
    this.gameService.nextTurn();
  }
}
