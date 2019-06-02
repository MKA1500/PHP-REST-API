import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  dataSource = new UserDataSource(this.dataService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.dataService.getUser();
  }

  disconnect() {}
}
