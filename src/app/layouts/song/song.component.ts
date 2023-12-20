import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent implements OnInit {
  songId: any;
  songDetails: Song | undefined;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    ) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.songId = params['songId'];

      this.songService.getSongDetails(this.songId).subscribe(data => {
        this.songDetails = data;
      });
    });
  }
}
