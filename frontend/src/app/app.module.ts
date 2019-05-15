import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { SingleComponent } from './home/single/single.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { PostsTableComponent } from './admin/posts-table/posts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminComponent,
    SingleComponent,
    SidebarComponent,
    HomeHeaderComponent,
    PostsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
