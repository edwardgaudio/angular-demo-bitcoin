import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Coin } from './coin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoinService {

  private coinsUrl = 'https://api.coinmarketcap.com/v1/ticker/';  // URL to web api
  private cachedCoins: Coin[];
  constructor(private http: HttpClient) { }

  getCoins (): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.coinsUrl)
      .pipe(
        tap(coins => {
          this.log(`fetched coins ${coins.length} of them`);
          this.cachedCoins = coins;
        }),
        catchError(this.handleError('getCoins', []))
      );
  }

  getCoin(symbol: string): Observable<Coin> {
    return of(this.cachedCoins.find(coin => coin.symbol === symbol));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CoinService message to the console */
  private log(message: string) {
    console.log('CoinService: ' + message);
  }
}