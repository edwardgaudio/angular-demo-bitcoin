import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../coin';
import { CoinService } from '../coin.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  @Input() coin: Coin;
  constructor(
    private coinService: CoinService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCoin();
  }
  
  getCoin(): void {
    const symbol = this.route.snapshot.paramMap.get('symbol');
    this.coinService.getCoin(symbol)
      .subscribe(coin => this.coin = coin);
  }
  
  goBack(): void {
    this.location.back();
  }
}



