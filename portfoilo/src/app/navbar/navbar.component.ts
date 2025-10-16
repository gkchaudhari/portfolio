import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import { ResumeComponent } from '../resume/resume.component';
interface INavlink{
    title:string,
    link:string
}
@Component({
  selector: 'app-navbar',
  imports: [MatStepperModule,ResumeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    isLinear = false;
    nvaLinks: INavlink[] = [
        {
          title:'Dashboard',
          link:'dashboard'
        },
        {
          title:'Projects',
          link:'projects'
        },
        {
          title:'Skills',
          link:'skills'
        },
        {
          title:'Resume',
          link:'resume'
        },
    ]
}
