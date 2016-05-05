import { Component } from '@angular/core';
import { JobsComponent } from "./jobs.component";
import { StepsComponent } from "./steps.component";

@Component({
  moduleId: module.id,
  selector: 'autostation-app',
  templateUrl: 'autostation.component.html',
  styleUrls: ['autostation.component.css'],
  directives: [JobsComponent, StepsComponent]
})
export class AutostationAppComponent {
  title = 'Welcome to Automation Station';
}
