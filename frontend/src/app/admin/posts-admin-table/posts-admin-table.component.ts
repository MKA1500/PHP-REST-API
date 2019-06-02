import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { PostsTableItem } from '../../models/postsTableItem.model';

@Component({
  selector: 'posts-admin-table',
  templateUrl: './posts-admin-table.component.html',
  styleUrls: ['./posts-admin-table.component.sass']
})
export class PostsAdminTableComponent implements OnInit {

  dataSource = new UserDataSource(this.dataService);
  displayedColumns = ['id', 'title', 'lead', 'image', 'author', 'category_id', 'category_name'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataSource);
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<PostsTableItem[]> {
    var dataOne = this.dataService.getPostsForTable();
    console.log('dataOne', dataOne);
    return this.dataService.getPostsForTable()
  }

  disconnect() {}
}
