import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  @Input() document: Document;
  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDocument();
  }
  
  getDocument(): void {
    const itemId = this.route.snapshot.paramMap.get('itemId');
    this.documentService.getDocument(itemId)
      .subscribe(doc => {
        this.document = doc;
      });
  }
  
  goBack(): void {
    this.location.back();
  }
}



