import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SingleComponent } from './home/single/single.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: ':id', component: SingleComponent }
  ] },
  { path: 'admin', component: AdminComponent, children: [
  //   { path: 'admin', component: ArticlesListComponent },
  //   { path: 'new', component: NewArticleComponent },
    // { path: ':id', component: ArticleDetailComponent },
    // { path: ':id/edit', component: ArticleEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
