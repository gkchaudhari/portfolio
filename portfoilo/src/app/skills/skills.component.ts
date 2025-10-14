import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
interface ISkill{
  title:string,
  id:string
}
@Component({
  selector: 'app-skills',
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: ISkill[] = [
    { id: '1', title: 'Angular' },
    { id: '2', title: 'React' },
    { id: '3', title: 'NodeJs' },
    { id: '4', title: 'TypeScript' },
    { id: '5', title: 'MongoDB' },
    { id: '6', title: 'Tailwind CSS' },
    { id: '7', title: 'Express.js' },
    { id: '8', title: 'Next.js' },
    { id: '9', title: 'Prisma' },
  ];
}
