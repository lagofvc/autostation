import { Component } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'jobs',
  template: `
    <h2>Automated Jobs</h2>
    <p>{{title}}</p>
    <ul>
      <li *ngFor="#job of jobs">
        {{job}}
      </li>     
    </ul>
  `,
  providers: [JobService]
})
export class JobsComponent {
  title = "Click on a job to execute it";
  jobs;

  constructor(jobService: JobService){
    this.jobs = jobService.getJobs();
  }
}
