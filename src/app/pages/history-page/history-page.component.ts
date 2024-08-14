import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentsModule } from "@components/components.module";

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.scss',
})
export class HistoryPageComponent{
}
