import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { CoinService } from '../coin.service'; 

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coins: Coin[];

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    console.log('Coin list init');
    this.getCoins();
  }
 
  getCoins(): void {
    this.coinService.getCoins()
    .subscribe(coins => {
      console.log(coins);
      this.coins = coins;
    });
  }

}
