import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CoinService } from './coin.service';

describe('CoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [CoinService]
    });
  });

  it('should be created', inject([CoinService], (service: CoinService) => {
    expect(service).toBeTruthy();
  }));
});
