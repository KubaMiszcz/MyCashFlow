import { INITIAL_PLAYER } from './../models/player.model';
import { IJob, Job, JOBS_LIST } from './../models/job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info-page',
  templateUrl: './player-info-page.component.html',
  styleUrls: ['./player-info-page.component.scss']
})
export class PlayerInfoPageComponent implements OnInit {
  selectedJob = new Job();
  jobList = JOBS_LIST;

  constructor() { }

  ngOnInit(): void {
    let player = INITIAL_PLAYER;
    this.selectedJob = INITIAL_PLAYER.job;
    ;
  }

  selectJob(event: any) {
    this.selectedJob = this.jobList?.find(j => j.id === Number(event.target.value)) ?? new Job();
  }

}
