import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  url = 'http://localhost/PHP-REST-API/backend/api/post/read.php';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }
  // getPost(postId) {
  //   return this.http.get(''+userId);
  // }
}
