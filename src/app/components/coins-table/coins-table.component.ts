import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// services
import { Coin, CoinsService } from 'services/coins.service';

/**
 * @title Coins table component
 */
@Component({
  selector: 'app-coins-table',
  styleUrl: 'coins-table.component.scss',
  templateUrl: 'coins-table.component.html',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class CoinsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'code', 'coin'];
  dataSource!: MatTableDataSource<Coin>;
  coins$!: Observable<Coin[]>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private coinsService: CoinsService) {}

  ngAfterViewInit(): void {
    this.coins$ = this.coinsService.getCoins();

    // Persisting formated data
    this.coins$.subscribe({
      next: (coin) => (this.dataSource = new MatTableDataSource(coin)),
      complete: () => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  // mat-table filter function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
