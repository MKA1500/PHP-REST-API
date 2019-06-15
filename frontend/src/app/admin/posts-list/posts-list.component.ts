import { OnInit, Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  response: any;
  articles: any[];

  constructor(private data: DataService) { }

  ngOnInit() {

    let obs = this.data.getPosts();
    obs.subscribe((res) => {
      this.response = res;
      this.articles = [...this.response.data];
      console.log(this.articles);
    });
  }
}
