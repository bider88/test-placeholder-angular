import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: PostInterface[];

  constructor(
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.posts = this.activateRoute.snapshot.data.search;
  }


}
