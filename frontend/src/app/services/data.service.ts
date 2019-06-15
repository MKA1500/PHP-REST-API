import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsForTableUrl = 'http://localhost/PHP-REST-API/backend/api/post/read.php';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.postsForTableUrl);
  }
}
