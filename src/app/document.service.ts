import { Injectable, EventEmitter, Output } from '@angular/core';
import { Document } from './document';
import { DOCUMENTS } from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DocumentService {
  DOCS = DOCUMENTS;
  filteredDocs: Document[];
  @Output() change: EventEmitter<Document[]> = new EventEmitter();

  constructor() {
    this.DOCS = DOCUMENTS;
    this.filteredDocs = DOCUMENTS;
  }

  getDocuments(): Observable<Document[]> {
    return of(this.filteredDocs);
  }

  //TODO: opts should be typed to enforce this data contract when we know more about it
  findDocuments(opts) {
    this.filteredDocs = this.DOCS;
    //TODO: pretty much everything about below is temp and has to change
    if(opts.account){
      this.filteredDocs = this.filteredDocs.filter(document => document.account == opts.account);
      this.change.emit(this.filteredDocs);
    }

    if(opts.from && opts.to){
      const from = opts.from.getTime();
      const to = opts.to.getTime();

      this.filteredDocs = this.filteredDocs.filter(document => {
        const dte = new Date(document.reportDate);
        const targetDate = dte.getTime();
        console.log('dte',targetDate, from, to);
        return targetDate >= from && targetDate <= to;
      });
      this.change.emit(this.filteredDocs);
    } 
  }

  reset() {
    this.filteredDocs = this.DOCS;
    this.change.emit(this.filteredDocs);
  }

  getDocument(itemId: string): Observable<Document> {
    return of(this.DOCS.find(document => document.itemId === itemId));
  }

}
