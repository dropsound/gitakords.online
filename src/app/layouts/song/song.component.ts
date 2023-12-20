import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent implements OnInit {
  song$: Observable<Song | undefined> | undefined;
  songId: string = '1';
  title: string = 'Nije svejedno';

  song: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    ) {

  }
  ngOnInit(): void {
    this.songId = this.route.snapshot.paramMap.get('id') || ''; // Get the song ID from route parameters
    this.song$ = this.songService.getSong(this.title);


    this.songService.getYourData().subscribe(data => {

      this.song = data;
      console.log(data);
    });
  }

}
