import { GameService } from './../services/game.service';
import { GameGoal, GAME_GOALS_LIST, IGameGoal } from './../models/goal.model';
import { INITIAL_PLAYER, IPlayer } from './../models/player.model';
import { IJob, Job, JOBS_LIST } from './../models/job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info-page',
  templateUrl: './player-info-page.component.html',
  styleUrls: ['./player-info-page.component.scss']
})
export class PlayerInfoPageComponent implements OnInit {
  player: IPlayer;

  // selectedJob = new Job();
  jobList = JOBS_LIST;

  // selectedGoal = new GameGoal();
  goalList = GAME_GOALS_LIST;

  constructor(
    private gameService: GameService,
  ) {
    let player = INITIAL_PLAYER;
  }

  ngOnInit(): void {
    this.gameService.player$.subscribe(p => {
      this.player = p
      this.player.job = this.player.job;
      this.player.goal = this.player.goal ?? new GameGoal();
    });

  }

  selectJob(event: any) {
    this.player.job = this.jobList?.find(j => j.id === Number(event.target.value)) ?? new Job();
  }

  selectGoal(event: any) {
    this.player.goal = this.goalList?.find(g => g.id === Number(event.target.value)) ?? new GameGoal();
  }

  savePlayerInfo(){
    this.gameService.updatePlayerInfo(this.player);
  }

}
