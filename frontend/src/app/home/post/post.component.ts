import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: {
    id: number,
    title: string;
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.post = {
      id: this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title']
    }
    this.route.params
      .subscribe(
        (params: Params) => {
          this.post.id = params['id'];
          this.post.title = params['title'];
        }
      );
  }

}
