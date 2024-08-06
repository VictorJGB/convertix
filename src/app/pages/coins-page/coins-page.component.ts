import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'coins-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './coins-page.component.html',
  styleUrl: './coins-page.component.scss',
})
export class CoinsPageComponent implements OnInit {

  ngOnInit(): void { }

}
