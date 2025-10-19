import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ResumeComponent } from '../resume/resume.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [ MatStepperModule, ResumeComponent, NavbarComponent, ExperienceComponent, ContactComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    isLinear: boolean = false;
}
