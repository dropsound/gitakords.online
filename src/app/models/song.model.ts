export interface Song {
  songId: number;
  title: string;
  artist: string;
  album?: string; // Optional property
  lyrics: string;
  chords: string;
  yearReleased?: number;
  // Add other properties as needed
}
