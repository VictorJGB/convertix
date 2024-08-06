import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

// material
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatTooltipModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {}
}
