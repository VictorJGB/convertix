import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'converter-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.scss',
})
export class ConverterPageComponent implements OnInit {
  ngOnInit(): void {}
}
