import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from 'src/app/layouts/post-card/post-card.component';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent
  ],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent {

}
