import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  getYourData(): Observable<any[]> {
    return this.firestore.collection('song').valueChanges();
  }

  getSong(id: string): Observable<Song | undefined> {
    const songDocument: AngularFirestoreDocument<Song> = this.firestore.doc<Song>(`song/${id}`);
    return songDocument.valueChanges();
  }
  private songsCollection: AngularFirestoreCollection<Song>;

  constructor(private firestore: AngularFirestore) {
    this.songsCollection = this.firestore.collection<Song>('song');
  }

  getSongs(): Observable<Song[]> {
    return this.songsCollection.valueChanges();
  }

  addSong(song: Song): Promise<any> {
    return this.songsCollection.add(song);
  }

  updateSong(songId: string, updatedSong: Partial<Song>): Promise<void> {
    return this.songsCollection.doc(songId).update(updatedSong);
  }

  deleteSong(songId: string): Promise<void> {
    return this.songsCollection.doc(songId).delete();
  }
}


