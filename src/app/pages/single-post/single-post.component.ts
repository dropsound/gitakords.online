import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from 'src/app/layouts/post-card/post-card.component';
import { CommentFormComponent } from 'src/app/comments/comment-form/comment-form.component';
import { CommentListComponent } from 'src/app/comments/comment-list/comment-list.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

}
