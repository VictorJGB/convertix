import { Injectable } from '@angular/core';

import History from '@interfaces/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private data: History[] = [];

  getHistory(): History[] {
    return this.data;
  }

  addItem(item: History): void {
    this.data.push(item)
  }

  deleteItem(id: number): void {
    // Retrieving the item index
    const index = this.data.findIndex((item: History) => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

}
