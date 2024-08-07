import { Injectable } from '@angular/core';

// Http
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Coin {
  code: string;
  value: string;
}

export interface ConvertResponse {
  amount: number;
  base: string;
  date: string;
  rates: {
    USD: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  private API_URL = 'https://api.frankfurter.app';

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

  convertCoins(
    amount: number,
    from: string,
    to: string
  ): Observable<ConvertResponse> {
    /**
     * @title HTTP Call for conversions
     */

    const params = {
      amount,
      from,
      to,
    };

    return this.http.get<ConvertResponse>(`${this.API_URL}/latest`, {
      params,
    });
  }
}
