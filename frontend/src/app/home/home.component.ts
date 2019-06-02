import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  response: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    let obs = this.data.getPostsNoObservable();
    obs.subscribe((res) => {
      this.response = res;
      console.log(this.response);
    });
  }

}
