import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostInterface } from 'src/app/commons/interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
  providers: [PostService]
})
export class DetailPostComponent implements OnInit {

  postId: number;
  post: PostInterface;

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postId = this.activateRoute.snapshot.params['postId'];
    this.getPostByParam();
  }

  getPostByParam() {
    if (!isNaN(this.postId)) {
      this.postService.getPostByParam(this.postId).subscribe(
        res => this.post = res,
        err => console.error(err)
      );
    } else {
      console.warn('param is not a number');
      this.router.navigateByUrl('/');
    }
  }

  back() {
    window.history.back();
  }

}
