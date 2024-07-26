export class Song {
    constructor(
        private title: string,
        private artist: string,
        private duration: number
    ) {}

    getTitle(): string {
        return this.title;
    }

    getArtist(): string {
        return this.artist;
    }

    getDuration(): number {
        return this.duration;
    }
}
