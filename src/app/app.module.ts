import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatDatepicker, 
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinService } from './coin.service';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
