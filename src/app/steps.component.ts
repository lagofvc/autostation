import { Component } from '@angular/core'
import {StepService} from "./step.service";

@Component({
  selector: 'steps',
  template: `
    <h2>Sample steps for a Job</h2>
    <h4>{{description}}</h4>
    <ul>
      <li *ngFor="#step of steps">
        {{step}}
      </li>
    </ul>
    <button (click)="yoClick('yobitches')">YO!</button>
  `,
  providers: [StepService]
})

export class StepsComponent {
  description = "This would be a description of a list of automated steps";
  steps;

  constructor(stepService: StepService){
    this.steps = stepService.getSteps();
  }

  yoClick(str: String){
    alert(str)
  }
}
