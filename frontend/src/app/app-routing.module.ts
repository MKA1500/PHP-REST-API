import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';
import { AdminComponent } from './admin/admin.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id/:title', component: PostComponent },
  { path: 'edit-post/:id/edit', component: EditPostComponent },
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
