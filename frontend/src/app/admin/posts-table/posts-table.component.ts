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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: PostsTableDataSource;
  response: any;
  displayedColumns = ['id', 'title', 'lead', 'image', 'author', 'category_id', 'category_name'];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dataSource = new PostsTableDataSource(this.paginator, this.sort);
    console.log('ADMIN DATA SOURCE', this.dataSource);

    let obs = this.data.getPosts();
    obs.subscribe((res) => {
      this.response = res;
      console.log('ADMIN RESPONSE:', this.response.data);
      this.dataSource.data = [...this.response.data];
      console.log('this.dataSource.data', this.dataSource.data);
    });
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
