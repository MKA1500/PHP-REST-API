import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;
  post: any;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    console.log('single post id', this.id);

    let obs = this.data.getSinglePost(this.id);
    obs.subscribe((res) => {
      this.post = res;
      console.log('single post response: ', this.post);
    });
    //
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = params['id'];
    //     }
    //   );
  }

}
