import { Song } from "../entities/song.entity";
import { Playlist } from "./../collections/playlist.collection";
export class PlaylistManager {
    private playlist: Playlist;

    constructor() {
        this.playlist = new Playlist();
    }

    addSong(song: Song): void {
        this.playlist.addSong(song);
    }

    removeSong(song: Song): void {
        this.playlist.removeSong(song);
    }

    showSongs(): void {
        const iterator = this.playlist.createIterator();

        while (iterator.hasNext()) {
            const song = iterator.next();
            console.log(
                `Title: ${song.getTitle()}, Artist: ${song.getArtist()}, Duration: ${song.getDuration()} seconds`
            );
        }
    }
}
