import { Song } from "../entities/song.entity";
import { Iterator } from "../iterators/iterator.interface";
import { PlaylistIterator } from "../iterators/playlist.iterator";
import { Aggregate } from "./aggregate.interface";

export class Playlist implements Aggregate<Song> {
    private songs: Song[] = [];

    addSong(song: Song): void {
        this.songs.push(song);
    }

    removeSong(song: Song): void {
        this.songs = this.songs.filter((s) => s !== song);
    }

    createIterator(): Iterator<Song> {
        return new PlaylistIterator(this);
    }

    getSongs(): Song[] {
        return this.songs;
    }
}
