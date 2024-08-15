import { Injectable } from '@angular/core';

// envs
import { API_URL } from '@app/env/environment';

// Http
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

// interfaces
import Coin from '@interfaces/coin';
import ConvertResponse from '@interfaces/convert';


@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  url = API_URL

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin>(`${this.url}/currencies`).pipe(
      map((response) => {
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

    return this.http.get<ConvertResponse>(`${this.url}/latest`, {
      params,
    });
  }
}
