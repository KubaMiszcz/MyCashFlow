import { GameService } from './services/game.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JakZyc';

  constructor(
    private router: Router,
  ) {
    this.router.navigate(['/player-info']);
  }
}
