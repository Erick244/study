import { Song } from "./entities/song.entity";
import { PlaylistManager } from "./main/app";

const app = new PlaylistManager();

const song1 = new Song("Prata", "pumapjl", 324);
const song2 = new Song("Sleep Walker", "akuma", 231);
app.addSong(song1);
app.addSong(song2);

app.showSongs();
