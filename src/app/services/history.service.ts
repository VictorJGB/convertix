import { Injectable } from '@angular/core';
import ConvertHistory from '@interfaces/history';

import History from '@interfaces/history';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private data$ = new BehaviorSubject<ConvertHistory[]>([]);

  getHistory(): Observable<ConvertHistory[]> {
    return this.data$.asObservable();
  }

  addItem(item: History): void {
    const newData = [...this.data$.value, item];

    this.data$.next(newData);
  }

  deleteItem(id: number): void {
    // Retrieving the item index
    const index = this.data$.value.findIndex((item: History) => item.id === id);
    this.data$.value.splice(index, 1);
  }
}
