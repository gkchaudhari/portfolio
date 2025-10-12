import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-resume',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
    
  downloadTemplate(){
    const filePath: string = "assets/docs/resume.pdf";
    const fileName: string = "resume.pdf";
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
    console.log("dowloading template...");
    document.body.removeChild(link);
  }
}
