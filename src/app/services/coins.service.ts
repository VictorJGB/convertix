import { Injectable } from '@angular/core';

// Http
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface CoinsResponse {
  [key: string]: string;
}

interface Coin {
  code: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://api.frankfurter.app';

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin>(`${this.API_URL}/currencies`).pipe(
      map((response, index) => {
        // converting response
        return Object.entries(response).map(([code, value]) => {
          return { code, value };
        });
      })
    );
  }
}
