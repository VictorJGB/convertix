import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

// services
import { CoinsService } from 'services/coins.service';

@Component({
  selector: 'converter-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.scss',
})
export class ConverterPageComponent implements AfterViewInit {
  constructor(private coinsService: CoinsService) {}

  ngAfterViewInit(): void {
    this.coinsService
      .convertCoins(10, 'BRL', 'USD')
      .subscribe((response) => console.log('convert response', response));
  }
}
