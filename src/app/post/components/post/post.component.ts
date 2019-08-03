import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  posts: Observable<PostInterface[]>;
  searchForm: NgForm;
  textSearch: string;
  searchParam: string;

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  search(searchForm: NgForm) {
    if (searchForm.valid) {
      this.router.navigate(['/busqueda', this.textSearch]);
      this.textSearch = null;
    }
  }

}
