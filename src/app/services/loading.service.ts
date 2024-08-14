import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading$ = new BehaviorSubject<boolean>(false)

  getLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  setLoading(value: boolean): void {
    this.isLoading$.next(value);
  }
}
