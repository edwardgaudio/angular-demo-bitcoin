import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DocumentListMatComponent } from './document-list-material.component';
import { RouterModule } from '@angular/router';
import { DocumentService } from '../document.service';
import { HttpClientModule } from '@angular/common/http';

describe('DocumentListComponent', () => {
  let component: DocumentListMatComponent;
  let fixture: ComponentFixture<DocumentListMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ DocumentListMatComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ DocumentService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListMatComponent);
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
