import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// material
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatTooltipModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent{
}
