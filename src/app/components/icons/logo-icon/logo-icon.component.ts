import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const LOGO_ICON = '/assets/logo-primary.svg';

@Component({
  selector: 'cc-logo-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './logo-icon.component.html',
  styleUrl: './logo-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoIconComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl(LOGO_ICON)
    );
  }
}
