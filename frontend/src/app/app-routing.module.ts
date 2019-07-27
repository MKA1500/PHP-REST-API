import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';
import { AdminComponent } from './admin/admin.component';
import { PostsListComponent } from './admin/posts-list/posts-list.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id/:title', component: PostComponent },
  { path: 'edit-post/:id/edit', component: EditPostComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', component: PostsListComponent },
    { path: ':id/edit', component: EditPostComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
