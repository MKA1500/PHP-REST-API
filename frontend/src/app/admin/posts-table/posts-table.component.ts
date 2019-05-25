import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PostsTableDataSource } from './posts-table-datasource';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PostsTableDataSource;
  response: any;
  displayedColumns = ['id', 'title', 'lead', 'image', 'author', 'category_id', 'category_name'];

  constructor(private data: DataService) { }

  ngOnInit() {
    let obs = this.data.getPosts();
    obs.subscribe((res) => {
      this.response = res;
      console.log('ADMIN RESPONSE:', this.response.data);
    });

    this.dataSource = new PostsTableDataSource(this.paginator, this.sort);
    console.log('ADMIN DATA SOURCE', this.dataSource);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
