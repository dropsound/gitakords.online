import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from 'src/app/layouts/post-card/post-card.component';
import { SongComponent } from 'src/app/layouts/song/song.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent,
    SongComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
