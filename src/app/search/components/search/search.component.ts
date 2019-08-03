import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;

  constructor(
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      param => {
        console.log(param);
      }
    );
    console.log(this.search);
  }


}
