import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, runInInjectionContext } from '@angular/core';

// components
import { ComponentsModule } from "@components/components.module";

// material
import { MatButtonModule } from '@angular/material/button';

// services
import { HistoryService } from '@services/history.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, ComponentsModule, MatButtonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.scss',
})
export class HistoryPageComponent{
  constructor(
    private readonly historyService: HistoryService, 
    private readonly environmentInjector: EnvironmentInjector
  ) {}

  printHistory(): void {
    runInInjectionContext(this.environmentInjector, () => {
      console.log(this.historyService.getHistory())
    })
  }
}
