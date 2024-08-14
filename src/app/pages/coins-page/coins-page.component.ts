import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Components
import { CoinsTableComponent } from '@components/tables/coins-table/coins-table.component';

@Component({
  selector: 'app-coins-page',
  standalone: true,
  imports: [CommonModule, CoinsTableComponent],
  templateUrl: './coins-page.component.html',
  styleUrl: './coins-page.component.scss',
})
export class CoinsPageComponent{
}
