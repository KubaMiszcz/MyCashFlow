import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';
import { Top100ScoreBoardComponent } from './top100-score-board/top100-score-board.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'game', component: GameBoardComponent },
  { path: 'player-info', component: PlayerInfoPageComponent },
  { path: 'top-100', component: Top100ScoreBoardComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: GameBoardComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
