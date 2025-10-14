import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './projects/project/project.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'resume',
        component:ResumeComponent
    },
    {
        path:'project',
        component:ProjectComponent
    },
    {
        path:'resume',
        component:ResumeComponent
    }
];
