import { CommonModule } from '@angular/common';
import {
  Component,
  EnvironmentInjector,
  runInInjectionContext,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// material
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// interfaces
import ConvertHistory from '@interfaces/history';

// services
import { HistoryService } from '@services/history.service';

@Component({
  selector: 'app-history-table',
  standalone: true,
  templateUrl: './history-table.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class HistoryTableComponent {
  displayedColumns: string[] = [
    'id',
    'originCoin',
    'destinationCoin',
    'amount',
    'result',
    'actions',
  ];
  dataSource!: MatTableDataSource<ConvertHistory>;

  constructor(
    private readonly historyService: HistoryService,
    private readonly envInjector: EnvironmentInjector
  ) {
    runInInjectionContext(this.envInjector, () => {
      this.historyService
        .getHistory()
        .subscribe(
          (history) => (this.dataSource = new MatTableDataSource(history))
        );
    });
  }

  deleteItem(index: number): void {
    try {
      this.historyService.deleteItem(index);
    } catch (e) {
      console.log(e);
    }

    // Updating changed data
    runInInjectionContext(this.envInjector, () => {
      this.historyService
        .getHistory()
        .subscribe(
          (history) => (this.dataSource = new MatTableDataSource(history))
        );
    });
  }
}
