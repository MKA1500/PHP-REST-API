import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostTableItem } from '../models/post-item.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private serviceUrl = 'http://localhost/PHP-REST-API/backend/api/post/read.php';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostTableItem[]> {
    return this.http.get<PostTableItem[]>(this.serviceUrl);
  }
}
