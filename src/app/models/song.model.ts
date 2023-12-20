export interface Song {
  songId?: number;
  title: string;
  artist: string;
  album?: string;
  lyrics: string;
  chords: string;
  yearReleased?: number;
}
