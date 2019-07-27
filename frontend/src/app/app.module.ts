import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { PostsListComponent } from './admin/posts-list/posts-list.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { PostComponent } from './home/post/post.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    SidebarComponent,
    PostsListComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    PostComponent,
    EditPostComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
