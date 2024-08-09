import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule, MatTooltipModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  github = faGithub;
  link = faArrowUpRightFromSquare;
}
