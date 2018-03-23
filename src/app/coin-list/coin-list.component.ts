import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coin } from '../coin';
import { CoinService } from '../coin.service'; 

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coins: Coin[];
  searchForm: FormGroup;

  constructor(private coinService: CoinService, private fb: FormBuilder) { 
    this.createForm();
  }
  ngOnInit() {
    console.log('Coin list init');
    this.getCoins();
  }

  createForm() {
    this.searchForm = this.fb.group({
      accountNumber: '',
      fromDate:'',
      toDate:''
    });
  }
 
  getCoins(): void {
    this.coinService.getCoins()
    .subscribe(coins => {
      console.log(coins);
      this.coins = coins;
    });
  }

}
