import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-convert-result-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './convert-result-card.component.html',
})
export class ConvertResultCardComponent  {

  @Input()
  amount!: number;
  @Input()
  originCoin!: string;
  @Input()
  destinyCoin!: string;
  @Input()
  result!: number;

  hasData = this.amount && this.originCoin && this.destinyCoin ? true : false
}
