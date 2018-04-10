import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';

import { DocumentListComponent } from './document-list/document-list.component';

import { DocumentListMatComponent } from './document-list-material/document-list-material.component';
import { CoinService } from './coin.service';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { DocumentService } from './document.service';


@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    DocumentListMatComponent,
    DocumentDetailComponent,
    SearchFormComponent
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
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [CoinService, DocumentService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
