import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service'; 
import { DOCUMENTS } from '../mock-data';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list-material.component.html',
  styleUrls: ['./document-list-material.component.scss']
})
export class DocumentListMatComponent implements OnInit {;
  dataSource:Document[];
  displayedColumns = ['account', 'reportDate', 'totalQuantity', 'totalAmount', 'itemId'];

  constructor(private documentService: DocumentService) { 

  }

  click(row){
    console.log('click', row);
  }

  ngOnInit() {
    this.getDocs();
    this.documentService.change.subscribe(docs => {
      this.dataSource = docs;
    });
  }
 
  getDocs(): void {
    this.documentService.getDocuments()
    .subscribe(docs => {
      console.log('docs', docs);
      this.dataSource = docs;
    });
  }

}
