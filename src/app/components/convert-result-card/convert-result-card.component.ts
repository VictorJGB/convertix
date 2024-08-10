import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-convert-result-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltip
  ],
  templateUrl: './convert-result-card.component.html',
})
export class ConvertResultCardComponent  {

  // amount
  @Input()
  amount = 10;
  // origin coin
  @Input()
  originCoin = 'BRL';
  @Input()
  originCoinLabel = 'Brazilian Real';
  // destination coin
  @Input()
  destinyCoin = 'USD';
  @Input()
  destinyCoinLabel = 'Australian Dollar';
  // result
  @Input()
  result = 36.01;
}
