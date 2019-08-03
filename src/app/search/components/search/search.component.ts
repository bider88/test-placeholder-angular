import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  posts: PostInterface[];

  constructor(
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      param => {
        this.search = param['search'];
        console.log(this.search);
      }
    );
  }


}
