import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  url = 'http://localhost/PHP-REST-API/backend/api/post/read.php';
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get(this.url);
    obs.subscribe((res) => {
      this.response = res;
      console.log(this.response.data);
    });
  }

}
