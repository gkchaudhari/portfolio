import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
interface INavlink{
    title:string,
    link:string
}
@Component({
  selector: 'app-navbar',
  imports: [MatStepperModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
}
