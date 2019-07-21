import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsUrl = 'http://localhost/PHP-REST-API/backend/api/post/read.php';
  private singleUrl = 'http://localhost/PHP-REST-API/backend/api/post/read_single.php?id=';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.postsUrl);
  }

  getSinglePost(id: number) {
    const singlePostUrl = this.singleUrl + id;
    console.log(singlePostUrl);
    return this.http.get(singlePostUrl);
  }
}
