import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  ],
})
export class HistoryTableComponent {
  displayedColumns: string[] = ['id', 'originCoin', 'destinationCoin', 'amount', 'result'];
  dataSource!: MatTableDataSource<ConvertHistory>;

  constructor(
    private readonly historyService: HistoryService,
    private readonly envInjector: EnvironmentInjector
  ) {
    runInInjectionContext(this.envInjector, () => {
      this.historyService.getHistory().subscribe((history) => this.dataSource = new MatTableDataSource(history))
    })
  }
}
