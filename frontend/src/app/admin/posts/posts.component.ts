import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Post } from '../../shared/postList.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  response: any;
  dataSource = new PostDataSource(this.dataService);
  displayedColumns = ['image', 'title', 'category_name', 'author', 'lead'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('posts component');
    let obs = this.dataService.getPosts();
    obs.subscribe((res) => {
      this.response = res;
      console.log('admin', this.response);
    });
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<any> {
    return this.dataService.getPosts();
  }
  disconnect() {}
}
