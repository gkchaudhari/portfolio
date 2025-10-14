import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface INavlink{
    title:string,
    link:string
}
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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
