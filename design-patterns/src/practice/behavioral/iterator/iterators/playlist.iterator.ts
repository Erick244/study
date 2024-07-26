import { Playlist } from "../collections/playlist.collection";
import { Song } from "../entities/song.entity";
import { Iterator } from "./iterator.interface";

export class PlaylistIterator implements Iterator<Song> {
    private playlist: Playlist;
    private currentPosition: number = 0;

    constructor(playlist: Playlist) {
        this.playlist = playlist;
    }

    next(): Song {
        try {
            if (this.hasNext()) {
                const song = this.playlist.getSongs()[this.currentPosition];
                this.currentPosition++;
                return song;
            } else {
                throw "PlaylistIterator: No more songs to iterate over";
            }
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    hasNext(): boolean {
        return this.currentPosition < this.playlist.getSongs().length;
    }
}
