// Service Interface (ThirdParty)
export interface ThirdPartyYouTubeLib {
    listVideos(): any;
    getVideoInfo(id: number): any;
    downloadVideo(id: number): any;
}

// Service (ThirdParty)
export class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
    listVideos() {
        // Send the request for YouTube API
    }

    getVideoInfo(id: number) {
        // Get a metadata about videos
    }

    downloadVideo(id: number) {
        // Download videos from YouTube
    }
}

// Proxy
export class CachedYouTubeClass implements ThirdPartyYouTubeLib {
    private service: ThirdPartyYouTubeLib;
    private listCache: any;
    private videoCache: any;
    public needReset: boolean = false;

    constructor(service: ThirdPartyYouTubeLib) {
        this.service = service;
    }

    listVideos() {
        if (!this.listCache || this.needReset) {
            this.listCache = this.service.listVideos();
        }

        return this.listCache;
    }

    getVideoInfo(id: number) {
        if (!this.videoCache || this.needReset) {
            this.videoCache = this.service.getVideoInfo(id);
        }

        return this.videoCache;
    }

    downloadVideo(id: number) {
        // ...
    }
}

// GUI
export class YouTubeManager {
    protected service: ThirdPartyYouTubeLib;

    constructor(service: ThirdPartyYouTubeLib) {
        this.service = service;
    }

    public renderVideoPage(id: number) {
        const info = this.service.getVideoInfo(id);
        // Render the video page
    }

    public renderListPanel() {
        const list = this.service.listVideos();
        // Render the list of videos miniatures
    }

    public reactOnUserInput() {
        this.renderVideoPage(123);
        this.renderListPanel();
    }
}

// Client Code
export class Application {
    public init() {
        const service = new ThirdPartyYouTubeClass();
        const proxy = new CachedYouTubeClass(service);
        const manager = new YouTubeManager(proxy);
        manager.reactOnUserInput(); // Initial render of the GUI with cached data
    }
}

const app = new Application();
app.init();
