// Context
export class AudioPlayer {
    public state: State;

    public UI: any; // Your object
    public volume: number = 30;
    public playlist: any; // Your object
    public currentSong: any; // Your object

    constructor() {
        this.state = new ReadyState(this);

        // Delegate the user entries for state.
        // this.UI = new UserInterface();
        // this.UI.lockButton.onClick(this.clickLock);
        // this.UI.playButton.onClick(this.clickPlay);
        // this.UI.nextButton.onClick(this.clickNext);
        // this.UI.prevButton.onClick(this.clickPrevious);
    }

    public changeState(state: State) {
        this.state = state;
    }

    // State responsibility methods
    public clickLock() {
        this.state.clickLock();
    }

    public clickPlay() {
        this.state.clickPlay();
    }

    public clickNext() {
        this.state.clickNext();
    }

    public clickPrevious() {
        this.state.clickPrevious();
    }

    // Context methods
    public startPlayback() {
        console.log("Start Playback");
    }

    public stopPlayback() {
        console.log("Stop Playback");
    }

    public nextSong() {
        console.log("Next song playing");
    }

    public previousSong() {
        console.log("Previous song playing");
    }

    public fastForward(time: number) {
        console.log(`The song time is forward in: ${time}`);
    }

    public rewind(time: number) {
        console.log(`The song time is rewind in: ${time}`);
    }
}

// Abstract State
export abstract class State {
    constructor(protected player: AudioPlayer) {}

    public abstract clickLock(): void;
    public abstract clickPlay(): void;
    public abstract clickNext(): void;
    public abstract clickPrevious(): void;
}

// Concrete States
export class ReadyState extends State {
    public clickLock(): void {
        this.player.changeState(new LockedState(this.player));
    }

    public clickPlay(): void {
        this.player.startPlayback();
        this.player.changeState(new PlayingState(this.player));
    }

    public clickNext(): void {
        this.player.nextSong();
    }

    public clickPrevious(): void {
        this.player.previousSong();
    }
}

export class LockedState extends State {
    public clickLock(): void {
        this.player.changeState(new PlayingState(this.player));
    }

    public clickPlay(): void {
        // locked
    }

    public clickNext(): void {
        // locked
    }

    public clickPrevious(): void {
        // locked
    }
}

export class PlayingState extends State {
    public clickLock(): void {
        this.player.changeState(new LockedState(this.player));
    }

    public clickPlay(): void {
        this.player.stopPlayback();
        this.player.changeState(new ReadyState(this.player));
    }

    public clickNext(): void {
        this.player.nextSong();
    }

    public clickPrevious(): void {
        this.player.previousSong();
    }
}

// Client Code
export class SongApplication {
    main() {
        const player = new AudioPlayer();
        console.log("READY STATE: " + (player.state instanceof ReadyState));

        player.clickPlay();
        console.log("PLAYING STATE: " + (player.state instanceof PlayingState));

        player.clickLock();
        console.log("LOCKED STATE: " + (player.state instanceof LockedState));
    }
}

const app = new SongApplication();
app.main();
