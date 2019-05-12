import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './shared/data.service';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { SingleComponent } from './home/single/single.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { PostsComponent } from './admin/posts/posts.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminComponent,
    SingleComponent,
    SidebarComponent,
    PostsComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
