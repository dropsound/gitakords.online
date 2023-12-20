import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model'; // Define Song model interface if needed


@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'https://your-api-url'; // Replace with your API endpoint


  constructor(private http: HttpClient) { }

  getSongDetails(songId: string): Observable<Song> {
    const url = `${this.apiUrl}/songs/${songId}`; // API endpoint for fetching a specific song

    return this.http.get<Song>(url);
  }
}
