import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../document.service'; 

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  
  constructor(private fb: FormBuilder, private documentService: DocumentService) {
    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      account: ['', Validators.pattern('^\\d+$')],
      fromDate:'',
      toDate:''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.searchForm.status === 'INVALID'){
      return; //Short circuit invalid forms
    }

    //TODO: this should be temp
    const opts = {
      account: this.searchForm.get('account').value, 
      from: this.searchForm.get('fromDate').value, 
      to: this.searchForm.get('toDate').value
    };
    
    this.documentService.findDocuments(opts);
  }

  reset() {
    this.searchForm.reset();
    this.documentService.reset();
  }


}
