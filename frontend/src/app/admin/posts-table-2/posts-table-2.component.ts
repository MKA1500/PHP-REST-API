import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { PostTableItem } from '../../models/post-item.model';

@Component({
  selector: 'user-table',
  templateUrl: './posts-table-2.component.html',
  styleUrls: ['./posts-table-2.component.css']
})
export class PostsTable2Component implements OnInit {

  dataSource = new UserDataSource(this.postsService);
  displayedColumns = ['id', 'title', 'lead', 'image', 'author', 'category_id', 'category_name'];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    console.log('POSTS TABLE 2');
    console.log(this.dataSource);
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private postsService: PostsService) {
    super();
  }

  connect(): Observable<PostTableItem[]> {
    return this.postsService.getPosts();
  }

  disconnect() {}
}
