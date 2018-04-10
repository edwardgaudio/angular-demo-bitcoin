import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { CoinService } from '../coin.service'; 

@Component({
  selector: 'app-coin-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  coins: Coin[];

  constructor(private coinService: CoinService) { 

  }

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
