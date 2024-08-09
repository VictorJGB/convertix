import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

// Components
import { CoinsTableComponent } from 'components/coins-table/coins-table.component';

@Component({
  selector: 'coins-page',
  standalone: true,
  imports: [CommonModule, CoinsTableComponent],
  templateUrl: './coins-page.component.html',
  styleUrl: './coins-page.component.scss',
})
export class CoinsPageComponent implements OnInit {
  ngOnInit(): void {}
}
