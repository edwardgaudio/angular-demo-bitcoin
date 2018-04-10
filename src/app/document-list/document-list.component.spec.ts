import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DocumentListComponent } from './document-list.component';
import { RouterModule } from '@angular/router';
import { CoinService } from '../coin.service';
import { HttpClientModule } from '@angular/common/http';

describe('DocumentListComponent', () => {
  let component: DocumentListComponent;
  let fixture: ComponentFixture<DocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ DocumentListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ CoinService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ppoop', () => {
    console.log(component, fixture);
  });
});
