import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { PostsTableItem } from '../models/postsTableItem.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsForTableUrl = 'http://localhost/PHP-REST-API/backend/api/post/read.php';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getPostsForTable(): Observable<PostsTableItem[]> {
    return this.http.get<PostsTableItem[]>(this.postsForTableUrl);
  }

  getPostsNoObservable() {
    return this.http.get(this.postsForTableUrl);
  }
}
