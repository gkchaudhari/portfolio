import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ResumeComponent } from '../resume/resume.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [SkillsComponent, MatStepperModule, ResumeComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    isLinear: boolean = false;
}
