import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-table',
  templateUrl: './posts-table-2.component.html',
  styleUrls: ['./posts-table-2.component.css']
})
export class PostsTable2Component implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser();
  }

  disconnect() {}
}
