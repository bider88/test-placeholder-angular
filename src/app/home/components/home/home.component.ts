import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: NgForm;
  textSearch: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  search(searchForm: NgForm) {
    if (searchForm.valid) {
      console.log(searchForm.value);
      this.router.navigate(['/search', this.textSearch]);
      this.textSearch = null;
    }
  }

}
