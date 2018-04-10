import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentListComponent }  from './document-list/document-list.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

import { DocumentListMatComponent }  from './document-list-material/document-list-material.component';
// import { DocumentDetailMatComponent } from './document-detail/document-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentListComponent },
  { path: 'detail/:itemId', component: DocumentDetailComponent },
  { path: 'documents-mat', component: DocumentListMatComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}