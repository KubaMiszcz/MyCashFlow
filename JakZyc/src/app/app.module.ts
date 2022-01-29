import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CashTableComponent } from './cash-table/cash-table.component';
import { PlnPipePipe as PlnPipe } from './pipes/pln.pipe';
import { EventCardComponent } from './event-card/event-card.component';
import { NextTurnModalComponent } from './next-turn-modal/next-turn-modal.component';
import { Top100ScoreBoardComponent } from './top100-score-board/top100-score-board.component';
import { PlayerInfoPageComponent } from './player-info-page/player-info-page.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { InfoCardModalComponent } from './info-card-modal/info-card-modal.component';
import { HelpPageComponent } from './help-page/help-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    GameBoardComponent,
    NavBarComponent,
    CashTableComponent,
    PlnPipe,
    EventCardComponent,
    NextTurnModalComponent,
    Top100ScoreBoardComponent,
    InfoCardModalComponent,
    PlayerInfoPageComponent,
    FooterComponent,
    HelpPageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent,],
})
export class AppModule { }
