import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-resume',
  imports: [MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  isDownloadLoading = signal<boolean>(false);

  downloadTemplate() {
    this.isDownloadLoading.set(true);
    setTimeout(() => {
      const filePath: string = 'assets/docs/resume.pdf';
      const fileName: string = 'resume.pdf';
      const link = document.createElement('a');
      link.href = filePath;
      link.download = fileName;
      link.click();
      console.log('Downloading template...');

      this.isDownloadLoading.set(false);
      document.body.removeChild(link);
    }, 2000);
  }
}
