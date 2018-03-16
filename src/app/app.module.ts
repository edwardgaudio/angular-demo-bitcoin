import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinService } from './coin.service';


@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
